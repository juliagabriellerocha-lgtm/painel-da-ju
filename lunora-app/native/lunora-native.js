// Lunora no iPhone: ponte entre o app web e os recursos nativos (Capacitor).
// Notificações dos blocos do dia e compromissos, voz, vibração e barra de status.
(function(){
  window.LUNORA_NATIVE = true;
  function P(){ return (window.Capacitor && window.Capacitor.Plugins) || {}; }
  function ready(fn){ if(document.readyState !== "loading") setTimeout(fn, 0); else document.addEventListener("DOMContentLoaded", fn); }

  // vibração: o iPhone não tem navigator.vibrate, então usamos o motor háptico
  navigator.vibrate = function(){ try{ P().Haptics && P().Haptics.notification({ type: "SUCCESS" }); }catch(e){} return true; };

  // voz (reconhecimento nativo do iOS, em português)
  window.lnNativeSpeech = {
    available: async function(){ try{ var r = await P().SpeechRecognition.available(); return !!(r && r.available); }catch(e){ return false; } },
    listen: function(onPartial){
      return new Promise(async function(resolve, reject){
        var S = P().SpeechRecognition; if(!S) return reject(new Error("Voz indisponível"));
        try{
          var perm = await S.checkPermissions(); if(perm.speechRecognition !== "granted") perm = await S.requestPermissions();
          if(perm.speechRecognition !== "granted") return reject(new Error("Permita o microfone e a fala em Ajustes > Lunora."));
          var last = "", hs = [], done = false;
          function finish(err){ if(done) return; done = true; hs.forEach(function(h){ h.remove(); }); err ? reject(err) : resolve(last); }
          hs.push(await S.addListener("partialResults", function(d){ if(d && d.matches && d.matches[0]){ last = d.matches[0]; onPartial && onPartial(last); } }));
          hs.push(await S.addListener("listeningState", function(d){ if(d && (d.status === "stopped" || d.state === "stopped")) setTimeout(function(){ finish(); }, 250); }));
          hs.push(await S.addListener("error", function(d){ finish(new Error((d && d.message) || "Não consegui ouvir")); }));
          await S.start({ language: "pt-BR", maxResults: 1, partialResults: true, popup: false });
          setTimeout(function(){ try{ S.stop(); }catch(e){} }, 15000); // no máximo 15 s por frase
        }catch(e){ reject(e); }
      });
    },
    stop: function(){ try{ P().SpeechRecognition.stop(); }catch(e){} }
  };

  // notificações locais: lembra 10 min antes de cada bloco e 30 min antes de cada compromisso (próximas 48 h)
  var DK = ["dom","seg","ter","qua","qui","sex","sab"];
  function readState(){
    var keys = ["lunoraCacheV1", "painelJuDadosV1"];
    for(var i=0;i<keys.length;i++){ try{ var v = localStorage.getItem(keys[i]); if(v) return JSON.parse(v); }catch(e){} }
    return null;
  }
  function at(day, hhmm, minus){ var p = String(hhmm||"").split(":"); if(p.length<2) return null; var d = new Date(day); d.setHours(+p[0], +p[1] - (minus||0), 0, 0); return d; }
  function hash(s){ var h = 0; for(var i=0;i<s.length;i++){ h = ((h<<5)-h + s.charCodeAt(i))|0; } return Math.abs(h) % 2000000000; }
  async function scheduleAll(){
    var LN = P().LocalNotifications; if(!LN) return;
    var st = readState(); if(!st) return;
    try{
      var perm = await LN.checkPermissions();
      if(perm.display !== "granted"){ var prof = st.ju && st.ju.profile; if(!prof || !prof.done) return; perm = await LN.requestPermissions(); }
      if(perm.display !== "granted") return;
      var pend = await LN.getPending(); if(pend && pend.notifications && pend.notifications.length) await LN.cancel({ notifications: pend.notifications.map(function(n){ return { id: n.id }; }) });
      var now = new Date(), list = [], blocks = (st.dayPlan && st.dayPlan.blocks) || [];
      for(var off=0; off<2; off++){
        var day = new Date(now); day.setDate(now.getDate()+off); day.setHours(0,0,0,0);
        var dk = DK[day.getDay()], key = day.getFullYear()+"-"+String(day.getMonth()+1).padStart(2,"0")+"-"+String(day.getDate()).padStart(2,"0");
        blocks.forEach(function(b){ if(b.dias && b.dias.indexOf(dk) < 0) return; var t = at(day, b.ini, 10); if(t && t > now) list.push({ id: hash("b"+key+b.ini+b.txt), title: b.txt, body: "Começa às "+b.ini+(b.fim ? " · até "+b.fim : ""), schedule: { at: t, allowWhileIdle: true } }); });
        (st.agenda||[]).forEach(function(a){ if(!a || a.date !== key || !a.time) return; var t = at(day, a.time, 30); if(t && t > now) list.push({ id: hash("a"+key+a.time+a.title), title: "📅 "+a.title, body: "Às "+a.time+(a.place ? " · "+a.place : ""), schedule: { at: t, allowWhileIdle: true } }); });
      }
      list = list.sort(function(x,y){ return x.schedule.at - y.schedule.at; }).slice(0, 60); // o iOS guarda no máximo 64
      if(list.length) await LN.schedule({ notifications: list });
    }catch(e){ console.warn("lunora: notificações", e); }
  }
  window.lnScheduleNotifications = scheduleAll;
  // Compromissos -> Calendário do iPhone. Se a conta Google estiver no iPhone (Ajustes > Calendário > Contas)
  // e for o calendário padrão, o evento aparece sozinho no Google Agenda.
  async function syncCalendar(){
    var C = P().CapacitorCalendar; if(!C) return;
    var st = readState(); if(!st || !(st.agenda||[]).length) return;
    var off = false; try{ off = localStorage.getItem("lnCalSync") === "off"; }catch(e){} if(off) return;
    var map = {}; try{ map = JSON.parse(localStorage.getItem("lnCalMap")||"{}"); }catch(e){}
    var today = new Date(); today.setHours(0,0,0,0);
    var todo = st.agenda.filter(function(a){ return a && a.id && a.date && !map[a.id] && new Date(a.date+"T00:00:00") >= today && !/^⏳/.test(a.title||""); });
    if(!todo.length) return;
    try{
      var perm = await C.requestWriteOnlyCalendarAccess(); if(!perm || perm.result !== "granted") return;
      for(var i=0;i<todo.length;i++){
        var a = todo[i], start = a.time ? new Date(a.date+"T"+a.time+":00") : new Date(a.date+"T00:00:00");
        var r = await C.createEvent({ title: a.title, location: a.place || undefined, startDate: start.getTime(),
          endDate: start.getTime() + (a.time ? 60 : 1440)*60000, isAllDay: !a.time, alerts: a.time ? [-1440, -60] : [-720], description: "Criado pela Lunora" });
        map[a.id] = (r && r.id) || "ok";
      }
      localStorage.setItem("lnCalMap", JSON.stringify(map));
    }catch(e){ console.warn("lunora: calendário", e); }
  }
  window.lnSyncCalendar = syncCalendar;


  ready(function(){
    try{ P().StatusBar && P().StatusBar.setStyle({ style: "LIGHT" }); }catch(e){}
    try{ P().SplashScreen && P().SplashScreen.hide(); }catch(e){}
    setTimeout(function(){ scheduleAll().then(syncCalendar); }, 2500);
    try{ P().App && P().App.addListener("appStateChange", function(s){ if(!s.isActive){ scheduleAll(); syncCalendar(); } }); }catch(e){}
    document.addEventListener("visibilitychange", function(){ if(document.hidden){ scheduleAll(); syncCalendar(); } });
  });
})();

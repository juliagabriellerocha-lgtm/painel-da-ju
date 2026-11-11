  // =====================================================================
  // Lunora: perfil da pessoa, criar conta e cadastro inicial (onboarding)
  // =====================================================================
  var lnSignup = false;
  var LN_AREAS = [
    ["treino","Treino","🏋️"], ["dieta","Alimentação","🥗"], ["estudos","Estudos","📚"], ["financas","Finanças","💰"],
    ["trabalho","Trabalho","💼"], ["leitura","Leitura","📖"], ["fe","Fé e espiritualidade","🙏"], ["ciclo","Ciclo menstrual","🌸"]
  ];
  function lnProfile(){ return (state && state.ju && state.ju.profile) || null; }
  function lnName(){ var p = lnProfile(); return p && p.name ? p.name : ""; }
  // Áreas que a pessoa escolheu. Antes do cadastro, tudo aparece.
  function lnArea(key){
    var p = lnProfile(); if(!p || !Array.isArray(p.areas)) return true;
    var map = {dieta:"dieta", treino:"treino", leitura:"leitura", fe:"fe", financas:"financas", ciclo:"ciclo", metas:true, rotina:true, compras:true, progresso:true};
    var k = map[key]; if(k===true) return true; if(!k) k = key;
    return p.areas.indexOf(k) > -1;
  }
  function lnAvatar(big){
    var n = lnName(), ini = n ? n.trim().charAt(0).toUpperCase() : "";
    return '<span class="ln-avatar'+(big?" big":"")+'" aria-hidden="true">'+(ini ? esc(ini) : '<span class="ln-moon sm"></span>')+'</span>';
  }
  function lnRefreshTop(){ var a = document.querySelector(".ju-avatar"); if(a) a.innerHTML = lnAvatar(); }
  function lnSetMode(signup){
    lnSignup = !!signup;
    var b = document.getElementById("accountMode"), t = document.getElementById("accountTitle"), go = document.getElementById("accountLogin"), pw = document.getElementById("sbPassword");
    if(b) b.textContent = lnSignup ? "Já tem conta? Entrar" : "Ainda não tem conta? Criar conta";
    if(t) t.textContent = lnSignup ? "Criar conta na Lunora" : "Entrar na Lunora";
    if(go) go.textContent = lnSignup ? "Criar conta" : "Entrar";
    if(pw) pw.setAttribute("autocomplete", lnSignup ? "new-password" : "current-password");
    var f = document.getElementById("accountForgot"); if(f) f.hidden = lnSignup;
  }
  function lnMaybeOnboard(){
    if(!state) return;
    var p = lnProfile();
    if(!p || !p.done){ lnOnboard(); }
    lnRefreshTop();
  }
  function lnAddMin(hhmm, min){
    var p = String(hhmm||"07:00").split(":"), t = (+p[0])*60 + (+p[1]||0) + min; t = ((t % 1440) + 1440) % 1440;
    return String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0");
  }
  // Monta a rotina-base do dia a partir das respostas (a pessoa ajusta depois em Horários).
  function lnBuildBlocks(p){
    var ALL = ["seg","ter","qua","qui","sex","sab","dom"], UTEIS = ["seg","ter","qua","qui","sex"], b = [], n = 0;
    function add(ini, fim, txt, area, dias){ b.push({id:"ln"+(++n), ini:ini, fim:fim, txt:txt, area:area, dias:dias||ALL}); }
    var a = p.areas, w = p.wake || "06:30", sl = p.sleep || "22:30";
    if(a.indexOf("fe")>-1) add(w, lnAddMin(w,20), "Oração da manhã", "fe");
    if(a.indexOf("dieta")>-1){ add(lnAddMin(w,30), lnAddMin(w,60), "Café da manhã", "diet"); add("12:00","13:00","Almoço","diet", ALL); add(lnAddMin(sl,-180), lnAddMin(sl,-150), "Jantar", "diet"); }
    if(a.indexOf("treino")>-1){ var th = {manha:lnAddMin(w,70), tarde:"17:30", noite:"19:00"}[p.treinoTurno||"manha"]; add(th, lnAddMin(th,60), "Treino do dia", "treino", ["seg","ter","qua","qui","sex","sab"]); }
    if(a.indexOf("trabalho")>-1 && p.workIni && p.workFim){ add(p.workIni, p.workFim, "Trabalho", "profissional", UTEIS); }
    if(a.indexOf("estudos")>-1){ var eh = p.estudoHora || "20:00"; add(eh, lnAddMin(eh,60), "Bloco de estudo", "academico", UTEIS); }
    if(a.indexOf("leitura")>-1) add(lnAddMin(sl,-60), lnAddMin(sl,-40), "Leitura", "leitura");
    add(lnAddMin(sl,-30), sl, "Rotina do sono — desacelerar", "rotina");
    add("19:00","19:30","Revisão da semana", "projecoes", ["dom"]);
    return b;
  }
  function lnHabits(p){
    var a = p.areas, h = [{id:"h_agua", nome:"Beber 2 L de água", em:"💧", periodo:"manha", tipo:"agua"}];
    if(a.indexOf("fe")>-1) h.unshift({id:"h_oracao", nome:"Oração", em:"🙏", periodo:"manha"});
    if(a.indexOf("treino")>-1) h.push({id:"h_treino", nome:"Treino do dia", em:"🏋️", periodo:"manha", tipo:"treino"});
    if(a.indexOf("dieta")>-1) h.push({id:"h_cardapio", nome:"Seguir o cardápio", em:"🥗", periodo:"tarde"});
    if(a.indexOf("estudos")>-1) h.push({id:"h_estudo", nome:"Bloco de estudo", em:"📚", periodo:"noite"});
    if(a.indexOf("financas")>-1) h.push({id:"h_gastos", nome:"Anotar os gastos do dia", em:"💰", periodo:"noite"});
    if(a.indexOf("leitura")>-1) h.push({id:"h_leitura", nome:"Ler 20 minutos", em:"📖", periodo:"noite"});
    h.push({id:"h_sono", nome:"Rotina do sono", em:"🌙", periodo:"noite"});
    return h;
  }
  function lnOnboard(){
    var p = lnProfile() || {}, areas = Array.isArray(p.areas) ? p.areas : ["treino","dieta","estudos","financas"];
    openSheet("Bem-vinda à Lunora 🌙",
      '<p class="ju-muted" style="margin:-4px 0 14px;font-size:13px">Responda rapidinho e a Lunora monta sua rotina, seus hábitos e o seu painel. Dá para mudar tudo depois.</p>'+
      '<label class="ju-field">Como você quer ser chamada?<input name="nome" autocomplete="given-name" placeholder="Seu nome" value="'+esc(p.name||"")+'"></label>'+
      '<div class="ju-field">O que você quer organizar?<div class="ln-areas">'+LN_AREAS.map(function(x){
        return '<label class="ln-area"><input type="checkbox" name="area" value="'+x[0]+'"'+(areas.indexOf(x[0])>-1?" checked":"")+'><span>'+x[2]+' '+esc(x[1])+'</span></label>'; }).join("")+'</div></div>'+
      '<div class="ju-two"><label class="ju-field">Acordo às<input name="wake" type="time" value="'+esc(p.wake||"06:30")+'"></label><label class="ju-field">Durmo às<input name="sleep" type="time" value="'+esc(p.sleep||"22:30")+'"></label></div>'+
      '<div class="ju-two" data-if="trabalho"><label class="ju-field">Trabalho das<input name="workIni" type="time" value="'+esc(p.workIni||"08:00")+'"></label><label class="ju-field">até<input name="workFim" type="time" value="'+esc(p.workFim||"18:00")+'"></label></div>'+
      '<div class="ju-field" data-if="treino">Prefiro treinar'+seg("treinoTurno", [["manha","De manhã"],["tarde","À tarde"],["noite","À noite"]], p.treinoTurno||"manha")+'</div>'+
      '<label class="ju-field" data-if="estudos">Horário de estudo<input name="estudoHora" type="time" value="'+esc(p.estudoHora||"20:00")+'"></label>'+
      '<label class="ju-field">Meta de sono (horas)<input name="sleepGoal" type="number" min="5" max="10" step="0.5" value="'+(+J().sleepGoal||8)+'"></label>',
      function(f){
        var nome = f.nome.value.trim(); if(!nome) return "Conte como você quer ser chamada.";
        var ar = [].slice.call(f.querySelectorAll('input[name="area"]:checked')).map(function(i){ return i.value; });
        if(!ar.length) return "Escolha pelo menos uma área para organizar.";
        var np = { name: nome.split(/\s+/)[0], areas: ar, wake: f.wake.value||"06:30", sleep: f.sleep.value||"22:30",
          workIni: f.workIni.value, workFim: f.workFim.value, treinoTurno: segVal(f,"treinoTurno")||"manha", estudoHora: f.estudoHora.value||"20:00", done: true, since: todayKey() };
        var first = !p.done, j = J();
        j.profile = np;
        var sg = +f.sleepGoal.value; if(sg>=5 && sg<=10) j.sleepGoal = sg;
        state.dayPlan = state.dayPlan || {}; state.dayPlan.blocks = lnBuildBlocks(np);
        if(first || !j.habits || !j.habits.length) j.habits = lnHabits(np);
        save(); renderAll(); lnRefreshTop(); go("inicio");
        toast(first ? "Prontinho, "+np.name+"! Seu dia já está montado." : "Cadastro atualizado");
      },
      { ok: p.done ? "Salvar" : "Começar", noFocus: true, onOpen: function(f, dlg){
          function sync(){ var on = [].slice.call(f.querySelectorAll('input[name="area"]:checked')).map(function(i){ return i.value; });
            f.querySelectorAll("[data-if]").forEach(function(el){ el.hidden = on.indexOf(el.dataset.if) < 0; }); }
          f.addEventListener("change", sync); sync();
          if(!p.done){ var c = f.querySelector("[data-close]"); if(c) c.textContent = "Agora não"; }
        } });
  }

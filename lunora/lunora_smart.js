  // =====================================================================
  // Lunora inteligente: captura em linguagem natural, Tríade do Tempo,
  // modo foco com a lua, relatório de foco, janelas livres e gasto diário.
  // =====================================================================
  var LN_WD = {domingo:0, segunda:1, terca:2, quarta:3, quinta:4, sexta:5, sabado:6};
  var LN_APPT = /\b(consulta|reuni[aã]o|m[eé]dic[oa]|dentista|aula|entrevista|call|encontro|anivers[aá]rio|exame|prova|visita|festa|jantar com|almo[cç]o com|viagem|voo|vacina|terapia|psic[oó]log|fisioterapia|manicure|cabeleireir|sal[aã]o|culto|missa|casamento|batizado|show|cinema)\b/i;
  var LN_IMPORT = /\b(pagar|boleto|fatura|conta de|prova|entrega|entregar|prazo|m[eé]dic|consulta|exame|vencimento|vence|documento|contrato|imposto|ir\b|declara[cç][aã]o|matr[ií]cula|inscri[cç][aã]o|estudar|treino|or[cç]amento|renovar|banco|cart[oó]rio)\b/i;
  var LN_CIRC = /\b(ver (o |a )?(v[ií]deo|s[eé]rie|story)|olhar|dar uma olhada|talvez|se der|qualquer hora|um dia|responder grupo|rede social|instagram|tiktok)\b/i;
  var LN_WORK = /\b(cliente|reuni[aã]o|relat[oó]rio|e-?mail|cota[cç][aã]o|proposta|chefe|equipe|projeto|apresenta[cç][aã]o|planilha|fornecedor|pedido|venda|meta)\b/i;
  function lnNorm(s){ return String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""); }
  function lnHM(h, m){ return String(Math.min(23,Math.max(0,h))).padStart(2,"0")+":"+String(Math.min(59,Math.max(0,m||0))).padStart(2,"0"); }

  // Entende frases como "dentista amanhã às 15h @ Clínica Sorriso", "pagar luz dia 20!",
  // "reunião com cliente sexta 9h30", "estudar inglês daqui a 3 dias".
  function lnParse(raw){
    var txt = " " + String(raw||"").trim() + " ", n = lnNorm(txt), today = new Date(), date = null, time = null, place = "";
    function cut(re){ var m = n.match(re); if(!m) return null; var i = m.index, L = m[0].length; txt = txt.slice(0,i) + " " + txt.slice(i+L); n = n.slice(0,i) + " " + n.slice(i+L); return m; }
    var m;
    if((m = txt.match(/\s@\s*([^@]+)$/))){ place = m[1].trim(); txt = txt.slice(0, m.index) + " "; n = lnNorm(txt); }
    var urgent = /!\s*$|\burgente\b|\bsem falta\b/.test(n); cut(/\s*!+\s*$/); cut(/\burgente\b/); cut(/\bsem falta\b/);
    // horário
    if((m = cut(/\b(?:as|a partir das|ate as)?\s*(\d{1,2})\s*(?:h|:)\s*(\d{2})?\s*(?:hs|horas|h)?\b/))) time = lnHM(+m[1], +(m[2]||0));
    else if((m = cut(/\b(?:as|às)\s+(\d{1,2})\b/))) time = lnHM(+m[1], 0);
    if(time && /\b(da noite|a noite)\b/.test(n) && +time.slice(0,2) < 12) time = lnHM(+time.slice(0,2)+12, +time.slice(3));
    if(time && /\b(da tarde|a tarde)\b/.test(n) && +time.slice(0,2) < 12) time = lnHM(+time.slice(0,2)+12, +time.slice(3));
    cut(/\b(da noite|a noite|da tarde|a tarde|da manha|de manha)\b/);
    // data
    if(cut(/\bdepois de amanha\b/)) date = addDays(today, 2);
    else if(cut(/\bamanha\b/)) date = addDays(today, 1);
    else if(cut(/\bhoje\b/)) date = today;
    else if((m = cut(/\bdaqui a (\d{1,2}) dias?\b/))) date = addDays(today, +m[1]);
    else if((m = cut(/\bdaqui a (\d{1,2}) semanas?\b/))) date = addDays(today, 7*m[1]);
    else if(cut(/\b(semana que vem|proxima semana)\b/)){ var dd = (8 - today.getDay()) % 7 || 7; date = addDays(today, dd); }
    else if(cut(/\b(no |neste |nesse )?fim de semana\b/)){ var ds = (6 - today.getDay() + 7) % 7; date = addDays(today, ds); }
    else if(cut(/\b(no )?fim do mes\b/)) date = new Date(today.getFullYear(), today.getMonth()+1, 0);
    else if((m = cut(/\b(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?\b/))){ var y = m[3] ? (+m[3] < 100 ? 2000 + +m[3] : +m[3]) : today.getFullYear(); date = new Date(y, +m[2]-1, +m[1]); if(!m[3] && date < addDays(today,-1)) date.setFullYear(y+1); }
    else if((m = cut(/\b(?:dia|no dia)\s+(\d{1,2})\b/))){ date = new Date(today.getFullYear(), today.getMonth(), +m[1]); if(date < addDays(today,-1)) date = new Date(today.getFullYear(), today.getMonth()+1, +m[1]); }
    else if((m = cut(/\b(?:(?:na|no|nessa|nesta|proxima|proximo)\s+)?(domingo|segunda|terca|quarta|quinta|sexta|sabado)(?:-feira| feira)?\b/))){ var wd = LN_WD[m[1]], diff = (wd - today.getDay() + 7) % 7; if(diff===0 && /proxim/.test(m[0])) diff = 7; date = addDays(today, diff); }
    var title = txt.replace(/\s+/g," ").replace(/\s+(as|às|dia|no|na|para|pra|em|de|do|da|com|ate|até)\s*$/i,"").replace(/^\s*(lembrar de|lembrar|preciso|tenho que|tenho de)\s+/i,"").trim();
    title = title.charAt(0).toUpperCase() + title.slice(1);
    var appt = !!time && (LN_APPT.test(raw) || !!place);
    var tri = urgent ? "urgente" : LN_CIRC.test(raw) ? "circunstancial" : (LN_IMPORT.test(raw) || appt) ? "importante" : (date && dKey(date) <= todayKey(1) ? "urgente" : "importante");
    return { title: title, date: date ? dKey(date) : null, time: time, place: place, appt: appt, triade: tri, tag: LN_WORK.test(raw) ? "trabalho" : "pessoal" };
  }
  var LN_TRI = { importante:{l:"Importante", c:"#2F7D5B", s:"#E2EFE7"}, urgente:{l:"Urgente", c:"#B4434F", s:"#F6E1E6"}, circunstancial:{l:"Circunstancial", c:"#8A7A86", s:"#EFE9EE"} };
  var lnQuickTri = null;
  function lnPreview(p){
    if(!p || !p.title) return '<span class="ln-hint">Ex.: <i>dentista amanhã 15h @ Clínica Sorriso</i> · <i>pagar luz dia 20!</i></span>';
    var tri = LN_TRI[lnQuickTri || p.triade], d = p.date ? (p.date===todayKey() ? "hoje" : p.date===todayKey(1) ? "amanhã" : parseKey(p.date).toLocaleDateString("pt-BR",{weekday:"short", day:"2-digit", month:"2-digit"})) : "hoje";
    return '<span class="ln-tag">'+(p.appt ? "📅 Compromisso" : "✓ Tarefa")+'</span><span class="ln-tag">🗓 '+esc(d)+'</span>'+(p.time?'<span class="ln-tag">⏰ '+esc(p.time)+'</span>':'')+
      (p.place?'<span class="ln-tag">📍 '+esc(p.place)+'</span>':'')+'<button type="button" class="ln-tag ln-tri" data-lntri style="color:'+tri.c+';background:'+tri.s+'" title="Tocar para trocar">● '+tri.l+'</button>'+
      '<span class="ln-tag">'+(p.tag==="trabalho"?"💼 Trabalho":"🌿 Pessoal")+'</span>';
  }
  function lnQuickBar(){
    return '<form class="ln-quick" id="lnQuickForm" autocomplete="off"><div class="ln-qrow"><span class="ln-qicon">'+ico("spark")+'</span>'+
      '<input id="lnQuick" enterkeyhint="done" placeholder="Anote do seu jeito: “consulta sexta 9h”…" aria-label="Adicionar tarefa ou compromisso"><button class="ln-qgo" type="submit" aria-label="Adicionar">'+ico("plus")+'</button></div>'+
      '<div class="ln-qprev" id="lnQuickPrev">'+lnPreview(null)+'</div></form>';
  }
  function lnQuickSave(){
    var inp = document.getElementById("lnQuick"); if(!inp) return;
    var p = lnParse(inp.value); if(!p.title){ toast("Escreva o que precisa fazer"); return; }
    var tri = lnQuickTri || p.triade;
    if(p.appt){
      var it = {id:uid("ag"), date:p.date||todayKey(), title:p.title, time:p.time}; if(p.place) it.place = p.place;
      (state.agenda = state.agenda || []).push(it); state.agenda.sort(function(a,b){ return (a.date+(a.time||"")).localeCompare(b.date+(b.time||"")); });
      toast("Compromisso salvo · "+fmtDay(parseKey(it.date))+" às "+p.time);
    } else {
      var t = {id:uid("t"), texto:p.title, data:p.date||todayKey(), feita:false, triade:tri, tag:p.tag}; if(p.time) t.hora = p.time;
      J().tasks.unshift(t); toast("Tarefa salva"+(p.date && p.date!==todayKey() ? " para "+fmtDay(parseKey(p.date)) : " para hoje"));
    }
    lnQuickTri = null; inp.value = ""; save();
  }
  document.addEventListener("input", function(e){ if(e.target && e.target.id==="lnQuick"){ lnQuickTri = null; var pv = document.getElementById("lnQuickPrev"); if(pv) pv.innerHTML = lnPreview(lnParse(e.target.value)); } });
  document.addEventListener("submit", function(e){ if(e.target && e.target.id==="lnQuickForm"){ e.preventDefault(); lnQuickSave(); } });
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-lntri]"); if(!b) return; e.preventDefault();
    var order = ["importante","urgente","circunstancial"], cur = lnQuickTri || lnParse((document.getElementById("lnQuick")||{}).value).triade;
    lnQuickTri = order[(order.indexOf(cur)+1)%3]; var pv = document.getElementById("lnQuickPrev"); if(pv) pv.innerHTML = lnPreview(lnParse(document.getElementById("lnQuick").value));
  });

  // Tríade do Tempo: o ideal é ~70% importante, ~20% urgente, ~10% circunstancial.
  function lnTriOf(t){ return t.triade || lnParse(t.texto).triade; }
  function lnTriadeCard(){
    var pend = J().tasks.filter(function(t){ return !t.feita; }); if(!pend.length) return "";
    var c = {importante:0, urgente:0, circunstancial:0}; pend.forEach(function(t){ c[lnTriOf(t)]++; });
    var tot = pend.length, pct = function(k){ return Math.round(c[k]/tot*100); };
    var tip = pct("urgente") > 35 ? "Muita coisa virou urgente. Reserve um horário fixo por semana para adiantar o importante antes que vire incêndio."
      : pct("circunstancial") > 20 ? "Tem bastante coisa circunstancial. Dá para delegar, agrupar num único horário ou simplesmente riscar?"
      : "Equilíbrio bom: a maior parte do seu tempo está indo para o que importa.";
    return '<section class="ju-card"><div class="ju-head"><span class="ic" style="'+tone("tarefas")+'">'+ico("target")+'</span><h3>Sua Tríade do Tempo</h3><span class="ju-muted">'+tot+' pendentes</span></div>'+
      '<div class="ln-tribar">'+["importante","urgente","circunstancial"].map(function(k){ return c[k] ? '<i style="flex:'+c[k]+';background:'+LN_TRI[k].c+'"></i>' : ''; }).join("")+'</div>'+
      '<div class="ln-trileg">'+["importante","urgente","circunstancial"].map(function(k){ return '<span><b style="background:'+LN_TRI[k].c+'"></b>'+LN_TRI[k].l+' '+pct(k)+'%</span>'; }).join("")+'</div>'+
      '<p class="ju-muted" style="margin:10px 0 0;font-size:12.5px">'+esc(tip)+'</p></section>';
  }

  // ---------- Janelas livres (time blocking) ----------
  function lnFreeWindows(){
    var now = new Date(), m = now.getHours()*60 + now.getMinutes(), p = lnProfile() || {};
    var start = Math.max(m + 5, toMin(p.wake||"07:00")), end = toMin(p.sleep||"22:30") - 30; if(end <= start) return [];
    var busy = todaysBlocks().map(function(b){ return [toMin(b.ini), toMin(b.fim) > toMin(b.ini) ? toMin(b.fim) : toMin(b.ini)+30]; })
      .concat((state.agenda||[]).filter(function(a){ return a && a.date===todayKey() && a.time; }).map(function(a){ return [toMin(a.time), toMin(a.time)+60]; }))
      .sort(function(a,b){ return a[0]-b[0]; });
    var out = [], cur = start;
    busy.forEach(function(b){ if(b[1] <= cur) return; if(b[0] - cur >= 30) out.push([cur, Math.min(b[0], end)]); cur = Math.max(cur, b[1]); });
    if(end - cur >= 30) out.push([cur, end]);
    return out.filter(function(w){ return w[1]-w[0] >= 30; });
  }
  function lnMinHM(x){ return lnHM(Math.floor(x/60), x%60); }
  function lnEncaixeCard(){
    var wins = lnFreeWindows(), k = todayKey();
    var pend = J().tasks.filter(function(t){ return !t.feita && t.data<=k && !t.hora; })
      .sort(function(a,b){ var o = {urgente:0, importante:1, circunstancial:2}; return o[lnTriOf(a)] - o[lnTriOf(b)] || a.data.localeCompare(b.data); });
    if(!wins.length || !pend.length) return "";
    var sug = [], wi = 0, cursor = wins[0][0];
    pend.slice(0, 4).forEach(function(t){
      while(wi < wins.length && wins[wi][1] - cursor < 30){ wi++; if(wi < wins.length) cursor = wins[wi][0]; }
      if(wi >= wins.length) return;
      var dur = lnTriOf(t)==="circunstancial" ? 30 : 45; dur = Math.min(dur, wins[wi][1]-cursor);
      sug.push({t:t, ini:cursor, fim:cursor+dur}); cursor += dur + 10;
    });
    if(!sug.length) return "";
    return '<section class="ju-card"><div class="ju-head"><span class="ic" style="'+tone("agenda")+'">'+ico("spark")+'</span><h3>Encaixe inteligente</h3></div>'+
      '<p class="ju-muted" style="margin:0 0 10px;font-size:12.5px">Você tem '+wins.length+' janela'+(wins.length>1?'s':'')+' livre'+(wins.length>1?'s':'')+' hoje. A Lunora sugere onde cada tarefa cabe, começando pelo que pesa mais:</p>'+
      '<ul class="ju-list" style="gap:8px">'+sug.map(function(s){ var tri = LN_TRI[lnTriOf(s.t)];
        return '<li style="display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:10px;align-items:center"><b class="num" style="font-size:13px">'+lnMinHM(s.ini)+'</b>'+
          '<span style="min-width:0"><span style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(s.t.texto)+'</span><small style="color:'+tri.c+'">● '+tri.l+' · até '+lnMinHM(s.fim)+'</small></span>'+
          '<button class="ju-btn soft" style="padding:6px 12px;font-size:12px" data-lnslot="'+esc(s.t.id)+'|'+lnMinHM(s.ini)+'">Reservar</button></li>'; }).join("")+'</ul>'+
      '<button class="ju-btn ghost block" style="margin-top:10px" data-lnslotall="'+esc(sug.map(function(s){ return s.t.id+"|"+lnMinHM(s.ini); }).join(","))+'">Reservar todas</button></section>';
  }
  function lnReserve(pairs){
    var k = todayKey(), n = 0;
    pairs.forEach(function(pr){ var p = pr.split("|"), t = J().tasks.filter(function(x){ return x.id===p[0]; })[0]; if(!t) return;
      t.hora = p[1]; t.data = k; (state.agenda = state.agenda || []).push({id:uid("ag"), date:k, time:p[1], title:"⏳ "+t.texto, task:t.id}); n++; });
    state.agenda.sort(function(a,b){ return (a.date+(a.time||"")).localeCompare(b.date+(b.time||"")); });
    save(); toast(n===1 ? "Horário reservado na agenda de hoje" : n+" horários reservados na agenda de hoje");
  }
  document.addEventListener("click", function(e){
    var b = e.target.closest && e.target.closest("[data-lnslot],[data-lnslotall]"); if(!b) return;
    lnReserve((b.dataset.lnslot || b.dataset.lnslotall).split(","));
  });

  // ---------- Modo foco: a lua enche enquanto você foca ----------
  var lnF = null;
  function lnFocusLog(){ var j = J(); if(!Array.isArray(j.focus)) j.focus = []; return j.focus; }
  function lnMoonSvg(frac){
    // fase da lua de acordo com o progresso (nova -> cheia)
    var r = 70, f = Math.max(0, Math.min(1, frac)), rx = Math.abs(1 - 2*f) * r, sweep = f < .5 ? 0 : 1;
    var lit = f >= .999 ? '<circle cx="80" cy="80" r="70" fill="#F6E7C8"/>' :
      '<path d="M80 10 A70 70 0 0 1 80 150 A'+rx.toFixed(1)+' 70 0 0 '+sweep+' 80 10Z" fill="#F6E7C8"/>';
    return '<svg viewBox="0 0 160 160" width="220" height="220" aria-hidden="true"><defs><radialGradient id="lnGlow"><stop offset=".6" stop-color="#F6E7C8" stop-opacity="'+(.15+.35*f).toFixed(2)+'"/><stop offset="1" stop-color="#F6E7C8" stop-opacity="0"/></radialGradient></defs>'+
      '<circle cx="80" cy="80" r="80" fill="url(#lnGlow)"/><circle cx="80" cy="80" r="70" fill="#3A2850"/>'+lit+'</svg>';
  }
  function lnFocusOpen(){
    var cur = todaysBlocks().filter(function(b){ var m = new Date().getHours()*60+new Date().getMinutes(); return toMin(b.ini)<=m && toMin(b.fim)>m; })[0];
    var first = J().tasks.filter(function(t){ return !t.feita && t.data<=todayKey(); })[0];
    var sug = cur && cur.area!=="diet" ? cur.txt : first ? first.texto : "";
    var ov = document.createElement("div"); ov.className = "ln-focus"; ov.id = "lnFocus";
    ov.innerHTML = '<button class="ln-fclose" data-lnf="close" aria-label="Fechar">✕</button><div class="ln-fbody">'+
      '<p class="ln-fkick">MODO FOCO</p><div id="lnFMoon">'+lnMoonSvg(0)+'</div>'+
      '<div id="lnFSetup"><input id="lnFLabel" placeholder="No que você vai focar?" value="'+esc(sug)+'">'+
        '<div class="ln-fdur">'+[[25,"25 min"],[50,"50 min"],[90,"90 min"]].map(function(d,i){ return '<button data-lnfdur="'+d[0]+'" class="'+(i===0?"on":"")+'">'+d[1]+'</button>'; }).join("")+'</div>'+
        '<button class="ln-fstart" data-lnf="start">Começar</button>'+
        '<p class="ln-fnote">A lua vai enchendo enquanto você foca. Se sair do app, ela registra a distração.</p></div>'+
      '<div id="lnFRun" hidden><div class="ln-ftime" id="lnFTime">25:00</div><p class="ln-flabel" id="lnFRunLabel"></p>'+
        '<div class="ln-frow"><button data-lnf="pause" id="lnFPause">Pausar</button><button data-lnf="stop">Encerrar</button></div></div></div>';
    document.body.appendChild(ov); lnF = {dur:25, left:25*60, run:false, away:0};
  }
  function lnFocusTick(){
    if(!lnF || !lnF.run) return;
    lnF.left = Math.max(0, Math.round((lnF.endsAt - Date.now())/1000));
    var t = document.getElementById("lnFTime"); if(t) t.textContent = String(Math.floor(lnF.left/60)).padStart(2,"0")+":"+String(lnF.left%60).padStart(2,"0");
    var mo = document.getElementById("lnFMoon"); if(mo) mo.innerHTML = lnMoonSvg(1 - lnF.left/(lnF.dur*60));
    if(lnF.left <= 0) lnFocusEnd(true);
  }
  function lnFocusEnd(done){
    if(!lnF) return; clearInterval(lnF.timer); lnF.run = false;
    try{ lnF.lock && lnF.lock.release(); }catch(e){}
    var mins = Math.round((lnF.dur*60 - lnF.left)/60);
    if(mins >= 5) lnFocusLog().push({d:todayKey(), min:mins, label:lnF.label||"Foco", away:lnF.away, full:!!done});
    if(mins >= 5) save();
    var body = document.querySelector("#lnFocus .ln-fbody");
    if(body) body.innerHTML = '<p class="ln-fkick">'+(done?"LUA CHEIA 🌕":"SESSÃO ENCERRADA")+'</p><div>'+lnMoonSvg(done?1:1-lnF.left/(lnF.dur*60))+'</div>'+
      '<div class="ln-ftime" style="font-size:40px">'+mins+' min</div><p class="ln-flabel">'+esc(lnF.label||"Foco")+'</p>'+
      '<p class="ln-fnote">'+(lnF.away ? 'Você saiu do app '+lnF.away+(lnF.away>1?' vezes':' vez')+'. Na próxima, tente deixar o celular longe.' : (done ? 'Nenhuma distração. Foco perfeito!' : 'Cada minuto conta — já está registrado.'))+'</p>'+
      '<button class="ln-fstart" data-lnf="close">Fechar</button>';
    if(done){ try{ navigator.vibrate && navigator.vibrate([200,100,200]); }catch(e){} }
    lnF = null;
  }
  document.addEventListener("click", function(e){
    var d = e.target.closest && e.target.closest("[data-lnfdur]");
    if(d && lnF && !lnF.run){ lnF.dur = +d.dataset.lnfdur; lnF.left = lnF.dur*60; d.parentNode.querySelectorAll("button").forEach(function(x){ x.classList.toggle("on", x===d); }); return; }
    var b = e.target.closest && e.target.closest("[data-lnf]"); if(!b) return;
    var a = b.dataset.lnf, ov = document.getElementById("lnFocus");
    if(a==="close"){ if(lnF && lnF.run) lnFocusEnd(false); if(ov) ov.remove(); lnF = null; if(juView==="tracker") renderView("tracker"); return; }
    if(!lnF) return;
    if(a==="start"){ lnF.label = (document.getElementById("lnFLabel")||{}).value || "Foco"; document.getElementById("lnFSetup").hidden = true; document.getElementById("lnFRun").hidden = false;
      document.getElementById("lnFRunLabel").textContent = lnF.label; lnF.run = true; lnF.endsAt = Date.now() + lnF.left*1000; lnF.timer = setInterval(lnFocusTick, 1000); lnFocusTick();
      try{ if(navigator.wakeLock) navigator.wakeLock.request("screen").then(function(l){ if(lnF) lnF.lock = l; }).catch(function(){}); }catch(err){} }
    else if(a==="pause"){ if(lnF.run){ lnF.run = false; clearInterval(lnF.timer); b.textContent = "Continuar"; } else { lnF.run = true; lnF.endsAt = Date.now() + lnF.left*1000; lnF.timer = setInterval(lnFocusTick, 1000); b.textContent = "Pausar"; } }
    else if(a==="stop"){ lnFocusEnd(false); }
  });
  document.addEventListener("visibilitychange", function(){ if(lnF && lnF.run){ if(document.hidden) lnF.away++; else lnFocusTick(); } });

  // Relatório de foco da semana (estilo Clockify, só que leve)
  function lnFocusCard(){
    var log = lnFocusLog(), days = [], max = 30, tot = 0, by = {};
    for(var i=6;i>=0;i--){ var k = todayKey(-i), v = log.filter(function(x){ return x.d===k; }).reduce(function(a,x){ return a+x.min; },0); days.push([k,v]); max = Math.max(max,v); tot += v; }
    log.filter(function(x){ return x.d >= todayKey(-6); }).forEach(function(x){ by[x.label] = (by[x.label]||0) + x.min; });
    var top = Object.keys(by).sort(function(a,b){ return by[b]-by[a]; }).slice(0,3);
    var hm = function(m){ return m>=60 ? Math.floor(m/60)+"h"+(m%60?String(m%60).padStart(2,"0"):"") : m+" min"; };
    return '<section class="ju-card" style="'+tone("sono")+'"><div class="ju-head"><span class="ic">'+ico("moon")+'</span><h3>Foco da semana</h3><span class="ju-muted">'+hm(tot)+'</span></div>'+
      '<div class="ln-fbars">'+days.map(function(d){ return '<div><i style="height:'+Math.max(4, Math.round(d[1]/max*64))+'px" class="'+(d[1]?"":"off")+'"></i><small>'+JU_WEEK[parseKey(d[0]).getDay()]+'</small></div>'; }).join("")+'</div>'+
      (top.length ? '<ul class="ju-list" style="gap:6px;margin-top:10px">'+top.map(function(l){ return '<li style="display:flex;justify-content:space-between;gap:10px;font-size:13px"><span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(l)+'</span><b class="num">'+hm(by[l])+'</b></li>'; }).join("")+'</ul>'
        : '<p class="ju-empty">Nenhuma sessão ainda. Que tal 25 minutos agora?</p>')+
      '<button class="ju-btn primary block" style="margin-top:12px" data-lnfocus>'+ico("moon")+' Começar foco</button></section>';
  }
  document.addEventListener("click", function(e){ if(e.target.closest && e.target.closest("[data-lnfocus]")) lnFocusOpen(); });

  // ---------- Quanto posso gastar por dia (estilo Mobills/Organizze) ----------
  function lnSafeSpend(){
    if(!lnArea("financas")) return "";
    var now = new Date(), mk = monthKey(now), s = sums(mk), mo = J().money, last = new Date(now.getFullYear(), now.getMonth()+1, 0);
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var owed = mo.bills.concat(mo.subs.map(function(x){ return {valor:x.valor, recorrente:true, dia:x.dia, pagos:x.pagos||{}}; }))
      .filter(function(b){ var d = billDue(b); return !billPaid(b) && d && d >= today && d <= last; }).reduce(function(a,b){ return a+(+b.valor||0); },0);
    if(!s.ent && !owed) return "";
    var left = s.saldo - owed, days = last.getDate() - now.getDate() + 1, perDay = left / days;
    var ok = perDay > 0;
    return '<section class="ju-card" style="'+tone("financas")+'"><span class="ju-label">Quanto posso gastar por dia</span>'+
      '<div class="ju-mid" style="color:'+(ok?"var(--j-green)":"var(--j-red)")+'">'+money(Math.max(0,perDay))+'</div>'+
      '<p class="ju-muted" style="margin:4px 0 0;font-size:12.5px">'+(ok ? 'Saldo do mês '+money(s.saldo)+' menos '+money(owed)+' em contas que ainda vencem, dividido pelos '+days+' dias que faltam.'
        : 'As contas que ainda vencem ('+money(owed)+') passam do saldo do mês. Segure os gastos extras até entrar dinheiro.')+'</p></section>';
  }

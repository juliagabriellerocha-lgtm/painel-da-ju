  // =====================================================================
  // App shell: Início, Plano, Tracker, Bem-estar, Eu (+ Finanças, Sono, Tarefas)
  // Dados novos ficam em state.ju; água e treino reaproveitam diet.log / workout.log.
  // =====================================================================
  var JU_ICONS = {
    home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    cal:'<rect x="3" y="4.5" width="18" height="16.5" rx="3"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
    tasks:'<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="m8 12 3 3 5-6"/>',
    coin:'<circle cx="12" cy="12" r="9"/><path d="M14.8 8.8c-.5-.9-1.6-1.4-2.8-1.4-1.6 0-2.8.8-2.8 2.1 0 3 5.8 1.6 5.8 4.7 0 1.3-1.3 2.2-3 2.2-1.3 0-2.5-.6-3-1.6M12 5.8v1.6M12 16.6v1.6"/>',
    moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    heart:'<path d="M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 12 7.4 4.4 4.4 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
    leaf:'<path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19c3-4 6-6 10-8"/>',
    chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    chev:'<path d="m9 6 6 6-6 6"/>',
    back:'<path d="m15 6-6 6 6 6"/>',
    check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    up:'<path d="M12 19V5M6 11l6-6 6 6"/>',
    down:'<path d="M12 5v14M6 13l6 6 6-6"/>',
    wallet:'<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="3.5" y="7.5" width="17" height="12" rx="3"/><circle cx="16" cy="13.5" r="1.2"/>',
    drop:'<path d="M12 3.5s6.5 7 6.5 11a6.5 6.5 0 0 1-13 0c0-4 6.5-11 6.5-11z"/>',
    glass:'<path d="M6 4h12l-1.6 15.2a1.5 1.5 0 0 1-1.5 1.3H9.1a1.5 1.5 0 0 1-1.5-1.3z"/><path d="M6.6 9.5h10.8"/>',
    trash:'<path d="M4 7h16M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13"/>',
    grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>',
    star:'<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/>',
    cross:'<path d="M12 3v18M6 8.5h12"/>',
    dumb:'<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
    bag:'<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
    target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    briefcase:'<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18"/>',
    cap:'<path d="m2.5 9 9.5-4.5L21.5 9 12 13.5z"/><path d="M6.5 11v4.5c1.5 1.3 3.4 2 5.5 2s4-.7 5.5-2V11"/>',
    spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    trend:'<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    apple:'<path d="M12 7c-1-2-3-2.5-4.5-2 0 2 1.5 3 3 3"/><path d="M12 8c-2.5-1.5-7-1-7 4.5C5 17 8 21 10 21c1 0 1.3-.5 2-.5s1 .5 2 .5c2 0 5-4 5-8.5C19 7 14.5 6.5 12 8z"/>'
  };
  function ico(name){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(JU_ICONS[name]||"")+'</svg>'; }

  var JU_TONES = {
    agenda:["var(--j-rose-ink)","var(--j-blush)"], tarefas:["var(--j-petrol)","var(--j-petrol-soft)"],
    financas:["var(--j-gold)","var(--j-gold-soft)"], sono:["var(--j-lav)","var(--j-lav-soft)"],
    bemestar:["var(--j-red)","var(--j-red-soft)"], habitos:["var(--j-green)","var(--j-green-soft)"],
    agua:["var(--j-sky)","var(--j-sky-soft)"], treino:["var(--j-orange)","var(--j-orange-soft)"]
  };
  function tone(k){ var t = JU_TONES[k] || JU_TONES.agenda; return '--c:'+t[0]+';--c-soft:'+t[1]; }

  var JU_CATS = [
    {id:"mercado",nome:"Mercado",em:"🛒",cor:"#2F8F6B"}, {id:"comida",nome:"Comida",em:"🍽️",cor:"#D9566B"},
    {id:"casa",nome:"Casa",em:"🏠",cor:"#0E5552"}, {id:"contas",nome:"Contas",em:"🧾",cor:"#7D6BB8"},
    {id:"transporte",nome:"Transporte",em:"🚗",cor:"#2E78B7"}, {id:"saude",nome:"Saúde",em:"💊",cor:"#C46A2D"},
    {id:"beleza",nome:"Beleza",em:"💅",cor:"#D99AA0"}, {id:"lazer",nome:"Lazer",em:"🎉",cor:"#B8862E"},
    {id:"estudos",nome:"Estudos",em:"📚",cor:"#3D5A99"}, {id:"pet",nome:"Pet",em:"🐶",cor:"#8B6B4A"},
    {id:"fe",nome:"Fé e doações",em:"🙏",cor:"#9B7BC0"}, {id:"outros",nome:"Outros",em:"✨",cor:"#9C8D96"}
  ];
  var JU_IN_CATS = [
    {id:"salario",nome:"Salário",em:"💼"}, {id:"comissao",nome:"Comissão",em:"🏆"}, {id:"beneficio",nome:"Benefício",em:"🎁"},
    {id:"extra",nome:"Renda extra",em:"✨"}, {id:"reembolso",nome:"Reembolso",em:"↩️"}
  ];
  var JU_MOODS = [
    {v:5,e:"😍",t:"Ótimo"},{v:4,e:"😄",t:"Bem"},{v:3,e:"🙂",t:"Ok"},{v:2,e:"😔",t:"Baixo"},{v:1,e:"😢",t:"Difícil"}
  ];
  var JU_DEFAULT_HABITS = [
    {id:"h_oracao", nome:"Oração da manhã", em:"🙏", periodo:"manha"},
    {id:"h_agua", nome:"Beber 2 L de água", em:"💧", periodo:"manha", tipo:"agua"},
    {id:"h_treino", nome:"Treino do dia", em:"🏋️", periodo:"manha", tipo:"treino"},
    {id:"h_estudo_m", nome:"Estudo da manhã", em:"📘", periodo:"manha"},
    {id:"h_skincare", nome:"Skincare", em:"🧴", periodo:"manha"},
    {id:"h_almoco", nome:"Almoço do cardápio", em:"🥗", periodo:"tarde"},
    {id:"h_estudo_n", nome:"Estudo da noite", em:"💻", periodo:"noite"},
    {id:"h_leitura", nome:"Ler 20 minutos", em:"📖", periodo:"noite"},
    {id:"h_sono", nome:"Rotina do sono", em:"🌙", periodo:"noite"}
  ];
  var JU_PERIODS = [["manha","Manhã"],["tarde","Tarde"],["noite","Noite"]];
  var JU_WEEK = ["dom","seg","ter","qua","qui","sex","sáb"];

  function juDefaults(){
    return { tasks:[], habits:JSON.parse(JSON.stringify(JU_DEFAULT_HABITS)), habitLog:{}, sleep:{}, sleepGoal:7,
      mood:{}, cycle:{starts:[], len:28, dur:5},
      money:{tx:[], subs:[], bills:[], saldoInicial:null} };
  }
  function J(){
    if(!state.ju || typeof state.ju!=="object") state.ju = juDefaults();
    var d = juDefaults();
    Object.keys(d).forEach(function(k){ if(state.ju[k]===undefined || state.ju[k]===null && k!=="money") state.ju[k] = d[k]; });
    Object.keys(d.money).forEach(function(k){ if(state.ju.money[k]===undefined) state.ju.money[k] = d.money[k]; });
    Object.keys(d.cycle).forEach(function(k){ if(state.ju.cycle[k]===undefined) state.ju.cycle[k] = d.cycle[k]; });
    return state.ju;
  }
  function save(){ persist(); renderShell(); }

  // ---------- helpers ----------
  function dKey(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
  function parseKey(k){ var p = String(k).split("-"); return new Date(+p[0], +p[1]-1, +p[2]); }
  function addDays(d, n){ var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate()+n); return x; }
  function monthKey(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0"); }
  function money(n){ n = Number(n)||0; return (n<0?"−":"")+"R$ "+Math.abs(n).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2}); }
  function parseMoney(v){ v = String(v||"").replace(/[^\d,.-]/g,""); if(v.indexOf(",")>-1) v = v.replace(/\./g,"").replace(",","."); var n = parseFloat(v); return isFinite(n)?Math.round(n*100)/100:null; }
  function hm(h){ if(h==null||!isFinite(h)) return "—"; var t = Math.round(h*60); var hh = Math.floor(t/60), mm = t%60; return hh+"h"+(mm?String(mm).padStart(2,"0"):""); }
  function fmtDay(d){ return d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}); }
  function toast(msg){
    var t = document.createElement("div"); t.className = "ju-toast"; t.setAttribute("role","status"); t.textContent = msg;
    document.body.appendChild(t); setTimeout(function(){ t.remove(); }, 2400);
  }
  function ring(pct, label, sub, color, size){
    var r = 42, c = 2*Math.PI*r, p = Math.max(0, Math.min(1, pct||0));
    return '<div class="ju-ring" style="--s:'+(size||72)+'px"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="'+r+'" fill="none" stroke="var(--j-line)" stroke-width="10"/>'+
      (p>0?'<circle cx="50" cy="50" r="'+r+'" fill="none" stroke="'+(color||"var(--j-green)")+'" stroke-width="10" stroke-linecap="round" stroke-dasharray="'+(c*p).toFixed(1)+' '+c.toFixed(1)+'"/>':'')+'</svg>'+
      '<div class="lbl"><span>'+label+(sub?'<small>'+sub+'</small>':'')+'</span></div></div>';
  }
  function armDelete(btn, fn){
    if(btn.classList.contains("armed")){ fn(); return; }
    btn.classList.add("armed"); btn.setAttribute("aria-label","Toque de novo para apagar");
    setTimeout(function(){ if(btn.isConnected){ btn.classList.remove("armed"); btn.setAttribute("aria-label","Apagar"); } }, 3000);
  }

  // ---------- data accessors ----------
  function habitDone(h, k){
    if(h.tipo==="agua"){ var w = (state.diet.log[k]||{}).water||0; return w>=8; }
    if(h.tipo==="treino") return !!state.workout.log[k];
    return !!((J().habitLog[k]||{})[h.id]);
  }
  function setHabit(h, k, on){
    if(h.tipo==="agua"){ var cur = state.diet.log[k] || {water:0, notes:""}; cur.water = on?8:0; state.diet.log[k] = cur; return; }
    if(h.tipo==="treino"){ if(on) state.workout.log[k] = true; else delete state.workout.log[k]; return; }
    var log = J().habitLog[k] || {}; if(on) log[h.id] = true; else delete log[h.id]; J().habitLog[k] = log;
  }
  function habitStreak(h){
    var n = 0, d = new Date();
    if(!habitDone(h, dKey(d))) d = addDays(d,-1);
    while(habitDone(h, dKey(d)) && n < 400){ n++; d = addDays(d,-1); }
    return n;
  }
  function habitsToday(){ var k = todayKey(); var hs = J().habits; var done = hs.filter(function(h){ return habitDone(h,k); }).length; return {done:done, total:hs.length}; }
  function water(k){ return (state.diet.log[k||todayKey()]||{}).water||0; }

  // Lançamentos e contas que a automação diária grava em financas/espelho (só existe no painel da Claude).
  function extFin(){
    var E = (typeof espelhoData!=="undefined" && espelhoData) ? espelhoData : null;
    var own = {}; J().money.tx.forEach(function(t){ own[t.id] = 1; });
    var tx = E && Array.isArray(E.lancamentos) ? E.lancamentos.filter(function(l){ return l && l.data && !own[l.id]; }).map(function(l){
      var v = Number(l.valor)||0;
      return {id:l.id, tipo:v<0?"saida":"entrada", valor:Math.abs(v), desc:l.desc, cat:v<0?"outros":"reembolso", data:String(l.data).slice(0,10), conta:l.conta, ext:true, pend:l.status==="pendente"};
    }) : [];
    var contas = E && Array.isArray(E.contas) ? E.contas : [];
    return {tx:tx, contas:contas, quando:E ? (E.atualizadoEmTexto||"") : ""};
  }
  function allTx(){ return J().money.tx.concat(extFin().tx); }
  function monthTx(mk){ return allTx().filter(function(t){ return String(t.data).slice(0,7)===mk; }); }
  function sums(mk){
    var tx = monthTx(mk), ent = 0, sai = 0;
    tx.forEach(function(t){ if(t.tipo==="entrada") ent += t.valor; else sai += t.valor; });
    return {ent:ent, sai:sai, saldo:ent-sai};
  }
  function billDue(b, ref){
    ref = ref || new Date();
    if(b.recorrente){ var day = Math.min(Math.max(1,+b.dia||1), 28); var d = new Date(ref.getFullYear(), ref.getMonth(), day); return d; }
    return b.venc ? parseKey(b.venc) : null;
  }
  function billPaid(b, ref){ var mk = monthKey(ref||new Date()); return b.recorrente ? !!(b.pagos||{})[mk] : !!b.pago; }

  function sleepHours(e){
    if(!e || !e.deitou || !e.acordou) return null;
    var a = toMin(e.deitou), b = toMin(e.acordou); if(b <= a) b += 1440; return (b-a)/60;
  }
  function lastSleep(){
    var s = J().sleep; for(var i=0;i<3;i++){ var k = todayKey(-i); if(s[k]) return {k:k, e:s[k], h:sleepHours(s[k])}; } return null;
  }
  function sleepWeek(){ var out = []; for(var i=6;i>=0;i--){ var d = addDays(new Date(), -i); var e = J().sleep[dKey(d)]; out.push({d:d, h:sleepHours(e)}); } return out; }

  function cycleInfo(){
    var c = J().cycle, s = (c.starts||[]).slice().sort();
    if(!s.length) return null;
    var lens = []; for(var i=1;i<s.length;i++){ var gap = Math.round((parseKey(s[i])-parseKey(s[i-1]))/86400000); if(gap>=18 && gap<=45) lens.push(gap); }
    var len = lens.length ? Math.round(lens.slice(-6).reduce(function(a,b){return a+b;},0)/Math.min(6,lens.length)) : (+c.len||28);
    var last = parseKey(s[s.length-1]);
    var next = addDays(last, len), today = new Date(); today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    while(next < today) next = addDays(next, len);
    return {len:len, last:last, next:next, dur:+c.dur||5, inDays:Math.round((next-today)/86400000), day:Math.round((today-last)/86400000)+1};
  }
  function periodClass(d){
    var c = J().cycle, info = cycleInfo(); if(!info) return "";
    var dur = info.dur;
    for(var i=0;i<(c.starts||[]).length;i++){ var st = parseKey(c.starts[i]); var diff = Math.round((d-st)/86400000); if(diff>=0 && diff<dur) return "period"; }
    var pd = Math.round((d-info.next)/86400000); if(pd>=0 && pd<dur) return "pred";
    return "";
  }

  // ---------- sheet (bottom form) ----------
  var juSheet = null;
  function openSheet(title, body, onSubmit, opts){
    opts = opts || {};
    if(!juSheet){ juSheet = document.createElement("dialog"); juSheet.className = "ju-sheet"; document.body.appendChild(juSheet); }
    juSheet.innerHTML = '<form novalidate><div class="grip"></div><h3>'+esc(title)+'</h3>'+body+'<p class="ju-err" id="juErr"></p>'+
      '<div class="ju-actions">'+(opts.extra||'')+'<button class="ju-btn ghost" type="button" data-close>Cancelar</button><button class="ju-btn primary" type="submit">'+esc(opts.ok||"Salvar")+'</button></div></form>';
    var f = juSheet.querySelector("form");
    f.querySelector("[data-close]").addEventListener("click", function(){ juSheet.close(); });
    f.querySelectorAll(".ju-seg").forEach(function(seg){
      seg.addEventListener("click", function(e){ var b = e.target.closest("button"); if(!b) return; e.preventDefault();
        seg.querySelectorAll("button").forEach(function(x){ x.classList.toggle("on", x===b); }); seg.dataset.value = b.dataset.v; });
    });
    f.addEventListener("submit", function(e){
      e.preventDefault();
      var err = onSubmit(f);
      if(err){ f.querySelector("#juErr").textContent = err; return; }
      juSheet.close();
    });
    if(opts.onOpen) opts.onOpen(f, juSheet);
    juSheet.showModal();
    var first = f.querySelector("input,select,textarea"); if(first && !opts.noFocus) setTimeout(function(){ first.focus(); }, 60);
  }
  function seg(name, items, val){
    return '<div class="ju-seg" data-name="'+name+'" data-value="'+esc(val||"")+'">'+items.map(function(it){
      return '<button type="button" data-v="'+esc(it[0])+'" class="'+(it[0]===val?"on":"")+'">'+esc(it[1])+'</button>'; }).join("")+'</div>';
  }
  function segVal(f, name){ var s = f.querySelector('.ju-seg[data-name="'+name+'"]'); return s ? s.dataset.value : ""; }

  function sheetTx(tipo){
    var cats = tipo==="entrada" ? JU_IN_CATS : JU_CATS;
    openSheet(tipo==="entrada" ? "Nova entrada" : "Novo gasto",
      '<label class="ju-field">Valor (R$)<input name="valor" inputmode="decimal" placeholder="0,00" autocomplete="off"></label>'+
      '<label class="ju-field">Descrição<input name="desc" placeholder="'+(tipo==="entrada"?"Ex.: comissão de outubro":"Ex.: mercado da semana")+'" autocomplete="off"></label>'+
      '<div class="ju-field">Categoria'+seg("cat", cats.map(function(c){ return [c.id, c.em+" "+c.nome]; }), cats[0].id)+'</div>'+
      '<label class="ju-field">Data<input name="data" type="date" value="'+todayKey()+'"></label>',
      function(f){
        var v = parseMoney(f.valor.value); if(!v || v<=0) return "Informe um valor maior que zero.";
        J().money.tx.unshift({id:uid("tx"), tipo:tipo, valor:v, desc:f.desc.value.trim(), cat:segVal(f,"cat"), data:f.data.value||todayKey()});
        save(); toast(tipo==="entrada" ? "Entrada registrada" : "Gasto registrado");
      }, {ok:tipo==="entrada"?"Adicionar entrada":"Adicionar gasto"});
  }
  function sheetBill(kind){
    var isSub = kind==="sub";
    openSheet(isSub ? "Nova assinatura" : "Nova conta",
      '<label class="ju-field">Nome<input name="nome" placeholder="'+(isSub?"Ex.: streaming, app, curso":"Ex.: luz, internet, aluguel")+'" autocomplete="off"></label>'+
      '<div class="ju-two"><label class="ju-field">Valor (R$)<input name="valor" inputmode="decimal" placeholder="0,00"></label>'+
      '<label class="ju-field">Vence dia<input name="dia" type="number" min="1" max="31" inputmode="numeric" placeholder="10"></label></div>'+
      (isSub ? '' : '<div class="ju-field">Tipo'+seg("rec", [["1","Todo mês"],["0","Uma vez"]], "1")+'</div>'+
        '<label class="ju-field" id="juVenc" hidden>Data de vencimento<input name="venc" type="date" value="'+todayKey()+'"></label>'),
      function(f){
        var nome = f.nome.value.trim(); if(!nome) return "Dê um nome.";
        var v = parseMoney(f.valor.value); if(!v || v<=0) return "Informe o valor.";
        if(isSub){ var dia = parseInt(f.dia.value,10)||1; J().money.subs.push({id:uid("sub"), nome:nome, valor:v, dia:dia}); save(); toast("Assinatura adicionada"); return; }
        var rec = segVal(f,"rec")!=="0";
        J().money.bills.push({id:uid("bill"), nome:nome, valor:v, recorrente:rec, dia:parseInt(f.dia.value,10)||1, venc:rec?null:f.venc.value, pagos:{}, pago:false});
        save(); toast("Conta adicionada");
      }, {onOpen:function(f){
        var s = f.querySelector('.ju-seg[data-name="rec"]'); if(!s) return;
        s.addEventListener("click", function(){ setTimeout(function(){ var once = s.dataset.value==="0"; f.querySelector("#juVenc").hidden = !once; f.dia.closest(".ju-field").hidden = once; }, 0); });
      }});
  }
  function sheetSleep(k){
    k = k || todayKey(); var e = J().sleep[k] || {};
    openSheet("Registrar minha noite",
      '<div class="ju-two"><label class="ju-field">Fui dormir<input name="deitou" type="time" value="'+esc(e.deitou||"21:20")+'"></label>'+
      '<label class="ju-field">Acordei<input name="acordou" type="time" value="'+esc(e.acordou||"03:50")+'"></label></div>'+
      '<div class="ju-field">Como foi'+seg("q", [["5","😴 Ótima"],["4","🙂 Boa"],["3","😐 Ok"],["2","😕 Ruim"],["1","😣 Péssima"]], String(e.q||"4"))+'</div>'+
      '<label class="ju-field">Noite de<input name="dia" type="date" value="'+k+'"></label>',
      function(f){
        if(!f.deitou.value || !f.acordou.value) return "Preencha os dois horários.";
        J().sleep[f.dia.value||k] = {deitou:f.deitou.value, acordou:f.acordou.value, q:+segVal(f,"q")||4};
        save(); toast("Noite registrada");
      }, {noFocus:true});
  }
  function sheetMood(k){
    var e = J().mood[k] || {};
    var d = parseKey(k);
    openSheet(k===todayKey() ? "Como você está hoje?" : "Humor de "+fmtDay(d),
      '<div class="ju-moods" id="juMoodPick">'+JU_MOODS.map(function(m){ return '<button type="button" data-v="'+m.v+'" class="'+(e.v===m.v?"on":"")+'">'+m.e+'<small>'+m.t+'</small></button>'; }).join("")+'</div>'+
      '<label class="ju-field">Diário (opcional)<textarea name="nota" placeholder="O que marcou o seu dia? Pelo que você é grata?">'+esc(e.nota||"")+'</textarea></label>'+
      '<div class="ju-field">Ciclo'+seg("p", [["0","Nada a registrar"],["1","Menstruação começou"]], (J().cycle.starts||[]).indexOf(k)>-1?"1":"0")+'</div>',
      function(f){
        var pick = f.querySelector("#juMoodPick").dataset.v;
        if(!pick && !f.nota.value.trim() && segVal(f,"p")!=="1") return "Escolha um humor ou escreva algo.";
        var m = J().mood; m[k] = {v:pick?+pick:(e.v||null), nota:f.nota.value.trim()};
        var starts = J().cycle.starts || (J().cycle.starts = []); var i = starts.indexOf(k);
        if(segVal(f,"p")==="1" && i<0) starts.push(k); if(segVal(f,"p")!=="1" && i>-1) starts.splice(i,1);
        save(); toast("Registro salvo");
      }, {noFocus:true, onOpen:function(f){
        var box = f.querySelector("#juMoodPick"); if(e.v) box.dataset.v = e.v;
        box.addEventListener("click", function(ev){ var b = ev.target.closest("button"); if(!b) return; box.dataset.v = b.dataset.v; box.querySelectorAll("button").forEach(function(x){ x.classList.toggle("on", x===b); }); });
      }});
  }
  function sheetTask(){
    openSheet("Nova tarefa",
      '<label class="ju-field">O que fazer<input name="texto" placeholder="Ex.: retornar cotação" autocomplete="off"></label>'+
      '<label class="ju-field">Para quando<input name="data" type="date" value="'+todayKey()+'"></label>',
      function(f){ var t = f.texto.value.trim(); if(!t) return "Escreva a tarefa.";
        J().tasks.unshift({id:uid("t"), texto:t, data:f.data.value||todayKey(), feita:false}); save(); toast("Tarefa adicionada"); });
  }
  function sheetHabit(){
    openSheet("Novo hábito",
      '<div class="ju-two"><label class="ju-field">Emoji<input name="em" maxlength="4" value="✨"></label>'+
      '<label class="ju-field">Nome<input name="nome" placeholder="Ex.: alongar 10 min" autocomplete="off"></label></div>'+
      '<div class="ju-field">Quando'+seg("per", JU_PERIODS, "manha")+'</div>',
      function(f){ var n = f.nome.value.trim(); if(!n) return "Dê um nome ao hábito.";
        J().habits.push({id:uid("h"), nome:n, em:f.em.value.trim()||"✨", periodo:segVal(f,"per")||"manha"}); save(); toast("Hábito criado"); });
  }

  // ---------- navigation ----------
  var JU_MAIN = ["inicio","plano","tracker","bemestar","eu"];
  var juView = "inicio", juPlanDay = 0, juMonth = null;
  function go(view){
    juView = view;
    document.body.classList.remove("ju-legacy");
    document.querySelectorAll(".ju-view").forEach(function(s){ s.hidden = s.dataset.view !== view; });
    document.querySelectorAll(".ju-nav button").forEach(function(b){
      var main = JU_MAIN.indexOf(view)>-1 ? view : ({financas:"inicio", sono:"tracker", tarefas:"plano", compras:"inicio", estudos:"plano"})[view];
      if(b.dataset.go===main) b.setAttribute("aria-current","page"); else b.removeAttribute("aria-current");
    });
    var titles = {inicio:"Hoje", plano:"Meu plano", tracker:"Tracker", bemestar:"Bem-estar", eu:"Você", financas:"Finanças", sono:"Sono", tarefas:"Tarefas", compras:"Compras do mês", estudos:"Estudos"};
    document.getElementById("juTitle").textContent = titles[view] || "Painel da Ju";
    try{ localStorage.setItem("painelJuView", view); }catch(e){}
    renderView(view);
    window.scrollTo(0,0);
  }
  var LEGACY_NAMES = {metas:"Metas & Sonhos", dividas:"Dívidas", dieta:"Dieta", treino:"Treino", rotina:"Rotina e horários", compras:"Compras", leitura:"Leitura", espirito:"Espiritualidade", academico:"Faculdade", complementar:"Cursos", profissional:"Profissional", progresso:"Progresso", projecoes:"Projeções", financeiro:"Relatório financeiro"};
  function openLegacy(tab){
    if(window.__painelGoTo) window.__painelGoTo(tab);
    document.getElementById("juLegacyTitle").textContent = LEGACY_NAMES[tab] || "Painel";
    document.body.classList.add("ju-legacy");
    window.scrollTo(0,0);
  }

  // ---------- views ----------
  function viewInicio(){
    var k = todayKey(), now = new Date(), h = now.getHours();
    var greet = h<5 ? "Boa madrugada" : h<12 ? "Bom dia" : h<18 ? "Boa tarde" : "Boa noite";
    var s = sums(monthKey(now)), ht = habitsToday(), ls = lastSleep(), wk = sleepWeek();
    var tasks = J().tasks.filter(function(t){ return !t.feita && t.data<=k; }).slice(0,3);
    var blocks = todaysBlocks(), m = now.getHours()*60+now.getMinutes();
    var nextBlocks = blocks.filter(function(b){ return toMin(b.fim) > m; }).slice(0,3);
    var ag = (state.agenda||[]).filter(function(a){ return a && a.date===k; });
    var soon = (state.agenda||[]).filter(function(a){ return a && a.date && a.date>k && a.date<=dKey(addDays(now,14)); }).sort(function(a,b){ return (a.date+(a.time||"")).localeCompare(b.date+(b.time||"")); }).slice(0,3);
    var mood = J().mood[k], moodE = mood && mood.v ? (JU_MOODS.filter(function(x){return x.v===mood.v;})[0]||{}).e : null;
    var moodStrip = ""; for(var i=6;i>=0;i--){ var mm = J().mood[todayKey(-i)]; moodStrip += '<b style="height:'+(mm&&mm.v?20+mm.v*9:6)+'px" class="'+(mm&&mm.v?"":"off")+'"></b>'; }

    return ''+
    '<div class="ju-chips" role="navigation" aria-label="Atalhos">'+
      chip("plano","Agenda","cal","agenda")+chip("estudos","Estudos","cap","sono")+chip("tarefas","Tarefas","tasks","tarefas")+chip("compras","Compras","bag","habitos")+chip("financas","Finanças","coin","financas")+'<button class="ju-chip" data-legacy="progresso" style="'+tone("habitos")+'"><i>'+ico("trend")+'</i><span>Evolução</span></button>'+
      chip("sono","Sono","moon","sono")+chip("bemestar","Bem-estar","heart","bemestar")+chip("tracker","Hábitos","leaf","habitos")+
    '</div>'+
    '<div class="ju-hello"><div><h2>'+greet+', Ju!</h2><p>'+esc(helloLine())+'</p></div>'+
      '<button type="button" id="juPhoto" aria-label="Trocar foto"><img id="juPhotoImg" src="'+photoOfDay(photoOffset)+'" alt="Foto da Ju"></button></div>'+
    '<div id="agoraSlot"></div>'+
    '<div class="ju-grid">'+
      '<section class="ju-card" style="'+tone("agenda")+'"><div class="ju-head"><span class="ic">'+ico("cal")+'</span><h3>Minha agenda</h3><button class="ju-plus" data-act="task" aria-label="Nova tarefa">'+ico("plus")+'</button></div>'+
        ((ag.length||nextBlocks.length) ? '<ul class="ju-list ju-agenda">'+
          ag.map(function(a){ return '<li style="--c:var(--j-red)"><span class="dot"></span><span class="t">'+esc(a.time||"—")+'</span><span class="x">'+esc(a.title||"Compromisso")+'</span></li>'; }).join("")+
          nextBlocks.slice(0, Math.max(0,3-ag.length)).map(function(b){ return '<li style="--c:var('+(AREA_COLOR[b.area]||"--j-rose")+')"><span class="dot"></span><span class="t">'+esc(b.ini)+'</span><span class="x">'+esc(blockLabel(b))+'</span></li>'; }).join("")+
        '</ul>' : '<p class="ju-empty">Dia livre a partir de agora.</p>')+
        (soon.length ? '<span class="ju-label" style="display:block;margin-top:10px">Próximos dias</span><ul class="ju-list ju-agenda">'+soon.map(function(a){ return '<li style="--c:var(--j-red)"><span class="dot"></span><span class="t">'+esc(fmtDay(parseKey(a.date)))+'</span><span class="x">'+esc(a.title||"Compromisso")+'</span></li>'; }).join("")+'</ul>' : '')+
        '<button class="ju-more" data-go="plano">Ver agenda '+ico("chev")+'</button></section>'+
      '<section class="ju-card" style="'+tone("tarefas")+'"><div class="ju-head"><span class="ic">'+ico("tasks")+'</span><h3>Minhas tarefas</h3><button class="ju-plus" data-act="task" aria-label="Nova tarefa">'+ico("plus")+'</button></div>'+
        (tasks.length ? '<ul class="ju-list">'+tasks.map(taskRow).join("")+'</ul>' : '<p class="ju-empty">Nada pendente para hoje. Toque em + para anotar.</p>')+
        '<button class="ju-more" data-go="tarefas">Ver todas '+ico("chev")+'</button></section>'+
      '<section class="ju-card" style="'+tone("financas")+'"><div class="ju-head"><span class="ic">'+ico("coin")+'</span><h3>Finanças</h3></div>'+
        '<span class="ju-label">Saldo do mês</span><div class="ju-mid '+(s.saldo<0?"down":"")+'">'+money(s.saldo)+'</div>'+
        '<div class="ju-muted" style="margin-top:6px"><span class="up">↑ '+money(s.ent)+'</span> · <span class="down">↓ '+money(s.sai)+'</span></div>'+
        '<button class="ju-more" data-go="financas">Ver detalhes '+ico("chev")+'</button></section>'+
      '<section class="ju-card" style="'+tone("sono")+'"><div class="ju-head"><span class="ic">'+ico("moon")+'</span><h3>Sono</h3></div>'+
        '<span class="ju-label">Última noite</span><div class="ju-mid">'+(ls?hm(ls.h):"—")+'</div>'+
        '<div class="ju-bars" style="height:52px;margin-top:6px;--c:var(--j-lav)">'+wk.map(function(x){ return '<div><b class="'+(x.h?"":"off")+'" style="height:'+(x.h?Math.min(100,x.h/10*100):8)+'%"></b></div>'; }).join("")+'</div>'+
        '<button class="ju-more" data-go="sono">'+(ls?"Ver mais":"Registrar noite")+' '+ico("chev")+'</button></section>'+
      '<section class="ju-card" style="'+tone("bemestar")+'"><div class="ju-head"><span class="ic">'+ico("heart")+'</span><h3>Bem-estar</h3></div>'+
        '<span class="ju-label">Humor de hoje</span>'+
        '<div style="display:flex;align-items:center;gap:10px;margin-top:4px"><button class="ju-plus" data-act="mood" style="width:46px;height:46px;font-size:28px" aria-label="Registrar humor">'+(moodE||ico("plus"))+'</button>'+
        '<div class="ju-bars" style="height:46px;flex:1;--c:var(--j-rose)">'+moodStrip.replace(/<b /g,'<div><b ').replace(/<\/b>/g,'</b></div>')+'</div></div>'+
        '<button class="ju-more" data-go="bemestar">Ver diário '+ico("chev")+'</button></section>'+
      '<section class="ju-card" style="'+tone("habitos")+'"><div class="ju-head"><span class="ic">'+ico("leaf")+'</span><h3>Meus hábitos</h3></div>'+
        '<div style="display:flex;align-items:center;gap:12px">'+ring(ht.total?ht.done/ht.total:0, ht.done+"/"+ht.total, "", "var(--j-green)", 66)+
        '<span class="ju-muted">concluídos hoje</span></div>'+
        '<button class="ju-more" data-go="tracker">Ver hábitos '+ico("chev")+'</button></section>'+
    '</div>';
  }
  function chip(go, label, icon, t){ return '<button class="ju-chip" data-go="'+go+'" style="'+tone(t)+'"><i>'+ico(icon)+'</i><span>'+label+'</span></button>'; }
  function taskRow(t){ return '<li class="ju-check'+(t.feita?" done":"")+'"><button data-task="'+esc(t.id)+'" aria-label="'+(t.feita?"Desmarcar":"Concluir")+' tarefa">'+ico("check")+'</button><span>'+esc(t.texto)+'</span></li>'; }

  function viewPlano(){
    var today = new Date(), sel = addDays(today, juPlanDay), selKey = dKey(sel);
    var dk = DAY_KEYS[sel.getDay()];
    var blocks = ((state.dayPlan&&state.dayPlan.blocks)||[]).filter(function(b){ return !b.dias || b.dias.indexOf(dk)>-1; }).slice().sort(function(a,b){ return toMin(a.ini)-toMin(b.ini); });
    var ag = (state.agenda||[]).filter(function(a){ return a && a.date===selKey; });
    var items = blocks.map(function(b){ return {ini:b.ini, fim:b.fim, txt:blockLabelFor(b, dk), area:b.area}; })
      .concat(ag.map(function(a){ return {ini:a.time||"00:00", fim:a.time||"00:00", txt:a.title||"Compromisso", sub:[a.place,a.phone].filter(Boolean).join(" · "), area:"agenda", ag:true}; }))
      .sort(function(a,b){ return toMin(a.ini)-toMin(b.ini); });
    var m = today.getHours()*60+today.getMinutes();
    var days = ""; for(var i=0;i<7;i++){ var d = addDays(today,i); days += '<button data-day="'+i+'" class="'+(i===juPlanDay?"on":"")+'"><small>'+(i===0?"hoje":JU_WEEK[d.getDay()])+'</small><b>'+d.getDate()+'</b></button>'; }
    var tasks = J().tasks.filter(function(t){ return t.data===selKey || (juPlanDay===0 && !t.feita && t.data<selKey); });
    var upcoming = (state.agenda||[]).filter(function(a){ return a && a.date && a.date>dKey(addDays(today,6)); }).sort(function(a,b){ return a.date.localeCompare(b.date); }).slice(0,4);
    return ''+
    '<div class="ju-days" role="tablist" aria-label="Dias">'+days+'</div>'+
    '<section class="ju-card"><div class="ju-head" style="'+tone("agenda")+'"><span class="ic">'+ico("cal")+'</span><h3>'+(juPlanDay===0?"Hoje":sel.toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long"}))+'</h3></div>'+
      (items.length ? '<ul class="ju-timeline">'+items.map(function(it){
        var cls = juPlanDay===0 ? (m>=toMin(it.fim) && !it.ag ? "past" : (m>=toMin(it.ini) && m<toMin(it.fim) ? "now" : "")) : "";
        return '<li class="'+cls+'" style="--c:var('+(it.ag?"--j-red":(AREA_COLOR[it.area]||"--j-rose"))+')"><span class="t">'+esc(it.ini)+'</span><span class="d"></span><span class="x">'+esc(it.txt)+(it.ag&&it.sub?'<small>'+esc(it.sub)+'</small>':(!it.ag?'<small>até '+esc(it.fim)+'</small>':''))+'</span></li>';
      }).join("")+'</ul>' : '<p class="ju-empty">Nada planejado para este dia.</p>')+
      '<button class="ju-more" data-legacy="rotina">Ajustar horários '+ico("chev")+'</button></section>'+
    '<section class="ju-card" style="'+tone("tarefas")+'"><div class="ju-head"><span class="ic">'+ico("tasks")+'</span><h3>Tarefas do dia</h3><button class="ju-plus" data-act="task" aria-label="Nova tarefa">'+ico("plus")+'</button></div>'+
      (tasks.length ? '<ul class="ju-list">'+tasks.map(taskRow).join("")+'</ul>' : '<p class="ju-empty">Sem tarefas para este dia.</p>')+'</section>'+
    (upcoming.length ? '<section class="ju-card"><div class="ju-head" style="'+tone("agenda")+'"><span class="ic">'+ico("star")+'</span><h3>Mais adiante</h3></div><ul class="ju-list ju-agenda">'+
      upcoming.map(function(a){ return '<li style="--c:var(--j-red)"><span class="dot"></span><span class="t">'+fmtDay(parseKey(a.date))+'</span><span class="x">'+esc(a.title||"Compromisso")+(a.time?' · '+esc(a.time):'')+'</span></li>'; }).join("")+'</ul></section>' : '');
  }
  function blockLabelFor(b, dk){
    if(b.txt==="Treino do dia"){ var p = state.workout.plan[dk] || "Descanso"; var i = p.indexOf(":"); return i>-1 ? p.slice(0,i) : p; }
    return b.txt;
  }

  function viewTracker(){
    var k = todayKey(), ht = habitsToday(), hs = J().habits;
    var html = '<section class="ju-card" style="display:flex;align-items:center;gap:16px;'+tone("habitos")+'">'+
      ring(ht.total?ht.done/ht.total:0, ht.done+"/"+ht.total, "HOJE", "var(--j-green)", 84)+
      '<div style="flex:1;min-width:0"><h2 style="font-size:24px">'+(ht.done===ht.total&&ht.total?"Dia completo! 🎉":"Seus hábitos de hoje")+'</h2>'+
      '<p class="ju-muted" style="margin:4px 0 0">'+(ht.total-ht.done>0 ? "Faltam "+(ht.total-ht.done)+". Um de cada vez." : "Você cuidou de tudo hoje.")+'</p></div></section>';
    JU_PERIODS.forEach(function(p){
      var list = hs.filter(function(h){ return (h.periodo||"manha")===p[0]; });
      if(!list.length) return;
      var dn = list.filter(function(h){ return habitDone(h,k); }).length;
      html += '<div class="ju-period">'+p[1]+' <small>'+dn+'/'+list.length+'</small></div>';
      list.forEach(function(h){
        var done = habitDone(h,k), st = habitStreak(h);
        var wb = "";
        if(h.tipo==="agua"){
          var w = water(k), g = "";
          for(var i=1;i<=8;i++) g += '<button class="g'+(i<=w?" on":"")+'" data-water="'+i+'" aria-label="'+i+' copo'+(i>1?"s":"")+'">'+ico("glass")+'</button>';
          wb = '<div class="ju-water"><div class="row"><b class="num" style="color:var(--j-sky)">'+(w*250)+' ml <span style="font-weight:400;color:var(--j-soft)">de 2.000 ml</span></b>'+
            '<span><button class="pm" data-water="'+Math.max(0,w-1)+'" aria-label="Menos um copo">−</button> <button class="pm" data-water="'+Math.min(8,w+1)+'" aria-label="Mais um copo">+</button></span></div><div class="glasses">'+g+'</div></div>';
        }
        var sub = h.tipo==="treino" ? '<div class="ju-muted">'+esc(todaysWorkoutShort())+'</div>' : "";
        html += '<div class="ju-habit'+(done?" done":"")+'"><button class="tick" data-habit="'+esc(h.id)+'" aria-label="'+(done?"Desmarcar":"Concluir")+' '+esc(h.nome)+'">'+ico("check")+'</button>'+
          '<div style="min-width:0"><div class="tags"><span class="ju-tag">Hábito</span><span class="ju-streak">'+(st?"🔥 "+st+(st>1?" dias":" dia"):"comece hoje")+'</span></div>'+
          '<div class="nm">'+esc(h.em||"")+' '+esc(h.nome)+'</div>'+sub+'</div>'+
          '<button class="ju-del" data-delhabit="'+esc(h.id)+'" aria-label="Apagar">'+ico("trash")+'</button>'+wb+'</div>';
      });
    });
    html += '<button class="ju-btn soft block" data-act="habit">'+ico("plus")+' Novo hábito</button>';
    html += '<section class="ju-card"><div class="ju-head" style="'+tone("financas")+'"><span class="ic">'+ico("trend")+'</span><h3>Dashboards de evolução</h3></div>'+
      '<p class="ju-muted" style="margin:0 0 12px">Índice geral, sequência de treino, rotina, água, dívidas quitadas, estudos e a revisão semanal por área.</p>'+
      '<div class="ju-grid"><button class="ju-btn primary" data-legacy="progresso">'+ico("chart")+' Progresso</button><button class="ju-btn soft" data-legacy="projecoes">'+ico("star")+' Projeções</button></div></section>';
    return html;
  }

  function viewFinancas(){
    var now = new Date(), mk = monthKey(now), s = sums(mk), mo = J().money;
    var subsTotal = mo.subs.reduce(function(a,b){ return a+b.valor; },0);
    var fixas = mo.bills.filter(function(b){ return b.recorrente; });
    var fixasTotal = fixas.reduce(function(a,b){ return a+b.valor; },0);
    fixasTotal += extFin().contas.reduce(function(a,c){ return a+(Number(c.previsto)||0); },0);
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var pending = mo.bills.concat(mo.subs.map(function(x){ return {id:x.id, nome:x.nome, valor:x.valor, recorrente:true, dia:x.dia, pagos:x.pagos||{}, sub:true}; }))
      .filter(function(b){ return !billPaid(b) && billDue(b); })
      .map(function(b){ var d = billDue(b); return {b:b, d:d, days:Math.round((d-today)/86400000)}; })
      .concat(extFin().contas.filter(function(c){ return c && c.status!=="paga" && c.venceEm; }).map(function(c){
        var d = parseKey(String(c.venceEm).slice(0,10));
        return {b:{id:c.id, nome:c.nome, valor:Number(c.previsto)||0, ext:true, conta:c.tipo==="lar" ? "Lar · "+(c.responsavel||"") : (c.conta||"")}, d:d, days:Math.round((d-today)/86400000)};
      }))
      .sort(function(a,b){ return a.d-b.d; });
    var byCat = {}; monthTx(mk).filter(function(t){ return t.tipo!=="entrada"; }).forEach(function(t){ byCat[t.cat] = (byCat[t.cat]||0)+t.valor; });
    var cats = Object.keys(byCat).map(function(id){ var c = JU_CATS.filter(function(x){return x.id===id;})[0] || JU_CATS[JU_CATS.length-1]; return {c:c, v:byCat[id]}; }).sort(function(a,b){ return b.v-a.v; });
    var total = cats.reduce(function(a,b){ return a+b.v; },0);
    var donut = "", off = 0, r = 40, circ = 2*Math.PI*r;
    cats.forEach(function(x){ var len = total? x.v/total*circ : 0; donut += '<circle cx="50" cy="50" r="'+r+'" fill="none" stroke="'+x.c.cor+'" stroke-width="16" stroke-dasharray="'+Math.max(0,len-1.5).toFixed(2)+' '+circ.toFixed(2)+'" stroke-dashoffset="'+(-off).toFixed(2)+'"/>'; off += len; });
    var recent = allTx().sort(function(a,b){ return String(b.data).localeCompare(String(a.data)); }).slice(0,10);
    var debts = (state.debts||[]).filter(function(d){ return d && d.status!=="pago" && d.status!=="quitado"; });
    var debtTotal = debts.reduce(function(a,d){ return a+(Number(d.value)||0); },0);
    var debtGroups = {}; debts.forEach(function(d){ var g = d.group||"Outras"; (debtGroups[g] = debtGroups[g] || {n:0, v:0}); debtGroups[g].n++; debtGroups[g].v += Number(d.value)||0; });
    var ef = extFin();
    var monthName = now.toLocaleDateString("pt-BR",{month:"long"});
    return ''+
    '<section class="ju-card ju-money-hero"><span class="ic">'+ico("wallet")+'</span><div style="flex:1;min-width:0"><span class="ju-label">Saldo de '+monthName+'</span>'+
      '<div class="ju-big '+(s.saldo<0?"down":"")+'">'+money(s.saldo)+'</div></div></section>'+
    '<div class="ju-grid">'+
      '<section class="ju-card"><div class="ju-flow in"><i>'+ico("up")+'</i>Entrou no mês</div><div class="ju-mid up">'+money(s.ent)+'</div></section>'+
      '<section class="ju-card"><div class="ju-flow out"><i>'+ico("down")+'</i>Saiu no mês</div><div class="ju-mid">'+money(s.sai)+'</div></section>'+
      '<button class="ju-btn primary" data-act="gasto">'+ico("plus")+' Gasto</button>'+
      '<button class="ju-btn soft" data-act="entrada">'+ico("plus")+' Entrada</button>'+
      '<section class="ju-card tint" style="'+tone("sono")+'"><span class="ju-label">Assinaturas ativas</span><div class="ju-mid">'+mo.subs.length+'</div><div class="ju-muted">'+money(subsTotal)+' por mês</div><button class="ju-more" data-act="sub">Adicionar '+ico("plus")+'</button></section>'+
      '<section class="ju-card tint" style="'+tone("financas")+'"><span class="ju-label">Contas fixas</span><div class="ju-mid">'+money(fixasTotal)+'</div><div class="ju-muted">comprometido no mês</div><button class="ju-more" data-act="bill">Adicionar '+ico("plus")+'</button></section>'+
    '</div>'+
    '<section class="ju-card"><div class="ju-head" style="'+tone("financas")+'"><span class="ic">'+ico("cal")+'</span><h3>Contas a pagar</h3><button class="ju-plus" data-act="bill" aria-label="Nova conta">'+ico("plus")+'</button></div>'+
      (pending.length ? '<ul class="ju-list" style="gap:14px">'+pending.slice(0,8).map(function(p){
        var late = p.days<0, pct = Math.max(6, Math.min(100, 100 - p.days/30*100));
        var col = late ? "var(--j-red)" : p.days<=3 ? "var(--j-orange)" : "var(--j-lav)";
        return '<li class="ju-bill"><span class="em">'+(p.b.sub?"📺":"🧾")+'</span><div style="min-width:0"><div class="nm">'+esc(p.b.nome)+'</div>'+
          '<div class="dd">'+(late?'venceu '+fmtDay(p.d):p.days===0?'vence hoje':p.days===1?'vence amanhã':'vence '+fmtDay(p.d))+'</div>'+
          '<div class="ju-progress" style="--c:'+col+'"><i style="width:'+pct.toFixed(0)+'%"></i></div></div>'+
          '<div><div class="vl '+(late?"down":"")+'">'+money(p.b.valor)+'</div>'+(p.b.ext ? '<small class="ju-muted" style="font-size:11px">'+esc(p.b.conta||"")+'</small>' : '<button class="pay" data-pay="'+esc(p.b.id)+'">Paguei</button>')+'</div></li>';
      }).join("")+'</ul>' : '<p class="ju-empty">Nenhuma conta pendente neste mês. Cadastre luz, internet, aluguel e o app avisa o vencimento.</p>')+'</section>'+
    '<section class="ju-card"><div class="ju-head" style="'+tone("financas")+'"><span class="ic">'+ico("chart")+'</span><h3>Gastos por categoria</h3></div>'+
      (cats.length ? '<div class="ju-donut"><div style="position:relative"><svg viewBox="0 0 100 100">'+donut+'</svg><div style="position:absolute;inset:0;display:grid;place-items:center;text-align:center;font-size:12px;color:var(--j-soft)">Neste<br>mês</div></div>'+
        '<ul class="ju-legend">'+cats.slice(0,6).map(function(x){ return '<li><i style="background:'+x.c.cor+'"></i><span>'+x.c.em+' '+esc(x.c.nome)+'</span><b>'+money(x.v)+'</b></li>'; }).join("")+'</ul></div>'
      : '<p class="ju-empty">Registre seus gastos com o botão “Gasto” para ver aqui onde o dinheiro vai.</p>')+'</section>'+
    '<section class="ju-card"><div class="ju-head"><span class="ic" style="'+tone("financas")+'">'+ico("trend")+'</span><h3>Últimos lançamentos</h3></div>'+
      (recent.length ? '<ul class="ju-list">'+recent.map(function(t){
        var c = t.tipo==="entrada" ? (JU_IN_CATS.filter(function(x){return x.id===t.cat;})[0]||JU_IN_CATS[0]) : (JU_CATS.filter(function(x){return x.id===t.cat;})[0]||JU_CATS[JU_CATS.length-1]);
        return '<li class="ju-tx"><span class="em">'+c.em+'</span><span style="min-width:0">'+esc(t.desc||c.nome)+'<small>'+fmtDay(parseKey(t.data))+' · '+esc(t.ext ? (t.conta||"e-mail")+(t.pend?" · a setorizar":"") : c.nome)+'</small></span>'+
          '<b class="num '+(t.tipo==="entrada"?"up":"")+'">'+(t.tipo==="entrada"?"+":"−")+money(t.valor).replace("R$ ","R$ ")+'</b>'+(t.ext ? '<span></span>' : '<button class="ju-del" data-deltx="'+esc(t.id)+'" aria-label="Apagar">'+ico("trash")+'</button>')+'</li>';
      }).join("")+'</ul>' : '<p class="ju-empty">Ainda sem lançamentos.</p>')+'</section>'+
    (debts.length ? '<section class="ju-card"><div class="ju-head" style="'+tone("financas")+'"><span class="ic">'+ico("chart")+'</span><h3>Dívidas em aberto</h3></div>'+
      '<span class="ju-label">'+debts.length+' itens pendentes</span><div class="ju-mid down">'+money(debtTotal)+'</div>'+
      '<ul class="ju-legend" style="margin-top:10px">'+Object.keys(debtGroups).map(function(g){ return '<li><i style="background:var(--j-gold)"></i><span>'+esc(g)+' ('+debtGroups[g].n+')</span><b>'+(debtGroups[g].v?money(debtGroups[g].v):"valor a confirmar")+'</b></li>'; }).join("")+'</ul>'+
      '<button class="ju-more" data-legacy="dividas">Ver plano de quitação '+ico("chev")+'</button></section>' : '')+
    (ef.quando ? '<p class="ju-muted" style="font-size:12px;text-align:center;margin:0">Contas e lançamentos do e-mail atualizados em '+esc(ef.quando)+'.</p>' : '')+
    '<div class="ju-grid"><button class="ju-btn ghost" data-legacy="financeiro">Relatório completo</button><button class="ju-btn ghost" data-legacy="dividas">Dívidas</button></div>';
  }

  function viewSono(){
    var ls = lastSleep(), goal = +J().sleepGoal||7, wk = sleepWeek();
    var vals = wk.filter(function(x){ return x.h; }).map(function(x){ return x.h; });
    var avg = vals.length ? vals.reduce(function(a,b){return a+b;},0)/vals.length : null;
    var best = vals.length ? Math.max.apply(null, vals) : null;
    var inGoal = vals.filter(function(h){ return h>=goal-0.01; }).length;
    var debt = wk.reduce(function(a,x){ return a + (x.h!=null ? Math.max(0, goal-x.h) : 0); },0);
    var h = new Date().getHours();
    var maxH = Math.max(goal+1, best||0, 9);
    var plotH = 104, goalTop = 18 + Math.round(plotH*(1-goal/maxH));
    return ''+
    '<section class="ju-night"><span class="ju-label">'+(h<12?"Bom dia":h<18?"Boa tarde":"Boa noite")+'</span><h2>'+(ls?"Como foi sua noite?":"Vamos acompanhar seu sono?")+'</h2>'+
      '<div class="row">'+ring(ls&&ls.h?ls.h/goal:0, ls?hm(ls.h):"—", ls&&ls.h?Math.round(ls.h/goal*100)+"% da meta":"sem registro", "#C9B8F5", 96)+
      '<div><div style="font-weight:600">'+(ls?"Última noite: "+hm(ls.h):"Registre sua primeira noite")+'</div>'+
      '<div style="font-size:13px;color:#DCCDEB">'+(ls ? (ls.h>=goal?"Meta de sono alcançada.":"Faltaram "+hm(goal-ls.h)+" para a meta.") : "Leva 10 segundos, ao acordar.")+'</div>'+
      '<span class="pill">🎯 meta '+hm(goal)+'</span>'+(ls?'<span class="pill">🛏️ '+esc(ls.e.deitou)+' → '+esc(ls.e.acordou)+'</span>':'')+'</div></div>'+
      '<button class="ju-btn block" data-act="sleep">'+ico("plus")+' Registrar minha noite</button></section>'+
    '<div class="ju-grid">'+
      stat("🌙","Média da semana", avg?hm(avg):"—")+stat("🏆","Melhor noite", best?hm(best):"—")+
      stat("🔥","Noites na meta", String(inGoal))+stat("💤","Dívida de sono", vals.length?(debt<0.1?'<span class="up">zerada</span>':hm(debt)):"—")+
    '</div>'+
    '<section class="ju-card"><div class="ju-head" style="'+tone("sono")+'"><span class="ic">'+ico("chart")+'</span><h3>Sua semana</h3><span class="ju-muted">meta '+hm(goal)+'</span></div>'+
      '<div class="ju-weekbars"><div class="goal" style="top:'+goalTop+'px"><span>meta</span></div>'+
      wk.map(function(x){ return '<div><em>'+(x.h?hm(x.h):"")+'</em><i><b class="'+(x.h?"":"off")+'" style="height:'+(x.h?Math.max(6,Math.round(x.h/maxH*plotH)):6)+'px"></b></i><span>'+JU_WEEK[x.d.getDay()]+'</span></div>'; }).join("")+
      '</div></section>';
  }
  function stat(em, label, val){ return '<section class="ju-card ju-stat"><div class="em">'+em+'</div><span class="ju-label">'+label+'</span><div class="ju-mid">'+val+'</div></section>'; }

  // Dieta do dia: cardápio de hoje (state.diet.plan), água e suplementos.
  // Dicas de execução da ficha da EF Academia (Prof. Bruna).
  var JU_FICHA_URL = "https://claude.ai/artifact/7hg3iJtaqShcqpa5HKxUqK";
  var JU_TIPS = [["Agachamento Barra Guiada", "joelhos alinhados com a ponta do pé, não deixe cair para dentro; desça até 90° sem tirar o calcanhar do chão."], ["Agachamento Pêndulo", "mantenha a lombar apoiada no encosto — o movimento vem do quadril e joelho, não da lombar."], ["Agachamento Sumô Articulado", "empurre os joelhos na direção dos pés durante a descida, sem deixá-los fechar."], ["Leg 45°", "não trave os joelhos no topo nem descole a lombar do banco na descida."], ["Leg Horizontal Unilateral", "desça devagar e controlado — é fácil compensar com o lado mais forte."], ["Extensora", "segure o pico sem jogar o corpo para trás; desça controlado, sem soltar o peso."], ["Glúteo Máquina", "aperte o glúteo com força no topo; evite hiperestender a lombar."], ["Flexora", "mantenha o quadril fixo — o movimento é só do joelho, não do quadril."], ["Adutor", "movimento controlado nas duas direções, sem usar impulso."], ["Abdutor", "movimento controlado nas duas direções, sem usar impulso."], ["Panturrilha", "amplitude completa — alongue bem embaixo antes de subir na ponta do pé."], ["Desenvolvimento", "core firme, sem jogar a lombar para trás; cotovelos levemente à frente do corpo."], ["Elevação Lateral", "cotovelos levemente flexionados, sem usar impulso do tronco para subir o peso."], ["Elevação Frontal", "sem balançar o corpo para ajudar a levantar o peso."], ["Supino Vertical", "escápulas retraídas contra o banco antes de empurrar."], ["Peck Deck Posterior", "leve flexão no cotovelo; foque em afastar os braços com a escápula."], ["Peck Deck", "movimento controlado, como se fosse abraçar um tronco de árvore."], ["Tríceps Cross Barra", "cotovelos colados ao corpo — só o antebraço se move."], ["Tríceps Cross Corda", "abra a corda no final do movimento para ativar mais a cabeça lateral."], ["Puxador Frente", "puxe com as costas, não só com o braço — leve o cotovelo em direção ao bolso de trás."], ["Puxador High Row", "peito estufado, ombros baixos durante todo o movimento."], ["Remada Curvada", "não arredonde a lombar; puxe levando os cotovelos para trás, não para cima."], ["Tração Cross", "braços praticamente retos; o movimento vem do ombro, não do cotovelo."], ["Rosca Scott", "não estenda o cotovelo totalmente no fim, para preservar a articulação."], ["Rosca Martelo", "cotovelo fixo ao lado do corpo, pegada neutra o tempo todo."], ["Reto Sob", "leve o queixo em direção ao peito, sem puxar o pescoço com as mãos."], ["Prancha Frontal", "quadril alinhado (nem subido, nem caído); respire normalmente durante o tempo."]];
  function tipFor(name){ for(var i=0;i<JU_TIPS.length;i++){ if(String(name).indexOf(JU_TIPS[i][0])===0) return JU_TIPS[i][1]; } return ""; }
  function treinoDoDia(){
    var keys = ["dom","seg","ter","qua","qui","sex","sab"], now = new Date(), dk = keys[now.getDay()], k = todayKey();
    var plan = (state.workout && state.workout.plan && state.workout.plan[dk]) || "Descanso";
    var log = (state.workout && state.workout.log) || {}, done = !!log[k];
    var m = /Treino\s+([A-Z])\b/.exec(plan);
    var det = m && typeof WORKOUT_DETAIL!=="undefined" ? WORKOUT_DETAIL.filter(function(w){ return w.letter===m[1]; })[0] : null;
    var cut = plan.indexOf(":"), titulo = cut>-1 ? plan.slice(0,cut) : plan, resumo = cut>-1 ? plan.slice(cut+1).trim() : "";
    var week = ""; for(var i=6;i>=0;i--){ var d = addDays(now,-i), kk = dKey(d); week += '<span style="flex:1;text-align:center"><b style="display:block;height:26px;border-radius:8px;margin-bottom:4px;background:'+(log[kk]?"var(--j-green)":"var(--j-surface-2)")+(kk===k?";outline:2px solid var(--j-green);outline-offset:1px":"")+'"></b><small class="ju-muted" style="font-size:10.5px">'+JU_WEEK[d.getDay()]+'</small></span>'; }
    var body = det ? det.blocks.map(function(b){
        return '<li style="display:block"><span class="ju-label" style="display:block">'+esc(b.name)+'</span>'+b.items.map(function(it){
          var tip = tipFor(it[0]);
          return '<details style="font-size:13.5px;padding:2px 0"><summary style="display:flex;justify-content:space-between;gap:10px;cursor:pointer;list-style:none"><span style="min-width:0">'+esc(it[0])+(tip?' <span class="ju-muted" style="font-size:11px">ⓘ</span>':'')+'</span><span class="ju-muted num" style="white-space:nowrap">'+esc(it[1])+'</span></summary>'+
            (tip ? '<p class="ju-muted" style="margin:4px 0 6px;font-size:12.5px;line-height:1.45"><b>Atenção:</b> '+esc(tip)+'</p>' : '')+'</details>'; }).join("")+'</li>';
      }).join("")
      : (resumo ? '<li style="display:block">'+esc(resumo)+'</li>' : '');
    return '<section class="ju-card" style="'+tone("treino")+'"><div class="ju-head"><span class="ic">'+ico("dumb")+'</span><h3>Treino do dia</h3><span class="ju-muted">'+esc(det ? det.title : "")+'</span></div>'+
      '<div class="ju-mid" style="font-size:22px">'+esc(titulo)+'</div>'+
      (body ? '<ul class="ju-list" style="gap:10px;margin-top:10px">'+body+'</ul>' : '')+
      '<span class="ju-label" style="display:block;margin-top:14px">Últimos 7 dias</span><div style="display:flex;gap:6px;margin-top:6px">'+week+'</div>'+
      '<div class="ju-grid" style="margin-top:12px"><button class="ju-btn '+(done?"soft":"primary")+'" data-treino="1">'+(done?"✓ Treino feito":"Marcar treino feito")+'</button><a class="ju-btn ghost" href="'+JU_FICHA_URL+'" target="_blank" rel="noopener" style="text-align:center;text-decoration:none">Ficha da academia</a></div>'+
      (det ? '<p class="ju-muted" style="font-size:12px;margin:10px 0 0">Toque no exercício para ver a dica de execução. Descanso: 45–60s nas séries de 20; 60–90s nas de 15.</p>' : '')+'</section>';
  }
  function dietaDoDia(){
    var dk = ["dom","seg","ter","qua","qui","sex","sab"][new Date().getDay()];
    var plan = (state.diet && state.diet.plan && state.diet.plan[dk]) || {};
    var meals = [["cafe","☕","Café da manhã"],["almoco","🥗","Almoço"],["lanche","🍎","Lanche"],["jantar","🌙","Jantar"]];
    var k = todayKey(), w = ((state.diet && state.diet.log && state.diet.log[k]) || {}).water || 0;
    var sup = Array.isArray(state.supplements) ? state.supplements : [];
    var has = meals.some(function(m){ return plan[m[0]]; });
    var hr = new Date().getHours(), cur = hr<10 ? "cafe" : hr<15 ? "almoco" : hr<18 ? "lanche" : "jantar";
    return '<section class="ju-card" style="'+tone("habitos")+'"><div class="ju-head"><span class="ic">'+ico("apple")+'</span><h3>Cardápio do dia</h3><span class="ju-muted">'+["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"][new Date().getDay()]+'</span></div>'+
      (has ? '<ul class="ju-list" style="gap:12px">'+meals.filter(function(m){ return plan[m[0]]; }).map(function(m){
        return '<li style="display:grid;grid-template-columns:28px minmax(0,1fr);gap:8px;align-items:start'+(m[0]===cur?';background:var(--j-blush);border-radius:12px;padding:8px;margin:-8px':'')+'"><span style="font-size:19px;line-height:1.2">'+m[1]+'</span><span style="min-width:0"><span class="ju-label" style="display:block">'+m[2]+'</span>'+esc(plan[m[0]])+'</span></li>';
      }).join("")+'</ul>' : '<p class="ju-empty">Sem cardápio para hoje. Monte o da semana na Dieta.</p>')+
      '<div class="ju-row" style="margin-top:12px"><span>💧 Água hoje</span><b class="num">'+w+'/8 copos</b></div>'+
      '<div class="ju-progress" style="--c:var(--j-blue,#2E78B7);margin-top:6px"><i style="width:'+Math.min(100,w/8*100).toFixed(0)+'%"></i></div>'+
      (sup.length ? '<details style="margin-top:12px"><summary class="ju-muted" style="cursor:pointer">Suplementos do dia</summary><ul class="ju-list" style="margin-top:8px;gap:8px">'+sup.map(function(g){
        return '<li style="display:block"><span class="ju-label" style="display:block">'+esc(g.period||"")+'</span>'+(g.items||[]).map(function(it){ return esc(it[0])+(it[1]?' <small class="ju-muted">· '+esc(it[1])+'</small>':''); }).join('<br>')+'</li>';
      }).join("")+'</ul></details>' : '')+
      '<div class="ju-grid" style="margin-top:12px"><button class="ju-btn soft" data-go="tracker">Marcar água</button><button class="ju-btn ghost" data-legacy="dieta">Cardápio da semana</button><button class="ju-btn ghost" data-go="compras">Lista do mercado</button></div></section>';
  }
  function viewBemestar(){
    var k = todayKey(), mood = J().mood[k];
    if(!juMonth){ var n = new Date(); juMonth = new Date(n.getFullYear(), n.getMonth(), 1); }
    var y = juMonth.getFullYear(), mo = juMonth.getMonth();
    var first = new Date(y, mo, 1), startPad = first.getDay(), daysIn = new Date(y, mo+1, 0).getDate();
    var cells = ["D","S","T","Q","Q","S","S"].map(function(d){ return '<span class="wd">'+d+'</span>'; }).join("");
    for(var i=0;i<startPad;i++) cells += '<span></span>';
    var reg = 0;
    for(var d=1; d<=daysIn; d++){
      var dt = new Date(y, mo, d), key = dKey(dt), e = J().mood[key];
      if(e && (e.v||e.nota)) reg++;
      var em = e && e.v ? (JU_MOODS.filter(function(x){return x.v===e.v;})[0]||{}).e : (e && e.nota ? "📝" : "");
      var future = dt > new Date();
      cells += '<button data-day="'+key+'" class="'+(key===k?"today ":"")+periodClass(dt)+'"'+(future?' disabled':'')+' aria-label="'+d+'">'+
        (em?'<span class="e">'+em+'</span>':'<span class="e none"></span>')+'<span class="n">'+d+'</span></button>';
    }
    var ci = cycleInfo();
    var liturgia = state.spirituality && state.spirituality.dailyLog && state.spirituality.dailyLog[k];
    var monthLabel = juMonth.toLocaleDateString("pt-BR",{month:"long"});
    return dietaDoDia()+treinoDoDia()+
    '<section class="ju-card" style="'+tone("bemestar")+'"><div class="ju-head"><span class="ic">'+ico("heart")+'</span><h3>Como você está hoje?</h3></div>'+
      '<div class="ju-moods">'+JU_MOODS.map(function(m){ return '<button type="button" data-mood="'+m.v+'" class="'+(mood&&mood.v===m.v?"on":"")+'">'+m.e+'<small>'+m.t+'</small></button>'; }).join("")+'</div>'+
      (mood&&mood.nota?'<p class="ju-muted" style="margin:10px 0 0">“'+esc(mood.nota)+'”</p>':'')+
      '<button class="ju-more" data-act="mood">'+(mood&&mood.nota?"Editar diário":"Escrever no diário")+' '+ico("chev")+'</button></section>'+
    '<section class="ju-card"><div class="ju-head" style="'+tone("bemestar")+'"><span class="ic">'+ico("book")+'</span><h3>Meu diário</h3><span class="ju-muted">'+reg+' registro'+(reg===1?"":"s")+'</span></div>'+
      '<div class="ju-month"><button data-month="-1" aria-label="Mês anterior">'+ico("back")+'</button><h3>'+monthLabel.charAt(0).toUpperCase()+monthLabel.slice(1)+'<small>'+y+'</small></h3><button data-month="1" aria-label="Próximo mês">'+ico("chev")+'</button></div>'+
      '<div class="ju-cal">'+cells+'</div>'+
      '<div class="ju-muted" style="display:flex;gap:14px;margin-top:10px;flex-wrap:wrap"><span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--j-red)"></span> Menstruação</span><span><span style="display:inline-block;width:7px;height:7px;border-radius:50%;border:1.5px dashed var(--j-red)"></span> Previsão</span></div></section>'+
    '<section class="ju-card"><span class="ju-label">Meu ciclo</span><div class="ju-cycle" style="margin-top:8px"><span class="drop">'+ico("drop")+'</span><div>'+
      (ci ? '<b>'+(ci.inDays===0?"Pode começar hoje":"Próxima em "+ci.inDays+" dia"+(ci.inDays>1?"s":""))+'</b><div class="ju-muted">Dia '+ci.day+' do ciclo · ciclo médio de '+ci.len+' dias · previsão '+fmtDay(ci.next)+'</div>'
          : '<b>Vamos acompanhar seu ciclo?</b><div class="ju-muted">Toque em “Registrar hoje” no primeiro dia da menstruação.</div>')+
      '</div></div><button class="ju-btn soft block" style="margin-top:12px" data-act="period">Registrar hoje</button></section>'+
    '<section class="ju-card" style="'+tone("agenda")+'"><div class="ju-head"><span class="ic">'+ico("cross")+'</span><h3>Fé de hoje</h3></div>'+
      (liturgia ? '<p style="margin:0;font-size:14px">'+esc(liturgia.tema||"")+'</p>'+(liturgia.aplicacao?'<p class="ju-muted" style="margin:8px 0 0">'+esc(liturgia.aplicacao)+'</p>':'')
        : '<p class="ju-empty">A liturgia do dia aparece aqui quando estiver registrada no seu painel.</p>')+
      '<button class="ju-more" data-legacy="espirito">Espiritualidade '+ico("chev")+'</button></section>';
  }

  function viewTarefas(){
    var k = todayKey(), ts = J().tasks;
    var late = ts.filter(function(t){ return !t.feita && t.data<k; }), today = ts.filter(function(t){ return !t.feita && t.data===k; });
    var next = ts.filter(function(t){ return !t.feita && t.data>k; }).sort(function(a,b){ return a.data.localeCompare(b.data); });
    var done = ts.filter(function(t){ return t.feita; }).slice(0,8);
    function group(title, list, showDate){
      if(!list.length) return "";
      return '<section class="ju-card"><span class="ju-label">'+title+' · '+list.length+'</span><ul class="ju-list" style="margin-top:10px">'+list.map(function(t){
        return '<li style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center">'+taskRow(t).replace(/^<li/,'<div').replace(/<\/li>$/,'</div>').replace('</span></div>', (showDate?' <small class="ju-muted">· '+fmtDay(parseKey(t.data))+'</small>':'')+'</span></div>')+
          '<button class="ju-del" data-deltask="'+esc(t.id)+'" aria-label="Apagar">'+ico("trash")+'</button></li>'; }).join("")+'</ul></section>';
    }
    var html = '<button class="ju-btn primary block" data-act="task">'+ico("plus")+' Nova tarefa</button>'+
      group("Atrasadas", late, true)+group("Hoje", today, false)+group("Próximas", next, true)+group("Concluídas", done, false);
    if(!ts.length) html += '<section class="ju-card"><p class="ju-empty">Sua lista está vazia. Anote retornos, compras, ligações e o que mais precisar lembrar.</p></section>';
    return html;
  }

  // ---------- Estudos: Faculdade Sebrae, TripleTen e concursos ----------
  var JU_STUDY_SEED = [{"id": "s1", "curso": "sebrae", "titulo": "Entregar atividade de Introdução à Gestão (grupo de estudos)", "tipo": "entrega", "data": "2026-11-10", "feito": false, "nota": "Prazo exato a confirmar no grupo"}, {"id": "s2", "curso": "sebrae", "titulo": "Revisar as matérias do período para o AVA II", "tipo": "revisao", "data": "2026-11-23", "feito": false, "fim": "2026-11-29"}, {"id": "s3", "curso": "sebrae", "titulo": "AVA II — avaliação online", "tipo": "prova", "data": "2026-11-30", "feito": false, "fim": "2026-12-05"}, {"id": "s4", "curso": "sebrae", "titulo": "Revisar para a prova presencial", "tipo": "revisao", "data": "2026-12-01", "feito": false, "fim": "2026-12-06"}, {"id": "s5", "curso": "sebrae", "titulo": "Prova presencial no polo", "tipo": "prova", "data": "2026-12-07", "feito": false, "fim": "2026-12-12"}, {"id": "s6", "curso": "sebrae", "titulo": "Término do período letivo 2026.2", "tipo": "marco", "data": "2026-12-16", "feito": false}, {"id": "s7", "curso": "sebrae", "titulo": "Exame final (se precisar)", "tipo": "prova", "data": "2026-12-17", "feito": false, "fim": "2026-12-18"}, {"id": "s8", "curso": "tripleten", "titulo": "Sprint 4 — Análise Estatística de Dados", "tipo": "sprint", "data": "2026-11-09", "feito": false, "fim": "2026-11-15", "nota": "Oficial: até 24/11"}, {"id": "s9", "curso": "tripleten", "titulo": "Sprint 5 — Ferramentas de Desenvolvimento de Software", "tipo": "sprint", "data": "2026-11-16", "feito": false, "fim": "2026-11-29", "nota": "Oficial: 25/11 a 15/12"}, {"id": "s10", "curso": "tripleten", "titulo": "Sprint 6 — Projeto Integrado 1", "tipo": "sprint", "data": "2026-11-30", "feito": false, "fim": "2026-12-06", "nota": "Oficial: 16 a 22/12 · semana das provas Sebrae: ritmo leve"}, {"id": "s11", "curso": "tripleten", "titulo": "Sprint 7 — Coleta e Armazenamento de Dados (SQL)", "tipo": "sprint", "data": "2026-12-07", "feito": false, "fim": "2026-12-20", "nota": "Oficial: 13 a 26/01"}, {"id": "s12", "curso": "tripleten", "titulo": "Sprint 8 — Análise de Negócio", "tipo": "sprint", "data": "2026-12-21", "feito": false, "fim": "2027-01-03", "nota": "Oficial: 27/01 a 09/02 · usar o recesso de fim de ano"}, {"id": "s13", "curso": "tripleten", "titulo": "Sprint 9 — Decisões de Negócio Baseadas em Dados", "tipo": "sprint", "data": "2027-01-04", "feito": false, "fim": "2027-01-12", "nota": "Oficial: 10 a 23/02"}, {"id": "s14", "curso": "tripleten", "titulo": "Sprint 10 — Como Relatar uma História Usando Dados", "tipo": "sprint", "data": "2027-01-13", "feito": false, "fim": "2027-01-19", "nota": "Oficial: 24/02 a 09/03"}, {"id": "s15", "curso": "tripleten", "titulo": "Sprint 11 — Projeto Integrado 2", "tipo": "sprint", "data": "2027-01-20", "feito": false, "fim": "2027-01-24", "nota": "Oficial: 10 a 16/03"}, {"id": "s16", "curso": "tripleten", "titulo": "Sprint 12 — Automação", "tipo": "sprint", "data": "2027-01-25", "feito": false, "fim": "2027-01-31", "nota": "Oficial: 24/03 a 06/04"}, {"id": "s17", "curso": "tripleten", "titulo": "Sprint 13 — Previsões e Predições", "tipo": "sprint", "data": "2027-02-01", "feito": false, "fim": "2027-02-03", "nota": "Oficial: 07 a 13/04"}, {"id": "s18", "curso": "tripleten", "titulo": "Sprint 14 — Projeto Final", "tipo": "sprint", "data": "2027-02-04", "feito": false, "fim": "2027-02-12", "nota": "Oficial: a partir de 14/04/2027 · meta: entregar até 12/02"}, {"id": "s19", "curso": "tripleten", "titulo": "Confirmar com o tutor se a plataforma libera os sprints antes da data da turma DA41", "tipo": "estudo", "data": "2026-11-10", "feito": false}, {"id": "s20", "curso": "concurso", "titulo": "Escolher UM dos dois TJSP (Escrevente ou Oficial de Justiça): as provas são no mesmo dia e horário", "tipo": "decisao", "data": "2026-11-12", "feito": false, "nota": "Edital, item 3.6: inscrições simultâneas não têm devolução da taxa"}, {"id": "s21", "curso": "concurso", "titulo": "TRF3: conferir se você cumpre o requisito (Técnico exige ensino superior completo) e decidir a inscrição", "tipo": "decisao", "data": "2026-11-12", "feito": false, "nota": "Inscrições até 23/11 · Técnico R$ 100 · Analista R$ 160"}, {"id": "s22", "curso": "concurso", "titulo": "TRF3: último dia para se inscrever", "tipo": "prazo", "data": "2026-11-23", "feito": false}, {"id": "s23", "curso": "concurso", "titulo": "TRF3: pagar a inscrição (até 21h59)", "tipo": "pagamento", "data": "2026-11-24", "feito": false}, {"id": "s24", "curso": "concurso", "titulo": "TJSP: último dia de inscrição", "tipo": "prazo", "data": "2026-12-10", "feito": false}, {"id": "s25", "curso": "concurso", "titulo": "TJSP: pagar o boleto da inscrição", "tipo": "pagamento", "data": "2026-12-11", "feito": false}, {"id": "s26", "curso": "concurso", "titulo": "TRF3: convocação para a prova (local e horário)", "tipo": "marco", "data": "2027-01-21", "feito": false}, {"id": "s27", "curso": "concurso", "titulo": "TRF3: prova objetiva + discursiva (estudo de caso e redação)", "tipo": "prova", "data": "2027-01-31", "feito": false}, {"id": "s28", "curso": "concurso", "titulo": "Semana 1 — Português + Direito Penal (CP arts. 293–359 do edital)", "tipo": "estudo", "data": "2026-11-16", "feito": false, "fim": "2026-11-22"}, {"id": "s29", "curso": "concurso", "titulo": "Semana 2 — Português + Direito Processual Penal (CPP + Lei 9.099, arts. 60–89)", "tipo": "estudo", "data": "2026-11-23", "feito": false, "fim": "2026-11-29"}, {"id": "s30", "curso": "concurso", "titulo": "Semana 3 — Português + Processual Civil I (CPC arts. 144–275; 294–311)", "tipo": "estudo", "data": "2026-11-30", "feito": false, "fim": "2026-12-06"}, {"id": "s31", "curso": "concurso", "titulo": "Semana 4 — Português + Processual Civil II (CPC 318–538; 994–1026; Leis 9.099 e 12.153)", "tipo": "estudo", "data": "2026-12-07", "feito": false, "fim": "2026-12-13"}, {"id": "s32", "curso": "concurso", "titulo": "Semana 5 — Português + Direito Constitucional (Título II e Poder Judiciário, art. 92)", "tipo": "estudo", "data": "2026-12-14", "feito": false, "fim": "2026-12-20"}, {"id": "s33", "curso": "concurso", "titulo": "Semana 6 — Português + Direito Administrativo (Lei 10.261/68 + Improbidade 8.429/92)", "tipo": "estudo", "data": "2026-12-21", "feito": false, "fim": "2026-12-27"}, {"id": "s34", "curso": "concurso", "titulo": "Semana 7 — Português + Legislação interna (Res. 850/2021, Res. 963/2025, LC 1.111/2010, Regimento Interno)", "tipo": "estudo", "data": "2026-12-28", "feito": false, "fim": "2027-01-03"}, {"id": "s35", "curso": "concurso", "titulo": "Semana 8 — Português + Normas da Corregedoria (NSCGJ — tomos do edital)", "tipo": "estudo", "data": "2027-01-04", "feito": false, "fim": "2027-01-10"}, {"id": "s36", "curso": "concurso", "titulo": "Semana 9 — Português + Matemática + Raciocínio Lógico", "tipo": "estudo", "data": "2027-01-11", "feito": false, "fim": "2027-01-17"}, {"id": "s37", "curso": "concurso", "titulo": "Semana 10 — Português + Informática + Atualidades", "tipo": "estudo", "data": "2027-01-18", "feito": false, "fim": "2027-01-24"}, {"id": "s38", "curso": "concurso", "titulo": "Semana 11 — Português + 2ª volta: Penal + Processual Penal", "tipo": "estudo", "data": "2027-01-25", "feito": false, "fim": "2027-01-31"}, {"id": "s39", "curso": "concurso", "titulo": "Semana 12 — Português + 2ª volta: Processual Civil", "tipo": "estudo", "data": "2027-02-01", "feito": false, "fim": "2027-02-07"}, {"id": "s40", "curso": "concurso", "titulo": "Semana 13 — Português + 2ª volta: Constitucional + Administrativo", "tipo": "estudo", "data": "2027-02-08", "feito": false, "fim": "2027-02-14"}, {"id": "s41", "curso": "concurso", "titulo": "Semana 14 — Português + 2ª volta: Legislação interna + NSCGJ", "tipo": "estudo", "data": "2027-02-15", "feito": false, "fim": "2027-02-21"}, {"id": "s42", "curso": "concurso", "titulo": "Semana 15 — Português + Redação (prova discursiva) + questões VUNESP", "tipo": "estudo", "data": "2027-02-22", "feito": false, "fim": "2027-02-28"}, {"id": "s43", "curso": "concurso", "titulo": "Semana 16 — Português + Revisão final: resumos e questões erradas", "tipo": "estudo", "data": "2027-03-01", "feito": false, "fim": "2027-03-07"}, {"id": "s44", "curso": "concurso", "titulo": "Simulado completo (70 questões VUNESP) + correção", "tipo": "simulado", "data": "2026-12-19", "feito": false}, {"id": "s45", "curso": "concurso", "titulo": "Simulado completo (70 questões VUNESP) + correção", "tipo": "simulado", "data": "2027-01-23", "feito": false}, {"id": "s46", "curso": "concurso", "titulo": "Simulado completo (70 questões VUNESP) + correção", "tipo": "simulado", "data": "2027-02-20", "feito": false}, {"id": "s47", "curso": "concurso", "titulo": "Simulado completo (70 questões VUNESP) + correção", "tipo": "simulado", "data": "2027-03-06", "feito": false}, {"id": "s48", "curso": "concurso", "titulo": "TJSP: prova objetiva e discursiva", "tipo": "prova", "data": "2027-03-14", "feito": false}, {"id": "s49", "curso": "concurso", "titulo": "TJSP: gabarito", "tipo": "marco", "data": "2027-03-17", "feito": false}];
  var JU_COURSES = {sebrae:{nome:"Faculdade Sebrae", em:"🎓", t:"agenda"}, tripleten:{nome:"TripleTen", em:"💻", t:"sono"}, concurso:{nome:"Concursos", em:"⚖️", t:"financas"}};
  var JU_STUDY_TYPES = [["estudo","Estudo"],["revisao","Revisão"],["entrega","Entrega"],["prova","Prova"],["sprint","Sprint"],["simulado","Simulado"],["pagamento","Pagamento"],["prazo","Prazo"],["decisao","Decisão"],["marco","Marco"]];
  var juStudyFilter = "todos";
  function studies(){ var j = J(); if(!Array.isArray(j.studies)){ j.studies = JSON.parse(JSON.stringify(JU_STUDY_SEED)); setTimeout(function(){ persist(); }, 0); } return j.studies; }
  function studyEnd(i){ return i.fim || i.data; }
  function fmtRange(i){ var a = fmtDay(parseKey(i.data)); return i.fim && i.fim!==i.data ? a+" – "+fmtDay(parseKey(i.fim)) : a; }
  function daysTo(k){ var t = parseKey(todayKey()); return Math.round((parseKey(k)-t)/86400000); }
  function studyRow(i){
    var c = JU_COURSES[i.curso]||JU_COURSES.sebrae, k = todayKey(), late = !i.feito && studyEnd(i) < k, now = !i.feito && i.data<=k && studyEnd(i)>=k;
    var tipo = (JU_STUDY_TYPES.filter(function(x){ return x[0]===i.tipo; })[0]||["","Item"])[1];
    return '<li style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center"><div class="ju-check'+(i.feito?" done":"")+'" style="align-items:flex-start">'+
      '<button data-study="'+esc(i.id)+'" aria-label="'+(i.feito?"Desmarcar":"Concluir")+'">'+ico("check")+'</button>'+
      '<span style="white-space:normal"><small class="ju-muted" style="display:block;font-size:11.5px">'+c.em+' '+esc(c.nome)+' · '+esc(tipo)+' · <b class="num" style="color:'+(late?"var(--j-red)":now?"var(--j-green)":"inherit")+'">'+fmtRange(i)+(late?" · atrasado":now?" · agora":"")+'</b></small>'+esc(i.titulo)+
      (i.nota?'<small class="ju-muted" style="display:block;font-size:11.5px;margin-top:2px">'+esc(i.nota)+'</small>':'')+'</span></div>'+
      '<button class="ju-del" data-delstudy="'+esc(i.id)+'" aria-label="Apagar">'+ico("trash")+'</button></li>';
  }
  function viewEstudos(){
    var all = studies(), k = todayKey(), f = juStudyFilter;
    var list = all.filter(function(i){ return f==="todos" || i.curso===f; }).slice().sort(function(a,b){ return (a.data+(a.fim||"")).localeCompare(b.data+(b.fim||"")); });
    var cards = Object.keys(JU_COURSES).map(function(key){
      var c = JU_COURSES[key], its = all.filter(function(i){ return i.curso===key; }), done = its.filter(function(i){ return i.feito; }).length;
      var prova = its.filter(function(i){ return i.tipo==="prova" && !i.feito && studyEnd(i)>=k; }).sort(function(a,b){ return a.data.localeCompare(b.data); })[0];
      var last = key==="tripleten" ? its.filter(function(i){ return i.tipo==="sprint"; }).sort(function(a,b){ return studyEnd(b).localeCompare(studyEnd(a)); })[0] : null;
      var alvo = prova || last, alvoData = prova ? prova.data : (last ? studyEnd(last) : null), dd = alvoData ? daysTo(alvoData) : null;
      return '<button class="ju-card tint" data-sfilter="'+key+'" style="'+tone(c.t)+';text-align:left;border:0;cursor:pointer'+(f===key?";outline:2px solid currentColor":"")+'"><span class="ju-label">'+c.em+' '+c.nome+'</span>'+
        '<div class="ju-mid">'+done+'/'+its.length+'</div><div class="ju-progress" style="--c:currentColor;margin:6px 0"><i style="width:'+(its.length?Math.round(done/its.length*100):0)+'%"></i></div>'+
        '<div class="ju-muted" style="font-size:12px">'+(alvo ? (prova ? "Próxima prova" : "Meta de conclusão")+': '+fmtDay(parseKey(alvoData))+(dd>=0?' · '+dd+' dias':'') : 'Sem prova marcada')+'</div></button>';
    }).join("");
    var semana = list.filter(function(i){ return !i.feito && i.data <= dKey(addDays(new Date(),7)); });
    var futuros = list.filter(function(i){ return !i.feito && i.data > dKey(addDays(new Date(),7)); });
    var feitos = list.filter(function(i){ return i.feito; });
    var byMonth = {}, order = [];
    futuros.forEach(function(i){ var m = i.data.slice(0,7); if(!byMonth[m]){ byMonth[m] = []; order.push(m); } byMonth[m].push(i); });
    var blocks = ((state.dayPlan&&state.dayPlan.blocks)||[]).filter(function(b){ return b.area==="academico"||b.area==="complementar"; });
    var DN = {seg:"seg",ter:"ter",qua:"qua",qui:"qui",sex:"sex",sab:"sáb",dom:"dom"};
    return ''+
      '<div class="ju-grid">'+cards+'<button class="ju-card" data-sfilter="todos" style="text-align:left;border:0;cursor:pointer'+(f==="todos"?";outline:2px solid var(--j-ink)":"")+'"><span class="ju-label">📚 Tudo</span><div class="ju-mid">'+all.filter(function(i){return i.feito;}).length+'/'+all.length+'</div><div class="ju-muted" style="font-size:12px">ver os três juntos</div></button></div>'+
      '<button class="ju-btn primary block" data-act="study">'+ico("plus")+' Novo item de estudo</button>'+
      '<section class="ju-card"><div class="ju-head" style="'+tone("agenda")+'"><span class="ic">'+ico("cal")+'</span><h3>Agora e próximos 7 dias</h3></div>'+
        (semana.length ? '<ul class="ju-list" style="gap:12px">'+semana.map(studyRow).join("")+'</ul>' : '<p class="ju-empty">Nada pendente para esta semana.</p>')+'</section>'+
      order.map(function(m){ var lbl = parseKey(m+"-01").toLocaleDateString("pt-BR",{month:"long",year:"numeric"});
        return '<section class="ju-card"><span class="ju-label">'+lbl.charAt(0).toUpperCase()+lbl.slice(1)+' · '+byMonth[m].length+'</span><ul class="ju-list" style="gap:12px;margin-top:10px">'+byMonth[m].map(studyRow).join("")+'</ul></section>'; }).join("")+
      (feitos.length ? '<section class="ju-card"><details><summary class="ju-label" style="cursor:pointer">Concluídos · '+feitos.length+'</summary><ul class="ju-list" style="gap:12px;margin-top:10px">'+feitos.map(studyRow).join("")+'</ul></details></section>' : '')+
      (blocks.length ? '<section class="ju-card"><div class="ju-head" style="'+tone("sono")+'"><span class="ic">'+ico("book")+'</span><h3>Horários de estudo da semana</h3></div><ul class="ju-list" style="gap:8px">'+
        blocks.slice().sort(function(a,b){ return toMin(a.ini)-toMin(b.ini); }).map(function(b){ return '<li style="display:flex;justify-content:space-between;gap:10px"><span>'+esc(b.txt)+'</span><small class="ju-muted num" style="white-space:nowrap">'+esc(b.ini)+'–'+esc(b.fim)+' · '+(b.dias||[]).map(function(d){ return DN[d]||d; }).join(", ")+'</small></li>'; }).join("")+
        '</ul><button class="ju-more" data-legacy="rotina">Ajustar horários '+ico("chev")+'</button></section>' : '');
  }
  function sheetStudy(){
    openSheet("Novo item de estudo",
      '<div class="ju-field">Curso'+seg("curso", [["sebrae","Sebrae"],["tripleten","TripleTen"],["concurso","Concurso"]], juStudyFilter!=="todos"?juStudyFilter:"sebrae")+'</div>'+
      '<label class="ju-field">O quê<input name="titulo" placeholder="Ex.: entregar atividade, estudar Crase…" autocomplete="off"></label>'+
      '<div class="ju-field">Tipo'+seg("tipo", JU_STUDY_TYPES.slice(0,6), "estudo")+'</div>'+
      '<div class="ju-two"><label class="ju-field">Data<input name="data" type="date" value="'+todayKey()+'"></label><label class="ju-field">Até (opcional)<input name="fim" type="date"></label></div>',
      function(f){ var t = f.titulo.value.trim(); if(!t) return "Descreva o item.";
        var it = {id:uid("s"), curso:segVal(f,"curso")||"sebrae", titulo:t, tipo:segVal(f,"tipo")||"estudo", data:f.data.value||todayKey(), feito:false};
        if(f.fim.value && f.fim.value>it.data) it.fim = f.fim.value;
        studies().push(it); save(); toast("Item adicionado ao cronograma"); });
  }

  // ---------- Compras do mês: mercado (vem da dieta) + necessidades extras ----------
  var juShopTab = "mercado";
  function shopData(){
    if(!state.shopping || typeof state.shopping!=="object") state.shopping = {items:[]};
    if(!Array.isArray(state.shopping.items)) state.shopping.items = [];
    if(!Array.isArray(state.shopping.extras)) state.shopping.extras = [];
    return state.shopping;
  }
  function shopRow(i, kind){
    return '<li style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center"><div class="ju-check'+(i.checked?" done":"")+'">'+
      '<button data-shop="'+esc(kind+":"+i.id)+'" aria-label="'+(i.checked?"Desmarcar":"Marcar")+'">'+ico("check")+'</button><span>'+esc(i.text)+'</span></div>'+
      '<button class="ju-del" data-delshop="'+esc(kind+":"+i.id)+'" aria-label="Remover">'+ico("trash")+'</button></li>';
  }
  function viewCompras(){
    var S = shopData(), tab = juShopTab;
    var list = tab==="mercado" ? S.items : S.extras;
    var done = list.filter(function(i){ return i.checked; }).length;
    var groups = {}, order = [];
    list.forEach(function(i){ var c = i.category || (tab==="mercado" ? "Outros" : "Extras"); if(!groups[c]){ groups[c] = []; order.push(c); } groups[c].push(i); });
    var head = '<div class="ju-grid">'+
      '<button class="ju-btn '+(tab==="mercado"?"primary":"soft")+'" data-shoptab="mercado">🛒 Mercado</button>'+
      '<button class="ju-btn '+(tab==="extras"?"primary":"soft")+'" data-shoptab="extras">🧴 Necessidades extras</button></div>';
    var intro = tab==="mercado"
      ? '<p class="ju-muted" style="margin:0">Ingredientes do cardápio da dieta, por categoria. Marque o que já foi para o carrinho.</p>'
      : '<p class="ju-muted" style="margin:0">Tudo o que o mês pede além do mercado da dieta: casa, higiene, farmácia, pet, presentes.</p>';
    var body = list.length ? order.map(function(c){
        return '<section class="ju-card"><span class="ju-label">'+esc(c)+' · '+groups[c].filter(function(i){return i.checked;}).length+'/'+groups[c].length+'</span><ul class="ju-list" style="margin-top:10px">'+groups[c].map(function(i){ return shopRow(i, tab); }).join("")+'</ul></section>';
      }).join("")
      : '<section class="ju-card"><p class="ju-empty">'+(tab==="mercado" ? "A lista do mercado está vazia." : "Nenhuma necessidade extra anotada ainda.")+'</p></section>';
    return head+intro+
      '<section class="ju-card"><span class="ju-label">'+done+' de '+list.length+' marcados</span>'+
        '<div style="display:flex;gap:8px;margin-top:10px"><input id="juShopNew" placeholder="'+(tab==="mercado"?"Novo item (ex.: leite, aveia…)":"Novo item (ex.: papel toalha, ração do Otto…)")+'" autocomplete="off" style="flex:1;min-width:0;font:inherit;padding:10px 12px;border-radius:12px;border:1px solid var(--j-line);background:var(--j-surface);color:var(--j-ink)">'+
        '<button class="ju-plus" data-shopadd="'+tab+'" aria-label="Adicionar">'+ico("plus")+'</button></div></section>'+
      body+
      (done ? '<button class="ju-btn ghost block" data-shopreset="'+tab+'">Desmarcar todos (novo mês)</button>' : '')+
      (tab==="mercado" ? '<button class="ju-btn ghost block" data-legacy="dieta">Ver cardápio da dieta</button>' : '');
  }

  function viewEu(){
    var ht = habitsToday(), allHabits = J().habits, best = 0;
    allHabits.forEach(function(h){ best = Math.max(best, habitStreak(h)); });
    var moods = Object.keys(J().mood).length, nights = Object.keys(J().sleep).length;
    var tiles = [["metas","Metas","target","financas"],["dividas","Dívidas","coin","bemestar"],["financeiro","Relatório","chart","financas"],
      ["dieta","Dieta","apple","habitos"],["treino","Treino","dumb","treino"],["rotina","Horários","cal","agenda"],
      ["compras","Compras","bag","tarefas"],["leitura","Leitura","book","sono"],["espirito","Fé","cross","agenda"],
      ["academico","Faculdade","cap","agua"],["complementar","Cursos","spark","sono"],["profissional","Trabalho","briefcase","tarefas"],
      ["progresso","Progresso","trend","habitos"],["projecoes","Projeções","star","financas"]];
    var status = (document.getElementById("saveStatus")||{}).textContent || "";
    return ''+
    '<section class="ju-card ju-me"><img src="fotos/avatar.jpg" alt="Foto da Ju"><div style="min-width:0"><h2>Ju</h2><p class="ju-muted" style="margin:2px 0 0">'+esc(status||"Seu painel pessoal")+'</p></div></section>'+
    '<div class="ju-grid">'+stat("🔥","Maior sequência", best+(best===1?" dia":" dias"))+stat("🌿","Hábitos hoje", ht.done+"/"+ht.total)+
      stat("📝","Dias no diário", String(moods))+stat("🌙","Noites registradas", String(nights))+'</div>'+
    '<section class="ju-card"><div class="ju-head"><span class="ic">'+ico("grid")+'</span><h3>Seu painel completo</h3></div><div class="ju-tiles">'+
      tiles.map(function(t){ return '<button class="ju-tile" data-legacy="'+t[0]+'" style="'+tone(t[3])+'"><i>'+ico(t[2])+'</i>'+t[1]+'</button>'; }).join("")+'</div></section>'+
    '<section class="ju-card"><div class="ju-head"><span class="ic">'+ico("user")+'</span><h3>Ajustes</h3></div>'+
      '<div class="ju-row"><span>Meta de sono (horas)</span><input id="juGoal" type="number" min="4" max="12" step="0.5" value="'+(+J().sleepGoal||7)+'"></div>'+
      '<div class="ju-row"><span>Duração do ciclo (dias)</span><input id="juCycleLen" type="number" min="18" max="45" value="'+(+J().cycle.len||28)+'"></div>'+
      '<div class="ju-row"><span>Dias de menstruação</span><input id="juCycleDur" type="number" min="2" max="10" value="'+(+J().cycle.dur||5)+'"></div>'+
      '<div class="ju-grid" style="margin-top:12px"><button class="ju-btn soft" data-proxy="accountButton">Minha conta</button><button class="ju-btn ghost" data-proxy="exportBackup">Exportar backup</button>'+
      '<button class="ju-btn ghost" data-proxy="importBackupButton">Restaurar backup</button><button class="ju-btn ghost" data-proxy="installApp" id="juInstall">Instalar app</button></div></section>';
  }

  function renderView(view){
    var el = document.querySelector('.ju-view[data-view="'+view+'"]'); if(!el) return;
    var fn = {inicio:viewInicio, plano:viewPlano, tracker:viewTracker, financas:viewFinancas, sono:viewSono, bemestar:viewBemestar, tarefas:viewTarefas, compras:viewCompras, estudos:viewEstudos, eu:viewEu}[view];
    var sub = ["financas","sono","tarefas","compras","estudos"].indexOf(view)>-1;
    el.innerHTML = (sub ? '<div class="ju-sub"><button class="ju-back" data-go="inicio" aria-label="Voltar">'+ico("back")+'</button></div>' : '') + fn();
    if(view==="inicio") renderAgora();
    if(view==="eu"){ var ib = document.getElementById("installApp"); var ji = document.getElementById("juInstall"); if(ji && ib && ib.hidden) ji.hidden = true; }
  }
  function renderShell(){
    if(!document.getElementById("ju") || !state) return;
    J();
    var d = new Date(), lbl = d.toLocaleDateString("pt-BR",{weekday:"short", day:"2-digit", month:"short"}).replace(/\./g,"");
    document.getElementById("juDate").lastChild.textContent = lbl.charAt(0).toUpperCase()+lbl.slice(1);
    var st = document.getElementById("saveStatus"); document.getElementById("juSync").textContent = st ? st.textContent : "";
    renderView(juView);
  }

  // ---------- events ----------
  function initShell(){
    var root = document.createElement("div");
    root.innerHTML =
      '<div class="ju" id="ju">'+
        '<header class="ju-top"><button class="ju-avatar" data-go="eu" aria-label="Seu perfil"><img src="fotos/avatar.jpg" alt=""></button>'+
        '<h1 id="juTitle">Hoje</h1><span class="ju-date" id="juDate">'+ico("cal")+'<span></span></span></header>'+
        '<div class="ju-sync" id="juSync" aria-live="polite"></div>'+
        ["inicio","plano","tracker","financas","sono","bemestar","tarefas","compras","estudos","eu"].map(function(v){ return '<section class="ju-view" data-view="'+v+'" hidden></section>'; }).join("")+
      '</div>'+
      '<nav class="ju-nav" aria-label="Navegação principal"><div>'+
        [["inicio","Início","home"],["plano","Meu plano","cal"],["tracker","Tracker","tasks"],["bemestar","Bem-estar","heart"],["eu","Você","user"]]
          .map(function(n){ return '<button data-go="'+n[0]+'">'+ico(n[2])+'<span>'+n[1]+'</span></button>'; }).join("")+
      '</div></nav>';
    while(root.firstChild) document.body.insertBefore(root.firstChild, document.body.firstChild);
    var bar = document.createElement("div"); bar.className = "ju-legacy-bar";
    bar.innerHTML = '<button class="ju-back" id="juLegacyBack" aria-label="Voltar">'+ico("back")+'</button><strong id="juLegacyTitle">Painel</strong>';
    var app = document.querySelector("body > .app"); app.parentNode.insertBefore(bar, app);
    document.body.classList.add("ju-on");
    document.getElementById("juLegacyBack").addEventListener("click", function(){ renderAll(); go(juView==="eu"?"eu":juView); });

    // keep the sync line in step with the save status
    var st = document.getElementById("saveStatus");
    if(st && window.MutationObserver) new MutationObserver(function(){ var s = document.getElementById("juSync"); if(s) s.textContent = st.textContent; }).observe(st, {childList:true, characterData:true, subtree:true});

    document.addEventListener("click", function(e){
      var t = e.target.closest("[data-go],[data-act],[data-legacy],[data-task],[data-habit],[data-water],[data-pay],[data-deltx],[data-deltask],[data-delhabit],[data-day],[data-month],[data-mood],[data-proxy],[data-shop],[data-shoptab],[data-shopadd],[data-shopreset],[data-delshop],[data-treino],[data-study],[data-delstudy],[data-sfilter],#juPhoto");
      if(!t || !t.closest(".ju, .ju-nav, .ju-legacy-bar")) return;
      if(t.id==="juPhoto"){ photoOffset++; var img = document.getElementById("juPhotoImg"); if(img) img.src = photoOfDay(photoOffset); return; }
      if(t.dataset.go){ go(t.dataset.go); return; }
      if(t.dataset.sfilter){ juStudyFilter = t.dataset.sfilter; renderView("estudos"); return; }
      if(t.dataset.study){ var si = studies().filter(function(x){ return x.id===t.dataset.study; })[0]; if(si){ si.feito = !si.feito; save(); if(si.feito) toast("Concluído ✓"); } return; }
      if(t.dataset.delstudy){ armDelete(t, function(){ var a3 = studies(), ix3 = a3.map(function(x){ return x.id; }).indexOf(t.dataset.delstudy); if(ix3>-1){ a3.splice(ix3,1); save(); } }); return; }
      if(t.dataset.treino){ var wl = state.workout.log || (state.workout.log = {}), tk2 = todayKey(); if(wl[tk2]) delete wl[tk2]; else { wl[tk2] = true; toast("Treino registrado 💪"); } save(); return; }
      if(t.dataset.shoptab){ juShopTab = t.dataset.shoptab; renderView("compras"); return; }
      if(t.dataset.shop || t.dataset.delshop){
        var ref = (t.dataset.shop||t.dataset.delshop).split(":"), arr = ref[0]==="extras" ? shopData().extras : shopData().items;
        if(t.dataset.delshop){ armDelete(t, function(){ var a2 = ref[0]==="extras" ? shopData().extras : shopData().items; var ix = a2.map(function(x){return x.id;}).indexOf(ref[1]); if(ix>-1){ a2.splice(ix,1); save(); } }); return; }
        var it = arr.filter(function(x){ return x.id===ref[1]; })[0]; if(it){ it.checked = !it.checked; save(); } return;
      }
      if(t.dataset.shopadd){
        var inp = document.getElementById("juShopNew"), txt = inp ? inp.value.trim() : "";
        if(!txt){ if(inp) inp.focus(); return; }
        var tgt = t.dataset.shopadd==="extras" ? shopData().extras : shopData().items;
        tgt.push({id:uid(t.dataset.shopadd==="extras"?"x":"c"), text:txt, category:t.dataset.shopadd==="extras"?"Extras":"Outros", checked:false});
        save(); toast("Item adicionado"); var n2 = document.getElementById("juShopNew"); if(n2) n2.focus(); return;
      }
      if(t.dataset.shopreset){ (t.dataset.shopreset==="extras" ? shopData().extras : shopData().items).forEach(function(i){ i.checked = false; }); save(); toast("Lista pronta para o novo mês"); return; }
      if(t.dataset.legacy){ openLegacy(t.dataset.legacy); return; }
      if(t.dataset.proxy){ var b = document.getElementById(t.dataset.proxy); if(b) b.click(); return; }
      var k = todayKey();
      if(t.dataset.act){
        var a = t.dataset.act;
        if(a==="gasto"||a==="entrada") sheetTx(a);
        else if(a==="bill") sheetBill("bill"); else if(a==="sub") sheetBill("sub");
        else if(a==="sleep") sheetSleep(); else if(a==="mood") sheetMood(k);
        else if(a==="task") sheetTask(); else if(a==="study") sheetStudy(); else if(a==="habit") sheetHabit();
        else if(a==="period"){ var s = J().cycle.starts || (J().cycle.starts=[]); if(s.indexOf(k)<0){ s.push(k); save(); toast("Início do ciclo registrado"); } else toast("Hoje já está registrado"); }
        return;
      }
      if(t.dataset.task){ var tk = J().tasks.filter(function(x){ return x.id===t.dataset.task; })[0]; if(tk){ tk.feita = !tk.feita; save(); } return; }
      if(t.dataset.habit){ var h = J().habits.filter(function(x){ return x.id===t.dataset.habit; })[0]; if(h){ var on = !habitDone(h,k); setHabit(h,k,on); save(); if(on) toast(h.em+" "+h.nome+" ✓"); } return; }
      if(t.dataset.water){ var cur = state.diet.log[k] || {water:0, notes:""}; var n = +t.dataset.water; cur.water = (cur.water===n && t.classList.contains("g")) ? n-1 : n; state.diet.log[k] = cur; save(); if(cur.water===8) toast("Meta de água batida! 💧"); return; }
      if(t.dataset.pay){
        var id = t.dataset.pay, mo = J().money, mk = monthKey(new Date());
        var b2 = mo.bills.filter(function(x){ return x.id===id; })[0] || mo.subs.filter(function(x){ return x.id===id; })[0];
        if(!b2) return;
        if(b2.recorrente || mo.subs.indexOf(b2)>-1){ b2.pagos = b2.pagos || {}; b2.pagos[mk] = true; } else b2.pago = true;
        mo.tx.unshift({id:uid("tx"), tipo:"saida", valor:b2.valor, desc:b2.nome, cat:mo.subs.indexOf(b2)>-1?"lazer":"contas", data:k});
        save(); toast(b2.nome+" paga e lançada nos gastos"); return;
      }
      if(t.dataset.deltx){ armDelete(t, function(){ var mo = J().money; mo.tx = mo.tx.filter(function(x){ return x.id!==t.dataset.deltx; }); save(); toast("Lançamento apagado"); }); return; }
      if(t.dataset.deltask){ armDelete(t, function(){ J().tasks = J().tasks.filter(function(x){ return x.id!==t.dataset.deltask; }); save(); }); return; }
      if(t.dataset.delhabit){ armDelete(t, function(){ J().habits = J().habits.filter(function(x){ return x.id!==t.dataset.delhabit; }); save(); toast("Hábito removido"); }); return; }
      if(t.dataset.mood){ var m = J().mood[k] || {}; m.v = +t.dataset.mood; J().mood[k] = m; save(); toast("Humor registrado"); return; }
      if(t.dataset.month){ juMonth = new Date(juMonth.getFullYear(), juMonth.getMonth()+(+t.dataset.month), 1); renderView("bemestar"); return; }
      if(t.dataset.day){
        if(juView==="plano"){ juPlanDay = +t.dataset.day; renderView("plano"); }
        else sheetMood(t.dataset.day);
      }
    });
    document.addEventListener("keydown", function(e){
      if(e.key==="Enter" && e.target && e.target.id==="juShopNew"){ e.preventDefault(); var b = document.querySelector("[data-shopadd]"); if(b) b.click(); }
    });
    document.addEventListener("change", function(e){
      var id = e.target.id, v = parseFloat(e.target.value);
      if(id==="juGoal" && v>=4 && v<=12){ J().sleepGoal = v; persist(); toast("Meta de sono atualizada"); }
      if(id==="juCycleLen" && v>=18 && v<=45){ J().cycle.len = Math.round(v); persist(); }
      if(id==="juCycleDur" && v>=2 && v<=10){ J().cycle.dur = Math.round(v); persist(); }
    });
    var saved = "inicio"; try{ saved = localStorage.getItem("painelJuView") || "inicio"; }catch(e){}
    juView = ["inicio","plano","tracker","financas","sono","bemestar","tarefas","compras","estudos","eu"].indexOf(saved)>-1 ? saved : "inicio";
  }
  function shellStart(){ go(juView); }


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
  function habitDots(h){
    var out = '', d0 = addDays(new Date(),-6), k0 = todayKey();
    for(var i=0;i<7;i++){ var d = addDays(d0,i), k = dKey(d), on = habitDone(h,k);
      out += '<i title="'+JU_WEEK[d.getDay()]+'" style="width:15px;height:15px;border-radius:5px;display:inline-block;background:'+(on?'var(--j-green)':'var(--j-surface-2)')+(k===k0?';outline:2px solid var(--j-green);outline-offset:1px':'')+'"></i>'; }
    return '<div style="display:flex;gap:5px;margin-top:6px" aria-label="Últimos 7 dias">'+out+'</div>';
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
      var main = JU_MAIN.indexOf(view)>-1 ? view : ({financas:"inicio", sono:"tracker", tarefas:"plano", compras:"inicio", estudos:"plano", sonhos:"eu", ficha:"bemestar"})[view];
      if(b.dataset.go===main) b.setAttribute("aria-current","page"); else b.removeAttribute("aria-current");
    });
    var titles = {inicio:"Hoje", plano:"Meu plano", tracker:"Tracker", bemestar:"Bem-estar", eu:"Você", financas:"Finanças", sono:"Sono", tarefas:"Tarefas", compras:"Compras do mês", estudos:"Estudos", sonhos:"Mural dos sonhos", ficha:"Ficha de treino"};
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
    '<div class="ju-chipbar"><button type="button" class="ju-chip-arrow prev" data-chipscroll="-1" aria-label="Ver atalhos anteriores" hidden>'+ico("back")+'</button>'+
    '<div class="ju-chips" role="navigation" aria-label="Atalhos">'+
      chip("plano","Agenda","cal","agenda")+chip("estudos","Estudos","cap","sono")+chip("sonhos","Sonhos","star","financas")+chip("tarefas","Tarefas","tasks","tarefas")+chip("compras","Compras","bag","habitos")+chip("financas","Finanças","coin","financas")+'<button class="ju-chip" data-legacy="progresso" style="'+tone("habitos")+'"><i>'+ico("trend")+'</i><span>Evolução</span></button>'+
      chip("sono","Sono","moon","sono")+chip("bemestar","Bem-estar","heart","bemestar")+chip("tracker","Hábitos","leaf","habitos")+
    '</div><button type="button" class="ju-chip-arrow next" data-chipscroll="1" aria-label="Ver mais atalhos" hidden>'+ico("chev")+'</button></div>'+
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

  function sheetEvent(){
    openSheet("Novo compromisso",
      '<label class="ju-field">O quê<input name="title" placeholder="Ex.: consulta, reunião, visita…" autocomplete="off"></label>'+
      '<div class="ju-two"><label class="ju-field">Data<input name="date" type="date" value="'+dKey(addDays(new Date(), juPlanDay))+'"></label><label class="ju-field">Horário<input name="time" type="time"></label></div>'+
      '<label class="ju-field">Local (opcional)<input name="place" autocomplete="off"></label>',
      function(f){ var t = f.title.value.trim(); if(!t) return "Descreva o compromisso."; if(!f.date.value) return "Escolha a data.";
        var it = {id:uid("ag"), date:f.date.value, title:t}; if(f.time.value) it.time = f.time.value; if(f.place.value.trim()) it.place = f.place.value.trim();
        (state.agenda = state.agenda || []).push(it); state.agenda.sort(function(a,b){ return ((a.date||"")+(a.time||"")).localeCompare((b.date||"")+(b.time||"")); });
        save(); toast("Compromisso na agenda"); });
  }
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
      '<div class="ju-grid" style="margin-top:10px"><button class="ju-btn primary" data-act="event">'+ico("plus")+' Compromisso</button><button class="ju-btn ghost" data-legacy="rotina">Ajustar horários</button></div></section>'+
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
          '<div class="nm">'+esc(h.em||"")+' '+esc(h.nome)+'</div>'+sub+habitDots(h)+'</div>'+
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
  // ---------- Treino com carga, cronômetro e semana ----------
  function gym(){ var j = J(); if(!j.gym || typeof j.gym!=="object") j.gym = {log:{}, sess:{}}; j.gym.log = j.gym.log||{}; j.gym.sess = j.gym.sess||{}; return j.gym; }
  function parseScheme(s){
    var reps = [], iso = /"/.test(s);
    String(s).split("+").forEach(function(part){ var m = /(\d+)\s*[×x]\s*(\d+)/.exec(part); if(m){ for(var i=0;i<+m[1];i++) reps.push(+m[2]); } });
    return {reps:reps, iso:iso};
  }
  function lastKg(name, before){
    var L = gym().log, ds = Object.keys(L).filter(function(d){ return d<before && L[d][name] && L[d][name].kg; }).sort();
    return ds.length ? {kg:L[ds[ds.length-1]][name].kg, d:ds[ds.length-1]} : null;
  }
  function dayVolume(d){
    var L = gym().log[d] || {}, v = 0;
    Object.keys(L).forEach(function(n){ var e = L[n], sc = e.reps||[]; (e.s||[]).forEach(function(on,i){ if(on && e.kg) v += (sc[i]||0)*e.kg; }); });
    return Math.round(v);
  }
  function weekStart(d){ var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); var wd = (x.getDay()+6)%7; return addDays(x,-wd); }
  function plannedMinutes(dk){
    var bl = ((state.dayPlan&&state.dayPlan.blocks)||[]).filter(function(b){ return /treino/i.test(b.txt||"") && (b.dias||[]).indexOf(dk)>-1; });
    return bl.reduce(function(a,b){ return a + Math.max(0, toMin(b.fim)-toMin(b.ini)); }, 0);
  }
  function gymWeek(){
    var ws = weekStart(new Date()), keys = ["seg","ter","qua","qui","sex","sab","dom"], goal = 0, min = 0, n = 0, kg = 0, G = gym();
    for(var i=0;i<7;i++){ var d = addDays(ws,i), k = dKey(d); goal += plannedMinutes(keys[i]);
      var s = G.sess[k]; if(s && s.ini){ var end = s.fim || (k===todayKey()? Date.now() : s.ini); min += Math.min(180, Math.max(0, Math.round((end - s.ini)/60000))); }
      if(state.workout.log[k]){ n++; if(!(s&&s.ini)) min += plannedMinutes(keys[i]); }
      kg += dayVolume(k); }
    var st = 0, dd = new Date(); if(!state.workout.log[dKey(dd)]) dd = addDays(dd,-1); while(state.workout.log[dKey(dd)] && st<400){ st++; dd = addDays(dd,-1); }
    return {goal:goal, min:min, n:n, kg:kg, streak:st};
  }
  function fmtMin(m){ var h = Math.floor(m/60), r = m%60; return h ? h+"h"+(r?String(r).padStart(2,"0"):"") : r+"min"; }
  function gymTimerText(){ var s = gym().sess[todayKey()]; if(!s || !s.ini) return "00:00"; var t = Math.floor(((s.fim||Date.now()) - s.ini)/1000); var h = Math.floor(t/3600), m = Math.floor(t%3600/60), x = t%60; return (h?h+":":"")+String(m).padStart(2,"0")+":"+String(x).padStart(2,"0"); }
  setInterval(function(){ var el = document.getElementById("juGymTimer"); if(el){ var s = gym().sess[todayKey()]; if(s && s.ini && !s.fim) el.textContent = gymTimerText(); } }, 1000);
  function treinoSemana(){
    var w = gymWeek(), pct = w.goal ? w.min/w.goal : 0;
    return '<section class="ju-card" style="'+tone("treino")+';display:flex;gap:14px;align-items:center">'+ring(pct, Math.round(pct*100)+"%", "SEMANA", "var(--j-green)", 84)+
      '<div style="flex:1;min-width:0"><span class="ju-label">Volume da semana '+(pct>=1?'<b style="color:var(--j-green)">· meta batida</b>':pct>=0.6?'<b style="color:var(--j-green)">· em dia</b>':'')+'</span>'+
      '<div class="ju-mid" style="font-size:22px">'+fmtMin(w.min)+' <small class="ju-muted" style="font-size:14px">de '+fmtMin(w.goal)+'</small></div>'+
      '<small class="ju-muted">'+w.n+' treino'+(w.n===1?"":"s")+' · '+w.kg.toLocaleString("pt-BR")+' kg levantados · sequência de '+w.streak+' dia'+(w.streak===1?"":"s")+'</small></div></section>';
  }

  // ---------- Dieta: calorias e macros ----------
  var JU_MEAL_EST = {cafe:{kcal:400,p:25,c:45,g:12}, almoco:{kcal:600,p:40,c:60,g:18}, lanche:{kcal:250,p:15,c:25,g:8}, jantar:{kcal:500,p:35,c:45,g:15}};
  function nutri(){ var j = J(); if(!j.nutri || typeof j.nutri!=="object") j.nutri = {meta:{kcal:1800,p:115,c:190,g:58}, log:{}}; j.nutri.log = j.nutri.log||{}; j.nutri.meta = j.nutri.meta||{kcal:1800,p:115,c:190,g:58}; return j.nutri; }
  function nutriDay(k){ var L = nutri().log[k] || {}, t = {kcal:0,p:0,c:0,g:0,n:0}; Object.keys(L).forEach(function(m){ var e = L[m]; if(!e) return; t.n++; ["kcal","p","c","g"].forEach(function(x){ t[x] += +e[x]||0; }); }); return t; }
  function macrosHtml(){
    var k = todayKey(), N = nutri(), M = N.meta, t = nutriDay(k), pct = M.kcal ? t.kcal/M.kcal : 0, falta = Math.max(0, M.kcal - t.kcal);
    var bar = function(lbl, v, m, col){ return '<div style="min-width:0"><small class="ju-muted" style="font-size:11.5px">'+lbl+'</small><div class="num" style="font-size:13px"><b>'+Math.round(v)+'</b>/'+m+'g</div><div class="ju-progress" style="--c:'+col+';margin-top:4px"><i style="width:'+Math.min(100, m? v/m*100 : 0).toFixed(0)+'%"></i></div></div>'; };
    return '<div style="display:flex;gap:14px;align-items:center;margin:4px 0 12px">'+ring(pct, Math.round(pct*100)+"%", "DO PLANO", "var(--j-rose,#C14C64)", 78)+
      '<div style="min-width:0"><span class="ju-label">Plano de hoje '+(t.n?'<b style="color:var(--j-green)">· em dia</b>':'')+'</span><div class="ju-mid num" style="font-size:24px">'+t.kcal.toLocaleString("pt-BR")+' <small class="ju-muted" style="font-size:14px">de '+M.kcal.toLocaleString("pt-BR")+' kcal</small></div>'+
      '<small class="ju-muted">faltam '+falta.toLocaleString("pt-BR")+' kcal · '+t.n+' refeiç'+(t.n===1?"ão":"ões")+' registrada'+(t.n===1?"":"s")+'</small></div></div>'+
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px">'+bar("Proteína",t.p,M.p,"var(--j-green)")+bar("Carbo",t.c,M.c,"var(--j-lav,#7D6BB8)")+bar("Gordura",t.g,M.g,"var(--j-rose,#C14C64)")+'</div>';
  }
  function sheetMeal(m){
    var k = todayKey(), e = (nutri().log[k]||{})[m] || JU_MEAL_EST[m] || {kcal:0,p:0,c:0,g:0};
    var nm = {cafe:"Café da manhã", almoco:"Almoço", lanche:"Lanche", jantar:"Jantar"}[m] || "Refeição";
    openSheet(nm+" — quanto foi?", '<p class="ju-muted" style="margin:0 0 10px;font-size:12.5px">Os números vêm de uma estimativa do seu cardápio. Ajuste se comeu diferente.</p>'+
      '<div class="ju-two"><label class="ju-field">Calorias (kcal)<input name="kcal" type="number" inputmode="numeric" value="'+(e.kcal||0)+'"></label><label class="ju-field">Proteína (g)<input name="p" type="number" inputmode="numeric" value="'+(e.p||0)+'"></label></div>'+
      '<div class="ju-two"><label class="ju-field">Carboidrato (g)<input name="c" type="number" inputmode="numeric" value="'+(e.c||0)+'"></label><label class="ju-field">Gordura (g)<input name="g" type="number" inputmode="numeric" value="'+(e.g||0)+'"></label></div>',
      function(f){ var L = nutri().log[k] || (nutri().log[k] = {}); L[m] = {kcal:+f.kcal.value||0, p:+f.p.value||0, c:+f.c.value||0, g:+f.g.value||0}; save(); toast("Refeição registrada"); });
  }
  function sheetDietMeta(){
    var M = nutri().meta;
    openSheet("Metas diárias da dieta", '<p class="ju-muted" style="margin:0 0 10px;font-size:12.5px">Coloque aqui os números da sua nutricionista. Os atuais são uma estimativa a partir do cardápio.</p>'+
      '<div class="ju-two"><label class="ju-field">Calorias (kcal)<input name="kcal" type="number" value="'+M.kcal+'"></label><label class="ju-field">Proteína (g)<input name="p" type="number" value="'+M.p+'"></label></div>'+
      '<div class="ju-two"><label class="ju-field">Carboidrato (g)<input name="c" type="number" value="'+M.c+'"></label><label class="ju-field">Gordura (g)<input name="g" type="number" value="'+M.g+'"></label></div>',
      function(f){ nutri().meta = {kcal:+f.kcal.value||1800, p:+f.p.value||115, c:+f.c.value||190, g:+f.g.value||58}; save(); toast("Metas atualizadas"); });
  }

  // ---------- Sugestões da semana ----------
  function semanaInsights(){
    var ws = weekStart(new Date()), today = new Date(), keys = ["seg","ter","qua","qui","sex","sab","dom"], days = [];
    for(var i=0;i<7;i++){ var d = addDays(ws,i); if(d>today) break; days.push(dKey(d)); }
    var prevWs = addDays(ws,-7), prev = []; for(var j=0;j<7;j++) prev.push(dKey(addDays(prevWs,j)));
    var hs = J().habits, hd = 0, ht = 0; days.forEach(function(k){ hs.forEach(function(h){ ht++; if(habitDone(h,k)) hd++; }); });
    var w = gymWeek(), waterAvg = days.length ? days.reduce(function(a,k){ return a+water(k); },0)/days.length : 0;
    var plannedT = 0; days.forEach(function(k,i){ if(plannedMinutes(keys[i])>0) plannedT++; });
    var stDone = (J().studies||[]).filter(function(s){ return s.feito && s.data>=dKey(ws) && s.data<=todayKey(); }).length;
    var stLate = (J().studies||[]).filter(function(s){ return !s.feito && (s.fim||s.data) < todayKey(); }).length;
    var prot = days.map(function(k){ return nutriDay(k); }).filter(function(t){ return t.n; }), protAvg = prot.length ? prot.reduce(function(a,t){ return a+t.p; },0)/prot.length : 0;
    var tips = [];
    if(plannedT && w.n < plannedT) tips.push(["🏋️","Treino: "+w.n+" de "+plannedT+" treinos previstos até hoje. Que tal garantir o próximo logo cedo, no horário das 05:50?"]);
    else if(w.n) tips.push(["🏋️","Treinos em dia: "+w.n+" nesta semana e "+w.kg.toLocaleString("pt-BR")+" kg levantados. Se a última série ficou fácil, suba 1–2 kg no próximo treino."]);
    if(waterAvg < 6) tips.push(["💧","Água: média de "+waterAvg.toFixed(1).replace(".",",")+" copos por dia. Deixe a garrafa de 950 ml na mesa da HDL e encha duas vezes até o almoço."]);
    if(prot.length && protAvg < nutri().meta.p*0.85) tips.push(["🥚","Proteína: média de "+Math.round(protAvg)+" g de "+nutri().meta.p+" g. Um ovo ou iogurte no lanche fecha boa parte da diferença."]);
    if(stLate) tips.push(["📚","Estudos: "+stLate+" item"+(stLate>1?"s":"")+" atrasado"+(stLate>1?"s":"")+". Comece pelos P1 na aba Estudos."]);
    else if(stDone) tips.push(["📚","Estudos: "+stDone+" item"+(stDone>1?"s":"")+" concluído"+(stDone>1?"s":"")+" nesta semana. Siga o cronograma."]);
    if(ht && hd/ht < 0.6) tips.push(["🌿","Hábitos: "+Math.round(hd/ht*100)+"% feitos. Escolha só um para não falhar amanhã — o resto vem depois."]);
    var ok = ht && hd/ht>=0.8 && (!plannedT || w.n>=plannedT);
    var head = ok ? "Sua semana está fechando bem." : tips.length ? "Ajustes para a sua semana" : "A semana está só começando";
    return '<section class="ju-card" style="background:linear-gradient(135deg,#2E1F2B,#46283F);color:#FBF6F3;border:0"><div class="ju-head" style="margin-bottom:6px"><span class="ic" style="background:rgba(255,255,255,.12);color:#E9C48A">'+ico("target")+'</span><h3 style="color:#FBF6F3">'+head+'</h3></div>'+
      (tips.length ? '<ul style="margin:0;padding:0;list-style:none;display:grid;gap:8px">'+tips.slice(0,3).map(function(t){ return '<li style="display:grid;grid-template-columns:22px 1fr;gap:8px;font-size:13px;line-height:1.45;opacity:.92"><span>'+t[0]+'</span><span>'+esc(t[1])+'</span></li>'; }).join("")+'</ul>' : '<p style="margin:0;font-size:13px;opacity:.85">Marque seus hábitos, treinos e refeições — as sugestões aparecem aqui conforme a semana anda.</p>')+'</section>';
  }

  // Dicas de execução da ficha da EF Academia (Prof. Bruna).
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
    var GL = gym().log[k] || {};
    var body = det ? det.blocks.map(function(b){
        return '<li style="display:block"><span class="ju-label" style="display:block">'+esc(b.name)+'</span>'+b.items.map(function(it){
          var tip = tipFor(it[0]), sc = parseScheme(it[1]), e = GL[it[0]] || {}, sets = e.s || [], lk = lastKg(it[0], k);
          var dots = sc.reps.map(function(r,si){ return '<button class="ju-set'+(sets[si]?" on":"")+'" data-gymset="'+esc(it[0])+'|'+si+'" data-reps="'+esc(sc.reps.join(","))+'" aria-label="Série '+(si+1)+'">'+(si+1)+'</button>'; }).join("");
          var vol = 0; sets.forEach(function(on,si){ if(on && e.kg) vol += (sc.reps[si]||0)*e.kg; });
          var gymRow = sc.reps.length ? '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:4px 0 6px">'+dots+
            (sc.iso ? '' : '<label style="display:flex;align-items:center;gap:4px;margin-left:auto;font-size:12px" class="ju-muted"><input class="ju-kg num" type="number" inputmode="decimal" step="0.5" min="0" placeholder="kg" value="'+(e.kg||"")+'" data-gymkg="'+esc(it[0])+'" aria-label="Carga em kg">kg</label>')+
            '<small class="ju-muted" style="width:100%;font-size:11px">'+(sets.filter(Boolean).length)+'/'+sc.reps.length+' séries'+(vol?' · '+vol.toLocaleString("pt-BR")+' kg':'')+(lk?' · última vez: '+lk.kg+' kg':'')+'</small></div>' : '';
          return '<details style="font-size:13.5px;padding:2px 0"><summary style="display:flex;justify-content:space-between;gap:10px;cursor:pointer;list-style:none"><span style="min-width:0">'+esc(it[0])+(tip?' <span class="ju-muted" style="font-size:11px">ⓘ</span>':'')+'</span><span class="ju-muted num" style="white-space:nowrap">'+esc(it[1])+'</span></summary>'+
            (tip ? '<p class="ju-muted" style="margin:4px 0 6px;font-size:12.5px;line-height:1.45"><b>Atenção:</b> '+esc(tip)+'</p>' : '')+'</details>'+gymRow; }).join("")+'</li>';
      }).join("")
      : (resumo ? '<li style="display:block">'+esc(resumo)+'</li>' : '');
    return '<section class="ju-card" style="'+tone("treino")+'"><div class="ju-head"><span class="ic">'+ico("dumb")+'</span><h3>Treino do dia</h3><span class="ju-muted">'+esc(det ? det.title : "")+'</span></div>'+
      '<div class="ju-mid" style="font-size:22px">'+esc(titulo)+'</div>'+
      (det ? (function(){ var s = gym().sess[k]||{}, run = s.ini && !s.fim; return '<div style="display:flex;align-items:center;gap:10px;margin:10px 0 2px"><b id="juGymTimer" class="num" style="font-size:24px">'+gymTimerText()+'</b><span class="num" style="color:var(--j-green);font-weight:600">'+dayVolume(k).toLocaleString("pt-BR")+' kg</span>'+
        (s.fim ? '<span class="ju-muted" style="margin-left:auto;font-size:12px">treino encerrado ✓</span>' : '<button class="ju-btn '+(run?"primary":"soft")+'" style="margin-left:auto" data-gymact="'+(run?"stop":"start")+'">'+(run?"Encerrar":"Iniciar treino")+'</button>')+'</div>'; })() : '')+
      (body ? '<ul class="ju-list" style="gap:10px;margin-top:10px">'+body+'</ul>' : '')+
      '<span class="ju-label" style="display:block;margin-top:14px">Últimos 7 dias</span><div style="display:flex;gap:6px;margin-top:6px">'+week+'</div>'+
      '<div class="ju-grid" style="margin-top:12px"><button class="ju-btn '+(done?"soft":"primary")+'" data-treino="1">'+(done?"✓ Treino feito":"Marcar treino feito")+'</button><button class="ju-btn ghost" data-go="ficha">Ficha completa</button></div>'+
      (det ? '<p class="ju-muted" style="font-size:12px;margin:10px 0 0">Toque no exercício para ver a dica de execução. Descanso: 45–60s nas séries de 20; 60–90s nas de 15.</p>' : '')+'</section>';
  }
  var juFichaSel = null;
  function viewFicha(){
    if(typeof WORKOUT_DETAIL==="undefined" || !WORKOUT_DETAIL.length) return '<section class="ju-card"><p class="ju-empty">Ficha não encontrada.</p></section>';
    var keys = ["dom","seg","ter","qua","qui","sex","sab"], hoje = keys[new Date().getDay()], plan = (state.workout&&state.workout.plan)||{};
    var hojeLetter = (/Treino\s+([A-Z])\b/.exec(plan[hoje]||"")||[])[1];
    var sel = juFichaSel || hojeLetter || WORKOUT_DETAIL[0].letter;
    var W = WORKOUT_DETAIL.filter(function(w){ return w.letter===sel; })[0] || WORKOUT_DETAIL[0];
    var DN = {seg:"Seg",ter:"Ter",qua:"Qua",qui:"Qui",sex:"Sex",sab:"Sáb",dom:"Dom"};
    var semana = ["seg","ter","qua","qui","sex","sab","dom"].map(function(d){ var t = plan[d]||"Descanso", L = (/Treino\s+([A-Z])\b/.exec(t)||[])[1];
      return '<div style="display:grid;grid-template-columns:40px 1fr;gap:8px;align-items:center;padding:6px 0;border-top:1px solid var(--j-line)'+(d===hoje?';font-weight:600':'')+'"><b class="num" style="color:'+(d===hoje?'var(--j-green)':'var(--j-soft)')+'">'+DN[d]+'</b><span style="font-size:13px">'+(L?'<b style="display:inline-grid;place-items:center;width:22px;height:22px;border-radius:7px;background:var(--j-green-soft);color:var(--j-green);margin-right:6px;font-size:12px">'+L+'</b>':'')+esc(t.split(":")[0])+'</span></div>'; }).join("");
    var tabs = WORKOUT_DETAIL.map(function(w){ return '<button class="ju-btn '+(w.letter===W.letter?"primary":"soft")+'" style="padding:8px 0" data-ficha="'+w.letter+'">'+w.letter+'</button>'; }).join("");
    var blocos = W.blocks.map(function(b){
      return '<section class="ju-card"><span class="ju-label">'+esc(b.name)+'</span><ul class="ju-list" style="gap:10px;margin-top:10px">'+b.items.map(function(it,ix){ var tip = tipFor(it[0]), lk = lastKg(it[0], dKey(addDays(new Date(),1)));
        return '<li style="display:block"><div style="display:grid;grid-template-columns:24px 1fr auto;gap:8px;align-items:baseline"><b class="num ju-muted" style="font-size:12px">'+String(ix+1).padStart(2,"0")+'</b><span style="font-size:14px">'+esc(it[0])+'</span><b class="num" style="white-space:nowrap;font-size:13px">'+esc(it[1])+'</b></div>'+
          (lk ? '<small class="ju-muted" style="display:block;margin-left:32px;font-size:11.5px">última carga: '+lk.kg+' kg ('+fmtDay(parseKey(lk.d))+')</small>' : '')+
          (tip ? '<p class="ju-muted" style="margin:4px 0 0 32px;font-size:12.5px;line-height:1.45"><b style="color:var(--j-ink)">Atenção:</b> '+esc(tip)+'</p>' : '')+'</li>'; }).join("")+'</ul></section>';
    }).join("");
    return '<section class="ju-card" style="'+tone("treino")+'"><span class="ju-label">EF Academia · Prof. Bruna</span><h2 style="font-size:22px;margin:4px 0 2px">Ficha de treino</h2>'+
        '<p class="ju-muted" style="margin:0;font-size:12.5px">Objetivo: definição e fortalecimento · vigência até 21/11 — peça a ficha nova para a Bruna.</p></section>'+
      '<div style="display:grid;grid-template-columns:repeat('+WORKOUT_DETAIL.length+',1fr);gap:8px">'+tabs+'</div>'+
      '<section class="ju-card"><span class="ju-label">Treino '+esc(W.letter)+(W.letter===hojeLetter?' · hoje':'')+'</span><h3 style="font-size:20px;margin:2px 0 0">'+esc(W.title)+'</h3>'+
        '<p class="ju-muted" style="margin:6px 0 0;font-size:12.5px">'+W.blocks.reduce(function(a,b){ return a+b.items.length; },0)+' exercícios · '+W.blocks.map(function(b){ return b.name; }).join(" · ")+'</p>'+
        (W.letter===hojeLetter ? '<button class="ju-btn primary block" style="margin-top:10px" data-go="bemestar">Treinar agora (marcar séries e carga)</button>' : '')+'</section>'+
      blocos+
      '<section class="ju-card"><div class="ju-head" style="'+tone("treino")+'"><span class="ic">'+ico("cal")+'</span><h3>Sua semana de treinos</h3></div>'+semana+'</section>'+
      '<section class="ju-card"><span class="ju-label">Dicas de execução</span><ul style="margin:8px 0 0;padding-left:18px;font-size:12.5px;line-height:1.5;color:var(--j-soft);display:grid;gap:6px">'+
        '<li><b style="color:var(--j-ink)">Ordem importa:</b> comece pelos compostos (agachamento, leg) antes dos isoladores (extensora, flexora).</li>'+
        '<li><b style="color:var(--j-ink)">Séries piramidais (2×20 + 2×15):</b> comece mais leve com mais repetições e aumente a carga reduzindo as repetições.</li>'+
        '<li><b style="color:var(--j-ink)">Pico de contração 2":</b> segure 2 segundos no topo antes de descer.</li>'+
        '<li><b style="color:var(--j-ink)">Descanso:</b> 45–60s nas séries de 20; 60–90s nas de 15.</li>'+
        '<li><b style="color:var(--j-ink)">Core todo dia:</b> a prancha e o abdominal vêm no fim de cada treino — não pule.</li>'+
        '<li><b style="color:var(--j-ink)">Dor diferente do cansaço:</b> pare e peça ajuste à Bruna.</li></ul></section>';
  }
  function dietaDoDia(){
    var dk = ["dom","seg","ter","qua","qui","sex","sab"][new Date().getDay()];
    var plan = (state.diet && state.diet.plan && state.diet.plan[dk]) || {};
    var meals = [["cafe","☕","Café da manhã"],["almoco","🥗","Almoço"],["lanche","🍎","Lanche"],["jantar","🌙","Jantar"]];
    var k = todayKey(), w = ((state.diet && state.diet.log && state.diet.log[k]) || {}).water || 0;
    var sup = Array.isArray(state.supplements) ? state.supplements : [];
    var has = meals.some(function(m){ return plan[m[0]]; });
    var hr = new Date().getHours(), cur = hr<10 ? "cafe" : hr<15 ? "almoco" : hr<18 ? "lanche" : "jantar";
    var NL = nutri().log[k] || {};
    return '<section class="ju-card" style="'+tone("habitos")+'"><div class="ju-head"><span class="ic">'+ico("apple")+'</span><h3>Cardápio do dia</h3><span class="ju-muted">'+["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"][new Date().getDay()]+'</span></div>'+
      macrosHtml()+
      (has ? '<ul class="ju-list" style="gap:12px">'+meals.filter(function(m){ return plan[m[0]]; }).map(function(m){
        return '<li style="display:grid;grid-template-columns:28px minmax(0,1fr);gap:8px;align-items:start'+(m[0]===cur?';background:var(--j-blush);border-radius:12px;padding:8px;margin:-8px':'')+'"><span style="font-size:19px;line-height:1.2">'+m[1]+'</span><span style="min-width:0"><span class="ju-label" style="display:block">'+m[2]+(NL[m[0]]?' · <b style="color:var(--j-green)">'+NL[m[0]].kcal+' kcal · '+NL[m[0]].p+' g prot.</b>':'')+'</span>'+esc(plan[m[0]])+
          '<span style="display:flex;gap:6px;margin-top:6px"><button class="ju-btn '+(NL[m[0]]?"soft":"primary")+'" style="padding:6px 12px;font-size:12px" data-meal="'+m[0]+'">'+(NL[m[0]]?"✓ Registrado":"Comi")+'</button><button class="ju-btn ghost" style="padding:6px 10px;font-size:12px" data-mealedit="'+m[0]+'">Ajustar</button></span></span></li>';
      }).join("")+'</ul>' : '<p class="ju-empty">Sem cardápio para hoje. Monte o da semana na Dieta.</p>')+
      '<div class="ju-row" style="margin-top:12px"><span>💧 Água hoje</span><b class="num">'+w+'/8 copos</b></div>'+
      '<div class="ju-progress" style="--c:var(--j-blue,#2E78B7);margin-top:6px"><i style="width:'+Math.min(100,w/8*100).toFixed(0)+'%"></i></div>'+
      (sup.length ? '<details style="margin-top:12px"><summary class="ju-muted" style="cursor:pointer">Suplementos do dia</summary><ul class="ju-list" style="margin-top:8px;gap:8px">'+sup.map(function(g){
        return '<li style="display:block"><span class="ju-label" style="display:block">'+esc(g.period||"")+'</span>'+(g.items||[]).map(function(it){ return esc(it[0])+(it[1]?' <small class="ju-muted">· '+esc(it[1])+'</small>':''); }).join('<br>')+'</li>';
      }).join("")+'</ul></details>' : '')+
      '<div class="ju-grid" style="margin-top:12px"><button class="ju-btn soft" data-go="tracker">Marcar água</button><button class="ju-btn ghost" data-legacy="dieta">Cardápio da semana</button><button class="ju-btn ghost" data-go="compras">Lista do mercado</button><button class="ju-btn ghost" data-act="dietmeta">Metas da dieta</button></div></section>';
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
    return semanaInsights()+dietaDoDia()+treinoSemana()+treinoDoDia()+
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
  var JU_STUDY_SEED = [{"id": "s1", "curso": "sebrae", "titulo": "Entregar atividade de Introdução à Gestão (grupo de estudos)", "tipo": "entrega", "data": "2026-11-10", "feito": false, "nota": "Prazo exato a confirmar no grupo de estudos", "hora": "19:50", "horaFim": "20:35", "sessoes": [["Seg 09/11 · 19:50–20:35", "Ler o PDF da atividade e combinar a divisão com o grupo"], ["Ter 10/11 · 19:50–20:35", "Revisar a sua parte e postar no grupo"]], "detalhes": ["Tema: atuação do administrador na gestão de empresas", "Conferir formato de entrega e nomes do grupo"], "prio": 1}, {"id": "s2", "curso": "sebrae", "titulo": "Aulas da semana na plataforma (bloco fixo)", "tipo": "estudo", "data": "2026-11-09", "feito": false, "fim": "2026-11-27", "hora": "19:50", "horaFim": "20:35", "sessoes": [["Seg–Sex · 19:50–20:35", "Uma matéria por noite: assistir à aula, fazer o exercício e anotar dúvidas"]], "detalhes": ["Seg: Introdução à Gestão", "Ter: Programação Criativa e Letramento Digital", "Qua: Princípios Analítico-Quantitativos", "Qui: Empreendedorismo e Comportamento Empreendedor", "Sex: Future Skills: Storymakers / Ética nos Negócios (alternar)"], "prio": 2}, {"id": "s3", "curso": "sebrae", "titulo": "Revisão das 6 matérias para o AVA II", "tipo": "revisao", "data": "2026-11-23", "feito": false, "fim": "2026-11-28", "hora": "19:50", "horaFim": "20:35", "sessoes": [["Seg 23/11 · 19:50–20:35", "Introdução à Gestão: resumo de 1 página + exercícios da plataforma"], ["Ter 24/11 · 19:50–20:35", "Programação Criativa e Letramento Digital: resumo de 1 página + exercícios da plataforma"], ["Qua 25/11 · 19:50–20:35", "Princípios Analítico-Quantitativos: resumo de 1 página + exercícios da plataforma"], ["Qui 26/11 · 19:50–20:35", "Empreendedorismo e Comportamento Empreendedor: resumo de 1 página + exercícios da plataforma"], ["Sex 27/11 · 19:50–20:35", "Future Skills: Storymakers: resumo de 1 página + exercícios da plataforma"], ["Sáb 28/11 · 07:00–08:00", "Ética nos Negócios: resumo de 1 página + exercícios da plataforma"]], "detalhes": ["Usar as notas do 1º bimestre para priorizar: começar pelas de nota mais baixa", "Montar um resumo de 1 página por matéria"], "prio": 1}, {"id": "s4", "curso": "sebrae", "titulo": "AVA II — avaliação online (uma matéria por noite)", "tipo": "prova", "data": "2026-11-30", "feito": false, "fim": "2026-12-05", "hora": "19:50", "horaFim": "20:35", "sessoes": [["30/11 · 19:50–20:35", "AVA II — Introdução à Gestão"], ["01/12 · 19:50–20:35", "AVA II — Programação Criativa e Letramento Digital"], ["02/12 · 19:50–20:35", "AVA II — Princípios Analítico-Quantitativos"], ["03/12 · 19:50–20:35", "AVA II — Empreendedorismo e Comportamento Empreendedor"], ["04/12 · 19:50–20:35", "AVA II — Future Skills: Storymakers"], ["05/12 · 10:30–12:00", "AVA II — Ética nos Negócios"]], "detalhes": ["Conferir na plataforma o prazo de cada avaliação", "Fazer em ambiente silencioso, com o resumo ao lado"], "prio": 1}, {"id": "s5", "curso": "sebrae", "titulo": "Revisão para a prova presencial", "tipo": "revisao", "data": "2026-12-01", "feito": false, "fim": "2026-12-06", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Reler o resumo de 1 matéria por dia"], ["Sáb 05/12 · 14:00–16:00", "Simulado com questões antigas das 6 matérias"], ["Dom 06/12 · 14:00–15:30", "Revisar erros do simulado"]], "prio": 1}, {"id": "s6", "curso": "sebrae", "titulo": "Prova presencial no polo", "tipo": "prova", "data": "2026-12-07", "feito": false, "fim": "2026-12-12", "nota": "Confirmar no portal o dia e o horário agendados no polo", "hora": "19:00", "sessoes": [["Ao abrir o agendamento", "Escolher dia/horário no polo e lançar aqui"], ["Dia da prova", "Documento com foto + chegar 30 min antes"]], "prio": 1}, {"id": "s7", "curso": "sebrae", "titulo": "Término do período letivo 2026.2", "tipo": "marco", "data": "2026-12-16", "feito": false, "prio": 4}, {"id": "s8", "curso": "sebrae", "titulo": "Exame final (só se precisar)", "tipo": "prova", "data": "2026-12-17", "feito": false, "fim": "2026-12-18", "hora": "19:50", "horaFim": "20:35", "sessoes": [["14–16/12 · 19:50–20:35", "Revisão focada na matéria em exame"]], "prio": 1}, {"id": "s9", "curso": "tripleten", "titulo": "Sprint 4 — Análise Estatística de Dados", "tipo": "sprint", "data": "2026-11-09", "feito": false, "fim": "2026-11-15", "nota": "Oficial: até 24/11", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Estatística descritiva: média, mediana, desvio padrão", "Distribuições e histogramas", "Teste de hipóteses (t-test) e p-valor", "Projeto do sprint: comparar grupos e concluir com estatística", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s10", "curso": "tripleten", "titulo": "Sprint 5 — Ferramentas de Desenvolvimento de Software", "tipo": "sprint", "data": "2026-11-16", "feito": false, "fim": "2026-11-29", "nota": "Oficial: 25/11 a 15/12", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Linha de comando (terminal)", "Git e GitHub: commit, branch, push, pull request", "Ambientes virtuais e organização de projeto", "Projeto do sprint publicado em repositório", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s11", "curso": "tripleten", "titulo": "Sprint 6 — Projeto Integrado 1", "tipo": "sprint", "data": "2026-11-30", "feito": false, "fim": "2026-12-06", "nota": "Oficial: 16 a 22/12 · semana do AVA II: manter só as manhãs + fim de semana", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Pré-processamento e limpeza de dados (pandas)", "Análise exploratória com gráficos", "Teste de hipóteses", "Conclusões escritas para o negócio", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s12", "curso": "tripleten", "titulo": "Sprint 7 — Coleta e Armazenamento de Dados (SQL)", "tipo": "sprint", "data": "2026-12-07", "feito": false, "fim": "2026-12-20", "nota": "Oficial: 13 a 26/01", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["SELECT, WHERE, ORDER BY, LIMIT", "GROUP BY e funções de agregação", "JOINs entre tabelas", "Subconsultas", "Projeto do sprint com banco de dados", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s13", "curso": "tripleten", "titulo": "Sprint 8 — Análise de Negócio", "tipo": "sprint", "data": "2026-12-21", "feito": false, "fim": "2027-01-03", "nota": "Oficial: 27/01 a 09/02 · usar o recesso de fim de ano", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Métricas de produto: DAU/MAU, retenção, coortes", "Métricas de marketing: CAC, LTV, ROMI", "Funil de conversão", "Projeto do sprint: relatório de métricas", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s14", "curso": "tripleten", "titulo": "Sprint 9 — Decisões de Negócio Baseadas em Dados", "tipo": "sprint", "data": "2027-01-04", "feito": false, "fim": "2027-01-12", "nota": "Oficial: 10 a 23/02", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Priorização de hipóteses (ICE/RICE)", "Testes A/B: desenho e análise", "Interpretação de resultados para decisão", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s15", "curso": "tripleten", "titulo": "Sprint 10 — Como Relatar uma História Usando Dados", "tipo": "sprint", "data": "2027-01-13", "feito": false, "fim": "2027-01-19", "nota": "Oficial: 24/02 a 09/03", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Storytelling com dados", "Escolha de gráficos e dashboards", "Apresentação dos resultados", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s16", "curso": "tripleten", "titulo": "Sprint 11 — Projeto Integrado 2", "tipo": "sprint", "data": "2027-01-20", "feito": false, "fim": "2027-01-24", "nota": "Oficial: 10 a 16/03", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Projeto completo: dados → análise → apresentação", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s17", "curso": "tripleten", "titulo": "Sprint 12 — Automação", "tipo": "sprint", "data": "2027-01-25", "feito": false, "fim": "2027-01-31", "nota": "Oficial: 24/03 a 06/04", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Scripts Python reutilizáveis", "Pipelines e atualização automática de dados", "Dashboards automatizados", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s18", "curso": "tripleten", "titulo": "Sprint 13 — Previsões e Predições", "tipo": "sprint", "data": "2027-02-01", "feito": false, "fim": "2027-02-03", "nota": "Oficial: 07 a 13/04", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Regressão e previsão", "Noções de machine learning", "Avaliação de modelos", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s19", "curso": "tripleten", "titulo": "Sprint 14 — Projeto Final", "tipo": "sprint", "data": "2027-02-04", "feito": false, "fim": "2027-02-12", "nota": "Oficial: a partir de 14/04/2027 · meta: entregar até 12/02", "hora": "05:20", "horaFim": "19:45", "sessoes": [["Seg–Sex · 05:20–05:50", "Teoria: lições do sprint na plataforma"], ["Seg–Sex · 18:35–19:45", "Prática: exercícios e projeto do sprint"], ["Sáb · 07:00–08:00 e 14:00–17:00", "Projeto do sprint (bloco longo)"], ["Dom · 14:00–16:00", "Revisar, ajustar o código e enviar o projeto"]], "detalhes": ["Escolher o case (de preferência ligado a vendas/HDL)", "Análise completa + apresentação", "Revisão final e entrega", "(tópicos esperados — conferir na plataforma)"], "prio": 2}, {"id": "s20", "curso": "tripleten", "titulo": "Confirmar com o tutor se a plataforma libera os sprints antes da data da turma DA41", "tipo": "estudo", "data": "2026-11-10", "feito": false, "hora": "12:25", "horaFim": "12:40", "sessoes": [["Ter 10/11 · 12:25–12:40", "Mensagem ao tutor/suporte pela plataforma"]], "prio": 2}, {"id": "s21", "curso": "concurso", "titulo": "Ler o edital e montar o caderno de erros", "tipo": "estudo", "data": "2026-11-14", "feito": false, "hora": "10:30", "horaFim": "12:30", "sessoes": [["Sáb 14/11 · 10:30–12:30", "Ler o conteúdo programático (Anexo VIII) e separar a lei seca de cada matéria"]], "detalhes": ["Prova: 70 questões (16 Português, 30 Direito, 24 Conhecimentos Gerais) + redação", "Blocos I e II eliminatórios: mínimo de 50% de acertos em cada", "Bloco III (Atualidades 4, Matemática 4, Informática 9, Raciocínio Lógico 7) só classifica"], "prio": 1}, {"id": "s22", "curso": "concurso", "titulo": "TJSP Escrevente: pagar só o boleto TJSP2607 (R$ 81) — não pagar o de Oficial", "tipo": "pagamento", "data": "2026-12-11", "feito": false, "hora": "12:30", "horaFim": "12:45", "prio": 1}, {"id": "s23", "curso": "concurso", "titulo": "Semana 1 — Direito Penal + Português (Interpretação de textos verbais e não verbais)", "tipo": "estudo", "data": "2026-11-16", "feito": false, "fim": "2026-11-22", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Interpretação de textos verbais e não verbais: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Direito Penal: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Direito Penal: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["CP arts. 293 a 305; 307; 308; 311-A (falsidades)", "CP arts. 312 a 317; 319 a 333 (crimes contra a administração pública)", "CP arts. 336, 337; 339 a 347; 357 e 359"], "prio": 1}, {"id": "s24", "curso": "concurso", "titulo": "Semana 2 — Direito Processual Penal + Português (Informações literais, inferências e ponto de vista do autor)", "tipo": "estudo", "data": "2026-11-23", "feito": false, "fim": "2026-11-29", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Informações literais, inferências e ponto de vista do autor: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Direito Processual Penal: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Direito Processual Penal: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["CPP arts. 251–258; 261–267; 274", "CPP arts. 351–372 (citações e intimações)", "CPP arts. 394–497 (procedimentos e júri)", "CPP arts. 531–538; 541–548; 574–667 (recursos)", "Lei 9.099/95 arts. 60–83; 88 e 89"], "prio": 1}, {"id": "s25", "curso": "concurso", "titulo": "Semana 3 — Processual Civil I + Português (Coesão e relações entre ideias)", "tipo": "estudo", "data": "2026-11-30", "feito": false, "fim": "2026-12-06", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Coesão e relações entre ideias: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Processual Civil I: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Processual Civil I: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["CPC arts. 144–155 (impedimento e suspeição; auxiliares)", "CPC arts. 188–275 (atos processuais, prazos, comunicação)", "CPC arts. 294–311 (tutela provisória)"], "prio": 1}, {"id": "s26", "curso": "concurso", "titulo": "Semana 4 — Processual Civil II + Juizados + Português (Significação, sinônimos/antônimos, sentido próprio e figurado)", "tipo": "estudo", "data": "2026-12-07", "feito": false, "fim": "2026-12-13", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Significação, sinônimos/antônimos, sentido próprio e figurado: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Processual Civil II + Juizados: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Processual Civil II + Juizados: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["CPC arts. 318–538 (procedimento comum, sentença, cumprimento)", "CPC arts. 994–1026 (recursos)", "Lei 9.099/95 arts. 3º–19", "Lei 12.153/2009 (Juizados da Fazenda Pública)"], "prio": 1}, {"id": "s27", "curso": "concurso", "titulo": "Semana 5 — Direito Constitucional + Português (Classes de palavras I)", "tipo": "estudo", "data": "2026-12-14", "feito": false, "fim": "2026-12-20", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Classes de palavras I (substantivo, adjetivo, artigo, numeral, pronome): 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Direito Constitucional: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Direito Constitucional: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["CF Título II, Caps. I–III (direitos e garantias, sociais, nacionalidade)", "CF Título III, Cap. VII, Seções I e II (administração pública e servidores)", "CF art. 92 (órgãos do Judiciário)"], "prio": 1}, {"id": "s28", "curso": "concurso", "titulo": "Semana 6 — Direito Administrativo + Português (Classes de palavras II)", "tipo": "estudo", "data": "2026-12-21", "feito": false, "fim": "2026-12-27", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Classes de palavras II (verbo, advérbio, preposição, conjunção): 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Direito Administrativo: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Direito Administrativo: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Lei 10.261/68 arts. 1º–86; 171–175; 239–323 (Estatuto do servidor de SP)", "Lei 8.429/92 (Improbidade Administrativa)"], "prio": 1}, {"id": "s29", "curso": "concurso", "titulo": "Semana 7 — Legislação interna do TJSP + Português (Concordância verbal)", "tipo": "estudo", "data": "2026-12-28", "feito": false, "fim": "2027-01-03", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Concordância verbal: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Legislação interna do TJSP: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Legislação interna do TJSP: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Res. TJSP 850/2021 (teletrabalho)", "Res. TJSP 963/2025 (eproc)", "LC 1.111/2010 (plano de cargos)", "Regimento Interno do TJSP"], "prio": 1}, {"id": "s30", "curso": "concurso", "titulo": "Semana 8 — Normas da Corregedoria (NSCGJ) + Português (Concordância nominal + regência verbal)", "tipo": "estudo", "data": "2027-01-04", "feito": false, "fim": "2027-01-10", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Concordância nominal + regência verbal: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Normas da Corregedoria (NSCGJ): teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Normas da Corregedoria (NSCGJ): 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Tomo I, Cap. II, Seção I (subs. I e II)", "Tomo I, Cap. III, Seções I, II, V–VII; VIII (subs. I–III); IX–XIX", "Tomo I, Cap. XI, Seções I–VII"], "prio": 1}, {"id": "s31", "curso": "concurso", "titulo": "Semana 9 — Informática I (9 questões) + Português (Regência nominal + colocação pronominal)", "tipo": "estudo", "data": "2027-01-11", "feito": false, "fim": "2027-01-17", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Regência nominal + colocação pronominal: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Informática I (9 questões): teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Informática I (9 questões): 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Windows: pastas, arquivos, atalhos, área de transferência", "Word: formatação, tabelas, quebras, numeração, índices", "Excel: células, fórmulas, funções, gráficos, classificação"], "prio": 2}, {"id": "s32", "curso": "concurso", "titulo": "Semana 10 — Informática II + Matemática + Português (Crase)", "tipo": "estudo", "data": "2027-01-18", "feito": false, "fim": "2027-01-24", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Crase: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Informática II + Matemática: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Informática II + Matemática: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["E-mail, internet (URL, links, busca)", "Teams, OneDrive, SharePoint, OneNote", "Matemática: porcentagem, razão/proporção, regra de três, juros simples, médias, equações"], "prio": 2}, {"id": "s33", "curso": "concurso", "titulo": "Semana 11 — Raciocínio Lógico + Atualidades + Português (Pontuação)", "tipo": "estudo", "data": "2027-01-25", "feito": false, "fim": "2027-01-31", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Pontuação: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Raciocínio Lógico + Atualidades: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Raciocínio Lógico + Atualidades: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Raciocínio lógico: proposições, sequências, problemas (7 questões)", "Atualidades desde o 1º semestre de 2026", "Estatuto da Pessoa com Deficiência (Lei 13.146/15) arts. 1º–13; 34–38"], "prio": 3}, {"id": "s34", "curso": "concurso", "titulo": "Semana 12 — 2ª volta: Penal + Processual Penal + Português (Revisão: interpretação de texto)", "tipo": "estudo", "data": "2027-02-01", "feito": false, "fim": "2027-02-07", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Revisão: interpretação de texto: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "2ª volta: Penal + Processual Penal: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "2ª volta: Penal + Processual Penal: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Lei seca dos artigos do edital", "Questões VUNESP + caderno de erros"], "prio": 1}, {"id": "s35", "curso": "concurso", "titulo": "Semana 13 — 2ª volta: Processual Civil + Juizados + Português (Revisão: concordância, regência e crase)", "tipo": "estudo", "data": "2027-02-08", "feito": false, "fim": "2027-02-14", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Revisão: concordância, regência e crase: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "2ª volta: Processual Civil + Juizados: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "2ª volta: Processual Civil + Juizados: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Lei seca dos artigos do edital", "Questões VUNESP + caderno de erros"], "prio": 1}, {"id": "s36", "curso": "concurso", "titulo": "Semana 14 — 2ª volta: Constitucional, Administrativo, Legislação interna e NSCGJ + Português (Revisão: pontuação e colocação)", "tipo": "estudo", "data": "2027-02-15", "feito": false, "fim": "2027-02-21", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Revisão: pontuação e colocação: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "2ª volta: Constitucional, Administrativo, Legislação interna e NSCGJ: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "2ª volta: Constitucional, Administrativo, Legislação interna e NSCGJ: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Lei seca dos artigos do edital", "Questões VUNESP + caderno de erros"], "prio": 1}, {"id": "s37", "curso": "concurso", "titulo": "Semana 15 — Redação + simulado + Português (Redação dissertativa-argumentativa)", "tipo": "estudo", "data": "2027-02-22", "feito": false, "fim": "2027-02-28", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Redação dissertativa-argumentativa: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Redação + simulado: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Redação + simulado: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Estrutura dissertativo-argumentativa: introdução, 2 desenvolvimentos, conclusão", "Escrever 2 redações e corrigir com a grade da VUNESP"], "prio": 1}, {"id": "s38", "curso": "concurso", "titulo": "Semana 16 — Revisão final + Português (Revisão geral de Português)", "tipo": "estudo", "data": "2027-03-01", "feito": false, "fim": "2027-03-07", "hora": "12:25", "horaFim": "12:55", "sessoes": [["Seg–Sex · 12:25–12:55", "Português — Revisão geral de Português: 15 questões VUNESP + correção"], ["Sáb · 10:30–12:30", "Revisão final: teoria (resumo/videoaula) + leitura da lei seca"], ["Dom · 11:15–12:45", "Revisão final: 40 questões VUNESP + caderno de erros"], ["Dom · 16:30–17:00", "Revisão rápida da semana (flashcards)"]], "detalhes": ["Caderno de erros completo", "Resumos de lei seca", "Descanso no sábado 13/03"], "prio": 1}, {"id": "s39", "curso": "concurso", "titulo": "Simulado completo (70 questões VUNESP + redação) + correção", "tipo": "simulado", "data": "2026-12-19", "feito": false, "hora": "13:30", "horaFim": "18:00", "sessoes": [["13:30–17:30", "Prova no tempo real (vespertino, como no dia)"], ["17:30–18:00", "Correção e caderno de erros"]], "prio": 2}, {"id": "s40", "curso": "concurso", "titulo": "Simulado completo (70 questões VUNESP + redação) + correção", "tipo": "simulado", "data": "2027-01-23", "feito": false, "hora": "13:30", "horaFim": "18:00", "sessoes": [["13:30–17:30", "Prova no tempo real (vespertino, como no dia)"], ["17:30–18:00", "Correção e caderno de erros"]], "prio": 2}, {"id": "s41", "curso": "concurso", "titulo": "Simulado completo (70 questões VUNESP + redação) + correção", "tipo": "simulado", "data": "2027-02-20", "feito": false, "hora": "13:30", "horaFim": "18:00", "sessoes": [["13:30–17:30", "Prova no tempo real (vespertino, como no dia)"], ["17:30–18:00", "Correção e caderno de erros"]], "prio": 2}, {"id": "s42", "curso": "concurso", "titulo": "Simulado completo (70 questões VUNESP + redação) + correção", "tipo": "simulado", "data": "2027-03-06", "feito": false, "hora": "13:30", "horaFim": "18:00", "sessoes": [["13:30–17:30", "Prova no tempo real (vespertino, como no dia)"], ["17:30–18:00", "Correção e caderno de erros"]], "prio": 2}, {"id": "s43", "curso": "concurso", "titulo": "TJSP Escrevente: prova objetiva e discursiva", "tipo": "prova", "data": "2027-03-14", "feito": false, "nota": "Período vespertino; local e horário saem na convocação", "sessoes": [["Véspera", "Separar documento com foto, caneta preta transparente e lanche"], ["Dia", "Chegar com 1h de antecedência"]], "prio": 1}, {"id": "s44", "curso": "concurso", "titulo": "TJSP: gabarito", "tipo": "marco", "data": "2027-03-17", "feito": false, "hora": "10:00", "prio": 4}];
  var JU_COURSES = {sebrae:{nome:"Faculdade Sebrae", em:"🎓", t:"agenda"}, tripleten:{nome:"TripleTen", em:"💻", t:"sono"}, concurso:{nome:"Concurso TJSP", em:"⚖️", t:"financas"}};
  var JU_STUDY_TYPES = [["estudo","Estudo"],["revisao","Revisão"],["entrega","Entrega"],["prova","Prova"],["sprint","Sprint"],["simulado","Simulado"],["pagamento","Pagamento"],["prazo","Prazo"],["decisao","Decisão"],["marco","Marco"]];
  var juStudyFilter = "todos";
  function studies(){ var j = J(); if(!Array.isArray(j.studies)){ j.studies = JSON.parse(JSON.stringify(JU_STUDY_SEED)); setTimeout(function(){ persist(); }, 0); } return j.studies; }
  function studyEnd(i){ return i.fim || i.data; }
  function fmtRange(i){ var a = fmtDay(parseKey(i.data)); return i.fim && i.fim!==i.data ? a+" – "+fmtDay(parseKey(i.fim)) : a; }
  function daysTo(k){ var t = parseKey(todayKey()); return Math.round((parseKey(k)-t)/86400000); }
  var JU_PRIO = {1:{l:"P1 · crítico", c:"var(--j-red)", s:"var(--j-red-soft)"}, 2:{l:"P2 · estratégico", c:"var(--j-gold,#B8862E)", s:"var(--j-gold-soft,#F5EBD8)"}, 3:{l:"P3 · complementar", c:"var(--j-lav,#7D6BB8)", s:"var(--j-lav-soft,#ECE8F6)"}, 4:{l:"P4 · marco", c:"var(--j-soft)", s:"var(--j-surface-2)"}};
  function studyRow(i){
    var c = JU_COURSES[i.curso]||JU_COURSES.sebrae, k = todayKey(), late = !i.feito && studyEnd(i) < k, now = !i.feito && i.data<=k && studyEnd(i)>=k;
    var tipo = (JU_STUDY_TYPES.filter(function(x){ return x[0]===i.tipo; })[0]||["","Item"])[1], pr = JU_PRIO[i.prio||3];
    var hr = i.hora ? ' · '+esc(i.hora)+(i.horaFim?'–'+esc(i.horaFim):'') : '';
    var det = (i.sessoes&&i.sessoes.length) || (i.detalhes&&i.detalhes.length);
    return '<li style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:start"><div class="ju-check'+(i.feito?" done":"")+'" style="align-items:flex-start">'+
      '<button data-study="'+esc(i.id)+'" aria-label="'+(i.feito?"Desmarcar":"Concluir")+'">'+ico("check")+'</button>'+
      '<span style="white-space:normal;min-width:0"><small class="ju-muted" style="display:block;font-size:11.5px">'+
        '<b style="display:inline-block;font-size:10px;letter-spacing:.03em;padding:1px 7px;border-radius:999px;margin-right:4px;color:'+pr.c+';background:'+pr.s+'">'+pr.l+'</b>'+
        c.em+' '+esc(c.nome)+' · '+esc(tipo)+' · <b class="num" style="color:'+(late?"var(--j-red)":now?"var(--j-green)":"inherit")+'">'+fmtRange(i)+hr+(late?" · atrasado":now?" · agora":"")+'</b></small>'+esc(i.titulo)+
      (i.nota?'<small class="ju-muted" style="display:block;font-size:11.5px;margin-top:2px">'+esc(i.nota)+'</small>':'')+
      (det ? '<details style="margin-top:6px"><summary class="ju-muted" style="cursor:pointer;font-size:12px">Plano detalhado</summary>'+
        ((i.sessoes||[]).length ? '<ul style="margin:6px 0 0;padding:0;list-style:none;display:grid;gap:6px">'+i.sessoes.map(function(s){ return '<li style="display:grid;grid-template-columns:auto 1fr;gap:8px;font-size:12.5px;line-height:1.4"><b class="num" style="white-space:nowrap;color:var(--j-petrol,#0E5552)">'+esc(s[0])+'</b><span>'+esc(s[1])+'</span></li>'; }).join("")+'</ul>' : '')+
        ((i.detalhes||[]).length ? '<ul style="margin:8px 0 0;padding-left:18px;font-size:12.5px;line-height:1.45;color:var(--j-soft)">'+i.detalhes.map(function(d){ return '<li>'+esc(d)+'</li>'; }).join("")+'</ul>' : '')+
      '</details>' : '')+
      '</span></div>'+
      '<button class="ju-del" data-delstudy="'+esc(i.id)+'" aria-label="Apagar">'+ico("trash")+'</button></li>';
  }
  function byPrio(a,b){ return (a.prio||3)-(b.prio||3) || (a.data+(a.hora||"")).localeCompare(b.data+(b.hora||"")); }
  function estrategiaEstudos(all){
    var k = todayKey(), lim = dKey(addDays(new Date(),14));
    var pend = all.filter(function(i){ return !i.feito && i.tipo!=="marco"; });
    var Q = {fazer:[], agendar:[], encaixar:[], adiar:[]};
    pend.forEach(function(i){ var urg = i.data <= lim, imp = (i.prio||3) <= 2; (urg&&imp?Q.fazer:imp?Q.agendar:urg?Q.encaixar:Q.adiar).push(i); });
    function quad(t, sub, arr, col){ arr = arr.slice().sort(byPrio);
      return '<div style="border-radius:16px;padding:12px;background:'+col+'"><b style="font-size:13px">'+t+'</b><small class="ju-muted" style="display:block;font-size:11px;margin-bottom:6px">'+sub+' · '+arr.length+'</small>'+
        (arr.length ? '<ul style="margin:0;padding-left:16px;font-size:12px;line-height:1.4">'+arr.slice(0,4).map(function(i){ return '<li>'+esc(i.titulo.replace(/ — .*$/,""))+' <span class="ju-muted num">('+fmtDay(parseKey(i.data))+')</span></li>'; }).join("")+(arr.length>4?'<li class="ju-muted">+'+(arr.length-4)+'</li>':'')+'</ul>' : '<small class="ju-muted">nada aqui</small>')+'</div>'; }
    var peso = [["Conhecimentos em Direito",30,"eliminatório (mín. 50%)"],["Língua Portuguesa",16,"eliminatório (mín. 50%)"],["Informática",9,"classificatório"],["Raciocínio Lógico",7,"classificatório"],["Matemática",4,"classificatório"],["Atualidades",4,"classificatório"]];
    return '<section class="ju-card"><details open><summary style="cursor:pointer;list-style:none"><div class="ju-head" style="'+tone("financas")+';margin:0"><span class="ic">'+ico("target")+'</span><h3>Estratégia de prioridades</h3></div></summary>'+
      '<p class="ju-muted" style="margin:8px 0 12px;font-size:12.5px">Cada item recebe uma prioridade: <b>P1</b> crítico (provas, prazos e o que mais pesa na nota), <b>P2</b> estratégico (constrói o futuro, mas tem folga), <b>P3</b> complementar, <b>P4</b> só marco. Quando o tempo apertar, P1 vem primeiro.</p>'+
      '<span class="ju-label">1 · Matriz de Eisenhower (próximos 14 dias)</span>'+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0 16px">'+
        quad("Fazer agora","urgente + importante",Q.fazer,"var(--j-red-soft,#F6E1E6)")+quad("Agendar e proteger","importante, não urgente",Q.agendar,"var(--j-green-soft,#E2EFE7)")+
        quad("Encaixar rápido","urgente, menos importante",Q.encaixar,"var(--j-gold-soft,#F5EBD8)")+quad("Deixar para depois","nem urgente nem importante",Q.adiar,"var(--j-surface-2,#F3E7E2)")+'</div>'+
      '<span class="ju-label">2 · Pareto da prova de Escrevente (70 questões)</span>'+
      '<div style="display:grid;gap:7px;margin:8px 0 6px">'+peso.map(function(p){ var w = Math.round(p[1]/70*100);
        return '<div style="display:grid;grid-template-columns:120px 1fr 34px;gap:8px;align-items:center;font-size:12px"><span>'+p[0]+'</span><div style="height:10px;border-radius:99px;background:var(--j-surface-2)"><i style="display:block;height:100%;width:'+(w*2)+'%;max-width:100%;border-radius:99px;background:'+(p[2].indexOf("elim")===0?"var(--j-red)":"var(--j-gold,#B8862E)")+'"></i></div><b class="num">'+p[1]+'</b></div>'; }).join("")+'</div>'+
      '<p class="ju-muted" style="font-size:12px;margin:0 0 16px">Direito + Português = 66% da prova e são eliminatórios: por isso ocupam o sábado e o domingo e o Português aparece todo dia. Informática (9) vale mais que Matemática e Atualidades juntas. A redação também elimina.</p>'+
      '<span class="ju-label">3 · SWOT dos seus estudos</span>'+
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0 16px;font-size:12px;line-height:1.4">'+
        '<div style="border-radius:14px;padding:10px;background:var(--j-green-soft,#E2EFE7)"><b>Forças</b><br>Rotina estruturada desde as 04:50 · disciplina comprovada na HDL · Excel e dados da TripleTen ajudam em Informática</div>'+
        '<div style="border-radius:14px;padding:10px;background:var(--j-red-soft,#F6E1E6)"><b>Fraquezas</b><br>Três frentes ao mesmo tempo · pouco tempo livre em dias úteis · Direito é conteúdo novo para você</div>'+
        '<div style="border-radius:14px;padding:10px;background:var(--j-gold-soft,#F5EBD8)"><b>Oportunidades</b><br>Recesso de fim de ano para adiantar a TripleTen · prova só em 14/03 · edital já publicado, conteúdo fechado</div>'+
        '<div style="border-radius:14px;padding:10px;background:var(--j-surface-2,#F3E7E2)"><b>Ameaças</b><br>Dezembro acumula AVA II, prova presencial e sprints · cansaço · semanas cheias na HDL no fim do mês</div></div>'+
      '<span class="ju-label">4 · Pirâmide de Maslow: por que cada estudo importa</span>'+
      '<div style="display:grid;gap:6px;margin:8px 0 4px;font-size:12px;text-align:center">'+
        '<div style="margin:0 22%;padding:8px;border-radius:12px;background:var(--j-lav-soft,#ECE8F6)"><b>Realização</b> · 💻 TripleTen: carreira em dados + vendas</div>'+
        '<div style="margin:0 11%;padding:8px;border-radius:12px;background:var(--j-blush,#F3E7E2)"><b>Estima</b> · 🎓 Faculdade Sebrae: diploma e reconhecimento</div>'+
        '<div style="padding:8px;border-radius:12px;background:var(--j-gold-soft,#F5EBD8)"><b>Segurança</b> · ⚖️ Concurso TJSP: estabilidade e renda previsível</div></div>'+
      '<p class="ju-muted" style="font-size:12px;margin:6px 0 0">A base sustenta o resto: em semanas apertadas, proteja primeiro o concurso e as provas da faculdade; a TripleTen tem meta própria (12/02), mas não tem prova eliminatória.</p>'+
      '</details></section>';
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
    var semana = list.filter(function(i){ return !i.feito && i.data <= dKey(addDays(new Date(),7)); }).sort(byPrio);
    var futuros = list.filter(function(i){ return !i.feito && i.data > dKey(addDays(new Date(),7)); });
    var feitos = list.filter(function(i){ return i.feito; });
    var byMonth = {}, order = [];
    futuros.forEach(function(i){ var m = i.data.slice(0,7); if(!byMonth[m]){ byMonth[m] = []; order.push(m); } byMonth[m].push(i); });
    var blocks = ((state.dayPlan&&state.dayPlan.blocks)||[]).filter(function(b){ return b.area==="academico"||b.area==="complementar"; });
    var DN = {seg:"seg",ter:"ter",qua:"qua",qui:"qui",sex:"sex",sab:"sáb",dom:"dom"};
    return ''+
      '<div class="ju-grid">'+cards+'<button class="ju-card" data-sfilter="todos" style="text-align:left;border:0;cursor:pointer'+(f==="todos"?";outline:2px solid var(--j-ink)":"")+'"><span class="ju-label">📚 Tudo</span><div class="ju-mid">'+all.filter(function(i){return i.feito;}).length+'/'+all.length+'</div><div class="ju-muted" style="font-size:12px">ver os três juntos</div></button></div>'+
      '<button class="ju-btn primary block" data-act="study">'+ico("plus")+' Novo item de estudo</button>'+
      estrategiaEstudos(all)+
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
      '<div class="ju-field">Prioridade'+seg("prio", [["1","P1 crítico"],["2","P2 estratégico"],["3","P3 complementar"]], "2")+'</div>'+
      '<div class="ju-two"><label class="ju-field">Data<input name="data" type="date" value="'+todayKey()+'"></label><label class="ju-field">Até (opcional)<input name="fim" type="date"></label></div>'+
      '<div class="ju-two"><label class="ju-field">Começa às<input name="hora" type="time" value="19:50"></label><label class="ju-field">Termina às<input name="horaFim" type="time" value="20:35"></label></div>',
      function(f){ var t = f.titulo.value.trim(); if(!t) return "Descreva o item.";
        var it = {id:uid("s"), curso:segVal(f,"curso")||"sebrae", titulo:t, tipo:segVal(f,"tipo")||"estudo", data:f.data.value||todayKey(), feito:false};
        if(f.fim.value && f.fim.value>it.data) it.fim = f.fim.value;
        it.prio = +(segVal(f,"prio")||2); if(f.hora.value) it.hora = f.hora.value; if(f.horaFim.value) it.horaFim = f.horaFim.value;
        studies().push(it); save(); toast("Item adicionado ao cronograma"); });
  }

  // ---------- Mural dos sonhos ----------
  var JU_DREAM_SEED = [
    {id:"m_casa", titulo:"Casa das Graças", em:"🏡", cor:["#F4D9D2","#E9C48A"], horizonte:"longo",
      frase:"Uma casa viva, sofisticada e aconchegante — simples, elegante, com cara de casa.",
      detalhes:["3 suítes + 2 quartos de visita","Home office e mini biblioteca particular","Quarto-oratório","Sala para encontros de família (jogos, TV)","Quintal verde, muro vivo e piscina","Varanda com pôr do sol · porta de madeira maciça"],
      passos:[{t:"Quitar as dívidas atuais",f:false},{t:"Formar a reserva de emergência",f:false},{t:"Calcular a entrada e o financiamento",f:false}]},
    {id:"m_familia", titulo:"Família", em:"🤍", cor:["#F3E7E2","#D99AA0"], horizonte:"medio",
      frase:"Um lar com paz, fé e gente amada reunida à mesa.",
      detalhes:["Encontros de família com jogos e conversa","Presença perto do pai, dos avós e da tia","Uma casa onde todos se sentem acolhidos"],
      passos:[{t:"Visitar a família com frequência (marcar na agenda)",f:false},{t:"Cuidar de mim primeiro: terapia, fé e rotina",f:false}]},
    {id:"m_filhos", titulo:"Filhos", em:"👶", cor:["#ECE8F6","#B7A9DE"], horizonte:"longo",
      frase:"Ser mãe no tempo certo, com estrutura e tranquilidade.",
      detalhes:["Momento emocional e financeiro preparado","Casa com espaço para crescer"],
      passos:[{t:"Estabilidade financeira (reserva + renda previsível)",f:false},{t:"Definir o momento com calma",f:false}]},
    {id:"m_invest", titulo:"Investimentos", em:"📈", cor:["#E2EFE7","#0E5552"], horizonte:"medio",
      frase:"Dinheiro trabalhando por mim: livre de dívidas e com renda crescente.",
      detalhes:["Sair das dívidas (R$ 1.000/mês a partir de jan/2027)","Reserva de emergência de 6 meses","Investir todo mês","Meta de renda: R$ 35 mil/mês"],
      passos:[{t:"Começar o plano de quitação em jan/2027",f:false},{t:"Abrir a conta da reserva de emergência",f:false},{t:"Primeiro aporte mensal",f:false}]},
    {id:"m_carro", titulo:"Carro próprio", em:"🚙", cor:["#F6E1E6","#C14C64"], horizonte:"curto",
      frase:"Liberdade para ir e vir — e, um dia, os carros dos sonhos.",
      detalhes:["Primeiro: um carro que caiba no orçamento","Sonhos: um Fusca, uma caminhonete para a família e um Jipe JPX vermelho"],
      passos:[{t:"Definir o teto de valor",f:false},{t:"Comparar à vista x financiado",f:false},{t:"Juntar a entrada",f:false}]},
    {id:"m_viagens", titulo:"Viagens", em:"✈️", cor:["#E3EAF0","#55708A"], horizonte:"medio",
      frase:"Conhecer o mundo: Tailândia, Itália e muitas estradas.",
      detalhes:["Tailândia — primeira viagem internacional (fim de 2027)","Itália — o destino dos sonhos","Passeios de um dia (Maria Fumaça e afins)"],
      passos:[{t:"Tirar/renovar o passaporte",f:false},{t:"Definir valor-alvo da Tailândia",f:false},{t:"Poupança mensal para viagens",f:false}]}
  ];
  var JU_HORIZ = {curto:"até 1 ano", medio:"1 a 3 anos", longo:"3+ anos"};
  function dreams(){ var j = J(); if(!Array.isArray(j.mural)){ j.mural = JSON.parse(JSON.stringify(JU_DREAM_SEED)); setTimeout(function(){ persist(); }, 0); } return j.mural; }
  function viewSonhos(){
    var ds = dreams();
    var total = 0, feitos = 0; ds.forEach(function(d){ (d.passos||[]).forEach(function(p){ total++; if(p.f) feitos++; }); });
    return '<section class="ju-card" style="background:linear-gradient(135deg,#2E1F2B,#0E5552);color:#FBF6F3;border:0"><span class="ju-label" style="color:#E9C48A">Mural dos sonhos</span>'+
        '<h2 style="font-size:24px;margin:4px 0 6px;color:#FBF6F3">O que você está construindo</h2><p style="margin:0;font-size:13px;opacity:.85">'+feitos+' de '+total+' passos dados. Toque num sonho para ver os detalhes e marcar o próximo passo.</p></section>'+
      '<div class="ju-mural">'+ds.map(function(d,ix){
        var ps = d.passos||[], ok = ps.filter(function(p){ return p.f; }).length, pct = ps.length ? Math.round(ok/ps.length*100) : 0;
        var c = d.cor||["#F3E7E2","#D99AA0"];
        return '<article class="ju-dream'+(ix===0?" big":"")+'">'+
          '<div class="ph" style="background:'+(d.img?'url('+d.img+') center/cover':'linear-gradient(135deg,'+c[0]+','+c[1]+')')+'">'+(d.img?'':'<span class="em">'+d.em+'</span>')+
            '<span class="hz">'+esc(JU_HORIZ[d.horizonte]||"")+'</span><label class="cam" aria-label="Trocar imagem">'+ico("plus")+'<input type="file" accept="image/*" data-dreamimg="'+esc(d.id)+'" hidden></label></div>'+
          '<div class="bd"><h3>'+esc(d.titulo)+'</h3><p class="fr">'+esc(d.frase||"")+'</p>'+
          '<div class="ju-progress" style="--c:'+c[1]+';margin:8px 0 4px"><i style="width:'+pct+'%"></i></div><small class="ju-muted">'+ok+'/'+ps.length+' passos</small>'+
          '<details><summary>Detalhes e próximos passos</summary>'+
            ((d.detalhes||[]).length?'<ul class="dt">'+d.detalhes.map(function(x){ return '<li>'+esc(x)+'</li>'; }).join("")+'</ul>':'')+
            '<ul class="ju-list" style="gap:8px;margin-top:8px">'+ps.map(function(p,pi){ return '<li class="ju-check'+(p.f?" done":"")+'"><button data-dreamstep="'+esc(d.id)+':'+pi+'" aria-label="Marcar passo">'+ico("check")+'</button><span style="white-space:normal">'+esc(p.t)+'</span></li>'; }).join("")+'</ul>'+
            '<div class="ju-grid" style="margin-top:10px"><button class="ju-btn soft" data-dreamadd="'+esc(d.id)+'">'+ico("plus")+' Passo</button><button class="ju-btn ghost" data-dreamdel="'+esc(d.id)+'">Remover sonho</button></div>'+
          '</details></div></article>';
      }).join("")+'</div>'+
      '<button class="ju-btn primary block" data-act="dream">'+ico("plus")+' Novo sonho</button>'+rodaHtml();
  }
  var JU_RODA = [["saude","Saúde"],["fe","Fé"],["familia","Família"],["amor","Amor"],["amizades","Amizades"],["carreira","Carreira"],["financas","Finanças"],["estudos","Estudos"],["lazer","Lazer"],["casa","Casa"],["proposito","Propósito"],["autocuidado","Autocuidado"]];
  function rodaHtml(){
    var r = J().roda || {}, vals = JU_RODA.map(function(a){ return +r[a[0]]||0; }), n = JU_RODA.length, cx = 150, cy = 150, R = 110;
    var filled = vals.some(function(v){ return v>0; });
    var pt = function(i,v){ var ang = -Math.PI/2 + i*2*Math.PI/n, rr = R*v/10; return [cx+rr*Math.cos(ang), cy+rr*Math.sin(ang)]; };
    var grid = [2,4,6,8,10].map(function(l){ return '<polygon points="'+JU_RODA.map(function(_,i){ return pt(i,l).map(function(x){return x.toFixed(1);}).join(","); }).join(" ")+'" fill="none" stroke="var(--j-line)" stroke-width="1"/>'; }).join("");
    var spokes = JU_RODA.map(function(a,i){ var e = pt(i,10), lb = pt(i,12.4); return '<line x1="'+cx+'" y1="'+cy+'" x2="'+e[0].toFixed(1)+'" y2="'+e[1].toFixed(1)+'" stroke="var(--j-line)"/><text x="'+lb[0].toFixed(1)+'" y="'+lb[1].toFixed(1)+'" font-size="10.5" text-anchor="middle" dominant-baseline="middle" fill="var(--j-soft)">'+a[1]+(vals[i]?' '+vals[i]:'')+'</text>'; }).join("");
    var poly = filled ? '<polygon points="'+vals.map(function(v,i){ return pt(i,v).map(function(x){return x.toFixed(1);}).join(","); }).join(" ")+'" fill="rgba(217,154,160,.35)" stroke="#C14C64" stroke-width="2"/>' : '';
    var low = filled ? JU_RODA.map(function(a,i){ return [a[1],vals[i]]; }).filter(function(x){ return x[1]>0; }).sort(function(a,b){ return a[1]-b[1]; }).slice(0,3) : [];
    return '<section class="ju-card"><div class="ju-head" style="'+tone("bemestar")+'"><span class="ic">'+ico("heart")+'</span><h3>Roda da vida</h3></div>'+
      '<svg viewBox="-20 -10 340 320" style="width:100%;max-width:360px;display:block;margin:0 auto">'+grid+spokes+poly+'</svg>'+
      (filled ? '<p class="ju-muted" style="font-size:12.5px;margin:6px 0 0">Áreas que mais pedem cuidado agora: <b>'+low.map(function(x){ return x[0]+' ('+x[1]+')'; }).join(", ")+'</b>. Elas devem pesar na escolha dos próximos passos dos sonhos.</p>' : '<p class="ju-empty">Dê uma nota de 0 a 10 para cada área da sua vida hoje. Refaça uma vez por mês para ver a evolução.</p>')+
      '<button class="ju-btn soft block" data-act="roda" style="margin-top:10px">'+(filled?"Atualizar notas":"Dar minhas notas")+'</button></section>';
  }
  function sheetRoda(){
    var r = J().roda || {};
    openSheet("Roda da vida (0 a 10)", '<div class="ju-two" style="grid-template-columns:1fr 1fr">'+JU_RODA.map(function(a){ return '<label class="ju-field">'+a[1]+'<input name="'+a[0]+'" type="number" min="0" max="10" inputmode="numeric" value="'+(r[a[0]]!=null?r[a[0]]:"")+'"></label>'; }).join("")+'</div>',
      function(f){ var o = {}; JU_RODA.forEach(function(a){ var v = parseFloat(f[a[0]].value); if(!isNaN(v)) o[a[0]] = Math.max(0,Math.min(10,Math.round(v))); }); o.em = todayKey(); J().roda = o; save(); toast("Roda da vida atualizada"); });
  }
  function sheetDream(){
    openSheet("Novo sonho",
      '<div class="ju-two"><label class="ju-field">Emoji<input name="em" maxlength="4" value="✨"></label><label class="ju-field">Sonho<input name="titulo" placeholder="Ex.: Intercâmbio" autocomplete="off"></label></div>'+
      '<label class="ju-field">Frase que te inspira<input name="frase" placeholder="Como vai ser quando acontecer?" autocomplete="off"></label>'+
      '<div class="ju-field">Prazo'+seg("hz", [["curto","até 1 ano"],["medio","1–3 anos"],["longo","3+ anos"]], "medio")+'</div>'+
      '<label class="ju-field">Primeiro passo<input name="passo" placeholder="Ex.: pesquisar valores" autocomplete="off"></label>',
      function(f){ var t = f.titulo.value.trim(); if(!t) return "Dê um nome ao sonho.";
        dreams().push({id:uid("m"), titulo:t, em:f.em.value.trim()||"✨", cor:["#F3E7E2","#D99AA0"], horizonte:segVal(f,"hz")||"medio", frase:f.frase.value.trim(), detalhes:[], passos:f.passo.value.trim()?[{t:f.passo.value.trim(),f:false}]:[]});
        save(); toast("Sonho no mural ✨"); });
  }
  function sheetDreamStep(id){
    openSheet("Novo passo", '<label class="ju-field">Passo<input name="t" placeholder="Ex.: abrir conta de investimento" autocomplete="off"></label>',
      function(f){ var t = f.t.value.trim(); if(!t) return "Escreva o passo."; var d = dreams().filter(function(x){ return x.id===id; })[0]; if(d){ (d.passos=d.passos||[]).push({t:t,f:false}); save(); } });
  }
  function dreamImage(input){
    var file = input.files && input.files[0], id = input.dataset.dreamimg; if(!file) return;
    var img = new Image(), url = URL.createObjectURL(file);
    img.onload = function(){ var m = 560, s = Math.min(1, m/Math.max(img.width,img.height)), cv = document.createElement("canvas"); cv.width = Math.round(img.width*s); cv.height = Math.round(img.height*s);
      cv.getContext("2d").drawImage(img,0,0,cv.width,cv.height); URL.revokeObjectURL(url);
      var d = dreams().filter(function(x){ return x.id===id; })[0]; if(d){ d.img = cv.toDataURL("image/jpeg",0.72); save(); toast("Imagem no mural"); } };
    img.src = url;
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
    var fn = {inicio:viewInicio, plano:viewPlano, tracker:viewTracker, financas:viewFinancas, sono:viewSono, bemestar:viewBemestar, tarefas:viewTarefas, compras:viewCompras, estudos:viewEstudos, sonhos:viewSonhos, ficha:viewFicha, eu:viewEu}[view];
    var sub = ["financas","sono","tarefas","compras","estudos","sonhos","ficha"].indexOf(view)>-1;
    el.innerHTML = (sub ? '<div class="ju-sub"><button class="ju-back" data-go="inicio" aria-label="Voltar">'+ico("back")+'</button></div>' : '') + fn();
    if(view==="inicio"){ renderAgora(); requestAnimationFrame(updateChipbars); }
    if(view==="eu"){ var ib = document.getElementById("installApp"); var ji = document.getElementById("juInstall"); if(ji && ib && ib.hidden) ji.hidden = true; }
  }
  // Setas e esmaecimento nas bordas dos atalhos, conforme há mais conteúdo para cada lado.
  function updateChipbars(){
    document.querySelectorAll(".ju-chipbar").forEach(function(bar){
      var c = bar.querySelector(".ju-chips"); if(!c) return;
      var max = c.scrollWidth - c.clientWidth, left = c.scrollLeft > 4, right = c.scrollLeft < max - 4;
      bar.classList.toggle("more-l", left); bar.classList.toggle("more-r", right && max > 4);
      var p = bar.querySelector(".prev"), n = bar.querySelector(".next");
      if(p) p.hidden = !left; if(n) n.hidden = !(right && max > 4);
    });
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
        ["inicio","plano","tracker","financas","sono","bemestar","tarefas","compras","estudos","sonhos","ficha","eu"].map(function(v){ return '<section class="ju-view" data-view="'+v+'" hidden></section>'; }).join("")+
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
      var t = e.target.closest("[data-go],[data-act],[data-legacy],[data-task],[data-habit],[data-water],[data-pay],[data-deltx],[data-deltask],[data-delhabit],[data-day],[data-month],[data-mood],[data-proxy],[data-shop],[data-shoptab],[data-shopadd],[data-shopreset],[data-delshop],[data-treino],[data-study],[data-delstudy],[data-sfilter],[data-chipscroll],[data-dreamstep],[data-dreamadd],[data-dreamdel],[data-gymset],[data-gymact],[data-meal],[data-mealedit],[data-ficha],#juPhoto");
      if(!t || !t.closest(".ju, .ju-nav, .ju-legacy-bar")) return;
      if(t.id==="juPhoto"){ photoOffset++; var img = document.getElementById("juPhotoImg"); if(img) img.src = photoOfDay(photoOffset); return; }
      if(t.dataset.go){ go(t.dataset.go); return; }
      if(t.dataset.ficha){ juFichaSel = t.dataset.ficha; renderView("ficha"); return; }
      if(t.dataset.gymset){ var gs = t.dataset.gymset.split("|"), gk = todayKey(), GLk = gym().log[gk] || (gym().log[gk] = {}), ge = GLk[gs[0]] || (GLk[gs[0]] = {s:[]});
        ge.s = ge.s || []; ge.s[+gs[1]] = !ge.s[+gs[1]]; ge.reps = String(t.dataset.reps||"").split(",").map(Number);
        var sess = gym().sess[gk] || (gym().sess[gk] = {}); if(!sess.ini) sess.ini = Date.now();
        save(); return; }
      if(t.dataset.gymact){ var sk = todayKey(), ss = gym().sess[sk] || (gym().sess[sk] = {});
        if(t.dataset.gymact==="start"){ ss.ini = ss.ini || Date.now(); delete ss.fim; toast("Bom treino! 💪"); }
        else { ss.fim = Date.now(); state.workout.log[sk] = true; toast("Treino encerrado · "+dayVolume(sk).toLocaleString("pt-BR")+" kg"); }
        save(); return; }
      if(t.dataset.meal){ var mk2 = todayKey(), ML = nutri().log[mk2] || (nutri().log[mk2] = {}); if(ML[t.dataset.meal]) delete ML[t.dataset.meal]; else { ML[t.dataset.meal] = JSON.parse(JSON.stringify(JU_MEAL_EST[t.dataset.meal]||{kcal:0,p:0,c:0,g:0})); toast("Refeição registrada"); } save(); return; }
      if(t.dataset.mealedit){ sheetMeal(t.dataset.mealedit); return; }
      if(t.dataset.dreamstep){ var dr = t.dataset.dreamstep.split(":"), dd = dreams().filter(function(x){ return x.id===dr[0]; })[0]; if(dd && dd.passos[+dr[1]]){ var st = dd.passos[+dr[1]]; st.f = !st.f; save(); if(st.f) toast("Mais um passo rumo ao sonho ✨"); } return; }
      if(t.dataset.dreamadd){ sheetDreamStep(t.dataset.dreamadd); return; }
      if(t.dataset.dreamdel){ armDelete(t, function(){ var a4 = dreams(), ix4 = a4.map(function(x){ return x.id; }).indexOf(t.dataset.dreamdel); if(ix4>-1){ a4.splice(ix4,1); save(); } }); return; }
      if(t.dataset.chipscroll){ var cs = t.parentNode.querySelector(".ju-chips"); if(cs) cs.scrollBy({left:(+t.dataset.chipscroll)*Math.max(160, cs.clientWidth*0.7), behavior:"smooth"}); return; }
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
        else if(a==="task") sheetTask(); else if(a==="event") sheetEvent(); else if(a==="study") sheetStudy(); else if(a==="dream") sheetDream(); else if(a==="roda") sheetRoda(); else if(a==="dietmeta") sheetDietMeta(); else if(a==="habit") sheetHabit();
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
    document.addEventListener("scroll", function(e){ if(e.target && e.target.classList && e.target.classList.contains("ju-chips")) updateChipbars(); }, true);
    window.addEventListener("resize", updateChipbars);
    document.addEventListener("keydown", function(e){
      if(e.key==="Enter" && e.target && e.target.id==="juShopNew"){ e.preventDefault(); var b = document.querySelector("[data-shopadd]"); if(b) b.click(); }
    });
    document.addEventListener("change", function(e){
      if(e.target && e.target.dataset && e.target.dataset.dreamimg){ dreamImage(e.target); return; }
      if(e.target && e.target.dataset && e.target.dataset.gymkg){ var kk = todayKey(), GL2 = gym().log[kk] || (gym().log[kk] = {}), en = GL2[e.target.dataset.gymkg] || (GL2[e.target.dataset.gymkg] = {s:[]}); en.kg = parseFloat(String(e.target.value).replace(",",".")) || 0; save(); return; }
      var id = e.target.id, v = parseFloat(e.target.value);
      if(id==="juGoal" && v>=4 && v<=12){ J().sleepGoal = v; persist(); toast("Meta de sono atualizada"); }
      if(id==="juCycleLen" && v>=18 && v<=45){ J().cycle.len = Math.round(v); persist(); }
      if(id==="juCycleDur" && v>=2 && v<=10){ J().cycle.dur = Math.round(v); persist(); }
    });
    var saved = "inicio"; try{ saved = localStorage.getItem("painelJuView") || "inicio"; }catch(e){}
    juView = ["inicio","plano","tracker","financas","sono","bemestar","tarefas","compras","estudos","sonhos","ficha","eu"].indexOf(saved)>-1 ? saved : "inicio";
  }
  function shellStart(){ go(juView); }


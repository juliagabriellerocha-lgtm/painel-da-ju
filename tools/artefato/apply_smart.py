"""Leva os recursos inteligentes da Lunora para o painel pessoal da Ju (src/shell.js e src/shell.css)."""
import pathlib, sys, re
P = pathlib.Path("/home/claude/painel-da-ju/src/shell.js"); s = P.read_text(encoding="utf-8")
if "lnQuickBar" in s: sys.exit("já aplicado")
def rep(o, n):
    global s
    if s.count(o) != 1: sys.exit(f"{s.count(o)}x: {o[:80]!r}")
    s = s.replace(o, n)
SMART = pathlib.Path("/home/claude/lunora/lunora_smart.js").read_text(encoding="utf-8")
STUB = """  // Perfil da Ju para os recursos inteligentes (no app de venda isso vem do cadastro inicial)
  function lnProfile(){ return { name:"Ju", wake:"04:00", sleep:"21:20" }; }
  function lnName(){ return "Ju"; }
  function lnArea(){ return true; }
"""
rep("  function shellStart(){ go(juView); }", STUB + SMART + "\n  function shellStart(){ go(juView); }")
rep("""    '<div id="agoraSlot"></div>'+
    '<div class="ju-grid">'+""", """    lnQuickBar()+
    '<div id="agoraSlot"></div>'+
    '<div class="ju-grid">'+""")
rep('chip("plano","Agenda","cal","agenda")+', """'<button class="ju-chip" data-lnfocus style="'+tone("sono")+'"><i>'+ico("moon")+'</i><span>Foco</span></button>'+chip("plano","Agenda","cal","agenda")+""")
rep("""    var html = '<button class="ju-btn primary block" data-act="task">'+ico("plus")+' Nova tarefa</button>'+""", """    var html = lnQuickBar()+lnTriadeCard()+""")
rep("""    '<section class="ju-card" style="'+tone("tarefas")+'"><div class="ju-head"><span class="ic">'+ico("tasks")+'</span><h3>Tarefas do dia</h3>""",
    """    (juPlanDay===0 ? lnEncaixeCard() : '')+
    '<section class="ju-card" style="'+tone("tarefas")+'"><div class="ju-head"><span class="ic">'+ico("tasks")+'</span><h3>Tarefas do dia</h3>""")
rep("""    var html = '<section class="ju-card" style="display:flex;align-items:center;gap:16px;'+tone("habitos")""",
    """    var html = lnFocusCard()+'<section class="ju-card" style="display:flex;align-items:center;gap:16px;'+tone("habitos")""")
rep("""    '<section class="ju-card ju-money-hero">""", """    lnSafeSpend()+'<section class="ju-card ju-money-hero">""")
rep("""<span>'+esc(t.texto)+'</span></li>'; }""", """<span>'+esc(t.texto)+lnTaskMeta(t)+'</span></li>'; }
  function lnTaskMeta(t){ if(t.feita) return ""; var tr = LN_TRI[lnTriOf(t)]; return ' <small class="ln-tm" style="color:'+tr.c+'">● '+tr.l+(t.hora?' · '+esc(t.hora):'')+(t.tag==="trabalho"?' · 💼':'')+'</small>'; }""")
rep("""      '<label class="ju-field">Para quando<input name="data" type="date" value="'+todayKey()+'"></label>',
      function(f){ var t = f.texto.value.trim(); if(!t) return "Escreva a tarefa.";
        J().tasks.unshift({id:uid("t"), texto:t, data:f.data.value||todayKey(), feita:false}); save(); toast("Tarefa adicionada"); });""",
    """      '<div class="ju-two"><label class="ju-field">Para quando<input name="data" type="date" value="'+todayKey()+'"></label><label class="ju-field">Horário (opcional)<input name="hora" type="time"></label></div>'+
      '<div class="ju-field">Tríade do tempo'+seg("tri", [["importante","Importante"],["urgente","Urgente"],["circunstancial","Circunstancial"]], "importante")+'</div>',
      function(f){ var t = f.texto.value.trim(); if(!t) return "Escreva a tarefa.";
        var it = {id:uid("t"), texto:t, data:f.data.value||todayKey(), feita:false, triade:segVal(f,"tri")||"importante", tag:LN_WORK.test(t)?"trabalho":"pessoal"}; if(f.hora.value) it.hora = f.hora.value;
        J().tasks.unshift(it); save(); toast("Tarefa adicionada"); });""")
P.write_text(s, encoding="utf-8")
css = pathlib.Path("/home/claude/lunora/lunora.css").read_text(encoding="utf-8")
css = css[css.index("/* captura rápida */"):]
css = re.sub(r"\.ln-demo.*", "", css, flags=re.S)
C = pathlib.Path("/home/claude/painel-da-ju/src/shell.css"); C.write_text(C.read_text(encoding="utf-8") + "\n/* recursos inteligentes (vindos da Lunora) */\n" + css, encoding="utf-8")
print("ok")

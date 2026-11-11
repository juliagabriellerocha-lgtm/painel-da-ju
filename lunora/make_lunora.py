#!/usr/bin/env python3
"""Gera a versão Lunora (para clientes) a partir do index.html do Painel da Ju.
Remove todos os dados pessoais, troca a marca e adiciona criar conta + onboarding."""
import re, sys, pathlib

SRC = pathlib.Path("/home/claude/painel-da-ju/index.html")
OUT = pathlib.Path("/home/claude/lunora/index.html")
s = SRC.read_text(encoding="utf-8")

def rep(old, new, count=1):
    global s
    n = s.count(old)
    if n != count:
        sys.exit(f"esperava {count}x, achei {n}x: {old[:90]!r}")
    s = s.replace(old, new)

def resub(pattern, new, flags=re.S, count=1):
    global s
    s2, n = re.subn(pattern, new, s, flags=flags)
    if n != count:
        sys.exit(f"regex esperava {count}x, achei {n}x: {pattern[:90]!r}")
    s = s2

# ---------- marca ----------
rep('<meta name="apple-mobile-web-app-title" content="Painel da Ju">', '<meta name="apple-mobile-web-app-title" content="Lunora">')
rep('<title>Painel da Ju</title>', '<title>Lunora</title>\n  <meta name="description" content="Lunora — sua rotina, hábitos, estudos, treino, finanças e sonhos num só app.">')
rep('<span class="brand-mark brand-photo" aria-hidden="true"><img src="fotos/avatar.jpg" alt="" width="42" height="42"></span>',
    '<span class="brand-mark" aria-hidden="true"></span>')
rep('<span class="kicker">VENDAS · DADOS · MARKETING</span>', '<span class="kicker">LUNORA</span>')
rep('<h1>Júlia Rocha</h1>', '<h1>Seu painel</h1>')
rep('document.getElementById("juTitle").textContent = titles[view] || "Painel da Ju";',
    'document.getElementById("juTitle").textContent = titles[view] || "Lunora";')

# ---------- dados pessoais fora ----------
resub(r'  var WORKOUT_DETAIL = \[\n.*?\n  \];\n', '  var WORKOUT_DETAIL = [];\n')
resub(r'"academico": \{\n      "periodoAtual": 1,\n      "periods": \[.*?\n      \],\n      "done": \{\}',
      '"academico": {\n      "periodoAtual": 1,\n      "periods": [],\n      "done": {}')
resub(r'  DEFAULTS\.dayPlan = \{\n      blocks: \[\n.*?\n      \]\n    \};', '  DEFAULTS.dayPlan = { blocks: [] };')
resub(r'  var JU_STUDY_SEED = \[.*?\];\n', '  var JU_STUDY_SEED = [];\n')
rep('var JU_COURSES = {sebrae:{nome:"Faculdade Sebrae", em:"🎓", t:"agenda"}, tripleten:{nome:"TripleTen", em:"💻", t:"sono"}, concurso:{nome:"Concurso TJSP", em:"⚖️", t:"financas"}};',
    'var JU_COURSES = {faculdade:{nome:"Faculdade", em:"🎓", t:"agenda"}, cursos:{nome:"Cursos", em:"💻", t:"sono"}, concurso:{nome:"Concurso", em:"⚖️", t:"financas"}, idiomas:{nome:"Idiomas", em:"🗣️", t:"habitos"}};')
rep('JU_COURSES[i.curso]||JU_COURSES.sebrae', 'JU_COURSES[i.curso]||JU_COURSES.faculdade')
rep('seg("curso", [["sebrae","Sebrae"],["tripleten","TripleTen"],["concurso","Concurso"]], juStudyFilter!=="todos"?juStudyFilter:"sebrae")',
    'seg("curso", [["faculdade","Faculdade"],["cursos","Cursos"],["concurso","Concurso"],["idiomas","Idiomas"]], juStudyFilter!=="todos"?juStudyFilter:"faculdade")')
rep('curso:segVal(f,"curso")||"sebrae"', 'curso:segVal(f,"curso")||"faculdade"')
# estratégia: mantém só a matriz de Eisenhower (o resto era do concurso da Ju)
resub(r"\n    var peso = \[\[\"Conhecimentos em Direito\".*?\];", "")
resub(r"      '<span class=\"ju-label\">2 · Pareto da prova de Escrevente.*?\n(      '</details></section>';\n  \}\n  function viewEstudos)",
      r"      '<p class=\"ju-muted\" style=\"font-size:12px;margin:0\">Proteja primeiro o quadrante <b>Fazer agora</b>. O que é importante e não urgente vai para um horário fixo da semana — é ali que o futuro se constrói.</p>'+\n\1")
resub(r'  var JU_DREAM_SEED = \[\n.*?\n  \];\n', '  var JU_DREAM_SEED = [];\n')
rep('Deixe a garrafa de 950 ml na mesa da HDL e encha duas vezes até o almoço.', 'Deixe uma garrafa sempre à vista e encha duas vezes até o almoço.')
rep('// Dicas de execução da ficha da EF Academia (Prof. Bruna).', '// Dicas de execução por exercício.')
rep('<span class="ju-label">EF Academia · Prof. Bruna</span>', '<span class="ju-label">Minha academia</span>')
rep('Objetivo: definição e fortalecimento · vigência até 21/11 — peça a ficha nova para a Bruna.', 'Siga a ficha do seu professor e registre as cargas de cada série.')
rep('pare e peça ajuste à Bruna.', 'pare e peça ajuste ao seu professor.')
rep("""if(typeof WORKOUT_DETAIL==="undefined" || !WORKOUT_DETAIL.length) return '<section class="ju-card"><p class="ju-empty">Ficha não encontrada.</p></section>';""",
    """if(typeof WORKOUT_DETAIL==="undefined" || !WORKOUT_DETAIL.length) return '<section class="ju-card"><p class="ju-empty">Sua ficha ainda está vazia. Anote seus treinos da semana em Treino e registre as cargas por aqui.</p><button class="ju-btn soft block" data-legacy="treino">Abrir Treino</button></section>';""")
rep('ração do Otto…', 'ração do pet…')
rep('<p class="label">Sebrae — disciplinas</p>', '<p class="label">Faculdade — disciplinas</p>')
rep('if(h < 18) return "Tarde de foco: cliente, cotação, retorno. Você sabe fazer isso.";', 'if(h < 18) return "Tarde de foco: uma coisa de cada vez. Você sabe fazer isso.";')
rep('if(h < 5) return "Hora do silêncio e da oração. O dia começa com você inteira.";', 'if(h < 5) return "Hora do silêncio. O dia começa com você inteira.";')

# hábitos iniciais genéricos (o onboarding personaliza)
resub(r'  var JU_DEFAULT_HABITS = \[\n.*?\n  \];',
"""  var JU_DEFAULT_HABITS = [
    {id:"h_agua", nome:"Beber 2 L de água", em:"💧", periodo:"manha", tipo:"agua"},
    {id:"h_treino", nome:"Movimentar o corpo", em:"🏃‍♀️", periodo:"manha", tipo:"treino"},
    {id:"h_leitura", nome:"Ler 20 minutos", em:"📖", periodo:"noite"},
    {id:"h_sono", nome:"Rotina do sono", em:"🌙", periodo:"noite"}
  ];""")

# fotos da Ju -> avatar com a inicial do nome
s = s.replace('<img src="fotos/avatar.jpg" alt="">', "'+lnAvatar()+'")
rep("""'<button type="button" id="juPhoto" aria-label="Trocar foto"><img id="juPhotoImg" src="'+photoOfDay(photoOffset)+'" alt="Foto da Ju"></button></div>'""",
    """'<span class="ln-moon" aria-hidden="true"></span></div>'""")
rep("""<h2>'+greet+', Ju!</h2>""", """<h2>'+greet+(lnName()?', '+esc(lnName()):'')+'!</h2>""")
rep("""'+greeting+', Ju!</h2>'""", """'+greeting+(lnName()?', '+esc(lnName()):'')+'!</h2>'""")
rep("""'<section class="ju-card ju-me"><img src="fotos/avatar.jpg" alt="Foto da Ju"><div style="min-width:0"><h2>Ju</h2>""",
    """'<section class="ju-card ju-me">'+lnAvatar(true)+'<div style="min-width:0"><h2>'+esc(lnName()||"Você")+'</h2>""")
rep("""esc(status||"Seu painel pessoal")""", """esc(status||"Sua conta Lunora")""")
# painel completo: sem as abas que eram só da Ju (relatório financeiro, faculdade, cursos, trabalho, projeções)
rep("""var tiles = [["metas","Metas","target","financas"],["dividas","Dívidas","coin","bemestar"],["financeiro","Relatório","chart","financas"],""",
    """var tiles = [["metas","Metas","target","financas"],["dividas","Dívidas","coin","bemestar"],""")
rep("""      ["academico","Faculdade","cap","agua"],["complementar","Cursos","spark","sono"],["profissional","Trabalho","briefcase","tarefas"],
      ["progresso","Progresso","trend","habitos"],["projecoes","Projeções","star","financas"]];""",
    """      ["progresso","Progresso","trend","habitos"]];
    tiles = tiles.filter(function(t){ return lnArea(t[0]==="espirito"?"fe":t[0]==="dividas"?"financas":t[0]); });""")
# ajustes: refazer cadastro inicial
rep("""'<button class="ju-btn ghost" data-proxy="importBackupButton">Restaurar backup</button>""",
    """'<button class="ju-btn ghost" data-act="onboarding">Refazer cadastro inicial</button><button class="ju-btn ghost" data-proxy="importBackupButton">Restaurar backup</button>""")

# fé e ciclo só para quem escolheu essas áreas
rep("""    '<section class="ju-card"><span class="ju-label">Meu ciclo</span>""", """    (lnArea("ciclo") ? '<section class="ju-card"><span class="ju-label">Meu ciclo</span>""")
rep("""data-act="period">Registrar hoje</button></section>'+
    '<section class="ju-card" style="'+tone("agenda")+'"><div class="ju-head"><span class="ic">'+ico("cross")+'</span><h3>Fé de hoje</h3></div>'+""",
    """data-act="period">Registrar hoje</button></section>' : '')+
    (lnArea("fe") ? '<section class="ju-card" style="'+tone("agenda")+'"><div class="ju-head"><span class="ic">'+ico("cross")+'</span><h3>Fé de hoje</h3></div>'+""")
rep("""        : '<p class="ju-empty">A liturgia do dia aparece aqui quando estiver registrada no seu painel.</p>')+
      '<button class="ju-more" data-legacy="espirito">Espiritualidade '+ico("chev")+'</button></section>';""",
    """        : '<p class="ju-empty">Anote sua reflexão ou leitura do dia em Espiritualidade.</p>')+
      '<button class="ju-more" data-legacy="espirito">Espiritualidade '+ico("chev")+'</button></section>' : '');""")

# chave do servidor da Lunora (preenchida quando o projeto Supabase existir)
resub(r'var SB_DEFAULT = \{[^}]*\};', 'var SB_DEFAULT = window.LUNORA_CONFIG || { url: "", key: "" };')
rep('var SB_CONFIG_KEY = "painelJuSupabase", CACHE_KEY = "painelJuCacheV2";', 'var SB_CONFIG_KEY = "lunoraSupabase", CACHE_KEY = "lunoraCacheV1";')
s = s.replace('"painelJuView"', '"lunoraView"')

# ---------- tela de conta (criar conta e esqueci a senha já vêm do app base) ----------
rep("""<h2 id="accountTitle">Sua conta</h2>""", """<h2 id="accountTitle">Entrar na Lunora</h2>""")
# depois de entrar, se a pessoa nunca fez o cadastro inicial, abre o onboarding
rep("""        await pullFromAccount();
        dlg.close();""", """        await pullFromAccount();
        dlg.close();
        lnMaybeOnboard();""")

# ---------- código novo: helpers, criar conta e onboarding ----------
LN = pathlib.Path("/home/claude/lunora/lunora_extra.js").read_text(encoding="utf-8")
rep("""  function shellStart(){ go(juView); }""", LN + """
  function shellStart(){ go(juView); setTimeout(lnMaybeOnboard, 400); lnDemoBar(); }""")
rep("""      if(t.id==="juPhoto"){ photoOffset++; var img = document.getElementById("juPhotoImg"); if(img) img.src = photoOfDay(photoOffset); return; }""",
    """      if(t.dataset && t.dataset.act==="onboarding"){ lnOnboard(); return; }""")

# CSS novo
CSS = pathlib.Path("/home/claude/lunora/lunora.css").read_text(encoding="utf-8")
rep("""<div class="app">""", "<style>\n" + CSS + "\n</style>\n<div class=\"app\">")
# config do servidor (arquivo separado, fácil de trocar)
rep("""</head>""", """  <script src="./config.js"></script>\n</head>""")

# restos do painel antigo
rep("Sermar — contabilidade de encerramento", "Cobrança recorrente")
rep('<h2>Faculdade Sebrae — Administração EAD</h2>', '<h2>Faculdade — disciplinas</h2>')
rep('section("TripleTen — Análise de Dados", "tripleten", "Bootcamp em andamento, prioridade máxima de estudo.")+', 'section("Curso principal", "tripleten", "Seu curso livre ou bootcamp em andamento.")+')
rep("// ---------- Estudos: Faculdade Sebrae, TripleTen e concursos ----------", "// ---------- Estudos: faculdade, cursos, concursos e idiomas ----------")
rep("""'<button class="hello-photo" id="helloPhoto" type="button" aria-label="Trocar foto"><img id="helloImg" src="'+photoOfDay(photoOffset)+'" alt="Foto da Ju"></button>'""", """'<span class="ln-moon" aria-hidden="true"></span>'""")
rep('return "fotos/ju-" + String(n).padStart(2,"0") + ".jpg";', 'return "";')

# relatório financeiro do casal (era só da Ju) sai inteiro
resub(r"  function renderFinanceiro\(\)\{\n.*?\n  \}\n\n  function renderAll\(\)\{",
      "  function renderFinanceiro(){\n    var el=document.getElementById(\"panel-financeiro\"); if(el) el.innerHTML='';\n  }\n\n  function renderAll(){")
rep("""'<div class="root-node"><p class="name">Ju Rocha</p>""", """'<div class="root-node"><p class="name">'+esc(lnName()||"Você")+'</p>""")
rep("/* ===== Painel da Ju — app shell =====", "/* ===== Lunora — app shell =====")
rep("// ---------- fotos da Ju ----------", "// ---------- (sem fotos pessoais) ----------")

rep("""      '<div class="ju-row"><span>Duração do ciclo (dias)</span>""", """      (lnArea("ciclo") ? '<div class="ju-row"><span>Duração do ciclo (dias)</span>""")
rep("""value="'+(+J().cycle.dur||5)+'"></div>'+""", """value="'+(+J().cycle.dur||5)+'"></div>' : '')+""")

# ---------- recursos inteligentes: já vêm do app base (src/shell.js); só tiramos o perfil fixo da Ju ----------
resub(r"  // Perfil da Ju para os recursos inteligentes.*?\n  function lnArea\(\)\{ return true; \}\n", "")
rep('placeholder="Ex.: retornar cotação"', 'placeholder="Ex.: pagar a conta de luz"')

rep('var p = state.workout.plan[dk] || "Descanso";', 'var p = state.workout.plan[dk] || "Treino do dia";')

# checagem final: nada pessoal pode sobrar
bad = re.findall(r"André|Andre\b|Ju Rocha|HDL|Sermar|TJSP|TripleTen|Sebrae|Bruna|Otto|Casa das Gra|Júlia|fotos/|Cravinhos|Escrevente", s)
OUT.write_text(s, encoding="utf-8")
DEMO = s.replace('<script src="./config.js"></script>', '<script src="./config.js"></script>\n  <script src="./demo.js"></script>', 1).replace("<title>Lunora</title>", "<title>Lunora — demonstração</title>", 1)
pathlib.Path("/home/claude/lunora/demo.html").write_text(DEMO, encoding="utf-8")
print("ok", len(s), "restos:", sorted(set(bad)))

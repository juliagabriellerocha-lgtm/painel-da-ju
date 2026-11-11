set -e
cd /home/claude/build && python3 inject.py >/dev/null && python3 - <<'PY'
p='index.html'; s=open(p,encoding='utf-8').read()
def rep(o,n):
    global s; assert s.count(o)==1,(o[:60],s.count(o)); s=s.replace(o,n)
rep('''    if(hoje){
      var urg = contas.filter(''','''    if(typeof renderShell==="function") renderShell();
    if(hoje){
      var urg = contas.filter(''')
rep('Realizado / Meta de setembro','Realizado / Meta do mês')
rep("""Fechamento do mês em '+k.fechamentoMes+' — os dez gaps foram levantados em 11/09 como primeira base de diagnóstico, e os KPIs abaixo já refletem o painel de hoje.</p>'""","""Fechamento do mês em '+k.fechamentoMes+'. Gaps, KPIs e plano vêm do '+esc(k.fonte||"diagnóstico do setor")+'.</p>'""")
rep('% da meta de setembro realizada','% da meta do mês realizada')
open(p,'w',encoding='utf-8').write(s)
m=open('site/index.html',encoding='utf-8').read()
i=m.index('<script>\n(function(){var S='); j=m.index('</script>',i)+9
k=s.index('<body>')+6
open('site/index.html','w',encoding='utf-8').write(s[:k]+m[i:j]+s[k:])
PY
sed -n '/<script>/,/<\/script>/p' index.html | sed '1d;$d' > /tmp/x.js; node --check /tmp/x.js
cd /home/claude/painel-da-ju && python3 - <<'PY'
s=open('index.html',encoding='utf-8').read(); js=open('src/shell.js',encoding='utf-8').read().rstrip()
a=s.index('  // =====================================================================\n  // App shell'); b=s.index('  function shellStart(){ go(juView); }')+len('  function shellStart(){ go(juView); }')
s=s[:a]+js+s[b:]
css=open('src/shell.css',encoding='utf-8').read()
c0=s.index('/* ===== Painel da Ju — app shell ====='); c1=s.index('</style>',c0)
s=s[:c0]+css.strip()+'\n'+s[c1:]
open('index.html','w',encoding='utf-8').write(s)
PY
sed -n '/<script>/,/<\/script>/p' index.html | sed '1d;$d' > /tmp/y.js; node --check /tmp/y.js
echo BUILD_OK

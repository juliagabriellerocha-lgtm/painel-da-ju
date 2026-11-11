import sys
s=open('base.html',encoding='utf-8').read()
css=open('/home/claude/painel-da-ju/src/shell.css',encoding='utf-8').read()
js=open('/home/claude/painel-da-ju/src/shell.js',encoding='utf-8').read()
def rep(old,new):
    global s
    assert s.count(old)==1,(old[:60],s.count(old)); s=s.replace(old,new)
rep('\n<div class="app">','\n<style>\n'+css+'\n</style>\n\n<div class="app">')
rep('  var LOCAL_DATA_KEY = "painelJuDadosV1";','  DEFAULTS.ju = {};\n  var LOCAL_DATA_KEY = "painelJuDadosV1";')
rep('renderHoje(); renderProgresso(); renderFinanceiro();\n  }','renderHoje(); renderProgresso(); renderFinanceiro();\n    renderShell();\n  }')
rep('  function localStore(){', js.rstrip()+'\n\n  function localStore(){')
rep('    initAppInstall();\n    setSaveStatus("saving"','    initAppInstall();\n    initShell();\n    setSaveStatus("saving"')
rep('    renderAll();\n    subscribeDirecao();','    renderAll();\n    shellStart();\n    subscribeDirecao();')
open('index.html','w',encoding='utf-8').write(s); print(len(s))

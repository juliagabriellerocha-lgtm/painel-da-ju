// Lunora — modo demonstração: carrega uma pessoa de exemplo (Camila) para mostrar o app funcionando.
(function(){
  window.LUNORA_DEMO = true;
  var KEY = "lunoraCacheV1";
  try{ if(localStorage.getItem(KEY) || sessionStorage.getItem("lnDemoEmpty")) return; }catch(e){ return; }
  function d(off){ var x = new Date(); x.setDate(x.getDate()+off); return x.getFullYear()+"-"+String(x.getMonth()+1).padStart(2,"0")+"-"+String(x.getDate()).padStart(2,"0"); }
  var mk = d(0).slice(0,7), ALL = ["seg","ter","qua","qui","sex","sab","dom"], UT = ["seg","ter","qua","qui","sex"];
  var habits = [
    {id:"h_agua", nome:"Beber 2 L de água", em:"💧", periodo:"manha", tipo:"agua"},
    {id:"h_treino", nome:"Treino do dia", em:"🏋️", periodo:"manha", tipo:"treino"},
    {id:"h_cardapio", nome:"Seguir o cardápio", em:"🥗", periodo:"tarde"},
    {id:"h_estudo", nome:"Bloco de estudo", em:"📚", periodo:"noite"},
    {id:"h_gastos", nome:"Anotar os gastos do dia", em:"💰", periodo:"noite"},
    {id:"h_leitura", nome:"Ler 20 minutos", em:"📖", periodo:"noite"},
    {id:"h_sono", nome:"Rotina do sono", em:"🌙", periodo:"noite"}
  ];
  var habitLog = {}, sleep = {}, mood = {}, focus = [];
  var pattern = [[1,1,1,1,1,0,1],[1,1,0,1,1,1,1],[1,0,1,1,0,1,1],[1,1,1,0,1,1,0],[1,1,1,1,1,1,1],[1,0,1,1,1,0,1]];
  for(var i=1;i<=6;i++){
    var k = d(-i), log = {}; habits.forEach(function(h,ix){ if(pattern[i-1][ix]) log[h.id] = true; }); habitLog[k] = log;
    sleep[k] = {deitou:["22:40","23:10","22:30","22:50","23:30","22:20"][i-1], acordou:["06:30","06:40","06:20","06:30","07:10","06:30"][i-1]};
    mood[k] = {v:[4,5,3,4,4,5][i-1]};
    focus.push({d:k, min:[50,25,75,50,25,100][i-1], label:["Projeto de TCC","Relatório mensal","Inglês","Projeto de TCC","Planejar a semana","Relatório mensal"][i-1], away:[0,1,0,2,0,0][i-1], full:true});
  }
  habitLog[d(0)] = {h_agua:true, h_treino:true};
  var state = {
    __updatedAt: Date.now(),
    agenda: [
      {id:"ag1", date:d(0), time:"18:30", title:"Consulta — dentista", place:"Clínica Sorriso"},
      {id:"ag2", date:d(1), time:"10:00", title:"Reunião de alinhamento com a equipe"},
      {id:"ag3", date:d(3), time:"20:00", title:"Jantar com as amigas", place:"Bistrô da Praça"},
      {id:"ag4", date:d(9), time:"09:00", title:"Prova de inglês"}
    ],
    dayPlan: { blocks: [
      {id:"b1", ini:"07:00", fim:"07:30", txt:"Café da manhã", area:"diet", dias:ALL},
      {id:"b2", ini:"07:40", fim:"08:40", txt:"Treino do dia", area:"treino", dias:["seg","ter","qua","qui","sex","sab"]},
      {id:"b3", ini:"09:00", fim:"17:30", txt:"Trabalho", area:"profissional", dias:UT},
      {id:"b4", ini:"12:00", fim:"13:00", txt:"Almoço", area:"diet", dias:ALL},
      {id:"b5", ini:"19:30", fim:"20:00", txt:"Jantar", area:"diet", dias:ALL},
      {id:"b6", ini:"20:00", fim:"21:00", txt:"Bloco de estudo", area:"academico", dias:UT},
      {id:"b7", ini:"21:30", fim:"21:50", txt:"Leitura", area:"leitura", dias:ALL},
      {id:"b8", ini:"22:00", fim:"22:30", txt:"Rotina do sono — desacelerar", area:"rotina", dias:ALL},
      {id:"b9", ini:"19:00", fim:"19:30", txt:"Revisão da semana", area:"projecoes", dias:["dom"]}
    ]},
    ju: {
      profile: {name:"Camila", areas:["treino","dieta","estudos","financas","trabalho","leitura"], wake:"06:30", sleep:"22:30", workIni:"09:00", workFim:"17:30", treinoTurno:"manha", estudoHora:"20:00", done:true, since:d(-30)},
      tasks: [
        {id:"t1", texto:"Pagar a fatura do cartão", data:d(0), feita:false, triade:"urgente", tag:"pessoal"},
        {id:"t2", texto:"Revisar capítulo 2 do TCC", data:d(0), feita:false, triade:"importante", tag:"pessoal"},
        {id:"t3", texto:"Responder e-mail do cliente", data:d(0), feita:false, triade:"importante", tag:"trabalho"},
        {id:"t4", texto:"Organizar fotos do celular", data:d(0), feita:false, triade:"circunstancial", tag:"pessoal"},
        {id:"t5", texto:"Renovar a matrícula da academia", data:d(2), feita:false, triade:"importante", tag:"pessoal"},
        {id:"t6", texto:"Comprar presente da mãe", data:d(5), feita:false, triade:"importante", tag:"pessoal"},
        {id:"t7", texto:"Enviar relatório mensal", data:d(-1), feita:true, triade:"importante", tag:"trabalho"}
      ],
      habits: habits, habitLog: habitLog, sleep: sleep, sleepGoal: 8, mood: mood, focus: focus,
      cycle: {starts:[], len:28, dur:5},
      money: {
        saldoInicial: null,
        tx: [
          {id:"x1", tipo:"entrada", valor:4800, desc:"Salário", cat:"salario", data:mk+"-05"},
          {id:"x2", tipo:"saida", valor:1450, desc:"Aluguel", cat:"casa", data:mk+"-05"},
          {id:"x3", tipo:"saida", valor:612.4, desc:"Mercado do mês", cat:"mercado", data:mk+"-06"},
          {id:"x4", tipo:"saida", valor:89.9, desc:"Farmácia", cat:"saude", data:mk+"-08"},
          {id:"x5", tipo:"saida", valor:146, desc:"Restaurante", cat:"comida", data:mk+"-09"},
          {id:"x6", tipo:"saida", valor:220, desc:"Combustível", cat:"transporte", data:mk+"-10"},
          {id:"x7", tipo:"saida", valor:180, desc:"Curso de inglês", cat:"estudos", data:mk+"-10"}
        ],
        subs: [{id:"s1", nome:"Streaming", valor:39.9, dia:15}, {id:"s2", nome:"Academia", valor:119.9, dia:20}],
        bills: [{id:"bl1", nome:"Luz", valor:168, recorrente:true, dia:22, pagos:{}, pago:false}, {id:"bl2", nome:"Internet", valor:99.9, recorrente:true, dia:25, pagos:{}, pago:false}]
      }
    }
  };
  try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){}
})();

// Prolapso de cordão umbilical
registrarFicha({
  id: "prolapso-cordao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Prolapso de cordão umbilical",
  resumo: "Cordão umbilical à frente ou ao lado da apresentação com bolsa rota (procidência). Emergência: a compressão do cordão causa hipóxia fetal em minutos. Elevar a apresentação e fazer o parto pela via mais rápida.",
  palavrasChave: "prolapso de cordao procidencia de cordao cordao umbilical exteriorizado bradicardia fetal amniotomia apresentacao pelvica transversa genupeitoral enchimento vesical cesarea emergencia",
  critico: {
    tempo: "Parto em até 30 min",
    texto: "Chamar ajuda, elevar a apresentação com a mão pela vagina (sem empurrar o cordão para dentro) e colocar a gestante em genupeitoral ou Trendelenburg. Cesárea de emergência, salvo parto vaginal iminente."
  },
  alarmes: [
    "Bradicardia fetal súbita ou desacelerações variáveis graves logo após rotura da bolsa",
    "Cordão visível na vulva ou palpável na vagina",
    "Cordão sem pulsação (confirmar BCF por USG antes de decidir conduta)"
  ],
  conduta: [
    "Chamar obstetra, anestesista e neonatologista; acionar cesárea de emergência (categoria 1)",
    "Elevar manualmente a apresentação pelo toque vaginal e manter até a extração fetal",
    "Posição genupeitoral (joelhos e peito no leito) ou Trendelenburg com decúbito lateral esquerdo",
    "Alternativa (transporte ou demora): encher a bexiga com 500–750 mL de SF 0,9% por sonda Foley e clampear; esvaziar antes de abrir o útero",
    "Manipular o cordão o mínimo possível (causa vasoespasmo); não tentar reposicioná-lo no útero; se exteriorizado, cobrir com compressa morna úmida",
    "Suspender ocitocina; considerar terbutalina 0,25 mg SC para reduzir contrações enquanto aguarda",
    "Dilatação completa com parto rápido e seguro possível (vaginal ou fórcipe/vácuo): parto vaginal; caso contrário, cesárea (meta: em até 30 min, o quanto antes)",
    "Monitorar BCF continuamente; avisar neonatologia para reanimação",
    "Fora do hospital: genupeitoral ou decúbito lateral esquerdo com quadril elevado, SAMU 192, mão elevando a apresentação durante o transporte se profissional presente"
  ],
  diferenciais: [
    "Procidência oculta (cordão ao lado da apresentação, não palpável): suspeitar por desacelerações variáveis",
    "Laterocidência com bolsa íntegra (procúbito): evitar amniotomia, cesárea se persistir"
  ],
  tratamento: [
    {
      droga: "Terbutalina",
      linha: "adj",
      dose: "0,25 mg (0,5 mL da ampola de 0,5 mg/mL)",
      via: "SC",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "FC materna",
      contraindicacoes: "Cardiopatia, taquicardia materna importante",
      ajustes: "Reduz contrações enquanto se prepara a cesárea"
    }
  ],
  prescricao: {
    hospitalar: "PROLAPSO DE CORDÃO\n1. Dieta zero.\n2. Posição genupeitoral ou Trendelenburg com lateralização esquerda.\n3. Elevação manual contínua da apresentação pelo toque até a extração fetal.\n4. Suspender ocitocina.\n5. Se demora para cesárea: sonda Foley 14–16 Fr; infundir SF 0,9% 500–750 mL na bexiga e clampear (esvaziar antes da histerotomia).\n6. Terbutalina 0,25 mg SC, dose única, se contrações.\n7. Acesso venoso; Ringer lactato 125 mL/h.\n8. Cesárea de emergência; comunicar neonatologia para sala de parto.\n9. BCF contínuo."
  },
  orientacoesRetorno: [
    "Se a bolsa romper e você sentir ou vir o cordão na vagina: ficar de joelhos com o peito no chão (bumbum para cima) e chamar o SAMU 192 imediatamente",
    "Quem tem bebê sentado ou atravessado no fim da gestação deve ir à maternidade assim que a bolsa romper"
  ],
  encaminhar: [
    "Sempre: maternidade com centro cirúrgico, em transporte de emergência"
  ],
  fontes: [
    "RCOG — Green-top Guideline nº 50: Umbilical cord prolapse (2014)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "FEBRASGO — Tratado de Obstetrícia (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

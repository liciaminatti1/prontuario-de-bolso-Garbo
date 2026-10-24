// Doença inflamatória intestinal: suspeita, colite grave, encaminhamento
registrarFicha({
  id: "doenca-inflamatoria-intestinal",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Doença inflamatória intestinal (Crohn e retocolite): suspeita e crise grave",
  resumo: "Diarreia crônica (> 4 semanas), sangue nas fezes, dor abdominal, perda de peso ou doença perianal em adulto jovem. Investigar, encaminhar e reconhecer a colite aguda grave (critérios de Truelove-Witts), que exige internação.",
  palavrasChave: "dii doenca inflamatoria intestinal crohn retocolite ulcerativa rcu colite grave truelove witts megacolon toxico calprotectina mesalazina prednisona hidrocortisona infliximabe diarreia com sangue fistula perianal",
  critico: {
    tempo: "Colite grave: internar hoje",
    texto: "≥ 6 evacuações com sangue/dia + febre, taquicardia, anemia ou PCR/VHS alto = colite aguda grave: internar, corticoide IV, profilaxia de TEV e excluir C. difficile e megacólon tóxico."
  },
  alarmes: [
    "≥ 6 evacuações com sangue por dia com FC > 90, temperatura > 37,8 °C, Hb < 10,5 g/dL ou VHS > 30 mm/h (ou PCR > 30 mg/L)",
    "Distensão abdominal, dor intensa, diminuição súbita das evacuações em colite grave (megacólon tóxico ou perfuração)",
    "Vômitos e parada de eliminação de fezes (obstrução por estenose no Crohn)",
    "Abscesso perianal ou fístula com febre",
    "Perda de peso importante, desidratação, desnutrição",
    "Paciente em imunossupressor ou biológico com febre"
  ],
  conduta: [
    "Suspeitar: diarreia > 4 semanas, sangue e muco, urgência, tenesmo, sintomas noturnos, dor abdominal, perda de peso, anemia, fístula/abscesso perianal, manifestações extraintestinais (artrite, eritema nodoso, uveíte, aftas)",
    "Excluir infecção antes: parasitológico, coprocultura, toxina de C. difficile; considerar sorologia para HIV e pesquisa de tuberculose conforme quadro",
    "Pedir hemograma, PCR, VHS, ferritina, albumina, função renal e hepática, calprotectina fecal (se disponível)",
    "Encaminhar para colonoscopia com ileoscopia e biópsias e para gastroenterologia (prioridade conforme gravidade)",
    "Não iniciar corticoide antes de excluir infecção e, se possível, antes da colonoscopia, exceto em quadro grave",
    "Evitar AINE, antidiarreicos (loperamida) e opioides na fase ativa (risco de megacólon)",
    "Colite aguda grave → PS/internação: hidrocortisona 100 mg IV 6/6 h (ou metilprednisolona 60 mg/dia), enoxaparina profilática, RX de abdome, retossigmoidoscopia com biópsia (CMV), toxina de C. difficile; reavaliar no 3º dia — sem resposta, terapia de resgate (infliximabe ou ciclosporina) ou colectomia",
    "Paciente com DII já diagnosticada em crise leve: contatar o gastroenterologista assistente; ajustar mesalazina conforme orientação",
    "Na UBS: vacinação (evitar vacinas vivas em imunossuprimidos), rastreio de osteoporose em uso de corticoide, tratamento de anemia ferropriva, cessação do tabagismo (piora o Crohn)"
  ],
  exames: [
    "Hemograma, PCR, VHS, ferritina, ferro sérico, saturação de transferrina, albumina, creatinina, sódio, potássio, TGO, TGP, fosfatase alcalina",
    "Parasitológico de fezes (3 amostras), coprocultura, toxina A/B de C. difficile",
    "Calprotectina fecal: normal torna DII ativa pouco provável; elevada reforça investigação (também sobe em infecção e com AINE)",
    "Colonoscopia com ileoscopia e biópsias seriadas (padrão-ouro); enterotomografia ou enterorressonância no Crohn de delgado",
    "Colite grave: RX simples de abdome (cólon transverso dilatado > 5,5–6 cm = megacólon tóxico), retossigmoidoscopia flexível sem preparo, biópsia para CMV",
    "Antes de imunossupressor/biológico (pelo especialista): HBsAg, anti-HBc, anti-HCV, HIV, prova tuberculínica ou IGRA, RX de tórax"
  ],
  diferenciais: [
    "Colite infecciosa (Shigella, Salmonella, Campylobacter, amebíase, C. difficile, CMV)",
    "Tuberculose intestinal (ileocecal; importante no Brasil antes de imunossuprimir)",
    "Colite isquêmica (idoso, vasculopata)",
    "Síndrome do intestino irritável (sem sangue, sem perda de peso, sem sintomas noturnos, exames normais)",
    "Doença celíaca, colite microscópica, colite actínica, colite por AINE",
    "Câncer colorretal"
  ],
  tratamento: [
    {
      droga: "Hidrocortisona (colite aguda grave)",
      linha: "l1",
      dose: "100 mg",
      via: "IV",
      intervalo: "6/6 h",
      duracao: "Reavaliar no 3º dia; geralmente 3–7 dias e depois prednisona VO",
      monitorizacao: "Número de evacuações, sangue, FC, temperatura, PCR, glicemia, potássio",
      contraindicacoes: "Infecção não tratada (excluir C. difficile e CMV)",
      ajustes: "Alternativa: metilprednisolona 60 mg IV 1×/dia. Doses maiores não trazem benefício"
    },
    {
      droga: "Enoxaparina (profilaxia de TEV)",
      linha: "l1",
      dose: "40 mg",
      via: "SC",
      intervalo: "1×/dia",
      duracao: "Internação",
      monitorizacao: "Hb, sangramento",
      contraindicacoes: "Sangramento maciço com instabilidade",
      ajustes: "Indicada mesmo com sangue nas fezes (risco trombótico alto na DII ativa). ClCr < 30: 20 mg"
    },
    {
      droga: "Prednisona (crise moderada, após diagnóstico)",
      linha: "alt",
      dose: "40 mg/dia, redução de 5 mg por semana",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "8 semanas aproximadamente (pelo especialista)",
      monitorizacao: "Glicemia, PA, humor; cálcio + vitamina D durante o uso",
      contraindicacoes: "Infecção ativa",
      ajustes: "Corticoide não é tratamento de manutenção"
    },
    {
      droga: "Mesalazina (retocolite leve a moderada)",
      linha: "l1",
      dose: "VO 2,4–4,8 g/dia; supositório 1 g/dia (proctite); enema 1–4 g/dia (colite esquerda)",
      via: "VO e/ou retal",
      intervalo: "1×/dia ou dividida",
      duracao: "Indução 6–8 semanas; manutenção prolongada",
      monitorizacao: "Creatinina e urina tipo 1 periódicas",
      contraindicacoes: "Alergia a salicilatos, DRC grave",
      ajustes: "Dispensada pelo Componente Especializado (PCDT Retocolite Ulcerativa). Pouca eficácia no Crohn"
    },
    {
      droga: "Loperamida, opioides, anticolinérgicos e AINE na colite ativa",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Risco de megacólon tóxico (antidiarreicos/opioides) e de piora da doença (AINE)",
      ajustes: "Para dor: paracetamol"
    }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES — SUSPEITA DE DII\n1. Hemograma, PCR, VHS, ferritina, ferro sérico, albumina, creatinina, TGO, TGP, fosfatase alcalina.\n2. Parasitológico de fezes (3 amostras), coprocultura, pesquisa de toxina de Clostridioides difficile, calprotectina fecal.\n3. Encaminhamento: gastroenterologia + colonoscopia com ileoscopia e biópsias — suspeita de doença inflamatória intestinal.\n\nUSO ORAL\n4. Paracetamol 500 mg --------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\nNão usar anti-inflamatórios nem remédios para prender o intestino.",
    hospitalar: "COLITE AGUDA GRAVE — ADULTO (peso: ___ kg)\n1. Dieta oral conforme tolerância (líquida/branda); zero se suspeita de megacólon ou cirurgia.\n2. SF 0,9% ou Ringer lactato conforme volemia; KCl conforme potássio (manter K ≥ 4 e Mg normal).\n3. Hidrocortisona 100 mg IV de 6/6 h (ou metilprednisolona 60 mg IV 1×/dia).\n4. Enoxaparina 40 mg SC 1×/dia.\n5. Concentrado de hemácias se Hb < 7 g/dL (< 8 se cardiopata).\n6. Paracetamol 750 mg VO de 6/6 h se dor ou febre. NÃO usar opioides, loperamida, anticolinérgicos nem AINE.\n7. Exames: toxina de C. difficile, coprocultura, hemograma, PCR, albumina, eletrólitos diários; RX de abdome na admissão e se piora; retossigmoidoscopia flexível com biópsia (CMV) em 24–48 h; HBsAg, anti-HBc, HIV, IGRA/PPD e RX de tórax (preparar resgate com biológico).\n8. Controles: número de evacuações e sangue por dia, FC, temperatura, perímetro e exame abdominal de 6/6 h.\n9. Gastroenterologia e cirurgia avaliam no 1º dia; reavaliar no 3º dia (> 8 evacuações/dia, ou 3–8 com PCR > 45 mg/L: alta chance de colectomia → resgate)."
  },
  orientacoesRetorno: [
    "Tomar os remédios do intestino todos os dias, mesmo sem sintomas, conforme o especialista",
    "Não usar anti-inflamatórios nem remédios para prender o intestino por conta própria",
    "Parar de fumar (piora muito a doença de Crohn)",
    "Voltar imediatamente se: mais de 6 evacuações com sangue por dia, febre, barriga inchada e dura, dor forte, tontura ou desmaio",
    "Vacinas em dia; avisar antes de tomar vacinas de vírus vivo se usar imunossupressor",
    "Retorno na UBS em 2–4 semanas com exames e com a data da colonoscopia"
  ],
  encaminhar: [
    "PS/internação: colite aguda grave, suspeita de megacólon tóxico, obstrução, abscesso perianal com febre",
    "Gastroenterologia com prioridade: suspeita de DII com sangue, anemia, perda de peso ou PCR elevada",
    "Proctologia/cirurgia: fístula ou abscesso perianal",
    "Oftalmologia: olho vermelho doloroso com baixa visual (uveíte)"
  ],
  fontes: [
    "Ministério da Saúde — PCDT Retocolite Ulcerativa e PCDT Doença de Crohn (versões vigentes na Conitec; conferir ano da última portaria)",
    "ECCO — Guidelines on Therapeutics in Ulcerative Colitis (2022) e Crohn's Disease (2024)",
    "ACG — Clinical Guideline: Ulcerative Colitis in Adults (2025) e Crohn's Disease (2018)",
    "Truelove SC, Witts LJ — Cortisone in ulcerative colitis (BMJ, 1955)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

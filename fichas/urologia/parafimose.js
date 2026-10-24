// Parafimose
registrarFicha({
  id: "parafimose",
  especialidade: "urologia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Parafimose: redução manual",
  resumo: "Prepúcio retraído que não volta sobre a glande, formando um anel constritivo com edema da glande. Urgência: redução manual após analgesia e diminuição do edema; urologia se falhar ou se houver sofrimento da glande.",
  palavrasChave: "parafimose prepucio retraido glande edemaciada reducao manual bloqueio peniano incisao dorsal postectomia circuncisao fimose sondagem crianca idoso",
  critico: {
    tempo: "Reduzir antes da isquemia",
    texto: "Analgesia (bloqueio peniano), comprimir o edema por alguns minutos e reduzir empurrando a glande com os polegares enquanto os dedos puxam o prepúcio. Glande escura/necrótica ou falha → urologia."
  },
  alarmes: [
    "Glande escura, azulada, fria ou com necrose",
    "Parafimose há muitas horas ou dias, com edema endurecido",
    "Falha de 1–2 tentativas de redução bem conduzidas",
    "Retenção urinária",
    "Infecção local (balanopostite com celulite)"
  ],
  conduta: [
    "Explicar o procedimento (criança: presença do responsável; considerar sedação/analgesia)",
    "Analgesia: bloqueio do nervo dorsal do pênis (anel na base) com lidocaína 1–2% SEM vasoconstritor; alternativa em criança: lidocaína gel 2% tópica + analgésico sistêmico ou sedação",
    "Reduzir o edema: compressão circunferencial firme e contínua da glande e do prepúcio com gaze/ mão por 5–10 min (pode usar luva com gelo envolta em gaze ou faixa elástica enrolada da glande para a base por alguns minutos)",
    "Opção: açúcar granulado sobre o prepúcio edemaciado por 1–2 h (efeito osmótico) ou múltiplas punções com agulha fina (25–27 G) no edema, com técnica asséptica, seguidas de compressão",
    "Redução manual: lubrificar; posicionar os dois indicadores e médios atrás do anel prepucial; com os dois polegares empurrar a glande para dentro enquanto os dedos puxam o prepúcio para a frente, com pressão firme e contínua",
    "Conferir: prepúcio cobrindo a glande, cor normal da glande, micção espontânea",
    "Falha: urologia para incisão dorsal do anel sob anestesia local; postectomia eletiva depois",
    "Em paciente sondado: sempre recolocar o prepúcio sobre a glande após higiene ou sondagem (prevenção)"
  ],
  exames: [
    "Nenhum exame é necessário",
    "Glicemia se balanopostite de repetição em adulto (diabetes)"
  ],
  diferenciais: [
    "Balanopostite com edema (prepúcio não está retraído atrás da glande)",
    "Angioedema / edema por picada de inseto",
    "Torniquete de cabelo ou fio no pênis (lactente)",
    "Anel ou objeto constritor no pênis",
    "Fratura peniana (ver ficha trauma-genitourinario)"
  ],
  tratamento: [
    {
      droga: "Lidocaína 1% ou 2% sem vasoconstritor (bloqueio peniano)",
      linha: "l1",
      dose: "Adulto: 5–10 mL a 1% (até 10 mL a 2%) · Criança: máx 4,5 mg/kg (0,45 mL/kg a 1%)",
      via: "Infiltração subcutânea em anel na base do pênis e às 10 h e 2 h (nervos dorsais)",
      intervalo: "Dose única; aguardar 5–10 min",
      duracao: "—",
      monitorizacao: "Aspirar antes de injetar; sinais de toxicidade (zumbido, gosto metálico, convulsão)",
      contraindicacoes: "NUNCA usar com vasoconstritor no pênis",
      ajustes: "Dose máxima sem vasoconstritor 4,5 mg/kg (máx 300 mg)"
    },
    {
      droga: "Dipirona",
      linha: "adj",
      dose: "Adulto: 1 g · Criança: 15 mg/kg (máx 1 g)",
      via: "VO ou IV",
      intervalo: "6/6 h se dor",
      duracao: "1–3 dias",
      monitorizacao: "—",
      contraindicacoes: "Alergia",
      ajustes: "Criança sem acesso: dipirona gotas 500 mg/mL (≈ 0,6 gota/kg; máx 40 gotas)"
    },
    {
      droga: "Cetamina (sedação para redução em criança)",
      linha: "alt",
      dose: "1–1,5 mg/kg IV (ou 4–5 mg/kg IM)",
      via: "IV ou IM",
      intervalo: "Dose única; pode repetir 0,5 mg/kg IV",
      duracao: "—",
      monitorizacao: "Monitor, oximetria, profissional habilitado em via aérea, jejum conforme protocolo de sedação",
      contraindicacoes: "< 3 meses, psicose, hipertensão intracraniana",
      ajustes: "Só em local com estrutura para sedação"
    }
  ],
  prescricao: {
    hospitalar: "REDUÇÃO DE PARAFIMOSE (peso: ___ kg)\n1. Dipirona 1 g IV (criança 15 mg/kg, máx 1 g) 20 min antes.\n2. Antissepsia com clorexidina aquosa; bloqueio peniano com lidocaína 1% sem vasoconstritor ___ mL (máx 4,5 mg/kg = 0,45 mL/kg).\n3. Compressão manual firme do edema por 5–10 min (luva com gelo envolta em gaze, se disponível).\n4. Redução manual com lubrificante (polegares empurram a glande, dedos puxam o prepúcio).\n5. Após redução: observar micção espontânea; registrar cor da glande.",
    ambulatorial: "APÓS REDUÇÃO\nUSO ORAL\n1. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor (criança: 15 mg/kg/dose — gotas 500 mg/mL ≈ 0,6 gota/kg, máx 40 gotas).\n2. Ibuprofeno 400 mg -------------------------------- 10 comprimidos\n   Tomar 1 comprimido de 8 em 8 horas, após as refeições, por 3 dias se inchaço ou dor (criança: 10 mg/kg/dose de 8/8 h, máx 400 mg).\nCUIDADOS\nNão puxar a pele do pênis para trás nos próximos dias; higiene com água e sabão neutro."
  },
  orientacoesRetorno: [
    "Não puxar a pele do pênis para trás até a consulta com urologia; inchaço leve pode durar alguns dias",
    "Sempre que puxar a pele para higiene (ou após sondagem), voltar a pele para cobrir a cabeça do pênis",
    "Voltar imediatamente se: a pele ficar presa de novo, a cabeça do pênis ficar roxa ou escura, dor forte, dificuldade para urinar",
    "Agendar consulta com urologia para avaliar fimose e postectomia (circuncisão) eletiva"
  ],
  encaminhar: [
    "Urologia imediata: falha da redução, glande com sinais de isquemia, parafimose prolongada com edema endurecido",
    "Urologia ambulatorial: todos após redução, para avaliação de postectomia (especialmente se recorrência ou fimose)"
  ],
  fontes: [
    "EAU/ESPU — Guidelines on Paediatric Urology: phimosis and paraphimosis (2024)",
    "Little B, White M — Treatment options for paraphimosis (Int J Clin Pract, 2005)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

// Anafilaxia
registrarFicha({
  id: "anafilaxia",
  especialidade: "alergia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Anafilaxia",
  resumo: "Reação alérgica grave de início rápido envolvendo pele/mucosas com comprometimento respiratório, cardiovascular ou gastrointestinal.",
  palavrasChave: "anafilaxia alergia adrenalina choque anafilatico urticaria angioedema broncoespasmo",
  critico: {
    tempo: "Adrenalina IM agora",
    texto: "0,01 mg/kg da solução 1 mg/mL no vasto lateral da coxa (máx 0,5 mg adulto e adolescente; 0,3 mg criança pré-púbere). Não atrasar por anti-histamínico ou corticoide."
  },
  alarmes: [
    "Estridor, rouquidão, edema de língua/úvula",
    "Broncoespasmo, SpO₂ < 92%",
    "Hipotensão, síncope, incontinência",
    "Rebaixamento de consciência",
    "Uso de betabloqueador (resposta reduzida à adrenalina)"
  ],
  condutaInicial: [
    "Remover o gatilho; chamar ajuda",
    "Adrenalina IM 0,5 mg adulto; criança 0,01 mg/kg (máx 0,3 mg pré-púbere, 0,5 mg adolescente)",
    "Deitar com MMII elevados (sentado se dispneia; decúbito lateral se gestante)",
    "O₂ alto fluxo, 2 acessos, SF 0,9% em bolus se hipotensão (adulto 500–1.000 mL; criança 10–20 mL/kg)",
    "Repetir adrenalina a cada 5 min se não melhorar; após 2 doses IM sem resposta, iniciar infusão IV"
  ],
  fataisExcluir: [
    "Obstrução de via aérea alta",
    "Choque anafilático",
    "Broncoespasmo grave",
    "Reação bifásica (horas depois)"
  ],
  proximaDecisao: "Sem resposta a 2 doses IM + volume → anafilaxia refratária: adrenalina em infusão contínua, chamar ajuda experiente e preparar via aérea avançada.",
  clinica: {
    anamnese: [
      "Exposição: alimento, medicamento (antibiótico, AINE, contraste), picada de inseto, látex",
      "Tempo entre exposição e sintomas",
      "Episódios prévios, asma (fator de risco para gravidade)",
      "Betabloqueador, IECA"
    ],
    exameFisico: [
      "Via aérea: voz, estridor, edema",
      "Ausculta: sibilos",
      "PA, FC, perfusão",
      "Pele: urticária, angioedema (ausentes em 10–20%)"
    ],
    diferenciais: [
      {
        dx: "Angioedema por IECA / hereditário",
        pista: "Sem urticária; não responde bem à adrenalina"
      },
      {
        dx: "Crise de asma",
        pista: "Sem manifestações cutâneas ou hipotensão"
      },
      {
        dx: "Síncope vasovagal",
        pista: "Bradicardia, palidez, sem urticária"
      },
      {
        dx: "Choque séptico ou cardiogênico",
        pista: "Contexto clínico diferente"
      },
      {
        dx: "Ataque de pânico",
        pista: "Sem achados objetivos"
      }
    ],
    gravidade: [
      "Hipotensão (PAS < 90 adulto ou queda > 30%)",
      "Hipoxemia",
      "Via aérea alta comprometida"
    ]
  },
  exames: [
    {
      nome: "Diagnóstico é clínico",
      pedido: "Não solicitar exames antes de tratar.",
      porQue: "Atraso de adrenalina aumenta mortalidade.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "Triptase sérica",
      pedido: "Triptase sérica — coletar idealmente 15 min a 3 h do início.",
      porQue: "Confirmação posterior e investigação alérgica.",
      esperar: "Elevada, sobretudo em reações a medicamentos e insetos.",
      interpretacao: "Valor normal não exclui (frequentemente normal em alimentos).",
      limitacoes: "Disponibilidade limitada."
    }
  ],
  tratamento: [
    {
      droga: "Adrenalina IM (1 mg/mL)",
      linha: "l1",
      dose: "0,01 mg/kg — adulto e > 12 anos 0,5 mg (0,5 mL); criança 0,01 mg/kg, máx 0,3 mg (pré-púbere)",
      via: "IM, vasto lateral da coxa",
      intervalo: "Repetir a cada 5 min se não houver melhora",
      duracao: "Até resposta",
      monitorizacao: "PA, FC, ritmo",
      contraindicacoes: "Nenhuma absoluta na anafilaxia",
      ajustes: "Não usar SC. Idoso/cardiopata: mesma dose IM. Seringa de 1 mL; agulha longa (25–38 mm) no adulto"
    },
    {
      droga: "Adrenalina em infusão (refratária)",
      linha: "alt",
      dose: "Iniciar 0,5–1 mL/kg/h da solução 10 mcg/mL (≈ 0,08–0,17 mcg/kg/min) e titular pela resposta",
      via: "IV contínua",
      intervalo: "Contínua",
      duracao: "—",
      monitorizacao: "Monitor cardíaco contínuo",
      contraindicacoes: "—",
      ajustes: "1 mg (1 mL de 1 mg/mL) em 100 mL de SF 0,9% = 10 mcg/mL, em bomba de infusão. Mesma solução em criança. Bolus IV só por equipe experiente em PCR iminente"
    },
    {
      droga: "Cristaloide",
      linha: "l1",
      dose: "Adulto 500–1.000 mL em bolus; criança 10–20 mL/kg em bolus",
      via: "IV",
      intervalo: "Repetir conforme resposta",
      duracao: "—",
      monitorizacao: "PA, congestão",
      contraindicacoes: "—",
      ajustes: "—"
    },
    {
      droga: "Salbutamol",
      linha: "adj",
      dose: "100 mcg/jato 4–8 jatos com espaçador · nebulização 5 mg (criança < 20 kg: 2,5 mg)",
      via: "Inalatória",
      intervalo: "A cada 20 min",
      duracao: "Se broncoespasmo",
      monitorizacao: "Sibilos, SpO₂",
      contraindicacoes: "—",
      ajustes: "Não substitui a adrenalina"
    },
    {
      droga: "Glucagon",
      linha: "adj",
      dose: "1–5 mg IV em 5 min, depois 5–15 mcg/min (criança 20–30 mcg/kg, máx 1 mg)",
      via: "IV",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Vômito (proteger via aérea)",
      contraindicacoes: "—",
      ajustes: "Usuário de betabloqueador refratário à adrenalina"
    },
    {
      droga: "Anti-histamínico e corticoide",
      linha: "adj",
      dose: "Difenidramina 25–50 mg IV (criança 1 mg/kg, máx 50 mg) · hidrocortisona 200 mg IV (criança 6 meses–6 anos 50 mg; 6–12 anos 100 mg)",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Só após adrenalina e estabilização. Anti-histamínico alivia pele; corticoide não é rotina (RCUK 2021) e não previne reação bifásica de forma comprovada. Prometazina 25 mg IM é alternativa em adulto (evitar < 2 anos)"
    }
  ],
  destino: {
    agora: [
      "Adrenalina IM + posicionamento + volume",
      "Preparar via aérea se edema progressivo"
    ],
    reavaliar: [
      "5–15 min após cada dose de adrenalina",
      "Sinais vitais seriados"
    ],
    alta: [
      "Após observação adequada, assintomático",
      "Prescrever adrenalina autoinjetável (quando disponível) e plano de ação",
      "Encaminhar para alergologista"
    ],
    observacao: [
      "Alta após 2 h da resolução só se: boa resposta a 1 dose de adrenalina, resolução completa, já tem 2 autoinjetores e sabe usar, e há supervisão adequada",
      "Mínimo 6 h após a resolução se precisou de 2 doses IM de adrenalina ou se há história de reação bifásica",
      "Mínimo 12 h se: reação grave com > 2 doses de adrenalina, asma grave ou insuficiência respiratória importante, absorção contínua possível do alérgeno, chegada à noite ou acesso difícil ao serviço de emergência"
    ],
    internacao: [
      "Necessidade de > 2 doses ou infusão de adrenalina",
      "Comprometimento de via aérea"
    ],
    transferencia: [
      "Refratariedade sem suporte de UTI",
      "Via aérea difícil prevista sem equipe para via aérea cirúrgica"
    ]
  },
  prescricao: {
    hospitalar: "ADULTO — SALA DE EMERGÊNCIA (peso: ___ kg)\n1. Monitor cardíaco, oximetria e PA a cada 5 min. Decúbito dorsal com MMII elevados (sentado se dispneia; decúbito lateral esquerdo se gestante).\n2. Adrenalina 1 mg/mL — 0,5 mg (0,5 mL) IM no vasto lateral da coxa, AGORA. Repetir a cada 5 min se não houver melhora.\n3. Oxigênio por máscara com reservatório 10–15 L/min.\n4. Soro fisiológico 0,9% 500–1.000 mL IV em bolus se hipotensão; repetir conforme resposta.\n5. Se broncoespasmo: salbutamol 100 mcg/jato, 4 a 8 jatos com espaçador a cada 20 min, ou salbutamol solução 5 mg/mL 1 mL (5 mg) + SF 0,9% 3 mL em nebulização.\n6. Se refratária (sem resposta a 2 doses IM): adrenalina 1 mg (1 mL) + SF 0,9% 99 mL (10 mcg/mL) IV em bomba de infusão, iniciar 0,5–1 mL/kg/h e titular pela PA e sintomas.\n7. Se uso de betabloqueador e sem resposta à adrenalina: glucagon 1–5 mg IV lento em 5 min; depois 5–15 mcg/min IV contínuo.\n8. Após estabilização, se urticária ou prurido: difenidramina 50 mg IV lento (diluir em 10 mL de SF 0,9%) ou prometazina 25 mg IM, dose única.\n9. Hidrocortisona 200 mg IV, dose única (opcional; não substitui a adrenalina).\n10. Sinais vitais de 15/15 min na 1ª hora, depois de 1/1 h. Observar no mínimo 6 h após a resolução se 2 doses de adrenalina; 12 h se reação grave, > 2 doses, asma grave ou acesso difícil ao serviço (alta com 2 h só nos critérios da RCUK 2021).\n\nCRIANÇA (por kg)\n- Adrenalina 1 mg/mL IM: 0,01 mg/kg (0,01 mL/kg), máx 0,3 mg (pré-púbere) ou 0,5 mg (adolescente); repetir a cada 5 min.\n- SF 0,9%: 10–20 mL/kg IV em bolus; repetir conforme resposta.\n- Infusão (refratária): mesma solução 10 mcg/mL, 0,5–1 mL/kg/h.\n- Salbutamol nebulização: 2,5 mg (< 20 kg) ou 5 mg (≥ 20 kg).\n- Difenidramina 1 mg/kg IV (máx 50 mg). Hidrocortisona: 6 meses–6 anos 50 mg; 6–12 anos 100 mg IV.",
    ambulatorial: "ADULTO\nUSO ORAL\n1. Loratadina 10 mg ---------------------------- 5 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 3 a 5 dias se coceira ou placas na pele.\n\nUSO INTRAMUSCULAR (se disponível)\n2. Adrenalina autoinjetável 0,3 mg ------------------ 2 unidades\n   Aplicar 1 dose na parte lateral da coxa ao primeiro sinal de reação grave e chamar o SAMU 192. Se não melhorar em 5 minutos, aplicar a segunda.\n\nCRIANÇA\n1. Loratadina 1 mg/mL xarope: 2–12 anos, < 30 kg: 5 mL 1 vez ao dia; ≥ 30 kg: 10 mL 1 vez ao dia, por 3 a 5 dias.\n2. Adrenalina autoinjetável 0,15 mg ou 0,3 mg conforme o peso (seguir a bula), 2 unidades.\n\nENCAMINHAMENTO\n3. Alergologia/imunologia: investigação do gatilho e plano de ação escrito."
  },
  orientacoesRetorno: [
    "Evitar totalmente o que causou a reação (alimento, remédio, picada). Levar por escrito o nome do suspeito",
    "Os sintomas podem voltar em até 72 h (reação bifásica), em geral nas primeiras 12 h",
    "Voltar imediatamente ou ligar 192 se: falta de ar, chiado, rouquidão, inchaço na língua ou garganta, tontura, desmaio ou vômitos repetidos",
    "Se tiver adrenalina autoinjetável: usar na coxa ao primeiro sinal grave e depois procurar o PS, mesmo que melhore",
    "Avisar todos os profissionais de saúde da alergia; usar identificação (pulseira ou cartão) se possível",
    "Agendar consulta com alergologista e retorno na UBS em até 1 semana"
  ],
  tabelas: [
    {
      titulo: "Adrenalina IM 1 mg/mL por idade (quando o peso não é conhecido)",
      colunas: ["Idade", "Dose", "Volume"],
      linhas: [
        ["< 6 meses", "0,1–0,15 mg", "0,1–0,15 mL"],
        ["6 meses a 6 anos", "0,15 mg", "0,15 mL"],
        ["6 a 12 anos", "0,3 mg", "0,3 mL"],
        ["> 12 anos e adulto", "0,5 mg", "0,5 mL"]
      ],
      nota: "Resuscitation Council UK 2021. Com peso conhecido: 0,01 mg/kg. Repetir a cada 5 min se não melhorar."
    }
  ],
  fontes: [
    "Resuscitation Council UK — Emergency treatment of anaphylaxis: guidelines for healthcare providers (2021)",
    "NICE NG258 — Anaphylaxis: período de observação alinhado à RCUK 2021 (2026)",
    "World Allergy Organization Anaphylaxis Guidance 2020",
    "AAAAI/ACAAI — Anaphylaxis: a 2023 practice parameter update",
    "SBP/ASBAI — Consenso Brasileiro sobre Alergia Alimentar (2018), parte 2: anafilaxia"
  ],
  revisao: "2026-10-21",
  versao: "1.1"
});

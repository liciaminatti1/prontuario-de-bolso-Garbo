// Anafilaxia
registrarFicha({
  id: "anafilaxia",
  especialidade: "alergia",
  caminho: "ps",
  titulo: "Anafilaxia",
  resumo: "Reação alérgica grave de início rápido envolvendo pele/mucosas com comprometimento respiratório, cardiovascular ou gastrointestinal.",
  palavrasChave: "anafilaxia alergia adrenalina choque anafilatico urticaria angioedema broncoespasmo",
  critico: {
    tempo: "Adrenalina IM agora",
    texto: "0,01 mg/kg da solução 1 mg/mL no vasto lateral da coxa. Não atrasar por anti-histamínico ou corticoide."
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
    "Adrenalina IM 0,5 mg adulto (0,01 mg/kg; máx 0,3 mg em criança < 30 kg)",
    "Deitar com MMII elevados (sentado se dispneia; decúbito lateral se gestante)",
    "O₂ alto fluxo, 2 acessos, cristaloide 1–2 L rápido se hipotensão",
    "Repetir adrenalina a cada 5–15 min se não melhorar"
  ],
  fataisExcluir: [
    "Obstrução de via aérea alta",
    "Choque anafilático",
    "Broncoespasmo grave",
    "Reação bifásica (horas depois)"
  ],
  proximaDecisao: "Sem resposta a 2 doses IM + volume → anafilaxia refratária: adrenalina em infusão contínua e preparar via aérea avançada.",
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
      dose: "0,01 mg/kg — adulto 0,5 mg (0,5 mL); criança máx 0,3 mg",
      via: "IM, vasto lateral da coxa",
      intervalo: "Repetir a cada 5–15 min",
      duracao: "Até resposta",
      monitorizacao: "PA, FC, ritmo",
      contraindicacoes: "Nenhuma absoluta na anafilaxia",
      ajustes: "Não usar SC. Idoso/cardiopata: mesma dose IM"
    },
    {
      droga: "Adrenalina em infusão (refratária)",
      linha: "alt",
      dose: "0,05–0,1 mcg/kg/min, titular",
      via: "IV contínua",
      intervalo: "Contínua",
      duracao: "—",
      monitorizacao: "Monitor cardíaco contínuo",
      contraindicacoes: "—",
      ajustes: "Ex.: 1 mg em 100 mL SF = 10 mcg/mL. Bolus IV só por equipe experiente em PCR iminente"
    },
    {
      droga: "Cristaloide",
      linha: "l1",
      dose: "Adulto 1–2 L rápido; criança 20 mL/kg",
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
      dose: "100 mcg 4–8 jatos com espaçador ou nebulização 5 mg",
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
      dose: "1–5 mg IV em 5 min, depois 5–15 mcg/min",
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
      dose: "Ex.: difenidramina 25–50 mg IV; hidrocortisona 200 mg IV",
      via: "IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Adjuvantes para sintomas cutâneos; não previnem bifásica de forma comprovada"
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
      "Mínimo 4–6 h após resolução",
      "Até 24 h se: reação grave, > 1 dose de adrenalina, asma grave, acesso difícil ao serviço"
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
  fontes: [
    "World Allergy Organization Anaphylaxis Guidance 2020",
    "Resuscitation Council UK — Emergency treatment of anaphylaxis (2021)",
    "ASBAI — Guia prático de anafilaxia"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});

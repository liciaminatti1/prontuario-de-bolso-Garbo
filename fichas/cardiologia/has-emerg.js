// Crise hipertensiva
registrarFicha({
  id: "has-emerg",
  especialidade: "cardiologia",
  caminho: "ps",
  titulo: "Crise hipertensiva",
  resumo: "PA ≥ 180/120 mmHg. A conduta depende de haver ou não lesão aguda de órgão-alvo.",
  palavrasChave: "pressao alta crise hipertensiva emergencia urgencia nitroprussiato captopril clonidina edema agudo disseccao eclampsia",
  critico: {
    tempo: "Procure a lesão de órgão-alvo",
    texto: "Sem lesão aguda: reduzir PA em horas a dias com VO. Com lesão: droga IV, redução ≤ 25% na 1ª hora."
  },
  alarmes: [
    "Dor torácica, dispneia, edema pulmonar",
    "Déficit neurológico, confusão, convulsão, alteração visual",
    "Dor torácica/dorsal lancinante (dissecção: alvo PAS < 120 em 20 min)",
    "Gestante > 20 semanas (pré-eclâmpsia/eclâmpsia)",
    "Oligúria, creatinina subindo"
  ],
  condutaInicial: [
    "Repetir PA após 15–30 min de repouso, manguito adequado",
    "ECG, fundo de olho se possível, creatinina, EAS, troponina se dor",
    "Sem lesão de órgão-alvo: analgesia/ansiolítico se dor ou ansiedade e anti-hipertensivo VO",
    "Emergência: monitor, acesso, droga IV titulável",
    "Não usar nifedipino de liberação rápida sublingual"
  ],
  fataisExcluir: [
    "Dissecção de aorta",
    "Edema agudo de pulmão / SCA",
    "AVC / encefalopatia hipertensiva",
    "Eclâmpsia",
    "Feocromocitoma, cocaína"
  ],
  proximaDecisao: "Lesão aguda de órgão-alvo → emergência hipertensiva, droga IV e internação. Sem lesão → ajustar esquema oral e encaminhar à UBS em até 7 dias.",
  clinica: {
    anamnese: [
      "Adesão ao tratamento, suspensão abrupta (clonidina, betabloqueador)",
      "Sintomas de órgão-alvo: cefaleia intensa, visão, dor torácica, dispneia, déficit focal",
      "Drogas: cocaína, anfetaminas, descongestionantes, AINE",
      "Gestação ou puerpério"
    ],
    exameFisico: [
      "PA nos dois braços, pulsos",
      "Neurológico sumário",
      "Ausculta cardíaca e pulmonar",
      "Fundo de olho: papiledema, hemorragias"
    ],
    diferenciais: [
      {
        dx: "Urgência / PA elevada assintomática",
        pista: "Sem lesão aguda; maioria dos casos"
      },
      {
        dx: "Pseudocrise",
        pista: "PA elevada por dor, ansiedade, retenção urinária"
      },
      {
        dx: "Encefalopatia hipertensiva",
        pista: "Cefaleia, confusão, papiledema; melhora com redução da PA"
      },
      {
        dx: "AVC",
        pista: "Déficit focal; PA não deve ser reduzida agressivamente"
      }
    ],
    gravidade: [
      "Qualquer lesão aguda de órgão-alvo define emergência"
    ]
  },
  exames: [
    {
      nome: "ECG",
      pedido: "ECG de 12 derivações.",
      porQue: "Isquemia, sobrecarga.",
      esperar: "—",
      interpretacao: "Isquemia → seguir ficha de SCA.",
      limitacoes: "—"
    },
    {
      nome: "Função renal e urina",
      pedido: "Creatinina, ureia, sódio, potássio, EAS (urina tipo 1).",
      porQue: "Lesão renal aguda, proteinúria, hematúria.",
      esperar: "—",
      interpretacao: "Piora aguda → emergência.",
      limitacoes: "—"
    },
    {
      nome: "Troponina, RX de tórax",
      pedido: "Troponina e RX de tórax — se dor torácica ou dispneia.",
      porQue: "SCA, congestão, alargamento de mediastino.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "TC de crânio",
      pedido: "TC de crânio sem contraste — se sintomas neurológicos.",
      porQue: "AVC, hemorragia.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "—"
    },
    {
      nome: "Angio-TC de aorta",
      pedido: "Angiotomografia de aorta torácica e abdominal — suspeita de dissecção.",
      porQue: "Confirmar dissecção.",
      esperar: "Flap intimal.",
      interpretacao: "Tipo A → cirurgia; tipo B → controle clínico/endovascular.",
      limitacoes: "Contraste: avaliar função renal sem atrasar."
    }
  ],
  tratamento: [
    {
      droga: "Captopril",
      linha: "l1",
      dose: "25–50 mg",
      via: "VO",
      intervalo: "Repetir em 1 h se necessário",
      duracao: "Urgência",
      monitorizacao: "PA a cada 30 min",
      contraindicacoes: "Gestação, estenose bilateral de artéria renal, hipercalemia",
      ajustes: "Para PA elevada sem lesão aguda"
    },
    {
      droga: "Clonidina",
      linha: "alt",
      dose: "0,1–0,2 mg",
      via: "VO",
      intervalo: "Repetir 0,1 mg/h (máx 0,6 mg)",
      duracao: "Urgência",
      monitorizacao: "Sedação, bradicardia",
      contraindicacoes: "Bradicardia, BAV",
      ajustes: "—"
    },
    {
      droga: "Nitroprussiato de sódio",
      linha: "l1",
      dose: "0,25–10 mcg/kg/min",
      via: "IV contínua, protegido da luz",
      intervalo: "Titular a cada 5 min",
      duracao: "Até transição para VO",
      monitorizacao: "PA invasiva ideal; risco de cianeto se > 48 h ou insuficiência renal",
      contraindicacoes: "Gestação",
      ajustes: "50 mg em 250 mL SG 5% = 200 mcg/mL. Ex.: 70 kg a 0,5 mcg/kg/min ≈ 10,5 mL/h"
    },
    {
      droga: "Nitroglicerina",
      linha: "l1",
      dose: "5–200 mcg/min",
      via: "IV contínua",
      intervalo: "↑ 5–10 mcg/min a cada 3–5 min",
      duracao: "—",
      monitorizacao: "PA, cefaleia",
      contraindicacoes: "Inibidor de PDE-5, IAM de VD",
      ajustes: "Preferir em SCA e edema agudo de pulmão. 50 mg em 250 mL = 200 mcg/mL"
    },
    {
      droga: "Furosemida",
      linha: "adj",
      dose: "40–80 mg (ou 1–2,5× a dose oral habitual)",
      via: "IV",
      intervalo: "Conforme diurese",
      duracao: "—",
      monitorizacao: "Diurese, potássio",
      contraindicacoes: "Hipovolemia",
      ajustes: "Edema agudo de pulmão com congestão"
    },
    {
      droga: "Metoprolol",
      linha: "l1",
      dose: "5 mg",
      via: "IV lento",
      intervalo: "A cada 5 min (máx 15 mg)",
      duracao: "—",
      monitorizacao: "FC alvo < 60 na dissecção",
      contraindicacoes: "Bradicardia, BAV, IC aguda, broncoespasmo, cocaína",
      ajustes: "Dissecção: betabloqueador antes do vasodilatador"
    },
    {
      droga: "Sulfato de magnésio + hidralazina",
      linha: "l1",
      dose: "MgSO₄ 4–6 g IV em 20 min, depois 1–2 g/h · hidralazina 5 mg IV a cada 20 min (máx 30 mg)",
      via: "IV",
      intervalo: "—",
      duracao: "24 h após parto/última crise",
      monitorizacao: "Reflexo patelar, FR, diurese (Mg); PA",
      contraindicacoes: "Mg: miastenia",
      ajustes: "Pré-eclâmpsia grave/eclâmpsia. Alvo PA < 160/110. Antídoto: gluconato de cálcio 10% 10 mL"
    }
  ],
  destino: {
    agora: [
      "Emergência: droga IV, PA invasiva, leito monitorizado",
      "Urgência: VO e observação"
    ],
    reavaliar: [
      "PA a cada 5–15 min em droga IV",
      "Reduzir PAM até 25% na 1ª hora, depois 160/100 em 2–6 h"
    ],
    alta: [
      "Sem lesão de órgão-alvo, PA em queda, assintomático",
      "Ajustar esquema oral e retorno à UBS em até 7 dias"
    ],
    observacao: [
      "Urgência que não responde ao tratamento oral"
    ],
    internacao: [
      "Toda emergência hipertensiva (UTI/semi-intensiva)"
    ],
    transferencia: [
      "Dissecção tipo A → centro com cirurgia cardiovascular",
      "Eclâmpsia → maternidade de alto risco após estabilização"
    ]
  },
  fontes: [
    "Diretrizes Brasileiras de Hipertensão Arterial — SBC/SBH/SBN (2025)",
    "ESC 2024 Guidelines for elevated blood pressure and hypertension",
    "FEBRASGO — Pré-eclâmpsia (protocolo)"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});

// Ventilação não invasiva
registrarFicha({
  id: "vni",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Ventilação não invasiva (VNI): indicações, ajustes e falha",
  resumo: "Suporte ventilatório por máscara (CPAP ou BiPAP) sem via aérea artificial. Benefício claro na DPOC exacerbada com acidose respiratória e no edema agudo de pulmão cardiogênico. Ver também fichas oxigenoterapia e ventilacao-mecanica.",
  palavrasChave: "vni ventilacao nao invasiva bipap cpap ipap epap mascara oronasal dpoc hipercapnia edema agudo pulmao hacor falha intubacao",
  critico: {
    tempo: "Reavaliar em 1–2 h",
    texto: "Gasometria e exame 1–2 h após iniciar. Sem melhora de pH, PaCO₂ e FR, ou piora clínica: intubar sem atraso. VNI não deve adiar intubação indicada."
  },
  alarmes: [
    "Rebaixamento de consciência progressivo ou agitação que impede a máscara",
    "Vômitos, secreção abundante, incapacidade de proteger a via aérea",
    "Instabilidade hemodinâmica ou arritmia grave",
    "pH em queda ou PaCO₂ subindo após 1–2 h",
    "SpO₂ < 88% apesar de FiO₂ alta; FR > 35 persistente",
    "HACOR > 5 após 1 h"
  ],
  conduta: [
    "Confirmar indicação e ausência de contraindicação; definir teto terapêutico (VNI como suporte máximo em paliativo é aceitável)",
    "Explicar ao paciente, cabeceira 30–45°, escolher máscara oronasal do tamanho certo (a facial total é alternativa)",
    "Iniciar com pressões baixas, segurando a máscara com a mão nos primeiros minutos; fixar sem apertar demais (passar 1–2 dedos sob a fixação)",
    "BiPAP (hipercapnia): IPAP 10–12, EPAP 4–5 cmH₂O; subir IPAP 2 cmH₂O a cada 10–15 min até 20 (máx. ~25) buscando Vt ~6–8 mL/kg e FR < 25",
    "CPAP (EAP): 5–10 cmH₂O; BiPAP se hipercapnia associada",
    "FiO₂ para SpO₂ 88–92% (hipercápnico) ou 94–98% (demais)",
    "Gasometria 1–2 h após; manter uso contínuo nas primeiras horas, depois pausas para alimentação e tosse",
    "Monitorar vazamento, sincronia, distensão gástrica, lesão de pele na base do nariz (curativo protetor)",
    "Desmame: quando causa melhorar, pH normal e FR < 24, reduzir tempo de uso progressivamente"
  ],
  exames: [
    "Gasometria arterial antes e 1–2 h após o início (e após cada ajuste importante)",
    "RX de tórax (excluir pneumotórax antes de iniciar, se possível)",
    "Monitorização contínua de SpO₂, FR, FC, PA; capnografia se disponível"
  ],
  diferenciais: [
    "Indicações com benefício comprovado (ERS/ATS 2017): DPOC exacerbada com pH ≤ 7,35 e PaCO₂ > 45; EAP cardiogênico; imunossuprimido com IRA; pós-operatório de cirurgia abdominal/torácica; prevenção de falha pós-extubação em alto risco hipercápnico; paliativo com dispneia",
    "Sem recomendação ou benefício incerto: asma grave (teste cauteloso, em UTI), IRA hipoxêmica de novo/pneumonia/SDRA (preferir CNAF), trauma torácico",
    "Não usar: DPOC hipercápnico sem acidose (prevenção), extubação já falhada (resgate)"
  ],
  tabelas: [
    {
      titulo: "Contraindicações à VNI",
      colunas: ["Absolutas", "Relativas"],
      linhas: [
        ["PCR ou necessidade de intubação imediata", "Agitação, pouca cooperação"],
        ["Incapacidade de proteger a via aérea / Glasgow muito baixo (exceto hipercapnia)", "Secreção abundante, tosse ineficaz"],
        ["Obstrução de via aérea superior", "Instabilidade hemodinâmica leve/controlada"],
        ["Trauma, cirurgia ou deformidade facial que impede a máscara", "Cirurgia esofágica ou gástrica alta recente"],
        ["Vômitos incoercíveis, hemorragia digestiva alta ativa", "Gravidez avançada, obesidade extrema"],
        ["Pneumotórax não drenado", "Hipoxemia grave com risco de vida"]
      ]
    },
    {
      titulo: "Ajustes iniciais",
      colunas: ["Situação", "Modo", "Parâmetros iniciais"],
      linhas: [
        ["DPOC/hipercapnia", "BiPAP (S/T)", "IPAP 10–12 → 15–20; EPAP 4–5; FR de backup 12–15; FiO₂ para SpO₂ 88–92%"],
        ["Obesidade-hipoventilação", "BiPAP", "EPAP mais alta (8–10) para obstrução de via aérea; IPAP 15–20"],
        ["Edema agudo de pulmão", "CPAP ou BiPAP", "CPAP 5–10; BiPAP IPAP 10–15 / EPAP 5–8"],
        ["Hipoxemia (imunossuprimido)", "BiPAP ou CPAP", "EPAP 5–8; IPAP para Vt ≤ 8–9 mL/kg; FiO₂ para SpO₂ 92–96%"]
      ],
      nota: "Diferença IPAP − EPAP = pressão de suporte (aumenta o volume corrente, reduz PaCO₂). EPAP melhora oxigenação e contrabalança auto-PEEP."
    }
  ],
  prescricao: {
    hospitalar: "VNI — DPOC EXACERBADA COM ACIDOSE RESPIRATÓRIA (adulto)\n1. Dieta zero nas primeiras horas; liberar líquidos/pastosa nas pausas quando estável.\n2. Cabeceira 45°. Monitor, oximetria contínua.\n3. BiPAP com máscara oronasal (tamanho ___): modo S/T, IPAP 12 cmH₂O, EPAP 5 cmH₂O, FR de backup 14 irpm; aumentar IPAP 2 cmH₂O a cada 10–15 min até 18–20 cmH₂O conforme tolerância e volume corrente (alvo 6–8 mL/kg).\n4. FiO₂/O₂ suplementar para SpO₂ 88–92%.\n5. Uso contínuo nas primeiras 6–12 h; depois pausas para alimentação, medicação inalatória e higiene.\n6. Gasometria arterial em 1 h e em 4 h.\n7. Curativo hidrocoloide na base do nariz; checar vazamentos e distensão gástrica de 2/2 h.\n8. Critérios de falha (comunicar e preparar intubação): pH em queda ou sem melhora em 1–2 h, FR > 35, rebaixamento, SpO₂ < 88%, instabilidade, intolerância.\n\nVNI — EDEMA AGUDO DE PULMÃO\n1. CPAP 8–10 cmH₂O (ou BiPAP IPAP 12 / EPAP 6), FiO₂ para SpO₂ 94–98%, associado a nitrato e diurético (ficha ic-descompensada)."
  },
  orientacoesRetorno: [
    "Explicar ao paciente: a máscara empurra o ar para ajudar a respirar; respirar junto com o aparelho; avisar se náusea, vômito ou dor",
    "Ao receber alta com ventilação domiciliar: usar todas as noites e conforme prescrito; trazer o aparelho/cartão nas consultas"
  ],
  encaminhar: [
    "UTI ou unidade semi-intensiva: toda VNI por IRA, salvo serviços com sala de emergência preparada e equipe treinada",
    "Pneumologia ambulatorial: DPOC com hipercapnia persistente após a alta (avaliar VNI domiciliar)"
  ],
  fontes: [
    "ERS/ATS — Clinical Practice Guidelines: Noninvasive ventilation for acute respiratory failure (2017)",
    "BTS/ICS — Guideline for the ventilatory management of acute hypercapnic respiratory failure in adults (2016)",
    "AMIB/SBPT — Diretrizes Brasileiras de Ventilação Mecânica (2013)",
    "Duan J et al. — HACOR score to predict NIV failure, Intensive Care Med (2017)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

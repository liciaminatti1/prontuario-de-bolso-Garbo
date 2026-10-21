// Oxigenoterapia: dispositivos, alvos, cânula nasal de alto fluxo e VNI
registrarFicha({
  id: "oxigenoterapia",
  especialidade: "emergencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Oxigenoterapia: dispositivos, alvos de SpO₂, cânula nasal de alto fluxo e VNI",
  resumo: "Como escolher o dispositivo de oxigênio, o fluxo e a FiO₂ aproximada, os alvos de SpO₂ por situação, e quando usar cânula nasal de alto fluxo ou ventilação não invasiva (VNI) no adulto e na criança.",
  palavrasChave: "oxigenio oxigenoterapia cateter nasal oculos mascara venturi mascara com reservatorio nao reinalante fio2 spo2 alvo cnaf alto fluxo vni bipap cpap hipercapnia dpoc rox",
  critico: {
    tempo: "Prescrever o ALVO de SpO₂",
    texto: "Alvo 94–98% para a maioria; 88–92% se risco de hipercapnia (DPOC, obesidade-hipoventilação, doença neuromuscular). Oxigênio é medicamento: prescreva dispositivo, fluxo e alvo."
  },
  alarmes: [
    "SpO₂ < 90% apesar de máscara com reservatório a 15 L/min: considerar alto fluxo, VNI ou intubação",
    "Sonolência, cefaleia ou piora do nível de consciência em DPOC com O₂ alto (narcose por CO₂): gasometria",
    "Esforço respiratório intenso, respiração paradoxal, fala entrecortada, FR > 30–35 irpm",
    "Falha de VNI ou alto fluxo em 1–2 h (pH e FR sem melhora, índice ROX baixo): não atrasar intubação",
    "Criança: gemência, tiragem intensa, apneia, cianose"
  ],
  conduta: [
    "Medir SpO₂ e definir o alvo antes de escolher o dispositivo. Gasometria arterial se risco de hipercapnia, sepse, choque ou SpO₂ não confiável",
    "Alvo 94–98%: maioria dos adultos e crianças agudamente doentes",
    "Alvo 88–92%: DPOC, obesidade-hipoventilação, fibrose cística, doença neuromuscular ou deformidade torácica, até gasometria",
    "Sem hipoxemia, não dar O₂ de rotina: IAM/SCA só se SpO₂ < 90%; AVC só se SpO₂ < 94%",
    "O₂ a 100% independentemente da SpO₂: intoxicação por monóxido de carbono, PCR, pneumotórax pequeno em observação, cefaleia em salvas",
    "Escalonar: cateter nasal → máscara simples ou Venturi → máscara com reservatório → cânula nasal de alto fluxo ou VNI → intubação",
    "Cânula nasal de alto fluxo (CNAF): insuficiência respiratória hipoxêmica aguda, pré-oxigenação, bronquiolite. Adulto 30–60 L/min; criança 1–2 L/kg/min; FiO₂ 21–100% titulada para o alvo",
    "VNI (BiPAP): exacerbação de DPOC com pH ≤ 7,35 e PaCO₂ > 45 mmHg; edema agudo de pulmão cardiogênico (CPAP ou BiPAP); imunossuprimido; pós-extubação de alto risco",
    "Reavaliar 1–2 h após iniciar CNAF ou VNI: FR, esforço, SpO₂, gasometria (pH e PaCO₂ na VNI) e índice ROX na CNAF",
    "Contraindicações da VNI: PCR, incapacidade de proteger via aérea, vômitos, trauma ou cirurgia facial, pneumotórax não drenado, choque, agitação sem cooperação"
  ],
  exames: [
    "Gasometria arterial: risco de hipercapnia, sepse, choque, rebaixamento, antes e 1–2 h após VNI",
    "Pedido: \"Gasometria arterial em ar ambiente (se tolerado) ou com FiO₂ informada. Registrar dispositivo e fluxo.\"",
    "Radiografia de tórax conforme a causa",
    "Oximetria pode superestimar a SpO₂ em pele mais pigmentada, má perfusão e intoxicação por CO (usar co-oximetria)"
  ],
  tabelas: [
    {
      titulo: "Dispositivos de oxigênio",
      colunas: ["Dispositivo", "Fluxo", "FiO₂ aproximada", "Quando usar"],
      linhas: [
        ["Cateter nasal (óculos)", "1–6 L/min (criança 0,5–2 L/min; lactente até 1 L/min)", "24–44% (≈ +4% por L/min)", "Hipoxemia leve; alvo 88–92% ou 94–98%"],
        ["Máscara simples", "5–10 L/min (mínimo 5)", "40–60%", "Hipoxemia moderada sem risco de hipercapnia"],
        ["Máscara de Venturi", "Fluxo indicado na válvula", "24–60% fixa (conforme a válvula)", "FiO₂ precisa; risco de hipercapnia (24–28%)"],
        ["Máscara com reservatório (não reinalante)", "10–15 L/min (bolsa cheia)", "60–90%", "Hipoxemia grave, trauma, PCR, CO"],
        ["Cânula nasal de alto fluxo", "Adulto 30–60 L/min; criança 1–2 L/kg/min", "21–100% (ajustável)", "Insuficiência hipoxêmica, bronquiolite, pré-oxigenação"],
        ["VNI (BiPAP/CPAP)", "IPAP 10–20 / EPAP 4–8 cmH₂O; CPAP 5–10", "21–100%", "DPOC hipercápnico, edema pulmonar cardiogênico"]
      ],
      nota: "FiO₂ de cateter e máscaras é estimada e varia com o padrão respiratório."
    },
    {
      titulo: "Índice ROX na cânula nasal de alto fluxo",
      colunas: ["Momento", "Baixo risco de falha", "Alto risco de falha"],
      linhas: [
        ["2 h", "ROX ≥ 4,88", "ROX < 2,85"],
        ["6 h", "ROX ≥ 4,88", "ROX < 3,47"],
        ["12 h", "ROX ≥ 4,88", "ROX < 3,85"]
      ],
      nota: "ROX = (SpO₂ ÷ FiO₂) ÷ FR. Ex.: SpO₂ 92%, FiO₂ 0,5, FR 25 → (92 ÷ 0,5) ÷ 25 = 7,4. Validado em adultos com pneumonia (Roca, 2019)."
    }
  ],
  tratamento: [
    {
      droga: "VNI — BiPAP (DPOC/hipercapnia)",
      linha: "l1",
      dose: "IPAP inicial 10–12 cmH₂O, subir 2 cmH₂O a cada 5–10 min até 15–20 conforme tolerância; EPAP 4–5 cmH₂O; FiO₂ para SpO₂ 88–92%",
      via: "Máscara oronasal (preferida na fase aguda)",
      intervalo: "Contínua nas primeiras horas",
      duracao: "Até melhora do pH e da FR",
      monitorizacao: "Gasometria em 1–2 h; FR, nível de consciência, vazamento",
      contraindicacoes: "Ver conduta",
      ajustes: "PaCO₂ não cai: aumentar IPAP (diferença IPAP − EPAP). SpO₂ baixa: aumentar EPAP ou FiO₂"
    },
    {
      droga: "VNI — CPAP ou BiPAP (edema agudo de pulmão)",
      linha: "l1",
      dose: "CPAP 5–10 cmH₂O, ou BiPAP IPAP 10–15 / EPAP 5–8 cmH₂O",
      via: "Máscara oronasal",
      intervalo: "Contínua",
      duracao: "Até melhora (em geral horas)",
      monitorizacao: "PA (pode cair), SpO₂, FR",
      contraindicacoes: "Choque cardiogênico, IAM com instabilidade",
      ajustes: "Associar nitrato e diurético conforme ficha de IC descompensada"
    },
    {
      droga: "Cânula nasal de alto fluxo",
      linha: "l1",
      dose: "Adulto: 40–60 L/min, FiO₂ inicial 60–100% e titular; criança: 1–2 L/kg/min (bronquiolite em geral até 2 L/kg/min), FiO₂ titulada",
      via: "Cânula nasal própria (ocupar até metade da narina), umidificada e aquecida a 34–37 °C",
      intervalo: "Contínua",
      duracao: "Até melhora; desmame reduzindo FiO₂ primeiro e depois o fluxo",
      monitorizacao: "FR, esforço, SpO₂, ROX em 2, 6 e 12 h",
      contraindicacoes: "Hipercapnia com acidose (preferir VNI), trauma de face ou base de crânio, obstrução nasal",
      ajustes: "Não substitui VNI no DPOC hipercápnico com acidose"
    }
  ],
  prescricao: {
    hospitalar: "OXIGENOTERAPIA — ADULTO\n1. Oxigênio úmido por cateter nasal a 2 L/min; titular de 1 a 6 L/min para SpO₂ 94–98% (se DPOC/risco de hipercapnia: 88–92%).\n   (ou) Máscara de Venturi 28% no fluxo indicado na válvula, para SpO₂ 88–92%.\n   (ou) Máscara com reservatório a 15 L/min se SpO₂ < 90% com cateter/máscara; reavaliar em 15 min.\n2. Oximetria contínua; registrar SpO₂ e dispositivo a cada 2 h.\n3. Gasometria arterial agora e 1 h após qualquer mudança se risco de hipercapnia.\n4. Cabeceira elevada 30–45°.\n\nCÂNULA NASAL DE ALTO FLUXO — ADULTO\n5. CNAF a 50 L/min, temperatura 37 °C, FiO₂ 60% e titular para SpO₂ 92–96%; calcular índice ROX em 2, 6 e 12 h.\n\nVNI — DPOC EXACERBADA\n6. BiPAP com máscara oronasal: IPAP 12 cmH₂O (subir até 15–20 conforme tolerância), EPAP 5 cmH₂O, FiO₂ para SpO₂ 88–92%. Gasometria em 1 h.\n\nCRIANÇA (peso: ___ kg)\n- Cateter nasal 0,5–2 L/min (lactente até 1 L/min) ou máscara com reservatório 10–15 L/min para SpO₂ ≥ 94% na criança grave (bronquiolite: alvo do protocolo, ver ficha bronquiolite).\n- CNAF 1–2 L/kg/min (ex.: 8 kg → 8–16 L/min), FiO₂ para o alvo; reavaliar em 1–2 h."
  },
  orientacoesRetorno: [
    "Oxigênio não vicia; deve ser usado no fluxo prescrito, nem mais nem menos",
    "Não fumar nem acender chama perto do oxigênio",
    "Após alta, voltar se a falta de ar piorar, lábios ficarem roxos, sonolência ou confusão",
    "DPOC: levar o cartão de alerta \"risco de retenção de CO₂ — alvo 88–92%\" em atendimentos futuros"
  ],
  encaminhar: [
    "UTI: falha de VNI ou CNAF, necessidade de FiO₂ > 60% persistente, rebaixamento",
    "Oxigenoterapia domiciliar: avaliação ambulatorial em pneumologia após estabilidade (critérios de PaO₂ em repouso)"
  ],
  fontes: [
    "British Thoracic Society — Guideline for oxygen use in healthcare and emergency settings (Thorax, 2017; revisão 2019; nova versão em elaboração)",
    "ERS/ATS — Clinical Practice Guidelines: Noninvasive ventilation for acute respiratory failure (Eur Respir J, 2017)",
    "ERS — Clinical Practice Guidelines: High-flow nasal cannula in acute respiratory failure (Eur Respir J, 2022)",
    "Roca O et al. — An Index Combining Respiratory Rate and Oxygenation to Predict Outcome of Nasal High-Flow Therapy (ROX, Am J Respir Crit Care Med, 2019)",
    "GOLD — Global Strategy for COPD (2026)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

// Hepatites B e C crônicas
registrarFicha({
  id: "hepatites-virais",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "adulto",
  titulo: "Hepatites B e C: rastreio e acompanhamento",
  resumo: "Testagem, interpretação de marcadores, vinculação ao tratamento e seguimento das hepatites virais B e C crônicas na atenção primária.",
  palavrasChave: "hepatite b hepatite c hbsag anti-hcv carga viral tenofovir entecavir sofosbuvir velpatasvir daa teste rapido cirrose vacina",
  critico: {
    tempo: "Teste rápido: oferte",
    texto: "Hepatite C tem cura com antivirais orais em 8–12 semanas. Teste rápido reagente → confirmar com carga viral e vincular ao tratamento pelo SUS."
  },
  alarmes: [
    "Icterícia, ascite, sangramento digestivo, encefalopatia (descompensação)",
    "Plaquetas < 150 mil ou FIB-4/APRI elevados (fibrose avançada)",
    "Gestante HBsAg reagente (profilaxia do recém-nascido e, se carga alta, tenofovir)",
    "Imunossupressão/quimioterapia em portador ou ex-portador de HBV (risco de reativação)",
    "Nódulo hepático (carcinoma hepatocelular)"
  ],
  condutaInicial: [
    "Testar (teste rápido HBsAg e anti-HCV): ao menos uma vez na vida para adultos, gestantes, populações de risco",
    "Anti-HCV reagente → carga viral (HCV-RNA); HBsAg reagente → HBeAg, anti-HBe, carga viral (HBV-DNA), TGP",
    "Estadiar fibrose (APRI/FIB-4, elastografia) e avaliar coinfecções (HIV, HBV/HCV, sífilis)",
    "Vacinar contra hepatite B os suscetíveis (anti-HBs negativo) e contra hepatite A se hepatopatia",
    "Notificar e encaminhar ao serviço que dispensa o tratamento (fluxo local/SAE)"
  ],
  fataisExcluir: [
    "Cirrose descompensada",
    "Carcinoma hepatocelular",
    "Reativação do HBV em imunossupressão",
    "Hepatite aguda grave / fulminante"
  ],
  proximaDecisao: "HCV-RNA detectável → tratar com antiviral de ação direta (todos têm indicação). HBV: indicação de tratamento depende de TGP, carga viral, fibrose e contexto (PCDT).",
  clinica: {
    anamnese: [
      "Uso de drogas injetáveis/inaladas, transfusão antes de 1993, tatuagem, hemodiálise",
      "Parceria sexual com hepatite, HIV, história familiar de HBV/CHC",
      "Álcool, outras hepatopatias",
      "Vacinação para hepatite B"
    ],
    exameFisico: ["Icterícia, estigmas de hepatopatia crônica", "Hepatoesplenomegalia, ascite"],
    diferenciais: [
      { dx: "Infecção passada curada (HBV)", pista: "HBsAg negativo, anti-HBc e anti-HBs positivos" },
      { dx: "Vacinado (HBV)", pista: "Somente anti-HBs positivo" },
      { dx: "HCV curado ou cura espontânea", pista: "Anti-HCV positivo, HCV-RNA indetectável" },
      { dx: "MASLD / álcool", pista: "Sorologias negativas" }
    ],
    gravidade: [
      "APRI > 1,5 ou FIB-4 > 3,25: fibrose avançada provável",
      "Cirrose: rastreio de CHC com USG a cada 6 meses (com ou sem AFP)"
    ]
  },
  exames: [
    { nome: "Testes iniciais", pedido: "Teste rápido (ou sorologia) para HBsAg e anti-HCV; anti-HBs; anti-HIV e teste para sífilis.", porQue: "Diagnóstico e coinfecções.", esperar: "—", interpretacao: "Anti-HCV reagente: pedir HCV-RNA. HBsAg reagente: painel do HBV.", limitacoes: "Janela imunológica após exposição recente." },
    { nome: "Hepatite C", pedido: "HCV-RNA quantitativo (carga viral); genotipagem só se exigida pelo protocolo.", porQue: "Confirmar infecção ativa.", esperar: "—", interpretacao: "Detectável = infecção ativa → tratar. RVS12 (indetectável 12 semanas após) = cura.", limitacoes: "—" },
    { nome: "Hepatite B", pedido: "HBeAg, anti-HBe, anti-HBc total, HBV-DNA quantitativo, TGP, TGO.", porQue: "Fase da infecção e indicação de tratamento.", esperar: "—", interpretacao: "HBsAg > 6 meses = crônica. TGP elevada + HBV-DNA alto → tratamento (conforme PCDT).", limitacoes: "Fases oscilam; seguir com TGP a cada 6–12 meses." },
    { nome: "Fibrose e complicações", pedido: "Hemograma (plaquetas), TP/INR, albumina, bilirrubinas, USG de abdome; elastografia se disponível; alfafetoproteína em cirróticos.", porQue: "Estadiamento e rastreio de CHC.", esperar: "—", interpretacao: "APRI = (TGO/LSN) ÷ plaquetas (×10⁹/L) × 100.", limitacoes: "—" }
  ],
  tratamento: [
    { droga: "Sofosbuvir + velpatasvir", linha: "l1", dose: "400/100 mg", via: "VO", intervalo: "1×/dia", duracao: "12 semanas", monitorizacao: "Interações (amiodarona: bradicardia grave; IBP reduz absorção)", contraindicacoes: "Uso de amiodarona", ajustes: "Esquema pangenotípico do PCDT; dispensação por serviço de referência. Alternativa: glecaprevir/pibrentasvir 8 semanas" },
    { droga: "Tenofovir (TDF)", linha: "l1", dose: "300 mg", via: "VO", intervalo: "1×/dia", duracao: "Prolongada (geralmente indefinida)", monitorizacao: "Creatinina, fósforo, densidade óssea", contraindicacoes: "ClCr < 50 (ajustar intervalo)", ajustes: "Gestante com HBV-DNA alto: TDF a partir do 2º–3º trimestre. Alternativa: entecavir 0,5 mg/dia ou TAF" },
    { droga: "Vacina hepatite B", linha: "l1", dose: "3 doses (0, 1, 6 meses)", via: "IM", intervalo: "—", duracao: "—", monitorizacao: "Anti-HBs após o esquema em grupos de risco", contraindicacoes: "—", ajustes: "Para contatos domiciliares e parcerias sexuais suscetíveis" }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES\n1. Teste rápido para hepatite B (HBsAg) e hepatite C (anti-HCV), HIV e sífilis.\n2. Se anti-HCV reagente: carga viral do HCV (HCV-RNA), hemograma, TGO, TGP, creatinina, albumina, TP/INR, USG de abdome.\n3. Se HBsAg reagente: HBeAg, anti-HBe, HBV-DNA, TGO, TGP, hemograma, USG de abdome.\n\nORIENTAÇÕES\n- Usar preservativo; não compartilhar escova de dente, lâmina, alicate ou seringas.\n- Evitar bebida alcoólica.\n- Familiares e parcerias devem testar e vacinar contra hepatite B.\n- Encaminhamento ao serviço de referência para tratamento (gratuito no SUS)."
  },
  orientacoesRetorno: [
    "Hepatite C tem cura com comprimidos por 8–12 semanas",
    "Hepatite B tem controle com tratamento contínuo e acompanhamento regular",
    "Procurar atendimento se pele/olhos amarelos, barriga inchada, fezes pretas ou confusão",
    "Retorno com os exames; portador de HBV sem tratamento: TGP e carga viral a cada 6–12 meses"
  ],
  destino: {
    agora: ["Testar, confirmar, notificar e vincular ao tratamento"],
    reavaliar: ["HCV: carga viral 12 semanas após o fim do tratamento (cura)", "HBV: TGP e HBV-DNA a cada 6–12 meses", "Cirrose: USG a cada 6 meses"],
    alta: ["Seguimento compartilhado UBS–referência"],
    observacao: ["—"],
    internacao: ["Hepatite aguda grave, descompensação de cirrose"],
    transferencia: ["Serviço de referência/SAE/hepatologia para tratamento antiviral e cirróticos", "Pré-natal de alto risco: gestante HBsAg reagente ou HCV"]
  },
  fontes: [
    "Ministério da Saúde — PCDT Hepatite C e Coinfecções (2019 e atualizações)",
    "Ministério da Saúde — PCDT Hepatite B e Coinfecções (2023)",
    "OMS — Guidelines for the prevention, diagnosis, care and treatment of hepatitis B (2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

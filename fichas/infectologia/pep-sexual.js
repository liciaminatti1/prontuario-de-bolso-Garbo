// Profilaxia pós-exposição (PEP) ao HIV, IST e hepatites virais
registrarFicha({
  id: "pep-sexual",
  especialidade: "infectologia",
  caminho: "ps",
  publico: "ambos",
  formato: "completo",
  titulo: "PEP — profilaxia pós-exposição ao HIV, IST e hepatites virais",
  resumo: "Atendimento após exposição sexual de risco (consentida ou violência), acidente com material biológico ou compartilhamento de agulhas. PEP-HIV: tenofovir/lamivudina + dolutegravir por 28 dias, iniciada o mais cedo possível e até 72 h. Avaliar também sífilis, outras IST, hepatites B e C e gestação.",
  palavrasChave: "pep profilaxia pos exposicao hiv aids tenofovir lamivudina dolutegravir tdf 3tc dtg 72 horas preservativo rompeu exposicao sexual acidente biologico hepatite b imunoglobulina ighahb doxipep doxiciclina prep",
  critico: {
    tempo: "1ª dose em até 72 h (ideal 2 h)",
    texto: "Não esperar exames para iniciar: dar a 1ª dose de TDF/3TC + DTG assim que a indicação for estabelecida. Após 72 h, PEP-HIV não é indicada; seguir com testagem e demais profilaxias."
  },
  alarmes: [
    "Exposição há mais de 72 h (PEP-HIV não indicada; manter testagem e outras condutas)",
    "Teste rápido de HIV reagente na pessoa exposta: não é PEP — confirmar diagnóstico e iniciar TARV",
    "Sintomas de infecção aguda pelo HIV no seguimento (febre, faringite, exantema, linfonodos)",
    "Insuficiência renal (TFG < 60 mL/min): trocar tenofovir",
    "Criança < 4 semanas ou < 3 kg exposta: discutir com especialista",
    "Violência sexual: seguir também a ficha de violência sexual (notificação, contracepção, vestígios)"
  ],
  condutaInicial: [
    "Avaliar: tipo de material (sangue, sêmen, fluido vaginal = risco), tipo de exposição (anal receptiva > vaginal receptiva > anal/vaginal insertiva > oral), tempo desde a exposição (≤ 72 h)",
    "Status da pessoa-fonte: teste rápido de HIV na fonte se presente e consentir; fonte não reagente sem risco de janela recente = PEP não indicada",
    "Teste rápido de HIV na pessoa exposta: não reagente → PEP indicada; reagente → não é PEP, encaminhar para TARV",
    "Iniciar tenofovir 300 mg + lamivudina 300 mg (coformulado) + DTG 50 mg 1 vez ao dia por 28 dias; dispensar o tratamento completo",
    "Testes rápidos de sífilis, HBsAg e anti-HCV; beta-hCG em pessoa com útero em idade fértil",
    "Hepatite B: vacinar se não vacinada ou esquema incompleto; IGHAHB conforme indicação (até 14 dias, ideal em 24–48 h)",
    "Exposição sexual: oferecer contracepção de emergência e avaliar IST (profilaxia empírica de IST só em violência sexual; DoxiPEP para os grupos indicados)",
    "Oferecer PrEP ao término da PEP se exposições se repetem (transição direta sem intervalo)"
  ],
  fataisExcluir: [
    "Infecção aguda pelo HIV já presente (teste reagente ou sintomas)",
    "Gestação (muda contracepção de emergência e acompanhamento)",
    "Hepatite B aguda na fonte sem profilaxia",
    "Violência sexual não identificada (perguntar ativamente)"
  ],
  proximaDecisao: "Retorno em 2 semanas (adesão e efeitos adversos) e testagem de HIV em 30 e 90 dias após a exposição. Se exposições repetidas, indicar PrEP logo após o fim dos 28 dias de PEP.",
  clinica: {
    anamnese: [
      "Data e hora da exposição (calcular horas até a 1ª dose)",
      "Tipo de exposição e material; uso de preservativo, ruptura, ejaculação; sangue ou lesões",
      "Pessoa-fonte: status de HIV (carga viral indetectável há > 6 meses = sem risco sexual de transmissão), sífilis, hepatites; populações de maior prevalência",
      "Status vacinal de hepatite B; uso prévio de PEP/PrEP",
      "DUM, método contraceptivo, gestação, amamentação",
      "Doença renal, hepatopatia, medicações (interações com DTG: antiácidos, cálcio, ferro, metformina, carbamazepina, fenitoína, rifampicina)",
      "Exposição por violência? (acolher e seguir ficha específica)"
    ],
    exameFisico: [
      "Sinais vitais; lesões genitais, anais ou orais (úlceras, sangramento)",
      "Sinais de violência física",
      "Sinais de IST (corrimento, úlcera, verrugas)",
      "Peso (crianças: cálculo das doses)"
    ],
    diferenciais: [
      { dx: "Exposição sem risco (material sem risco, pele íntegra, fonte não reagente)", pista: "Saliva, urina, suor sem sangue; pele íntegra: PEP não indicada" },
      { dx: "Infecção pelo HIV prévia não diagnosticada", pista: "Teste rápido reagente na avaliação inicial" },
      { dx: "Infecção aguda pelo HIV (síndrome retroviral aguda)", pista: "Febre, faringite, exantema, linfonodos 2–4 semanas após exposição" }
    ],
    gravidade: [
      "PEP-HIV indicada: material de risco + exposição de risco + até 72 h + fonte HIV reagente ou desconhecida",
      "PEP não indicada: > 72 h, material ou exposição sem risco, fonte comprovadamente não reagente (sem risco de janela)",
      "Fonte vivendo com HIV em TARV com carga viral indetectável: risco sexual desprezível (I = I); avaliar caso a caso"
    ]
  },
  exames: [
    {
      nome: "Teste rápido de HIV (exposto e fonte)",
      pedido: "Teste rápido para HIV na pessoa exposta e, se presente e consentir, na pessoa-fonte.",
      porQue: "Define indicação de PEP.",
      esperar: "30 minutos. Não atrasar a 1ª dose se o teste não estiver disponível.",
      interpretacao: "Exposto reagente: seguir fluxograma de diagnóstico e TARV. Fonte não reagente: PEP geralmente não indicada.",
      limitacoes: "Janela imunológica: fonte com exposição recente pode estar em janela."
    },
    {
      nome: "Sífilis e hepatites",
      pedido: "Teste rápido para sífilis, hepatite B (HBsAg) e hepatite C (anti-HCV). Anti-HBs se vacinada e disponível.",
      porQue: "Linha de base e definição de profilaxia de hepatite B.",
      esperar: "30 minutos (testes rápidos).",
      interpretacao: "HBsAg reagente: não é PEP de hepatite B; avaliar hepatite B. Anti-HBs ≥ 10 mUI/mL: imune.",
      limitacoes: "Anti-HBs nem sempre disponível; na dúvida, vacinar."
    },
    {
      nome: "Gestação",
      pedido: "Beta-hCG (teste rápido de gravidez).",
      porQue: "Contracepção de emergência e acompanhamento de pré-natal.",
      esperar: "Imediato.",
      interpretacao: "Gestante pode usar o mesmo esquema de PEP (DTG permitido).",
      limitacoes: "—"
    },
    {
      nome: "Laboratório geral",
      pedido: "Creatinina (estimar TFG) e ALT/AST — quando houver doença renal ou hepática conhecida ou suspeita.",
      porQue: "Tenofovir: ajuste/troca se TFG < 60 mL/min.",
      esperar: "Não atrasar o início.",
      interpretacao: "TFG < 60: trocar TDF por AZT (zidovudina).",
      limitacoes: "—"
    },
    {
      nome: "Seguimento",
      pedido: "Teste de HIV 30 e 90 dias após a exposição; sífilis 30 dias após; HBsAg/anti-HBs e anti-HCV no seguimento conforme PCDT.",
      porQue: "Detectar soroconversão.",
      esperar: "—",
      interpretacao: "Soroconversão: confirmar e iniciar TARV/tratamento.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    { droga: "Tenofovir 300 mg + lamivudina 300 mg (TDF/3TC) coformulado", linha: "l1", dose: "1 comprimido", via: "VO", intervalo: "1 vez ao dia", duracao: "28 dias", monitorizacao: "Náusea, diarreia; função renal se risco", contraindicacoes: "TFG < 60 mL/min (trocar por AZT/3TC)", ajustes: "Gestação e lactação: pode usar. Adolescentes ≥ 35 kg: dose de adulto" },
    { droga: "Dolutegravir 50 mg (DTG)", linha: "l1", dose: "50 mg", via: "VO", intervalo: "1 vez ao dia", duracao: "28 dias", monitorizacao: "Cefaleia, insônia", contraindicacoes: "Uso de dofetilida", ajustes: "Antiácidos, cálcio, ferro, magnésio, zinco: tomar DTG 2 h antes ou 6 h depois. Com carbamazepina, fenitoína, fenobarbital ou rifampicina: DTG 50 mg 12/12 h. Metformina: limitar a 1 g/dia e monitorar. Gestação: pode usar" },
    { droga: "Zidovudina 300 mg + lamivudina 150 mg (AZT/3TC) + DTG", linha: "alt", dose: "1 comprimido de AZT/3TC 12/12 h + DTG 50 mg 1 vez ao dia", via: "VO", intervalo: "Ver dose", duracao: "28 dias", monitorizacao: "Hemograma (anemia), náusea, cefaleia", contraindicacoes: "Anemia grave", ajustes: "Quando tenofovir contraindicado (DRC)" },
    { droga: "TDF/3TC + darunavir 800 mg + ritonavir 100 mg", linha: "alt", dose: "TDF/3TC 1 comprimido + DRV 800 mg + RTV 100 mg", via: "VO", intervalo: "1 vez ao dia, com alimento", duracao: "28 dias", monitorizacao: "Interações do ritonavir", contraindicacoes: "Interações graves (consultar tabela de interações)", ajustes: "Quando DTG contraindicado" },
    { droga: "Vacina hepatite B + imunoglobulina humana anti-hepatite B (IGHAHB)", linha: "l1", dose: "Vacina: dose habitual para a idade, esquema 0–1–6 meses. IGHAHB: 0,06 mL/kg", via: "IM (locais diferentes)", intervalo: "Dose única de IGHAHB", duracao: "Até 14 dias da exposição sexual (ideal 24–48 h)", monitorizacao: "Anti-HBs 1–2 meses após o fim do esquema vacinal, se indicado", contraindicacoes: "—", ajustes: "IGHAHB: exposto suscetível e fonte HBsAg reagente ou de alto risco/desconhecida, e em toda vítima de violência sexual suscetível. Disponível no CRIE/serviços de referência" },
    { droga: "Doxiciclina 100 mg — DoxiPEP", linha: "adj", dose: "200 mg (2 comprimidos) em dose única", via: "VO", intervalo: "Após cada exposição de risco (máximo 200 mg por 24 h)", duracao: "Até 72 h após a relação (ideal em 24 h)", monitorizacao: "Testagem de IST a cada 3 meses", contraindicacoes: "Gestação, < 8 anos", ajustes: "Incorporada ao SUS em 2026 para HSH, homens gays e bissexuais e mulheres trans adultos com IST bacteriana recente; implantação local em curso. Não substitui PEP-HIV nem preservativo" }
  ],
  destino: {
    agora: ["1ª dose no serviço", "Dispensar 28 dias de PEP", "Vacina hepatite B / IGHAHB", "Contracepção de emergência se indicada"],
    reavaliar: ["Retorno em cerca de 2 semanas: adesão e efeitos adversos", "HIV em 30 e 90 dias; sífilis em 30 dias"],
    alta: ["Todos os casos sem complicação, com retorno agendado na UBS/SAE/CTA"],
    observacao: ["—"],
    internacao: ["Apenas se lesões graves associadas (violência) ou outra indicação clínica"],
    transferencia: ["Crianças < 4 semanas ou situações complexas (fonte com resistência conhecida, gestante com dúvida): contato com SAE/infectologia de referência sem atrasar a 1ª dose"]
  },
  prescricao: {
    ambulatorial: "PEP HIV — ADULTO E ADOLESCENTE ≥ 35 kg\nUSO ORAL\n1. Tenofovir 300 mg + lamivudina 300 mg (comprimido coformulado) ----- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, sempre no mesmo horário, por 28 dias.\n2. Dolutegravir 50 mg ----------------------------------------------- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, junto com o anterior, por 28 dias.\n   Se usar antiácido, cálcio, ferro ou polivitamínico: tomar o dolutegravir 2 horas antes ou 6 horas depois.\n\nCONTRACEPÇÃO DE EMERGÊNCIA (se exposição vaginal e risco de gestação)\n3. Levonorgestrel 1,5 mg -------------------------------------------- 1 comprimido\n   Tomar 1 comprimido o quanto antes, até 5 dias após a relação.\n\nUSO INTRAMUSCULAR (na unidade, se suscetível)\n4. Vacina hepatite B — 1ª dose; agendar 2ª dose em 1 mês e 3ª em 6 meses.\n5. Imunoglobulina humana anti-hepatite B 0,06 mL/kg IM (outro grupo muscular), se indicada.\n\nDOXIPEP (somente público indicado)\n6. Doxiciclina 100 mg ---------------------------------------------- 2 comprimidos por exposição\n   Tomar 2 comprimidos juntos até 72 horas após a relação sexual sem preservativo (máximo 2 comprimidos a cada 24 horas).\n\nCRIANÇA 4 SEMANAS A 12 ANOS (por peso; conferir quadro do PCDT 2024)\n- ≤ 35 kg: zidovudina (AZT) solução oral 10 mg/mL + lamivudina (3TC) solução oral 10 mg/mL + dolutegravir 5 mg comprimido dispersível, doses na tabela, por 28 dias.\n- > 35 kg: esquema de adulto (TDF/3TC + DTG)."
  },
  orientacoesRetorno: [
    "Tomar os remédios todos os dias, no mesmo horário, por 28 dias seguidos; não parar sem orientação",
    "Esqueceu uma dose: tomar assim que lembrar; se estiver perto da próxima, não dobrar",
    "Usar preservativo até concluir os testes de 90 dias",
    "Efeitos comuns (enjoo, dor de cabeça, diarreia) costumam passar; procurar o serviço se forem fortes",
    "Voltar logo se febre, manchas no corpo, dor de garganta, ínguas ou olhos amarelos",
    "Retornar em 2 semanas e fazer os testes de HIV em 30 e 90 dias; perguntar sobre PrEP se as exposições se repetem"
  ],
  tabelas: [
    {
      titulo: "PEP pediátrica — doses (4 semanas a 12 anos; PCDT PEP 2024)",
      colunas: ["Droga", "Faixa", "Dose"],
      linhas: [
        ["Zidovudina (AZT) 10 mg/mL", "4 a < 9 kg", "12 mg/kg VO 12/12 h"],
        ["Zidovudina (AZT) 10 mg/mL", "9 a < 30 kg", "9 mg/kg VO 12/12 h"],
        ["Zidovudina (AZT)", "≥ 30 kg", "300 mg VO 12/12 h"],
        ["Lamivudina (3TC) 10 mg/mL", "Após 30 dias de vida", "4 mg/kg VO 12/12 h (máximo 150 mg 12/12 h)"],
        ["Dolutegravir 5 mg dispersível", "3 a < 6 kg", "5 mg VO 1 vez ao dia"],
        ["Dolutegravir 5 mg dispersível", "6 a < 10 kg", "< 6 meses: 10 mg; ≥ 6 meses: 15 mg, 1 vez ao dia"],
        ["Dolutegravir 5 mg dispersível", "10 a < 14 kg", "20 mg VO 1 vez ao dia"],
        ["Dolutegravir 5 mg dispersível", "14 a < 20 kg", "25 mg VO 1 vez ao dia"],
        ["Dolutegravir", "≥ 20 kg", "30 mg (dispersível) ou 50 mg (comprimido revestido) 1 vez ao dia"]
      ],
      nota: "Comprimido dispersível e revestido de DTG não são intercambiáveis mg a mg. Menores de 4 semanas: discutir com especialista. Conferir doses no PCDT vigente antes de dispensar."
    }
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Profilaxia Pós-Exposição de Risco (PEP) à Infecção pelo HIV, IST e Hepatites Virais (Portaria SECTICS/MS nº 14, de 8 de abril de 2024)",
    "Ministério da Saúde — PCDT para Manejo da Infecção pelo HIV em Crianças e Adolescentes, Módulo I e II (2024)",
    "Ministério da Saúde — Incorporação da doxiciclina 100 mg para profilaxia pós-exposição às IST bacterianas (Conitec; portaria publicada em março de 2026)",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais (6ª ed., 2023)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

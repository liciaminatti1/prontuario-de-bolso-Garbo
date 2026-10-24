// Reação transfusional e indicações de hemocomponentes
registrarFicha({
  id: "reacao-transfusional",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Reação transfusional e indicações de hemocomponentes",
  resumo: "Qualquer sinal ou sintoma novo durante ou até 24 h após transfusão (tardias: até semanas). Parar a transfusão, manter acesso, conferir identificação, avisar a agência transfusional e tratar conforme o tipo. Inclui tabela de indicações e doses de hemocomponentes.",
  palavrasChave: "reacao transfusional transfusao hemocomponente hemotransfusao febre calafrio urticaria anafilaxia hemolitica abo trali taco sobrecarga contaminacao bacteriana concentrado de hemacias plaquetas plasma crioprecipitado hemovigilancia notivisa irradiado filtrado",
  critico: {
    tempo: "Parar a transfusão já",
    texto: "Interromper, manter o acesso com SF 0,9%, conferir paciente × bolsa, avisar a agência transfusional e enviar bolsa + amostras. Febre com hipotensão, dor lombar ou hemoglobinúria = hemolítica aguda ou sepse."
  },
  alarmes: [
    "Hipotensão, choque, taquicardia",
    "Dispneia, hipoxemia, sibilância, estridor",
    "Dor lombar, torácica ou no local da infusão, urina escura/vermelha (hemólise)",
    "Febre ≥ 39 °C ou aumento ≥ 2 °C, calafrios intensos",
    "Angioedema, urticária generalizada (anafilaxia)",
    "Sangramento difuso (CIVD na hemolítica aguda)",
    "Erro de identificação detectado"
  ],
  condutaInicial: [
    "Parar a transfusão imediatamente; não descartar a bolsa",
    "Manter acesso venoso com SF 0,9% em equipo novo",
    "Sinais vitais, SpO₂, ausculta, diurese",
    "Conferir à beira do leito: nome, registro, tipo sanguíneo do paciente e da bolsa, etiqueta",
    "Avisar a agência transfusional; enviar a bolsa com o equipo e amostras do paciente (tubo EDTA e seco)",
    "Exames: hemograma, Coombs direto, retipagem ABO/Rh, LDH, bilirrubinas, haptoglobina, creatinina, urina tipo 1 (hemoglobinúria); hemoculturas do paciente e cultura da bolsa se febre alta ou hipotensão; RX de tórax e BNP se dispneia",
    "Tratar conforme o tipo (tabela) e notificar ao Sistema Nacional de Hemovigilância (Notivisa)"
  ],
  fataisExcluir: [
    "Reação hemolítica aguda por incompatibilidade ABO",
    "Contaminação bacteriana (sepse) — mais comum com plaquetas",
    "Anafilaxia (deficiência de IgA, anticorpos anti-proteínas)",
    "TRALI (lesão pulmonar aguda relacionada à transfusão)",
    "TACO (sobrecarga circulatória)"
  ],
  proximaDecisao: "Só urticária leve isolada, sem outros sintomas → anti-histamínico e pode reiniciar a mesma bolsa lentamente. Febre isolada leve (< 2 °C de aumento, estável) → antitérmico; em geral não reiniciar a mesma bolsa. Qualquer outra reação → não reiniciar; investigar e tratar como grave.",
  clinica: {
    anamnese: [
      "Hemocomponente, volume infundido, hora do início e dos sintomas",
      "Transfusões e gestações prévias, reações anteriores",
      "Cardiopatia, DRC (risco de TACO), deficiência de IgA conhecida"
    ],
    exameFisico: [
      "PA, FC, FR, temperatura, SpO₂",
      "Pele: urticária, angioedema",
      "Ausculta: estertores (TRALI/TACO), sibilos (anafilaxia)",
      "Turgência jugular, edema (TACO)",
      "Local da infusão, sangramento difuso"
    ],
    diferenciais: [
      { dx: "Febril não hemolítica", pista: "Febre/calafrio durante ou até 4 h, estável; diagnóstico de exclusão" },
      { dx: "Alérgica leve", pista: "Urticária e prurido sem outros sintomas" },
      { dx: "Anafilaxia", pista: "Início em minutos: hipotensão, broncoespasmo, angioedema, sem febre" },
      { dx: "Hemolítica aguda", pista: "Febre, dor lombar, hipotensão, hemoglobinúria, Coombs direto positivo" },
      { dx: "Contaminação bacteriana", pista: "Febre alta, calafrios, choque; plaquetas (armazenadas em temperatura ambiente)" },
      { dx: "TRALI", pista: "Hipoxemia em até 6 h, edema pulmonar não cardiogênico, febre, hipotensão; BNP normal" },
      { dx: "TACO", pista: "Dispneia em até 12 h, hipertensão, turgência jugular, BNP alto, resposta a diurético" },
      { dx: "Hemolítica tardia", pista: "3–14 dias após: queda de Hb, icterícia, Coombs direto positivo, novo anticorpo" }
    ],
    gravidade: [
      "Grau 1 (não grave): sem risco de vida",
      "Grau 2 (grave): internação ou prolongamento, ou incapacidade",
      "Grau 3 (risco de vida): necessidade de intervenção maior (vasopressor, intubação, UTI)",
      "Grau 4: óbito"
    ]
  },
  exames: [
    {
      nome: "Investigação de hemólise",
      pedido: "Coombs direto, retipagem ABO/Rh do paciente (nova amostra) e da bolsa, pesquisa de anticorpos irregulares, hemograma, LDH, bilirrubinas, haptoglobina, urina tipo 1, creatinina, TP, TTPa, fibrinogênio.",
      porQue: "Confirmar hemólise e incompatibilidade.",
      esperar: "Hemolítica: Coombs direto positivo, hemoglobinúria, LDH alta.",
      interpretacao: "Coombs negativo não exclui hemólise maciça (hemácias já destruídas).",
      limitacoes: "—"
    },
    {
      nome: "Culturas",
      pedido: "Hemoculturas do paciente (2 amostras) e cultura do hemocomponente (bolsa enviada à agência).",
      porQue: "Contaminação bacteriana.",
      esperar: "—",
      interpretacao: "Mesmo germe no paciente e na bolsa confirma.",
      limitacoes: "—"
    },
    {
      nome: "Respiratório",
      pedido: "Gasometria arterial, RX de tórax, BNP ou NT-proBNP, ECG.",
      porQue: "TRALI × TACO × anafilaxia.",
      esperar: "Infiltrado bilateral em ambos.",
      interpretacao: "BNP alto e resposta a diurético favorecem TACO.",
      limitacoes: "Podem coexistir."
    }
  ],
  tratamento: [
    {
      droga: "Dipirona ou paracetamol (febril não hemolítica)",
      linha: "l1",
      dose: "Dipirona 1 g IV ou paracetamol 750 mg VO",
      via: "IV ou VO",
      intervalo: "Dose única; repetir em 6 h se necessário",
      duracao: "—",
      monitorizacao: "Temperatura, PA",
      contraindicacoes: "—",
      ajustes: "Meperidina 25 mg IV para calafrios intensos (se disponível). Pré-medicação de rotina não previne reações"
    },
    {
      droga: "Difenidramina ou prometazina (alérgica leve)",
      linha: "l1",
      dose: "Difenidramina 50 mg IV lenta ou prometazina 25 mg IM",
      via: "IV ou IM",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Progressão para anafilaxia",
      contraindicacoes: "—",
      ajustes: "Só urticária: reiniciar a mesma bolsa lentamente após melhora"
    },
    {
      droga: "Adrenalina (anafilaxia)",
      linha: "l1",
      dose: "0,5 mg (0,5 mL da ampola 1 mg/mL)",
      via: "IM na face lateral da coxa",
      intervalo: "Repetir a cada 5–15 min se necessário",
      duracao: "—",
      monitorizacao: "PA, FC, SpO₂",
      contraindicacoes: "Nenhuma na anafilaxia",
      ajustes: "Ver ficha anafilaxia. Futuras transfusões: hemocomponentes lavados ou de doador IgA-deficiente se deficiência de IgA"
    },
    {
      droga: "Cristaloide (hemolítica aguda)",
      linha: "l1",
      dose: "SF 0,9% para diurese ≥ 1 mL/kg/h (≥ 100 mL/h no adulto)",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até cessar a hemoglobinúria",
      monitorizacao: "Diurese, creatinina, potássio, coagulação (CIVD)",
      contraindicacoes: "Sobrecarga volêmica",
      ajustes: "Furosemida se diurese baixa após volume; vasopressor se choque; tratar CIVD"
    },
    {
      droga: "Furosemida (TACO)",
      linha: "l1",
      dose: "20–40 mg",
      via: "IV",
      intervalo: "Repetir conforme resposta",
      duracao: "—",
      monitorizacao: "Diurese, SpO₂, PA",
      contraindicacoes: "Hipotensão",
      ajustes: "Sentar o paciente, O₂, VNI se necessário. Prevenção: transfundir mais devagar (1 mL/kg/h) e uma unidade por vez em risco"
    },
    {
      droga: "Suporte ventilatório (TRALI)",
      linha: "l1",
      dose: "O₂, VNI ou intubação com ventilação protetora",
      via: "—",
      intervalo: "—",
      duracao: "Melhora em geral em 48–96 h",
      monitorizacao: "SpO₂, gasometria",
      contraindicacoes: "—",
      ajustes: "Diurético não ajuda e pode piorar (hipotensão). Notificar: doador deve ser investigado"
    },
    {
      droga: "Antibiótico de amplo espectro (contaminação bacteriana)",
      linha: "l1",
      dose: "Ex.: cefepime 2 g IV 8/8 h ou piperacilina-tazobactam 4,5 g IV 6/6 h, ± vancomicina",
      via: "IV",
      intervalo: "Conforme droga",
      duracao: "Conforme culturas",
      monitorizacao: "Hemoculturas, lactato",
      contraindicacoes: "—",
      ajustes: "Iniciar após colher hemoculturas; tratar como sepse (ver ficha sepse)"
    }
  ],
  destino: {
    agora: ["Parar, manter acesso, avisar agência transfusional, tratar"],
    reavaliar: ["Sinais vitais de 15/15 min na 1ª hora", "Diurese e cor da urina"],
    alta: ["Reação febril ou alérgica leve resolvida em paciente ambulatorial, com registro e orientação"],
    observacao: ["Reações leves: observar 1–2 h após resolução"],
    internacao: ["Hemolítica, anafilaxia, TRALI, TACO, suspeita de contaminação"],
    transferencia: ["UTI: choque, insuficiência respiratória, CIVD"]
  },
  prescricao: {
    hospitalar: "REAÇÃO TRANSFUSIONAL — CONDUTA (peso: ___ kg)\n1. Suspender a transfusão. Manter acesso com SF 0,9% em equipo novo.\n2. Conferir identificação do paciente e da bolsa; comunicar a agência transfusional; enviar bolsa + equipo + amostras (EDTA e tubo seco).\n3. Sinais vitais e SpO₂ de 15/15 min na 1ª hora.\n4. Febre: dipirona 1 g + SF 0,9% 100 mL IV em 30 min.\n5. Urticária/prurido isolados: difenidramina 50 mg IV lento (ou prometazina 25 mg IM).\n6. Anafilaxia: adrenalina 1 mg/mL 0,5 mL IM agora, repetir em 5–15 min; SF 0,9% 1.000 mL IV rápido; O₂ (ver ficha anafilaxia).\n7. Suspeita de hemólise: SF 0,9% IV para diurese ≥ 100 mL/h; sondagem vesical para controle; furosemida 40 mg IV se oligúria após volume.\n8. Dispneia com congestão (TACO): sentar, O₂, furosemida 40 mg IV.\n9. Febre alta/hipotensão: hemoculturas 2 amostras + cultura da bolsa; antibiótico de amplo espectro.\n10. Exames: Coombs direto, retipagem ABO/Rh, hemograma, LDH, bilirrubinas, haptoglobina, creatinina, potássio, TP, TTPa, fibrinogênio, urina tipo 1; RX de tórax e BNP se dispneia.\n11. Notificar no Notivisa (hemovigilância) e registrar no prontuário.",
    ambulatorial: "ORIENTAÇÃO APÓS REAÇÃO LEVE\n1. Paracetamol 500 mg ----------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre.\n2. Loratadina 10 mg ------------------------------- 5 comprimidos\n   Tomar 1 comprimido ao dia se coceira.\nInformar em toda transfusão futura que teve reação."
  },
  orientacoesRetorno: [
    "Contar em toda nova transfusão que já teve reação (anotar o tipo)",
    "Voltar imediatamente se nas próximas horas ou dias: febre, falta de ar, urina escura ou vermelha, pele ou olhos amarelos, manchas pelo corpo, cansaço que piora",
    "Reação hemolítica tardia pode aparecer até 2 semanas depois: procurar atendimento se ficar amarelo ou muito pálido"
  ],
  tabelas: [
    {
      titulo: "Indicações básicas e doses de hemocomponentes",
      colunas: ["Hemocomponente", "Indicação principal", "Dose (adulto / criança)", "Efeito esperado"],
      linhas: [
        ["Concentrado de hemácias", "Hb < 7 g/dL estável; < 8 g/dL em cardiopatia, cirurgia cardíaca ou ortopédica; sangramento ativo com instabilidade", "1 unidade por vez e reavaliar / 10–15 mL/kg", "Hb sobe ~1 g/dL por unidade (adulto)"],
        ["Concentrado de plaquetas", "< 10 mil profilático; < 50 mil com sangramento ou procedimento; < 100 mil em SNC (ver ficha trombocitopenia)", "1 U randômica/10 kg ou 1 aférese / 5–10 mL/kg", "Subida de 5–10 mil por unidade randômica"],
        ["Plasma fresco congelado", "Sangramento ou procedimento com TP/TTPa > 1,5× controle; transfusão maciça; PTT sem aférese", "10–20 mL/kg / 10–15 mL/kg", "Repor 20–30% dos fatores"],
        ["Crioprecipitado", "Fibrinogênio < 150 mg/dL com sangramento (< 200 em hemorragia obstétrica); CIVD", "1 U/10 kg / 1 U/5–10 kg", "Fibrinogênio sobe ~50–100 mg/dL"]
      ],
      nota: "Plasma não é indicado para reverter varfarina quando há complexo protrombínico, nem para corrigir INR sem sangramento (inclusive cirrótico). Irradiados: imunossuprimidos graves, transplante de medula, doador parente. Desleucocitados: reação febril recorrente, prevenção de CMV e aloimunização em politransfundidos."
    },
    {
      titulo: "Tipos de reação aguda e conduta",
      colunas: ["Tipo", "Pista", "Conduta", "Reiniciar?"],
      linhas: [
        ["Febril não hemolítica", "Febre/calafrio, estável", "Antitérmico; excluir hemólise e sepse", "Em geral não"],
        ["Alérgica leve", "Urticária isolada", "Anti-histamínico", "Sim, lentamente"],
        ["Anafilática", "Hipotensão, broncoespasmo, angioedema", "Adrenalina IM, volume, O₂", "Não"],
        ["Hemolítica aguda", "Febre, dor lombar, hemoglobinúria, choque", "Volume, diurese, tratar CIVD", "Não"],
        ["Contaminação bacteriana", "Febre alta, calafrios, choque", "Culturas, antibiótico, sepse", "Não"],
        ["TRALI", "Hipoxemia em até 6 h, BNP normal", "Suporte ventilatório, sem diurético", "Não"],
        ["TACO", "Dispneia, hipertensão, congestão, BNP alto", "Diurético, O₂, sentar", "Não"]
      ]
    }
  ],
  fontes: [
    "Ministério da Saúde — Guia para uso de hemocomponentes, 2ª ed. (2015)",
    "ANVISA — Marco conceitual e operacional de hemovigilância: guia para a hemovigilância no Brasil (2015)",
    "Ministério da Saúde — Portaria de Consolidação nº 5/2017, Anexo IV (regulamento técnico de procedimentos hemoterápicos)",
    "AABB — Red blood cell transfusion thresholds: International Guidelines (Carson et al., JAMA 2023)",
    "ISBT — Proposed standard definitions for surveillance of non-infectious adverse transfusion reactions (2011, revisões TRALI 2019 e TACO 2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

// Triagem neonatal: pezinho, orelhinha, olhinho, coraçãozinho e linguinha
registrarFicha({
  id: "triagem-neonatal",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Triagem neonatal: pezinho, orelhinha, olhinho, coraçãozinho e linguinha",
  resumo: "Quando e como fazer os testes de triagem do recém-nascido no SUS e o que fazer quando um resultado vem alterado. Para a rotina geral da consulta, ver ficha puericultura.",
  palavrasChave: "triagem neonatal teste do pezinho pntn lei 14154 fenilcetonuria hipotireoidismo congenito anemia falciforme hemoglobinopatia fibrose cistica hiperplasia adrenal congenita biotinidase toxoplasmose teste da orelhinha emissoes otoacusticas peate teste do olhinho reflexo vermelho leucocoria teste do coracaozinho oximetria teste da linguinha frenulo bristol frenotomia",
  critico: {
    tempo: "Pezinho alterado: convocar já",
    texto: "Resultado alterado do pezinho é urgência: localizar a família no mesmo dia, colher o exame confirmatório e encaminhar ao serviço de referência. Hiperplasia adrenal pode causar crise perdedora de sal na 2ª semana e hipotireoidismo deve ser tratado antes de 14 dias de vida."
  },
  alarmes: [
    "17-OH-progesterona alterada + vômitos, desidratação, má sucção ou genitália atípica (crise perdedora de sal: PS)",
    "Reflexo vermelho ausente, assimétrico ou branco (leucocoria): catarata congênita, retinoblastoma",
    "Oximetria < 90% em qualquer membro (teste do coraçãozinho positivo imediato)",
    "Pezinho colhido antes de 48 h, após transfusão ou não colhido até o 5º dia",
    "Recém-nascido com icterícia, letargia, hipotonia ou convulsão (erro inato do metabolismo)"
  ],
  conduta: [
    "Conferir na Caderneta da Criança, na 1ª semana de vida, todos os testes: pezinho, orelhinha, olhinho, coraçãozinho e linguinha",
    "Pezinho: coletar entre o 3º e o 5º dia de vida (nunca antes de 48 h de alimentação); se perdido, colher em qualquer idade, o quanto antes. Transfusão: colher antes ou repetir conforme orientação do laboratório de referência",
    "Orelhinha: emissões otoacústicas (EOA) antes da alta ou até 30 dias; com indicador de risco para deficiência auditiva (IRDA): PEATE automático",
    "Olhinho: reflexo vermelho na maternidade e em pelo menos 2–3 consultas por ano até os 3 anos",
    "Coraçãozinho: oximetria entre 24 e 48 h de vida, antes da alta, em RN > 34 semanas: mão direita e um pé",
    "Linguinha: avaliação do frênulo com o Protocolo Bristol (BTAT) na maternidade, junto com a observação da mamada",
    "Resultado alterado: registrar, explicar à família, solicitar o confirmatório e encaminhar (ver tabela)"
  ],
  exames: [
    "Pezinho (PNTN, SUS): fenilcetonúria, hipotireoidismo congênito, doença falciforme e outras hemoglobinopatias, fibrose cística, hiperplasia adrenal congênita, deficiência de biotinidase e toxoplasmose congênita",
    "Lei 14.154/2021: ampliação em 5 etapas (2ª: galactosemias, aminoacidopatias, distúrbios do ciclo da ureia e da beta-oxidação; 3ª: doenças lisossômicas; 4ª: imunodeficiências primárias; 5ª: atrofia muscular espinhal). A implantação é gradual e varia por estado: conferir o painel do seu serviço de referência",
    "IRDA (orelhinha com PEATE): UTI neonatal > 5 dias, hiperbilirrubinemia com exsanguíneo, infecções congênitas (STORCH, Zika), anomalias craniofaciais, síndromes, história familiar de surdez, ototóxicos, meningite"
  ],
  diferenciais: [
    "TSH elevado transitório (iodo materno, prematuridade): confirmar com exame sérico",
    "Fibrose cística: tripsina imunorreativa (IRT) alta pode ser falso-positivo; confirmar com teste do suor",
    "Hemoglobina FS no pezinho: anemia falciforme (SS) x S-beta-talassemia; FAS: traço falciforme (não é doença, orientar aconselhamento genético)"
  ],
  encaminhar: [
    "Pezinho alterado: Serviço de Referência em Triagem Neonatal do estado (o próprio serviço costuma convocar; a UBS faz a busca ativa)",
    "Hipotireoidismo congênito confirmado: iniciar levotiroxina sem esperar a consulta especializada se a referência demorar",
    "Falha na orelhinha: reteste em até 30 dias; nova falha → diagnóstico audiológico (PEATE) até 3 meses e intervenção até 6 meses",
    "Reflexo vermelho alterado ou duvidoso: oftalmologia com prioridade (leucocoria = urgência)",
    "Coraçãozinho alterado confirmado: ecocardiograma em até 24 h, antes da alta; se já em casa, PS com cardiologia pediátrica",
    "Linguinha com restrição importante e dificuldade na amamentação: avaliação para frenotomia (cirurgião pediátrico, otorrino ou serviço de referência)"
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES\n1. Teste do pezinho (triagem neonatal biológica — PNTN) em papel-filtro: coleta de sangue do calcanhar. Data do nascimento: ___. Prematuro / transfundido / em nutrição parenteral: ___.\n2. Triagem auditiva neonatal: emissões otoacústicas evocadas (EOA). Se IRDA ___: PEATE automático.\n3. Confirmatório de hipotireoidismo congênito: TSH e T4 livre séricos — URGENTE.\n4. Confirmatório de fibrose cística: teste do suor (cloro no suor), em serviço de referência.\n5. Ecocardiograma transtorácico — oximetria de triagem alterada (SpO₂ MSD ___% / MI ___%).\n\nHIPOTIREOIDISMO CONGÊNITO CONFIRMADO (USO ORAL)\n1. Levotiroxina sódica 25 mcg -------------------- 1 caixa\n   Dose 10–15 mcg/kg/dia: dar ___ mcg (triturar o comprimido em pouca água ou leite materno, na colher) 1 vez ao dia, sempre no mesmo horário. Não misturar com fórmula de soja, ferro ou cálcio.\n   Controle de TSH e T4 livre em 2 semanas."
  },
  orientacoesRetorno: [
    "O teste do pezinho deve ser feito entre o 3º e o 5º dia de vida; leve o bebê à UBS nesse período, mesmo que pareça bem",
    "Se a unidade ligar pedindo nova coleta, venha no mesmo dia: não significa que o bebê está doente, mas precisa confirmar rápido",
    "Bebê com vômitos, moleza, que não mama ou fica desidratado nas primeiras semanas: levar ao pronto-socorro",
    "Mancha branca no olho em fotos com flash ou olho torto: procurar a UBS logo",
    "Se o bebê não se assusta com barulhos altos ou a família achar que ele não ouve bem: avisar na consulta, em qualquer idade"
  ],
  tabelas: [
    {
      titulo: "Teste alterado: o que fazer",
      colunas: ["Teste", "Resultado alterado", "Conduta"],
      linhas: [
        ["Pezinho — TSH", "TSH acima do corte do laboratório", "TSH e T4 livre séricos em caráter urgente; confirmado: levotiroxina 10–15 mcg/kg/dia, idealmente antes de 14 dias de vida"],
        ["Pezinho — fenilalanina", "Fenilalanina elevada", "Convocação para dosagem sérica no serviço de referência; dieta restrita em fenilalanina se confirmada; manter vínculo com a UBS"],
        ["Pezinho — hemoglobinas", "FS, FSC, FSA ou outras variantes", "Confirmação no serviço de referência; doença falciforme: penicilina profilática a partir de 2–3 meses, vacinas especiais, orientar sinais de alerta (ver ficha anemia-falciforme)"],
        ["Pezinho — IRT", "IRT elevada (repetida antes de 30 dias, conforme o estado)", "Teste do suor no serviço de referência"],
        ["Pezinho — 17-OH-progesterona", "17-OHP elevada", "Mesmo dia: avaliar hidratação, sódio e potássio; sinais de desidratação ou hiponatremia/hipercalemia → PS. Encaminhar à endocrinologia pediátrica"],
        ["Pezinho — biotinidase", "Atividade reduzida", "Confirmar; biotina oral contínua conforme o serviço de referência"],
        ["Pezinho — toxoplasmose", "IgM anti-Toxoplasma reagente", "Investigação de toxoplasmose congênita (sorologias, fundo de olho, imagem do SNC) e tratamento conforme protocolo do MS"],
        ["Orelhinha", "Falha uni ou bilateral", "Reteste até 30 dias (com PEATE se IRDA); falha no reteste → avaliação audiológica completa até 3 meses"],
        ["Olhinho", "Reflexo ausente, opaco, branco ou assimétrico", "Oftalmologia com prioridade; leucocoria = urgência"],
        ["Coraçãozinho", "SpO₂ < 95% em qualquer membro ou diferença ≥ 3% entre mão direita e pé", "Repetir em 1 h; se confirmar, ecocardiograma em 24 h antes da alta. SpO₂ < 90%: avaliação imediata"],
        ["Linguinha", "Escore Bristol baixo (0–3) com dificuldade de amamentação", "Avaliar a mamada e encaminhar para frenotomia; escore intermediário: reavaliar com apoio à amamentação"]
      ],
      nota: "Coraçãozinho (SBP/MS): normal se SpO₂ ≥ 95% nos 2 membros e diferença < 3%. Teste negativo não exclui cardiopatia: manter exame clínico (sopro, pulsos femorais, cansaço às mamadas)."
    }
  ],
  fontes: [
    "Ministério da Saúde — Programa Nacional de Triagem Neonatal (PNTN): Triagem neonatal biológica, manual técnico (2016) e atualizações",
    "Brasil — Lei nº 14.154, de 26 de maio de 2021 (ampliação do teste do pezinho no SUS)",
    "Ministério da Saúde — Diretrizes de Atenção da Triagem Auditiva Neonatal (2012)",
    "Ministério da Saúde — Diretrizes de Atenção à Saúde Ocular na Infância (2016)",
    "Sociedade Brasileira de Pediatria — Diagnóstico precoce de cardiopatia congênita crítica: oximetria de pulso como ferramenta de triagem neonatal (2011)",
    "Ministério da Saúde — Nota Técnica nº 35/2018: avaliação do frênulo lingual em recém-nascidos (Protocolo Bristol); Lei nº 13.002/2014",
    "Ministério da Saúde — PCDT Hipotireoidismo Congênito (vigente)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

// Avaliação pré-operatória (risco cirúrgico) — cirurgia não cardíaca
registrarFicha({
  id: "avaliacao-pre-operatoria",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Avaliação pré-operatória (risco cirúrgico) e manejo de medicações",
  resumo: "Avaliação clínica antes de cirurgia não cardíaca eletiva: classificar risco (ASA, porte da cirurgia, RCRI/Lee, capacidade funcional), pedir exames só por indicação e orientar o que manter, suspender ou ajustar (anticoagulantes, antiagregantes, antidiabéticos, iSGLT2, anti-hipertensivos). Baseada na Diretriz de Avaliação Cardiovascular Perioperatória da SBC 2024.",
  palavrasChave: "avaliacao pre operatoria risco cirurgico asa rcri lee capacidade funcional mets dasi exames pre operatorios suspender medicacao anticoagulante varfarina rivaroxabana apixabana dabigatrana aas clopidogrel isglt2 dapagliflozina empagliflozina metformina insulina glp1 semaglutida corticoide sbc 2024",
  alarmes: [
    "Condição cardíaca ativa: síndrome coronariana aguda, IC descompensada, arritmia significativa (FA de alta resposta, BAV avançado, TV), valvopatia grave sintomática (estenose aórtica) — adiar cirurgia eletiva e encaminhar",
    "Angioplastia coronariana recente (stent) em dupla antiagregação: não suspender sem cardiologista",
    "Capacidade funcional < 4 METs (não sobe 2 andares) em cirurgia de risco intermediário/alto com RCRI ≥ 2",
    "Prótese valvar mecânica, TEV recente (< 3 meses) ou AVC recente: alto risco trombótico ao suspender anticoagulante",
    "Glicemia muito descontrolada, anemia importante, DRC avançada, DPOC descompensada"
  ],
  conduta: [
    "Cirurgia de urgência/emergência: não atrasar por avaliação; otimizar o possível e operar",
    "Anamnese dirigida: cardiopatia, IC, AVC, DM (insulina?), DRC, DPOC/asma, apneia do sono, sangramentos, TEV prévio, anestesias prévias (complicações, hipertermia maligna familiar), alergias, tabagismo, álcool",
    "Listar TODAS as medicações (incluir fitoterápicos e GLP-1)",
    "Exame físico: PA, FC, ritmo, sopros (estenose aórtica), congestão, via aérea, IMC",
    "Estimar capacidade funcional (subir 2 lances de escada ou ladeira sem parar ≈ ≥ 4 METs; DASI quando possível)",
    "Classificar ASA, porte/risco da cirurgia e RCRI (Lee)",
    "Baixo risco (RCRI 0–1 ou cirurgia de baixo risco) e boa capacidade funcional → liberar sem exames cardiológicos adicionais",
    "Risco elevado e capacidade < 4 METs ou desconhecida → ECG; considerar BNP/NT-proBNP e troponina basal (seguimento de troponina no pós-operatório) e encaminhar à cardiologia; teste de estresse só se mudar conduta",
    "Exames laboratoriais só por indicação clínica (tabela)",
    "Orientar manejo de medicações por escrito (tabela) e cessação do tabagismo (idealmente ≥ 4–8 semanas antes)",
    "Registrar no relatório: risco estimado, recomendações e pendências"
  ],
  exames: [
    "ECG: cardiopatia conhecida, sintomas, arritmia, ou fatores de risco em cirurgia de risco intermediário/alto (não de rotina em assintomático para cirurgia de baixo risco)",
    "Hemograma: perda sanguínea esperada significativa, anemia suspeita, doença hematológica/renal/hepática",
    "Creatinina e potássio: DRC, DM, HAS, IC, uso de diuréticos/IECA/BRA, cirurgia de maior porte, idoso",
    "Glicemia e HbA1c: diabetes conhecido ou alto risco; ADA sugere HbA1c < 8% quando possível antes de cirurgia eletiva",
    "Coagulograma (TP/INR, TTPa): anticoagulante, hepatopatia, história de sangramento",
    "Beta-hCG: mulheres em idade fértil com possibilidade de gestação",
    "RX de tórax: só se doença cardiopulmonar com sintomas novos ou descompensada",
    "Ecocardiograma: sopro sugestivo de valvopatia grave, dispneia de causa não esclarecida, IC com piora clínica",
    "Pedido pronto: Hemograma, creatinina, potássio, glicemia de jejum, HbA1c, TP/INR, TTPa, ECG de repouso — indicação: avaliação pré-operatória para [cirurgia]"
  ],
  encaminhar: [
    "Cardiologia: condição cardíaca ativa, RCRI ≥ 2 com capacidade < 4 METs em cirurgia de risco intermediário/alto, stent recente, sopro significativo",
    "Pneumologia: DPOC/asma descompensada, apneia do sono grave não tratada em cirurgia de grande porte",
    "Endocrinologia: diabetes muito descontrolado em cirurgia eletiva",
    "Anestesiologia (consulta pré-anestésica): todos os pacientes eletivos, conforme serviço"
  ],
  tabelas: [
    {
      titulo: "Classificação ASA (2020)",
      colunas: ["Classe", "Definição", "Exemplo"],
      linhas: [
        ["I", "Saudável", "Sem doença, não fumante"],
        ["II", "Doença sistêmica leve", "HAS ou DM controlados, fumante, obesidade (IMC 30–40), gestação"],
        ["III", "Doença sistêmica grave", "DM/HAS mal controlados, DPOC, IMC ≥ 40, dialítico, IAM/AVC > 3 meses, FE reduzida moderada"],
        ["IV", "Doença grave com ameaça constante à vida", "IAM/AVC/stent < 3 meses, isquemia ativa, FE muito reduzida, sepse"],
        ["V", "Moribundo, não sobrevive sem a cirurgia", "Aneurisma roto, trauma maciço"],
        ["VI", "Morte encefálica, doador de órgãos", "—"]
      ],
      nota: "Acrescentar E se cirurgia de emergência."
    },
    {
      titulo: "RCRI — Índice de Lee (1 ponto cada)",
      colunas: ["Fator", "Pontos"],
      linhas: [
        ["Cirurgia de alto risco (intraperitoneal, intratorácica, vascular suprainguinal)", "1"],
        ["Doença arterial coronariana (IAM, angina, nitrato, teste positivo, onda Q)", "1"],
        ["Insuficiência cardíaca", "1"],
        ["Doença cerebrovascular (AVC ou AIT)", "1"],
        ["Diabetes em uso de insulina", "1"],
        ["Creatinina > 2,0 mg/dL", "1"]
      ],
      nota: "0–1 ponto: baixo risco. ≥ 2: risco elevado de evento cardíaco maior → avaliar capacidade funcional e considerar biomarcadores/cardiologia. A SBC 2024 também cita outros escores (ex.: NSQIP)."
    },
    {
      titulo: "Manejo de medicações no perioperatório (resumo)",
      colunas: ["Medicação", "Conduta"],
      linhas: [
        ["Varfarina", "Suspender 5 dias antes; INR < 1,5 na véspera. Ponte com heparina só em alto risco trombótico (prótese mecânica mitral, AVC/TEV recente). Reiniciar 12–24 h após, se hemostasia"],
        ["Rivaroxabana, apixabana, edoxabana (ClCr ≥ 30)", "Baixo risco de sangramento: última dose 1 dia antes (pular 24 h). Alto risco: 2 dias antes (pular 48 h). Sem ponte. Reiniciar 24 h (baixo) ou 48–72 h (alto) após (PAUSE)"],
        ["Dabigatrana", "ClCr ≥ 50: 1 dia (baixo) / 2 dias (alto risco). ClCr 30–49: 2 dias / 4 dias"],
        ["AAS", "Manter em prevenção secundária (exceto neurocirurgia, RTU de próstata e outras de sangramento crítico); suspender 7 dias se só prevenção primária"],
        ["Clopidogrel / ticagrelor / prasugrel", "Suspender 5 / 3–5 / 7 dias antes, se liberado pelo cardiologista. Stent recente: discutir antes"],
        ["iSGLT2 (dapagliflozina, empagliflozina, canagliflozina)", "Suspender 3 dias antes (ertugliflozina 4 dias): risco de cetoacidose euglicêmica. Reiniciar quando comendo e hidratado"],
        ["Metformina", "Não tomar no dia da cirurgia; reiniciar com dieta e função renal estável"],
        ["Sulfonilureias (glibenclamida, gliclazida), iDPP4", "Não tomar no dia da cirurgia"],
        ["Insulina basal (NPH/glargina)", "Noite anterior e/ou manhã: 75–80% da dose habitual (NPH matinal: ~50%); suspender insulina prandial em jejum; glicemia capilar no perioperatório (alvo 100–180 mg/dL)"],
        ["Agonista GLP-1 (semaglutida, liraglutida, dulaglutida)", "Maioria pode manter (consenso multissocietário 2024); em alto risco de broncoaspiração ou sintomas GI, dieta líquida 24 h antes ou suspender (semanal: 1 semana; diário: no dia) conforme anestesiologista"],
        ["Betabloqueador, estatina, anlodipino", "Manter, inclusive no dia (não iniciar betabloqueador no dia da cirurgia)"],
        ["IECA / BRA", "Em geral não tomar nas 24 h antes (risco de hipotensão), sobretudo se HAS isolada; manter em IC conforme cardiologista. Reiniciar quando estável"],
        ["Diuréticos", "Não tomar no dia (exceto IC congestiva, conforme cardiologista)"],
        ["Corticoide crônico (≥ 5 mg prednisona/dia > 3 semanas)", "Manter dose habitual; dose de estresse com hidrocortisona IV conforme porte (avaliar com anestesiologista)"],
        ["Levotiroxina, anticonvulsivantes, antirretrovirais, inaladores, antidepressivos", "Manter"],
        ["Anticoncepcional / TRH com estrogênio", "Avaliar suspensão 4–6 semanas antes de cirurgia de alto risco de TEV"],
        ["Fitoterápicos (ginkgo, alho, ginseng, erva-de-são-joão)", "Suspender 7 dias antes"]
      ],
      nota: "Conferir sempre com o cirurgião e o anestesiologista. Anticoagulação: ver também ficha anticoagulacao-oral."
    }
  ],
  prescricao: {
    ambulatorial: "ORIENTAÇÕES PRÉ-OPERATÓRIAS (modelo — ajustar)\nCirurgia prevista: ______________  Data: ___/___/___\n\n1. NÃO tomar a partir de ___/___: ______________ (ex.: rivaroxabana — última dose em ___/___).\n2. NÃO tomar no dia da cirurgia: metformina, glibenclamida/gliclazida, diurético, losartana/enalapril (a partir de 24 h antes).\n3. Dapagliflozina/empagliflozina: última dose 3 dias antes (___/___).\n4. Insulina NPH na noite anterior: aplicar ___ UI (80% da dose habitual). Na manhã da cirurgia: ___ UI (metade). Não aplicar insulina regular enquanto em jejum. Medir glicemia ao acordar.\n5. TOMAR normalmente no dia, com pouco gole de água: betabloqueador (ex.: atenolol, carvedilol), estatina, anlodipino, levotiroxina, anticonvulsivante, bombinhas.\n6. Jejum conforme orientação da anestesia (em geral: comida 8 h; líquidos claros até 2 h antes).\n7. Parar de fumar o quanto antes.\n8. Levar todos os exames e a lista de remédios no dia."
  },
  orientacoesRetorno: [
    "Seguir a lista de remédios que pode e que não pode tomar antes da cirurgia; na dúvida, perguntar antes",
    "Nunca parar o AAS ou o clopidogrel por conta própria se tiver stent no coração",
    "Parar de fumar e evitar álcool antes da cirurgia ajuda na cicatrização e no pulmão",
    "Procurar atendimento antes da cirurgia se tiver dor no peito, falta de ar, febre ou infecção: a cirurgia pode precisar ser adiada",
    "Trazer exames e receitas no dia da internação"
  ],
  fontes: [
    "SBC — Diretriz de Avaliação Cardiovascular Perioperatória da Sociedade Brasileira de Cardiologia (2024)",
    "ESC — Guidelines on cardiovascular assessment and management of patients undergoing non-cardiac surgery (2022)",
    "ACC/AHA — Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery (2024)",
    "ASA — Physical Status Classification System (2020)",
    "Douketis JD et al. PAUSE trial (JAMA Intern Med, 2019); ACCP — Perioperative Management of Antithrombotic Therapy (2022)",
    "ADA — Standards of Care in Diabetes, seção Diabetes Care in the Hospital (2025); consenso multissocietário sobre GLP-1 no perioperatório (ASA/AGA/ASMBS/ISPCOP/SAGES, 2024)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

// Interpretação rápida de exames laboratoriais comuns (adulto)
registrarFicha({
  id: "exames-laboratoriais",
  especialidade: "referencia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Exames laboratoriais: interpretação rápida",
  resumo: "Tabelas de consulta rápida para hemograma, função renal e hepática, eletrólitos, gasometria e marcadores usados no PS (troponina, D-dímero, lactato, PCR e procalcitonina), com o que cada alteração sugere e qual valor é crítico.",
  palavrasChave: "exames laboratoriais valores de referencia hemograma hemoglobina vcm leucocitos neutrofilos plaquetas creatinina ureia tfg ckd epi tgo tgp ast alt fosfatase alcalina ggt bilirrubina albumina rni sodio potassio calcio magnesio gasometria anion gap troponina d dimero lactato pcr proteina c reativa procalcitonina valor critico panico",
  critico: {
    tempo: "Valor crítico: agir e repetir",
    texto: "Valores críticos (K ≥ 6,5 ou < 2,5; Na < 120 ou > 160; glicose < 54 ou > 400 mg/dL; Hb < 7 g/dL; plaquetas < 20.000; lactato ≥ 4) exigem avaliação do paciente na hora — não esperar a repetição para tratar se a clínica confirma. Sempre interpretar com o valor de referência do laboratório."
  },
  alarmes: [
    "Hipercalemia com alteração no ECG (onda T apiculada, QRS largo): tratar imediatamente (ver ficha)",
    "Sódio < 120 mmol/L com sintomas neurológicos (convulsão, rebaixamento): hiponatremia grave sintomática",
    "Lactato ≥ 4 mmol/L ou ≥ 2 com hipotensão: hipoperfusão — protocolo de sepse/choque",
    "Troponina elevada com dor torácica ou alteração do ECG: SCA até prova em contrário",
    "Bicitopenia/pancitopenia, blastos no sangue periférico, neutrófilos < 500/mm³ com febre: urgência hematológica",
    "RNI > 1,5 com bilirrubina alta e encefalopatia: insuficiência hepática aguda"
  ],
  conduta: [
    "Comparar com exames anteriores: a tendência vale mais que o valor isolado",
    "Resultado inesperado sem clínica compatível: pensar em erro pré-analítico (hemólise eleva K, LDH e TGO; coleta no braço do soro; EDTA contaminando eleva K e reduz Ca) e repetir",
    "Interpretar com a probabilidade pré-teste (ver ficha de raciocínio clínico): D-dímero e troponina só ajudam no contexto certo",
    "Usar a TFG estimada (CKD-EPI 2021, sem raça) para ajustar doses; creatinina normal não exclui perda de função em idoso ou com pouca massa muscular",
    "Valores pediátricos, de gestantes e de idosos diferem: usar referências próprias"
  ],
  tabelas: [
    {
      titulo: "Hemograma",
      colunas: ["Parâmetro", "Referência aproximada (adulto)", "Baixo sugere", "Alto sugere"],
      linhas: [
        ["Hemoglobina", "Mulher ≥ 12 g/dL; homem ≥ 13 g/dL (OMS)", "Anemia: classificar pelo VCM", "Desidratação, policitemia, DPOC, tabagismo"],
        ["VCM", "80–100 fL", "Microcítica: ferropriva, talassemia, doença crônica", "Macrocítica: B12/folato, álcool, hepatopatia, hipotireoidismo, drogas"],
        ["RDW", "Até cerca de 14,5%", "—", "Anisocitose: ferropenia (RDW alto) x talassemia (RDW normal)"],
        ["Leucócitos", "4.000–11.000/mm³", "Viroses, drogas, sepse grave, doença medular", "Infecção bacteriana, estresse, corticoide, leucemia"],
        ["Neutrófilos", "1.500–7.500/mm³", "< 500 = neutropenia grave (febre = emergência)", "Infecção, inflamação; desvio à esquerda (bastões) = infecção"],
        ["Linfócitos", "1.000–4.000/mm³", "HIV, corticoide, sepse", "Viroses, coqueluche, LLC (idoso)"],
        ["Eosinófilos", "Até 500/mm³", "—", "Alergia, parasitose, drogas, insuficiência adrenal"],
        ["Plaquetas", "150.000–450.000/mm³", "Dengue, sepse/CIVD, PTI, hiperesplenismo, heparina; < 20.000 = risco de sangramento espontâneo", "Reacional (infecção, ferropenia, pós-esplenectomia) ou mieloproliferativa"]
      ]
    },
    {
      titulo: "Função renal e eletrólitos",
      colunas: ["Exame", "Referência aproximada", "Interpretação rápida"],
      linhas: [
        ["Creatinina", "0,6–1,2 mg/dL (varia com massa muscular)", "Lesão renal aguda (KDIGO): aumento ≥ 0,3 mg/dL em 48 h ou ≥ 1,5× o basal em 7 dias, ou diurese < 0,5 mL/kg/h por 6 h"],
        ["Ureia", "15–45 mg/dL", "Relação ureia/creatinina alta: pré-renal, sangramento digestivo alto, catabolismo"],
        ["TFG (CKD-EPI 2021)", "≥ 90 mL/min/1,73 m²", "Estadiar DRC (G1–G5) se alteração > 3 meses; ajustar doses"],
        ["Sódio", "135–145 mmol/L", "Corrigir pela glicose: Na corrigido = Na + 1,6 × (glicose − 100)/100. Na crônica, corrigir no máximo 8–10 mmol/L em 24 h"],
        ["Potássio", "3,5–5,0 mmol/L", "≥ 6,0 ou alteração no ECG: tratar; < 3,0: repor e checar magnésio"],
        ["Cálcio total", "8,5–10,5 mg/dL", "Corrigir pela albumina: Ca + 0,8 × (4 − albumina); preferir cálcio iônico"],
        ["Magnésio", "1,7–2,4 mg/dL", "Baixo causa hipocalemia e hipocalcemia refratárias e arritmias"],
        ["Fósforo", "2,5–4,5 mg/dL", "Baixo: realimentação, alcoolismo, CAD em tratamento; alto: DRC, lise tumoral"]
      ],
      nota: "Referências variam entre laboratórios. Fórmulas de correção são aproximações."
    },
    {
      titulo: "Função hepática: padrões",
      colunas: ["Padrão", "Achados", "Pensar em"],
      linhas: [
        ["Hepatocelular", "TGO/TGP muito elevadas (> 5–10× o limite), FA pouco alterada", "Hepatite viral, medicamentosa (paracetamol), isquêmica (TGO/TGP > 1.000), autoimune"],
        ["Colestático", "FA e GGT elevadas, bilirrubina direta alta", "Obstrução biliar (coledocolitíase, tumor): USG; colangite se febre e icterícia"],
        ["Alcoólico", "TGO/TGP > 2, GGT alta, VCM alto", "Hepatopatia alcoólica"],
        ["Bilirrubina indireta isolada", "BI alta, enzimas normais", "Hemólise (LDH alto, haptoglobina baixa, reticulócitos altos) ou Gilbert"],
        ["Função de síntese", "Albumina baixa, RNI alargado sem anticoagulante", "Hepatopatia grave/cirrose; RNI que não corrige com vitamina K"]
      ]
    },
    {
      titulo: "Gasometria arterial (roteiro)",
      colunas: ["Passo", "Valores", "Interpretação"],
      linhas: [
        ["pH", "7,35–7,45", "< 7,35 acidemia; > 7,45 alcalemia"],
        ["PaCO2", "35–45 mmHg", "Alterada no mesmo sentido do pH: respiratório"],
        ["HCO3", "22–26 mmol/L", "Alterado no mesmo sentido do pH: metabólico"],
        ["Ânion gap", "Na − (Cl + HCO3): cerca de 8–12 (corrigir: + 2,5 para cada 1 g/dL de albumina abaixo de 4)", "Elevado: lactato, cetoacidose, uremia, intoxicações (metanol, etilenoglicol, salicilato)"],
        ["Compensação na acidose metabólica (Winter)", "PaCO2 esperada = 1,5 × HCO3 + 8 (± 2)", "PaCO2 maior que a esperada: acidose respiratória associada"],
        ["Oxigenação", "PaO2/FiO2", "< 300 lesão pulmonar; < 200 moderada; < 100 grave (Berlim)"]
      ]
    },
    {
      titulo: "Marcadores do PS",
      colunas: ["Marcador", "Quando pedir", "Como interpretar", "Cuidado"],
      linhas: [
        ["Troponina (alta sensibilidade)", "Suspeita de síndrome coronariana aguda", "Acima do percentil 99 do kit com curva de subida/queda = lesão miocárdica aguda; usar algoritmo 0/1 h ou 0/2 h do fabricante (ESC 2023)", "Eleva também em IC, TEP, sepse, DRC, miocardite: lesão não é sinônimo de infarto"],
        ["D-dímero", "Suspeita de TEP/TVP com probabilidade baixa ou intermediária (Wells/PERC)", "Negativo exclui com probabilidade baixa; corte ajustado à idade > 50 anos: idade × 10 ng/mL (FEU)", "Não pedir se alta probabilidade (ir direto à imagem); eleva em idoso, gestação, câncer, infecção, pós-operatório"],
        ["Lactato", "Sepse, choque, isquemia mesentérica, intoxicações", "≥ 2 mmol/L: hipoperfusão possível; ≥ 4: grave; repetir em 2–4 h se elevado (SSC 2021)", "Eleva com convulsão, metformina, insuficiência hepática, salbutamol/adrenalina"],
        ["PCR", "Inflamação/infecção, seguimento de tratamento", "Inespecífica; útil a tendência", "Sobe em 6–8 h e pico em 48 h; normal no início não exclui infecção"],
        ["Procalcitonina", "Ajuda a decidir início/suspensão de antibiótico em infecção respiratória e sepse", "Mais específica para infecção bacteriana que PCR; queda importante apoia suspender antibiótico", "Não deve atrasar antibiótico na sepse; eleva em trauma, cirurgia, queimadura, DRC"],
        ["BNP / NT-proBNP", "Dispneia com suspeita de IC", "Normal torna IC aguda pouco provável", "Eleva com idade e DRC; baixo na obesidade"]
      ],
      nota: "Pontos de corte de troponina e D-dímero dependem do ensaio: usar os valores do laboratório local."
    }
  ],
  prescricao: {
    hospitalar: "PEDIDOS-MODELO\n1. Hemograma completo com plaquetas.\n2. Ureia, creatinina, sódio, potássio, magnésio, cálcio iônico.\n3. TGO, TGP, fosfatase alcalina, GGT, bilirrubinas totais e frações, albumina, RNI/TP, TTPa.\n4. Gasometria arterial com lactato.\n5. Troponina de alta sensibilidade (0 h e repetir em 1–3 h conforme protocolo do kit).\n6. D-dímero (se probabilidade clínica não alta de TEP/TVP).\n7. PCR; procalcitonina (se disponível e for mudar a decisão de antibiótico).\nIndicação clínica: [ ]."
  },
  orientacoesRetorno: [
    "Trazer exames anteriores nas consultas: a comparação ajuda muito",
    "Fazer os exames de sangue no laboratório indicado, com o jejum orientado (a maioria não precisa de jejum, exceto quando o laboratório pedir)",
    "Avisar ao médico os remédios em uso (alguns alteram resultados)",
    "Se o laboratório ligar com resultado alterado, procurar atendimento no mesmo dia"
  ],
  fontes: [
    "KDIGO — Clinical Practice Guideline for Acute Kidney Injury (2012) e for CKD (2024)",
    "ESC — Guidelines for the management of acute coronary syndromes (2023)",
    "ESC — Guidelines on acute pulmonary embolism (2019)",
    "Surviving Sepsis Campaign — International Guidelines (2021)",
    "OMS — Haemoglobin concentrations for the diagnosis of anaemia (2011; atualização 2024)",
    "ARDS Definition Task Force — Berlin Definition (JAMA, 2012)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

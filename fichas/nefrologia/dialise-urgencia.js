// Indicações de diálise de urgência
registrarFicha({
  id: "dialise-urgencia",
  especialidade: "nefrologia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Diálise de urgência: indicações (AEIOU) e conduta enquanto aguarda",
  resumo: "Quando chamar a nefrologia para diálise de urgência em LRA ou DRC: complicações que ameaçam a vida e não respondem ao tratamento clínico. Mnemônico AEIOU: Acidose, Eletrólitos, Intoxicação, Overload (congestão), Uremia.",
  palavrasChave: "dialise de urgencia hemodialise aeiou indicacao de dialise terapia renal substitutiva trs cateter de dialise shilley hipercalemia refrataria acidose uremia pericardite uremica congestao intoxicacao litio metanol",
  critico: {
    tempo: "Ligar para nefrologia já",
    texto: "Indicação presente: acionar nefrologia/regulação imediatamente e tratar clinicamente enquanto aguarda (o tempo até a diálise costuma ser de horas). Hipercalemia com ECG alterado: cálcio IV agora."
  },
  alarmes: [
    "Hipercalemia ≥ 6,5 mEq/L ou com ECG alterado que não responde ao tratamento clínico",
    "Acidose metabólica grave refratária (ex.: pH < 7,1–7,15)",
    "Edema agudo de pulmão / congestão sem resposta a diurético",
    "Pericardite urêmica (atrito, dor torácica), encefalopatia urêmica (confusão, asterixe, convulsão), sangramento urêmico",
    "Intoxicação dialisável grave"
  ],
  conduta: [
    "Confirmar a indicação (tabela AEIOU) e acionar nefrologia; se não houver no serviço, regulação para unidade com hemodiálise",
    "Hipercalemia: gluconato de cálcio 10% IV + insulina regular 10 UI com glicose + salbutamol inalatório; furosemida se urina; ver ficha hipercalemia",
    "Acidose: bicarbonato de sódio 8,4% se pH < 7,1–7,2 e sem congestão importante",
    "Congestão: O₂ / VNI (CPAP/BiPAP), cabeceira elevada, nitrato se PA permite, furosemida em dose alta (80–200 mg IV) — ausência de resposta reforça a diálise",
    "Intoxicação: medidas de suporte e antídotos (fomepizol/etanol no metanol e etilenoglicol), contato com CIATox (0800 722 6001)",
    "Pericardite urêmica: evitar anticoagulação; ecocardiograma (derrame, tamponamento)",
    "Acesso para diálise: cateter duplo lúmen de curta permanência, preferir veia jugular interna direita (depois femoral); preservar veias do braço não dominante em DRC (não puncionar)",
    "Pedir antes: hemograma, coagulograma, tipagem, sorologias para hepatite B, C e HIV (exigência do serviço de diálise), K, gasometria, ureia, creatinina, Ca, P"
  ],
  exames: [
    "Potássio, sódio, gasometria venosa, ureia, creatinina, cálcio, fósforo, magnésio",
    "ECG de 12 derivações (hipercalemia, pericardite)",
    "Hemograma, coagulograma, sorologias HBsAg, anti-HCV, anti-HIV",
    "RX de tórax (congestão); ecocardiograma se suspeita de derrame pericárdico",
    "Intoxicação: nível sérico (lítio, salicilato), osmolalidade sérica medida e gap osmolar, lactato"
  ],
  diferenciais: [
    "Pré-renal ou obstrução corrigível (volume, sonda) antes de indicar diálise",
    "Pseudo-hipercalemia (hemólise da amostra) — repetir se ECG normal e sem causa"
  ],
  tratamento: [
    {
      droga: "Gluconato de cálcio 10%",
      linha: "l1",
      dose: "30 mL (3 g)",
      via: "IV em 10 min, diluído em 100 mL de SF 0,9%",
      intervalo: "Repetir se ECG não melhorar",
      duracao: "Efeito 30–60 min",
      monitorizacao: "ECG contínuo",
      contraindicacoes: "Cautela com digoxina",
      ajustes: "Ver ficha hipercalemia"
    },
    {
      droga: "Insulina regular + glicose",
      linha: "l1",
      dose: "10 UI de insulina regular + glicose 50% 50 mL (ou SG 10% 250 mL se glicemia < 250)",
      via: "IV",
      intervalo: "Pode repetir após 2–4 h",
      duracao: "Efeito 4–6 h",
      monitorizacao: "Glicemia capilar de 1/1 h por 4–6 h (hipoglicemia é comum na DRC)",
      contraindicacoes: "—",
      ajustes: "DRC: considerar 5 UI ou infusão de glicose após para evitar hipoglicemia"
    },
    {
      droga: "Bicarbonato de sódio 8,4%",
      linha: "adj",
      dose: "100–150 mEq (100–150 mL)",
      via: "IV em 1–2 h",
      intervalo: "Conforme gasometria",
      duracao: "Ponte até diálise",
      monitorizacao: "Gasometria, Na, Ca iônico, congestão",
      contraindicacoes: "Congestão grave, hipernatremia, hipocalcemia sintomática",
      ajustes: "Útil na hipercalemia com acidose metabólica"
    },
    {
      droga: "Furosemida (teste e tratamento da congestão)",
      linha: "adj",
      dose: "80–200 mg (1–1,5 mg/kg no 'teste de estresse')",
      via: "IV",
      intervalo: "Avaliar diurese em 2–6 h",
      duracao: "—",
      monitorizacao: "Diurese < 200 mL em 2 h após 1–1,5 mg/kg sugere LRA grave e provável necessidade de diálise",
      contraindicacoes: "Hipovolemia, anúria conhecida (sem efeito)",
      ajustes: "—"
    }
  ],
  prescricao: {
    hospitalar: "AGUARDANDO DIÁLISE DE URGÊNCIA — ADULTO\n1. Dieta zero ou restrita em K e líquidos (restrição hídrica ___ mL/dia).\n2. Monitor cardíaco contínuo, oximetria, cabeceira elevada.\n3. Se K ≥ 6,5 ou ECG alterado: gluconato de cálcio 10% 30 mL + SF 0,9% 100 mL IV em 10 min; insulina regular 10 UI + glicose 50% 50 mL IV em 15 min; salbutamol 10–20 mg nebulizado (2,5 mL da solução 5 mg/mL = 12,5 mg) em 10 min.\n4. Se pH < 7,1–7,2 sem congestão: bicarbonato de sódio 8,4% 100 mL IV em 1 h.\n5. Se congestão: O₂ / VNI; furosemida 120 mg IV; nitroglicerina IV se PAS > 110 mmHg.\n6. Após insulina: glicemia capilar de 1/1 h por 6 h.\n7. Não puncionar veias do braço não dominante em DRC (futura fístula).\n8. Colher: hemograma, coagulograma, HBsAg, anti-HCV, anti-HIV, K, gasometria, ureia, creatinina, Ca, P.\n9. Contato com nefrologia/regulação: ___ (hora: ___).\n10. Controles: K e gasometria de 2/2 h a 4/4 h; diurese horária; ECG."
  },
  orientacoesRetorno: [
    "Explicar ao paciente e à família que a diálise é necessária para retirar o excesso de potássio, ácido, líquido ou toxinas, e que pode ser temporária na lesão aguda",
    "Pacientes em diálise: não faltar às sessões; controlar líquidos e alimentos ricos em potássio",
    "Voltar imediatamente se falta de ar, fraqueza intensa, palpitação, confusão ou dor no peito"
  ],
  encaminhar: [
    "Nefrologia/serviço de hemodiálise imediatamente quando houver qualquer critério AEIOU refratário",
    "UTI se instabilidade hemodinâmica (preferir método contínuo ou híbrido)"
  ],
  tabelas: [
    {
      titulo: "AEIOU — indicações de diálise de urgência",
      colunas: ["Letra", "Indicação", "Observação"],
      linhas: [
        ["A", "Acidose metabólica grave refratária", "Ex.: pH < 7,1–7,15, sobretudo se não tolera bicarbonato (congestão)"],
        ["E", "Eletrólitos: hipercalemia refratária", "K ≥ 6,5 ou ECG alterado sem resposta, ou com lise/rabdomiólise contínuas"],
        ["I", "Intoxicação dialisável", "Lítio, metanol, etilenoglicol, salicilato, metformina com acidose láctica grave, valproato, teofilina, barbitúricos (ver CIATox)"],
        ["O", "Overload: hipervolemia refratária", "EAP ou congestão sem resposta a diurético"],
        ["U", "Uremia sintomática", "Pericardite, encefalopatia, neuropatia, sangramento urêmico"]
      ],
      nota: "Não há valor de ureia ou creatinina isolado que indique diálise; a decisão é clínica (KDIGO 2012)."
    }
  ],
  fontes: [
    "KDIGO — Clinical Practice Guideline for Acute Kidney Injury (Kidney Int Suppl, 2012)",
    "EXTRIP Workgroup — recomendações de tratamento extracorpóreo em intoxicações (2015–2023)",
    "STARRT-AKI Investigators (NEJM, 2020) e Gaudry S et al. — AKIKI 2 (Lancet, 2021): momento de início da diálise na LRA"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

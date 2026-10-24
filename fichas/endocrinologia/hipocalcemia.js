// Hipocalcemia
registrarFicha({
  id: "hipocalcemia",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Hipocalcemia",
  resumo: "Cálcio corrigido < 8,5 mg/dL ou cálcio iônico baixo. Sintomas: parestesia perioral e de extremidades, câimbras, tetania (Chvostek, Trousseau), laringoespasmo, convulsão, QT longo. Causas comuns: pós-tireoidectomia/paratireoidectomia, hipomagnesemia, deficiência de vitamina D, DRC, pancreatite, transfusão maciça.",
  palavrasChave: "hipocalcemia calcio baixo tetania chvostek trousseau hipoparatireoidismo pos tireoidectomia gluconato de calcio carbonato de calcio calcitriol vitamina d magnesio qt longo fome ossea",
  critico: {
    tempo: "Gluconato de cálcio IV se tetania",
    texto: "Sintomas graves (tetania, laringoespasmo, convulsão, QT longo ou arritmia) ou Ca corrigido < 7,5 mg/dL: gluconato de cálcio 10% 10–20 mL IV em 10–20 min, depois infusão contínua. Corrigir magnésio junto."
  },
  alarmes: [
    "Tetania, laringoespasmo, broncoespasmo",
    "Convulsão",
    "QT longo, arritmia, IC",
    "Ca corrigido < 7,5 mg/dL ou cálcio iônico < 0,8 mmol/L (≈ 3,2 mg/dL)",
    "Hipocalcemia nas primeiras 24–48 h após tireoidectomia ou paratireoidectomia"
  ],
  condutaInicial: [
    "Confirmar com cálcio iônico (ou corrigido pela albumina)",
    "ECG (QTc), monitor se sintomática",
    "Dosar magnésio, fósforo, creatinina, PTH, 25-OH vitamina D",
    "Sintomática grave: gluconato de cálcio 10% 10–20 mL em 50–100 mL de SG 5% IV em 10–20 min; repetir se persistir",
    "Seguir com infusão contínua de cálcio até controle e início de cálcio VO (± calcitriol)",
    "Hipomagnesemia: repor magnésio (sem isso o cálcio não corrige)",
    "Assintomática e leve: cálcio VO + vitamina D conforme causa"
  ],
  fataisExcluir: [
    "Laringoespasmo pós-tireoidectomia",
    "Hipomagnesemia grave associada",
    "Pancreatite aguda grave, sepse, rabdomiólise, síndrome de lise tumoral",
    "Hipocalcemia por transfusão maciça (citrato)"
  ],
  proximaDecisao: "Controle dos sintomas → reduzir infusão e transicionar para carbonato de cálcio VO; hipoparatireoidismo ou DRC → associar calcitriol. Alvo no hipoparatireoidismo: Ca no limite inferior da normalidade (8–8,5 mg/dL), sem sintomas, evitando hipercalciúria.",
  clinica: {
    anamnese: [
      "Cirurgia de tireoide, paratireoide ou pescoço (recente ou antiga)",
      "Diarreia crônica, má absorção, cirurgia bariátrica, etilismo (Mg baixo)",
      "DRC, pancreatite, sepse, transfusões",
      "Medicamentos: bisfosfonato, denosumabe, cinacalcete, foscarnet, diuréticos de alça, inibidor de bomba de prótons (Mg baixo)",
      "Parestesias, câimbras, espasmos, convulsões"
    ],
    exameFisico: [
      "Sinal de Chvostek (contração facial à percussão do nervo facial)",
      "Sinal de Trousseau (espasmo carpal com manguito acima da PA sistólica por 3 min)",
      "Estridor, broncoespasmo",
      "Cicatriz cervical, catarata, pele seca (hipoparatireoidismo crônico)"
    ],
    diferenciais: [
      { dx: "Pseudo-hipocalcemia", pista: "Albumina baixa com cálcio iônico normal" },
      { dx: "Alcalose respiratória (hiperventilação)", pista: "Parestesias com Ca total normal; Ca iônico cai com alcalose" },
      { dx: "Hipomagnesemia", pista: "Mg < 1,2 mg/dL; PTH inapropriadamente baixo" },
      { dx: "Síndrome da fome óssea", pista: "Após paratireoidectomia; P e Mg também baixos" }
    ],
    gravidade: [
      "Leve: Ca corrigido 7,5–8,4 mg/dL, sem sintomas ou só parestesia",
      "Grave: Ca < 7,5 mg/dL, Ca iônico < 0,8 mmol/L, tetania, convulsão, QT longo — tratar IV",
      "Velocidade de queda importa mais que o valor absoluto"
    ]
  },
  exames: [
    {
      nome: "Cálcio iônico e corrigido",
      pedido: "Cálcio total, albumina, cálcio iônico, fósforo, magnésio.",
      porQue: "Confirmar e orientar a causa.",
      esperar: "Ca corrigido < 8,5 mg/dL.",
      interpretacao: "Ca corrigido = Ca + 0,8 × (4 − albumina). P alto: hipoparatireoidismo, DRC, lise. P baixo: deficiência de vitamina D, fome óssea.",
      limitacoes: "Correção pela albumina imprecisa em doentes graves; preferir iônico."
    },
    {
      nome: "PTH e vitamina D",
      pedido: "PTH intacto, 25-OH vitamina D, creatinina.",
      porQue: "Diferenciar hipoparatireoidismo de causas com PTH alto.",
      esperar: "—",
      interpretacao: "PTH baixo/normal com Ca baixo → hipoparatireoidismo (ou Mg baixo). PTH alto → vitamina D baixa, DRC, resistência ao PTH.",
      limitacoes: "—"
    },
    {
      nome: "ECG",
      pedido: "ECG de 12 derivações com medida do QTc.",
      porQue: "QT longo e risco de arritmia.",
      esperar: "QTc prolongado.",
      interpretacao: "QT longo → tratamento IV com monitor.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Gluconato de cálcio 10% — ataque",
      linha: "l1",
      dose: "10–20 mL (1–2 g; 93–186 mg de cálcio elementar)",
      via: "IV, diluído em 50–100 mL de SG 5% ou SF 0,9%, em 10–20 min",
      intervalo: "Repetir após 10–60 min se sintomas persistirem",
      duracao: "—",
      monitorizacao: "ECG contínuo, local da punção",
      contraindicacoes: "Uso de digoxina (risco de arritmia: infundir mais lento, monitor)",
      ajustes: "Não infundir na mesma via que bicarbonato ou fosfato (precipita). Extravasamento causa necrose"
    },
    {
      droga: "Gluconato de cálcio 10% — infusão contínua",
      linha: "l1",
      dose: "0,5–1,5 mg/kg/h de cálcio elementar. Ex.: 100 mL (10 ampolas de 10 mL) em 900 mL de SG 5% ≈ 0,9 mg/mL de cálcio elementar; iniciar 50 mL/h",
      via: "IV em bomba",
      intervalo: "Contínuo",
      duracao: "Até Ca estável e cálcio VO em dose eficaz",
      monitorizacao: "Ca (iônico) de 4/4 h a 6/6 h; ajustar para Ca no limite inferior da normalidade",
      contraindicacoes: "—",
      ajustes: "Preferir acesso central se infusão prolongada ou concentrada. Cloreto de cálcio 10% tem 3× mais cálcio por mL: só em acesso central (PCR, hipercalemia)"
    },
    {
      droga: "Sulfato de magnésio",
      linha: "l1",
      dose: "1–2 g IV em 15–60 min se Mg baixo; depois conforme ficha de magnésio",
      via: "IV",
      intervalo: "Conforme Mg",
      duracao: "Até Mg normal",
      monitorizacao: "Mg, reflexos, função renal",
      contraindicacoes: "Insuficiência renal grave (dose reduzida)",
      ajustes: "Ver ficha disturbios-magnesio"
    },
    {
      droga: "Carbonato de cálcio",
      linha: "l1",
      dose: "1–2 g de cálcio elementar/dia (500 mg de carbonato = 200 mg de Ca elementar; 1.250 mg = 500 mg)",
      via: "VO",
      intervalo: "Dividido em 2–3 tomadas, com as refeições",
      duracao: "Conforme causa",
      monitorizacao: "Ca, P, Ca urinário (hipoparatireoidismo)",
      contraindicacoes: "Hipercalcemia",
      ajustes: "Absorção menor com IBP/acloridria (citrato de cálcio é alternativa). Separar de levotiroxina e ferro por 4 h"
    },
    {
      droga: "Calcitriol",
      linha: "l1",
      dose: "0,25–0,5 µg (ajustar)",
      via: "VO",
      intervalo: "1–2×/dia",
      duracao: "Hipoparatireoidismo e DRC: contínuo",
      monitorizacao: "Ca e P semanal no início; Ca urinário",
      contraindicacoes: "Hipercalcemia",
      ajustes: "Necessário no hipoparatireoidismo (sem PTH não há ativação da vitamina D). Efeito em 1–3 dias. RENAME"
    },
    {
      droga: "Colecalciferol (vitamina D3)",
      linha: "l1",
      dose: "Deficiência: 50.000 UI/semana por 8 semanas (ou 7.000 UI/dia), depois manutenção 1.000–2.000 UI/dia",
      via: "VO",
      intervalo: "Semanal ou diário",
      duracao: "8 semanas + manutenção",
      monitorizacao: "25-OH vitamina D após 3 meses",
      contraindicacoes: "Hipercalcemia",
      ajustes: "Para hipocalcemia por deficiência de vitamina D (não substitui calcitriol no hipoparatireoidismo)"
    }
  ],
  destino: {
    agora: ["Sintomática grave: cálcio IV com monitor", "Corrigir Mg"],
    reavaliar: ["Ca iônico de 4/4 h a 6/6 h em infusão", "ECG", "Pós-tireoidectomia: Ca/PTH em 6–24 h"],
    alta: ["Assintomática, Ca estável com cálcio VO ± calcitriol, retorno em 1 semana com exames", "Endocrinologia para hipoparatireoidismo"],
    observacao: ["Leve com sintomas discretos, causa clara e resposta a cálcio VO"],
    internacao: ["Tetania, convulsão, QT longo, Ca < 7,5 mg/dL, necessidade de infusão contínua"],
    transferencia: ["—"]
  },
  prescricao: {
    hospitalar: "HIPOCALCEMIA SINTOMÁTICA — ADULTO (peso: ___ kg)\n1. Dieta livre (rica em cálcio).\n2. Monitor cardíaco; ECG.\n3. Gluconato de cálcio 10% 20 mL (2 ampolas) + SG 5% 100 mL IV em 20 min AGORA. Repetir se tetania persistir.\n4. Infusão: gluconato de cálcio 10% 100 mL (10 ampolas) + SG 5% 900 mL IV em bomba a 50 mL/h (≈ 45 mg/h de cálcio elementar); ajustar entre 0,5–1,5 mg/kg/h conforme Ca.\n5. Se Mg < 1,8 mg/dL: sulfato de magnésio 50% 4 mL (2 g) + SF 0,9% 100 mL IV em 1 h.\n6. Carbonato de cálcio 1.250 mg (500 mg de Ca elementar) VO de 8/8 h com as refeições.\n7. Calcitriol 0,25 µg VO de 12/12 h (se hipoparatireoidismo ou DRC).\n8. Não infundir cálcio na mesma via de bicarbonato ou fosfato.\n9. Controles: Ca iônico (ou total + albumina) de 6/6 h, Mg e P de 12/12 h a 24/24 h, ECG diário.",
    ambulatorial: "HIPOCALCEMIA LEVE / HIPOPARATIREOIDISMO (ajustar à causa)\nUSO ORAL\n1. Carbonato de cálcio 1.250 mg (500 mg de cálcio) ---- 90 comprimidos\n   Tomar 1 comprimido 3 vezes ao dia, junto com as refeições.\n2. Calcitriol 0,25 µg (hipoparatireoidismo/DRC) -------- 60 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas.\n3. Colecalciferol 50.000 UI (se vitamina D baixa) ------- 8 cápsulas\n   Tomar 1 cápsula por semana por 8 semanas.\n\nExames em 1 semana: cálcio, albumina, fósforo, magnésio, creatinina."
  },
  orientacoesRetorno: [
    "Tomar o cálcio junto com as refeições, separado da levotiroxina e do sulfato ferroso (4 horas)",
    "Voltar imediatamente se formigamento na boca ou nas mãos, câimbras fortes, mãos 'travadas', falta de ar ou convulsão",
    "Também voltar se muita sede, náusea ou prisão de ventre (cálcio alto pelo tratamento)",
    "Exames de controle em 1 semana e consulta com endocrinologia"
  ],
  fontes: [
    "European Society of Endocrinology — Clinical guideline: Treatment of chronic hypoparathyroidism in adults (Eur J Endocrinol, 2015)",
    "Second International Workshop on Hypoparathyroidism — International guidelines for the management of chronic hypoparathyroidism (JBMR, 2022)",
    "Society for Endocrinology — Endocrine emergency guidance: Emergency management of acute hypocalcaemia in adult patients (Endocrine Connections, 2016)",
    "SBEM — Recomendações da Sociedade Brasileira de Endocrinologia e Metabologia para o diagnóstico e tratamento da hipovitaminose D (Arq Bras Endocrinol Metab, 2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

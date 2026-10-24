// Distúrbios do magnésio: hipo e hipermagnesemia
registrarFicha({
  id: "disturbios-magnesio",
  especialidade: "endocrinologia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Hipomagnesemia e hipermagnesemia",
  resumo: "Hipomagnesemia (Mg < 1,7–1,8 mg/dL): comum em etilistas, diarreia, diuréticos, IBP, desnutrição; causa hipocalemia e hipocalcemia refratárias, arritmias (torsades). Hipermagnesemia: quase sempre DRC/LRA com uso de Mg (antiácido, laxante) ou sulfato de magnésio na pré-eclâmpsia.",
  palavrasChave: "magnesio hipomagnesemia hipermagnesemia sulfato de magnesio torsades de pointes eclampsia ibp omeprazol etilismo diarreia gluconato de calcio reflexo patelar",
  critico: {
    tempo: "Torsades: MgSO₄ 2 g IV",
    texto: "Torsades de pointes ou arritmia com Mg baixo: sulfato de magnésio 2 g IV em 5–15 min. Hipermagnesemia com arreflexia, depressão respiratória ou BAV: gluconato de cálcio 10% IV e suspender o magnésio."
  },
  alarmes: [
    "Torsades de pointes, arritmia ventricular, QT longo",
    "Convulsão ou tetania (hipomagnesemia grave, geralmente < 1,2 mg/dL)",
    "Hipermagnesemia: perda dos reflexos profundos, sonolência, hipotensão, bradicardia, depressão respiratória",
    "Gestante em sulfato de magnésio com FR < 12–16 irpm, diurese < 25–30 mL/h ou reflexo patelar abolido",
    "Insuficiência renal recebendo magnésio"
  ],
  conduta: [
    "Dosar Mg junto com K, Ca, P e creatinina em todo paciente com hipocalemia ou hipocalcemia refratária",
    "ECG (QT) nos sintomáticos",
    "Hipomagnesemia grave ou sintomática (arritmia, tetania, convulsão): sulfato de magnésio IV; instável/torsades: 2 g em 5–15 min",
    "Hipomagnesemia sem sintomas graves: 2–4 g IV lentamente (absorção e retenção melhores em infusão lenta) ou VO se leve",
    "Insuficiência renal: reduzir a dose de Mg à metade e dosar com frequência",
    "Suspender a causa: IBP de longo prazo, diuréticos se possível, álcool; repor também K e Ca",
    "Hipermagnesemia: suspender toda fonte de Mg; sintomática → gluconato de cálcio 10% 10–20 mL IV em 10 min",
    "Hipermagnesemia com função renal preservada: SF 0,9% + furosemida; com DRC/LRA grave ou sintomas graves → hemodiálise"
  ],
  exames: [
    "Magnésio sérico, potássio, cálcio (iônico), fósforo, creatinina",
    "ECG de 12 derivações",
    "Se causa incerta: magnésio urinário (fração de excreção de Mg > 2–4% com Mg baixo sugere perda renal)"
  ],
  diferenciais: [
    "Hipomagnesemia por perda GI (diarreia, má absorção, IBP) × renal (diuréticos, álcool, cisplatina, aminoglicosídeo, anfotericina, Gitelman)",
    "Síndrome de realimentação (P, K e Mg caem juntos)",
    "Hipermagnesemia iatrogênica (sulfato de magnésio na pré-eclâmpsia, laxantes e antiácidos com Mg em DRC)"
  ],
  tratamento: [
    {
      droga: "Sulfato de magnésio 50% (ampola 10 mL = 5 g = 40 mEq) ou 10% (ampola 10 mL = 1 g = 8 mEq)",
      linha: "l1",
      dose: "Torsades/instável: 2 g em 5–15 min · Grave sintomático estável: 1–2 g em 15–60 min, seguido de 4–8 g em 12–24 h · Assintomático: 2–4 g em 4–12 h",
      via: "IV, diluído em SF 0,9% ou SG 5%",
      intervalo: "Conforme Mg (dosar após cada 4–6 g ou de 12/12 h)",
      duracao: "Em geral 2–5 dias para repor estoques",
      monitorizacao: "Mg, reflexo patelar, FR, PA; K e Ca",
      contraindicacoes: "Insuficiência renal grave (reduzir a dose em 50% e monitorar), BAV, miastenia",
      ajustes: "Infusão rápida aumenta a perda urinária: preferir lenta se estável. Ruborização e calor durante a infusão são comuns"
    },
    {
      droga: "Magnésio oral (cloreto, óxido, pidolato ou outro sal)",
      linha: "l1",
      dose: "Dose de magnésio elementar conforme a apresentação, dividida em 2–3 tomadas",
      via: "VO",
      intervalo: "2–3×/dia",
      duracao: "Semanas, até Mg normal e causa corrigida",
      monitorizacao: "Mg em 1–2 semanas",
      contraindicacoes: "DRC avançada",
      ajustes: "Diarreia limita a dose (doses fracionadas e liberação lenta toleram melhor). Conferir mg de magnésio elementar no rótulo"
    },
    {
      droga: "Gluconato de cálcio 10% (hipermagnesemia sintomática)",
      linha: "l1",
      dose: "10–20 mL (1–2 g)",
      via: "IV em 5–10 min",
      intervalo: "Repetir se necessário",
      duracao: "Ponte até diálise ou eliminação renal",
      monitorizacao: "ECG, FR, reflexos",
      contraindicacoes: "Cautela com digoxina",
      ajustes: "Antagoniza os efeitos cardíacos e neuromusculares do Mg"
    },
    {
      droga: "Furosemida + SF 0,9% (hipermagnesemia com rim funcionante)",
      linha: "adj",
      dose: "Furosemida 20–40 mg IV + hidratação",
      via: "IV",
      intervalo: "Conforme resposta",
      duracao: "—",
      monitorizacao: "Mg, K, Ca, volemia",
      contraindicacoes: "Hipovolemia",
      ajustes: "Com DRC/LRA grave ou sintomas graves: hemodiálise"
    }
  ],
  prescricao: {
    hospitalar: "HIPOMAGNESEMIA SINTOMÁTICA — ADULTO\n1. Monitor cardíaco se arritmia ou QT longo.\n2. Torsades / instável: sulfato de magnésio 50% 4 mL (2 g) + SF 0,9% 20 mL IV em 5–15 min.\n3. Estável sintomático: sulfato de magnésio 50% 4 mL (2 g) + SF 0,9% 100 mL IV em 1 h; depois sulfato de magnésio 50% 12 mL (6 g) + SF 0,9% 500 mL IV em 12–24 h.\n4. Insuficiência renal: metade da dose e Mg de 6/6 h.\n5. Repor K e Ca conforme exames (ver fichas hipocalemia e hipocalcemia).\n6. Tiamina 300 mg IV/VO 1×/dia se etilista ou desnutrido.\n7. Controles: Mg de 12/12 h, K, Ca, reflexos patelares e FR a cada 4 h durante a infusão.\n\nHIPERMAGNESEMIA SINTOMÁTICA\n1. Suspender sulfato de magnésio, laxantes e antiácidos com magnésio.\n2. Gluconato de cálcio 10% 10–20 mL + SF 0,9% 100 mL IV em 10 min.\n3. Se diurese preservada: SF 0,9% 500 mL/h por 1–2 h (avaliar congestão) + furosemida 40 mg IV.\n4. DRC/LRA ou sintomas graves: contato com nefrologia para hemodiálise.\n5. Suporte ventilatório se depressão respiratória.",
    ambulatorial: "HIPOMAGNESEMIA LEVE (assintomática)\nUSO ORAL\n1. Sal de magnésio (ex.: cloreto ou pidolato de magnésio) ---- 1 frasco/caixa\n   Tomar a dose indicada no rótulo, dividida em 2–3 vezes ao dia, com as refeições, por 4 semanas.\n\nORIENTAÇÕES\n- Rever necessidade de omeprazol/pantoprazol e diuréticos; reduzir álcool.\n- Magnésio, potássio e cálcio de controle em 2–4 semanas."
  },
  orientacoesRetorno: [
    "Tomar o magnésio com comida e em doses divididas para evitar diarreia",
    "Evitar álcool; não usar laxante ou antiácido com magnésio se tiver problema nos rins",
    "Voltar se palpitação, desmaio, câimbras fortes, tremores ou convulsão",
    "Exames de controle no prazo combinado"
  ],
  encaminhar: [
    "Nefrologia: hipomagnesemia por perda renal sem causa clara, ou hipermagnesemia em DRC",
    "Gastroenterologia: má absorção crônica"
  ],
  fontes: [
    "AHA — Guidelines for CPR and ECC: Adult Advanced Life Support (2020, atualização 2023/2025) — sulfato de magnésio na torsades de pointes",
    "Ministério da Saúde / FEBRASGO — Pré-eclâmpsia: protocolo de sulfato de magnésio e toxicidade (2019–2023)",
    "Ahmed F, Mohammed A — Magnesium: The Forgotten Electrolyte — A Review on Hypomagnesemia (Med Sci, 2019)",
    "Ministério da Saúde — RENAME 2024 (sulfato de magnésio 10% e 50%)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

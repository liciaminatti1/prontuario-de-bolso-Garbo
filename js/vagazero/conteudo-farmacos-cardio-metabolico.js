/* Vaga Zero — conteudo-farmacos-cardio-metabolico. Formato em docs/VAGA-ZERO.md.
   Vasoativos, antiarrítmicos, corticoides, broncodilatadores, diuréticos/vasodilatadores, metabólicos, volume e alprostadil.
   Doses conferidas com AHA ACLS/PALS 2020 (e atualização 2025), SBP PRN 2022, SSC 2021, GINA, ADA/ISPAD e bulas ANVISA.
   Onde não há número validado, o texto diz "conforme protocolo institucional". */

(function () {
const VZ_FONTE_ACLS = "AHA — Guidelines for CPR and ECC: Adult Advanced Life Support (2020) e atualização (2025)";
const VZ_FONTE_PALS = "AHA — Guidelines for CPR and ECC: Pediatric Advanced Life Support (2020) e atualização (2025)";
const VZ_FONTE_SBP = "SBP — Programa de Reanimação Neonatal: reanimação do recém-nascido ≥ 34 semanas e < 34 semanas (2022)";
const VZ_FONTE_SAMU = "Ministério da Saúde — Protocolos de Intervenção para o SAMU 192: Suporte Avançado de Vida (2016)";

VZ_FARMACOS.push(
  /* ---------------------------------------------------------------- ADRENALINA */
  {
    id: "adrenalina", nome: "Adrenalina (epinefrina)",
    categorias: ["pcr", "anafilaxia", "vasoativa", "broncoespasmo", "choque", "neonatal"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Ampola 1 mg/mL (1 mL) — solução 1:1.000", conc: 1, unidade: "mg/mL", volume: 1 },
      { rotulo: "Solução 0,1 mg/mL (1:10.000) — preparar: 1 mL da ampola + 9 mL de SF 0,9%", conc: 0.1, unidade: "mg/mL", volume: 10 }
    ],
    indicacoes: [
      { id: "pcr-adulto", rotulo: "PCR — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 1, unidade: "mg" }, doseMax: { valor: 1, unidade: "mg" },
        diluicao: "Sem diluição (1 mL da ampola 1 mg/mL); seguir com flush de 20 mL de SF 0,9% e elevar o membro",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus rápido", repeticao: "A cada 3–5 min durante a PCR",
        observacoes: "Ritmo não chocável: dar o mais cedo possível. Ritmo chocável: após a 2ª tentativa de desfibrilação. Durante o transporte, PCR exige parar a ambulância para RCP de qualidade." },
      { id: "pcr-pediatrica", rotulo: "PCR — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.01, max: 0.01, unidade: "mg/kg" }, doseMax: { valor: 1, unidade: "mg" },
        diluicao: "Usar a solução 0,1 mg/mL (1 mL da ampola + 9 mL SF): 0,1 mL/kg. Flush de 5–10 mL de SF",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus rápido", repeticao: "A cada 3–5 min durante a PCR",
        observacoes: "Máximo 1 mg por dose. Via endotraqueal só se não houver IV/IO: 0,1 mg/kg (0,1 mL/kg da ampola 1 mg/mL), conforme PALS. Ritmo não chocável: dar o mais cedo possível." },
      { id: "reanimacao-neonatal-iv", rotulo: "Reanimação neonatal — IV (cateter umbilical)", faixa: "neonatal", modo: "bolus",
        dose: { min: 0.02, max: 0.02, unidade: "mg/kg" }, doseMax: { valor: 0.03, unidade: "mg/kg" },
        diluicao: "Solução 0,1 mg/mL (1 mL da ampola + 9 mL SF): 0,2 mL/kg. Flush com 3 mL de SF",
        diluicaoPadrao: null, via: "IV (veia umbilical) ou IO", velocidade: "Bolus rápido",
        repeticao: "A cada 3–5 min se FC < 60 bpm após 60 s de VPP com O₂ e compressões coordenadas",
        observacoes: "SBP 2022: indicação quando FC < 60 bpm apesar de ventilação adequada com O₂ a 100% e massagem cardíaca. Faixa aceita 0,01–0,03 mg/kg. Se não houver melhora, considerar hipovolemia (SF 10 mL/kg)." },
      { id: "reanimacao-neonatal-et", rotulo: "Reanimação neonatal — endotraqueal", faixa: "neonatal", modo: "bolus",
        dose: { min: 0.05, max: 0.1, unidade: "mg/kg" }, doseMax: { valor: 0.1, unidade: "mg/kg" },
        diluicao: "Solução 0,1 mg/mL (1 mL da ampola + 9 mL SF): 0,5–1 mL/kg",
        diluicaoPadrao: null, via: "Endotraqueal (cânula)", velocidade: "Instilar e seguir com VPP",
        repeticao: "Dose única pela cânula; se sem resposta, a próxima deve ser IV/IO (não repetir endotraqueal)",
        observacoes: "SBP 2022: via endotraqueal apenas enquanto se obtém o cateter umbilical. Absorção errática." },
      { id: "anafilaxia-im-adulto", rotulo: "Anafilaxia — IM adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.3, max: 0.5, unidade: "mg" }, doseMax: { valor: 0.5, unidade: "mg" },
        diluicao: "Sem diluição: ampola 1 mg/mL (0,3–0,5 mL)",
        diluicaoPadrao: null, via: "IM na face anterolateral da coxa (vasto lateral)", velocidade: "Injeção IM",
        repeticao: "A cada 5–15 min se não houver melhora",
        observacoes: "Primeira linha na anafilaxia; não atrasar por anti-histamínico ou corticoide. Se refratária após 2–3 doses IM, iniciar infusão IV contínua com monitorização." },
      { id: "anafilaxia-im-pediatrica", rotulo: "Anafilaxia — IM pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.01, max: 0.01, unidade: "mg/kg" }, doseMax: { valor: 0.5, unidade: "mg" },
        diluicao: "Sem diluição: ampola 1 mg/mL = 0,01 mL/kg (seringa de 1 mL)",
        diluicaoPadrao: null, via: "IM na face anterolateral da coxa", velocidade: "Injeção IM",
        repeticao: "A cada 5–15 min se não houver melhora",
        observacoes: "Máximo 0,3 mg na criança pré-púbere e 0,5 mg no adolescente/adulto (WAO). Nunca IV em bolus na anafilaxia com pulso." },
      { id: "infusao-adulto", rotulo: "Infusão contínua — adulto (choque, pós-PCR, bradicardia)", faixa: "adulto", modo: "infusao",
        dose: { min: 0.1, max: 0.5, unidade: "mcg/kg/min" }, doseMax: null,
        diluicao: "4 mg (4 ampolas) em SG 5% ou SF 0,9% completando 250 mL = 16 mcg/mL (conferir padrão institucional)",
        diluicaoPadrao: { quantidade: 4, unidade: "mg", volumeFinal: 250 },
        via: "IV em bomba de infusão; acesso central preferível", velocidade: "Titular a cada 3–5 min pela PAM/perfusão",
        repeticao: "Contínua",
        observacoes: "ACLS 2020 pós-PCR: 0,1–0,5 mcg/kg/min. Bradicardia sintomática refratária à atropina: 2–10 mcg/min. Via exclusiva; não interromper a linha durante a troca de maca." },
      { id: "infusao-pediatrica", rotulo: "Infusão contínua — pediátrica", faixa: "pediatrico", modo: "infusao",
        dose: { min: 0.1, max: 1, unidade: "mcg/kg/min" }, doseMax: { valor: 1, unidade: "mcg/kg/min" },
        diluicao: "Concentração conforme protocolo institucional pediátrico (ajustar ao peso e à restrição hídrica)",
        diluicaoPadrao: null, via: "IV/IO em bomba de infusão; acesso central preferível",
        velocidade: "Titular pela perfusão e PA", repeticao: "Contínua",
        observacoes: "PALS: 0,1–1 mcg/kg/min. Na criança, choque frio (vasoconstrito) costuma responder melhor à adrenalina." },
      { id: "nebulizacao-crupe", rotulo: "Nebulização — crupe (laringotraqueíte) moderado a grave", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.5, max: 0.5, unidade: "mL/kg" }, doseMax: { valor: 5, unidade: "mL" },
        diluicao: "Ampola 1 mg/mL pura (L-adrenalina) 0,5 mL/kg, máximo 5 mL; completar com SF se volume < 3 mL",
        diluicaoPadrao: null, via: "Inalatória (nebulização com O₂ 6–8 L/min)", velocidade: "Nebulizar em 10–15 min",
        repeticao: "Pode repetir após 15–20 min se persistir estridor em repouso (conferir protocolo)",
        observacoes: "Efeito dura cerca de 2 h; risco de rebote. Associar dexametasona. Observar ao menos 2–4 h após a dose antes de liberar; no transporte, prever nova piora." }
    ],
    contraindicacoes: ["Não há contraindicação absoluta na PCR ou na anafilaxia"],
    cuidados: [
      "Confirmar a concentração no rótulo: 1 mg/mL (IM) x 0,1 mg/mL (IV na PCR pediátrica/neonatal)",
      "Infusão em via exclusiva, bomba de infusão e conferência dupla",
      "Extravasamento causa necrose: preferir acesso central; se periférico, veia calibrosa e vigilância contínua",
      "Pacientes em uso de betabloqueador podem ter resposta reduzida na anafilaxia"
    ],
    adversos: ["Taquicardia, arritmias ventriculares", "Hipertensão", "Isquemia miocárdica", "Hiperglicemia, hiperlactatemia", "Necrose tecidual se extravasar"],
    monitorizacao: ["ECG contínuo", "PA (invasiva se infusão)", "Perfusão periférica", "Glicemia", "Local de infusão"],
    fontes: [VZ_FONTE_ACLS, VZ_FONTE_PALS, VZ_FONTE_SBP, "World Allergy Organization — Anaphylaxis Guidance (2020)", "Bula ANVISA — cloridrato de epinefrina 1 mg/mL"]
  },

  /* ---------------------------------------------------------------- NORADRENALINA */
  {
    id: "noradrenalina", nome: "Noradrenalina (norepinefrina)",
    categorias: ["vasoativa", "choque"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Ampola hemitartarato de norepinefrina 2 mg/mL = 1 mg/mL de norepinefrina BASE (4 mL = 4 mg base)", conc: 1, unidade: "mg/mL", volume: 4 }
    ],
    indicacoes: [
      { id: "infusao-adulto", rotulo: "Choque — infusão contínua adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 0.05, max: 0.5, unidade: "mcg/kg/min" }, doseMax: null,
        diluicao: "1 ampola (4 mg base) em SG 5% completando 250 mL = 16 mcg/mL. Alternativa concentrada comum no Brasil: 4 ampolas (16 mg base) + 234 mL SG 5% = 64 mcg/mL. Usar a do serviço de origem e conferir",
        diluicaoPadrao: { quantidade: 4, unidade: "mg", volumeFinal: 250 },
        via: "IV em bomba de infusão; acesso central preferível (periférico calibroso é aceitável por curto período)",
        velocidade: "Titular a cada 5–10 min para PAM ≥ 65 mmHg (adulto)", repeticao: "Contínua",
        observacoes: "Doses expressas em norepinefrina BASE. Se a prescrição for em hemitartarato, a dose real em base é a metade. SSC 2021: primeira escolha no choque séptico; associar vasopressina se 0,25–0,5 mcg/kg/min. ACLS 2020 pós-PCR: 0,1–0,5 mcg/kg/min. Doses maiores em choque refratário conforme intensivista." },
      { id: "infusao-pediatrica", rotulo: "Choque — infusão contínua pediátrica", faixa: "pediatrico", modo: "infusao",
        dose: { min: 0.1, max: 2, unidade: "mcg/kg/min" }, doseMax: { valor: 2, unidade: "mcg/kg/min" },
        diluicao: "Concentração conforme protocolo institucional pediátrico (dose em norepinefrina base)",
        diluicaoPadrao: null, via: "IV/IO em bomba de infusão; acesso central preferível",
        velocidade: "Titular pela PA para a idade e perfusão", repeticao: "Contínua",
        observacoes: "PALS: 0,1–2 mcg/kg/min. Útil no choque quente (vasodilatado). Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Hipovolemia não corrigida (usar como ponte enquanto repõe volume)"],
    cuidados: [
      "ATENÇÃO sal x base: ampola 2 mg/mL de hemitartarato = 1 mg/mL de base; registrar na passagem qual foi usado",
      "Não interromper a infusão na troca de maca/bomba; levar seringa/bolsa reserva preparada",
      "Via exclusiva; não fazer bolus pela mesma via",
      "Extravasamento: parar, aspirar, elevar o membro; fentolamina conforme protocolo institucional"
    ],
    adversos: ["Isquemia periférica e mesentérica", "Arritmias", "Hipertensão", "Necrose se extravasar"],
    monitorizacao: ["PA contínua (invasiva quando possível)", "ECG", "Perfusão e extremidades", "Diurese", "Lactato", "Local de punção"],
    fontes: ["SSC — Surviving Sepsis Campaign: International Guidelines (2021)", VZ_FONTE_ACLS, VZ_FONTE_PALS, "Bula ANVISA — hemitartarato de norepinefrina 2 mg/mL"]
  },

  /* ---------------------------------------------------------------- DOPAMINA */
  {
    id: "dopamina", nome: "Dopamina",
    categorias: ["vasoativa", "choque", "arritmia", "neonatal"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola cloridrato de dopamina 5 mg/mL (10 mL = 50 mg)", conc: 5, unidade: "mg/mL", volume: 10 }],
    indicacoes: [
      { id: "infusao-adulto", rotulo: "Bradicardia sintomática / choque — adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 5, max: 20, unidade: "mcg/kg/min" }, doseMax: { valor: 20, unidade: "mcg/kg/min" },
        diluicao: "5 ampolas (250 mg) em SG 5% completando 250 mL = 1 mg/mL (1.000 mcg/mL)",
        diluicaoPadrao: { quantidade: 250, unidade: "mg", volumeFinal: 250 },
        via: "IV em bomba de infusão; acesso central preferível", velocidade: "Titular a cada 5–10 min",
        repeticao: "Contínua",
        observacoes: "ACLS 2020 bradicardia refratária à atropina: 5–20 mcg/kg/min. No choque séptico, a noradrenalina é preferível (mais arritmias com dopamina)." },
      { id: "infusao-pediatrica", rotulo: "Choque — infusão pediátrica", faixa: "pediatrico", modo: "infusao",
        dose: { min: 2, max: 20, unidade: "mcg/kg/min" }, doseMax: { valor: 20, unidade: "mcg/kg/min" },
        diluicao: "Concentração conforme protocolo institucional pediátrico",
        diluicaoPadrao: null, via: "IV/IO em bomba de infusão", velocidade: "Titular pela perfusão e PA",
        repeticao: "Contínua",
        observacoes: "PALS: 2–20 mcg/kg/min. Adrenalina ou noradrenalina são preferidas no choque séptico pediátrico (SSC pediátrico 2020)." },
      { id: "infusao-neonatal", rotulo: "Hipotensão neonatal — infusão", faixa: "neonatal", modo: "infusao",
        dose: { min: 2, max: 20, unidade: "mcg/kg/min" }, doseMax: { valor: 20, unidade: "mcg/kg/min" },
        diluicao: "Concentração conforme protocolo da UTI neonatal de origem",
        diluicaoPadrao: null, via: "IV (preferir cateter venoso umbilical/central) em bomba de seringa",
        velocidade: "Titular pela PA média e perfusão", repeticao: "Contínua",
        observacoes: "Faixa usual em neonatologia (Neofax). Confirmar a prescrição da UTI neonatal de origem." }
    ],
    contraindicacoes: ["Feocromocitoma", "Taquiarritmias não tratadas, FV"],
    cuidados: ["Via exclusiva; extravasamento causa necrose", "Não misturar com bicarbonato (inativa)", "Corrigir hipovolemia antes ou junto"],
    adversos: ["Taquiarritmias", "Isquemia periférica", "Náuseas", "Necrose se extravasar"],
    monitorizacao: ["ECG contínuo", "PA", "Perfusão", "Diurese", "Local de infusão"],
    fontes: [VZ_FONTE_ACLS, VZ_FONTE_PALS, "SSC — International Guidelines for Children with Septic Shock (2020)", "Bula ANVISA — cloridrato de dopamina 5 mg/mL"]
  },

  /* ---------------------------------------------------------------- DOBUTAMINA */
  {
    id: "dobutamina", nome: "Dobutamina",
    categorias: ["vasoativa", "choque", "eap", "neonatal"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola cloridrato de dobutamina 12,5 mg/mL (20 mL = 250 mg)", conc: 12.5, unidade: "mg/mL", volume: 20 }],
    indicacoes: [
      { id: "infusao-adulto", rotulo: "Choque cardiogênico / baixo débito — adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 2, max: 20, unidade: "mcg/kg/min" }, doseMax: { valor: 20, unidade: "mcg/kg/min" },
        diluicao: "1 ampola (250 mg) em SG 5% ou SF completando 250 mL = 1 mg/mL",
        diluicaoPadrao: { quantidade: 250, unidade: "mg", volumeFinal: 250 },
        via: "IV em bomba de infusão", velocidade: "Iniciar 2–5 mcg/kg/min e titular a cada 10 min", repeticao: "Contínua",
        observacoes: "Inotrópico; pode causar hipotensão por vasodilatação: associar noradrenalina se PAM baixa." },
      { id: "infusao-pediatrica", rotulo: "Disfunção miocárdica — infusão pediátrica", faixa: "pediatrico", modo: "infusao",
        dose: { min: 2, max: 20, unidade: "mcg/kg/min" }, doseMax: { valor: 20, unidade: "mcg/kg/min" },
        diluicao: "Concentração conforme protocolo institucional pediátrico",
        diluicaoPadrao: null, via: "IV/IO em bomba de infusão", velocidade: "Titular pela perfusão", repeticao: "Contínua",
        observacoes: "PALS: 2–20 mcg/kg/min." },
      { id: "infusao-neonatal", rotulo: "Baixo débito neonatal — infusão", faixa: "neonatal", modo: "infusao",
        dose: { min: 2, max: 20, unidade: "mcg/kg/min" }, doseMax: { valor: 20, unidade: "mcg/kg/min" },
        diluicao: "Concentração conforme protocolo da UTI neonatal de origem",
        diluicaoPadrao: null, via: "IV em bomba de seringa", velocidade: "Titular pela perfusão", repeticao: "Contínua",
        observacoes: "Faixa usual em neonatologia (Neofax). Confirmar prescrição de origem." }
    ],
    contraindicacoes: ["Cardiomiopatia hipertrófica obstrutiva", "Hipotensão grave sem vasopressor associado"],
    cuidados: ["Corrigir hipovolemia antes", "Incompatível com bicarbonato e soluções alcalinas", "Pode aumentar resposta ventricular na FA"],
    adversos: ["Taquicardia, arritmias", "Hipotensão", "Isquemia miocárdica", "Hipocalemia"],
    monitorizacao: ["ECG contínuo", "PA", "Perfusão e diurese", "Potássio"],
    fontes: [VZ_FONTE_PALS, "ESC — Guidelines for Heart Failure (2021)", "Bula ANVISA — cloridrato de dobutamina 12,5 mg/mL"]
  },

  /* ---------------------------------------------------------------- VASOPRESSINA */
  {
    id: "vasopressina", nome: "Vasopressina",
    categorias: ["vasoativa", "choque"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 20 UI/mL (1 mL)", conc: 20, unidade: "UI/mL", volume: 1 }],
    indicacoes: [
      { id: "choque-septico-adulto", rotulo: "Choque séptico — associada à noradrenalina (adulto)", faixa: "adulto", modo: "infusao",
        dose: { min: 0.01, max: 0.03, unidade: "UI/min" }, doseMax: { valor: 0.04, unidade: "UI/min" },
        diluicao: "1 ampola (20 UI) em SF 0,9% ou SG 5% completando 100 mL = 0,2 UI/mL (conferir padrão institucional)",
        diluicaoPadrao: { quantidade: 20, unidade: "UI", volumeFinal: 100 },
        via: "IV em bomba de infusão; acesso central preferível", velocidade: "Dose fixa, em geral 0,03 UI/min; não titular como a noradrenalina",
        repeticao: "Contínua",
        observacoes: "SSC 2021: associar quando noradrenalina ≥ 0,25–0,5 mcg/kg/min. Dose não depende do peso. Sem dose pediátrica ou neonatal validada nesta biblioteca. Não usar na PCR como substituto da adrenalina (AHA 2020)." }
    ],
    contraindicacoes: ["Hipersensibilidade", "Cautela em doença coronariana e isquemia mesentérica"],
    cuidados: ["Via exclusiva", "Desmame da noradrenalina primeiro, depois da vasopressina (prática usual)"],
    adversos: ["Isquemia digital, mesentérica e miocárdica", "Hiponatremia", "Necrose se extravasar"],
    monitorizacao: ["PA contínua", "ECG", "Perfusão de extremidades", "Sódio", "Diurese"],
    fontes: ["SSC — Surviving Sepsis Campaign: International Guidelines (2021)", VZ_FONTE_ACLS, "Bula ANVISA — vasopressina 20 UI/mL"]
  },

  /* ---------------------------------------------------------------- ATROPINA */
  {
    id: "atropina", nome: "Atropina (sulfato)",
    categorias: ["arritmia", "antidoto", "pcr"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Ampola sulfato de atropina 0,25 mg/mL (1 mL)", conc: 0.25, unidade: "mg/mL", volume: 1 },
      { rotulo: "Ampola sulfato de atropina 0,5 mg/mL (1 mL) — conferir disponibilidade", conc: 0.5, unidade: "mg/mL", volume: 1 }
    ],
    indicacoes: [
      { id: "bradicardia-adulto", rotulo: "Bradicardia sintomática — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 1, unidade: "mg" }, doseMax: { valor: 3, unidade: "mg" },
        diluicao: "Sem diluição (4 mL da ampola 0,25 mg/mL); flush com SF",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus rápido",
        repeticao: "A cada 3–5 min, até dose total de 3 mg",
        observacoes: "ACLS 2020. doseMax = total acumulado. Pouco eficaz em BAV de alto grau/infranodal e em transplantado cardíaco: preparar marca-passo transcutâneo e dopamina/adrenalina." },
      { id: "bradicardia-pediatrica", rotulo: "Bradicardia com tônus vagal / BAV primário — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.02, max: 0.02, unidade: "mg/kg" }, doseMax: { valor: 0.5, unidade: "mg" },
        diluicao: "Sem diluição; flush com SF",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus rápido", repeticao: "Pode repetir 1 vez após 5 min",
        observacoes: "PALS: na bradicardia pediátrica a primeira medida é oxigenar/ventilar; adrenalina se FC < 60 com má perfusão apesar de ventilação. Atropina para tônus vagal aumentado ou BAV primário. Máximo 0,5 mg por dose." },
      { id: "organofosforado-adulto", rotulo: "Intoxicação por organofosforado/carbamato — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "mg" }, doseMax: null,
        diluicao: "Sem diluição",
        diluicaoPadrao: null, via: "IV", velocidade: "Bolus",
        repeticao: "Dobrar a dose a cada 5 min até secar secreções brônquicas (atropinização), conforme protocolo de toxicologia",
        observacoes: "Alvo: ausculta pulmonar limpa, FC > 80, PAS > 80 mmHg. Pode exigir dezenas de mg: levar estoque suficiente. Contatar CIATox." },
      { id: "organofosforado-pediatrico", rotulo: "Intoxicação por organofosforado/carbamato — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.02, max: 0.05, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Sem diluição",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus",
        repeticao: "A cada 5–10 min até atropinização, conforme CIATox",
        observacoes: "Sem dose máxima fixa; titular por secreções e broncorreia. Contatar CIATox." }
    ],
    contraindicacoes: ["Na bradicardia instável não há contraindicação absoluta", "Cautela em glaucoma de ângulo fechado e taquiarritmia"],
    cuidados: ["Não atrasar marca-passo transcutâneo em bradicardia instável", "Taquicardia pode aumentar isquemia na SCA"],
    adversos: ["Taquicardia", "Midríase, boca seca", "Retenção urinária", "Agitação, delirium, hipertermia"],
    monitorizacao: ["ECG contínuo", "PA", "Secreções (intoxicação)", "Temperatura"],
    fontes: [VZ_FONTE_ACLS, VZ_FONTE_PALS, VZ_FONTE_SAMU, "Bula ANVISA — sulfato de atropina 0,25 mg/mL"]
  },

  /* ---------------------------------------------------------------- AMIODARONA */
  {
    id: "amiodarona", nome: "Amiodarona",
    categorias: ["arritmia", "pcr"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola cloridrato de amiodarona 50 mg/mL (3 mL = 150 mg)", conc: 50, unidade: "mg/mL", volume: 3 }],
    indicacoes: [
      { id: "pcr-adulto", rotulo: "PCR em FV/TV sem pulso — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 300, max: 300, unidade: "mg" }, doseMax: { valor: 300, unidade: "mg" },
        diluicao: "Sem diluição (6 mL) ou diluída em 20 mL de SG 5%; flush após",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus rápido",
        repeticao: "2ª dose de 150 mg após a próxima tentativa de choque, se FV/TV persistir",
        observacoes: "ACLS 2020: após o 3º choque. Alternativa: lidocaína." },
      { id: "pcr-pediatrica", rotulo: "PCR em FV/TV sem pulso — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 5, max: 5, unidade: "mg/kg" }, doseMax: { valor: 300, unidade: "mg" },
        diluicao: "Sem diluição ou diluída em SG 5%",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus rápido",
        repeticao: "Pode repetir até 3 doses (total 15 mg/kg) na FV/TV refratária",
        observacoes: "PALS 2020. Máximo 300 mg por dose." },
      { id: "taquicardia-pulso-adulto", rotulo: "Taquicardia com pulso estável (TV monomórfica, FA) — ataque adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 150, max: 150, unidade: "mg" }, doseMax: { valor: 150, unidade: "mg" },
        diluicao: "150 mg (3 mL) em 100 mL de SG 5%",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 10 min",
        repeticao: "Pode repetir 150 mg se recorrer; dose máxima cerca de 2,2 g em 24 h",
        observacoes: "ACLS 2020. Instável = cardioversão elétrica sincronizada, não fármaco. Após ataque, manutenção em infusão." },
      { id: "manutencao-adulto", rotulo: "Manutenção após ataque — adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 0.5, max: 1, unidade: "mg/min" }, doseMax: { valor: 1, unidade: "mg/min" },
        diluicao: "900 mg (6 ampolas) em SG 5% completando 500 mL = 1,8 mg/mL",
        diluicaoPadrao: { quantidade: 900, unidade: "mg", volumeFinal: 500 },
        via: "IV em bomba de infusão; concentração > 2 mg/mL exige acesso central",
        velocidade: "1 mg/min por 6 h, depois 0,5 mg/min por 18 h", repeticao: "Contínua",
        observacoes: "Total em 24 h, incluindo ataques, até cerca de 2,2 g. Diluir em SG 5% (bula)." },
      { id: "taquicardia-pulso-pediatrica", rotulo: "Taquicardia com pulso (TSV refratária, TV) — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 5, max: 5, unidade: "mg/kg" }, doseMax: { valor: 300, unidade: "mg" },
        diluicao: "Diluir em SG 5%",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Em 20–60 min",
        repeticao: "Pode repetir até 15 mg/kg/dia, com orientação de especialista",
        observacoes: "PALS 2020: consultar cardiologia pediátrica. Risco de hipotensão e bradicardia; não associar a procainamida sem especialista." }
    ],
    contraindicacoes: ["Bradicardia sinusal grave e BAV de 2º/3º grau sem marca-passo (fora da PCR)", "Choque cardiogênico (fora da PCR)", "QT longo"],
    cuidados: ["Hipotensão com infusão rápida", "Flebite: preferir veia calibrosa/central", "Interação com varfarina e digoxina", "Contém álcool benzílico (cautela em neonato)"],
    adversos: ["Hipotensão", "Bradicardia, BAV", "Prolongamento de QT, torsades", "Flebite"],
    monitorizacao: ["ECG contínuo (QT)", "PA a cada 5 min no ataque", "Local de infusão"],
    fontes: [VZ_FONTE_ACLS, VZ_FONTE_PALS, "Bula ANVISA — cloridrato de amiodarona 50 mg/mL"]
  },

  /* ---------------------------------------------------------------- ADENOSINA */
  {
    id: "adenosina", nome: "Adenosina",
    categorias: ["arritmia"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 3 mg/mL (2 mL = 6 mg)", conc: 3, unidade: "mg/mL", volume: 2 }],
    indicacoes: [
      { id: "tsv-adulto-1", rotulo: "TSV estável — adulto, 1ª dose", faixa: "adulto", modo: "bolus",
        dose: { min: 6, max: 6, unidade: "mg" }, doseMax: { valor: 6, unidade: "mg" },
        diluicao: "Sem diluição. Torneira de 3 vias com seringa de 20 mL de SF",
        diluicaoPadrao: null, via: "IV em veia proximal (antecubital)", velocidade: "Bolus em 1–3 s seguido de flush rápido de 20 mL de SF e elevação do membro",
        repeticao: "Se não reverter em 1–2 min: 12 mg (2ª dose)",
        observacoes: "ACLS 2020. Registrar o ECG durante a infusão. Tentar manobra vagal antes." },
      { id: "tsv-adulto-2", rotulo: "TSV estável — adulto, 2ª dose", faixa: "adulto", modo: "bolus",
        dose: { min: 12, max: 12, unidade: "mg" }, doseMax: { valor: 12, unidade: "mg" },
        diluicao: "Sem diluição; flush de 20 mL de SF",
        diluicaoPadrao: null, via: "IV em veia proximal", velocidade: "Bolus em 1–3 s + flush rápido",
        repeticao: "Dose única de 12 mg (ACLS 2020)",
        observacoes: "Se não reverter, reavaliar o ritmo (flutter, TA) e discutir com cardiologia." },
      { id: "tsv-pediatrica-1", rotulo: "TSV — pediátrica, 1ª dose", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.1, max: 0.1, unidade: "mg/kg" }, doseMax: { valor: 6, unidade: "mg" },
        diluicao: "Sem diluição (ou diluir em SF para medir volumes pequenos); flush de 5–10 mL de SF",
        diluicaoPadrao: null, via: "IV/IO o mais proximal possível", velocidade: "Bolus rápido + flush imediato",
        repeticao: "Se não reverter: 0,2 mg/kg (máx 12 mg)",
        observacoes: "PALS 2020. Máximo 6 mg na 1ª dose." },
      { id: "tsv-pediatrica-2", rotulo: "TSV — pediátrica, 2ª dose", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.2, max: 0.2, unidade: "mg/kg" }, doseMax: { valor: 12, unidade: "mg" },
        diluicao: "Sem diluição; flush de 5–10 mL de SF",
        diluicaoPadrao: null, via: "IV/IO proximal", velocidade: "Bolus rápido + flush imediato",
        repeticao: "Dose única", observacoes: "PALS 2020. Máximo 12 mg." }
    ],
    contraindicacoes: ["BAV de 2º/3º grau ou doença do nó sinusal sem marca-passo", "Asma grave/broncoespasmo ativo (relativa)", "Taquicardia de QRS largo irregular (pré-excitação com FA)"],
    cuidados: ["Assistolia transitória esperada: avisar o paciente e ter desfibrilador pronto", "Reduzir dose (3 mg) em acesso central, transplantado cardíaco ou uso de dipiridamol/carbamazepina", "Teofilina/cafeína reduzem o efeito"],
    adversos: ["Assistolia/pausa transitória", "Rubor, dor torácica, dispneia", "Broncoespasmo", "FA após reversão"],
    monitorizacao: ["ECG contínuo com registro do traçado", "PA", "Desfibrilador conectado"],
    fontes: [VZ_FONTE_ACLS, VZ_FONTE_PALS, "Bula ANVISA — adenosina 3 mg/mL"]
  },

  /* ---------------------------------------------------------------- LIDOCAÍNA */
  {
    id: "lidocaina", nome: "Lidocaína (antiarrítmico, sem vasoconstritor)",
    categorias: ["arritmia", "pcr"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Frasco/ampola cloridrato de lidocaína 2% SEM vasoconstritor (20 mg/mL)", conc: 20, unidade: "mg/mL", volume: 5 }],
    indicacoes: [
      { id: "pcr-adulto", rotulo: "PCR em FV/TV sem pulso — adulto (alternativa à amiodarona)", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 1.5, unidade: "mg/kg" }, doseMax: { valor: 3, unidade: "mg/kg" },
        diluicao: "Sem diluição",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus",
        repeticao: "0,5–0,75 mg/kg a cada 5–10 min, até total de 3 mg/kg",
        observacoes: "ACLS 2020. doseMax = total acumulado." },
      { id: "pcr-pediatrica", rotulo: "PCR em FV/TV sem pulso — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 1, max: 1, unidade: "mg/kg" }, doseMax: { valor: 100, unidade: "mg" },
        diluicao: "Sem diluição",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus",
        repeticao: "Após ataque, infusão 20–50 mcg/kg/min conforme protocolo",
        observacoes: "PALS 2020: alternativa à amiodarona. Conferir dose máxima por dose no protocolo institucional (100 mg adotado como teto prático)." },
      { id: "infusao-adulto", rotulo: "Manutenção após retorno da circulação com FV/TV — adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 1, max: 4, unidade: "mg/min" }, doseMax: { valor: 4, unidade: "mg/min" },
        diluicao: "1 g em SG 5% completando 250 mL = 4 mg/mL (conferir padrão institucional)",
        diluicaoPadrao: { quantidade: 1000, unidade: "mg", volumeFinal: 250 },
        via: "IV em bomba de infusão", velocidade: "Contínua; reduzir em hepatopatia, IC e idosos",
        repeticao: "Contínua",
        observacoes: "AHA 2020: profilaxia de rotina após PCR não é recomendada; usar só por decisão do médico responsável." }
    ],
    contraindicacoes: ["BAV de alto grau sem marca-passo", "Hipersensibilidade a anestésicos amida", "Nunca usar apresentação COM vasoconstritor por via IV"],
    cuidados: ["Conferir: sem vasoconstritor", "Toxicidade em hepatopatia, IC e choque"],
    adversos: ["Toxicidade neurológica: parestesia perioral, confusão, convulsão", "Bradicardia, hipotensão"],
    monitorizacao: ["ECG contínuo", "Nível de consciência", "PA"],
    fontes: [VZ_FONTE_ACLS, VZ_FONTE_PALS, "Bula ANVISA — cloridrato de lidocaína 2% sem vasoconstritor"]
  },

  /* ---------------------------------------------------------------- METOPROLOL */
  {
    id: "metoprolol", nome: "Metoprolol (tartarato) IV",
    categorias: ["arritmia", "has-grave"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola tartarato de metoprolol 1 mg/mL (5 mL = 5 mg)", conc: 1, unidade: "mg/mL", volume: 5 }],
    indicacoes: [
      { id: "controle-fc-adulto", rotulo: "Controle de FC (FA/flutter, TSV) ou SCA com taquicardia/hipertensão — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 2.5, max: 5, unidade: "mg" }, doseMax: { valor: 15, unidade: "mg" },
        diluicao: "Sem diluição",
        diluicaoPadrao: null, via: "IV", velocidade: "Lento, em 1–2 min",
        repeticao: "A cada 5 min, até 3 doses (total 15 mg), checando FC e PA antes de cada dose",
        observacoes: "doseMax = total acumulado. Não usar na SCA com sinais de IC, baixo débito ou risco de choque. Sem dose pediátrica validada nesta biblioteca." }
    ],
    contraindicacoes: ["IC descompensada, choque", "Bradicardia, BAV 2º/3º grau", "Broncoespasmo ativo", "FA com pré-excitação (WPW)", "Uso de cocaína recente"],
    cuidados: ["Não associar a bloqueador de canal de cálcio IV", "No transporte, preferir não iniciar betabloqueador IV sem monitor e via segura"],
    adversos: ["Bradicardia", "Hipotensão", "Broncoespasmo", "Piora da IC"],
    monitorizacao: ["ECG contínuo", "PA a cada 5 min", "Ausculta pulmonar"],
    fontes: ["AHA/ACC — Guideline for Atrial Fibrillation (2023)", "SBC — Diretriz de SCA sem supra de ST (2021)", "Bula ANVISA — tartarato de metoprolol 1 mg/mL"]
  },

  /* ---------------------------------------------------------------- HIDROCORTISONA */
  {
    id: "hidrocortisona", nome: "Hidrocortisona (succinato sódico)",
    categorias: ["choque", "anafilaxia", "broncoespasmo"],
    altoRisco: false,
    apresentacoes: [
      { rotulo: "Frasco-ampola 100 mg pó (reconstituir em 2 mL = 50 mg/mL)", conc: 50, unidade: "mg/mL", volume: 2 },
      { rotulo: "Frasco-ampola 500 mg pó (reconstituir em 4 mL = 125 mg/mL; conferir diluente da bula)", conc: 125, unidade: "mg/mL", volume: 4 }
    ],
    indicacoes: [
      { id: "choque-septico-adulto", rotulo: "Choque séptico com vasopressor em uso — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 50, max: 50, unidade: "mg" }, doseMax: { valor: 50, unidade: "mg" },
        diluicao: "Reconstituir; pode diluir em 50–100 mL de SF",
        diluicaoPadrao: null, via: "IV", velocidade: "Lenta (bolus em ≥ 1 min ou infusão em 30 min)",
        repeticao: "A cada 6 h (200 mg/dia)",
        observacoes: "SSC 2021: sugerido se noradrenalina/adrenalina ≥ 0,25 mcg/kg/min por ≥ 4 h. Verificar horário da última dose antes do transporte." },
      { id: "insuf-adrenal-adulto", rotulo: "Insuficiência adrenal aguda — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 100, max: 100, unidade: "mg" }, doseMax: { valor: 100, unidade: "mg" },
        diluicao: "Reconstituir",
        diluicaoPadrao: null, via: "IV (ou IM se sem acesso)", velocidade: "Lenta",
        repeticao: "Seguir com 200 mg/24 h (50 mg 6/6 h ou infusão contínua)",
        observacoes: "Endocrine Society 2016. Não atrasar para coletar exames." },
      { id: "insuf-adrenal-pediatrica", rotulo: "Insuficiência adrenal aguda — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 2, max: 2, unidade: "mg/kg" }, doseMax: { valor: 100, unidade: "mg" },
        diluicao: "Reconstituir",
        diluicaoPadrao: null, via: "IV/IO (ou IM se sem acesso)", velocidade: "Lenta",
        repeticao: "Manutenção conforme endocrinologia pediátrica",
        observacoes: "Endocrine Society 2016 cita 50 mg/m² ou dose por faixa etária; 2 mg/kg (máx 100 mg) é a aproximação usual. Conferir com protocolo institucional." }
    ],
    contraindicacoes: ["Sem contraindicação absoluta em emergência"],
    cuidados: ["Hiperglicemia: monitorar glicemia", "Não substitui adrenalina na anafilaxia"],
    adversos: ["Hiperglicemia", "Hipernatremia, hipocalemia", "Agitação"],
    monitorizacao: ["Glicemia", "PA", "Eletrólitos"],
    fontes: ["SSC — Surviving Sepsis Campaign: International Guidelines (2021)", "Endocrine Society — Primary Adrenal Insufficiency Guideline (2016)", "Bula ANVISA — succinato sódico de hidrocortisona"]
  },

  /* ---------------------------------------------------------------- METILPREDNISOLONA */
  {
    id: "metilprednisolona", nome: "Metilprednisolona (succinato sódico)",
    categorias: ["broncoespasmo", "anafilaxia"],
    altoRisco: false,
    apresentacoes: [
      { rotulo: "Frasco-ampola 40 mg pó (reconstituído em 1 mL = 40 mg/mL)", conc: 40, unidade: "mg/mL", volume: 1 },
      { rotulo: "Frasco-ampola 125 mg pó (reconstituído em 2 mL = 62,5 mg/mL)", conc: 62.5, unidade: "mg/mL", volume: 2 },
      { rotulo: "Frasco-ampola 500 mg pó (conferir volume do diluente na bula)", conc: 62.5, unidade: "mg/mL", volume: 8 }
    ],
    indicacoes: [
      { id: "asma-adulto", rotulo: "Crise de asma grave — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 40, max: 80, unidade: "mg" }, doseMax: { valor: 80, unidade: "mg" },
        diluicao: "Reconstituir; pode diluir em 50–100 mL de SF",
        diluicaoPadrao: null, via: "IV", velocidade: "Lenta, em ≥ 5 min (ou infusão em 30 min)",
        repeticao: "Dose diária total 40–80 mg (1 ou 2 doses)",
        observacoes: "GINA/NAEPP: corticoide sistêmico na 1ª hora. Via oral é equivalente se o paciente engole." },
      { id: "dpoc-adulto", rotulo: "Exacerbação de DPOC — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 40, max: 40, unidade: "mg" }, doseMax: { valor: 40, unidade: "mg" },
        diluicao: "Reconstituir", diluicaoPadrao: null, via: "IV", velocidade: "Lenta",
        repeticao: "1 vez ao dia (curso de cerca de 5 dias)",
        observacoes: "GOLD: equivalente a prednisona 40 mg/dia por 5 dias." },
      { id: "asma-pediatrica", rotulo: "Crise de asma grave — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "mg/kg" }, doseMax: { valor: 60, unidade: "mg" },
        diluicao: "Reconstituir; diluir em SF para medir volumes pequenos",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Lenta",
        repeticao: "Dose diária total 1–2 mg/kg/dia (máx 60 mg/dia), em 1–2 doses",
        observacoes: "NAEPP. Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Sem contraindicação absoluta em emergência"],
    cuidados: ["Hiperglicemia", "Infusão rápida de doses altas (> 500 mg) associada a arritmia"],
    adversos: ["Hiperglicemia", "Hipertensão", "Agitação"],
    monitorizacao: ["Glicemia", "PA"],
    fontes: ["GINA — Global Strategy for Asthma Management and Prevention (2024)", "GOLD — Global Strategy for COPD (2024)", "NHLBI/NAEPP — Expert Panel Report 3 (2007)", "Bula ANVISA — succinato sódico de metilprednisolona"]
  },

  /* ---------------------------------------------------------------- SALBUTAMOL */
  {
    id: "salbutamol", nome: "Salbutamol",
    categorias: ["broncoespasmo", "hipercalemia", "anafilaxia"],
    altoRisco: false,
    apresentacoes: [
      { rotulo: "Solução para nebulização 5 mg/mL (frasco gotas; 1 gota ≈ 0,25 mg)", conc: 5, unidade: "mg/mL", volume: 10 },
      { rotulo: "Aerossol dosimetrado 100 mcg/jato (usar com espaçador) — dose em jatos, não em mL", conc: 0.1, unidade: "mg/mL", volume: 1 }
    ],
    indicacoes: [
      { id: "broncoespasmo-neb-adulto", rotulo: "Broncoespasmo — nebulização adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 2.5, max: 5, unidade: "mg" }, doseMax: { valor: 5, unidade: "mg" },
        diluicao: "0,5–1 mL (10–20 gotas) em 3–4 mL de SF",
        diluicaoPadrao: null, via: "Inalatória (nebulização com O₂ 6–8 L/min)", velocidade: "Nebulizar em 10–15 min",
        repeticao: "A cada 20 min na 1ª hora (3 doses); depois conforme resposta",
        observacoes: "Alternativa: aerossol 100 mcg/jato com espaçador, 4–10 jatos a cada 20 min na 1ª hora (GINA). Associar ipratrópio na crise grave." },
      { id: "broncoespasmo-neb-pediatrica", rotulo: "Broncoespasmo — nebulização pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.15, max: 0.15, unidade: "mg/kg" }, doseMax: { valor: 5, unidade: "mg" },
        diluicao: "Diluir em 3–4 mL de SF; dose mínima 2,5 mg",
        diluicaoPadrao: null, via: "Inalatória (nebulização com O₂)", velocidade: "Nebulizar em 10–15 min",
        repeticao: "A cada 20 min na 1ª hora (3 doses)",
        observacoes: "NAEPP: 0,15 mg/kg (mín 2,5 mg, máx 5 mg). Aerossol com espaçador: GINA ≤ 5 anos 2–6 jatos; 6–11 anos 4–10 jatos a cada 20 min na 1ª hora. Sem dose neonatal validada nesta biblioteca." },
      { id: "hipercalemia-adulto", rotulo: "Hipercalemia — nebulização adulto (adjuvante)", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 20, unidade: "mg" }, doseMax: { valor: 20, unidade: "mg" },
        diluicao: "2–4 mL da solução 5 mg/mL em SF até 4–5 mL",
        diluicaoPadrao: null, via: "Inalatória", velocidade: "Nebulizar em 10–20 min",
        repeticao: "Dose única; reavaliar potássio",
        observacoes: "Reduz K em 30–60 min; não substitui gluconato de cálcio nem insulina/glicose. Taquicardia: cautela em coronariopata." }
    ],
    contraindicacoes: ["Hipersensibilidade", "Cautela em taquiarritmia e SCA"],
    cuidados: ["Gerar a nebulização com O₂ na hipoxemia", "Tremor e taquicardia são esperados"],
    adversos: ["Taquicardia", "Tremor", "Hipocalemia", "Hiperlactatemia"],
    monitorizacao: ["FC", "SpO₂", "Esforço respiratório", "Potássio se doses repetidas"],
    fontes: ["GINA — Global Strategy for Asthma Management and Prevention (2024)", "NHLBI/NAEPP — Expert Panel Report 3 (2007)", "UK Kidney Association — Treatment of Acute Hyperkalaemia in Adults (2020)", "Bula ANVISA — sulfato de salbutamol"]
  },

  /* ---------------------------------------------------------------- IPRATRÓPIO */
  {
    id: "ipratropio", nome: "Brometo de ipratrópio",
    categorias: ["broncoespasmo"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Solução para nebulização 0,25 mg/mL (250 mcg/mL; 20 gotas = 1 mL)", conc: 0.25, unidade: "mg/mL", volume: 20 }],
    indicacoes: [
      { id: "asma-grave-adulto", rotulo: "Crise de asma grave / DPOC — nebulização adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.5, max: 0.5, unidade: "mg" }, doseMax: { valor: 0.5, unidade: "mg" },
        diluicao: "2 mL (40 gotas) junto com o salbutamol, completar com SF até 4 mL",
        diluicaoPadrao: null, via: "Inalatória (nebulização)", velocidade: "Nebulizar em 10–15 min",
        repeticao: "A cada 20 min na 1ª hora (3 doses)",
        observacoes: "Pediatria: dose fixa por idade, não por kg (GINA/NAEPP: 250–500 mcg por nebulização, 3 doses na 1ª hora) — conferir no protocolo pediátrico; não entra na calculadora por peso. Sem dose neonatal validada." }
    ],
    contraindicacoes: ["Hipersensibilidade à atropina ou derivados"],
    cuidados: ["Proteger os olhos (risco de glaucoma agudo com máscara mal adaptada)"],
    adversos: ["Boca seca", "Midríase se atingir os olhos", "Retenção urinária"],
    monitorizacao: ["SpO₂", "Esforço respiratório"],
    fontes: ["GINA — Global Strategy for Asthma Management and Prevention (2024)", "NHLBI/NAEPP — Expert Panel Report 3 (2007)", "Bula ANVISA — brometo de ipratrópio 0,25 mg/mL"]
  },

  /* ---------------------------------------------------------------- FUROSEMIDA */
  {
    id: "furosemida", nome: "Furosemida",
    categorias: ["eap", "hipercalemia"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Ampola 10 mg/mL (2 mL = 20 mg)", conc: 10, unidade: "mg/mL", volume: 2 }],
    indicacoes: [
      { id: "eap-adulto", rotulo: "EAP / IC congestiva — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 20, max: 40, unidade: "mg" }, doseMax: null,
        diluicao: "Sem diluição",
        diluicaoPadrao: null, via: "IV", velocidade: "Lenta, até 4 mg/min (ototoxicidade)",
        repeticao: "Reavaliar diurese em 2 h; ajustar",
        observacoes: "ESC 2021: 20–40 mg se virgem de diurético; se uso crônico, 1–2 vezes a dose oral diária em equivalente IV. No transporte: sonda vesical ou dispositivo coletor antes de sair." },
      { id: "congestao-pediatrica", rotulo: "Congestão / sobrecarga — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.5, max: 1, unidade: "mg/kg" }, doseMax: { valor: 40, unidade: "mg" },
        diluicao: "Sem diluição ou diluída em SF",
        diluicaoPadrao: null, via: "IV", velocidade: "Lenta, em 1–2 min",
        repeticao: "A cada 6–12 h conforme resposta",
        observacoes: "Conferir máximo por dose com o protocolo institucional pediátrico." },
      { id: "congestao-neonatal", rotulo: "Congestão — neonatal", faixa: "neonatal", modo: "bolus",
        dose: { min: 0.5, max: 1, unidade: "mg/kg" }, doseMax: { valor: 2, unidade: "mg/kg" },
        diluicao: "Diluir em SF para medir volume",
        diluicaoPadrao: null, via: "IV", velocidade: "Lenta",
        repeticao: "Intervalo conforme idade gestacional (12–24 h; maior no prematuro)",
        observacoes: "Faixa usual em neonatologia (Neofax). Confirmar com a UTI neonatal de origem." }
    ],
    contraindicacoes: ["Anúria sem resposta", "Hipovolemia/desidratação", "Hipocalemia grave não corrigida"],
    cuidados: ["Hipotensão em paciente com PA limítrofe", "Diurese volumosa durante o transporte: garantir coletor"],
    adversos: ["Hipocalemia, hipomagnesemia", "Hipotensão", "Ototoxicidade em infusão rápida"],
    monitorizacao: ["Diurese", "PA", "Potássio", "SpO₂ e ausculta"],
    fontes: ["ESC — Guidelines for Heart Failure (2021)", "SBC — Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (2018)", "Bula ANVISA — furosemida 10 mg/mL"]
  },

  /* ---------------------------------------------------------------- NITROGLICERINA */
  {
    id: "nitroglicerina", nome: "Nitroglicerina IV",
    categorias: ["eap", "has-grave", "vasoativa"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 5 mg/mL (10 mL = 50 mg)", conc: 5, unidade: "mg/mL", volume: 10 }],
    indicacoes: [
      { id: "infusao-adulto", rotulo: "SCA com dor/hipertensão, EAP hipertensivo — infusão adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 5, max: 200, unidade: "mcg/min" }, doseMax: { valor: 200, unidade: "mcg/min" },
        diluicao: "50 mg (1 ampola) em SG 5% ou SF completando 250 mL = 200 mcg/mL. Frasco de vidro ou bolsa sem PVC",
        diluicaoPadrao: { quantidade: 50, unidade: "mg", volumeFinal: 250 },
        via: "IV em bomba de infusão (equipo sem PVC)", velocidade: "Iniciar 5–10 mcg/min; aumentar 5–10 mcg/min a cada 3–5 min",
        repeticao: "Contínua",
        observacoes: "Titular por dor e PA. Sem dose pediátrica ou neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["PAS < 90 mmHg ou queda > 30 mmHg da basal", "Infarto de VD", "Uso de inibidor de PDE-5 (sildenafila/vardenafila em 24 h; tadalafila em 48 h)", "Estenose aórtica grave", "HIC"],
    cuidados: ["Hipotensão súbita: reduzir/parar e elevar MMII", "Cefaleia frequente", "Tolerância após 24 h"],
    adversos: ["Hipotensão", "Cefaleia", "Taquicardia reflexa", "Metemoglobinemia (doses altas)"],
    monitorizacao: ["PA a cada 5 min na titulação", "ECG", "Dor torácica"],
    fontes: ["AHA/ACC — Guideline for ACS (2025)", "ESC — Guidelines for Heart Failure (2021)", "Bula ANVISA — nitroglicerina 5 mg/mL"]
  },

  /* ---------------------------------------------------------------- NITROPRUSSIATO */
  {
    id: "nitroprussiato", nome: "Nitroprussiato de sódio",
    categorias: ["has-grave", "vasoativa", "eap"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 25 mg/mL (2 mL = 50 mg) ou frasco-ampola 50 mg pó — conferir a apresentação", conc: 25, unidade: "mg/mL", volume: 2 }],
    indicacoes: [
      { id: "infusao-adulto", rotulo: "Emergência hipertensiva (dissecção de aorta, EAP hipertensivo) — adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 0.3, max: 3, unidade: "mcg/kg/min" }, doseMax: { valor: 10, unidade: "mcg/kg/min" },
        diluicao: "50 mg em SG 5% completando 250 mL = 200 mcg/mL. Proteger da luz (frasco e equipo)",
        diluicaoPadrao: { quantidade: 50, unidade: "mg", volumeFinal: 250 },
        via: "IV em bomba de infusão, via exclusiva", velocidade: "Iniciar 0,3–0,5 mcg/kg/min; aumentar a cada 3–5 min",
        repeticao: "Contínua",
        observacoes: "Dose máxima 10 mcg/kg/min por no máximo 10 min. Dissecção de aorta: associar betabloqueador antes (evitar taquicardia reflexa). PA invasiva idealmente. Sem dose pediátrica ou neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Hipotensão", "Coarctação de aorta ou shunt AV compensatório", "Insuficiência hepática grave (cianeto)", "HIC (relativa)"],
    cuidados: ["Fotossensível: solução azul, verde ou vermelha deve ser descartada", "Toxicidade por cianeto/tiocianato em uso prolongado, dose alta ou insuficiência renal/hepática", "Hipotensão abrupta: parar infusão (meia-vida de minutos)"],
    adversos: ["Hipotensão grave", "Intoxicação por cianeto (acidose lática)", "Taquicardia reflexa"],
    monitorizacao: ["PA contínua (invasiva preferível)", "ECG", "Lactato e gasometria se uso prolongado"],
    fontes: ["AHA/ACC — Guideline for High Blood Pressure in Adults (2017)", "SBC — Diretrizes Brasileiras de Hipertensão Arterial (2020)", "Bula ANVISA — nitroprussiato de sódio"]
  },

  /* ---------------------------------------------------------------- GLICOSE */
  {
    id: "glicose", nome: "Glicose hipertônica",
    categorias: ["hipoglicemia", "hipercalemia", "neonatal"],
    altoRisco: false,
    apresentacoes: [
      { rotulo: "Glicose 50% ampola 10 mL (500 mg/mL = 5 g)", conc: 500, unidade: "mg/mL", volume: 10 },
      { rotulo: "Glicose 25% ampola 10 mL (250 mg/mL = 2,5 g)", conc: 250, unidade: "mg/mL", volume: 10 },
      { rotulo: "Glicose 10% frasco/bolsa (100 mg/mL)", conc: 100, unidade: "mg/mL", volume: 250 }
    ],
    indicacoes: [
      { id: "hipoglicemia-adulto", rotulo: "Hipoglicemia — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 25, unidade: "g" }, doseMax: { valor: 25, unidade: "g" },
        diluicao: "Glicose 50%: 20–50 mL (10–25 g); em veia periférica fina, preferir diluir ou usar glicose 10% (100–250 mL)",
        diluicaoPadrao: null, via: "IV", velocidade: "Lenta, em 2–5 min (50%); glicose 10% em 10–15 min",
        repeticao: "Repetir glicemia em 15 min; repetir se < 70 mg/dL",
        observacoes: "Etilista/desnutrido: tiamina 100 mg IV antes ou junto. Após correção, manter soro glicosado: hipoglicemia por sulfonilureia ou insulina de ação longa recorre no transporte." },
      { id: "hipoglicemia-pediatrica", rotulo: "Hipoglicemia — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.5, max: 1, unidade: "g/kg" }, doseMax: { valor: 25, unidade: "g" },
        diluicao: "Glicose 10%: 5–10 mL/kg ou glicose 25%: 2–4 mL/kg. Não usar 50% em criança pequena",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Lenta, em 2–5 min",
        repeticao: "Glicemia em 15 min; repetir se persistir",
        observacoes: "PALS: 0,5–1 g/kg. Após bolus, manter infusão de glicose." },
      { id: "hipoglicemia-neonatal", rotulo: "Hipoglicemia — neonatal (glicose 10% 2 mL/kg)", faixa: "neonatal", modo: "bolus",
        dose: { min: 0.2, max: 0.2, unidade: "g/kg" }, doseMax: { valor: 0.2, unidade: "g/kg" },
        diluicao: "Glicose 10% = 2 mL/kg (200 mg/kg). Nunca usar 25% ou 50% em neonato",
        diluicaoPadrao: null, via: "IV (veia periférica ou umbilical)", velocidade: "Em 1–5 min (bolus lento)",
        repeticao: "Seguir com infusão contínua (TIG 6–8 mg/kg/min); glicemia em 30 min",
        observacoes: "SBP/AAP: não fazer bolus sem manter infusão (risco de hipoglicemia rebote). TIG em mg/kg/min = (mL/h × concentração em %) ÷ (6 × peso em kg)." }
    ],
    contraindicacoes: ["Hiperglicemia"],
    cuidados: ["Soluções > 12,5% são esclerosantes: preferir veia calibrosa/central", "Extravasamento causa necrose"],
    adversos: ["Flebite", "Hiperglicemia de rebote", "Necrose se extravasar"],
    monitorizacao: ["Glicemia capilar a cada 15–30 min até estabilizar", "Nível de consciência", "Local de infusão"],
    fontes: [VZ_FONTE_PALS, "ADA — Standards of Care in Diabetes (2025)", "SBP — Hipoglicemia neonatal: documento científico", "AAP — Postnatal Glucose Homeostasis in Late-Preterm and Term Infants (2011)"]
  },

  /* ---------------------------------------------------------------- GLUCONATO DE CÁLCIO */
  {
    id: "gluconato-calcio", nome: "Gluconato de cálcio 10%",
    categorias: ["hipercalemia", "antidoto", "obstetricia", "neonatal"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola gluconato de cálcio 10% (100 mg/mL; 10 mL = 1 g ≈ 4,65 mEq de Ca)", conc: 100, unidade: "mg/mL", volume: 10 }],
    indicacoes: [
      { id: "hipercalemia-adulto", rotulo: "Hipercalemia com alteração de ECG — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 3, unidade: "g" }, doseMax: { valor: 3, unidade: "g" },
        diluicao: "10–30 mL de gluconato 10%, puro ou diluído em 100 mL de SF/SG 5%",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 5–10 min",
        repeticao: "Repetir após 5–10 min se o ECG não melhorar",
        observacoes: "Estabiliza a membrana; não reduz potássio. Efeito dura 30–60 min. Seguir com insulina + glicose e salbutamol." },
      { id: "toxicidade-magnesio-adulto", rotulo: "Intoxicação por sulfato de magnésio (ex.: eclâmpsia) — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 1, unidade: "g" }, doseMax: { valor: 1, unidade: "g" },
        diluicao: "10 mL de gluconato 10%",
        diluicaoPadrao: null, via: "IV", velocidade: "Lenta, em 3–10 min",
        repeticao: "Conforme resposta clínica",
        observacoes: "Sinais: perda de reflexo patelar, FR < 12, depressão respiratória. Suspender o magnésio e ventilar se necessário (MS — Gestação de Alto Risco 2022)." },
      { id: "hipercalemia-pediatrica", rotulo: "Hipercalemia / hipocalcemia sintomática — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 60, max: 100, unidade: "mg/kg" }, doseMax: { valor: 3, unidade: "g" },
        diluicao: "0,6–1 mL/kg do gluconato 10%, diluir 1:1 em SF/SG 5%",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Lenta, em 5–10 min (mais lento se FC cair)",
        repeticao: "Pode repetir após 10 min",
        observacoes: "PALS: 60 mg/kg; máximo 3 g por dose. Conferir faixa com o protocolo institucional." },
      { id: "hipocalcemia-neonatal", rotulo: "Hipocalcemia sintomática — neonatal", faixa: "neonatal", modo: "bolus",
        dose: { min: 100, max: 200, unidade: "mg/kg" }, doseMax: { valor: 200, unidade: "mg/kg" },
        diluicao: "1–2 mL/kg do gluconato 10%, diluir 1:1 em SG 5%",
        diluicaoPadrao: null, via: "IV (preferir central/umbilical)", velocidade: "Em 10–30 min com ECG contínuo",
        repeticao: "Conforme cálcio iônico e prescrição da UTI neonatal",
        observacoes: "Faixa usual em neonatologia (Neofax). Parar se bradicardia. Confirmar prescrição de origem." }
    ],
    contraindicacoes: ["Hipercalcemia", "Intoxicação digitálica (cautela; discutir com especialista)", "Não infundir junto com bicarbonato ou fosfato (precipita)"],
    cuidados: ["Bradicardia/assistolia em infusão rápida", "Extravasamento causa necrose e calcificação", "Lavar a via antes e depois"],
    adversos: ["Bradicardia, arritmia", "Hipotensão", "Necrose se extravasar", "Sensação de calor"],
    monitorizacao: ["ECG contínuo durante a infusão", "PA", "Local de punção", "Cálcio e potássio"],
    fontes: [VZ_FONTE_PALS, "UK Kidney Association — Treatment of Acute Hyperkalaemia in Adults (2020)", "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)", "Bula ANVISA — gluconato de cálcio 10%"]
  },

  /* ---------------------------------------------------------------- BICARBONATO DE SÓDIO */
  {
    id: "bicarbonato-sodio", nome: "Bicarbonato de sódio",
    categorias: ["hipercalemia", "antidoto", "pcr"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Bicarbonato de sódio 8,4% (1 mEq/mL) — ampola 10 mL ou frasco 250 mL", conc: 1, unidade: "mEq/mL", volume: 10 },
      { rotulo: "Bicarbonato de sódio 10% (≈ 1,19 mEq/mL) — conferir rótulo", conc: 1.19, unidade: "mEq/mL", volume: 10 }
    ],
    indicacoes: [
      { id: "intox-triciclico-adulto", rotulo: "Intoxicação por antidepressivo tricíclico (QRS > 100 ms) — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "mEq/kg" }, doseMax: null,
        diluicao: "Bicarbonato 8,4% sem diluição",
        diluicaoPadrao: null, via: "IV", velocidade: "Bolus em 1–2 min",
        repeticao: "Repetir até QRS estreitar; alvo pH 7,45–7,55, conforme CIATox",
        observacoes: "Também em arritmia por outros bloqueadores de canal de sódio. Contatar CIATox." },
      { id: "intox-triciclico-pediatrica", rotulo: "Intoxicação por bloqueador de canal de sódio — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "mEq/kg" }, doseMax: { valor: 100, unidade: "mEq" },
        diluicao: "Em lactente, diluir o 8,4% 1:1 com água destilada ou SG 5% (4,2%)",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus lento",
        repeticao: "Conforme QRS e gasometria, orientado pelo CIATox",
        observacoes: "Teto por dose adotado como prática; conferir com CIATox." },
      { id: "hipercalemia-acidose-adulto", rotulo: "Hipercalemia com acidose metabólica — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 50, max: 50, unidade: "mEq" }, doseMax: { valor: 50, unidade: "mEq" },
        diluicao: "Bicarbonato 8,4% 50 mL",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 5–10 min",
        repeticao: "Conforme gasometria",
        observacoes: "Efeito sobre o potássio é pequeno; útil somente com acidose. Não infundir na mesma via do cálcio." }
    ],
    contraindicacoes: ["Alcalose", "Hipocalcemia não corrigida", "Hipernatremia", "Ventilação inadequada (gera CO₂)"],
    cuidados: ["Não é rotina na PCR (AHA 2020); só em hipercalemia ou intoxicação específica", "Na reanimação neonatal não é recomendado (SBP 2022)", "Precipita com cálcio; inativa catecolaminas na mesma via", "Hiperosmolar: extravasamento causa necrose"],
    adversos: ["Hipernatremia, hiperosmolaridade", "Alcalose", "Hipocalemia, hipocalcemia iônica", "Acidose intracelular paradoxal"],
    monitorizacao: ["Gasometria", "Sódio, potássio, cálcio iônico", "ECG (QRS)"],
    fontes: [VZ_FONTE_ACLS, VZ_FONTE_PALS, VZ_FONTE_SBP, "Bula ANVISA — bicarbonato de sódio 8,4%"]
  },

  /* ---------------------------------------------------------------- INSULINA REGULAR */
  {
    id: "insulina-regular", nome: "Insulina regular (humana)",
    categorias: ["hipercalemia", "hipoglicemia"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Frasco 100 UI/mL (10 mL)", conc: 100, unidade: "UI/mL", volume: 10 }],
    indicacoes: [
      { id: "cad-adulto", rotulo: "Cetoacidose diabética / estado hiperosmolar — infusão adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 0.1, max: 0.1, unidade: "UI/kg/h" }, doseMax: { valor: 0.14, unidade: "UI/kg/h" },
        diluicao: "100 UI em SF 0,9% completando 100 mL = 1 UI/mL. Desprezar os primeiros 20 mL no equipo (adsorção)",
        diluicaoPadrao: { quantidade: 100, unidade: "UI", volumeFinal: 100 },
        via: "IV em bomba de infusão", velocidade: "Contínua; ajustar para queda de glicemia de 50–75 mg/dL/h",
        repeticao: "Contínua; ao chegar a 200–250 mg/dL, associar glicose",
        observacoes: "ADA 2024: só iniciar com K ≥ 3,5 mEq/L; se < 3,5, repor potássio primeiro. Bolus inicial 0,1 UI/kg opcional. Não interromper no transporte: hipoglicemia e hipocalemia são os maiores riscos." },
      { id: "cad-pediatrica", rotulo: "Cetoacidose diabética — infusão pediátrica", faixa: "pediatrico", modo: "infusao",
        dose: { min: 0.05, max: 0.1, unidade: "UI/kg/h" }, doseMax: { valor: 0.1, unidade: "UI/kg/h" },
        diluicao: "Concentração conforme protocolo institucional (comum 0,1–1 UI/mL em SF)",
        diluicaoPadrao: null, via: "IV em bomba de infusão", velocidade: "Contínua",
        repeticao: "Contínua; iniciar 1–2 h após o início da hidratação",
        observacoes: "ISPAD 2022: SEM bolus de insulina em criança. Risco de edema cerebral: evitar hidratação e queda de glicemia rápidas. Sem dose neonatal validada." },
      { id: "hipercalemia-adulto", rotulo: "Hipercalemia — adulto (com glicose)", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 10, unidade: "UI" }, doseMax: { valor: 10, unidade: "UI" },
        diluicao: "10 UI em bolus junto com 25 g de glicose (50 mL de glicose 50%) se glicemia < 250 mg/dL",
        diluicaoPadrao: null, via: "IV", velocidade: "Bolus (glicose em 5–15 min)",
        repeticao: "Glicemia a cada 30–60 min por até 6 h; repetir conforme potássio",
        observacoes: "Reduz K em 15–30 min, dura 4–6 h. Risco alto de hipoglicemia, sobretudo em DRC." },
      { id: "hipercalemia-pediatrica", rotulo: "Hipercalemia — pediátrica (com glicose)", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.1, max: 0.1, unidade: "UI/kg" }, doseMax: { valor: 10, unidade: "UI" },
        diluicao: "Diluir em SF para medir (ex.: 1 UI/mL); associar glicose 0,5 g/kg",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 15–30 min junto com a glicose",
        repeticao: "Glicemia a cada 30 min; repetir conforme potássio",
        observacoes: "Conferir com protocolo institucional pediátrico." }
    ],
    contraindicacoes: ["Hipoglicemia", "Hipocalemia (K < 3,5 mEq/L) antes de corrigir"],
    cuidados: ["Dupla checagem: UI x mL", "Bomba de infusão obrigatória; nunca em equipo simples durante o transporte", "Levar glicose 50% e 10% e glicosímetro"],
    adversos: ["Hipoglicemia", "Hipocalemia", "Edema cerebral na CAD pediátrica (correção rápida)"],
    monitorizacao: ["Glicemia capilar a cada 1 h (a cada 30 min em transporte longo ou instável)", "Potássio", "Nível de consciência"],
    fontes: ["ADA — Hyperglycemic Crises in Adults with Diabetes: Consensus Report (2024)", "ISPAD — Clinical Practice Consensus Guidelines: DKA and HHS (2022)", "UK Kidney Association — Treatment of Acute Hyperkalaemia in Adults (2020)", "Bula ANVISA — insulina humana regular 100 UI/mL"]
  },

  /* ---------------------------------------------------------------- CRISTALOIDE */
  {
    id: "cristaloide", nome: "Cristaloide (SF 0,9% / Ringer lactato)",
    categorias: ["choque", "hemorragia", "neonatal"],
    altoRisco: false,
    apresentacoes: [
      { rotulo: "Soro fisiológico 0,9% (Na 154 mEq/L) — bolsa 100/250/500/1.000 mL", conc: 0.154, unidade: "mEq/mL", volume: 500 },
      { rotulo: "Ringer lactato (Na 130 mEq/L) — bolsa 500/1.000 mL", conc: 0.13, unidade: "mEq/mL", volume: 500 }
    ],
    indicacoes: [
      { id: "sepse-adulto", rotulo: "Sepse com hipoperfusão/hipotensão — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 30, max: 30, unidade: "mL/kg" }, doseMax: null,
        diluicao: "Preferir solução balanceada (Ringer lactato)",
        diluicaoPadrao: null, via: "IV (2 acessos calibrosos)", velocidade: "Nas primeiras 3 h, em alíquotas de 250–500 mL",
        repeticao: "Reavaliar perfusão, PA, ausculta e SpO₂ após cada alíquota",
        observacoes: "SSC 2021: ao menos 30 mL/kg nas primeiras 3 h (sugestão), guiado por reavaliação. Cautela em IC, DRC e hipoxemia." },
      { id: "trauma-adulto", rotulo: "Choque hemorrágico — adulto (ponte até sangue)", faixa: "adulto", modo: "bolus",
        dose: { min: 1000, max: 1000, unidade: "mL" }, doseMax: { valor: 1000, unidade: "mL" },
        diluicao: "Cristaloide aquecido (39 °C)",
        diluicaoPadrao: null, via: "IV/IO calibroso", velocidade: "Rápido",
        repeticao: "Não repetir indiscriminadamente; priorizar hemocomponentes e controle do sangramento",
        observacoes: "ATLS 10ª ed.: 1 L inicial; hipotensão permissiva (PAS ~80–90 mmHg) se sem TCE. Ácido tranexâmico nas primeiras 3 h." },
      { id: "sepse-pediatrica", rotulo: "Choque — bolus pediátrico", faixa: "pediatrico", modo: "bolus",
        dose: { min: 10, max: 20, unidade: "mL/kg" }, doseMax: { valor: 1000, unidade: "mL" },
        diluicao: "SF 0,9% ou Ringer lactato (balanceada preferível)",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Em 5–20 min (seringa ou bolsa pressurizada)",
        repeticao: "Reavaliar após cada bolus; até 40–60 mL/kg na 1ª hora se sem sinais de sobrecarga",
        observacoes: "SSC pediátrico 2020: parar se hepatomegalia, estertores ou piora respiratória. Trauma (ATLS): 20 mL/kg e depois hemocomponente. Em choque cardiogênico, alíquotas menores (5–10 mL/kg)." },
      { id: "hipovolemia-neonatal", rotulo: "Hipovolemia na reanimação neonatal", faixa: "neonatal", modo: "bolus",
        dose: { min: 10, max: 10, unidade: "mL/kg" }, doseMax: { valor: 10, unidade: "mL/kg" },
        diluicao: "SF 0,9% (não usar Ringer nem glicose para expansão)",
        diluicaoPadrao: null, via: "IV (veia umbilical) ou IO", velocidade: "Em 5–10 min",
        repeticao: "Pode repetir 1 vez conforme resposta",
        observacoes: "SBP 2022: indicar se palidez, pulsos fracos ou suspeita de perda sanguínea sem resposta à reanimação. Prematuro < 34 sem: evitar infusão rápida (risco de hemorragia intraventricular)." },
      { id: "cad-adulto", rotulo: "Cetoacidose diabética — hidratação inicial adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 15, max: 20, unidade: "mL/kg" }, doseMax: null,
        diluicao: "SF 0,9% ou solução balanceada",
        diluicaoPadrao: null, via: "IV", velocidade: "Na 1ª hora",
        repeticao: "Depois conforme sódio corrigido, débito urinário e hemodinâmica",
        observacoes: "ADA 2024." },
      { id: "cad-pediatrica", rotulo: "Cetoacidose diabética — expansão pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 10, max: 20, unidade: "mL/kg" }, doseMax: { valor: 1000, unidade: "mL" },
        diluicao: "SF 0,9% ou Ringer lactato",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 20–30 min (mais rápido apenas se choque)",
        repeticao: "Repetir só se persistir má perfusão",
        observacoes: "ISPAD 2022: seguir com reposição do déficit em 24–48 h. Vigiar sinais de edema cerebral (cefaleia, bradicardia, rebaixamento)." }
    ],
    contraindicacoes: ["Sobrecarga volêmica (EAP, IC descompensada)"],
    cuidados: ["SF em grande volume: acidose hiperclorêmica", "Ringer lactato: evitar no TCE grave com hiponatremia (hipotônico relativo)", "Aquecer no trauma e no neonato", "Bomba ou contagem de volume no transporte"],
    adversos: ["Sobrecarga hídrica, EAP", "Acidose hiperclorêmica (SF)", "Hipotermia se não aquecido", "Diluição de fatores de coagulação"],
    monitorizacao: ["PA, FC, perfusão capilar", "Ausculta pulmonar e SpO₂", "Diurese", "Volume total infundido (registrar)"],
    fontes: ["SSC — Surviving Sepsis Campaign: International Guidelines (2021)", "SSC — International Guidelines for Children with Septic Shock (2020)", "American College of Surgeons — ATLS 10ª edição (2018)", VZ_FONTE_SBP, "ADA — Hyperglycemic Crises in Adults with Diabetes: Consensus Report (2024)", "ISPAD — Clinical Practice Consensus Guidelines: DKA and HHS (2022)"]
  },

  /* ---------------------------------------------------------------- ALPROSTADIL */
  {
    id: "alprostadil", nome: "Alprostadil (prostaglandina E1)",
    categorias: ["neonatal", "vasoativa"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 500 mcg/mL (1 mL) — Prostin VR; manter refrigerada", conc: 500, unidade: "mcg/mL", volume: 1 }],
    indicacoes: [
      { id: "canal-dependente-neonatal", rotulo: "Cardiopatia canal-dependente — manutenção do canal arterial (neonatal)", faixa: "neonatal", modo: "infusao",
        dose: { min: 0.01, max: 0.1, unidade: "mcg/kg/min" }, doseMax: { valor: 0.4, unidade: "mcg/kg/min" },
        diluicao: "500 mcg (1 ampola) em SG 5% ou SF completando 100 mL = 5 mcg/mL (conferir padrão da UTI neonatal; bula admite 25–250 mL)",
        diluicaoPadrao: { quantidade: 500, unidade: "mcg", volumeFinal: 100 },
        via: "IV em bomba de seringa (periférico ou cateter umbilical), via exclusiva",
        velocidade: "Início 0,05–0,1 mcg/kg/min; após resposta, reduzir para a menor dose eficaz (0,01–0,05)",
        repeticao: "Contínua; nunca interromper durante o transporte",
        observacoes: "Apneia é frequente (sobretudo < 2 kg e na 1ª hora, mais com doses altas): discutir intubação antes da transferência e levar material de via aérea neonatal. Manter a dose prescrita pela UTI de origem; alvo de SpO₂ conforme cardiologia pediátrica (em geral 75–85%). Dose máxima 0,4 mcg/kg/min (bula)." }
    ],
    contraindicacoes: ["Síndrome do desconforto respiratório sem cardiopatia canal-dependente", "Persistência do canal quando não desejada"],
    cuidados: ["Levar seringa reserva preparada e bomba com bateria", "Interrupção causa fechamento do canal e colapso em minutos a horas", "Preparar O₂ com cautela: hiperóxia favorece fechamento do canal e, em algumas cardiopatias, hiperfluxo pulmonar"],
    adversos: ["Apneia", "Febre", "Hipotensão, rubor", "Bradicardia", "Convulsões"],
    monitorizacao: ["FR e apneia (monitor contínuo)", "SpO₂ pré e pós-ductal", "FC, PA", "Temperatura", "Glicemia"],
    fontes: ["Bula ANVISA — alprostadil 500 mcg/mL (Prostin VR)", "Neofax / Lexicomp Pediatric & Neonatal Dosage Handbook — alprostadil", VZ_FONTE_SBP]
  }
);
})();

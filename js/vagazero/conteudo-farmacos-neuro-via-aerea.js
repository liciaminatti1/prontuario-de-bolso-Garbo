/* Vaga Zero — conteudo-farmacos-neuro-via-aerea. Formato em docs/VAGA-ZERO.md.
   Sedação, SRI, analgesia, anticonvulsivantes, antídotos, obstetrícia e hipertensão intracraniana.
   Números conferidos com as fontes citadas em cada item; pontos marcados "conforme protocolo institucional"
   não têm valor único validado e dependem do serviço. */
VZ_FARMACOS.push(
  /* ---------------- MIDAZOLAM ---------------- */
  {
    id: "midazolam", nome: "Midazolam",
    categorias: ["sri", "sedacao", "convulsao"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Ampola 5 mg/mL (3 mL = 15 mg)", conc: 5, unidade: "mg/mL", volume: 3 },
      { rotulo: "Ampola 5 mg/mL (10 mL = 50 mg)", conc: 5, unidade: "mg/mL", volume: 10 },
      { rotulo: "Ampola 1 mg/mL (5 mL = 5 mg)", conc: 1, unidade: "mg/mL", volume: 5 }
    ],
    indicacoes: [
      { id: "convulsao-adulto-im", rotulo: "Convulsão (> 5 min) — adulto, IM", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 10, unidade: "mg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Sem diluição; usar a ampola de 5 mg/mL (2 mL = 10 mg)",
        diluicaoPadrao: null, via: "IM (vasto lateral ou deltoide)", velocidade: "Injeção IM única",
        repeticao: "Dose única. Se persistir após 5–10 min, ir para 2ª linha (fenitoína, levetiracetam ou fenobarbital)",
        observacoes: "Primeira escolha quando não há acesso venoso (RAMPART). Peso 13–40 kg: 5 mg IM. Antes do transporte: crise controlada, via aérea avaliada. Em transporte: aspirar, lateralizar, O2." },
      { id: "convulsao-adulto-iv", rotulo: "Convulsão (> 5 min) — adulto, IV", faixa: "adulto", modo: "bolus",
        dose: { min: 0.1, max: 0.2, unidade: "mg/kg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Pode ser feito puro ou diluído em SF para 10 mL para facilitar a titulação",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Lento, em 1–2 min",
        repeticao: "Pode repetir 1 vez após 5 min. Depois, 2ª linha",
        observacoes: "Ter bolsa-válvula-máscara pronta: risco de apneia, sobretudo após 2 doses de benzodiazepínico." },
      { id: "convulsao-pediatrica-im-iv", rotulo: "Convulsão (> 5 min) — pediátrica, IM/IV", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.1, max: 0.2, unidade: "mg/kg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "IM: sem diluição (5 mg/mL). IV: pode diluir em SF para 1 mg/mL",
        diluicaoPadrao: null, via: "IM ou IV/IO", velocidade: "IV lento, em 1–2 min; IM injeção única",
        repeticao: "IV: pode repetir 1 vez após 5 min. IM: dose única. Máximo 2 doses de benzodiazepínico no total",
        observacoes: "IM 0,2 mg/kg (13–40 kg: 5 mg; > 40 kg: 10 mg). IV 0,1–0,2 mg/kg. Somar doses já feitas na origem (inclusive diazepam)." },
      { id: "convulsao-pediatrica-in", rotulo: "Convulsão (> 5 min) — pediátrica, intranasal", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.2, max: 0.2, unidade: "mg/kg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Sem diluição; usar 5 mg/mL com atomizador nasal, dividir entre as narinas (até 1 mL por narina)",
        diluicaoPadrao: null, via: "Intranasal (atomizador)", velocidade: "Borrifar rápido, metade em cada narina",
        repeticao: "Dose única; se persistir após 5–10 min, acesso IV/IO e 2ª linha",
        observacoes: "Alternativa sem acesso venoso. Absorção pior com secreção nasal abundante." },
      { id: "sedacao-bolus-adulto", rotulo: "Sedação / agitação — bolus adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 2.5, unidade: "mg" }, doseMax: { valor: 2.5, unidade: "mg" },
        diluicao: "Diluir 15 mg (3 mL) em 12 mL de SF = 1 mg/mL, ou usar ampola 1 mg/mL",
        diluicaoPadrao: null, via: "IV", velocidade: "Lento, em 1–2 min",
        repeticao: "Titular a cada 3–5 min até o efeito",
        observacoes: "Idoso, hepatopata, DPOC ou uso de opioide: começar com 0,5–1 mg. Paciente sem via aérea definitiva: sedação mínima necessária para transportar com segurança." },
      { id: "sedacao-continua-adulto", rotulo: "Sedação contínua — adulto (intubado)", faixa: "adulto", modo: "infusao",
        dose: { min: 0.02, max: 0.1, unidade: "mg/kg/h" }, doseMax: null,
        diluicao: "150 mg (30 mL de 5 mg/mL) + 120 mL de SF = 150 mL (1 mg/mL). Outras diluições conforme protocolo institucional",
        diluicaoPadrao: { quantidade: 150, unidade: "mg", volumeFinal: 150 }, via: "IV em bomba de infusão",
        velocidade: "Contínua, titulada pela escala RASS", repeticao: "Contínua; bolus de resgate 1–2 mg se agitação",
        observacoes: "Faixa usual PADIS: 0,02–0,1 mg/kg/h. Doses maiores somente com avaliação do intensivista. Antes de sair: confirmar volume suficiente na seringa para o trajeto + 30 min." },
      { id: "sedacao-continua-pediatrica", rotulo: "Sedação contínua — pediátrica (intubada)", faixa: "pediatrico", modo: "infusao",
        dose: { min: 0.05, max: 0.2, unidade: "mg/kg/h" }, doseMax: { valor: 0.2, unidade: "mg/kg/h" },
        diluicao: "Concentração conforme protocolo institucional e peso (ex.: 1 mg/mL)",
        diluicaoPadrao: null, via: "IV em bomba de infusão",
        velocidade: "Contínua, titulada por escala de sedação (ex.: COMFORT-B)", repeticao: "Contínua; bolus de resgate 0,05–0,1 mg/kg",
        observacoes: "Faixa usual em UTI pediátrica; o teto acima não é absoluto — doses maiores somente com intensivista pediátrico. Sem dose neonatal validada nesta biblioteca." },
      { id: "sri-adulto", rotulo: "Sequência rápida de intubação — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.1, max: 0.3, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Sem diluição ou diluído em SF para 1 mg/mL",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus", repeticao: "Dose única para indução",
        observacoes: "Início lento (2–3 min) e hipotensão frequente; no choque, reduzir dose (0,05–0,1 mg/kg) ou preferir cetamina/etomidato." }
    ],
    contraindicacoes: ["Hipersensibilidade a benzodiazepínicos", "Glaucoma de ângulo fechado não tratado", "Choque não corrigido (relativa — reduzir dose)"],
    cuidados: ["Depressão respiratória e apneia, potencializadas por opioides e álcool", "Idoso, hepatopata, insuficiência renal e ICC: reduzir dose e titular", "Infusão prolongada acumula metabólito ativo (efeito prolongado)", "Antídoto: flumazenil (ver item), com cautela"],
    adversos: ["Depressão respiratória", "Hipotensão", "Agitação paradoxal (crianças e idosos)", "Soluço", "Tolerância e abstinência após uso prolongado"],
    monitorizacao: ["SpO2 contínua", "Capnografia se disponível (obrigatória no intubado)", "FR, PA e FC a cada 5 min após bolus", "Escala de sedação (RASS)"],
    fontes: ["American Epilepsy Society — Guideline for the treatment of convulsive status epilepticus in children and adults (2016)", "Silbergleit R et al. — RAMPART, NEJM (2012)", "SCCM — PADIS Guidelines (2018)", "AHA — PALS (2020)", "Bula ANVISA — midazolam (Dormonid)"]
  },

  /* ---------------- DIAZEPAM ---------------- */
  {
    id: "diazepam", nome: "Diazepam",
    categorias: ["convulsao", "sedacao"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 5 mg/mL (2 mL = 10 mg)", conc: 5, unidade: "mg/mL", volume: 2 }],
    indicacoes: [
      { id: "convulsao-adulto", rotulo: "Convulsão (> 5 min) — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.15, max: 0.2, unidade: "mg/kg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Não diluir (precipita em SF/SG). Aplicar puro e lavar o acesso",
        diluicaoPadrao: null, via: "IV (não usar IM: absorção errática)", velocidade: "Lento, até 5 mg/min",
        repeticao: "Pode repetir 1 vez após 5 min",
        observacoes: "Ação anticonvulsivante curta (redistribuição): crise pode voltar em 20–30 min durante o transporte; planejar 2ª linha antes de sair." },
      { id: "convulsao-pediatrica-iv", rotulo: "Convulsão (> 5 min) — pediátrica, IV", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.15, max: 0.2, unidade: "mg/kg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Não diluir. Aplicar puro e lavar o acesso",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Lento, em 2–5 min",
        repeticao: "Pode repetir 1 vez após 5 min. Máximo 2 doses de benzodiazepínico no total",
        observacoes: "Somar benzodiazepínicos já feitos na origem." },
      { id: "convulsao-pediatrica-retal", rotulo: "Convulsão — pediátrica, retal (sem acesso)", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.2, max: 0.5, unidade: "mg/kg" }, doseMax: { valor: 20, unidade: "mg" },
        diluicao: "Solução injetável sem diluição, com seringa sem agulha ou sonda curta",
        diluicaoPadrao: null, via: "Retal", velocidade: "Aplicar e manter nádegas aproximadas por 1 min",
        repeticao: "Dose única; depois buscar acesso e 2ª linha",
        observacoes: "Prefira midazolam IM/IN quando disponível. Sem dose neonatal validada nesta biblioteca (contém álcool benzílico e benzoato de sódio)." }
    ],
    contraindicacoes: ["Hipersensibilidade a benzodiazepínicos", "Neonatos (excipientes: álcool benzílico/benzoato)", "Insuficiência respiratória grave sem suporte ventilatório", "Miastenia gravis"],
    cuidados: ["Depressão respiratória somada a outros sedativos", "Flebite e dor no local; usar veia calibrosa", "Meia-vida longa: sedação prolongada em idosos e hepatopatas"],
    adversos: ["Apneia", "Hipotensão", "Flebite", "Sedação prolongada"],
    monitorizacao: ["SpO2 contínua", "FR e padrão respiratório", "PA após a dose", "Nível de consciência e recorrência de crise"],
    fontes: ["American Epilepsy Society — Guideline for the treatment of convulsive status epilepticus in children and adults (2016)", "MS — Protocolos SAMU 192: Suporte Avançado de Vida (2016)", "Bula ANVISA — diazepam injetável"]
  },

  /* ---------------- CETAMINA ---------------- */
  {
    id: "cetamina", nome: "Cetamina (quetamina)",
    categorias: ["sri", "sedacao", "analgesia", "dor"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Cetamina racêmica 50 mg/mL (frasco 10 mL = 500 mg)", conc: 50, unidade: "mg/mL", volume: 10 },
      { rotulo: "Escetamina (S+) 50 mg/mL (ampola 2 mL = 100 mg) — potência ~2x a racêmica", conc: 50, unidade: "mg/mL", volume: 2 }
    ],
    indicacoes: [
      { id: "sri-adulto", rotulo: "Sequência rápida de intubação — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Diluir 1 frasco (500 mg) em SF para 50 mL = 10 mg/mL, ou aspirar puro com seringa de 1 mL",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus em 30–60 s", repeticao: "Dose única para indução",
        observacoes: "Dose para cetamina racêmica. Escetamina (S+): usar cerca de metade. Choque grave: reduzir para 0,5–1 mg/kg. Boa opção em broncoespasmo e hipotensão." },
      { id: "sri-pediatrica", rotulo: "Sequência rápida de intubação — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "mg/kg" }, doseMax: { valor: 2, unidade: "mg/kg" },
        diluicao: "Diluir para 10 mg/mL em SF para medir volumes pequenos",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus em 30–60 s", repeticao: "Dose única para indução",
        observacoes: "Dose para racêmica; escetamina ~metade. Aumenta secreção: aspirar. Sem dose neonatal validada nesta biblioteca." },
      { id: "analgesia-adulto", rotulo: "Analgesia em dose subdissociativa — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.1, max: 0.3, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Diluir a dose em 100 mL de SF",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 10–15 min (bolus rápido aumenta reação dissociativa)",
        repeticao: "Pode repetir a cada 20–30 min conforme dor, ou manter infusão",
        observacoes: "Útil em trauma e queimado com hipotensão, quando o opioide é arriscado. Dose para racêmica." },
      { id: "analgesia-pediatrica", rotulo: "Analgesia em dose subdissociativa — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.1, max: 0.3, unidade: "mg/kg" }, doseMax: { valor: 0.3, unidade: "mg/kg" },
        diluicao: "Diluir para 1–10 mg/mL em SF conforme volume",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 10–15 min", repeticao: "Pode repetir a cada 20–30 min",
        observacoes: "Conferir com protocolo pediátrico do serviço. Dose para racêmica." },
      { id: "sedoanalgesia-continua-adulto", rotulo: "Analgesia contínua (adjuvante) — adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 1, max: 2, unidade: "mcg/kg/min" }, doseMax: null,
        diluicao: "500 mg (10 mL) + 240 mL de SF = 250 mL (2 mg/mL)",
        diluicaoPadrao: { quantidade: 500, unidade: "mg", volumeFinal: 250 }, via: "IV em bomba de infusão",
        velocidade: "Contínua; ataque opcional 0,5 mg/kg", repeticao: "Contínua",
        observacoes: "Faixa PADIS para analgesia adjuvante. Doses maiores para sedação no intubado conforme protocolo institucional." }
    ],
    contraindicacoes: ["Hipertensão grave não controlada", "Síndrome coronariana aguda / dissecção de aorta (relativa: aumenta PA e FC)", "Psicose ativa", "Pré-eclâmpsia/eclâmpsia (relativa)"],
    cuidados: ["Laringoespasmo e hipersalivação, sobretudo em crianças", "Reação de emergência (agitação, alucinação): ambiente calmo; benzodiazepínico se necessário", "Não confundir racêmica com escetamina (S+): dose diferente", "TCE/HIC: não é contraindicação absoluta; evitar hipotensão é prioridade"],
    adversos: ["Hipertensão e taquicardia", "Reação dissociativa / emergência", "Laringoespasmo", "Hipersalivação", "Vômitos", "Depressão miocárdica em choque com catecolaminas esgotadas"],
    monitorizacao: ["PA e FC a cada 5 min", "SpO2 e capnografia", "Estado mental"],
    fontes: ["SCCM — PADIS Guidelines (2018)", "AHA — PALS (2020)", "MS — Protocolos SAMU 192: Suporte Avançado de Vida (2016)", "Bula ANVISA — cloridrato de cetamina e escetamina (Ketamin S+)"]
  },

  /* ---------------- ETOMIDATO ---------------- */
  {
    id: "etomidato", nome: "Etomidato",
    categorias: ["sri"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 2 mg/mL (10 mL = 20 mg)", conc: 2, unidade: "mg/mL", volume: 10 }],
    indicacoes: [
      { id: "sri-adulto", rotulo: "Sequência rápida de intubação — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.2, max: 0.3, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Sem diluição", diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus em 30–60 s",
        repeticao: "Dose única. Não usar em infusão contínua",
        observacoes: "Estabilidade hemodinâmica. Sem efeito analgésico. Mioclonias não são convulsão." },
      { id: "sri-pediatrica", rotulo: "Sequência rápida de intubação — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.2, max: 0.3, unidade: "mg/kg" }, doseMax: { valor: 20, unidade: "mg" },
        diluicao: "Sem diluição", diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus em 30–60 s",
        repeticao: "Dose única",
        observacoes: "PALS desaconselha uso rotineiro no choque séptico pediátrico (supressão adrenal). Bula: experiência limitada em menores de 10 anos. Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Hipersensibilidade", "Infusão contínua (supressão adrenal)", "Choque séptico (relativa — supressão adrenal; considerar cetamina)"],
    cuidados: ["Supressão adrenal transitória por até 24 h após dose única", "Dor à injeção: veia calibrosa", "Associar analgesia após a intubação"],
    adversos: ["Mioclonias", "Supressão adrenal", "Náuseas e vômitos", "Dor no local"],
    monitorizacao: ["PA e FC", "SpO2 e capnografia", "Glicemia e PA nas horas seguintes no séptico"],
    fontes: ["AHA — PALS (2020)", "MS — Protocolos SAMU 192: Suporte Avançado de Vida (2016)", "Bula ANVISA — etomidato (Hypnomidate)"]
  },

  /* ---------------- PROPOFOL ---------------- */
  {
    id: "propofol", nome: "Propofol",
    categorias: ["sri", "sedacao"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "1% — 10 mg/mL (ampola 20 mL = 200 mg)", conc: 10, unidade: "mg/mL", volume: 20 },
      { rotulo: "1% — 10 mg/mL (frasco 50 mL = 500 mg)", conc: 10, unidade: "mg/mL", volume: 50 },
      { rotulo: "2% — 20 mg/mL (frasco 50 mL = 1.000 mg)", conc: 20, unidade: "mg/mL", volume: 50 }
    ],
    indicacoes: [
      { id: "sri-adulto", rotulo: "Indução / SRI — adulto (hemodinamicamente estável)", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Sem diluição", diluicaoPadrao: null, via: "IV", velocidade: "Bolus lento em 30–60 s, titulado",
        repeticao: "Dose única para indução",
        observacoes: "Evitar em choque/hipovolemia (hipotensão importante). Idoso: 0,5–1 mg/kg." },
      { id: "sedacao-continua-adulto", rotulo: "Sedação contínua — adulto (intubado)", faixa: "adulto", modo: "infusao",
        dose: { min: 0.3, max: 3, unidade: "mg/kg/h" }, doseMax: { valor: 4, unidade: "mg/kg/h" },
        diluicao: "Usar puro (10 mg/mL). Trocar seringa/equipo a cada 12 h (emulsão lipídica)",
        diluicaoPadrao: { quantidade: 500, unidade: "mg", volumeFinal: 50 }, via: "IV em bomba de infusão, acesso exclusivo de preferência",
        velocidade: "Contínua, titulada por RASS", repeticao: "Contínua",
        observacoes: "Acima de 4 mg/kg/h ou uso > 48 h: risco de síndrome de infusão do propofol. Em transporte com PA limítrofe, preferir midazolam + fentanil." }
    ],
    contraindicacoes: ["Hipersensibilidade (inclusive a componentes da emulsão)", "Choque / instabilidade hemodinâmica (relativa)", "Sedação contínua em menores de 16 anos (bula)"],
    cuidados: ["Hipotensão e bradicardia dose-dependentes", "Sem efeito analgésico", "Emulsão favorece contaminação: técnica asséptica", "Pediatria: indução somente conforme protocolo de anestesia/UTI; não há dose pediátrica cadastrada nesta biblioteca"],
    adversos: ["Hipotensão", "Apneia", "Dor à injeção", "Hipertrigliceridemia", "Síndrome de infusão do propofol (acidose, rabdomiólise, arritmia)"],
    monitorizacao: ["PA a cada 5 min no início", "Capnografia", "Triglicerídeos se uso prolongado"],
    fontes: ["SCCM — PADIS Guidelines (2018)", "Bula ANVISA — propofol (Diprivan e genéricos)"]
  },

  /* ---------------- SUCCINILCOLINA ---------------- */
  {
    id: "succinilcolina", nome: "Succinilcolina (suxametônio)",
    categorias: ["sri"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Frasco-ampola 100 mg pó — reconstituir em 10 mL = 10 mg/mL", conc: 10, unidade: "mg/mL", volume: 10 },
      { rotulo: "Frasco-ampola 500 mg pó — reconstituir em 10 mL = 50 mg/mL", conc: 50, unidade: "mg/mL", volume: 10 }
    ],
    indicacoes: [
      { id: "sri-adulto", rotulo: "Sequência rápida de intubação — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 1.5, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Reconstituir 100 mg em 10 mL de AD ou SF (10 mg/mL)", diluicaoPadrao: null,
        via: "IV/IO", velocidade: "Bolus rápido, após o hipnótico", repeticao: "Dose única. Não repetir (bradicardia); se falhar, usar rocurônio",
        observacoes: "Início 45–60 s; duração 6–10 min. Usar peso real." },
      { id: "sri-pediatrica", rotulo: "Sequência rápida de intubação — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "mg/kg" }, doseMax: { valor: 2, unidade: "mg/kg" },
        diluicao: "Reconstituir 100 mg em 10 mL (10 mg/mL)", diluicaoPadrao: null,
        via: "IV/IO", velocidade: "Bolus rápido", repeticao: "Dose única",
        observacoes: "Lactentes: 2 mg/kg; crianças maiores: 1–1,5 mg/kg. Ter atropina pronta (bradicardia). Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Hipercalemia conhecida ou suspeita (DRC, rabdomiólise)", "Queimadura, esmagamento ou lesão medular após 24–72 h", "Doença neuromuscular (distrofias, miopatias, AVC/lesão com déficit motor antigo)", "Imobilização prolongada", "História pessoal/familiar de hipertermia maligna", "Deficiência de pseudocolinesterase"],
    cuidados: ["Sem antídoto: só usar se ventilação de resgate for viável", "Bradicardia, sobretudo em crianças e na 2ª dose", "Aumento de pressão intraocular e intragástrica", "Guardar refrigerado (2–8 °C) conforme bula"],
    adversos: ["Hipercalemia (até PCR)", "Bradicardia/assistolia", "Fasciculações e mialgia", "Hipertermia maligna", "Apneia prolongada (deficiência de colinesterase)"],
    monitorizacao: ["ECG contínuo", "SpO2 e capnografia", "Temperatura e EtCO2 (hipertermia maligna)"],
    fontes: ["AHA — PALS (2020)", "MS — Protocolos SAMU 192: Suporte Avançado de Vida (2016)", "Bula ANVISA — cloreto de suxametônio (Succitrat)"]
  },

  /* ---------------- ROCURÔNIO ---------------- */
  {
    id: "rocuronio", nome: "Rocurônio",
    categorias: ["sri"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Frasco-ampola 10 mg/mL (5 mL = 50 mg)", conc: 10, unidade: "mg/mL", volume: 5 }],
    indicacoes: [
      { id: "sri-adulto", rotulo: "Sequência rápida de intubação — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 1.2, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Sem diluição", diluicaoPadrao: null, via: "IV/IO", velocidade: "Bolus rápido após o hipnótico",
        repeticao: "Dose única para SRI; manutenção: ver bolus de manutenção",
        observacoes: "Início 60 s com 1,2 mg/kg; duração 45–70 min. Alternativa quando a succinilcolina é contraindicada." },
      { id: "sri-pediatrica", rotulo: "Sequência rápida de intubação — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.6, max: 1.2, unidade: "mg/kg" }, doseMax: { valor: 1.2, unidade: "mg/kg" },
        diluicao: "Sem diluição ou diluído em SF para 1–5 mg/mL para medir volumes pequenos", diluicaoPadrao: null,
        via: "IV/IO", velocidade: "Bolus rápido", repeticao: "Dose única para SRI",
        observacoes: "SRI: 1 mg/kg. Sem dose neonatal validada nesta biblioteca." },
      { id: "manutencao-bolus-adulto", rotulo: "Manutenção do bloqueio — bolus adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.1, max: 0.2, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Sem diluição", diluicaoPadrao: null, via: "IV", velocidade: "Bolus",
        repeticao: "Quando houver retorno de movimento/assincronia, com sedação adequada",
        observacoes: "Só manter bloqueio se sedação e analgesia estiverem garantidas (risco de paciente acordado e paralisado)." },
      { id: "infusao-adulto", rotulo: "Bloqueio contínuo — adulto", faixa: "adulto", modo: "infusao",
        dose: { min: 0.3, max: 0.6, unidade: "mg/kg/h" }, doseMax: null,
        diluicao: "Puro (10 mg/mL) em seringa de 50 mL, ou conforme protocolo institucional",
        diluicaoPadrao: { quantidade: 500, unidade: "mg", volumeFinal: 50 }, via: "IV em bomba de infusão",
        velocidade: "Contínua", repeticao: "Contínua",
        observacoes: "Indicação restrita (SDRA grave, assincronia refratária, HIC). Sedação profunda obrigatória." }
    ],
    contraindicacoes: ["Hipersensibilidade ao rocurônio ou brometo", "Impossibilidade de garantir ventilação (relativa: só usar com plano de via aérea)"],
    cuidados: ["Reversão: sugamadex (se disponível) conforme protocolo institucional", "Efeito prolongado em hepatopatas e idosos", "Bula: refrigerado 2–8 °C; fora da geladeira tem validade reduzida (conferir bula)", "Anotar horário da última dose na passagem do caso"],
    adversos: ["Paralisia prolongada", "Anafilaxia (rara)", "Taquicardia leve"],
    monitorizacao: ["Capnografia e alarmes do ventilador", "Sinais de sedação insuficiente (taquicardia, hipertensão, lacrimejamento)", "ECG contínuo"],
    fontes: ["AHA — PALS (2020)", "SCCM — Guidelines for neuromuscular blockade in critically ill adults (2016)", "Bula ANVISA — brometo de rocurônio (Esmeron)"]
  },

  /* ---------------- FENTANIL ---------------- */
  {
    id: "fentanil", nome: "Fentanil",
    categorias: ["sri", "analgesia", "sedacao", "dor"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Ampola 50 mcg/mL (2 mL = 100 mcg)", conc: 50, unidade: "mcg/mL", volume: 2 },
      { rotulo: "Ampola/frasco 50 mcg/mL (10 mL = 500 mcg)", conc: 50, unidade: "mcg/mL", volume: 10 }
    ],
    indicacoes: [
      { id: "analgesia-adulto", rotulo: "Analgesia — bolus adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 25, max: 100, unidade: "mcg" }, doseMax: { valor: 100, unidade: "mcg" },
        diluicao: "Pode diluir 100 mcg (2 mL) em 8 mL de SF = 10 mcg/mL", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em 1–2 min (bolus rápido: rigidez torácica)", repeticao: "Titular a cada 5 min até analgesia",
        observacoes: "Idoso/frágil: começar com 25 mcg. Equivalência aproximada: 100 mcg fentanil ≈ 10 mg morfina IV." },
      { id: "analgesia-pediatrica-iv", rotulo: "Analgesia — pediátrica IV", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.5, max: 1, unidade: "mcg/kg" }, doseMax: { valor: 50, unidade: "mcg" },
        diluicao: "Diluir para 10 mcg/mL em SF", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em 3–5 min", repeticao: "Pode repetir a cada 5–10 min, titulado",
        observacoes: "Ter naloxona e bolsa-válvula-máscara prontos." },
      { id: "analgesia-pediatrica-in", rotulo: "Analgesia — pediátrica intranasal (sem acesso)", faixa: "pediatrico", modo: "bolus",
        dose: { min: 1.5, max: 1.5, unidade: "mcg/kg" }, doseMax: { valor: 100, unidade: "mcg" },
        diluicao: "Sem diluição (50 mcg/mL), com atomizador; dividir entre as narinas", diluicaoPadrao: null,
        via: "Intranasal", velocidade: "Borrifar metade em cada narina", repeticao: "Pode repetir 0,5–1 mcg/kg após 10–15 min",
        observacoes: "Volume máximo por narina ~1 mL." },
      { id: "sri-adulto", rotulo: "Pré-tratamento na SRI — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 3, unidade: "mcg/kg" }, doseMax: null,
        diluicao: "Sem diluição", diluicaoPadrao: null, via: "IV", velocidade: "Em 1–2 min, 3 min antes da indução",
        repeticao: "Dose única", observacoes: "Útil em HIC, SCA, dissecção (atenua resposta pressórica). Omitir ou reduzir no choque." },
      { id: "sedoanalgesia-continua-adulto", rotulo: "Analgesia contínua — adulto (intubado)", faixa: "adulto", modo: "infusao",
        dose: { min: 0.7, max: 10, unidade: "mcg/kg/h" }, doseMax: null,
        diluicao: "Puro: 2.500 mcg (50 mL) em seringa de 50 mL = 50 mcg/mL; ou conforme protocolo institucional",
        diluicaoPadrao: { quantidade: 2500, unidade: "mcg", volumeFinal: 50 }, via: "IV em bomba de infusão",
        velocidade: "Contínua; iniciar no limite inferior e titular por dor (BPS/CPOT)", repeticao: "Contínua; bolus de resgate 25–50 mcg",
        observacoes: "Faixa PADIS 0,7–10 mcg/kg/h; maioria dos pacientes fica entre 1 e 3 mcg/kg/h." },
      { id: "sedoanalgesia-continua-pediatrica", rotulo: "Analgesia contínua — pediátrica (intubada)", faixa: "pediatrico", modo: "infusao",
        dose: { min: 1, max: 4, unidade: "mcg/kg/h" }, doseMax: { valor: 5, unidade: "mcg/kg/h" },
        diluicao: "Concentração conforme protocolo institucional e peso (ex.: 10 mcg/mL)", diluicaoPadrao: null,
        via: "IV em bomba de infusão", velocidade: "Contínua, titulada", repeticao: "Contínua; bolus de resgate 0,5–1 mcg/kg",
        observacoes: "Faixa usual de UTI pediátrica; doses acima somente com intensivista pediátrico." },
      { id: "analgesia-neonatal", rotulo: "Analgesia — neonatal (bolus)", faixa: "neonatal", modo: "bolus",
        dose: { min: 0.5, max: 2, unidade: "mcg/kg" }, doseMax: { valor: 2, unidade: "mcg/kg" },
        diluicao: "Diluir para 5–10 mcg/mL em SF para medir volumes pequenos", diluicaoPadrao: null,
        via: "IV", velocidade: "Muito lento, em 3–5 min (rigidez torácica)", repeticao: "Intervalo conforme neonatologista (em geral 2–4 h)",
        observacoes: "Somente com ventilação garantida ou capacidade imediata de ventilar. Conferir dose com neonatologista/Neofax." }
    ],
    contraindicacoes: ["Hipersensibilidade", "Depressão respiratória sem suporte ventilatório disponível", "Uso de IMAO nos últimos 14 dias (relativa)"],
    cuidados: ["Rigidez torácica com bolus rápido ou dose alta (tratar com bloqueador neuromuscular e ventilar)", "Acúmulo em infusão prolongada e na obesidade", "Antídoto: naloxona"],
    adversos: ["Depressão respiratória", "Rigidez torácica", "Bradicardia", "Hipotensão (menor que morfina)", "Náuseas e prurido"],
    monitorizacao: ["SpO2 e FR contínuas", "Capnografia", "Escala de dor e de sedação", "FC e PA"],
    fontes: ["SCCM — PADIS Guidelines (2018)", "AHA — PALS (2020)", "MS — Protocolos SAMU 192: Suporte Avançado de Vida (2016)", "Neofax / bula ANVISA — citrato de fentanila (Fentanest)"]
  },

  /* ---------------- MORFINA ---------------- */
  {
    id: "morfina", nome: "Morfina",
    categorias: ["analgesia", "dor"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "Ampola 10 mg/mL (1 mL = 10 mg)", conc: 10, unidade: "mg/mL", volume: 1 },
      { rotulo: "Ampola 1 mg/mL (2 mL = 2 mg)", conc: 1, unidade: "mg/mL", volume: 2 }
    ],
    indicacoes: [
      { id: "analgesia-adulto", rotulo: "Analgesia — bolus adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 2, max: 4, unidade: "mg" }, doseMax: null,
        diluicao: "Diluir 10 mg (1 mL) em 9 mL de SF = 1 mg/mL", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em 2–5 min", repeticao: "Titular 2 mg a cada 5–15 min até analgesia",
        observacoes: "SCA: usar se dor refratária a nitrato. Idoso e DRC: doses menores e intervalos maiores (acúmulo de metabólito)." },
      { id: "analgesia-pediatrica", rotulo: "Analgesia — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.05, max: 0.1, unidade: "mg/kg" }, doseMax: { valor: 4, unidade: "mg" },
        diluicao: "Diluir para 1 mg/mL (ou 0,1 mg/mL em lactentes)", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em 5 min", repeticao: "Pode repetir a cada 2–4 h; titulação mais frequente somente com monitorização",
        observacoes: "Ter naloxona pronta." },
      { id: "analgesia-neonatal", rotulo: "Analgesia — neonatal", faixa: "neonatal", modo: "bolus",
        dose: { min: 0.05, max: 0.1, unidade: "mg/kg" }, doseMax: { valor: 0.1, unidade: "mg/kg" },
        diluicao: "Diluir para 0,1 mg/mL em SF", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em 5 min ou mais", repeticao: "Intervalo conforme neonatologista (em geral 4 h)",
        observacoes: "Alto risco de apneia e hipotensão. Conferir dose com neonatologista/Neofax." }
    ],
    contraindicacoes: ["Hipersensibilidade", "Depressão respiratória sem suporte", "Hipotensão/choque (relativa)", "Íleo paralítico"],
    cuidados: ["Liberação de histamina: hipotensão e broncoespasmo", "Acúmulo na insuficiência renal", "Potencializa outros depressores do SNC", "Antídoto: naloxona"],
    adversos: ["Depressão respiratória", "Hipotensão", "Náuseas e vômitos", "Prurido", "Retenção urinária"],
    monitorizacao: ["SpO2 e FR", "PA", "Escala de dor e sedação"],
    fontes: ["AHA — ACLS (2020)", "MS — Protocolos SAMU 192: Suporte Avançado de Vida (2016)", "Neofax / bula ANVISA — sulfato de morfina (Dimorf)"]
  },

  /* ---------------- DIPIRONA ---------------- */
  {
    id: "dipirona", nome: "Dipirona (metamizol)",
    categorias: ["analgesia", "dor"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Ampola 500 mg/mL (2 mL = 1 g)", conc: 500, unidade: "mg/mL", volume: 2 }],
    indicacoes: [
      { id: "dor-febre-adulto", rotulo: "Dor / febre — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "g" }, doseMax: { valor: 2.5, unidade: "g" },
        diluicao: "Diluir em 10–20 mL de AD/SF (bolus lento) ou em 100 mL de SF", diluicaoPadrao: null,
        via: "IV ou IM", velocidade: "IV lento: no máximo 1 mL (500 mg) por minuto", repeticao: "A cada 6 h; máximo 5 g/dia",
        observacoes: "Aplicação IV rápida causa hipotensão." },
      { id: "dor-febre-pediatrica", rotulo: "Dor / febre — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 15, max: 25, unidade: "mg/kg" }, doseMax: { valor: 1, unidade: "g" },
        diluicao: "Diluir em AD/SF (ex.: completar 10 mL)", diluicaoPadrao: null,
        via: "IV (lactentes de 3 a 11 meses: somente IM, conforme bula)", velocidade: "IV lento, em pelo menos 3–5 min",
        repeticao: "A cada 6 h",
        observacoes: "Bula: não usar em menores de 3 meses ou abaixo de 5 kg. Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Alergia a pirazolonas", "Agranulocitose prévia ou doença de medula", "Porfiria aguda intermitente", "Deficiência de G6PD", "Último trimestre da gestação", "Menores de 3 meses ou < 5 kg"],
    cuidados: ["Hipotensão, sobretudo em febre alta, hipovolemia e infusão rápida", "Asma induzida por AINE: risco de broncoespasmo"],
    adversos: ["Hipotensão", "Reação anafilática", "Agranulocitose (rara)", "Rash"],
    monitorizacao: ["PA durante e após a infusão", "Sinais de reação alérgica"],
    fontes: ["Bula ANVISA — dipirona monoidratada injetável (Novalgina)"]
  },

  /* ---------------- ONDANSETRONA ---------------- */
  {
    id: "ondansetrona", nome: "Ondansetrona",
    categorias: ["vomito"],
    altoRisco: false,
    apresentacoes: [
      { rotulo: "Ampola 2 mg/mL (2 mL = 4 mg)", conc: 2, unidade: "mg/mL", volume: 2 },
      { rotulo: "Ampola 2 mg/mL (4 mL = 8 mg)", conc: 2, unidade: "mg/mL", volume: 4 }
    ],
    indicacoes: [
      { id: "vomito-adulto", rotulo: "Náuseas / vômitos — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 4, max: 8, unidade: "mg" }, doseMax: { valor: 16, unidade: "mg" },
        diluicao: "Pode ser feito puro ou diluído em 50–100 mL de SF", diluicaoPadrao: null,
        via: "IV ou IM", velocidade: "IV lento, em pelo menos 30 s (ideal 2–5 min)", repeticao: "Pode repetir em 8 h",
        observacoes: "Prevenção de vômito em transporte de paciente com rebaixamento leve, trauma de coluna ou cinetose. Proteger via aérea primeiro." },
      { id: "vomito-pediatrico", rotulo: "Náuseas / vômitos — pediátrico (≥ 1 mês)", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.1, max: 0.15, unidade: "mg/kg" }, doseMax: { valor: 4, unidade: "mg" },
        diluicao: "Diluir em SF para 10–20 mL", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em 2–5 min", repeticao: "Pode repetir em 8 h",
        observacoes: "Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Hipersensibilidade", "Síndrome do QT longo congênito", "Uso de apomorfina"],
    cuidados: ["Prolonga QT: cuidado com hipocalemia, hipomagnesemia e outras drogas que prolongam QT", "Síndrome serotoninérgica com outros serotoninérgicos"],
    adversos: ["Cefaleia", "Constipação", "Prolongamento de QT", "Reação no local"],
    monitorizacao: ["ECG se cardiopata ou QT longo", "Resposta clínica"],
    fontes: ["Bula ANVISA — cloridrato de ondansetrona (Zofran e genéricos)"]
  },

  /* ---------------- FENITOÍNA ---------------- */
  {
    id: "fenitoina", nome: "Fenitoína",
    categorias: ["convulsao"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 50 mg/mL (5 mL = 250 mg)", conc: 50, unidade: "mg/mL", volume: 5 }],
    indicacoes: [
      { id: "estado-de-mal-adulto", rotulo: "Estado de mal epiléptico (2ª linha) — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 20, max: 20, unidade: "mg/kg" }, doseMax: { valor: 1500, unidade: "mg" },
        diluicao: "Diluir SOMENTE em SF 0,9% (precipita em glicose), em 100–250 mL; usar logo após preparar; filtro em linha se disponível",
        diluicaoPadrao: null, via: "IV em veia calibrosa (nunca IM)", velocidade: "No máximo 50 mg/min (idoso/cardiopata: 20–25 mg/min)",
        repeticao: "Dose única de ataque; dose adicional somente conforme neurologista",
        observacoes: "Em bomba de infusão. Lavar o acesso com SF antes e depois. Ataque de 1.000 mg leva ≥ 20 min: iniciar antes de sair ou garantir bomba no transporte." },
      { id: "estado-de-mal-pediatrico", rotulo: "Estado de mal epiléptico (2ª linha) — pediátrico", faixa: "pediatrico", modo: "bolus",
        dose: { min: 20, max: 20, unidade: "mg/kg" }, doseMax: { valor: 1500, unidade: "mg" },
        diluicao: "Diluir somente em SF 0,9%; concentração final conforme protocolo institucional",
        diluicaoPadrao: null, via: "IV/IO (nunca IM)", velocidade: "No máximo 1 mg/kg/min (sem passar de 50 mg/min)",
        repeticao: "Dose única de ataque",
        observacoes: "Monitor cardíaco durante toda a infusão." },
      { id: "convulsao-neonatal", rotulo: "Convulsão neonatal (2ª linha após fenobarbital)", faixa: "neonatal", modo: "bolus",
        dose: { min: 15, max: 20, unidade: "mg/kg" }, doseMax: { valor: 20, unidade: "mg/kg" },
        diluicao: "Diluir somente em SF 0,9%; concentração conforme protocolo institucional/neonatologista",
        diluicaoPadrao: null, via: "IV", velocidade: "No máximo 1 mg/kg/min",
        repeticao: "Dose única de ataque",
        observacoes: "Indicar com neonatologista. Monitor cardíaco contínuo." }
    ],
    contraindicacoes: ["Bradicardia sinusal, bloqueio sinoatrial, BAV de 2º/3º grau, Stokes-Adams", "Hipersensibilidade a hidantoínas", "Crise por intoxicação (cocaína, tricíclico) — ineficaz e potencialmente nociva"],
    cuidados: ["Infusão rápida: hipotensão, bradicardia, arritmia e assistolia", "Extravasamento: necrose (síndrome da luva roxa)", "Não misturar com glicose nem outras drogas no mesmo acesso", "Muitas interações (anticoagulantes, antirretrovirais)"],
    adversos: ["Hipotensão", "Bradiarritmias", "Flebite e necrose tecidual", "Nistagmo e ataxia", "Reação cutânea grave (SSJ)"],
    monitorizacao: ["ECG contínuo e PA a cada 5 min durante a infusão", "Local da punção", "Nível sérico na unidade de destino"],
    fontes: ["American Epilepsy Society — Guideline for the treatment of convulsive status epilepticus in children and adults (2016)", "OMS — Guidelines on neonatal seizures (2011)", "Bula ANVISA — fenitoína sódica injetável (Hidantal)"]
  },

  /* ---------------- FENOBARBITAL ---------------- */
  {
    id: "fenobarbital", nome: "Fenobarbital",
    categorias: ["convulsao", "neonatal"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 100 mg/mL (2 mL = 200 mg)", conc: 100, unidade: "mg/mL", volume: 2 }],
    indicacoes: [
      { id: "estado-de-mal-adulto", rotulo: "Estado de mal epiléptico (2ª linha) — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 15, max: 20, unidade: "mg/kg" }, doseMax: null,
        diluicao: "Diluir em SF 0,9% (ex.: 100 mL); concentração conforme protocolo institucional",
        diluicaoPadrao: null, via: "IV", velocidade: "No máximo 50–100 mg/min",
        repeticao: "Dose única de ataque",
        observacoes: "Depressão respiratória e hipotensão, maiores após benzodiazepínicos: preparar via aérea antes." },
      { id: "estado-de-mal-pediatrico", rotulo: "Estado de mal epiléptico (2ª linha) — pediátrico", faixa: "pediatrico", modo: "bolus",
        dose: { min: 15, max: 20, unidade: "mg/kg" }, doseMax: { valor: 20, unidade: "mg/kg" },
        diluicao: "Diluir em SF 0,9%; concentração conforme protocolo institucional",
        diluicaoPadrao: null, via: "IV/IO", velocidade: "Em 15–20 min (no máximo 1–2 mg/kg/min)",
        repeticao: "Dose única de ataque", observacoes: "Ter suporte ventilatório pronto." },
      { id: "convulsao-neonatal", rotulo: "Convulsão neonatal (1ª linha)", faixa: "neonatal", modo: "bolus",
        dose: { min: 20, max: 20, unidade: "mg/kg" }, doseMax: { valor: 20, unidade: "mg/kg" },
        diluicao: "Diluir em SF 0,9% ou AD para facilitar infusão lenta; concentração conforme neonatologista",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 15–20 min (no máximo 1 mg/kg/min)",
        repeticao: "Se persistir: 10 mg/kg adicionais, até total de 40 mg/kg, conforme neonatologista",
        observacoes: "Primeira escolha OMS e ILAE. Antes: corrigir hipoglicemia, hipocalcemia e hipóxia." }
    ],
    contraindicacoes: ["Porfiria", "Hipersensibilidade a barbitúricos", "Insuficiência respiratória grave sem suporte"],
    cuidados: ["Depressão respiratória e sedação prolongada", "Hipotensão com infusão rápida", "Solução alcalina: irritante em extravasamento", "Indutor enzimático: muitas interações"],
    adversos: ["Sedação", "Apneia", "Hipotensão", "Excitação paradoxal em crianças"],
    monitorizacao: ["SpO2 e FR contínuas", "PA", "Nível de consciência", "Nível sérico no destino"],
    fontes: ["American Epilepsy Society — Guideline for the treatment of convulsive status epilepticus in children and adults (2016)", "OMS — Guidelines on neonatal seizures (2011)", "ILAE — Treatment of neonatal seizures (2023)", "Bula ANVISA — fenobarbital sódico injetável (Gardenal)"]
  },

  /* ---------------- LEVETIRACETAM ---------------- */
  {
    id: "levetiracetam", nome: "Levetiracetam",
    categorias: ["convulsao"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Frasco-ampola 100 mg/mL (5 mL = 500 mg)", conc: 100, unidade: "mg/mL", volume: 5 }],
    indicacoes: [
      { id: "estado-de-mal-adulto", rotulo: "Estado de mal epiléptico (2ª linha) — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 60, max: 60, unidade: "mg/kg" }, doseMax: { valor: 4500, unidade: "mg" },
        diluicao: "Diluir em 100 mL de SF, RL ou SG 5%", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 10–15 min", repeticao: "Dose única de ataque",
        observacoes: "Eficácia semelhante à fenitoína e ao valproato (ESETT), com menos hipotensão e arritmia. Boa opção para transporte. Ajustar manutenção na DRC." },
      { id: "estado-de-mal-pediatrico", rotulo: "Estado de mal epiléptico (2ª linha) — pediátrico", faixa: "pediatrico", modo: "bolus",
        dose: { min: 60, max: 60, unidade: "mg/kg" }, doseMax: { valor: 4500, unidade: "mg" },
        diluicao: "Diluir em SF para concentração ≤ 15 mg/mL (ex.: completar volume conforme peso)", diluicaoPadrao: null,
        via: "IV/IO", velocidade: "Em 10–15 min", repeticao: "Dose única de ataque",
        observacoes: "Estudado a partir de 2 anos (ESETT). Sem dose neonatal validada nesta biblioteca — usar fenobarbital como 1ª linha no neonato." }
    ],
    contraindicacoes: ["Hipersensibilidade ao levetiracetam ou pirrolidonas"],
    cuidados: ["Ajustar manutenção na insuficiência renal", "Alterações de humor/agitação"],
    adversos: ["Sonolência", "Tontura", "Agitação, irritabilidade"],
    monitorizacao: ["Recorrência de crise", "Nível de consciência"],
    fontes: ["Kapur J et al. — ESETT, NEJM (2019)", "American Epilepsy Society — Guideline for the treatment of convulsive status epilepticus in children and adults (2016)", "Bula ANVISA — levetiracetam injetável (Keppra)"]
  },

  /* ---------------- SULFATO DE MAGNÉSIO ---------------- */
  {
    id: "sulfato-magnesio", nome: "Sulfato de magnésio",
    categorias: ["obstetricia", "convulsao", "broncoespasmo", "arritmia"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "MgSO4 50% — 500 mg/mL (ampola 10 mL = 5 g; 4,05 mEq/mL)", conc: 500, unidade: "mg/mL", volume: 10 },
      { rotulo: "MgSO4 10% — 100 mg/mL (ampola 10 mL = 1 g; 0,81 mEq/mL)", conc: 100, unidade: "mg/mL", volume: 10 }
    ],
    indicacoes: [
      { id: "eclampsia-ataque-zuspan", rotulo: "Pré-eclâmpsia grave / eclâmpsia — ataque (Zuspan)", faixa: "adulto", modo: "bolus",
        dose: { min: 4, max: 4, unidade: "g" }, doseMax: { valor: 4, unidade: "g" },
        diluicao: "8 mL de MgSO4 50% (4 g) + 12 mL de AD = 20 mL; ou 4 g em 100 mL de SF em bomba",
        diluicaoPadrao: null, via: "IV", velocidade: "Em 15–20 min (não fazer em bolus rápido)",
        repeticao: "Se convulsionar já em uso: mais 2 g IV em 5–10 min",
        observacoes: "Fazer o ataque ANTES de sair. Conferir se o MgSO4 é 50% ou 10% (volume 5 vezes diferente). Seguir com manutenção." },
      { id: "eclampsia-ataque-pritchard", rotulo: "Eclâmpsia — esquema IM (Pritchard), sem bomba de infusão", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 10, unidade: "g" }, doseMax: { valor: 10, unidade: "g" },
        diluicao: "Sem diluição: 10 mL de MgSO4 50% (5 g) em cada nádega (IM profundo), junto com o ataque de 4 g IV",
        diluicaoPadrao: null, via: "IM profundo (glúteo) + 4 g IV", velocidade: "IM profundo, lento",
        repeticao: "Manutenção: 5 g (10 mL a 50%) IM a cada 4 h, alternando nádegas, se reflexo patelar presente, FR ≥ 16 e diurese ≥ 25 mL/h",
        observacoes: "Opção quando não há bomba de infusão no transporte. Dolorosa; pode-se associar lidocaína 2% 1 mL conforme protocolo institucional." },
      { id: "eclampsia-manutencao", rotulo: "Pré-eclâmpsia grave / eclâmpsia — manutenção (Zuspan)", faixa: "adulto", modo: "infusao",
        dose: { min: 1, max: 2, unidade: "g/h" }, doseMax: { valor: 2, unidade: "g/h" },
        diluicao: "10 mL de MgSO4 50% (5 g) + 490 mL de SF ou SG 5% = 500 mL (10 mg/mL): 100 mL/h = 1 g/h",
        diluicaoPadrao: { quantidade: 5, unidade: "g", volumeFinal: 500 }, via: "IV em bomba de infusão",
        velocidade: "Contínua", repeticao: "Manter por 24 h após o parto ou a última crise",
        observacoes: "MS usa 1 g/h; 2 g/h conforme protocolo institucional. Insuficiência renal (creatinina elevada/oligúria): reduzir ou suspender e discutir. Sem bomba: não usar gotejamento livre — preferir Pritchard." },
      { id: "asma-grave-adulto", rotulo: "Asma grave refratária — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 2, max: 2, unidade: "g" }, doseMax: { valor: 2, unidade: "g" },
        diluicao: "2 g em 100 mL de SF", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 20 min", repeticao: "Dose única",
        observacoes: "Após broncodilatador inalatório e corticoide sem resposta." },
      { id: "asma-grave-pediatrica", rotulo: "Asma grave refratária — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 40, max: 50, unidade: "mg/kg" }, doseMax: { valor: 2, unidade: "g" },
        diluicao: "Diluir em SF (ex.: 50–100 mL conforme peso)", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 20 min", repeticao: "Dose única",
        observacoes: "Observar hipotensão e rubor. Sem dose neonatal validada nesta biblioteca." },
      { id: "torsades-adulto", rotulo: "Torsades de pointes / hipomagnesemia grave — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 2, unidade: "g" }, doseMax: { valor: 2, unidade: "g" },
        diluicao: "1–2 g em 10 mL de SG 5% ou SF (PCR) ou em 50–100 mL (com pulso)", diluicaoPadrao: null,
        via: "IV/IO", velocidade: "Sem pulso: em 5–20 min. Com pulso: em 15–60 min",
        repeticao: "Conforme resposta e magnésio sérico",
        observacoes: "Corrigir também potássio. Suspender drogas que prolongam QT." },
      { id: "torsades-pediatrica", rotulo: "Torsades de pointes — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 25, max: 50, unidade: "mg/kg" }, doseMax: { valor: 2, unidade: "g" },
        diluicao: "Diluir em SF ou SG 5%", diluicaoPadrao: null,
        via: "IV/IO", velocidade: "Sem pulso: em bolus. Com pulso: em 10–20 min",
        repeticao: "Conforme resposta", observacoes: "PALS." }
    ],
    contraindicacoes: ["Miastenia gravis", "Bloqueio atrioventricular (relativa)", "Insuficiência renal grave / anúria (ajustar ou suspender)", "Reflexo patelar abolido, FR < 12–16 ou diurese < 25 mL/h (suspender manutenção)"],
    cuidados: ["Confundir 50% com 10% é erro grave: conferir rótulo e cálculo em voz alta", "Antídoto da intoxicação: gluconato de cálcio 10% 10 mL (1 g) IV em 3–5 min", "Potencializa bloqueadores neuromusculares e bloqueadores de canal de cálcio", "Gestante: não substitui anti-hipertensivo"],
    adversos: ["Rubor e calor", "Hipotensão", "Depressão respiratória", "Abolição de reflexos", "Bradicardia e parada cardíaca (intoxicação)"],
    monitorizacao: ["Reflexo patelar a cada hora", "FR (≥ 16 irpm) e SpO2", "Diurese (≥ 25 mL/h; sonda vesical)", "PA", "Magnésio sérico quando disponível"],
    fontes: ["MS — Manual de Gestação de Alto Risco (2022)", "FEBRASGO — Pré-eclâmpsia: protocolo (2021)", "OMS — Recommendations for prevention and treatment of pre-eclampsia and eclampsia (2011)", "GINA — Global Strategy for Asthma Management and Prevention (2024)", "AHA — ACLS e PALS (2020)"]
  },

  /* ---------------- NALOXONA ---------------- */
  {
    id: "naloxona", nome: "Naloxona",
    categorias: ["antidoto"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Ampola 0,4 mg/mL (1 mL = 0,4 mg)", conc: 0.4, unidade: "mg/mL", volume: 1 }],
    indicacoes: [
      { id: "intoxicacao-opioide-adulto", rotulo: "Depressão respiratória por opioide — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.04, max: 0.4, unidade: "mg" }, doseMax: { valor: 2, unidade: "mg" },
        diluicao: "Diluir 0,4 mg (1 mL) em 9 mL de SF = 0,04 mg/mL para titular", diluicaoPadrao: null,
        via: "IV, IM ou IO", velocidade: "Bolus; titular até FR adequada (não buscar despertar total)",
        repeticao: "A cada 2–3 min; se não houver resposta após 10 mg no total, rever diagnóstico",
        observacoes: "Ventilar com bolsa-válvula-máscara primeiro. Usuário crônico: doses pequenas (0,04 mg) para evitar abstinência aguda. Meia-vida menor que a do opioide: risco de renarcotização no transporte; se precisar de várias doses, considerar infusão conforme protocolo institucional." },
      { id: "intoxicacao-opioide-pediatrica", rotulo: "Intoxicação por opioide — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.1, max: 0.1, unidade: "mg/kg" }, doseMax: { valor: 2, unidade: "mg" },
        diluicao: "Sem diluição ou diluído em SF para medir volume", diluicaoPadrao: null,
        via: "IV, IM ou IO", velocidade: "Bolus", repeticao: "A cada 2–3 min se necessário",
        observacoes: "Dose para intoxicação (PALS). Depressão por opioide terapêutico: usar doses menores, conforme protocolo institucional. Sem dose neonatal validada nesta biblioteca: o NRP/SBP não recomenda naloxona na reanimação neonatal — prioridade é ventilar." }
    ],
    contraindicacoes: ["Hipersensibilidade"],
    cuidados: ["Abstinência aguda em dependentes (agitação, vômitos, hipertensão)", "Edema pulmonar e arritmia após reversão abrupta", "Renarcotização: observar por pelo menos 2 h após a última dose"],
    adversos: ["Síndrome de abstinência", "Hipertensão e taquicardia", "Edema agudo de pulmão", "Vômitos"],
    monitorizacao: ["FR e SpO2 contínuas", "Nível de consciência", "Capnografia"],
    fontes: ["AHA — Atualização em emergências associadas a opioides (2020) e ACLS/PALS (2020)", "SBP — Programa de Reanimação Neonatal (2022)", "Bula ANVISA — cloridrato de naloxona (Narcan)"]
  },

  /* ---------------- FLUMAZENIL ---------------- */
  {
    id: "flumazenil", nome: "Flumazenil",
    categorias: ["antidoto"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Ampola 0,1 mg/mL (5 mL = 0,5 mg)", conc: 0.1, unidade: "mg/mL", volume: 5 }],
    indicacoes: [
      { id: "reversao-bzd-adulto", rotulo: "Reversão de sedação por benzodiazepínico — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.2, max: 0.2, unidade: "mg" }, doseMax: { valor: 1, unidade: "mg" },
        diluicao: "Sem diluição", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 15 s", repeticao: "0,1 mg a cada 60 s até o efeito; máximo total 1 mg",
        observacoes: "Indicação principal: sedação iatrogênica por benzodiazepínico. Não usar de rotina em intoxicação desconhecida (risco de convulsão)." },
      { id: "reversao-bzd-pediatrica", rotulo: "Reversão de sedação por benzodiazepínico — pediátrica (> 1 ano)", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.01, max: 0.01, unidade: "mg/kg" }, doseMax: { valor: 0.2, unidade: "mg" },
        diluicao: "Sem diluição", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 15 s", repeticao: "A cada 60 s se necessário; máximo total 0,05 mg/kg ou 1 mg (o que for menor)",
        observacoes: "Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Uso crônico de benzodiazepínico ou epilepsia em tratamento com benzodiazepínico", "Intoxicação por tricíclico ou mista desconhecida", "Benzodiazepínico usado para controlar crise ou HIC"],
    cuidados: ["Meia-vida curta: ressedação no transporte", "Pode precipitar convulsão e arritmia"],
    adversos: ["Convulsão", "Agitação e ansiedade", "Náuseas e vômitos", "Arritmia"],
    monitorizacao: ["Nível de consciência por pelo menos 2 h", "SpO2 e FR", "ECG"],
    fontes: ["Bula ANVISA — flumazenil (Lanexat)"]
  },

  /* ---------------- OCITOCINA ---------------- */
  {
    id: "ocitocina", nome: "Ocitocina",
    categorias: ["obstetricia", "hemorragia"],
    altoRisco: true,
    apresentacoes: [{ rotulo: "Ampola 5 UI/mL (1 mL = 5 UI)", conc: 5, unidade: "UI/mL", volume: 1 }],
    indicacoes: [
      { id: "prevencao-hpp", rotulo: "Prevenção de HPP — após o nascimento (parto na ambulância)", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 10, unidade: "UI" }, doseMax: { valor: 10, unidade: "UI" },
        diluicao: "Sem diluição (2 ampolas)", diluicaoPadrao: null,
        via: "IM", velocidade: "Injeção IM única no 1º minuto após o nascimento", repeticao: "Dose única",
        observacoes: "Excluir segundo feto antes de aplicar." },
      { id: "hpp-ataque", rotulo: "Hemorragia pós-parto — ataque IV", faixa: "adulto", modo: "bolus",
        dose: { min: 5, max: 5, unidade: "UI" }, doseMax: { valor: 5, unidade: "UI" },
        diluicao: "5 UI diluídas em 10 mL de SF (ou puro, lento)", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em pelo menos 3 min (bolus rápido: hipotensão e isquemia)",
        repeticao: "Seguir imediatamente com infusão contínua",
        observacoes: "Associar massagem uterina, ácido tranexâmico e reposição volêmica. Sem acesso IV: 10 UI IM." },
      { id: "hpp-infusao", rotulo: "Hemorragia pós-parto — infusão contínua", faixa: "adulto", modo: "infusao",
        dose: { min: 5, max: 10, unidade: "UI/h" }, doseMax: null,
        diluicao: "20 UI (4 ampolas) em 500 mL de SF = 0,04 UI/mL: 250 mL/h = 10 UI/h (ataque); 125 mL/h = 5 UI/h (manutenção)",
        diluicaoPadrao: { quantidade: 20, unidade: "UI", volumeFinal: 500 }, via: "IV em bomba de infusão",
        velocidade: "250 mL/h nas primeiras horas e depois 125 mL/h", repeticao: "Manutenção por ~4 h após controle do sangramento, conforme protocolo",
        observacoes: "Se o sangramento persistir com ocitocina, segunda linha conforme protocolo institucional. Paciente com HPP grave: não transportar sem acesso calibroso duplo e reserva de hemoderivados acionada no destino." }
    ],
    contraindicacoes: ["Hipersensibilidade", "Uso para indução/condução de trabalho de parto durante transporte (suspender ou discutir com obstetra)", "Hipertonia uterina ou sofrimento fetal com feto intraútero"],
    cuidados: ["Bolus IV rápido: hipotensão, taquicardia e isquemia miocárdica", "Doses altas com soro sem sódio: intoxicação hídrica (hiponatremia, convulsão)", "Antes do parto, só com obstetra"],
    adversos: ["Hipotensão", "Taquicardia", "Náuseas e vômitos", "Hiponatremia dilucional", "Hipertonia uterina"],
    monitorizacao: ["Tônus uterino e sangramento a cada 15 min", "PA, FC e índice de choque", "Diurese"],
    fontes: ["OMS — Recommendations on uterotonics for the prevention of postpartum haemorrhage (2018)", "OPAS/MS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018)", "MS — Manual de Gestação de Alto Risco (2022)", "Bula ANVISA — ocitocina (Syntocinon/Oxiton)"]
  },

  /* ---------------- HIDRALAZINA ---------------- */
  {
    id: "hidralazina", nome: "Hidralazina",
    categorias: ["has-grave", "obstetricia"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Ampola 20 mg/mL (1 mL = 20 mg)", conc: 20, unidade: "mg/mL", volume: 1 }],
    indicacoes: [
      { id: "crise-hipertensiva-gestante", rotulo: "Hipertensão grave na gestação/puerpério (PAS ≥ 160 ou PAD ≥ 110)", faixa: "adulto", modo: "bolus",
        dose: { min: 5, max: 5, unidade: "mg" }, doseMax: { valor: 30, unidade: "mg" },
        diluicao: "1 ampola (20 mg) + 19 mL de AD = 20 mL (1 mg/mL); aplicar 5 mL (5 mg)", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em 1–2 min", repeticao: "5 mg a cada 20 min até controle; dose máxima total 30 mg (MS)",
        observacoes: "Meta: PAS 140–150 e PAD 90–100 mmHg; não reduzir bruscamente (sofrimento fetal). Associar sulfato de magnésio na pré-eclâmpsia grave. Medir PA a cada 5 min após cada dose." },
      { id: "crise-hipertensiva-adulto", rotulo: "Emergência hipertensiva — adulto não gestante (2ª linha)", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 20, unidade: "mg" }, doseMax: { valor: 20, unidade: "mg" },
        diluicao: "Diluir para 1 mg/mL em AD", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento", repeticao: "A cada 4–6 h",
        observacoes: "Resposta imprevisível e prolongada; preferir drogas tituláveis (nitroprussiato, nitroglicerina) quando houver bomba." },
      { id: "crise-hipertensiva-pediatrica", rotulo: "Hipertensão grave — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.1, max: 0.2, unidade: "mg/kg" }, doseMax: { valor: 20, unidade: "mg" },
        diluicao: "Diluir para 1 mg/mL em AD", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento", repeticao: "A cada 4–6 h, conforme nefrologista/intensivista pediátrico",
        observacoes: "Conferir com protocolo pediátrico. Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Hipersensibilidade", "Doença coronariana / SCA", "Dissecção de aorta (taquicardia reflexa)", "Valvopatia mitral reumática"],
    cuidados: ["Hipotensão tardia (efeito máximo em 10–20 min): não repetir antes do intervalo", "Taquicardia reflexa", "Em gestante: monitorar vitalidade fetal quando possível"],
    adversos: ["Taquicardia", "Cefaleia", "Rubor", "Hipotensão", "Náuseas"],
    monitorizacao: ["PA a cada 5 min por 30 min após a dose", "FC", "BCF quando aplicável"],
    fontes: ["MS — Manual de Gestação de Alto Risco (2022)", "FEBRASGO — Pré-eclâmpsia: protocolo (2021)", "AHA/ACC — Guideline for high blood pressure in adults (2017)", "Bula ANVISA — cloridrato de hidralazina (Nepresol)"]
  },

  /* ---------------- MANITOL ---------------- */
  {
    id: "manitol", nome: "Manitol 20%",
    categorias: ["hic"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Manitol 20% — 200 mg/mL (frasco 250 mL = 50 g)", conc: 200, unidade: "mg/mL", volume: 250 }],
    indicacoes: [
      { id: "hic-adulto", rotulo: "Hipertensão intracraniana / herniação — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 0.25, max: 1, unidade: "g/kg" }, doseMax: { valor: 1, unidade: "g/kg" },
        diluicao: "Sem diluição; usar equipo com filtro. Se houver cristais, aquecer o frasco até dissolver",
        diluicaoPadrao: null, via: "IV (periférico calibroso ou central)", velocidade: "Em 15–20 min",
        repeticao: "Conforme neurocirurgião; evitar se osmolaridade sérica > 320 mOsm/L",
        observacoes: "Só com PA adequada (ATLS: não usar em hipotensão). Sonda vesical antes de sair (diurese intensa). Ponte até a neurocirurgia." },
      { id: "hic-pediatrica", rotulo: "Hipertensão intracraniana / herniação — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.25, max: 1, unidade: "g/kg" }, doseMax: { valor: 1, unidade: "g/kg" },
        diluicao: "Sem diluição; equipo com filtro", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 15–20 min", repeticao: "Conforme neurocirurgião",
        observacoes: "Diretriz pediátrica (BTF 2019) prefere salina hipertônica 3%. Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Hipovolemia ou hipotensão", "Anúria", "Edema agudo de pulmão / ICC descompensada", "Desidratação grave"],
    cuidados: ["Diurese osmótica: hipovolemia, hipotensão e distúrbio eletrolítico", "Repor perdas com cristaloide isotônico", "Extravasamento causa lesão tecidual"],
    adversos: ["Hipotensão", "Hiponatremia/hipernatremia", "Hipocalemia", "Lesão renal aguda", "Sobrecarga volêmica inicial"],
    monitorizacao: ["PA (manter PAS ≥ 100–110 mmHg no TCE adulto)", "Diurese (sonda vesical)", "Pupilas e Glasgow", "Sódio e osmolaridade no destino"],
    fontes: ["American College of Surgeons — ATLS 10ª ed. (2018)", "Brain Trauma Foundation — Guidelines for severe TBI, 4th ed. (2016)", "Brain Trauma Foundation — Pediatric severe TBI guidelines, 3rd ed. (2019)", "Bula ANVISA — manitol 20%"]
  },

  /* ---------------- SALINA HIPERTÔNICA ---------------- */
  {
    id: "salina-hipertonica", nome: "Solução salina hipertônica (NaCl 3% e 20%)",
    categorias: ["hic", "hipercalemia"],
    altoRisco: true,
    apresentacoes: [
      { rotulo: "NaCl 3% preparado — 30 mg/mL (0,51 mEq/mL): 89 mL de SF 0,9% + 11 mL de NaCl 20%", conc: 30, unidade: "mg/mL", volume: 100 },
      { rotulo: "NaCl 20% — 200 mg/mL (3,4 mEq/mL), ampola 10 mL", conc: 200, unidade: "mg/mL", volume: 10 },
      { rotulo: "NaCl 10% — 100 mg/mL (1,7 mEq/mL), ampola 10 mL", conc: 100, unidade: "mg/mL", volume: 10 }
    ],
    indicacoes: [
      { id: "hic-adulto", rotulo: "Hipertensão intracraniana / herniação — adulto (NaCl 3%)", faixa: "adulto", modo: "bolus",
        dose: { min: 2, max: 5, unidade: "mL/kg" }, doseMax: { valor: 250, unidade: "mL" },
        diluicao: "NaCl 3%: 445 mL de SF 0,9% + 55 mL de NaCl 20% = 500 mL (ou 89 mL + 11 mL = 100 mL). Rotular a bolsa",
        diluicaoPadrao: null, via: "IV (central preferível; periférico calibroso por curto período)", velocidade: "Em 10–20 min",
        repeticao: "Conforme sódio sérico e neurocirurgião",
        observacoes: "Dose de volume em mL de NaCl 3% (não de NaCl 20%). Preferível ao manitol se hipotensão/hipovolemia. Outras concentrações (7,5%, 20%) somente conforme protocolo institucional e via central." },
      { id: "hic-pediatrica", rotulo: "Hipertensão intracraniana — pediátrica (NaCl 3%), bolus", faixa: "pediatrico", modo: "bolus",
        dose: { min: 2, max: 5, unidade: "mL/kg" }, doseMax: { valor: 250, unidade: "mL" },
        diluicao: "NaCl 3% preparado (89 mL de SF 0,9% + 11 mL de NaCl 20%)", diluicaoPadrao: null,
        via: "IV/IO", velocidade: "Em 10–20 min", repeticao: "Conforme sódio e intensivista pediátrico",
        observacoes: "BTF pediátrica 2019. Sem dose neonatal validada nesta biblioteca." },
      { id: "hic-pediatrica-infusao", rotulo: "Hipertensão intracraniana — pediátrica (NaCl 3%), contínua", faixa: "pediatrico", modo: "infusao",
        dose: { min: 0.1, max: 1, unidade: "mL/kg/h" }, doseMax: { valor: 1, unidade: "mL/kg/h" },
        diluicao: "NaCl 3% preparado", diluicaoPadrao: null,
        via: "IV em bomba de infusão", velocidade: "Contínua, menor dose que mantenha PIC/clínica controladas", repeticao: "Contínua",
        observacoes: "Evitar sódio sérico > 160 mEq/L (BTF 2019)." },
      { id: "hiponatremia-grave-adulto", rotulo: "Hiponatremia grave sintomática (convulsão, coma) — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 150, max: 150, unidade: "mL" }, doseMax: { valor: 150, unidade: "mL" },
        diluicao: "NaCl 3% preparado", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 20 min", repeticao: "Pode repetir até 2 vezes (total 3 bolus) até melhora clínica ou alta de 5 mEq/L",
        observacoes: "Limite de correção: 10 mEq/L nas primeiras 24 h (risco de desmielinização osmótica). Hiponatremia pediátrica: conforme protocolo institucional." }
    ],
    contraindicacoes: ["Hipernatremia (Na > 155–160 mEq/L)", "Hiponatremia crônica assintomática (correção lenta)", "ICC descompensada / EAP (relativa)"],
    cuidados: ["Erro de concentração é grave: NaCl 20% NUNCA em bolus sem diluir", "Flebite em veia periférica com concentrações > 3%", "Sobrecarga volêmica", "Correção rápida de hiponatremia crônica: desmielinização osmótica"],
    adversos: ["Hipernatremia", "Sobrecarga volêmica / EAP", "Acidose hiperclorêmica", "Flebite", "Desmielinização osmótica (correção rápida)"],
    monitorizacao: ["Sódio sérico (antes e após; no destino a cada 4–6 h)", "PA e sinais de congestão", "Pupilas e Glasgow", "Local do acesso"],
    fontes: ["Brain Trauma Foundation — Guidelines for severe TBI, 4th ed. (2016)", "Brain Trauma Foundation — Pediatric severe TBI guidelines, 3rd ed. (2019)", "ESE/ESICM/ERBP — Clinical practice guideline on hyponatraemia (2014)", "American College of Surgeons — ATLS 10ª ed. (2018)"]
  },

  /* ---------------- ÁCIDO TRANEXÂMICO ---------------- */
  {
    id: "acido-tranexamico", nome: "Ácido tranexâmico",
    categorias: ["hemorragia", "obstetricia"],
    altoRisco: false,
    apresentacoes: [{ rotulo: "Ampola 50 mg/mL (5 mL = 250 mg)", conc: 50, unidade: "mg/mL", volume: 5 }],
    indicacoes: [
      { id: "trauma-ataque-adulto", rotulo: "Trauma com sangramento — adulto (até 3 h do trauma)", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 1, unidade: "g" }, doseMax: { valor: 1, unidade: "g" },
        diluicao: "1 g (4 ampolas, 20 mL) em 100 mL de SF", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 10 min (rápido causa hipotensão)", repeticao: "Seguir com 1 g em 8 h",
        observacoes: "Só se dentro de 3 h do trauma (após 3 h aumenta mortalidade). Anotar horário do trauma e da dose para a equipe de destino. TCE leve/moderado: benefício dentro de 3 h (CRASH-3)." },
      { id: "trauma-manutencao-adulto", rotulo: "Trauma — manutenção adulto (1 g em 8 h)", faixa: "adulto", modo: "infusao",
        dose: { min: 125, max: 125, unidade: "mg/h" }, doseMax: { valor: 125, unidade: "mg/h" },
        diluicao: "1 g (20 mL) + 80 mL de SF = 100 mL (10 mg/mL): 12,5 mL/h por 8 h",
        diluicaoPadrao: { quantidade: 1000, unidade: "mg", volumeFinal: 100 }, via: "IV em bomba de infusão",
        velocidade: "Contínua por 8 h", repeticao: "Dose única de manutenção",
        observacoes: "Se não houver bomba, conforme protocolo institucional; informar no destino se a manutenção não foi iniciada." },
      { id: "hpp-adulto", rotulo: "Hemorragia pós-parto", faixa: "adulto", modo: "bolus",
        dose: { min: 1, max: 1, unidade: "g" }, doseMax: { valor: 1, unidade: "g" },
        diluicao: "1 g (20 mL) em 100 mL de SF, ou puro lento", diluicaoPadrao: null,
        via: "IV", velocidade: "Em 10 min", repeticao: "Segunda dose de 1 g se sangramento continuar após 30 min ou recorrer em 24 h",
        observacoes: "Iniciar o quanto antes, até 3 h do parto (OMS/WOMAN). Associar ocitocina." },
      { id: "trauma-pediatrico", rotulo: "Trauma com sangramento — pediátrico (até 3 h)", faixa: "pediatrico", modo: "bolus",
        dose: { min: 15, max: 15, unidade: "mg/kg" }, doseMax: { valor: 1, unidade: "g" },
        diluicao: "Diluir em SF (ex.: 10 mg/mL)", diluicaoPadrao: null,
        via: "IV/IO", velocidade: "Em 10 min", repeticao: "Seguido de 2 mg/kg/h por 8 h conforme protocolo institucional",
        observacoes: "Evidência pediátrica extrapolada (consenso RCPCH 2012). Sem dose neonatal validada nesta biblioteca." }
    ],
    contraindicacoes: ["Trauma com mais de 3 h de evolução", "Trombose venosa ou arterial ativa", "Hipersensibilidade", "Hemorragia subaracnóidea (relativa)"],
    cuidados: ["Convulsão com doses altas, sobretudo na insuficiência renal", "Ajustar manutenção na insuficiência renal grave", "Não substitui controle mecânico do sangramento"],
    adversos: ["Hipotensão (infusão rápida)", "Náuseas e vômitos", "Convulsão (doses altas)", "Tromboembolismo (raro)"],
    monitorizacao: ["PA e FC", "Sangramento visível e sinais de choque", "Horário da dose registrado"],
    fontes: ["CRASH-2 Collaborators — Lancet (2010, 2011)", "CRASH-3 Collaborators — Lancet (2019)", "OMS — Recommendation on tranexamic acid for the treatment of postpartum haemorrhage (2017)", "American College of Surgeons — ATLS 10ª ed. (2018)", "RCPCH — Major trauma and the use of tranexamic acid in children (2012)", "Bula ANVISA — ácido tranexâmico (Transamin)"]
  },

  /* ---------------- DEXAMETASONA ---------------- */
  {
    id: "dexametasona", nome: "Dexametasona (fosfato dissódico)",
    categorias: ["hic", "obstetricia"],
    altoRisco: false,
    apresentacoes: [
      { rotulo: "Ampola 4 mg/mL (2,5 mL = 10 mg)", conc: 4, unidade: "mg/mL", volume: 2.5 },
      { rotulo: "Ampola 2 mg/mL (1 mL = 2 mg)", conc: 2, unidade: "mg/mL", volume: 1 }
    ],
    indicacoes: [
      { id: "edema-cerebral-tumoral-adulto", rotulo: "Edema cerebral vasogênico (tumor/metástase) — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 10, unidade: "mg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Puro ou em 50–100 mL de SF", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento, em 1–5 min (ou infusão em 15 min)", repeticao: "Manutenção 4 mg a cada 6 h conforme neurocirurgião",
        observacoes: "NÃO usar no TCE (CRASH: aumenta mortalidade) nem no AVC." },
      { id: "meningite-adulto", rotulo: "Meningite bacteriana suspeita — adulto", faixa: "adulto", modo: "bolus",
        dose: { min: 10, max: 10, unidade: "mg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Puro ou em 50 mL de SF", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento", repeticao: "A cada 6 h por 4 dias",
        observacoes: "Primeira dose 10–20 min antes ou junto da 1ª dose de antibiótico. Não atrasar o antibiótico para o transporte." },
      { id: "meningite-pediatrica", rotulo: "Meningite bacteriana suspeita — pediátrica (> 6 semanas)", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.15, max: 0.15, unidade: "mg/kg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Puro ou diluído em SF", diluicaoPadrao: null,
        via: "IV", velocidade: "Lento", repeticao: "A cada 6 h por 2–4 dias",
        observacoes: "Antes ou junto da 1ª dose de antibiótico. Sem dose neonatal validada nesta biblioteca (não recomendada na meningite neonatal)." },
      { id: "crupe-pediatrico", rotulo: "Laringotraqueíte (crupe) — pediátrica", faixa: "pediatrico", modo: "bolus",
        dose: { min: 0.15, max: 0.6, unidade: "mg/kg" }, doseMax: { valor: 10, unidade: "mg" },
        diluicao: "Sem diluição", diluicaoPadrao: null,
        via: "IV, IM ou VO", velocidade: "IV lento", repeticao: "Dose única",
        observacoes: "Crupe moderado/grave: associar adrenalina inalatória. Teto de 10 mg conforme protocolo institucional (algumas referências aceitam até 16 mg)." },
      { id: "maturacao-pulmonar-fetal", rotulo: "Maturação pulmonar fetal (24–34 semanas, risco de parto em 7 dias)", faixa: "adulto", modo: "bolus",
        dose: { min: 6, max: 6, unidade: "mg" }, doseMax: { valor: 6, unidade: "mg" },
        diluicao: "Sem diluição", diluicaoPadrao: null,
        via: "IM", velocidade: "IM profundo", repeticao: "A cada 12 h, total de 4 doses",
        observacoes: "Alternativa à betametasona. Registrar horário da 1ª dose na transferência. Não atrasar o transporte para aplicar." }
    ],
    contraindicacoes: ["Infecção fúngica sistêmica", "Hipersensibilidade", "TCE (corticoide aumenta mortalidade)"],
    cuidados: ["Hiperglicemia, sobretudo em diabéticos", "Aplicação IV rápida: prurido/ardor perineal", "Mascaramento de infecção"],
    adversos: ["Hiperglicemia", "Agitação/insônia", "Hipertensão", "Sangramento digestivo (uso prolongado)"],
    monitorizacao: ["Glicemia capilar", "PA"],
    fontes: ["IDSA — Practice guidelines for bacterial meningitis (2004)", "ESCMID — Guideline on acute bacterial meningitis (2016)", "CRASH Trial Collaborators — Lancet (2004)", "MS — Manual de Gestação de Alto Risco (2022)", "FEBRASGO — Corticoterapia antenatal (2021)", "Bula ANVISA — fosfato dissódico de dexametasona (Decadron)"]
  }
);

if (typeof module !== "undefined") module.exports = {};

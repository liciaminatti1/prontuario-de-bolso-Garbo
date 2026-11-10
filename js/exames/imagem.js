/* Exames — imagem. Formato em docs/EXAMES.md. */

/* ===================== RADIOGRAFIA ===================== */
EXAMES_IMAGEM.push(
{
  id: "rx-torax",
  nome: "Radiografia de tórax",
  categoria: "rx",
  variantes: ["PA e perfil", "AP no leito", "PA em inspiração e expiração", "PA em ortostase (pneumoperitônio)"],
  indicacoes: [
    "Suspeita de pneumonia com dúvida clínica, hipoxemia, internação ou má evolução (no adulto ambulatorial típico e leve o diagnóstico pode ser clínico)",
    "Dispneia aguda: insuficiência cardíaca, derrame pleural, pneumotórax, DPOC/asma exacerbada com suspeita de complicação",
    "Dor torácica: diagnósticos diferenciais (pneumotórax, pneumonia, alargamento de mediastino) — não exclui dissecção nem TEP",
    "Trauma torácico (AP no leito na sala de trauma — ATLS)",
    "Tosse > 3 semanas, hemoptise, perda de peso; investigação de tuberculose (sintomático respiratório) e contatos",
    "Confirmar posição de tubo orotraqueal, cateter venoso central, sonda nasogástrica/enteral e dreno torácico",
    "Suspeita de pneumoperitônio (perfuração de víscera oca): PA em ortostase com cúpulas visíveis",
    "Corpo estranho aspirado (inspiração e expiração / decúbitos laterais na criança)"
  ],
  naoIndicado: [
    "Pré-operatório de rotina em paciente assintomático e de baixo risco",
    "Bronquiolite típica, crise de asma não complicada e IVAS sem sinais de pneumonia",
    "Controle de pneumonia com boa evolução clínica antes de 6–8 semanas (repetir só se sintomas persistirem ou em fumante/> 50 anos para excluir neoplasia)",
    "Rastreamento de câncer de pulmão (usar TC de baixa dose)",
    "Exclusão de TEP ou de dissecção de aorta (Rx normal não exclui)"
  ],
  cuidados: [
    "Gestação: dose fetal muito baixa (muito abaixo de 1 mGy); não negar exame indicado — usar avental de chumbo abdominal",
    "AP no leito amplia a área cardíaca e prejudica a avaliação de derrame pequeno e pneumotórax (paciente deitado)",
    "Na criança: proteção gonadal e evitar repetição; a imobilização adequada reduz exames perdidos"
  ],
  preparo: "Sem preparo. Retirar objetos metálicos, colares e sutiã com aro. Inspiração profunda no momento do disparo.",
  pedido: "Radiografia de tórax PA e perfil. HD: ___. Justificativa: ___ (sintomas, achados do exame físico, SpO2).",
  exemplos: [
    "Radiografia de tórax PA e perfil — HD: pneumonia adquirida na comunidade. Febre há 4 dias, tosse produtiva, estertores em base direita, SpO2 93%.",
    "Radiografia de tórax AP no leito — Controle de posição de cateter venoso central em jugular interna direita, inserido hoje.",
    "Radiografia de tórax PA e perfil — HD: tuberculose pulmonar? Tosse há 5 semanas, sudorese noturna e emagrecimento de 6 kg."
  ],
  achados: [
    { termos: ["consolidacao", "consolidacoes", "broncograma aereo", "opacidade alveolar", "condensacao"], significado: "Espaço aéreo preenchido (pneumonia, edema, hemorragia, atelectasia)", fichas: ["pneumonia", "pneumonia-crianca"] },
    { termos: ["opacidade", "opacidades", "infiltrado", "infiltrado intersticial", "infiltrado reticular", "opacidade reticular", "padrao intersticial"], significado: "Aumento de densidade inespecífico — correlacionar com clínica (infecção, edema, fibrose)", fichas: ["pneumonia", "ic-descompensada"] },
    { termos: ["derrame pleural", "velamento do seio costofrenico", "obliteracao do seio costofrenico", "seio costofrenico obliterado"], significado: "Líquido no espaço pleural; considerar toracocentese se volume relevante ou febre", fichas: ["derrame-pleural", "toracocentese"] },
    { termos: ["pneumotorax", "linha pleural visceral", "ausencia de trama vascular periferica"], significado: "Ar no espaço pleural; avaliar tamanho e repercussão", fichas: ["pneumotorax", "drenagem-toracica"], urgente: true },
    { termos: ["desvio do mediastino", "desvio contralateral do mediastino", "pneumotorax hipertensivo"], significado: "Efeito de massa (pneumotórax hipertensivo, derrame volumoso) — descompressão se instável", fichas: ["pneumotorax", "trauma-torax"], urgente: true },
    { termos: ["pneumoperitonio", "ar livre subdiafragmatico", "ar sob a cupula", "ar livre na cavidade"], significado: "Perfuração de víscera oca até prova em contrário", fichas: ["abdome-agudo-perfurativo"], urgente: true },
    { termos: ["cardiomegalia", "aumento da area cardiaca", "indice cardiotoracico aumentado", "aumento do indice cardiotoracico"], significado: "Índice cardiotorácico > 0,5 em PA: IC, derrame pericárdico, valvopatia", fichas: ["ic-cronica", "ic-descompensada", "pericardite-tamponamento"] },
    { termos: ["congestao pulmonar", "congestao venocapilar", "redistribuicao vascular", "cefalizacao", "linhas b de kerley", "linhas de kerley", "edema intersticial", "edema alveolar", "asa de borboleta"], significado: "Congestão/edema pulmonar — ICC descompensada, sobrecarga volêmica", fichas: ["ic-descompensada"], urgente: true },
    { termos: ["alargamento do mediastino", "mediastino alargado"], significado: "Pensar em dissecção/lesão de aorta (trauma), massa mediastinal, linfonodomegalia", fichas: ["sindrome-aortica-aguda", "trauma-torax"], urgente: true },
    { termos: ["atelectasia", "atelectasias", "atelectasia laminar", "perda volumetrica"], significado: "Colapso pulmonar (hipoventilação, obstrução brônquica, intubação seletiva)" },
    { termos: ["cavitacao", "cavidade", "lesao cavitada", "escavacao"], significado: "Tuberculose, abscesso, neoplasia, fungos — pedir BAAR/TRM-TB", fichas: ["tuberculose-pulmonar"] },
    { termos: ["nodulo pulmonar", "nodulo", "opacidade nodular", "massa pulmonar", "massa"], significado: "Lesão focal — TC de tórax para caracterizar", fichas: ["nodulo-cancer-pulmao"] },
    { termos: ["hiperinsuflacao", "hiperinsuflacao pulmonar", "retificacao das cupulas", "aumento do espaco retroesternal"], significado: "Aprisionamento aéreo (DPOC, asma)", fichas: ["dpoc", "asma-manutencao"] },
    { termos: ["fratura de arco costal", "fratura costal", "fraturas costais", "fratura de costela"], significado: "Avaliar pneumotórax/hemotórax associados; tórax instável se ≥ 2 fraturas em ≥ 3 arcos", fichas: ["trauma-torax"] },
    { termos: ["hemotorax"], significado: "Sangue no espaço pleural (trauma)", fichas: ["trauma-torax", "drenagem-toracica"], urgente: true },
    { termos: ["tubo orotraqueal seletivo", "intubacao seletiva", "tubo em bronquio fonte direito", "cot seletivo"], significado: "Tubo inserido demais — tracionar (ponta ideal 3–5 cm acima da carina)", fichas: ["sequencia-rapida-intubacao"], urgente: true },
    { termos: ["bronquiectasias", "espessamento peribronquico", "espessamento bronquico"], significado: "Dilatação/espessamento brônquico — confirmar com TC", fichas: ["bronquiectasias"] },
    { termos: ["linfonodomegalia hilar", "alargamento hilar", "aumento hilar"], significado: "Linfoma, sarcoidose, tuberculose, neoplasia" },
    { termos: ["elevacao da cupula diafragmatica", "elevacao de hemicupula"], significado: "Paralisia frênica, atelectasia, processo subdiafragmático" }
  ],
  fontes: ["CBR — Recomendações de uso de exames de imagem", "ACR Appropriateness Criteria", "Diretrizes SBPT de PAC (2018) e de tuberculose", "ATLS 10ª ed."]
},
{
  id: "rx-abdome",
  nome: "Radiografia de abdome",
  categoria: "rx",
  variantes: ["Rotina de abdome agudo (tórax PA + abdome em pé e deitado)", "Abdome simples AP em decúbito", "Decúbito lateral com raios horizontais"],
  indicacoes: [
    "Suspeita de obstrução intestinal (níveis hidroaéreos, distensão de alças) quando TC não disponível ou como triagem",
    "Suspeita de perfuração de víscera oca: rotina de abdome agudo com tórax PA em ortostase (pneumoperitônio)",
    "Corpo estranho radiopaco ingerido ou introduzido (pilhas, moedas, ímãs); controle de cápsulas com drogas (body packer)",
    "Volvo de sigmoide (sinal do grão de café) e megacólon tóxico",
    "Enterocolite necrosante no RN (pneumatose intestinal)"
  ],
  naoIndicado: [
    "Dor abdominal inespecífica sem suspeita de obstrução/perfuração (baixo rendimento)",
    "Suspeita de apendicite, colecistite, pancreatite, diverticulite ou cólica renal (USG ou TC são os exames adequados)",
    "Constipação na criança (diagnóstico clínico; Rx não muda conduta na maioria)",
    "Trauma abdominal (usar FAST/TC)"
  ],
  cuidados: [
    "Gestação: dose fetal de ordem de poucos mGy por incidência (abaixo do limiar de risco de 50 mGy), mas preferir USG/RM sempre que respondam à pergunta",
    "Rx normal não exclui obstrução precoce, isquemia mesentérica nem perfuração tamponada — TC se suspeita persistir",
    "Pilha em botão no esôfago é emergência endoscópica (lesão em 2 h)"
  ],
  preparo: "Sem preparo na urgência. O paciente deve ficar em ortostase ou sentado ~5–10 min antes da incidência em pé/tórax para o ar subir.",
  pedido: "Rotina radiológica para abdome agudo (tórax PA em ortostase, abdome em ortostase e em decúbito). HD: ___. Justificativa: ___.",
  exemplos: [
    "Rotina de abdome agudo (tórax PA + abdome em pé e deitado) — HD: obstrução intestinal. Laparotomia prévia, vômitos, distensão e parada de eliminação de flatos há 2 dias.",
    "Radiografia de tórax PA em ortostase e abdome em pé — HD: úlcera péptica perfurada? Dor epigástrica súbita, abdome em tábua.",
    "Radiografia de abdome AP + tórax (pescoço ao ânus) — Ingestão de corpo estranho (moeda) por criança de 3 anos há 1 hora."
  ],
  achados: [
    { termos: ["pneumoperitonio", "ar livre subdiafragmatico", "ar livre na cavidade", "sinal de rigler"], significado: "Perfuração de víscera oca", fichas: ["abdome-agudo-perfurativo"], urgente: true },
    { termos: ["niveis hidroaereos", "nivel hidroaereo", "distensao de alcas", "alcas distendidas", "empilhamento de moedas", "obstrucao intestinal"], significado: "Padrão obstrutivo — delgado (central, válvulas coniventes) ou cólon (periférico, haustrações)", fichas: ["obstrucao-intestinal", "hernias-complicadas"], urgente: true },
    { termos: ["grao de cafe", "volvo", "volvulo", "tubo interno inverso"], significado: "Volvo de sigmoide/ceco — descompressão endoscópica ou cirurgia", fichas: ["obstrucao-intestinal"], urgente: true },
    { termos: ["pneumatose intestinal", "pneumatose", "ar no sistema porta", "aeroportia", "gas portal"], significado: "Isquemia intestinal / enterocolite necrosante", fichas: ["isquemia-mesenterica"], urgente: true },
    { termos: ["dilatacao do colon", "megacolon", "colon transverso dilatado"], significado: "Megacólon tóxico (> 6 cm) em colite — risco de perfuração", fichas: ["doenca-inflamatoria-intestinal", "colite-clostridioides"], urgente: true },
    { termos: ["corpo estranho radiopaco", "corpo estranho", "imagem radiopaca", "imagem de duplo contorno", "sinal do halo"], significado: "Localizar; pilha em botão (duplo halo) no esôfago e ímãs múltiplos exigem retirada urgente", fichas: ["corpo-estranho"], urgente: true },
    { termos: ["calcificacao em topografia renal", "calcificacao em topografia ureteral", "imagem calcica", "calculo radiopaco"], significado: "Possível cálculo urinário radiopaco", fichas: ["litiase-urinaria", "colica-renal"] },
    { termos: ["coprostase", "fecaloma", "grande quantidade de fezes"], significado: "Retenção fecal", fichas: ["constipacao"] },
    { termos: ["alca sentinela", "ileo adinamico", "ileo paralitico", "distensao difusa de alcas"], significado: "Íleo reflexo (pancreatite, peritonite, distúrbio eletrolítico, pós-operatório)", fichas: ["pancreatite-aguda", "hipocalemia"] }
  ],
  fontes: ["ACR Appropriateness Criteria — Acute nonlocalized abdominal pain; Suspected small-bowel obstruction", "CBR — Recomendações de uso de exames de imagem", "ESGE 2016/2021 — Corpo estranho em TGI superior"]
},
{
  id: "rx-ossos-articulacoes",
  nome: "Radiografia de ossos e articulações",
  categoria: "rx",
  variantes: ["Duas incidências ortogonais (AP e perfil)", "Incidências especiais (oblíquas, axial, escafoide, Mortise)", "Comparativa contralateral (criança)", "Com carga (joelhos/pés)"],
  indicacoes: [
    "Trauma com suspeita de fratura ou luxação — sempre no mínimo 2 incidências, incluindo articulações acima e abaixo em ossos longos",
    "Tornozelo/pé — Regras de Ottawa: Rx se dor na região maleolar E (dor à palpação na borda posterior/ponta de um dos maléolos nos 6 cm distais OU incapacidade de dar 4 passos logo após o trauma e no PS); pé: dor na base do 5º metatarso ou no navicular OU incapacidade de dar 4 passos",
    "Joelho — Regra de Ottawa: idade ≥ 55 anos, dor isolada na patela, dor na cabeça da fíbula, incapacidade de fletir a 90° ou de dar 4 passos",
    "Punho com dor na tabaqueira anatômica: incidências de escafoide (fratura pode não aparecer no 1º exame — imobilizar e repetir em 10–14 dias ou RM/TC)",
    "Dor articular com suspeita de artrite séptica, gota, osteoartrite, artrite reumatoide (alterações estruturais) ou osteomielite (pé diabético)",
    "Dor óssea com sinal de alarme: dor noturna, massa, perda de peso, câncer prévio (metástase, mieloma)",
    "Controle pós-redução e pós-imobilização; idade óssea (mão e punho esquerdos)",
    "Suspeita de maus-tratos na criança (inventário ósseo)"
  ],
  naoIndicado: [
    "Entorse de tornozelo ou trauma de joelho que não preencha Regras de Ottawa",
    "Dor articular mecânica crônica típica de osteoartrite sem mudança do quadro (diagnóstico clínico; Rx não altera conduta inicial)",
    "Fratura de costela isolada sem suspeita de complicação (pedir Rx de tórax para pneumotórax/hemotórax, não Rx de arcos costais)",
    "Trauma nasal isolado sem deformidade (diagnóstico clínico)"
  ],
  cuidados: [
    "Gestação: radiografia de extremidades tem dose fetal desprezível — não adiar exame indicado",
    "Na criança, fraturas de placa de crescimento (Salter-Harris) podem ser sutis: comparar com o lado contralateral quando necessário",
    "Osteomielite: Rx pode ficar normal nas primeiras 2 semanas — RM se suspeita alta",
    "Fratura exposta: radiografar sem atrasar antibiótico, profilaxia antitetânica e imobilização"
  ],
  preparo: "Sem preparo. Retirar anéis, pulseiras e objetos metálicos da região (retirar anéis cedo em trauma de mão, antes do edema).",
  pedido: "Radiografia de ___ (lado: direito/esquerdo) em AP e perfil. HD: ___. Justificativa: ___ (mecanismo, achado do exame, regra de decisão).",
  exemplos: [
    "Radiografia de tornozelo direito AP, perfil e Mortise — HD: fratura de maléolo lateral? Entorse em inversão; dor à palpação na ponta do maléolo lateral; não deambula 4 passos (Ottawa positivo).",
    "Radiografia de punho esquerdo AP, perfil e incidências para escafoide — HD: fratura de escafoide? Queda sobre a mão espalmada, dor na tabaqueira anatômica.",
    "Radiografia de pé direito AP e oblíqua — HD: osteomielite em pé diabético? Úlcera plantar com osso palpável (probe-to-bone positivo)."
  ],
  achados: [
    { termos: ["fratura", "traco de fratura", "linha de fratura", "solucao de continuidade", "descontinuidade da cortical"], significado: "Fratura — definir localização, desvio, cominuição e se é exposta", fichas: ["trauma-extremidades", "imobilizacao-talas"] },
    { termos: ["fratura exposta", "fragmento osseo exposto"], significado: "Antibiótico precoce, profilaxia antitetânica e ortopedia", fichas: ["fratura-exposta", "tetano-profilaxia"], urgente: true },
    { termos: ["luxacao", "luxacao glenoumeral", "luxacao anterior", "perda da congruencia articular", "subluxacao"], significado: "Perda de congruência articular — redução após avaliar neurovascular", fichas: ["reducao-luxacao-ombro", "trauma-extremidades"], urgente: true },
    { termos: ["fratura do colo do femur", "fratura transtrocanteriana", "fratura de quadril"], significado: "Fratura de quadril no idoso — cirurgia precoce (idealmente < 48 h)", fichas: ["trauma-extremidades", "osteoporose"] },
    { termos: ["fratura do anel pelvico", "disjuncao da sinfise", "diastase da sinfise pubica", "fratura de bacia"], significado: "Fratura pélvica — risco de choque hemorrágico; cinta pélvica", fichas: ["trauma-pelve", "choque-hemorragico"], urgente: true },
    { termos: ["derrame articular", "aumento de partes moles periarticular", "sinal do coxim gorduroso", "sinal da vela"], significado: "Derrame articular; no cotovelo da criança, coxim posterior sugere fratura oculta", fichas: ["artrite-septica", "trauma-extremidades"] },
    { termos: ["reducao do espaco articular", "osteofitos", "esclerose subcondral", "cistos subcondrais"], significado: "Osteoartrite", fichas: ["osteoartrite"] },
    { termos: ["erosoes", "erosoes marginais", "osteopenia periarticular"], significado: "Artrite inflamatória (artrite reumatoide, gota, psoriásica)", fichas: ["artrite-reumatoide", "gota"] },
    { termos: ["erosoes em saca-bocado", "tofos", "erosao com borda saliente"], significado: "Gota crônica tofácea", fichas: ["gota"] },
    { termos: ["reacao periosteal", "osteolise", "destruicao da cortical", "sequestro osseo", "osteomielite"], significado: "Infecção óssea ou tumor — investigar", fichas: ["pe-diabetico", "artrite-septica"] },
    { termos: ["lesoes liticas", "lesao litica", "lesoes em saca-bocado", "lesao blastica", "lesoes osteoblasticas"], significado: "Mieloma, metástase (líticas: rim, tireoide, pulmão, mama; blásticas: próstata, mama)", fichas: ["mieloma-multiplo"] },
    { termos: ["gas em partes moles", "enfisema subcutaneo", "gas nos planos fasciais"], significado: "Infecção necrotizante (ou trauma aberto) — cirurgia urgente", fichas: ["fasciite-necrosante", "gangrena-fournier"], urgente: true },
    { termos: ["corpo estranho radiopaco", "corpo estranho em partes moles"], significado: "Retirada/ exploração conforme localização", fichas: ["corpo-estranho"] },
    { termos: ["fratura por estresse", "fratura de insuficiencia", "osteopenia", "rarefacao ossea"], significado: "Fragilidade óssea — densitometria", fichas: ["osteoporose"] }
  ],
  fontes: ["Stiell IG et al. Ottawa Ankle Rules (JAMA 1993) e Ottawa Knee Rule (JAMA 1997)", "ACR Appropriateness Criteria — Acute trauma to the ankle/knee/wrist", "SBOT — Manual de trauma ortopédico"]
},
{
  id: "rx-coluna",
  nome: "Radiografia de coluna",
  categoria: "rx",
  variantes: ["Cervical AP, perfil e transoral", "Torácica AP e perfil", "Lombossacra AP e perfil", "Dinâmicas (flexão/extensão)", "Panorâmica (escoliose)"],
  indicacoes: [
    "Lombalgia com sinal de alarme quando RM não é o primeiro exame: suspeita de fratura (trauma, osteoporose, corticoide crônico, idade > 70), câncer prévio, perda de peso — RM é superior para câncer/infecção",
    "Lombalgia que não melhora após 6 semanas de tratamento conservador (se for mudar conduta)",
    "Suspeita de fratura vertebral por fragilidade (perda de altura, cifose nova, dor dorsal súbita no idoso)",
    "Escoliose (panorâmica em ortostase) e espondiloartrite (sacroilíacas — sinais de sacroiliíte)",
    "Trauma cervical: apenas quando a TC não estiver disponível (Rx tem sensibilidade inferior) — aplicar Canadian C-Spine/NEXUS antes",
    "Instabilidade (dinâmicas) em pós-operatório ou espondilolistese, fora da fase aguda"
  ],
  naoIndicado: [
    "Lombalgia aguda inespecífica (< 6 semanas) sem sinal de alarme — não muda conduta e aumenta medicalização",
    "Cervicalgia mecânica sem trauma nem déficit neurológico",
    "Trauma cervical em adulto de risco quando há TC disponível (preferir TC)",
    "Suspeita de compressão medular, cauda equina, infecção (espondilodiscite) ou metástase com déficit — pedir RM com urgência, não Rx",
    "Rx dinâmica em trauma agudo"
  ],
  cuidados: [
    "Gestação: Rx lombossacra irradia o útero diretamente — evitar sem indicação forte; preferir RM sem contraste",
    "Rx de coluna lombar tem dose relativamente alta entre radiografias simples; evitar repetições",
    "Achados degenerativos (osteófitos, redução discal) são comuns em assintomáticos — não atribuir a dor automaticamente a eles"
  ],
  preparo: "Sem preparo. Lombossacra: idealmente intestino esvaziado (pode prejudicar, mas não é obrigatório). Retirar objetos metálicos.",
  pedido: "Radiografia de coluna ___ (cervical/torácica/lombossacra) em AP e perfil. HD: ___. Justificativa: ___ (sinal de alarme).",
  exemplos: [
    "Radiografia de coluna torácica e lombar AP e perfil — HD: fratura vertebral por fragilidade? Mulher, 74 anos, dor dorsal súbita após esforço leve, uso de prednisona há 1 ano.",
    "Radiografia de coluna lombossacra AP e perfil e bacia AP (sacroilíacas) — HD: espondiloartrite axial? Lombalgia inflamatória há 8 meses, homem de 28 anos, rigidez matinal > 1 h."
  ],
  achados: [
    { termos: ["fratura", "fratura vertebral", "achatamento vertebral", "fratura por compressao", "acunhamento", "reducao da altura do corpo vertebral"], significado: "Fratura vertebral (traumática ou por fragilidade) — avaliar estabilidade e muro posterior", fichas: ["osteoporose", "trauma-raquimedular"] },
    { termos: ["retropulsao", "fragmento retropulsado", "fratura explosao", "fratura em explosao"], significado: "Fragmento invadindo canal medular — TC/RM e neurocirurgia", fichas: ["trauma-raquimedular"], urgente: true },
    { termos: ["listese", "espondilolistese", "anterolistese", "retrolistese", "espondilolise"], significado: "Escorregamento vertebral; graduar e correlacionar com sintomas", fichas: ["lombalgia"] },
    { termos: ["osteofitos", "reducao do espaco discal", "discopatia degenerativa", "espondiloartrose", "uncoartrose"], significado: "Alterações degenerativas — frequentes em assintomáticos", fichas: ["lombalgia", "cervicalgia-dorsalgia"] },
    { termos: ["lesao litica", "lesoes liticas", "lesao blastica", "erosao do pediculo", "sinal da coruja piscando"], significado: "Metástase/mieloma — RM se dor ou déficit", fichas: ["compressao-medular-maligna", "mieloma-multiplo"], urgente: true },
    { termos: ["sacroiliite", "esclerose das sacroiliacas", "erosoes nas sacroiliacas", "sindesmofitos", "coluna em bambu"], significado: "Espondiloartrite axial", fichas: ["espondiloartrites"] },
    { termos: ["escoliose", "desvio lateral da coluna", "angulo de cobb"], significado: "Escoliose — medir ângulo de Cobb e acompanhar no crescimento" },
    { termos: ["destruicao do plato vertebral", "erosao dos platos vertebrais", "reducao do espaco discal com erosao", "espondilodiscite"], significado: "Espondilodiscite (infecção) — RM e hemoculturas", urgente: true }
  ],
  fontes: ["ACR Appropriateness Criteria — Low back pain (2021)", "NICE NG59 — Low back pain and sciatica", "Diretriz SBR/SBOT de lombalgia"]
},
{
  id: "rx-seios-face",
  nome: "Radiografia de seios da face",
  categoria: "rx",
  variantes: ["Frontonaso (Caldwell) e mentonaso (Waters)", "Perfil"],
  indicacoes: [
    "Raramente indicada hoje: apenas onde a TC não estiver disponível, para avaliação grosseira de nível hidroaéreo em sinusite aguda que não responde ao tratamento",
    "Para trauma de face, suspeita de complicação de sinusite ou sinusite crônica, o exame correto é a TC de seios da face (complicação orbitária/intracraniana: TC com contraste ± RM)"
  ],
  naoIndicado: [
    "Rinossinusite aguda não complicada em adulto ou criança — diagnóstico é CLÍNICO (sintomas > 10 dias, piora após melhora inicial ou quadro grave). O Rx não diferencia viral de bacteriana e não muda conduta",
    "Criança < 6 anos: seios ainda em desenvolvimento, interpretação ruim",
    "Cefaleia isolada (não é sinal de sinusite)",
    "Rinite alérgica",
    "Suspeita de complicação (edema periorbitário, alteração visual, diplopia, cefaleia intensa, alteração do sensório): pedir TC com contraste com urgência",
    "Trauma de face (pedir TC)"
  ],
  cuidados: [
    "Espessamento mucoso é achado comum em resfriado comum e em assintomáticos — não justifica antibiótico por si só",
    "Gestação: dose fetal desprezível, mas o exame raramente é necessário"
  ],
  preparo: "Sem preparo. Realizado sentado (para mostrar nível líquido).",
  pedido: "Radiografia de seios da face (Caldwell e Waters). HD: ___. Justificativa: ___ (por que a TC não é possível/necessária).",
  exemplos: [
    "Preferir: Tomografia computadorizada de seios da face com contraste — HD: rinossinusite aguda complicada (celulite periorbitária à direita, dor à movimentação ocular).",
    "Radiografia de seios da face (Caldwell e Waters) — HD: rinossinusite bacteriana sem resposta a 72 h de amoxicilina; TC indisponível no município."
  ],
  achados: [
    { termos: ["nivel hidroaereo", "nivel liquido", "nivel hidroaereo em seio maxilar"], significado: "Secreção no seio — compatível com sinusite aguda no contexto clínico", fichas: ["ivas-sinusite"] },
    { termos: ["velamento", "velamento do seio maxilar", "opacificacao do seio", "opacificacao", "velamento total"], significado: "Seio opacificado (secreção, espessamento mucoso, pólipo)", fichas: ["ivas-sinusite"] },
    { termos: ["espessamento mucoso", "espessamento do revestimento mucoso", "espessamento mucoperiosteal"], significado: "Inespecífico — comum em resfriado e em assintomáticos" },
    { termos: ["cisto de retencao", "imagem polipoide", "polipo"], significado: "Geralmente achado benigno sem conduta" }
  ],
  fontes: ["EPOS 2020 — European Position Paper on Rhinosinusitis", "ABORL-CCF — Diretrizes de rinossinusite (2015)", "ACR Appropriateness Criteria — Sinonasal disease (2021)", "AAP 2013 — Acute bacterial sinusitis in children"]
},
{
  id: "mamografia",
  nome: "Mamografia",
  categoria: "rx",
  variantes: ["Bilateral de rastreamento (CC e MLO)", "Diagnóstica", "Com incidências complementares (compressão localizada, magnificação)", "Tomossíntese"],
  indicacoes: [
    "Rastreamento — Ministério da Saúde/INCA: 50–69 anos a cada 2 anos (40–49 anos: decisão compartilhada; o MS ampliou o acesso a partir dos 40 anos sob demanda). CBR/SBM/FEBRASGO: anual dos 40 aos 74 anos",
    "Alto risco (mutação BRCA, irradiação torácica antes dos 30 anos, risco vitalício ≥ 20%): anual a partir dos 30 anos (ou mais cedo conforme o caso), em geral associada à RM",
    "Diagnóstica em qualquer idade ≥ 30–35 anos: nódulo palpável, descarga papilar sanguinolenta/espontânea uniductal, retração de pele/mamilo, alteração de pele (casca de laranja)",
    "Controle de lesão BI-RADS 3 e seguimento pós-tratamento de câncer de mama"
  ],
  naoIndicado: [
    "Mulher < 30 anos com queixa mamária: começar por USG de mamas (mama densa, radiossensível)",
    "Mastalgia cíclica isolada sem achado ao exame (não é sinal de câncer)",
    "Mastite/abscesso na lactação (USG)",
    "Gestante com nódulo: começar por USG (mamografia pode ser feita com proteção se necessário)"
  ],
  cuidados: [
    "Mama densa (BI-RADS densidade C/D) reduz sensibilidade — considerar USG complementar",
    "Próteses mamárias: avisar o serviço (técnica de Eklund)",
    "Gestação e lactação: preferir USG; mamografia não é contraindicada se necessária"
  ],
  preparo: "Não usar desodorante, talco, creme ou perfume nas mamas e axilas no dia. Preferir a semana após a menstruação (mama menos dolorosa). Levar exames anteriores para comparação.",
  pedido: "Mamografia bilateral ___ (de rastreamento/diagnóstica). HD/Justificativa: ___.",
  exemplos: [
    "Mamografia bilateral de rastreamento — Mulher de 52 anos, assintomática, última mamografia há 2 anos (BI-RADS 1).",
    "Mamografia bilateral diagnóstica + USG de mamas — HD: nódulo palpável em QSL da mama direita, 2 cm, endurecido e pouco móvel."
  ],
  achados: [
    { termos: ["bi-rads 0", "birads 0", "categoria 0"], significado: "Inconclusivo — precisa de exame complementar (incidências, USG) ou comparação" },
    { termos: ["bi-rads 1", "birads 1", "bi-rads 2", "birads 2", "achados benignos"], significado: "Negativo/benigno — manter rastreamento habitual" },
    { termos: ["bi-rads 3", "birads 3", "provavelmente benigno"], significado: "Risco de malignidade ≤ 2% — controle em 6 meses (por até 2–3 anos)", fichas: ["nodulo-mamario"] },
    { termos: ["bi-rads 4", "birads 4", "bi-rads 4a", "bi-rads 4b", "bi-rads 4c", "suspeito"], significado: "Suspeito de malignidade (2–95%) — BIÓPSIA (core biopsy)", fichas: ["nodulo-mamario", "cancer-mama"], urgente: true },
    { termos: ["bi-rads 5", "birads 5", "altamente suspeito"], significado: "≥ 95% de chance de malignidade — biópsia e encaminhamento à mastologia sem demora", fichas: ["cancer-mama"], urgente: true },
    { termos: ["bi-rads 6", "birads 6", "malignidade comprovada"], significado: "Câncer já confirmado por biópsia", fichas: ["cancer-mama"] },
    { termos: ["microcalcificacoes pleomorficas", "microcalcificacoes agrupadas", "calcificacoes finas lineares", "calcificacoes ramificadas"], significado: "Morfologia suspeita (carcinoma ductal in situ)", fichas: ["cancer-mama"] },
    { termos: ["nodulo espiculado", "margens espiculadas", "distorcao arquitetural", "assimetria focal", "assimetria em desenvolvimento"], significado: "Achados suspeitos — correlacionar com BI-RADS final", fichas: ["nodulo-mamario", "cancer-mama"] },
    { termos: ["mamas densas", "densidade c", "densidade d", "heterogeneamente densas", "extremamente densas"], significado: "Sensibilidade menor — considerar USG complementar" }
  ],
  fontes: ["ACR BI-RADS Atlas 5ª ed.", "INCA/MS — Diretrizes para detecção precoce do câncer de mama", "CBR/SBM/FEBRASGO — Recomendações de rastreamento (2023)"]
}
);

/* ===================== ULTRASSONOGRAFIA ===================== */
EXAMES_IMAGEM.push(
{
  id: "usg-abdome-total",
  nome: "Ultrassonografia de abdome total",
  categoria: "usg",
  variantes: ["Abdome total", "Abdome superior (fígado, vias biliares, pâncreas, baço, rins)", "Com Doppler (sistema porta, hepático)"],
  indicacoes: [
    "Dor em hipocôndrio direito: cólica biliar, colecistite, coledocolitíase (exame inicial de escolha)",
    "Icterícia: diferenciar obstrutiva (dilatação de vias biliares) de hepatocelular",
    "Alteração de enzimas hepáticas: esteatose (MASLD), cirrose, sinais de hipertensão portal, ascite",
    "Rastreio de carcinoma hepatocelular em cirrose ou hepatite B crônica de risco: a cada 6 meses (± alfafetoproteína)",
    "Suspeita de apendicite em criança, gestante e mulher jovem (USG primeiro; TC/RM se inconclusivo)",
    "Pancreatite aguda: pesquisar etiologia biliar (não avalia necrose)",
    "Massa abdominal palpável, esplenomegalia, aneurisma de aorta abdominal (rastreio em homens 65–75 anos que já fumaram)",
    "Ascite: confirmar e guiar paracentese"
  ],
  naoIndicado: [
    "Dispepsia sem sinal de alarme (USG não avalia estômago/duodeno — pedir EDA se indicada)",
    "Dor abdominal crônica funcional típica já investigada",
    "Trauma abdominal (usar eFAST/TC)",
    "Avaliar necrose ou complicação de pancreatite (TC com contraste após 72–96 h)",
    "Cálculo assintomático achado incidentalmente não exige repetição seriada"
  ],
  cuidados: [
    "Sem radiação nem contraste: seguro na gestação e em crianças",
    "Operador-dependente; obesidade e gases reduzem a qualidade",
    "Vesícula contraída (sem jejum) prejudica avaliação de cálculos e da parede"
  ],
  preparo: "Jejum de 6–8 horas (adulto; criança 3–4 h; lactente: na hora da mamada seguinte). Para a pelve, chegar com a bexiga cheia (beber 4–6 copos de água 1 h antes e não urinar). Na urgência, realizar mesmo sem preparo.",
  pedido: "Ultrassonografia de abdome total. HD: ___. Justificativa: ___.",
  exemplos: [
    "Ultrassonografia de abdome superior — HD: colecistite aguda. Dor em hipocôndrio direito há 24 h, febre, Murphy positivo, leucocitose.",
    "Ultrassonografia de abdome total — HD: doença hepática gordurosa (MASLD)? TGP 2× o limite, obesidade e diabetes tipo 2.",
    "Ultrassonografia de abdome superior — Rastreio semestral de carcinoma hepatocelular em cirrose por vírus C (Child A)."
  ],
  achados: [
    { termos: ["colelitiase", "calculo biliar", "calculos biliares", "litiase biliar", "imagem hiperecogenica com sombra acustica", "microcalculos", "barro biliar", "lama biliar", "vesicula biliar com calculos", "vesicula biliar com multiplos calculos", "vesicula com calculos", "calculos na vesicula"], significado: "Cálculo na vesícula — tratar se sintomático", fichas: ["colica-biliar", "doencas-vias-biliares"] },
    { termos: ["colecistite", "espessamento da parede vesicular", "parede vesicular espessada", "liquido pericolecistico", "murphy ultrassonografico", "vesicula distendida"], significado: "Colecistite aguda (calculosa ou alitiásica)", fichas: ["colecistite-colangite"], urgente: true },
    { termos: ["dilatacao de vias biliares", "dilatacao das vias biliares", "coledoco dilatado", "dilatacao do coledoco", "dilatacao das vias biliares intra-hepaticas", "coledocolitiase"], significado: "Obstrução biliar (cálculo, tumor) — colangite se febre + icterícia", fichas: ["colecistite-colangite", "ictericia", "tumores-pancreas"], urgente: true },
    { termos: ["esteatose", "esteatose hepatica", "infiltracao gordurosa", "figado com ecogenicidade aumentada", "aumento difuso da ecogenicidade hepatica"], significado: "Esteatose — avaliar fibrose (FIB-4)", fichas: ["masld"] },
    { termos: ["hepatopatia cronica", "contornos lobulados", "contornos irregulares", "figado heterogeneo", "cirrose", "reducao volumetrica do lobo direito"], significado: "Sinais de hepatopatia crônica/cirrose", fichas: ["cirrose-descompensada"] },
    { termos: ["esplenomegalia", "baco aumentado"], significado: "Hipertensão portal, doença hematológica, infecção (mononucleose, malária, calazar)", fichas: ["cirrose-descompensada", "linfomas"] },
    { termos: ["ascite", "liquido livre", "liquido livre na cavidade", "liquido livre em pelve"], significado: "Ascite (cirrose, neoplasia, IC) ou sangue/conteúdo no trauma", fichas: ["cirrose-descompensada", "paracentese"] },
    { termos: ["nodulo hepatico", "nodulo solido", "lesao focal hepatica", "massa hepatica", "nodulo", "massa"], significado: "Lesão focal — TC/RM trifásica (em cirrose, nódulo ≥ 1 cm é suspeito de CHC)", fichas: ["nodulos-hepaticos"] },
    { termos: ["hemangioma", "imagem hiperecogenica bem delimitada"], significado: "Provável hemangioma — confirmar se atípico ou paciente de risco", fichas: ["nodulos-hepaticos"] },
    { termos: ["trombose da veia porta", "trombose portal", "trombo na veia porta"], significado: "Trombose portal — anticoagulação/especialista", fichas: ["cirrose-descompensada"], urgente: true },
    { termos: ["apendice espessado", "apendice nao compressivel", "apendice com diametro aumentado", "apendicolito", "apendicite"], significado: "Apendicite aguda (diâmetro > 6 mm, não compressível)", fichas: ["apendicite"], urgente: true },
    { termos: ["aneurisma de aorta", "dilatacao aneurismatica", "aorta abdominal dilatada", "ectasia da aorta"], significado: "Aneurisma ≥ 3 cm; ≥ 5,5 cm (homem) ou sintomático → cirurgia vascular", fichas: ["sindrome-aortica-aguda"], urgente: true },
    { termos: ["pancreas aumentado", "pancreas edemaciado", "colecao peripancreatica", "pancreatite"], significado: "Sinais de pancreatite", fichas: ["pancreatite-aguda"] },
    { termos: ["hidronefrose", "ectasia pielocalicinal", "dilatacao pielocalicial", "dilatacao pielocalicinal"], significado: "Obstrução urinária", fichas: ["litiase-urinaria", "colica-renal"] },
    { termos: ["abscesso", "colecao", "colecao organizada", "colecao com debris"], significado: "Coleção/abscesso — drenagem guiada se indicada", fichas: ["abscesso-intra-abdominal"], urgente: true },
    { termos: ["polipo vesicular", "polipo de vesicula"], significado: "Pólipo ≥ 10 mm: colecistectomia; 6–9 mm: seguimento", fichas: ["doencas-vias-biliares"] }
  ],
  fontes: ["ACR Appropriateness Criteria — Right upper quadrant pain (2022)", "Diretrizes de Tóquio TG18", "AASLD/EASL — Vigilância de CHC", "SBH — Consenso de MASLD"]
},
{
  id: "usg-rins-vias-urinarias",
  nome: "Ultrassonografia de rins e vias urinárias",
  categoria: "usg",
  variantes: ["Rins e vias urinárias", "Com medida de resíduo pós-miccional", "Próstata via abdominal", "Doppler de artérias renais", "Bolsa escrotal com Doppler"],
  indicacoes: [
    "Cólica renal: hidronefrose e cálculos (preferida em gestante, criança e jovem; TC sem contraste é o padrão-ouro em adultos)",
    "Lesão renal aguda: excluir obstrução pós-renal; tamanho e ecogenicidade dos rins (rim pequeno sugere DRC)",
    "Pielonefrite complicada, sem melhora em 48–72 h, ou suspeita de abscesso",
    "ITU febril na criança (< 2 anos após 1º episódio de ITU febril) e ITU recorrente",
    "Hematúria (avaliação inicial; complementar com TC/urologia conforme risco)",
    "Sintomas do trato urinário inferior/HPB: volume prostático e resíduo pós-miccional; retenção urinária",
    "Escroto agudo: USG com Doppler se dúvida — mas suspeita forte de torção NÃO deve esperar exame (cirurgia em < 6 h)"
  ],
  naoIndicado: [
    "Cistite não complicada em mulher",
    "Cólica renal típica que já melhorou em jovem com cálculo conhecido (repetir só se febre, piora ou falha de eliminação)",
    "Atrasar exploração cirúrgica de suspeita clínica alta de torção testicular"
  ],
  cuidados: [
    "Sem radiação; gestação: leve hidronefrose fisiológica à direita é esperada",
    "Ureter médio geralmente não é visível — cálculo ureteral pode não ser visto (procurar hidronefrose e jato ureteral)"
  ],
  preparo: "Bexiga cheia: beber 4–6 copos de água ~1 h antes e não urinar. Para resíduo pós-miccional, o paciente urina durante o exame. Na urgência, sem preparo.",
  pedido: "Ultrassonografia de rins e vias urinárias (com resíduo pós-miccional, se aplicável). HD: ___. Justificativa: ___.",
  exemplos: [
    "Ultrassonografia de rins e vias urinárias — HD: cólica renal à esquerda. Gestante de 24 semanas, dor lombar irradiada para flanco e hematúria.",
    "Ultrassonografia de rins e vias urinárias — HD: lesão renal aguda (creatinina 1,0 → 3,2 mg/dL). Excluir causa obstrutiva.",
    "Ultrassonografia de bolsa escrotal com Doppler — HD: orquiepididimite × torção testicular. Dor há 30 h, reflexo cremastérico presente."
  ],
  achados: [
    { termos: ["hidronefrose", "ectasia pielocalicinal", "dilatacao pielocalicial", "dilatacao pielocalicinal", "ureterohidronefrose", "uretero-hidronefrose"], significado: "Obstrução urinária — com febre = urgência (desobstrução)", fichas: ["litiase-urinaria", "colica-renal", "lesao-renal-aguda"] },
    { termos: ["calculo renal", "litiase renal", "nefrolitiase", "imagem hiperecogenica com sombra acustica posterior", "calculo ureteral", "microlitiase"], significado: "Cálculo urinário", fichas: ["litiase-urinaria"] },
    { termos: ["rins reduzidos", "rins de dimensoes reduzidas", "aumento da ecogenicidade renal", "perda da diferenciacao corticomedular", "afilamento cortical"], significado: "Nefropatia crônica (DRC)", fichas: ["doenca-renal-cronica"] },
    { termos: ["abscesso renal", "colecao perirrenal", "pielonefrite", "area hipoecogenica no parenquima renal"], significado: "Pielonefrite complicada/abscesso", fichas: ["pielonefrite"], urgente: true },
    { termos: ["cisto renal simples", "cisto simples", "bosniak i", "bosniak 1"], significado: "Benigno — sem seguimento" },
    { termos: ["cisto complexo", "cisto com septos", "bosniak iii", "bosniak iv", "bosniak 3", "bosniak 4", "massa renal solida", "nodulo renal solido", "massa", "nodulo"], significado: "Suspeita de neoplasia renal — TC/RM e urologia", fichas: ["tumores-urologicos"] },
    { termos: ["residuo pos-miccional", "residuo pos miccional significativo", "residuo pos-miccional elevado", "bexiga de esforco", "trabeculacao vesical"], significado: "Esvaziamento incompleto (HPB, bexiga neurogênica)", fichas: ["hpb", "retencao-urinaria"] },
    { termos: ["prostata aumentada", "aumento prostatico", "hiperplasia prostatica"], significado: "Aumento do volume prostático (volume não se correlaciona bem com sintomas)", fichas: ["hpb"] },
    { termos: ["globo vesical", "bexiga distendida", "bexiga hiperdistendida"], significado: "Retenção urinária — sondagem", fichas: ["retencao-urinaria", "sondagem-vesical"], urgente: true },
    { termos: ["ausencia de fluxo ao doppler", "ausencia de fluxo testicular", "torcao testicular", "sinal do redemoinho"], significado: "Torção testicular — cirurgia imediata", fichas: ["escroto-agudo"], urgente: true },
    { termos: ["epididimite", "orquiepididimite", "aumento do fluxo epididimario", "hiperemia epididimaria"], significado: "Inflamação/infecção — antibiótico", fichas: ["escroto-agudo"] },
    { termos: ["lesao vesical", "espessamento focal da parede vesical", "lesao vegetante"], significado: "Tumor vesical? Cistoscopia", fichas: ["hematuria", "tumores-urologicos"] }
  ],
  fontes: ["EAU Guidelines on Urolithiasis (2024)", "ACR Appropriateness Criteria — Acute onset flank pain; Renal failure; Acute scrotal pain", "AAP 2011/2016 — ITU febril em lactentes"]
},
{
  id: "usg-pelvica-transvaginal",
  nome: "Ultrassonografia pélvica e transvaginal",
  categoria: "usg",
  variantes: ["Transvaginal", "Pélvica via abdominal (suprapúbica)", "Com Doppler colorido", "Transvaginal com preparo intestinal (endometriose)"],
  indicacoes: [
    "Sangramento uterino anormal: miomas, pólipos, espessura endometrial",
    "Sangramento pós-menopausa: endométrio ≤ 4 mm tem baixa probabilidade de câncer; > 4 mm ou sangramento persistente → biópsia/histeroscopia",
    "Dor pélvica aguda: cisto roto/hemorrágico, torção anexial (Doppler normal NÃO exclui torção), DIP com abscesso tubo-ovariano",
    "Massa anexial: classificar (IOTA/O-RADS)",
    "Gravidez ectópica (β-hCG positivo sem gestação intrauterina confirmada)",
    "Dismenorreia secundária, dor pélvica crônica, suspeita de endometriose (protocolo com preparo intestinal)",
    "SOP (morfologia ovariana — não usar em < 8 anos pós-menarca), infertilidade, localização de DIU"
  ],
  naoIndicado: [
    "Rastreamento de câncer de ovário em mulher assintomática de risco habitual (não reduz mortalidade)",
    "Diagnóstico de SOP em adolescente (critérios clínicos e laboratoriais)",
    "Cisto ovariano simples < 3 cm em idade reprodutiva (folículo fisiológico — sem seguimento)",
    "Verificação rotineira do DIU assintomático com fios visíveis"
  ],
  cuidados: [
    "Transvaginal: evitar em virgem/criança e quando a paciente recusar — usar via abdominal ou transretal",
    "Sem radiação; seguro na gestação",
    "Avaliar no início do ciclo (até 10º dia) para endométrio na pré-menopausa"
  ],
  preparo: "Transvaginal: bexiga VAZIA (urinar antes). Pélvica via abdominal: bexiga CHEIA (beber 4–6 copos de água 1 h antes e não urinar). Pesquisa de endometriose: preparo intestinal conforme o serviço.",
  pedido: "Ultrassonografia transvaginal (com Doppler, se aplicável). HD: ___. Justificativa: ___.",
  exemplos: [
    "Ultrassonografia transvaginal — HD: sangramento pós-menopausa. Mulher de 61 anos, sangramento há 2 semanas, sem TRH.",
    "Ultrassonografia transvaginal com Doppler — HD: torção anexial? Dor súbita em FIE com vômitos, β-hCG negativo, massa anexial conhecida de 6 cm.",
    "Ultrassonografia transvaginal — HD: gravidez ectópica? β-hCG 2.800 mUI/mL, atraso menstrual de 6 semanas, dor em FID e sangramento discreto."
  ],
  achados: [
    { termos: ["massa anexial", "massa solida anexial", "lesao anexial complexa", "o-rads 4", "o-rads 5", "iota maligno", "componente solido vascularizado", "massa", "nodulo"], significado: "Risco de malignidade intermediário/alto — CA-125 e ginecologia oncológica", fichas: ["massas-anexiais"] },
    { termos: ["cisto simples", "cisto folicular", "o-rads 2", "cisto anecoico"], significado: "Provavelmente benigno (fisiológico em idade fértil)", fichas: ["massas-anexiais"] },
    { termos: ["cisto hemorragico", "cisto de corpo luteo", "cisto roto"], significado: "Funcional; com líquido livre volumoso e instabilidade = urgência", fichas: ["massas-anexiais", "abdome-agudo-hemorragico"] },
    { termos: ["endometrioma", "cisto com conteudo em vidro fosco", "cisto com ecos finos"], significado: "Endometriose ovariana", fichas: ["endometriose"] },
    { termos: ["ovario aumentado edemaciado", "ausencia de fluxo ovariano", "torcao anexial", "sinal do redemoinho", "foliculos perifericos com estroma edemaciado"], significado: "Torção anexial — cirurgia urgente (Doppler pode ser normal)", fichas: ["torcao-anexial"], urgente: true },
    { termos: ["massa anexial com saco gestacional", "anel tubario", "gestacao ectopica", "massa anexial com utero vazio", "utero vazio"], significado: "Gravidez ectópica", fichas: ["gravidez-ectopica"], urgente: true },
    { termos: ["liquido livre", "liquido livre em fundo de saco", "liquido com debris", "hemoperitonio"], significado: "Pequena quantidade é fisiológica; volumoso/com debris = sangramento (ectópica rota, cisto roto)", fichas: ["abdome-agudo-hemorragico", "gravidez-ectopica"], urgente: true },
    { termos: ["mioma", "miomas", "leiomioma", "nodulo miometrial", "utero miomatoso", "figo 0", "submucoso"], significado: "Miomatose — localização (FIGO) orienta tratamento", fichas: ["miomatose", "sangramento-uterino-anormal"] },
    { termos: ["espessamento endometrial", "endometrio espessado", "endometrio heterogeneo", "polipo endometrial"], significado: "Na pós-menopausa > 4 mm: biópsia/histeroscopia", fichas: ["sangramento-pos-menopausa", "cancer-endometrio"] },
    { termos: ["adenomiose", "miometrio heterogeneo", "utero globoso"], significado: "Adenomiose (dismenorreia, sangramento)", fichas: ["endometriose", "dismenorreia"] },
    { termos: ["ovarios policisticos", "morfologia policistica", "multiplos foliculos perifericos"], significado: "Critério morfológico de SOP (≥ 20 folículos por ovário ou volume ≥ 10 mL)", fichas: ["sop"] },
    { termos: ["abscesso tubo-ovariano", "abscesso tubo ovariano", "hidrossalpinge", "piossalpinge"], significado: "DIP complicada — internação e antibiótico venoso", fichas: ["dip"], urgente: true },
    { termos: ["diu mal posicionado", "diu deslocado", "diu baixo", "diu em canal cervical"], significado: "Reposicionar/trocar; risco de falha contraceptiva", fichas: ["insercao-diu"] }
  ],
  fontes: ["IOTA Simple Rules / O-RADS US (ACR 2020)", "FEBRASGO — Protocolos de sangramento uterino anormal e de massas anexiais", "ACOG Committee Opinion 734 — Endometrial thickness in postmenopausal bleeding"]
},
{
  id: "usg-obstetrica",
  nome: "Ultrassonografia obstétrica",
  categoria: "usg",
  variantes: ["Obstétrica transvaginal (1º trimestre)", "Morfológica de 1º trimestre (11–13+6 sem, translucência nucal)", "Morfológica de 2º trimestre (20–24 sem)", "Obstétrica com Doppler", "Perfil biofísico fetal"],
  indicacoes: [
    "1º trimestre: confirmar gestação intrauterina, viabilidade, número de embriões/corionicidade e DATAÇÃO (CCN — a mais precisa)",
    "Sangramento no 1º trimestre: abortamento, ectópica, mola hidatiforme",
    "Morfológica de 1º trimestre (11–13+6 semanas, CCN 45–84 mm): translucência nucal, rastreio de aneuploidias e de pré-eclâmpsia (com Doppler de uterinas)",
    "Morfológica de 2º trimestre (20–24 semanas): anatomia fetal, placenta, colo (medida do colo para risco de prematuridade)",
    "3º trimestre: crescimento fetal (suspeita de RCF ou macrossomia), líquido amniótico, apresentação, placenta",
    "Doppler: RCF, pré-eclâmpsia, diabetes com complicação, gemelar, isoimunização (ACM)",
    "Sangramento de 2ª metade: placenta prévia (não fazer toque antes do USG), descolamento (USG tem baixa sensibilidade — diagnóstico clínico)",
    "Redução de movimentos fetais, suspeita de óbito fetal"
  ],
  naoIndicado: [
    "Atrasar conduta no descolamento prematuro de placenta clinicamente evidente (o USG normal não exclui)",
    "USG seriado sem indicação em gestação de baixo risco além do protocolo (rotina: 1º trimestre + morfológico; 3º trimestre conforme protocolo local)",
    "Determinar sexo fetal como única finalidade"
  ],
  cuidados: [
    "Sem radiação; Doppler pulsado no 1º trimestre: usar com cautela (ALARA)",
    "Datação: usar a CCN do 1º trimestre; não 'redatar' com USG tardio salvo exceções",
    "Gestação de localização desconhecida: β-hCG seriado (48 h) + USG; não fazer metotrexato sem diagnóstico"
  ],
  preparo: "1º trimestre transvaginal: bexiga vazia. Via abdominal no início da gestação: bexiga moderadamente cheia. Após o 1º trimestre: sem preparo.",
  pedido: "Ultrassonografia obstétrica ___ (transvaginal/morfológica/com Doppler). IG: ___ semanas (DUM ___). HD/Justificativa: ___.",
  exemplos: [
    "Ultrassonografia obstétrica transvaginal — Gestação de 7 semanas pela DUM, sangramento vaginal e cólica. HD: ameaça de abortamento × ectópica.",
    "Ultrassonografia obstétrica com Doppler — IG 32 semanas, altura uterina abaixo do p10 e hipertensão gestacional. HD: restrição de crescimento fetal.",
    "Ultrassonografia morfológica de 1º trimestre com translucência nucal e Doppler de artérias uterinas — IG 12+2 semanas pela CCN do USG anterior."
  ],
  achados: [
    { termos: ["ausencia de batimentos cardiacos", "ausencia de bcf", "bcf ausentes", "embriao sem atividade cardiaca", "obito fetal", "obito embrionario"], significado: "Óbito embrionário/fetal (critérios: CCN ≥ 7 mm sem BCF; saco ≥ 25 mm sem embrião)", fichas: ["abortamento", "obito-fetal"], urgente: true },
    { termos: ["saco gestacional sem embriao", "gestacao anembrionada", "ovo anembrionado", "saco gestacional irregular"], significado: "Possível gestação não evolutiva — confirmar pelos critérios ou repetir em 7–14 dias", fichas: ["abortamento"] },
    { termos: ["restos ovulares", "material amorfo intracavitario", "abortamento incompleto", "espessamento endometrial heterogeneo"], significado: "Abortamento incompleto — AMIU/curetagem ou misoprostol", fichas: ["abortamento"] },
    { termos: ["gestacao ectopica", "massa anexial", "utero vazio", "saco gestacional extrauterino", "embriao extrauterino"], significado: "Gravidez ectópica", fichas: ["gravidez-ectopica"], urgente: true },
    { termos: ["imagem em cacho de uva", "flocos de neve", "mola hidatiforme", "degeneracao hidropica"], significado: "Doença trofoblástica gestacional", fichas: ["doenca-trofoblastica"] },
    { termos: ["placenta previa", "placenta de insercao baixa", "placenta recobrindo o orificio interno", "placenta previa total"], significado: "Não fazer toque vaginal; planejar cesárea (se ainda prévia ≥ 32–36 sem)", fichas: ["sangramento-segunda-metade"] },
    { termos: ["acretismo placentario", "placenta acreta", "perda da zona hipoecogenica retroplacentaria", "lacunas placentarias"], significado: "Espectro de acretismo — parto em centro de referência", fichas: ["sangramento-segunda-metade", "hemorragia-pos-parto"] },
    { termos: ["hematoma retroplacentario", "descolamento placentario", "descolamento prematuro de placenta"], significado: "DPP — USG normal NÃO exclui; urgência obstétrica", fichas: ["sangramento-segunda-metade"], urgente: true },
    { termos: ["oligoamnio", "oligodramnia", "ila reduzido", "liquido amniotico reduzido", "maior bolsao < 2"], significado: "Pouco líquido (rotura de membranas, RCF, insuficiência placentária)", fichas: ["alteracoes-liquido-amniotico", "rotura-membranas"] },
    { termos: ["polidramnio", "polidramnia", "ila aumentado", "liquido amniotico aumentado"], significado: "Excesso de líquido (diabetes, malformação)", fichas: ["alteracoes-liquido-amniotico", "diabetes-gestacao"] },
    { termos: ["restricao de crescimento", "peso fetal abaixo do percentil 10", "peso fetal estimado abaixo do p10", "pfe < p10", "rciu", "rcf"], significado: "Restrição de crescimento — Doppler e vigilância", fichas: ["restricao-crescimento-fetal"] },
    { termos: ["diastole zero", "diastole reversa", "fluxo diastolico ausente", "fluxo diastolico reverso", "ducto venoso alterado", "onda a reversa"], significado: "Insuficiência placentária grave — avaliar resolução da gestação", fichas: ["restricao-crescimento-fetal", "vitalidade-fetal"], urgente: true },
    { termos: ["centralizacao fetal", "relacao cerebro-placentaria alterada", "relacao cerebroplacentaria < 1"], significado: "Redistribuição hemodinâmica — vigilância intensiva", fichas: ["restricao-crescimento-fetal", "vitalidade-fetal"] },
    { termos: ["pico de velocidade sistolica da acm aumentado", "acm elevada", "anemia fetal"], significado: "Anemia fetal (isoimunização) — medicina fetal", fichas: ["isoimunizacao-rh"], urgente: true },
    { termos: ["colo curto", "colo uterino curto", "colo < 25 mm", "afunilamento"], significado: "Risco de parto prematuro — progesterona vaginal", fichas: ["trabalho-parto-prematuro", "prematuridade"] },
    { termos: ["translucencia nucal aumentada", "tn aumentada", "osso nasal ausente", "ducto venoso com onda a reversa"], significado: "Marcador de aneuploidia/cardiopatia — aconselhamento e investigação" },
    { termos: ["apresentacao pelvica", "apresentacao cefalica", "situacao transversa"], significado: "Estática fetal — planejamento do parto", fichas: ["estatica-fetal-mecanismo-parto"] },
    { termos: ["gestacao gemelar", "gemelar monocorionica", "gemelar dicorionica", "sinal do lambda", "sinal do t"], significado: "Corionicidade define vigilância (monocoriônica: USG a cada 2 semanas)", fichas: ["gemelaridade"] }
  ],
  fontes: ["ISUOG Practice Guidelines (1º trimestre, 2º trimestre, Doppler, RCF)", "FEBRASGO — Protocolos de assistência pré-natal", "MS — Manual de gestação de alto risco (2022)", "SRU 2013 — Critérios de gestação não viável"]
},
{
  id: "usg-doppler-venoso-mmii",
  nome: "Ultrassonografia Doppler venoso de membros inferiores",
  categoria: "usg",
  variantes: ["Venoso profundo (pesquisa de TVP) — unilateral ou bilateral", "Mapeamento venoso (insuficiência venosa/varizes)", "Compressão em 2 pontos (POCUS)", "Arterial de membros inferiores"],
  indicacoes: [
    "Suspeita de TVP com Wells provável (≥ 2): Doppler direto (se negativo e D-dímero positivo → repetir em 5–7 dias ou Doppler de membro inteiro)",
    "Wells improvável (≤ 1) com D-dímero positivo",
    "Gestante/puérpera com suspeita de TVP (D-dímero tem menor valor; Doppler é o exame de escolha — se negativo com suspeita alta, repetir e considerar veia ilíaca)",
    "Suspeita de TEP com instabilidade ou contraindicação à angio-TC: TVP no Doppler autoriza tratar",
    "Varizes com indicação de tratamento (mapeamento): sintomas, edema, alterações tróficas, úlcera (CEAP C3–C6)",
    "Doppler arterial: claudicação com ITB alterado e planejamento de revascularização"
  ],
  naoIndicado: [
    "Wells improvável + D-dímero negativo (TVP excluída)",
    "Rastreio de TVP em paciente assintomático no pós-operatório",
    "Varizes assintomáticas sem intenção de tratamento",
    "Isquemia aguda de membro com sinais de ameaça (não atrasar cirurgia vascular/angio-TC)"
  ],
  cuidados: [
    "Sem radiação nem contraste",
    "Sensibilidade menor para TVP de panturrilha isolada e veias ilíacas",
    "Wells TVP (1 ponto cada): câncer ativo; paralisia/gesso recente; acamado ≥ 3 dias ou cirurgia maior < 12 semanas; dor no trajeto venoso profundo; edema de todo o membro; panturrilha > 3 cm maior que a contralateral; edema com cacifo no membro sintomático; veias superficiais colaterais; TVP prévia; −2 se diagnóstico alternativo tão ou mais provável"
  ],
  preparo: "Sem preparo.",
  pedido: "Ultrassonografia com Doppler venoso de membro inferior ___ (direito/esquerdo/bilateral). HD: TVP. Wells: ___ pontos. D-dímero: ___.",
  exemplos: [
    "Ultrassonografia com Doppler venoso profundo de membro inferior esquerdo — HD: TVP. Edema de todo o membro há 3 dias, panturrilha 4 cm maior, pós-operatório de artroplastia há 2 semanas (Wells 3).",
    "Ultrassonografia com Doppler venoso de membros inferiores (mapeamento) — HD: insuficiência venosa crônica CEAP C4 à direita, avaliação para tratamento."
  ],
  achados: [
    { termos: ["trombose venosa profunda", "tvp", "trombo", "veia nao compressivel", "ausencia de compressibilidade", "trombo oclusivo", "trombo intraluminal", "material ecogenico intraluminal"], significado: "TVP — anticoagular (se proximal; distal isolada: anticoagular ou seguir com USG seriado)", fichas: ["tvp", "tev-gestacao", "anticoagulacao-oral"], urgente: true },
    { termos: ["trombose de veia femoral", "trombose de veia poplitea", "trombose iliofemoral", "trombose ileofemoral"], significado: "TVP proximal (maior risco de TEP) — anticoagulação", fichas: ["tvp", "tep"], urgente: true },
    { termos: ["trombose de veias gemelares", "trombose de veias tibiais", "trombose de veias musculares", "trombose de veias soleares", "tvp distal"], significado: "TVP distal isolada — anticoagular se sintomática/fatores de risco ou repetir USG em 1–2 semanas", fichas: ["tvp"] },
    { termos: ["tromboflebite superficial", "trombose venosa superficial", "trombose da veia safena", "trombose de safena magna"], significado: "Trombose superficial; próxima (≤ 3 cm) da junção safenofemoral = tratar como TVP", fichas: ["insuficiencia-venosa", "tvp"] },
    { termos: ["trombose cronica", "sequela de trombose", "recanalizacao parcial", "espessamento parietal", "sindrome pos-trombotica"], significado: "TVP antiga — comparar com exames prévios", fichas: ["insuficiencia-venosa"] },
    { termos: ["refluxo", "insuficiencia de safena", "refluxo na juncao safenofemoral", "insuficiencia valvar", "varizes", "perfurante insuficiente"], significado: "Insuficiência venosa superficial/perfurantes", fichas: ["insuficiencia-venosa"] },
    { termos: ["cisto de baker", "cisto popliteo", "cisto de baker roto"], significado: "Diagnóstico diferencial de TVP (pode romper e simular TVP)", fichas: ["osteoartrite"] },
    { termos: ["estenose arterial", "oclusao arterial", "fluxo monofasico", "placas ateromatosas"], significado: "Doença arterial periférica", fichas: ["doenca-arterial-periferica", "isquemia-aguda-membro"] }
  ],
  fontes: ["Wells PS et al. NEJM 2003", "ASH 2018/2020 — Diagnosis of VTE", "SBACV — Diretrizes de TVP (2015) e de doença venosa crônica", "ACR Appropriateness Criteria — Suspected lower extremity DVT"]
},
{
  id: "usg-tireoide",
  nome: "Ultrassonografia de tireoide",
  categoria: "usg",
  variantes: ["Tireoide", "Tireoide com Doppler", "Cervical com pesquisa de linfonodos", "PAAF guiada por USG"],
  indicacoes: [
    "Nódulo tireoidiano palpável ou incidental (TC, RM, PET, Doppler de carótidas)",
    "Bócio ao exame físico",
    "Linfonodomegalia cervical suspeita",
    "Seguimento de nódulo conforme TI-RADS e pós-tireoidectomia por câncer",
    "Hipertireoidismo: auxílio para diferenciar Graves (Doppler aumentado) de tireoidite; nódulo quente na cintilografia",
    "Alto risco de câncer de tireoide (irradiação cervical na infância, NEM2/familiar)"
  ],
  naoIndicado: [
    "Hipotireoidismo primário ou tireoidite de Hashimoto sem nódulo palpável ou bócio (não muda conduta)",
    "Rastreamento populacional em assintomáticos (sobrediagnóstico de microcarcinomas)",
    "Avaliar função tireoidiana (USG não substitui TSH)"
  ],
  cuidados: ["Sem radiação; seguro na gestação", "Em nódulo com TSH suprimido: fazer cintilografia antes da PAAF (nódulo hiperfuncionante raramente é maligno)"],
  preparo: "Sem preparo.",
  pedido: "Ultrassonografia de tireoide com Doppler (classificação TI-RADS). HD: ___. Justificativa: ___.",
  exemplos: [
    "Ultrassonografia de tireoide com Doppler e classificação ACR TI-RADS — HD: nódulo tireoidiano palpável em lobo direito, TSH normal.",
    "Ultrassonografia de tireoide e cadeias linfonodais cervicais — Nódulo incidental de 1,5 cm em lobo esquerdo descrito em angio-TC de pescoço."
  ],
  achados: [
    { termos: ["ti-rads 1", "tirads 1", "tr1", "ti-rads 2", "tirads 2", "tr2"], significado: "Benigno / não suspeito — sem PAAF", fichas: ["nodulo-tireoide"] },
    { termos: ["ti-rads 3", "tirads 3", "tr3", "levemente suspeito"], significado: "Levemente suspeito — PAAF se ≥ 2,5 cm; seguimento se ≥ 1,5 cm (ACR)", fichas: ["nodulo-tireoide"] },
    { termos: ["ti-rads 4", "tirads 4", "tr4", "moderadamente suspeito"], significado: "Moderadamente suspeito — PAAF se ≥ 1,5 cm; seguimento se ≥ 1,0 cm (ACR)", fichas: ["nodulo-tireoide"] },
    { termos: ["ti-rads 5", "tirads 5", "tr5", "altamente suspeito"], significado: "Altamente suspeito — PAAF se ≥ 1,0 cm; seguimento se ≥ 0,5 cm (ACR)", fichas: ["nodulo-tireoide"], urgente: true },
    { termos: ["microcalcificacoes", "focos ecogenicos puntiformes", "margens irregulares", "margens infiltrativas", "extensao extratireoidiana", "mais alto que largo", "acentuadamente hipoecogenico"], significado: "Características suspeitas de malignidade (pontuam no TI-RADS)", fichas: ["nodulo-tireoide"] },
    { termos: ["linfonodo atipico", "linfonodo suspeito", "linfonodo com microcalcificacoes", "linfonodo cistico", "perda do hilo ecogenico"], significado: "Possível metástase linfonodal — PAAF do linfonodo", fichas: ["nodulo-tireoide"], urgente: true },
    { termos: ["nodulo espongiforme", "nodulo cistico", "cisto coloide", "artefato em cauda de cometa"], significado: "Padrões benignos", fichas: ["nodulo-tireoide"] },
    { termos: ["bocio", "bocio multinodular", "aumento volumetrico da tireoide", "tireoide aumentada"], significado: "Bócio — avaliar função e compressão", fichas: ["nodulo-tireoide", "hipotireoidismo"] },
    { termos: ["tireoidite", "parenquima heterogeneo", "ecotextura heterogenea", "padrao de tireoidite cronica", "pseudonodulos"], significado: "Tireoidite crônica (Hashimoto) — correlacionar com TSH/anti-TPO", fichas: ["hipotireoidismo"] },
    { termos: ["aumento da vascularizacao", "tireoide inferno", "hipervascularizacao difusa"], significado: "Sugere doença de Graves", fichas: ["hipertireoidismo"] },
    { termos: ["nodulo", "nodulo solido", "nodulo hipoecogenico", "massa"], significado: "Nódulo — conduta pelo TI-RADS e tamanho", fichas: ["nodulo-tireoide"] }
  ],
  fontes: ["ACR TI-RADS (Tessler et al., 2017)", "ATA 2015/2025 — Thyroid nodules and differentiated thyroid cancer", "SBEM — Consenso de nódulos tireoidianos"]
},
{
  id: "usg-mamas",
  nome: "Ultrassonografia de mamas",
  categoria: "usg",
  variantes: ["Mamas e axilas bilateral", "Com Doppler", "Biópsia/punção guiada"],
  indicacoes: [
    "Primeiro exame na mulher < 30–35 anos, gestante ou lactante com queixa mamária (nódulo, dor focal persistente)",
    "Complemento da mamografia: nódulo palpável, BI-RADS 0, mamas densas",
    "Mastite com suspeita de abscesso (guiar punção/drenagem)",
    "Linfonodomegalia axilar; avaliação de prótese (ruptura — RM é melhor para ruptura intracapsular)",
    "Guiar biópsia de nódulo (core biopsy)"
  ],
  naoIndicado: [
    "Substituir a mamografia no rastreamento populacional",
    "Mastalgia cíclica difusa sem achado clínico",
    "Rastreamento em mulher jovem de risco habitual assintomática"
  ],
  cuidados: ["Sem radiação", "Operador-dependente; não avalia bem microcalcificações (mamografia)"],
  preparo: "Sem preparo.",
  pedido: "Ultrassonografia de mamas e axilas bilateral. HD: ___. Justificativa: ___.",
  exemplos: [
    "Ultrassonografia de mamas e axilas — HD: nódulo mamário palpável. Mulher de 24 anos, nódulo móvel de 2 cm em QSE esquerdo.",
    "Ultrassonografia de mama direita — HD: abscesso mamário. Puérpera com mastite há 5 dias sem melhora com antibiótico, área flutuante."
  ],
  achados: [
    { termos: ["bi-rads 3", "birads 3", "provavelmente benigno", "fibroadenoma"], significado: "Provavelmente benigno — controle em 6 meses", fichas: ["nodulo-mamario"] },
    { termos: ["bi-rads 4", "birads 4", "bi-rads 4a", "bi-rads 4b", "bi-rads 4c", "suspeito"], significado: "Suspeito — biópsia (core)", fichas: ["nodulo-mamario", "cancer-mama"], urgente: true },
    { termos: ["bi-rads 5", "birads 5", "altamente suspeito"], significado: "Altamente suspeito — biópsia e mastologia", fichas: ["cancer-mama"], urgente: true },
    { termos: ["nodulo irregular", "margens espiculadas", "margens angulares", "mais alto que largo", "sombra acustica posterior", "orientacao nao paralela"], significado: "Características suspeitas", fichas: ["nodulo-mamario", "cancer-mama"] },
    { termos: ["cisto simples", "cistos simples", "bi-rads 2", "birads 2"], significado: "Benigno — sem conduta (punção só se sintomático)", fichas: ["nodulo-mamario"] },
    { termos: ["abscesso", "colecao", "colecao liquida", "colecao com debris"], significado: "Abscesso mamário — drenagem/punção + antibiótico", fichas: ["drenagem-abscesso-mamario", "mastite"], urgente: true },
    { termos: ["linfonodo axilar atipico", "linfonodo com cortical espessada", "linfonodomegalia axilar", "perda do hilo gorduroso"], significado: "Linfonodo suspeito — biópsia", fichas: ["cancer-mama"] },
    { termos: ["ectasia ductal", "ductos dilatados", "papiloma intraductal", "lesao intraductal"], significado: "Avaliar descarga papilar", fichas: ["nodulo-mamario"] },
    { termos: ["nodulo", "massa"], significado: "Lesão focal — ver categoria BI-RADS", fichas: ["nodulo-mamario"] }
  ],
  fontes: ["ACR BI-RADS Atlas 5ª ed. — Ultrasound", "CBR/SBM/FEBRASGO — Recomendações de imagem mamária"]
},
{
  id: "efast-pocus",
  nome: "eFAST / POCUS (ultrassom à beira-leito)",
  categoria: "usg",
  variantes: ["eFAST (trauma)", "POCUS cardíaco focado", "POCUS pulmonar (BLUE)", "Veia cava inferior", "RUSH (choque)", "Compressão venosa em 2 pontos", "Aorta abdominal", "Bexiga (volume)"],
  indicacoes: [
    "Trauma toracoabdominal (eFAST no primário do ATLS): líquido livre em Morison, esplenorrenal, pelve; pericárdio; pneumotórax e hemotórax",
    "Choque indiferenciado (RUSH): derrame pericárdico/tamponamento, função do VE, dilatação de VD, VCI, aorta, líquido livre, TVP",
    "Dispneia aguda: linhas B (congestão), consolidação, derrame pleural, pneumotórax",
    "Parada cardiorrespiratória: atividade cardiável, tamponamento, sem atrasar compressões (pausa < 10 s)",
    "Guiar procedimentos: acesso venoso central/periférico difícil, paracentese, toracocentese, pericardiocentese",
    "Retenção urinária (volume vesical), gestação inicial intrauterina, aneurisma de aorta"
  ],
  naoIndicado: [
    "Excluir lesão de víscera oca, pâncreas, diafragma ou retroperitônio (FAST negativo NÃO exclui — TC no estável)",
    "Atrasar TC/cirurgia em paciente com indicação clara",
    "Substituir ecocardiograma formal para medida de FE e valvas"
  ],
  cuidados: [
    "Operador-dependente: registrar o que foi avaliado e se as janelas foram adequadas",
    "FAST positivo + instável = centro cirúrgico; FAST positivo + estável = TC",
    "Repetir eFAST se mudança clínica (sangramento pode aparecer depois)"
  ],
  preparo: "Sem preparo.",
  pedido: "Ultrassonografia point-of-care (eFAST/POCUS) à beira-leito. Indicação: ___.",
  exemplos: [
    "eFAST na sala de trauma — Vítima de colisão moto × carro, PA 80/50, FC 128. Pesquisa de hemoperitônio, hemopericárdio e pneumotórax.",
    "POCUS cardíaco e pulmonar — Choque indiferenciado em sala vermelha (protocolo RUSH)."
  ],
  achados: [
    { termos: ["fast positivo", "liquido livre", "liquido livre no espaco de morison", "liquido livre no recesso hepatorrenal", "liquido livre esplenorrenal", "liquido livre em pelve", "hemoperitonio"], significado: "Hemoperitônio no trauma — instável: laparotomia", fichas: ["trauma-abdominal", "choque-hemorragico", "politrauma-abcde"], urgente: true },
    { termos: ["derrame pericardico", "liquido pericardico", "tamponamento", "colapso diastolico do vd", "colapso de atrio direito", "swinging heart"], significado: "Derrame pericárdico — com colapso de câmaras = tamponamento (pericardiocentese/toracotomia)", fichas: ["pericardite-tamponamento"], urgente: true },
    { termos: ["ausencia de deslizamento pleural", "ausencia de sliding", "ponto pulmonar", "lung point", "sinal do codigo de barras", "sinal da estratosfera", "pneumotorax"], significado: "Pneumotórax (ponto pulmonar é específico)", fichas: ["pneumotorax", "trauma-torax"], urgente: true },
    { termos: ["hemotorax", "derrame pleural", "liquido em recesso costofrenico", "sinal do sinusoide"], significado: "Líquido pleural (sangue no trauma)", fichas: ["trauma-torax", "derrame-pleural"], urgente: true },
    { termos: ["linhas b", "linhas b difusas", "padrao b", "sindrome intersticial", "rockets"], significado: "Congestão pulmonar (edema) — se bilateral difuso", fichas: ["ic-descompensada", "dispneia-aguda"] },
    { termos: ["consolidacao", "hepatizacao pulmonar", "broncograma aereo dinamico", "sinal do fragmento"], significado: "Consolidação (pneumonia)", fichas: ["pneumonia"] },
    { termos: ["vd dilatado", "dilatacao de ventriculo direito", "sinal de mcconnell", "septo retificado", "sinal do d"], significado: "Sobrecarga de VD — TEP maciço no choque", fichas: ["tep"], urgente: true },
    { termos: ["vci colabada", "veia cava colabavel", "veia cava inferior com colapso", "vci pletorica", "vci distendida sem variacao"], significado: "VCI pequena colabável: hipovolemia provável; pletórica: pressão de AD elevada (tamponamento, IC, TEP)", fichas: ["choque"] },
    { termos: ["disfuncao ventricular grave", "hipocinesia difusa", "fe visualmente reduzida", "contratilidade reduzida"], significado: "Choque cardiogênico provável", fichas: ["choque", "ic-descompensada"], urgente: true },
    { termos: ["aneurisma de aorta", "aorta abdominal dilatada", "flap intimal"], significado: "Aneurisma (≥ 3 cm) / dissecção — no choque: cirurgia vascular imediata", fichas: ["sindrome-aortica-aguda"], urgente: true },
    { termos: ["ausencia de atividade cardiaca", "standstill cardiaco", "assistolia ecografica"], significado: "Prognóstico ruim em PCR (não é critério isolado para encerrar)", fichas: ["pcr-adulto"] }
  ],
  fontes: ["ATLS 10ª ed.", "ACEP — Ultrasound Guidelines (2023)", "Lichtenstein — BLUE protocol (Chest 2008)", "Perera P et al. RUSH exam (Emerg Med Clin 2010)"]
}
);

/* ===================== TOMOGRAFIA ===================== */
EXAMES_IMAGEM.push(
{
  id: "tc-cranio",
  nome: "Tomografia de crânio",
  categoria: "tc",
  variantes: ["Sem contraste", "Com contraste", "Angio-TC de vasos intracranianos e cervicais", "TC de perfusão"],
  indicacoes: [
    "AVC agudo/ déficit focal súbito: TC sem contraste IMEDIATA (excluir hemorragia antes da trombólise) ± angio-TC (oclusão de grande vaso para trombectomia)",
    "TCE leve (GCS 13–15 com perda de consciência, amnésia ou desorientação) — Canadian CT Head Rule: TC se ALTO RISCO (GCS < 15 2 h após o trauma; suspeita de fratura aberta/afundamento; sinal de fratura de base — hemotímpano, olhos de guaxinim, Battle, otorreia/rinorreia de líquor; ≥ 2 episódios de vômito; idade ≥ 65 anos) ou MÉDIO RISCO (amnésia retrógrada ≥ 30 min; mecanismo perigoso — atropelamento, ejeção de veículo, queda > 1 m ou 5 degraus)",
    "TCE em uso de anticoagulante/antiagregante duplo ou coagulopatia: TC mesmo com GCS 15 (a regra canadense não se aplica)",
    "TCE moderado/grave (GCS ≤ 12): sempre",
    "Criança: aplicar PECARN (< 2 anos: GCS < 15, alteração do estado mental, fratura palpável → TC; ≥ 2 anos: GCS < 15, alteração do estado mental, sinais de fratura de base → TC; demais fatores → observação × TC)",
    "Cefaleia com sinal de alarme: pior cefaleia da vida/súbita em trovoada (HSA — TC < 6 h tem alta sensibilidade; depois disso, se normal, punção lombar), início > 50 anos, déficit focal, papiledema, imunossupressão, febre com rigidez",
    "Rebaixamento do nível de consciência sem causa evidente; primeira crise convulsiva no adulto (sobretudo com déficit, trauma, anticoagulação, idade > 40)",
    "Antes da punção lombar se: imunossupressão, lesão do SNC prévia, crise convulsiva recente, papiledema, alteração de consciência ou déficit focal"
  ],
  naoIndicado: [
    "TCE leve que não preencha a Canadian CT Head Rule (ou PECARN de baixo risco na criança)",
    "Cefaleia primária típica (enxaqueca, tensional) sem sinal de alarme e com exame neurológico normal",
    "Síncope típica (vasovagal) sem trauma de crânio nem déficit",
    "Tontura/vertigem periférica típica (HINTS periférico) — se suspeita de AVC de fossa posterior, a RM com difusão é superior",
    "Demência: TC/RM uma vez na investigação, não seriada"
  ],
  cuidados: [
    "Sem contraste na urgência (hemorragia aparece hiperdensa; contraste pode mascarar)",
    "Contraste iodado (se usado): TFG < 30 mL/min/1,73 m² ou LRA → avaliar risco/benefício e hidratar; metformina: suspender por 48 h se TFG < 30 ou LRA; reação prévia ao contraste → pré-medicação ou alternativa",
    "Gestação: crânio fora do campo do útero — dose fetal desprezível; NÃO adiar TC indicada",
    "Criança: radiação cumulativa — seguir PECARN para evitar TC desnecessária"
  ],
  preparo: "Sem preparo na urgência. Com contraste: jejum de 2–4 h conforme o serviço (não obrigatório em muitos), creatinina recente se fator de risco, acesso venoso calibroso.",
  pedido: "Tomografia computadorizada de crânio sem contraste. HD: ___. Justificativa: ___ (escala/regra aplicada, GCS, anticoagulação).",
  exemplos: [
    "TC de crânio sem contraste — HD: TCE leve. Queda da própria altura há 1 h com perda de consciência; GCS 15; 2 episódios de vômito (Canadian CT Head Rule de alto risco).",
    "TC de crânio sem contraste + angio-TC de vasos intracranianos e cervicais — HD: AVC isquêmico agudo. Hemiparesia direita e afasia com início há 2 h (NIHSS 14). Candidato a trombólise/trombectomia.",
    "TC de crânio sem contraste — HD: hemorragia subaracnoidea? Cefaleia súbita de máxima intensidade há 3 h durante esforço."
  ],
  achados: [
    { termos: ["hemorragia", "hemorragia intraparenquimatosa", "hematoma intraparenquimatoso", "hiperdensidade espontanea", "conteudo hematico", "sangramento intracraniano"], significado: "Hemorragia intracraniana — contraindica trombólise; reverter anticoagulação; neurocirurgia", fichas: ["avc-hemorragico", "tce-moderado-grave"], urgente: true },
    { termos: ["hemorragia subaracnoidea", "hsa", "hiperdensidade nas cisternas", "sangue nas cisternas", "sangue nos sulcos"], significado: "HSA (aneurisma roto até prova em contrário) — angio-TC e neurocirurgia", fichas: ["hemorragia-subaracnoidea"], urgente: true },
    { termos: ["hematoma subdural", "hsd", "colecao subdural", "colecao extra-axial em crescente"], significado: "Sangue entre dura e aracnoide — neurocirurgia (agudo hiperdenso, crônico hipodenso)", fichas: ["tce-moderado-grave", "tce-leve"], urgente: true },
    { termos: ["hematoma extradural", "hematoma epidural", "hed", "colecao biconvexa"], significado: "Sangramento arterial (lente biconvexa) — drenagem cirúrgica urgente", fichas: ["tce-moderado-grave"], urgente: true },
    { termos: ["desvio da linha media", "desvio de estruturas da linha media", "herniacao", "herniacao subfalcina", "herniacao uncal", "apagamento das cisternas", "apagamento de cisternas da base"], significado: "Efeito de massa / herniação — medidas para HIC e neurocirurgia", fichas: ["hipertensao-intracraniana"], urgente: true },
    { termos: ["hipodensidade", "area hipodensa", "hipodensidade cortico-subcortical", "perda da diferenciacao cortico-subcortical", "apagamento de sulcos", "sinal da arteria cerebral media hiperdensa", "arteria hiperdensa", "infarto"], significado: "Isquemia (AVC) — tempo de início e ASPECTS definem conduta", fichas: ["avc"], urgente: true },
    { termos: ["oclusao de grande vaso", "oclusao da arteria cerebral media", "oclusao de m1", "oclusao da carotida interna", "falha de enchimento"], significado: "Candidato a trombectomia mecânica", fichas: ["avc"], urgente: true },
    { termos: ["edema cerebral", "edema cerebral difuso", "apagamento difuso dos sulcos", "perda da diferenciacao substancia branca-cinzenta"], significado: "Edema cerebral (hipóxia, TCE, encefalopatia) — HIC", fichas: ["hipertensao-intracraniana", "pos-pcr"], urgente: true },
    { termos: ["hidrocefalia", "dilatacao ventricular", "dilatacao do sistema ventricular", "transependimario"], significado: "Hidrocefalia — aguda obstrutiva precisa de derivação", fichas: ["hipertensao-intracraniana"], urgente: true },
    { termos: ["fratura", "fratura de calota", "afundamento", "fratura com afundamento", "fratura de base de cranio", "pneumoencefalo"], significado: "Fratura craniana — afundamento/exposta: neurocirurgia", fichas: ["tce-moderado-grave", "tce-crianca"], urgente: true },
    { termos: ["contusao", "contusoes", "focos contusionais", "lesao axonal difusa"], significado: "Lesão parenquimatosa traumática — observação/neurocirurgia", fichas: ["tce-moderado-grave"] },
    { termos: ["lesao expansiva", "massa", "lesao com realce anelar", "realce anelar", "edema perilesional", "nodulo"], significado: "Tumor, abscesso, neurotoxoplasmose (no HIV) — RM", fichas: ["hipertensao-intracraniana", "hiv-infeccao"] },
    { termos: ["microangiopatia", "leucoaraiose", "hipodensidades periventriculares", "gliose", "lacunas", "infarto antigo", "sequela isquemica"], significado: "Doença de pequenos vasos / sequela — controle de fatores de risco", fichas: ["avc-prevencao-secundaria"] },
    { termos: ["atrofia", "reducao volumetrica encefalica", "alargamento de sulcos"], significado: "Atrofia (idade, demência)", fichas: ["demencia"] }
  ],
  fontes: ["Stiell IG et al. Canadian CT Head Rule (Lancet 2001)", "Kuppermann N et al. PECARN (Lancet 2009)", "AHA/ASA 2019/2026 — Manejo do AVC isquêmico agudo", "ACR Manual on Contrast Media (2024)", "ACR Appropriateness Criteria — Head trauma; Headache"]
},
{
  id: "tc-coluna-cervical",
  nome: "Tomografia de coluna cervical",
  categoria: "tc",
  variantes: ["Sem contraste (com reconstruções)", "Angio-TC cervical (lesão vascular)"],
  indicacoes: [
    "Trauma cervical em adulto com risco, pelos critérios NEXUS (imagem se QUALQUER um: dor à palpação na linha média posterior; déficit neurológico focal; alteração do nível de consciência; intoxicação; lesão dolorosa que distraia) OU",
    "Canadian C-Spine Rule (paciente alerta GCS 15, estável): ALTO RISCO → imagem (idade ≥ 65 anos; mecanismo perigoso — queda ≥ 1 m ou 5 degraus, carga axial na cabeça, colisão > 100 km/h, capotamento, ejeção, veículo recreativo, bicicleta; parestesias nas extremidades). Se nenhum alto risco e presente algum fator de BAIXO RISCO (colisão traseira simples; sentado no PS; deambulou em algum momento; dor cervical tardia; sem dor na linha média) → testar rotação ativa 45° para cada lado: se consegue, NÃO precisa de imagem",
    "TC é preferida à radiografia em adultos (maior sensibilidade)",
    "Angio-TC cervical: suspeita de dissecção carotídea/vertebral (fratura de forame transverso, déficit não explicado, síndrome de Horner, critérios de Denver)"
  ],
  naoIndicado: [
    "Paciente que satisfaz NEXUS de baixo risco ou Canadian C-Spine que permite avaliar e rodar o pescoço 45° para os dois lados",
    "Cervicalgia sem trauma (pensar em RM só se sinal de alarme)",
    "Criança pequena de baixo risco (avaliar com regras pediátricas — PECARN cervical; reduzir radiação)"
  ],
  cuidados: [
    "Manter restrição de movimento da coluna até liberação clínica ou de imagem",
    "Déficit neurológico com TC normal: RM (lesão ligamentar, hérnia traumática, hematoma epidural, SCIWORA na criança)",
    "Gestação: dose fetal baixa (fora do campo) — não adiar",
    "Angio-TC: contraste iodado — ver função renal/alergia"
  ],
  preparo: "Sem preparo. Paciente com colar cervical/restrição de movimento.",
  pedido: "Tomografia computadorizada de coluna cervical sem contraste, com reconstruções sagital e coronal. HD: ___. Justificativa: ___ (NEXUS/Canadian C-Spine).",
  exemplos: [
    "TC de coluna cervical sem contraste com reconstruções — HD: trauma raquimedular cervical? Queda de escada (> 5 degraus), 70 anos, dor na linha média cervical (Canadian C-Spine de alto risco).",
    "TC de coluna cervical sem contraste — Politrauma com GCS 12 e intoxicação alcoólica (NEXUS positivo)."
  ],
  achados: [
    { termos: ["fratura", "traco de fratura", "fratura do odontoide", "fratura do processo odontoide", "fratura de c2", "fratura de jefferson", "fratura do enforcado", "fratura do corpo vertebral"], significado: "Fratura cervical — manter imobilização, neurocirurgia/ortopedia", fichas: ["trauma-raquimedular"], urgente: true },
    { termos: ["luxacao", "subluxacao", "luxacao facetaria", "facetas travadas", "perda do alinhamento", "anterolistese traumatica"], significado: "Instabilidade — imobilização e cirurgia", fichas: ["trauma-raquimedular"], urgente: true },
    { termos: ["estreitamento do canal", "compressao medular", "fragmento no canal", "retropulsao", "hematoma epidural"], significado: "Risco/ lesão medular — RM e neurocirurgia", fichas: ["trauma-raquimedular"], urgente: true },
    { termos: ["fratura do forame transverso", "lesao da arteria vertebral", "disseccao arterial", "disseccao da arteria vertebral", "disseccao carotidea"], significado: "Lesão vascular cervical — angio-TC e antitrombótico", fichas: ["avc"], urgente: true },
    { termos: ["aumento de partes moles pre-vertebrais", "edema pre-vertebral"], significado: "Pode indicar lesão ligamentar/fratura oculta", fichas: ["trauma-raquimedular"] },
    { termos: ["alteracoes degenerativas", "uncoartrose", "osteofitos", "discopatia"], significado: "Degenerativo — sem relação obrigatória com o trauma", fichas: ["cervicalgia-dorsalgia"] }
  ],
  fontes: ["Hoffman JR et al. NEXUS (NEJM 2000)", "Stiell IG et al. Canadian C-Spine Rule (JAMA 2001; NEJM 2003)", "ATLS 10ª ed.", "ACR Appropriateness Criteria — Suspected spine trauma (2018)"]
},
{
  id: "angio-tc-torax",
  nome: "Angiotomografia de tórax (artérias pulmonares)",
  categoria: "tc",
  variantes: ["Angio-TC de artérias pulmonares (protocolo TEP)", "Angio-TC de tórax com fase venosa de MMII (raramente)"],
  indicacoes: [
    "Suspeita de TEP com probabilidade ALTA (Wells > 4 ou 'provável'): angio-TC direta",
    "Probabilidade baixa/intermediária (Wells ≤ 4) com D-dímero positivo (usar corte ajustado à idade: idade × 10 µg/L FEU após 50 anos, ou YEARS)",
    "Wells (TEP): sinais clínicos de TVP 3; TEP mais provável que diagnóstico alternativo 3; FC > 100 1,5; imobilização ≥ 3 dias ou cirurgia nas últimas 4 semanas 1,5; TVP/TEP prévio 1,5; hemoptise 1; câncer ativo 1",
    "PERC (só se probabilidade clínica baixa < 15%): idade < 50, FC < 100, SpO2 ≥ 95%, sem hemoptise, sem estrogênio, sem TEV prévio, sem edema unilateral de perna, sem cirurgia/trauma com internação nas últimas 4 semanas — se TODOS presentes, não pedir D-dímero nem imagem",
    "Gestante: algoritmo YEARS adaptado/ Doppler de MMII se sintomas de TVP; angio-TC ou cintilografia V/Q conforme o serviço"
  ],
  naoIndicado: [
    "PERC negativo (todos os critérios) com baixa probabilidade clínica",
    "Probabilidade não alta + D-dímero negativo (TEP excluída)",
    "Paciente instável sem condições de ir à TC: ecocardiograma à beira-leito (VD dilatado) autoriza trombólise",
    "Investigação de dor torácica sem hipótese de TEP (usar protocolo específico — triplo descarte só em casos selecionados)"
  ],
  cuidados: [
    "Contraste iodado: TFG < 30 ou LRA — pesar risco/benefício (TEP não tratado é muito mais grave); hidratação EV; metformina suspensa 48 h se TFG < 30/LRA",
    "Alergia prévia ao contraste: pré-medicação (ex.: prednisona 50 mg VO 13, 7 e 1 h antes + difenidramina 1 h antes) ou alternativa (cintilografia V/Q)",
    "Gestação: dose fetal baixa (< 1 mGy); dose na mama é a preocupação — preferir cintilografia V/Q se Rx de tórax normal (conforme disponibilidade). Contraste iodado: aceito; checar TSH do RN",
    "Iniciar anticoagulação antes do exame se probabilidade alta e sem contraindicação"
  ],
  preparo: "Acesso venoso calibroso (18–20 G, preferir antecubital). Creatinina se fator de risco renal (não atrasar em suspeita alta). Jejum não necessário.",
  pedido: "Angiotomografia computadorizada de tórax (artérias pulmonares — protocolo TEP). HD: TEP. Wells: ___. D-dímero: ___. Creatinina: ___.",
  exemplos: [
    "Angio-TC de artérias pulmonares — HD: tromboembolismo pulmonar. Dispneia súbita, FC 118, edema assimétrico de panturrilha esquerda, pós-operatório de 10 dias (Wells 7,5 — provável).",
    "Angio-TC de tórax protocolo TEP — HD: TEP? Dor pleurítica, Wells 3 (improvável), D-dímero 1.450 ng/mL FEU (corte ajustado à idade 700). Creatinina 0,9."
  ],
  achados: [
    { termos: ["tromboembolismo pulmonar", "tep", "falha de enchimento", "falhas de enchimento", "trombo em arteria pulmonar", "embolia pulmonar", "defeito de enchimento"], significado: "TEP — anticoagular; estratificar risco (VD, troponina, BNP)", fichas: ["tep", "anticoagulacao-oral"], urgente: true },
    { termos: ["trombo em sela", "tep central", "tromboembolismo bilateral", "tep macico", "tronco da arteria pulmonar"], significado: "TEP central/extenso — avaliar instabilidade e VD", fichas: ["tep"], urgente: true },
    { termos: ["sobrecarga de ventriculo direito", "relacao vd/ve aumentada", "relacao vd/ve > 1", "dilatacao do ventriculo direito", "retificacao do septo", "refluxo de contraste para veia cava inferior"], significado: "Disfunção de VD — risco intermediário-alto/alto (considerar trombólise se instável)", fichas: ["tep"], urgente: true },
    { termos: ["infarto pulmonar", "opacidade triangular periferica", "opacidade em cunha", "hampton"], significado: "Infarto pulmonar por TEP", fichas: ["tep"] },
    { termos: ["tep cronico", "trombos murais", "estenoses em rede", "sequela tromboembolica"], significado: "TEP crônico — pensar em hipertensão pulmonar tromboembólica", fichas: ["tep"] },
    { termos: ["consolidacao", "derrame pleural", "pneumotorax", "edema pulmonar"], significado: "Diagnóstico alternativo para a dispneia", fichas: ["pneumonia", "derrame-pleural", "pneumotorax", "ic-descompensada"] },
    { termos: ["nodulo", "nodulo pulmonar", "massa"], significado: "Achado incidental — seguir Fleischner", fichas: ["nodulo-cancer-pulmao"] },
    { termos: ["disseccao", "flap intimal", "aneurisma da aorta toracica"], significado: "Doença aórtica (diagnóstico diferencial)", fichas: ["sindrome-aortica-aguda"], urgente: true }
  ],
  fontes: ["ESC 2019 — Acute pulmonary embolism", "Wells PS et al. (Thromb Haemost 2000)", "Kline JA — PERC (J Thromb Haemost 2004/2008)", "Righini M — ADJUST-PE (JAMA 2014)", "ACR Manual on Contrast Media (2024)"]
},
{
  id: "tc-torax",
  nome: "Tomografia de tórax",
  categoria: "tc",
  variantes: ["Sem contraste", "Com contraste", "Alta resolução (TCAR)", "Baixa dose (rastreamento de câncer de pulmão)"],
  indicacoes: [
    "Nódulo ou massa na radiografia; seguimento de nódulo pulmonar (Fleischner/Lung-RADS)",
    "Rastreamento de câncer de pulmão com TC de baixa dose: 50–80 anos, carga ≥ 20 maços-ano, fumante atual ou que parou há < 15 anos (USPSTF 2021; SBPT/CBR recomendam com critérios semelhantes)",
    "Pneumonia complicada (empiema, abscesso), sem resposta ao tratamento, ou imunossuprimido com Rx normal",
    "Doença intersticial (TCAR), bronquiectasias, enfisema (planejamento)",
    "Hemoptise (com contraste/angio-TC se volumosa)",
    "Trauma torácico grave (no estável), suspeita de lesão de aorta, ruptura esofágica (com contraste oral hidrossolúvel)",
    "Derrame pleural de causa indefinida (com contraste); estadiamento de neoplasia; massa mediastinal; síndrome de veia cava superior",
    "COVID-19/síndrome gripal grave apenas se mudar conduta (não para diagnóstico de rotina)"
  ],
  naoIndicado: [
    "Rotina na pneumonia comunitária com boa evolução",
    "Tosse aguda sem sinal de alarme",
    "Nódulo sólido incidental < 6 mm em baixo risco (Fleischner: sem seguimento obrigatório)",
    "Diagnóstico de COVID-19 em paciente leve"
  ],
  cuidados: [
    "Contraste iodado: TFG < 30/LRA, alergia prévia, metformina (suspender 48 h se TFG < 30 ou LRA), hipertireoidismo não controlado (risco de tireotoxicose)",
    "Gestação: dose fetal baixa; justificar e usar protocolo de baixa dose",
    "TCAR é sem contraste; para TEP use angio-TC específica"
  ],
  preparo: "Sem contraste: sem preparo. Com contraste: acesso venoso, creatinina se fator de risco, jejum conforme o serviço (geralmente 2–4 h ou dispensado).",
  pedido: "Tomografia computadorizada de tórax ___ (sem/com contraste/TCAR/baixa dose). HD: ___. Justificativa: ___.",
  exemplos: [
    "TC de tórax com contraste — HD: nódulo pulmonar de 2 cm em lobo superior direito na radiografia; tabagista 40 maços-ano, perda de 5 kg.",
    "TC de tórax de baixa dose para rastreamento de câncer de pulmão — 62 anos, tabagista atual, 35 maços-ano, assintomático.",
    "TC de tórax com contraste — HD: empiema? PAC em tratamento há 5 dias com febre persistente e derrame pleural loculado."
  ],
  achados: [
    { termos: ["nodulo", "nodulo pulmonar", "nodulo solido", "nodulo subsolido", "nodulo em vidro fosco", "nodulo espiculado", "lung-rads 4", "lung-rads 4a", "lung-rads 4b", "lung-rads 4x"], significado: "Nódulo — conduta por tamanho, morfologia e risco (Fleischner/Lung-RADS)", fichas: ["nodulo-cancer-pulmao"] },
    { termos: ["massa", "massa pulmonar", "massa mediastinal", "lesao expansiva", "lesao neoplasica"], significado: "Neoplasia provável — biópsia/estadiamento", fichas: ["nodulo-cancer-pulmao", "linfomas"] },
    { termos: ["consolidacao", "consolidacoes", "broncograma aereo", "pneumonia"], significado: "Pneumonia/ outras causas de preenchimento alveolar", fichas: ["pneumonia"] },
    { termos: ["vidro fosco", "opacidades em vidro fosco", "pavimentacao em mosaico", "padrao em vidro fosco"], significado: "Infecção viral (COVID-19), pneumocistose, edema, hemorragia, pneumonite", fichas: ["covid-19", "hiv-infeccao"] },
    { termos: ["empiema", "derrame pleural loculado", "realce pleural", "sinal da pleura dividida", "colecao pleural"], significado: "Empiema — drenagem", fichas: ["derrame-pleural", "drenagem-toracica"], urgente: true },
    { termos: ["derrame pleural"], significado: "Derrame — avaliar volume e características", fichas: ["derrame-pleural"] },
    { termos: ["abscesso pulmonar", "cavitacao", "cavidade", "lesao cavitada", "arvore em brotamento"], significado: "Abscesso, tuberculose (árvore em brotamento = disseminação endobrônquica)", fichas: ["tuberculose-pulmonar", "pneumonia"] },
    { termos: ["pneumotorax", "pneumomediastino"], significado: "Ar fora do pulmão; pneumomediastino + vômitos = pensar em ruptura esofágica", fichas: ["pneumotorax", "ruptura-esofagica"], urgente: true },
    { termos: ["bronquiectasias", "bronquiectasia", "sinal do anel de sinete"], significado: "Bronquiectasias", fichas: ["bronquiectasias"] },
    { termos: ["enfisema", "enfisema centrolobular", "enfisema paraseptal", "bolhas"], significado: "Enfisema (DPOC)", fichas: ["dpoc"] },
    { termos: ["faveolamento", "reticulado periferico", "bronquiectasias de tracao", "pneumonia intersticial usual", "fibrose"], significado: "Doença pulmonar intersticial fibrosante — pneumologia", fichas: ["esclerose-sistemica"] },
    { termos: ["linfonodomegalia mediastinal", "linfonodomegalias mediastinais", "linfonodos aumentados"], significado: "Neoplasia, linfoma, tuberculose, sarcoidose", fichas: ["linfomas", "nodulo-cancer-pulmao"] },
    { termos: ["compressao da veia cava superior", "obstrucao da veia cava superior", "circulacao colateral"], significado: "Síndrome de veia cava superior", fichas: ["sindrome-veia-cava-superior"], urgente: true },
    { termos: ["derrame pericardico"], significado: "Derrame pericárdico — ecocardiograma", fichas: ["pericardite-tamponamento"] }
  ],
  fontes: ["Fleischner Society 2017 — Incidental pulmonary nodules", "ACR Lung-RADS v2022", "USPSTF 2021 — Lung cancer screening", "SBPT/CBR/AMB — Rastreamento do câncer de pulmão (2023)"]
},
{
  id: "tc-abdome-pelve",
  nome: "Tomografia de abdome e pelve",
  categoria: "tc",
  variantes: ["Com contraste venoso", "Sem contraste (protocolo de litíase)", "Trifásica/multifásica (fígado, pâncreas, rim)", "Uro-TC", "Angio-TC de abdome (isquemia mesentérica/sangramento)", "Com contraste oral/retal"],
  indicacoes: [
    "Dor abdominal aguda difusa ou com suspeita de complicação: perfuração, obstrução (local e causa), isquemia mesentérica (angio-TC)",
    "Apendicite em adulto: Escore de Alvarado (migração da dor 1, anorexia 1, náusea/vômito 1, dor em FID 2, descompressão dolorosa 1, febre ≥ 37,3 °C 1, leucocitose > 10.000 2, desvio à esquerda 1): ≤ 4 baixa probabilidade; 5–6 intermediária → imagem (TC no adulto; USG em criança, gestante, mulher jovem); ≥ 7 alta → avaliação cirúrgica (imagem conforme protocolo local) — considerar também AIR e AAS",
    "Diverticulite (diagnóstico e complicações — abscesso, perfuração); primeiro episódio ou dúvida",
    "Cólica renal: TC sem contraste de baixa dose é o padrão-ouro em adultos (exceto gestante e jovens com USG suficiente)",
    "Pancreatite aguda: NÃO na admissão se diagnóstico claro; fazer se dúvida diagnóstica ou após 72–96 h com má evolução (necrose, coleções)",
    "Trauma abdominal em paciente estável (com contraste venoso)",
    "Abscesso intra-abdominal, febre pós-operatória, sepse de foco abdominal",
    "Massa/neoplasia: estadiamento; hematúria macroscópica em adulto de risco (uro-TC)",
    "Hemorragia digestiva com instabilidade sem foco na endoscopia (angio-TC)"
  ],
  naoIndicado: [
    "Dor abdominal leve inespecífica com exame benigno",
    "Gestante e criança como primeiro exame (USG primeiro; RM na gestante se inconclusivo)",
    "Pancreatite com diagnóstico clínico-laboratorial claro nas primeiras 72 h",
    "Constipação simples, dispepsia, cólica biliar típica (USG)",
    "Cólica renal recorrente típica em paciente jovem já com USG mostrando a causa"
  ],
  cuidados: [
    "Contraste iodado: risco de nefropatia é baixo com TFG ≥ 30. TFG < 30 (sem diálise) ou LRA: avaliar alternativa, hidratar com SF 0,9% (ex.: 1 mL/kg/h 6–12 h antes e depois, conforme o serviço). Metformina: suspender por 48 h se TFG < 30 ou LRA e reavaliar creatinina",
    "Reação alérgica prévia ao contraste: pré-medicação ou contraste alternativo; alergia a frutos do mar NÃO é contraindicação",
    "Gestação: preferir USG/RM; se TC necessária (trauma, suspeita grave), fazer — dose fetal da TC de abdome em geral < 50 mGy (limiar de risco determinístico)",
    "Lactação: não precisa suspender amamentação após iodado ou gadolínio",
    "Contraste oral hidrossolúvel se suspeita de fístula/perfuração; bário não"
  ],
  preparo: "Com contraste: jejum de 2–4 h conforme o serviço, creatinina se idade > 60, DRC, diabetes, metformina ou nefrotóxicos; acesso venoso. Contraste oral: ingerir 1–1,5 L em 60–90 min antes, se protocolo pedir. Sem contraste (litíase): sem preparo.",
  pedido: "Tomografia computadorizada de abdome total (abdome superior e pelve) ___ (com contraste venoso/sem contraste). HD: ___. Justificativa: ___. Creatinina: ___.",
  exemplos: [
    "TC de abdome e pelve com contraste venoso — HD: apendicite aguda. Homem de 32 anos, dor migratória para FID há 18 h, Alvarado 6, leucócitos 13.500. Creatinina 0,9.",
    "TC de abdome e pelve sem contraste (protocolo para litíase) — HD: cólica renal direita com hematúria, homem de 45 anos, primeiro episódio.",
    "Angio-TC de abdome (fases arterial e portal) — HD: isquemia mesentérica aguda. Dor desproporcional ao exame físico, FA, lactato 4,2."
  ],
  achados: [
    { termos: ["apendice espessado", "apendice com diametro aumentado", "apendicite", "apendicolito", "densificacao da gordura periapendicular", "borramento da gordura periapendicular"], significado: "Apendicite aguda — cirurgia", fichas: ["apendicite"], urgente: true },
    { termos: ["pneumoperitonio", "ar livre", "gas extraluminal", "extravasamento de contraste", "perfuracao"], significado: "Perfuração de víscera — cirurgia", fichas: ["abdome-agudo-perfurativo"], urgente: true },
    { termos: ["obstrucao intestinal", "distensao de alcas", "ponto de transicao", "alcas de delgado dilatadas", "sinal das fezes no delgado", "alca fechada", "hernia encarcerada"], significado: "Obstrução — alça fechada/estrangulamento = cirurgia urgente", fichas: ["obstrucao-intestinal", "hernias-complicadas"], urgente: true },
    { termos: ["isquemia mesenterica", "oclusao da arteria mesenterica superior", "pneumatose", "ausencia de realce parietal", "gas portal", "trombose mesenterica"], significado: "Isquemia mesentérica — cirurgia/endovascular imediata", fichas: ["isquemia-mesenterica"], urgente: true },
    { termos: ["diverticulite", "diverticulos com densificacao", "espessamento do sigmoide", "abscesso pericolico", "hinchey"], significado: "Diverticulite — com abscesso/perfuração: complicada", fichas: ["diverticulite"] },
    { termos: ["abscesso", "colecao", "colecao organizada", "colecao com realce periferico", "colecao com gas"], significado: "Abscesso — drenagem percutânea/cirúrgica + antibiótico", fichas: ["abscesso-intra-abdominal", "drenagem-abscesso"], urgente: true },
    { termos: ["liquido livre", "hemoperitonio", "liquido livre de alta densidade", "extravasamento ativo de contraste", "blush"], significado: "Sangramento ativo/ hemoperitônio — cirurgia/angioembolização", fichas: ["trauma-abdominal", "choque-hemorragico", "abdome-agudo-hemorragico"], urgente: true },
    { termos: ["laceracao hepatica", "laceracao esplenica", "lesao esplenica", "lesao hepatica", "hematoma subcapsular", "laceracao renal"], significado: "Lesão de víscera sólida (graduar AAST)", fichas: ["trauma-abdominal"], urgente: true },
    { termos: ["calculo ureteral", "litiase ureteral", "calculo", "ureterolitiase", "hidronefrose", "ureterohidronefrose", "densificacao da gordura perirrenal"], significado: "Litíase urinária; ≥ 10 mm ou com febre/rim único → urologia", fichas: ["litiase-urinaria", "colica-renal"] },
    { termos: ["pancreatite", "necrose pancreatica", "necrose", "colecao peripancreatica", "pseudocisto", "walled-off", "necrose encapsulada"], significado: "Pancreatite (edematosa × necrosante; coleções)", fichas: ["pancreatite-aguda"] },
    { termos: ["colecistite", "colelitiase", "coledocolitiase", "dilatacao de vias biliares"], significado: "Doença biliar (USG é mais sensível para cálculos)", fichas: ["colecistite-colangite", "doencas-vias-biliares"] },
    { termos: ["espessamento parietal", "espessamento de alcas", "colite", "ileite", "espessamento do ileo terminal"], significado: "Colite infecciosa/isquêmica/inflamatória", fichas: ["doenca-inflamatoria-intestinal", "colite-clostridioides"] },
    { termos: ["massa", "lesao expansiva", "nodulo", "lesao hipervascular", "lesao com wash-out", "li-rads 4", "li-rads 5", "lirads 5"], significado: "Neoplasia provável — estadiamento/biópsia (LI-RADS 5 em cirrose = CHC)", fichas: ["nodulos-hepaticos", "tumores-pancreas", "cancer-colorretal"] },
    { termos: ["massa renal", "massa renal solida", "bosniak iii", "bosniak iv", "bosniak 3", "bosniak 4"], significado: "Possível carcinoma renal — urologia", fichas: ["tumores-urologicos"] },
    { termos: ["aneurisma de aorta", "aneurisma roto", "hematoma retroperitoneal"], significado: "Aneurisma de aorta (roto = emergência)", fichas: ["sindrome-aortica-aguda"], urgente: true },
    { termos: ["linfonodomegalias retroperitoneais", "linfonodomegalia", "carcinomatose", "implantes peritoneais"], significado: "Neoplasia/linfoma disseminado", fichas: ["linfomas"] },
    { termos: ["torcao anexial", "massa anexial", "abscesso tubo-ovariano"], significado: "Doença anexial (USG/RM complementam)", fichas: ["torcao-anexial", "massas-anexiais", "dip"] }
  ],
  fontes: ["ACR Appropriateness Criteria — Right lower quadrant pain; Acute nonlocalized abdominal pain; Acute pancreatitis", "Alvarado A (Ann Emerg Med 1986); WSES Jerusalem guidelines (2020)", "ACR Manual on Contrast Media (2024)", "ESUR Guidelines on Contrast Agents v10", "EAU Urolithiasis (2024)"]
},
{
  id: "angio-tc-aorta",
  nome: "Angiotomografia de aorta",
  categoria: "tc",
  variantes: ["Aorta torácica", "Aorta toracoabdominal (total)", "Aorta abdominal e ilíacas", "Com fase sem contraste (hematoma intramural)"],
  indicacoes: [
    "Suspeita de síndrome aórtica aguda (dissecção, hematoma intramural, úlcera penetrante): ADD-RS (1 ponto por categoria: condição de alto risco — Marfan, doença aórtica/valvar aórtica conhecida, manipulação aórtica recente, aneurisma torácico; dor de alto risco — súbita, intensa, rasgando/lancinante; exame de alto risco — déficit de pulso/PA diferencial > 20 mmHg, déficit neurológico focal + dor, sopro de IAo novo, hipotensão/choque). ADD-RS ≥ 2 → angio-TC; ADD-RS 0–1 → D-dímero (negativo < 500 ng/mL ajuda a excluir) e imagem se positivo",
    "Aneurisma de aorta abdominal sintomático ou suspeita de ruptura (paciente estável) e planejamento de correção",
    "Trauma de alta energia com mediastino alargado/mecanismo de desaceleração (lesão de aorta)",
    "Seguimento de aneurisma/dissecção e pós-endoprótese"
  ],
  naoIndicado: [
    "Paciente instável com aneurisma abdominal roto conhecido/provável: centro cirúrgico (POCUS na sala)",
    "Dor torácica de baixa probabilidade para doença aórtica (ADD-RS 0) com D-dímero negativo",
    "Rastreamento de aneurisma abdominal (usar USG)"
  ],
  cuidados: [
    "Contraste iodado: em suspeita de dissecção, NÃO atrasar por creatinina — risco de morte supera o de nefropatia; hidratar e monitorar",
    "Controle de FC (< 60) e PAS (100–120 mmHg) com betabloqueador EV antes/durante o transporte na suspeita de dissecção",
    "Gestação: dissecção em gestante (Marfan) — TC justificada; alternativa RM sem gadolínio",
    "Alergia ao contraste: pré-medicação rápida (hidrocortisona EV) se exame urgente ou ecocardiograma transesofágico/RM"
  ],
  preparo: "Acesso venoso calibroso (18 G antecubital direito, de preferência). Na urgência, sem jejum. Monitorização e controle pressórico.",
  pedido: "Angiotomografia computadorizada de aorta ___ (torácica/toracoabdominal), com fase sem contraste. HD: síndrome aórtica aguda. ADD-RS: ___. D-dímero: ___.",
  exemplos: [
    "Angio-TC de aorta toracoabdominal — HD: dissecção aguda de aorta. Dor torácica súbita em rasgão irradiada para dorso, PA 180/100 MSD × 140/80 MSE (ADD-RS 2).",
    "Angio-TC de aorta abdominal e ilíacas — HD: aneurisma de aorta abdominal sintomático. Dor lombar súbita, massa pulsátil, hemodinamicamente estável."
  ],
  achados: [
    { termos: ["disseccao", "disseccao aortica", "disseccao de aorta", "flap intimal", "falsa luz", "luz falsa", "stanford a", "stanford b", "debakey"], significado: "Dissecção — tipo A (aorta ascendente) = cirurgia de emergência; tipo B = controle pressórico ± endoprótese", fichas: ["sindrome-aortica-aguda"], urgente: true },
    { termos: ["hematoma intramural", "espessamento parietal em crescente", "ulcera penetrante", "ulcera aterosclerotica penetrante"], significado: "Variantes da síndrome aórtica aguda — mesma urgência", fichas: ["sindrome-aortica-aguda"], urgente: true },
    { termos: ["aneurisma roto", "ruptura", "hematoma retroperitoneal", "extravasamento de contraste", "sangramento ativo", "hemomediastino"], significado: "Ruptura — cirurgia/endovascular imediata", fichas: ["sindrome-aortica-aguda", "choque-hemorragico"], urgente: true },
    { termos: ["aneurisma", "dilatacao aneurismatica", "aneurisma fusiforme", "aneurisma sacular", "ectasia"], significado: "Aneurisma — diâmetro orienta seguimento/cirurgia (abdominal ≥ 5,5 cm homem/5,0 mulher, crescimento > 1 cm/ano ou sintomático)", fichas: ["sindrome-aortica-aguda"] },
    { termos: ["derrame pericardico", "hemopericardio"], significado: "Dissecção tipo A com hemopericárdio — risco de tamponamento", fichas: ["pericardite-tamponamento", "sindrome-aortica-aguda"], urgente: true },
    { termos: ["oclusao", "ma perfusao", "ma perfusao visceral", "isquemia renal", "isquemia mesenterica"], significado: "Má perfusão de ramos (complicação)", fichas: ["isquemia-mesenterica", "isquemia-aguda-membro"], urgente: true },
    { termos: ["lesao traumatica da aorta", "pseudoaneurisma", "transeccao aortica"], significado: "Lesão aórtica traumática — endoprótese", fichas: ["trauma-torax", "sindrome-aortica-aguda"], urgente: true }
  ],
  fontes: ["ESC 2024 — Peripheral arterial and aortic diseases", "ACC/AHA 2022 — Aortic disease", "Nazerian P et al. ADvISED (Circulation 2018)", "SBACV — Diretrizes de aneurisma de aorta abdominal"]
}
);

/* ===================== RESSONÂNCIA ===================== */
EXAMES_IMAGEM.push(
{
  id: "rm-cranio",
  nome: "Ressonância magnética de crânio",
  categoria: "rm",
  variantes: ["Sem contraste (com difusão)", "Com gadolínio", "Angio-RM arterial/venosa", "Protocolo de epilepsia", "Protocolo de hipófise", "Espectroscopia/perfusão"],
  indicacoes: [
    "AVC agudo: difusão é a mais sensível para isquemia (fossa posterior, AIT com sintomas atípicos, AVC ao despertar — mismatch DWI-FLAIR para trombólise)",
    "Tontura/vertigem aguda com HINTS central ou fatores de risco vascular",
    "Lesão vista na TC: tumor, abscesso, neurotoxoplasmose, metástases",
    "Esclerose múltipla e doenças desmielinizantes (com gadolínio; critérios de McDonald)",
    "Epilepsia: primeira crise não provocada no adulto (se TC normal), epilepsia focal, refratária",
    "Cefaleia com sinal de alarme e TC normal; suspeita de trombose venosa cerebral (angio-RM venosa)",
    "Encefalite (herpética — lobos temporais), demência rapidamente progressiva",
    "Doença hipofisária (adenoma, hiperprolactinemia com prolactina muito elevada)"
  ],
  naoIndicado: [
    "Primeira avaliação de TCE ou suspeita de hemorragia aguda na urgência (TC é mais rápida e disponível)",
    "Cefaleia primária típica sem sinal de alarme",
    "Síncope típica",
    "Paciente instável/necessitando de monitorização intensiva sem equipamento compatível"
  ],
  cuidados: [
    "Triagem de segurança: marcapasso/CDI (só se 'RM condicional' e com protocolo), neuroestimuladores, implante coclear, clipes de aneurisma antigos, corpo estranho metálico intraocular (soldador — Rx de órbitas antes), bombas de infusão",
    "Gadolínio: risco de fibrose sistêmica nefrogênica com agentes de grupo I em TFG < 30 ou diálise — usar agentes de grupo II (macrocíclicos), menor dose; não é preciso hemodiálise de rotina após",
    "Gestação: RM sem gadolínio é segura em qualquer trimestre se indicada; gadolínio evitado (atravessa placenta) — só se essencial",
    "Lactação: amamentação pode continuar após gadolínio",
    "Claustrofobia: ansiolítico leve; crianças pequenas frequentemente precisam de sedação",
    "Exame longo (20–45 min) — não serve para paciente instável"
  ],
  preparo: "Retirar todos os objetos metálicos; preencher questionário de segurança. Com contraste: acesso venoso, creatinina se DRC/diabetes/idade > 60. Jejum de 4–6 h se sedação. Informar implantes (levar cartão do dispositivo).",
  pedido: "Ressonância magnética de crânio ___ (sem/com gadolínio, com difusão). HD: ___. Justificativa: ___. Dispositivos implantados: ___. TFG: ___.",
  exemplos: [
    "RM de crânio com difusão (sem contraste) — HD: AVC de circulação posterior. Vertigem aguda contínua com nistagmo vertical e HINTS central; TC de crânio normal.",
    "RM de crânio com e sem gadolínio — HD: esclerose múltipla? Neurite óptica há 1 mês e parestesias em MID há 3 meses. Mulher, 28 anos, TFG normal.",
    "RM de crânio com gadolínio (protocolo de epilepsia) — Primeira crise focal com generalização em adulto de 35 anos, TC normal."
  ],
  achados: [
    { termos: ["restricao a difusao", "restricao da difusao", "hipersinal em difusao", "infarto agudo", "isquemia aguda", "dwi positivo"], significado: "Isquemia aguda (AVC) — tempo e mismatch definem tratamento", fichas: ["avc"], urgente: true },
    { termos: ["hemorragia", "micro-hemorragias", "microssangramentos", "focos de hipossinal em swi", "hematoma"], significado: "Hemorragia aguda/crônica ou angiopatia amiloide", fichas: ["avc-hemorragico"] },
    { termos: ["lesoes desmielinizantes", "lesoes periventriculares", "dedos de dawson", "lesoes justacorticais", "lesao infratentorial", "lesoes com realce", "placas desmielinizantes"], significado: "Desmielinização (esclerose múltipla) — critérios de McDonald", fichas: ["esclerose-multipla"] },
    { termos: ["lesao expansiva", "massa", "lesao com realce anelar", "realce anelar", "edema vasogenico", "nodulo", "metastases"], significado: "Tumor, metástase, abscesso, toxoplasmose — neurocirurgia/infecto", fichas: ["hipertensao-intracraniana", "hiv-infeccao"] },
    { termos: ["trombose venosa", "trombose de seio venoso", "trombose de seio sagital", "ausencia de fluxo em seio transverso", "sinal do delta vazio"], significado: "Trombose venosa cerebral — anticoagulação", fichas: ["cefaleia-ps"], urgente: true },
    { termos: ["hipersinal em lobos temporais", "encefalite", "hipersinal temporal mesial"], significado: "Encefalite herpética — aciclovir imediato", fichas: ["meningite"], urgente: true },
    { termos: ["realce leptomeningeo", "realce meningeo", "realce paquimeningeo"], significado: "Meningite/ carcinomatose / hipotensão liquórica", fichas: ["meningite"] },
    { termos: ["esclerose mesial temporal", "esclerose hipocampal", "displasia cortical"], significado: "Causa estrutural de epilepsia", fichas: ["epilepsia"] },
    { termos: ["adenoma hipofisario", "microadenoma", "macroadenoma", "lesao selar"], significado: "Adenoma hipofisário — endocrinologia/neurocirurgia (campo visual se macro)" },
    { termos: ["hidrocefalia", "dilatacao ventricular", "herniacao", "desvio da linha media"], significado: "Efeito de massa / hidrocefalia", fichas: ["hipertensao-intracraniana"], urgente: true },
    { termos: ["microangiopatia", "hipersinal em flair na substancia branca", "leucoaraiose", "fazekas", "gliose", "lacunas"], significado: "Doença de pequenos vasos — fatores de risco vascular", fichas: ["avc-prevencao-secundaria", "demencia"] },
    { termos: ["atrofia hipocampal", "atrofia", "reducao volumetrica"], significado: "Atrofia (doença de Alzheimer e outras)", fichas: ["demencia"] }
  ],
  fontes: ["ACR Manual on Contrast Media (2024) — gadolínio e FSN", "ACR Manual on MR Safety (2024)", "AHA/ASA 2019 — AVC agudo", "McDonald 2017 — Diagnóstico de esclerose múltipla", "ACR Appropriateness Criteria — Headache; Seizures"]
},
{
  id: "rm-coluna",
  nome: "Ressonância magnética de coluna",
  categoria: "rm",
  variantes: ["Cervical", "Torácica", "Lombossacra", "Coluna total (rastreio de metástases/compressão)", "Com gadolínio"],
  indicacoes: [
    "URGENTE — Síndrome da cauda equina: retenção urinária/incontinência por transbordamento, anestesia em sela, perda de tônus anal, déficit bilateral",
    "URGENTE — Compressão medular: déficit motor progressivo, nível sensitivo, em paciente com câncer e dor dorsal nova (coluna TOTAL), suspeita de hematoma epidural (anticoagulado, pós-punção)",
    "Suspeita de infecção (espondilodiscite, abscesso epidural): febre + dor dorsal + fator de risco (usuário de drogas EV, bacteremia, procedimento recente), PCR/VHS elevadas — com gadolínio",
    "Trauma raquimedular com déficit e TC sem explicação; lesão ligamentar",
    "Lombalgia/ciatalgia > 6 semanas sem melhora com tratamento conservador, se candidato a cirurgia ou infiltração",
    "Mielopatia cervical (marcha, mãos desajeitadas, hiper-reflexia), suspeita de desmielinização medular, Guillain-Barré atípico",
    "Lombalgia com sinal de alarme: câncer prévio, perda de peso, imunossupressão, déficit progressivo"
  ],
  naoIndicado: [
    "Lombalgia aguda inespecífica (< 6 semanas) sem sinal de alarme — achados como hérnias e protrusões são frequentes em assintomáticos",
    "Ciatalgia aguda sem déficit progressivo nem cauda equina (melhora espontânea na maioria em 6 semanas)",
    "Controle de rotina pós-tratamento conservador com boa evolução"
  ],
  cuidados: [
    "Mesmos cuidados de segurança da RM de crânio (marcapasso, implantes metálicos, clipes, corpo estranho)",
    "Gadolínio: TFG < 30/diálise — agentes macrocíclicos (grupo II); gestação — evitar",
    "Gestação: RM sem contraste é o exame de escolha para dor lombar com sinal de alarme",
    "Cauda equina/compressão medular: pedir em caráter de EMERGÊNCIA (iniciar dexametasona na compressão neoplásica)"
  ],
  preparo: "Retirar objetos metálicos, questionário de segurança. Com contraste: acesso venoso e função renal conforme risco. Jejum só se sedação.",
  pedido: "Ressonância magnética de coluna ___ (cervical/torácica/lombossacra/total) ___ (sem/com gadolínio). HD: ___. Justificativa: ___ (sinal de alarme, déficit).",
  exemplos: [
    "RM de coluna lombossacra — URGENTE. HD: síndrome da cauda equina. Lombociatalgia bilateral, anestesia em sela e retenção urinária há 12 h.",
    "RM de coluna total com gadolínio — URGENTE. HD: compressão medular metastática. Câncer de próstata, dor dorsal nova há 2 semanas e fraqueza em MMII.",
    "RM de coluna lombossacra sem contraste — HD: hérnia discal L5-S1 com radiculopatia S1 esquerda há 10 semanas, refratária a tratamento conservador; avaliação para infiltração/cirurgia."
  ],
  achados: [
    { termos: ["compressao medular", "compressao do cone medular", "compressao do saco dural", "mielopatia compressiva", "hipersinal medular", "edema medular"], significado: "Compressão medular — neurocirurgia/radioterapia de urgência", fichas: ["compressao-medular-maligna", "trauma-raquimedular"], urgente: true },
    { termos: ["compressao das raizes da cauda equina", "cauda equina", "hernia discal volumosa", "hernia extrusa volumosa", "estenose grave do canal"], significado: "Compressão da cauda equina — descompressão cirúrgica urgente", fichas: ["lombalgia"], urgente: true },
    { termos: ["metastases", "lesoes metastaticas", "infiltracao neoplasica", "lesao expansiva epidural", "massa epidural", "massa"], significado: "Metástase vertebral/epidural", fichas: ["compressao-medular-maligna", "mieloma-multiplo"], urgente: true },
    { termos: ["espondilodiscite", "abscesso epidural", "abscesso paravertebral", "discite", "osteomielite vertebral"], significado: "Infecção — hemoculturas, antibiótico, avaliar drenagem", fichas: ["sepse"], urgente: true },
    { termos: ["hematoma epidural", "hematoma espinhal"], significado: "Hematoma epidural — descompressão urgente", fichas: ["trauma-raquimedular", "coagulopatias-urgencia"], urgente: true },
    { termos: ["hernia discal", "extrusao discal", "protrusao discal", "abaulamento discal", "hernia foraminal", "compressao radicular", "contato radicular"], significado: "Hérnia/protrusão — relevante se correlacionar com a raiz sintomática", fichas: ["lombalgia", "cervicalgia-dorsalgia"] },
    { termos: ["estenose do canal", "canal estreito", "estenose foraminal", "estenose de recesso lateral"], significado: "Estenose — claudicação neurogênica/radiculopatia", fichas: ["lombalgia"] },
    { termos: ["desidratacao discal", "degeneracao discal", "modic", "artrose facetaria", "fissura anular"], significado: "Degeneração — comum em assintomáticos", fichas: ["lombalgia"] },
    { termos: ["fratura", "edema osseo", "fratura recente", "fratura por insuficiencia"], significado: "Fratura recente (edema ósseo diferencia de antiga)", fichas: ["osteoporose", "trauma-raquimedular"] },
    { termos: ["lesao desmielinizante medular", "mielite", "mielite transversa", "hipersinal medular em t2"], significado: "Mielite / desmielinização", fichas: ["esclerose-multipla"], urgente: true },
    { termos: ["sacroiliite", "edema osseo subcondral sacroiliaco"], significado: "Sacroiliíte ativa — espondiloartrite", fichas: ["espondiloartrites"] }
  ],
  fontes: ["NICE NG59 — Low back pain and sciatica", "NICE NG234 (2023) — Spinal metastases and MSCC", "ACR Appropriateness Criteria — Low back pain (2021); Myelopathy", "ACR Manual on Contrast Media (2024)"]
}
);

/* ===================== CARDIO ===================== */
EXAMES_IMAGEM.push(
{
  id: "ecg",
  nome: "Eletrocardiograma",
  categoria: "cardio",
  variantes: ["12 derivações", "Com derivações direitas (V3R, V4R) e posteriores (V7–V9)", "DII longo", "Holter 24 h", "Teste ergométrico", "MAPA (não é ECG — pressão)"],
  indicacoes: [
    "Dor torácica: ECG em até 10 min da chegada; repetir em 15–30 min se dor persistir ou ECG inicial não diagnóstico",
    "Palpitação, síncope, dispneia, tontura, bradicardia/taquicardia ao exame",
    "Distúrbios eletrolíticos (K, Ca, Mg), intoxicações (tricíclicos, digitálicos), drogas que prolongam QT",
    "Avaliação pré-operatória: cirurgia de risco intermediário/alto ou paciente com doença cardiovascular/sintomas",
    "Avaliação inicial de hipertensão, diabetes, doença de Chagas e insuficiência cardíaca; AVC/AIT (pesquisar FA)",
    "Antes e durante uso de antiarrítmicos, antipsicóticos, metadona, hidroxicloroquina, azitromicina com outros fatores de risco"
  ],
  naoIndicado: [
    "Rotina anual em adulto assintomático de baixo risco",
    "Pré-operatório de cirurgia de baixo risco em paciente assintomático sem doença cardíaca"
  ],
  cuidados: [
    "ECG normal NÃO exclui síndrome coronariana aguda (repetir + troponina seriada)",
    "Oclusão de circunflexa e de VD podem não aparecer nas 12 derivações padrão (pedir V7–V9 e V3R–V4R)",
    "Posicionamento errado de eletrodos e artefatos (tremor) simulam arritmias",
    "Sem preparo e sem risco na gestação"
  ],
  preparo: "Sem preparo. Repouso de 5 min, tórax exposto, retirar objetos metálicos; tricotomia se necessário.",
  pedido: "Eletrocardiograma de 12 derivações. HD/Justificativa: ___.",
  exemplos: [
    "ECG de 12 derivações IMEDIATO — HD: síndrome coronariana aguda. Dor torácica opressiva há 40 min com sudorese.",
    "ECG de 12 derivações com DII longo — HD: hipercalemia? Potássio 7,1 mEq/L em paciente com DRC.",
    "ECG de 12 derivações — Avaliação inicial de hipertensão arterial e sorologia positiva para doença de Chagas."
  ],
  achados: [
    { termos: ["supradesnivelamento de st", "supradesnivelamento do segmento st", "supra de st", "elevacao do segmento st", "iamcsst", "supra st", "corrente de lesao subepicardica", "lesao subepicardica"], significado: "IAM com supra de ST — reperfusão (angioplastia ≤ 90–120 min ou trombólise ≤ 30 min)", fichas: ["sca", "ecg-interpretacao"], urgente: true },
    { termos: ["infradesnivelamento de st", "infradesnivelamento do segmento st", "infra de st", "depressao do segmento st", "lesao subendocardica"], significado: "Isquemia subendocárdica / SCA sem supra (ou imagem em espelho de IAM)", fichas: ["sca"], urgente: true },
    { termos: ["inversao de onda t", "ondas t invertidas", "alteracao da repolarizacao ventricular", "alteracao difusa da repolarizacao", "onda t apiculada", "ondas t apiculadas", "padrao de wellens", "de winter"], significado: "Isquemia (Wellens/de Winter = oclusão de DA) ou hipercalemia (T apiculada)", fichas: ["sca", "hipercalemia"] },
    { termos: ["bloqueio de ramo esquerdo novo", "bloqueio completo de ramo esquerdo", "brce", "bcre", "sgarbossa"], significado: "BRE: se novo ou com critérios de Sgarbossa na dor torácica = tratar como IAM", fichas: ["sca", "ic-cronica"] },
    { termos: ["bloqueio de ramo direito", "brd", "bcrd", "bloqueio completo de ramo direito", "hemibloqueio anterior esquerdo", "bdas", "bdase"], significado: "BRD + BDAS: típico da cardiopatia chagásica; BRD agudo + dispneia: pensar em TEP", fichas: ["chagas-cronica", "tep"] },
    { termos: ["fibrilacao atrial", "flutter atrial", "ritmo irregularmente irregular", "ausencia de ondas p", "ondas f"], significado: "FA/flutter — controle de FC/ritmo e CHA2DS2-VA para anticoagulação", fichas: ["fibrilacao-atrial", "anticoagulacao-oral"] },
    { termos: ["bloqueio atrioventricular total", "bavt", "bav total", "bloqueio atrioventricular de terceiro grau", "dissociacao atrioventricular", "bav de 3 grau"], significado: "BAVT — marcapasso (transcutâneo/transvenoso se instável)", fichas: ["bradicardias", "dispositivos-cardiacos"], urgente: true },
    { termos: ["bloqueio atrioventricular de segundo grau", "bav de segundo grau", "mobitz ii", "mobitz 2", "bav 2:1", "bav 2 grau"], significado: "Mobitz II/2:1 — risco de progressão para BAVT: marcapasso", fichas: ["bradicardias"], urgente: true },
    { termos: ["bloqueio atrioventricular de primeiro grau", "bav de primeiro grau", "bav 1 grau", "mobitz i", "wenckebach", "pr longo"], significado: "BAV 1º grau/Mobitz I — geralmente benigno; revisar drogas (betabloqueador, digital, BCC)", fichas: ["bradicardias"] },
    { termos: ["bradicardia sinusal", "bradicardia"], significado: "Avaliar sintomas, drogas, hipotireoidismo, hipercalemia", fichas: ["bradicardias"] },
    { termos: ["taquicardia ventricular", "tv monomorfica", "tv polimorfica", "torsades de pointes", "taquicardia de qrs largo", "fibrilacao ventricular"], significado: "Arritmia ventricular — cardioversão/desfibrilação se instável", fichas: ["taquicardias", "desfibrilacao-cardioversao", "pcr-adulto"], urgente: true },
    { termos: ["taquicardia supraventricular", "tsv", "taquicardia por reentrada nodal", "taquicardia de qrs estreito"], significado: "TSV — manobra vagal, adenosina; cardioversão se instável", fichas: ["taquicardias"], urgente: true },
    { termos: ["qt longo", "qtc prolongado", "intervalo qt prolongado", "aumento do intervalo qt", "qtc aumentado"], significado: "QTc prolongado (> 450 ms H / > 460–470 ms M); ≥ 500 ms = alto risco de torsades — suspender drogas, corrigir K/Mg", fichas: ["disturbios-magnesio", "hipocalemia", "intoxicacoes-exogenas"], urgente: true },
    { termos: ["sobrecarga ventricular esquerda", "hipertrofia ventricular esquerda", "sobrecarga de ve", "criterio de sokolow"], significado: "HVE (hipertensão, estenose aórtica, cardiomiopatia)", fichas: ["has-ubs", "valvulopatias"] },
    { termos: ["s1q3t3", "sobrecarga de ventriculo direito", "sobrecarga de vd", "strain de vd"], significado: "Sobrecarga de VD — TEP, hipertensão pulmonar", fichas: ["tep"] },
    { termos: ["baixa voltagem", "complexos de baixa voltagem", "alternancia eletrica"], significado: "Derrame pericárdico volumoso/tamponamento (alternância elétrica), obesidade, DPOC", fichas: ["pericardite-tamponamento"], urgente: true },
    { termos: ["supradesnivelamento difuso de st", "infradesnivelamento de pr", "pericardite"], significado: "Pericardite aguda (supra difuso côncavo + infra de PR)", fichas: ["pericardite-tamponamento", "miocardite"] },
    { termos: ["area inativa", "ondas q patologicas", "zona eletricamente inativa", "infarto antigo"], significado: "Necrose miocárdica prévia", fichas: ["dac-cronica"] },
    { termos: ["pre-excitacao", "onda delta", "wolff-parkinson-white", "wpw", "pr curto"], significado: "Pré-excitação (WPW) — evitar bloqueadores nodais em FA pré-excitada", fichas: ["taquicardias"] },
    { termos: ["padrao de brugada", "brugada"], significado: "Brugada tipo 1 — risco de morte súbita, cardiologia", fichas: ["sincope"], urgente: true },
    { termos: ["extrassistoles ventriculares", "extrassistoles supraventriculares", "extrassistolia", "bigeminismo"], significado: "Extrassístoles — geralmente benignas; investigar se frequentes/cardiopatia", fichas: ["taquicardias"] },
    { termos: ["ritmo de marcapasso", "espicula de marcapasso", "falha de captura", "falha de comando", "falha de sensibilidade"], significado: "Disfunção de marcapasso se falha de captura/sensibilidade", fichas: ["dispositivos-cardiacos"] }
  ],
  fontes: ["SBC — Diretriz sobre análise e emissão de laudos eletrocardiográficos (2022)", "ESC 2023 — Acute coronary syndromes", "AHA/ACC/HRS 2018 — Bradycardia", "ESC 2024 — Atrial fibrillation"]
},
{
  id: "ecocardiograma",
  nome: "Ecocardiograma",
  categoria: "cardio",
  variantes: ["Transtorácico (ETT)", "Transesofágico (ETE)", "Com estresse (físico/dobutamina)", "Com Doppler colorido e strain", "Fetal"],
  indicacoes: [
    "Insuficiência cardíaca (suspeita ou nova): fração de ejeção, função diastólica, valvas — classificação ICFEr (≤ 40%), ICFElr (41–49%), ICFEp (≥ 50%)",
    "Sopro cardíaco novo ou com sintomas; seguimento de valvopatia",
    "Suspeita de endocardite: ETT inicial; ETE se ETT negativo com suspeita intermediária/alta, prótese valvar, dispositivo ou complicação",
    "Derrame pericárdico/tamponamento, pericardite, miocardite",
    "Pós-IAM (função e complicações mecânicas), dor torácica com instabilidade",
    "AVC/AIT embólico sem causa (ETE para forame oval, trombo em AE)",
    "TEP de risco intermediário/alto (VD), hipertensão pulmonar, síncope com suspeita estrutural",
    "Fibrilação atrial (avaliação estrutural); ETE antes de cardioversão sem anticoagulação ≥ 3 semanas",
    "Cardiopatia chagásica, cardiotoxicidade por quimioterapia (antraciclinas/trastuzumabe)"
  ],
  naoIndicado: [
    "Rotina em hipertenso assintomático sem suspeita de lesão de órgão-alvo/IC",
    "Sopro inocente típico em criança assintomática",
    "Repetição sem mudança clínica em valvopatia leve estável (intervalo conforme gravidade)",
    "Pré-operatório de rotina sem sintomas/sopro/IC"
  ],
  cuidados: [
    "ETT sem riscos (seguro na gestação)",
    "ETE: jejum, sedação; contraindicado em estenose/varizes esofágicas de alto risco, cirurgia esofágica recente",
    "Estresse com dobutamina: cuidado em arritmias, estenose aórtica grave sintomática, HAS não controlada"
  ],
  preparo: "ETT: sem preparo. ETE: jejum de 6 h (sólidos) e acompanhante (sedação). Estresse: suspender betabloqueador conforme orientação do cardiologista; jejum de 3–4 h.",
  pedido: "Ecocardiograma transtorácico com Doppler colorido. HD: ___. Justificativa: ___.",
  exemplos: [
    "Ecocardiograma transtorácico com Doppler — HD: insuficiência cardíaca. Dispneia aos esforços, edema de MMII, BNP 850 pg/mL, Rx com cardiomegalia.",
    "Ecocardiograma transesofágico — HD: endocardite infecciosa. Febre, 2/3 hemoculturas com S. aureus, prótese valvar mitral; ETT inconclusivo.",
    "Ecocardiograma transtorácico — URGENTE. HD: tamponamento cardíaco? Dispneia, turgência jugular, hipotensão e ECG de baixa voltagem."
  ],
  achados: [
    { termos: ["fracao de ejecao reduzida", "fe reduzida", "disfuncao sistolica", "disfuncao sistolica do ve", "disfuncao ventricular esquerda", "hipocinesia difusa", "fe de 30", "feve reduzida", "icfer"], significado: "ICFEr (FE ≤ 40%) — iniciar os 4 pilares (IECA/BRA/INRA, betabloqueador, antagonista mineralocorticoide, iSGLT2)", fichas: ["ic-cronica", "ic-descompensada"] },
    { termos: ["disfuncao diastolica", "alteracao do relaxamento", "padrao restritivo", "pressao de enchimento elevada", "e/e' elevado"], significado: "Disfunção diastólica (ICFEp com clínica)", fichas: ["ic-cronica"] },
    { termos: ["derrame pericardico", "derrame pericardico volumoso", "colapso diastolico do vd", "colapso de atrio direito", "tamponamento", "variacao respiratoria do fluxo mitral"], significado: "Derrame pericárdico — com colapso de câmaras = tamponamento (pericardiocentese)", fichas: ["pericardite-tamponamento"], urgente: true },
    { termos: ["vegetacao", "vegetacoes", "abscesso perivalvar", "deiscencia de protese", "perfuracao valvar"], significado: "Endocardite (critério maior de Duke) — antibiótico e avaliação cirúrgica", fichas: ["endocardite"], urgente: true },
    { termos: ["estenose aortica", "estenose aortica importante", "estenose aortica grave", "area valvar aortica reduzida", "gradiente medio elevado"], significado: "Estenose aórtica (grave: área < 1 cm², gradiente médio ≥ 40 mmHg, Vmáx ≥ 4 m/s)", fichas: ["valvulopatias"] },
    { termos: ["estenose mitral", "insuficiencia mitral", "insuficiencia aortica", "insuficiencia tricuspide", "regurgitacao", "prolapso da valva mitral", "valvopatia reumatica"], significado: "Valvopatia — graduar e seguir conforme gravidade", fichas: ["valvulopatias", "febre-reumatica"] },
    { termos: ["dilatacao do ventriculo direito", "disfuncao do vd", "disfuncao de ventriculo direito", "tapse reduzido", "sinal de mcconnell", "hipertensao pulmonar", "psap elevada", "psap aumentada"], significado: "Disfunção de VD / hipertensão pulmonar (TEP, DPOC, IC esquerda)", fichas: ["tep"] },
    { termos: ["trombo intracavitario", "trombo em ve", "trombo apical", "trombo em apendice atrial", "trombo atrial"], significado: "Trombo intracardíaco — anticoagulação", fichas: ["anticoagulacao-oral", "avc"], urgente: true },
    { termos: ["aneurisma apical", "aneurisma de ponta", "alteracao segmentar", "acinesia inferolateral", "alteracao segmentar da contratilidade", "hipocinesia segmentar"], significado: "Alteração segmentar: isquemia/IAM; aneurisma apical: típico de Chagas", fichas: ["sca", "chagas-cronica"] },
    { termos: ["hipertrofia ventricular esquerda", "hipertrofia concentrica", "aumento da espessura septal", "cardiomiopatia hipertrofica", "obstrucao da via de saida"], significado: "HVE (hipertensão) ou cardiomiopatia hipertrófica", fichas: ["has-ubs"] },
    { termos: ["forame oval patente", "comunicacao interatrial", "comunicacao interventricular", "shunt"], significado: "Shunt intracardíaco (AVC criptogênico, cardiopatia congênita)", fichas: ["cardiopatias-congenitas", "avc"] },
    { termos: ["disseccao da aorta", "flap na aorta ascendente", "dilatacao da raiz da aorta", "aneurisma da aorta ascendente"], significado: "Doença aórtica — angio-TC se suspeita aguda", fichas: ["sindrome-aortica-aguda"], urgente: true },
    { termos: ["ruptura de septo", "ruptura de musculo papilar", "insuficiencia mitral aguda", "pseudoaneurisma"], significado: "Complicação mecânica de IAM — cirurgia de emergência", fichas: ["sca", "choque"], urgente: true }
  ],
  fontes: ["SBC — Diretriz de ICC (2018/2021) e Posicionamento de indicações de ecocardiografia", "ASE/EACVI — Chamber quantification (2015)", "ESC 2023 — Endocarditis (critérios de Duke-ISCVID)", "ACC/AHA 2020 — Valvular heart disease"]
}
);

/* ===================== ENDOSCOPIA ===================== */
EXAMES_IMAGEM.push(
{
  id: "endoscopia-digestiva-alta",
  nome: "Endoscopia digestiva alta",
  categoria: "endoscopia",
  variantes: ["Diagnóstica", "Com biópsia e pesquisa de H. pylori (teste da urease)", "Terapêutica (hemostasia, ligadura elástica, retirada de corpo estranho)", "Com biópsias de duodeno (doença celíaca)"],
  indicacoes: [
    "Hemorragia digestiva alta: após estabilização, em até 24 h; varicosa suspeita em até 12 h (com vasoativo e antibiótico iniciados antes); instável refratário: o mais rápido possível",
    "Dispepsia com sinal de alarme: idade ≥ 40 anos com sintomas novos (consensos brasileiros — alta prevalência de câncer gástrico; diretrizes internacionais usam ≥ 60), perda de peso não intencional, disfagia/odinofagia progressiva, vômitos persistentes, anemia ferropriva, sangramento, massa, história familiar de câncer gástrico",
    "DRGE refratária ao IBP, com sintomas de alarme ou longa duração (rastreio de Barrett)",
    "Cirrose: rastreio de varizes (quando não preencher Baveno VII para dispensar: elastografia < 20 kPa e plaquetas > 150.000)",
    "Ingestão de corpo estranho: pilha em botão/objeto pontiagudo no esôfago (emergência, < 2–6 h), impactação alimentar; cáusticos (12–48 h)",
    "Disfagia (acalasia, estenose, neoplasia), anemia ferropriva sem causa (com colonoscopia), suspeita de doença celíaca (biópsias duodenais)",
    "Controle de úlcera gástrica (8–12 semanas, para excluir câncer) e de erradicação em casos selecionados"
  ],
  naoIndicado: [
    "Dispepsia em jovem (< 40 anos) sem sinal de alarme: testar e tratar H. pylori (teste respiratório/antígeno fecal) ou IBP empírico",
    "DRGE típica em jovem com boa resposta ao IBP",
    "Controle de úlcera duodenal não complicada com boa evolução",
    "Paciente instável antes da reanimação (via aérea protegida, volume, hemoderivados)"
  ],
  cuidados: [
    "Anticoagulantes/antiagregantes: diagnóstica com biópsia pode ser feita na maioria; procedimentos de alto risco (polipectomia, dilatação, gastrostomia) — suspender/ponte conforme diretriz (ASGE/ESGE)",
    "HDA: IBP EV antes; eritromicina 250 mg EV 30–120 min antes melhora a visualização",
    "Gestação: realizar se indicação forte (HDA), preferencialmente no 2º trimestre",
    "Sedação: avaliar via aérea; IOT de proteção na HDA maciça/rebaixamento"
  ],
  preparo: "Jejum de 8 h para sólidos (6 h no mínimo) e 2 h para líquidos claros, conforme o serviço. Acompanhante obrigatório (sedação). Suspender IBP 2 semanas antes se for pesquisar H. pylori (urease/histologia), quando possível. Levar lista de medicamentos (anticoagulantes!).",
  pedido: "Endoscopia digestiva alta ___ (com biópsias/teste da urease). HD: ___. Justificativa: ___.",
  exemplos: [
    "Endoscopia digestiva alta — URGENTE (em até 12 h). HD: hemorragia digestiva alta varicosa. Cirrose alcoólica, hematêmese volumosa; terlipressina e ceftriaxona iniciadas.",
    "Endoscopia digestiva alta com biópsias e teste da urease — HD: dispepsia com sinal de alarme. 54 anos, epigastralgia há 3 meses e perda de 6 kg.",
    "Endoscopia digestiva alta com biópsias de duodeno — HD: doença celíaca. Anti-transglutaminase IgA positivo, anemia ferropriva."
  ],
  achados: [
    { termos: ["ulcera", "ulcera gastrica", "ulcera duodenal", "ulcera peptica", "ulceras", "lesao ulcerada", "sakita"], significado: "Úlcera péptica — IBP, pesquisar/erradicar H. pylori, suspender AINE; úlcera gástrica: biópsia e controle", fichas: ["ulcera-peptica-hpylori"] },
    { termos: ["forrest ia", "forrest ib", "forrest iia", "sangramento em jato", "sangramento em babacao", "vaso visivel", "sangramento ativo"], significado: "Alto risco de ressangramento — hemostasia endoscópica + IBP EV em alta dose", fichas: ["hemorragia-digestiva-alta"], urgente: true },
    { termos: ["forrest iib", "coagulo aderido", "forrest iic", "hematina", "forrest iii", "base limpa"], significado: "IIb: considerar remoção do coágulo/hemostasia; IIc/III: baixo risco", fichas: ["hemorragia-digestiva-alta"] },
    { termos: ["varizes esofagicas", "varizes de esofago", "varizes de grosso calibre", "varizes de medio calibre", "red spots", "manchas vermelhas", "varizes gastricas", "cordoes varicosos"], significado: "Hipertensão portal — ligadura e/ou betabloqueador não seletivo (carvedilol)", fichas: ["cirrose-descompensada", "hemorragia-digestiva-alta"] },
    { termos: ["gastropatia hipertensiva portal", "gastropatia da hipertensao portal", "mosaico"], significado: "Hipertensão portal", fichas: ["cirrose-descompensada"] },
    { termos: ["esofagite", "esofagite erosiva", "los angeles a", "los angeles b", "los angeles c", "los angeles d", "esofagite grau"], significado: "DRGE erosiva (LA C/D confirma DRGE) — IBP", fichas: ["drge"] },
    { termos: ["esofago de barrett", "barrett", "metaplasia intestinal", "epitelio colunar"], significado: "Barrett — vigilância endoscópica; displasia = tratamento endoscópico", fichas: ["drge"] },
    { termos: ["lesao vegetante", "lesao infiltrativa", "neoplasia", "lesao suspeita", "borrmann", "massa", "lesao elevada", "adenocarcinoma"], significado: "Neoplasia provável — biópsia e estadiamento", fichas: ["cancer-gastrico"], urgente: true },
    { termos: ["gastrite", "pangastrite", "gastrite enantematosa", "gastrite erosiva", "gastrite atrofica", "metaplasia intestinal gastrica"], significado: "Gastrite (endoscópica não se correlaciona bem com sintomas); atrofia/metaplasia: vigilância", fichas: ["dispepsia", "ulcera-peptica-hpylori"] },
    { termos: ["helicobacter pylori positivo", "urease positivo", "teste da urease positivo", "h. pylori positivo", "presenca de helicobacter"], significado: "H. pylori — erradicação e confirmar cura", fichas: ["ulcera-peptica-hpylori"] },
    { termos: ["mallory-weiss", "laceracao de mallory-weiss"], significado: "Laceração da junção esofagogástrica (vômitos)", fichas: ["hemorragia-digestiva-alta"] },
    { termos: ["atrofia vilositaria", "atrofia de vilosidades", "padrao serrilhado", "marsh"], significado: "Sugere doença celíaca (confirmar por histologia)", fichas: ["doenca-celiaca"] },
    { termos: ["estenose", "estenose esofagica", "estase alimentar", "dilatacao esofagica", "megaesofago"], significado: "Estenose/acalasia — manometria/esofagograma", fichas: ["acalasia-megaesofago"] },
    { termos: ["lesao caustica", "zargar", "necrose da mucosa"], significado: "Lesão por cáustico (Zargar ≥ 2b: alto risco)", fichas: ["intoxicacoes-exogenas"], urgente: true },
    { termos: ["candidiase esofagica", "placas esbranquicadas"], significado: "Candidíase esofágica (imunossupressão — investigar HIV)", fichas: ["hiv-infeccao", "candidiase-oral"] },
    { termos: ["corpo estranho", "impactacao alimentar", "bolo alimentar impactado"], significado: "Retirada endoscópica", fichas: ["corpo-estranho"], urgente: true },
    { termos: ["hernia hiatal", "hernia de hiato"], significado: "Hérnia hiatal (fator de DRGE)", fichas: ["drge"] }
  ],
  fontes: ["ESGE 2021 — Non-variceal upper GI hemorrhage", "Baveno VII (2022)", "Consenso Brasileiro de Dispepsia / V Consenso Brasileiro de H. pylori", "ASGE 2016/2022 — Antithrombotic agents and endoscopy", "Escala de Forrest; classificação de Los Angeles"]
},
{
  id: "colonoscopia",
  nome: "Colonoscopia",
  categoria: "endoscopia",
  variantes: ["Diagnóstica", "De rastreamento", "Com polipectomia/biópsias", "Terapêutica (hemostasia, descompressão de volvo)", "Retossigmoidoscopia flexível"],
  indicacoes: [
    "Rastreamento de câncer colorretal em risco habitual: 45/50–75 anos — colonoscopia a cada 10 anos ou sangue oculto/FIT anual com colonoscopia se positivo (no SUS, organização local)",
    "Risco aumentado: parente de 1º grau com câncer colorretal/adenoma avançado < 60 anos → iniciar aos 40 anos ou 10 anos antes do caso índice, a cada 5 anos; síndromes hereditárias (Lynch, PAF) conforme protocolo",
    "Sangue oculto/FIT positivo",
    "Hematoquezia (fora de fonte anorretal clara em jovem), anemia ferropriva em homem ou mulher pós-menopausa (com EDA)",
    "Mudança do hábito intestinal persistente após 40–50 anos, perda de peso, massa abdominal",
    "Hemorragia digestiva baixa: após preparo rápido, em até 24 h na grave (após excluir HDA)",
    "Diarreia crônica (biópsias para colite microscópica), suspeita/seguimento de doença inflamatória intestinal",
    "Após diverticulite complicada ou se não houver colonoscopia recente (6–8 semanas após o quadro)",
    "Vigilância pós-polipectomia e pós-cirurgia de câncer colorretal"
  ],
  naoIndicado: [
    "Diverticulite aguda (risco de perfuração) — esperar 6–8 semanas",
    "Suspeita de perfuração, megacólon tóxico, colite grave aguda (preferir retossigmoidoscopia cuidadosa sem preparo, se necessário)",
    "Rastreamento > 85 anos ou com expectativa de vida < 10 anos",
    "Repetição antes do intervalo recomendado após exame normal de boa qualidade",
    "Dor abdominal funcional (síndrome do intestino irritável) sem sinal de alarme em jovem"
  ],
  cuidados: [
    "Preparo inadequado (Boston < 6 ou algum segmento < 2) obriga a repetir — orientar bem a dieta e o laxativo",
    "Anticoagulantes/antiagregantes: polipectomia é procedimento de alto risco — suspender DOAC 48 h (ajustar à função renal), varfarina 5 dias com ou sem ponte; manter AAS; clopidogrel suspenso 5–7 dias se possível (conforme cardiologista)",
    "Idosos, DRC e IC: preferir polietilenoglicol (PEG) — evitar fosfato de sódio (nefropatia) e cuidado com manitol (distúrbios eletrolíticos)",
    "Diabéticos: ajustar insulina/hipoglicemiantes durante a dieta líquida; iSGLT2 suspender 3 dias antes (cetoacidose)",
    "Gestação: adiar se possível; se necessária, preferir retossigmoidoscopia"
  ],
  preparo: "Dieta sem resíduos (sem grãos, sementes, folhas, frutas com casca) por 2–3 dias e dieta líquida clara no dia anterior. Suspender ferro oral 5–7 dias antes. Laxativo conforme protocolo do serviço (PEG, picossulfato de sódio + óxido de magnésio ou manitol), preferencialmente em dose dividida (metade na véspera e metade 4–6 h antes). Jejum de 2 h após terminar o preparo. Acompanhante obrigatório.",
  pedido: "Colonoscopia ___ (com biópsias/polipectomia, se necessário). HD: ___. Justificativa: ___.",
  exemplos: [
    "Colonoscopia com biópsias e polipectomia se necessário — HD: sangue oculto nas fezes (FIT) positivo. Homem, 58 anos, assintomático.",
    "Colonoscopia — HD: anemia ferropriva a esclarecer. Mulher, 64 anos, Hb 9,1 g/dL, ferritina 6 ng/mL; EDA sem alterações.",
    "Colonoscopia de rastreamento — 45 anos, pai com câncer colorretal aos 50 anos."
  ],
  achados: [
    { termos: ["lesao vegetante", "lesao ulcerovegetante", "lesao infiltrativa", "lesao estenosante", "neoplasia", "lesao suspeita", "massa", "adenocarcinoma"], significado: "Câncer colorretal provável — biópsia, CEA, estadiamento (TC tórax/abdome; RM pelve no reto)", fichas: ["cancer-colorretal"], urgente: true },
    { termos: ["polipo", "polipos", "adenoma", "adenoma tubular", "adenoma viloso", "adenoma serrilhado", "lesao serrilhada", "polipo sessil", "lesao plana", "lesao de crescimento lateral"], significado: "Pólipo — anatomopatológico define vigilância (adenoma ≥ 10 mm, viloso ou displasia de alto grau = avançado)", fichas: ["cancer-colorretal", "rastreio-cancer"] },
    { termos: ["displasia de alto grau", "adenocarcinoma intramucoso", "carcinoma in situ"], significado: "Lesão avançada — ressecção completa e vigilância curta", fichas: ["cancer-colorretal"] },
    { termos: ["doenca diverticular", "diverticulos", "diverticulose"], significado: "Divertículos — achado comum; fibras na dieta", fichas: ["diverticulite"] },
    { termos: ["sangramento diverticular", "sangramento ativo", "estigma de sangramento", "angiodisplasia", "angiectasias", "ectasias vasculares"], significado: "Fonte de HDB — hemostasia endoscópica", fichas: ["hemorragia-digestiva-baixa"], urgente: true },
    { termos: ["colite", "pancolite", "retocolite", "colite ulcerativa", "mayo 2", "mayo 3", "ulceracoes", "perda do padrao vascular", "friabilidade"], significado: "Colite (DII, infecciosa, isquêmica) — biópsias e escore de atividade", fichas: ["doenca-inflamatoria-intestinal"] },
    { termos: ["ileite", "ulceras aftoides", "ulceras serpiginosas", "pedra de calcamento", "aspecto em pedra de calcamento", "doenca de crohn"], significado: "Doença de Crohn provável", fichas: ["doenca-inflamatoria-intestinal"] },
    { termos: ["pseudomembranas", "colite pseudomembranosa"], significado: "Colite por C. difficile", fichas: ["colite-clostridioides"], urgente: true },
    { termos: ["colite isquemica", "mucosa violacea", "necrose da mucosa"], significado: "Isquemia colônica", fichas: ["isquemia-mesenterica"], urgente: true },
    { termos: ["hemorroidas", "mamilos hemorroidarios", "hemorroidas internas", "fissura anal"], significado: "Doença anorretal benigna (não encerra investigação de anemia/sangramento sem exame completo)", fichas: ["hemorroidas", "doencas-anorretais"] },
    { termos: ["preparo inadequado", "boston < 6", "preparo insatisfatorio", "residuos fecais solidos", "preparo regular"], significado: "Exame incompleto — repetir com preparo reforçado (em até 1 ano)" },
    { termos: ["volvo", "volvo de sigmoide", "torcao do sigmoide"], significado: "Volvo — descompressão endoscópica e cirurgia eletiva", fichas: ["obstrucao-intestinal"], urgente: true }
  ],
  fontes: ["US Multi-Society Task Force on CRC (2017/2020)", "ACS 2018 — Colorectal cancer screening (45 anos)", "ESGE 2019 — Bowel preparation", "Escala de Boston (BBPS)", "SOBED — Recomendações de preparo e de antitrombóticos"]
}
);

/* ===================== OUTROS ===================== */
EXAMES_IMAGEM.push(
{
  id: "densitometria",
  nome: "Densitometria óssea (DXA)",
  categoria: "outros",
  variantes: ["Coluna lombar e fêmur proximal", "Antebraço (rádio 33%) — se coluna/fêmur não avaliáveis, hiperparatireoidismo, obesidade extrema", "Corpo inteiro (criança/composição corporal)", "Com VFA (avaliação de fraturas vertebrais)"],
  indicacoes: [
    "Mulheres ≥ 65 anos e homens ≥ 70 anos",
    "Mulheres na pós-menopausa < 65 anos e homens 50–69 anos com fator de risco (baixo peso, fratura prévia, tabagismo, alcoolismo, história familiar de fratura de quadril, artrite reumatoide)",
    "Fratura por fragilidade (queda da própria altura) após 50 anos",
    "Uso de glicocorticoide por ≥ 3 meses (dose ≥ 2,5–5 mg/dia de prednisona ou equivalente)",
    "Doenças/drogas que causam perda óssea: hiperparatireoidismo, hipogonadismo, menopausa precoce, inibidores de aromatase, bloqueio androgênico, cirurgia bariátrica, doença celíaca, DII, DRC",
    "Monitorar tratamento: em geral a cada 1–2 anos no início e intervalos maiores com estabilidade"
  ],
  naoIndicado: [
    "Mulher na pré-menopausa e homem < 50 anos saudáveis, sem fator de risco",
    "Repetição em intervalo < 1 ano (exceto corticoide em alta dose/situações especiais) — variação está dentro do erro do método",
    "Diagnóstico de fratura (usar Rx)"
  ],
  cuidados: [
    "Dose de radiação mínima, mas evitar na gestação (adiar)",
    "Comparar exames no MESMO aparelho; diferença menor que a mínima variação significativa (LSC) não é mudança real",
    "Osteófitos, calcificação de aorta e fraturas aumentam falsamente a DMO da coluna lombar no idoso",
    "Na pré-menopausa, homens < 50 anos e crianças usar Z-score (≤ −2,0 = 'abaixo do esperado para a idade'), não T-score"
  ],
  preparo: "Suspender suplemento de cálcio 24 h antes. Não fazer o exame dentro de alguns dias após exame com contraste baritado, iodado ou de medicina nuclear (avisar o serviço). Roupas sem metais. Informar peso e altura.",
  pedido: "Densitometria óssea de coluna lombar e fêmur proximal (DXA). Justificativa: ___ (idade/fator de risco).",
  exemplos: [
    "Densitometria óssea de coluna lombar e fêmur (DXA) — Mulher de 67 anos, rastreamento de osteoporose.",
    "Densitometria óssea de coluna lombar, fêmur e antebraço — Uso de prednisona 10 mg/dia há 6 meses (artrite reumatoide) e fratura de rádio distal por queda da própria altura."
  ],
  achados: [
    { termos: ["osteoporose", "t-score -2,5", "t-score menor ou igual a -2,5", "t-score inferior a -2,5", "t-score abaixo de -2,5"], significado: "Osteoporose (T ≤ −2,5) — tratamento farmacológico, cálcio/vitamina D, prevenção de quedas", fichas: ["osteoporose"] },
    { termos: ["osteopenia", "baixa massa ossea", "baixa densidade mineral ossea", "t-score entre -1,0 e -2,5"], significado: "Baixa massa óssea (T entre −1,0 e −2,5) — calcular FRAX para decidir tratamento", fichas: ["osteoporose"] },
    { termos: ["osteoporose grave", "osteoporose estabelecida", "fratura vertebral", "fratura por fragilidade"], significado: "T ≤ −2,5 + fratura por fragilidade — alto/muito alto risco (considerar anabólico)", fichas: ["osteoporose"] },
    { termos: ["abaixo do esperado para a idade", "z-score -2", "z-score inferior a -2", "z-score menor ou igual a -2"], significado: "Z ≤ −2,0: investigar causa secundária (hiperparatireoidismo, celíaca, hipogonadismo, mieloma, corticoide)", fichas: ["osteoporose", "doenca-celiaca", "hipercalcemia"] },
    { termos: ["perda significativa", "reducao significativa da dmo", "perda de massa ossea significativa"], significado: "Perda além da variação mínima significativa — rever adesão, absorção e causas secundárias", fichas: ["osteoporose"] },
    { termos: ["densidade mineral ossea normal", "dentro da normalidade"], significado: "T ≥ −1,0 — repetir conforme fatores de risco" }
  ],
  fontes: ["ISCD Official Positions (2023)", "ABRASSO/SBEM — Diretriz de osteoporose", "Bandeira F et al. — Brazilian guidelines for postmenopausal osteoporosis (2022)", "OMS — Critérios densitométricos"]
},
{
  id: "espirometria",
  nome: "Espirometria",
  categoria: "outros",
  variantes: ["Com prova broncodilatadora", "Simples (sem broncodilatador)", "Teste de broncoprovocação (metacolina)", "Pico de fluxo expiratório (PFE) — seriado"],
  indicacoes: [
    "Confirmar DPOC: sintomas respiratórios + exposição (tabaco, biomassa) — obstrução pós-BD com VEF1/CVF < 0,70 (GOLD) ou < LIN",
    "Diagnóstico de asma: obstrução variável com resposta ao broncodilatador (se normal e suspeita persistir — PFE seriado ou broncoprovocação)",
    "Dispneia ou tosse crônica sem causa definida; tabagista sintomático",
    "Seguimento de asma/DPOC (anual ou após mudança de tratamento), doença intersticial (CVF), neuromuscular (CVF em pé e deitado — Guillain-Barré, miastenia, ELA)",
    "Avaliação pré-operatória de ressecção pulmonar e cirurgia torácica/abdominal alta em pneumopata",
    "Ocupacional e uso de drogas pneumotóxicas (amiodarona, metotrexato, bleomicina)"
  ],
  naoIndicado: [
    "Durante exacerbação aguda de asma/DPOC para diagnóstico (fazer após estabilização — no PS usar PFE)",
    "Rastreamento em assintomáticos não expostos",
    "Contraindicações relativas: IAM ou síndrome coronariana < 1 semana, pneumotórax recente, cirurgia ocular/abdominal/torácica recente, aneurisma de aorta grande, hemoptise ativa, tuberculose bacilífera (risco de transmissão), náuseas/vômitos"
  ],
  cuidados: [
    "Exame dependente de esforço — laudo deve comentar aceitabilidade e reprodutibilidade",
    "Resposta broncodilatadora: ERS/ATS 2022 = aumento > 10% do VEF1 ou CVF em relação ao previsto; critério antigo (ATS 2005/SBPT) = ≥ 12% e ≥ 200 mL",
    "Restrição sugerida na espirometria (CVF reduzida com VEF1/CVF normal) precisa de confirmação por volumes pulmonares (CPT)",
    "Na gestação pode ser realizada"
  ],
  preparo: "Para diagnóstico com prova BD, suspender broncodilatadores: de curta ação (salbutamol, fenoterol, ipratrópio) 4–6 h antes; LABA (formoterol, salmeterol) 24 h; LABA de ultralonga duração e LAMA (tiotrópio, indacaterol, umeclidínio) 36–48 h — conforme o serviço. Não fumar 1 h antes, evitar refeição volumosa e exercício intenso antes; não usar roupas apertadas. Para seguimento, o médico pode orientar manter as medicações.",
  pedido: "Espirometria com prova broncodilatadora. HD: ___. Justificativa: ___.",
  exemplos: [
    "Espirometria com prova broncodilatadora — HD: DPOC. Tabagista 40 maços-ano, dispneia aos esforços e tosse produtiva crônica.",
    "Espirometria com prova broncodilatadora — HD: asma. Sibilância e tosse noturna recorrentes, piora com exercício e poeira, criança de 9 anos.",
    "Espirometria simples (CVF em pé e em decúbito) — HD: fraqueza diafragmática em miastenia gravis."
  ],
  achados: [
    { termos: ["disturbio ventilatorio obstrutivo", "dvo", "obstrucao", "padrao obstrutivo", "relacao vef1/cvf reduzida", "vef1/cvf reduzido", "vef1/cvf abaixo do lin", "obstrutivo"], significado: "Obstrução ao fluxo — asma ou DPOC conforme clínica e resposta ao BD", fichas: ["dpoc", "asma-manutencao"] },
    { termos: ["resposta broncodilatadora significativa", "resposta significativa ao broncodilatador", "prova broncodilatadora positiva", "variacao significativa apos broncodilatador", "reversibilidade"], significado: "Variabilidade — sustenta diagnóstico de asma (pode ocorrer na DPOC)", fichas: ["asma-manutencao", "asma-crianca"] },
    { termos: ["obstrucao persistente", "obstrucao fixa", "sem resposta ao broncodilatador", "vef1/cvf pos-bd < 0,70", "vef1/cvf pos bd < 0,7"], significado: "Obstrução persistente pós-BD — confirma DPOC no contexto clínico", fichas: ["dpoc"] },
    { termos: ["disturbio ventilatorio restritivo", "dvr", "padrao restritivo", "cvf reduzida", "reducao da cvf", "restricao"], significado: "Possível restrição (intersticial, neuromuscular, parede, obesidade) — confirmar com volumes pulmonares", fichas: ["esclerose-sistemica", "guillain-barre", "crise-miastenica"] },
    { termos: ["disturbio ventilatorio misto", "disturbio misto", "padrao misto"], significado: "Obstrução + redução de CVF — volumes pulmonares para definir" },
    { termos: ["obstrucao grave", "obstrucao acentuada", "vef1 < 30", "vef1 inferior a 30", "gold 4", "gold 3", "muito grave"], significado: "Obstrução grave/muito grave — otimizar tratamento, reabilitação, avaliar O2", fichas: ["dpoc", "oxigenoterapia"] },
    { termos: ["queda da cvf em decubito", "queda da cvf supina", "cvf < 20 ml/kg", "cvf inferior a 20 ml/kg"], significado: "Fraqueza diafragmática/insuficiência ventilatória iminente (Guillain-Barré, miastenia) — UTI", fichas: ["guillain-barre", "crise-miastenica"], urgente: true },
    { termos: ["exame normal", "espirometria normal", "dentro dos limites da normalidade", "parametros normais"], significado: "Não exclui asma (variabilidade intermitente) — PFE seriado/broncoprovocação se suspeita", fichas: ["asma-manutencao"] }
  ],
  fontes: ["ERS/ATS 2019 — Standardization of spirometry", "ERS/ATS 2022 — Interpretive strategies for lung function tests", "GOLD 2025/2026", "GINA 2026", "SBPT — Diretrizes para testes de função pulmonar (2002)"]
}
);


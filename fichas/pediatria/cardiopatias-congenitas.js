// Cardiopatias congênitas: reconhecimento e conduta inicial
registrarFicha({
  id: "cardiopatias-congenitas",
  especialidade: "pediatria",
  caminho: "ps",
  publico: "pediatrico",
  titulo: "Cardiopatias congênitas: reconhecimento e conduta inicial",
  resumo: "Suspeitar diante de cianose, choque ou insuficiência cardíaca no RN e lactente, sopro patológico ou teste do coraçãozinho alterado. Cardiopatia canal-dependente: prostaglandina E1 sem esperar o ecocardiograma. Inclui a crise hipoxêmica da tetralogia de Fallot.",
  palavrasChave: "cardiopatia congenita cianotica acianotica canal dependente prostaglandina alprostadil pge1 tetralogia de fallot crise hipoxemica crise de cianose transposicao grandes arterias hipoplasia ventriculo esquerdo coarctacao aorta civ cia pca persistencia canal arterial sopro inocente patologico teste do coracaozinho oximetria teste da hiperoxia insuficiencia cardiaca lactente",
  critico: {
    tempo: "RN cianótico ou em choque: PGE1",
    texto: "RN com cianose que não melhora com O₂ ou choque com pulsos femorais fracos nas primeiras semanas: iniciar prostaglandina E1 imediatamente e regular para cardiologia pediátrica. Não esperar o ecocardiograma."
  },
  alarmes: [
    "Cianose central que não melhora com O₂ (SpO₂ < 90%)",
    "Choque nos primeiros dias ou semanas de vida, pulsos femorais fracos ou ausentes, diferença de PA braço-perna",
    "Diferença de SpO₂ pré e pós-ductal ≥ 3%",
    "Crise de cianose com irritabilidade, hiperpneia e perda de consciência (crise hipoxêmica)",
    "Cansaço e sudorese às mamadas, taquipneia, hepatomegalia, baixo ganho de peso (insuficiência cardíaca)",
    "Sopro diastólico, sopro ≥ 3/6 ou com frêmito, B2 única ou hiperfonética",
    "Síncope ou dor torácica ao esforço na criança maior"
  ],
  condutaInicial: [
    "ABC, monitor, SpO₂ pré (mão direita) e pós-ductal (pé), PA nos 4 membros, glicemia",
    "Pulsos (braquiais x femorais), sopro, hepatomegalia, perfusão",
    "Suspeita de canal-dependente (cianose grave ou choque no RN): alprostadil (PGE1) 0,05–0,1 mcg/kg/min IV contínuo; preparar intubação (apneia)",
    "O₂: titular para SpO₂ 75–85% nas cianóticas suspeitas; evitar hiperóxia (pode fechar o canal e hiperfluxo pulmonar)",
    "Acesso venoso (umbilical se RN), corrigir hipoglicemia, hipocalcemia e acidose",
    "ECG, RX de tórax, gasometria; ecocardiograma assim que possível",
    "Regulação para centro com cardiologia pediátrica e UTI"
  ],
  fataisExcluir: [
    "Cardiopatia canal-dependente com fechamento do canal (choque ou cianose súbita na 1ª–2ª semana)",
    "Sepse neonatal (quadro semelhante: tratar ambas se dúvida)",
    "Hipertensão pulmonar persistente do RN",
    "Miocardite ou arritmia (taquicardia supraventricular) com IC",
    "Metemoglobinemia (cianose com PaO₂ normal, sangue achocolatado)"
  ],
  proximaDecisao: "Após PGE1: melhora da SpO₂ (canal-dependente de fluxo pulmonar) ou dos pulsos e acidose (fluxo sistêmico) confirma a hipótese; manter a menor dose eficaz (0,01–0,05 mcg/kg/min) até a cirurgia ou cateterismo. Sem melhora ou piora: suspeitar de transposição com septo íntegro (precisa de atriosseptostomia) ou drenagem venosa anômala obstrutiva — urgência cirúrgica.",
  clinica: {
    anamnese: [
      "Ecocardiograma fetal, diabetes materno, drogas na gestação (lítio, anticonvulsivantes), rubéola, síndromes (Down, Turner, DiGeorge)",
      "Início dos sintomas (horas, dias ou semanas) e relação com as mamadas",
      "Cansaço, sudorese, pausas nas mamadas, ganho de peso",
      "Crises de cianose ao chorar ou evacuar",
      "História familiar de cardiopatia ou morte súbita"
    ],
    exameFisico: [
      "SpO₂ pré e pós-ductal; cianose central (língua, mucosas)",
      "Pulsos nos 4 membros e PA de membro superior direito e inferior",
      "Ictus, frêmito, B2 (desdobramento, intensidade), sopro (tempo, intensidade 1 a 6, irradiação), cliques",
      "Hepatomegalia, edema palpebral, taquipneia, crepitações",
      "Fácies sindrômica"
    ],
    diferenciais: [
      { dx: "Cianótica com fluxo pulmonar reduzido (Fallot, atresia pulmonar, atresia tricúspide)", pista: "Cianose importante, pouco desconforto, campos pulmonares escuros, sopro de estenose pulmonar" },
      { dx: "Transposição das grandes artérias", pista: "Cianose intensa nas primeiras horas, sem sopro, RX com mediastino estreito (ovo deitado)" },
      { dx: "Obstrução ao fluxo sistêmico (hipoplasia de VE, coarctação crítica, interrupção do arco, estenose aórtica crítica)", pista: "Choque na 1ª–2ª semana, pulsos femorais fracos, acidose" },
      { dx: "Shunt esquerda-direita (CIV, PCA, DSAV)", pista: "Sintomas de IC a partir de 4–8 semanas (queda da resistência pulmonar), sopro, hiperfluxo no RX" },
      { dx: "Coarctação da aorta (não crítica)", pista: "PA alta nos braços, pulsos femorais fracos ou atrasados" },
      { dx: "Doença pulmonar", pista: "Desconforto proporcional à cianose; melhora com O₂; teste da hiperóxia com PaO₂ > 150 mmHg" }
    ],
    gravidade: [
      "Teste da hiperóxia: PaO₂ pré-ductal < 100 mmHg após 10 min em O₂ 100% sugere cardiopatia cianótica",
      "IC no lactente: taquipneia, taquicardia, hepatomegalia, sudorese e dificuldade às mamadas",
      "Choque com acidose metabólica grave no RN = canal-dependente sistêmico até prova em contrário"
    ]
  },
  exames: [
    {
      nome: "Ecocardiograma com Doppler",
      pedido: "Ecocardiograma transtorácico com Doppler — suspeita de cardiopatia congênita (SpO₂ ___%, sopro ___).",
      porQue: "Diagnóstico anatômico.",
      esperar: "—",
      interpretacao: "Define a necessidade de PGE1, cirurgia ou cateterismo.",
      limitacoes: "Não atrasar PGE1 no RN grave."
    },
    {
      nome: "RX de tórax",
      pedido: "RX de tórax PA/AP.",
      porQue: "Área cardíaca, fluxo pulmonar, forma do coração.",
      esperar: "Bota (Fallot), ovo deitado (TGA), boneco de neve (drenagem anômala supracardíaca), hiperfluxo (shunt E-D).",
      interpretacao: "Campos escuros = hipofluxo; congestão = hiperfluxo ou obstrução venosa.",
      limitacoes: "Pode ser normal."
    },
    {
      nome: "ECG",
      pedido: "Eletrocardiograma de 12 derivações.",
      porQue: "Sobrecargas, eixo, arritmias.",
      esperar: "No RN, predomínio de VD é normal.",
      interpretacao: "Eixo superior (desvio para cima e esquerda) sugere DSAV ou atresia tricúspide.",
      limitacoes: "Usar valores de referência por idade."
    },
    {
      nome: "Gasometria, lactato e teste da hiperóxia",
      pedido: "Gasometria arterial pré-ductal (artéria radial direita) em ar ambiente e após 10 min de O₂ 100%; lactato; glicemia; cálcio iônico.",
      porQue: "Separar causa cardíaca de pulmonar e avaliar choque.",
      esperar: "—",
      interpretacao: "PaO₂ < 100 mmHg em O₂ 100%: cardiopatia cianótica provável.",
      limitacoes: "Não manter O₂ 100% além do teste em suspeita de canal-dependente."
    }
  ],
  tratamento: [
    {
      droga: "Alprostadil (prostaglandina E1)",
      linha: "l1",
      dose: "Início 0,05–0,1 mcg/kg/min; manutenção 0,01–0,05 mcg/kg/min (menor dose eficaz)",
      via: "IV contínua (periférica, umbilical ou intraóssea)",
      intervalo: "Contínuo",
      duracao: "Até cirurgia ou cateterismo",
      monitorizacao: "SpO₂, FC, FR, PA, temperatura; apneia nas primeiras horas",
      contraindicacoes: "—",
      ajustes: "Diluição exemplo: ampola 500 mcg/mL — 1 ampola (500 mcg) em SG 5% até 50 mL = 10 mcg/mL; 0,1 mcg/kg/min = 0,6 mL/kg/h; 0,05 = 0,3 mL/kg/h; 0,01 = 0,06 mL/kg/h. Efeitos: apneia (até 10–20%, mais em doses altas e < 2 kg; ter material de IOT; não é obrigatório intubar), febre, hipotensão, rubor, convulsão. Trocar a solução a cada 24 h"
    },
    {
      droga: "Morfina (crise hipoxêmica)",
      linha: "l1",
      dose: "0,1 mg/kg (0,05–0,2 mg/kg), máx. 2–5 mg",
      via: "IV, IM ou SC",
      intervalo: "Dose única; repetir conforme resposta",
      duracao: "—",
      monitorizacao: "FR, SpO₂, PA",
      contraindicacoes: "Depressão respiratória",
      ajustes: "Reduz a agitação e a hiperpneia que pioram o shunt. Se sem acesso, IM ou SC"
    },
    {
      droga: "Soro fisiológico 0,9% (crise hipoxêmica)",
      linha: "l1",
      dose: "10–20 mL/kg",
      via: "IV em bolus",
      intervalo: "Pode repetir",
      duracao: "—",
      monitorizacao: "Perfusão, PA",
      contraindicacoes: "IC congestiva",
      ajustes: "Aumenta a pré-carga e o fluxo pulmonar"
    },
    {
      droga: "Cetamina (crise hipoxêmica refratária)",
      linha: "alt",
      dose: "1–2 mg/kg",
      via: "IV lento",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "FR, SpO₂",
      contraindicacoes: "—",
      ajustes: "Seda e aumenta a resistência vascular sistêmica. Vasoconstritor (fenilefrina) e betabloqueador IV (esmolol ou propranolol) na UTI conforme cardiologia pediátrica; bicarbonato se acidose metabólica"
    },
    {
      droga: "Furosemida (insuficiência cardíaca por hiperfluxo)",
      linha: "l1",
      dose: "1 mg/kg/dose (máx. 40 mg)",
      via: "IV ou VO",
      intervalo: "12/12 h a 24/24 h (ou 6/6 h a 12/12 h se congestão importante, na internação)",
      duracao: "Conforme cardiologia pediátrica",
      monitorizacao: "Peso, diurese, potássio, sódio",
      contraindicacoes: "Desidratação, hipocalemia",
      ajustes: "Associar espironolactona 1–2 mg/kg/dia VO conforme cardiologia. Oferta calórica aumentada; mamadas fracionadas"
    },
    {
      droga: "Inotrópicos (dobutamina, dopamina, adrenalina) na crise hipoxêmica; hiperóxia na canal-dependente",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Inotrópicos pioram a obstrução infundibular no Fallot; hiperóxia pode fechar o canal",
      ajustes: "Na crise hipoxêmica, evitar também agitação e choro (procedimentos não urgentes)"
    }
  ],
  destino: {
    agora: [
      "PGE1 na suspeita de canal-dependente; estabilizar e regular",
      "Crise hipoxêmica: posição genupeitoral, O₂, morfina, volume"
    ],
    reavaliar: [
      "SpO₂, perfusão, pulsos, lactato após 30–60 min de PGE1",
      "Apneia nas primeiras horas de PGE1"
    ],
    alta: [
      "Sopro inocente típico em criança assintomática: alta com orientação, sem eco obrigatório",
      "Cardiopatia acianótica estável: seguimento com cardiologia pediátrica, ganho de peso e vacinas em dia"
    ],
    observacao: [
      "Lactente com IC leve em início de diurético: reavaliar em 24–48 h"
    ],
    internacao: [
      "Canal-dependente, crise hipoxêmica, IC descompensada, arritmia, cianose nova"
    ],
    transferencia: [
      "Centro com cardiologia pediátrica, ecocardiograma e cirurgia cardíaca: transporte com PGE1 em bomba, acesso seguro e, se apneias, via aérea assegurada"
    ]
  },
  prescricao: {
    hospitalar: "RN COM SUSPEITA DE CARDIOPATIA CANAL-DEPENDENTE (peso: ___ kg)\n1. Dieta zero (ou trófica conforme cardiologia); sonda orogástrica aberta se intubado.\n2. Incubadora; monitor cardíaco; SpO₂ pré e pós-ductal contínuas; PA de 1/1 h; acesso venoso (umbilical se possível).\n3. Alprostadil 500 mcg/mL — 1 ampola (1 mL) + SG 5% 49 mL (10 mcg/mL): IV em bomba a ___ mL/h (0,05 mcg/kg/min = 0,3 mL/kg/h; 0,1 mcg/kg/min = 0,6 mL/kg/h). Reduzir para 0,01–0,03 mcg/kg/min após resposta. Trocar a solução de 24/24 h.\n4. O₂ apenas para manter SpO₂ 75–85% (não buscar saturação normal).\n5. Soro de manutenção SG 10% ___ mL/kg/dia com eletrólitos conforme o dia de vida = ___ mL/h; corrigir glicemia e cálcio.\n6. Material de intubação ao lado do leito (risco de apneia).\n7. Se choque: SF 0,9% 10 mL/kg com cautela; inotrópico conforme UTI.\n8. Considerar hemocultura e ampicilina + gentamicina se sepse não puder ser excluída (ver ficha sepse-neonatal).\n9. Controles: FC, FR, SpO₂, PA, temperatura de 1/1 h; diurese; glicemia de 3/3 h; gasometria e lactato em 1–2 h.\n\nCRISE HIPOXÊMICA (TETRALOGIA DE FALLOT) — peso: ___ kg\n1. Colo da mãe, joelhos dobrados sobre o peito (posição genupeitoral); acalmar; O₂.\n2. Morfina 0,1 mg/kg = ___ mg IV, IM ou SC (diluir 1 mg em 10 mL SF = 0,1 mg/mL).\n3. SF 0,9% 10–20 mL/kg = ___ mL IV em bolus.\n4. Sem resposta: cetamina 1–2 mg/kg = ___ mg IV lento; bicarbonato se acidose; vasoconstritor e betabloqueador conforme cardiologia pediátrica/UTI.",
    ambulatorial: "SOLICITAÇÃO\n1. Ecocardiograma transtorácico com Doppler — sopro ___ (sistólico/diastólico, grau ___/6, foco ___), SpO₂ ___%, PA MSD ___ / MI ___ mmHg.\n2. ECG de 12 derivações e RX de tórax PA.\n3. Encaminhamento à cardiologia pediátrica — prioridade ___."
  },
  orientacoesRetorno: [
    "Sopro inocente é comum em crianças saudáveis e não é doença: não precisa de restrição de atividade",
    "Volte imediatamente se o bebê ficar roxo (lábios, língua), respirar rápido, cansar ou suar muito para mamar, ficar pálido, frio ou muito sonolento",
    "Crise de cianose em casa (criança com Fallot): colocar no colo com os joelhos dobrados junto ao peito, acalmar e levar ao pronto-socorro",
    "Manter vacinas em dia e cuidar dos dentes (escovação, dentista) — reduz risco de endocardite",
    "Não falte às consultas de cardiologia pediátrica"
  ],
  tabelas: [
    {
      titulo: "Sopro inocente x patológico",
      colunas: ["Característica", "Inocente", "Patológico (investigar)"],
      linhas: [
        ["Tempo", "Sistólico (ou contínuo: zumbido venoso)", "Diastólico, holossistólico, contínuo não venoso"],
        ["Intensidade", "≤ 2/6, suave", "≥ 3/6 ou com frêmito"],
        ["Posição", "Muda ou some com a posição (deitado x sentado), febre e anemia aumentam", "Não muda"],
        ["Bulhas", "B2 normal, desdobramento fisiológico", "B2 única, fixa ou hiperfonética; clique; B3/B4 ou galope"],
        ["Criança", "Assintomática, crescimento normal, pulsos normais", "Cianose, IC, baixo ganho, pulsos femorais fracos, síndrome genética"],
        ["Exemplos", "Sopro de Still (vibratório, borda esternal esquerda baixa), sopro de ejeção pulmonar, zumbido venoso", "CIV, estenoses valvares, PCA, coarctação"]
      ],
      nota: "Sopro no RN nas primeiras 48 h pode ser transitório (canal fechando), mas deve ser reavaliado antes da alta; associar oximetria (teste do coraçãozinho)."
    },
    {
      titulo: "Acianóticas, cianóticas e canal-dependentes",
      colunas: ["Grupo", "Exemplos", "Apresentação típica"],
      linhas: [
        ["Acianóticas com shunt E-D", "CIV, CIA, PCA, DSAV", "Sopro; IC com 1–3 meses; infecções respiratórias de repetição"],
        ["Acianóticas obstrutivas", "Coarctação, estenose aórtica, estenose pulmonar", "Sopro, HAS nos braços, pulsos femorais fracos"],
        ["Cianóticas", "Fallot, TGA, atresia tricúspide, truncus, drenagem venosa anômala total, Ebstein", "Cianose; teste do coraçãozinho alterado"],
        ["Canal-dependentes de fluxo pulmonar", "Atresia pulmonar, estenose pulmonar crítica, atresia tricúspide, Fallot grave", "Cianose progressiva ao fechar o canal"],
        ["Canal-dependentes de fluxo sistêmico", "Hipoplasia de VE, coarctação crítica, interrupção do arco, estenose aórtica crítica", "Choque, acidose, pulsos fracos na 1ª–2ª semana"],
        ["Canal-dependente de mistura", "Transposição das grandes artérias", "Cianose intensa precoce"]
      ],
      nota: "Teste do coraçãozinho (24–48 h, mão direita e pé): normal se ≥ 95% nos dois e diferença < 3% (ver ficha triagem-neonatal)."
    }
  ],
  fontes: [
    "Sociedade Brasileira de Pediatria — Diagnóstico precoce de cardiopatia congênita crítica: oximetria de pulso como ferramenta de triagem neonatal (2011)",
    "Ministério da Saúde — Atenção à Saúde do Recém-Nascido: guia para os profissionais de saúde, vol. 3 (2014)",
    "AHA — Scientific Statement: Neonatal congenital heart disease, recognition and initial management / PALS (2020–2025)",
    "Sociedade Brasileira de Cardiologia — Departamento de Cardiopatias Congênitas e Cardiologia Pediátrica: diretrizes e posicionamentos (vigentes)",
    "AAP — Endorsement of Health and Human Services recommendation for pulse oximetry screening for critical congenital heart disease (2012; atualização 2020)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

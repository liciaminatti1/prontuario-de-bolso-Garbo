// Sepse e choque séptico
registrarFicha({
  id: "sepse",
  especialidade: "infectologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Sepse e choque séptico",
  resumo: "Infecção suspeita com disfunção orgânica. Reconhecer cedo e iniciar o pacote da 1ª hora.",
  palavrasChave: "sepse choque septico qsofa lactato antibiotico noradrenalina vasopressor hemocultura infeccao",
  critico: {
    tempo: "Pacote 1ª hora",
    texto: "Lactato, hemoculturas, antibiótico, volume (se hipotensão ou lactato ≥ 4) e vasopressor se PAM < 65 após volume."
  },
  alarmes: [
    "PAS < 90 ou PAM < 65 mmHg",
    "Lactato ≥ 2 mmol/L (≥ 4: alto risco)",
    "Rebaixamento de consciência / confusão aguda",
    "FR ≥ 22, SpO₂ < 90%, oligúria < 0,5 mL/kg/h",
    "Pele moteada, enchimento capilar > 3 s"
  ],
  condutaInicial: [
    "2 acessos, monitor, O₂ se SpO₂ < 92%",
    "Lactato + 2 pares de hemoculturas (sem atrasar ATB)",
    "Antibiótico IV em até 1 h",
    "Ringer lactato / SF 30 mL/kg em 3 h se hipotensão ou lactato ≥ 4",
    "Noradrenalina se PAM < 65 apesar do volume (pode iniciar em acesso periférico calibroso)"
  ],
  fataisExcluir: [
    "Choque séptico",
    "Foco que exige controle cirúrgico (abdome agudo, fasceíte necrosante, abscesso, colangite)",
    "Meningite bacteriana",
    "Endocardite",
    "Choque de outra causa (cardiogênico, hipovolêmico, anafilático)"
  ],
  proximaDecisao: "Após 1 h: reavaliar perfusão (PAM, lactato, diurese, enchimento capilar) e definir foco e necessidade de controle cirúrgico. Choque → UTI.",
  clinica: {
    anamnese: [
      "Foco provável: tosse/dispneia, disúria/dor lombar, dor abdominal, pele, cefaleia/rigidez de nuca, cateteres",
      "Tempo de evolução, uso recente de antibiótico, internação nos últimos 90 dias",
      "Imunossupressão: QT, corticoide, HIV, esplenectomia, neutropenia",
      "Comorbidades e diretivas antecipadas"
    ],
    exameFisico: [
      "Sinais vitais completos, glicemia capilar",
      "Perfusão: enchimento capilar, moteamento (escore de mottling), extremidades frias",
      "Nível de consciência (Glasgow)",
      "Busca ativa do foco: pulmões, abdome, pele inteira (incluindo sacro e períneo), articulações, cateteres",
      "Rigidez de nuca, petéquias (meningococcemia)"
    ],
    diferenciais: [
      {
        dx: "Pneumonia",
        pista: "Foco mais comum; tosse, crepitações, RX com consolidação"
      },
      {
        dx: "Infecção urinária / pielonefrite",
        pista: "Disúria, Giordano, leucocitúria"
      },
      {
        dx: "Intra-abdominal",
        pista: "Dor, peritonite; exige controle de foco"
      },
      {
        dx: "Pele e partes moles",
        pista: "Dor desproporcional ao exame → fasceíte necrosante"
      },
      {
        dx: "Choque não séptico",
        pista: "Cardiogênico (congestão), hipovolêmico (perdas), obstrutivo (TEP, tamponamento)"
      },
      {
        dx: "Insuficiência adrenal, tireotoxicose",
        pista: "Hipotensão refratária sem foco"
      }
    ],
    gravidade: [
      "SOFA ≥ 2 pontos acima do basal = sepse",
      "Choque séptico: vasopressor para PAM ≥ 65 + lactato > 2 apesar de volume adequado",
      "qSOFA (FR ≥ 22, PAS ≤ 100, alteração mental) é ferramenta de alerta, não de diagnóstico"
    ]
  },
  exames: [
    {
      nome: "Lactato arterial ou venoso",
      pedido: "Lactato sérico — URGENTE. Repetir em 2–4 h se > 2 mmol/L.",
      porQue: "Marcador de hipoperfusão e de resposta à ressuscitação.",
      esperar: "> 2 mmol/L na sepse com hipoperfusão.",
      interpretacao: "≥ 4 → volume 30 mL/kg. Queda ≥ 10–20% em 2 h sugere resposta.",
      limitacoes: "Eleva por hepatopatia, metformina, convulsão, beta-agonista."
    },
    {
      nome: "Hemoculturas",
      pedido: "Hemocultura — 2 amostras de sítios distintos (aeróbio + anaeróbio), antes do antibiótico.",
      porQue: "Identificar agente e ajustar terapia.",
      esperar: "Positiva em 30–40%.",
      interpretacao: "Descalonar em 48–72 h conforme resultado.",
      limitacoes: "Não atrasar o antibiótico > 45 min para coletar."
    },
    {
      nome: "Culturas do foco",
      pedido: "Urocultura com antibiograma; cultura de escarro / aspirado; líquor se suspeita de meningite.",
      porQue: "Direcionar terapia.",
      esperar: "—",
      interpretacao: "Guia descalonamento.",
      limitacoes: "Colonização × infecção."
    },
    {
      nome: "Disfunção orgânica",
      pedido: "Hemograma, creatinina, ureia, bilirrubinas, TP/INR, plaquetas, gasometria arterial, sódio, potássio, glicemia.",
      porQue: "Calcular SOFA e orientar suporte.",
      esperar: "Leucocitose ou leucopenia, plaquetopenia, ↑ creatinina e bilirrubina.",
      interpretacao: "Cada disfunção muda destino (UTI) e dose de antimicrobianos.",
      limitacoes: "—"
    },
    {
      nome: "Imagem do foco",
      pedido: "RX de tórax; USG/TC de abdome conforme suspeita.",
      porQue: "Localizar foco que exija drenagem ou cirurgia.",
      esperar: "—",
      interpretacao: "Foco drenável → controle em até 6–12 h.",
      limitacoes: "Não transportar paciente instável para TC sem estabilização."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide (Ringer lactato ou SF 0,9%)",
      linha: "l1",
      dose: "30 mL/kg (peso ideal se obeso)",
      via: "IV",
      intervalo: "Em até 3 h, em alíquotas de 500 mL reavaliando",
      duracao: "Guiar depois por responsividade a volume",
      monitorizacao: "Crepitações, SpO₂, PAM, diurese, POCUS (VCI, linhas B)",
      contraindicacoes: "Congestão franca",
      ajustes: "IC grave, DRC dialítica: alíquotas menores (250 mL) e vasopressor precoce"
    },
    {
      droga: "Noradrenalina",
      linha: "l1",
      dose: "0,05–0,5 mcg/kg/min (alvo PAM ≥ 65)",
      via: "IV contínua (periférica calibrosa por curto prazo, depois central)",
      intervalo: "Contínua, titular a cada 5–10 min",
      duracao: "Até estabilidade",
      monitorizacao: "PAM (PAI ideal), perfusão, arritmia, extravasamento",
      contraindicacoes: "—",
      ajustes: "Diluição usual: 4 ampolas de 4 mg/4 mL (16 mg) + 234 mL SG 5% = 250 mL → 64 mcg/mL. Ex.: 70 kg a 0,1 mcg/kg/min ≈ 6,6 mL/h"
    },
    {
      droga: "Vasopressina",
      linha: "adj",
      dose: "0,03 U/min",
      via: "IV contínua",
      intervalo: "Dose fixa",
      duracao: "—",
      monitorizacao: "Isquemia digital/mesentérica",
      contraindicacoes: "—",
      ajustes: "Associar quando noradrenalina ≥ 0,25–0,5 mcg/kg/min"
    },
    {
      droga: "Hidrocortisona",
      linha: "adj",
      dose: "200 mg/dia (50 mg 6/6h)",
      via: "IV",
      intervalo: "6/6h",
      duracao: "Até suspensão do vasopressor",
      monitorizacao: "Glicemia",
      contraindicacoes: "—",
      ajustes: "Indicada em choque com necessidade persistente de vasopressor"
    },
    {
      droga: "Ceftriaxona ± azitromicina (foco pulmonar comunitário)",
      linha: "l1",
      dose: "Ceftriaxona 2 g + azitromicina 500 mg",
      via: "IV",
      intervalo: "1×/dia",
      duracao: "5–7 dias (ajustar à resposta)",
      monitorizacao: "Resposta clínica, culturas",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Meningite: ceftriaxona 2 g 12/12h. Seguir protocolo da CCIH local"
    },
    {
      droga: "Piperacilina-tazobactam (foco hospitalar / abdominal grave)",
      linha: "alt",
      dose: "4,5 g",
      via: "IV (infusão estendida 3–4 h se possível)",
      intervalo: "6/6h",
      duracao: "Conforme foco",
      monitorizacao: "Função renal",
      contraindicacoes: "Alergia a penicilinas",
      ajustes: "ClCr < 20: 4,5 g 8/8h. Considerar carbapenêmico se ESBL; vancomicina se risco de MRSA"
    }
  ],
  destino: {
    agora: [
      "Pacote da 1ª hora completo",
      "Identificar e controlar o foco",
      "Choque → vaga de UTI"
    ],
    reavaliar: [
      "Após cada alíquota de volume",
      "Lactato em 2–4 h",
      "Diurese horária (sonda vesical se choque)",
      "Culturas em 48–72 h para descalonar"
    ],
    alta: [
      "Não se aplica à sepse. Infecção sem disfunção orgânica, estável, com via oral tolerada → tratamento domiciliar com retorno em 48–72 h"
    ],
    observacao: [
      "Sepse sem choque com lactato normalizando e boa resposta → enfermaria com reavaliação frequente"
    ],
    internacao: [
      "Toda sepse",
      "UTI: choque, lactato ≥ 4, insuficiência respiratória, rebaixamento de consciência"
    ],
    transferencia: [
      "Sem UTI ou sem cirurgia para controle de foco → transferência via regulação após estabilização inicial (ATB já feito, vasopressor em curso)"
    ]
  },
  fontes: [
    "Surviving Sepsis Campaign: International Guidelines 2021",
    "Sepsis-3 (Singer M et al., JAMA 2016)",
    "ILAS — Instituto Latino-Americano de Sepse, protocolos gerenciados"
  ],
  revisao: "2026-10-20",
  versao: "1.0"
});

// Leptospirose
registrarFicha({
  id: "leptospirose",
  especialidade: "infectologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Leptospirose",
  resumo: "Doença febril aguda após exposição a enchente, lama, esgoto, água ou solo contaminados por urina de rato (até 30 dias antes). Fase precoce semelhante a gripe/dengue; fase tardia com icterícia, insuficiência renal e hemorragia pulmonar (síndrome de Weil). Antibiótico precoce.",
  palavrasChave: "leptospirose leptospira enchente alagamento rato lama esgoto mialgia panturrilha icterícia rubinica sindrome de weil hemorragia pulmonar insuficiencia renal hipocalemia doxiciclina amoxicilina penicilina ceftriaxona notificacao",
  critico: {
    tempo: "Antibiótico já, sem esperar exame",
    texto: "Febre + mialgia (panturrilhas) + exposição a enchente/lama: tratar como leptospirose imediatamente. Procure sinais de alerta (dispneia, hemoptise, oligúria, hipotensão, icterícia): qualquer um = internar."
  },
  alarmes: [
    "Dispneia, tosse, taquipneia, hemoptise (hemorragia pulmonar — principal causa de morte)",
    "Oligúria ou anúria, creatinina em elevação",
    "Hipotensão, choque",
    "Icterícia",
    "Alteração do nível de consciência",
    "Vômitos frequentes, sangramentos (petéquias, hematúria, melena)",
    "Arritmias (miocardite), plaquetopenia importante"
  ],
  condutaInicial: [
    "Perguntar exposição de risco nos últimos 30 dias (enchente, limpeza de entulho, fossas, roedores, trabalho rural, esgoto)",
    "Procurar sinais de alerta e avaliar PA, SpO₂, FR, diurese",
    "Exames: hemograma, creatinina, ureia, potássio, sódio, TGO, TGP, bilirrubinas, CPK, urina tipo 1; RX de tórax se sintomas respiratórios; sorologia",
    "Sem sinal de alerta: doxiciclina (ou amoxicilina) oral, hidratação, retorno em 24–72 h",
    "Com sinal de alerta: internar, antibiótico IV, hidratação guiada e suporte (diálise precoce, ventilação protetora)",
    "Notificar todo caso suspeito"
  ],
  fataisExcluir: [
    "Hemorragia pulmonar / SDRA",
    "Lesão renal aguda com hipocalemia (forma não oligúrica)",
    "Choque e miocardite",
    "Dengue grave, malária (viajante), hantavirose, febre amarela, sepse bacteriana"
  ],
  proximaDecisao: "Lesão renal: diálise precoce (antes de uremia franca) se oligúria, creatinina em ascensão, hipercalemia ou acidose, sobretudo com envolvimento pulmonar. Hemorragia pulmonar: UTI, ventilação protetora (PEEP). Não suspender o antibiótico por sorologia inicial negativa.",
  clinica: {
    anamnese: [
      "Exposição (até 30 dias; média 5–14 dias): enchente, lama, esgoto, rios, roedores, ocupação (gari, agricultor, trabalhador de saneamento)",
      "Febre súbita, cefaleia, mialgia intensa (panturrilhas, lombar), prostração",
      "Náuseas, vômitos, diarreia, tosse, dispneia",
      "Diurese, cor da urina, sangramentos"
    ],
    exameFisico: [
      "Sufusão conjuntival (vermelhidão sem secreção)",
      "Dor à palpação das panturrilhas",
      "Icterícia rubínica (alaranjada), hepatomegalia",
      "PA, FC, FR, SpO₂, ausculta pulmonar (estertores), diurese",
      "Petéquias e sangramentos"
    ],
    diferenciais: [
      { dx: "Dengue", pista: "Hemoconcentração, plaquetopenia, sem icterícia; leucopenia (leptospirose costuma ter leucocitose com desvio); ver ficha dengue" },
      { dx: "Hepatites virais", pista: "Transaminases muito altas (> 1.000), sem lesão renal; leptospirose: transaminases pouco elevadas com bilirrubina alta" },
      { dx: "Malária", pista: "Viagem a área endêmica; gota espessa; ver ficha malaria" },
      { dx: "Hantavirose", pista: "Contato com roedores silvestres em área rural; edema pulmonar não hemorrágico" },
      { dx: "Influenza/COVID-19, sepse, colangite", pista: "Contexto clínico" }
    ],
    gravidade: [
      "Fase precoce (leptospirêmica, 3–7 dias): febre, mialgia, cefaleia, sufusão conjuntival",
      "Fase tardia (imune): síndrome de Weil (icterícia + insuficiência renal + hemorragia), hemorragia pulmonar, miocardite, meningite",
      "Achados típicos: plaquetopenia, CPK elevada, hipocalemia, bilirrubina direta alta com transaminases < 200–300"
    ]
  },
  exames: [
    {
      nome: "Laboratório inicial",
      pedido: "Hemograma com plaquetas, ureia, creatinina, sódio, potássio, TGO, TGP, bilirrubinas totais e frações, CPK, TP/INR, urina tipo 1, gasometria (se dispneia). RX de tórax.",
      porQue: "Identificar gravidade (rim, fígado, pulmão).",
      esperar: "Leucocitose com desvio, plaquetopenia, creatinina alta com potássio normal/baixo, CPK alta, bilirrubina direta alta.",
      interpretacao: "Infiltrado alveolar bilateral com hemoptise → hemorragia pulmonar (UTI).",
      limitacoes: "Exames normais na fase precoce não excluem."
    },
    {
      nome: "Diagnóstico específico",
      pedido: "Sorologia para leptospirose (ELISA IgM; microaglutinação — MAT — pelo Lacen) na 1ª consulta e repetir após 7 dias se negativa. PCR em sangue (1ª semana) se disponível.",
      porQue: "Confirmação e vigilância.",
      esperar: "IgM positivo a partir de ~7 dias de sintomas.",
      interpretacao: "MAT: soroconversão ou aumento de 4 vezes no título entre amostras pareadas.",
      limitacoes: "Primeira sorologia frequentemente negativa; não atrasar tratamento."
    }
  ],
  tratamento: [
    {
      droga: "Doxiciclina (fase precoce, sem sinal de alerta)",
      linha: "l1",
      dose: "Adulto: 100 mg. Criança ≥ 8 anos: 2 mg/kg/dose (máx 100 mg)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "5–7 dias",
      monitorizacao: "Náusea, fotossensibilidade",
      contraindicacoes: "Gestação, lactação, menores de 8 anos (preferir amoxicilina)",
      ajustes: "Tomar com água e em pé; não junto com leite, antiácido ou ferro"
    },
    {
      droga: "Amoxicilina (fase precoce)",
      linha: "l1",
      dose: "Adulto: 500 mg. Criança: 50 mg/kg/dia dividido 8/8 h (máx 500 mg/dose)",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "5–7 dias",
      monitorizacao: "Reação alérgica; reação de Jarisch-Herxheimer (rara)",
      contraindicacoes: "Alergia a penicilina (alternativa: azitromicina 500 mg/dia 3 dias; criança 10 mg/kg/dia)",
      ajustes: "Escolha para gestantes e crianças < 8 anos"
    },
    {
      droga: "Penicilina G cristalina (forma grave)",
      linha: "l1",
      dose: "Adulto: 1,5 milhão UI. Criança: 50.000–100.000 UI/kg/dia divididos de 4/4–6/6 h",
      via: "IV",
      intervalo: "6/6 h (adulto)",
      duracao: "Pelo menos 7 dias",
      monitorizacao: "Potássio, função renal",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Ajuste em IR grave conforme protocolo; pode ser feita durante a diálise"
    },
    {
      droga: "Ceftriaxona (forma grave)",
      linha: "alt",
      dose: "Adulto: 1–2 g. Criança: 80–100 mg/kg/dia (máx 2 g/dia)",
      via: "IV",
      intervalo: "24/24 h (ou dividida 12/12 h)",
      duracao: "7 dias",
      monitorizacao: "—",
      contraindicacoes: "Alergia grave a beta-lactâmico",
      ajustes: "Sem ajuste renal. Alternativas: ampicilina 1 g IV 6/6 h; cefotaxima 1 g IV 6/6 h; azitromicina 500 mg IV 1×/dia"
    }
  ],
  destino: {
    agora: [
      "Sem sinal de alerta: antibiótico oral, hidratação e retorno",
      "Com sinal de alerta: internação; UTI se dispneia, hemoptise, choque ou rebaixamento"
    ],
    reavaliar: [
      "Ambulatorial: retorno em 24–72 h com exames (creatinina, potássio, plaquetas, bilirrubinas)",
      "Internado: diurese horária, creatinina e potássio diários (ou mais), SpO₂ contínua"
    ],
    alta: ["Sem sinais de alerta, exames estáveis, hidratando por boca, com retorno garantido"],
    observacao: ["Dúvida clínica ou exames em andamento: observar e repetir exames em 24 h"],
    internacao: ["Qualquer sinal de alerta, creatinina elevada, icterícia, plaquetopenia importante, gestante"],
    transferencia: ["Sem hemodiálise ou UTI: transferir cedo (piora pulmonar pode ser abrupta)"]
  },
  prescricao: {
    ambulatorial: "LEPTOSPIROSE — FASE PRECOCE SEM SINAIS DE ALERTA (adulto)\nUSO ORAL\n1. Doxiciclina 100 mg ------------------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias, com bastante água, sem deitar logo após.\n   (Gestante, alergia ou criança < 8 anos: amoxicilina 500 mg — 1 cápsula de 8 em 8 horas por 7 dias.)\n2. Dipirona 500 mg --------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor.\n3. Soro de reidratação oral ------------------------ 10 envelopes\n   Diluir 1 envelope em 1 litro de água filtrada e beber ao longo do dia, além de água.\nNÃO usar AAS nem anti-inflamatórios.\n\nCRIANÇA (por kg): amoxicilina 50 mg/kg/dia dividido de 8/8 h (máx 500 mg/dose) por 7 dias; ≥ 8 anos: doxiciclina 2 mg/kg/dose de 12/12 h (máx 100 mg); dipirona 15–25 mg/kg/dose.",
    hospitalar: "LEPTOSPIROSE COM SINAIS DE ALERTA — ADULTO\n1. Dieta conforme aceitação (zero se dispneia grave).\n2. Penicilina G cristalina 1.500.000 UI em 100 mL de SF 0,9% IV em 30 min de 6/6 h por 7 dias; OU ceftriaxona 1 g IV de 12/12 h (ou 2 g 1 vez ao dia) por 7 dias.\n3. Hidratação: SF 0,9% 500 mL IV em 30 min se hipovolemia, reavaliar; depois manutenção guiada por diurese e ausculta pulmonar (evitar sobrecarga: risco de edema/hemorragia pulmonar).\n4. Reposição de potássio conforme K sérico (hipocalemia frequente): KCl 19,1% 10 mL (25 mEq) em 500 mL de SF 0,9% IV em 4 h se K < 3,5, repetir conforme controle.\n5. Dipirona 1 g IV de 6/6 h se febre ou dor.\n6. Omeprazol 40 mg IV 1 vez ao dia.\n7. Avaliar hemodiálise precoce com nefrologia se oligúria, creatinina em ascensão, hipercalemia ou acidose.\n8. Cuidados: SpO₂ contínua e FR de 2/2 h (hemoptise/dispneia → UTI); diurese horária; PA de 2/2 h; creatinina, ureia, potássio, sódio, hemograma e bilirrubinas diários."
  },
  orientacoesRetorno: [
    "Tomar o antibiótico até o fim; beber bastante líquido",
    "Voltar imediatamente se: falta de ar, tosse com sangue, urinar pouco, olhos ou pele amarelos, sangramentos, tontura ou desmaio, confusão",
    "Retornar em 1 a 3 dias para reavaliação e exames, mesmo melhorando",
    "Prevenção: evitar contato com água de enchente e lama; usar botas e luvas na limpeza; guardar lixo fechado e alimentos em recipientes fechados; desinfetar com água sanitária (2 copos de 200 mL em 1 balde de 20 L)"
  ],
  fontes: [
    "Ministério da Saúde — Leptospirose: diagnóstico e manejo clínico (2014)",
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed.: leptospirose (2023/2024)",
    "OMS/ILS — Human leptospirosis: guidance for diagnosis, surveillance and control (2003)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

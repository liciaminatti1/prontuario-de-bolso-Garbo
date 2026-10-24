// Trauma raquimedular e coluna cervical
registrarFicha({
  id: "trauma-raquimedular",
  especialidade: "trauma",
  caminho: "ps",
  publico: "adulto",
  titulo: "Trauma raquimedular e coluna cervical",
  resumo: "Suspeita de lesão de coluna ou medula após trauma: restrição de movimento, regras para dispensar imagem cervical (NEXUS, Canadian C-spine), exames e manejo do choque neurogênico.",
  palavrasChave: "trauma raquimedular trm coluna cervical lesao medular nexus canadian c spine regra canadense colar cervical prancha restricao de movimento choque neurogenico choque medular tetraplegia paraplegia",
  critico: {
    tempo: "Restringir movimento da coluna",
    texto: "Mantenha a coluna alinhada e role em bloco até excluir lesão. Hipotensão com bradicardia e pele quente = choque neurogênico, mas exclua hemorragia antes."
  },
  alarmes: [
    "Déficit motor ou sensitivo, parestesias, priapismo, perda do tônus anal",
    "Hipotensão com bradicardia e pele quente (choque neurogênico)",
    "Respiração diafragmática / paradoxal (lesão cervical alta), queda da capacidade vital",
    "Dor na linha média da coluna após mecanismo de risco",
    "Idoso com queda da própria altura e dor cervical (fratura de odontoide)",
    "Espondilite anquilosante ou hiperostose (fratura instável com trauma mínimo)"
  ],
  condutaInicial: [
    "xABCDE com estabilização manual em linha durante intubação e manobras (ver ficha politrauma-abcde)",
    "Restrição de movimento: colar cervical bem ajustado; prancha rígida só para transporte e extricação — retirar assim que possível (úlcera de pressão, desconforto respiratório)",
    "Rolar em bloco (4 pessoas) para examinar o dorso e palpar processos espinhosos",
    "Aplicar NEXUS ou Canadian C-spine para decidir imagem (ver tabelas)",
    "Exame neurológico completo: força nos 4 membros, nível sensitivo, reflexos, toque retal (tônus e sensibilidade perianal)",
    "Hipotensão: tratar primeiro como hemorrágica; se choque neurogênico, volume e depois noradrenalina",
    "Sonda vesical (retenção urinária) e sonda gástrica (íleo); prevenir hipotermia e úlcera de pressão",
    "Lesão confirmada ou déficit neurológico: neurocirurgia/ortopedia de coluna e transferência"
  ],
  fataisExcluir: [
    "Insuficiência respiratória (lesão acima de C5)",
    "Hemorragia oculta mascarada (sem dor abdominal pela anestesia, sem taquicardia)",
    "Lesão de artéria vertebral ou carótida (déficit fora do padrão medular)",
    "Lesão instável sem déficit (risco de piorar com mobilização)"
  ],
  proximaDecisao: "Critérios de baixo risco (NEXUS ou Canadian) presentes e rotação ativa de 45° sem dor → retirar colar sem imagem. Senão → TC de coluna cervical. Déficit neurológico ou suspeita ligamentar → RM e neurocirurgia.",
  clinica: {
    anamnese: [
      "Mecanismo: queda de altura, mergulho em água rasa, colisão em alta velocidade, capotamento, ejeção, carga axial",
      "Dor cervical/dorsal, parestesia, fraqueza transitória após o trauma",
      "Doenças de coluna (espondilite anquilosante, artrite reumatoide, osteoporose)",
      "Intoxicação, TCE ou lesão dolorosa que distrai (invalidam o exame clínico)"
    ],
    exameFisico: [
      "Palpação da linha média (processos espinhosos) e degraus",
      "Força por miótomos: C5 (flexão do cotovelo), C6 (extensão do punho), C7 (extensão do cotovelo), C8 (flexão dos dedos), T1 (abdução do 5º dedo), L2 (flexão do quadril), L3 (extensão do joelho), L4 (dorsiflexão do tornozelo), L5 (extensão do hálux), S1 (flexão plantar)",
      "Nível sensitivo: mamilo T4, xifoide T6, umbigo T10, região inguinal L1",
      "Toque retal: tônus, contração voluntária, sensibilidade perianal (preservação sacral = lesão incompleta)",
      "Reflexo bulbocavernoso (retorno indica fim do choque medular)"
    ],
    diferenciais: [
      { dx: "Choque hemorrágico", pista: "Taquicardia, pele fria; pode coexistir com lesão medular" },
      { dx: "Choque medular", pista: "Perda transitória de reflexos e flacidez abaixo da lesão (não é hemodinâmico)" },
      { dx: "Síndrome medular central", pista: "Idoso, hiperextensão; fraqueza maior nos membros superiores" },
      { dx: "Síndrome de Brown-Séquard", pista: "Perda motora ipsilateral e dor/temperatura contralateral (penetrante)" },
      { dx: "Síndrome medular anterior", pista: "Perda motora e de dor/temperatura com propriocepção preservada" },
      { dx: "Lesão de plexo braquial", pista: "Déficit restrito a um membro superior" }
    ],
    gravidade: [
      "Escala ASIA (AIS): A completa (sem função motora e sensitiva sacral) · B sensitiva incompleta · C motora incompleta (maioria dos músculos < grau 3) · D motora incompleta (≥ grau 3) · E normal",
      "Lesão acima de C3–C5: risco de apneia (nervo frênico)",
      "Choque neurogênico: lesões acima de T6 (perda do tônus simpático)"
    ]
  },
  exames: [
    {
      nome: "TC de coluna cervical",
      pedido: "TC de coluna cervical sem contraste, com reconstruções sagital e coronal (do occipital a T1).",
      porQue: "Exame de escolha quando a imagem é indicada pelas regras de decisão.",
      esperar: "Laudo ou leitura imediata.",
      interpretacao: "Fratura ou desalinhamento → manter colar e chamar neurocirurgia/ortopedia de coluna.",
      limitacoes: "Pode não mostrar lesão ligamentar ou medular pura. RX cervical (3 incidências) só se TC indisponível."
    },
    {
      nome: "TC de coluna torácica e lombar",
      pedido: "TC de coluna torácica e lombar (ou reconstrução a partir da TC de tórax e abdome).",
      porQue: "Dor dorsal/lombar, déficit, mecanismo de alta energia, fratura em outro nível (lesões não contíguas em ~10%).",
      esperar: "—",
      interpretacao: "Fratura instável → restrição de movimento e especialista.",
      limitacoes: "—"
    },
    {
      nome: "Ressonância magnética",
      pedido: "RM de coluna ___ (nível) — trauma com déficit neurológico.",
      porQue: "Avaliar medula, ligamentos, disco e hematoma.",
      esperar: "Conforme disponibilidade; não atrasar transferência.",
      interpretacao: "Compressão medular → descompressão precoce (idealmente em até 24 h).",
      limitacoes: "Paciente estável; incompatibilidade com metais."
    },
    {
      nome: "Angiotomografia cervical",
      pedido: "Angiotomografia de vasos cervicais.",
      porQue: "Fratura de forame transverso, subluxação, fratura de C1–C3 ou déficit não explicado (lesão vascular cerebrovascular contusa).",
      esperar: "—",
      interpretacao: "Dissecção → antiagregação ou anticoagulação conforme especialista.",
      limitacoes: "Contraste iodado."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide (Ringer lactato ou SF 0,9%)",
      linha: "l1",
      dose: "500–1.000 mL",
      via: "IV",
      intervalo: "Bolus e reavaliar",
      duracao: "—",
      monitorizacao: "PA, FC, diurese, congestão",
      contraindicacoes: "Excesso de volume: edema pulmonar (o problema no choque neurogênico é vasodilatação)",
      ajustes: "Excluir hemorragia antes de atribuir hipotensão à medula"
    },
    {
      droga: "Noradrenalina 4 mg/4 mL",
      linha: "l1",
      dose: "0,05–0,5 mcg/kg/min, titular",
      via: "IV em bomba (central ou periférica calibrosa temporariamente)",
      intervalo: "Contínuo",
      duracao: "Conforme alvo pressórico",
      monitorizacao: "PA invasiva se disponível, FC, perfusão",
      contraindicacoes: "Hipovolemia não corrigida",
      ajustes: "Diluição: 16 mg (4 ampolas) + SG 5% 234 mL = 64 mcg/mL. Alvo: PAM 85–90 mmHg por 7 dias (AANS/CNS 2013) ou PAM ≥ 75–80 sem passar de 90–95 por 3–7 dias (AO Spine 2024)"
    },
    {
      droga: "Atropina 0,5 mg/mL",
      linha: "adj",
      dose: "0,5–1 mg",
      via: "IV",
      intervalo: "A cada 3–5 min (máx 3 mg)",
      duracao: "—",
      monitorizacao: "FC, ECG",
      contraindicacoes: "—",
      ajustes: "Bradicardia sintomática (lesão cervical, aspiração traqueal pode desencadear). Refratária: marca-passo transcutâneo ou adrenalina/dopamina em infusão"
    },
    {
      droga: "Metilprednisolona em alta dose",
      linha: "ci",
      dose: "Não usar de rotina",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Aumenta infecção, hemorragia digestiva e hiperglicemia sem benefício claro",
      ajustes: "AANS/CNS 2013: não recomendada. AO Spine 2017 cita como opção em casos selecionados (até 8 h, 24 h de infusão) — decisão exclusiva do neurocirurgião"
    },
    {
      droga: "Enoxaparina",
      linha: "adj",
      dose: "40 mg (ou 30 mg de 12/12 h)",
      via: "SC",
      intervalo: "1 vez ao dia",
      duracao: "Conforme especialista (risco alto de TEV)",
      monitorizacao: "Plaquetas, sangramento",
      contraindicacoes: "Sangramento ativo; iniciar após liberação do neurocirurgião (em geral 24–72 h)",
      ajustes: "ClCr < 30: 20 mg/dia ou heparina não fracionada 5.000 UI SC de 8/8 h"
    }
  ],
  destino: {
    agora: [
      "Restrição de movimento, estabilização hemodinâmica e respiratória",
      "Neurocirurgia/ortopedia de coluna se lesão ou déficit"
    ],
    reavaliar: [
      "Exame neurológico seriado (a cada 1–4 h nas primeiras 24 h)",
      "Capacidade vital / FR em lesões cervicais (intubar se fadiga, CV em queda, hipercapnia)"
    ],
    alta: [
      "Coluna liberada clinicamente ou TC normal, sem déficit e sem dor significativa",
      "Dor persistente com TC normal: colar e reavaliação com especialista ou RM"
    ],
    observacao: [
      "Dor cervical com TC normal em paciente não avaliável (intoxicado): manter colar e reexaminar quando sóbrio"
    ],
    internacao: [
      "Fratura instável, déficit neurológico (UTI se lesão cervical ou choque neurogênico)"
    ],
    transferencia: [
      "Sem neurocirurgia/ortopedia de coluna: transferir com colar, prancha ou colchão a vácuo e via aérea segura"
    ]
  },
  prescricao: {
    hospitalar: "TRAUMA RAQUIMEDULAR (adulto; peso: ___ kg)\n1. Dieta zero.\n2. Colar cervical rígido; rolamento em bloco; retirar da prancha rígida; colchão piramidal; mudança de decúbito em bloco de 2/2 h.\n3. Monitor, oximetria, PA de 15/15 min (PAI se choque).\n4. O₂ para SpO₂ ≥ 94%; fisioterapia respiratória.\n5. Ringer lactato 500 mL IV em bolus; repetir conforme resposta e ausculta.\n6. Se choque neurogênico: noradrenalina 4 mg/4 mL — 4 ampolas + SG 5% 234 mL (64 mcg/mL) IV em bomba, iniciar 0,05 mcg/kg/min (70 kg ≈ 3,3 mL/h) e titular para PAM 85–90 mmHg.\n7. Atropina 0,5 mg IV se FC < 50 com hipotensão; repetir a cada 3–5 min (máx 3 mg).\n8. Dipirona 1 g IV de 6/6 h; morfina 2–4 mg IV de 4/4 h se dor intensa.\n9. Omeprazol 40 mg IV 1 vez ao dia (profilaxia de úlcera de estresse).\n10. Sonda vesical de demora; sonda nasogástrica aberta se distensão (orogástrica se suspeita de fratura de base de crânio).\n11. Profilaxia de TEV mecânica (compressão pneumática) desde a admissão; química quando liberada pela neurocirurgia.\n12. Controles: exame neurológico (força, nível sensitivo) de 4/4 h; diurese horária; temperatura; glicemia capilar de 6/6 h."
  },
  orientacoesRetorno: [
    "Se a coluna foi liberada: dor muscular no pescoço pode durar dias; usar analgésico e calor local",
    "Voltar imediatamente se: fraqueza, formigamento ou dormência nos braços ou pernas, dificuldade para urinar ou evacuar, dor que piora muito",
    "Usar o colar exatamente como orientado (inclusive para dormir) quando prescrito",
    "Retorno com ortopedia ou neurocirurgia na data marcada"
  ],
  tabelas: [
    {
      titulo: "NEXUS — dispensa imagem cervical se TODOS presentes",
      colunas: ["Critério de baixo risco"],
      linhas: [
        ["Sem dor à palpação da linha média posterior"],
        ["Sem déficit neurológico focal"],
        ["Nível de consciência normal"],
        ["Sem sinais de intoxicação"],
        ["Sem lesão dolorosa que distraia"]
      ],
      nota: "Válido para adultos; usado também em crianças maiores com cautela. Em idosos (≥ 65) a sensibilidade é menor — preferir Canadian C-spine."
    },
    {
      titulo: "Canadian C-spine Rule (adulto alerta, Glasgow 15, estável)",
      colunas: ["Passo", "Pergunta", "Se sim"],
      linhas: [
        ["1. Alto risco", "Idade ≥ 65, mecanismo perigoso ou parestesias nos membros?", "Imagem"],
        ["2. Baixo risco", "Colisão traseira simples, sentado no PS, deambulou em algum momento, dor cervical de início tardio, ou sem dor na linha média?", "Se nenhum: imagem. Se algum: ir ao passo 3"],
        ["3. Rotação", "Consegue rodar ativamente o pescoço 45° para os dois lados?", "Sim: sem imagem. Não: imagem"]
      ],
      nota: "Mecanismo perigoso: queda ≥ 1 m ou 5 degraus, carga axial na cabeça (mergulho), colisão em alta velocidade (> 100 km/h), capotamento ou ejeção, veículo motorizado recreativo, colisão de bicicleta. Não se aplica a < 16 anos, gestantes, déficit agudo ou doença de coluna prévia."
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "Hoffman JR et al. — NEXUS (N Engl J Med, 2000); Stiell IG et al. — Canadian C-spine Rule (JAMA 2001; N Engl J Med 2003)",
    "AANS/CNS — Guidelines for the Management of Acute Cervical Spine and Spinal Cord Injuries (Neurosurgery, 2013)",
    "AO Spine/Praxis — Clinical practice guideline on hemodynamic management in acute spinal cord injury (Global Spine J, 2024)",
    "ACS/ACEP/NAEMT — Joint position statement on spinal motion restriction (2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

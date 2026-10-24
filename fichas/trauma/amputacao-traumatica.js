// Amputação traumática
registrarFicha({
  id: "amputacao-traumatica",
  especialidade: "trauma",
  caminho: "ps",
  publico: "adulto",
  titulo: "Amputação traumática e conservação do segmento",
  resumo: "Amputação completa ou parcial de membro ou dedo: controle da hemorragia (torniquete), reanimação, conservação correta do segmento amputado e transferência rápida para serviço de reimplante.",
  palavrasChave: "amputacao traumatica reimplante dedo mao membro amputado torniquete conservacao segmento gelo coto microcirurgia esmagamento",
  critico: {
    tempo: "Torniquete + segmento no frio",
    texto: "Sangramento do coto: compressão direta ou torniquete (anotar hora). Segmento: gaze úmida em SF, saco plástico fechado, saco dentro de água com gelo — nunca em contato direto com o gelo."
  },
  alarmes: [
    "Sangramento ativo do coto apesar de compressão",
    "Choque (amputação de membro proximal)",
    "Torniquete há mais de 2 h",
    "Amputação parcial com segmento frio e sem perfusão",
    "Esmagamento extenso ou lesões associadas que ameaçam a vida (prioridade sobre o reimplante)"
  ],
  condutaInicial: [
    "xABCDE: hemorragia primeiro — compressão direta forte; se falhar, torniquete 5–7 cm acima da lesão (não sobre articulação), apertar até parar o sangramento e o pulso distal; anotar hora; não afrouxar periodicamente",
    "Não clampear vasos às cegas; não ligar vasos (prejudica o reimplante)",
    "Coto: irrigar com SF 0,9%, cobrir com gaze úmida e curativo compressivo; elevar",
    "Amputação parcial: alinhar, imobilizar em tala sem torcer o pedículo remanescente",
    "Segmento: ver tabela de conservação",
    "Antibiótico (cefazolina) e profilaxia de tétano (ficha tetano-profilaxia)",
    "Analgesia IV; dieta zero; RX do coto e do segmento",
    "Contato precoce com serviço de reimplante/microcirurgia (cirurgia de mão ou plástica) via regulação"
  ],
  fataisExcluir: [
    "Choque hemorrágico",
    "Lesões associadas (tórax, abdome, TCE) — a vida tem prioridade sobre o membro",
    "Síndrome de esmagamento e rabdomiólise (hipercalemia, lesão renal)"
  ],
  proximaDecisao: "Candidato a reimplante → transferência imediata ao centro de referência com o segmento corretamente conservado. Não candidato → regularização do coto pela ortopedia/cirurgia.",
  clinica: {
    anamnese: [
      "Hora exata do trauma e da colocação do torniquete",
      "Mecanismo: corte limpo (melhor prognóstico) x esmagamento/avulsão",
      "Mão dominante, profissão, tabagismo, comorbidades",
      "Vacina antitetânica"
    ],
    exameFisico: [
      "Coto: sangramento, contaminação, exposição óssea",
      "Segmento: integridade, contaminação, esmagamento",
      "Amputação parcial: perfusão distal (cor, enchimento, temperatura)",
      "Exame neurovascular do restante do membro"
    ],
    diferenciais: [
      { dx: "Amputação parcial com segmento viável", pista: "Ponte de pele/tendão com perfusão presente: revascularização em vez de reimplante" }
    ],
    gravidade: [
      "Boas indicações de reimplante: polegar, múltiplos dedos, mão/punho/antebraço, qualquer segmento em criança, dedo isolado distal à inserção do flexor superficial",
      "Contraindicações relativas: esmagamento ou avulsão grave, contaminação maciça, isquemia prolongada, lesões graves associadas, comorbidades graves, dedo isolado proximal (exceto polegar)",
      "Tolerância à isquemia: maior em dedos (sem músculo) do que em segmentos proximais com massa muscular; o frio prolonga a tolerância"
    ]
  },
  exames: [
    {
      nome: "RX do coto e do segmento",
      pedido: "RX do membro (coto) em AP e perfil e RX do segmento amputado (dentro do saco).",
      porQue: "Avaliar nível e cominuição óssea para planejar reimplante.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Não atrasar a transferência."
    },
    {
      nome: "Laboratório",
      pedido: "Tipagem ABO/Rh, hemograma, coagulograma, ureia, creatinina, potássio, CK, gasometria com lactato.",
      porQue: "Perda sanguínea, preparo cirúrgico e rabdomiólise.",
      esperar: "—",
      interpretacao: "Hipercalemia e CK alta → síndrome de esmagamento.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Torniquete",
      linha: "l1",
      dose: "5–7 cm acima da lesão (ou o mais proximal possível se ponto de sangramento incerto)",
      via: "Externo",
      intervalo: "Não afrouxar para 'descansar' o membro",
      duracao: "Retirar só em ambiente cirúrgico ou após controle por outro meio; idealmente < 2 h",
      monitorizacao: "Sangramento, hora de colocação",
      contraindicacoes: "—",
      ajustes: "Se o sangramento persiste, apertar mais ou colocar segundo torniquete logo acima"
    },
    {
      droga: "Cefazolina",
      linha: "l1",
      dose: "2 g (3 g se ≥ 120 kg)",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Conforme cirurgião (em geral 24 h; mais se contaminação)",
      monitorizacao: "—",
      contraindicacoes: "Anafilaxia a beta-lactâmico: clindamicina 900 mg IV de 8/8 h",
      ajustes: "Contaminação grosseira: tratar como fratura exposta tipo III (ver ficha fratura-exposta)"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "2–4 mg (0,05–0,1 mg/kg)",
      via: "IV",
      intervalo: "A cada 5–10 min até controle",
      duracao: "—",
      monitorizacao: "FR, PA",
      contraindicacoes: "Hipotensão não corrigida (fentanil ou cetamina)",
      ajustes: "Dor do torniquete é intensa: analgesia generosa"
    },
    {
      droga: "Profilaxia de tétano",
      linha: "l1",
      dose: "Conforme histórico",
      via: "IM",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Ferimento de alto risco. Ver ficha tetano-profilaxia"
    }
  ],
  destino: {
    agora: [
      "Controle da hemorragia e reanimação",
      "Contato com centro de reimplante pela regulação"
    ],
    reavaliar: [
      "Sangramento do coto, sinais vitais, tempo de torniquete"
    ],
    alta: [
      "Amputação de ponta de dedo (polpa) sem exposição óssea relevante, tratada com curativo, com retorno em 48 h"
    ],
    observacao: ["—"],
    internacao: [
      "Toda amputação proximal à falange distal ou com exposição óssea"
    ],
    transferencia: [
      "Candidato a reimplante: transferência imediata, com paciente estabilizado, segmento conservado, horário do trauma e do torniquete, RX e antibiótico feitos"
    ]
  },
  prescricao: {
    hospitalar: "AMPUTAÇÃO TRAUMÁTICA (adulto; peso: ___ kg)\n1. Dieta zero.\n2. Torniquete colocado às ___:___ h (não afrouxar); ou curativo compressivo no coto com gaze úmida em SF 0,9%; membro elevado.\n3. Monitor, oximetria; 2 acessos venosos.\n4. Ringer lactato aquecido conforme hemodinâmica; sangue se choque (ver ficha choque-hemorragico).\n5. Cefazolina 2 g + SF 0,9% 100 mL IV em 30 min AGORA e de 8/8 h.\n6. Profilaxia de tétano conforme cartão vacinal (dT ± IGHAT).\n7. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV a cada 5–10 min até controle da dor.\n8. Ondansetrona 4 mg IV de 8/8 h se náusea.\n9. SEGMENTO AMPUTADO: lavar com SF 0,9%, envolver em gaze umedecida com SF 0,9%, colocar em saco plástico fechado e identificado; colocar este saco dentro de outro recipiente com água e gelo (sem contato direto do tecido com o gelo). Anotar hora.\n10. Controles: sinais vitais de 15/15 min; sangramento do coto; tempo de torniquete."
  },
  orientacoesRetorno: [
    "Após alta de lesão de ponta de dedo: manter o curativo limpo, mão elevada, trocar curativo conforme orientado",
    "Voltar imediatamente se: sangramento que não para com compressão, febre, pus, vermelhidão que se espalha, dor que piora",
    "Acompanhamento com cirurgia de mão/ortopedia e fisioterapia"
  ],
  tabelas: [
    {
      titulo: "Conservação do segmento amputado",
      colunas: ["Fazer", "Não fazer"],
      linhas: [
        ["Lavar com SF 0,9% para retirar sujeira grosseira", "Esfregar ou usar antisséptico no segmento"],
        ["Envolver em gaze umedecida (não encharcada) com SF 0,9%", "Mergulhar o segmento direto em soro, água ou gelo"],
        ["Colocar em saco plástico fechado e identificado", "Usar gelo seco ou congelar"],
        ["Saco dentro de recipiente com água e gelo (~4 °C)", "Deixar o segmento sem refrigeração"],
        ["Enviar junto com o paciente, com hora do trauma", "Separar paciente e segmento no transporte"]
      ],
      nota: "Amputação parcial: não seccionar pontes de tecido; imobilizar e resfriar externamente sem gelo direto."
    }
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "NAEMT — PHTLS, 10ª ed. (2023): controle de hemorragia e torniquete",
    "American Society for Surgery of the Hand — Replantation (orientações e revisão, 2019)",
    "ACS — Stop the Bleed / Hartford Consensus (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

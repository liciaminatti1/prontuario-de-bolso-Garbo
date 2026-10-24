// Segurança do paciente: metas internacionais, medicamentos, cirurgia segura e quedas
registrarFicha({
  id: "seguranca-paciente",
  especialidade: "referencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Segurança do paciente: medicamentos, identificação, cirurgia segura e quedas",
  resumo: "Práticas seguras do Programa Nacional de Segurança do Paciente (PNSP): identificação correta, comunicação efetiva, segurança na prescrição e administração de medicamentos (alta vigilância, nomes parecidos, dupla checagem), cirurgia segura (checklist OMS), prevenção de quedas e lesão por pressão, e notificação de incidentes.",
  palavrasChave: "seguranca do paciente pnsp metas internacionais identificacao do paciente pulseira medicamentos potencialmente perigosos mpp alta vigilancia ismp lasa nomes parecidos dupla checagem 9 certos cirurgia segura checklist oms time out sign in sign out prevencao de quedas morse lesao por pressao higiene das maos notificacao de incidentes notivisa evento adverso",
  critico: {
    tempo: "2 identificadores sempre",
    texto: "Antes de qualquer medicação, exame, transfusão ou procedimento: confirmar o paciente por pelo menos 2 identificadores (nome completo e data de nascimento), nunca pelo número do leito. Medicamentos de alta vigilância exigem dupla checagem independente."
  },
  alarmes: [
    "Cloreto de potássio concentrado, insulina, heparina, opioides, anticoagulantes, sulfato de magnésio, quimioterápicos, bloqueadores neuromusculares: erro com esses medicamentos causa dano grave",
    "Prescrição verbal: só em emergência, com repetição em voz alta (read-back) e registro posterior",
    "Paciente sem pulseira de identificação ou com dados divergentes: não administrar até resolver",
    "Queda com trauma de crânio em paciente anticoagulado: TC de crânio",
    "Incidente com dano: atender o paciente, comunicar com transparência (disclosure) e notificar ao Núcleo de Segurança do Paciente"
  ],
  conduta: [
    "Identificação: pulseira com nome completo e data de nascimento (e nome da mãe no recém-nascido); conferir verbalmente ('Qual é o seu nome completo e data de nascimento?') antes de cada cuidado",
    "Comunicação efetiva: passagem de plantão estruturada (SBAR / I-PASS); resultados críticos comunicados e repetidos (read-back)",
    "Prescrição segura: nome genérico, sem abreviaturas perigosas, dose com unidade por extenso ('unidades', não 'U'), zero à esquerda (0,5 mg) e nunca zero à direita (5 mg, não 5,0 mg), via, diluição, velocidade, intervalo, duração; peso na pediatria; alergias registradas",
    "Administração: conferir os 9 certos — paciente, medicamento, via, hora, dose, registro, orientação, forma farmacêutica, resposta",
    "Medicamentos de alta vigilância (MPP): armazenamento separado e sinalizado, KCl concentrado fora das enfermarias, padronizar concentrações, bombas de infusão, dupla checagem independente",
    "Nomes parecidos (LASA): usar letras maiúsculas parciais (tall man: DOPamina x DOBUTamina), separar no estoque, prescrever com indicação",
    "Cirurgia e procedimentos seguros: checklist da OMS em 3 momentos (antes da indução, antes da incisão/time-out, antes de sair da sala); marcar a lateralidade",
    "Higiene das mãos nos 5 momentos (OMS): antes de tocar o paciente, antes de procedimento limpo/asséptico, após risco de exposição a fluidos, após tocar o paciente, após tocar superfícies próximas",
    "Prevenção de quedas: avaliar risco na admissão (escala de Morse no adulto, Humpty Dumpty na criança), grades elevadas, cama baixa, calçado, acompanhar ao banheiro, revisar sedativos e hipotensores",
    "Prevenção de lesão por pressão: escala de Braden, mudança de decúbito, colchão adequado, pele seca, nutrição",
    "Notificar incidentes e eventos adversos ao Núcleo de Segurança do Paciente (NSP) do serviço; o NSP notifica no Notivisa (ANVISA). A notificação é para aprender, não para punir"
  ],
  tabelas: [
    {
      titulo: "Medicamentos de alta vigilância (exemplos, lista ISMP Brasil)",
      colunas: ["Classe/medicamento", "Erro típico", "Barreira"],
      linhas: [
        ["Cloreto de potássio 19,1% (e outros eletrólitos concentrados)", "Bolus IV — parada cardíaca", "Não deixar na enfermaria; bolsas pré-diluídas; bomba de infusão; dupla checagem"],
        ["Insulinas", "Confundir unidade 'U' com zero; trocar tipo de insulina; seringa errada", "Escrever 'unidades'; seringa de insulina; dupla checagem; glicemia antes"],
        ["Heparina e enoxaparina; anticoagulantes orais", "Dose 10× maior; duplicidade", "Padronizar concentração; protocolos com TTPa/anti-Xa; ajuste renal"],
        ["Opioides (morfina, fentanil, metadona)", "Confusão de concentração; sedação excessiva", "Escala de sedação, naloxona disponível"],
        ["Sedativos IV (midazolam) e bloqueadores neuromusculares", "Administrar sem via aérea garantida", "Armazenar separado com alerta; uso só com equipe e material de via aérea"],
        ["Sulfato de magnésio 50%", "Superdose na pré-eclâmpsia", "Protocolo padronizado, bomba de infusão, reflexos e diurese"],
        ["Ocitocina IV", "Taquissistolia por concentração errada", "Diluição padronizada em bomba"],
        ["Quimioterápicos, contrastes, trombolíticos", "Dose e via erradas", "Protocolos e dupla checagem"]
      ]
    },
    {
      titulo: "Nomes parecidos (LASA) — exemplos com tall man",
      colunas: ["Pares que confundem", "Risco"],
      linhas: [
        ["DOPamina x DOBUTamina", "Efeitos hemodinâmicos diferentes"],
        ["hidrALAZINA x hidrOXIzina", "Anti-hipertensivo x anti-histamínico"],
        ["clorproPAMIDA x clorproMAZINA", "Hipoglicemiante x antipsicótico"],
        ["ePHEDrina x EPINEFrina (adrenalina)", "Doses e indicações diferentes"],
        ["NORepinefrina x EPINEFrina", "Vasopressor x adrenalina de anafilaxia/PCR"],
        ["metilPREDNISolona x metilTESTOSTERona", "—"],
        ["Insulina NPH x insulina Regular", "Hipoglicemia"]
      ]
    },
    {
      titulo: "Checklist de cirurgia segura (OMS) — resumo",
      colunas: ["Momento", "Conferir"],
      linhas: [
        ["Antes da indução anestésica (sign in)", "Identidade, procedimento, local e consentimento confirmados com o paciente; lateralidade marcada; checagem do equipamento anestésico e oxímetro; alergias; via aérea difícil/risco de aspiração; risco de perda sanguínea > 500 mL (7 mL/kg na criança) e acesso/hemoderivados"],
        ["Antes da incisão (time-out)", "Equipe se apresenta; confirmar paciente, procedimento e local; antibiótico profilático nos últimos 60 min; eventos críticos previstos (cirurgião, anestesista, enfermagem); imagens essenciais disponíveis"],
        ["Antes de sair da sala (sign out)", "Nome do procedimento registrado; contagem de compressas, instrumentais e agulhas correta; amostras identificadas; problemas com equipamentos; cuidados pós-operatórios combinados"]
      ],
      nota: "O time-out também se aplica a procedimentos à beira-leito (drenagem torácica, punção lombar, acesso central, paracentese)."
    }
  ],
  prescricao: {
    hospitalar: "MODELO DE PRESCRIÇÃO SEGURA (exemplo de alta vigilância)\nPaciente: [nome completo] Data de nascimento: [ ] Peso: [ ] kg Alergias: [ ]\n1. Cloreto de potássio 19,1% 10 mL (25 mEq) + SF 0,9% 500 mL — IV em bomba de infusão a 100 mL/h (5 mEq/h), em 5 h. NÃO FAZER EM BOLUS. Dupla checagem pela enfermagem.\n2. Insulina regular 4 (quatro) unidades SC se glicemia capilar 201–250 mg/dL (escrever 'unidades' por extenso).\n3. Enoxaparina 40 mg SC 1 vez ao dia (ajustar se TFG < 30 mL/min).\n4. Cuidados: pulseira de identificação conferida; risco de queda [Morse: ]: grades elevadas, acompanhar ao banheiro.\n\nMODELO DE NOTIFICAÇÃO DE INCIDENTE (NSP)\nData/hora/local: [ ]. Tipo: [medicação / identificação / queda / procedimento / outro]. Descrição objetiva: [ ]. Dano: [nenhum / leve / moderado / grave / óbito]. Ações imediatas: [ ]. Paciente/família informados: [sim]."
  },
  orientacoesRetorno: [
    "Paciente e família: confirmar o nome do paciente sempre que alguém for dar remédio ou fazer exame; perguntar 'para que serve este remédio?'",
    "Levar a lista de todos os remédios em uso (inclusive chás e vitaminas) em toda consulta",
    "Informar alergias a cada atendimento",
    "Idoso: retirar tapetes, usar calçado fechado, luz noturna no caminho do banheiro, barras de apoio",
    "Avisar a equipe se algo parecer diferente do habitual (cor do comprimido, dose, horário)"
  ],
  fontes: [
    "Ministério da Saúde/ANVISA/Fiocruz — Programa Nacional de Segurança do Paciente (Portaria GM/MS nº 529/2013) e Protocolos Básicos de Segurança do Paciente (2013)",
    "ANVISA — RDC nº 36/2013 (ações para a segurança do paciente e Núcleos de Segurança do Paciente)",
    "ISMP Brasil — Medicamentos potencialmente perigosos de uso hospitalar: lista atualizada (2019/2022) e Nomes de medicamentos com grafia ou som semelhantes (2014)",
    "OMS — Surgical Safety Checklist (2009) e Global Patient Safety Action Plan 2021–2030",
    "OMS — Five Moments for Hand Hygiene (2009)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

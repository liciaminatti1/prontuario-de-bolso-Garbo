// Doença de Parkinson
registrarFicha({
  id: "doenca-parkinson",
  especialidade: "neurologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Doença de Parkinson",
  resumo: "Síndrome parkinsoniana (bradicinesia + tremor de repouso e/ou rigidez) progressiva e assimétrica, com boa resposta à levodopa. Diagnóstico clínico pelos critérios MDS 2015; tratamento sintomático com levodopa, agonistas dopaminérgicos e IMAO-B.",
  palavrasChave: "parkinson doenca de parkinson parkinsonismo tremor de repouso bradicinesia rigidez roda denteada mds 2015 levodopa carbidopa benserazida pramipexol rasagilina selegilina amantadina entacapona biperideno discinesia flutuacao motora wearing off alucinacao quetiapina parkinsonismo induzido por drogas",
  critico: {
    tempo: "Nunca suspender levodopa de vez",
    texto: "Retirada abrupta de levodopa (jejum, cirurgia, internação) pode causar síndrome parkinsonismo-hiperpirexia, semelhante à síndrome neuroléptica maligna. Manter horários na internação; se via oral impossível, usar sonda."
  },
  alarmes: [
    "Febre, rigidez intensa, confusão e CPK alta após suspensão da levodopa (síndrome parkinsonismo-hiperpirexia — PS)",
    "Alucinações, delirium ou psicose (infecção, medicação nova, progressão)",
    "Quedas recorrentes, engasgos e pneumonia aspirativa",
    "Hipotensão ortostática com síncope",
    "Parkinsonismo de evolução rápida, simétrico, quedas precoces, disautonomia grave ou paralisia do olhar vertical (parkinsonismo atípico)",
    "Comportamentos impulsivos (jogo, compras, sexualidade, comida) com agonista dopaminérgico"
  ],
  conduta: [
    "Confirmar parkinsonismo: bradicinesia (lentidão com decremento em movimentos repetidos) + tremor de repouso 4–6 Hz e/ou rigidez",
    "Excluir parkinsonismo induzido por drogas: haloperidol, risperidona e outros antipsicóticos, metoclopramida, bromoprida, flunarizina, cinarizina, amiodarona, valproato, lítio. Suspender e reavaliar em semanas a meses",
    "Procurar critérios de exclusão e bandeiras vermelhas (tabela); presentes → neurologia",
    "Não é necessário exame de imagem para diagnóstico típico; TC/RM de crânio se início agudo, sinais focais, piramidais, cerebelares ou atípicos",
    "Encaminhar à neurologia para confirmação no início (sobretudo < 50 anos, dúvida diagnóstica ou forma atípica); a APS pode iniciar levodopa se incapacidade funcional e espera longa",
    "Tratar quando os sintomas atrapalham a vida: levodopa é a droga mais eficaz em qualquer idade; agonistas (pramipexol) e IMAO-B são alternativas no paciente jovem com sintomas leves",
    "Iniciar levodopa em dose baixa, aumentar devagar; tomar 30 min antes ou 1 h após as refeições (proteína reduz absorção)",
    "Flutuações (efeito de fim de dose), discinesias, quedas, demência, psicose: neurologia ajusta (fracionar levodopa, entacapona, amantadina, agonista)",
    "Sintomas não motores: constipação (fibras, água, macrogol), depressão (ISRS), hipotensão ortostática (hidratação, meias, revisar anti-hipertensivos), distúrbio do sono REM, dor",
    "Psicose: reduzir primeiro anticolinérgicos, amantadina e agonistas; se persistir, quetiapina em dose baixa ou clozapina. Nunca haloperidol, risperidona ou metoclopramida",
    "Fisioterapia, fonoaudiologia (fala e deglutição), terapia ocupacional e exercício aeróbico regular",
    "Anticolinérgico (biperideno) só em jovem com tremor predominante; evitar em > 65 anos (confusão, retenção urinária, constipação)"
  ],
  exames: [
    "Diagnóstico clínico; não há exame confirmatório na APS",
    "TSH, vitamina B12, função renal e hepática (comorbidades, diferencial)",
    "Ceruloplasmina e cobre urinário se parkinsonismo < 40–50 anos (doença de Wilson)",
    "TC ou RM de crânio se apresentação atípica (vascular, hidrocefalia de pressão normal, tumor)"
  ],
  diferenciais: [
    "Tremor essencial (tremor postural/cinético bilateral, melhora com álcool, sem bradicinesia)",
    "Parkinsonismo induzido por drogas (simétrico, com uso de bloqueador dopaminérgico)",
    "Parkinsonismo vascular (membros inferiores, marcha, lesões na imagem)",
    "Hidrocefalia de pressão normal (marcha, incontinência, demência)",
    "Atrofia de múltiplos sistemas, paralisia supranuclear progressiva, degeneração corticobasal, demência com corpos de Lewy",
    "Depressão e hipotireoidismo (lentidão)"
  ],
  tratamento: [
    { droga: "Levodopa + benserazida 100/25 mg (ou levodopa + carbidopa 250/25 mg)", linha: "l1", dose: "Iniciar 50 mg de levodopa 2–3×/dia; aumentar a cada 1–2 semanas até 100 mg 3×/dia; ajustar conforme resposta (dose habitual 300–600 mg/dia)", via: "VO", intervalo: "3–4×/dia", duracao: "Contínuo", monitorizacao: "Resposta motora, náusea, hipotensão ortostática, alucinações, discinesias", contraindicacoes: "Glaucoma de ângulo fechado, uso de IMAO não seletivo, melanoma ativo (cautela)", ajustes: "Náusea: tomar com lanche leve no início ou domperidona. Idoso: titulação mais lenta" },
    { droga: "Pramipexol", linha: "alt", dose: "0,125 mg 3×/dia, aumentando semanalmente até 0,5–1,5 mg/dia (máximo 4,5 mg/dia de sal)", via: "VO", intervalo: "3×/dia", duracao: "Contínuo", monitorizacao: "Sonolência súbita, impulsividade, edema, alucinações", contraindicacoes: "Demência, psicose, idoso frágil", ajustes: "Reduzir dose na DRC. Preferir em < 60–65 anos. Retirar devagar (síndrome de abstinência do agonista)" },
    { droga: "Rasagilina", linha: "alt", dose: "1 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "Interações (síndrome serotoninérgica)", contraindicacoes: "Meperidina, tramadol, metadona, dextrometorfano, outros IMAO", ajustes: "Efeito sintomático leve; adjuvante em flutuações. Selegilina 5 mg 2×/dia (manhã e almoço) é alternativa" },
    { droga: "Amantadina", linha: "adj", dose: "100 mg", via: "VO", intervalo: "2×/dia (manhã e almoço)", duracao: "Contínuo", monitorizacao: "Confusão, alucinações, livedo, edema", contraindicacoes: "DRC grave, psicose", ajustes: "Útil para discinesias; ajustar pela função renal" },
    { droga: "Entacapona", linha: "adj", dose: "200 mg junto com cada dose de levodopa", via: "VO", intervalo: "Com cada levodopa", duracao: "Contínuo", monitorizacao: "Discinesias, diarreia, urina alaranjada", contraindicacoes: "Feocromocitoma, IMAO não seletivo", ajustes: "Para efeito de fim de dose (especialista)" },
    { droga: "Haloperidol, risperidona, metoclopramida, bromoprida, flunarizina, cinarizina", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Pioram o parkinsonismo e podem precipitar crise acinética", ajustes: "Náusea: domperidona (atenção ao QT). Psicose: quetiapina 12,5–25 mg à noite ou clozapina" }
  ],
  prescricao: {
    ambulatorial: "USO ORAL\n1. Levodopa + benserazida 100 mg/25 mg ------------------- 1 caixa\n   Semana 1: tomar ½ comprimido 3 vezes ao dia (ex.: 7 h, 12 h e 17 h), 30 minutos antes das refeições.\n   Semana 2 em diante: tomar 1 comprimido 3 vezes ao dia, nos mesmos horários.\n   (Alternativa SUS: levodopa + carbidopa 250/25 mg — ¼ a ½ comprimido 3 vezes ao dia, ajustando.)\n2. Domperidona 10 mg -------------------------------------- 30 comprimidos (se náusea)\n   Tomar 1 comprimido 15–30 minutos antes de cada dose de levodopa, por até 1–2 semanas.\n3. Macrogol 3350 ----------------------------------------- 1 frasco (se constipação)\n   Diluir 1 sachê (ou 1 medida) em água, 1 vez ao dia.\n\nENCAMINHAMENTOS\n4. Neurologia: síndrome parkinsoniana, para confirmação e seguimento.\n5. Fisioterapia, fonoaudiologia e terapia ocupacional."
  },
  orientacoesRetorno: [
    "Tomar a levodopa sempre nos mesmos horários, 30 minutos antes ou 1 hora depois das refeições com carne, leite ou ovos",
    "Nunca parar o remédio de uma vez; se for internado ou operado, avisar a equipe e levar a lista com os horários",
    "Levantar devagar da cama e da cadeira (tontura por pressão baixa); beber bastante água",
    "Exercício físico regular (caminhada, dança, fisioterapia) ajuda tanto quanto o remédio",
    "Avisar se aparecer vontade incontrolável de jogar, comprar ou comer, sono de repente durante o dia, ou se enxergar coisas que não existem",
    "Evitar remédios para enjoo como metoclopramida e bromoprida e para tontura como flunarizina e cinarizina",
    "Procurar o PS se febre com rigidez forte e confusão, engasgos com falta de ar ou quedas com machucado",
    "Retornar em 4–8 semanas para ajustar a dose"
  ],
  encaminhar: [
    "Neurologia: todo caso suspeito para confirmação, início < 50 anos, bandeiras vermelhas, flutuações motoras, discinesias, falha de resposta à levodopa, avaliação de estimulação cerebral profunda",
    "PS: síndrome parkinsonismo-hiperpirexia, psicose aguda, pneumonia aspirativa, quedas com trauma",
    "Fisioterapia, fonoaudiologia, terapia ocupacional, saúde mental (depressão, demência)"
  ],
  tabelas: [
    {
      titulo: "Critérios MDS 2015 (resumo)",
      colunas: ["Grupo", "Itens"],
      linhas: [
        ["Pré-requisito", "Parkinsonismo: bradicinesia + tremor de repouso e/ou rigidez"],
        ["Critérios de suporte", "Resposta clara e drástica à terapia dopaminérgica; discinesia induzida por levodopa; tremor de repouso em membro; perda olfatória ou denervação simpática cardíaca (MIBG)"],
        ["Exclusão absoluta (exemplos)", "Sinais cerebelares; paralisia do olhar vertical para baixo; demência frontotemporal ou afasia progressiva nos 5 primeiros anos; parkinsonismo restrito a MMII por > 3 anos; uso de bloqueador dopaminérgico compatível; ausência de resposta a levodopa em dose alta; perda sensitiva cortical ou apraxia; imagem dopaminérgica normal"],
        ["Bandeiras vermelhas (exemplos)", "Cadeira de rodas em 5 anos; ausência de progressão em 5 anos; disfagia/disartria grave precoce; estridor; disautonomia grave em 5 anos; quedas por instabilidade em 3 anos; anterocolo; sinais piramidais; parkinsonismo simétrico bilateral"]
      ],
      nota: "DP clinicamente estabelecida: nenhuma exclusão absoluta, ≥ 2 critérios de suporte e nenhuma bandeira vermelha. DP clinicamente provável: até 2 bandeiras vermelhas compensadas por igual número de critérios de suporte."
    }
  ],
  fontes: [
    "Movement Disorder Society — MDS Clinical Diagnostic Criteria for Parkinson's Disease (Postuma et al., 2015)",
    "Ministério da Saúde — PCDT Doença de Parkinson (Portaria Conjunta SAS/SCTIE nº 10, 2017)",
    "NICE — Parkinson's disease in adults (NG71, 2017)",
    "MDS Evidence-Based Medicine Review: treatments for motor symptoms of Parkinson's disease (2018) e for non-motor symptoms (2019)",
    "Academia Brasileira de Neurologia — Recomendações para o tratamento da doença de Parkinson (2020)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

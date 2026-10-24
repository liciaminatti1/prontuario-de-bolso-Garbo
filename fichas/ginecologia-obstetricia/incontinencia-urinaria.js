// Incontinência urinária feminina
registrarFicha({
  id: "incontinencia-urinaria",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Incontinência urinária na mulher: esforço, urgência e mista",
  resumo: "Perda involuntária de urina. Esforço: ao tossir, espirrar, rir ou fazer força. Urgência: vontade súbita e forte, com perda antes de chegar ao banheiro (bexiga hiperativa). Mista: as duas. Tratamento inicial na APS: mudanças de hábito, treinamento do assoalho pélvico e treinamento vesical; medicamento para urgência.",
  palavrasChave: "incontinencia urinaria perda de urina incontinencia de esforco incontinencia de urgencia bexiga hiperativa mista urge incontinencia fisioterapia pelvica kegel assoalho pelvico treinamento vesical diario miccional oxibutinina mirabegrona sling",
  alarmes: [
    "Hematúria (sobretudo ≥ 40–50 anos ou fumante): investigar câncer de bexiga",
    "Retenção urinária, jato fraco, esvaziamento incompleto, resíduo alto (transbordamento)",
    "Dor vesical ou pélvica persistente, ITU de repetição",
    "Sintomas neurológicos novos (fraqueza nas pernas, anestesia em sela, alteração intestinal): pensar em compressão medular",
    "Prolapso além do hímen, fístula (perda contínua após cirurgia, parto ou radioterapia)"
  ],
  conduta: [
    "Classificar pela história: perda ao esforço, urgência ou ambas; frequência, volume, uso de absorventes, impacto na vida",
    "Diário miccional de 3 dias (horário, volume urinado, líquidos ingeridos, perdas)",
    "Urina tipo 1 e urocultura: tratar ITU antes de concluir",
    "Revisar medicações (diuréticos, IECA com tosse, sedativos, anticolinérgicos), constipação, diabetes, tosse crônica, mobilidade e cognição",
    "Exame: atrofia genital, prolapso, teste de esforço com tosse com bexiga cheia, avaliação da contração do assoalho pélvico ao toque",
    "Para todas: perda de peso se IMC ≥ 30, reduzir cafeína, ajustar líquidos (sem restringir demais), tratar constipação, parar de fumar",
    "Esforço ou mista: treinamento dos músculos do assoalho pélvico supervisionado por pelo menos 3 meses (fisioterapia pélvica)",
    "Urgência ou mista: treinamento vesical por pelo menos 6 semanas (aumentar gradualmente o intervalo entre micções)",
    "Urgência sem melhora: antimuscarínico (oxibutinina) ou mirabegrona; em idosas, evitar anticolinérgico pelo risco cognitivo",
    "Atrofia genital na pós-menopausa: estrogênio vaginal (melhora urgência e ITU de repetição)",
    "Falha após 3 meses de tratamento conservador ou casos complexos: uroginecologia/urologia (sling de uretra média, toxina botulínica, neuromodulação)"
  ],
  exames: [
    "Urina tipo 1 e urocultura",
    "Glicemia de jejum ou HbA1c se poliúria",
    "Diário miccional de 3 dias",
    "Resíduo pós-miccional (USG de vias urinárias) se suspeita de retenção ou sintomas de esvaziamento",
    "Estudo urodinâmico: só no nível especializado, antes de cirurgia em casos selecionados"
  ],
  diferenciais: [
    "ITU (urgência transitória)",
    "Incontinência por transbordamento (retenção, neuropatia diabética, medicamentos)",
    "Bexiga neurogênica (AVC, Parkinson, esclerose múltipla, lesão medular)",
    "Fístula vesicovaginal",
    "Poliúria (diabetes, diurético, ingestão excessiva), incontinência funcional (mobilidade, demência)"
  ],
  tratamento: [
    {
      droga: "Oxibutinina",
      linha: "l1",
      dose: "2,5–5 mg",
      via: "VO",
      intervalo: "8/8 a 12/12 h (máx. 20 mg/dia)",
      duracao: "Reavaliar em 4–8 semanas",
      monitorizacao: "Boca seca, constipação, retenção urinária, cognição",
      contraindicacoes: "Glaucoma de ângulo fechado, retenção urinária, miastenia gravis, obstrução gastrointestinal",
      ajustes: "Idosas e frágeis: evitar (critérios de Beers) ou usar a menor dose; preferir mirabegrona se disponível"
    },
    {
      droga: "Mirabegrona",
      linha: "alt",
      dose: "25–50 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Reavaliar em 8 semanas",
      monitorizacao: "PA",
      contraindicacoes: "HAS grave não controlada (PAS ≥ 180 ou PAD ≥ 110)",
      ajustes: "Não disponível no SUS na maioria dos locais. Iniciar 25 mg; ajustar em DRC e hepatopatia"
    },
    {
      droga: "Estriol creme vaginal 1 mg/g",
      linha: "adj",
      dose: "0,5 g",
      via: "Vaginal",
      intervalo: "Diário por 3 semanas, depois 2×/semana",
      duracao: "Manutenção",
      monitorizacao: "Sangramento genital (investigar)",
      contraindicacoes: "Sangramento genital inexplicado, câncer de endométrio ou de mama ativo (discutir com oncologia)",
      ajustes: "Pós-menopausa com atrofia genital, urgência ou ITU de repetição"
    }
  ],
  prescricao: {
    ambulatorial: "INCONTINÊNCIA URINÁRIA\n1. Encaminhamento para fisioterapia pélvica: treinamento dos músculos do assoalho pélvico (incontinência de esforço/mista).\n2. Diário miccional de 3 dias (anotar horário e volume de cada micção, líquidos ingeridos e perdas).\n\nURGÊNCIA (BEXIGA HIPERATIVA) SEM MELHORA COM TREINAMENTO VESICAL\nUSO ORAL\n3. Oxibutinina 5 mg ------------------------------- 60 comprimidos\n   Tomar meio comprimido (2,5 mg) de 12 em 12 horas por 1 semana; se tolerar, 1 comprimido de 12 em 12 horas. Pode dar boca seca e intestino preso.\n\nATROFIA GENITAL (pós-menopausa)\nUSO VAGINAL\n4. Estriol 1 mg/g creme vaginal -------------------- 1 bisnaga\n   Aplicar 0,5 g (meio aplicador) dentro da vagina à noite, todos os dias por 3 semanas; depois 2 vezes por semana."
  },
  orientacoesRetorno: [
    "Perder urina é comum, mas não é normal da idade: tem tratamento",
    "Exercícios do assoalho pélvico: contrair como se segurasse o xixi e o pum, segurar contando até 8–10, relaxar; 8 a 12 vezes, 3 vezes ao dia, todos os dias, por pelo menos 3 meses",
    "Treinamento da bexiga: urinar em horários marcados e aumentar aos poucos o intervalo; na vontade súbita, parar, contrair o assoalho e esperar passar",
    "Diminuir café, chá preto, mate, refrigerante e álcool; beber água ao longo do dia e menos à noite",
    "Voltar antes se: sangue na urina, dor ou ardência ao urinar, febre ou não conseguir urinar",
    "Retornar em 6–12 semanas com o diário miccional"
  ],
  encaminhar: [
    "Fisioterapia pélvica: incontinência de esforço ou mista",
    "Uroginecologia/urologia: falha após 3 meses de tratamento conservador e medicamentoso, desejo de cirurgia, prolapso associado, cirurgia ou radioterapia pélvica prévia, retenção, suspeita de fístula",
    "Urologia com prioridade: hematúria sem ITU",
    "Neurologia: suspeita de causa neurológica"
  ],
  fontes: [
    "FEBRASGO — Incontinência urinária de esforço / Bexiga hiperativa. Protocolos FEBRASGO (2021)",
    "NICE NG123 — Urinary incontinence and pelvic organ prolapse in women: management (2019)",
    "Ministério da Saúde — Protocolos da Atenção Básica: Saúde das Mulheres (2016)",
    "American Geriatrics Society — Beers Criteria (2023)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

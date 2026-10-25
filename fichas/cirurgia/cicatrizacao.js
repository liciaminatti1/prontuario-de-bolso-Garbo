// Cicatrização de feridas: fases, fatores, queloide e cicatriz hipertrófica
registrarFicha({
  id: "cicatrizacao",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Cicatrização de feridas: fases, fatores que atrasam, queloide e cicatriz hipertrófica",
  resumo: "Referência prática: fases da cicatrização, tipos de fechamento (1ª, 2ª e 3ª intenção), fatores locais e sistêmicos que atrasam, como diferenciar e tratar queloide e cicatriz hipertrófica, e quando pensar em deiscência. Técnica de curativo: ver curativos-desbridamento; sutura: ver sutura; deiscência e evisceração: ver deiscencia-evisceracao.",
  palavrasChave: "cicatrizacao ferida fases hemostasia inflamatoria proliferativa remodelacao granulacao epitelizacao primeira segunda terceira intencao fechamento primario retardado queloide cicatriz hipertrofica silicone triancinolona corticoide intralesional deiscencia ferida que nao cicatriza ferida cronica desnutricao tabagismo diabetes",
  alarmes: [
    "Ferida operatória com saída de líquido serossanguinolento abundante ('água de carne') entre o 5º e o 10º dia: deiscência de aponeurose iminente — ver deiscencia-evisceracao",
    "Vísceras expostas: evisceração — emergência cirúrgica",
    "Sinais de infecção: eritema que se espalha, calor, secreção purulenta, febre, crepitação (fasciite) — ver infeccao-sitio-cirurgico",
    "Ferida sem progressão por 4–6 semanas apesar do tratamento correto: investigar causa (isquemia, infecção, neoplasia — biópsia)",
    "Úlcera crônica com bordas elevadas, vegetante ou que sangra fácil (úlcera de Marjolin: carcinoma em cicatriz antiga)",
    "Cicatriz que cresce rapidamente, dói, coça muito ou ulcera"
  ],
  conduta: [
    "Classificar o fechamento: 1ª intenção (bordas aproximadas: sutura), 2ª intenção (ferida aberta granula e contrai: feridas contaminadas, abscessos drenados), 3ª intenção (fechamento primário retardado em 3–5 dias após limpeza de ferida contaminada)",
    "Corrigir fatores locais: desbridar tecido necrótico, drenar coleções, tratar infecção, retirar corpo estranho, reduzir tensão e edema, manter meio úmido (não seco) e limpo",
    "Corrigir fatores sistêmicos: glicemia, nutrição (proteína), parar de fumar, revisar corticoide e imunossupressores, tratar anemia, edema e insuficiência vascular",
    "Ferida crônica de membro inferior: pulsos e ITB (arterial), sinais de insuficiência venosa, neuropatia (pé diabético) — tratar a causa",
    "Prevenção de cicatriz patológica em quem tem história de queloide: evitar cirurgias e piercings eletivos; sutura sem tensão; silicone após epitelização; fotoproteção",
    "Cicatriz hipertrófica: silicone (gel ou placa) por pelo menos 2–3 meses + massagem e pressão; refratária → corticoide intralesional",
    "Queloide: corticoide intralesional (triancinolona) a cada 4–6 semanas, associado ao silicone; exérese isolada recidiva muito — só com terapia adjuvante (corticoide, radioterapia), pelo especialista",
    "Retirada de pontos no prazo da ficha sutura; após retirada, a força da cicatriz ainda é baixa (proteger da tensão)"
  ],
  exames: [
    "Glicemia/HbA1c, hemograma, albumina e pré-albumina (estado nutricional), creatinina — ferida que não cicatriza",
    "Índice tornozelo-braquial ou Doppler arterial: ferida de membro inferior com pulsos fracos",
    "Cultura de tecido (não de swab superficial) só se sinais clínicos de infecção",
    "Biópsia: ferida crônica atípica ou sem resposta (excluir neoplasia, pioderma gangrenoso, vasculite)"
  ],
  diferenciais: [
    "Queloide × cicatriz hipertrófica (tabela)",
    "Dermatofibroma, dermatofibrossarcoma protuberans (lesão que cresce em placa endurecida)",
    "Granuloma de fio (corpo estranho)",
    "Pioderma gangrenoso (úlcera que piora após desbridamento — patergia)"
  ],
  tabelas: [
    {
      titulo: "Fases da cicatrização",
      colunas: ["Fase", "Quando", "O que acontece"],
      linhas: [
        ["Hemostasia", "Minutos", "Vasoconstrição, plaquetas, coágulo de fibrina; liberação de fatores de crescimento"],
        ["Inflamatória", "Até ~4–6 dias", "Neutrófilos (primeiras 24–48 h) e depois macrófagos (célula-chave): limpeza e sinalização; rubor e edema leves são normais"],
        ["Proliferativa", "~4 dias a 3 semanas", "Fibroblastos e colágeno tipo III, angiogênese, tecido de granulação, epitelização; contração pelos miofibroblastos"],
        ["Remodelação (maturação)", "3 semanas a 1–2 anos", "Colágeno III trocado por tipo I; cicatriz clareia e amolece; força tênsil chega a ~80% da pele normal, nunca 100%"]
      ]
    },
    {
      titulo: "Fatores que atrasam a cicatrização",
      colunas: ["Tipo", "Fatores"],
      linhas: [
        ["Locais", "Infecção, isquemia/hipóxia, tecido necrótico, hematoma ou seroma, corpo estranho, tensão, edema, radioterapia prévia, trauma repetido, ressecamento"],
        ["Sistêmicos", "Diabetes descompensado, desnutrição e hipoalbuminemia, idade avançada, tabagismo, obesidade, anemia, uremia, icterícia, câncer"],
        ["Medicamentos", "Corticoide (sobretudo na fase inflamatória), quimioterápicos, imunossupressores, antiangiogênicos (bevacizumabe)"],
        ["Micronutrientes", "Deficiência de vitamina C (síntese de colágeno), zinco, proteína; vitamina A ajuda a reverter o efeito do corticoide"]
      ]
    },
    {
      titulo: "Queloide × cicatriz hipertrófica",
      colunas: ["Característica", "Cicatriz hipertrófica", "Queloide"],
      linhas: [
        ["Limites", "Restrita à área da ferida", "Ultrapassa os limites da ferida original"],
        ["Início", "Semanas após a lesão", "Meses depois; pode surgir após trauma mínimo"],
        ["Evolução", "Melhora espontânea em meses a 1–2 anos", "Não regride; cresce lentamente"],
        ["Local típico", "Áreas de tensão e articulações; queimaduras", "Lóbulo da orelha, tórax anterior (esterno), ombros, região mandibular"],
        ["Predisposição", "Tensão, infecção, cicatrização prolongada", "Pele negra/parda, história familiar, 10–30 anos"],
        ["Recidiva após exérese", "Baixa", "Muito alta sem tratamento adjuvante"],
        ["Tratamento", "Silicone, pressão; corticoide intralesional se refratária", "Corticoide intralesional + silicone; cirurgia só com adjuvante (especialista)"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "CICATRIZ HIPERTRÓFICA / PREVENÇÃO DE QUELOIDE\nUSO TÓPICO\n1. Gel de silicone para cicatrizes (ou placa de silicone) ------ 1 unidade\n   Aplicar fina camada sobre a cicatriz 2 vezes ao dia (placa: usar 12 a 24 horas por dia), após a ferida fechar, por no mínimo 2 a 3 meses.\n2. Protetor solar FPS 30 ou mais ------------------------------- 1 unidade\n   Aplicar na cicatriz pela manhã e reaplicar a cada 3 horas se exposição ao sol, por 12 meses.\n\nPROCEDIMENTO (especialista ou médico treinado)\n3. Triancinolona acetonida 20 mg/mL suspensão injetável -------- 1 frasco-ampola\n   Infiltração intralesional na cicatriz/queloide (concentração usual 10–40 mg/mL conforme espessura e local), a cada 4 a 6 semanas, conforme resposta. Risco de atrofia, hipopigmentação e telangiectasia."
  },
  orientacoesRetorno: [
    "A cicatriz leva até 1–2 anos para ficar com aspecto final; vermelhidão nos primeiros meses é normal",
    "Proteger a cicatriz do sol por pelo menos 1 ano",
    "Massagear a cicatriz depois que ela fechar, com o gel indicado",
    "Não fumar, controlar o açúcar no sangue e comer proteínas ajudam a ferida a fechar",
    "Quem tem queloide deve evitar furar orelha, tatuagem e cirurgias que não sejam necessárias",
    "Procurar atendimento se a ferida abrir, sair líquido em grande quantidade, aparecer pus, vermelhidão que aumenta ou febre"
  ],
  encaminhar: [
    "Dermatologia ou cirurgia plástica: queloide, cicatriz hipertrófica refratária ou que limita movimento (contratura)",
    "Ambulatório de feridas / cirurgia vascular: ferida crônica sem melhora em 4–6 semanas, ferida com isquemia",
    "Cirurgia (PS): deiscência de aponeurose, evisceração, infecção profunda"
  ],
  fontes: [
    "Gold MH et al. — Updated international clinical recommendations on scar management, partes 1 e 2 (Dermatol Surg, 2014)",
    "Ogawa R — Japan Scar Workshop (JSW) Scar Scale e consenso de tratamento de queloide e cicatriz hipertrófica (2019)",
    "Sabiston Textbook of Surgery, 21ª ed. (2021) — Wound healing",
    "Ministério da Saúde — Manual do pé diabético (2016) e Cadernos de Atenção Básica nº 30: Procedimentos (2011)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

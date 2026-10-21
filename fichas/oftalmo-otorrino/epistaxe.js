// Epistaxe
registrarFicha({
  id: "epistaxe",
  especialidade: "oftalmo-otorrino",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Epistaxe (sangramento nasal)",
  resumo: "Sangramento pelo nariz, quase sempre anterior (plexo de Kiesselbach) e controlável com compressão. Sangramento posterior (idoso, hipertenso, anticoagulado, sangue na garganta com as duas narinas) é mais grave e pode exigir tamponamento posterior e otorrino.",
  palavrasChave: "epistaxe sangramento nasal sangue pelo nariz hemorragia nasal kiesselbach compressao tamponamento nasal acido tranexamico oximetazolina cauterizacao nitrato de prata anticoagulado crianca",
  critico: {
    tempo: "Comprimir as asas do nariz 10–15 min",
    texto: "Sentado, cabeça levemente para frente, apertar firme a parte mole do nariz por pelo menos 10–15 minutos sem soltar para olhar. Avaliar estabilidade hemodinâmica e uso de anticoagulante."
  },
  alarmes: [
    "Instabilidade hemodinâmica, palidez, taquicardia, síncope",
    "Sangramento que não para após 2 ciclos de compressão + vasoconstritor, ou sangue escorrendo na garganta com tampão anterior (sangramento posterior)",
    "Anticoagulado ou antiagregado, coagulopatia, hepatopatia, plaquetopenia",
    "Sangramento recorrente unilateral com obstrução nasal (tumor; em menino adolescente: nasoangiofibroma juvenil)",
    "Equimoses, sangramento gengival ou em outros locais (doença hematológica)",
    "Criança < 2 anos com epistaxe (pensar em trauma, maus-tratos ou coagulopatia)",
    "Trauma de face com sangramento (fratura; rinoliquorreia)",
    "Telangiectasias em lábios e língua e história familiar (telangiectasia hemorrágica hereditária)"
  ],
  conduta: [
    "Paciente sentado, inclinado para frente; cuspir o sangue da boca (não engolir); proteção (luvas, óculos)",
    "Sinais vitais; acesso venoso e exames se volumoso ou instável",
    "Compressão bidigital firme das asas nasais por 10–15 min (no mínimo 5 min, sem interromper); gelo no dorso nasal pode ajudar",
    "Assoar para retirar coágulos e aplicar vasoconstritor tópico (oximetazolina) ou algodão embebido em ácido tranexâmico; comprimir de novo por 10 min",
    "Inspecionar com luz frontal/espéculo: ponto sangrante anterior visível → cauterização química com nitrato de prata (só de um lado do septo)",
    "Persistindo: tamponamento anterior (esponja expansível ou gaze vaselinada); se continuar, tamponamento posterior (sonda de Foley) e otorrino",
    "Anticoagulado: em geral não suspender o anticoagulante por sangramento controlado; checar INR se varfarina; reverter só se sangramento grave",
    "Hipertensão: aliviar dor e ansiedade; não reduzir a PA de forma agressiva só pela epistaxe"
  ],
  exames: [
    "Sangramento leve e controlado: nenhum exame",
    "Volumoso, recorrente ou instável: hemograma, tipagem sanguínea",
    "Anticoagulado com varfarina ou suspeita de coagulopatia/hepatopatia: TP/INR, TTPa, plaquetas",
    "Recorrente sem causa, sangramentos em outros locais: hemograma, coagulograma, avaliar doença de von Willebrand",
    "Unilateral recorrente com obstrução: nasofibroscopia (otorrino); TC se suspeita de tumor"
  ],
  diferenciais: [
    "Hemoptise (tosse, sangue espumoso) ou hematêmese (vômito, sangue escuro)",
    "Corpo estranho nasal em criança (secreção fétida unilateral)",
    "Tumor nasossinusal, nasoangiofibroma juvenil",
    "Coagulopatia, plaquetopenia, leucemia, uso de anticoagulante",
    "Telangiectasia hemorrágica hereditária"
  ],
  tratamento: [
    {
      droga: "Oximetazolina 0,05% (adulto e ≥ 6 anos) ou 0,025% (2–5 anos)",
      linha: "l1",
      dose: "2–3 jatos ou gotas na narina que sangra, ou algodão embebido",
      via: "Nasal",
      intervalo: "Dose única no atendimento; em casa, se necessário, até 12/12 h",
      duracao: "Máx 3 dias (efeito rebote)",
      monitorizacao: "PA, FC",
      contraindicacoes: "< 2 anos; cuidado em HAS grave não controlada, coronariopatia, uso de IMAO",
      ajustes: "Associar à compressão de 10 min"
    },
    {
      droga: "Ácido tranexâmico tópico (ampola 50 mg/mL)",
      linha: "l1",
      dose: "250–500 mg (5–10 mL) embebendo algodão ou gaze; criança: volume proporcional ao tamanho da narina",
      via: "Nasal (tampão por 10–15 min)",
      intervalo: "Pode repetir 1 vez",
      duracao: "No atendimento",
      monitorizacao: "Controle do sangramento",
      contraindicacoes: "Alergia",
      ajustes: "Útil também em anticoagulados e antiagregados. Uso tópico é off-label"
    },
    {
      droga: "Cauterização com nitrato de prata (bastão)",
      linha: "l1",
      dose: "Tocar o ponto sangrante por poucos segundos, da periferia para o centro, após anestesia tópica (lidocaína 2% + vasoconstritor em algodão)",
      via: "Nasal",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Não cauterizar os dois lados do septo na mesma sessão (risco de perfuração)",
      contraindicacoes: "Sangramento ativo intenso (precisa estar contido para funcionar)",
      ajustes: "Ponto anterior visível"
    },
    {
      droga: "Tamponamento nasal anterior (esponja expansível ou gaze vaselinada)",
      linha: "alt",
      dose: "Na narina que sangra; preferir material absorvível em anticoagulados/plaquetopênicos",
      via: "Nasal",
      intervalo: "—",
      duracao: "Retirar em 48–72 h (não absorvível)",
      monitorizacao: "Sangramento posterior, dor, sinais de infecção; síndrome do choque tóxico (rara)",
      contraindicacoes: "Suspeita de fratura de base de crânio",
      ajustes: "Antibiótico sistêmico NÃO é rotina com tamponamento anterior. Tamponamento posterior: internação e otorrino"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO\nUSO NASAL\n1. Cloreto de sódio 0,9% spray/gotas -------------------------- 1 frasco\n   Aplicar 2 jatos em cada narina 3 a 4 vezes ao dia por 2 semanas (manter a mucosa úmida).\n2. Vaselina sólida (ou pomada nasal com neomicina + bacitracina) --- 1 bisnaga\n   Aplicar pequena quantidade com cotonete na entrada da narina (parte da frente), 2 vezes ao dia, por 7 a 14 dias.\n3. Oximetazolina 0,05% spray ------------------------------------ 1 frasco\n   Se voltar a sangrar: aplicar 2 jatos na narina que sangra e apertar o nariz por 10 minutos. No máximo 2 vezes ao dia, por até 3 dias.\n\nUSO ORAL\n4. Paracetamol 750 mg ------------------------------------------- 1 caixa\n   Tomar 1 comprimido de 6 em 6 horas se dor. Evitar AAS, ibuprofeno, diclofenaco e outros anti-inflamatórios.\n\nCRIANÇA (por kg)\n- Soro fisiológico e vaselina/pomada nasal: igual ao adulto.\n- Oximetazolina 0,025% (2–5 anos) ou 0,05% (≥ 6 anos): 1 a 2 gotas/jatos na narina que sangra se recorrer, por até 3 dias. Não usar em < 2 anos.\n- Paracetamol 10–15 mg/kg/dose de 6 em 6 horas (máx 75 mg/kg/dia e 1 g/dose) ou dipirona 10–15 mg/kg/dose de 6 em 6 horas (máx 1 g/dose) se dor."
  },
  orientacoesRetorno: [
    "Se sangrar de novo: sentar, inclinar a cabeça para frente (não para trás), cuspir o sangue e apertar a parte mole do nariz por 10 a 15 minutos sem soltar",
    "Não cutucar nem assoar com força por 1 semana; espirrar de boca aberta; evitar esforço físico intenso e banhos muito quentes por 2–3 dias",
    "Use soro fisiológico e umidifique o nariz, principalmente no tempo seco",
    "Se estiver com tampão, não retire sozinho; retorne em 48–72 h para retirada",
    "Não pare anticoagulante ou AAS por conta própria; fale com seu médico",
    "Volte imediatamente se o sangramento não parar após 20 minutos de compressão, se sentir sangue descendo na garganta, tontura, desmaio ou falta de ar",
    "Sangramentos repetidos, de um lado só, com nariz entupido, ou com manchas roxas no corpo: procure a UBS para investigação"
  ],
  encaminhar: [
    "Otorrinolaringologia de urgência: sangramento posterior, falha do tamponamento anterior, necessidade de tamponamento posterior (internação)",
    "Otorrinolaringologia eletiva: epistaxe recorrente (cauterização programada), suspeita de tumor, telangiectasia hemorrágica hereditária",
    "Hematologia: suspeita de coagulopatia (sangramentos em outros locais, história familiar)"
  ],
  fontes: [
    "AAO-HNSF — Clinical Practice Guideline: Nosebleed (Epistaxis) (Otolaryngol Head Neck Surg, 2020)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II: Acolhimento à demanda espontânea — queixas mais comuns (2013)",
    "Zahed R et al. — Topical tranexamic acid compared with anterior nasal packing for anterior epistaxis (Am J Emerg Med, 2013)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

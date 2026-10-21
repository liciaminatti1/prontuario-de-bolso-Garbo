// Onicomicose
registrarFicha({
  id: "onicomicose",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Onicomicose das mãos e dos pés",
  resumo: "Infecção fúngica da unha (dermatófitos, principalmente nos pés; Candida nas mãos de quem molha muito as mãos; fungos não dermatófitos). Unha espessa, amarelada, descolada e quebradiça. Metade das distrofias ungueais não é fungo: confirmar antes de tratamento oral.",
  palavrasChave: "onicomicose micose de unha unha grossa amarela tinea unguium terbinafina itraconazol fluconazol amorolfina ciclopirox esmalte paroniquia candida",
  alarmes: [
    "Diabético, doença arterial periférica ou imunossuprimido com unha espessa, fissura ou paroníquia (risco de celulite e úlcera)",
    "Faixa ou mancha escura longitudinal na unha, alargando, com pigmento na pele ao redor (sinal de Hutchinson — excluir melanoma)",
    "Lesão de unha única com dor, sangramento, massa ou destruição da lâmina (excluir tumor, verruga, exostose)",
    "Paroníquia aguda com pus e dor intensa (infecção bacteriana: drenagem)"
  ],
  conduta: [
    "Confirmar com exame micológico direto e cultura antes de tratamento oral",
    "Avaliar extensão: % da unha acometida, envolvimento da matriz (base), número de unhas",
    "Leve (≤ 50% da unha, sem matriz, até 3–4 unhas): esmalte antifúngico tópico (amorolfina ou ciclopirox) por 6 meses (mãos) a 9–12 meses (pés)",
    "Moderada a grave (matriz acometida, > 50% da unha, muitas unhas): terbinafina oral (1ª escolha para dermatófitos)",
    "Candida (mãos, paroníquia crônica): itraconazol em pulso ou fluconazol semanal",
    "Lixar a superfície e cortar a unha curta antes de aplicar esmalte; tratar a tinea pedis associada",
    "Tratamento não é obrigatório em idoso assintomático sem risco (decisão compartilhada); em diabéticos, tratar",
    "Explicar: a unha cresce devagar (mãos 4–6 meses; pés 12–18 meses); cura clínica só aparece com a unha nova"
  ],
  diferenciais: [
    "Psoríase ungueal (depressões puntiformes, mancha em 'gota de óleo', várias unhas, lesões de pele)",
    "Trauma de repetição (hálux, calçado apertado, atletas)",
    "Líquen plano (afinamento, pterígio)",
    "Paroníquia crônica por irritação (sem fungo)",
    "Melanoma subungueal e outros tumores"
  ],
  exames: [
    "Exame micológico direto e cultura para fungos de fragmentos e raspado subungueal (da parte mais proximal da área afetada). Pedido: 'Exame micológico direto e cultura para fungos de unha — suspeita de onicomicose'. Suspender antifúngico tópico/esmalte 2–4 semanas antes",
    "TGO/TGP e hemograma antes de terbinafina oral (repetir se sintomas ou tratamento prolongado)",
    "Glicemia/HbA1c se fatores de risco"
  ],
  tratamento: [
    {
      droga: "Terbinafina (comprimido 250 mg)",
      linha: "l1",
      dose: "Adulto: 250 mg. Criança (off-label): 10–20 kg 62,5 mg; 20–40 kg 125 mg; > 40 kg 250 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Mãos: 6 semanas. Pés: 12 semanas",
      monitorizacao: "TGO/TGP no início; orientar sinais de hepatite (náusea, icterícia, urina escura); perda de paladar",
      contraindicacoes: "Doença hepática ativa ou crônica; gestação e lactação; lúpus",
      ajustes: "Mais eficaz para dermatófitos. ClCr < 50 mL/min: evitar ou reduzir dose. Não consta na RENAME (farmácia)"
    },
    {
      droga: "Itraconazol (cápsula 100 mg) — pulsoterapia",
      linha: "alt",
      dose: "Adulto: 200 mg 2 vezes ao dia (400 mg/dia) por 1 semana, com 3 semanas sem tomar = 1 pulso",
      via: "VO, com refeição",
      intervalo: "1 pulso por mês",
      duracao: "Mãos: 2 pulsos. Pés: 3 pulsos",
      monitorizacao: "Interações (CYP3A4), TGO/TGP, sinais de insuficiência cardíaca",
      contraindicacoes: "Insuficiência cardíaca; gestação; sinvastatina, lovastatina, midazolam oral, cisaprida, entre outros",
      ajustes: "Melhor para Candida e fungos não dermatófitos. Alternativa contínua: 200 mg/dia por 12 semanas (pés). Criança: dose por peso com especialista"
    },
    {
      droga: "Fluconazol (cápsula 150 mg)",
      linha: "alt",
      dose: "150 a 450 mg",
      via: "VO",
      intervalo: "1 vez por semana",
      duracao: "Mãos: 6 a 9 meses. Pés: 12 a 18 meses (até a unha crescer)",
      monitorizacao: "Interações, QT",
      contraindicacoes: "Gestação; drogas que prolongam QT",
      ajustes: "RENAME/SUS. Opção quando terbinafina/itraconazol indisponíveis ou contraindicados (uso off-label para onicomicose)"
    },
    {
      droga: "Amorolfina 5% esmalte",
      linha: "l1",
      dose: "Uma camada sobre toda a unha afetada, após lixar",
      via: "Tópica",
      intervalo: "1 a 2 vezes por semana",
      duracao: "Mãos: 6 meses. Pés: 9 a 12 meses",
      monitorizacao: "—",
      contraindicacoes: "Crianças (sem dados em bula); gestação e lactação (evitar)",
      ajustes: "Doença leve sem matriz. Pode ser associada ao oral em casos graves. Não consta na RENAME (farmácia)"
    },
    {
      droga: "Ciclopirox 8% esmalte",
      linha: "alt",
      dose: "Camada fina sobre a unha e 5 mm de pele ao redor",
      via: "Tópica",
      intervalo: "1 vez ao dia (remover com álcool 1 vez por semana)",
      duracao: "Até 48 semanas (mãos: cerca de 6 meses)",
      monitorizacao: "—",
      contraindicacoes: "Gestação (dados limitados)",
      ajustes: "Opção tópica também para crianças (evidência em estudos pediátricos). Não consta na RENAME (farmácia)"
    }
  ],
  prescricao: {
    ambulatorial: "ONICOMICOSE LEVE (sem acometer a base da unha, até 3–4 unhas)\nUSO TÓPICO\n1. Amorolfina 5% esmalte ------------------------------------ 1 frasco\n   Lixar a superfície da unha, limpar com o lenço/álcool e aplicar 1 camada em toda a unha afetada, 1 a 2 vezes por semana. Usar por 6 meses (mãos) ou 9 a 12 meses (pés), até a unha nova crescer saudável.\n   OU\n1. Ciclopirox 8% esmalte ------------------------------------- 1 frasco\n   Aplicar 1 vez ao dia sobre a unha e a pele ao redor; 1 vez por semana, remover com álcool e lixar. Usar por até 48 semanas.\n\nONICOMICOSE MODERADA A GRAVE POR DERMATÓFITO — ADULTO (exame confirmado, TGO/TGP normais)\nUSO ORAL\n2. Terbinafina 250 mg ------------------------------------- 42 (mãos) ou 84 (pés) comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 6 semanas (unhas das mãos) ou 12 semanas (unhas dos pés).\n   OU\n2. Itraconazol 100 mg ------------------------------------- 28 cápsulas por pulso\n   Tomar 2 cápsulas de 12 em 12 horas, após as refeições, por 7 dias; parar 3 semanas e repetir. Total: 2 pulsos (mãos) ou 3 pulsos (pés).\n   OU (SUS)\n2. Fluconazol 150 mg -------------------------------------- 1 cápsula por semana\n   Tomar 1 a 3 cápsulas (150 a 450 mg) 1 vez por semana, até a unha crescer saudável (mãos 6–9 meses; pés 12–18 meses).\n\nCRIANÇA (exame confirmado; preferir tópico; oral com especialista)\n- Terbinafina 250 mg: 10–20 kg ¼ comprimido; 20–40 kg ½ comprimido; > 40 kg 1 comprimido, 1 vez ao dia, por 6 semanas (mãos) ou 12 semanas (pés).\n\nPREVENÇÃO\n3. Tratar micose entre os dedos (miconazol 2% creme 2 vezes ao dia por 4 semanas); unhas curtas; não compartilhar alicate."
  },
  orientacoesRetorno: [
    "O tratamento é longo; a unha só fica normal quando cresce de novo (mãos 4–6 meses; pés 12–18 meses)",
    "Manter unhas curtas e lixadas; usar alicate próprio na manicure",
    "Secar bem os pés, usar meias de algodão e chinelo em banheiro coletivo; tratar micose entre os dedos",
    "Quem molha muito as mãos: luvas com forro de algodão para lavar louça e roupa",
    "Durante a terbinafina: parar e voltar se tiver olhos amarelados, urina escura, náusea forte, manchas na pele ou perda do paladar",
    "Diabéticos: examinar os pés todos os dias",
    "Retornar em 6–12 semanas para avaliar resposta e tolerância"
  ],
  encaminhar: [
    "Dermatologia: faixa escura na unha (excluir melanoma), lesão de unha única com dor ou massa, falha de tratamento correto, dúvida diagnóstica (psoríase, líquen), criança com necessidade de tratamento oral"
  ],
  fontes: [
    "British Association of Dermatologists — Guidelines for the management of onychomycosis (Ameen M, et al. Br J Dermatol 2014) e PCDS — Fungal nail infection (atualização vigente)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II (2013) — micoses superficiais",
    "Ministério da Saúde — RENAME 2024 (fluconazol 150 mg)",
    "Gupta AK, et al. Onychomycosis in children: review e consenso de dosagem por peso (terbinafina 62,5/125/250 mg)",
    "Bulas ANVISA: terbinafina, itraconazol, amorolfina esmalte 5%, ciclopirox esmalte 8%"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

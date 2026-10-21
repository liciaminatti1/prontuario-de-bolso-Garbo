// Tinea corporis, cruris e pedis
registrarFicha({
  id: "tineas",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Tinea corporis, cruris e pedis (pé de atleta, dermatofitose interdigital)",
  resumo: "Dermatofitoses da pele. Corporis: placa anular com borda ativa descamativa e centro mais claro. Cruris: virilha e face interna das coxas, poupa o escroto. Pedis: descamação e maceração entre os dedos (frieira, pé de atleta), planta em 'mocassim' ou vesículas.",
  palavrasChave: "tinea corporis tinea cruris tinea pedis pe de atleta frieira micose de pele impinge dermatofitose interdigital miconazol cetoconazol terbinafina itraconazol fluconazol trichophyton indotineae",
  alarmes: [
    "Pé de diabético ou com insuficiência vascular com fissura, celulite ou úlcera (porta de entrada para erisipela/celulite)",
    "Lesões extensas, muito inflamadas ou que pioraram com corticoide (tinea incógnita)",
    "Falha a tratamento oral correto ou lesões disseminadas em adulto (suspeitar de Trichophyton indotineae resistente à terbinafina; já descrito no Brasil desde 2024)",
    "Imunossupressão (HIV, transplante, corticoide crônico) com micose extensa",
    "Placa anular que não descama, com borda lisa ou lesões dormentes (pensar em hanseníase, granuloma anular)"
  ],
  conduta: [
    "Diagnóstico clínico; micológico direto se dúvida, lesão extensa, falha ou antes de tratamento oral",
    "Lesões localizadas: antifúngico tópico (azólico ou terbinafina) 1–2 vezes ao dia, cobrindo 2 cm além da borda, até 1–2 semanas após o desaparecimento",
    "Tratamento oral: lesões extensas ou múltiplas, folículos acometidos (granuloma de Majocchi), falha do tópico, imunossupressão, tinea pedis em mocassim",
    "Não usar cremes com corticoide (sozinhos ou associados): mascaram e espalham a micose",
    "Tinea pedis: secar bem entre os dedos, meias de algodão, calçado ventilado, chinelo em banheiro coletivo; tratar onicomicose associada (fonte de recidiva)",
    "Tinea cruris: tratar também os pés (fonte frequente); roupas íntimas folgadas de algodão",
    "Tinea corporis em criança: examinar animais domésticos e contatos",
    "Tinea pedis com fissura em diabético ou com erisipela prévia: tratar sempre (prevenção de celulite)"
  ],
  diferenciais: [
    "Candidíase cutânea/intertrigo (satélites, acomete escroto, sem borda ativa)",
    "Eritrasma (placa marrom na virilha ou entre dedos; fluorescência coral na luz de Wood)",
    "Dermatite atópica e eczema numular (placas sem clareamento central, muito pruriginosas)",
    "Psoríase (placas espessas, escamas prateadas, couro cabeludo e unhas)",
    "Pitiríase rósea (placa-mãe e lesões em 'árvore de Natal' no tronco)",
    "Hanseníase (placa com alteração de sensibilidade) e granuloma anular (borda sem descamação)",
    "Dermatite de contato (pés: calçados)"
  ],
  exames: [
    "Exame micológico direto e cultura para fungos (raspado da borda ativa): dúvida diagnóstica, lesões extensas, falha terapêutica ou antes de tratamento oral prolongado. Suspender antifúngico tópico 1–2 semanas antes, se possível",
    "TGO/TGP: antes de terbinafina oral em quem tem história de doença hepática ou uso de álcool",
    "Glicemia/HbA1c: tinea extensa ou recorrente em adulto"
  ],
  tratamento: [
    {
      droga: "Nitrato de miconazol 2% creme",
      linha: "l1",
      dose: "Fina camada na lesão e 2 cm ao redor",
      via: "Tópica",
      intervalo: "2 vezes ao dia",
      duracao: "Corporis/cruris: 2 a 4 semanas. Pedis: 4 semanas. Continuar 1–2 semanas após a cura clínica",
      monitorizacao: "Melhora em 1–2 semanas",
      contraindicacoes: "Hipersensibilidade a azólicos",
      ajustes: "RENAME/SUS. Adulto e criança. Seguro na gestação. Pó antifúngico nos calçados como adjuvante na tinea pedis"
    },
    {
      droga: "Cetoconazol 2% creme",
      linha: "alt",
      dose: "Fina camada na lesão e 2 cm ao redor",
      via: "Tópica",
      intervalo: "1 vez ao dia",
      duracao: "2 a 4 semanas (pedis: 4–6 semanas)",
      monitorizacao: "—",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Conferir disponibilidade na REMUME"
    },
    {
      droga: "Terbinafina 1% creme",
      linha: "alt",
      dose: "Fina camada",
      via: "Tópica",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Corporis/cruris: 1 a 2 semanas. Pedis interdigital: 1 semana",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Fungicida: cursos mais curtos. Não consta na RENAME (farmácia)"
    },
    {
      droga: "Terbinafina oral (comprimido 250 mg)",
      linha: "l1",
      dose: "Adulto: 250 mg. Criança: 10–20 kg 62,5 mg; 20–40 kg 125 mg; > 40 kg 250 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Corporis/cruris: 2 a 4 semanas. Pedis: 2 a 6 semanas (mocassim: até 6 semanas)",
      monitorizacao: "TGO/TGP se uso > 6 semanas ou risco hepático; distúrbio do paladar",
      contraindicacoes: "Doença hepática; gestação (evitar); lúpus",
      ajustes: "Indicado em doença extensa ou falha do tópico. Não consta na RENAME. Falha com terbinafina em dose correta: cultura e encaminhar (resistência)"
    },
    {
      droga: "Itraconazol (cápsula 100 mg)",
      linha: "alt",
      dose: "Corporis/cruris: 100 mg/dia por 15 dias ou 200 mg/dia por 7 dias. Pedis: 100 mg/dia por 30 dias ou 200 mg 2×/dia por 7 dias. Criança: 5 mg/kg/dia (máx. 200 mg/dia)",
      via: "VO, com refeição",
      intervalo: "Conforme esquema",
      duracao: "Conforme esquema",
      monitorizacao: "Interações (CYP3A4); TGO/TGP se prolongado",
      contraindicacoes: "Insuficiência cardíaca; gestação; uso de sinvastatina, midazolam oral e outros substratos do CYP3A4",
      ajustes: "Opção para T. indotineae (orientado por especialista). Conferir disponibilidade na REMUME"
    },
    {
      droga: "Fluconazol (cápsula 150 mg)",
      linha: "alt",
      dose: "Adulto: 150 mg. Criança: 6 mg/kg (máx. 150 mg)",
      via: "VO",
      intervalo: "1 vez por semana",
      duracao: "Corporis/cruris: 2 a 4 semanas. Pedis: 2 a 6 semanas",
      monitorizacao: "Interações, QT",
      contraindicacoes: "Gestação; drogas que prolongam QT",
      ajustes: "RENAME/SUS. Menos eficaz que terbinafina e itraconazol para dermatófitos; alternativa disponível no SUS"
    }
  ],
  prescricao: {
    ambulatorial: "LESÕES LOCALIZADAS — ADULTO E CRIANÇA\nUSO TÓPICO\n1. Nitrato de miconazol 2% creme -------------------------- 2 bisnagas\n   Lavar e secar bem a área. Aplicar fina camada na mancha e 2 cm ao redor, 2 vezes ao dia. Usar por 2 a 4 semanas (pé de atleta: 4 semanas) e continuar mais 2 semanas depois que a pele ficar normal.\n2. Tinea pedis: secar bem entre os dedos; meias de algodão trocadas diariamente; chinelo em banheiros coletivos. Pode usar pó antifúngico (miconazol pó) nos calçados.\n\nLESÕES EXTENSAS OU FALHA DO CREME — ADULTO (não gestante)\nUSO ORAL\n3. Terbinafina 250 mg ------------------------------------ 14 a 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 2 a 4 semanas (pé em mocassim: até 6 semanas).\n   OU (SUS)\n3. Fluconazol 150 mg -------------------------------------- 4 cápsulas\n   Tomar 1 cápsula 1 vez por semana por 4 semanas (pé de atleta: até 6 semanas).\n   OU\n3. Itraconazol 100 mg ------------------------------------- 15 cápsulas\n   Tomar 1 cápsula 1 vez ao dia, após o almoço, por 15 dias (tinea corporis/cruris).\n\nCRIANÇA COM LESÕES EXTENSAS (por peso)\n- Terbinafina 250 mg: 10–20 kg ¼ comprimido; 20–40 kg ½ comprimido; > 40 kg 1 comprimido, 1 vez ao dia, por 2 a 4 semanas.\n- Ou fluconazol 6 mg/kg (máx. 150 mg) 1 vez por semana por 2 a 4 semanas."
  },
  orientacoesRetorno: [
    "Micose é causada por fungo e pode passar por contato com pessoas, animais, toalhas e pisos úmidos",
    "Secar muito bem a pele e entre os dedos após o banho; não dividir toalhas, roupas e calçados",
    "Usar o creme além da mancha e manter por 2 semanas depois de sumir, para não voltar",
    "Não usar pomadas com corticoide nem 'pomadas que servem para tudo': pioram a micose",
    "Quem tem micose na virilha deve tratar também os pés",
    "Diabéticos: examinar os pés todos os dias e tratar rachaduras entre os dedos",
    "Voltar se houver vermelhidão que se espalha, dor, inchaço, febre ou feridas no pé",
    "Retornar se não melhorar em 4 semanas de uso correto"
  ],
  encaminhar: [
    "Dermatologia: falha de tratamento oral correto (suspeita de resistência — T. indotineae), lesões extensas em imunossuprimido, dúvida diagnóstica (psoríase, hanseníase, granuloma anular)"
  ],
  fontes: [
    "British Association of Dermatologists / Primary Care Dermatology Society — Tinea corporis, cruris e pedis: clinical guidance (atualização vigente, PCDS 2024)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II: Queixas comuns no cuidado à demanda espontânea (2013) — micoses superficiais",
    "Ministério da Saúde — RENAME 2024 (nitrato de miconazol 2% creme; fluconazol 150 mg)",
    "Veasey JV, et al. First case of Trichophyton indotineae in Brazil. An Bras Dermatol 2025; Trichophyton indotineae infection, São Paulo, Brazil, 2024. Emerg Infect Dis 2025",
    "Bulas ANVISA: terbinafina, itraconazol, fluconazol, cetoconazol creme"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

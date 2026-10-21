// Tinea capitis
registrarFicha({
  id: "tinea-capitis",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Tinea capitis",
  resumo: "Micose do couro cabeludo por dermatófitos (no Brasil, principalmente Microsporum canis e Trichophyton tonsurans). Quase só em crianças pré-púberes. Placas de alopecia com descamação e cabelos quebrados; pode formar quérion (placa inflamatória com pus). Exige tratamento oral.",
  palavrasChave: "tinea capitis tinha do couro cabeludo micose cabeca querion microsporum trichophyton tonsurans griseofulvina terbinafina itraconazol fluconazol cetoconazol xampu sulfeto de selenio alopecia crianca",
  alarmes: [
    "Quérion: placa dolorosa, elevada, com pústulas e drenagem (risco de alopecia cicatricial) — iniciar antifúngico oral sem demora; não drenar",
    "Febre, celulite extensa ou adenopatia muito dolorosa (infecção bacteriana associada)",
    "Adulto com tinea capitis ou criança com doença extensa e recorrente (investigar imunossupressão)",
    "Placas de alopecia lisas, sem descamação (pensar em alopecia areata) ou com cicatriz (encaminhar)"
  ],
  conduta: [
    "Suspeitar em toda criança com placa de alopecia descamativa, pontos pretos ou 'caspa' com adenopatia occipital",
    "Colher exame micológico direto e cultura (raspado e fios arrancados) antes de iniciar, sem atrasar o tratamento do quérion",
    "Tratamento oral é obrigatório (tópico isolado não cura)",
    "Microsporum (comum no Brasil, contato com cão/gato) ou agente desconhecido: griseofulvina 6 a 8 semanas",
    "Trichophyton (pontos pretos, contatos humanos): terbinafina 4 a 6 semanas é a opção mais curta; griseofulvina também funciona",
    "Associar xampu de cetoconazol 2% ou sulfeto de selênio 2,5% 2–3 vezes por semana (reduz esporos e transmissão) — paciente e contatos",
    "Examinar contatos da casa e animais (levar cão/gato ao veterinário); tratar contatos com lesão",
    "Não afastar da escola após iniciar o tratamento; não raspar a cabeça",
    "Critério de cura: clínica e, se disponível, micológico negativo; continuar até cura clínica"
  ],
  diferenciais: [
    "Dermatite seborreica (descamação difusa, sem alopecia em placa)",
    "Alopecia areata (placa lisa, sem descamação, com pelos em ponto de exclamação)",
    "Psoríase do couro cabeludo (placas espessas, sem alopecia)",
    "Tricotilomania (fios de tamanhos diferentes, sem descamação)",
    "Impetigo/foliculite bacteriana (quérion pode ser confundido com abscesso — não drenar)"
  ],
  exames: [
    "Exame micológico direto e cultura para fungos: raspar a borda da lesão e arrancar fios afetados (com pinça). Pedido: 'Exame micológico direto e cultura para fungos de escamas e pelos do couro cabeludo — suspeita de tinea capitis'",
    "Lâmpada de Wood (se disponível): fluorescência verde-amarelada sugere Microsporum; T. tonsurans não fluoresce",
    "Hemograma e TGO/TGP: antes da terbinafina se doença hepática ou tratamento > 6 semanas; não obrigatório para griseofulvina em curso padrão em criança saudável"
  ],
  tratamento: [
    {
      droga: "Griseofulvina (comprimido 500 mg)",
      linha: "l1",
      dose: "Criança: 20–25 mg/kg/dia (micronizada). Adulto: 500 mg a 1 g/dia. Máx. 1 g/dia",
      via: "VO, com alimento gorduroso (leite, manteiga) para melhorar absorção",
      intervalo: "1 vez ao dia (ou dividido em 2 tomadas)",
      duracao: "6 a 8 semanas; continuar até a cura clínica e micológica",
      monitorizacao: "Cefaleia, náusea, fotossensibilidade, exantema",
      contraindicacoes: "Gestação (e evitar gravidez até 1 mês após; homens: 6 meses), porfiria, insuficiência hepática grave, lúpus",
      ajustes: "Melhor opção para Microsporum. No Brasil há só comprimido 500 mg (sem suspensão pediátrica): fracionar o comprimido ou manipular suspensão. Reduz efeito de anticoncepcional oral e varfarina. Disponibilidade no SUS variável: conferir REMUME"
    },
    {
      droga: "Terbinafina (comprimido 250 mg)",
      linha: "l1",
      dose: "10–20 kg: 62,5 mg (¼ cp). 20–40 kg: 125 mg (½ cp). > 40 kg e adulto: 250 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Trichophyton: 4 a 6 semanas. Microsporum: menos eficaz (se usada, 8 a 12 semanas ou preferir griseofulvina)",
      monitorizacao: "TGO/TGP no início em adultos e se tratamento prolongado; alteração do paladar; exantema",
      contraindicacoes: "Doença hepática ativa ou crônica; lúpus; < 10 kg (sem dados)",
      ajustes: "Uso pediátrico para tinea capitis é off-label no Brasil, mas recomendado por diretrizes internacionais. Não consta na RENAME (farmácia)"
    },
    {
      droga: "Itraconazol (cápsula 100 mg)",
      linha: "alt",
      dose: "Criança: 5 mg/kg/dia (máx. 200 mg/dia). Adulto: 200 mg/dia",
      via: "VO, com refeição",
      intervalo: "1 vez ao dia",
      duracao: "4 a 6 semanas",
      monitorizacao: "Interações (CYP3A4), TGO/TGP se prolongado",
      contraindicacoes: "Insuficiência cardíaca; gestação; uso de drogas que interagem (sinvastatina, midazolam oral, cisaprida)",
      ajustes: "Alternativa se griseofulvina e terbinafina indisponíveis ou falha. Cápsula pode ser aberta e misturada a alimento ácido/gorduroso (absorção variável)"
    },
    {
      droga: "Fluconazol (cápsula 150 mg; manipulado em suspensão)",
      linha: "alt",
      dose: "Criança: 6 mg/kg/dia (máx. 400 mg/dia)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "3 a 6 semanas",
      monitorizacao: "Interações; QT",
      contraindicacoes: "Gestação; uso de drogas que prolongam QT",
      ajustes: "Menos eficaz que griseofulvina/terbinafina; usar se outras indisponíveis. RENAME/SUS (cápsula)"
    },
    {
      droga: "Cetoconazol 2% xampu ou sulfeto de selênio 2,5% xampu",
      linha: "adj",
      dose: "Aplicar no couro cabeludo, deixar 5 minutos e enxaguar",
      via: "Tópica",
      intervalo: "2 a 3 vezes por semana",
      duracao: "Durante todo o tratamento oral (contatos: 2–4 semanas)",
      monitorizacao: "Irritação",
      contraindicacoes: "—",
      ajustes: "Adjuvante: não cura sozinho. Disponibilidade no SUS variável (conferir REMUME)"
    }
  ],
  prescricao: {
    ambulatorial: "CRIANÇA — 1ª ESCOLHA (MICROSPORUM OU AGENTE DESCONHECIDO)\nUSO ORAL\n1. Griseofulvina 500 mg ---------------------------------- ___ comprimidos\n   Dose: 20 a 25 mg/kg/dia, 1 vez ao dia, junto com leite ou alimento gorduroso, por 8 semanas (continuar até a cura). Máx. 1 g/dia.\n   Exemplo: 20 kg → 500 mg/dia (1 comprimido); 10–12 kg → 250 mg/dia (½ comprimido). Para doses menores, solicitar suspensão manipulada (ex.: 125 mg/5 mL).\n\nALTERNATIVA (TRICHOPHYTON; CRIANÇA ≥ 10 KG)\n1. Terbinafina 250 mg ------------------------------------- ___ comprimidos\n   10–20 kg: ¼ comprimido (62,5 mg); 20–40 kg: ½ comprimido (125 mg); > 40 kg: 1 comprimido (250 mg), 1 vez ao dia, por 4 a 6 semanas.\n\nADULTO\n1. Terbinafina 250 mg — 1 comprimido 1 vez ao dia por 4 a 6 semanas.\n   OU Griseofulvina 500 mg — 1 a 2 comprimidos ao dia com alimento gorduroso por 6 a 8 semanas (não usar na gestação).\n\nADJUVANTE (paciente e contatos da casa)\nUSO TÓPICO\n2. Cetoconazol 2% xampu ----------------------------------- 1 frasco\n   Lavar o couro cabeludo, deixar a espuma agir 5 minutos e enxaguar, 3 vezes por semana, durante todo o tratamento.\n\nSE QUÉRION COM DOR\n3. Dipirona — criança 10–15 mg/kg/dose até de 6/6 h (máx. 1 g/dose); adulto 500 mg a 1 g de 6/6 h se dor. Não drenar a lesão."
  },
  orientacoesRetorno: [
    "É uma micose que passa por contato com outras crianças, pentes, bonés e animais (cão e gato)",
    "O remédio por boca é obrigatório e dura semanas; não parar quando o cabelo começar a crescer",
    "Tomar a griseofulvina junto com leite ou comida gordurosa; evitar sol forte durante o uso",
    "Não dividir pentes, escovas, bonés e travesseiros; lavar esses objetos em água quente",
    "Levar o cão ou gato ao veterinário se tiver falhas no pelo",
    "A criança pode ir à escola depois de iniciar o tratamento; não é preciso raspar a cabeça",
    "O cabelo volta a crescer em semanas a meses depois da cura",
    "Voltar se houver febre, muita dor, pus, manchas no corpo, amarelão ou se não melhorar em 4 semanas",
    "Retornar com 4 semanas e ao final do tratamento para confirmar cura"
  ],
  encaminhar: [
    "Dermatologia: quérion extenso, falha de tratamento correto (8 semanas), suspeita de alopecia cicatricial, adulto com tinea capitis, dúvida diagnóstica"
  ],
  fontes: [
    "British Association of Dermatologists — Guidelines for the management of tinea capitis in children (Fuller LC, et al. Br J Dermatol 2014) e algoritmo europeu/UK atualizado (12/2024)",
    "American Academy of Pediatrics — Red Book 2024–2027: Tinea capitis (griseofulvina micronizada 20–25 mg/kg/dia; terbinafina por peso)",
    "Sociedade Brasileira de Pediatria — Departamento Científico de Dermatologia: Micoses superficiais na infância (documento científico vigente)",
    "Ministério da Saúde — RENAME 2024 (fluconazol); bulas ANVISA (Fulcin — griseofulvina 500 mg, bula atualizada 2025; terbinafina; itraconazol)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

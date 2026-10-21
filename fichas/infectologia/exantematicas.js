// Doenças exantemáticas: diagnóstico diferencial e notificação
registrarFicha({
  id: "exantematicas",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "completo",
  titulo: "Doenças exantemáticas: diagnóstico diferencial e notificação",
  resumo: "Criança com febre e exantema. Ficha de triagem: reconhecer o que é grave (meningococcemia, Kawasaki, dengue grave, farmacodermia grave), diferenciar as viroses comuns e notificar sarampo e rubéola no mesmo dia.",
  palavrasChave: "exantema rash manchas febre sarampo rubeola roseola exantema subito eritema infeccioso parvovirus varicela escarlatina mao pe boca dengue zika chikungunya kawasaki meningococcemia petequias farmacodermia notificacao",
  critico: {
    tempo: "Petéquias + febre: antibiótico já",
    texto: "Febre com petéquias ou púrpura e criança com mau estado geral é meningococcemia até prova em contrário: ceftriaxona IV/IM imediata e transferência. Febre + exantema maculopapular → notificar sarampo/rubéola em até 24 h e isolar."
  },
  alarmes: [
    "Petéquias ou púrpura que não somem à digitopressão, com febre",
    "Criança prostrada, gemente, sonolenta ou irritada demais, má perfusão (TEC > 2 s), taquicardia ou hipotensão",
    "Febre ≥ 5 dias com conjuntivite, alteração de lábios/língua, edema de mãos e pés (Kawasaki)",
    "Bolhas, descolamento da pele, lesão de mucosas (Stevens-Johnson/NET, pele escaldada)",
    "Sinais de alarme de dengue: dor abdominal intensa, vômitos persistentes, sangramento, letargia, queda de plaquetas com aumento de hematócrito",
    "Dispneia, pneumonia ou encefalite após exantema (sarampo, varicela)",
    "Lactente < 3 meses febril, imunodeprimido ou gestante com exantema"
  ],
  condutaInicial: [
    "Avaliar estado geral (Triângulo de Avaliação Pediátrica) e sinais vitais antes de pensar no diagnóstico",
    "Pressionar as lesões (ou usar copo de vidro): petéquia/púrpura não some",
    "Definir: tipo de lesão (maculopapular, vesicular, petequial, eritema difuso), onde começou, relação com a febre",
    "Perguntar vacinação (tríplice viral, varicela), viagens, contatos e medicamentos novos",
    "Suspeita de sarampo ou rubéola: máscara cirúrgica no paciente, sala separada, notificar na hora e coletar sorologia + swab + urina",
    "Gestante contato ou com exantema: sorologias e encaminhar ao pré-natal"
  ],
  fataisExcluir: [
    "Meningococcemia (doença meningocócica)",
    "Choque séptico / síndrome do choque tóxico",
    "Doença de Kawasaki (aneurisma coronariano)",
    "Dengue com sinais de alarme ou grave",
    "Stevens-Johnson / necrólise epidérmica tóxica / DRESS",
    "Sarampo complicado (pneumonia, encefalite) em lactente ou desnutrido",
    "Febre maculosa (exposição a carrapato, petéquias em punhos e tornozelos)"
  ],
  proximaDecisao: "Criança grave ou com petéquias/púrpura → PS com antibiótico já iniciado. Criança bem, exantema típico de virose benigna → sintomáticos e retorno. Suspeita de sarampo ou rubéola → notificar em 24 h, coletar exames e iniciar bloqueio vacinal dos contatos em 72 h.",
  clinica: {
    anamnese: [
      "Idade, dias de febre e relação febre–exantema (exantema súbito: aparece quando a febre some)",
      "Onde começou e como se espalhou (sarampo: atrás das orelhas e face, descendente)",
      "Pródromo: tosse, coriza e conjuntivite (sarampo); dor de garganta (escarlatina); lesões na boca (mão-pé-boca, herpes)",
      "Vacinas: tríplice viral (12 meses) e tetraviral (15 meses), varicela; cartão em mãos",
      "Contatos doentes, creche, viagem recente, surto no território",
      "Medicamentos nos últimos 2 meses (anticonvulsivantes, sulfas, betalactâmicos, amoxicilina em mononucleose)",
      "Exposição a carrapato, área de dengue/zika/chikungunya",
      "Gestantes no domicílio (rubéola, parvovírus, varicela)"
    ],
    exameFisico: [
      "Estado geral, FC, FR, temperatura, PA, tempo de enchimento capilar, hidratação",
      "Tipo de lesão: mácula, pápula, vesícula, petéquia, eritema difuso áspero (lixa)",
      "Digitopressão das lesões",
      "Mucosas: Koplik (pontos brancos na mucosa jugal no sarampo), enantema, língua em framboesa, lábios fissurados",
      "Conjuntivite, adenomegalias (retroauricular e occipital na rubéola)",
      "Mãos e pés (edema, descamação, vesículas), região palmoplantar",
      "Hepatoesplenomegalia, sinais meníngeos",
      "Prova do laço se suspeita de dengue"
    ],
    diferenciais: [
      { dx: "Sarampo", pista: "Febre alta + tosse, coriza, conjuntivite; Koplik; exantema maculopapular da face para baixo no 3º–5º dia" },
      { dx: "Rubéola", pista: "Febre baixa, adenomegalia retroauricular e occipital, exantema rosado que dura ~3 dias" },
      { dx: "Exantema súbito (HHV-6/7)", pista: "Lactente de 6 meses a 2 anos, febre alta 3–5 dias, exantema surge quando a febre cessa" },
      { dx: "Eritema infeccioso (parvovírus B19)", pista: "Bochechas esbofeteadas, depois rendilhado em membros que vai e volta" },
      { dx: "Varicela", pista: "Vesículas em vários estágios ao mesmo tempo, começam no tronco, pruriginosas" },
      { dx: "Escarlatina", pista: "Faringite, exantema áspero em lixa, Pastia, palidez perioral, língua em framboesa" },
      { dx: "Mão-pé-boca", pista: "Úlceras orais + vesículas em mãos, pés e glúteos" },
      { dx: "Dengue / zika / chikungunya", pista: "Área endêmica; dengue: dor retro-orbitária, mialgia; zika: exantema pruriginoso precoce e conjuntivite; chikungunya: artralgia intensa" },
      { dx: "Doença de Kawasaki", pista: "Febre ≥ 5 dias + conjuntivite sem secreção, alteração de lábios/língua, exantema polimorfo, edema de extremidades, linfonodo cervical" },
      { dx: "Meningococcemia", pista: "Petéquias/púrpura, mau estado geral, evolução em horas" },
      { dx: "Farmacodermia", pista: "Medicamento novo 4 dias a 8 semanas antes; prurido; eosinofilia (DRESS); mucosas (SJS)" },
      { dx: "Mononucleose", pista: "Faringite, adenomegalia cervical posterior, esplenomegalia; exantema após amoxicilina" }
    ],
    gravidade: [
      "Grave: petéquias/púrpura com febre, choque, rebaixamento, lesões bolhosas ou de mucosa, sinais de alarme de dengue, desconforto respiratório",
      "Moderado: criança desidratada ou que não aceita líquidos, lactente < 3 meses, imunodeprimido",
      "Leve: criança ativa, hidratada, exantema típico de virose benigna"
    ]
  },
  exames: [
    {
      nome: "Sorologia para sarampo e rubéola (caso suspeito)",
      pedido: "Sorologia IgM e IgG para sarampo e rubéola (soro). Caso suspeito notificado — enviar ao LACEN com ficha do SINAN.",
      porQue: "Confirmação laboratorial é obrigatória para todo caso suspeito.",
      esperar: "IgM reagente apoia o diagnóstico; IgM pode ser negativa nos primeiros dias do exantema.",
      interpretacao: "Seguir o fluxo da vigilância (2ª amostra quando indicada). Não vacinar o caso suspeito entre a 1ª e a 2ª coleta de soro (NT 345/2025).",
      limitacoes: "Vacinação recente pode gerar IgM reagente; a vigilância faz a interpretação."
    },
    {
      nome: "RT-PCR para sarampo e rubéola",
      pedido: "Swab combinado de naso e orofaringe + urina para RT-PCR de sarampo e rubéola (LACEN), coletados no primeiro atendimento.",
      porQue: "Detecta o vírus e permite genotipagem (diferencia vírus selvagem de vacinal).",
      esperar: "Maior positividade nos primeiros dias após o início do exantema.",
      interpretacao: "Detectável confirma o caso.",
      limitacoes: "Conferir prazos e conservação da amostra com a vigilância local."
    },
    {
      nome: "Hemograma, plaquetas e hematócrito",
      pedido: "Hemograma completo com plaquetas.",
      porQue: "Dengue (plaquetopenia, hemoconcentração), infecção bacteriana, mononucleose (linfócitos atípicos), DRESS (eosinofilia).",
      esperar: "Viroses: leucopenia ou normal.",
      interpretacao: "Leucocitose com desvio e mau estado geral → bacteriana. Hematócrito subindo com plaquetas caindo → dengue com alarme.",
      limitacoes: "Normal não exclui meningococcemia precoce."
    },
    {
      nome: "Dengue, zika e chikungunya",
      pedido: "NS1 ou RT-PCR para dengue (até o 5º dia de sintomas) ou sorologia IgM (a partir do 6º dia); RT-PCR para zika/chikungunya conforme a vigilância local.",
      porQue: "Área endêmica e exantema febril.",
      esperar: "—",
      interpretacao: "Gestante com exantema: investigar zika.",
      limitacoes: "Não aguardar resultado para hidratar e classificar o risco."
    },
    {
      nome: "Exames para criança grave (PS)",
      pedido: "Hemocultura, PCR, lactato, função renal, coagulograma, gasometria; líquor se sinais meníngeos e criança estável.",
      porQue: "Suspeita de meningococcemia, sepse, Kawasaki.",
      esperar: "—",
      interpretacao: "Kawasaki: PCR/VHS elevados, plaquetose após o 7º dia, ecocardiograma.",
      limitacoes: "Não atrasar antibiótico para coletar exames."
    }
  ],
  tratamento: [
    {
      droga: "Paracetamol",
      linha: "l1",
      dose: "10–15 mg/kg/dose (máx. 750 mg/dose)",
      via: "Oral",
      intervalo: "6/6 h se febre ou dor",
      duracao: "Enquanto houver sintomas",
      monitorizacao: "Não exceder 5 doses em 24 h",
      contraindicacoes: "Hepatopatia grave",
      ajustes: "Gotas 200 mg/mL: 1 gota/kg/dose (máx. 35 gotas)"
    },
    {
      droga: "Dipirona",
      linha: "alt",
      dose: "10–15 mg/kg/dose (máx. 1 g/dose)",
      via: "Oral",
      intervalo: "6/6 h se febre ou dor",
      duracao: "Enquanto houver sintomas",
      monitorizacao: "—",
      contraindicacoes: "Menores de 3 meses ou < 5 kg; alergia",
      ajustes: "Gotas 500 mg/mL: 20 gotas = 500 mg"
    },
    {
      droga: "Ácido acetilsalicílico e anti-inflamatórios (AINE)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "AAS: síndrome de Reye (varicela, influenza). AAS e AINE: risco de sangramento na dengue",
      ajustes: "Exceção: AAS no Kawasaki, prescrito pelo especialista"
    },
    {
      droga: "Ceftriaxona (suspeita de meningococcemia)",
      linha: "l1",
      dose: "100 mg/kg (máx. 2 g) na 1ª dose",
      via: "IV (ou IM se sem acesso)",
      intervalo: "Dose imediata, antes da transferência",
      duracao: "Conforme hospital",
      monitorizacao: "Perfusão, PA, nível de consciência",
      contraindicacoes: "Neonato com hiperbilirrubinemia ou soluções com cálcio",
      ajustes: "Não esperar exames. Avisar a vigilância (notificação imediata)"
    },
    {
      droga: "Vitamina A (sarampo suspeito)",
      linha: "l1",
      dose: "< 6 meses: 50.000 UI · 6–11 meses: 100.000 UI · ≥ 12 meses: 200.000 UI",
      via: "Oral",
      intervalo: "1 dose no dia da suspeita e 1 dose no dia seguinte",
      duracao: "2 dias",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Ver ficha Sarampo"
    }
  ],
  destino: {
    agora: [
      "Criança grave ou com petéquias: estabilizar, ceftriaxona e transferir (SAMU)",
      "Suspeita de sarampo/rubéola: isolar, notificar, coletar exames, vitamina A no sarampo"
    ],
    reavaliar: [
      "Febre persistente ≥ 5 dias: reavaliar critérios de Kawasaki",
      "Dengue: retorno conforme classificação de risco"
    ],
    alta: [
      "Criança ativa, hidratada, exantema típico de virose benigna, cuidador orientado sobre sinais de alarme"
    ],
    observacao: [
      "Dengue grupo B, criança com baixa aceitação de líquidos"
    ],
    internacao: [
      "Meningococcemia, Kawasaki, dengue com alarme, SJS/NET, sarampo ou varicela complicados, pele escaldada extensa"
    ],
    transferencia: [
      "UBS: todo caso grave, com SAMU, após 1ª dose de antibiótico quando indicado"
    ]
  },
  prescricao: {
    ambulatorial: "EXANTEMA VIRAL SEM SINAIS DE GRAVIDADE — CRIANÇA (peso: ___ kg)\nUSO ORAL\n1. Paracetamol 200 mg/mL gotas ------------------------- 1 frasco\n   Dar 1 gota por kg (máximo 35 gotas) de 6 em 6 horas se febre ou dor.\n2. (Alternativa) Dipirona 500 mg/mL gotas ------------ 1 frasco\n   Dar 10–15 mg/kg (aprox. 1 gota a cada 2 kg, máximo 40 gotas) de 6 em 6 horas se febre ou dor (não usar em menores de 3 meses).\n3. Soro de reidratação oral --------------------------- envelopes\n   Oferecer em pequenos goles ao longo do dia, além do leite e da água.\n\nSE PRURIDO (maiores de 2 anos)\n4. Loratadina 1 mg/mL xarope -------------------------- 1 frasco\n   2 a 12 anos e até 30 kg: 5 mL 1 vez ao dia; acima de 30 kg: 10 mL 1 vez ao dia, por até 5 dias.\n\nNÃO USAR: ácido acetilsalicílico (AAS), ibuprofeno ou outros anti-inflamatórios até descartar dengue e varicela.",
    hospitalar: "SUSPEITA DE MENINGOCOCCEMIA (febre + petéquias/púrpura) — CONDUTA ANTES DA TRANSFERÊNCIA (peso: ___ kg)\n1. O₂ para SpO₂ ≥ 94%; monitor; acesso venoso (ou intraósseo).\n2. Ceftriaxona 100 mg/kg (máx. 2 g) IV em 30 min (diluir em SF 0,9% ou SG 5%, 20–50 mL) — ou IM se não houver acesso. NÃO aguardar exames.\n3. Se má perfusão: Ringer lactato (ou SF 0,9%) 10–20 mL/kg IV em 5–20 min; reavaliar após cada bolus (ver ficha Sepse pediátrica).\n4. Glicemia capilar; se < 60 mg/dL: SG 10% 2–5 mL/kg IV.\n5. Precaução de gotículas (máscara cirúrgica) por 24 h após o início do antibiótico.\n6. Notificação imediata à vigilância (quimioprofilaxia dos contatos).\n7. Transferir com SAMU levando horário e dose do antibiótico."
  },
  orientacoesRetorno: [
    "A maioria das manchas com febre é virose e melhora sozinha em poucos dias",
    "Dar bastante líquido; febre pode ser tratada com paracetamol ou dipirona; não dar AAS nem ibuprofeno",
    "Voltar imediatamente se: manchas roxas ou vermelho-escuras que não somem ao apertar, criança muito sonolenta ou irritada, gemência, falta de ar, vômitos que não param, dor de barriga forte, sangramento, pouca urina, bolhas ou feridas na boca e nos olhos",
    "Febre por 5 dias ou mais: voltar para nova avaliação",
    "Se suspeita de sarampo ou rubéola: manter a criança em casa, longe de gestantes e de bebês, até liberação da equipe; levar o cartão de vacina de toda a família",
    "Gestante que teve contato com criança com manchas e febre: avisar no pré-natal"
  ],
  tabelas: [
    {
      titulo: "Doenças exantemáticas — pistas para o diagnóstico",
      colunas: ["Doença", "Idade típica", "Febre × exantema", "Exantema", "Pista", "Notificação"],
      linhas: [
        ["Sarampo", "Qualquer (não vacinados)", "Febre alta, pródromo 3–5 dias", "Maculopapular, face → descendente, confluente", "Tosse, coriza, conjuntivite, Koplik", "Imediata (24 h)"],
        ["Rubéola", "Crianças e adultos jovens", "Febre baixa", "Rosado, face → corpo, some em ~3 dias", "Adenomegalia retroauricular/occipital, artralgia", "Imediata (24 h)"],
        ["Exantema súbito", "6 meses–2 anos", "Febre alta 3–5 dias; exantema quando a febre cessa", "Maculopapular róseo no tronco", "Criança bem; pode convulsão febril", "Não"],
        ["Eritema infeccioso", "Escolar", "Febre baixa ou ausente", "Face esbofeteada, depois rendilhado", "Recorre com calor/sol; artrite em adultos", "Não (surtos sim)"],
        ["Varicela", "Qualquer", "Febre junto com vesículas", "Vesículas em vários estágios, centrípeto", "Prurido; couro cabeludo", "Casos graves, óbitos e surtos"],
        ["Escarlatina", "3–15 anos", "Febre e faringite antes", "Eritema áspero (lixa), dobras (Pastia)", "Língua em framboesa, palidez perioral", "Não (surtos sim)"],
        ["Mão-pé-boca", "< 5 anos", "Febre baixa", "Vesículas em mãos, pés, glúteos", "Úlceras orais", "Surtos"],
        ["Dengue", "Qualquer", "Exantema na defervescência", "Maculopapular, prurido, ilhas de pele sã", "Mialgia, dor retro-orbitária", "Compulsória (óbito: imediata)"],
        ["Zika", "Qualquer", "Febre baixa ou ausente", "Maculopapular pruriginoso precoce", "Conjuntivite não purulenta; gestante: investigar", "Compulsória (gestante: imediata)"],
        ["Kawasaki", "< 5 anos", "Febre ≥ 5 dias", "Polimorfo, sem vesículas", "Conjuntivite, lábios, edema de mãos/pés, linfonodo", "Não"],
        ["Meningococcemia", "Qualquer", "Febre aguda, mau estado geral", "Petéquias/púrpura", "Evolução em horas, choque", "Imediata (24 h)"]
      ],
      nota: "Notificação conforme Lista Nacional de Notificação Compulsória e Guia de Vigilância em Saúde (MS, 6ª ed. revisada, 2024). Definição de caso suspeito de sarampo e rubéola atualizada pela NT Conjunta 344/2025-MS."
    }
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª edição revisada (2024): sarampo, rubéola, varicela, doença meningocócica, arboviroses",
    "Ministério da Saúde — Notas Técnicas Conjuntas nº 344/2025 e nº 345/2025-CGVDI/DPNI/SVSA/MS (vigilância do sarampo e rubéola, conduta e bloqueio vacinal)",
    "Ministério da Saúde — Dengue: diagnóstico e manejo clínico, adulto e criança (6ª ed., 2024)",
    "American Academy of Pediatrics — Red Book: Report of the Committee on Infectious Diseases, 2024–2027",
    "American Heart Association — Update on Diagnosis and Management of Kawasaki Disease: Scientific Statement (Circulation, 2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

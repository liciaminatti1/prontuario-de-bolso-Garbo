// Colecistite aguda e colangite aguda — Tokyo Guidelines 2018
registrarFicha({
  id: "colecistite-colangite",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Colecistite aguda e colangite aguda (Tokyo 2018)",
  resumo: "Diagnóstico, gravidade e tratamento pelas Tokyo Guidelines 2018. Colecistite: dor no hipocôndrio direito + inflamação sistêmica + imagem. Colangite: inflamação sistêmica + colestase + imagem, com drenagem biliar conforme gravidade. Para cólica biliar simples, ver ficha colica-biliar.",
  palavrasChave: "colecistite colangite tokyo tg18 charcot reynolds murphy cpre drenagem biliar colecistostomia colecistectomia coledocolitiase ictericia sepse biliar ceftriaxona metronidazol piperacilina",
  critico: {
    tempo: "Colangite: ATB 1ª h + drenar",
    texto: "Colangite grave (hipotensão, confusão, disfunção orgânica): hemoculturas, antibiótico na 1ª hora, suporte e drenagem biliar urgente (CPRE ou percutânea) assim que estabilizar."
  },
  alarmes: [
    "Tríade de Charcot (febre, icterícia, dor no hipocôndrio direito)",
    "Pêntade de Reynolds: + hipotensão e confusão mental",
    "Disfunção orgânica: hipotensão com vasopressor, rebaixamento, PaO₂/FiO₂ < 300, oligúria ou creatinina > 2,0, INR > 1,5, plaquetas < 100 mil",
    "Colecistite com peritonite, gás na parede (enfisematosa) ou massa (abscesso, gangrena)",
    "Idoso, diabético, imunossuprimido: gangrena com poucos sinais",
    "Colecistite alitiásica no paciente crítico (UTI, queimado, nutrição parenteral)"
  ],
  condutaInicial: [
    "Jejum, hidratação venosa, analgesia (dipirona, AINE se função renal normal, opioide se necessário)",
    "Hemoculturas (2 pares) antes do antibiótico se colangite ou sepse",
    "Hemograma, PCR, bilirrubinas, FA, GGT, TGO, TGP, lipase, creatinina, coagulograma, lactato, gasometria",
    "USG de abdome superior (1ª imagem); colangio-RM se suspeita de coledocolitíase sem indicação imediata de CPRE",
    "Aplicar critérios Tokyo: diagnóstico e grau (I, II, III)",
    "Antibiótico conforme grau e origem (comunitária × hospitalar)",
    "Cirurgia geral e, se colangite, endoscopia (CPRE) ou radiologia intervencionista"
  ],
  fataisExcluir: [
    "Colangite grave / choque séptico biliar",
    "Colecistite gangrenosa, perfurada ou enfisematosa",
    "Pancreatite aguda biliar",
    "IAM inferior, úlcera perfurada, pneumonia de base direita",
    "Abscesso hepático"
  ],
  proximaDecisao: "Colecistite grau I → colecistectomia laparoscópica precoce (idealmente em até 72 h, aceitável até 7 dias do início). Grau II → colecistectomia precoce em centro experiente; se alto risco cirúrgico ou inflamação grave, drenagem da vesícula. Grau III → suporte, antibiótico; colecistectomia precoce só em centro avançado e paciente com critérios favoráveis; senão drenagem (colecistostomia percutânea) e cirurgia tardia. Colangite grau I → drenar se não responder ao antibiótico em 24 h; grau II → drenagem precoce; grau III → drenagem urgente após estabilização.",
  clinica: {
    anamnese: [
      "Dor no hipocôndrio direito/epigástrio contínua > 6 h, irradiação para escápula direita",
      "Febre, calafrios, icterícia, colúria, acolia, prurido",
      "Cálculos conhecidos, episódios prévios de cólica, colecistectomia, CPRE ou anastomose biliodigestiva prévia",
      "Comorbidades, anticoagulantes, antiagregantes (planejamento de CPRE/cirurgia)"
    ],
    exameFisico: [
      "Sinais vitais, perfusão, nível de consciência",
      "Sinal de Murphy, massa ou defesa no hipocôndrio direito",
      "Icterícia",
      "Sinais de peritonite"
    ],
    diferenciais: [
      { dx: "Cólica biliar simples", pista: "Dor < 6 h, sem febre nem inflamação; ver ficha colica-biliar" },
      { dx: "Coledocolitíase sem colangite", pista: "Icterícia e colestase sem febre" },
      { dx: "Pancreatite biliar", pista: "Lipase ≥ 3× o limite superior, dor em faixa" },
      { dx: "Hepatite aguda", pista: "Transaminases muito altas (> 10×)" },
      { dx: "Neoplasia de vias biliares/pâncreas", pista: "Icterícia progressiva indolor, perda de peso, vesícula palpável" },
      { dx: "Síndrome de Fitz-Hugh-Curtis", pista: "Mulher jovem com DIP" }
    ],
    gravidade: [
      "COLECISTITE — Grau III (grave): qualquer disfunção orgânica (cardiovascular, neurológica, respiratória, renal, hepática, hematológica)",
      "COLECISTITE — Grau II (moderada): leucócitos > 18.000; massa palpável no hipocôndrio direito; sintomas > 72 h; inflamação local intensa (gangrena, abscesso pericolecístico ou hepático, peritonite biliar, colecistite enfisematosa)",
      "COLECISTITE — Grau I (leve): não preenche II nem III",
      "COLANGITE — Grau III: qualquer disfunção orgânica",
      "COLANGITE — Grau II: 2 ou mais de: leucócitos > 12.000 ou < 4.000; febre ≥ 39 °C; idade ≥ 75 anos; bilirrubina total ≥ 5 mg/dL; hipoalbuminemia (< 0,7 × limite inferior)",
      "COLANGITE — Grau I: não preenche II nem III"
    ]
  },
  exames: [
    {
      nome: "Laboratório hepatobiliar e de gravidade",
      pedido: "Hemograma, PCR, bilirrubina total e frações, fosfatase alcalina, GGT, TGO, TGP, lipase, albumina, ureia, creatinina, Na, K, TP/INR, TTPa, gasometria venosa com lactato.",
      porQue: "Critérios Tokyo e graduação.",
      esperar: "Leucocitose, PCR alta; colangite: bilirrubina e enzimas canaliculares elevadas.",
      interpretacao: "Bilirrubina ≥ 2 mg/dL ou enzimas > 1,5× o limite superior = critério de colestase (colangite).",
      limitacoes: "Colecistite simples pode ter leve aumento de bilirrubina sem coledocolitíase."
    },
    {
      nome: "Hemoculturas",
      pedido: "Hemoculturas — 2 pares (periféricas), antes do antibiótico. Cultura de bile na CPRE/cirurgia.",
      porQue: "Colangite e colecistite grave; ajuste do antibiótico.",
      esperar: "E. coli, Klebsiella, Enterococcus, anaeróbios.",
      interpretacao: "Ajustar ao antibiograma.",
      limitacoes: "Não atrasar o antibiótico por causa das culturas."
    },
    {
      nome: "Ultrassonografia de abdome superior",
      pedido: "Ultrassonografia de abdome superior (vesícula e vias biliares).",
      porQue: "1ª escolha para colecistite e para ver dilatação de vias biliares.",
      esperar: "Cálculos, parede > 4 mm, líquido pericolecístico, Murphy ultrassonográfico, vesícula distendida; colédoco dilatado.",
      interpretacao: "Critério de imagem para colecistite (C). Dilatação biliar = critério de imagem para colangite.",
      limitacoes: "Pouco sensível para cálculo no colédoco distal."
    },
    {
      nome: "Colangiorressonância",
      pedido: "Colangiorressonância magnética — investigar coledocolitíase.",
      porQue: "Risco intermediário de coledocolitíase antes de indicar CPRE.",
      esperar: "Cálculo no colédoco, estenose.",
      interpretacao: "Positiva → CPRE (ou exploração cirúrgica da via biliar).",
      limitacoes: "Não atrasar drenagem na colangite moderada/grave."
    },
    {
      nome: "Tomografia com contraste",
      pedido: "Tomografia de abdome superior com contraste endovenoso.",
      porQue: "Complicações (gangrena, perfuração, abscesso, enfisematosa), dúvida diagnóstica, neoplasia.",
      esperar: "—",
      interpretacao: "—",
      limitacoes: "Menos sensível que a USG para cálculos."
    }
  ],
  tratamento: [
    {
      droga: "Ceftriaxona + metronidazol",
      linha: "l1",
      dose: "Ceftriaxona 2 g + metronidazol 500 mg",
      via: "IV",
      intervalo: "Ceftriaxona 24/24 h; metronidazol 8/8 h",
      duracao: "Colecistite I–II: suspender em até 24 h após a colecistectomia (manter 4–7 dias se perfuração, enfisematosa ou necrose). Colangite: 4–7 dias após controle do foco (drenagem)",
      monitorizacao: "Febre, leucograma, bilirrubinas, culturas",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Comunitária grau I–II. Metronidazol obrigatório se anastomose biliodigestiva; opcional nos demais casos. Alternativas grau I: cefazolina 2 g IV 8/8 h ou cefuroxima 1,5 g IV 8/8 h (± metronidazol). Ampicilina-sulbactam só se baixa resistência local de E. coli"
    },
    {
      droga: "Piperacilina-tazobactam",
      linha: "l1",
      dose: "4,5 g",
      via: "IV em 30 min (ou infusão estendida em 4 h)",
      intervalo: "6/6 h",
      duracao: "Igual ao acima",
      monitorizacao: "Função renal",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Grau III comunitário e infecção associada a cuidados de saúde. ClCr < 40: ajustar. Alternativas: cefepima 2 g IV 8/8 h + metronidazol; meropenem 1 g IV 8/8 h (ESBL ou choque). Grau III: considerar vancomicina (Enterococcus) conforme Tokyo"
    },
    {
      droga: "Ciprofloxacino + metronidazol (alergia a betalactâmico)",
      linha: "alt",
      dose: "Ciprofloxacino 400 mg + metronidazol 500 mg",
      via: "IV",
      intervalo: "Ciprofloxacino 12/12 h; metronidazol 8/8 h",
      duracao: "Igual",
      monitorizacao: "QT, resistência local alta de E. coli",
      contraindicacoes: "QT longo",
      ajustes: "Usar só se resistência local a quinolona < 20% ou guiado por cultura"
    },
    {
      droga: "Colecistectomia laparoscópica",
      linha: "l1",
      dose: "—",
      via: "Cirúrgica",
      intervalo: "—",
      duracao: "Precoce: idealmente em até 72 h, aceitável até 7 dias do início dos sintomas",
      monitorizacao: "Lesão de via biliar, fístula biliar, sangramento",
      contraindicacoes: "Instabilidade ou risco cirúrgico proibitivo (preferir drenagem)",
      ajustes: "Colangite por coledocolitíase: CPRE para drenar e, em seguida, colecistectomia na mesma internação"
    },
    {
      droga: "Drenagem biliar (CPRE com papilotomia/prótese) ou drenagem percutânea",
      linha: "l1",
      dose: "—",
      via: "Endoscópica (preferida) ou percutânea trans-hepática",
      intervalo: "—",
      duracao: "Grau III: urgente após estabilização; grau II: precoce (em geral em até 24–48 h); grau I: se não melhorar em 24 h",
      monitorizacao: "Pancreatite pós-CPRE, sangramento, perfuração",
      contraindicacoes: "Coagulopatia não corrigida (relativa)",
      ajustes: "Paciente instável: drenagem simples (prótese ou dreno nasobiliar) e tratamento definitivo do cálculo depois. Colecistite em alto risco: colecistostomia percutânea"
    },
    {
      droga: "Dipirona / cetoprofeno / morfina",
      linha: "adj",
      dose: "Dipirona 1 g · Cetoprofeno 100 mg · Morfina 2–4 mg",
      via: "IV",
      intervalo: "Dipirona 6/6 h; cetoprofeno 12/12 h; morfina 4/4 h SN",
      duracao: "Enquanto dor",
      monitorizacao: "Função renal (AINE), FR (opioide)",
      contraindicacoes: "AINE: DRC, sangramento, úlcera, sepse com hipoperfusão",
      ajustes: "Cetoprofeno 100 mg em 100 mL de SF em 20 min"
    }
  ],
  destino: {
    agora: [
      "Jejum, hidratação, antibiótico, analgesia",
      "Colangite grau III ou colecistite grau III: leito monitorizado / UTI"
    ],
    reavaliar: [
      "Resposta ao antibiótico em 24 h (colangite grau I sem melhora → drenar)",
      "Bilirrubinas e leucograma a cada 24–48 h"
    ],
    alta: [
      "Após colecistectomia ou drenagem com controle da infecção, afebril, aceitando dieta",
      "Se drenagem percutânea: agendar colecistectomia tardia"
    ],
    observacao: [
      "—"
    ],
    internacao: [
      "Todos os casos de colecistite e colangite"
    ],
    transferencia: [
      "Colangite grau II–III sem CPRE disponível: transferir para centro com endoscopia biliar após antibiótico e estabilização"
    ]
  },
  prescricao: {
    hospitalar: "COLECISTITE / COLANGITE AGUDA — ADULTO\n1. Jejum.\n2. Ringer lactato 1.000 mL IV de 8/8 h (bolus de 500 mL se hipotenso; reavaliar).\n3. Hemoculturas 2 pares antes do antibiótico.\n4. Ceftriaxona 2 g + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia.\n5. Metronidazol 500 mg/100 mL IV em 30–60 min de 8/8 h.\n   (Grau III, hospitalar ou choque: piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h, no lugar de 4 e 5.)\n6. Dipirona 1 g + água destilada 10 mL IV lento de 6/6 h.\n7. Morfina 1 mg/mL (diluída): 2–4 mg IV se dor intensa, até de 4/4 h.\n8. Ondansetrona 4 mg IV lento de 8/8 h se náusea.\n9. Omeprazol 40 mg IV 1 vez ao dia enquanto em jejum (se risco de úlcera de estresse).\n10. Enoxaparina 40 mg SC 1 vez ao dia (suspender 12 h antes de cirurgia/CPRE conforme equipe).\n11. Sinais vitais de 4/4 h (de 1/1 h se grau III); diurese; glicemia capilar se diabético.\n12. Avaliação da cirurgia geral e da endoscopia (CPRE) se colangite.",
    ambulatorial: "PÓS-COLECISTECTOMIA LAPAROSCÓPICA\nUSO ORAL\n1. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 2 comprimidos de 6 em 6 horas por 3 a 5 dias; depois se dor.\n2. Paracetamol 750 mg ----------------------------- 1 caixa\n   Tomar 1 comprimido de 8 em 8 horas se dor persistente.\n\nAntibiótico oral apenas se indicado pelo cirurgião (ex.: colangite drenada, completar 4–7 dias): amoxicilina-clavulanato 875/125 mg de 12/12 h."
  },
  orientacoesRetorno: [
    "Após a cirurgia: caminhar no mesmo dia, dieta leve e progressiva, banho normal",
    "Voltar imediatamente se: febre, pele ou olhos amarelos, urina escura, dor forte que aumenta, barriga inchada, vômitos, vermelhidão ou pus nos cortes",
    "Dor no ombro direito nos primeiros dias pode ser do gás da laparoscopia",
    "Se recebeu dreno na vesícula (sem cirurgia ainda): cuidar do dreno, anotar o volume e manter o retorno para a cirurgia programada",
    "Retorno com o cirurgião em 7–14 dias, com o resultado da anatomia patológica"
  ],
  tabelas: [
    {
      titulo: "Critérios diagnósticos Tokyo 2018",
      colunas: ["Item", "Colecistite", "Colangite"],
      linhas: [
        ["A", "Local: Murphy; dor, massa ou sensibilidade no hipocôndrio direito", "Inflamação sistêmica: febre > 38 °C e/ou calafrios; leucócitos < 4.000 ou > 10.000, PCR ≥ 1 mg/dL"],
        ["B", "Sistêmico: febre, PCR elevada, leucocitose", "Colestase: bilirrubina ≥ 2 mg/dL; FA, GGT, TGO ou TGP > 1,5× o limite superior"],
        ["C", "Imagem compatível (USG, TC, cintilografia)", "Imagem: dilatação biliar ou causa (cálculo, estenose, prótese)"],
        ["Suspeita", "A + B", "A + (B ou C)"],
        ["Definitivo", "A + B + C", "A + B + C"]
      ]
    },
    {
      titulo: "Antibiótico conforme gravidade (Tokyo 2018, resumo)",
      colunas: ["Situação", "Opções"],
      linhas: [
        ["Comunitária grau I", "Cefazolina, cefuroxima ou ceftriaxona (± metronidazol)"],
        ["Comunitária grau II", "Ceftriaxona ± metronidazol; piperacilina-tazobactam; ciprofloxacino + metronidazol (alérgico)"],
        ["Comunitária grau III", "Piperacilina-tazobactam; cefepima + metronidazol; meropenem (ESBL) — considerar vancomicina"],
        ["Associada a cuidados de saúde (qualquer grau)", "Piperacilina-tazobactam; cefepima + metronidazol; meropenem; + vancomicina; guiar por culturas"]
      ],
      nota: "Duração: colecistite I–II, até 24 h após colecistectomia; colangite e colecistite complicada, 4–7 dias após controle do foco. Bacteremia por Gram-positivo (Enterococcus/Streptococcus): mínimo 2 semanas."
    }
  ],
  fontes: [
    "Tokyo Guidelines 2018 (TG18): diagnostic criteria and severity grading of acute cholecystitis and acute cholangitis; antimicrobial therapy; flowcharts (J Hepatobiliary Pancreat Sci, 2018)",
    "WSES — 2020 updated guidelines for the diagnosis and treatment of acute calculus cholecystitis (Pisano et al., 2020)",
    "ASGE — Guideline on the management of choledocholithiasis (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

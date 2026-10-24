// Óbito fetal
registrarFicha({
  id: "obito-fetal",
  especialidade: "ginecologia-obstetricia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Óbito fetal (natimorto)",
  resumo: "Morte fetal a partir de 20 semanas ou peso ≥ 500 g. Diagnóstico por USG, investigação da causa, resolução da gestação (em geral indução vaginal), apoio ao luto e preenchimento obrigatório da Declaração de Óbito.",
  palavrasChave: "obito fetal natimorto morte fetal intrauterina mfiu feto morto bcf ausente inducao misoprostol declaracao de obito fetal luto perinatal cabergolina inibicao lactacao kleihauer necropsia",
  critico: {
    tempo: "Confirmar por USG",
    texto: "BCF ausente ao sonar não basta: confirmar ausência de atividade cardíaca por USG. Avaliar a mãe (PA, sangramento, febre, coagulação) antes de planejar o parto; DPP, rotura e infecção pedem resolução imediata."
  },
  alarmes: [
    "Sangramento com dor e hipertonia (DPP com CIVD)",
    "Febre, taquicardia, secreção fétida (infecção intrauterina/sepse)",
    "PA ≥ 160/110 ou sinais de pré-eclâmpsia/HELLP",
    "Fibrinogênio < 200 mg/dL ou sangramento em punções (CIVD, mais provável após 4 semanas de retenção)",
    "Dor intensa em gestante com cesárea prévia durante indução (rotura uterina)",
    "Ideação suicida ou sofrimento psíquico grave"
  ],
  conduta: [
    "Comunicar a notícia com privacidade, linguagem clara, presença de acompanhante; confirmar com USG",
    "Avaliar a mãe: sinais vitais, sangramento, PA, febre, tipagem e coagulação",
    "Colher exames de investigação antes do parto (lista abaixo)",
    "Decidir o momento com a mulher: indução logo é o habitual; conduta expectante curta é opção se estável, sem infecção e sem DPP (a maioria entra em trabalho de parto em 2 semanas; fibrinogênio semanal)",
    "Via: vaginal na maioria; cesárea só por indicação materna (placenta prévia, mais de uma cesárea prévia ou incisão corporal, situação transversa no termo, instabilidade)",
    "Indução: misoprostol conforme IG (tabela); cesárea prévia ≥ 28 semanas: preferir sonda de Foley + ocitocina e evitar misoprostol",
    "Analgesia eficaz no trabalho de parto (peridural se coagulação normal)",
    "Após o parto: exame do natimorto e da placenta, necropsia (oferecer), anatomopatológico da placenta, cariótipo/microarray se malformação ou causa desconhecida",
    "Rh negativo não sensibilizada: imunoglobulina anti-D 300 mcg IM em até 72 h (dose conforme Kleihauer)",
    "Inibir lactação com cabergolina (se a mulher desejar e sem hipertensão/pré-eclâmpsia)",
    "Preencher a Declaração de Óbito fetal (obrigatória se ≥ 20 semanas, ≥ 500 g ou ≥ 25 cm); o óbito fetal é de investigação obrigatória pela vigilância",
    "Apoio ao luto: oferecer ver, tocar e segurar o bebê, dar nome, lembranças (foto, pulseira, mecha de cabelo); quarto separado de puérperas com bebês; psicologia e serviço social"
  ],
  exames: [
    "Mãe: hemograma com plaquetas, TP, TTPa, fibrinogênio, tipagem ABO/Rh, Coombs indireto, Kleihauer-Betke",
    "Glicemia de jejum e HbA1c; TSH",
    "Sorologias: VDRL/teste rápido de sífilis, HIV, toxoplasmose, parvovírus B19 (IgM/IgG), CMV; hepatites B e C se não feitas",
    "Anticorpos antifosfolípides (anticoagulante lúpico, anticardiolipina, anti-beta-2-glicoproteína I) — repetir em 12 semanas se positivos",
    "Função hepática, ácidos biliares (se prurido), creatinina, proteinúria se hipertensão",
    "Rastreio de drogas na urina (com consentimento) se suspeita",
    "Feto e placenta: necropsia (com consentimento), anatomopatológico de placenta, cordão e membranas; cariótipo ou microarray (pele fetal, placenta ou líquido amniótico); radiografia/fotografia se necropsia recusada",
    "Trombofilias hereditárias: não pedir de rotina (só se história pessoal/familiar de TEV)"
  ],
  diferenciais: [
    "Erro de ausculta (obesidade, polidrâmnio): sempre confirmar por USG",
    "Abortamento (< 20 semanas e < 500 g): ver ficha abortamento"
  ],
  tratamento: [
    {
      droga: "Misoprostol (indução)",
      linha: "l1",
      dose: "14 a < 28 semanas: 200 mcg · ≥ 28 semanas: 25 mcg vaginal (ou 25 mcg VO)",
      via: "Vaginal, sublingual ou bucal (até 28 sem); vaginal ou oral (≥ 28 sem)",
      intervalo: "< 28 sem: 4/4 h a 6/6 h · ≥ 28 sem: 25 mcg vaginal de 6/6 h ou 25 mcg VO de 2/2 h",
      duracao: "Até a expulsão; reavaliar se sem resposta em 24 h",
      monitorizacao: "Dinâmica uterina, sangramento, febre",
      contraindicacoes: "Cesárea prévia ≥ 28 semanas (risco de rotura): preferir Foley e ocitocina",
      ajustes: "FIGO 2023. Cicatriz uterina < 28 semanas: uso possível com cautela e dose menor conforme protocolo. Comprimidos de 25 e 200 mcg disponíveis em hospitais"
    },
    {
      droga: "Ocitocina",
      linha: "alt",
      dose: "5 UI em 500 mL de SF 0,9%; iniciar 1–2 mUI/min e aumentar a cada 30–40 min",
      via: "IV em bomba",
      intervalo: "Contínuo",
      duracao: "Até o parto",
      monitorizacao: "Dinâmica uterina",
      contraindicacoes: "—",
      ajustes: "Após preparo cervical (Foley) ou com colo favorável; iniciar ≥ 4 h após a última dose de misoprostol"
    },
    {
      droga: "Cabergolina (inibição da lactação)",
      linha: "l1",
      dose: "1 mg (2 comprimidos de 0,5 mg)",
      via: "VO",
      intervalo: "Dose única no 1º dia pós-parto",
      duracao: "—",
      monitorizacao: "PA",
      contraindicacoes: "Hipertensão não controlada, pré-eclâmpsia, puerpério com hipertensão",
      ajustes: "Se a mulher desejar. Alternativa não farmacológica: sutiã firme, compressas frias, evitar estimular as mamas"
    },
    {
      droga: "Imunoglobulina anti-D",
      linha: "l1",
      dose: "300 mcg (1.500 UI)",
      via: "IM",
      intervalo: "Dose única até 72 h após o parto",
      duracao: "—",
      monitorizacao: "Kleihauer-Betke",
      contraindicacoes: "Mãe Rh positivo ou sensibilizada",
      ajustes: "Mãe Rh negativo, Coombs indireto negativo (tipagem do feto geralmente indisponível)"
    }
  ],
  prescricao: {
    hospitalar: "ÓBITO FETAL — INDUÇÃO (IG: ___ semanas; cesárea prévia: ___)\n1. Dieta livre (zero se analgesia/procedimento).\n2. Acomodar em quarto privativo, longe de mães com bebês; acompanhante livre.\n3. Se ≥ 28 semanas e sem cicatriz uterina: misoprostol 25 mcg via vaginal de 6/6 h (ou 25 mcg VO de 2/2 h) até trabalho de parto.\n   Se 14 a < 28 semanas: misoprostol 200 mcg via vaginal ou sublingual de 4/4 h a 6/6 h.\n   Se cesárea prévia e ≥ 28 semanas: sonda Foley 16–18 Fr intracervical com balão de 30–60 mL de SF 0,9%, seguida de ocitocina.\n4. Ocitocina 5 UI + SF 0,9% 500 mL IV em bomba, iniciar 6–12 mL/h e aumentar a cada 30–40 min conforme protocolo (≥ 4 h após último misoprostol).\n5. Analgesia: dipirona 1 g IV de 6/6 h; morfina 2–4 mg IV se dor intensa; peridural se coagulação normal.\n6. Após o parto: cabergolina 0,5 mg — 2 comprimidos VO, dose única (se desejar e sem hipertensão).\n7. Se Rh negativo e Coombs indireto negativo: imunoglobulina anti-D 300 mcg IM até 72 h.\n8. Exames: hemograma, plaquetas, TP, TTPa, fibrinogênio, tipagem, Coombs indireto, Kleihauer-Betke, glicemia, HbA1c, TSH, VDRL, HIV, toxoplasmose, parvovírus B19, CMV, anticorpos antifosfolípides; anatomopatológico de placenta; necropsia/cariótipo se autorizados.\n9. Controles: sinais vitais de 4/4 h; dinâmica uterina; sangramento; temperatura.\n10. Solicitar psicologia e serviço social; preencher Declaração de Óbito.",
    ambulatorial: "ALTA APÓS ÓBITO FETAL\nUSO ORAL\n1. Paracetamol 750 mg ------------------------------ 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se dor.\n2. Sulfato ferroso 40 mg de ferro elementar --------- 30 comprimidos\n   Tomar 1 comprimido ao dia, 1 hora antes do almoço, por 1 mês (ou conforme Hb).\n3. Ácido fólico 5 mg (se planeja nova gestação) ------ 30 comprimidos\n   Tomar 1 comprimido ao dia; iniciar pelo menos 1 mês antes de engravidar."
  },
  orientacoesRetorno: [
    "Não foi culpa sua: na maioria das vezes não há nada que a mãe pudesse ter feito",
    "É normal sentir tristeza intensa, raiva ou culpa; procure a equipe da UBS e o apoio psicológico; o pai/parceiro também pode precisar de apoio",
    "O leite pode descer: usar sutiã firme, compressas frias e não estimular as mamas",
    "Voltar imediatamente se: febre, sangramento forte, dor na barriga que piora, corrimento com mau cheiro, pensamentos de se machucar",
    "Consulta de revisão em 4–6 semanas para ver o resultado dos exames e conversar sobre próxima gestação; usar método anticoncepcional até lá",
    "Direitos: a mulher com natimorto (a partir de 23 semanas) tem direito à licença-maternidade; o registro e o sepultamento são feitos com a Declaração de Óbito — o serviço social orienta"
  ],
  encaminhar: [
    "Pré-natal de alto risco na próxima gestação",
    "Psicologia/CAPS se luto complicado ou depressão",
    "Genética clínica se malformação ou alteração cromossômica"
  ],
  tabelas: [
    {
      titulo: "Declaração de Óbito fetal — quando preencher",
      colunas: ["Situação", "DO"],
      linhas: [
        ["Óbito fetal com ≥ 20 semanas, ou peso ≥ 500 g, ou estatura ≥ 25 cm", "Obrigatória — médico que assistiu (ou SVO/IML se causa externa)"],
        ["Abaixo desses limites (aborto)", "Não obrigatória; pode ser emitida se a família quiser sepultar"],
        ["Nasceu com qualquer sinal de vida e morreu depois", "Declaração de Nascido Vivo + DO de óbito não fetal (neonatal)"]
      ],
      nota: "Campo 'tipo de óbito': fetal. Registrar a causa (ex.: DPP, hipertensão materna) na parte I e condições maternas na parte II. Óbito fetal é de investigação obrigatória pela vigilância (Portaria MS nº 72/2010)."
    }
  ],
  fontes: [
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Ministério da Saúde — Declaração de Óbito: manual de instruções para preenchimento (2022) e Portaria nº 72/2010 (vigilância do óbito infantil e fetal)",
    "FIGO — Updated recommendations for the use of misoprostol alone in gynecology and obstetrics (2023)",
    "ACOG/SMFM — Obstetric Care Consensus nº 10: Management of stillbirth (2020)",
    "RCOG — Green-top Guideline nº 55: Late intrauterine fetal death and stillbirth (2010)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

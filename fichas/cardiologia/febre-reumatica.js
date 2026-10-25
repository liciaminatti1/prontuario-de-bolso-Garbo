// Febre reumática
registrarFicha({
  id: "febre-reumatica",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Febre reumática: diagnóstico (Jones 2015) e profilaxia",
  resumo: "Doença inflamatória após faringite por estreptococo do grupo A (2–4 semanas antes), sobretudo entre 5 e 15 anos. Artrite migratória, cardite, coreia, eritema marginado e nódulos. O ponto central na UBS é a profilaxia secundária com penicilina benzatina, que evita recorrências e a doença valvar reumática.",
  palavrasChave: "febre reumatica jones cardite reumatica coreia sydenham artrite migratoria eritema marginado nodulos subcutaneos aslo antiestreptolisina penicilina benzatina benzetacil profilaxia secundaria sulfadiazina estreptococo faringite valvopatia reumatica",
  critico: {
    tempo: "Benzatina a cada 21 dias",
    texto: "Confirmada a febre reumática, iniciar profilaxia secundária com penicilina benzatina a cada 21 dias e garantir busca ativa de faltosos. Todo caso suspeito faz ecocardiograma (cardite subclínica conta como critério maior)."
  },
  alarmes: [
    "Dispneia, taquicardia desproporcional à febre, sopro novo, galope ou atrito (cardite)",
    "Sinais de insuficiência cardíaca (cardite grave) → internação",
    "Bloqueio AV avançado no ECG",
    "Coreia intensa que impede andar, comer ou falar",
    "Febre persistente com sopro: excluir endocardite"
  ],
  conduta: [
    "Suspeitar: poliartrite migratória de grandes articulações, cardite ou coreia em criança/adolescente com faringite recente (Brasil = população de risco moderado/alto)",
    "Aplicar critérios de Jones 2015 (tabela): 1º surto = 2 maiores, ou 1 maior + 2 menores, com evidência de infecção estreptocócica recente",
    "Recorrência (já teve FR): 2 maiores, 1 maior + 2 menores, ou 3 menores, com evidência de infecção recente",
    "Coreia isolada (ou cardite indolente) basta para o diagnóstico, mesmo sem outros critérios",
    "Pedir: ASLO (repetir em 2 semanas se negativa), VHS, PCR, hemograma, ECG, ecocardiograma com Doppler, cultura de orofaringe ou teste rápido",
    "Na avaliação inicial: penicilina benzatina dose única para erradicar o estreptococo (é também a 1ª dose da profilaxia secundária)",
    "Artrite: AAS ou naproxeno após excluir dengue; resposta dramática em 48–72 h reforça o diagnóstico",
    "Cardite moderada/grave: prednisona, repouso, tratar IC; encaminhar/internar",
    "Coreia: ambiente calmo; haloperidol ou ácido valproico se incapacitante",
    "Profilaxia secundária: penicilina benzatina a cada 21 dias, pelo tempo da tabela; registrar no prontuário e na carteira; busca ativa se atrasar",
    "Profilaxia primária (prevenir o 1º surto): tratar toda faringite estreptocócica por 10 dias ou com benzatina dose única (ver ivas-sinusite e escarlatina)",
    "Seguimento: eco ao diagnóstico, após o surto e periodicamente conforme a lesão (ver valvulopatias); saúde bucal"
  ],
  exames: [
    "Pedido: 'Antiestreptolisina O (ASLO), VHS, proteína C reativa, hemograma. Indicação: suspeita de febre reumática.'",
    "ASLO isolada não faz diagnóstico (só prova infecção recente); anti-DNase B aumenta a sensibilidade quando disponível",
    "ECG: PR prolongado para a idade (critério menor, não vale se cardite já foi contada), BAV",
    "Ecocardiograma com Doppler: regurgitação mitral e/ou aórtica patológica (cardite subclínica = critério maior)",
    "Cultura de orofaringe ou teste rápido para estreptococo (muitas vezes negativos na fase da FR)",
    "Excluir diferenciais conforme o quadro: sorologia de dengue/chikungunya, hemoculturas se febre com sopro, FAN"
  ],
  diferenciais: [
    "Artrite viral (chikungunya, parvovírus, rubéola) e artrite reativa — ver poliartralgia-febril",
    "Artrite séptica ou gonocócica (monoartrite com febre alta)",
    "Endocardite infecciosa (febre + sopro)",
    "Lúpus, artrite idiopática juvenil, doença de Still",
    "Leucemia (dor óssea, citopenias)",
    "Coreia: lúpus, síndrome antifosfolípide, medicamentos, doença de Wilson"
  ],
  tratamento: [
    {
      droga: "Penicilina G benzatina (erradicação e profilaxia secundária)",
      linha: "l1",
      dose: "< 20 kg: 600.000 UI · ≥ 20 kg: 1.200.000 UI (AHA usa corte de 27 kg)",
      via: "IM profunda (glúteo ou vasto lateral)",
      intervalo: "Dose única na fase aguda; depois a cada 21 dias (profilaxia secundária)",
      duracao: "Conforme tabela de duração da profilaxia",
      monitorizacao: "Observar 30 min após a aplicação; controle de datas e busca de faltosos",
      contraindicacoes: "Alergia grave (anafilaxia) à penicilina",
      ajustes: "Deve ser aplicada na própria UBS (orientação do Ministério da Saúde; ter adrenalina disponível). Reação anafilática é rara. Diluir com o diluente próprio; agulha 30×8 ou 30×7"
    },
    {
      droga: "Amoxicilina (profilaxia primária — faringite)",
      linha: "alt",
      dose: "50 mg/kg/dia (máx 1 g/dia) 1×/dia ou divididos de 12/12 h; adulto 500 mg de 8/8 h ou 875 mg de 12/12 h",
      via: "VO",
      intervalo: "1–2×/dia (criança) ou 8/8–12/12 h (adulto)",
      duracao: "10 dias",
      monitorizacao: "Adesão aos 10 dias completos",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Não serve para profilaxia secundária"
    },
    {
      droga: "Sulfadiazina (profilaxia secundária se alergia à penicilina)",
      linha: "alt",
      dose: "< 30 kg: 500 mg · ≥ 30 kg: 1 g",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Mesmo tempo da benzatina",
      monitorizacao: "Hemograma periódico (leucopenia), rash",
      contraindicacoes: "Alergia a sulfa, deficiência de G6PD, final da gestação",
      ajustes: "Alergia a penicilina e a sulfa: eritromicina 250 mg VO de 12/12 h. Penicilina V 250 mg VO de 12/12 h é alternativa oral, menos eficaz que a benzatina"
    },
    {
      droga: "Ácido acetilsalicílico (artrite)",
      linha: "l1",
      dose: "Criança: 80–100 mg/kg/dia (máx 3 g/dia) divididos em 4 tomadas; adulto: 4–8 g/dia em 4 tomadas, conforme tolerância",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "Dose plena por 2 semanas, depois 60 mg/kg/dia por mais 2–4 semanas",
      monitorizacao: "Zumbido, náuseas, sangramento; transaminases",
      contraindicacoes: "Dengue não excluída, varicela ou influenza (síndrome de Reye), úlcera ativa",
      ajustes: "Alternativa: naproxeno 10–20 mg/kg/dia de 12/12 h (máx 1 g/dia), mesma duração"
    },
    {
      droga: "Prednisona (cardite moderada ou grave)",
      linha: "l1",
      dose: "1–2 mg/kg/dia (máx 80 mg/dia)",
      via: "VO",
      intervalo: "1×/dia (ou dividida)",
      duracao: "Dose plena 2–3 semanas, depois reduzir 20–25% por semana (total cerca de 12 semanas)",
      monitorizacao: "PA, glicemia, sinais de IC, eco",
      contraindicacoes: "Infecção ativa não tratada",
      ajustes: "Cardite leve: AAS isolado ou só observação. Cardite grave refratária: pulsoterapia com metilprednisolona em ambiente hospitalar (especialista). Tratar IC com diurético e IECA"
    },
    {
      droga: "Haloperidol (coreia incapacitante)",
      linha: "l1",
      dose: "Iniciar 1 mg/dia em 2 tomadas; aumentar 0,5 mg a cada 3 dias até resposta (máx 5 mg/dia)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "Até 2–3 semanas sem movimentos, depois retirar gradualmente",
      monitorizacao: "Sintomas extrapiramidais, sedação",
      contraindicacoes: "—",
      ajustes: "Alternativa: ácido valproico 10–20 mg/kg/dia (até 30 mg/kg/dia) de 12/12 h. Coreia leve: só ambiente calmo"
    }
  ],
  tabelas: [
    {
      titulo: "Critérios de Jones revisados (AHA 2015) — população de risco moderado/alto (Brasil)",
      colunas: ["Tipo", "Critérios"],
      linhas: [
        ["Maiores", "Cardite (clínica e/ou subclínica no eco) · Artrite (mono ou poliartrite) e/ou poliartralgia · Coreia · Eritema marginado · Nódulos subcutâneos"],
        ["Menores", "Monoartralgia · Febre ≥ 38 °C · VHS ≥ 30 mm/h e/ou PCR ≥ 3,0 mg/dL · PR prolongado para a idade (se cardite não foi contada como maior)"],
        ["Evidência de infecção", "ASLO ou anti-DNase B elevadas/em ascensão, cultura ou teste rápido positivo para estreptococo do grupo A"]
      ],
      nota: "Em população de baixo risco, artrite vale só se poliartrite, febre ≥ 38,5 °C e VHS ≥ 60. Uma manifestação articular não pode contar como maior e menor ao mesmo tempo."
    },
    {
      titulo: "Duração da profilaxia secundária (SBC 2009)",
      colunas: ["Situação", "Duração"],
      linhas: [
        ["FR sem cardite", "Até 21 anos ou 5 anos após o último surto (o que for mais longo)"],
        ["Cardite prévia, sem lesão residual ou com lesão leve", "Até 25 anos ou 10 anos após o último surto (o que for mais longo)"],
        ["Lesão valvar residual moderada a grave", "Até os 40 anos ou por toda a vida"],
        ["Após cirurgia valvar (troca ou plástica)", "Por toda a vida"]
      ],
      nota: "Considerar prolongar se exposição alta a estreptococo (profissionais de saúde, professores, militares, aglomerados)."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Faringite que persiste após amoxicilina por 10 dias", "Penicilina benzatina dose única (adesão é a causa mais comum de falha)", "Estreptococo do grupo A não tem resistência à penicilina descrita; considerar portador assintomático com virose"],
        ["Faringites de repetição com cultura positiva", "Amoxicilina-clavulanato 10 dias ou clindamicina 20 mg/kg/dia de 8/8 h (máx 900 mg/dia) por 10 dias", "Copatógenos produtores de betalactamase; tratar contatos sintomáticos"],
        ["Alergia não grave à penicilina", "Cefalexina 20 mg/kg/dose de 12/12 h (máx 500 mg/dose) por 10 dias", "Evitar cefalosporina se reação imediata grave"],
        ["Alergia grave (anafilaxia)", "Azitromicina 12 mg/kg/dia (máx 500 mg) por 5 dias ou clindamicina", "Resistência a macrolídeos varia por região; preferir clindamicina se falha"],
        ["Novo surto apesar da profilaxia", "Confirmar adesão real às datas; manter intervalo de 21 dias; discutir com cardiologista", "Profilaxia oral falha mais que a benzatina; trocar para benzatina se possível"],
        ["Falta de benzatina no serviço", "Penicilina V 250 mg de 12/12 h ou sulfadiazina até reabastecer", "Não interromper a profilaxia"]
      ],
      nota: "Fontes: AHA 2009 (prevenção de FR), SBC 2009."
    }
  ],
  prescricao: {
    ambulatorial: "PROFILAXIA SECUNDÁRIA (aplicar na UBS)\nUSO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI ---------- 1 frasco-ampola\n   Aplicar 1.200.000 UI IM profunda a cada 21 dias (criança < 20 kg: 600.000 UI).\n   Próxima dose: ___/___/___. Duração prevista: até ___.\n\nALERGIA À PENICILINA (USO ORAL)\n1. Sulfadiazina 500 mg ----------------------------- 60 comprimidos\n   Tomar 2 comprimidos (1 g) 1 vez ao dia, todos os dias (< 30 kg: 1 comprimido).\n\nFASE AGUDA — ARTRITE (USO ORAL)\n2. Ácido acetilsalicílico 500 mg ------------------- ___ comprimidos\n   Criança: 80–100 mg/kg/dia divididos de 6 em 6 horas (exemplo 30 kg: 1 comprimido de 6 em 6 horas = 66 mg/kg/dia; ajustar). Adulto: 2 comprimidos de 6 em 6 horas, por 2 semanas, depois reduzir.\n   OU Naproxeno 250 mg — 10–20 mg/kg/dia de 12 em 12 horas (máx 1 g/dia).\n\nCARDITE MODERADA/GRAVE (USO ORAL)\n3. Prednisona 20 mg -------------------------------- ___ comprimidos\n   1–2 mg/kg/dia (máx 80 mg) pela manhã por 2–3 semanas; depois reduzir 20–25% por semana.\n\nPEDIDO DE EXAMES\n- ASLO, VHS, PCR, hemograma, ECG, ecocardiograma transtorácico com Doppler. Indicação: suspeita de febre reumática."
  },
  orientacoesRetorno: [
    "A injeção de benzetacil a cada 21 dias protege o coração de novos ataques; não pular doses, mesmo sem sintomas",
    "Anotar a data da próxima injeção; se atrasar, ir à UBS assim que possível",
    "Toda dor de garganta com febre deve ser avaliada na UBS",
    "Voltar logo se falta de ar, cansaço fácil, inchaço, coração acelerado ou movimentos involuntários",
    "Cuidar dos dentes e fazer o ecocardiograma de controle",
    "Repouso relativo enquanto houver febre, artrite ou cardite"
  ],
  encaminhar: [
    "Cardiologia (pediátrica ou adulto): todo caso com cardite ou lesão valvar",
    "Internação: cardite moderada/grave, IC, BAV avançado, coreia incapacitante",
    "Neurologia: coreia atípica ou refratária",
    "Cirurgia cardíaca: valvopatia reumática grave (ver valvulopatias)"
  ],
  fontes: [
    "SBC — Diretrizes Brasileiras para o Diagnóstico, Tratamento e Prevenção da Febre Reumática (Arq Bras Cardiol, 2009)",
    "AHA — Revision of the Jones Criteria for the Diagnosis of Acute Rheumatic Fever in the Era of Doppler Echocardiography (Circulation, 2015)",
    "AHA — Prevention of Rheumatic Fever and Diagnosis and Treatment of Acute Streptococcal Pharyngitis (Circulation, 2009)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

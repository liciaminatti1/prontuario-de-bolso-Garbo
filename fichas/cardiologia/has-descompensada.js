// Hipertensão arterial descompensada sem crise (PA elevada assintomática na UBS)
registrarFicha({
  id: "has-descompensada",
  especialidade: "cardiologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Hipertensão descompensada sem crise (PA elevada assintomática na UBS)",
  resumo: "Paciente na UBS com PA acima da meta, inclusive ≥ 180/110 mmHg, sem sintomas nem sinais de lesão aguda de órgão-alvo. Não é emergência: o objetivo é ajustar o tratamento oral e reavaliar em dias, sem queda rápida da PA.",
  palavrasChave: "has hipertensao descontrolada descompensada pressao alta assintomatica urgencia hipertensiva pseudocrise elevacao importante pa losartana anlodipino hidroclorotiazida clortalidona captopril adesao",
  critico: {
    tempo: "Excluir lesão aguda de órgão-alvo",
    texto: "Dor torácica, dispneia, déficit neurológico, confusão, alteração visual ou gestação com PA ≥ 140/90 mudam a conduta: ficha Crise hipertensiva e encaminhar ao PS."
  },
  alarmes: [
    "Dor no peito, falta de ar, edema agudo de pulmão",
    "Déficit focal, confusão, convulsão, cefaleia súbita e intensa com vômitos",
    "Borramento visual ou fundo de olho com hemorragias, exsudatos ou papiledema",
    "Gestante ou puérpera com PA ≥ 140/90 (pensar pré-eclâmpsia)",
    "Oligúria, edema importante, creatinina em elevação rápida",
    "Dor torácica ou dorsal lancinante (dissecção de aorta)"
  ],
  conduta: [
    "Medir corretamente: 5 min sentado, manguito adequado ao braço, 2–3 medidas; repetir após 30 min de repouso se PA ≥ 180/110",
    "Perguntar e examinar em busca de lesão aguda de órgão-alvo (dor torácica, dispneia, neurológico, visão, ausculta, edema, fundo de olho se possível)",
    "Sem lesão aguda: NÃO é emergência. Não usar nifedipino sublingual. Não buscar normalizar a PA no consultório",
    "Procurar a causa da descompensação: má adesão, falta do remédio, dose insuficiente, sal, álcool, AINE, descongestionante nasal, corticoide, anticoncepcional, dor, ansiedade, apneia do sono",
    "Tratar dor ou ansiedade se presentes e remedir",
    "Ajustar o esquema oral: aumentar dose ou associar classe (BRA ou IECA + bloqueador de canal de cálcio + tiazídico); preferir combinação a dose máxima de uma só droga",
    "Sem tratamento prévio e PA ≥ 160/100: iniciar já com combinação de 2 drogas",
    "Exames básicos se não houver recentes; ECG na UBS se disponível",
    "Retorno em até 7 dias com medidas domiciliares (MRPA); meta de longo prazo < 130/80 mmHg (individualizar em idoso frágil)"
  ],
  exames: [
    "Creatinina (com TFG estimada), potássio, sódio, glicemia de jejum, urina tipo 1 (proteinúria, hematúria)",
    "Relação albumina/creatinina em amostra isolada de urina, se diabético ou DRC",
    "ECG de 12 derivações (sobrecarga de VE, isquemia, arritmia)",
    "Perfil lipídico e HbA1c se não houver no último ano",
    "Pedido pronto: \"Solicito creatinina, potássio, sódio, glicemia de jejum, urina tipo 1 e ECG. HD: hipertensão arterial não controlada.\""
  ],
  diferenciais: [
    "Emergência hipertensiva (lesão aguda de órgão-alvo) → PS",
    "Pré-eclâmpsia (gestante ≥ 20 semanas ou puérpera)",
    "Efeito do avental branco (PA alta só no consultório; confirmar com MRPA/MAPA)",
    "PA elevada por dor, ansiedade, retenção urinária, abstinência alcoólica",
    "Hipertensão secundária: início < 30 anos, hipocalemia, resistente, piora súbita em controlado, sopro abdominal"
  ],
  tratamento: [
    {
      droga: "Losartana",
      linha: "l1",
      dose: "50 mg/dia; aumentar para 100 mg/dia (50 mg 12/12 h ou 100 mg 1×/dia)",
      via: "VO",
      intervalo: "1 a 2 vezes ao dia",
      duracao: "Uso contínuo",
      monitorizacao: "Creatinina e K em 1–2 semanas após início ou aumento",
      contraindicacoes: "Gestação, estenose bilateral de artéria renal, K > 5,5; não associar a IECA",
      ajustes: "Alternativa: enalapril 10–20 mg 12/12 h ou captopril 25–50 mg 8/8–12/12 h (tosse com IECA)"
    },
    {
      droga: "Anlodipino",
      linha: "l1",
      dose: "5 mg/dia; aumentar para 10 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Uso contínuo",
      monitorizacao: "Edema maleolar (dose-dependente)",
      contraindicacoes: "IC com fração de ejeção reduzida (preferir outras classes)",
      ajustes: "Idoso: iniciar 2,5–5 mg"
    },
    {
      droga: "Hidroclorotiazida ou clortalidona",
      linha: "l1",
      dose: "Hidroclorotiazida 12,5–25 mg/dia ou clortalidona 12,5–25 mg/dia",
      via: "VO",
      intervalo: "1 vez ao dia, pela manhã",
      duracao: "Uso contínuo",
      monitorizacao: "Na, K, ácido úrico e glicemia",
      contraindicacoes: "Gota ativa (relativa), hiponatremia, hipocalemia",
      ajustes: "TFG < 30: tiazídico perde efeito; usar furosemida se precisar de diurético"
    },
    {
      droga: "Espironolactona (4ª droga — HAS resistente)",
      linha: "adj",
      dose: "25 mg/dia (até 50 mg)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Uso contínuo",
      monitorizacao: "K e creatinina em 1–2 semanas e depois periodicamente",
      contraindicacoes: "K ≥ 5,0 ou TFG < 30",
      ajustes: "Ginecomastia é efeito adverso comum"
    },
    {
      droga: "Captopril (uso pontual no consultório)",
      linha: "alt",
      dose: "25 mg; pode repetir após 1 h",
      via: "VO",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Remedir em 1 h",
      contraindicacoes: "Gestação, angioedema prévio, K alto",
      ajustes: "Só se o médico optar por reduzir no dia (ex.: sem tratamento e PA muito elevada). A meta não é normalizar; a redução deve ser gradual em 24–48 h"
    },
    {
      droga: "Nifedipino de liberação rápida sublingual",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Queda abrupta e imprevisível da PA, risco de isquemia cerebral e coronariana",
      ajustes: "Não usar"
    }
  ],
  prescricao: {
    ambulatorial: "HIPERTENSÃO NÃO CONTROLADA — AJUSTE DO ESQUEMA\n\nA) SEM TRATAMENTO PRÉVIO (PA ≥ 160/100 ou alto risco) — USO ORAL\n1. Losartana 50 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n2. Anlodipino 5 mg ------------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n\nB) JÁ EM USO DE LOSARTANA 50 mg + ANLODIPINO 5 mg — USO ORAL\n1. Losartana 50 mg ------------------------------ 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas. Uso contínuo.\n2. Anlodipino 10 mg ----------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo.\n\nC) JÁ EM DOSE PLENA DE BRA + ANLODIPINO — ACRESCENTAR — USO ORAL\n3. Hidroclorotiazida 25 mg ---------------------- 30 comprimidos\n   Tomar 1 comprimido pela manhã. Uso contínuo.\n   (ou Clortalidona 25 mg ½ a 1 comprimido pela manhã)\n\nD) RESISTENTE (3 drogas em dose plena, com boa adesão) — USO ORAL\n4. Espironolactona 25 mg ------------------------ 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo. (Só se K < 5,0 e TFG ≥ 30.)\n\nSUSPENDER/EVITAR: anti-inflamatórios (diclofenaco, ibuprofeno, nimesulida), descongestionantes nasais, excesso de sal e álcool.\n\nEXAMES: creatinina, potássio e sódio em 1–2 semanas após o ajuste.\n\nMRPA: medir a PA 3 vezes pela manhã e 3 vezes à noite por 5 a 7 dias antes do retorno; anotar.\n\nGESTANTE: não usar losartana, enalapril ou captopril. Seguir a ficha de hipertensão na gestação (metildopa ou nifedipino de liberação lenta)."
  },
  orientacoesRetorno: [
    "Sua pressão está alta, mas sem sinal de dano agudo: o tratamento é com os comprimidos, todos os dias, sem pular doses",
    "Não tome remédio a mais por conta própria nem coloque comprimido embaixo da língua",
    "Evite anti-inflamatórios, descongestionantes de nariz, sal em excesso e bebida alcoólica",
    "Meça a pressão em casa, na farmácia ou na UBS e anote os valores",
    "Volte imediatamente ou procure o pronto-socorro se: dor no peito, falta de ar, fraqueza ou dormência de um lado do corpo, fala enrolada, confusão, visão embaçada, dor de cabeça muito forte com vômitos",
    "Retorno na UBS em até 7 dias com as medidas anotadas; depois a cada 4 semanas até atingir a meta"
  ],
  encaminhar: [
    "PS no mesmo dia: qualquer sinal de lesão aguda de órgão-alvo ou gestante com PA ≥ 160/110 ou sintomas",
    "Cardiologia ou nefrologia: hipertensão resistente (fora da meta com 3 drogas em dose plena incluindo diurético) ou suspeita de hipertensão secundária",
    "Nefrologia: TFG < 30 ou queda rápida da função renal"
  ],
  fontes: [
    "SBC/SBH/SBN — Diretriz Brasileira de Hipertensão Arterial (Arq Bras Cardiol, 2025; DOI 10.36660/abc.20250624)",
    "Ministério da Saúde — Linha de Cuidado do Adulto com Hipertensão Arterial Sistêmica (2021)",
    "ESC 2024 Guidelines for the management of elevated blood pressure and hypertension"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

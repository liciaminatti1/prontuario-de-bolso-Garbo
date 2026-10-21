// Pielonefrite aguda e ITU complicada no adulto
registrarFicha({
  id: "pielonefrite",
  especialidade: "urologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Pielonefrite aguda e ITU complicada no adulto",
  resumo: "ITU com febre, calafrios, dor lombar ou no ângulo costovertebral, com ou sem sintomas de cistite. ITU complicada (IDSA 2025): qualquer ITU que vai além da bexiga — pielonefrite, ITU febril ou com bacteriemia, ITU associada a cateter e ITU no homem com sinais sistêmicos.",
  palavrasChave: "pielonefrite itu complicada infeccao urinaria alta febre dor lombar giordano urosepse ceftriaxona ciprofloxacino levofloxacino gentamicina amicacina sulfametoxazol trimetoprima urocultura hemocultura obstrucao calculo abscesso renal esbl",
  critico: {
    tempo: "Urocultura e 1ª dose de antibiótico",
    texto: "Colher urocultura (e hemoculturas se sepse) e dar a 1ª dose do antibiótico sem esperar resultado. Sepse ou suspeita de obstrução: antibiótico na 1ª hora e imagem urgente — rim obstruído infectado precisa de desobstrução."
  },
  alarmes: [
    "Sinais de sepse: hipotensão, confusão, FR ≥ 22, lactato elevado, oligúria (ver ficha sepse)",
    "Suspeita de obstrução: cálculo conhecido, cólica renal, rim único, hidronefrose, anúria",
    "Vômitos persistentes ou incapacidade de usar a via oral",
    "Gestante (ver ficha itu-gestante)",
    "Imunossupressão, transplante renal, DRC avançada, diabetes descompensado",
    "Febre persistente após 48–72 h de antibiótico adequado (abscesso, obstrução, germe resistente)",
    "Gás no parênquima ou na via urinária na imagem (pielonefrite enfisematosa — urologia urgente)"
  ],
  condutaInicial: [
    "Sinais vitais, avaliação de sepse e perfusão; acesso venoso se não tolera VO ou sinais de gravidade",
    "Urina tipo 1 e urocultura com antibiograma ANTES do antibiótico; hemoculturas se sepse ou internação",
    "Creatinina, hemograma, PCR; beta-hCG em mulher em idade fértil; glicemia",
    "1ª dose de antibiótico no PS: ceftriaxona 1 g IV (2 g se grave) — ou aminoglicosídeo se alergia a betalactâmico",
    "Analgesia e antitérmico (dipirona), antiemético, hidratação",
    "Imagem (USG ou TC) já no PS se sepse, suspeita de obstrução, litíase, rim único ou ausência de melhora"
  ],
  fataisExcluir: [
    "Urosepse e choque séptico",
    "Pielonefrite obstrutiva (cálculo, tumor, HPB) — exige desobstrução",
    "Abscesso renal ou perinefrético",
    "Pielonefrite enfisematosa (diabéticos)",
    "Diferenciais graves com dor lombar e febre: apendicite retrocecal, colecistite, pancreatite, aneurisma de aorta, DIP / gestação ectópica"
  ],
  proximaDecisao: "Sem sepse, tolerando VO, sem obstrução e com seguimento → alta com antibiótico oral (preferir guiado por cultura) e reavaliação em 48–72 h. Sepse, vômitos, obstrução, gestação ou falha → internar com antibiótico IV e trocar para VO quando afebril, melhorando e com opção oral ativa. Duração (IDSA 2025): 5–7 dias de fluoroquinolona ou 7 dias de outro antibiótico com boa resposta clínica.",
  clinica: {
    anamnese: [
      "Febre, calafrios, dor lombar ou em flanco, náuseas, vômitos",
      "Disúria, polaciúria, urgência, hematúria (podem faltar)",
      "Cálculo renal prévio, cólica, cirurgia ou malformação urinária, sonda vesical, HPB",
      "ITU prévias, antibiótico ou internação nos últimos 3–6 meses, viagem, uso de sonda (risco de resistência / ESBL)",
      "Diabetes, imunossupressão, DRC, transplante, gestação (DUM)",
      "Alergia a betalactâmicos; uso de medicamentos que interagem com quinolona (varfarina, antiarrítmicos, corticoide)"
    ],
    exameFisico: [
      "Temperatura, PA, FC, FR, SpO₂, estado mental, perfusão, diurese",
      "Punho-percussão lombar (Giordano) e palpação do ângulo costovertebral",
      "Abdome completo (excluir abdome agudo); globo vesical",
      "Homem: toque retal delicado se suspeita de prostatite (não massagear a próstata)",
      "Mulher com corrimento ou dor pélvica: exame ginecológico"
    ],
    diferenciais: [
      { dx: "Cólica renal sem infecção", pista: "Dor intensa em cólica, sem febre; hematúria; leucocitúria discreta" },
      { dx: "Prostatite aguda", pista: "Homem, febre, disúria, dor perineal, próstata dolorosa e edemaciada" },
      { dx: "Doença inflamatória pélvica", pista: "Dor pélvica, corrimento, dor à mobilização do colo" },
      { dx: "Apendicite, colecistite, pancreatite", pista: "Dor abdominal localizada, sinais peritoneais, exames de imagem" },
      { dx: "Pneumonia de base", pista: "Tosse, dispneia, crepitações; dor lombar alta" },
      { dx: "Herpes-zóster pré-eruptivo", pista: "Dor em faixa unilateral, sem febre alta, urina normal" }
    ],
    gravidade: [
      "Pielonefrite não complicada: mulher não gestante, sem alteração anatômica ou funcional, sem sepse — tratamento ambulatorial na maioria",
      "ITU complicada: homem, gestante, cateter, obstrução, cálculo, bexiga neurogênica, transplante, imunossupressão, DRC, bacteriemia",
      "Grave: sepse ou choque séptico, obstrução, abscesso ou pielonefrite enfisematosa — internação e imagem urgente"
    ]
  },
  exames: [
    {
      nome: "Urina tipo 1 e urocultura",
      pedido: "Urina tipo 1 (EAS) e urocultura com antibiograma (jato médio, antes do antibiótico). Em paciente com sonda: trocar a sonda e colher da sonda nova.",
      porQue: "Confirmar ITU e guiar o antibiótico definitivo (resistência alta a quinolonas e SMX-TMP em E. coli no Brasil).",
      esperar: "Leucocitúria, nitrito positivo, bacteriúria; cultura com ≥ 10⁴–10⁵ UFC/mL.",
      interpretacao: "Ajustar o antibiótico para o de espectro mais estreito ativo assim que o antibiograma sair.",
      limitacoes: "Urina tipo 1 normal torna ITU improvável, mas não exclui (obstrução completa do rim acometido). Bacteriúria assintomática não deve ser tratada (exceto gestante e antes de procedimento urológico)."
    },
    {
      nome: "Hemoculturas",
      pedido: "Hemocultura 2 amostras (2 sítios), antes do antibiótico.",
      porQue: "Sepse, internação, imunossupressão ou febre alta.",
      esperar: "Positivas em parte dos casos graves.",
      interpretacao: "Bacteriemia por E. coli de foco urinário não exige, por si, prolongar o tratamento se houver boa resposta (IDSA 2025).",
      limitacoes: "Não atrasar o antibiótico para colher."
    },
    {
      nome: "Exames gerais",
      pedido: "Hemograma, PCR, creatinina, ureia, sódio, potássio, glicemia. Lactato e gasometria venosa se suspeita de sepse. Beta-hCG em mulher em idade fértil.",
      porQue: "Gravidade, função renal (ajuste de dose de aminoglicosídeo e quinolona) e gestação.",
      esperar: "Leucocitose, PCR elevada; pode haver lesão renal aguda.",
      interpretacao: "Lactato ≥ 2 mmol/L ou hipotensão → protocolo de sepse. Creatinina subindo → pensar em obstrução.",
      limitacoes: "—"
    },
    {
      nome: "Imagem do trato urinário",
      pedido: "USG de rins e vias urinárias (avaliar hidronefrose, cálculo, abscesso). Se não diagnóstico ou suspeita de complicação: TC de abdome e pelve com contraste (ou sem contraste se suspeita de cálculo / DRC).",
      porQue: "Excluir obstrução, abscesso e pielonefrite enfisematosa.",
      esperar: "Na pielonefrite simples, frequentemente normal.",
      interpretacao: "Hidronefrose com infecção = urgência urológica (cateter duplo J ou nefrostomia). Abscesso grande → drenagem.",
      limitacoes: "Indicar se: sepse, obstrução suspeita, cálculo, rim único, febre > 48–72 h com tratamento, recorrência precoce. Pielonefrite não complicada com boa resposta não precisa de imagem."
    }
  ],
  tratamento: [
    {
      droga: "Ceftriaxona",
      linha: "l1",
      dose: "1 g (2 g se grave ou peso elevado)",
      via: "IV ou IM",
      intervalo: "24/24 h",
      duracao: "Até melhora e troca para VO; total 7 dias (IDSA 2025)",
      monitorizacao: "Curva térmica, diurese, creatinina",
      contraindicacoes: "Anafilaxia a cefalosporinas",
      ajustes: "IV: reconstituir 1 g em 10 mL de água destilada e aplicar em 2–4 min, ou diluir em 100 mL de SF 0,9% e correr em 30 min. IM: 1 g em 3,5 mL de lidocaína 1% sem vasoconstritor. Pode ser dose única no PS antes do esquema oral. Não cobre Enterococcus nem ESBL. RENAME"
    },
    {
      droga: "Ciprofloxacino",
      linha: "l1",
      dose: "500 mg VO (500–750 mg) ou 400 mg IV",
      via: "VO ou IV",
      intervalo: "12/12 h",
      duracao: "7 dias (5–7 dias de quinolona — IDSA 2025)",
      monitorizacao: "Tendinopatia, confusão no idoso, QT, glicemia em diabéticos",
      contraindicacoes: "Gestação, < 18 anos (salvo exceção), miastenia, aneurisma de aorta, QT longo",
      ajustes: "Usar empiricamente só se resistência local < 10% ou após dose inicial de ceftriaxona/aminoglicosídeo; preferir guiado por antibiograma. IV: 400 mg (bolsa 2 mg/mL, 200 mL) em 60 min. ClCr < 30: 500 mg 24/24 h. Não tomar junto com antiácido, ferro, cálcio ou leite (intervalo de 2 h antes / 6 h depois). RENAME"
    },
    {
      droga: "Levofloxacino",
      linha: "alt",
      dose: "750 mg",
      via: "VO ou IV",
      intervalo: "24/24 h",
      duracao: "5 dias",
      monitorizacao: "Mesmos cuidados das quinolonas",
      contraindicacoes: "Iguais às do ciprofloxacino",
      ajustes: "IV: bolsa pronta (5 mg/mL) em 90 min. ClCr 20–49: 750 mg a cada 48 h. Conferir disponibilidade no SUS"
    },
    {
      droga: "Sulfametoxazol + trimetoprima (SMX-TMP)",
      linha: "alt",
      dose: "800/160 mg (1 comprimido forte ou 2 de 400/80)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "7 dias (IDSA 2025); EAU ainda cita 14 dias",
      monitorizacao: "Potássio e creatinina (idoso, IECA/BRA), rash",
      contraindicacoes: "Alergia a sulfa, gestação no 1º trimestre e no termo, deficiência de G6PD",
      ajustes: "Só guiado por antibiograma (resistência comunitária alta). Interage com varfarina e metotrexato. ClCr 15–30: metade da dose. RENAME"
    },
    {
      droga: "Betalactâmico oral (amoxicilina + clavulanato 875/125 mg 12/12 h ou cefuroxima 500 mg 12/12 h)",
      linha: "alt",
      dose: "Conforme antibiograma",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "7 dias com boa resposta (IDSA 2025); EAU usa 10 dias para cefalosporina oral",
      monitorizacao: "Resposta clínica (menos eficaz que quinolona)",
      contraindicacoes: "Alergia a penicilina/cefalosporina",
      ajustes: "Usar se germe sensível e quinolona/SMX-TMP não possíveis, idealmente após dose parenteral inicial. Cefalexina não é 1ª escolha para pielonefrite"
    },
    {
      droga: "Gentamicina ou amicacina",
      linha: "alt",
      dose: "Gentamicina 5 mg/kg · Amicacina 15 mg/kg (peso ideal ou ajustado)",
      via: "IV ou IM",
      intervalo: "24/24 h",
      duracao: "Dose única no PS ou poucos dias até trocar por VO",
      monitorizacao: "Creatinina a cada 48–72 h, audição; nível sérico se uso > 3 dias",
      contraindicacoes: "Lesão renal aguda, DRC avançada, gestação (evitar), miastenia",
      ajustes: "Diluir em 100 mL de SF 0,9% e infundir em 30–60 min. Opção em alergia a betalactâmico e em suspeita de ESBL (amicacina). RENAME"
    },
    {
      droga: "Piperacilina + tazobactam",
      linha: "alt",
      dose: "4,5 g",
      via: "IV",
      intervalo: "6/6 h (ou 8/8 h em infusão estendida de 4 h)",
      duracao: "Até cultura e melhora",
      monitorizacao: "Função renal, sódio",
      contraindicacoes: "Alergia a penicilina",
      ajustes: "Sepse/choque, internação recente ou suspeita de Pseudomonas. Diluir em 100 mL de SF 0,9% e correr em 30 min. ClCr < 40: ajustar"
    },
    {
      droga: "Meropenem (ou ertapenem 1 g 24/24 h sem risco de Pseudomonas)",
      linha: "alt",
      dose: "1 g",
      via: "IV",
      intervalo: "8/8 h",
      duracao: "Até cultura; descalonar",
      monitorizacao: "Função renal, convulsão em DRC",
      contraindicacoes: "Anafilaxia a carbapenêmico",
      ajustes: "Choque séptico com risco de ESBL (ESBL prévio, antibiótico ou internação recente). Diluir em 100 mL de SF 0,9% em 30 min. ClCr 26–50: 1 g 12/12 h"
    },
    {
      droga: "Nitrofurantoína e fosfomicina",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Não atingem concentração adequada no rim",
      ajustes: "Servem para cistite, não para pielonefrite ou ITU febril"
    }
  ],
  destino: {
    agora: [
      "1ª dose de antibiótico após urocultura; analgesia, antiemético, hidratação",
      "Sepse: pacote da 1ª hora (ver ficha sepse) e imagem precoce"
    ],
    reavaliar: [
      "Em 48–72 h: febre deve ceder; se não, imagem (USG/TC) e rever antibiograma",
      "Ajustar antibiótico ao antibiograma (descalonar)"
    ],
    alta: [
      "Sem sepse, tolerando VO, dor controlada, sem obstrução, com acesso a retorno",
      "Antibiótico oral 5–7 dias (quinolona) ou 7 dias (outros) e retorno em 48–72 h com resultado da cultura"
    ],
    observacao: [
      "Observação de 6–12 h com antibiótico IV, hidratação e antiemético; alta se tolerar VO e melhorar"
    ],
    internacao: [
      "Sepse, vômitos persistentes, obstrução, abscesso, gestante, imunossuprimido, idoso frágil, falha do tratamento oral, sem condições de seguimento",
      "UTI: choque séptico, disfunção orgânica"
    ],
    transferencia: [
      "Obstrução infectada sem urologia ou radiologia intervencionista no serviço: regular com urgência após antibiótico e ressuscitação",
      "Pielonefrite enfisematosa ou abscesso grande: serviço com urologia"
    ]
  },
  prescricao: {
    ambulatorial: "PIELONEFRITE NÃO COMPLICADA — ALTA DO PS (após 1ª dose de ceftriaxona 1 g IV/IM)\nUSO ORAL\n1. Ciprofloxacino 500 mg ---------------------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias. Não tomar junto com leite, antiácido, ferro ou cálcio.\n   (Ajustar ao antibiograma. Alternativa guiada por cultura: sulfametoxazol + trimetoprima 800/160 mg, 1 comprimido de 12 em 12 horas por 7 dias.)\n2. Dipirona 500 mg ---------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n3. Ondansetrona 4 mg (comprimido orodispersível) ---- 10 comprimidos\n   Dissolver 1 comprimido na boca de 8 em 8 horas se náusea ou vômito.\n\nRetorno em 48–72 h com o resultado da urocultura.",
    hospitalar: "PIELONEFRITE / ITU COMPLICADA — ADULTO (peso: ___ kg; ClCr: ___)\n1. Dieta livre conforme aceitação (zero se vômitos incoercíveis ou cirurgia/desobstrução prevista).\n2. Acesso venoso periférico. SF 0,9% 500 mL IV em 30 min se desidratação ou hipotensão; repetir conforme resposta (sepse: 30 mL/kg de cristaloide nas primeiras 3 h — ver ficha sepse). Manutenção conforme aceitação oral.\n3. Ceftriaxona 1 g (2 g se grave) + SF 0,9% 100 mL IV em 30 min, 1 vez ao dia.\n   - Alergia grave a betalactâmico: gentamicina 5 mg/kg (ou amicacina 15 mg/kg) + SF 0,9% 100 mL IV em 60 min, 1 vez ao dia.\n   - Sepse/choque com internação ou antibiótico recentes: piperacilina + tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h; ESBL prévio: meropenem 1 g + SF 0,9% 100 mL IV em 30 min de 8/8 h.\n4. Dipirona 1 g (2 mL) + água destilada 8 mL IV lento de 6/6 h se dor ou febre.\n5. Ondansetrona 4 mg (2 mL) IV lento de 8/8 h se náusea ou vômito.\n6. Enoxaparina 40 mg SC 1 vez ao dia se internado e sem contraindicação (ajustar se ClCr < 30).\n7. Controles: sinais vitais e temperatura de 4/4 h; diurese (balanço hídrico; sonda vesical só se choque ou retenção); glicemia capilar se diabético.\n8. Exames: urocultura e hemoculturas (antes do antibiótico), hemograma, PCR, creatinina, eletrólitos; repetir creatinina em 48 h (aminoglicosídeo: a cada 48–72 h).\n9. USG de rins e vias urinárias (urgente se sepse ou suspeita de obstrução).\n10. Trocar para VO guiada por antibiograma quando afebril > 24–48 h, melhorando e aceitando dieta; total de 7 dias (5–7 dias se quinolona)."
  },
  orientacoesRetorno: [
    "Tomar o antibiótico no horário certo até o fim, mesmo com melhora",
    "Beber água ao longo do dia, sem exageros",
    "A febre costuma ceder em 48–72 h; dor lombar leve pode durar alguns dias",
    "Voltar imediatamente se: vômitos que impedem tomar o remédio, febre alta que não cede, falta de ar, confusão, desmaio, urina muito escassa ou dor muito forte",
    "Retornar em 48–72 h para ver o resultado da urocultura e ajustar o antibiótico",
    "Não é necessário repetir urocultura após a cura se os sintomas sumirem (exceto gestante)"
  ],
  tabelas: [
    {
      titulo: "Escolha empírica conforme o cenário",
      colunas: ["Cenário", "Esquema", "Duração total"],
      linhas: [
        ["Ambulatorial, sem sepse", "Ceftriaxona 1 g IV/IM dose única + VO guiada por cultura (ciprofloxacino ou SMX-TMP)", "5–7 dias (quinolona) ou 7 dias (outros)"],
        ["Internação sem sepse", "Ceftriaxona 1 g IV 24/24 h", "7 dias com troca para VO"],
        ["Sepse sem risco de resistência", "Ceftriaxona 2 g IV 24/24 h (± aminoglicosídeo)", "7 dias se boa resposta"],
        ["Sepse com risco de ESBL / Pseudomonas", "Piperacilina-tazobactam ou meropenem; descalonar com cultura", "7 dias se boa resposta e foco controlado"],
        ["Alergia grave a betalactâmico", "Aminoglicosídeo IV/IM 1×/dia ou quinolona", "Igual"]
      ],
      nota: "IDSA 2025: a duração conta a partir do 1º dia de antibiótico ativo e vale para pacientes com melhora clínica. Homem com suspeita de prostatite pode precisar de 10–14 dias ou mais (ver ficha prostatite)."
    }
  ],
  fontes: [
    "IDSA — 2025 Guideline on Management and Treatment of Complicated Urinary Tract Infections (Trautner BW et al., Clin Infect Dis, 2025)",
    "EAU — Guidelines on Urological Infections (edição 2025)",
    "Ministério da Saúde — RENAME 2024",
    "Instituto Latino-Americano de Sepse (ILAS) / Surviving Sepsis Campaign 2021 — manejo inicial da sepse"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

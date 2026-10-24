// Retenção urinária aguda
registrarFicha({
  id: "retencao-urinaria",
  especialidade: "urologia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Retenção urinária aguda",
  resumo: "Incapacidade súbita de urinar com bexiga cheia e dolorosa (globo vesical). Causa mais comum: HPB no homem idoso, muitas vezes precipitada por medicamentos, constipação, álcool, infecção ou pós-operatório. Tratamento: sondagem vesical imediata, alfabloqueador e busca da causa.",
  palavrasChave: "retencao urinaria aguda bexigoma globo vesical nao consegue urinar sondagem vesical hpb prostata tansulosina doxazosina anticolinergico opioide constipacao cauda equina diurese pos obstrutiva",
  critico: {
    tempo: "Sondar já; examinar a coluna",
    texto: "Sondagem vesical imediata (ver ficha sondagem-vesical). Retenção com dor lombar, anestesia em sela, fraqueza nas pernas ou perda do tônus anal = síndrome da cauda equina: RM urgente."
  },
  alarmes: [
    "Anestesia em sela, déficit motor em membros inferiores, perda de controle anal (cauda equina, compressão medular)",
    "Febre, calafrios (ITU/prostatite com obstrução — sepse)",
    "Sangue no meato ou trauma pélvico (não sondar pela uretra: urologia/cistostomia)",
    "Creatinina elevada, hidronefrose bilateral",
    "Diurese pós-obstrutiva > 200 mL/h por 2 h ou mais (risco de desidratação e distúrbio eletrolítico)",
    "Impossibilidade de passar a sonda"
  ],
  conduta: [
    "Confirmar: globo vesical palpável ou USG (volume > 300–400 mL com incapacidade de urinar)",
    "Sondagem vesical de alívio ou de demora com Foley 14–16 Fr; esvaziar de uma vez (clampagem intermitente não reduz complicações)",
    "Registrar o volume drenado (> 1.000 mL sugere retenção prolongada/crônica agudizada: preferir demora)",
    "Falha com Foley: tentar sonda Coudé (ponta curva) 14–16 Fr; não forçar; urologia (cistostomia suprapúbica) se falhar",
    "Investigar a causa: toque retal (próstata, fecaloma), exame neurológico (sensibilidade perineal, força, tônus anal), medicamentos, urina tipo 1",
    "Suspender/rever drogas: anticolinérgicos (antidepressivos tricíclicos, antihistamínicos, escopolamina), opioides, descongestionantes (pseudoefedrina), antipsicóticos",
    "Homem com HPB: iniciar alfabloqueador (tansulosina ou doxazosina) e manter a sonda por pelo menos 2–3 dias; tentativa de retirada (TWOC) pela urologia/UBS",
    "Creatinina se retenção volumosa ou suspeita de cronicidade; vigiar diurese pós-obstrutiva",
    "Mulher: investigar massa pélvica, prolapso, causa neurológica, medicamentos (encaminhar à ginecologia/urologia)"
  ],
  exames: [
    "USG de bexiga à beira-leito (volume) quando disponível",
    "Urina tipo 1 e urocultura (colher da sonda recém-passada)",
    "Creatinina, ureia, sódio e potássio se retenção volumosa, crônica ou suspeita de LRA",
    "USG de rins e vias urinárias se creatinina alta (hidronefrose)",
    "RM de coluna lombossacra urgente se sinais de cauda equina",
    "PSA: não dosar na fase aguda (eleva com retenção e sondagem)"
  ],
  diferenciais: [
    "HPB e câncer de próstata",
    "Estenose de uretra (jato fino de longa data, uretrite ou sondagem prévias)",
    "Coágulos (ver ficha hematuria)",
    "Fecaloma / constipação grave",
    "Bexiga neurogênica: diabetes, lesão medular, cauda equina, esclerose múltipla",
    "Prostatite aguda (febre, próstata dolorosa — ver ficha prostatite)",
    "Pós-operatório (anestesia raquidiana, opioides) e pós-parto",
    "Anúria (bexiga vazia na USG: não é retenção — ver ficha lesao-renal-aguda)"
  ],
  tratamento: [
    {
      droga: "Tansulosina",
      linha: "l1",
      dose: "0,4 mg",
      via: "VO",
      intervalo: "1×/dia, após a mesma refeição",
      duracao: "Pelo menos 2–3 dias antes da retirada da sonda; manter conforme urologia",
      monitorizacao: "Hipotensão postural, tontura",
      contraindicacoes: "Hipotensão ortostática grave; cirurgia de catarata programada (síndrome da íris flácida — avisar o oftalmologista)",
      ajustes: "Aumenta a chance de sucesso na retirada da sonda (TWOC)"
    },
    {
      droga: "Doxazosina",
      linha: "alt",
      dose: "2 mg à noite (iniciar 1 mg se idoso/hipotensão)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Conforme urologia",
      monitorizacao: "PA em pé, tontura (efeito de 1ª dose)",
      contraindicacoes: "Hipotensão ortostática",
      ajustes: "RENAME/Farmácia Popular. Titular até 4–8 mg conforme tolerância"
    },
    {
      droga: "Lactulose (se constipação)",
      linha: "adj",
      dose: "15–30 mL",
      via: "VO",
      intervalo: "1–2×/dia",
      duracao: "Até hábito intestinal regular",
      monitorizacao: "Evacuações",
      contraindicacoes: "Obstrução intestinal",
      ajustes: "Fecaloma: lavagem/remoção manual"
    }
  ],
  prescricao: {
    hospitalar: "RETENÇÃO URINÁRIA AGUDA — ADULTO\n1. Sondagem vesical de demora com Foley 2 vias 14–16 Fr, sistema fechado (ver ficha sondagem-vesical). Registrar volume drenado.\n2. Dipirona 1 g IV se dor.\n3. Suspender anticolinérgicos, opioides e descongestionantes sempre que possível.\n4. Tansulosina 0,4 mg VO 1×/dia (ou doxazosina 2 mg VO à noite).\n5. Se volume drenado > 1.000 mL ou creatinina alta: diurese horária nas primeiras 4–6 h; se diurese > 200 mL/h por 2 h, repor parte do volume com SF 0,9% IV e dosar Na, K, creatinina.\n6. Urina tipo 1 e urocultura da sonda.",
    ambulatorial: "ALTA COM SONDA DE DEMORA (homem com HPB)\nUSO ORAL\n1. Tansulosina 0,4 mg ---------------------------- 30 cápsulas\n   Tomar 1 cápsula por dia, sempre após a mesma refeição.\n   (ou Doxazosina 2 mg: 1 comprimido à noite.)\n2. Lactulose 667 mg/mL --------------------------- 1 frasco\n   Tomar 15 mL 1 a 2 vezes ao dia se intestino preso.\nCUIDADOS COM A SONDA\n- Manter a bolsa abaixo da bexiga, sem dobrar o tubo; esvaziar quando 2/3 cheia.\n- Lavar a região com água e sabão diariamente.\nRETIRADA DA SONDA: em 3–7 dias na UBS ou urologia (tentativa de urinar sem sonda), mantendo a tansulosina.\nEncaminhamento à urologia."
  },
  orientacoesRetorno: [
    "Manter a bolsa sempre abaixo da cintura e o tubo sem dobras; beber água normalmente",
    "Não tomar remédios para gripe com descongestionante, antialérgicos que dão sono ou relaxantes sem orientação",
    "Voltar imediatamente se a sonda parar de drenar, febre, calafrios, sangue com coágulos, dor forte na barriga, ou dormência na região das nádegas/genital ou fraqueza nas pernas",
    "Comparecer na data marcada para retirar a sonda e na consulta com urologia"
  ],
  encaminhar: [
    "Urologia: todo homem após o 1º episódio (HPB, estenose, avaliação de cirurgia); falha na passagem da sonda (cistostomia) no mesmo dia",
    "Neurocirurgia/PS de referência: suspeita de cauda equina ou compressão medular — imediato",
    "Ginecologia: mulher com massa pélvica ou prolapso"
  ],
  fontes: [
    "EAU — Guidelines on Management of Non-neurogenic Male LUTS (2025): retenção urinária aguda e trial without catheter",
    "AUA — Management of Lower Urinary Tract Symptoms Attributed to BPH (2021, emenda 2023)",
    "Fisher E et al. — Alpha-blockers for acute urinary retention (Cochrane Review, 2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

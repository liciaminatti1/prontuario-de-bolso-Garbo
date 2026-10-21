// Furúnculo, furunculose e abscesso cutâneo
registrarFicha({
  id: "furunculo-abscesso",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Furúnculo, furunculose e abscesso cutâneo (drenagem e antibiótico)",
  resumo: "Infecções purulentas por Staphylococcus aureus. Furúnculo: nódulo doloroso centrado no folículo, com ponto de pus. Antraz (carbúnculo): vários furúnculos unidos. Abscesso: coleção de pus flutuante na derme/subcutâneo. Furunculose: episódios recorrentes. O tratamento principal é a drenagem.",
  palavrasChave: "furunculo furunculose abscesso cutaneo antraz carbunculo staphylococcus aureus mrsa drenagem incisao sulfametoxazol trimetoprima clindamicina cefalexina mupirocina nasal descolonizacao clorexidina",
  alarmes: [
    "Febre, taquicardia, hipotensão ou toxemia (infecção sistêmica/sepse)",
    "Celulite extensa ao redor ou progressão rápida",
    "Dor desproporcional, crepitação, bolhas hemorrágicas ou necrose (fasciíte necrosante — cirurgia urgente)",
    "Localização de risco: face no triângulo nariz-lábio (tromboflebite de seio cavernoso), mão, períneo/região perianal, mama de lactante",
    "Imunossupressão, diabetes descompensado, extremos de idade, lactente pequeno",
    "Abscesso grande ou profundo, perto de vasos, ou em usuário de drogas injetáveis (pseudoaneurisma)"
  ],
  conduta: [
    "Furúnculo pequeno sem flutuação: compressas mornas 3–4×/dia para drenagem espontânea; não espremer",
    "Abscesso ou furúnculo grande com flutuação: incisão e drenagem (I&D) com anestesia local, romper loculações e lavar com SF 0,9%",
    "Após I&D de abscesso simples: antibiótico oral melhora a cura e reduz recidiva (ensaios 2016–2017); indicar especialmente se ≥ 2 cm, múltiplos, celulite associada, sinais sistêmicos, face/mão/genitais, imunossupressão, extremos de idade ou falha da drenagem",
    "Antibiótico com cobertura anti-estafilocócica por 5 a 7 dias (cefalexina na maioria; sulfametoxazol-trimetoprima ou clindamicina se suspeita de MRSA comunitário)",
    "Colher cultura do pus na drenagem (recorrência, falha, imunossuprimido, sinais sistêmicos)",
    "Furunculose recorrente: procurar causa local (cisto pilonidal, hidradenite, corpo estranho), diabetes; descolonização do paciente e dos contatos da casa",
    "Sinais sistêmicos ou alarmes: antibiótico IV e avaliação cirúrgica/internação"
  ],
  diferenciais: [
    "Cisto epidérmico inflamado (lesão prévia com orifício central)",
    "Hidradenite supurativa (axilas, virilhas, nódulos recorrentes com fístulas e cicatrizes)",
    "Celulite não purulenta (ver ficha Celulite e erisipela)",
    "Miíase furunculoide (orifício central com secreção serosa e movimento da larva)",
    "Esporotricose (nódulos em cadeia linfática, contato com gato)",
    "Picada de aranha marrom (necrose central)"
  ],
  exames: [
    "Nenhum exame obrigatório no furúnculo/abscesso simples",
    "Cultura com antibiograma do pus colhido na drenagem: recorrência, falha terapêutica, imunossupressão, sinais sistêmicos",
    "Glicemia de jejum/HbA1c: furunculose recorrente em adulto",
    "Hemograma, PCR, hemoculturas: sinais sistêmicos",
    "Ultrassonografia de partes moles: dúvida entre celulite e abscesso, ou abscesso profundo"
  ],
  tratamento: [
    {
      droga: "Cefalexina (cápsula 500 mg; suspensão 250 mg/5 mL)",
      linha: "l1",
      dose: "Adulto: 500 mg. Criança: 25–50 mg/kg/dia divididos de 6/6 h (máx. 4 g/dia)",
      via: "VO",
      intervalo: "6/6 h",
      duracao: "5 a 7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Anafilaxia a betalactâmico",
      ajustes: "Cobre S. aureus sensível à oxacilina e estreptococo. RENAME/SUS. Não cobre MRSA"
    },
    {
      droga: "Sulfametoxazol-trimetoprima (comprimido 400/80 mg e 800/160 mg; suspensão 200/40 mg por 5 mL)",
      linha: "alt",
      dose: "Adulto: 800/160 mg (1 cp forte) — 2 cp de 12/12 h se > 100 kg ou abscesso grande. Criança > 2 meses: 8–12 mg/kg/dia de trimetoprima divididos de 12/12 h (máx. 160 mg TMP/dose)",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "5 a 7 dias",
      monitorizacao: "Exantema (risco de Stevens-Johnson), potássio e creatinina em idoso/DRC",
      contraindicacoes: "< 2 meses; gestação no 1º trimestre e próximo ao parto; deficiência de G6PD; alergia a sulfa",
      ajustes: "Suspeita de MRSA comunitário (recorrência, contatos com MRSA, falha da cefalexina). Cobertura fraca para estreptococo: se celulite associada, somar cefalexina. Interage com varfarina. RENAME/SUS"
    },
    {
      droga: "Clindamicina (cápsula 300 mg; solução oral manipulada)",
      linha: "alt",
      dose: "Adulto: 300–450 mg de 6/6 h ou 8/8 h. Criança: 30–40 mg/kg/dia divididos de 6/6 h ou 8/8 h (máx. 450 mg/dose)",
      via: "VO",
      intervalo: "6/6 h ou 8/8 h",
      duracao: "5 a 7 dias",
      monitorizacao: "Diarreia (colite por C. difficile)",
      contraindicacoes: "Colite prévia por clindamicina",
      ajustes: "Alergia a betalactâmico ou suspeita de MRSA; cobre estreptococo. RENAME/SUS"
    },
    {
      droga: "Mupirocina 2% pomada (descolonização nasal)",
      linha: "adj",
      dose: "Quantidade de um grão de arroz em cada narina (com cotonete), massagear as narinas",
      via: "Intranasal",
      intervalo: "2 vezes ao dia",
      duracao: "5 dias (pode repetir mensalmente em recorrências)",
      monitorizacao: "—",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Furunculose recorrente: associar banhos com clorexidina degermante 2–4% e lavagem de toalhas e roupas de cama. Conferir disponibilidade na REMUME"
    },
    {
      droga: "Clorexidina degermante 2% ou 4% (banho)",
      linha: "adj",
      dose: "Lavar o corpo todo do pescoço para baixo, deixar agir 1 a 2 minutos e enxaguar (evitar olhos, ouvidos e mucosas)",
      via: "Tópica",
      intervalo: "1 vez ao dia",
      duracao: "5 a 14 dias, junto com a mupirocina nasal",
      monitorizacao: "Ressecamento e irritação da pele",
      contraindicacoes: "Lactentes < 2 meses",
      ajustes: "Parte do pacote de descolonização na furunculose recorrente"
    }
  ],
  prescricao: {
    ambulatorial: "ABSCESSO DRENADO OU FURÚNCULO COM CELULITE — ADULTO\nUSO ORAL\n1. Cefalexina 500 mg --------------------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias (pode ser 5 dias se boa resposta).\n   SE SUSPEITA DE MRSA OU RECORRÊNCIA (não gestante):\n1. Sulfametoxazol + trimetoprima 800/160 mg ----------------- 14 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 7 dias (2 comprimidos de 12/12 h se > 100 kg).\n   SE ALERGIA A PENICILINA/CEFALOSPORINA:\n1. Clindamicina 300 mg ------------------------------------- 28 cápsulas\n   Tomar 1 cápsula de 6 em 6 horas por 7 dias.\n2. Dipirona 500 mg ---------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor ou febre.\n\nCUIDADOS COM A FERIDA\n3. Lavar com água e sabão ou SF 0,9% 1 a 2 vezes ao dia; trocar o curativo; retirar dreno/gaze em 24–48 h na UBS.\n4. Compressas mornas 15 minutos 3 a 4 vezes ao dia (furúnculo ainda não drenado).\n\nCRIANÇA (por kg)\n- Cefalexina 250 mg/5 mL: 25–50 mg/kg/dia divididos de 6/6 h por 7 dias (máx. 4 g/dia).\n- Sulfametoxazol + trimetoprima suspensão (200/40 mg por 5 mL), > 2 meses: 8–12 mg/kg/dia de trimetoprima divididos de 12/12 h por 7 dias. Como 1 mL = 8 mg de TMP: 0,5 a 0,75 mL/kg por dose, de 12/12 h (máx. 20 mL = 160 mg TMP por dose).\n- Clindamicina: 30–40 mg/kg/dia divididos de 8/8 h por 7 dias (máx. 450 mg/dose).\n- Dipirona: 10–15 mg/kg/dose até de 6/6 h (máx. 1 g/dose).\n\nFURUNCULOSE RECORRENTE — DESCOLONIZAÇÃO (paciente e contatos da casa)\n5. Mupirocina 2% pomada ----------------------------------- 1 bisnaga por pessoa\n   Aplicar com cotonete dentro de cada narina 2 vezes ao dia por 5 dias.\n6. Clorexidina degermante 2% ou 4% ------------------------- 1 frasco\n   No banho, lavar o corpo todo do pescoço para baixo, deixar 1 a 2 minutos e enxaguar, 1 vez ao dia por 5 a 14 dias.\n7. Lavar toalhas, roupas de cama e roupas íntimas em água quente; não compartilhar toalhas, lâminas e sabonete em barra.",
    hospitalar: "ABSCESSO COM SINAIS SISTÊMICOS, CELULITE EXTENSA OU IMUNOSSUPRIMIDO (peso: ___ kg)\n1. Dieta oral livre (jejum se drenagem em centro cirúrgico).\n2. Acesso venoso; hemograma, PCR, creatinina, glicemia, hemoculturas (2 amostras) e cultura do pus.\n3. Drenagem cirúrgica ampla da coleção; curativo com gaze.\n4. Oxacilina 2 g IV de 4 em 4 horas, diluída em 100 mL de SF 0,9%, infundir em 30–60 min (criança: 150–200 mg/kg/dia divididos de 4/4 h ou 6/6 h, máx. 12 g/dia).\n   OU cefazolina 2 g IV de 8 em 8 horas em 100 mL de SF 0,9% em 30 min (criança: 100 mg/kg/dia de 8/8 h, máx. 6 g/dia).\n5. Suspeita de MRSA, sepse ou falha: vancomicina 15–20 mg/kg/dose IV de 8/8 h a 12/12 h (máx. 2 g/dose), diluída em SF 0,9% ou SG 5% até ≤ 5 mg/mL, infundir em pelo menos 60 min (≥ 1 h por grama; máx. 10 mg/min). Criança: 15 mg/kg/dose de 6/6 h. Ajustar pela função renal e nível sérico.\n   Alternativa (alergia a betalactâmico, sem sepse): clindamicina 600 mg IV de 8/8 h em 100 mL de SF 0,9% em 20–30 min (criança: 10–13 mg/kg/dose de 6/6 h a 8/8 h, máx. 900 mg/dose).\n6. Dipirona 1 g IV de 6/6 h se dor ou febre (criança 15–25 mg/kg/dose, máx. 1 g); morfina conforme dor.\n7. Glicemia capilar de 6/6 h em diabéticos.\n8. Precaução de contato até cultura. Sinais vitais de 4/4 h. Reavaliar em 48–72 h e passar para VO (cefalexina, SMX-TMP ou clindamicina conforme cultura) para completar 7 a 10 dias."
  },
  orientacoesRetorno: [
    "Não espremer nem furar o furúnculo em casa: pode espalhar a infecção",
    "Compressas mornas ajudam o furúnculo a amadurecer e drenar",
    "Lavar as mãos depois de tocar na ferida; manter coberta com curativo; não compartilhar toalhas e lâminas",
    "Tomar o antibiótico até o fim, mesmo melhorando",
    "Voltar no mesmo dia se houver febre, vermelhidão que se espalha, dor muito forte, inchaço no rosto ou perto dos olhos, ou mal-estar importante",
    "Retornar em 24–48 h após a drenagem para trocar o curativo e avaliar",
    "Furúnculos de repetição: fazer o tratamento de descolonização em toda a família e avaliar diabetes"
  ],
  encaminhar: [
    "PS/cirurgia no mesmo dia: abscesso grande ou profundo, na mão, face central, perianal, mama, sinais de fasciíte necrosante, sinais sistêmicos",
    "Dermatologia: furunculose recorrente apesar da descolonização, suspeita de hidradenite supurativa"
  ],
  fontes: [
    "IDSA — Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update (Stevens DL, et al. Clin Infect Dis 2014) — I&D, indicações de antibiótico e descolonização (mupirocina nasal 2×/dia 5 dias, banhos com clorexidina)",
    "Talan DA, et al. Trimethoprim–sulfamethoxazole versus placebo for uncomplicated skin abscess. N Engl J Med 2016;374:823–32; Daum RS, et al. A placebo-controlled trial of antibiotics for smaller skin abscesses. N Engl J Med 2017;376:2545–55",
    "Sociedade Brasileira de Pediatria — Infecções bacterianas superficiais cutâneas, Documento Científico do Departamento de Dermatologia (dezembro/2022)",
    "Ministério da Saúde — RENAME 2024 (cefalexina, sulfametoxazol + trimetoprima, clindamicina, oxacilina, cefazolina, vancomicina)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

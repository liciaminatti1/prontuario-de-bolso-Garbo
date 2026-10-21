// Conjuntivite viral, bacteriana e alérgica
registrarFicha({
  id: "conjuntivite",
  especialidade: "oftalmo-otorrino",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Conjuntivite viral, bacteriana e alérgica (sinais de alarme oftalmológico)",
  resumo: "Olho vermelho com secreção e sensação de areia, sem baixa visual nem dor intensa. Viral: secreção aquosa, começa num olho e passa ao outro, linfonodo pré-auricular. Bacteriana: secreção purulenta, pálpebras grudadas pela manhã. Alérgica: prurido intenso, bilateral, rinite associada.",
  palavrasChave: "conjuntivite olho vermelho secrecao ocular adenovirus conjuntivite bacteriana alergica tobramicina moxifloxacino ciprofloxacino colirio cetotifeno olopatadina lagrima artificial gonococica neonatal lente de contato ceratite uveite glaucoma agudo",
  critico: {
    tempo: "Baixa visual ou dor = não é conjuntivite",
    texto: "Olho vermelho com baixa de visão, dor intensa, fotofobia, pupila alterada ou opacidade da córnea pede avaliação oftalmológica no mesmo dia. Não prescrever colírio de corticoide nem anestésico na UBS."
  },
  alarmes: [
    "Baixa da acuidade visual que não melhora ao piscar",
    "Dor ocular moderada a intensa, fotofobia, cefaleia com náuseas e halos (glaucoma agudo)",
    "Pupila irregular, pouco reativa ou em médio-midríase; hiperemia ao redor da córnea (uveíte, glaucoma)",
    "Opacidade, mancha branca ou úlcera na córnea; usuário de lente de contato com olho vermelho (ceratite — risco de perfuração)",
    "Secreção purulenta abundante que volta logo após limpar (hiperaguda — gonococo)",
    "Recém-nascido (até 28 dias) com conjuntivite (oftalmia neonatal)",
    "Trauma, corpo estranho ou respingo químico",
    "Vesículas na pálpebra ou na ponta do nariz (herpes simples ou zóster oftálmico)",
    "Edema palpebral com febre, dor à movimentação ocular ou proptose (celulite orbitária)"
  ],
  conduta: [
    "Medir a acuidade visual (tabela de Snellen) dos dois olhos e examinar com lanterna: córnea, pupila, secreção, pálpebras, linfonodo pré-auricular",
    "Viral (a mais comum): sem antibiótico. Compressas frias, lágrima artificial, higiene. Dura 1–3 semanas e é muito contagiosa",
    "Bacteriana leve: costuma melhorar sozinha em 1–2 semanas; colírio antibiótico encurta a duração e permite volta precoce à escola/trabalho — usar por 5–7 dias",
    "Usuário de lente de contato: suspender a lente; colírio de fluoroquinolona (cobre Pseudomonas) e oftalmologia em 24 h",
    "Alérgica: compressas frias, lágrima artificial gelada, colírio anti-histamínico/estabilizador de mastócitos; tratar rinite associada",
    "Hiperaguda (suspeita de gonococo) ou neonatal: ceftriaxona sistêmica, testar IST e encaminhar no mesmo dia",
    "Não usar colírio com corticoide (piora herpes e ceratite, causa glaucoma e catarata) nem colírio anestésico para casa",
    "Afastamento: em geral enquanto houver secreção/olho vermelho na viral; na bacteriana, até 24 h de colírio"
  ],
  diferenciais: [
    "Ceratite (bacteriana, herpética, por acantameba em lente de contato): dor, fotofobia, baixa visual, lesão na córnea",
    "Uveíte anterior: dor, fotofobia, hiperemia perilímbica, pupila miótica",
    "Glaucoma agudo de ângulo fechado: dor intensa, visão turva, halos, pupila médio-midriática, olho duro",
    "Hemorragia subconjuntival: mancha vermelha bem delimitada, sem secreção nem dor",
    "Episclerite/esclerite: hiperemia setorial; esclerite com dor intensa (doença autoimune)",
    "Blefarite, olho seco, hordéolo, corpo estranho, dacriocistite"
  ],
  exames: [
    "Diagnóstico clínico; não pedir exames na conjuntivite típica",
    "Cultura e Gram de secreção conjuntival: hiperaguda, neonatal, falha do tratamento, imunossuprimido",
    "Biologia molecular para clamídia e gonococo (secreção ocular e urina) e teste para sífilis/HIV: conjuntivite crônica em adulto sexualmente ativo ou neonatal",
    "Teste com fluoresceína (se disponível): úlcera ou dendrito na córnea → oftalmologia"
  ],
  tratamento: [
    {
      droga: "Lágrima artificial (carmelose ou hipromelose)",
      linha: "l1",
      dose: "1 gota",
      via: "Ocular",
      intervalo: "4 a 6 vezes ao dia",
      duracao: "Até melhorar",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Viral e alérgica. Guardar na geladeira alivia mais. Adulto e criança"
    },
    {
      droga: "Tobramicina 0,3% colírio",
      linha: "l1",
      dose: "1 a 2 gotas no olho afetado",
      via: "Ocular",
      intervalo: "4/4 h nas primeiras 48 h, depois 6/6 h",
      duracao: "5 a 7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia a aminoglicosídeo",
      ajustes: "Bacteriana. Criança: mesma posologia. Conferir REMUME; alternativa: ciprofloxacino 0,3% colírio (RENAME) 1–2 gotas de 4/4 a 6/6 h por 5–7 dias. Pomada à noite em lactente que chora muito"
    },
    {
      droga: "Moxifloxacino 0,5% colírio",
      linha: "alt",
      dose: "1 gota",
      via: "Ocular",
      intervalo: "8/8 h",
      duracao: "7 dias",
      monitorizacao: "Oftalmologia em 24 h se lente de contato",
      contraindicacoes: "Alergia a quinolona",
      ajustes: "Usuário de lente de contato (cobre Pseudomonas) ou falha da 1ª opção. Ciprofloxacino 0,3% também cobre Pseudomonas. Fora da RENAME"
    },
    {
      droga: "Cetotifeno 0,025% (ou olopatadina 0,1%) colírio",
      linha: "l1",
      dose: "1 gota em cada olho",
      via: "Ocular",
      intervalo: "12/12 h",
      duracao: "Enquanto houver exposição ao alérgeno",
      monitorizacao: "Ardência leve ao pingar",
      contraindicacoes: "Menores de 3 anos (conferir bula de cada produto)",
      ajustes: "Alérgica. Lentes de contato: retirar e recolocar 15 min após. Anti-histamínico oral (loratadina) se rinite associada — ver ficha anti-histaminicos"
    },
    {
      droga: "Ceftriaxona (conjuntivite gonocócica)",
      linha: "l1",
      dose: "Adulto: 1 g IM dose única. Recém-nascido: 25–50 mg/kg IV/IM dose única (máx. 250 mg)",
      via: "IM ou IV",
      intervalo: "Dose única",
      duracao: "—",
      monitorizacao: "Oftalmologia no mesmo dia; lavagem ocular com SF 0,9%",
      contraindicacoes: "Anafilaxia a cefalosporina; RN com hiperbilirrubinemia (avaliar cefotaxima no hospital)",
      ajustes: "Associar tratamento de clamídia (azitromicina 1 g VO dose única no adulto). Tratar parcerias. RN: internação e avaliação da mãe"
    },
    {
      droga: "Colírio de corticoide ou colírio anestésico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Não prescrever na UBS: piora ceratite herpética e fúngica, eleva pressão intraocular; anestésico causa úlcera de córnea. Só com oftalmologista"
    }
  ],
  prescricao: {
    ambulatorial: "CONJUNTIVITE VIRAL — ADULTO E CRIANÇA\nUSO OCULAR\n1. Lágrima artificial (carmelose 0,5%) colírio ------ 1 frasco\n   Pingar 1 gota em cada olho afetado 4 a 6 vezes ao dia enquanto houver desconforto (guardar na geladeira).\n2. Compressas frias com água filtrada ou soro fisiológico sobre os olhos fechados por 10 minutos, 3 a 4 vezes ao dia. Limpar a secreção com gaze e soro fisiológico, de dentro para fora, uma gaze para cada olho.\n\nCONJUNTIVITE BACTERIANA — ADULTO E CRIANÇA (mesma dose em gotas)\nUSO OCULAR\n1. Tobramicina 0,3% colírio ------------------------ 1 frasco\n   Pingar 1 a 2 gotas no olho afetado de 4 em 4 horas (acordado) por 2 dias; depois de 6 em 6 horas até completar 7 dias.\n   (Alternativa SUS: ciprofloxacino 0,3% colírio, mesma posologia. Usuário de lente de contato: moxifloxacino 0,5% colírio, 1 gota de 8 em 8 horas por 7 dias, e oftalmologista em 24 h.)\n2. Limpar a secreção com soro fisiológico antes de pingar o colírio.\n\nCONJUNTIVITE ALÉRGICA — ADULTO E CRIANÇA ≥ 3 ANOS\nUSO OCULAR\n1. Cetotifeno 0,025% colírio ----------------------- 1 frasco\n   Pingar 1 gota em cada olho de 12 em 12 horas enquanto houver coceira.\n2. Lágrima artificial gelada, 1 gota 4 vezes ao dia; compressas frias.\nUSO ORAL (se rinite ou prurido intenso)\n3. Loratadina 10 mg ------------------------------- 10 comprimidos\n   Tomar 1 comprimido ao dia. Criança 2–12 anos: xarope 1 mg/mL — 5 mL (≤ 30 kg) ou 10 mL (> 30 kg) 1 vez ao dia."
  },
  orientacoesRetorno: [
    "A conjuntivite viral passa sozinha em 1 a 3 semanas; antibiótico não ajuda",
    "É muito contagiosa: lavar as mãos sempre, não coçar os olhos, não dividir toalha, fronha, maquiagem ou colírio",
    "Não usar lente de contato até 24 h depois de curar; trocar o estojo",
    "Não pingar colírio sem receita, principalmente os que têm corticoide ou anestésico",
    "Voltar no mesmo dia se: a visão piorar, a dor ficar forte, a luz incomodar muito, aparecer mancha branca no olho ou a pálpebra inchar com febre",
    "Retornar se não melhorar em 3 dias com o colírio antibiótico ou em 7–10 dias na viral"
  ],
  encaminhar: [
    "Oftalmologia no mesmo dia (PS oftalmológico): qualquer sinal de alarme, lente de contato com dor ou opacidade, conjuntivite hiperaguda, recém-nascido, herpes ocular, trauma ou químico (irrigar com SF 0,9% abundante antes de encaminhar)",
    "Oftalmologia eletiva: conjuntivite que dura > 3–4 semanas, alérgica grave ou recorrente (ceratoconjuntivite vernal), dúvida diagnóstica"
  ],
  fontes: [
    "American Academy of Ophthalmology — Conjunctivitis Preferred Practice Pattern (aprovado 2023, publicado em Ophthalmology, 2024)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021): conjuntivite gonocócica e oftalmia neonatal",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28: Acolhimento à demanda espontânea, vol. II (2013): olho vermelho",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

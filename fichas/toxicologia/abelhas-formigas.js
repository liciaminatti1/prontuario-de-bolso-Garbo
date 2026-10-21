// Acidentes por abelhas, vespas e formigas (himenópteros)
registrarFicha({
  id: "abelhas-formigas",
  especialidade: "toxicologia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Picadas de abelha, vespa e formiga",
  resumo: "Acidentes por himenópteros. Três quadros: reação local (comum), reação alérgica sistêmica/anafilaxia (com 1 picada) e envenenamento por múltiplas picadas (ataque de enxame: hemólise, rabdomiólise, lesão renal).",
  palavrasChave: "abelha africanizada vespa marimbondo formiga lava pes formiga de fogo himenoptero picada ferrao enxame multiplas picadas anafilaxia adrenalina rabdomiolise hemolise soro antiapilico imunoterapia veneno",
  critico: {
    tempo: "Anafilaxia: adrenalina IM já",
    texto: "Urticária generalizada com falta de ar, rouquidão, tontura ou vômitos após picada: adrenalina 0,01 mg/kg IM (máx. 0,5 mg) no vasto lateral. Ataque de enxame: internar e vigiar hemólise, rabdomiólise e rim."
  },
  alarmes: [
    "Edema de lábios, língua ou glote, rouquidão, estridor, sibilância",
    "Hipotensão, síncope, vômitos, dor abdominal após picada (anafilaxia)",
    "Picada na boca ou na garganta (edema de via aérea mesmo sem alergia)",
    "Múltiplas picadas (dezenas ou mais; em criança, idoso e cardiopata, número menor já é grave)",
    "Urina escura, oligúria, icterícia, mialgia intensa (envenenamento sistêmico)",
    "História de reação sistêmica prévia a picada"
  ],
  conduta: [
    "Retirar os ferrões raspando com lâmina ou cartão o mais rápido possível; não pinçar (espreme a glândula de veneno). Vespas e formigas não deixam ferrão",
    "Lavar com água e sabão; compressa fria por 10–20 min; elevar o membro",
    "Reação local: analgésico, anti-histamínico oral se prurido e corticoide tópico; reação local extensa (> 10 cm, contínua ao local): considerar prednisona oral por 3–5 dias",
    "Formiga lava-pés: a pústula que surge em 24 h é estéril; não romper",
    "Reação sistêmica: tratar como anafilaxia (ver ficha Anafilaxia): adrenalina IM, O₂, volume; observar 4–6 h (mais se grave)",
    "Múltiplas picadas: monitor, acesso venoso, hidratação vigorosa; hemograma, bilirrubinas, DHL, CK, creatinina, K, urina tipo 1; internar e observar no mínimo 24 h (sintomas tóxicos podem surgir horas depois)",
    "Soro antiapílico: ainda em estudo clínico, não disponível na rotina; tratamento é de suporte. Discutir com o CIATox (0800 722 6001)",
    "Após reação sistêmica: encaminhar ao alergista para avaliar imunoterapia com veneno; ensinar plano de ação"
  ],
  diferenciais: [
    "Celulite (reação local extensa não é infecção: sem febre, pico em 24–48 h, prurido)",
    "Escorpionismo ou araneísmo (dor desproporcional, sinais adrenérgicos)",
    "Urticária por outra causa"
  ],
  exames: [
    "Reação local ou alérgica: nenhum",
    "Múltiplas picadas: hemograma, reticulócitos, bilirrubinas, DHL, CK, AST, ALT, ureia, creatinina, Na, K, glicemia, TP, urina tipo 1; ECG. Repetir em 12–24 h",
    "Após anafilaxia: triptase sérica 1–2 h após o início (se disponível) e IgE específica para veneno no seguimento com alergista"
  ],
  tratamento: [
    {
      droga: "Adrenalina 1 mg/mL (anafilaxia)",
      linha: "l1",
      dose: "0,01 mg/kg (adulto 0,5 mg; criança pré-púbere máx. 0,3 mg)",
      via: "IM no vasto lateral da coxa",
      intervalo: "Repetir a cada 5 min se necessário",
      duracao: "—",
      monitorizacao: "PA, FC, SpO₂, via aérea",
      contraindicacoes: "Nenhuma na anafilaxia",
      ajustes: "Refratária a 2 doses IM: infusão IV (ver ficha Anafilaxia)"
    },
    {
      droga: "Loratadina (prurido, reação local)",
      linha: "l1",
      dose: "Adulto 10 mg · Criança 2–12 anos: ≤ 30 kg 5 mg; > 30 kg 10 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "3–7 dias",
      monitorizacao: "—",
      contraindicacoes: "< 2 anos (usar desloratadina conforme bula)",
      ajustes: "Anti-histamínico não trata anafilaxia; é adjuvante"
    },
    {
      droga: "Prednisona / prednisolona (reação local extensa)",
      linha: "adj",
      dose: "Adulto 40 mg/dia · Criança 1 mg/kg/dia (máx. 40 mg)",
      via: "VO",
      intervalo: "1 vez ao dia pela manhã",
      duracao: "3–5 dias",
      monitorizacao: "Glicemia em diabéticos",
      contraindicacoes: "—",
      ajustes: "Benefício modesto; usar se edema grande e incômodo"
    }
  ],
  prescricao: {
    ambulatorial: "REAÇÃO LOCAL — ADULTO\nUSO TÓPICO\n1. Acetato de dexametasona 0,1% creme --------------------- 1 bisnaga\n   Aplicar fina camada no local 2 vezes ao dia por 3 a 5 dias.\nUSO ORAL\n2. Loratadina 10 mg --------------------------------------- 7 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por até 7 dias se coceira.\n3. Dipirona 500 mg ---------------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\nSE REAÇÃO LOCAL EXTENSA (> 10 cm)\n4. Prednisona 20 mg --------------------------------------- 10 comprimidos\n   Tomar 2 comprimidos (40 mg) pela manhã por 3 a 5 dias.\n\nCRIANÇA\n1. Loratadina xarope 1 mg/mL — 2 a 12 anos: ≤ 30 kg 5 mL; > 30 kg 10 mL, 1 vez ao dia, até 7 dias.\n2. Dipirona solução oral 50 mg/mL — 10–15 mg/kg/dose de 6 em 6 horas se dor (máx. 1 g/dose).\n3. Reação local extensa: prednisolona 3 mg/mL — 1 mg/kg/dia (máx. 40 mg) pela manhã por 3 a 5 dias.\n\nORIENTAÇÃO\n- Compressa fria (gelo envolto em pano) por 10 a 20 minutos, várias vezes ao dia.",
    hospitalar: "MÚLTIPLAS PICADAS (ATAQUE DE ENXAME) — INTERNAÇÃO (peso: ___ kg)\n1. Dieta oral livre se sem vômitos.\n2. Retirar todos os ferrões raspando com lâmina; lavar com água e sabão.\n3. Monitor, oximetria, PA de 1/1 h nas primeiras 6 h; depois de 4/4 h.\n4. Acesso venoso. SF 0,9% 1.000 mL IV de 6/6 a 8/8 h para diurese ≥ 1 mL/kg/h; se rabdomiólise (CK alta, urina escura), alvo de 200–300 mL/h no adulto (criança: ≥ 2 mL/kg/h), ajustando à função cardíaca e renal.\n5. Adrenalina 1 mg/mL à beira do leito: se anafilaxia, 0,5 mg IM (criança 0,01 mg/kg, máx. 0,3 mg).\n6. Loratadina 10 mg VO 1×/dia (criança por peso) se prurido.\n7. Dipirona 1 g IV de 6/6 h se dor (criança 10–15 mg/kg/dose, máx. 1 g).\n8. Exames na admissão e a cada 12–24 h: hemograma, bilirrubinas, DHL, CK, AST, ALT, ureia, creatinina, Na, K, TP, urina tipo 1; ECG.\n9. Diurese horária e cor da urina. Comunicar urina escura, diurese < 0,5 mL/kg/h, K > 5,5, queda de hemoglobina, dispneia, hipotensão, rebaixamento de consciência.\n10. Discutir com o CIATox (0800 722 6001). Notificação SINAN (acidente por animal peçonhento)."
  },
  orientacoesRetorno: [
    "Afastar-se rápido de enxames e não espantar com as mãos; proteger cabeça e rosto",
    "Não pinçar o ferrão: raspar com a unha, cartão ou faca sem ponta",
    "Voltar imediatamente se inchaço no rosto ou na garganta, falta de ar, chiado, tontura, vômitos ou manchas pelo corpo após picada",
    "Quem teve reação no corpo todo deve evitar exposição, ter plano de ação por escrito e ser avaliado por alergista (imunoterapia com veneno previne novas reações)",
    "Retornar se o inchaço local aumentar após 48 h, com calor, dor crescente, pus ou febre (infecção)"
  ],
  encaminhar: [
    "Alergista/imunologia: toda reação sistêmica a picada (avaliar imunoterapia com veneno)",
    "Internação: múltiplas picadas, picada na via aérea, anafilaxia grave",
    "UTI: hemólise ou rabdomiólise com lesão renal, insuficiência respiratória, choque"
  ],
  fontes: [
    "Ministério da Saúde — Guia de Vigilância em Saúde, 6ª ed., vol. 3 (2023): Acidentes por abelhas",
    "World Allergy Organization — Anaphylaxis Guidance (2020) e EAACI — Anaphylaxis guidelines (2021)",
    "ASBAI — Guia para o manejo da anafilaxia (2022)",
    "EAACI — Guidelines on allergen immunotherapy: Hymenoptera venom allergy (2018)",
    "Instituto Butantan/CEVAP-Unesp — Soro antiapílico: ensaios clínicos fase 1/2 publicados; fase 3 em andamento (sem registro na ANVISA até a revisão)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

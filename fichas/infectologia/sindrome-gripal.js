// Síndrome gripal e SRAG (influenza)
registrarFicha({
  id: "sindrome-gripal",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Síndrome gripal e SRAG (influenza, oseltamivir)",
  resumo: "Síndrome gripal: ≥ 2 de febre (mesmo referida), calafrios, dor de garganta, cefaleia, tosse, coriza, distúrbio de olfato ou paladar. SRAG: síndrome gripal com dispneia, pressão no tórax, SpO₂ < 95% ou cianose. Oseltamivir para SRAG e para síndrome gripal com fator de risco, de preferência em até 48 h.",
  palavrasChave: "sindrome gripal srag gripe influenza oseltamivir tamiflu quimioprofilaxia notificacao sivep gripe h1n1 h3n2 virus respiratorio",
  critico: {
    tempo: "Oseltamivir sem esperar exame",
    texto: "SRAG ou síndrome gripal em grupo de risco: iniciar oseltamivir na hora, mesmo vacinado e sem confirmação laboratorial. Maior benefício em até 48 h, mas tratar SRAG mesmo depois."
  },
  alarmes: [
    "Dispneia, taquipneia, SpO₂ < 95% em ar ambiente, cianose (SRAG)",
    "Hipotensão, confusão mental, sonolência",
    "Piora dos sintomas após melhora inicial ou febre > 3 dias (pneumonia bacteriana secundária)",
    "Criança: batimento de asa de nariz, tiragem, gemência, desidratação, recusa alimentar, convulsão",
    "Exacerbação de doença crônica (asma, DPOC, insuficiência cardíaca, diabetes)"
  ],
  conduta: [
    "Classificar: síndrome gripal sem risco, síndrome gripal com fator de risco ou SRAG (medir SpO₂ de todos)",
    "Fatores de risco: gestantes (qualquer idade gestacional) e puérperas até 2 semanas, ≥ 60 anos, < 5 anos (maior risco < 2 anos), < 19 anos em uso prolongado de AAS, indígenas, doenças crônicas (pulmonar, cardíaca, renal, hepática, neurológica, metabólica/diabetes, hematológica), imunossupressão, obesidade (IMC ≥ 40 em adulto)",
    "Síndrome gripal com fator de risco: oseltamivir imediato + sintomáticos + reavaliação em 48 h",
    "Síndrome gripal sem fator de risco: sintomáticos; oseltamivir a critério clínico se piora",
    "SRAG: oseltamivir já na primeira avaliação, colher painel viral (RT-PCR), O₂, internar e notificar no SIVEP-Gripe",
    "Testar também para COVID-19 (ver ficha covid-19) quando disponível",
    "Quimioprofilaxia (até 48 h da exposição) apenas em situações definidas pelo MS: pessoas de risco não vacinadas ou vacinadas há < 2 semanas com contato próximo, profissionais de saúde expostos sem EPI, surtos em instituições fechadas"
  ],
  exames: [
    "Ambulatorial sem gravidade: nenhum exame é necessário para tratar",
    "SRAG/internação: RT-PCR (painel influenza, SARS-CoV-2, VSR) de swab nasofaríngeo — colher idealmente até o 7º dia; hemograma, PCR, ureia, creatinina, eletrólitos, gasometria se SpO₂ < 92%, RX de tórax, hemoculturas se suspeita de infecção bacteriana",
    "Unidades sentinela: coleta conforme rotina da vigilância"
  ],
  diferenciais: [
    "COVID-19 (testar)",
    "Resfriado comum e outras IVAS (ver ficha ivas-sinusite)",
    "Pneumonia bacteriana",
    "Dengue e outras arboviroses (febre e mialgia sem sintomas respiratórios importantes)",
    "Bronquiolite (VSR) no lactente"
  ],
  tratamento: [
    {
      droga: "Oseltamivir",
      linha: "l1",
      dose: "Adulto e > 40 kg: 75 mg · Criança ≥ 1 ano: ≤ 15 kg 30 mg; > 15–23 kg 45 mg; > 23–40 kg 60 mg; > 40 kg 75 mg · < 1 ano: 0–8 meses 3 mg/kg; 9–11 meses 3,5 mg/kg",
      via: "VO",
      intervalo: "Tratamento: 12/12 h · Quimioprofilaxia: 1 vez ao dia (mesma dose por peso/idade da tabela; < 3 meses só em situação crítica)",
      duracao: "Tratamento 5 dias · Quimioprofilaxia 10 dias",
      monitorizacao: "Náuseas e vômitos (tomar com alimento); se vomitar até 1 h após a dose, repetir",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Gestantes e lactantes: indicado. ClCr 30–60 mL/min: 30 mg 12/12 h; ClCr 10–30: 30 mg 1×/dia (conferir tabela do Guia MS 2023 para diálise). Prematuros: dose menor (consultar guia). Sem apresentação líquida no SUS: abrir a cápsula de 75 mg, diluir em água e dar a fração correspondente logo após o preparo"
    },
    {
      droga: "Dipirona ou paracetamol",
      linha: "adj",
      dose: "Adulto: dipirona 500–1.000 mg; paracetamol 500–750 mg · Criança: 10–15 mg/kg/dose",
      via: "VO",
      intervalo: "6/6 h se febre ou dor",
      duracao: "Enquanto houver sintomas",
      monitorizacao: "Febre > 3 dias → reavaliar",
      contraindicacoes: "AAS em < 19 anos (síndrome de Reye)",
      ajustes: "Paracetamol máx 75 mg/kg/dia (criança) e 4 g/dia (adulto)"
    }
  ],
  prescricao: {
    ambulatorial: "SÍNDROME GRIPAL COM FATOR DE RISCO — ADULTO\nUSO ORAL\n1. Oseltamivir 75 mg ----------------------------- 10 cápsulas\n   Tomar 1 cápsula de 12 em 12 horas por 5 dias, com alimento.\n2. Dipirona 500 mg -------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se febre ou dor.\n\nCRIANÇA ≥ 1 ANO (dose por peso, 12 em 12 horas, 5 dias)\n≤ 15 kg: 30 mg · > 15–23 kg: 45 mg · > 23–40 kg: 60 mg · > 40 kg: 75 mg.\n1. Oseltamivir 30 mg (ou 45 mg) ------------------ 10 cápsulas\n   Dar 1 cápsula de 12 em 12 horas por 5 dias. Se não engolir: abrir a cápsula, misturar o pó em um pouco de água ou alimento doce e dar logo.\n   Sem cápsula da dose: abrir a cápsula de 75 mg em 5 mL de água (15 mg/mL) e dar o volume da dose (ex.: 30 mg = 2 mL); desprezar o restante.\n< 1 ano: 0–8 meses 3 mg/kg/dose; 9–11 meses 3,5 mg/kg/dose, de 12 em 12 horas por 5 dias.\n\nQUIMIOPROFILAXIA (contato elegível)\n1. Oseltamivir 75 mg ----------------------------- 10 cápsulas\n   Tomar 1 cápsula 1 vez ao dia por 10 dias (criança: mesma dose por peso, 1 vez ao dia).",
    hospitalar: "SRAG — ADULTO\n1. Dieta oral conforme aceitação; cabeceira elevada.\n2. O₂ por cateter nasal ou máscara para SpO₂ ≥ 94% (DPOC 88–92%).\n3. Oseltamivir 75 mg VO (ou por sonda) de 12/12 h por 5 dias (prolongar só por orientação especializada em imunossuprimidos graves).\n4. Se pneumonia bacteriana associada: ceftriaxona 1–2 g IV 1×/dia + azitromicina 500 mg VO/IV 1×/dia (ver ficha de pneumonia).\n5. Dipirona 1 g IV de 6/6 h se febre ou dor.\n6. Hidratação venosa só se desidratação ou baixa ingesta: SF 0,9% conforme avaliação.\n7. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV), se sem contraindicação.\n8. Precaução para gotículas (máscara cirúrgica; quarto privativo ou coorte).\n9. Colher RT-PCR para vírus respiratórios e notificar no SIVEP-Gripe.\n10. Controles: SpO₂, FR, FC, PA, temperatura de 4/4 h.\nCriança: oseltamivir na dose por peso de 12/12 h; antibiótico conforme ficha pneumonia-crianca."
  },
  orientacoesRetorno: [
    "Repouso, beber bastante líquido, lavar as mãos, cobrir a boca ao tossir; evitar contato com pessoas de risco enquanto tiver febre",
    "Ficar em casa até pelo menos 24 h sem febre sem usar antitérmico",
    "Voltar imediatamente se: falta de ar, cansaço para falar, lábios roxos, dor no peito, confusão, febre que volta depois de melhorar; na criança, respiração rápida ou com esforço, gemido, não aceitar líquidos, muito sonolenta",
    "Grupos de risco: retorno ou contato em 48 h",
    "Vacinar contra influenza na campanha anual (e manter a vacina de COVID-19 em dia)"
  ],
  encaminhar: [
    "SRAG → sala de emergência/internação; UBS sem O₂ → SAMU 192",
    "Notificação: SRAG hospitalizada e óbito por SRAG — compulsória no SIVEP-Gripe; síndrome gripal — unidades sentinela e surtos (comunicar a vigilância epidemiológica)"
  ],
  tabelas: [
    {
      titulo: "Oseltamivir por peso/idade (Guia MS 2023)",
      colunas: ["Faixa", "Tratamento (5 dias)", "Quimioprofilaxia (10 dias)"],
      linhas: [
        ["Adulto / > 40 kg", "75 mg 12/12 h", "75 mg 1×/dia"],
        ["> 23–40 kg", "60 mg 12/12 h", "60 mg 1×/dia"],
        ["> 15–23 kg", "45 mg 12/12 h", "45 mg 1×/dia"],
        ["≤ 15 kg (≥ 1 ano)", "30 mg 12/12 h", "30 mg 1×/dia"],
        ["9–11 meses", "3,5 mg/kg 12/12 h", "3,5 mg/kg 1×/dia"],
        ["0–8 meses", "3 mg/kg 12/12 h", "3 mg/kg 1×/dia (≥ 3 meses)"]
      ],
      nota: "< 3 meses: profilaxia não recomendada, salvo situação crítica. Ajuste renal no adulto: conferir o guia."
    }
  ],
  fontes: [
    "Ministério da Saúde — Guia de Manejo e Tratamento de Influenza (2023)",
    "Ministério da Saúde — Guia de vigilância integrada da covid-19, influenza e outros vírus respiratórios de importância em saúde pública (2024)",
    "SES-AL — Nota Informativa SEVISA nº 13/2026: tratamento para SARS-CoV-2 e influenza e suas indicações (2026); SES-RJ — Nota Informativa 04/2026 (oseltamivir)",
    "OMS — Clinical practice guidelines for influenza (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

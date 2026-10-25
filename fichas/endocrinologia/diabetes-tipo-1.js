// Diabetes melito tipo 1
registrarFicha({
  id: "diabetes-tipo-1",
  especialidade: "endocrinologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Diabetes tipo 1: diagnóstico e insulinoterapia basal-bolus",
  resumo: "Diabetes autoimune por deficiência de insulina, mais comum em crianças e jovens, mas possível em qualquer idade (inclui LADA). Reconhecer na abertura (risco de cetoacidose), montar esquema basal-bolus com insulinas do SUS, contagem de carboidratos, hipoglicemia, dias de doença e rastreio de complicações.",
  palavrasChave: "diabetes tipo 1 dm1 insulinodependente lada anti-gad anticorpos peptideo c basal bolus nph regular glargina degludeca asparte lispro glulisina contagem de carboidratos relacao insulina carboidrato fator de sensibilidade hipoglicemia glucagon cetonas dias de doenca monitorizacao continua tempo no alvo crianca adolescente celiaca",
  critico: {
    tempo: "Suspeita: glicemia e cetona já",
    texto: "Criança ou jovem com poliúria, polidipsia, perda de peso, enurese nova ou vômitos: glicemia capilar e cetonas na hora. Glicemia alta com cetose, vômitos ou desidratação = PS (cetoacidose). Nunca suspender a insulina basal."
  },
  alarmes: [
    "Vômitos, dor abdominal, respiração profunda, sonolência (cetoacidose — ver cetoacidose e cad-pediatrica)",
    "Cetonemia ≥ 1,5 mmol/L (ou cetonúria ++) que não cai com insulina extra; ≥ 3,0 mmol/L = PS",
    "Hipoglicemia grave (precisou de ajuda de outra pessoa), convulsão ou inconsciência",
    "Hipoglicemias frequentes sem sintomas de alerta (hipoglicemia não percebida)",
    "Criança pequena (< 5 anos) com suspeita de abertura: risco maior de cetoacidose grave"
  ],
  conduta: [
    "Diagnóstico de diabetes: glicemia de jejum ≥ 126, HbA1c ≥ 6,5%, TOTG 2 h ≥ 200 ou glicemia casual ≥ 200 mg/dL com sintomas (ver diabetes-tipo-2); em criança sintomática, não esperar HbA1c ou confirmação para agir",
    "Sugere DM1: criança/jovem, magro, perda de peso, início rápido, cetose, história pessoal/familiar de autoimunidade; em adulto, falha precoce aos orais (LADA)",
    "Confirmar o tipo (sem atrasar a insulina): autoanticorpos (anti-GAD, anti-IA2, anti-insulina antes de insulinizar, anti-ZnT8) e peptídeo C; encaminhar à endocrinologia",
    "Abertura em criança: avaliação no mesmo dia em PS/serviço de referência; sem cetoacidose, pode iniciar insulina SC e educação com equipe especializada",
    "Iniciar insulina basal-bolus (tabela): basal (NPH ou análogo de longa duração) + prandial (regular ou análogo rápido) + correção",
    "Educação em diabetes para paciente e família: técnica de aplicação, rodízio de locais, armazenamento, glicemia capilar, hipoglicemia, dias de doença, cetonas",
    "Monitorizar glicemia capilar ≥ 4–6×/dia (antes das refeições, ao deitar, eventualmente madrugada e pós-prandial) ou sensor de monitorização contínua quando disponível",
    "Contagem de carboidratos (tabela): dose prandial pela relação insulina:carboidrato + correção pelo fator de sensibilidade",
    "Ajustar doses a cada 3–7 dias pelos padrões: jejum alto → basal da noite; pré-almoço/jantar alto → bolus da refeição anterior ou NPH da manhã; hipoglicemia → reduzir a dose responsável em 10–20%",
    "Metas: HbA1c < 7% (individualizar), tempo no alvo 70–180 mg/dL > 70%, abaixo de 70 < 4% e abaixo de 54 < 1%",
    "Glucagon em casa para quem tem risco de hipoglicemia grave; família treinada",
    "Rastreio anual: TSH (ao diagnóstico e a cada 1–2 anos), doença celíaca (anti-transglutaminase IgA + IgA total ao diagnóstico e periodicamente), lipídios, PA, albuminúria e retina (adulto: a partir de 5 anos de doença; criança: a partir dos 11 anos com 2–5 anos de doença), pés",
    "Vacinas em dia (influenza anual, pneumocócica); saúde mental e transtornos alimentares (omissão de insulina para emagrecer)"
  ],
  exames: [
    "Pedido inicial: 'Glicemia, HbA1c, anticorpo anti-GAD, anti-IA2 (e anti-insulina se ainda sem insulina), peptídeo C, TSH, T4 livre, anti-TPO, antitransglutaminase IgA e IgA total, creatinina, perfil lipídico, urina tipo 1. Indicação: diabetes tipo 1 suspeito/recente.'",
    "Na abertura: gasometria venosa, eletrólitos e cetonemia se cetose, vômitos ou desidratação",
    "Seguimento: HbA1c a cada 3 meses; anual: relação albumina/creatinina, creatinina, lipídios, TSH, retinografia (conforme tempo de doença)",
    "Peptídeo C baixo ou indetectável + anticorpo positivo confirmam DM1; anticorpos negativos em jovem com história familiar forte: pensar MODY (especialista)"
  ],
  diferenciais: [
    "Diabetes tipo 2 em jovem obeso (acantose, história familiar, peptídeo C preservado)",
    "MODY (diabetes monogênico): início antes dos 25–35 anos, várias gerações afetadas, anticorpos negativos",
    "Diabetes secundário: fibrose cística, pancreatite, corticoide",
    "Hiperglicemia de estresse (infecção, trauma) em criança: reavaliar após o evento",
    "Diabetes insípido (poliúria sem hiperglicemia)"
  ],
  tratamento: [
    {
      droga: "Dose total diária de insulina (DTD)",
      linha: "l1",
      dose: "Adulto: iniciar 0,4–0,5 UI/kg/dia (sem cetoacidose). Criança pré-púbere: 0,7–1,0 UI/kg/dia; puberdade: pode chegar a 1,2–2,0 UI/kg/dia; fase de remissão ('lua de mel'): < 0,5 UI/kg/dia",
      via: "SC",
      intervalo: "Dividida em basal e bolus",
      duracao: "Por toda a vida",
      monitorizacao: "Glicemias capilares/sensor, HbA1c, hipoglicemias",
      contraindicacoes: "—",
      ajustes: "Basal ≈ 40–50% da DTD (30–50% em crianças); restante dividido nas refeições. Doses iniciais menores em criança pequena e em quem tem hipoglicemia"
    },
    {
      droga: "Insulina humana NPH (basal, SUS)",
      linha: "l1",
      dose: "Basal da DTD dividida: em geral 2/3 antes do café e 1/3 às 22 h (ou 3 doses: café, almoço e 22 h)",
      via: "SC",
      intervalo: "2–3×/dia",
      duracao: "Contínuo",
      monitorizacao: "Glicemia de jejum (dose da noite) e pré-jantar (dose da manhã)",
      contraindicacoes: "—",
      ajustes: "Homogeneizar (rolar 20 vezes) antes de aspirar. Aplicar a dose da noite às 22 h (não no jantar) reduz hipoglicemia de madrugada"
    },
    {
      droga: "Análogo de insulina de longa duração (glargina, degludeca, detemir)",
      linha: "alt",
      dose: "Mesma fração basal da DTD (ao trocar da NPH: somar as doses de NPH e reduzir cerca de 20%)",
      via: "SC",
      intervalo: "1×/dia, sempre no mesmo horário (detemir pode exigir 2×/dia)",
      duracao: "Contínuo",
      monitorizacao: "Glicemia de jejum",
      contraindicacoes: "—",
      ajustes: "Disponível pelo Componente Especializado do SUS conforme critérios do PCDT de DM1 (hipoglicemias graves/frequentes ou controle inadequado com NPH)"
    },
    {
      droga: "Insulina humana regular (prandial, SUS)",
      linha: "l1",
      dose: "Parte prandial da DTD dividida nas refeições, ou pela contagem de carboidratos (regra do 450)",
      via: "SC",
      intervalo: "30 min antes do café, almoço e jantar",
      duracao: "Contínuo",
      monitorizacao: "Glicemia pré-prandial seguinte e 2 h pós-prandial",
      contraindicacoes: "—",
      ajustes: "Risco de hipoglicemia tardia; lanches intermediários podem ser necessários"
    },
    {
      droga: "Análogo de insulina de ação rápida (asparte, lispro, glulisina)",
      linha: "alt",
      dose: "Pela contagem de carboidratos (regra do 500) + correção (regra do 1800)",
      via: "SC",
      intervalo: "0–15 min antes de cada refeição (criança pequena que come pouco: logo após a refeição)",
      duracao: "Contínuo",
      monitorizacao: "Glicemia 2 h pós-prandial e pré-prandial seguinte",
      contraindicacoes: "—",
      ajustes: "Preferido no DM1 (menos hipoglicemia); disponível no SUS conforme o PCDT de DM1"
    },
    {
      droga: "Glucagon (hipoglicemia grave em casa)",
      linha: "l1",
      dose: "1 mg (≥ 25 kg ou ≥ 6–8 anos); 0,5 mg (< 25 kg)",
      via: "IM ou SC",
      intervalo: "Dose única; se sem resposta em 10–15 min, SAMU/PS",
      duracao: "—",
      monitorizacao: "Colocar de lado (vômito é comum); dar carboidrato quando acordar",
      contraindicacoes: "—",
      ajustes: "No serviço de saúde, preferir glicose IV (ver ficha hipoglicemia)"
    }
  ],
  tabelas: [
    {
      titulo: "Exemplo de esquema inicial (adulto 60 kg, 0,5 UI/kg/dia = 30 UI)",
      colunas: ["Insulina", "Horário", "Dose"],
      linhas: [
        ["NPH", "Antes do café", "10 UI"],
        ["NPH", "22 h", "5 UI"],
        ["Regular (ou análogo rápido)", "Antes do café", "4 UI"],
        ["Regular (ou análogo rápido)", "Antes do almoço", "6 UI"],
        ["Regular (ou análogo rápido)", "Antes do jantar", "5 UI"]
      ],
      nota: "Basal 15 UI (50%) + prandial 15 UI. Ajustar a cada 3–7 dias pelos registros. Em crianças, montar com a equipe de endocrinologia pediátrica."
    },
    {
      titulo: "Contagem de carboidratos e correção",
      colunas: ["Parâmetro", "Cálculo", "Exemplo (DTD 30 UI)"],
      linhas: [
        ["Relação insulina:carboidrato (RIC)", "500 ÷ DTD (análogo rápido) ou 450 ÷ DTD (regular) = gramas de carboidrato cobertos por 1 UI", "500 ÷ 30 ≈ 1 UI para 15 g"],
        ["Fator de sensibilidade (FS)", "1800 ÷ DTD (análogo rápido) ou 1500 ÷ DTD (regular) = queda em mg/dL por 1 UI", "1800 ÷ 30 = 1 UI baixa 60 mg/dL"],
        ["Dose de correção", "(glicemia atual − alvo) ÷ FS", "(220 − 100) ÷ 60 = 2 UI"],
        ["Dose da refeição", "(gramas de carboidrato ÷ RIC) + correção", "60 g ÷ 15 = 4 UI + 2 = 6 UI"]
      ],
      nota: "As regras são ponto de partida; ajustar com nutricionista e endocrinologista conforme as glicemias."
    },
    {
      titulo: "Dias de doença: cetonas e insulina extra",
      colunas: ["Cetonemia (mmol/L)", "Cetonúria", "Conduta"],
      linhas: [
        ["< 0,6", "Negativa/traços", "Manter basal; corrigir glicemia com o fator de sensibilidade; glicemia a cada 2–4 h"],
        ["0,6–1,4", "+ a ++", "Insulina rápida extra de 5–10% da DTD; repetir em 2–3 h; líquidos"],
        ["1,5–2,9", "++ a +++", "Insulina rápida extra de 10–20% da DTD; repetir em 2 h; se vômitos ou piora → PS"],
        ["≥ 3,0", "+++/++++", "PS imediatamente (risco de cetoacidose)"]
      ],
      nota: "Nunca suspender a insulina basal, mesmo sem comer. Fonte: ISPAD 2022 (sick day management)."
    }
  ],
  prescricao: {
    ambulatorial: "DIABETES TIPO 1 — ESQUEMA BASAL-BOLUS COM INSULINAS DO SUS (exemplo adulto 60 kg)\nUSO SUBCUTÂNEO\n1. Insulina humana NPH 100 UI/mL ------------------ ___ frascos ou canetas por mês\n   Aplicar 10 UI antes do café da manhã e 5 UI às 22 horas.\n2. Insulina humana regular 100 UI/mL -------------- ___ frascos ou canetas por mês\n   Aplicar 30 minutos antes das refeições: café 4 UI, almoço 6 UI, jantar 5 UI.\n   Correção: somar 1 UI para cada 50 mg/dL acima de 150 mg/dL (ajustar ao fator de sensibilidade).\n3. Glucagon 1 mg (kit) ----------------------------- 1 kit\n   Em caso de desmaio ou convulsão por hipoglicemia: aplicar 1 mg IM na coxa (criança < 25 kg: 0,5 mg) e chamar o SAMU 192.\n4. Seringas de insulina 100 UI com agulha curta (ou agulhas para caneta 4–5 mm), tiras reagentes, lancetas e lancetador (SUS).\n5. Tiras para cetonúria (ou cetonemia capilar) para dias de doença.\n\nCRIANÇA: dose total 0,7–1,0 UI/kg/dia (pré-púbere), basal 30–50% da dose total; montar com endocrinologia pediátrica.\n\nHIPOGLICEMIA LEVE (orientação escrita)\n15 g de açúcar de absorção rápida (1 colher de sopa de açúcar em água ou 150 mL de suco ou refrigerante comum; criança 0,3 g/kg); medir de novo em 15 minutos; repetir se < 70 mg/dL; depois fazer um lanche."
  },
  orientacoesRetorno: [
    "Nunca ficar sem a insulina basal (NPH ou análogo), mesmo doente ou sem comer",
    "Medir a glicemia antes de cada refeição e ao deitar; anotar e trazer na consulta",
    "Hipoglicemia (tremor, suor, fome, confusão): regra dos 15 — 15 g de açúcar, medir em 15 minutos, repetir se precisar; sempre andar com açúcar ou bala",
    "Doente, com vômitos ou glicemia > 250 mg/dL: medir cetonas; se vômitos persistentes, dor de barriga, respiração rápida ou sonolência, ir ao PS",
    "Guardar a insulina em uso fora da geladeira por até 4–6 semanas, longe do calor; as reservas na geladeira (nunca no congelador)",
    "Fazer rodízio dos locais de aplicação (barriga, coxas, braços, nádegas) para evitar caroços",
    "Antes de exercício: medir a glicemia; se < 100 mg/dL, comer 15–30 g de carboidrato",
    "Informar escola, trabalho e família sobre o diabetes e como agir na hipoglicemia",
    "Consultas a cada 3 meses (mais frequentes no início)"
  ],
  encaminhar: [
    "Endocrinologia (pediátrica ou adulto): todo DM1 ao diagnóstico e para seguimento compartilhado com a UBS",
    "PS/serviço de referência no mesmo dia: abertura em criança, cetose com vômitos, cetoacidose",
    "Nutricionista (contagem de carboidratos), psicologia/eMulti, oftalmologia (retina), odontologia",
    "PCDT DM1 (Componente Especializado): análogos de insulina conforme critérios"
  ],
  fontes: [
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas do Diabete Melito Tipo 1 (2019)",
    "SBD — Diretriz Oficial da Sociedade Brasileira de Diabetes (2024–2025): tratamento do DM1, insulinoterapia e metas",
    "ISPAD — Clinical Practice Consensus Guidelines (Pediatric Diabetes, 2022)",
    "ADA — Standards of Care in Diabetes (2025)",
    "Battelino T et al. — International consensus on Time in Range (Diabetes Care, 2019)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

// Dermatite de contato irritativa e alérgica
registrarFicha({
  id: "dermatite-contato",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Dermatite de contato irritativa e alérgica",
  resumo: "Eczema na área de contato com uma substância. Irritativa: dano direto (água, sabão, detergente, solventes), ardor, limites nítidos, mais em mãos. Alérgica: hipersensibilidade tardia (níquel, cosméticos, tintura de cabelo, borracha, neomicina, plantas), prurido, vesículas, pode extrapolar a área. Tratar: afastar o agente, corticoide tópico e hidratação.",
  palavrasChave: "dermatite de contato eczema de contato alergia de pele niquel bijuteria cosmetico tintura parafenilenodiamina henna borracha luva latex detergente dermatite das maos neomicina corticoide topico dexametasona betametasona clobetasol prednisona teste de contato patch test ocupacional",
  alarmes: [
    "Lesões extensas (> 20% da superfície corporal), face com edema palpebral importante ou genitais",
    "Bolhas extensas, áreas desnudas, mucosas acometidas ou febre (pensar em farmacodermia grave: Stevens-Johnson)",
    "Crostas melicéricas, pus, dor crescente (infecção secundária)",
    "Edema de lábios/língua, sibilância, urticária generalizada (reação imediata — ver ficha anafilaxia)",
    "Dermatite ocupacional que impede o trabalho"
  ],
  conduta: [
    "Identificar e afastar o agente: profissão, produtos de limpeza, cosméticos, bijuterias, calçados, luvas, medicamentos tópicos, plantas, tintura de cabelo/henna",
    "Lavar a pele com água e sabão neutro após contato suspeito",
    "Fase aguda exsudativa: compressas frias com soro fisiológico ou água por 15–20 min, 2–3 vezes ao dia",
    "Corticoide tópico conforme local e intensidade: baixa potência em face, pálpebras, dobras, genitais e crianças pequenas; média a alta potência em corpo e mãos, por 1–2 semanas (até 3 semanas nas mãos), depois reduzir",
    "Corticoide oral só se extensa (> 20% da superfície), grave ou em face/genitais com edema importante: 2–3 semanas com redução gradual (curso curto demais causa rebote)",
    "Hidratante sem perfume várias vezes ao dia; nas mãos: luvas de algodão sob luvas de borracha, evitar lavagens repetidas",
    "Anti-histamínico oral pouco ajuda no prurido do eczema; pode ser usado à noite pelo efeito sedativo",
    "Dermatite ocupacional: emitir relatório/atestado, notificar no SINAN (dermatose ocupacional) e orientar CAT quando trabalhador formal"
  ],
  diferenciais: [
    "Dermatite atópica (história pessoal, flexuras, início na infância)",
    "Dermatite seborreica, psoríase (placas descamativas bem delimitadas)",
    "Tinea (borda ativa, KOH positivo; piora com corticoide)",
    "Escabiose (prurido noturno, contactantes, lesões interdigitais)",
    "Fitofotodermatite (limão + sol: manchas e bolhas em respingos)",
    "Celulite (dor, calor, febre, sem prurido)"
  ],
  exames: [
    "Diagnóstico clínico",
    "Teste de contato (patch test): dermatite recorrente, crônica, ocupacional ou sem causa identificada — encaminhar à dermatologia",
    "Exame micológico direto (KOH) se dúvida com tinea"
  ],
  tratamento: [
    {
      droga: "Dexametasona 0,1% creme (ou hidrocortisona 1% creme)",
      linha: "l1",
      dose: "Camada fina",
      via: "Tópica",
      intervalo: "1–2 vezes ao dia",
      duracao: "7–14 dias",
      monitorizacao: "Atrofia, estrias, telangiectasias",
      contraindicacoes: "Infecção cutânea não tratada (fúngica, viral, bacteriana)",
      ajustes: "RENAME. Baixa a média potência: face, dobras, genitais e criança"
    },
    {
      droga: "Betametasona valerato 0,1% creme ou pomada",
      linha: "l1",
      dose: "Camada fina",
      via: "Tópica",
      intervalo: "1–2 vezes ao dia",
      duracao: "Até 2 semanas (mãos: até 3 semanas), depois reduzir",
      monitorizacao: "Atrofia; não usar em face e dobras",
      contraindicacoes: "Infecção cutânea não tratada",
      ajustes: "Média-alta potência para corpo e mãos. Lesão espessa e crônica nas mãos: clobetasol 0,05% por até 2 semanas (adulto). Pomada para lesão seca; creme para lesão úmida. Criança: preferir baixa potência e menor área"
    },
    {
      droga: "Prednisona (ou prednisolona na criança)",
      linha: "adj",
      dose: "Adulto: 0,5–1 mg/kg/dia (máx. 60 mg/dia) · Criança: 1 mg/kg/dia (máx. 40 mg/dia)",
      via: "VO",
      intervalo: "1×/dia pela manhã",
      duracao: "2–3 semanas com redução gradual (ex.: dose plena 5–7 dias, depois reduzir pela metade a cada 5–7 dias)",
      monitorizacao: "Glicemia em diabético, PA, humor, insônia",
      contraindicacoes: "Infecção sistêmica não tratada; cautela em diabetes, HAS, úlcera péptica",
      ajustes: "Só para casos extensos ou graves. Cursos de 5 dias costumam causar rebote. Prednisolona solução oral 3 mg/mL (RENAME) na criança"
    },
    {
      droga: "Loratadina",
      linha: "adj",
      dose: "Adulto e > 30 kg: 10 mg · Criança 2–12 anos ≤ 30 kg: 5 mg (5 mL do xarope 1 mg/mL)",
      via: "VO",
      intervalo: "1×/dia",
      duracao: "Enquanto houver prurido",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "RENAME. Efeito modesto no prurido do eczema. Ver ficha anti-histaminicos"
    },
    {
      droga: "Pomadas com neomicina, prometazina ou anestésico tópico (benzocaína)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "São causas frequentes de dermatite de contato alérgica; não usar"
    }
  ],
  prescricao: {
    ambulatorial: "DERMATITE DE CONTATO LOCALIZADA — ADULTO\nUSO TÓPICO\n1. Betametasona valerato 0,1% creme -------------- 1 bisnaga\n   Aplicar camada fina nas lesões do corpo/mãos 2 vezes ao dia por 10 dias; depois 1 vez ao dia por mais 5 dias e parar.\n   (Face, pálpebras, dobras ou genitais: dexametasona 0,1% creme ou hidrocortisona 1% creme, 2 vezes ao dia por até 7 dias.)\n2. Compressas frias com soro fisiológico por 15 minutos, 3 vezes ao dia, enquanto houver lesões úmidas.\n3. Hidratante sem perfume (ex.: creme à base de ureia 3–5% ou vaselina) várias vezes ao dia.\nUSO ORAL\n4. Loratadina 10 mg ----------------------------- 10 comprimidos\n   Tomar 1 comprimido ao dia se coceira.\n\nCRIANÇA\n- Dexametasona 0,1% creme (ou hidrocortisona 1%): camada fina 1 a 2 vezes ao dia por 7 dias.\n- Loratadina xarope 1 mg/mL: 5 mL (≤ 30 kg) ou 10 mL (> 30 kg) 1 vez ao dia (≥ 2 anos).\n\nDERMATITE EXTENSA (> 20% DO CORPO) OU GRAVE — USO ORAL\n- Prednisona 20 mg (38 comprimidos): adulto 60 mg (3 comprimidos) pela manhã por 7 dias; 40 mg por 5 dias; 20 mg por 5 dias; 10 mg por 4 dias e parar.\n- Criança: prednisolona 3 mg/mL — 1 mg/kg/dia pela manhã (máx. 40 mg) por 7 dias, depois reduzir pela metade a cada 5 dias."
  },
  orientacoesRetorno: [
    "O mais importante é descobrir e evitar o que causou a alergia; o remédio só controla a crise",
    "Usar a pomada de corticoide só pelo tempo receitado e só nas lesões",
    "Proteger as mãos: luvas de algodão por baixo das de borracha, sabonete suave, hidratar após lavar",
    "Bijuteria e fivelas com níquel: evitar contato direto com a pele",
    "Voltar se aparecer pus, crostas amareladas, febre, bolhas grandes, feridas na boca ou nos olhos",
    "Retornar em 2 semanas se não melhorar ou se as lesões voltarem (pode precisar de teste de contato)"
  ],
  encaminhar: [
    "Dermatologia: dermatite crônica ou recorrente, sem causa definida, ocupacional (teste de contato), falha do tratamento",
    "Serviço de saúde do trabalhador (CEREST): dermatose ocupacional",
    "Urgência: suspeita de farmacodermia grave ou reação anafilática"
  ],
  fontes: [
    "American Contact Dermatitis Society / AAAAI-ACAAI — Contact dermatitis: a practice parameter update (Fonacier L et al., J Allergy Clin Immunol Pract, 2015)",
    "European Society of Contact Dermatitis — Guideline for diagnostic patch testing (2015) e European guideline on hand eczema (Thyssen JP et al., 2022)",
    "Sociedade Brasileira de Dermatologia — Dermatite de contato (orientações SBD)",
    "Ministério da Saúde — Portaria GM/MS nº 5.201/2024: Lista Nacional de Notificação Compulsória (inclui dermatoses ocupacionais); Dermatoses ocupacionais: protocolo de complexidade diferenciada (Saúde do Trabalhador, 2006)",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

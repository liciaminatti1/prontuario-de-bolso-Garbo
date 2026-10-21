// Anti-histamínicos — doses por idade
registrarFicha({
  id: "anti-histaminicos",
  especialidade: "referencia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Anti-histamínicos: doses por idade e indicações",
  resumo: "Tabela de anti-histamínicos H1 de 2ª geração (preferidos) e de 1ª geração, com dose por faixa etária, apresentações e indicações: urticária, rinite alérgica, prurido, picadas de inseto e adjuvância na anafilaxia.",
  palavrasChave: "anti-histaminico antialergico alergia loratadina desloratadina cetirizina levocetirizina fexofenadina bilastina rupatadina dexclorfeniramina polaramine hidroxizina hixizine prometazina fenergan difenidramina urticaria rinite prurido coceira picada dose pediatrica",
  critico: {
    tempo: "Anafilaxia: adrenalina primeiro",
    texto: "Anti-histamínico não trata obstrução de via aérea nem choque. Na anafilaxia, adrenalina IM é a 1ª droga; o anti-histamínico é só adjuvante para sintomas cutâneos."
  },
  alarmes: [
    "Prurido ou urticária com falta de ar, rouquidão, tontura, vômitos ou queda de pressão: anafilaxia (ver ficha Anafilaxia)",
    "1ª geração (dexclorfeniramina, prometazina, hidroxizina) em menor de 2 anos: risco de depressão respiratória e morte (prometazina contraindicada)",
    "Idoso: 1ª geração causa confusão, retenção urinária, quedas — evitar (critérios de Beers)",
    "Superdosagem de 1ª geração: síndrome anticolinérgica, convulsão, arritmia"
  ],
  conduta: [
    "Preferir 2ª geração (loratadina, desloratadina, cetirizina, fexofenadina, bilastina): 1 dose ao dia, pouca sedação",
    "1ª geração só por poucos dias, à noite, quando o prurido atrapalha o sono, em maiores de 2 anos",
    "Urticária crônica: 2ª geração diária contínua; sem controle em 2–4 semanas, pode-se aumentar até 4 vezes a dose padrão (fora da bula, recomendado pela diretriz EAACI/GA²LEN/WAO)",
    "Rinite alérgica persistente: corticoide nasal é mais eficaz; anti-histamínico oral para sintomas leves ou associado",
    "Gestação: loratadina ou cetirizina são as opções com mais dados. Lactação: loratadina, cetirizina ou fexofenadina",
    "Insuficiência renal: reduzir dose de cetirizina, levocetirizina e fexofenadina; hepatopatia: reduzir loratadina e desloratadina",
    "Não usar anti-histamínico para sono ou para resfriado comum em criança"
  ],
  tabelas: [
    {
      titulo: "2ª geração (preferidos)",
      colunas: ["Droga e apresentações", "Lactente / pré-escolar", "Escolar (6–11 anos)", "≥ 12 anos e adulto", "Observações"],
      linhas: [
        ["Loratadina — comp 10 mg; xarope 1 mg/mL", "2–5 anos: 5 mg (5 mL) 1×/dia. < 2 anos: não indicada em bula", "≤ 30 kg: 5 mg 1×/dia · > 30 kg: 10 mg 1×/dia", "10 mg 1×/dia", "RENAME (atenção básica). Pouca sedação"],
        ["Desloratadina — comp 5 mg; xarope 0,5 mg/mL", "6–11 meses: 1 mg (2 mL) · 1–5 anos: 1,25 mg (2,5 mL), 1×/dia", "2,5 mg (5 mL) 1×/dia", "5 mg 1×/dia", "Opção para lactente a partir de 6 meses"],
        ["Cetirizina — comp 10 mg; solução 1 mg/mL", "2–5 anos: 2,5 mg (2,5 mL) de 12/12 h", "5 mg (5 mL) de 12/12 h ou 10 mg 1×/dia", "10 mg 1×/dia", "Pode dar sonolência leve. ClCr < 50: metade da dose"],
        ["Levocetirizina — comp 5 mg; gotas/solução 0,5 mg/mL (conferir apresentação)", "2–5 anos: 1,25 mg de 12/12 h", "5 mg 1×/dia", "5 mg 1×/dia", "Ajustar na DRC"],
        ["Fexofenadina — comp 60, 120 e 180 mg; suspensão 6 mg/mL", "6 meses–1 ano (urticária): 15 mg (2,5 mL) de 12/12 h · 2–5 anos: 30 mg (5 mL) de 12/12 h", "30 mg (5 mL) de 12/12 h", "Rinite: 120 mg 1×/dia · Urticária: 180 mg 1×/dia", "Não tomar com suco de frutas (reduz absorção). Não sedativa"],
        ["Bilastina — comp 20 mg; comp orodispersível 10 mg", "Não indicada < 6 anos", "≥ 20 kg: 10 mg 1×/dia", "20 mg 1×/dia", "Tomar em jejum (1 h antes ou 2 h após refeição)"]
      ],
      nota: "Loratadina e cetirizina são as mais estudadas na gestação. Em criança, nunca ultrapassar a dose de adulto; conferir a idade mínima na bula de cada apresentação."
    },
    {
      titulo: "1ª geração (sedativos — uso curto, ≥ 2 anos)",
      colunas: ["Droga e apresentações", "Lactente / pré-escolar", "Escolar (6–11 anos)", "≥ 12 anos e adulto", "Observações"],
      linhas: [
        ["Dexclorfeniramina — comp 2 mg; solução oral 0,4 mg/mL", "2–5 anos: 0,5 mg (1,25 mL) de 8/8 h; máx. 3 mg/dia. < 2 anos: contraindicada", "1 mg (2,5 mL) de 8/8 h; máx. 6 mg/dia", "2 mg de 6/6 a 8/8 h; máx. 12 mg/dia", "RENAME. Por peso: 0,15 mg/kg/dia ÷ 3. Sedação, efeito anticolinérgico"],
        ["Hidroxizina — comp 25 mg; solução oral 2 mg/mL", "1–2 mg/kg/dia ÷ 3–4 tomadas; máx. 50 mg/dia (< 6 anos)", "1–2 mg/kg/dia ÷ 3–4 tomadas; máx. 50–100 mg/dia", "25 mg de 6/6 a 8/8 h; máx. 100 mg/dia (idoso: evitar)", "Bom antipruriginoso noturno. Prolonga QT em doses altas"],
        ["Prometazina — comp 25 mg; ampola 25 mg/mL (2 mL)", "Contraindicada < 2 anos · ≥ 2 anos: 0,25–0,5 mg/kg/dose (máx. 25 mg)", "0,25–0,5 mg/kg/dose de 6/6 a 8/8 h (máx. 25 mg/dose)", "25 mg VO ou IM profunda de 8/8 h SN; máx. 100 mg/dia", "RENAME. IM profunda; nunca SC ou intra-arterial (necrose). Evitar IV"],
        ["Difenidramina — ampola 50 mg/mL", "1 mg/kg/dose IV lento ou IM (máx. 50 mg)", "1 mg/kg/dose IV lento ou IM (máx. 50 mg)", "25–50 mg IV lento ou IM de 6/6 h SN", "Uso hospitalar: reação a medicamento, distonia aguda (alternativa ao biperideno)"]
      ],
      nota: "Em menores de 2 anos com prurido intenso, preferir desloratadina (≥ 6 meses) ou fexofenadina (≥ 6 meses, urticária)."
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO — URTICÁRIA, RINITE OU PRURIDO\nUSO ORAL\n1. Loratadina 10 mg ------------------------------------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Urticária aguda: manter até 1 a 2 semanas após sumirem as lesões.\n\nSE COCEIRA ATRAPALHAR O SONO (até 5 dias)\n2. Dexclorfeniramina 2 mg ------------------------------- 10 comprimidos\n   Tomar 1 comprimido à noite. Causa sono: não dirigir nem beber álcool.\n\nCRIANÇA (peso: ___ kg; idade: ___)\n1. Loratadina xarope 1 mg/mL ---------------------------- 1 frasco\n   2 a 12 anos com até 30 kg: 5 mL 1 vez ao dia. Acima de 30 kg: 10 mL 1 vez ao dia.\n   6 a 23 meses: desloratadina xarope 0,5 mg/mL — 6 a 11 meses 2 mL; 1 a 5 anos 2,5 mL, 1 vez ao dia.\n2. Se coceira noturna intensa (≥ 2 anos): dexclorfeniramina solução oral 0,4 mg/mL — 2 a 5 anos 1,25 mL; 6 a 11 anos 2,5 mL, à noite (pode de 8 em 8 horas), por até 5 dias.",
    hospitalar: "SALA DE OBSERVAÇÃO — REAÇÃO ALÉRGICA CUTÂNEA SEM ANAFILAXIA (peso: ___ kg)\n1. Loratadina 10 mg VO agora (criança: dose por idade/peso, ver tabela).\n2. Se VO impossível ou prurido muito intenso: prometazina 25 mg/mL — 1 mL (25 mg) IM profunda, dose única (criança ≥ 2 anos: 0,25–0,5 mg/kg, máx. 25 mg). OU difenidramina 50 mg/mL — 25–50 mg IV lento diluído em 10 mL de SF 0,9% (criança 1 mg/kg, máx. 50 mg).\n3. Adrenalina 1 mg/mL à beira do leito: se dispneia, rouquidão, hipotensão ou vômitos — 0,01 mg/kg IM (máx. 0,5 mg adulto; 0,3 mg criança pré-púbere) e seguir a ficha Anafilaxia.\n4. Sinais vitais e inspeção de lábios, língua e voz a cada 30 min; observar 2–4 h."
  },
  orientacoesRetorno: [
    "Anti-histamínicos de 1ª geração (dexclorfeniramina, prometazina, hidroxizina) dão sono: não dirigir, não operar máquinas, não beber álcool",
    "Não dar anti-histamínico para bebês menores de 2 anos sem orientação médica, nem para 'fazer dormir'",
    "Voltar imediatamente se inchaço nos lábios, língua ou garganta, falta de ar, chiado, tontura ou desmaio",
    "Retornar se as lesões durarem mais de 6 semanas (urticária crônica) ou se não houver melhora em 1 a 2 semanas"
  ],
  encaminhar: [
    "Alergia/imunologia: urticária crônica sem controle com dose quadruplicada, angioedema sem urticária, anafilaxia",
    "Dermatologia: prurido crônico sem causa definida"
  ],
  fontes: [
    "Ministério da Saúde — RENAME 2024 (loratadina, dexclorfeniramina, prometazina)",
    "EAACI/GA²LEN/EuroGuiDerm/APAAACI — International guideline for urticaria (2022)",
    "ARIA — Allergic Rhinitis and its Impact on Asthma, atualização (2019/2024)",
    "ASBAI/SBP — Documentos sobre uso de anti-histamínicos em pediatria",
    "American Geriatrics Society — Beers Criteria (2023)",
    "Bulas ANVISA: loratadina, desloratadina, cetirizina, levocetirizina, fexofenadina, bilastina, dexclorfeniramina, hidroxizina, prometazina, difenidramina"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

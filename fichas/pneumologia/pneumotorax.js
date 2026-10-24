// Pneumotórax espontâneo e hipertensivo
registrarFicha({
  id: "pneumotorax",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Pneumotórax espontâneo e hipertensivo",
  resumo: "Ar no espaço pleural. Primário (sem doença pulmonar, jovem, longilíneo, tabagista) ou secundário (DPOC, fibrose, TB, pneumocistose). Hipertensivo: emergência com instabilidade, tratada com descompressão imediata.",
  palavrasChave: "pneumotorax espontaneo primario secundario hipertensivo descompressao agulha toracostomia dreno de torax aspiracao manejo conservador bts 2023 pocus deslizamento ponto pulmonar enfisema",
  critico: {
    tempo: "Hipertensivo: descomprimir já",
    texto: "Dispneia grave, hipotensão, hipoxemia e murmúrio abolido unilateral = pneumotórax hipertensivo: descompressão por agulha (ou toracostomia digital) sem esperar RX, seguida de dreno torácico."
  },
  alarmes: [
    "Hipotensão, taquicardia, hipoxemia grave, desvio de traqueia, turgência jugular (hipertensivo)",
    "Pneumotórax bilateral",
    "Pneumotórax secundário (doença pulmonar) com dispneia",
    "Hemopneumotórax",
    "Paciente em ventilação mecânica ou VNI",
    "Idade ≥ 50 anos com tabagismo importante (tratar como secundário)"
  ],
  condutaInicial: [
    "O₂ (acelera reabsorção; alvo usual 94–98%, 88–92% se DPOC), monitor, acesso",
    "Instável: descompressão por agulha no 4º/5º espaço intercostal, linha axilar anterior/média (ou 2º EIC na linha hemiclavicular), depois dreno",
    "Estável: confirmar com RX de tórax (ou POCUS/TC)",
    "Avaliar características de alto risco (BTS 2023): instabilidade, hipoxemia significativa, bilateral, doença pulmonar/cardiopulmonar, ≥ 50 anos com tabagismo importante, hemotórax",
    "Primário sem alto risco e pouco sintomático: manejo conservador (observação) é opção, independentemente do tamanho; sintomático: aspiração por agulha ou dispositivo ambulatorial; dreno se falha",
    "Secundário: em geral dreno de pequeno calibre e internação; aspiração em casos selecionados com pneumotórax pequeno",
    "Analgesia e orientação para cessar tabagismo"
  ],
  fataisExcluir: [
    "Pneumotórax hipertensivo",
    "Hemotórax / hemopneumotórax",
    "Pneumotórax bilateral",
    "Ruptura esofágica (Boerhaave) com pneumomediastino",
    "Pneumotórax catamenial ou por pneumocistose (HIV)"
  ],
  proximaDecisao: "Após drenagem ou aspiração: RX de controle. Resolvido e estável → alta com retorno em 2–4 semanas. Fuga aérea persistente > 3–5 dias, pulmão não expandido, recorrência ou 1º episódio com risco ocupacional → cirurgia torácica (VATS). Manejo conservador: alta se estável após observação, com retorno precoce.",
  clinica: {
    anamnese: [
      "Dor torácica pleurítica súbita unilateral e dispneia",
      "Tabagismo (cigarro e maconha), episódios prévios",
      "Doença pulmonar: DPOC, asma, fibrose, fibrose cística, TB, HIV",
      "Relação com menstruação; procedimento recente (punção, acesso central), trauma, ventilação mecânica",
      "Mergulho, voo recente"
    ],
    exameFisico: [
      "Murmúrio diminuído, timpanismo, expansibilidade reduzida no lado afetado",
      "Hipertensivo: hipotensão, taquicardia, desvio de traqueia (tardio), turgência jugular, enfisema subcutâneo",
      "Pequeno: exame pode ser normal"
    ],
    diferenciais: [
      { dx: "TEP", pista: "Fatores de risco, sem alteração no RX" },
      { dx: "Bolha gigante (enfisema bolhoso)", pista: "TC: paredes de bolha; não drenar às cegas" },
      { dx: "SCA, pericardite", pista: "ECG, troponina" },
      { dx: "Pneumonia, derrame", pista: "Febre, consolidação" },
      { dx: "Dor musculoesquelética", pista: "Reprodutível à palpação, exame normal" }
    ],
    gravidade: [
      "Tamanho (BTS): distância interpleural no nível do hilo ≥ 2 cm = grande (equivale a cerca de 50% do hemitórax)",
      "Na BTS 2023 a conduta depende mais de sintomas e alto risco do que do tamanho",
      "Hipertensivo: diagnóstico clínico, não radiológico"
    ]
  },
  exames: [
    {
      nome: "RX de tórax",
      pedido: "RX de tórax PA em inspiração (perfil se dúvida).",
      porQue: "Confirma e estima tamanho.",
      esperar: "Linha pleural visceral sem trama pulmonar periférica.",
      interpretacao: "Distância interpleural no hilo ≥ 2 cm = grande.",
      limitacoes: "Em decúbito (AP no leito) pode não aparecer (sinal do sulco profundo)."
    },
    {
      nome: "POCUS",
      pedido: "Ultrassom pulmonar à beira-leito (região anterior, 2º–4º EIC).",
      porQue: "Mais sensível que RX em decúbito; rápido no instável.",
      esperar: "Ausência de deslizamento pleural e de linhas B, código de barras no modo M.",
      interpretacao: "Ponto pulmonar confirma. Presença de deslizamento ou linhas B exclui pneumotórax naquele ponto.",
      limitacoes: "Aderências, enfisema e bolhas causam falso-positivo de ausência de deslizamento."
    },
    {
      nome: "TC de tórax",
      pedido: "TC de tórax sem contraste.",
      porQue: "Dúvida diagnóstica, bolhas, doença de base, planejamento cirúrgico.",
      esperar: "—",
      interpretacao: "Diferencia pneumotórax de bolha gigante.",
      limitacoes: "Não necessária na maioria dos primários."
    }
  ],
  tratamento: [
    {
      droga: "Descompressão por agulha (hipertensivo)",
      linha: "l1",
      dose: "Cateter sobre agulha 14G (≥ 5 cm; 8 cm em obeso/musculoso), 4º/5º EIC entre linhas axilares anterior e média (ATLS 10) ou 2º EIC linha hemiclavicular",
      via: "Percutânea, borda superior da costela inferior",
      intervalo: "Única; repetir/converter em toracostomia se falha",
      duracao: "Ponte até o dreno",
      monitorizacao: "Saída de ar, melhora de PA/SpO₂",
      contraindicacoes: "Nenhuma na suspeita de hipertensivo instável",
      ajustes: "Paciente em ventilação mecânica: toracostomia digital é alternativa. Criança: 2º EIC linha hemiclavicular"
    },
    {
      droga: "Manejo conservador",
      linha: "l1",
      dose: "Observação, O₂ se hipoxemia, analgesia",
      via: "—",
      intervalo: "—",
      duracao: "Observação de algumas horas e RX de controle; retorno em 2–4 semanas",
      monitorizacao: "Sintomas, RX",
      contraindicacoes: "Alto risco (BTS), dispneia significativa, secundário sintomático",
      ajustes: "Primário pouco sintomático, que aceite e possa retornar facilmente"
    },
    {
      droga: "Aspiração por agulha",
      linha: "l1",
      dose: "Cateter 14–16G no 2º EIC linha hemiclavicular ou 4º/5º EIC linha axilar média; aspirar até resistência (limite usual 2,5 L)",
      via: "Percutânea",
      intervalo: "—",
      duracao: "RX após",
      monitorizacao: "RX de controle",
      contraindicacoes: "Instável, hemotórax",
      ajustes: "Falha (pneumotórax persistente/sintomático) → dreno de pequeno calibre"
    },
    {
      droga: "Dreno torácico de pequeno calibre",
      linha: "l1",
      dose: "8–14 Fr (Seldinger) no triângulo de segurança (4º/5º EIC, linha axilar média)",
      via: "Toracostomia",
      intervalo: "—",
      duracao: "Retirar após reexpansão e sem borbulhamento",
      monitorizacao: "Borbulhamento, oscilação, RX diário",
      contraindicacoes: "—",
      ajustes: "Calibre maior se hemotórax ou trauma. Não aspirar de rotina no início (edema de reexpansão). Ver ficha procedimento drenagem-toracica"
    },
    {
      droga: "Dipirona / analgesia",
      linha: "adj",
      dose: "Dipirona 1 g 6/6 h; associar opioide fraco se necessário",
      via: "VO ou IV",
      intervalo: "6/6 h",
      duracao: "Conforme dor",
      monitorizacao: "—",
      contraindicacoes: "Alergia",
      ajustes: "—"
    }
  ],
  destino: {
    agora: [
      "Hipertensivo: descompressão + dreno",
      "Estável: estratificar e escolher conservador, aspiração ou dreno"
    ],
    reavaliar: [
      "RX após aspiração/drenagem e antes da alta",
      "Fuga aérea diária no dreno"
    ],
    alta: [
      "Primário em manejo conservador ou aspirado com sucesso, estável, com retorno fácil",
      "Retorno em 2–4 semanas com RX; antes, se piora"
    ],
    observacao: [
      "Manejo conservador: observação de algumas horas e RX de controle"
    ],
    internacao: [
      "Secundário, dreno torácico, alto risco, bilateral, hemotórax, falha da aspiração"
    ],
    transferencia: [
      "Fuga aérea persistente, recorrência, necessidade de VATS sem cirurgia torácica local (após drenagem)"
    ]
  },
  prescricao: {
    ambulatorial: "USO ORAL (alta após manejo conservador ou aspiração)\n1. Dipirona 500 mg --------------------------------- 20 comprimidos\n   Tomar 2 comprimidos de 6 em 6 horas se dor.\n2. Paracetamol 750 mg ----------------------------- 20 comprimidos\n   Tomar 1 comprimido de 6 em 6 horas se dor persistir (máximo 4 por dia).\n\nORIENTAÇÕES\n- Parar de fumar (cigarro e maconha): oferecer tratamento na UBS.\n- Não viajar de avião até confirmação de resolução por raio-X e liberação médica.\n- Não mergulhar com cilindro, a não ser após tratamento cirúrgico definitivo.\n- RX de tórax de controle em 2–4 semanas.",
    hospitalar: "PNEUMOTÓRAX COM DRENO (adulto)\n1. Dieta livre.\n2. O₂ por cateter nasal para SpO₂ 94–98% (88–92% se DPOC).\n3. Dreno torácico em selo d'água, sem aspiração inicialmente; não clampear dreno que borbulha.\n4. Dipirona 1 g IV de 6/6 h; tramadol 50 mg IV de 8/8 h se dor persistente; ondansetrona 4 mg IV SN.\n5. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV) se sem contraindicação.\n6. RX de tórax no leito após a drenagem e diário.\n7. Registrar débito, borbulhamento e oscilação do dreno de 6/6 h. Fisioterapia respiratória.\n8. Avisar se: dispneia súbita, enfisema subcutâneo progressivo, dreno sem oscilação."
  },
  orientacoesRetorno: [
    "Voltar imediatamente se falta de ar, dor no peito que piora, tontura ou lábios roxos",
    "Parar de fumar reduz muito a chance de o pneumotórax voltar",
    "Evitar avião até liberação com raio-X; mergulho com cilindro só após cirurgia definitiva",
    "Retorno com raio-X em 2–4 semanas"
  ],
  fontes: [
    "BTS — Guideline for pleural disease (Thorax, 2023)",
    "ATLS — Advanced Trauma Life Support, 10ª edição (2018)",
    "ERS/EACTS — Statement on the management of spontaneous pneumothorax (2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

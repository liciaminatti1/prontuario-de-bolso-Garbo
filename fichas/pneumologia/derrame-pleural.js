// Derrame pleural e empiema
registrarFicha({
  id: "derrame-pleural",
  especialidade: "pneumologia",
  caminho: "ps",
  publico: "adulto",
  titulo: "Derrame pleural e empiema",
  resumo: "Líquido no espaço pleural. Investigar com ultrassom e toracocentese diagnóstica (critérios de Light). Derrame parapneumônico complicado e empiema exigem drenagem e antibiótico.",
  palavrasChave: "derrame pleural toracocentese criterios de light exsudato transudato empiema parapneumonico ph pleural ada tuberculose pleural neoplasia ic dreno fibrinolitico alteplase dornase",
  critico: {
    tempo: "pH < 7,2 ou pus: drenar",
    texto: "Derrame com febre/pneumonia: puncionar. Pus, Gram ou cultura positivos, ou pH < 7,2 = derrame complicado/empiema: dreno torácico + antibiótico e avaliação de cirurgia torácica."
  },
  alarmes: [
    "Dispneia em repouso, hipoxemia, desvio de mediastino (derrame volumoso)",
    "Febre com derrame (empiema), sepse",
    "Derrame que aumenta rapidamente ou hemotórax (trauma, anticoagulação, neoplasia)",
    "Perda de peso, tabagismo (neoplasia), sintomas de TB"
  ],
  condutaInicial: [
    "Ultrassom torácico (confirma, quantifica, mostra septações e guia a punção)",
    "Bilateral, com quadro típico de IC/cirrose/DRC e sem sinais atípicos: tratar a causa e não puncionar de imediato",
    "Unilateral, atípico, febre ou causa desconhecida: toracocentese diagnóstica guiada por ultrassom (ficha procedimento toracocentese)",
    "Dosar no líquido e no sangue (mesma hora): proteínas e LDH; no líquido também pH (gasômetro), glicose, celularidade com diferencial, Gram, cultura, ADA, citologia",
    "Derrame volumoso sintomático: toracocentese de alívio (retirar até ~1,5 L por vez, parar se tosse, dor ou desconforto)",
    "Infecção pleural: antibiótico + drenagem conforme critérios"
  ],
  fataisExcluir: [
    "Empiema / sepse de foco pleural",
    "Hemotórax",
    "TEP (derrame pequeno, exsudativo)",
    "Neoplasia maligna (mesotelioma, metástase, linfoma)",
    "Ruptura esofágica (amilase pleural, pH muito baixo)"
  ],
  proximaDecisao: "Transudato → tratar IC, cirrose, síndrome nefrótica, DRC. Exsudato → linfocítico (TB, neoplasia) x neutrofílico (parapneumônico, TEP, pancreatite). Parapneumônico complicado/empiema → dreno, antibiótico e, se septado ou falha em 5–7 dias, fibrinolítico + DNase intrapleural ou cirurgia. TB pleural → notificar e iniciar esquema básico.",
  clinica: {
    anamnese: [
      "Dispneia, dor pleurítica, tosse",
      "IC, cirrose, DRC, síndrome nefrótica, hipotireoidismo",
      "Pneumonia recente, febre",
      "Tabagismo, perda de peso, câncer, exposição a amianto",
      "TB: febre vespertina, sudorese noturna, contato; HIV",
      "Medicamentos (amiodarona, metotrexato, nitrofurantoína), doença autoimune, pancreatite, trauma"
    ],
    exameFisico: [
      "Macicez à percussão, murmúrio e frêmito diminuídos",
      "Sinais de IC, ascite, edema, linfonodos, baqueteamento",
      "FR, SpO₂"
    ],
    diferenciais: [
      { dx: "Transudato", pista: "IC (mais comum, geralmente bilateral), cirrose (hidrotórax direito), síndrome nefrótica, DRC/diálise" },
      { dx: "Parapneumônico/empiema", pista: "Pneumonia, febre, neutrófilos, pH e glicose baixos" },
      { dx: "TB pleural", pista: "Exsudato linfocítico, ADA elevada, jovem" },
      { dx: "Neoplásico", pista: "Volumoso, recorrente, hemorrágico; citologia positiva" },
      { dx: "TEP", pista: "Pequeno, dor pleurítica, dispneia desproporcional" }
    ],
    gravidade: [
      "Critérios de Light (exsudato se ≥ 1): proteína pleural/sérica > 0,5; LDH pleural/sérica > 0,6; LDH pleural > 2/3 do limite superior da LDH sérica",
      "Em usuário de diurético com 'falso exsudato': gradiente de albumina soro − pleura > 1,2 g/dL ou de proteína > 3,1 g/dL sugere transudato",
      "Parapneumônico complicado: pH < 7,2 (ou glicose < 72 mg/dL / LDH > 1.000 UI/L se pH indisponível), Gram/cultura positivos, septações volumosas",
      "Empiema: pus franco na punção"
    ]
  },
  exames: [
    {
      nome: "Ultrassom torácico",
      pedido: "Ultrassom de tórax (pleural) com marcação para punção.",
      porQue: "Confirmar, quantificar, ver septações, guiar procedimento (reduz pneumotórax).",
      esperar: "Imagem anecoica ou com debris/septações.",
      interpretacao: "Septações ou ecogenicidade sugerem exsudato/infecção.",
      limitacoes: "—"
    },
    {
      nome: "Toracocentese diagnóstica",
      pedido: "Líquido pleural: proteínas totais, LDH, glicose, pH (em seringa heparinizada, no gasômetro), celularidade total e diferencial, Gram e cultura (também em frascos de hemocultura), pesquisa de BAAR, TRM-TB, cultura para micobactérias, ADA, citologia oncológica (enviar maior volume possível, idealmente 25–60 mL), triglicerídeos se aspecto leitoso, amilase se suspeita pancreática/esofágica. Sangue no mesmo momento: proteínas totais, LDH, glicose, albumina.",
      porQue: "Classificar e definir a causa.",
      esperar: "—",
      interpretacao: "Critérios de Light; pH < 7,2 = drenar; ADA elevada (corte usual ≥ 40 U/L) + linfócitos em área endêmica = TB pleural provável.",
      limitacoes: "pH falsamente alterado se ar/lidocaína/heparina em excesso na seringa. Citologia negativa não exclui neoplasia."
    },
    {
      nome: "Exames de sangue e imagem complementares",
      pedido: "Hemograma, PCR, função renal e hepática, albumina, BNP/NT-proBNP; hemoculturas se febre; RX de tórax após punção; TC de tórax com contraste (fase pleural) se exsudato sem diagnóstico, empiema ou suspeita de neoplasia.",
      porQue: "Etiologia e complicações.",
      esperar: "—",
      interpretacao: "NT-proBNP elevado no sangue apoia derrame por IC.",
      limitacoes: "Biópsia pleural (por agulha ou toracoscopia) se exsudato linfocítico sem diagnóstico."
    }
  ],
  tratamento: [
    {
      droga: "Amoxicilina + clavulanato (infecção pleural comunitária)",
      linha: "l1",
      dose: "1,2 g IV 8/8 h; transição VO 875/125 mg 12/12 h (ou 500/125 mg 8/8 h)",
      via: "IV → VO",
      intervalo: "8/8 h",
      duracao: "Em geral 2–6 semanas no total (conforme drenagem e evolução)",
      monitorizacao: "Febre, PCR, débito do dreno, imagem",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Alternativa: ceftriaxona 2 g IV 1×/dia + metronidazol 500 mg IV/VO 8/8 h. Hospitalar: piperacilina-tazobactam 4,5 g IV 6/6 h ± cobertura de MRSA. Aminoglicosídeo tem má penetração pleural"
    },
    {
      droga: "Dreno torácico",
      linha: "l1",
      dose: "Pequeno calibre (10–14 Fr) guiado por ultrassom",
      via: "Toracostomia",
      intervalo: "—",
      duracao: "Até débito baixo e melhora clínica/radiológica",
      monitorizacao: "Débito, aspecto, RX/US",
      contraindicacoes: "—",
      ajustes: "Lavagem regular do dreno de pequeno calibre com SF 20–30 mL de 6/6 h ou 8/8 h. Ver ficha procedimento drenagem-toracica"
    },
    {
      droga: "Alteplase + dornase alfa intrapleural",
      linha: "adj",
      dose: "Alteplase 10 mg + dornase alfa 5 mg (esquema MIST2)",
      via: "Intrapleural pelo dreno (clampear 1 h)",
      intervalo: "12/12 h",
      duracao: "3 dias (6 doses)",
      monitorizacao: "Sangramento, dor, débito",
      contraindicacoes: "Fístula broncopleural, sangramento, anticoagulação plena (relativa)",
      ajustes: "Empiema/derrame complicado com drenagem insuficiente quando cirurgia não é imediata (BTS 2023); disponibilidade limitada no SUS"
    },
    {
      droga: "Furosemida (transudato por IC)",
      linha: "l1",
      dose: "20–40 mg IV ou VO, ajustando pela resposta",
      via: "IV/VO",
      intervalo: "1–2×/dia",
      duracao: "Conforme congestão",
      monitorizacao: "Peso, função renal, K",
      contraindicacoes: "Hipovolemia",
      ajustes: "Ver ficha ic-descompensada"
    },
    {
      droga: "Esquema básico para TB (RHZE)",
      linha: "l1",
      dose: "Conforme peso (Manual do MS): 2 meses RHZE + 4 meses RH",
      via: "VO",
      intervalo: "1×/dia em jejum",
      duracao: "6 meses",
      monitorizacao: "Função hepática, adesão (TDO)",
      contraindicacoes: "Hepatopatia grave (esquemas especiais)",
      ajustes: "Ver ficha tuberculose-pulmonar. Notificação compulsória"
    }
  ],
  destino: {
    agora: [
      "Ultrassom, toracocentese diagnóstica/alívio, antibiótico se infecção"
    ],
    reavaliar: [
      "Resultado do pH/Gram em horas; drenagem se critério",
      "Empiema: resposta clínica e imagem em 5–7 dias"
    ],
    alta: [
      "Transudato com causa compensada e sem hipoxemia",
      "Derrame pequeno estável em investigação ambulatorial, com retorno garantido",
      "Parapneumônico simples respondendo ao antibiótico"
    ],
    observacao: [
      "Após toracocentese de alívio volumosa: observar 2–4 h (edema de reexpansão, pneumotórax)"
    ],
    internacao: [
      "Derrame complicado/empiema, hemotórax, hipoxemia, derrame volumoso sintomático",
      "Sepse"
    ],
    transferencia: [
      "Empiema septado sem resposta ou necessidade de VATS/decorticação: cirurgia torácica"
    ]
  },
  prescricao: {
    hospitalar: "DERRAME PARAPNEUMÔNICO COMPLICADO / EMPIEMA (adulto)\n1. Dieta livre hiperproteica.\n2. Amoxicilina + clavulanato 1 g/200 mg IV de 8/8 h (diluir em 100 mL SF 0,9%, infundir em 30 min).\n   (alergia/alternativa) Ceftriaxona 2 g IV 1×/dia + metronidazol 500 mg IV de 8/8 h.\n3. Dreno torácico 12–14 Fr guiado por ultrassom em selo d'água; lavar com SF 0,9% 20 mL de 8/8 h.\n4. Dipirona 1 g IV de 6/6 h se dor/febre; tramadol 50 mg IV de 8/8 h SN.\n5. Enoxaparina 40 mg SC 1×/dia (profilaxia de TEV).\n6. Fisioterapia respiratória.\n7. Controle de débito e aspecto do dreno de 6/6 h; RX/US de tórax em 24–48 h; PCR e hemograma a cada 48–72 h.\n8. Se drenagem insuficiente em 24–48 h: discutir alteplase 10 mg + dornase 5 mg intrapleural de 12/12 h por 3 dias ou cirurgia torácica.",
    ambulatorial: "USO ORAL (após melhora, completar tratamento)\n1. Amoxicilina + clavulanato 875/125 mg ------------- ___ comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, após as refeições, por ___ dias (completar o tempo definido pela equipe)."
  },
  orientacoesRetorno: [
    "Voltar se febre, falta de ar que piora, dor no peito ou tosse com catarro com pus",
    "Tomar o antibiótico até o fim, mesmo melhorando",
    "Trazer o resultado dos exames do líquido na consulta; alguns resultados (cultura, citologia, TB) demoram dias",
    "Retorno em 1–2 semanas com novo raio-X"
  ],
  fontes: [
    "BTS — Guideline for pleural disease (Thorax, 2023)",
    "Light RW — Pleural Effusion, N Engl J Med (2002); critérios de Light (1972)",
    "Rahman NM et al. — MIST2 (alteplase + DNase intrapleural), N Engl J Med (2011)",
    "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil, 2ª ed. atualizada (2019)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

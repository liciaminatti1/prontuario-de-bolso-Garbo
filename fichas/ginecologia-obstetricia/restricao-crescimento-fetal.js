// Restrição de crescimento fetal
registrarFicha({
  id: "restricao-crescimento-fetal",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Restrição de crescimento fetal (RCF)",
  resumo: "Suspeita por altura uterina abaixo do esperado ou peso fetal estimado/circunferência abdominal < p10. Diagnóstico pelo consenso Delphi, diferenciação de PIG constitucional, seguimento com Doppler e momento do parto.",
  palavrasChave: "restricao de crescimento fetal rcf ciur crescimento intrauterino restrito pig pequeno para idade gestacional delphi doppler arteria umbilical diastole zero reversa cerebral media relacao cerebroplacentaria ducto venoso altura uterina aas",
  critico: {
    tempo: "Diástole zero/reversa: internar",
    texto: "Artéria umbilical com diástole zero ou reversa ou ducto venoso alterado: internação em centro com UTI neonatal, corticoide se < 34 semanas e sulfato de magnésio se < 32 semanas, com decisão de parto pela equipe."
  },
  alarmes: [
    "Diástole zero ou reversa na artéria umbilical; ducto venoso com onda a ausente ou reversa",
    "Movimentos fetais diminuídos ou CTG alterada",
    "Oligoâmnio associado",
    "Pré-eclâmpsia associada (PA ≥ 140/90, proteinúria, sintomas)",
    "RCF grave precoce (< 32 semanas) ou peso estimado < p3"
  ],
  conduta: [
    "Rastrear: medir altura uterina em toda consulta a partir de 20 semanas; AU abaixo do p10 da curva da Caderneta ou parada de crescimento → USG obstétrica com Doppler",
    "Confirmar a idade gestacional (USG de 1º trimestre é a referência; não redatar no 3º trimestre)",
    "Aplicar os critérios de Delphi (tabela) para separar RCF de PIG constitucional",
    "Investigar causa: PA e proteinúria (pré-eclâmpsia), tabagismo, álcool e drogas, desnutrição, infecções (CMV, toxoplasmose, sífilis), anomalias e cromossomopatias (morfológico; cariótipo se RCF precoce grave ou malformação), trombofilia/SAF se história",
    "Encaminhar ao pré-natal de alto risco (PNAR) toda RCF confirmada; manter vínculo e consultas na UBS",
    "Seguimento: crescimento a cada 2–3 semanas e Doppler conforme gravidade (tabela); orientar mobilograma",
    "Parto: momento guiado pelo Doppler e vitalidade (tabela); parto vaginal possível com Doppler normal ou só RCP/ACM alterada, com CTG contínua",
    "Prevenção na próxima gestação ou em alto risco de pré-eclâmpsia: AAS 100–150 mg à noite de 12–16 até 36 semanas"
  ],
  exames: [
    "Pedido: \"USG obstétrica com Doppler (artéria umbilical, artéria cerebral média, relação cerebroplacentária, artérias uterinas) e ILA. Indicação: altura uterina abaixo do esperado / suspeita de RCF.\"",
    "Pedido (investigação): \"Sorologias para toxoplasmose, citomegalovírus e sífilis (VDRL); USG morfológica; proteinúria de 24 h ou relação proteína/creatinina urinária; hemograma, creatinina, TGO, TGP, LDH.\"",
    "RCF grave ou avançada: CTG (computadorizada se disponível) e ducto venoso",
    "Cariótipo/microarray (amniocentese) se RCF precoce grave, polidrâmnio associado ou malformação"
  ],
  diferenciais: [
    "PIG constitucional (pais pequenos, crescimento paralelo ao p3–p10, Doppler normal)",
    "Erro de idade gestacional",
    "Oligoâmnio por rotura de membranas (AU reduzida)",
    "Infecção congênita, aneuploidia, síndromes genéticas"
  ],
  tabelas: [
    {
      titulo: "Critérios diagnósticos de RCF (consenso Delphi, Gordijn 2016)",
      colunas: ["RCF precoce (< 32 semanas)", "RCF tardia (≥ 32 semanas)"],
      linhas: [
        ["CA ou PFE < p3, OU diástole zero na artéria umbilical", "CA ou PFE < p3"],
        ["OU: CA ou PFE < p10 + IP da artéria uterina > p95 e/ou IP da artéria umbilical > p95", "OU ao menos 2 de 3: CA ou PFE < p10; queda de > 2 quartis nos percentis de crescimento; RCP < p5 ou IP da artéria umbilical > p95"]
      ],
      nota: "Sem anomalias congênitas. CA: circunferência abdominal; PFE: peso fetal estimado; IP: índice de pulsatilidade; RCP: relação cerebroplacentária (IP ACM/IP AU)."
    },
    {
      titulo: "Seguimento e momento do parto (ISUOG 2020 / FEBRASGO)",
      colunas: ["Achado", "Seguimento", "Parto"],
      linhas: [
        ["PIG (PFE p3–p10) com Doppler normal", "Doppler a cada 2 semanas; crescimento 2–3 semanas", "38–39 semanas (pode aguardar até 39–40)"],
        ["RCF tardia: PFE < p3 ou RCP/ACM alterada", "Doppler semanal", "37–38 semanas"],
        ["IP artéria umbilical > p95 (diástole presente)", "Doppler 1–2×/semana", "A partir de 37 semanas (não após 38)"],
        ["Diástole zero na artéria umbilical", "Internação, Doppler e CTG diários", "Em torno de 32–34 semanas (cesárea, em geral)"],
        ["Diástole reversa na artéria umbilical", "Internação", "Em torno de 30–32 semanas"],
        ["Ducto venoso com onda a ausente/reversa ou CTG anormal", "—", "Parto após corticoide, se viável (decisão em centro terciário)"]
      ],
      nota: "Corticoide antenatal se parto previsto < 34 semanas; sulfato de magnésio para neuroproteção < 32 semanas. Limites exatos variam entre protocolos: decisão no PNAR/centro de referência."
    }
  ],
  prescricao: {
    ambulatorial: "PREVENÇÃO (gestante com alto risco de pré-eclâmpsia / RCF placentária anterior)\nUSO ORAL\n1. Ácido acetilsalicílico 100 mg ------------------ 30 comprimidos\n   Tomar 1 comprimido à noite, de 12 até 36 semanas.\n\nORIENTAÇÃO — CONTAGEM DE MOVIMENTOS\nApós uma refeição, deitada de lado, contar os movimentos do bebê: se menos de 6 movimentos em 1 hora (repetir mais 1 hora), procurar a maternidade.",
    hospitalar: "RCF COM PARTO PREVISTO < 34 SEMANAS\n1. Betametasona 12 mg IM — 2 doses com intervalo de 24 h (ou dexametasona 6 mg IM de 12/12 h por 4 doses).\n2. Se parto < 32 semanas: sulfato de magnésio para neuroproteção conforme protocolo (ataque 4 g IV em 20–30 min e manutenção 1 g/h até o parto, máximo 24 h).\n3. CTG e Doppler conforme gravidade; balanço hídrico; reflexos e FR durante o magnésio."
  },
  orientacoesRetorno: [
    "Seu bebê está crescendo menos que o esperado; as consultas e ultrassons mais frequentes servem para escolher o melhor momento do parto",
    "Conte os movimentos do bebê todos os dias; se ele mexer menos, vá à maternidade no mesmo dia",
    "Procure a maternidade se tiver dor de cabeça forte, visão embaçada, dor na boca do estômago, inchaço súbito, sangramento ou perda de líquido",
    "Não fume, não beba álcool, coma bem e descanse",
    "Faça as consultas no alto risco e também na UBS"
  ],
  encaminhar: [
    "PNAR: toda RCF confirmada pelo critério de Delphi",
    "Maternidade de referência com UTI neonatal no mesmo dia: Doppler com diástole zero/reversa, ducto venoso alterado, CTG alterada, movimentos fetais reduzidos, pré-eclâmpsia associada",
    "Medicina fetal: RCF precoce grave, malformação, suspeita de infecção ou aneuploidia"
  ],
  fontes: [
    "Gordijn SJ et al. — Consensus definition of fetal growth restriction: a Delphi procedure (Ultrasound Obstet Gynecol, 2016)",
    "ISUOG Practice Guidelines — Diagnosis and management of small-for-gestational-age fetus and fetal growth restriction (2020)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "FEBRASGO — Protocolo: Restrição do crescimento fetal (2021)",
    "FIGO — Initiative on fetal growth: best practice advice (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

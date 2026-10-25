// Câncer gástrico: suspeita, diagnóstico, estadiamento e encaminhamento
registrarFicha({
  id: "cancer-gastrico",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Câncer gástrico: sinais de alarme, endoscopia, estadiamento e encaminhamento",
  resumo: "Adenocarcinoma gástrico (~95%): suspeitar em dispepsia com sinais de alarme ou de início recente após os 40–45 anos. Diagnóstico por EDA com biópsias; estadiamento por TC e, quando indicado, ecoendoscopia e laparoscopia. Prevenção: erradicar H. pylori, inclusive em parentes de 1º grau. Encaminhar com prioridade (Lei 12.732/2012: tratamento em até 60 dias do diagnóstico).",
  palavrasChave: "cancer gastrico estomago adenocarcinoma dispepsia sinais de alarme endoscopia eda biopsia helicobacter pylori metaplasia intestinal atrofia gastrica gastrite atrofica linfonodo virchow irma maria jose krukenberg blumer lauren borrmann tnm gastrectomia d2 flot linfoma malt gist cdh1 lei 60 dias",
  alarmes: [
    "Perda de peso não intencional, saciedade precoce, vômitos persistentes",
    "Disfagia ou odinofagia progressivas",
    "Anemia ferropriva sem causa aparente, hematêmese ou melena",
    "Massa epigástrica, linfonodo supraclavicular esquerdo (Virchow), nódulo umbilical (Irmã Maria José), ascite",
    "Dispepsia de início recente após os 40–45 anos",
    "História familiar de câncer gástrico (sobretudo parente de 1º grau ou < 50 anos)",
    "Icterícia, obstrução intestinal, massa ovariana (Krukenberg) ou prateleira retal (Blumer) — doença avançada"
  ],
  conduta: [
    "Dispepsia sem sinais de alarme e < 40–45 anos: testar e tratar H. pylori (ver dispepsia e ulcera-peptica-hpylori)",
    "Dispepsia com sinal de alarme ou início recente após os 40–45 anos: EDA com biópsias (não fazer só teste-e-trata)",
    "EDA com lesão suspeita: biópsias múltiplas (≥ 6–8 fragmentos); úlcera gástrica sempre biopsiar e repetir EDA após tratamento até a cicatrização",
    "Câncer confirmado: hemograma, função renal e hepática, albumina, CEA e CA 19-9 (prognóstico, não diagnóstico); TC de tórax, abdome e pelve com contraste",
    "Encaminhar imediatamente à oncologia cirúrgica/clínica (regulação prioritária); a ecoendoscopia e a laparoscopia de estadiamento ficam com o serviço de referência",
    "Tratamento (referência): câncer precoce restrito à mucosa → ressecção endoscópica; localmente avançado → quimioterapia perioperatória + gastrectomia com linfadenectomia D2; metastático → quimioterapia sistêmica e paliação (stent, gastrojejunostomia)",
    "Prevenção: erradicar H. pylori em quem tiver o teste positivo e em todos os parentes de 1º grau de pacientes com câncer gástrico (testar e tratar)",
    "Atrofia extensa ou metaplasia intestinal no corpo e antro (OLGA/OLGIM III–IV): EDA de vigilância a cada 3 anos (MAPS II)",
    "Câncer gástrico difuso em família (vários casos, jovens) ou com câncer de mama lobular: aconselhamento genético (CDH1)",
    "Tabagismo, sal e alimentos defumados: orientar redução; parar de fumar",
    "Cuidar da anemia, nutrição e dor enquanto aguarda; não atrasar o encaminhamento por exames complementares"
  ],
  exames: [
    "EDA com biópsias (padrão-ouro) e pesquisa de H. pylori (urease/histologia)",
    "Hemograma, ferritina, ureia, creatinina, TGO, TGP, fosfatase alcalina, bilirrubinas, albumina",
    "TC de tórax, abdome e pelve com contraste (estadiamento)",
    "CEA e CA 19-9 após o diagnóstico (acompanhamento; normais não excluem)",
    "Ecoendoscopia (T e N em doença potencialmente ressecável) e laparoscopia diagnóstica com lavado peritoneal (T3–T4 ou suspeita de carcinomatose) — no serviço de referência",
    "PET-CT: casos selecionados pela oncologia"
  ],
  diferenciais: [
    "Úlcera péptica benigna (toda úlcera gástrica deve ser biopsiada)",
    "Linfoma gástrico (MALT associado ao H. pylori: pode regredir com erradicação)",
    "Tumor estromal gastrointestinal (GIST), tumor neuroendócrino gástrico",
    "Gastrite atrófica autoimune (anemia perniciosa), pólipos gástricos",
    "Câncer de esôfago distal / junção esofagogástrica (disfagia)"
  ],
  tabelas: [
    {
      titulo: "Classificações úteis",
      colunas: ["Classificação", "Conteúdo", "Importância"],
      linhas: [
        ["Lauren", "Intestinal (idoso, H. pylori, metaplasia; antro) × difuso (jovem, células em anel de sinete, linite plástica; familiar CDH1)", "Difuso tem pior prognóstico e margens maiores"],
        ["Borrmann (avançado)", "I polipoide, II ulcerado de bordas nítidas, III ulceroinfiltrativo, IV difusamente infiltrativo (linite)", "IV pior prognóstico"],
        ["Câncer gástrico precoce", "Restrito à mucosa ou submucosa, independentemente de linfonodo", "Pode ser tratado por ressecção endoscópica se critérios"],
        ["TNM (AJCC 8ª ed.)", "T pela profundidade na parede, N pelo número de linfonodos (≥ 16 avaliados), M metástase", "Define cirurgia, quimioterapia perioperatória ou paliação"]
      ]
    },
    {
      titulo: "Falha ou resistência ao antibiótico (erradicação do H. pylori)",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Falha da 1ª linha (quádrupla com bismuto, 14 dias)", "2ª linha sem repetir antibiótico já usado (ex.: esquema com levofloxacino ou amoxicilina em dose alta), conforme ficha ulcera-peptica-hpylori", "Confirmar adesão; controle de cura ≥ 4 semanas após o fim do antibiótico, com IBP suspenso há 2 semanas"],
        ["Alergia à penicilina", "Quádrupla com bismuto (tetraciclina + metronidazol) — já é a 1ª linha", "Não usar amoxicilina"],
        ["Falha de 2 esquemas", "Gastroenterologia: cultura ou teste molecular de resistência (claritromicina, levofloxacino) e esquema guiado", "Não repetir claritromicina ou levofloxacino empiricamente"],
        ["Uso prévio de claritromicina ou quinolona por qualquer motivo", "Evitar o mesmo antibiótico", "Alta resistência no Brasil à claritromicina"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO\n1. Endoscopia digestiva alta com biópsias e pesquisa de H. pylori.\n   Indicação: dispepsia com sinal de alarme (___: perda de peso / anemia / disfagia / vômitos / idade ___ anos) — investigar neoplasia gástrica. PRIORIDADE.\n2. Hemograma, ferritina, ureia, creatinina, TGO, TGP, fosfatase alcalina, bilirrubinas, albumina.\n3. (Com diagnóstico confirmado) Tomografia de tórax, abdome e pelve com contraste — estadiamento de adenocarcinoma gástrico. CEA e CA 19-9.\n\nENCAMINHAMENTO PRIORITÁRIO\nOncologia cirúrgica / cirurgia do aparelho digestivo — adenocarcinoma gástrico ___ (local) confirmado em biópsia de ___ (data). Sintomas: ___. Peso: ___ kg (perda de ___ kg em ___ meses). Hb: ___. TC: ___. Lei 12.732/2012 (tratamento em até 60 dias).\n\nERRADICAÇÃO DO H. PYLORI (paciente ou parente de 1º grau com teste positivo)\nConforme ficha ulcera-peptica-hpylori (quádrupla com bismuto por 14 dias) e controle de cura após 4 semanas."
  },
  orientacoesRetorno: [
    "A endoscopia é o exame que confirma ou afasta o câncer; não deixe de fazer",
    "Se o resultado da biópsia mostrar câncer, você tem direito de iniciar o tratamento no SUS em até 60 dias",
    "Parentes de 1º grau (pais, irmãos, filhos) de quem tem câncer de estômago devem fazer exame para H. pylori e tratar se positivo",
    "Comer menos sal e alimentos defumados ou embutidos; não fumar",
    "Procurar o PS se vomitar sangue, fezes pretas, vômitos que não param ou fraqueza intensa"
  ],
  encaminhar: [
    "EDA prioritária: dispepsia com alarme ou início após 40–45 anos",
    "Oncologia cirúrgica/clínica com prioridade: câncer confirmado",
    "Gastroenterologia: metaplasia intestinal ou atrofia extensa (vigilância), falha de 2 esquemas para H. pylori",
    "Genética: suspeita de câncer gástrico difuso hereditário (CDH1) ou síndrome de Lynch",
    "PS: hemorragia digestiva, obstrução (vômitos incoercíveis), perfuração"
  ],
  fontes: [
    "Ministério da Saúde — Diretrizes Diagnósticas e Terapêuticas do Adenocarcinoma de Estômago (Portaria SAS/MS, 2018)",
    "Lei nº 12.732/2012 (início do tratamento em até 60 dias) e Lei nº 13.896/2019 (exames em até 30 dias na suspeita)",
    "ESMO — Gastric cancer: Clinical Practice Guideline (Ann Oncol, 2022) e NCCN Gastric Cancer (2025)",
    "Maastricht VI/Florence Consensus Report — Management of Helicobacter pylori infection (Gut, 2022)",
    "MAPS II — Management of epithelial precancerous conditions and lesions in the stomach (ESGE/EHMSG/ESP/SPED, Endoscopy, 2019)",
    "AJCC Cancer Staging Manual, 8ª ed. (2017)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

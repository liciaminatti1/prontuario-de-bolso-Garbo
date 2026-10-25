// Esclerose sistêmica e fenômeno de Raynaud
registrarFicha({
  id: "esclerose-sistemica",
  especialidade: "musculoesqueletico",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Esclerose sistêmica (esclerodermia) e fenômeno de Raynaud",
  resumo: "Doença autoimune com fibrose da pele e de órgãos internos e vasculopatia. Começa quase sempre com Raynaud. Exige rastreio de doença pulmonar intersticial e hipertensão arterial pulmonar e atenção à crise renal esclerodérmica.",
  palavrasChave: "esclerose sistemica esclerodermia raynaud dedos brancos frio esclerodactilia ulcera digital capilaroscopia anticentromero anti scl 70 topoisomerase anti rna polimerase iii crise renal esclerodermica captopril hipertensao arterial pulmonar doenca pulmonar intersticial nifedipina anlodipino sildenafila crest",
  critico: {
    tempo: "Crise renal: IECA já, sem parar",
    texto: "Esclerodérmico com PA subindo de repente, cefaleia, piora da creatinina ou anemia hemolítica: crise renal. Internar e iniciar captopril com aumento progressivo; manter o IECA mesmo se a creatinina subir ou precisar de diálise."
  },
  alarmes: [
    "PA nova elevada (ou acima do basal), cefaleia, alteração visual, oligúria, creatinina subindo (crise renal esclerodérmica)",
    "Dedo frio, roxo e doloroso que não recupera (isquemia digital crítica — PS)",
    "Úlcera digital infectada ou gangrena",
    "Dispneia progressiva, tosse seca, estertores em velcro (doença intersticial)",
    "Dispneia desproporcional, síncope, edema, B2 hiperfonética (hipertensão arterial pulmonar)",
    "Vômitos, distensão e parada de evacuação (pseudo-obstrução intestinal); disfagia com perda de peso",
    "Prednisona ≥ 15 mg/dia em esclerose sistêmica difusa precoce (gatilho de crise renal)"
  ],
  conduta: [
    "Raynaud: palidez → cianose → rubor ao frio ou estresse. Primário: jovem, simétrico, sem úlcera, FAN negativo, capilaroscopia normal. Secundário: início > 30–40 anos, assimétrico, úlceras, edema dos dedos, FAN positivo — investigar",
    "Suspeita de esclerose sistêmica (Raynaud + dedos inchados/espessamento cutâneo, refluxo, telangiectasias): FAN, anticentrômero, anti-Scl-70, capilaroscopia e encaminhar à reumatologia",
    "Critério ACR/EULAR 2013: espessamento cutâneo dos dedos das duas mãos proximal às MCF basta para classificar; demais itens na tabela",
    "Raynaud: aquecer o corpo todo (não só as mãos), luvas, parar de fumar, evitar descongestionantes nasais, betabloqueador não seletivo e ergotamina; 1ª linha bloqueador de canal de cálcio di-hidropiridínico (nifedipina ou anlodipino)",
    "Úlcera digital: curativo, analgesia, tratar infecção, sildenafila (especialista); iloprosta IV em casos graves",
    "Rastreio de doença intersticial ao diagnóstico: TC de tórax de alta resolução + espirometria com CVF e DLCO; depois prova de função pulmonar periódica (a cada 3–6 meses nos primeiros anos na forma difusa, conforme especialista)",
    "Rastreio anual de HAP: ecocardiograma com estimativa de PSAP + DLCO (± NT-proBNP); DLCO baixa isolada ou eco suspeito → cardiologia/pneumologia para cateterismo direito",
    "Crise renal: medir PA em casa/UBS com frequência na forma difusa precoce e anti-RNA polimerase III positivo; evitar prednisona > 15 mg/dia e nefrotóxicos",
    "Refluxo e dismotilidade: IBP em dose plena, fracionar refeições, cabeceira elevada",
    "Tratamento imunossupressor (micofenolato, metotrexato para pele, ciclofosfamida, nintedanibe, tocilizumabe, rituximabe) é decisão do reumatologista",
    "Seguimento em conjunto UBS + reumatologia: PA, creatinina, urina tipo 1, hemograma e peso a cada consulta"
  ],
  exames: [
    "FAN (padrão), anticentrômero (forma limitada, risco de HAP), anti-Scl-70/topoisomerase I (forma difusa, risco de doença intersticial), anti-RNA polimerase III (pele difusa rápida, risco de crise renal)",
    "Capilaroscopia periungueal (padrão esclerodérmico: megacapilares, hemorragias, perda capilar)",
    "Hemograma, creatinina, urina tipo 1 com relação proteína/creatinina, CPK, TSH",
    "TC de tórax de alta resolução e espirometria com CVF e DLCO (ao diagnóstico)",
    "Ecocardiograma transtorácico com PSAP (ao diagnóstico e anual), NT-proBNP se disponível, ECG",
    "Crise renal: creatinina, hemograma com esfregaço (esquizócitos), plaquetas, LDH, haptoglobina, urina tipo 1"
  ],
  diferenciais: [
    "Raynaud primário",
    "Lúpus, dermatomiosite, síndrome de sobreposição/doença mista do tecido conjuntivo",
    "Esclerodermia localizada (morfeia) — sem Raynaud nem órgão interno",
    "Escleredema diabético, fibrose sistêmica nefrogênica (gadolínio na DRC), fasciíte eosinofílica",
    "Crise renal × PTT/SHU e emergência hipertensiva de outras causas"
  ],
  tratamento: [
    { droga: "Nifedipina de liberação prolongada (Raynaud)", linha: "l1", dose: "20 mg, podendo aumentar até 60 mg/dia conforme tolerância", via: "VO", intervalo: "1–2×/dia", duracao: "Contínuo nos meses frios ou o ano todo", monitorizacao: "PA, edema, cefaleia, tontura", contraindicacoes: "Hipotensão, estenose aórtica grave", ajustes: "Pode piorar refluxo" },
    { droga: "Anlodipino (Raynaud)", linha: "alt", dose: "5–10 mg", via: "VO", intervalo: "1×/dia", duracao: "Contínuo", monitorizacao: "PA, edema", contraindicacoes: "Hipotensão", ajustes: "Disponível na Farmácia Popular/RENAME" },
    { droga: "Sildenafila (Raynaud refratário/úlcera digital)", linha: "adj", dose: "20 mg", via: "VO", intervalo: "8/8 h", duracao: "Conforme especialista", monitorizacao: "PA, cefaleia", contraindicacoes: "Nitratos", ajustes: "Uso por indicação do reumatologista" },
    { droga: "Captopril (crise renal esclerodérmica — hospitalar)", linha: "l1", dose: "Iniciar 6,25–12,5 mg e aumentar a cada 4–8 h até a PA voltar ao basal em 72 h", via: "VO", intervalo: "Conforme titulação", duracao: "Indefinida (não suspender)", monitorizacao: "PA, creatinina, potássio, diurese", contraindicacoes: "—", ajustes: "Manter mesmo com creatinina subindo ou diálise. Associar bloqueador de cálcio se PA não controla com IECA máximo. Dose máxima e titulação fina: nefrologia/reumatologia" },
    { droga: "Omeprazol (DRGE esclerodérmica)", linha: "l1", dose: "20–40 mg", via: "VO", intervalo: "1–2×/dia", duracao: "Contínuo", monitorizacao: "—", contraindicacoes: "—", ajustes: "—" },
    { droga: "Prednisona > 15 mg/dia; betabloqueador não seletivo e vasoconstritores", linha: "ci", dose: "—", via: "—", intervalo: "—", duracao: "—", monitorizacao: "—", contraindicacoes: "Corticoide em dose alta precipita crise renal; vasoconstritores pioram Raynaud", ajustes: "Se corticoide for indispensável, usar a menor dose e monitorar PA e creatinina" }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÕES\n1. FAN, anticorpo anticentrômero, anti-Scl-70 (antitopoisomerase I), anti-RNA polimerase III (se disponível).\n2. Hemograma, creatinina, urina tipo 1, relação proteína/creatinina urinária, CPK, TSH.\n3. Capilaroscopia periungueal.\n4. TC de tórax de alta resolução; espirometria com CVF e DLCO (prova de função pulmonar completa).\n5. Ecocardiograma transtorácico com estimativa da pressão sistólica da artéria pulmonar; ECG.\n6. Encaminhamento à reumatologia: fenômeno de Raynaud secundário / suspeita de esclerose sistêmica.\n\nUSO ORAL\n7. Nifedipina retard 20 mg ------------------------- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas (ou anlodipino 5 mg 1 vez ao dia).\n8. Omeprazol 20 mg --------------------------------- 60 cápsulas\n   Tomar 1 cápsula em jejum e 1 antes do jantar.\n\nORIENTAÇÕES\n9. Proteger do frio todo o corpo; luvas e meias; não fumar; medir a pressão 1 a 2 vezes por semana e anotar."
  },
  orientacoesRetorno: [
    "Manter o corpo todo aquecido (agasalho, luvas, meias); evitar mexer em água fria e no congelador sem luvas",
    "Não fumar; evitar descongestionantes nasais e remédios para enxaqueca com ergotamina",
    "Medir a pressão com frequência; se passar do seu normal, com dor de cabeça ou visão embaçada, procurar o PS no mesmo dia",
    "Voltar imediatamente se um dedo ficar roxo ou preto e doloroso sem melhorar com o aquecimento, ou se aparecer ferida infeccionada",
    "Avisar se cansaço ou falta de ar estiver aumentando",
    "Fazer os exames de pulmão e coração todo ano, mesmo sem sintomas"
  ],
  encaminhar: [
    "Reumatologia: Raynaud secundário, suspeita ou diagnóstico de esclerose sistêmica",
    "PS/internação: crise renal, isquemia digital crítica, pseudo-obstrução",
    "Pneumologia/cardiologia: suspeita de doença intersticial ou HAP no rastreio",
    "Gastroenterologia: disfagia, perda de peso, diarreia com desnutrição"
  ],
  tabelas: [
    {
      titulo: "Critérios ACR/EULAR 2013 para esclerose sistêmica (≥ 9 pontos)",
      colunas: ["Item", "Pontos"],
      linhas: [
        ["Espessamento cutâneo dos dedos das duas mãos proximal às MCF (suficiente)", "9"],
        ["Dedos inchados (puffy fingers)", "2"],
        ["Esclerodactilia (distal às MCF, proximal às IFP)", "4"],
        ["Úlceras digitais em polpa", "2"],
        ["Cicatrizes em polpa digital (pitting scars)", "3"],
        ["Telangiectasias", "2"],
        ["Capilaroscopia alterada", "2"],
        ["HAP e/ou doença intersticial", "2"],
        ["Fenômeno de Raynaud", "3"],
        ["Anticentrômero, anti-Scl-70 ou anti-RNA polimerase III", "3"]
      ],
      nota: "Nos itens com dois achados (dedos; lesões de polpa), conta só o de maior pontuação. Não aplicar se espessamento poupa os dedos."
    }
  ],
  fontes: [
    "ACR/EULAR — 2013 Classification Criteria for Systemic Sclerosis",
    "EULAR recommendations for the treatment of systemic sclerosis (2023 update)",
    "ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension (2022)",
    "Sociedade Brasileira de Reumatologia — Recomendações para o tratamento da esclerose sistêmica (2017)",
    "ATS/ERS/JRS/ALAT — Idiopathic pulmonary fibrosis and progressive pulmonary fibrosis in adults (2022)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

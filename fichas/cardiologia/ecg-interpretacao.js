// ECG: leitura sistemática e critérios rápidos
registrarFicha({
  id: "ecg-interpretacao",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "ECG: leitura sistemática e critérios rápidos",
  resumo: "Roteiro para ler o ECG de 12 derivações em ordem fixa e critérios rápidos de supradesnivelamento de ST, bloqueios, QT longo, hipercalemia e sobrecargas.",
  palavrasChave: "ecg eletrocardiograma leitura interpretacao eixo supra st iamcsst bav bloqueio de ramo qt qtc hipercalemia sobrecarga hvE sokolow cornell sgarbossa wellens de winter brugada wpw pericardite",
  critico: {
    tempo: "Dor torácica: ECG em até 10 min",
    texto: "Todo paciente com dor torácica suspeita deve ter ECG lido por médico em até 10 minutos. ECG inicial normal não exclui SCA: repetir em 15–30 min se dor persistir."
  },
  alarmes: [
    "Supra de ST que preenche critério de IAM (ou equivalente: posterior, Sgarbossa, de Winter) → ver ficha sca",
    "BAV 2º grau Mobitz II ou BAV total",
    "QTc > 500 ms",
    "T apiculada, QRS alargando, P achatada (hipercalemia)",
    "QRS largo e rápido (TV até prova em contrário)",
    "Padrão de Wellens (T bifásica ou profundamente invertida em V2–V3): estenose crítica de DA, mesmo sem dor",
    "Brugada tipo 1, pré-excitação (WPW) em paciente com síncope ou palpitação"
  ],
  conduta: [
    "Conferir identificação, data/hora, calibração (10 mm/mV) e velocidade (25 mm/s); comparar com ECG prévio",
    "Frequência: 300 ÷ nº de quadrados grandes entre R–R (regular) ou nº de QRS em 10 s × 6 (irregular)",
    "Ritmo: P antes de cada QRS, P positiva em DI, DII e aVF = sinusal; regular x irregular",
    "Eixo: DI e aVF positivos = normal (−30° a +90°); DI + e aVF − com DII − = desvio à esquerda; DI − e aVF + = desvio à direita",
    "Intervalos: PR 120–200 ms; QRS < 120 ms; QTc (Bazett = QT ÷ √RR em segundos)",
    "Onda P e QRS: sobrecargas atriais e ventriculares, bloqueios de ramo, ondas Q patológicas, baixa voltagem",
    "ST e onda T: supra, infra, inversões; distribuição por parede coronariana; alterações difusas (pericardite)",
    "Concluir em uma frase: ritmo, FC, eixo, alterações principais e o que muda a conduta"
  ],
  exames: [
    "ECG seriado (15–30 min) se dor persistente ou ECG inicial não diagnóstico",
    "Derivações V7–V9 se infra de ST em V1–V3 (IAM posterior) e V3R–V4R no IAM inferior (VD)",
    "Potássio, magnésio, cálcio se alterações de repolarização, QT longo ou arritmia",
    "Troponina seriada conforme ficha sca"
  ],
  diferenciais: [
    "Supra de ST não isquêmico: repolarização precoce, pericardite, bloqueio de ramo esquerdo, HVE, aneurisma de VE, Brugada, hipercalemia, Takotsubo",
    "Pericardite x IAM: supra difuso côncavo, infra de PR, sem imagem em espelho (exceto aVR e V1)",
    "Ondas T invertidas: isquemia, Wellens, TEP (V1–V4 + DIII), HVE com strain, AVC/HSA (T gigantes invertidas), pós-taquicardia (memória)"
  ],
  tabelas: [
    {
      titulo: "Critérios rápidos",
      colunas: ["Achado", "Critério"],
      linhas: [
        ["IAM com supra de ST", "Supra novo no ponto J em 2 derivações contíguas: ≥ 1 mm em todas, exceto V2–V3: ≥ 2 mm homem ≥ 40 anos, ≥ 2,5 mm homem < 40 anos, ≥ 1,5 mm mulher"],
        ["IAM posterior", "Infra de ST em V1–V3 (R alta em V1) e supra ≥ 0,5 mm em V7–V9"],
        ["IAM de VD", "Supra ≥ 0,5 mm em V3R/V4R (≥ 1 mm homem < 30 anos)"],
        ["BRE/marca-passo (Sgarbossa modificado)", "Supra concordante ≥ 1 mm; infra concordante ≥ 1 mm em V1–V3; supra discordante com ST/S ≥ 25%"],
        ["De Winter", "Infra ascendente de ST com T alta e simétrica em V1–V6 (oclusão de DA)"],
        ["BRD", "QRS ≥ 120 ms, rSR' em V1, S larga em DI e V6"],
        ["BRE", "QRS ≥ 120 ms, R larga e entalhada em DI, aVL, V5–V6, sem q em V5–V6"],
        ["QT longo", "QTc > 450 ms (homem) / > 460 ms (mulher); > 500 ms = alto risco de torsades"],
        ["Hipercalemia", "T apiculada → PR longo e P achatada → QRS largo → onda sinusoidal / bradicardia / FV"],
        ["Hipocalemia", "Onda U, infra de ST, T achatada, QT(U) aparentemente longo"],
        ["HVE", "Sokolow-Lyon: S V1 + R V5 ou V6 ≥ 35 mm · Cornell: R aVL + S V3 > 28 mm (homem) / > 20 mm (mulher)"],
        ["HVD", "R ≥ 7 mm em V1 ou R/S > 1 em V1, desvio de eixo à direita, strain V1–V3"],
        ["Sobrecarga atrial", "Esquerda: P ≥ 120 ms bífida em DII, componente negativo amplo em V1 · Direita: P ≥ 2,5 mm em DII"],
        ["WPW", "PR < 120 ms, onda delta, QRS alargado"],
        ["Brugada tipo 1", "Supra de ST ≥ 2 mm em V1–V2 em cúpula seguido de T negativa"],
        ["Pericardite aguda", "Supra de ST difuso côncavo + infra de PR (supra de PR em aVR)"],
        ["TEP (sugestivo, pouco sensível)", "Taquicardia sinusal, S1Q3T3, BRD novo, T invertida V1–V4"]
      ],
      nota: "Quadrado pequeno = 40 ms (0,04 s) e 0,1 mV; quadrado grande = 200 ms. Na FC > 100 ou < 60, Bazett distorce o QTc; considerar Fridericia (QT ÷ ∛RR)."
    },
    {
      titulo: "Paredes e derivações",
      colunas: ["Parede", "Derivações", "Artéria provável"],
      linhas: [
        ["Septal", "V1–V2", "DA"],
        ["Anterior", "V3–V4", "DA"],
        ["Lateral", "DI, aVL, V5–V6", "Circunflexa / diagonal"],
        ["Inferior", "DII, DIII, aVF", "Coronária direita (ou circunflexa)"],
        ["Posterior", "V7–V9 (espelho V1–V3)", "Circunflexa / CD"],
        ["Ventrículo direito", "V3R–V4R", "Coronária direita proximal"]
      ]
    },
    {
      titulo: "Bloqueios AV",
      colunas: ["Tipo", "ECG"],
      linhas: [
        ["1º grau", "PR > 200 ms constante"],
        ["2º grau Mobitz I", "PR aumenta até uma P não conduzir"],
        ["2º grau Mobitz II", "PR constante e P bloqueada súbita"],
        ["3º grau", "P e QRS dissociados, escape regular"]
      ],
      nota: "Conduta: ver ficha bradicardias."
    }
  ],
  prescricao: {
    hospitalar: "SOLICITAÇÃO\n1. ECG de 12 derivações agora (laudar em até 10 min se dor torácica).\n2. Repetir ECG em 15–30 min se dor persistente ou ECG não diagnóstico.\n3. Derivações adicionais V7, V8, V9 e V3R, V4R se suspeita de IAM posterior ou de VD.\n4. Dosar K, Mg, Ca se alteração de repolarização, QT longo ou arritmia."
  },
  orientacoesRetorno: [
    "Guardar uma cópia (ou foto) do ECG e levar às consultas: comparar com o anterior ajuda muito",
    "Procurar o PS se dor no peito, falta de ar, desmaio ou palpitações fortes"
  ],
  encaminhar: [
    "Cardiologia eletiva: HVE, bloqueio de ramo novo assintomático, BAV 1º grau com sintomas, pré-excitação assintomática, Brugada, QT longo congênito suspeito",
    "PS/sala de emergência: critérios de IAM, BAV avançado, QTc > 500 ms com sintomas, hipercalemia com alteração de ECG"
  ],
  fontes: [
    "SBC — Diretriz da Sociedade Brasileira de Cardiologia sobre a Análise e a Emissão de Laudos Eletrocardiográficos (2022)",
    "ESC/ACC/AHA/WHF — Fourth Universal Definition of Myocardial Infarction (2018)",
    "ESC — Guidelines for the management of acute coronary syndromes (2023)",
    "Smith SW et al. — Modified Sgarbossa criteria, Ann Emerg Med (2012)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

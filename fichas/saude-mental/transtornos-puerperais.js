// Transtornos mentais do puerpério
registrarFicha({
  id: "transtornos-puerperais",
  especialidade: "saude-mental",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Blues puerperal, depressão pós-parto e psicose puerperal",
  resumo: "Diferenciar tristeza puerperal (blues, autolimitada) de depressão pós-parto (rastreio com EPDS, tratamento compatível com amamentação) e de psicose puerperal (emergência psiquiátrica).",
  palavrasChave: "depressao pos parto puerperal blues puerperal baby blues tristeza materna psicose puerperal epds escala de edimburgo ideacao suicida infanticidio sertralina amamentacao ansiedade perinatal toc bipolar caps",
  critico: {
    tempo: "Psicose puerperal: PS hoje",
    texto: "Confusão, alucinações, delírios (sobretudo envolvendo o bebê), agitação ou insônia total nos primeiros dias/semanas: emergência. Não deixar a mãe sozinha com o bebê; encaminhar ao PS/psiquiatria no mesmo dia."
  },
  alarmes: [
    "Ideação suicida ou item 10 da EPDS diferente de zero (\"pensamento de fazer mal a mim mesma\")",
    "Pensamentos de machucar o bebê com intenção ou sem crítica",
    "Alucinações, delírios, desorganização, confusão, agitação (psicose puerperal)",
    "Não come, não dorme mesmo quando o bebê dorme, não consegue cuidar de si ou do bebê",
    "História de transtorno bipolar ou psicose puerperal prévia (alto risco de recorrência)",
    "Violência doméstica, uso de álcool ou drogas"
  ],
  conduta: [
    "Rastrear humor em toda consulta do pré-natal, na consulta puerperal e nas consultas de puericultura (6–8 semanas e 6 meses), com EPDS ou PHQ-2/PHQ-9",
    "Blues puerperal: início em 2–3 dias, choro fácil, labilidade, irritabilidade; melhora sozinho até 2 semanas → acolher, apoio familiar, sono, reavaliar em 2 semanas (persistência = depressão)",
    "Depressão pós-parto: humor deprimido ou anedonia por ≥ 2 semanas, início na gestação ou até 12 meses pós-parto; investigar ideação suicida, psicose, bipolaridade (episódios de euforia, história familiar), tireoide e anemia",
    "Leve: psicoterapia (TCC, interpessoal), grupos, apoio social, visita domiciliar; moderada a grave: antidepressivo + psicoterapia",
    "Antidepressivo de escolha na amamentação: sertralina (alternativa: paroxetina; manter o que já funcionou antes); amamentação não precisa ser suspensa",
    "Suspeita de bipolaridade: não iniciar antidepressivo isolado; encaminhar à psiquiatria",
    "Psicose puerperal: PS/internação psiquiátrica, avaliação clínica (infecção, tireoide, eclâmpsia, drogas), antipsicótico e estabilizador de humor pelo especialista; supervisão contínua do cuidado do bebê",
    "Envolver parceria e família; acionar NASF/eMulti, CAPS e rede de proteção quando necessário",
    "Reavaliar em 2–4 semanas após início do antidepressivo; manter 6–12 meses após remissão"
  ],
  exames: [
    "EPDS (10 itens, 0–30): ≥ 10 possível depressão; ≥ 12–13 provável depressão (ponto de corte brasileiro validado em torno de 11/12); qualquer pontuação no item 10 → avaliar risco de suicídio",
    "Pedido: \"TSH, T4 livre, hemograma.\" (tireoidite pós-parto e anemia)",
    "Psicose: glicemia, eletrólitos, função renal e hepática, hemograma, TSH, urina tipo 1, sífilis e HIV; neuroimagem se sinais focais"
  ],
  diferenciais: [
    "Tireoidite pós-parto (hipo ou hiper)",
    "Anemia, privação de sono, dor",
    "Transtorno bipolar (episódio depressivo ou misto)",
    "Transtorno de ansiedade e TOC perinatal (pensamentos intrusivos de dano ao bebê com crítica e angústia — não é psicose)",
    "Delirium por infecção, eclâmpsia, trombose venosa cerebral, drogas"
  ],
  tratamento: [
    { droga: "Sertralina", linha: "l1", dose: "Iniciar 25–50 mg; aumentar 25–50 mg a cada 1–2 semanas até 100–200 mg", via: "VO", intervalo: "1×/dia", duracao: "6–12 meses após remissão", monitorizacao: "Resposta em 4–6 semanas; sono e irritabilidade no lactente (raro)", contraindicacoes: "Uso de IMAO", ajustes: "Compatível com amamentação (níveis muito baixos no lactente)" },
    { droga: "Fluoxetina", linha: "alt", dose: "20 mg", via: "VO", intervalo: "1×/dia", duracao: "6–12 meses após remissão", monitorizacao: "Lactente: irritabilidade, sono, ganho de peso", contraindicacoes: "IMAO", ajustes: "Meia-vida longa; preferir se já usava com boa resposta" }
  ],
  prescricao: {
    ambulatorial: "DEPRESSÃO PÓS-PARTO MODERADA (amamentando)\nUSO ORAL\n1. Sertralina 50 mg ------------------------------ 30 comprimidos\n   Tomar 1/2 comprimido pela manhã por 7 dias; depois 1 comprimido pela manhã. Não suspender sozinha.\n\nENCAMINHAMENTOS\n- Psicoterapia (eMulti/psicologia) e grupo de apoio a mães.\n- Retorno em 2 semanas."
  },
  orientacoesRetorno: [
    "Sentir-se chorosa e sensível nos primeiros dias é comum e passa em até 2 semanas; se continuar, procure a UBS",
    "Depressão pós-parto é uma doença comum e tem tratamento; não é fraqueza nem culpa sua",
    "O remédio indicado pode ser usado amamentando; o efeito começa em 2 a 4 semanas",
    "Peça ajuda para dormir algumas horas seguidas e dividir os cuidados do bebê",
    "Procure atendimento imediato (PS, CAPS ou ligue 188 — CVV) se tiver pensamentos de se machucar ou de machucar o bebê, ou se ver ou ouvir coisas que outros não veem"
  ],
  encaminhar: [
    "PS/psiquiatria no mesmo dia: psicose puerperal, risco de suicídio ou de dano ao bebê",
    "Psiquiatria/CAPS: depressão grave, bipolaridade, sem resposta a 2 antidepressivos, uso de substâncias",
    "Rede de proteção (CRAS/CREAS, Conselho Tutelar) se risco ao bebê ou violência"
  ],
  fontes: [
    "Ministério da Saúde — Caderno de Atenção Básica nº 32: Atenção ao pré-natal de baixo risco (2012) e Manual de Gestação de Alto Risco (2022)",
    "Santos IS et al. — Validação da Escala de Depressão Pós-Natal de Edimburgo no Brasil (Cad Saúde Pública, 2007)",
    "NICE CG192 — Antenatal and postnatal mental health (2014, atualizado 2020)",
    "ACOG Clinical Practice Guideline nº 4 e 5 — Screening and treatment of perinatal mental health conditions (2023)",
    "OMS — Guide for integration of perinatal mental health in maternal and child health services (2022)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

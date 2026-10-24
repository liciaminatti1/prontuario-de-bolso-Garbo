// Abscesso intra-abdominal
registrarFicha({
  id: "abscesso-intra-abdominal",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Abscesso intra-abdominal",
  resumo: "Coleção purulenta na cavidade (subfrênica, sub-hepática, pélvica, entre alças, pericólica) após cirurgia, apendicite, diverticulite, perfuração ou Crohn. Febre persistente, dor, íleo e leucocitose, sobretudo 5–10 dias após cirurgia. Tratamento: controle do foco (drenagem) + antibiótico de curta duração.",
  palavrasChave: "abscesso intra abdominal abscesso pelvico subfrenico coleção intraperitoneal drenagem percutanea febre pos operatoria infeccao intra abdominal piperacilina tazobactam ceftriaxona metronidazol stop it",
  critico: {
    tempo: "Controle do foco",
    texto: "Antibiótico sozinho raramente resolve abscesso grande: drenagem percutânea guiada por imagem (ou cirúrgica) é o tratamento principal."
  },
  alarmes: [
    "Sepse ou choque séptico",
    "Peritonite difusa (ruptura do abscesso, deiscência de anastomose)",
    "Saída de fezes, bile ou pus pela ferida ou dreno (fístula)",
    "Imunossupressão, febre persistente apesar do antibiótico",
    "Abscesso hepático ou esplênico (outro manejo; ver infectologia/cirurgia)"
  ],
  conduta: [
    "Suspeitar: febre, dor, íleo prolongado ou leucocitose após o 5º dia de pós-operatório ou após apendicite/diverticulite",
    "Hemograma, PCR, lactato, função renal, eletrólitos, hemoculturas (2 pares) se febre",
    "TC de abdome e pelve com contraste IV (exame de escolha); USG se pélvico/subfrênico ou gestante",
    "Antibiótico empírico IV logo após culturas; na 1ª hora se sepse",
    "Abscesso > 3 cm com janela segura → drenagem percutânea guiada por TC/USG; enviar material para Gram e cultura",
    "Abscesso pequeno (< 3 cm) → antibiótico e reavaliação clínica/imagem",
    "Múltiplos, loculados, sem acesso percutâneo, peritonite ou falha da drenagem → cirurgia",
    "Duração: cerca de 4 dias após controle adequado do foco (STOP-IT); estender se foco não controlado ou imunossupressão"
  ],
  exames: [
    "Hemograma, PCR, lactato, ureia, creatinina, Na, K, TGO, TGP, bilirrubinas, TP/INR, plaquetas (antes da drenagem)",
    "Hemoculturas 2 pares antes do antibiótico; cultura do material drenado",
    "Tomografia de abdome e pelve com contraste endovenoso — suspeita de abscesso intra-abdominal",
    "TC de controle se sem melhora em 48–72 h ou antes da retirada do dreno, conforme cirurgião"
  ],
  diferenciais: [
    "Infecção de sítio cirúrgico superficial (ver ficha infeccao-sitio-cirurgico)",
    "Fístula / deiscência de anastomose",
    "Pneumonia, ITU, infecção de cateter, colite por C. difficile, TVP/TEP (febre pós-operatória)",
    "Seroma ou hematoma infectado",
    "Pancreatite com necrose infectada"
  ],
  tratamento: [
    {
      droga: "Ceftriaxona + metronidazol",
      linha: "l1",
      dose: "Ceftriaxona 2 g + metronidazol 500 mg",
      via: "IV",
      intervalo: "Ceftriaxona 24/24 h; metronidazol 8/8 h",
      duracao: "~4 dias após controle do foco",
      monitorizacao: "Febre, PCR, débito do dreno",
      contraindicacoes: "Alergia grave a betalactâmico: ciprofloxacino 400 mg IV 12/12 h + metronidazol",
      ajustes: "Infecção comunitária sem gravidade. Transição para VO (amoxicilina-clavulanato 875/125 mg 12/12 h) quando tolerar dieta"
    },
    {
      droga: "Piperacilina-tazobactam",
      linha: "l1",
      dose: "4,5 g",
      via: "IV em 30 min ou infusão estendida",
      intervalo: "6/6 h",
      duracao: "~4 dias após controle do foco",
      monitorizacao: "Função renal",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Pós-operatória (associada a cuidados de saúde), sepse ou alto risco. ClCr < 40: ajustar"
    },
    {
      droga: "Meropenem",
      linha: "alt",
      dose: "1 g",
      via: "IV em 30 min (ou infusão estendida)",
      intervalo: "8/8 h",
      duracao: "Conforme cultura",
      monitorizacao: "Função renal",
      contraindicacoes: "—",
      ajustes: "Choque séptico, colonização/infecção por ESBL, falha prévia. Considerar vancomicina (MRSA/Enterococcus) e antifúngico em infecção hospitalar grave, conforme SCIH"
    }
  ],
  prescricao: {
    hospitalar: "ABSCESSO INTRA-ABDOMINAL — ADULTO\n1. Dieta conforme tolerância (jejum se íleo ou drenagem programada).\n2. Hemoculturas 2 pares antes do antibiótico.\n3. Piperacilina-tazobactam 4,5 g + SF 0,9% 100 mL IV em 30 min de 6/6 h (pós-operatório/hospitalar).\n   OU comunitário sem gravidade: ceftriaxona 2 g IV 1 vez ao dia + metronidazol 500 mg IV de 8/8 h.\n4. Dipirona 1 g IV lento de 6/6 h se dor ou febre.\n5. Ringer lactato conforme volemia.\n6. Enoxaparina 40 mg SC 1 vez ao dia (suspender 12 h antes da drenagem).\n7. Drenagem percutânea guiada por TC/USG (radiologia intervencionista); material para Gram e cultura.\n8. Dreno: anotar débito e aspecto a cada 6 h; lavar com 10 mL de SF 0,9% de 8/8 h se orientado pelo radiologista.\n9. Curva térmica; hemograma e PCR a cada 48 h."
  },
  orientacoesRetorno: [
    "Se for para casa com dreno: manter o curativo limpo, esvaziar e anotar o volume diário",
    "Voltar imediatamente se: febre, dor que aumenta, vômitos, saída de fezes ou líquido verde/escuro pelo dreno, dreno que saiu do lugar",
    "Completar o antibiótico como prescrito",
    "Retorno com o cirurgião/radiologista para avaliar retirada do dreno"
  ],
  encaminhar: [
    "Radiologia intervencionista para drenagem percutânea",
    "Cirurgia geral: falha da drenagem, peritonite, fístula de alto débito",
    "SCIH/infectologia: germe multirresistente"
  ],
  fontes: [
    "SIS — The Surgical Infection Society revised guidelines on the management of intra-abdominal infection (Mazuski et al., 2017)",
    "WSES — 2017 guidelines for management of intra-abdominal infections (Sartelli et al., 2017)",
    "Sawyer RG et al. Trial of short-course antimicrobial therapy for intraabdominal infection — STOP-IT (NEJM, 2015)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

// Hematúria: investigação e hematúria com coágulos
registrarFicha({
  id: "hematuria",
  especialidade: "urologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Hematúria (macro e microscópica) e hematúria com coágulos",
  resumo: "Hematúria microscópica: ≥ 3 hemácias por campo de grande aumento na microscopia (fita positiva isolada não basta). Hematúria macroscópica (urina vermelha) no adulto é suspeita de câncer urotelial até prova em contrário. Com coágulos e retenção: sonda de 3 vias e irrigação no PS.",
  palavrasChave: "hematuria sangue na urina urina vermelha microhematuria cancer de bexiga urotelial cistoscopia urotomografia coagulos retencao por coagulos sonda tres vias irrigacao vesical anticoagulante",
  critico: {
    tempo: "Macro no adulto: sempre urologia",
    texto: "Hematúria macroscópica sem causa benigna confirmada → cistoscopia e uroTC (urologia), mesmo se parar e mesmo em uso de anticoagulante. Retenção por coágulos: sonda de 3 vias calibrosa e irrigação."
  },
  alarmes: [
    "Retenção urinária por coágulos (dor suprapúbica, globo vesical, não consegue urinar)",
    "Queda de hemoglobina, hipotensão, taquicardia",
    "Hematúria após trauma (abdome, pelve, lombar)",
    "Hematúria com LRA, hipertensão, edema ou proteinúria (glomerulonefrite)",
    "INR muito acima do alvo ou sangramento em outros locais",
    "Febre com dor lombar (pielonefrite / obstrução infectada)"
  ],
  conduta: [
    "Confirmar com urina tipo 1 com microscopia (≥ 3 hemácias/campo); fita positiva sem hemácias → mioglobina/hemoglobina",
    "Excluir causas benignas transitórias: menstruação, exercício intenso, atividade sexual, trauma, ITU (tratar e repetir a urina 6 semanas depois)",
    "Avaliar origem glomerular: hemácias dismórficas, cilindros hemáticos, proteinúria, creatinina alta, HAS → nefrologia (ver ficha sindromes-glomerulares)",
    "Anticoagulado/antiagregado também precisa ser investigado (o anticoagulante revela, não causa, a lesão)",
    "Microscópica sem causa: estratificar risco (tabela AUA/SUFU 2020) e investigar conforme risco",
    "Macroscópica: urologia para cistoscopia + urotomografia; pedir creatinina, urina tipo 1, urocultura e citologia (opcional) enquanto aguarda",
    "PS — hematúria com coágulos/retenção: sonda Foley de 3 vias 20–24 Fr, lavagem manual com seringa de 60 mL e SF 0,9% até retirar coágulos, depois irrigação contínua (ver ficha sondagem-vesical)",
    "PS: hemograma, coagulograma, creatinina; ajustar ou suspender anticoagulante conforme gravidade e indicação; transfusão se necessário"
  ],
  exames: [
    "Urina tipo 1 com sedimentoscopia; pesquisa de dismorfismo eritrocitário se suspeita glomerular",
    "Urocultura (se leucocitúria ou sintomas)",
    "Creatinina; relação proteína/creatinina urinária se proteinúria",
    "Baixo risco: repetir urina tipo 1 em 6 meses (ou cistoscopia + USG, decisão compartilhada)",
    "Risco intermediário: cistoscopia + USG de rins e vias urinárias",
    "Alto risco e toda hematúria macroscópica: cistoscopia + urotomografia (TC de abdome e pelve com fase excretora); se contraindicação ao contraste: uroressonância ou USG + pielografia retrógrada",
    "Citologia urinária: não de rotina na microscópica; útil em alto risco ou sintomas irritativos",
    "PS com coágulos: hemograma, coagulograma (TP/INR, TTPa), creatinina, tipagem"
  ],
  diferenciais: [
    "Câncer de bexiga, rim, ureter ou próstata",
    "Litíase urinária (ver ficha colica-renal)",
    "ITU, prostatite, pielonefrite",
    "HPB (varizes prostáticas)",
    "Glomerulopatias (IgA, GNPE, Alport)",
    "Esquistossomose (área endêmica) e tuberculose urinária (piúria estéril)",
    "Pseudo-hematúria: menstruação, beterraba, rifampicina, fenazopiridina, mioglobinúria, hemoglobinúria"
  ],
  tratamento: [
    {
      droga: "Irrigação vesical contínua com SF 0,9%",
      linha: "l1",
      dose: "Vazão ajustada para manter o efluente rosado claro (sem coágulos)",
      via: "Sonda Foley 3 vias 20–24 Fr",
      intervalo: "Contínua",
      duracao: "Até urina clara por 12–24 h",
      monitorizacao: "Balanço irrigação × drenagem (volume drenado − irrigado = diurese real), dor, globo vesical",
      contraindicacoes: "Suspeita de lesão uretral (trauma)",
      ajustes: "Obstrução da sonda: lavagem manual com seringa de 60 mL. Sem melhora ou coágulos repetidos → urologia (cistoscopia, fulguração)"
    },
    {
      droga: "Ácido tranexâmico",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Evitar na hematúria do trato urinário alto (risco de coágulo obstruir o ureter)",
      ajustes: "Uso pontual só por orientação da urologia"
    }
  ],
  prescricao: {
    hospitalar: "HEMATÚRIA COM COÁGULOS / RETENÇÃO — ADULTO\n1. Dieta livre; estimular ingestão de líquidos se sem restrição.\n2. Sondagem vesical com Foley 3 vias 22 Fr (20–24 Fr), balão 30 mL, técnica estéril (ver ficha sondagem-vesical).\n3. Lavagem vesical manual com seringa de 60 mL e SF 0,9% até retorno sem coágulos.\n4. Irrigação vesical contínua com SF 0,9% (bolsas de 1.000–3.000 mL) em vazão para manter efluente rosado claro.\n5. Dipirona 1 g IV de 6/6 h se dor; escopolamina 20 mg IV de 8/8 h se espasmo vesical.\n6. Rever anticoagulante/antiagregante com o médico (INR acima do alvo: suspender doses; sangramento grave: reversão).\n7. Controles: balanço irrigação × drenagem de 2/2 h; aspecto do efluente; globo vesical; Hb em 12–24 h; sinais vitais de 4/4 h.\n8. Parecer da urologia.",
    ambulatorial: "PEDIDO DE EXAMES — HEMATÚRIA MICROSCÓPICA\n1. Urina tipo 1 com sedimentoscopia e pesquisa de dismorfismo eritrocitário.\n2. Urocultura com antibiograma.\n3. Creatinina sérica.\n4. USG de rins e vias urinárias (risco intermediário) OU urotomografia (TC de abdome e pelve com contraste e fase excretora) (alto risco / hematúria macroscópica).\nEncaminhamento à urologia para cistoscopia: risco intermediário, alto ou hematúria macroscópica.\nHD: hematúria microscópica persistente / macroscópica a esclarecer."
  },
  orientacoesRetorno: [
    "Sangue na urina precisa ser investigado mesmo se parar sozinho",
    "Fumantes: parar de fumar reduz o risco de câncer de bexiga (UBS oferece tratamento)",
    "Voltar imediatamente se não conseguir urinar, sair coágulos, tontura, desmaio, febre ou dor forte",
    "Não parar o anticoagulante por conta própria; avisar a equipe",
    "Fazer os exames e levar ao encaminhamento da urologia"
  ],
  encaminhar: [
    "Urologia (prioridade): hematúria macroscópica, microscópica de risco intermediário/alto, massa renal ou vesical em imagem",
    "Nefrologia: hematúria glomerular (dismorfismo, cilindros hemáticos), proteinúria, perda de função renal",
    "PS: retenção por coágulos, instabilidade hemodinâmica, queda de Hb, trauma"
  ],
  tabelas: [
    {
      titulo: "Estratificação de risco da hematúria microscópica (AUA/SUFU 2020)",
      colunas: ["Risco", "Critérios", "Investigação"],
      linhas: [
        ["Baixo", "Mulher < 50 anos ou homem < 40; nunca fumou ou < 10 maços-ano; 3–10 hemácias/campo em 1 exame; sem outros fatores de risco", "Repetir urina em 6 meses (ou cistoscopia + USG por decisão compartilhada)"],
        ["Intermediário", "Mulher 50–59 ou homem 40–59; 10–30 maços-ano; 11–25 hemácias/campo; baixo risco com hematúria persistente; fatores de risco adicionais", "Cistoscopia + USG de rins e vias urinárias"],
        ["Alto", "Idade ≥ 60 anos; > 30 maços-ano; > 25 hemácias/campo; história de hematúria macroscópica", "Cistoscopia + urotomografia"]
      ],
      nota: "Fatores de risco adicionais: exposição ocupacional (benzeno, aminas aromáticas), ciclofosfamida, irradiação pélvica, familiar com síndrome de Lynch, cateter vesical crônico, sintomas irritativos."
    }
  ],
  fontes: [
    "AUA/SUFU — Microhematuria: AUA/SUFU Guideline (J Urol, 2020; emenda 2025)",
    "EAU — Guidelines on Non-muscle-invasive Bladder Cancer (2025)",
    "Ministério da Saúde — Protocolos de encaminhamento da atenção básica para a atenção especializada: Urologia (2016)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

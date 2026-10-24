// Doenças anorretais agudas: fissura, abscesso perianal, fístula, prolapso retal
registrarFicha({
  id: "doencas-anorretais",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Fissura anal, abscesso perianal, fístula anal e prolapso retal",
  resumo: "Dor anal ao evacuar com sangue vivo no papel = fissura. Dor contínua com abaulamento quente e febre = abscesso (drenar). Secreção crônica por orifício perianal = fístula (cirurgia eletiva). Massa vermelha com mucosa em anéis concêntricos que exterioriza = prolapso retal. Hemorroidas e trombose hemorroidária: ver ficha hemorroidas.",
  palavrasChave: "fissura anal abscesso perianal anorretal fistula anal prolapso retal dor anal ao evacuar sangue vivo nitroglicerina diltiazem nifedipina toxina botulinica esfincterotomia drenagem goodsall procidencia",
  critico: {
    tempo: "Abscesso: drenar no mesmo dia",
    texto: "Abscesso perianal se trata com drenagem cirúrgica precoce; antibiótico sozinho não resolve. Febre alta, dor intensa e endurecimento extenso do períneo: pensar em Fournier."
  },
  alarmes: [
    "Febre alta, sepse, crepitação, necrose ou dor desproporcional no períneo (gangrena de Fournier — ver ficha gangrena-fournier)",
    "Abscesso em diabético, imunossuprimido, neutropênico ou com valvopatia/prótese",
    "Retenção urinária, dor retal profunda sem abaulamento externo (abscesso interesfincteriano/supraelevador)",
    "Prolapso retal irredutível, escuro ou com ulceração (encarcerado/estrangulado)",
    "Fissura fora da linha média, múltipla, indolor ou crônica atípica (Crohn, IST, tuberculose, HIV, câncer)",
    "Perda de peso, alteração do hábito intestinal, anemia ou sangramento com idade de rastreio (excluir câncer colorretal)"
  ],
  conduta: [
    "Inspeção anal com afastamento suave das nádegas; toque retal e anuscopia só se tolerável (na fissura aguda, adiar)",
    "FISSURA AGUDA (< 6–8 semanas): fibras + água, banho de assento morno, anestésico tópico, analgésico; tópico relaxante esfincteriano (nitroglicerina 0,2% ou diltiazem 2%) por 6–8 semanas",
    "FISSURA CRÔNICA (> 8 semanas, plicoma sentinela, papila hipertrófica, fibras do esfíncter visíveis): tópico por 6–8 semanas; sem resposta → coloproctologia (toxina botulínica ou esfincterotomia lateral interna)",
    "ABSCESSO PERIANAL: drenagem com anestesia local (incisão próxima à borda anal, sobre o ponto de flutuação, ampla o suficiente; romper septos; não tamponar firmemente); se profundo, extenso ou em imunossuprimido → centro cirúrgico",
    "Antibiótico após drenagem só se celulite extensa, sinais sistêmicos, imunossupressão, diabetes descompensado, prótese ou valvopatia",
    "Após abscesso, avisar sobre risco de fístula; drenagem crônica → coloproctologia (fistulotomia/seton, nunca explorar fístula no PS)",
    "PROLAPSO RETAL: reduzir manualmente com luvas lubrificadas e pressão suave e contínua; edema importante → açúcar granulado sobre a mucosa por 15–20 min antes de reduzir; irredutível ou isquêmico → cirurgião",
    "TROMBOSE HEMORROIDÁRIA e doença hemorroidária: conduta na ficha hemorroidas"
  ],
  exames: [
    "Diagnóstico geralmente clínico",
    "Hemograma, glicemia e PCR se abscesso com sinais sistêmicos ou diabetes",
    "USG endoanal/perineal, RM de pelve ou TC se suspeita de abscesso profundo ou fístula complexa",
    "Colonoscopia: sangramento com sinais de alarme, idade de rastreio, fissura atípica ou suspeita de Crohn",
    "Sorologias (HIV, sífilis) se fissura/úlcera atípica"
  ],
  diferenciais: [
    "Doença hemorroidária e trombose hemorroidária",
    "Doença de Crohn perianal",
    "Hidradenite supurativa, cisto pilonidal",
    "IST (sífilis, herpes, linfogranuloma), condiloma",
    "Câncer anal ou retal",
    "Proctalgia fugaz, síndrome do levantador do ânus"
  ],
  tratamento: [
    {
      droga: "Nitroglicerina (gliceril trinitrato) pomada 0,2% (manipulada)",
      linha: "l1",
      dose: "Quantidade de uma ervilha (~1 cm) na borda anal",
      via: "Tópica",
      intervalo: "12/12 h",
      duracao: "6–8 semanas",
      monitorizacao: "Cefaleia (efeito adverso comum)",
      contraindicacoes: "Uso de sildenafila/tadalafila, hipotensão",
      ajustes: "Fissura anal aguda ou crônica (ASCRS 2023)"
    },
    {
      droga: "Diltiazem gel/pomada 2% (manipulado)",
      linha: "l1",
      dose: "Quantidade de uma ervilha na borda anal",
      via: "Tópica",
      intervalo: "12/12 h",
      duracao: "6–8 semanas",
      monitorizacao: "Prurido, dermatite",
      contraindicacoes: "—",
      ajustes: "Eficácia semelhante à nitroglicerina com menos cefaleia. Alternativa: nifedipina 0,2–0,3% + lidocaína manipulada"
    },
    {
      droga: "Lidocaína gel/pomada 2%",
      linha: "adj",
      dose: "Fina camada",
      via: "Tópica",
      intervalo: "Antes e depois de evacuar, até 3×/dia",
      duracao: "Até 7–14 dias",
      monitorizacao: "Dermatite de contato",
      contraindicacoes: "Alergia",
      ajustes: "—"
    },
    {
      droga: "Amoxicilina-clavulanato (abscesso com indicação de antibiótico)",
      linha: "l1",
      dose: "875/125 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "5–7 dias",
      monitorizacao: "Melhora em 48–72 h",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Alérgico: ciprofloxacino 500 mg 12/12 h + metronidazol 500 mg 8/8 h. Grave/internado: ceftriaxona 2 g IV/dia + metronidazol 500 mg IV 8/8 h"
    },
    {
      droga: "Psyllium",
      linha: "adj",
      dose: "5 g em 200 mL de água",
      via: "VO",
      intervalo: "1–2×/dia",
      duracao: "Contínuo",
      monitorizacao: "Fezes macias diárias",
      contraindicacoes: "Obstrução intestinal",
      ajustes: "Base do tratamento da fissura e prevenção de recidiva"
    }
  ],
  prescricao: {
    ambulatorial: "FISSURA ANAL\nUSO ORAL\n1. Psyllium 5 g (sachê) --------------------------- 30 sachês\n   Dissolver 1 sachê em 1 copo de água 1 a 2 vezes ao dia e beber em seguida, com mais 1 copo de água.\n2. Dipirona 500 mg ------------------------------- 1 caixa\n   Tomar 1 a 2 comprimidos de 6 em 6 horas se dor.\n\nUSO TÓPICO\n3. Diltiazem 2% pomada (manipulada) -------------- 30 g\n   Aplicar quantidade de uma ervilha na borda do ânus de 12 em 12 horas por 8 semanas.\n   (ou Nitroglicerina 0,2% pomada manipulada, mesma forma de uso; pode dar dor de cabeça.)\n4. Lidocaína gel 2% ------------------------------- 1 bisnaga\n   Aplicar fina camada no ânus antes e depois de evacuar, até 3 vezes ao dia, por até 14 dias.\n\nCUIDADOS\n5. Banho de assento com água morna por 10 a 15 minutos, 2 a 3 vezes ao dia e após evacuar.\n\nABSCESSO PERIANAL DRENADO\n1. Banho de assento morno 3 vezes ao dia e após evacuar; gaze seca sobre a ferida.\n2. Dipirona 500 mg — 1 a 2 comprimidos de 6 em 6 horas se dor.\n3. Se indicado antibiótico: amoxicilina + clavulanato 875/125 mg — 14 comprimidos — 1 de 12 em 12 horas por 7 dias.\n4. Psyllium 5 g 1 vez ao dia (evitar fezes duras)."
  },
  orientacoesRetorno: [
    "Comer fibras (frutas, verduras, aveia, feijão), beber água e não fazer força para evacuar",
    "Banho de assento com água morna alivia a dor; lavar com água após evacuar em vez de papel",
    "Fissura pode levar semanas para cicatrizar: usar a pomada todos os dias até o fim",
    "Voltar imediatamente se: febre, dor anal forte e contínua com inchaço, dificuldade para urinar, pele escura ou com mau cheiro na região, prolapso que não volta",
    "Após drenagem de abscesso: se continuar saindo secreção por um furinho perto do ânus, procurar o coloproctologista (fístula)"
  ],
  encaminhar: [
    "PS/cirurgia no mesmo dia: abscesso profundo ou extenso, sinais sistêmicos, imunossuprimido, prolapso irredutível/isquêmico, suspeita de Fournier",
    "Coloproctologia eletiva: fissura crônica sem resposta em 8 semanas, fístula anal, prolapso retal recorrente (cirurgia), fissura atípica"
  ],
  fontes: [
    "ASCRS — Clinical Practice Guidelines for the Management of Anal Fissures (Stewart et al., 2017; atualização 2023)",
    "ASCRS — Clinical Practice Guidelines for the Management of Anorectal Abscess, Fistula-in-Ano, and Rectovaginal Fistula (Gaertner et al., 2022)",
    "ASCRS — Clinical Practice Guidelines for the Management of Rectal Prolapse (Bordeianou et al., 2017)",
    "ESCP — Guideline on the management of anal fistula and abscess (2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

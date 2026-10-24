// Síndrome de Stevens-Johnson e necrólise epidérmica tóxica
registrarFicha({
  id: "sjs-net",
  especialidade: "dermatologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Síndrome de Stevens-Johnson e necrólise epidérmica tóxica (SJS/NET)",
  resumo: "Reação mucocutânea grave, geralmente a medicamento, com necrose da epiderme: máculas purpúricas/alvos atípicos, bolhas, descolamento e erosões em ≥ 2 mucosas. SJS < 10% da superfície descolada; sobreposição 10–30%; NET > 30%.",
  palavrasChave: "stevens johnson sjs net necrolise epidermica toxica lyell scorten farmacodermia grave bolhas descolamento nikolsky mucosite alopurinol carbamazepina lamotrigina fenitoina sulfametoxazol nevirapina mycoplasma mirm ciclosporina",
  critico: {
    tempo: "Suspender droga e transferir",
    texto: "Suspender imediatamente todos os medicamentos suspeitos (quanto mais cedo, menor a mortalidade). Descolamento > 10% ou SCORTEN ≥ 2: UTI ou centro de queimados com dermatologia e oftalmologia."
  },
  alarmes: [
    "Descolamento epidérmico > 10% da superfície corporal ou progressão em horas",
    "SCORTEN ≥ 2",
    "Acometimento ocular (risco de cegueira), respiratório (dispneia, hipoxemia) ou genital",
    "Hipotensão, oligúria, distúrbios eletrolíticos, hipotermia",
    "Febre persistente ou nova (sepse por Staphylococcus/Pseudomonas)",
    "Dor cutânea intensa desproporcional (sinal precoce)"
  ],
  condutaInicial: [
    "Suspender todos os medicamentos suspeitos e não essenciais; listar drogas das últimas 8 semanas com datas",
    "Estimar % da superfície descolada (bolhas + erosões + Nikolsky positivo; regra dos 9 ou palma = 1%)",
    "Calcular SCORTEN nas primeiras 24 h (e no 3º dia)",
    "Acesso venoso em pele íntegra; reposição volêmica guiada por diurese (necessidade menor que em queimadura de mesma extensão)",
    "Ambiente aquecido (25–28 °C), manipulação mínima, colchão de ar, curativos não aderentes; não romper bolhas extensamente",
    "Oftalmologia nas primeiras 24 h e diariamente; cuidados de boca e genitália",
    "Analgesia adequada (opioide); nutrição precoce",
    "Sem antibiótico profilático; culturas se febre ou piora",
    "Terapia imunomoduladora (ciclosporina, corticoide, IGIV, etanercepte) é decisão do especialista — evidência limitada"
  ],
  fataisExcluir: [
    "Sepse",
    "Choque hipovolêmico e distúrbios eletrolíticos",
    "Insuficiência respiratória (descolamento brônquico)",
    "Síndrome da pele escaldada estafilocócica (criança; outra conduta)",
    "Doenças bolhosas autoimunes, eritema multiforme maior, DRESS, PEGA"
  ],
  proximaDecisao: "Após estabilização e transferência: re-epitelização ocorre em 2–4 semanas. Na alta: relatório de alergia com o medicamento (e classe com reatividade cruzada), seguimento oftalmológico e dermatológico, notificação VigiMed.",
  clinica: {
    anamnese: [
      "Medicamento novo há 4–28 dias (até 8 semanas): alopurinol, carbamazepina, lamotrigina, fenitoína, fenobarbital, sulfametoxazol-trimetoprima, sulfassalazina, nevirapina, AINE oxicam, dipirona (raro)",
      "Pródromo: febre, dor de garganta, ardor ocular 1–3 dias antes da pele",
      "Criança/adolescente: infecção por Mycoplasma pneumoniae (mucosite predominante — MIRM)",
      "HIV, LES, neoplasia, radioterapia (fatores de risco)"
    ],
    exameFisico: [
      "Máculas eritemato-purpúricas, alvos atípicos planos, confluentes, começando em face e tronco",
      "Bolhas flácidas, descolamento, sinal de Nikolsky",
      "Mucosas: oral (erosões e crostas hemorrágicas em lábios), ocular (conjuntivite, pseudomembranas), genital",
      "Sinais vitais, temperatura, diurese, ausculta pulmonar"
    ],
    diferenciais: [
      { dx: "Eritema multiforme maior", pista: "Alvos típicos em extremidades, pós-herpes; descolamento < 10%" },
      { dx: "Síndrome da pele escaldada estafilocócica", pista: "Criança < 5 anos, descolamento superficial, mucosas poupadas" },
      { dx: "PEGA", pista: "Pústulas não foliculares; Nikolsky pode ser positivo, mas sem necrose epidérmica total" },
      { dx: "DRESS", pista: "Latência maior, edema facial, eosinofilia, hepatite" },
      { dx: "Pênfigo, penfigoide, dermatose por IgA linear (vancomicina)", pista: "Evolução mais lenta; biópsia com imunofluorescência" },
      { dx: "Exantema fixo bolhoso generalizado", pista: "Placas bem delimitadas, recorrência no mesmo local, pouca mucosa" }
    ],
    gravidade: [
      "SJS: < 10% de descolamento · Sobreposição SJS/NET: 10–30% · NET: > 30%",
      "SCORTEN (1 ponto cada): idade ≥ 40 anos; neoplasia; FC ≥ 120 bpm; descolamento inicial > 10%; ureia > 28 mg/dL (> 10 mmol/L); bicarbonato < 20 mEq/L; glicemia > 252 mg/dL (> 14 mmol/L)",
      "Mortalidade prevista: 0–1 ponto ~3%; 2 ~12%; 3 ~35%; 4 ~58%; ≥ 5 ~90%",
      "SCORTEN não foi validado em crianças"
    ]
  },
  exames: [
    {
      nome: "Laboratório (SCORTEN e suporte)",
      pedido: "Hemograma, ureia, creatinina, sódio, potássio, magnésio, fósforo, glicemia, gasometria venosa com bicarbonato, lactato, albumina, TGO, TGP, bilirrubinas, PCR.",
      porQue: "Calcular SCORTEN e guiar reposição.",
      esperar: "Hipoalbuminemia, distúrbios eletrolíticos, leucopenia (pior prognóstico).",
      interpretacao: "Ureia, bicarbonato e glicemia entram no SCORTEN.",
      limitacoes: "Repetir no 3º dia."
    },
    {
      nome: "Culturas",
      pedido: "Hemoculturas (2), cultura de swab de pele erosada (3 sítios) e de mucosas; urocultura se sonda. Mycoplasma pneumoniae (sorologia/PCR) em criança.",
      porQue: "Sepse é a principal causa de morte.",
      esperar: "Colonização por S. aureus e depois gram-negativos.",
      interpretacao: "Tratar infecção com sinais clínicos, não colonização.",
      limitacoes: "—"
    },
    {
      nome: "Biópsia de pele",
      pedido: "Biópsia de pele (punch) de borda de bolha recente com histopatológico; segunda amostra de pele perilesional para imunofluorescência direta.",
      porQue: "Confirmar necrose epidérmica de espessura total e excluir doença bolhosa autoimune.",
      esperar: "Necrose de queratinócitos em toda a espessura, infiltrado escasso.",
      interpretacao: "Imunofluorescência negativa favorece SJS/NET.",
      limitacoes: "Não atrasar transferência."
    },
    {
      nome: "Tórax",
      pedido: "Radiografia de tórax; gasometria arterial se dispneia.",
      porQue: "Acometimento brônquico, pneumonia.",
      esperar: "Normal na admissão em geral.",
      interpretacao: "Hipoxemia precoce = mau prognóstico, considerar UTI.",
      limitacoes: "—"
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide (Ringer lactato ou SF 0,9%)",
      linha: "l1",
      dose: "Guiado por diurese (adulto 0,5–1 mL/kg/h; criança 1 mL/kg/h); estimativa inicial adulto ~2 mL/kg × % descolada nas 24 h",
      via: "IV, acesso em pele íntegra",
      intervalo: "Contínuo",
      duracao: "Até via oral/enteral adequada",
      monitorizacao: "Diurese horária, eletrólitos, PA",
      contraindicacoes: "—",
      ajustes: "Evitar hiper-hidratação (edema pulmonar). Repor albumina se < 2 g/dL conforme UTI"
    },
    {
      droga: "Analgesia com opioide",
      linha: "l1",
      dose: "Morfina 0,05–0,1 mg/kg IV (máx. 5 mg/dose); criança 0,05–0,1 mg/kg (máx. 4 mg/dose)",
      via: "IV",
      intervalo: "4/4 h e antes de curativos; ou infusão contínua na UTI",
      duracao: "Conforme dor",
      monitorizacao: "FR, sedação; escala de dor",
      contraindicacoes: "—",
      ajustes: "Associar dipirona ou paracetamol fixos. Evitar AINE"
    },
    {
      droga: "Ciclosporina (imunomodulação — especialista)",
      linha: "alt",
      dose: "3–5 mg/kg/dia",
      via: "VO (ou IV)",
      intervalo: "Dividida 12/12 h",
      duracao: "7–10 dias, conforme especialista",
      monitorizacao: "Creatinina, PA, potássio",
      contraindicacoes: "Lesão renal, infecção ativa grave",
      ajustes: "Opção com dados observacionais mais favoráveis; corticoide em pulso, IGIV e etanercepte são alternativas citadas — nenhuma é padrão absoluto (BAD 2016; consensos posteriores)"
    },
    {
      droga: "Cuidados oculares",
      linha: "l1",
      dose: "Lubrificante sem conservante (ex.: carmelose 0,5%) + colírio de corticoide/antibiótico conforme oftalmologista",
      via: "Ocular",
      intervalo: "Lubrificante de 2/2 h",
      duracao: "Até re-epitelização",
      monitorizacao: "Oftalmologia diária",
      contraindicacoes: "—",
      ajustes: "Desfazer sinéquias; membrana amniótica em casos graves (oftalmologia)"
    },
    {
      droga: "Cuidados de boca e pele",
      linha: "l1",
      dose: "Vaselina em lábios; bochecho com solução anestésica (lidocaína viscosa 2%) antes das refeições; clorexidina 0,12% bochecho; curativos não aderentes com vaselina/silicone",
      via: "Tópica",
      intervalo: "Boca 4–6×/dia; curativos conforme protocolo",
      duracao: "Até re-epitelização",
      monitorizacao: "Infecção",
      contraindicacoes: "Evitar sulfadiazina de prata (sulfonamida)",
      ajustes: "Lidocaína viscosa: cautela em crianças pequenas (toxicidade por absorção)"
    },
    {
      droga: "Antibiótico profilático",
      linha: "ci",
      dose: "Não usar",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "Culturas seriadas",
      contraindicacoes: "Aumenta resistência e risco de nova farmacodermia",
      ajustes: "Tratar apenas infecção documentada ou sepse"
    }
  ],
  destino: {
    agora: ["Suspender suspeitos, estabilizar, SCORTEN, acionar dermatologia, oftalmologia e regulação"],
    reavaliar: ["% descolada e SCORTEN no 3º dia; diurese horária; olhos diariamente"],
    alta: ["Re-epitelização completa, alimentação oral, sem infecção, relatório de alergia, seguimento oftalmológico e dermatológico"],
    observacao: ["—"],
    internacao: ["Todos os casos; UTI ou centro de queimados se descolamento > 10%, SCORTEN ≥ 2 ou acometimento respiratório"],
    transferencia: ["Para centro de queimados/UTI com dermatologia assim que possível (piora até 3–5 dias); transportar com acesso, analgesia e aquecimento"]
  },
  prescricao: {
    hospitalar: "SJS/NET — ADULTO (peso: ___ kg; descolamento: ___ %; SCORTEN: ___)\n1. SUSPENDER: __________ e todos os medicamentos não essenciais. Registrar ALERGIA em destaque.\n2. Dieta oral pastosa fria se tolerar; caso contrário, sonda nasoenteral fina com dieta enteral precoce (nutrição).\n3. Isolamento de contato reverso, quarto aquecido (25–28 °C), colchão de ar, manipulação mínima.\n4. Ringer lactato IV ___ mL/h, ajustar para diurese 0,5–1 mL/kg/h.\n5. Dipirona 1 g IV de 6/6 h fixa.\n6. Morfina 10 mg/mL: diluir 1 mL em 9 mL de SF 0,9% (1 mg/mL); fazer 2–4 mg IV de 4/4 h fixa e 30 min antes dos curativos (criança 0,05–0,1 mg/kg).\n7. Omeprazol 40 mg IV 1×/dia.\n8. Enoxaparina 40 mg SC 1×/dia (aplicar em pele íntegra).\n9. Olhos: lubrificante sem conservante 1 gota em cada olho de 2/2 h; avaliação oftalmológica diária.\n10. Boca: vaselina nos lábios de 4/4 h; bochecho com clorexidina 0,12% 15 mL 2×/dia; lidocaína viscosa 2% 5 mL bochechar e cuspir antes das refeições.\n11. Pele: não romper bolhas; curativos não aderentes (gaze vaselinada ou silicone); não usar sulfadiazina de prata.\n12. Controles: sinais vitais e temperatura de 2/2 h; diurese horária; eletrólitos e glicemia diários; culturas se febre.\n13. Notificar no VigiMed (ANVISA).\n\nCRIANÇA: Ringer lactato pela diurese 1 mL/kg/h; dipirona 15–25 mg/kg IV 6/6 h (máx. 1 g); morfina 0,05–0,1 mg/kg IV 4/4 h (máx. 4 mg/dose).",
    ambulatorial: "PÓS-ALTA\nUSO TÓPICO / OCULAR\n1. Lubrificante ocular sem conservante ------------- ___ frascos\n   Pingar 1 gota em cada olho de 4 em 4 horas ou conforme oftalmologista.\n2. Hidratante corporal sem perfume ------------------ 1 frasco\n   Aplicar em todo o corpo 2 vezes ao dia.\n3. Protetor solar FPS ≥ 30 -------------------------- 1 frasco\n   Aplicar nas áreas expostas pela manhã e reaplicar a cada 2–3 horas (manchas pós-inflamatórias).\n\nRELATÓRIO: Síndrome de Stevens-Johnson / NET causada por __________ em __/__/____. Nunca reexpor a esse medicamento nem a: __________ (reatividade cruzada)."
  },
  orientacoesRetorno: [
    "Nunca mais usar o remédio que causou a reação nem os da mesma família; levar o relatório em todas as consultas",
    "Familiares de 1º grau também devem evitar esse remédio, se possível (predisposição genética)",
    "Olhos secos, vermelhos ou com dor: procurar oftalmologista rapidamente; acompanhamento ocular por meses",
    "Voltar se febre, feridas que não cicatrizam, dificuldade para engolir ou urinar",
    "Proteger a pele do sol por pelo menos 6 meses",
    "Retorno com dermatologia e oftalmologia em 1–2 semanas após a alta"
  ],
  tabelas: [
    {
      titulo: "SCORTEN",
      colunas: ["Pontos", "Mortalidade prevista"],
      linhas: [
        ["0–1", "~3%"],
        ["2", "~12%"],
        ["3", "~35%"],
        ["4", "~58%"],
        ["≥ 5", "~90%"]
      ],
      nota: "Itens: idade ≥ 40; neoplasia; FC ≥ 120; descolamento > 10%; ureia > 28 mg/dL; bicarbonato < 20; glicemia > 252 mg/dL. Calcular no 1º e no 3º dia. Bastuji-Garin et al., 2000."
    }
  ],
  fontes: [
    "British Association of Dermatologists — UK guidelines for the management of SJS/TEN in adults (2016) e em crianças (2019)",
    "Bastuji-Garin S et al. SCORTEN: a severity-of-illness score for toxic epidermal necrolysis (J Invest Dermatol, 2000)",
    "Sassolas B et al. ALDEN — algorithm for drug causality in epidermal necrolysis (Clin Pharmacol Ther, 2010)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

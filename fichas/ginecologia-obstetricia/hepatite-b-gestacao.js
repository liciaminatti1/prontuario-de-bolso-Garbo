// Hepatite B na gestação
registrarFicha({
  id: "hepatite-b-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Hepatite B na gestação",
  resumo: "Gestante HBsAg reagente: estadiamento, tenofovir para reduzir a transmissão vertical quando carga viral alta ou HBeAg reagente, imunoprofilaxia do recém-nascido (vacina + imunoglobulina) e amamentação. Gestante suscetível: vacinar.",
  palavrasChave: "hepatite b hbv hbsag hbeag anti hbc anti hbs carga viral tenofovir tdf transmissao vertical imunoglobulina anti hepatite b ighahb vacina rn gestante",
  critico: {
    tempo: "Vacina + IGHAHB no RN em 12 h",
    texto: "Filho de mãe HBsAg reagente: vacina contra hepatite B + imunoglobulina anti-hepatite B (IGHAHB), em locais diferentes, de preferência nas primeiras 12 h de vida (IGHAHB até 7 dias)."
  },
  alarmes: [
    "Icterícia, colúria, TGP > 10× o normal (hepatite aguda ou reativação)",
    "Sinais de insuficiência hepática: confusão, sangramento, INR alargado",
    "Carga viral ≥ 200.000 UI/mL ou HBeAg reagente sem tenofovir após 28 semanas",
    "Coinfecção HIV ou hepatite C/D"
  ],
  conduta: [
    "Rastreio: teste rápido ou HBsAg na 1ª consulta e no 3º trimestre (se suscetível) e na maternidade se não feito",
    "HBsAg reagente: notificar; pedir HBeAg, anti-HBe, carga viral do HBV, TGO, TGP, plaquetas, INR, anti-HCV, anti-HIV, anti-HDV se disponível; USG de abdome",
    "Encaminhar ao PNAR e ao serviço de hepatites (SAE/hepatologia), mantendo pré-natal na UBS (ver ficha Hepatites virais)",
    "Já tem indicação de tratamento da hepatite B (hepatite ativa, cirrose): tenofovir durante toda a gestação, com especialista",
    "Profilaxia da transmissão vertical: tenofovir (TDF) 300 mg/dia a partir de 24–28 semanas se carga viral ≥ 200.000 UI/mL ou HBeAg reagente (PCDT)",
    "Após o parto: suspensão do TDF profilático planejada com o especialista, com TGP mensal por cerca de 6 meses (risco de reativação/flare)",
    "Parto: via obstétrica (hepatite B não indica cesárea); evitar procedimentos invasivos desnecessários",
    "Amamentação permitida, inclusive em uso de tenofovir",
    "Gestante suscetível (HBsAg e anti-HBs não reagentes): vacinar em qualquer idade gestacional (3 doses: 0, 1 e 6 meses)",
    "Testar e vacinar parcerias e contatos domiciliares"
  ],
  exames: [
    "Pedido: \"HBsAg, HBeAg, anti-HBe, anti-HBc total, carga viral do HBV (HBV-DNA quantitativo), TGO, TGP, bilirrubinas, INR, plaquetas, anti-HCV, anti-HIV. USG de abdome superior.\"",
    "TGP a cada trimestre durante a gestação e mensalmente nos 6 meses pós-parto se usou TDF profilático",
    "Função renal (creatinina) se em tenofovir",
    "RN: HBsAg e anti-HBs entre 9 e 12 meses (1–2 meses após completar o esquema vacinal)"
  ],
  tratamento: [
    { droga: "Tenofovir (TDF)", linha: "l1", dose: "300 mg", via: "VO", intervalo: "1×/dia", duracao: "Profilaxia: de 24–28 semanas até o parto e período pós-parto definido pelo especialista; tratamento: indefinido", monitorizacao: "Creatinina, TGP, carga viral", contraindicacoes: "ClCr < 50 (ajuste de intervalo)", ajustes: "Seguro na gestação e na amamentação. Coinfecção HIV: já incluso na TARV (TDF/3TC)" },
    { droga: "Vacina hepatite B (RN)", linha: "l1", dose: "0,5 mL", via: "IM, vasto lateral da coxa", intervalo: "Ao nascer; seguir calendário (pentavalente aos 2, 4 e 6 meses)", duracao: "—", monitorizacao: "Sorologia pós-vacinal aos 9–12 meses", contraindicacoes: "—", ajustes: "Todo RN, independentemente da sorologia materna, nas primeiras 12–24 h" },
    { droga: "Imunoglobulina anti-hepatite B (IGHAHB) (RN)", linha: "l1", dose: "0,5 mL", via: "IM, coxa contralateral à vacina", intervalo: "Dose única", duracao: "Idealmente nas primeiras 12 h; até 7 dias", monitorizacao: "—", contraindicacoes: "—", ajustes: "RN de mãe HBsAg reagente (e de mãe com HBsAg desconhecido de alto risco, conforme PCDT). Disponível nos CRIE/maternidades" }
  ],
  prescricao: {
    ambulatorial: "GESTANTE HBsAg REAGENTE COM CARGA VIRAL ≥ 200.000 UI/mL OU HBeAg REAGENTE (a partir de 24–28 semanas)\nUSO ORAL\n1. Fumarato de tenofovir desoproxila 300 mg ------- 30 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, todos os dias. Não suspender sem orientação.\n(Dispensação conforme fluxo do PCDT de hepatite B.)",
    hospitalar: "RN DE MÃE HBsAg REAGENTE\n1. Vacina hepatite B 0,5 mL IM no vasto lateral da coxa direita nas primeiras 12 h.\n2. Imunoglobulina anti-hepatite B 0,5 mL IM no vasto lateral da coxa esquerda nas primeiras 12 h (até 7 dias).\n3. Aleitamento materno liberado.\n4. Registrar na Caderneta da Criança; sorologia (HBsAg e anti-HBs) aos 9–12 meses."
  },
  orientacoesRetorno: [
    "A hepatite B pode passar para o bebê no parto; a vacina e a imunoglobulina logo após o nascimento protegem mais de 90% dos bebês",
    "Você pode amamentar normalmente",
    "Se for indicado o tenofovir, tome todos os dias e não pare sozinha após o parto",
    "Procure atendimento se ficar com olhos amarelos, urina escura, vômitos ou confusão",
    "Parceiros e pessoas da casa devem fazer o teste e se vacinar"
  ],
  encaminhar: [
    "PNAR e serviço de hepatites virais: toda gestante HBsAg reagente",
    "Urgência: hepatite aguda grave, sinais de insuficiência hepática"
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022, atualizações 2024)",
    "Ministério da Saúde — PCDT Hepatite B e Coinfecções (2023)",
    "Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE, 2023)",
    "OMS — Prevention of mother-to-child transmission of hepatitis B virus: guidelines on antiviral prophylaxis in pregnancy (2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

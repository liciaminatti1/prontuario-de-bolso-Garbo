// Icterícia no adulto: abordagem diagnóstica
registrarFicha({
  id: "ictericia",
  especialidade: "gastroenterologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Icterícia no adulto: abordagem diagnóstica",
  resumo: "Pele ou esclera amarelada (bilirrubina geralmente > 2,5–3 mg/dL). Separar hiperbilirrubinemia indireta (hemólise, Gilbert) de direta (hepatocelular ou colestática) e decidir a urgência.",
  palavrasChave: "ictericia amarelao bilirrubina direta indireta colestase coledocolitiase colangite gilbert hemolise neoplasia pancreas courvoisier fosfatase alcalina ggt usg cprm cpre prurido",
  critico: {
    tempo: "Febre + dor + icterícia: PS",
    texto: "Tríade de Charcot (febre, dor em hipocôndrio direito, icterícia) = colangite: PS no mesmo dia. Icterícia com confusão ou sangramento (INR alto) = insuficiência hepática: PS."
  },
  alarmes: [
    "Febre com calafrios, dor em hipocôndrio direito (colangite) — hipotensão e confusão = colangite grave",
    "Confusão, sonolência, sangramentos (insuficiência hepática aguda)",
    "Icterícia indolor progressiva com perda de peso, vesícula palpável (neoplasia periampular ou de pâncreas)",
    "Anemia aguda com urina escura (hemólise)",
    "Gestante (colestase da gestação, esteatose aguda, HELLP)",
    "Ascite, hemorragia digestiva, encefalopatia (cirrose descompensada)"
  ],
  conduta: [
    "Confirmar icterícia (esclera com luz natural) e diferenciar de carotenemia (palmas amarelas, esclera branca)",
    "História: tempo de evolução, dor, febre, colúria, acolia, prurido, perda de peso, álcool, medicamentos e chás, exposição a hepatites, gestação",
    "Exames iniciais: bilirrubinas total e frações, TGO, TGP, fosfatase alcalina, GGT, TP/INR, albumina, hemograma",
    "Predomínio indireto com transaminases normais: pesquisar hemólise (reticulócitos, LDH, haptoglobina, esfregaço); se tudo normal e bilirrubina indireta < 4–5 mg/dL, provável síndrome de Gilbert",
    "Predomínio direto: definir padrão pelo fator R = (TGP/LSN) ÷ (FA/LSN): > 5 hepatocelular; < 2 colestático; 2–5 misto",
    "Hepatocelular: sorologias de hepatites, revisar drogas, álcool, autoimune (ver ficha hepatite-aguda-insuficiencia-hepatica)",
    "Colestático: USG de abdome primeiro. Via biliar dilatada → causa obstrutiva (colangiorressonância/TC, CPRE se coledocolitíase). Sem dilatação → colestase intra-hepática (drogas, colangite biliar primária com anti-mitocôndria, infiltração, sepse)",
    "INR alto em colestase pode ser falta de vitamina K: repetir após vitamina K parenteral"
  ],
  exames: [
    "Bilirrubina total e frações, TGO, TGP, fosfatase alcalina, GGT, TP/INR, albumina, hemograma",
    "Hemólise: reticulócitos, LDH, haptoglobina, esfregaço de sangue periférico, Coombs direto",
    "Hepatocelular: anti-HAV IgM, HBsAg, anti-HBc IgM, anti-HCV; FAN, anti-músculo liso; ferritina e saturação de transferrina",
    "Colestático: USG de abdome; anticorpo antimitocôndria; colangiorressonância se dilatação ou suspeita de coledocolitíase; TC de abdome com contraste se suspeita de neoplasia; CA 19-9 só como complemento",
    "Gilbert: bilirrubina indireta sobe com jejum e doença intercorrente; repetir em outra ocasião com hemograma e reticulócitos normais"
  ],
  diferenciais: [
    "Síndrome de Gilbert (benigna, comum; bilirrubina indireta, sem hemólise)",
    "Anemias hemolíticas (falciforme, esferocitose, autoimune, G6PD)",
    "Hepatites virais, alcoólica, medicamentosa, autoimune",
    "Coledocolitíase, colangite, síndrome de Mirizzi",
    "Neoplasia de cabeça de pâncreas, colangiocarcinoma, ampuloma",
    "Colangite biliar primária e colangite esclerosante primária",
    "Cirrose de qualquer causa; sepse (colestase da sepse); nutrição parenteral"
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO DE EXAMES — INVESTIGAÇÃO DE ICTERÍCIA\n1. Bilirrubina total e frações, TGO, TGP, fosfatase alcalina, GGT, TP/INR, albumina, hemograma completo, reticulócitos, LDH.\n2. Anti-HAV IgM, HBsAg, anti-HBc IgM, anti-HCV, anti-HIV.\n3. Ultrassonografia de abdome superior — icterícia a esclarecer (avaliar dilatação de vias biliares, vesícula, fígado e pâncreas).\n\nSE PRURIDO POR COLESTASE (USO ORAL)\n4. Colestiramina 4 g (sachê) ------------------ 1 caixa\n   Diluir 1 sachê em água e tomar 1 a 2 vezes ao dia, longe (4 horas) dos outros remédios. Uso se disponível; alternativa: hidroxizina 25 mg à noite.\n\nORIENTAÇÕES\n- Não tomar bebida alcoólica, chás, suplementos ou paracetamol até o resultado."
  },
  orientacoesRetorno: [
    "Trazer os exames assim que ficarem prontos; a causa define o tratamento",
    "Não beber álcool, não usar chás ou remédios por conta própria",
    "Voltar imediatamente (ou ir ao PS) se: febre com calafrios, dor forte na barriga, confusão ou sonolência, sangramento, fezes pretas ou vômito com sangue",
    "Síndrome de Gilbert, se confirmada, é benigna: o amarelo pode aparecer em jejum, estresse ou doença e não precisa de tratamento"
  ],
  encaminhar: [
    "PS no mesmo dia: suspeita de colangite, insuficiência hepática (INR ≥ 1,5, confusão), hemólise aguda, icterícia com dor intensa",
    "Gastroenterologia/cirurgia com prioridade: via biliar dilatada, massa pancreática ou hepática, perda de peso com icterícia indolor (suspeita de neoplasia)",
    "Gastro/hepatologia eletiva: colestase intra-hepática persistente, hepatopatia crônica",
    "Hematologia: hemólise sem causa definida"
  ],
  fontes: [
    "ACG — Clinical Guideline: Evaluation of Abnormal Liver Chemistries (Kwo et al., 2017)",
    "Tokyo Guidelines 2018 (TG18) — Diagnostic criteria and severity grading of acute cholangitis",
    "EASL — Clinical Practice Guidelines on the management of cholestatic liver diseases (2009) e colangite biliar primária (2017)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II: Acolhimento à demanda espontânea (2013)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

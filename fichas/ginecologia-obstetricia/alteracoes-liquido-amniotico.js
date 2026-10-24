// Oligoâmnio e polidrâmnio
registrarFicha({
  id: "alteracoes-liquido-amniotico",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Oligoâmnio e polidrâmnio",
  resumo: "Alterações do volume de líquido amniótico na USG: definição (ILA e maior bolsão), causas a investigar, quando encaminhar e momento do parto.",
  palavrasChave: "oligoamnio oligodramnio polidramnio polihidramnio liquido amniotico ila indice de liquido amniotico maior bolsao vertical rotura de membranas amniorrexe diabetes amniodrenagem indometacina",
  critico: {
    tempo: "Excluir bolsa rota",
    texto: "Oligoâmnio novo: pergunte sobre perda de líquido e examine (especular). Bolsa rota muda toda a conduta. Avalie também RCF e vitalidade com Doppler."
  },
  alarmes: [
    "Perda de líquido pela vagina (rotura de membranas)",
    "Oligoâmnio com RCF ou Doppler alterado",
    "Oligoâmnio grave no 2º trimestre (risco de hipoplasia pulmonar; investigar malformação renal)",
    "Polidrâmnio com dispneia, dor abdominal intensa, contrações (risco de parto prematuro)",
    "Movimentos fetais diminuídos"
  ],
  conduta: [
    "Oligoâmnio: ILA ≤ 5 cm ou maior bolsão vertical < 2 cm (MBV é preferido para diagnóstico, gera menos intervenção)",
    "Polidrâmnio: ILA ≥ 24–25 cm ou maior bolsão vertical ≥ 8 cm; leve 8–11 cm, moderado 12–15 cm, grave ≥ 16 cm (MBV)",
    "Oligoâmnio — investigar: rotura de membranas (anamnese, especular), RCF/insuficiência placentária (Doppler), pós-datismo, malformação renal/urinária, medicamentos (IECA/BRA, AINE)",
    "Oligoâmnio isolado a termo com Doppler normal: hidratação oral (2 L/dia) e reavaliação; parto entre 36 e 37+6 semanas (ACOG) ou ao termo conforme PNAR",
    "Polidrâmnio — investigar: diabetes (TOTG se ainda não feito), USG morfológica (atresia de esôfago/duodeno, defeitos de SNC), infecções (TORCH, parvovírus), anemia fetal/isoimunização (Coombs indireto), gemelar (síndrome transfusor-transfundido), aneuploidia",
    "Polidrâmnio leve idiopático: seguimento com USG a cada 2–4 semanas; parto a termo (39 semanas); risco de macrossomia, apresentação anômala, prolapso de cordão e atonia no parto",
    "Polidrâmnio grave sintomático: referência terciária (amniodrenagem; indometacina só < 32 semanas e por curto prazo, em serviço especializado)",
    "Encaminhar ao PNAR qualquer alteração confirmada, mantendo consultas na UBS"
  ],
  exames: [
    "Pedido: \"USG obstétrica com ILA e maior bolsão vertical, biometria e Doppler (artéria umbilical, cerebral média). Indicação: suspeita de oligoâmnio/polidrâmnio.\"",
    "Oligoâmnio: especular (teste de cristalização ou nitrazina se disponível), USG morfológica (rins, bexiga) se 2º trimestre, CTG ≥ 32 semanas",
    "Polidrâmnio: TOTG 75 g ou glicemias, sorologias (toxoplasmose, CMV, sífilis, parvovírus se disponível), Coombs indireto, USG morfológica e ecocardiografia fetal; cariótipo se malformação"
  ],
  diferenciais: [
    "Rotura prematura de membranas (oligoâmnio)",
    "RCF por insuficiência placentária (oligoâmnio)",
    "Diabetes mal controlado (polidrâmnio)",
    "Gemelar monocoriônico com transfusão feto-fetal (oligo em um, poli no outro)",
    "Erro de medida (repetir com MBV)"
  ],
  prescricao: {
    ambulatorial: "OLIGOÂMNIO ISOLADO, DOPPLER NORMAL, MEMBRANAS ÍNTEGRAS\nORIENTAÇÕES\n1. Beber cerca de 2 litros de água por dia (além das outras bebidas), salvo restrição médica.\n2. Repouso relativo; contar os movimentos do bebê diariamente.\n3. Suspender anti-inflamatórios (ibuprofeno, diclofenaco, nimesulida) e IECA/BRA (enalapril, losartana) se em uso.\n4. Repetir USG com ILA conforme PNAR (em geral 1 semana)."
  },
  orientacoesRetorno: [
    "Se sentir perda de líquido pela vagina, mesmo pouca, vá à maternidade",
    "Conte os movimentos do bebê todos os dias; se diminuírem, procure a maternidade no mesmo dia",
    "Com muito líquido: procurar a maternidade se falta de ar, barriga muito dura ou dolorida, contrações regulares antes de 37 semanas ou perda de líquido",
    "Faça os ultrassons e consultas no alto risco na data marcada"
  ],
  encaminhar: [
    "PNAR: toda alteração confirmada do líquido amniótico",
    "Maternidade no mesmo dia: suspeita de rotura de membranas, oligoâmnio com Doppler alterado ou CTG alterada, polidrâmnio sintomático ou com contrações",
    "Medicina fetal: oligoâmnio no 2º trimestre, polidrâmnio grave ou com malformação, suspeita de transfusão feto-fetal"
  ],
  fontes: [
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "SMFM Consult Series #46 — Evaluation and management of polyhydramnios (2018)",
    "ACOG Committee Opinion 831 — Medically indicated late-preterm and early-term deliveries (2021)",
    "FEBRASGO — Protocolos: alterações do líquido amniótico (2021)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

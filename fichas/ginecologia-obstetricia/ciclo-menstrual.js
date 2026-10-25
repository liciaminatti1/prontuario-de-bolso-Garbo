// Ciclo menstrual: fisiologia e interpretação de dosagens hormonais
registrarFicha({
  id: "ciclo-menstrual",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Ciclo menstrual: fisiologia e dosagens hormonais por fase",
  resumo: "Referência rápida do eixo hipotálamo-hipófise-ovário (HHO), das fases do ciclo e de quando colher e como interpretar FSH, LH, estradiol, progesterona, prolactina, AMH e androgênios.",
  palavrasChave: "ciclo menstrual fisiologia eixo hipotalamo hipofise ovario hho gnrh fsh lh estradiol progesterona inibina amh hormonio antimulleriano fase folicular fase lutea ovulacao pico de lh menstruacao normal figo dosagem hormonal dia do ciclo progesterona dia 21 reserva ovariana prolactina testosterona 17 oh progesterona temperatura basal muco cervical",
  alarmes: [
    "Ausência de menstruação: sempre excluir gravidez antes de interpretar hormônios (ver amenorreia-secundaria e amenorreia-primaria)",
    "Ciclos < 24 ou > 38 dias, sangramento > 8 dias ou entre as menstruações: investigar (ver sangramento-uterino-anormal)",
    "FSH elevado com estradiol baixo antes dos 40 anos: suspeitar de insuficiência ovariana prematura",
    "Prolactina elevada com cefaleia ou alteração de campo visual: ressonância de sela",
    "Androgênios muito elevados ou virilização rápida: suspeitar de tumor ovariano ou adrenal"
  ],
  conduta: [
    "Eixo HHO: o hipotálamo libera GnRH em pulsos; a hipófise responde com FSH e LH; o ovário produz estradiol, progesterona e inibinas, que fazem retroalimentação negativa (e positiva do estradiol antes da ovulação)",
    "Fase folicular (do 1º dia da menstruação até a ovulação; duração variável): FSH recruta folículos; o folículo dominante produz estradiol crescente; o endométrio prolifera",
    "Ovulação: estradiol alto e sustentado dispara o pico de LH; a ovulação ocorre cerca de 34–36 h após o início do pico (10–12 h após o pico máximo)",
    "Fase lútea (cerca de 14 dias, mais constante): o corpo lúteo produz progesterona (pico cerca de 7 dias após a ovulação) e estradiol; endométrio secretor; temperatura basal sobe; muco fica espesso",
    "Sem gravidez, o corpo lúteo regride, estradiol e progesterona caem e ocorre a menstruação; com a queda da inibina, o FSH volta a subir e começa novo ciclo",
    "Com gravidez, o hCG mantém o corpo lúteo até a placenta assumir a produção de progesterona (por volta de 10–12 semanas)",
    "Ciclo normal (FIGO 2018): intervalo de 24 a 38 dias; duração de até 8 dias; volume que não atrapalha a vida da mulher; variação entre ciclos pequena (até 7–9 dias conforme a idade)",
    "Colher cada hormônio na fase certa (tabela) e sempre informar no pedido o dia do ciclo e o uso de hormônios",
    "Em uso de anticoncepcional hormonal, FSH, LH, estradiol e progesterona ficam suprimidos e não são interpretáveis; para avaliar o eixo, suspender o método e usar outro (preservativo) por algumas semanas, conforme a pergunta clínica",
    "Na mulher com 45 anos ou mais e sintomas típicos, o diagnóstico de climatério é clínico: não precisa dosar FSH (ver climaterio)"
  ],
  exames: [
    "Reserva ovariana / investigação de amenorreia: FSH, LH e estradiol no 2º ao 5º dia do ciclo (fase folicular precoce); em amenorreia, colher em qualquer dia",
    "Confirmar ovulação: progesterona sérica na fase lútea média (cerca de 7 dias antes da menstruação esperada; no ciclo de 28 dias, o 21º dia)",
    "AMH (hormônio antimülleriano): qualquer dia do ciclo; pode ficar um pouco mais baixo em uso de contraceptivo hormonal",
    "Prolactina: qualquer fase; de preferência pela manhã, em repouso, sem exame das mamas ou relação sexual antes",
    "TSH: qualquer fase",
    "Testosterona total e 17-OH-progesterona: fase folicular precoce, pela manhã; idealmente sem contraceptivo hormonal há cerca de 3 meses",
    "Teste de ovulação na urina (LH): positivo indica pico de LH e ovulação provável nas próximas 24–36 h"
  ],
  diferenciais: [
    "Anovulação (SOP, hiperprolactinemia, tireoidopatia, causa hipotalâmica): ciclos irregulares e progesterona lútea baixa",
    "Insuficiência ovariana prematura: FSH alto e estradiol baixo antes dos 40 anos",
    "Insuficiência lútea: tema controverso; não diagnosticar só por uma progesterona",
    "Gravidez: progesterona alta e persistente, beta-hCG positivo"
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO DE EXAMES (adaptar à pergunta clínica)\nInformações: DUM ___/___/___  Dia do ciclo na coleta: ___  Uso de hormônio: ( ) não ( ) sim: ________\n\n1. FSH, LH e estradiol — colher entre o 2º e o 5º dia da menstruação (em amenorreia: qualquer dia).\n2. Progesterona sérica — colher 7 dias antes da próxima menstruação esperada (ciclo de 28 dias: 21º dia). Finalidade: confirmar ovulação.\n3. Prolactina — colher pela manhã, em repouso.\n4. TSH.\n5. Testosterona total e 17-OH-progesterona — colher pela manhã, entre o 2º e o 5º dia do ciclo (se hiperandrogenismo).\n6. Hormônio antimülleriano (AMH) — qualquer dia do ciclo (se avaliação de reserva ovariana pelo especialista)."
  },
  orientacoesRetorno: [
    "Anotar no calendário o primeiro dia de cada menstruação e quantos dias dura",
    "Fazer o exame de sangue no dia do ciclo que está escrito no pedido; se a menstruação atrasar, avisar antes de colher",
    "Contar ao laboratório e ao médico se usa anticoncepcional, reposição hormonal ou outro hormônio",
    "Procurar a unidade se ficar 3 meses sem menstruar, se tiver sangramento entre as menstruações, após a relação ou depois da menopausa",
    "Retornar com os exames na data marcada"
  ],
  tabelas: [
    {
      titulo: "Hormônios por fase (ciclo de 28 dias)",
      colunas: ["Fase", "FSH / LH", "Estradiol", "Progesterona", "Endométrio"],
      linhas: [
        ["Folicular precoce (dias 1–5)", "FSH sobe discretamente; LH baixo", "Baixo", "Baixa", "Menstrual, depois proliferativo"],
        ["Folicular tardia (dias 6–13)", "FSH cai (retroalimentação negativa)", "Sobe muito (folículo dominante)", "Baixa", "Proliferativo, espessando"],
        ["Ovulação (cerca do dia 14)", "Pico de LH (e menor de FSH)", "Pico antes do LH; cai logo após", "Começa a subir", "Periovulatório (trilaminar)"],
        ["Lútea média (cerca do dia 21)", "Baixos", "Segundo pico, menor", "Máxima (corpo lúteo)", "Secretor"],
        ["Lútea tardia (dias 25–28)", "FSH começa a subir", "Cai", "Cai", "Descamação: menstruação"]
      ],
      nota: "Valores de referência variam por laboratório e por fase; usar sempre a faixa do laudo correspondente à fase informada."
    },
    {
      titulo: "Interpretação rápida",
      colunas: ["Achado", "Significado provável", "Próximo passo"],
      linhas: [
        ["FSH alto + estradiol baixo (fase folicular)", "Falência ovariana (menopausa ou insuficiência ovariana se < 40 anos)", "Repetir em 4–6 semanas se < 40 anos; ver climaterio ou amenorreia-secundaria"],
        ["FSH e LH baixos ou normais + estradiol baixo", "Hipogonadismo hipogonadotrófico (hipotalâmico ou hipofisário)", "Peso, exercício, estresse, prolactina, TSH; RM de sela se sem causa funcional"],
        ["LH alto em relação ao FSH, ciclos irregulares", "Sugere SOP (não é critério diagnóstico)", "Ver sop"],
        ["Progesterona lútea média elevada (acima de cerca de 3 ng/mL ou conforme laboratório)", "Ovulação ocorreu", "Se baixa, conferir se a coleta foi na fase certa antes de concluir anovulação"],
        ["Estradiol alto + FSH baixo", "Fase folicular tardia/periovulatória, gestação ou tumor produtor de estrogênio", "Conferir dia do ciclo e beta-hCG"],
        ["Prolactina levemente elevada", "Estresse, coleta inadequada, medicamento, hipotireoidismo, macroprolactina", "Repetir em condições adequadas antes de investigar"]
      ]
    }
  ],
  fontes: [
    "FIGO — Systems for normal and abnormal uterine bleeding (Munro et al., 2018)",
    "FEBRASGO — Tratado de Ginecologia e Protocolos FEBRASGO de Ginecologia (fisiologia menstrual e propedêutica endócrina)",
    "ASRM Practice Committee — Diagnostic evaluation of the infertile female (2015) e Testing and interpreting measures of ovarian reserve (2020)",
    "International Evidence-based Guideline for the Assessment and Management of PCOS (2023)",
    "Speroff — Clinical Gynecologic Endocrinology and Infertility, 9ª ed. (2019)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

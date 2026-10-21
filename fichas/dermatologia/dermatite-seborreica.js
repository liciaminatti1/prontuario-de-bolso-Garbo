// Dermatite seborreica (adulto e lactente)
registrarFicha({
  id: "dermatite-seborreica",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Dermatite seborreica (adulto e lactente)",
  resumo: "Dermatite crônica e recorrente em áreas ricas em glândulas sebáceas (couro cabeludo, sobrancelhas, sulcos nasogenianos, orelhas, centro do tórax), com eritema e escamas amareladas oleosas, ligada à levedura Malassezia. No lactente (até cerca de 3 meses) aparece como crosta láctea e lesões nas dobras, e melhora sozinha. Adulto: antifúngico tópico; corticoide de baixa potência só nas crises.",
  palavrasChave: "dermatite seborreica caspa seborreia crosta lactea crosta de leite malassezia cetoconazol xampu creme sulfeto de selenio piritionato de zinco ciclopirox hidrocortisona oleo mineral lactente sobrancelha couro cabeludo",
  alarmes: [
    "Início súbito, grave ou extenso no adulto jovem (pensar em HIV)",
    "Lactente com eritrodermia, diarreia, baixo ganho de peso ou infecções de repetição (imunodeficiência)",
    "Lactente com lesões crostosas e purpúricas/petéquias no couro cabeludo e dobras, hepatoesplenomegalia (histiocitose de células de Langerhans)",
    "Lesões exsudativas com crostas melicéricas ou dolorosas (infecção secundária)",
    "Doença de Parkinson ou outras doenças neurológicas com quadro extenso (associação conhecida — apenas registrar)"
  ],
  conduta: [
    "Diagnóstico clínico pela localização e aspecto (escamas amareladas e oleosas)",
    "Explicar que é crônica e volta: objetivo é controle, não cura",
    "Adulto, couro cabeludo: xampu antifúngico (cetoconazol 2%) 2–3 vezes por semana, deixando agir 3–5 min, por 4 semanas; depois 1 vez por semana para manutenção",
    "Adulto, face e tronco: cetoconazol 2% creme 1–2 vezes ao dia por 2–4 semanas; nas crises intensas, hidrocortisona 1% creme por até 7 dias",
    "Crostas espessas no couro cabeludo: óleo mineral ou vaselina líquida algumas horas antes de lavar para amolecer",
    "Lactente: tranquilizar (autolimitada, sem prurido importante). Amolecer as crostas com óleo mineral 15–30 min antes do banho, lavar com xampu neutro e remover com escova macia ou pente fino. Não arrancar",
    "Lactente com lesões extensas ou inflamadas: cetoconazol 2% creme 1 vez ao dia por até 1–2 semanas, ou hidrocortisona 1% creme por poucos dias",
    "Não usar corticoide potente na face (dermatite perioral, atrofia, rosácea)"
  ],
  diferenciais: [
    "Psoríase (placas espessas, prateadas, bem delimitadas; cotovelos, joelhos, unhas)",
    "Dermatite atópica (prurido intenso; no lactente poupa a área das fraldas e acomete face e extensoras)",
    "Tinea capitis na criança (alopecia, descamação, adenopatia occipital)",
    "Rosácea, lúpus cutâneo (eritema malar que poupa sulco nasogeniano)",
    "Dermatite das fraldas por Candida (lesões satélites)",
    "Histiocitose de células de Langerhans (lactente com lesões purpúricas)"
  ],
  exames: [
    "Diagnóstico clínico; sem exames de rotina",
    "Teste rápido para HIV: adulto com quadro súbito, extenso ou refratário",
    "Exame micológico direto se suspeita de tinea"
  ],
  tratamento: [
    {
      droga: "Cetoconazol 2% xampu",
      linha: "l1",
      dose: "Aplicar no couro cabeludo úmido, fazer espuma e deixar agir 3–5 min; enxaguar",
      via: "Tópica",
      intervalo: "2–3 vezes por semana",
      duracao: "4 semanas; manutenção 1 vez por semana ou a cada 2 semanas",
      monitorizacao: "Irritação local",
      contraindicacoes: "Alergia a azólicos",
      ajustes: "Alternativas: sulfeto de selênio 2,5%, piritionato de zinco 1–2%, ciclopirox 1% xampu. Conferir REMUME"
    },
    {
      droga: "Cetoconazol 2% creme",
      linha: "l1",
      dose: "Camada fina",
      via: "Tópica",
      intervalo: "1–2 vezes ao dia",
      duracao: "2–4 semanas; depois 1–2 vezes por semana se recidiva frequente",
      monitorizacao: "Ardor local",
      contraindicacoes: "Alergia a azólicos",
      ajustes: "Face, sobrancelhas, orelhas, tórax. Lactente: 1 vez ao dia por até 1–2 semanas. Miconazol 2% creme (RENAME) é alternativa"
    },
    {
      droga: "Hidrocortisona acetato 1% creme",
      linha: "adj",
      dose: "Camada fina",
      via: "Tópica",
      intervalo: "1–2 vezes ao dia",
      duracao: "Até 7 dias nas crises (lactente: 3–5 dias)",
      monitorizacao: "Atrofia, telangiectasias, rebote",
      contraindicacoes: "Infecção cutânea não tratada",
      ajustes: "RENAME. Associar ao antifúngico na fase inflamatória; não usar de forma contínua"
    },
    {
      droga: "Corticoide de média/alta potência na face",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Causa atrofia, dermatite perioral, rosácea e rebote. Em casos refratários de face, o dermatologista pode usar tacrolimo ou pimecrolimo tópico (off-label)"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO\nUSO TÓPICO\n1. Cetoconazol 2% xampu ------------------------- 1 frasco\n   Lavar o couro cabeludo (e barba, se acometida) 3 vezes por semana: fazer espuma, deixar agir 5 minutos e enxaguar. Fazer por 4 semanas; depois, 1 vez por semana para evitar que volte.\n2. Cetoconazol 2% creme ------------------------- 1 bisnaga\n   Aplicar camada fina nas lesões do rosto, orelhas e peito 2 vezes ao dia por 4 semanas.\n3. Hidrocortisona 1% creme ---------------------- 1 bisnaga\n   Se as lesões estiverem muito vermelhas ou coçando: aplicar camada fina 2 vezes ao dia por no máximo 7 dias, junto com o item 2.\n\nLACTENTE (crosta láctea)\nUSO TÓPICO\n1. Óleo mineral --------------------------------- 1 frasco\n   Aplicar no couro cabeludo 15 a 30 minutos antes do banho para amolecer as crostas; lavar com xampu neutro infantil e soltar as crostas com escova macia, sem arrancar. Fazer 1 vez ao dia até melhorar.\n2. Se lesões vermelhas extensas ou nas dobras: cetoconazol 2% creme, camada fina 1 vez ao dia por até 14 dias.\n   (Se muito inflamado: hidrocortisona 1% creme 1 vez ao dia por até 5 dias.)"
  },
  orientacoesRetorno: [
    "É uma condição crônica, não contagiosa, que melhora e piora; estresse, frio e pouco sono costumam piorar",
    "Manter o xampu de manutenção mesmo depois de melhorar ajuda a evitar novas crises",
    "Não usar pomadas de corticoide fortes no rosto",
    "No bebê, a crosta láctea costuma sumir sozinha nos primeiros meses; não arrancar as crostas",
    "Voltar se o bebê tiver diarreia, não ganhar peso, febre, manchas roxas ou se a vermelhidão tomar o corpo todo",
    "Retornar em 4 semanas se não melhorar"
  ],
  encaminhar: [
    "Dermatologia: falha do tratamento após 4–8 semanas, dúvida diagnóstica (psoríase, lúpus), quadro extenso",
    "Pediatria/urgência: lactente com eritrodermia, diarreia e baixo ganho de peso, ou lesões purpúricas"
  ],
  fontes: [
    "Sociedade Brasileira de Dermatologia — Dermatite seborreica (orientações SBD)",
    "Clark GW, Pope SM, Jaboori KA — Diagnosis and treatment of seborrheic dermatitis. Am Fam Physician, 2015",
    "Cochrane — Topical antifungals for seborrhoeic dermatitis (Okokon EO et al., 2015) e Topical anti-inflammatory agents for seborrhoeic dermatitis of the face or scalp (Kastarinen H et al., 2014)",
    "Sociedade Brasileira de Pediatria — Dermatoses do lactente: orientações (Departamento de Dermatologia)",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

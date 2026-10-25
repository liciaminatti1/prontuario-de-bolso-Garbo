// Câncer do colo do útero e HPV (vacina e condiloma)
registrarFicha({
  id: "cancer-colo-utero",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Câncer do colo do útero, HPV e condiloma",
  resumo: "Prevenção primária (vacina HPV), manejo do condiloma acuminado na UBS, suspeita clínica de câncer do colo, estadiamento FIGO 2018, tratamento por estádio e seguimento após tratamento. Rastreio e resultados alterados do preventivo: ver rastreio-cancer e lesoes-precursoras-colo.",
  palavrasChave: "cancer do colo do utero cancer de colo carcinoma escamoso adenocarcinoma cervical hpv papilomavirus vacina hpv quadrivalente condiloma acuminado verruga genital crista de galo imiquimode podofilotoxina acido tricloroacetico ata crioterapia figo 2018 estadiamento histerectomia radical traquelectomia quimiorradioterapia braquiterapia cisplatina hidronefrose sinusorragia estenose vaginal",
  critico: {
    tempo: "Lesão visível no colo: biópsia",
    texto: "Lesão vegetante, ulcerada ou friável no colo: encaminhar para colposcopia com biópsia com prioridade, sem esperar citologia ou DNA-HPV (resultado normal não exclui câncer). Diagnóstico confirmado: tratamento em até 60 dias (Lei 12.732/2012)."
  },
  alarmes: [
    "Sinusorragia (sangramento após relação), sangramento intermenstrual ou pós-menopausa",
    "Corrimento aquoso, sanguinolento ou fétido persistente",
    "Lesão exofítica, ulcerada, friável ou endurecida no colo; colo aumentado e endurecido",
    "Dor pélvica ou lombar, edema de membro inferior, dor ciática (doença avançada)",
    "Oligúria, uremia, hidronefrose (obstrução ureteral: estádio IIIB) — PS",
    "Perda de urina ou fezes pela vagina (fístula), hematúria ou sangramento retal",
    "Sangramento vaginal volumoso (PS: tamponamento e transfusão)"
  ],
  conduta: [
    "Vacina HPV (PNI): rotina em dose única para meninas e meninos de 9 a 14 anos; grupos especiais (HIV, transplantados, oncológicos, imunossuprimidos, usuários de PrEP, vítimas de violência sexual e outros definidos pelo MS) com faixa etária e esquema próprios — conferir o calendário vigente; estratégias de resgate temporárias conforme o MS",
    "Vacina não trata infecção já existente e não substitui o rastreamento; não aplicar na gestação (adiar para o pós-parto); pode na lactação",
    "Condiloma acuminado (verruga genital, HPV 6 e 11): diagnóstico clínico; biópsia se atípico, pigmentado, endurecido, ulcerado, sem resposta ou em imunossuprimido",
    "Condiloma: oferecer testagem para HIV, sífilis e hepatites B e C; exame especular (lesões no colo e vagina) e rastreio do colo conforme a idade; examinar parcerias se possível",
    "Tratamento do condiloma: domiciliar (imiquimode ou podofilotoxina) ou no serviço (ácido tricloroacético 80–90%, crioterapia, exérese ou eletrocauterização). Recidiva é comum",
    "Gestante com condiloma: ATA, crioterapia ou exérese; imiquimode e podofilotoxina contraindicados. Condiloma não indica cesárea, exceto se obstruir o canal de parto ou risco de sangramento importante",
    "Suspeita de câncer: exame especular e toque (tamanho, extensão para vagina e paramétrios) e encaminhar para colposcopia/biópsia com prioridade",
    "Câncer confirmado: oncologia (CACON/UNACON). Estadiamento FIGO 2018: clínico + imagem (RM de pelve, TC ou PET-TC) + patologia",
    "Tratamento por estádio (tabela): doença inicial → cirurgia (conização, traquelectomia ou histerectomia radical com linfonodos; via aberta preferida para histerectomia radical); localmente avançada (IB3 a IVA) → quimiorradioterapia com cisplatina + braquiterapia; IVB → tratamento sistêmico e cuidados paliativos",
    "Na APS durante e após o tratamento: controle de dor, anemia, sintomas urinários e intestinais (cistite e retite actínicas), apoio psicológico e social",
    "Seguimento após tratamento: anamnese e exame especular/toque a cada 3–6 meses nos 2 primeiros anos, a cada 6–12 meses até 5 anos, depois anual; citologia vaginal conforme o oncologista; imagem só se sintomas",
    "Após radioterapia pélvica: dilatador vaginal e lubrificante para prevenir estenose; menopausa precoce actínica pode receber terapia hormonal (avaliar com oncologista; geralmente permitida no carcinoma escamoso); avaliar linfedema",
    "Tabagismo: oferecer tratamento (piora a persistência do HPV e o prognóstico)"
  ],
  exames: [
    "Suspeita: 'Colposcopia com biópsia — lesão visível em colo uterino (descrever) — PRIORIDADE'",
    "Condiloma: 'Teste rápido para HIV, sífilis, hepatite B e hepatite C'",
    "Estadiamento (oncologia): RM de pelve; TC de tórax, abdome e pelve ou PET-TC; hemograma, creatinina (hidronefrose), função hepática",
    "Cistoscopia ou retossigmoidoscopia se suspeita de invasão de bexiga ou reto",
    "Creatinina e USG de rins e vias urinárias se dor lombar, oligúria ou edema (hidronefrose)"
  ],
  diferenciais: [
    "Cervicite, ectrópio, pólipo endocervical, endometriose cervical",
    "Condiloma plano da sífilis secundária, molusco contagioso, pápulas perláceas, glândulas sebáceas ectópicas",
    "Câncer de endométrio com extensão ao colo",
    "Lesão de vagina ou vulva (VIN, câncer)",
    "Úlcera cervical por herpes, sífilis ou trauma"
  ],
  prescricao: {
    ambulatorial: "CONDILOMA ACUMINADO — TRATAMENTO DOMICILIAR (não gestante)\nUSO TÓPICO\n1. Imiquimode 50 mg/g (5%) creme ------------------ 1 caixa (sachês)\n   Aplicar fina camada sobre as verrugas à noite, 3 vezes por semana (dias alternados). Lavar com água e sabão 6 a 10 horas depois. Usar até as lesões sumirem, no máximo 16 semanas.\n   OU\n2. Podofilotoxina 0,15% creme ------------------------ 1 bisnaga\n   Aplicar sobre as verrugas 2 vezes ao dia por 3 dias seguidos, parar 4 dias. Repetir o ciclo por até 4 semanas. Área máxima de 10 cm².\n\nTRATAMENTO NO SERVIÇO (inclusive gestante)\n3. Ácido tricloroacético 80–90% — aplicar pequena quantidade só sobre a lesão, com proteção da pele ao redor (vaselina), 1 vez por semana, por até 8–10 semanas.\n\nSOLICITAÇÃO\n4. Testes rápidos para HIV, sífilis, hepatite B e hepatite C.\n5. Colposcopia com biópsia — lesão suspeita em colo uterino (PRIORIDADE), quando houver."
  },
  orientacoesRetorno: [
    "O HPV é muito comum; a vacina protege contra os tipos que mais causam câncer e verrugas — vacinar filhos e filhas de 9 a 14 anos",
    "Mesmo vacinada, fazer o exame preventivo na idade indicada",
    "Verruga genital tem tratamento, mas pode voltar; usar preservativo e não depilar ou raspar sobre as lesões",
    "Pomada para verruga: usar só sobre a lesão; parar e voltar se feridas, ardor forte ou sangramento; não usar se estiver grávida",
    "Procurar atendimento se sangramento após a relação, sangramento fora da menstruação ou depois da menopausa, corrimento com cheiro forte ou dor na pelve",
    "Após o tratamento do câncer: manter as consultas; voltar se sangramento, dor, inchaço nas pernas, dificuldade para urinar ou evacuar",
    "Parar de fumar ajuda o corpo a eliminar o HPV"
  ],
  encaminhar: [
    "Colposcopia com prioridade: lesão visível suspeita, sinusorragia persistente (rastreio alterado: ver lesoes-precursoras-colo)",
    "Oncologia (CACON/UNACON): câncer confirmado — prazo legal de 60 dias",
    "Ginecologia/dermatologia: condiloma extenso, intrauterino/cervical, refratário, em imunossuprimido, atípico (biópsia)",
    "Proctologia: condiloma perianal extenso ou intra-anal",
    "PS: sangramento volumoso, insuficiência renal obstrutiva, dor não controlada"
  ],
  tabelas: [
    {
      titulo: "Estadiamento FIGO 2018 e tratamento usual",
      colunas: ["Estádio", "Definição", "Tratamento usual"],
      linhas: [
        ["IA1", "Invasão só microscópica < 3 mm de profundidade", "Conização com margens livres (preserva fertilidade) ou histerectomia simples; linfonodos se invasão linfovascular"],
        ["IA2", "Invasão microscópica ≥ 3 e < 5 mm", "Conização/traquelectomia ou histerectomia radical modificada + avaliação linfonodal"],
        ["IB1 / IB2", "Invasão ≥ 5 mm restrita ao colo: < 2 cm / ≥ 2 e < 4 cm", "Histerectomia radical + linfadenectomia pélvica (traquelectomia radical em IB1 selecionado) ou quimiorradioterapia"],
        ["IB3", "Restrito ao colo, ≥ 4 cm", "Quimiorradioterapia + braquiterapia"],
        ["IIA1 / IIA2", "2/3 superiores da vagina, sem paramétrio: < 4 cm / ≥ 4 cm", "IIA1: cirurgia ou quimiorradioterapia; IIA2: quimiorradioterapia"],
        ["IIB", "Paramétrio, sem chegar à parede pélvica", "Quimiorradioterapia + braquiterapia"],
        ["IIIA / IIIB", "1/3 inferior da vagina / parede pélvica ou hidronefrose", "Quimiorradioterapia + braquiterapia (derivação urinária se obstrução)"],
        ["IIIC1 / IIIC2", "Linfonodos pélvicos / para-aórticos (r = imagem, p = patologia)", "Quimiorradioterapia com campo ampliado"],
        ["IVA / IVB", "Mucosa de bexiga ou reto / metástase a distância", "IVA: quimiorradioterapia; IVB: quimioterapia sistêmica (± terapia-alvo/imunoterapia) e paliação"]
      ],
      nota: "Conferir o protocolo oncológico do serviço; a decisão é da oncologia."
    }
  ],
  fontes: [
    "FIGO — Revised staging for carcinoma of the cervix uteri (Bhatla et al., 2018; corrigenda 2019) e Cancer Report 2021",
    "Ministério da Saúde — Diretrizes Diagnósticas e Terapêuticas do Câncer do Colo do Útero (Portaria vigente) e Lei 12.732/2012",
    "INCA — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (2024–2025)",
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022): verrugas anogenitais",
    "Ministério da Saúde/PNI — Informes técnicos da vacina HPV (dose única, 2024) e Calendário Nacional de Vacinação vigente",
    "ESGO/ESTRO/ESP — Guidelines for the management of patients with cervical cancer (2023); NCCN Cervical Cancer (versão vigente)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

// Úlceras genitais — abordagem sindrômica
registrarFicha({
  id: "ulceras-genitais",
  especialidade: "infectologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Úlcera genital: herpes, sífilis, cancroide, LGV e donovanose",
  resumo: "Lesão ulcerada anogenital de provável transmissão sexual. Principais causas: herpes genital e sífilis primária; menos comuns: cancroide, linfogranuloma venéreo (LGV) e donovanose. Tratar no mesmo atendimento pelo fluxograma do Ministério da Saúde.",
  palavrasChave: "ulcera genital ferida genital herpes genital hsv cancro duro sifilis primaria cancroide cancro mole haemophilus ducreyi lgv linfogranuloma venereo bubao donovanose granuloma inguinal aciclovir azitromicina penicilina benzatina doxiciclina",
  critico: {
    tempo: "Tratar sífilis no mesmo dia",
    texto: "Sem confirmação laboratorial e sem quadro típico de herpes, tratar sífilis e cancroide (penicilina benzatina 2,4 milhões UI IM + azitromicina 1 g VO). Vesículas ou história de recorrência: aciclovir."
  },
  alarmes: [
    "Herpes extenso, disseminado ou com sintomas sistêmicos (imunossupressão, meningite, retenção urinária)",
    "Gestante com herpes primário no 3º trimestre ou lesão ativa perto do parto",
    "Bubão flutuante (LGV/cancroide): aspirar, não incisar",
    "Úlcera que não cicatriza em 4 semanas apesar do tratamento (biópsia: neoplasia, donovanose)",
    "Proctite (dor anal, secreção, tenesmo) em sexo anal receptivo (LGV)",
    "Criança com úlcera genital (avaliar violência sexual)"
  ],
  conduta: [
    "Anamnese: tempo de evolução, dor (herpes e cancroide doem; sífilis e donovanose em geral não), vesículas prévias, recorrências, parcerias",
    "Exame: número, borda, fundo, endurecimento, linfonodos inguinais (bubão)",
    "Testes rápidos no mesmo atendimento: sífilis, HIV, hepatites B e C. Teste rápido de sífilis reagente: tratar sífilis e coletar VDRL",
    "Vesículas agrupadas ou úlceras rasas dolorosas, ou história de lesões semelhantes: tratar herpes (aciclovir)",
    "Úlcera sem quadro típico de herpes, sem laboratório: penicilina benzatina 2,4 milhões UI IM + azitromicina 1 g VO dose única (sífilis + cancroide)",
    "Lesão com mais de 4 semanas: acrescentar tratamento de donovanose e biopsiar",
    "Bubão inguinal com ou sem úlcera: tratar LGV (doxiciclina 21 dias)",
    "Tratar parcerias: sífilis e cancroide (mesmo esquema); herpes só se sintomática",
    "Notificar sífilis (adquirida/gestante). Oferecer PrEP, preservativos e vacinas"
  ],
  exames: [
    "Testes rápidos: sífilis (treponêmico), HIV, HBsAg, anti-HCV — no atendimento",
    "VDRL ou RPR (pedido: teste não treponêmico — VDRL quantitativo) se teste rápido de sífilis reagente; repetir em 30 dias se negativo e lesão suspeita (janela)",
    "Pesquisa direta de Treponema (campo escuro) ou PCR para HSV/multiplex de úlcera, se disponível",
    "Biópsia: úlcera > 4 semanas ou sem resposta (donovanose, neoplasia)",
    "Beta-hCG em mulher em idade fértil (muda a escolha de drogas)"
  ],
  diferenciais: [
    "Sífilis primária (cancro duro: úlcera única, indolor, base limpa e endurecida)",
    "Herpes genital (vesículas agrupadas, úlceras rasas dolorosas, recorrente)",
    "Cancroide (múltiplas, dolorosas, fundo sujo, bordas irregulares, bubão que fistuliza por orifício único)",
    "LGV (úlcera fugaz; bubão inguinal doloroso que fistuliza por múltiplos orifícios; proctite)",
    "Donovanose (úlcera indolor, vermelho-vivo, friável, crônica, sem linfonodo)",
    "Mpox, doença de Behçet, aftas, erupção fixa por droga, trauma, carcinoma espinocelular"
  ],
  tratamento: [
    { droga: "Aciclovir — 1º episódio de herpes", linha: "l1", dose: "400 mg (2 comprimidos de 200 mg)", via: "VO", intervalo: "8/8 h", duracao: "7–10 dias", monitorizacao: "Função renal em idosos", contraindicacoes: "—", ajustes: "Ajustar na DRC. Gestação: pode usar. Herpes grave ou disseminado: aciclovir 5–10 mg/kg IV 8/8 h (internar)" },
    { droga: "Aciclovir — recorrência", linha: "l1", dose: "400 mg", via: "VO", intervalo: "8/8 h", duracao: "5 dias (iniciar nos pródromos)", monitorizacao: "—", contraindicacoes: "—", ajustes: "Supressão (≥ 6 recorrências/ano): 400 mg 12/12 h por até 6 meses, reavaliar. Gestante com herpes: supressão a partir de 36 semanas" },
    { droga: "Penicilina G benzatina (sífilis)", linha: "l1", dose: "2,4 milhões UI (1,2 milhão em cada glúteo)", via: "IM", intervalo: "Dose única (sífilis recente)", duracao: "—", monitorizacao: "Reação de Jarisch-Herxheimer", contraindicacoes: "Anafilaxia a penicilina (dessensibilizar na gestante)", ajustes: "Ver ficha Sífilis" },
    { droga: "Azitromicina (cancroide)", linha: "l1", dose: "1 g", via: "VO", intervalo: "Dose única", duracao: "—", monitorizacao: "—", contraindicacoes: "—", ajustes: "Alternativa: ceftriaxona 250 mg IM dose única" },
    { droga: "Doxiciclina (LGV)", linha: "l1", dose: "100 mg", via: "VO", intervalo: "12/12 h", duracao: "21 dias", monitorizacao: "Esofagite", contraindicacoes: "Gestação", ajustes: "Gestante: azitromicina 1 g VO 1 vez por semana por 3 semanas. Bubão flutuante: aspiração por agulha" },
    { droga: "Azitromicina (donovanose)", linha: "l1", dose: "1 g", via: "VO", intervalo: "1 vez por semana", duracao: "Mínimo 3 semanas ou até cicatrização completa", monitorizacao: "Resposta clínica", contraindicacoes: "—", ajustes: "Alternativa: doxiciclina 100 mg 12/12 h por no mínimo 21 dias ou até cicatrizar" }
  ],
  prescricao: {
    ambulatorial: "ÚLCERA SEM QUADRO TÍPICO DE HERPES (sífilis + cancroide)\nUSO INTRAMUSCULAR\n1. Penicilina G benzatina 1.200.000 UI ------------ 2 frascos-ampola\n   Aplicar 1.200.000 UI IM profundo em cada glúteo (total 2.400.000 UI), dose única, na unidade.\nUSO ORAL\n2. Azitromicina 500 mg ---------------------------- 2 comprimidos\n   Tomar 2 comprimidos juntos, em dose única.\n\nHERPES GENITAL — 1º EPISÓDIO — USO ORAL\n1. Aciclovir 200 mg ------------------------------- 60 comprimidos\n   Tomar 2 comprimidos de 8 em 8 horas por 10 dias.\nHERPES — RECORRÊNCIA: Aciclovir 200 mg, 2 comprimidos de 8 em 8 horas por 5 dias (30 comprimidos).\n\nBUBÃO / LGV — USO ORAL\n1. Doxiciclina 100 mg ----------------------------- 42 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas por 21 dias, com copo cheio de água, sentado.\n\nLESÃO > 4 SEMANAS (DONOVANOSE) — USO ORAL\n1. Azitromicina 500 mg ---------------------------- 6 comprimidos (repetir até cicatrizar)\n   Tomar 2 comprimidos juntos 1 vez por semana por no mínimo 3 semanas, até a ferida fechar.\n\nSINTOMÁTICOS E CUIDADOS LOCAIS\n- Dipirona 500 mg: 1 a 2 comprimidos de 6 em 6 horas se dor.\n- Lavar com água e sabão neutro 2 vezes ao dia; manter seco."
  },
  orientacoesRetorno: [
    "Sem relações sexuais até a ferida cicatrizar e a parceria ser tratada; depois, usar preservativo",
    "A parceria deve vir à unidade para testar e tratar",
    "Herpes pode voltar: começar o remédio logo nos primeiros sinais (formigamento, ardor)",
    "Voltar em 7 dias para reavaliar a ferida; antes se febre, dor forte, dificuldade para urinar, íngua que amolece",
    "Retornar para o VDRL de controle conforme agendado (sífilis)"
  ],
  encaminhar: [
    "PS/internação: herpes disseminado, meningite, retenção urinária, imunossuprimido grave",
    "Infectologia/dermatologia: úlcera sem diagnóstico após 4 semanas, herpes recorrente refratário",
    "Obstetrícia: gestante com herpes genital (plano de parto)"
  ],
  fontes: [
    "Ministério da Saúde — PCDT para Atenção Integral às Pessoas com IST (2022); capítulo Úlceras genitais (Epidemiol Serv Saúde, 2021)",
    "CDC — Sexually Transmitted Infections Treatment Guidelines (2021)",
    "OMS — Recommendations for the treatment of Neisseria gonorrhoeae, Chlamydia trachomatis and Treponema pallidum (2024)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

// Curativos, escolha de cobertura e desbridamento instrumental à beira-leito
registrarFicha({
  id: "curativos-desbridamento",
  especialidade: "procedimentos",
  caminho: "ubs",
  publico: "ambos",
  formato: "procedimento",
  titulo: "Curativos, coberturas e desbridamento à beira-leito",
  resumo: "Limpeza de feridas agudas e crônicas, escolha da cobertura conforme o tipo de tecido e o exsudato, e desbridamento instrumental conservador à beira-leito (UBS e PS).",
  palavrasChave: "curativo cobertura ferida cronica ulcera venosa ulcera por pressao lesao por pressao pe diabetico desbridamento instrumental conservador necrose esfacelo fibrina tecido de granulacao age acidos graxos essenciais hidrocoloide alginato de calcio hidrogel espuma carvao ativado prata papaina sulfadiazina de prata time",
  critico: {
    tempo: "Avaliar perfusão antes de desbridar",
    texto: "Antes de desbridar ferida de membro inferior, palpar pulsos e, se possível, medir o ITB. Necrose seca e estável em membro isquêmico não deve ser desbridada: encaminhar à cirurgia vascular."
  },
  alarmes: [
    "Celulite que avança, febre, crepitação, dor desproporcional ou odor intenso: infecção grave — antibiótico sistêmico e avaliação cirúrgica",
    "Pé diabético com osso palpável, abscesso ou gangrena: encaminhar com urgência (ver pe-diabetico)",
    "Membro frio, pálido, sem pulsos, com dor em repouso: isquemia — não desbridar; cirurgia vascular",
    "Sangramento ativo durante o desbridamento que não para com compressão",
    "Ferida que não melhora em 4–6 semanas de tratamento adequado ou com bordas vegetantes: biópsia (excluir neoplasia)"
  ],
  indicacoes: [
    "Feridas agudas (escoriações, lacerações não suturadas, áreas doadoras, pós-drenagem) e queimaduras superficiais",
    "Feridas crônicas: úlcera venosa, lesão por pressão, pé diabético, úlcera arterial (só com avaliação vascular), feridas cirúrgicas deiscentes",
    "Desbridamento instrumental conservador: tecido desvitalizado (esfacelo, necrose úmida, necrose seca amolecida) que atrasa a cicatrização ou mantém infecção"
  ],
  contraindicacoes: [
    "Desbridamento instrumental: necrose seca estável em membro isquêmico (ITB baixo, pulsos ausentes) — manter seca e encaminhar",
    "Pioderma gangrenoso (bordas violáceas, dor intensa, piora com trauma): não desbridar",
    "Coagulopatia, plaquetopenia grave ou anticoagulação com INR elevado (relativa)",
    "Ferida próxima a tendões, articulações, vasos ou nervos expostos, ou sem limite claro entre tecido vivo e morto: desbridamento cirúrgico",
    "Profissional sem treinamento: preferir desbridamento autolítico ou enzimático",
    "Ferida neoplásica (sangra fácil): curativo de controle de sintomas, sem desbridar"
  ],
  materiais: [
    "Luvas de procedimento (limpeza) e luvas estéreis (desbridamento), avental, óculos e máscara",
    "Kit de curativo estéril: pinças anatômica e dente de rato, tesoura; para desbridar: bisturi com lâmina nº 15 ou cureta e tesoura de Íris",
    "SF 0,9% morno (ou água potável em feridas agudas), seringa de 20 mL com agulha 40 × 12 para irrigação",
    "Gazes estéreis, compressas, chumaço",
    "Coberturas conforme o tipo de ferida (tabela): AGE, hidrogel, hidrocoloide, alginato de cálcio, espuma, carvão ativado com prata, papaína, sulfadiazina de prata 1%",
    "Enfaixamento: atadura de crepom; bota de Unna ou terapia compressiva (úlcera venosa, só com ITB ≥ 0,8)",
    "Régua descartável ou papel milimetrado e câmera para registro da ferida",
    "Anestesia: lidocaína gel 2% tópica para desbridamento; lidocaína injetável se necessário"
  ],
  checagemAntes: [
    "Causa da ferida (venosa, arterial, pressão, neuropática, traumática, cirúrgica) e tempo de evolução",
    "Perfusão: pulsos pediosos e tibiais posteriores; ITB quando disponível (< 0,9 sugere doença arterial; < 0,5 isquemia grave)",
    "Sinais de infecção local e sistêmica",
    "Avaliar a ferida (TIME): Tecido (granulação, esfacelo, necrose), Infecção/Inflamação, Umidade (exsudato), bordas (Edge)",
    "Medir comprimento × largura × profundidade, descrever leito, bordas, pele ao redor, odor e exsudato",
    "Comorbidades: diabetes (glicemia), desnutrição, tabagismo, corticoide, anticoagulante",
    "Dor: analgesia 30–60 min antes do curativo se necessário",
    "Situação vacinal do tétano em feridas abertas"
  ],
  passos: [
    { etapa: "Preparo", itens: [
      "Higienizar as mãos, explicar o procedimento, posicionar com conforto e privacidade",
      "Retirar o curativo anterior com luvas de procedimento (umedecer com SF se aderido); observar exsudato e odor; descartar",
      "Trocar de luvas e abrir o material estéril"
    ] },
    { etapa: "Limpeza", itens: [
      "Ferida limpa/granulando: irrigar com SF 0,9% morno em jato (seringa 20 mL com agulha 40 × 12), sem esfregar o leito",
      "Ferida com esfacelo, biofilme ou infectada: irrigar com mais volume e limpar com gaze; soluções com PHMB (polihexanida) podem ser usadas em feridas crônicas com biofilme, conforme protocolo local",
      "Limpar a pele ao redor com gaze e SF, do mais limpo para o mais sujo; secar a pele ao redor (não o leito)",
      "Evitar antissépticos citotóxicos dentro da ferida em granulação (PVPI, água oxigenada, clorexidina alcoólica)"
    ] },
    { etapa: "Desbridamento instrumental conservador", itens: [
      "Indicação confirmada e perfusão adequada; anestesia tópica com lidocaína gel 2% por 15–20 min ou infiltração nas bordas",
      "Segurar o tecido desvitalizado com pinça dente de rato e cortar com bisturi nº 15 ou tesoura de Íris, rente ao tecido viável",
      "Técnicas: cover (necrose seca: escarificar em quadriculado para permitir ação do autolítico/enzimático), slice (fatias de esfacelo) ou curetagem",
      "Parar ao chegar em tecido vermelho e sangrante, em tecido doloroso ou em estruturas nobres; remover em várias sessões se necessário",
      "Hemostasia por compressão por 5–10 min; alginato de cálcio ajuda no sangramento leve",
      "Alternativas: autolítico (hidrogel, hidrocoloide), enzimático (papaína 4–10%, colagenase) — mais lentos e indolores"
    ] },
    { etapa: "Cobertura e fechamento", itens: [
      "Escolher a cobertura pela tabela (tecido e quantidade de exsudato); recortar para cobrir o leito sem sobrepor muito a pele íntegra",
      "Proteger a pele perilesional (creme barreira, película) se macerada",
      "Cobertura secundária (gaze, chumaço) e fixação sem garrotear; enfaixar de distal para proximal",
      "Úlcera venosa com ITB ≥ 0,8: terapia compressiva (bota de Unna ou faixa) — é o tratamento principal",
      "Datar o curativo e programar a troca (tabela)"
    ] }
  ],
  conferirDepois: [
    "Hemostasia e conforto do paciente",
    "Perfusão distal após enfaixamento ou compressão (cor, temperatura, enchimento capilar)",
    "Medidas e fotografia registradas para comparar evolução",
    "Necessidade de antibiótico sistêmico (só com sinais de infecção) e de profilaxia de tétano",
    "Plano de troca, local (domicílio, UBS) e quem fará",
    "Tratar a causa: compressão (venosa), descompressão/mudança de decúbito (pressão), descarga do pé e glicemia (diabético), revascularização (arterial)"
  ],
  complicacoes: [
    "Sangramento: compressão, alginato de cálcio; se arterial ou persistente, sutura hemostática ou cirurgia",
    "Dor intensa: pausar, anestesia adicional; preferir desbridamento autolítico",
    "Infecção/celulite: antibiótico sistêmico (ver celulite-erisipela e pe-diabetico); cultura de tecido profundo após limpeza (não swab superficial)",
    "Maceração da pele ao redor: cobertura mais absorvente, trocas mais frequentes, barreira",
    "Hipergranulação: cobertura de espuma com leve compressão; nitrato de prata em bastão conforme protocolo",
    "Dermatite de contato à cobertura ou adesivo: trocar o produto",
    "Ferida que não evolui: rever causa, perfusão, infecção, nutrição; biópsia se atípica"
  ],
  tabelas: [
    {
      titulo: "Escolha de cobertura pelo tipo de ferida",
      colunas: ["Ferida / tecido", "Exsudato", "Cobertura sugerida", "Troca"],
      linhas: [
        ["Granulação limpa", "Pouco", "AGE (ácidos graxos essenciais) com gaze não aderente; hidrocoloide", "AGE: diária; hidrocoloide: até 7 dias ou se descolar"],
        ["Granulação limpa", "Moderado a muito", "Espuma de poliuretano; alginato de cálcio", "Quando saturar (em geral 2–5 dias)"],
        ["Esfacelo / necrose úmida", "Pouco", "Hidrogel (desbridamento autolítico) ou papaína 4–6%", "1–3 dias"],
        ["Esfacelo / necrose úmida", "Muito", "Alginato de cálcio; papaína 6–10%", "Diária ou quando saturar"],
        ["Necrose seca (escara) com boa perfusão", "Seco", "Hidrogel ou papaína 10% após escarificação; desbridamento instrumental", "Diária"],
        ["Necrose seca em membro isquêmico", "Seco", "Manter seca: antisséptico (PVPI/clorexidina) e gaze; encaminhar à vascular", "Diária"],
        ["Ferida infectada ou com odor", "Moderado a muito", "Carvão ativado com prata; alginato com prata; tratar infecção sistêmica se indicado", "Conforme saturação (até 7 dias carvão)"],
        ["Queimadura de 2º grau superficial", "Variável", "Sulfadiazina de prata 1% (troca diária) ou cobertura com prata/hidrofibra (ver queimaduras)", "Diária (sulfadiazina)"],
        ["Escoriação e ferida aguda superficial", "Pouco", "Gaze com vaselina ou AGE; manter úmida e protegida", "Diária"]
      ],
      nota: "Disponibilidade varia: muitas UBS têm AGE, papaína, hidrogel, sulfadiazina de prata e alginato; consulte o protocolo municipal de feridas. Princípio: manter o leito úmido, mas não encharcado, e a pele ao redor seca."
    }
  ],
  documentacao: "Procedimento: curativo [e desbridamento instrumental conservador].\nFerida: [etiologia] em [local], [ ] × [ ] × [ ] cm. Leito: [ ]% granulação, [ ]% esfacelo, [ ]% necrose. Exsudato: [ausente/pouco/moderado/muito], [seroso/purulento]. Odor: [ ]. Bordas: [ ]. Pele perilesional: [ ].\nPulsos distais: [ ]. ITB: [ ]. Sinais de infecção: [não / sim: descrever].\nLimpeza com SF 0,9% em jato.\nDesbridamento: [não / instrumental conservador com [bisturi/tesoura/cureta] após [lidocaína gel], removido [esfacelo/necrose], sangramento [ ], hemostasia por compressão].\nCobertura primária: [ ]. Secundária: [ ]. Compressão: [ ].\nPróxima troca: [data], [local].\nFotografia registrada: [sim/não].\nResponsável: [nome, registro profissional].",
  orientacoesRetorno: [
    "Não molhe o curativo no banho, a não ser que a equipe tenha liberado; proteja com saco plástico",
    "Não coloque pomadas, pó, açúcar ou receitas caseiras na ferida",
    "Mantenha a perna elevada quando sentado ou deitado (úlcera de perna) e use a compressão como orientado",
    "Coma bem, com proteínas (carne, ovo, feijão, leite); controle o açúcar se for diabético; evite fumar",
    "Volte antes da data se o curativo vazar, soltar ou cheirar mal, se aparecer vermelhidão ao redor, febre, dor forte, ou se o pé ficar frio, roxo ou dormente"
  ],
  relacionadas: ["feridas-escoriacoes", "pe-diabetico", "insuficiencia-venosa", "queimaduras", "celulite-erisipela", "tetano-profilaxia"],
  fontes: [
    "Ministério da Saúde — Manual do pé diabético: estratégias para o cuidado da pessoa com doença crônica (2016)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 30: Procedimentos (2011): curativos",
    "SOBEST/SOBENFeE — Classificação das lesões por pressão: consenso NPIAP 2016 adaptado (2016) e Guia NPIAP/EPUAP/PPPIA (2019)",
    "IWGDF — Guidelines on the prevention and management of diabetes-related foot disease (2023)",
    "International Wound Infection Institute — Wound Infection in Clinical Practice (2022)",
    "COFEN — Resolução nº 567/2018: atuação da enfermagem no cuidado às feridas (desbridamento instrumental conservador)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

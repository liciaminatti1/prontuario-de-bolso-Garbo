// Alimentação do lactente: aleitamento materno e alimentação complementar
registrarFicha({
  id: "alimentacao-lactente",
  especialidade: "pediatria",
  caminho: "ubs",
  publico: "pediatrico",
  formato: "curto",
  titulo: "Alimentação do lactente: aleitamento materno e alimentação complementar",
  resumo: "Aleitamento materno exclusivo até 6 meses e continuado até 2 anos ou mais; contraindicações reais e falsas; quando e como usar fórmula; introdução da alimentação complementar segundo o Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (MS 2019) e a SBP. Dificuldades da mamada, ordenha e armazenamento: ver ficha amamentacao-problemas.",
  palavrasChave: "aleitamento materno exclusivo amamentacao leite materno alimentacao complementar introducao alimentar papinha comida de bebe guia alimentar menores de 2 anos formula infantil leite de vaca blw mel acucar ultraprocessados contraindicacao amamentacao hiv htlv galactosemia",
  alarmes: [
    "Perda de peso > 10% do nascimento, não recupera o peso de nascimento até 10–14 dias, menos de 6 fraldas molhadas/dia após o 5º dia",
    "RN sonolento que não acorda para mamar, icterícia intensa, sinais de desidratação",
    "Curva de peso cruzando linhas para baixo ou ganho ruim após introdução alimentar",
    "Engasgos frequentes, tosse ou cianose ao comer (distúrbio de deglutição)",
    "Vômitos em jato, sangue nas fezes, urticária ou vômitos após um alimento novo (alergia alimentar)",
    "Fórmula preparada diluída demais ou concentrada demais, uso de leite de vaca/composto em < 1 ano por falta de recursos (risco nutricional e social)"
  ],
  conduta: [
    "Perguntar como a criança se alimenta hoje, observar uma mamada quando houver queixa (pega, posição, sucção) — técnica e problemas: ver ficha amamentacao-problemas",
    "0–6 meses: aleitamento materno exclusivo, em livre demanda (8–12 mamadas/dia no início), sem água, chás, sucos ou outros leites",
    "Conferir contraindicações reais (tabela); a maioria das doenças e medicamentos maternos NÃO impede a amamentação",
    "Sem leite materno (contraindicação ou escolha informada): fórmula infantil de partida até 6 meses, preparada exatamente conforme o rótulo, oferecida em copinho ou mamadeira higienizada; orientar não usar leite de vaca integral antes de 12 meses (SBP)",
    "A partir de 6 meses (não antes de 4 meses nem depois de 6 sem motivo): alimentação complementar com comida de verdade, mantendo o leite materno",
    "Usar os 12 passos do Guia Alimentar (MS 2019): comida da família, sem sal em excesso, sem açúcar até 2 anos, sem ultraprocessados, sem mel até 1 ano, alimentação responsiva (respeitar sinais de fome e saciedade)",
    "Introduzir alimentos alergênicos (ovo, peixe, amendoim em pasta, trigo) a partir dos 6 meses sem atraso, um de cada vez",
    "Prescrever vitamina D e ferro profilático conforme a idade (ver ficha puericultura)",
    "Orientar direitos da mãe que trabalha (licença-maternidade, 2 pausas de 30 min para amamentar até 6 meses — CLT art. 396) e ordenha para quando voltar ao trabalho"
  ],
  exames: [
    "Não há exame de rotina para avaliar alimentação; usar o ganho de peso nas curvas da Caderneta",
    "Hemograma e ferritina se suspeita de anemia (ver ficha anemia-ferropriva-crianca)",
    "Mãe com sorologia desconhecida para HIV antes de amamentar: teste rápido de HIV (e sífilis, hepatite B) na maternidade ou UBS"
  ],
  encaminhar: [
    "Banco de Leite Humano / grupo de apoio: dificuldade persistente na amamentação, prematuro, relactação",
    "Nutrição/pediatria: ganho de peso inadequado apesar das orientações, dieta restritiva (vegana), alergia alimentar confirmada",
    "Fonoaudiologia: dificuldade de sucção ou deglutição, frênulo lingual com impacto na mamada",
    "Serviço social/CRAS: insegurança alimentar, dificuldade de comprar fórmula quando indicada (há programas municipais/estaduais de fórmula para filhos de mães com HIV/HTLV)"
  ],
  tabelas: [
    {
      titulo: "Amamentação: contraindicações reais x situações que NÃO contraindicam",
      colunas: ["Situação", "Conduta"],
      linhas: [
        ["Mãe com HIV", "Contraindicada no Brasil (MS): fórmula infantil fornecida pelo SUS; inibir lactação (cabergolina 1 mg VO dose única)"],
        ["Mãe com HTLV-1/2", "Contraindicada (MS): fórmula infantil; inibir lactação"],
        ["Galactosemia clássica no bebê", "Contraindicada: fórmula sem lactose específica"],
        ["Fenilcetonúria ou doença da urina do xarope de bordo no bebê", "Amamentação parcial possível com fórmula especial e controle no serviço de referência"],
        ["Quimioterápicos, radiofármacos (terapia), alguns imunossupressores e drogas ilícitas (crack, cocaína)", "Suspender enquanto durar o uso (temporária para radiofármaco diagnóstico); consultar a ficha medicamentos-gestacao-lactacao ou e-lactancia"],
        ["Herpes simples com lesão na mama", "Não amamentar na mama afetada até a cicatrização; pode na outra, cobrindo a lesão"],
        ["Varicela materna de 5 dias antes a 2 dias depois do parto", "Separar temporariamente e oferecer leite ordenhado; imunoglobulina para o RN"],
        ["Tuberculose pulmonar bacilífera", "Pode amamentar com máscara cirúrgica; mãe em tratamento; RN recebe quimioprofilaxia conforme protocolo de TB"],
        ["Hepatite B", "Pode amamentar (RN com vacina + imunoglobulina nas primeiras 12 h)"],
        ["Hepatite C", "Pode amamentar; suspender temporariamente se fissura com sangramento"],
        ["Febre, gripe, covid-19, dengue, mastite, cirurgia com anestesia, tabagismo", "Pode amamentar (higiene das mãos, máscara se respiratória; tabagista: não fumar perto do bebê)"],
        ["Maioria dos antibióticos, analgésicos, anti-hipertensivos, antidepressivos (sertralina), anticoncepcional só de progestágeno", "Compatíveis; conferir na ficha medicamentos-gestacao-lactacao"]
      ],
      nota: "Álcool: evitar; se consumir ocasionalmente, aguardar cerca de 2 h por dose antes de amamentar. Vacina febre amarela em lactante de criança < 6 meses: adiar a vacina ou, se indispensável, suspender a amamentação por 10 dias (ordenhar e descartar), conforme o MS."
    },
    {
      titulo: "Alimentação complementar por idade (Guia Alimentar MS 2019)",
      colunas: ["Idade", "Refeições", "Consistência e quantidade"],
      linhas: [
        ["0–6 meses", "Leite materno exclusivo em livre demanda", "Nada além do leite materno (nem água ou chá)"],
        ["6 meses", "Leite materno + almoço (ou jantar) + 2 lanches de fruta", "Amassada com garfo (nunca liquidificada ou peneirada); começar com 2–3 colheres de sopa e aumentar conforme a aceitação"],
        ["7–8 meses", "Leite materno + almoço + jantar + 2 lanches de fruta", "Amassada, com pedaços pequenos e macios; cerca de 3–4 colheres de sopa por refeição"],
        ["9–11 meses", "Igual, aumentando a quantidade", "Pedaços pequenos, picados, alimentos que a criança pega com a mão; cerca de 4–5 colheres de sopa"],
        ["12–24 meses", "Café da manhã, lanche, almoço, lanche, jantar + leite materno", "Comida da família, em pedaços; cerca de 5–6 colheres de sopa por refeição"]
      ],
      nota: "Refeição principal: cereal ou tubérculo + feijão (leguminosa) + carne ou ovo + legumes e verduras. Água filtrada/fervida a partir dos 6 meses. Quantidades são referência: respeitar fome e saciedade. Não oferecer: açúcar e preparações com açúcar até 2 anos; mel até 1 ano (botulismo); ultraprocessados (biscoito recheado, salgadinho, refrigerante, embutidos, suco de caixinha, achocolatado); suco de fruta antes de 1 ano. Alimentos redondos e duros (uva inteira, amendoim inteiro, pipoca) têm risco de engasgo: cortar no comprimento ou evitar."
    },
    {
      titulo: "Os 12 passos para alimentação saudável da criança < 2 anos (MS 2019)",
      colunas: ["Passo", "Orientação"],
      linhas: [
        ["1", "Amamentar até 2 anos ou mais, oferecendo somente leite materno até 6 meses"],
        ["2", "Oferecer alimentos in natura ou minimamente processados, além do leite materno, a partir dos 6 meses"],
        ["3", "Oferecer água própria para consumo em vez de sucos, refrigerantes e outras bebidas açucaradas"],
        ["4", "Oferecer a comida amassada quando a criança começar a comer outros alimentos além do leite materno"],
        ["5", "Não oferecer açúcar nem preparações ou produtos que contenham açúcar até 2 anos"],
        ["6", "Não oferecer alimentos ultraprocessados"],
        ["7", "Cozinhar a mesma comida para a criança e para a família"],
        ["8", "Zelar para que a hora da alimentação seja um momento de experiências positivas, aprendizado e afeto"],
        ["9", "Prestar atenção aos sinais de fome e saciedade da criança e conversar com ela durante a refeição"],
        ["10", "Cuidar da higiene em todas as etapas da alimentação"],
        ["11", "Oferecer à criança alimentação adequada e saudável também fora de casa"],
        ["12", "Proteger a criança da publicidade de alimentos"]
      ]
    }
  ],
  prescricao: {
    ambulatorial: "ORIENTAÇÕES DE ALIMENTAÇÃO — LACTENTE (idade: ___)\n\nATÉ 6 MESES\n- Somente leite materno, sempre que o bebê quiser, de dia e de noite. Não dar água, chá, suco ou outro leite.\n- Sinais de que está mamando bem: 6 ou mais fraldas molhadas por dia, fezes amarelas, ganho de peso na consulta.\n\nA PARTIR DE 6 MESES\n- Continuar o peito. Oferecer frutas amassadas ou em pedaços nos lanches da manhã e da tarde.\n- Almoço (e jantar a partir dos 7 meses): arroz ou batata/mandioca + feijão + carne, frango, peixe, fígado ou ovo + legumes e verduras. Amassar com garfo; não bater no liquidificador nem peneirar.\n- Temperar com pouco sal, alho, cebola, ervas. Sem caldo pronto.\n- Oferecer água filtrada ou fervida entre as refeições.\n- NÃO dar açúcar, mel (até 1 ano), biscoito recheado, salgadinho, refrigerante, suco de caixinha, achocolatado, embutidos, macarrão instantâneo.\n- Deixar a criança tocar e pegar a comida; não forçar; refeições sem tela, com a família.\n\nSE USAR FÓRMULA INFANTIL (quando indicada)\n- Fórmula infantil de partida (0 a 6 meses) / de seguimento (6 a 12 meses): ___\n  Preparar exatamente como no rótulo (medida rasa, com água fervida e amornada); não guardar sobras.\n\nSUPLEMENTOS: vitamina D e ferro conforme a idade (ver receita de puericultura)."
  },
  orientacoesRetorno: [
    "O leite materno é o alimento completo até 6 meses; o bebê não precisa de água nem chá",
    "No começo da comida, é normal o bebê comer pouco e fazer careta: oferecer de novo o mesmo alimento em outros dias (até 8 a 10 vezes)",
    "Nunca deixar a criança comer sozinha, deitada ou andando; sempre sentada e com um adulto perto",
    "Voltar antes da consulta marcada se: o bebê mamar pouco, ficar muito sonolento, tiver menos de 6 fraldas molhadas por dia, perder peso, vomitar tudo, tiver sangue nas fezes ou manchas na pele após um alimento novo",
    "Engasgo com falta de ar ou criança roxa: chamar o SAMU 192 e fazer as manobras de desengasgo",
    "Trazer a Caderneta da Criança em todas as consultas para acompanhar o peso"
  ],
  fontes: [
    "Ministério da Saúde — Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (2019)",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 23: Saúde da Criança — Aleitamento Materno e Alimentação Complementar, 2ª ed. (2015)",
    "Ministério da Saúde — Amamentação e uso de medicamentos e outras substâncias, 2ª ed. (2010); Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical de HIV, Sífilis e Hepatites Virais (2022)",
    "SBP — Departamento de Nutrologia: Manual de Alimentação: orientações para alimentação do lactente ao adolescente, 4ª ed. (2018); Guia prático de alimentação complementar (2023)",
    "OMS/UNICEF — Guideline for complementary feeding of infants and young children 6–23 months of age (2023)",
    "CLT, art. 396 (pausas para amamentação)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

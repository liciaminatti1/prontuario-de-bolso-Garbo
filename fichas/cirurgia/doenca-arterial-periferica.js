// Doença arterial obstrutiva periférica crônica
registrarFicha({
  id: "doenca-arterial-periferica",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Doença arterial obstrutiva periférica (DAOP) crônica: claudicação e isquemia crítica",
  resumo: "Aterosclerose das artérias dos membros inferiores: claudicação intermitente, índice tornozelo-braquial (ITB) ≤ 0,90, classificação de Fontaine/Rutherford. Tratamento: parar de fumar, exercício, antiagregante, estatina de alta intensidade e, em alto risco, rivaroxabana 2,5 mg + AAS. Dor em repouso, úlcera ou gangrena = isquemia crítica (encaminhamento urgente). Membro frio e dor súbita: ver isquemia-aguda-membro.",
  palavrasChave: "doenca arterial obstrutiva periferica daop dap claudicacao intermitente itb indice tornozelo braquial fontaine rutherford isquemia critica clti dor em repouso ulcera arterial gangrena aas clopidogrel rivaroxabana 2,5 cilostazol estatina exercicio supervisionado tabagismo pe diabetico revascularizacao angioplastia",
  critico: {
    tempo: "Dor em repouso/úlcera: vascular",
    texto: "Dor no pé em repouso que melhora com a perna pendente, úlcera que não cicatriza ou gangrena = isquemia crônica que ameaça o membro: encaminhar à cirurgia vascular com urgência. Dor súbita com membro frio e pálido = isquemia aguda: PS."
  },
  alarmes: [
    "Dor súbita, palidez, frialdade, ausência de pulso, parestesia ou paralisia (isquemia aguda — ver isquemia-aguda-membro)",
    "Dor em repouso no antepé, pior à noite e ao elevar a perna, aliviada com o pé pendente",
    "Úlcera em pododáctilos, calcanhar ou região lateral do pé que não cicatriza em 2 semanas; gangrena",
    "Infecção em pé isquêmico (sobretudo diabético): risco de amputação — ver pe-diabetico",
    "Claudicação que piora rapidamente (distância de marcha caindo)",
    "Massa pulsátil abdominal ou poplítea (aneurisma)"
  ],
  conduta: [
    "Suspeitar em: > 65 anos; 50–64 anos com tabagismo, DM, dislipidemia ou HAS; < 50 anos com DM e outro fator; doença aterosclerótica em outro território",
    "Anamnese: dor em panturrilha (ou coxa/nádega) ao caminhar, que alivia em minutos com repouso em pé; distância de marcha; disfunção erétil (Leriche)",
    "Exame: pulsos femorais, poplíteos, pediosos e tibiais posteriores; sopros; pele (palidez à elevação, rubor pendente, pelos escassos, unhas), úlceras; examinar os pés",
    "Medir ITB em todos com suspeita (tabela). ITB > 1,40 (artérias incompressíveis: DM, DRC) → índice hálux-braquial ou Doppler",
    "Parar de fumar é a medida mais importante (ver tabagismo)",
    "Exercício: caminhada supervisionada (ou orientada) 30–45 min, pelo menos 3×/semana, por no mínimo 12 semanas, andando até dor moderada, descansando e repetindo",
    "Antiagregante em todos sintomáticos: AAS 100 mg/dia ou clopidogrel 75 mg/dia (clopidogrel pode ser preferido; não usar os dois juntos de rotina fora de pós-revascularização)",
    "Alto risco isquêmico (DM, IC, DRC, revascularização prévia, doença polivascular) sem alto risco de sangramento: rivaroxabana 2,5 mg 12/12 h + AAS 100 mg (COMPASS/VOYAGER-PAD)",
    "Estatina de alta intensidade para todos (meta ESC: LDL < 55 mg/dL e redução ≥ 50%); ezetimiba se não atingir (ver dislipidemia)",
    "Controlar PA (IECA ou BRA preferidos; betabloqueador não é contraindicado) e DM; cuidados diários com os pés",
    "Claudicação limitante apesar de 3–6 meses de exercício e medicação: cilostazol (se sem IC) e/ou encaminhar para avaliação de revascularização",
    "Isquemia crítica (dor em repouso, úlcera, gangrena): encaminhar com urgência à cirurgia vascular para imagem e revascularização"
  ],
  exames: [
    "ITB (Doppler portátil): PA sistólica do tornozelo (maior entre pediosa e tibial posterior) ÷ maior PA sistólica braquial, em cada perna",
    "Glicemia/HbA1c, perfil lipídico, creatinina, hemograma, urina tipo 1",
    "ECG; avaliar doença coronariana e carotídea quando houver sintomas",
    "Ecodoppler arterial de membros inferiores: localizar e graduar estenoses (planejamento, sintomas limitantes ou isquemia crítica)",
    "Angiotomografia ou angiorressonância / arteriografia: só quando houver plano de revascularização (pelo vascular)",
    "USG de aorta abdominal: homem 65–75 anos que já fumou (rastreio de aneurisma), e em todo paciente com DAOP se não feito"
  ],
  diferenciais: [
    "Claudicação neurogênica (estenose de canal lombar): dor ao ficar em pé, alivia ao sentar ou fletir o tronco, pulsos normais",
    "Insuficiência venosa crônica (peso que piora no fim do dia, edema, varizes)",
    "Cisto de Baker, síndrome compartimental crônica do atleta, artrose de quadril ou joelho",
    "Neuropatia diabética (queimação, sem relação com marcha)",
    "Tromboangeíte obliterante (Buerger: jovem tabagista), aprisionamento poplíteo, vasculites, embolia"
  ],
  tabelas: [
    {
      titulo: "Interpretação do ITB",
      colunas: ["ITB", "Interpretação"],
      linhas: [
        ["> 1,40", "Artéria incompressível (calcificada): não interpretável — fazer índice hálux-braquial (< 0,70 = DAOP) ou Doppler"],
        ["1,00–1,40", "Normal"],
        ["0,91–0,99", "Limítrofe: se sintomas típicos, ITB após exercício"],
        ["≤ 0,90", "DAOP (≤ 0,90 diagnóstica)"],
        ["< 0,40 (ou PA do tornozelo < 50 mmHg)", "Isquemia grave; com sintomas em repouso = ameaça ao membro"]
      ]
    },
    {
      titulo: "Classificações de Fontaine e Rutherford",
      colunas: ["Fontaine", "Rutherford", "Clínica"],
      linhas: [
        ["I", "0", "Assintomático"],
        ["IIa", "1", "Claudicação leve (distância longa)"],
        ["IIb", "2–3", "Claudicação moderada a grave (limitante)"],
        ["III", "4", "Dor isquêmica em repouso"],
        ["IV", "5–6", "Úlcera ou gangrena (5: perda tecidual menor; 6: maior, acima dos metatarsos)"]
      ],
      nota: "Fontaine III–IV / Rutherford 4–6 = isquemia crônica que ameaça o membro (CLTI): encaminhamento urgente. No diabético, usar também a classificação WIfI (ferida, isquemia, infecção)."
    }
  ],
  tratamento: [
    {
      droga: "Ácido acetilsalicílico",
      linha: "l1",
      dose: "100 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "Sangramento, dispepsia",
      contraindicacoes: "Alergia, sangramento ativo, úlcera ativa",
      ajustes: "Em DAOP assintomática (só ITB baixo) o benefício é incerto; individualizar"
    },
    {
      droga: "Clopidogrel",
      linha: "alt",
      dose: "75 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "Sangramento",
      contraindicacoes: "Sangramento ativo",
      ajustes: "Alternativa ao AAS (ou preferido, pelo CAPRIE). Dupla antiagregação só após angioplastia, por tempo definido pelo vascular"
    },
    {
      droga: "Rivaroxabana 2,5 mg + AAS 100 mg",
      linha: "adj",
      dose: "Rivaroxabana 2,5 mg",
      via: "VO",
      intervalo: "12/12 h (com AAS 100 mg 1 vez ao dia)",
      duracao: "Contínuo",
      monitorizacao: "Sangramento, função renal, Hb",
      contraindicacoes: "Alto risco de sangramento, AVC hemorrágico prévio, ClCr < 15 mL/min, uso de outro anticoagulante ou dupla antiagregação",
      ajustes: "Para DAOP sintomática de alto risco isquêmico e após revascularização (VOYAGER-PAD). Não disponível no SUS para essa indicação"
    },
    {
      droga: "Atorvastatina",
      linha: "l1",
      dose: "40–80 mg (ou rosuvastatina 20–40 mg)",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Contínuo",
      monitorizacao: "Perfil lipídico em 6–8 semanas, mialgia, TGO/TGP se sintomas",
      contraindicacoes: "Gestação, hepatopatia ativa",
      ajustes: "Sinvastatina 40 mg (SUS) se atorvastatina indisponível, com ezetimiba se preciso"
    },
    {
      droga: "Cilostazol",
      linha: "alt",
      dose: "100 mg",
      via: "VO",
      intervalo: "12/12 h (30 min antes ou 2 h após refeição)",
      duracao: "Reavaliar em 3–6 meses; suspender se sem melhora",
      monitorizacao: "Cefaleia, diarreia, palpitação",
      contraindicacoes: "Insuficiência cardíaca de qualquer grau, sangramento ativo, arritmia ventricular",
      ajustes: "Só para claudicação limitante. Interação com inibidores do CYP3A4/2C19 (reduzir para 50 mg 12/12 h)"
    }
  ],
  prescricao: {
    ambulatorial: "DAOP — CLAUDICAÇÃO INTERMITENTE\nUSO ORAL\n1. Ácido acetilsalicílico 100 mg ------------------- uso contínuo\n   Tomar 1 comprimido por dia, após o almoço.\n   (Alternativa: Clopidogrel 75 mg — 1 comprimido por dia.)\n2. Atorvastatina 40 mg ----------------------------- uso contínuo\n   Tomar 1 a 2 comprimidos à noite (40–80 mg).\n3. (Se alto risco isquêmico, sem risco alto de sangramento) Rivaroxabana 2,5 mg --- uso contínuo\n   Tomar 1 comprimido de 12 em 12 horas, junto com o AAS.\n4. (Se claudicação limitante após 3 meses de exercício e sem insuficiência cardíaca) Cilostazol 100 mg --- 60 comprimidos\n   Tomar 1 comprimido de 12 em 12 horas, 30 minutos antes do café e do jantar.\n\nEXERCÍCIO\nCaminhar 30 a 45 minutos, pelo menos 3 vezes por semana: andar até a dor ficar moderada, parar até passar e voltar a andar. Manter por pelo menos 12 semanas e depois para sempre.\n\nSOLICITAÇÃO\nÍndice tornozelo-braquial bilateral e ecodoppler arterial de membros inferiores. Indicação: claudicação intermitente ___ (direita/esquerda), ITB ___."
  },
  orientacoesRetorno: [
    "Parar de fumar é o que mais protege a perna e o coração; a UBS tem tratamento para isso",
    "Caminhar todo dia ajuda a aumentar a distância sem dor; a dor ao caminhar não faz mal à perna",
    "Olhar os pés todo dia; usar sapato fechado e confortável; não andar descalço; não cortar calos em casa",
    "Tomar o AAS e a estatina todos os dias, mesmo sem dor",
    "Procurar o PS imediatamente se a perna ou o pé ficar frio, pálido ou roxo, com dor forte de repente ou dormência",
    "Procurar a UBS logo se aparecer ferida no pé, dor no pé em repouso ou à noite, ou mancha escura nos dedos"
  ],
  encaminhar: [
    "Cirurgia vascular eletiva: claudicação limitante apesar de 3–6 meses de tratamento clínico e exercício; ITB > 1,40 com sintomas; aneurisma",
    "Cirurgia vascular com urgência: dor em repouso, úlcera ou gangrena (isquemia crítica), sobretudo com infecção",
    "PS: isquemia aguda (dor súbita, membro frio, sem pulso, déficit)",
    "Programa de exercício supervisionado / fisioterapia, onde houver"
  ],
  fontes: [
    "ESC — Guidelines for the management of peripheral arterial and aortic diseases (Eur Heart J, 2024)",
    "ACC/AHA/multissocietária — Guideline for the Management of Lower Extremity Peripheral Artery Disease (Circulation, 2024)",
    "Global Vascular Guidelines on the Management of Chronic Limb-Threatening Ischemia (ESVS/SVS/WFVS, 2019)",
    "SBACV — Projeto Diretrizes: Doença arterial obstrutiva periférica",
    "Ensaios COMPASS (NEJM, 2017) e VOYAGER-PAD (NEJM, 2020)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

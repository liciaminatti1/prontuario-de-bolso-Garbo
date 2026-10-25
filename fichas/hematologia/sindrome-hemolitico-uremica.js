// Síndrome hemolítico-urêmica: típica (STEC) e atípica
registrarFicha({
  id: "sindrome-hemolitico-uremica",
  especialidade: "hematologia",
  caminho: "ps",
  publico: "ambos",
  titulo: "Síndrome hemolítico-urêmica (SHU): típica (STEC) e atípica",
  resumo: "Anemia hemolítica microangiopática (esquizócitos, Coombs negativo) + plaquetopenia + lesão renal aguda. Na criança, a forma típica vem 5–10 dias após diarreia com sangue por E. coli produtora de toxina Shiga (STEC). Sem diarreia, recorrente ou em adulto: pensar em SHU atípica (complemento) e excluir PTT (ver ficha trombocitopenia, PLASMIC e ADAMTS13).",
  palavrasChave: "shu sindrome hemolitico uremica stec e coli o157 toxina shiga ecoli enterohemorragica diarreia com sangue disenteria microangiopatia trombotica mat esquizocitos plaquetopenia lesao renal aguda insuficiencia renal crianca shua atipica complemento eculizumabe ravulizumabe plasmaferese dialise pneumococo",
  critico: {
    tempo: "Diarreia com sangue: não dar antibiótico",
    texto: "Na suspeita de STEC (diarreia com sangue, sem febre alta, criança): evitar antibiótico, antidiarreico, opioide e AINE; hidratar com cristaloide isotônico e colher hemograma, esfregaço e creatinina. SHU instalada: suporte em centro com diálise pediátrica."
  },
  alarmes: [
    "Oligúria ou anúria, edema, hipertensão, ganho de peso",
    "Palidez súbita, icterícia, petéquias 5–10 dias após diarreia com sangue",
    "Alteração neurológica: irritabilidade, sonolência, convulsão, déficit focal (forma grave)",
    "Hipercalemia, acidose metabólica grave, sobrecarga de volume com desconforto respiratório",
    "Dor abdominal intensa, distensão, sangramento retal maciço (colite grave, perfuração, intussuscepção)",
    "Sinais de pancreatite, miocardite ou hiperglicemia (acometimento multiorgânico)",
    "Microangiopatia sem diarreia, recorrência ou história familiar (SHU atípica)"
  ],
  condutaInicial: [
    "Confirmar a tríade: Hb baixa com esquizócitos e LDH alto, Coombs direto negativo, plaquetas < 150.000/mm³, creatinina acima do normal para a idade",
    "Monitorar peso, diurese (balanço hídrico rigoroso), PA, Na, K, bicarbonato, ureia, creatinina",
    "Volemia: se desidratado e sem oligúria, expansão com SF 0,9% ou Ringer lactato (reduz necessidade de diálise); se oligúria com sobrecarga, restringir líquidos a perdas insensíveis + diurese",
    "Suspender e evitar: antibiótico (na suspeita de STEC), antidiarreico, opioide para diarreia, AINE, nefrotóxicos, contraste",
    "Transfundir hemácias se Hb < 6–7 g/dL ou sintomas; plaquetas só se sangramento ativo ou procedimento invasivo",
    "Tratar hipertensão, hipercalemia (ficha hipercalemia) e convulsão",
    "Coprocultura com pesquisa de STEC/toxina Shiga (PCR stx1/stx2) nas primeiras fezes disponíveis",
    "Adulto, criança sem diarreia, < 6 meses, recorrência ou família afetada: colher ADAMTS13 e complemento ANTES de plasma ou plasmaférese e discutir PTT/SHU atípica (ver ficha trombocitopenia)",
    "Contato precoce com nefrologia pediátrica/nefrologia e regulação para centro com diálise"
  ],
  fataisExcluir: [
    "Púrpura trombocitopênica trombótica (ADAMTS13 < 10%; ficha trombocitopenia)",
    "CIVD por sepse (TP/TTPa alargados, fibrinogênio baixo)",
    "SHU por pneumococo (pneumonia ou meningite; Coombs direto pode ser positivo)",
    "Hipertensão maligna, HELLP, lúpus, esclerodermia renal",
    "Intussuscepção, perfuração ou megacólon tóxico na fase de colite"
  ],
  proximaDecisao: "SHU típica → suporte; diálise se anúria, hipercalemia, acidose ou sobrecarga refratárias; a maioria das crianças recupera a função renal. Sem diarreia ou sem melhora em poucos dias → investigar complemento; PLASMIC alto/ADAMTS13 baixo → PTT (plasmaférese). SHU atípica confirmada ou muito provável → inibidor de C5 (eculizumabe/ravulizumabe) com nefrologia/hematologia; plasmaférese enquanto o inibidor não chega.",
  clinica: {
    anamnese: [
      "Diarreia com sangue nos 5–10 dias anteriores, cólica intensa, pouca ou nenhuma febre",
      "Exposição: carne moída malcozida, leite ou queijo não pasteurizado, vegetais crus, água não tratada, contato com gado, creches, surto na família/escola",
      "Diurese nas últimas 24 h, edema, cefaleia, convulsão",
      "Uso de antibiótico ou antidiarreico (aumentam o risco)",
      "SHU atípica: ausência de diarreia, episódios prévios, familiares com doença renal ou SHU, gestação/puerpério, transplante, drogas (gencitabina, inibidores de calcineurina, quinina, anti-VEGF)",
      "Infecção pneumocócica recente (pneumonia com empiema, meningite)"
    ],
    exameFisico: [
      "Peso (comparar com o anterior), hidratação, edema, PA",
      "Palidez, icterícia, petéquias",
      "Abdome: distensão, defesa (colite grave, perfuração)",
      "Neurológico: Glasgow, convulsão, déficit focal",
      "Ausculta pulmonar e sinais de sobrecarga"
    ],
    diferenciais: [
      { dx: "PTT", pista: "Adulto, sintomas neurológicos marcantes, creatinina pouco alterada, PLASMIC ≥ 6, ADAMTS13 < 10%" },
      { dx: "SHU atípica (complemento)", pista: "Sem diarreia por STEC, recorrente, familiar, C3 às vezes baixo" },
      { dx: "SHU por pneumococo", pista: "< 2 anos com pneumonia/meningite pneumocócica, Coombs direto positivo" },
      { dx: "CIVD / sepse", pista: "Coagulograma alterado, instabilidade" },
      { dx: "Desidratação com lesão renal pré-renal", pista: "Sem hemólise nem plaquetopenia" },
      { dx: "Glomerulonefrites", pista: "Hematúria dismórfica, cilindros, sem esquizócitos" }
    ],
    gravidade: [
      "Necessidade de diálise (cerca de metade das crianças com SHU típica)",
      "Acometimento neurológico (principal causa de morte na fase aguda)",
      "Leucocitose alta e hemoconcentração no início associam-se a pior evolução",
      "Sequela a longo prazo: proteinúria, hipertensão e DRC em parte dos pacientes"
    ]
  },
  exames: [
    {
      nome: "Hemólise e microangiopatia",
      pedido: "Hemograma completo com reticulócitos e pesquisa de esquizócitos no esfregaço; LDH; bilirrubinas totais e frações; haptoglobina; Coombs direto.",
      porQue: "Confirmar anemia hemolítica microangiopática.",
      esperar: "Esquizócitos, LDH alto, haptoglobina baixa, Coombs negativo.",
      interpretacao: "Coombs positivo em criança com infecção pneumocócica: SHU pneumocócica (evitar plasma).",
      limitacoes: "Esquizócitos podem ser poucos no início: repetir o esfregaço."
    },
    {
      nome: "Função renal e eletrólitos",
      pedido: "Ureia, creatinina, sódio, potássio, cálcio, fósforo, ácido úrico, gasometria venosa; urina tipo 1 (hematúria, proteinúria); glicemia; lipase; TGO, TGP.",
      porQue: "Gravidade, indicação de diálise e acometimento de outros órgãos.",
      esperar: "Creatinina em elevação, hipercalemia e acidose nos casos graves.",
      interpretacao: "Anúria, K refratário, acidose grave, sobrecarga ou uremia sintomática = diálise.",
      limitacoes: "—"
    },
    {
      nome: "Coagulação",
      pedido: "TP/INR, TTPa, fibrinogênio, D-dímero.",
      porQue: "Separar de CIVD.",
      esperar: "Normais ou pouco alterados na SHU.",
      interpretacao: "TP/TTPa alargados com fibrinogênio baixo → CIVD (ficha coagulopatias-urgencia).",
      limitacoes: "—"
    },
    {
      nome: "Etiologia",
      pedido: "Coprocultura com pesquisa de E. coli produtora de toxina Shiga (cultura em meio para O157 e PCR para stx1/stx2) — colher o quanto antes. Hemocultura se febre. ADAMTS13 (atividade) e complemento (C3, C4, fator H, anticorpo antifator H) ANTES de plasma, se suspeita de PTT ou SHU atípica. Beta-hCG em mulheres em idade fértil.",
      porQue: "Confirmar STEC (vigilância) e excluir PTT e SHU atípica.",
      esperar: "STEC positiva na SHU típica; ADAMTS13 > 10% na SHU.",
      interpretacao: "ADAMTS13 < 10% = PTT. STEC negativa não exclui SHU típica se colhida tarde. C3 normal não exclui SHU atípica.",
      limitacoes: "ADAMTS13 e estudo genético do complemento demoram; não atrasar o tratamento."
    }
  ],
  tratamento: [
    {
      droga: "Cristaloide isotônico (SF 0,9% ou Ringer lactato)",
      linha: "l1",
      dose: "Desidratado sem oligúria — criança: 10–20 mL/kg em 30–60 min, repetir se necessário; adulto: 500–1.000 mL. Depois, manutenção + perdas",
      via: "IV",
      intervalo: "Conforme balanço",
      duracao: "Fase de diarreia e início da SHU",
      monitorizacao: "Peso 2×/dia, diurese horária, PA, Na, ausculta pulmonar",
      contraindicacoes: "Oligoanúria com sobrecarga, edema pulmonar, hipertensão grave",
      ajustes: "Na SHU oligúrica: restringir a perdas insensíveis (~400 mL/m²/dia) + diurese. Evitar soluções hipotônicas"
    },
    {
      droga: "Concentrado de hemácias",
      linha: "adj",
      dose: "Criança: 10–15 mL/kg. Adulto: 1 unidade",
      via: "IV em 2–4 h",
      intervalo: "Conforme Hb",
      duracao: "—",
      monitorizacao: "K, sobrecarga de volume, PA",
      contraindicacoes: "—",
      ajustes: "Indicação habitual: Hb < 6–7 g/dL ou sintomas. Se anúria, transfundir durante a diálise ou mais lentamente"
    },
    {
      droga: "Concentrado de plaquetas",
      linha: "adj",
      dose: "Criança: 10 mL/kg. Adulto: 1 unidade por 10 kg ou 1 aférese",
      via: "IV",
      intervalo: "Só se indicado",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Sem sangramento e sem procedimento (pode piorar a microangiopatia)",
      ajustes: "Indicar se sangramento ativo ou antes de cateter de diálise conforme serviço"
    },
    {
      droga: "Furosemida",
      linha: "adj",
      dose: "Criança: 1–2 mg/kg/dose (máx. 40 mg/dose habitual em bolus). Adulto: 40–80 mg",
      via: "IV",
      intervalo: "6/6 a 12/12 h conforme resposta",
      duracao: "Enquanto houver sobrecarga e resposta",
      monitorizacao: "Diurese, K, Na",
      contraindicacoes: "Desidratação",
      ajustes: "Pode ser tentada na sobrecarga; não atrasar a diálise se não houver resposta"
    },
    {
      droga: "Anti-hipertensivo (anlodipino VO ou nifedipino de liberação prolongada; hidralazina ou nitroprussiato IV na emergência)",
      linha: "adj",
      dose: "Anlodipino criança: 0,1 mg/kg/dose (máx. 5 mg inicial); adulto 5–10 mg",
      via: "VO",
      intervalo: "1 vez ao dia",
      duracao: "Conforme PA",
      monitorizacao: "PA",
      contraindicacoes: "IECA/BRA na fase aguda (pioram a função renal e o K)",
      ajustes: "Emergência hipertensiva: ver fichas has-emerg e protocolo de UTI pediátrica"
    },
    {
      droga: "Eculizumabe ou ravulizumabe (inibidores de C5)",
      linha: "alt",
      dose: "Conforme bula e peso (especialista)",
      via: "IV",
      intervalo: "Indução semanal, depois a cada 2 semanas (eculizumabe) ou a cada 8 semanas (ravulizumabe)",
      duracao: "Conforme resposta e risco de recaída",
      monitorizacao: "Hemólise, plaquetas, creatinina; sinais de meningococcemia",
      contraindicacoes: "Infecção meningocócica ativa",
      ajustes: "1ª linha na SHU atípica (KDIGO 2017). Vacina meningocócica (ACWY e B) antes ou no início; profilaxia antimicrobiana conforme protocolo do serviço. Uso na SHU-STEC com acometimento neurológico grave é controverso. Acesso via especialista e via judicial/protocolo vigente"
    },
    {
      droga: "Plasmaférese / plasma fresco",
      linha: "alt",
      dose: "Conforme hematologia/nefrologia",
      via: "IV",
      intervalo: "Diária",
      duracao: "Até definir o diagnóstico ou iniciar inibidor de C5",
      monitorizacao: "Plaquetas, LDH, creatinina",
      contraindicacoes: "SHU pneumocócica (plasma contém anticorpos que pioram); sem benefício comprovado na SHU-STEC",
      ajustes: "Indicada na suspeita de PTT (ficha trombocitopenia) e na SHU atípica enquanto não há inibidor de C5"
    },
    {
      droga: "Antibióticos, antidiarreicos (loperamida), opioides para diarreia e AINE",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Diarreia com sangue suspeita de STEC e SHU típica",
      ajustes: "Antibiótico pode aumentar a liberação de toxina. Exceção: suspeita forte de Shigella, sepse ou SHU pneumocócica — tratar a infecção conforme a ficha correspondente"
    }
  ],
  destino: {
    agora: [
      "Leito monitorizado; balanço hídrico rigoroso; contato com nefrologia",
      "Criança com diarreia com sangue e hemograma/creatinina normais: alta com retorno e reavaliação laboratorial em 24–48 h"
    ],
    reavaliar: [
      "Hemograma, creatinina e eletrólitos a cada 12–24 h",
      "Peso e diurese a cada 6–12 h",
      "Neurológico a cada 4–6 h"
    ],
    alta: [
      "Plaquetas normalizadas, Hb estável, creatinina em queda, diurese adequada, PA controlada",
      "Seguimento com nefrologia por anos (proteinúria, PA, função renal)"
    ],
    observacao: ["Diarreia com sangue por STEC sem SHU: risco maior nos primeiros 7–10 dias; exames seriados"],
    internacao: ["Todo paciente com SHU", "UTI: anúria, hipercalemia, acidose, sobrecarga, alteração neurológica, convulsão, instabilidade"],
    transferencia: ["Centro com diálise pediátrica/adulto, banco de sangue e UTI; regular cedo, antes da anúria"]
  },
  prescricao: {
    hospitalar: "SHU — peso: ___ kg | superfície corporal: ___ m²\n1. Dieta conforme aceitação; restrição de potássio e fósforo; sódio restrito se edema/hipertensão.\n2. Volume:\n   - Desidratado e sem oligúria: SF 0,9% 10–20 mL/kg (adulto 500–1.000 mL) IV em 30–60 min; reavaliar.\n   - Oligúria: restringir a perdas insensíveis (400 mL/m²/dia) + volume de diurese das últimas horas; sem potássio no soro.\n3. Concentrado de hemácias 10–15 mL/kg (adulto 1 unidade) IV em 2–4 h se Hb < 6–7 g/dL ou sintomas.\n4. Plaquetas apenas se sangramento ativo ou procedimento invasivo.\n5. Furosemida 1–2 mg/kg IV (adulto 40–80 mg) se sobrecarga; repetir conforme resposta.\n6. Anlodipino 0,1 mg/kg (máx. 5 mg inicial; adulto 5–10 mg) VO 1×/dia se hipertensão.\n7. Paracetamol 10–15 mg/kg VO de 6/6 h (máx. 1 g/dose) se dor ou febre. NÃO usar AINE, antidiarreico ou opioide para diarreia.\n8. NÃO iniciar antibiótico para a diarreia (salvo indicação específica registrada).\n9. Exames: hemograma com esfregaço, LDH, ureia, creatinina, Na, K, gasometria venosa de 12/12 h a 24/24 h; coprocultura com pesquisa de STEC (PCR stx); ADAMTS13 e C3/C4 se suspeita de PTT ou SHU atípica (antes de plasma).\n10. Controles: peso 2×/dia, diurese horária (balanço hídrico), PA de 4/4 h, Glasgow de 4/4 h.\n11. Precaução de contato. Notificar à vigilância epidemiológica (surto de DTA / STEC conforme orientação local).\n12. Parecer da nefrologia (diálise se anúria, K refratário, acidose grave, sobrecarga ou uremia)."
  },
  orientacoesRetorno: [
    "Diarreia com sangue na criança: volte em 24–48 h para reavaliação mesmo melhorando; e imediatamente se ficar muito pálida, urinar pouco, inchar, ficar sonolenta ou tiver convulsão",
    "Não dê remédio para parar a diarreia, anti-inflamatório ou antibiótico sem orientação médica",
    "Lave as mãos após usar o banheiro e trocar fraldas; a criança com diarreia não deve ir à creche nem usar piscina até liberação",
    "Prevenção: carne bem passada, leite e queijo pasteurizados, lavar bem verduras e frutas, água tratada",
    "Depois da alta: medir pressão, fazer exames de urina e de função renal com o nefrologista pelos próximos anos"
  ],
  tabelas: [
    {
      titulo: "SHU típica x atípica x PTT",
      colunas: ["Característica", "SHU típica (STEC)", "SHU atípica", "PTT"],
      linhas: [
        ["Idade", "Criança < 5 anos (qualquer idade)", "Qualquer; muitas vezes < 6 meses ou adulto", "Adulto"],
        ["Pródromo", "Diarreia com sangue 5–10 dias antes", "Gatilho inespecífico (infecção, gestação); sem STEC", "Inespecífico"],
        ["Rim", "Lesão renal importante", "Lesão renal importante, recorrente", "Leve ou moderada"],
        ["Neurológico", "Às vezes (grave)", "Às vezes", "Frequente"],
        ["Exame-chave", "STEC/toxina Shiga nas fezes", "Complemento; ADAMTS13 > 10%", "ADAMTS13 < 10%"],
        ["Tratamento", "Suporte", "Inibidor de C5", "Plasmaférese + corticoide (ficha trombocitopenia)"]
      ]
    }
  ],
  fontes: [
    "KDIGO — Atypical hemolytic uremic syndrome and C3 glomerulopathy: conclusions from a Controversies Conference (Kidney Int, 2017)",
    "Ministério da Saúde — Manual integrado de vigilância, prevenção e controle de doenças transmitidas por alimentos (2010) e orientações sobre E. coli enterohemorrágica",
    "International Haemolytic Uraemic Syndrome Group / Loirat C et al. — An international consensus approach to the management of atypical HUS in children (Pediatr Nephrol, 2016)",
    "IDSA — Clinical Practice Guidelines for the Diagnosis and Management of Infectious Diarrhea (2017)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

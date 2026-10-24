// Síndrome compartimental aguda de membros
registrarFicha({
  id: "sindrome-compartimental",
  especialidade: "trauma",
  caminho: "ps",
  publico: "adulto",
  titulo: "Síndrome compartimental aguda de membros",
  resumo: "Aumento da pressão dentro de um compartimento fascial que compromete a perfusão de músculos e nervos. Diagnóstico clínico; tratamento é fasciotomia de urgência.",
  palavrasChave: "sindrome compartimental fasciotomia pressao compartimental dor desproporcional estiramento passivo fratura tibia antebraco esmagamento gesso apertado reperfusao rabdomiolise volkmann",
  critico: {
    tempo: "Fasciotomia em até 6 h",
    texto: "Dor desproporcional e dor ao estiramento passivo bastam para suspeitar. Abrir gesso e curativos até a pele, membro no nível do coração e cirurgião já. Pulso presente não exclui."
  },
  alarmes: [
    "Dor desproporcional à lesão, crescente, que não cede com opioide",
    "Dor ao estiramento passivo dos músculos do compartimento",
    "Compartimento tenso, 'lenhoso'",
    "Parestesia ou hipoestesia no território do nervo do compartimento",
    "Paciente não avaliável (sedado, intubado, TCE, intoxicado) com fratura de tíbia/antebraço ou esmagamento",
    "Paralisia e ausência de pulso são sinais TARDIOS (lesão já estabelecida)"
  ],
  condutaInicial: [
    "Abrir e retirar gesso, tala, curativos e algodão em toda a extensão até a pele (a abertura isolada do gesso não basta)",
    "Membro no nível do coração (não elevar — reduz a perfusão)",
    "Corrigir hipotensão (manter perfusão), O₂",
    "Chamar ortopedia/cirurgia imediatamente; medir pressão compartimental se dúvida e houver dispositivo",
    "Fasciotomia de todos os compartimentos do segmento, idealmente nas primeiras horas",
    "Rastrear rabdomiólise: CK, potássio, creatinina, urina; hidratação vigorosa",
    "Analgesia, mas sem mascarar a evolução (reavaliação frequente)"
  ],
  fataisExcluir: [
    "Rabdomiólise com hipercalemia e lesão renal aguda",
    "Lesão arterial associada (isquemia de membro)",
    "Infecção necrotizante de partes moles (dor desproporcional + sinais sistêmicos)"
  ],
  proximaDecisao: "Diagnóstico clínico claro → fasciotomia sem esperar medida de pressão. Dúvida em paciente avaliável → reexame a cada 1 h. Paciente não avaliável → medir pressão: ΔP (PA diastólica − pressão compartimental) ≤ 30 mmHg → fasciotomia.",
  clinica: {
    anamnese: [
      "Fratura (tíbia é a mais comum; também antebraço, supracondiliana em criança), esmagamento",
      "Gesso/curativo apertado, posição prolongada (intoxicação, cirurgia longa), queimadura circunferencial",
      "Revascularização recente (reperfusão), injeção/infiltração de soro ou contraste",
      "Anticoagulação (hematoma), picada de cobra (ver ficha ofidismo — síndrome compartimental é rara e exige confirmação)"
    ],
    exameFisico: [
      "Palpar e comparar compartimentos com o lado oposto",
      "Estiramento passivo: perna — flexão plantar/dorsiflexão dos dedos; antebraço — extensão passiva dos dedos",
      "Sensibilidade: 1ª comissura do pé (fibular profundo — compartimento anterior da perna)",
      "Pulsos e enchimento capilar (geralmente preservados até fase tardia)"
    ],
    diferenciais: [
      { dx: "Isquemia arterial aguda", pista: "Pulso ausente desde o início, membro frio e pálido (ver ficha isquemia-aguda-membro)" },
      { dx: "Trombose venosa profunda", pista: "Edema difuso, dor menor, sem dor ao estiramento intensa; Doppler venoso" },
      { dx: "Fasciíte necrotizante", pista: "Febre, toxemia, bolhas, crepitação, progressão rápida" },
      { dx: "Lesão nervosa direta", pista: "Déficit desde o trauma, sem tensão do compartimento" }
    ],
    gravidade: [
      "Necrose muscular irreversível começa após ~6 h de isquemia; nervo pode ter dano permanente antes disso",
      "Sequela: contratura isquêmica de Volkmann, pé caído, perda de membro",
      "Síndrome de esmagamento: lesão muscular extensa com rabdomiólise sistêmica"
    ]
  },
  exames: [
    {
      nome: "Pressão intracompartimental",
      pedido: "Medida de pressão intracompartimental em ___ (compartimentos da perna/antebraço), pelo ortopedista.",
      porQue: "Confirmar em paciente não avaliável ou com quadro duvidoso.",
      esperar: "Imediato.",
      interpretacao: "ΔP = PA diastólica − pressão do compartimento. ΔP ≤ 30 mmHg indica fasciotomia. Pressão absoluta > 30 mmHg também é usada.",
      limitacoes: "Medir perto (até 5 cm) do foco de fratura; uma medida normal isolada não exclui — repetir se suspeita persiste."
    },
    {
      nome: "Rabdomiólise e função renal",
      pedido: "CK, potássio, cálcio, fósforo, ureia, creatinina, gasometria venosa, urina tipo 1 (sangue na fita sem hemácias = mioglobinúria).",
      porQue: "Avaliar repercussão sistêmica.",
      esperar: "Repetir CK e creatinina a cada 6–12 h.",
      interpretacao: "CK > 5.000 U/L ou em ascensão → hidratação vigorosa (diurese 200–300 mL/h no adulto).",
      limitacoes: "CK normal não exclui síndrome compartimental inicial."
    },
    {
      nome: "Doppler arterial",
      pedido: "Doppler arterial do membro (se pulso alterado).",
      porQue: "Distinguir de isquemia arterial.",
      esperar: "—",
      interpretacao: "Fluxo ausente → isquemia arterial (cirurgia vascular).",
      limitacoes: "Fluxo presente não exclui síndrome compartimental."
    }
  ],
  tratamento: [
    {
      droga: "Fasciotomia",
      linha: "l1",
      dose: "Todos os compartimentos do segmento (perna: 4 compartimentos por 2 incisões)",
      via: "Cirúrgica",
      intervalo: "Urgência",
      duracao: "Fechamento tardio ou enxerto em 3–7 dias",
      monitorizacao: "Sangramento, viabilidade muscular, infecção",
      contraindicacoes: "Síndrome compartimental tardia já estabelecida (> 24–48 h) com músculo necrótico: decisão do especialista (risco de infecção)",
      ajustes: "Realizada pelo ortopedista/cirurgião"
    },
    {
      droga: "Cristaloide (Ringer lactato ou SF 0,9%)",
      linha: "l1",
      dose: "Rabdomiólise: 1–2 L/h inicial e depois ajustar para diurese de 200–300 mL/h",
      via: "IV",
      intervalo: "Contínuo",
      duracao: "Até CK em queda e urina clara",
      monitorizacao: "Diurese horária, potássio, congestão",
      contraindicacoes: "Cuidado em cardiopata e oligoanúria estabelecida",
      ajustes: "Bicarbonato e manitol sem benefício comprovado; não usar de rotina"
    },
    {
      droga: "Morfina 10 mg/mL",
      linha: "l1",
      dose: "2–4 mg (0,05–0,1 mg/kg)",
      via: "IV",
      intervalo: "A cada 5–10 min até controle",
      duracao: "—",
      monitorizacao: "FR, sedação; necessidade crescente de opioide é sinal de alerta",
      contraindicacoes: "—",
      ajustes: "Evitar bloqueio regional contínuo em membro com risco de síndrome compartimental sem monitorização (pode mascarar)"
    },
    {
      droga: "Elevação do membro",
      linha: "ci",
      dose: "Não elevar acima do coração",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Reduz a pressão de perfusão",
      ajustes: "Manter no nível do coração"
    }
  ],
  destino: {
    agora: [
      "Ortopedia/cirurgia para fasciotomia de urgência"
    ],
    reavaliar: [
      "Membro de risco: exame (dor, estiramento passivo, tensão, sensibilidade) de 1/1 h por 24–48 h",
      "CK, potássio e creatinina seriados"
    ],
    alta: ["—"],
    observacao: ["—"],
    internacao: [
      "Todos; UTI se rabdomiólise grave, hipercalemia ou lesão renal"
    ],
    transferencia: [
      "Sem ortopedia/cirurgião: transferência imediata como emergência (tempo é músculo), com gesso aberto e membro no nível do coração"
    ]
  },
  prescricao: {
    hospitalar: "SUSPEITA DE SÍNDROME COMPARTIMENTAL (adulto; peso: ___ kg)\n1. Dieta zero (pré-operatório).\n2. Retirar gesso/tala/curativos até a pele. Membro no NÍVEL DO CORAÇÃO (não elevar).\n3. O₂ se SpO₂ < 94%; manter PAS ≥ 100 mmHg (corrigir hipotensão).\n4. Ringer lactato 1.000 mL IV em 1 h; depois 250–500 mL/h ajustando para diurese ≥ 200 mL/h se CK elevada.\n5. Dipirona 1 g IV de 6/6 h.\n6. Morfina 10 mg/mL 1 mL + SF 0,9% 9 mL (1 mg/mL): 2–4 mL IV de 4/4 h se dor; avisar se precisar de doses crescentes.\n7. Sonda vesical com diurese horária se rabdomiólise.\n8. Controles: exame do membro (dor, estiramento passivo, tensão, sensibilidade, pulsos) de 1/1 h; CK, potássio, creatinina e gasometria de 6/6 h; ECG se potássio > 5,5."
  },
  orientacoesRetorno: [
    "Com gesso ou tala: voltar imediatamente se dor que aumenta e não melhora com o remédio, formigamento, dormência, dedos frios ou que não se mexem, gesso apertado",
    "Mexer os dedos com frequência e manter o membro na altura indicada",
    "Após fasciotomia: curativos e retornos conforme cirurgião; fisioterapia"
  ],
  fontes: [
    "American College of Surgeons — ATLS, 10ª ed. (2018) e 11ª ed. (2025)",
    "AAOS — Management of Acute Compartment Syndrome: Clinical Practice Guideline (2018)",
    "British Orthopaedic Association — BOAST 10: Diagnosis and management of compartment syndrome of the limbs (2014)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

// Hipertensão intra-abdominal e síndrome compartimental abdominal
registrarFicha({
  id: "sindrome-compartimental-abdominal",
  especialidade: "cirurgia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Hipertensão intra-abdominal e síndrome compartimental abdominal",
  resumo: "Pressão intra-abdominal (PIA) normal no adulto crítico: ~5–7 mmHg. Hipertensão intra-abdominal (HIA): PIA ≥ 12 mmHg sustentada. Síndrome compartimental abdominal (SCA): PIA > 20 mmHg sustentada com nova disfunção orgânica. Medida pela sonda vesical. Ocorre em grande reposição volêmica, pancreatite, trauma, queimados, cirurgia abdominal, ascite, íleo.",
  palavrasChave: "sindrome compartimental abdominal hipertensao intra abdominal pressao intra abdominal pia pressao intravesical sonda vesical wsacs pressao de perfusao abdominal laparotomia descompressiva abdome aberto oliguria pressao de via aerea",
  critico: {
    tempo: "PIA > 20 + disfunção: descomprimir",
    texto: "SCA (PIA > 20 mmHg com nova disfunção orgânica) refratária às medidas clínicas exige descompressão cirúrgica (laparotomia descompressiva) de urgência."
  },
  alarmes: [
    "Abdome tenso e distendido com oligúria apesar de volume",
    "Aumento da pressão de platô/pico na ventilação mecânica, hipoxemia, hipercapnia",
    "Hipotensão, queda do débito cardíaco, lactato subindo",
    "Fatores de risco: reposição volêmica maciça (balanço muito positivo), pancreatite grave, trauma/hemorragia, grande queimado, cirurgia abdominal com fechamento sob tensão, ascite volumosa, íleo/obstrução"
  ],
  conduta: [
    "Medir PIA em pacientes de risco (≥ 2 fatores) na admissão à UTI e a cada 4–6 h se HIA",
    "Técnica intravesical (tabela): decúbito dorsal horizontal, no fim da expiração, transdutor zerado na linha axilar média na crista ilíaca, até 25 mL de SF instilado, sem contração abdominal",
    "Calcular pressão de perfusão abdominal: PPA = PAM − PIA (alvo ≥ 60 mmHg)",
    "HIA: medidas clínicas escalonadas — esvaziar conteúdo intraluminal (SNG aberta, sonda retal, procinéticos, enemas se adequado)",
    "Evacuar coleções: paracentese de ascite, drenagem percutânea de coleções/hematomas",
    "Melhorar complacência da parede: analgesia e sedação adequadas, retirar curativos/cintas apertados, evitar cabeceira > 30° durante a medida, bloqueio neuromuscular breve se refratária",
    "Otimizar fluidos: evitar balanço hídrico excessivamente positivo; diurético ou ultrafiltração quando estável e hipervolêmico; preferir coloide/hipertônico conforme protocolo",
    "Suporte orgânico: PAM adequada com vasopressor; ventilação protetora (pressões de via aérea elevadas são esperadas)",
    "SCA refratária → laparotomia descompressiva com abdome aberto (fechamento temporário), pelo cirurgião"
  ],
  exames: [
    "PIA intravesical seriada (registro de horário, valor, posição)",
    "Gasometria com lactato, creatinina, diurese horária",
    "TC de abdome se suspeita de coleção drenável (não remover paciente instável sem necessidade)",
    "USG à beira-leito para ascite/coleções"
  ],
  diferenciais: [
    "Oligúria pré-renal por hipovolemia",
    "Obstrução da sonda vesical",
    "Íleo/obstrução sem HIA significativa",
    "Pneumoperitônio hipertensivo, sangramento intra-abdominal em expansão"
  ],
  tabelas: [
    {
      titulo: "Graus de hipertensão intra-abdominal (WSACS 2013)",
      colunas: ["Grau", "PIA (mmHg)"],
      linhas: [
        ["I", "12–15"],
        ["II", "16–20"],
        ["III", "21–25"],
        ["IV", "> 25"]
      ],
      nota: "SCA = PIA > 20 mmHg sustentada (com ou sem PPA < 60 mmHg) + nova disfunção orgânica. SCA primária: doença abdominopélvica; secundária: causa fora do abdome (ex.: reposição maciça, queimadura); recorrente: após tratamento."
    },
    {
      titulo: "Medida da PIA pela sonda vesical — passo a passo",
      colunas: ["Etapa", "Como fazer"],
      linhas: [
        ["Material", "Sonda vesical de demora (Foley) com sistema fechado, transdutor de pressão (ou coluna de água com régua), torneira de 3 vias, seringa, SF 0,9%"],
        ["Posição", "Decúbito dorsal horizontal (0°), sem contração da musculatura abdominal (sedação/analgesia adequada)"],
        ["Zero", "Transdutor zerado na linha axilar média, no nível da crista ilíaca"],
        ["Instilação", "Clampear o tubo coletor após o ponto de punção/conexão; instilar até 25 mL de SF 0,9% estéril na bexiga"],
        ["Leitura", "Aguardar 30–60 s (relaxamento do detrusor); ler no fim da expiração; expressar em mmHg (1 mmHg = 1,36 cmH₂O)"],
        ["Depois", "Desclampear para drenagem; descontar o volume instilado da diurese; registrar valor e horário"]
      ],
      nota: "Bexiga neurogênica, trauma vesical, hematoma pélvico e aderências podem alterar a medida."
    }
  ],
  prescricao: {
    hospitalar: "HIPERTENSÃO INTRA-ABDOMINAL — CUIDADOS (ADULTO)\n1. Medir PIA intravesical de 4/4 h (técnica padronizada: 0°, fim da expiração, zero na linha axilar média/crista ilíaca, 25 mL de SF). Avisar se PIA ≥ 20 mmHg ou PPA (PAM − PIA) < 60 mmHg.\n2. Sonda nasogástrica aberta em frasco.\n3. Sonda retal / enema conforme avaliação (descompressão colônica), se sem contraindicação.\n4. Cabeceira ≤ 30° (exceto durante a medida: 0°).\n5. Analgesia e sedação adequadas (ex.: fentanil em infusão conforme protocolo da UTI).\n6. Balanço hídrico de 6/6 h; evitar balanço positivo excessivo; reavaliar necessidade de fluido antes de cada bolus.\n7. Remover curativos ou cintas compressivas do abdome.\n8. Paracentese/drenagem de coleções se presentes (cirurgia/radiologia).\n9. Se PIA > 20 mmHg com disfunção orgânica nova, refratária: cirurgia geral para laparotomia descompressiva."
  },
  orientacoesRetorno: [
    "Condição de paciente internado em UTI: a família deve ser informada de que a pressão dentro da barriga está alta e pode exigir cirurgia para aliviar",
    "Após abdome aberto: o fechamento definitivo é feito em etapas, conforme a equipe"
  ],
  encaminhar: [
    "UTI para monitorização",
    "Cirurgia geral: SCA ou HIA progressiva apesar das medidas clínicas"
  ],
  fontes: [
    "WSACS (Abdominal Compartment Society) — Intra-abdominal hypertension and the abdominal compartment syndrome: updated consensus definitions and clinical practice guidelines (Kirkpatrick et al., 2013)",
    "WSES — Open abdomen: guidelines (Coccolini et al., 2018)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

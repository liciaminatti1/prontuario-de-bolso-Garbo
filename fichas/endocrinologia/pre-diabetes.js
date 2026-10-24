// Pré-diabetes
registrarFicha({
  id: "pre-diabetes",
  especialidade: "endocrinologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Pré-diabetes",
  resumo: "Glicemia de jejum 100–125 mg/dL, HbA1c 5,7–6,4% ou glicemia 2 h no TOTG 140–199 mg/dL. Alto risco de DM2 e de doença cardiovascular.",
  palavrasChave: "pre-diabetes pre diabetes glicemia de jejum alterada intolerancia a glicose resistencia insulina metformina prevencao",
  critico: { tempo: "Perder 7% do peso", texto: "Mudança de estilo de vida (perda de 5–7% do peso e 150 min/semana de atividade) reduz em cerca de 58% a progressão para diabetes." },
  alarmes: [
    "Glicemia de jejum ≥ 126, HbA1c ≥ 6,5% ou casual ≥ 200 com sintomas (já é diabetes)",
    "Poliúria, polidipsia e perda de peso",
    "Gestação (rastrear diabetes gestacional)"
  ],
  conduta: [
    "Confirmar com exame repetido ou segundo método",
    "Orientar perda de 5–7% do peso, alimentação com menos ultraprocessados e açúcar, atividade física 150 min/semana",
    "Considerar metformina se alto risco: IMC ≥ 35, < 60 anos, diabetes gestacional prévio ou progressão apesar de MEV",
    "Tratar fatores de risco associados (PA, lipídios, tabagismo)",
    "Repetir HbA1c ou glicemia anualmente"
  ],
  exames: [
    "Glicemia de jejum e HbA1c (anual)",
    "TOTG 75 g se glicemia de jejum 100–125 e dúvida diagnóstica",
    "Perfil lipídico, creatinina, TGO/TGP (esteatose)"
  ],
  diferenciais: ["Diabetes tipo 2 já instalado", "Hiperglicemia por corticoide ou doença aguda", "Diabetes gestacional"],
  tratamento: [
    { droga: "Metformina", linha: "alt", dose: "500 mg, aumentar até 850 mg 12/12h", via: "VO, com refeições", intervalo: "12/12h", duracao: "Contínuo enquanto alto risco", monitorizacao: "TFG, B12, sintomas gastrointestinais", contraindicacoes: "TFG < 30", ajustes: "Formulação XR se intolerância" }
  ],
  prescricao: {
    ambulatorial: "PLANO TERAPÊUTICO\n1. Perder 5 a 7% do peso em 6–12 meses.\n2. Atividade física: 150 minutos por semana (ex.: 30 minutos, 5 dias).\n3. Reduzir açúcar, refrigerantes, sucos, farinhas refinadas e ultraprocessados.\n\nUSO ORAL (se alto risco)\n4. Metformina 850 mg --------------------------------- 60 comprimidos\n   Tomar meio comprimido no jantar por 1 semana; depois 1 comprimido no almoço e 1 no jantar."
  },
  orientacoesRetorno: [
    "Pré-diabetes pode ser revertido: o principal tratamento é a mudança de hábitos",
    "Procurar atendimento se muita sede, urinar muito ou perda de peso sem motivo",
    "Retorno em 3–6 meses para acompanhar peso e hábitos; exames anuais"
  ],
  encaminhar: ["Nutrição / eMulti / grupos de atividade física da UBS"],
  fontes: [
    "SBD — Diretriz Oficial: Pré-diabetes e prevenção do DM2 (2024)",
    "ADA — Standards of Care in Diabetes 2025, seção 3",
    "Diabetes Prevention Program (N Engl J Med 2002)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

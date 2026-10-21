// Psoríase leve
registrarFicha({
  id: "psoriase-leve",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Psoríase leve",
  resumo: "Doença inflamatória crônica com placas eritematosas bem delimitadas e escamas prateadas, em cotovelos, joelhos, couro cabeludo, região lombossacra e unhas. Leve: acometimento corporal pequeno, sem impacto importante na qualidade de vida (PCDT: moderada a grave quando PASI > 10, superfície > 10% ou DLQI > 10). Tratamento tópico na UBS; rastrear artrite e comorbidades.",
  palavrasChave: "psoriase placa escama prateada cotovelo joelho couro cabeludo unha pitting artrite psoriasica clobetasol calcipotriol betametasona acido salicilico corticoide topico pasi dlqi sindrome metabolica",
  alarmes: [
    "Eritrodermia (vermelhidão e descamação em quase todo o corpo), febre, calafrios — internação",
    "Pústulas disseminadas com febre (psoríase pustulosa generalizada) — urgência, frequentemente após suspensão de corticoide sistêmico",
    "Dor e inchaço de articulações, dedos em salsicha, dor lombar inflamatória ou entesite (artrite psoriásica)",
    "Acometimento > 10% da superfície, de face, genitais, palmas e plantas com incapacidade, ou grande impacto emocional (encaminhar)",
    "Piora após iniciar lítio, betabloqueador, antimalárico ou interferon; ou após suspensão de corticoide oral"
  ],
  conduta: [
    "Diagnóstico clínico: placas bem delimitadas, escamas prateadas, sinal da vela e do orvalho sangrento; unhas com depressões puntiformes (pitting) e onicólise",
    "Estimar a extensão (palma da mão do paciente ≈ 1% da superfície) e o impacto na vida",
    "Perguntar sobre dor articular e rigidez matinal (rastreio de artrite psoriásica)",
    "Rastrear comorbidades: obesidade, HAS, diabetes, dislipidemia, esteatose, tabagismo, álcool, depressão",
    "Corpo: corticoide de alta potência (clobetasol 0,05%) por até 2–4 semanas, depois uso intermitente (fins de semana); ou associar/alternar com calcipotriol",
    "Couro cabeludo: clobetasol solução capilar; amolecer escamas com óleo ou ácido salicílico antes",
    "Face, dobras e genitais: corticoide de baixa potência (hidrocortisona 1%) por curtos períodos",
    "Hidratação diária da pele; exposição solar moderada ajuda; evitar traumatismos na pele (fenômeno de Koebner)",
    "Não usar corticoide sistêmico (rebote e risco de forma pustulosa ou eritrodérmica)"
  ],
  diferenciais: [
    "Dermatite seborreica (escamas amareladas oleosas, face e couro cabeludo)",
    "Eczema numular / dermatite atópica (prurido intenso, bordas menos nítidas)",
    "Tinea corporis (borda ativa, centro claro, KOH positivo)",
    "Pitiríase rósea (medalhão-mãe, distribuição em árvore de Natal)",
    "Sífilis secundária (lesões palmoplantares — testar)",
    "Líquen plano, lúpus cutâneo"
  ],
  exames: [
    "Diagnóstico clínico",
    "Comorbidades: glicemia, perfil lipídico, ALT/AST, PA, IMC (rastreio cardiometabólico)",
    "Teste rápido de sífilis se lesões palmoplantares; HIV se quadro súbito e grave",
    "Biópsia de pele (dermatologia) se dúvida diagnóstica"
  ],
  tratamento: [
    {
      droga: "Clobetasol propionato 0,05% creme, pomada ou solução capilar",
      linha: "l1",
      dose: "Camada fina nas placas",
      via: "Tópica",
      intervalo: "1–2 vezes ao dia",
      duracao: "Até 2–4 semanas contínuas; depois manutenção intermitente (2 dias por semana)",
      monitorizacao: "Atrofia, estrias, telangiectasia; não ultrapassar 50 g por semana",
      contraindicacoes: "Face, dobras, genitais; infecção cutânea não tratada; uso em área extensa",
      ajustes: "Componente Especializado do SUS (PCDT Psoríase) — conferir acesso local. Pomada para placas espessas e mãos/pés. Betametasona dipropionato 0,05% é alternativa de alta potência"
    },
    {
      droga: "Calcipotriol 50 mcg/g pomada",
      linha: "l1",
      dose: "Camada fina nas placas",
      via: "Tópica",
      intervalo: "1–2 vezes ao dia",
      duracao: "Uso contínuo enquanto houver lesões; pode ser usado a longo prazo",
      monitorizacao: "Irritação local; cálcio sérico se uso em grandes áreas ou DRC",
      contraindicacoes: "Hipercalcemia, DRC grave; não exceder 100 g por semana; evitar na face",
      ajustes: "Componente Especializado do SUS (PCDT Psoríase). Esquema prático: clobetasol nos dias úteis e calcipotriol nos fins de semana, ou associação fixa calcipotriol + betametasona 1×/dia (fora do SUS)"
    },
    {
      droga: "Ácido salicílico 3–5% em vaselina (manipulado)",
      linha: "adj",
      dose: "Camada fina nas placas espessas",
      via: "Tópica",
      intervalo: "1 vez ao dia, à noite",
      duracao: "Até reduzir as escamas (poucas semanas)",
      monitorizacao: "Irritação",
      contraindicacoes: "Áreas extensas (toxicidade salicílica), alergia a salicilato",
      ajustes: "Remove escamas e melhora a ação do corticoide. Não aplicar junto com calcipotriol (inativa)"
    },
    {
      droga: "Hidrocortisona acetato 1% creme",
      linha: "l1",
      dose: "Camada fina",
      via: "Tópica",
      intervalo: "1–2 vezes ao dia",
      duracao: "Até 2 semanas por vez",
      monitorizacao: "Atrofia",
      contraindicacoes: "Infecção cutânea",
      ajustes: "RENAME. Face, dobras (psoríase invertida) e genitais"
    },
    {
      droga: "Corticoide sistêmico (prednisona, dexametasona IM)",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Pode desencadear psoríase pustulosa generalizada ou eritrodermia ao suspender. Não usar"
    }
  ],
  prescricao: {
    ambulatorial: "PSORÍASE EM PLACAS LEVE — ADULTO\nUSO TÓPICO\n1. Clobetasol 0,05% creme (ou pomada) ----------- 1 bisnaga de 30 g\n   Aplicar camada fina só sobre as placas do corpo 1 vez ao dia (à noite) por 2 a 4 semanas. Depois, usar só aos sábados e domingos. Não usar no rosto, dobras ou genitais. Máximo 50 g por semana.\n2. Calcipotriol 50 mcg/g pomada ------------------ 1 bisnaga\n   Após as 2 a 4 semanas do item 1, aplicar camada fina nas placas 2 vezes ao dia de segunda a sexta-feira, como manutenção. Máximo 100 g por semana.\n3. Hidratante (vaselina ou creme com ureia 10%) -- 1 frasco\n   Aplicar no corpo todo 1 a 2 vezes ao dia, após o banho.\n\nCOURO CABELUDO\n4. Clobetasol 0,05% solução capilar ------------- 1 frasco\n   Aplicar algumas gotas nas placas do couro cabeludo à noite por 2 a 4 semanas; depois 2 vezes por semana.\n   (Escamas grossas: aplicar óleo mineral à noite e lavar pela manhã antes.)\n\nFACE, DOBRAS OU GENITAIS\n5. Hidrocortisona 1% creme ---------------------- 1 bisnaga\n   Aplicar camada fina 1 a 2 vezes ao dia por até 2 semanas; repetir só nas crises."
  },
  orientacoesRetorno: [
    "A psoríase não é contagiosa; é uma doença crônica que tem períodos de melhora e piora",
    "O tratamento controla as placas, mas não cura; manter a hidratação diária",
    "Usar a pomada forte só nas placas e pelo tempo indicado; não passar no rosto e nas dobras",
    "Estresse, álcool, cigarro, infecções de garganta e alguns remédios podem piorar; avise sempre que iniciar um remédio novo",
    "Controlar peso, pressão, glicemia e colesterol: psoríase aumenta o risco cardiovascular",
    "Voltar logo se o corpo todo ficar vermelho, surgirem bolinhas de pus com febre ou dor e inchaço nas articulações",
    "Retornar em 4 a 8 semanas para avaliar a resposta"
  ],
  encaminhar: [
    "Dermatologia: superfície > 10%, PASI ou DLQI > 10, falha do tratamento tópico em 8–12 semanas, acometimento de face, genitais, palmas e plantas com impacto, unhas importantes, dúvida diagnóstica (fototerapia e terapia sistêmica — PCDT)",
    "Reumatologia: suspeita de artrite psoriásica",
    "Urgência/internação: eritrodermia ou psoríase pustulosa generalizada"
  ],
  fontes: [
    "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas da Psoríase (Portaria Conjunta SAES/SCTIE/MS nº 18, de 14/10/2021 — versão vigente consultada em 2026)",
    "Sociedade Brasileira de Dermatologia — Consenso Brasileiro de Psoríase (3ª edição, 2020)",
    "AAD-NPF — Joint guidelines of care for the management of psoriasis with topical therapy and alternative medicine modalities (Elmets CA et al., J Am Acad Dermatol, 2021)",
    "Ministério da Saúde — RENAME 2024"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

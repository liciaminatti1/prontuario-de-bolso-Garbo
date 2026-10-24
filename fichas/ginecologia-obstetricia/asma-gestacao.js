// Asma na gestação
registrarFicha({
  id: "asma-gestacao",
  especialidade: "ginecologia-obstetricia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Asma na gestação",
  resumo: "Gestante com asma: manter o tratamento de controle (asma descontrolada é mais perigosa para o feto que os remédios), tratar crises como fora da gestação e cuidados no parto.",
  palavrasChave: "asma gestacao gestante budesonida formoterol salbutamol corticoide inalatorio prednisona crise asmatica parto carboprost",
  critico: {
    tempo: "Não suspender o corticoide inalatório",
    texto: "Medicamentos de asma (corticoide inalatório, formoterol, salbutamol, prednisona na crise) são seguros na gestação. Na crise: SpO₂ ≥ 95% e tratamento igual ao da não gestante."
  },
  alarmes: [
    "Crise com SpO₂ < 95%, fala entrecortada, uso de musculatura acessória, FC > 120",
    "PFE < 50% do previsto/melhor pessoal ou sem melhora após broncodilatador",
    "Redução de movimentos fetais durante a crise",
    "Uso de salbutamol de alívio quase diário (asma descontrolada)"
  ],
  conduta: [
    "Manter o esquema de controle prévio; budesonida é o corticoide inalatório com mais dados (ver ficha Asma — manutenção)",
    "Avaliar controle a cada consulta (sintomas, despertares, uso de alívio); cerca de 1/3 piora na gestação",
    "Revisar técnica inalatória, adesão, tabagismo e rinite; vacinar contra influenza e dTpa (ver Vacinação na gestação)",
    "Crise: salbutamol inalatório, oxigênio para SpO₂ ≥ 95%, prednisona 40–50 mg/dia por 5–7 dias; crise grave → PS (ver ficha Asma — PS)",
    "Parto: manter as medicações; analgesia regional preferível; quem usou corticoide sistêmico prolongado pode precisar de hidrocortisona no parto",
    "HPP em asmática: evitar carboprost (prostaglandina F2α); ocitocina e misoprostol são seguros",
    "Pós-parto: manter tratamento; todos os medicamentos usuais são compatíveis com amamentação"
  ],
  exames: [
    "Pico de fluxo expiratório (PFE) nas consultas, se disponível",
    "Espirometria se diagnóstico incerto (pode ser feita na gestação)",
    "Crise grave: gasometria (PaCO₂ normal ou alta = gravidade, pois o normal na gestação é 28–32 mmHg)"
  ],
  tratamento: [
    { droga: "Budesonida + formoterol (inalador)", linha: "l1", dose: "Conforme degrau GINA (ex.: 200/6 mcg, 1 inalação 12/12 h e SN)", via: "Inalatória", intervalo: "Manutenção e alívio", duracao: "Contínua", monitorizacao: "Controle dos sintomas", contraindicacoes: "—", ajustes: "Formoterol seguro na gestação" },
    { droga: "Salbutamol 100 mcg/jato", linha: "l1", dose: "2–4 jatos", via: "Inalatória com espaçador", intervalo: "SN (crise: a cada 20 min na 1ª hora)", duracao: "—", monitorizacao: "FC", contraindicacoes: "—", ajustes: "—" },
    { droga: "Prednisona", linha: "l1", dose: "40–50 mg", via: "VO", intervalo: "1×/dia", duracao: "5–7 dias na crise", monitorizacao: "Glicemia (DMG)", contraindicacoes: "—", ajustes: "Benefício supera riscos" }
  ],
  prescricao: {
    ambulatorial: "ASMA NA GESTAÇÃO — MANUTENÇÃO\nUSO INALATÓRIO\n1. Budesonida 200 mcg + formoterol 6 mcg (pó inalante) -- 1 frasco/cápsulas para 30 dias\n   Inalar 1 dose de 12 em 12 horas e 1 dose extra se falta de ar (máximo 12 doses por dia).\n   (Alternativa SUS: Budesonida 200 mcg 1 a 2 jatos de 12/12 h + Salbutamol 100 mcg 2 a 4 jatos se falta de ar, com espaçador.)\n\nCRISE LEVE A MODERADA (USO ORAL)\n2. Prednisona 20 mg --------------------------------- 10 comprimidos\n   Tomar 2 comprimidos pela manhã por 5 dias."
  },
  orientacoesRetorno: [
    "Os remédios de asma são seguros para o bebê; parar o tratamento é que traz risco",
    "Use o espaçador e lave a boca após o corticoide inalado",
    "Procure o PS se a falta de ar não melhorar com a bombinha, se tiver dificuldade para falar ou lábios roxos, ou se o bebê mexer menos",
    "Tome a vacina da gripe na gestação"
  ],
  encaminhar: [
    "Pneumologia / PNAR: asma grave ou não controlada apesar do degrau 4, crise com internação na gestação",
    "PS: crise moderada a grave"
  ],
  fontes: [
    "GINA — Global Strategy for Asthma Management and Prevention (2025)",
    "Ministério da Saúde — Manual de Gestação de Alto Risco (2022)",
    "Sociedade Brasileira de Pneumologia e Tisiologia — Recomendações para o manejo da asma (2020)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

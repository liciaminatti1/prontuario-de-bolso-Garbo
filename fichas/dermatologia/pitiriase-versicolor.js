// Pitiríase versicolor
registrarFicha({
  id: "pitiriase-versicolor",
  especialidade: "dermatologia",
  caminho: "ubs",
  publico: "ambos",
  formato: "curto",
  titulo: "Pitiríase versicolor",
  resumo: "Micose superficial por Malassezia (levedura da flora normal). Manchas hipocrômicas, rosadas ou acastanhadas, com descamação fina ao esticar a pele (sinal de Zileri), em tronco, pescoço e ombros. Comum em adolescentes e adultos jovens, no calor e com suor. Recidiva é frequente.",
  palavrasChave: "pitiriase versicolor pano branco micose de praia malassezia manchas brancas cetoconazol xampu sulfeto de selenio fluconazol itraconazol",
  alarmes: [
    "Manchas hipocrômicas com perda de sensibilidade (pensar em hanseníase — testar sensibilidade)",
    "Lesões extensas ou recorrentes em imunossuprimido",
    "Foliculite pruriginosa no tronco que não melhora com antibiótico (pensar em foliculite por Malassezia)"
  ],
  conduta: [
    "Diagnóstico clínico; sinal de Zileri (descamação ao esticar a pele) ajuda. Micológico direto se dúvida",
    "Testar sensibilidade térmica/tátil nas manchas hipocrômicas (excluir hanseníase)",
    "1ª escolha: tratamento tópico — xampu de cetoconazol 2% ou sulfeto de selênio 2,5% aplicado no corpo, ou creme azólico nas lesões localizadas",
    "Lesões extensas, recidivas frequentes ou falha do tópico: antifúngico oral (fluconazol ou itraconazol). Não usar cetoconazol oral (hepatotoxicidade)",
    "Explicar que a cor da pele demora semanas a meses para voltar ao normal após a cura (não é falha)",
    "Recidiva frequente: profilaxia com xampu 1 vez por semana a 1 vez por mês nos meses quentes"
  ],
  diferenciais: [
    "Pitiríase alba (crianças atópicas, face, bordas mal definidas)",
    "Vitiligo (acrômico, sem descamação, bordas nítidas)",
    "Hanseníase indeterminada (mancha hipocrômica com alteração de sensibilidade)",
    "Hipomelanose macular progressiva (sem descamação, não responde a antifúngico)",
    "Pitiríase rósea e dermatite seborreica"
  ],
  exames: [
    "Nenhum de rotina",
    "Exame micológico direto (raspado ou fita adesiva): dúvida diagnóstica — hifas curtas e esporos ('espaguete com almôndegas')",
    "Lâmpada de Wood (se disponível): fluorescência amarelo-esverdeada em parte dos casos"
  ],
  tratamento: [
    {
      droga: "Cetoconazol 2% xampu",
      linha: "l1",
      dose: "Aplicar em todas as áreas afetadas e ao redor (pescoço, tronco, braços), deixar 5 minutos e enxaguar",
      via: "Tópica",
      intervalo: "1 vez ao dia",
      duracao: "5 dias (alguns esquemas: 3 dias)",
      monitorizacao: "Irritação",
      contraindicacoes: "Hipersensibilidade",
      ajustes: "Adulto e criança. Profilaxia: 1 aplicação por semana a 1 por mês nos meses quentes. Disponibilidade no SUS variável (conferir REMUME)"
    },
    {
      droga: "Sulfeto de selênio 2,5% xampu",
      linha: "alt",
      dose: "Aplicar nas áreas afetadas, deixar 10 minutos e enxaguar",
      via: "Tópica",
      intervalo: "1 vez ao dia",
      duracao: "7 dias",
      monitorizacao: "Irritação, odor",
      contraindicacoes: "Pele inflamada ou com feridas",
      ajustes: "Conferir REMUME"
    },
    {
      droga: "Nitrato de miconazol 2% creme ou cetoconazol 2% creme",
      linha: "alt",
      dose: "Fina camada nas lesões",
      via: "Tópica",
      intervalo: "Miconazol 2×/dia; cetoconazol 1×/dia",
      duracao: "2 semanas",
      monitorizacao: "—",
      contraindicacoes: "—",
      ajustes: "Lesões pouco extensas. Miconazol: RENAME/SUS"
    },
    {
      droga: "Fluconazol (cápsula 150 mg)",
      linha: "alt",
      dose: "Adulto: 300 mg (2 cápsulas)",
      via: "VO",
      intervalo: "1 vez por semana",
      duracao: "2 semanas (total 2 doses)",
      monitorizacao: "Interações, QT",
      contraindicacoes: "Gestação; drogas que prolongam QT",
      ajustes: "Lesões extensas ou recidivantes. RENAME/SUS. Criança: preferir tópico; se oral, discutir com especialista"
    },
    {
      droga: "Itraconazol (cápsula 100 mg)",
      linha: "alt",
      dose: "Adulto: 200 mg",
      via: "VO, com refeição",
      intervalo: "1 vez ao dia",
      duracao: "5 a 7 dias",
      monitorizacao: "Interações (CYP3A4)",
      contraindicacoes: "Insuficiência cardíaca; gestação; interações",
      ajustes: "Alternativa ao fluconazol"
    },
    {
      droga: "Cetoconazol oral (comprimido)",
      linha: "ci",
      dose: "—",
      via: "VO",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Hepatotoxicidade grave, insuficiência adrenal e interações",
      ajustes: "Não usar para micoses superficiais (FDA 2013; EMA suspendeu o uso oral para micoses em 2013). Existem opções orais mais seguras"
    }
  ],
  prescricao: {
    ambulatorial: "ADULTO E CRIANÇA — 1ª ESCOLHA\nUSO TÓPICO\n1. Cetoconazol 2% xampu ------------------------------------- 1 frasco\n   No banho, passar o xampu nas manchas e ao redor (pescoço, tronco, braços), deixar agir 5 minutos e enxaguar. Fazer 1 vez ao dia por 5 dias.\n   OU\n1. Sulfeto de selênio 2,5% xampu ---------------------------- 1 frasco\n   Aplicar nas manchas, deixar 10 minutos e enxaguar, 1 vez ao dia por 7 dias.\n\nPOUCAS MANCHAS\n2. Nitrato de miconazol 2% creme ----------------------------- 1 bisnaga\n   Aplicar fina camada nas manchas 2 vezes ao dia por 2 semanas.\n\nADULTO — MANCHAS EXTENSAS OU RECIDIVA (não gestante)\nUSO ORAL\n3. Fluconazol 150 mg --------------------------------------- 4 cápsulas\n   Tomar 2 cápsulas (300 mg) 1 vez por semana, por 2 semanas.\n   OU\n3. Itraconazol 100 mg -------------------------------------- 10 a 14 cápsulas\n   Tomar 2 cápsulas (200 mg) 1 vez ao dia, após o almoço, por 5 a 7 dias.\n\nPREVENÇÃO DE RECIDIVA (meses quentes)\n4. Cetoconazol 2% xampu: aplicar no corpo por 5 minutos 1 vez por semana (ou a cada 15 dias)."
  },
  orientacoesRetorno: [
    "É um fungo que já vive na pele e cresce com calor e suor; não é falta de higiene e quase não passa para outras pessoas",
    "As manchas brancas podem levar semanas a meses para pegar a cor normal, mesmo curadas; tomar sol com protetor ajuda a igualar a cor",
    "É comum voltar no verão: usar o xampu preventivo conforme orientado",
    "Preferir roupas leves e de algodão; evitar óleos e cremes oleosos no corpo",
    "Retornar se não melhorar a descamação em 4 semanas ou se houver dormência nas manchas"
  ],
  encaminhar: [
    "Dermatologia: dúvida diagnóstica, falha de tratamento oral, recidivas muito frequentes",
    "Avaliação de hanseníase na própria UBS se mancha com alteração de sensibilidade (ver ficha Hanseníase)"
  ],
  fontes: [
    "Health Service Executive (Irlanda) — Pityriasis versicolor guideline (atualização vigente): cetoconazol 2% xampu 1×/dia por 1–5 dias ou sulfeto de selênio por 7 dias",
    "Primary Care Dermatology Society (PCDS) — Pityriasis versicolor (atualização vigente): fluconazol e itraconazol orais para casos extensos",
    "FDA Drug Safety Communication (2013) — cetoconazol oral não deve ser usado para infecções fúngicas da pele e unhas; EMA (2013) — suspensão do cetoconazol oral",
    "Ministério da Saúde — Cadernos de Atenção Básica nº 28, vol. II (2013) — micoses superficiais; RENAME 2024 (miconazol creme, fluconazol)"
  ],
  revisao: "2026-10-21",
  versao: "1.0"
});

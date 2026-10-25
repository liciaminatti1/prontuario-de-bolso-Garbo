// Bronquiectasias não fibrocísticas
registrarFicha({
  id: "bronquiectasias",
  especialidade: "pneumologia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Bronquiectasias (não fibrose cística)",
  resumo: "Dilatação brônquica permanente com tosse produtiva crônica e infecções respiratórias de repetição. Investigação da causa, fisioterapia respiratória diária, tratamento das exacerbações por 14 dias e manejo da Pseudomonas.",
  palavrasChave: "bronquiectasia bronquiectasias tosse produtiva cronica escarro purulento pseudomonas aeruginosa haemophilus exacerbacao fisioterapia respiratoria higiene bronquica solucao salina hipertonica azitromicina macrolideo ciprofloxacino erradicacao abpa aspergilose sequela tuberculose discinesia ciliar imunodeficiencia",
  critico: {
    tempo: "Exacerbação: escarro e 14 dias",
    texto: "Exacerbação: colher escarro para cultura antes do antibiótico e tratar por 14 dias, guiado por culturas prévias. Primeiro isolamento de Pseudomonas: tentar erradicação."
  },
  alarmes: [
    "Hemoptise volumosa (ver ficha hemoptise)",
    "SpO₂ < 92%, taquipneia, confusão ou hipotensão (exacerbação grave / pneumonia)",
    "Febre alta com consolidação no RX",
    "Falha do antibiótico oral após 48–72 h",
    "Perda de peso importante, sudorese noturna (tuberculose, micobactéria não tuberculosa)"
  ],
  conduta: [
    "Suspeitar: tosse com expectoração na maioria dos dias, infecções respiratórias de repetição, hemoptise, DPOC ou asma que não respondem, sequela de tuberculose",
    "Confirmar com TC de tórax de alta resolução (diâmetro brônquico maior que o da artéria adjacente, falta de afilamento periférico)",
    "Investigar a causa em todos (tabela de exames): sequela de infecção/TB, imunodeficiência, ABPA, discinesia ciliar, fibrose cística (jovem), doença autoimune, aspiração, DPOC/asma",
    "Escarro: cultura bacteriana em estabilidade (1 vez ao ano ou mais) e pesquisa/cultura de micobactérias",
    "Fisioterapia respiratória (higiene brônquica) 1–2×/dia, 10–30 min, para todos com tosse produtiva; ensinar técnica (ciclo ativo da respiração, drenagem postural, dispositivos de pressão expiratória oscilante)",
    "Reabilitação pulmonar se dispneia limitante; atividade física regular",
    "Vacinar: influenza anual, pneumocócicas, covid-19 (ver vacinacao-adulto)",
    "Broncodilatador se dispneia ou obstrução na espirometria; corticoide inalatório só se asma ou DPOC associadas (ou eosinofilia), não de rotina",
    "≥ 3 exacerbações/ano apesar das medidas: especialista avalia macrolídeo de longo prazo ou antibiótico inalatório (se Pseudomonas crônica)",
    "Exacerbação: colher escarro, antibiótico por 14 dias (tabela) e intensificar fisioterapia",
    "Primeiro isolamento de Pseudomonas aeruginosa (mesmo em estabilidade): oferecer erradicação e encaminhar ao pneumologista",
    "Tratar a causa: ABPA (corticoide/antifúngico), imunodeficiência (imunoglobulina), refluxo/aspiração"
  ],
  exames: [
    "Pedido: 'TC de tórax de alta resolução sem contraste. Indicação: suspeita de bronquiectasias (tosse produtiva crônica / infecções de repetição).'",
    "Hemograma com eosinófilos; IgG, IgA e IgM séricas; IgE total; IgE específica para Aspergillus fumigatus (ou teste cutâneo) — rastreio de ABPA e imunodeficiência",
    "Escarro: Gram e cultura bacteriana; pesquisa de BAAR, teste rápido molecular para TB e cultura para micobactérias",
    "Espirometria com prova broncodilatadora",
    "Anti-HIV; fator reumatoide e anti-CCP se sintomas articulares; alfa-1 antitripsina se enfisema associado",
    "Teste do suor ou genética para fibrose cística se início na infância/jovem, infertilidade masculina, má absorção ou Pseudomonas/S. aureus recorrentes (especialista)",
    "Investigação de discinesia ciliar (sinusite crônica, otites desde a infância, situs inversus) com especialista",
    "Antes de macrolídeo de longo prazo: excluir micobactéria não tuberculosa (3 escarros), ECG (QTc) e avaliar audição"
  ],
  diferenciais: [
    "DPOC e asma (podem coexistir)",
    "Tuberculose pulmonar ativa e micobactérias não tuberculosas",
    "Bronquite bacteriana persistente",
    "Câncer de pulmão (tabagista com hemoptise ou mudança do padrão da tosse)",
    "Fibrose cística (forma leve do adulto)"
  ],
  tratamento: [
    {
      droga: "Amoxicilina (exacerbação sem cultura prévia de Pseudomonas)",
      linha: "l1",
      dose: "500 mg (até 1 g se H. influenzae com sensibilidade reduzida)",
      via: "VO",
      intervalo: "8/8 h",
      duracao: "14 dias",
      monitorizacao: "Melhora do escarro e da tosse em 48–72 h; cultura",
      contraindicacoes: "Alergia à penicilina",
      ajustes: "Ajustar à última cultura. H. influenzae produtor de betalactamase ou S. aureus: amoxicilina-clavulanato 875/125 mg de 12/12 h. Alergia: doxiciclina 100 mg de 12/12 h ou claritromicina 500 mg de 12/12 h"
    },
    {
      droga: "Ciprofloxacino (Pseudomonas em cultura prévia / erradicação)",
      linha: "l1",
      dose: "750 mg",
      via: "VO",
      intervalo: "12/12 h",
      duracao: "14 dias (exacerbação ou erradicação)",
      monitorizacao: "Tendinopatia, QT, interação com varfarina, glicemia em idosos",
      contraindicacoes: "Gestação, miastenia, aneurisma de aorta, história de tendinopatia por quinolona",
      ajustes: "ClCr < 30: 750 mg de 24/24 h. Erradicação: especialista costuma associar antibiótico inalatório por 3 meses. Levofloxacino 750 mg 1×/dia é alternativa"
    },
    {
      droga: "Ceftazidima ou piperacilina-tazobactam (exacerbação grave / Pseudomonas sem resposta oral)",
      linha: "alt",
      dose: "Ceftazidima 2 g IV de 8/8 h, ou piperacilina-tazobactam 4,5 g IV de 6/6 h a 8/8 h",
      via: "IV",
      intervalo: "8/8 h (ou 6/6 h)",
      duracao: "14 dias (total, incluindo VO)",
      monitorizacao: "Função renal, cultura",
      contraindicacoes: "Alergia grave a betalactâmico",
      ajustes: "Ajuste renal. Associar amicacina 15 mg/kg IV 1×/dia (com nível sérico e função renal) se Pseudomonas multirresistente ou falha"
    },
    {
      droga: "Azitromicina de longo prazo (≥ 3 exacerbações/ano)",
      linha: "adj",
      dose: "250 mg/dia ou 500 mg 3×/semana",
      via: "VO",
      intervalo: "Diária ou 3×/semana",
      duracao: "6–12 meses, reavaliar benefício",
      monitorizacao: "ECG (QTc), audição, transaminases; escarro para micobactéria não tuberculosa",
      contraindicacoes: "QTc prolongado, micobactéria não tuberculosa ativa",
      ajustes: "Indicação e acompanhamento pelo pneumologista. Eritromicina é alternativa"
    },
    {
      droga: "Solução salina hipertônica 7% nebulizada",
      linha: "adj",
      dose: "4–5 mL",
      via: "Inalatória (nebulização), antes da fisioterapia",
      intervalo: "1–2×/dia",
      duracao: "Contínuo se benefício",
      monitorizacao: "Broncoespasmo (1ª dose supervisionada, com salbutamol antes)",
      contraindicacoes: "Broncoespasmo importante na dose teste",
      ajustes: "Para escarro espesso difícil de eliminar; indicação do especialista"
    },
    {
      droga: "Dornase alfa (DNase) em bronquiectasia não fibrocística",
      linha: "ci",
      dose: "—",
      via: "—",
      intervalo: "—",
      duracao: "—",
      monitorizacao: "—",
      contraindicacoes: "Aumentou exacerbações e piorou função pulmonar fora da fibrose cística",
      ajustes: "Só na fibrose cística"
    }
  ],
  tabelas: [
    {
      titulo: "Exacerbação de bronquiectasia (definição de consenso)",
      colunas: ["Critério", "Detalhe"],
      linhas: [
        ["Piora de ≥ 3 sintomas por ≥ 48 h", "Tosse, volume ou consistência do escarro, purulência, dispneia/intolerância ao esforço, fadiga/mal-estar, hemoptise"],
        ["Necessidade de mudança de tratamento", "Médico decide iniciar antibiótico"],
        ["Tratar em casa", "Estável, SpO₂ ≥ 92%, sem consolidação extensa, tolera VO"],
        ["Internar", "SpO₂ < 92%, instabilidade, confusão, falha do oral, Pseudomonas resistente a quinolona"]
      ],
      nota: "Hill AT et al., Eur Respir J 2017."
    },
    {
      titulo: "Falha ou resistência ao antibiótico",
      colunas: ["Situação", "Opção", "Observação"],
      linhas: [
        ["Sem melhora em 48–72 h com amoxicilina", "Amoxicilina-clavulanato 875/125 mg 12/12 h ou ajustar pela cultura colhida", "Rever adesão, fisioterapia e diagnóstico (pneumonia, TB, TEP)"],
        ["Pseudomonas sensível a quinolona", "Ciprofloxacino 750 mg 12/12 h por 14 dias", "Não usar quinolona isolada se resistente"],
        ["Pseudomonas resistente a quinolona ou falha do oral", "Internar: ceftazidima ou piperacilina-tazobactam IV ± amicacina", "Guiar pelo antibiograma; 14 dias no total"],
        ["S. aureus resistente à oxacilina (MRSA)", "Sulfametoxazol-trimetoprima ou doxiciclina VO conforme antibiograma; vancomicina IV se grave", "Discutir com infectologia/pneumologia"],
        ["Alergia grave à penicilina", "Doxiciclina 100 mg 12/12 h ou claritromicina 500 mg 12/12 h; quinolona se Pseudomonas", "Evitar macrolídeo agudo se em uso crônico de azitromicina"],
        ["Exacerbações frequentes apesar de tudo", "Especialista: macrolídeo de longo prazo, antibiótico inalatório (colistina, tobramicina) se Pseudomonas crônica", "Investigar micobactéria não tuberculosa, ABPA e imunodeficiência"]
      ],
      nota: "Sempre colher escarro antes de iniciar ou trocar o antibiótico."
    }
  ],
  prescricao: {
    ambulatorial: "EXACERBAÇÃO SEM PSEUDOMONAS PRÉVIA (USO ORAL)\n1. Amoxicilina 500 mg ------------------------------ 42 cápsulas\n   Tomar 1 cápsula de 8 em 8 horas por 14 dias.\n\nEXACERBAÇÃO COM PSEUDOMONAS EM CULTURA PRÉVIA (USO ORAL)\n1. Ciprofloxacino 500 mg --------------------------- 42 comprimidos\n   Tomar 1 e 1/2 comprimido (750 mg) de 12 em 12 horas por 14 dias.\n\nTODOS\n2. Fisioterapia respiratória: técnica de higiene brônquica orientada, 2 vezes ao dia durante a exacerbação e 1 a 2 vezes ao dia na estabilidade.\n3. Salbutamol spray 100 mcg ----------------------- 1 frasco\n   Inalar 2 jatos com espaçador antes da fisioterapia ou se falta de ar, até de 6 em 6 horas.\n\nPEDIDO DE EXAMES\n- Escarro: bacterioscopia (Gram) e cultura com antibiograma (colher antes do antibiótico).\n- Escarro: pesquisa de BAAR, teste rápido molecular para tuberculose e cultura para micobactérias.\n- Hemograma, IgG, IgA, IgM, IgE total, IgE específica para Aspergillus fumigatus.\n- TC de tórax de alta resolução; espirometria com broncodilatador."
  },
  orientacoesRetorno: [
    "Fazer a fisioterapia respiratória todos os dias, não só na crise; ela ajuda a soltar o catarro e diminui as infecções",
    "Tomar o antibiótico os 14 dias completos",
    "Levar o catarro em pote estéril quando pedido, antes de começar o antibiótico",
    "Manter vacinas em dia (gripe, pneumonia, covid) e não fumar",
    "Voltar logo se sangue em quantidade no catarro, falta de ar forte, febre alta ou piora após 2–3 dias de antibiótico",
    "Retorno em 2–4 semanas após a crise e a cada 3–6 meses na estabilidade"
  ],
  encaminhar: [
    "Pneumologia: todos ao diagnóstico para definir causa; Pseudomonas, ≥ 3 exacerbações/ano, VEF₁ baixo, hemoptise, suspeita de ABPA, imunodeficiência ou fibrose cística",
    "Fisioterapia respiratória / reabilitação pulmonar (NASF/eMulti ou ambulatório)",
    "PS: hemoptise volumosa, insuficiência respiratória, exacerbação grave"
  ],
  fontes: [
    "ERS — European Respiratory Society guidelines for the management of adult bronchiectasis (Eur Respir J, 2017)",
    "SBPT — Consenso brasileiro sobre bronquiectasias não fibrocísticas (J Bras Pneumol, 2019)",
    "BTS — Guideline for bronchiectasis in adults (Thorax, 2019)",
    "Hill AT et al. — Pulmonary exacerbation in adults with bronchiectasis: a consensus definition (Eur Respir J, 2017)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

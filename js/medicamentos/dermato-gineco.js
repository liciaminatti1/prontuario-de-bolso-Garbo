/* Medicamentos: Dermatológicos tópicos e ginecológicos/vaginais/obstétricos.
   Formato em docs/ESQUEMA-MEDICAMENTOS.md. CONFERIR SEMPRE com a bula e o protocolo local. */

adicionarMedicamentos([
  /* ========== DERMATOLÓGICOS: ANTIBACTERIANOS TÓPICOS ========== */
  { id: "mupirocina", nomes: ["Mupirocina", "Bactroban"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Impetigo localizado, foliculite e feridas superficiais infectadas por S. aureus/estreptococo; descolonização nasal de S. aureus.",
    adulto: "Pomada 2%: 3×/dia na lesão por 5–10 dias · descolonização nasal: 2×/dia por 5 dias",
    gestacao: { nivel: "compativel", texto: "Absorção sistêmica desprezível; compatível." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Impetigo extenso, bolhoso com muitas lesões ou sinais sistêmicos: preferir antibiótico oral", "Uso prolongado ou repetido seleciona resistência"],
    prescrever: [
      { contexto: "Impetigo localizado (adulto e criança)", texto: "USO TÓPICO\n1. Mupirocina 2% pomada ----------------------- 1 bisnaga\n   Lavar as lesões com água e sabão, remover as crostas e aplicar uma camada fina 3 vezes ao dia por 5 a 7 dias." },
      { contexto: "Descolonização nasal de S. aureus", texto: "USO NASAL\n1. Mupirocina 2% pomada ----------------------- 1 bisnaga\n   Aplicar pequena quantidade (tamanho de um grão de arroz) na parte interna de cada narina 2 vezes ao dia por 5 dias." }
    ] },
  { id: "acido-fusidico", nomes: ["Ácido fusídico", "acido fusidico", "fusidato de sódio", "Verutex"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Impetigo localizado e infecções cutâneas superficiais por S. aureus (alternativa à mupirocina).",
    adulto: "Creme 2%: 2–3×/dia por 7 dias (até 10 dias)",
    gestacao: { nivel: "compativel", texto: "Uso tópico em área pequena: absorção mínima." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Evitar uso prolongado (resistência)", "Não aplicar nos olhos"],
    prescrever: [
      { contexto: "Impetigo localizado", texto: "USO TÓPICO\n1. Ácido fusídico 2% creme ------------------- 1 bisnaga\n   Após remover as crostas com água e sabão, aplicar nas lesões 3 vezes ao dia por 7 dias." }
    ] },
  { id: "neomicina-bacitracina", nomes: ["Neomicina + bacitracina", "neomicina", "bacitracina", "Nebacetin"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Infecções bacterianas superficiais pequenas (escoriações, pequenos cortes); uso limitado.",
    adulto: "Pomada: 2–3×/dia em área pequena por até 7–10 dias",
    gestacao: { nivel: "cautela", texto: "Evitar áreas extensas ou pele muito lesada (absorção do aminoglicosídeo)." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Neomicina causa dermatite de contato alérgica com frequência", "Áreas extensas, queimaduras e úlceras: risco de nefro e ototoxicidade", "Impetigo: preferir mupirocina ou ácido fusídico"],
    prescrever: [
      { contexto: "Ferimento superficial pequeno", texto: "USO TÓPICO\n1. Neomicina + bacitracina pomada ------------- 1 bisnaga\n   Após limpar com água e sabão, aplicar uma camada fina 3 vezes ao dia por até 7 dias." }
    ] },
  { id: "gentamicina-topica", nomes: ["Gentamicina creme", "gentamicina pomada", "Garamicina creme"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Infecções cutâneas superficiais por bactérias sensíveis (uso restrito, prefira outras opções tópicas).",
    adulto: "Creme 0,1%: 3–4×/dia por 7–10 dias",
    gestacao: { nivel: "cautela", texto: "Evitar áreas extensas (absorção de aminoglicosídeo)." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Uso tópico seleciona resistência a um antibiótico sistêmico importante", "Áreas extensas/queimaduras: nefro e ototoxicidade"],
    prescrever: [
      { contexto: "Infecção cutânea superficial", texto: "USO TÓPICO\n1. Gentamicina 0,1% creme --------------------- 1 bisnaga\n   Aplicar uma camada fina na área afetada 3 vezes ao dia por 7 dias." }
    ] },
  { id: "sulfadiazina-prata", nomes: ["Sulfadiazina de prata", "sulfadiazina argêntica", "Dermazine"], classe: "dermatologicos", receita: "simples", tags: ["sulfonamida"],
    usos: "Prevenção e tratamento de infecção em queimaduras de 2º e 3º graus; úlceras e feridas colonizadas.",
    adulto: "Creme 1%: camada de 3–5 mm 1–2×/dia na troca do curativo",
    gestacao: { nivel: "evitar", texto: "Evitar no fim da gestação e em grandes áreas (absorção da sulfonamida: risco de kernicterus no recém-nascido)." },
    alergia: ["sulfonamidas"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Recém-nascido < 2 meses e prematuros (kernicterus)", "Deficiência de G6PD (hemólise) e alergia a sulfas", "Grandes áreas: leucopenia transitória — hemograma"],
    prescrever: [
      { contexto: "Queimadura / ferida (curativo)", texto: "USO TÓPICO\n1. Sulfadiazina de prata 1% creme ------------- 1 bisnaga\n   Limpar a ferida com SF 0,9%, aplicar uma camada de 3 a 5 mm e cobrir com gaze. Trocar o curativo 1 a 2 vezes ao dia, removendo o creme antigo." }
    ] },
  { id: "nitrofural", nomes: ["Nitrofural", "nitrofurazona", "Furacin"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Feridas e queimaduras superficiais (uso tradicional; baixa evidência e alta sensibilização — preferir outras opções).",
    adulto: "Pomada 0,2%: 1×/dia ou a cada troca de curativo",
    gestacao: { nivel: "cautela", texto: "Dados escassos; usar só se necessário e em área pequena." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Dermatite de contato alérgica frequente", "Insuficiência renal (veículo polietilenoglicol em grandes áreas)"],
    prescrever: [
      { contexto: "Ferida superficial", texto: "USO TÓPICO\n1. Nitrofural 0,2% pomada --------------------- 1 bisnaga\n   Aplicar sobre a ferida limpa 1 vez ao dia, na troca do curativo, por até 7 dias. Suspender se vermelhidão ou coceira." }
    ] },
  { id: "metronidazol-topico", nomes: ["Metronidazol gel", "metronidazol creme", "Rozex"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Rosácea papulopustular (lesões inflamatórias).",
    adulto: "Gel ou creme 0,75%: 2×/dia por 8–12 semanas",
    gestacao: { nivel: "cautela", texto: "Absorção baixa; evitar no 1º trimestre se possível (preferir ácido azelaico)." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Não aplicar perto dos olhos", "Para o gel vaginal (vaginose), ver Metronidazol"],
    prescrever: [
      { contexto: "Rosácea", texto: "USO TÓPICO\n1. Metronidazol 0,75% gel -------------------- 1 bisnaga\n   Lavar o rosto e aplicar uma camada fina nas áreas afetadas 2 vezes ao dia por 8 a 12 semanas.\n   Usar protetor solar e evitar gatilhos (sol, calor, álcool, alimentos picantes)." }
    ] },
  { id: "ivermectina-topica", nomes: ["Ivermectina creme", "Soolantra"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Rosácea papulopustular (ação sobre Demodex).",
    adulto: "Creme 1%: 1×/dia por até 4 meses",
    gestacao: { nivel: "evitar", texto: "Dados insuficientes; evitar." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Não aplicar em olhos, lábios e mucosas"],
    prescrever: [
      { contexto: "Rosácea papulopustular", texto: "USO TÓPICO\n1. Ivermectina 1% creme ----------------------- 1 bisnaga\n   Aplicar uma camada fina no rosto 1 vez ao dia, à noite, por até 4 meses. Reavaliar em 12 semanas." }
    ] },

  /* ========== DERMATOLÓGICOS: ACNE ========== */
  { id: "peroxido-benzoila", nomes: ["Peróxido de benzoíla", "peroxido de benzoila", "Benzac", "Solugel"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Acne leve a moderada (comedões e pápulas); associar a antibiótico tópico/oral para evitar resistência.",
    adulto: "Gel 2,5%, 5% ou 10%: 1×/dia à noite, aumentar para 2×/dia se tolerado",
    gestacao: { nivel: "compativel", texto: "Absorção mínima; opção de escolha para acne na gestação." },
    alergia: [], contra: ["Irritação e ressecamento no início (começar com 2,5–5%)", "Descolore roupas, toalhas e cabelos", "Fotoproteção"],
    prescrever: [
      { contexto: "Acne leve a moderada", texto: "USO TÓPICO\n1. Peróxido de benzoíla 5% gel ---------------- 1 bisnaga\n   Lavar o rosto e, com a pele seca, aplicar uma camada fina em todo o rosto (não só nas espinhas) 1 vez ao dia, à noite. Se tolerar após 2 semanas, usar 2 vezes ao dia.\n   Pode descolorir roupas e toalhas. Usar protetor solar oil-free." }
    ] },
  { id: "clindamicina-topica", nomes: ["Clindamicina gel", "clindamicina solução tópica", "Dalacin T", "Clindoxyl"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Acne inflamatória (pápulas e pústulas), sempre associada ao peróxido de benzoíla; foliculite.",
    adulto: "Gel ou solução 1%: 2×/dia",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Não usar isoladamente na acne (resistência): associar peróxido de benzoíla", "Raramente colite (história de colite por antibiótico)"],
    prescrever: [
      { contexto: "Acne inflamatória (com peróxido de benzoíla)", texto: "USO TÓPICO\n1. Clindamicina 1% gel ------------------------ 1 bisnaga\n   Aplicar uma camada fina nas áreas com acne pela manhã, por 8 a 12 semanas.\n2. Peróxido de benzoíla 5% gel ---------------- 1 bisnaga\n   Aplicar uma camada fina em todo o rosto à noite." }
    ] },
  { id: "eritromicina-topica", nomes: ["Eritromicina tópica", "eritromicina gel", "eritromicina solução", "Stiemycin"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Acne inflamatória (alternativa à clindamicina tópica), sempre com peróxido de benzoíla.",
    adulto: "Solução ou gel 2%: 2×/dia",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: ["macrolideos"], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Resistência alta do C. acnes: não usar isoladamente"],
    prescrever: [
      { contexto: "Acne inflamatória", texto: "USO TÓPICO\n1. Eritromicina 2% solução tópica ------------- 1 frasco\n   Aplicar nas áreas com acne 2 vezes ao dia, associada ao peróxido de benzoíla, por 8 a 12 semanas." }
    ] },
  { id: "adapaleno", nomes: ["Adapaleno", "Differin"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Acne comedoniana e inflamatória (retinoide tópico de 1ª linha); manutenção após o controle.",
    adulto: "Gel ou creme 0,1%: 1×/dia à noite",
    gestacao: { nivel: "evitar", texto: "Retinoide: evitar na gestação (dados insuficientes); suspender se engravidar." },
    alergia: [], contra: ["Irritação, ardor e descamação nas primeiras semanas (piora inicial é comum)", "Fotoproteção obrigatória", "Não aplicar em pele lesada, olhos e lábios"],
    prescrever: [
      { contexto: "Acne", texto: "USO TÓPICO\n1. Adapaleno 0,1% gel ------------------------- 1 bisnaga\n   À noite, com o rosto limpo e seco, aplicar uma camada fina em todo o rosto (quantidade de um grão de ervilha). Pode começar em noites alternadas se irritar.\n   Usar protetor solar pela manhã. Resultado em 8 a 12 semanas." }
    ] },
  { id: "adapaleno-peroxido-benzoila", nomes: ["Adapaleno + peróxido de benzoíla", "adapaleno + peroxido de benzoila", "Epiduo", "Epiduo Forte"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Acne moderada (comedões + pápulas/pústulas); boa opção de combinação sem antibiótico.",
    adulto: "Gel 0,1%/2,5% (ou 0,3%/2,5%): 1×/dia à noite",
    gestacao: { nivel: "evitar", texto: "Contém retinoide: evitar na gestação." },
    alergia: [], contra: ["Irritação inicial", "Descolore tecidos e cabelos", "Fotoproteção"],
    prescrever: [
      { contexto: "Acne moderada", texto: "USO TÓPICO\n1. Adapaleno 0,1% + peróxido de benzoíla 2,5% gel ---- 1 bisnaga\n   À noite, aplicar uma camada fina em todo o rosto limpo e seco, por 12 semanas.\n   Usar protetor solar pela manhã." }
    ] },
  { id: "tretinoina-topica", nomes: ["Tretinoína", "tretinoina", "ácido retinoico", "acido retinoico", "Vitacid", "Vitanol-A"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Acne comedoniana; fotoenvelhecimento e melasma (associada).",
    adulto: "Creme ou gel 0,025%, 0,05% ou 0,1%: 1×/dia à noite",
    gestacao: { nivel: "contraindicado", texto: "Retinoide: contraindicada na gestação." },
    alergia: [], contra: ["Gestação ou intenção de engravidar", "Irritação, descamação e fotossensibilidade (fotoproteção rigorosa)", "Não associar ao peróxido de benzoíla no mesmo horário (inativa a tretinoína)"],
    prescrever: [
      { contexto: "Acne comedoniana", texto: "USO TÓPICO\n1. Tretinoína 0,025% creme --------------------- 1 bisnaga\n   À noite, 20 minutos após lavar e secar o rosto, aplicar uma camada fina em todo o rosto. Começar em noites alternadas por 2 semanas.\n   Usar protetor solar diariamente. Não usar se estiver grávida." }
    ] },
  { id: "acido-azelaico", nomes: ["Ácido azelaico", "acido azelaico", "Azelan"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Acne leve a moderada, rosácea papulopustular e melasma/hiperpigmentação pós-inflamatória; opção na gestação.",
    adulto: "Gel 15% ou creme 20%: 2×/dia",
    gestacao: { nivel: "compativel", texto: "Absorção baixa; opção para acne, rosácea e melasma na gestação." },
    alergia: [], contra: ["Ardor e prurido transitórios", "Evitar olhos e mucosas"],
    prescrever: [
      { contexto: "Acne / rosácea / melasma", texto: "USO TÓPICO\n1. Ácido azelaico 15% gel ---------------------- 1 bisnaga\n   Aplicar uma camada fina nas áreas afetadas 2 vezes ao dia (manhã e noite), com a pele limpa, por 8 a 12 semanas.\n   Usar protetor solar." }
    ] },

  /* ========== DERMATOLÓGICOS: CERATOLÍTICOS, HIDRATANTES E BARREIRA ========== */
  { id: "acido-salicilico-topico", nomes: ["Ácido salicílico", "acido salicilico", "ácido salicílico + ácido lático", "Duofilm"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Verrugas vulgares e plantares (ceratolítico); hiperceratoses; descamação do couro cabeludo (xampu/loção).",
    adulto: "Verrugas: solução de ácido salicílico + ácido lático 1×/dia por até 12 semanas",
    gestacao: { nivel: "cautela", texto: "Uso em área pequena é aceitável; evitar áreas extensas (absorção de salicilato)." },
    alergia: [], contra: ["Não aplicar em face, genitais, mucosas ou pele sã ao redor", "Diabetes ou insuficiência vascular nos pés: risco de úlcera", "Criança pequena: risco de intoxicação por salicilato em áreas extensas"],
    prescrever: [
      { contexto: "Verruga vulgar ou plantar", texto: "USO TÓPICO\n1. Ácido salicílico + ácido lático solução ----- 1 frasco\n   À noite, após amolecer a verruga em água morna por 5 minutos e lixar a superfície, aplicar apenas sobre a verruga (proteger a pele ao redor com vaselina). Repetir diariamente por até 12 semanas." }
    ] },
  { id: "ureia-topica", nomes: ["Ureia creme", "ureia", "uréia"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Xerose (pele seca), ictiose, hiperceratose plantar e calosidades, dermatite atópica (hidratação).",
    adulto: "Creme 10% (hidratante) ou 20% (hiperceratose): 1–2×/dia",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Ardor em pele inflamada, fissurada ou na criança pequena (preferir emoliente simples)"],
    prescrever: [
      { contexto: "Pele seca / xerose", texto: "USO TÓPICO\n1. Ureia 10% creme ----------------------------- 1 bisnaga\n   Aplicar no corpo logo após o banho, com a pele ainda úmida, 1 a 2 vezes ao dia. Uso contínuo." },
      { contexto: "Hiperceratose / calosidade plantar", texto: "USO TÓPICO\n1. Ureia 20% creme ----------------------------- 1 bisnaga\n   Aplicar nos pés à noite, após o banho. Uso contínuo." }
    ] },
  { id: "emoliente", nomes: ["Emoliente", "hidratante", "vaselina sólida", "petrolato", "cold cream"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Base do tratamento da dermatite atópica e da xerose; restauração da barreira cutânea.",
    adulto: "Aplicar em todo o corpo 1–2×/dia, logo após o banho",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Preferir produtos sem perfume", "Evitar emolientes com ureia/ácidos em pele muito inflamada de criança pequena"],
    prescrever: [
      { contexto: "Dermatite atópica / pele seca", texto: "USO TÓPICO\n1. Vaselina sólida (ou hidratante sem perfume) --- 1 pote\n   Aplicar em todo o corpo, com a pele ainda úmida, até 3 minutos após o banho, 1 a 2 vezes ao dia. Uso contínuo, mesmo sem lesões.\n   Banho morno e rápido, sabonete neutro só nas dobras; secar sem esfregar." }
    ] },
  { id: "oxido-zinco", nomes: ["Óxido de zinco", "oxido de zinco", "pasta d'água", "Hipoglós", "óxido de zinco + vitamina A + vitamina D"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatite de fraldas (barreira), assaduras, dermatites úmidas e exsudativas (pasta d'água).",
    adulto: "Pomada/pasta: a cada troca de fralda · pasta d'água: 2–3×/dia",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Dermatite de fraldas com lesões satélites (Candida): associar antifúngico (nistatina ou miconazol)"],
    prescrever: [
      { contexto: "Dermatite de fraldas", texto: "USO TÓPICO\n1. Óxido de zinco pomada ----------------------- 1 bisnaga\n   A cada troca de fralda, após limpar com água morna e secar bem, aplicar uma camada espessa na área da fralda. Não precisa remover todo o produto a cada troca.\n   Trocar as fraldas com frequência e deixar a pele ao ar quando possível." },
      { contexto: "Dermatite exsudativa / varicela (pasta d'água)", texto: "USO TÓPICO\n1. Pasta d'água ---------------------------------- 1 frasco\n   Aplicar nas lesões 2 a 3 vezes ao dia." }
    ] },
  { id: "dexpantenol", nomes: ["Dexpantenol", "pantenol", "Bepantol"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Assaduras, pele ressecada e irritada, pequenas escoriações, fissuras de mamilo, cuidados pós-procedimento.",
    adulto: "Creme/pomada 5%: 1–3×/dia",
    gestacao: { nivel: "compativel", texto: "Compatível, inclusive na amamentação." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Assadura / pele irritada", texto: "USO TÓPICO\n1. Dexpantenol 5% pomada ----------------------- 1 bisnaga\n   Aplicar uma camada fina na área afetada 2 a 3 vezes ao dia ou a cada troca de fralda." }
    ] },
  { id: "acidos-graxos-essenciais", nomes: ["Ácidos graxos essenciais", "acidos graxos essenciais", "AGE", "óleo de girassol", "Dersani"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Prevenção de lesão por pressão (pele íntegra) e cobertura de feridas em fase de granulação (curativo).",
    adulto: "Óleo/loção: aplicar na pele íntegra 2–3×/dia ou na ferida na troca do curativo",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Evidência limitada; não substitui mudança de decúbito e alívio de pressão", "Feridas infectadas ou com necrose: tratar/desbridar antes"],
    prescrever: [
      { contexto: "Prevenção de lesão por pressão", texto: "USO TÓPICO\n1. Ácidos graxos essenciais (AGE) loção -------- 1 frasco\n   Aplicar com massagem suave nas proeminências ósseas (pele íntegra) 2 a 3 vezes ao dia.\n   Mudar de posição a cada 2 horas." },
      { contexto: "Ferida em granulação", texto: "USO TÓPICO\n1. Ácidos graxos essenciais (AGE) óleo --------- 1 frasco\n   Após limpar com SF 0,9%, umedecer gaze com o óleo, cobrir a ferida e trocar o curativo 1 vez ao dia ou quando saturado." }
    ] },
  { id: "colagenase", nomes: ["Colagenase", "colagenase + cloranfenicol", "Kollagenase", "Iruxol"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Desbridamento enzimático de úlceras e feridas com tecido necrótico ou fibrina (lesão por pressão, úlcera venosa).",
    adulto: "Pomada: camada de cerca de 2 mm 1×/dia (até 2×/dia) na troca do curativo",
    gestacao: { nivel: "cautela", texto: "Contém cloranfenicol: usar em área pequena e só se necessário." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Inativada por metais (prata), iodo e detergentes: não associar", "Suspender quando a ferida estiver limpa (granulação)", "Cloranfenicol: aplasia de medula é muito rara, mas evitar uso prolongado"],
    prescrever: [
      { contexto: "Ferida com necrose / fibrina", texto: "USO TÓPICO\n1. Colagenase + cloranfenicol pomada ---------- 1 bisnaga\n   Limpar a ferida com SF 0,9%, aplicar uma camada de cerca de 2 mm somente sobre o tecido necrótico e cobrir com gaze umedecida em SF. Trocar 1 vez ao dia.\n   Suspender quando o leito estiver limpo." }
    ] },
  { id: "papaina", nomes: ["Papaína", "papaina", "papaína gel"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Desbridamento químico e estímulo à cicatrização de feridas (manipulada; concentração conforme o tecido).",
    adulto: "Gel manipulado: concentração menor em granulação e maior em esfacelo/necrose, conforme protocolo de feridas local; troca diária",
    gestacao: { nivel: "cautela", texto: "Dados escassos; uso tópico em feridas é aceito quando indicado." },
    alergia: [], contra: ["Inativada por metais (ferro, prata), iodo e oxidantes", "Ardor no local", "Preparar/usar conforme o protocolo de feridas da unidade (concentrações variam)"],
    prescrever: [
      { contexto: "Ferida com esfacelo/necrose", texto: "USO TÓPICO\n1. Papaína gel ___% (manipulado) --------------- 1 frasco\n   Limpar a ferida com SF 0,9%, aplicar o gel sobre o leito da ferida e cobrir com gaze. Trocar 1 vez ao dia.\n   (Concentração conforme o tecido e o protocolo de feridas local.)" }
    ] },
  { id: "permanganato-potassio", nomes: ["Permanganato de potássio", "permanganato de potassio", "KMnO4"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Banhos e compressas antissépticas e secativas: lesões exsudativas, eczema agudo vesiculoso, impetigo extenso (adjuvante), pé de atleta macerado.",
    adulto: "Comprimido 100 mg diluído em 4 L de água (1:40.000): compressa ou banho 1–2×/dia por 10–15 min",
    gestacao: { nivel: "compativel", texto: "Compatível (uso externo diluído)." },
    alergia: [], contra: ["NUNCA ingerir (cáustico); guardar longe de crianças", "Dissolver totalmente antes do uso: cristais não dissolvidos queimam a pele", "Mancha pele, unhas e roupas", "Não usar por tempo prolongado (resseca)"],
    prescrever: [
      { contexto: "Compressas / banho secativo", texto: "USO TÓPICO\n1. Permanganato de potássio 100 mg ------------ 10 comprimidos\n   Dissolver totalmente 1 comprimido em 4 litros de água morna (deve ficar cor-de-rosa clara). Fazer compressas ou banho de imersão da área por 10 a 15 minutos, 2 vezes ao dia, por até 7 dias.\n   NÃO INGERIR. Não aplicar o comprimido diretamente na pele." }
    ] },
  { id: "cloreto-aluminio", nomes: ["Cloreto de alumínio", "cloreto de aluminio", "cloreto de alumínio hexaidratado"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Hiperidrose axilar, palmar e plantar (manipulado).",
    adulto: "Solução 15–20% (manipulada): à noite, na pele seca, diariamente até controle; depois 1–2×/semana",
    gestacao: { nivel: "compativel", texto: "Uso tópico; absorção mínima." },
    alergia: [], contra: ["Irritação e ardor: aplicar com a pele totalmente seca e lavar pela manhã", "Não aplicar em pele lesada ou logo após depilar"],
    prescrever: [
      { contexto: "Hiperidrose axilar", texto: "USO TÓPICO\n1. Cloreto de alumínio hexaidratado 20% solução (manipular) ---- 1 frasco\n   À noite, com as axilas bem secas, aplicar uma camada fina. Lavar pela manhã. Usar todas as noites até melhorar e depois 1 a 2 vezes por semana." }
    ] },

  /* ========== DERMATOLÓGICOS: CORTICOIDES TÓPICOS ========== */
  { id: "hidrocortisona-topica", nomes: ["Hidrocortisona creme", "acetato de hidrocortisona", "Berlison"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatites leves em face, dobras, região genital e criança (corticoide de baixa potência).",
    adulto: "Creme 1%: 1–2×/dia por até 2 semanas",
    gestacao: { nivel: "compativel", texto: "Baixa potência: compatível." },
    alergia: [], contra: ["Infecção cutânea não tratada (fungo, bactéria, herpes, escabiose)", "Uso contínuo prolongado na face: dermatite perioral e atrofia"],
    prescrever: [
      { contexto: "Dermatite em face / dobras / criança", texto: "USO TÓPICO\n1. Acetato de hidrocortisona 1% creme ---------- 1 bisnaga\n   Aplicar uma camada fina nas lesões 2 vezes ao dia por 7 dias (máximo 14 dias)." }
    ] },
  { id: "dexametasona-topica", nomes: ["Dexametasona creme", "acetato de dexametasona creme"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatites (atópica, de contato), picadas de inseto, prurido inflamatório — corticoide tópico de potência baixa a média (RENAME).",
    adulto: "Creme 0,1%: 2–3×/dia por até 2 semanas",
    gestacao: { nivel: "compativel", texto: "Área pequena e por pouco tempo: compatível." },
    alergia: [], contra: ["Infecção cutânea não tratada", "Evitar uso prolongado em face, dobras e genitais", "Criança: áreas pequenas e por curto período"],
    prescrever: [
      { contexto: "Dermatite / picada de inseto", texto: "USO TÓPICO\n1. Acetato de dexametasona 0,1% creme --------- 1 bisnaga\n   Aplicar uma camada fina nas lesões 2 vezes ao dia por 7 dias." }
    ] },
  { id: "desonida", nomes: ["Desonida", "Desonol", "Adinos"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatite atópica e seborreica em face, dobras e criança (baixa potência).",
    adulto: "Creme ou loção 0,05%: 1–2×/dia por até 2–4 semanas",
    gestacao: { nivel: "compativel", texto: "Baixa potência: compatível em áreas limitadas." },
    alergia: [], contra: ["Infecção cutânea não tratada", "Evitar curativo oclusivo e fraldas (aumenta absorção)"],
    prescrever: [
      { contexto: "Dermatite em face / criança", texto: "USO TÓPICO\n1. Desonida 0,05% creme ------------------------ 1 bisnaga\n   Aplicar uma camada fina nas lesões 1 a 2 vezes ao dia por 7 a 14 dias." },
      { contexto: "Dermatite seborreica do couro cabeludo", texto: "USO TÓPICO\n1. Desonida 0,05% loção capilar ---------------- 1 frasco\n   Aplicar no couro cabeludo à noite por 7 a 14 dias, associado ao xampu antifúngico." }
    ] },
  { id: "mometasona-topica", nomes: ["Mometasona creme", "furoato de mometasona creme", "mometasona pomada", "Elocom"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatite atópica moderada, psoríase, dermatite de contato, líquen simples (média/alta potência, dose 1×/dia).",
    adulto: "Creme ou pomada 0,1%: 1×/dia por até 2–3 semanas",
    gestacao: { nivel: "cautela", texto: "Áreas pequenas e curto período; evitar áreas extensas e oclusão." },
    alergia: [], contra: ["Infecção cutânea não tratada", "Evitar face, dobras e genitais (ou só por poucos dias)", "Uso prolongado: atrofia, estrias, absorção sistêmica"],
    prescrever: [
      { contexto: "Dermatite / psoríase", texto: "USO TÓPICO\n1. Furoato de mometasona 0,1% creme ----------- 1 bisnaga\n   Aplicar uma camada fina nas lesões 1 vez ao dia por até 14 dias.\n   Não aplicar no rosto, dobras ou genitais." }
    ] },
  { id: "metilprednisolona-topica", nomes: ["Aceponato de metilprednisolona", "metilprednisolona creme", "Advantan"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatite atópica e eczemas (potência média, 1×/dia).",
    adulto: "Creme/pomada 0,1%: 1×/dia por até 2 semanas (adulto) e 4 semanas na criança conforme bula",
    gestacao: { nivel: "cautela", texto: "Áreas pequenas e curto período." },
    alergia: [], contra: ["Infecção cutânea não tratada", "Evitar uso prolongado em face e dobras"],
    prescrever: [
      { contexto: "Dermatite atópica / eczema", texto: "USO TÓPICO\n1. Aceponato de metilprednisolona 0,1% creme --- 1 bisnaga\n   Aplicar uma camada fina nas lesões 1 vez ao dia por até 14 dias." }
    ] },
  { id: "clobetasol", nomes: ["Clobetasol", "propionato de clobetasol", "Psorex", "Clob-X"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Psoríase em placas, líquen plano/escleroso, eczema crônico liquenificado, lúpus discoide (muito alta potência).",
    adulto: "Creme/pomada 0,05%: 1–2×/dia por até 2 semanas (máx. 50 g/semana) · xampu 0,05%: 15 min antes de enxaguar",
    gestacao: { nivel: "evitar", texto: "Muito alta potência: evitar; se indispensável, área pequena e curto período." },
    alergia: [], contra: ["Não usar em face, dobras, genitais (exceto líquen escleroso sob orientação) nem em < 12 anos sem especialista", "Infecção cutânea não tratada, rosácea, acne", "Uso prolongado: atrofia, estrias, supressão adrenal"],
    prescrever: [
      { contexto: "Psoríase em placas / eczema liquenificado", texto: "USO TÓPICO\n1. Propionato de clobetasol 0,05% pomada ------ 1 bisnaga\n   Aplicar uma camada fina somente nas placas 1 a 2 vezes ao dia por até 14 dias. Depois, reduzir para 2 vezes por semana (fins de semana) se necessário.\n   Não aplicar no rosto, dobras ou genitais." },
      { contexto: "Psoríase do couro cabeludo (xampu)", texto: "USO TÓPICO\n1. Propionato de clobetasol 0,05% xampu ------- 1 frasco\n   Aplicar no couro cabeludo seco, deixar agir 15 minutos e enxaguar, 1 vez ao dia por até 4 semanas." }
    ] },
  { id: "triancinolona-orabase", nomes: ["Triancinolona orabase", "acetonida de triancinolona pasta oral", "Omcilon-A orabase"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Aftas (estomatite aftosa recorrente) e lesões inflamatórias da mucosa oral.",
    adulto: "Pasta 1 mg/g: 2–3×/dia após as refeições e ao deitar",
    gestacao: { nivel: "compativel", texto: "Uso local em pequena quantidade: compatível." },
    alergia: [], contra: ["Lesões orais infecciosas (herpes, candidíase) ou úlcera que não cicatriza em 2–3 semanas (investigar)"],
    prescrever: [
      { contexto: "Afta", texto: "USO TÓPICO\n1. Acetonida de triancinolona 1 mg/g pasta oral (orabase) ---- 1 bisnaga\n   Secar a lesão e aplicar pequena quantidade sobre a afta, sem esfregar, 3 vezes ao dia após as refeições e ao deitar, por até 7 dias." }
    ] },
  { id: "betametasona-gentamicina", nomes: ["Betametasona + gentamicina", "Diprogenta"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatoses inflamatórias com infecção bacteriana secundária (uso curto; preferir tratar separadamente).",
    adulto: "Creme/pomada: 2×/dia por até 7–14 dias",
    gestacao: { nivel: "cautela", texto: "Áreas pequenas e curto período." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Não usar em micoses (corticoide piora) nem em face/dobras por tempo prolongado", "Combinações corticoide + antibiótico favorecem resistência e mascaram infecção"],
    prescrever: [
      { contexto: "Dermatite com infecção secundária", texto: "USO TÓPICO\n1. Dipropionato de betametasona + sulfato de gentamicina creme ---- 1 bisnaga\n   Aplicar uma camada fina nas lesões 2 vezes ao dia por 7 dias." }
    ] },
  { id: "calcipotriol-betametasona", nomes: ["Calcipotriol + betametasona", "calcipotriol", "Daivobet", "Xamiol"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Psoríase em placas (corpo: pomada/gel) e do couro cabeludo (gel).",
    adulto: "1×/dia por até 4 semanas (máx. 15 g/dia e 30% da superfície corporal)",
    gestacao: { nivel: "cautela", texto: "Dados limitados; área pequena e só se necessário." },
    alergia: [], contra: ["Hipercalcemia ou distúrbio do metabolismo do cálcio", "Não usar em face, dobras e genitais", "Psoríase eritrodérmica ou pustulosa"],
    prescrever: [
      { contexto: "Psoríase em placas", texto: "USO TÓPICO\n1. Calcipotriol 50 mcg/g + betametasona 0,5 mg/g pomada ---- 1 bisnaga\n   Aplicar uma camada fina somente nas placas 1 vez ao dia por até 4 semanas.\n   Não usar mais de 15 g por dia." }
    ] },
  { id: "coaltar", nomes: ["Coaltar", "alcatrão de hulha", "LCD", "liquor carbonis detergens", "xampu de coaltar"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Psoríase do couro cabeludo e corpo, dermatite seborreica (xampu ou LCD manipulado).",
    adulto: "Xampu: 2–3×/semana · LCD 5–20% em creme/loção (manipulado): 1–2×/dia",
    gestacao: { nivel: "evitar", texto: "Evitar (hidrocarbonetos aromáticos; dados insuficientes)." },
    alergia: [], contra: ["Fotossensibilidade: evitar sol nas áreas tratadas", "Foliculite e irritação", "Odor e mancha em roupas", "Não usar em pele erosada ou psoríase pustulosa/eritrodérmica"],
    prescrever: [
      { contexto: "Psoríase / dermatite seborreica do couro cabeludo", texto: "USO TÓPICO\n1. Xampu de coaltar ----------------------------- 1 frasco\n   Lavar o couro cabeludo, deixar agir 5 minutos e enxaguar bem, 2 a 3 vezes por semana." }
    ] },

  /* ========== DERMATOLÓGICOS: ANTIFÚNGICOS TÓPICOS ========== */
  { id: "clotrimazol", nomes: ["Clotrimazol", "Canesten"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Tinhas (corpo, crural, pés), candidíase cutânea e intertrigo, pitiríase versicolor localizada.",
    adulto: "Creme ou solução 1%: 2–3×/dia por 2–4 semanas",
    gestacao: { nivel: "compativel", texto: "Absorção mínima; compatível." },
    alergia: [], contra: ["Lesões extensas, couro cabeludo e unhas: preferir tratamento oral", "Não associar corticoide em micose"],
    prescrever: [
      { contexto: "Tinha / candidíase cutânea", texto: "USO TÓPICO\n1. Clotrimazol 1% creme ------------------------- 1 bisnaga\n   Aplicar na lesão e 2 cm ao redor 2 vezes ao dia por 2 a 4 semanas, mantendo por 1 semana após a melhora.\n   Secar bem dobras e entre os dedos." }
    ] },
  { id: "isoconazol", nomes: ["Isoconazol", "nitrato de isoconazol", "Icaden", "Gyno-Icaden"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Tinhas, candidíase cutânea, eritrasma; candidíase vulvovaginal (creme vaginal ou óvulo).",
    adulto: "Creme 1%: 1×/dia por 2–4 semanas · creme vaginal 1%: 1 aplicador à noite por 7 dias · óvulo 600 mg: dose única",
    gestacao: { nivel: "cautela", texto: "Absorção baixa; na gestação preferir miconazol, clotrimazol ou nistatina (mais dados)." },
    alergia: [], contra: ["Óvulo/creme vaginal: pode danificar preservativo de látex"],
    prescrever: [
      { contexto: "Micose de pele", texto: "USO TÓPICO\n1. Nitrato de isoconazol 1% creme -------------- 1 bisnaga\n   Aplicar na área afetada 1 vez ao dia por 2 a 4 semanas." },
      { contexto: "Candidíase vulvovaginal — óvulo", texto: "USO VAGINAL\n1. Nitrato de isoconazol 600 mg óvulo ---------- 1 óvulo\n   Introduzir 1 óvulo profundamente na vagina à noite, ao deitar, dose única." }
    ] },
  { id: "isoconazol-difluocortolona", nomes: ["Isoconazol + difluocortolona", "Travocort"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Micoses de pele muito inflamadas/pruriginosas (tinha crural, intertrigo), por poucos dias, seguidas de antifúngico isolado.",
    adulto: "Creme: 2×/dia por no máximo 2 semanas (depois manter só o antifúngico)",
    gestacao: { nivel: "cautela", texto: "Áreas pequenas e curto período." },
    alergia: [], contra: ["Não usar por mais de 2 semanas nem em grandes áreas", "Evitar em face e genitais por tempo prolongado (corticoide)"],
    prescrever: [
      { contexto: "Micose inflamada (tinha crural / intertrigo)", texto: "USO TÓPICO\n1. Nitrato de isoconazol + valerato de difluocortolona creme ---- 1 bisnaga\n   Aplicar na área afetada 2 vezes ao dia por até 7 dias.\n2. Nitrato de isoconazol 1% creme -------------- 1 bisnaga\n   Depois, aplicar 1 vez ao dia por mais 2 a 3 semanas." }
    ] },
  { id: "oxiconazol", nomes: ["Oxiconazol", "nitrato de oxiconazol", "Oceral"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Tinhas (corpo, crural, pés), candidíase cutânea e pitiríase versicolor.",
    adulto: "Creme ou loção 1%: 1–2×/dia por 2–4 semanas (tinha dos pés até 4–6 semanas)",
    gestacao: { nivel: "cautela", texto: "Absorção baixa; preferir azóis com mais dados na gestação." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Tinha / micose de pele", texto: "USO TÓPICO\n1. Nitrato de oxiconazol 1% creme -------------- 1 bisnaga\n   Aplicar na área afetada 1 vez ao dia, à noite, por 2 a 4 semanas." }
    ] },
  { id: "sertaconazol", nomes: ["Sertaconazol", "nitrato de sertaconazol", "Zalain"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Tinhas, candidíase cutânea e pitiríase versicolor.",
    adulto: "Creme 2%: 1–2×/dia por até 4 semanas",
    gestacao: { nivel: "cautela", texto: "Absorção baixa; preferir azóis com mais dados na gestação." },
    alergia: [], contra: [],
    prescrever: [
      { contexto: "Tinha / micose de pele", texto: "USO TÓPICO\n1. Nitrato de sertaconazol 2% creme ----------- 1 bisnaga\n   Aplicar na área afetada 2 vezes ao dia por 4 semanas." }
    ] },
  { id: "tioconazol", nomes: ["Tioconazol", "Tralen"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Micoses de pele (creme/loção) e onicomicose leve distal (solução para unhas).",
    adulto: "Creme/loção 1%: 1–2×/dia por 2–6 semanas · solução 28% (unhas): 2×/dia por 6–12 meses",
    gestacao: { nivel: "cautela", texto: "Absorção baixa; preferir azóis com mais dados na gestação." },
    alergia: [], contra: ["Onicomicose extensa ou com matriz acometida: tratamento oral"],
    prescrever: [
      { contexto: "Onicomicose leve (solução para unhas)", texto: "USO TÓPICO\n1. Tioconazol 28% solução para unhas ---------- 1 frasco\n   Aplicar sobre a unha afetada e a pele ao redor 2 vezes ao dia por 6 a 12 meses." },
      { contexto: "Micose de pele", texto: "USO TÓPICO\n1. Tioconazol 1% creme ------------------------- 1 bisnaga\n   Aplicar na área afetada 2 vezes ao dia por 2 a 4 semanas." }
    ] },
  { id: "ciclopirox", nomes: ["Ciclopirox", "ciclopirox olamina", "Loprox", "Fungirox", "Micolamina"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Micoses de pele e dermatite seborreica (creme/xampu); onicomicose leve a moderada sem matriz (esmalte 8%).",
    adulto: "Creme 1%: 2×/dia por 2–4 semanas · esmalte 8%: conforme bula do produto, por 6 meses (mãos) a 9–12 meses (pés)",
    gestacao: { nivel: "cautela", texto: "Absorção baixa; usar se necessário." },
    alergia: [], contra: ["Onicomicose com mais de 50% da unha ou matriz acometida: tratamento oral"],
    prescrever: [
      { contexto: "Micose de pele", texto: "USO TÓPICO\n1. Ciclopirox olamina 1% creme ---------------- 1 bisnaga\n   Aplicar na área afetada 2 vezes ao dia por 2 a 4 semanas." },
      { contexto: "Onicomicose leve (esmalte)", texto: "USO TÓPICO\n1. Ciclopirox 8% esmalte ----------------------- 1 frasco\n   Lixar a superfície da unha e aplicar conforme a bula do produto. Tratar por 6 meses (mãos) a 12 meses (pés)." }
    ] },
  { id: "amorolfina", nomes: ["Amorolfina", "Loceryl"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Onicomicose distal leve a moderada sem acometimento da matriz (até 2–3 unhas).",
    adulto: "Esmalte 5%: 1–2×/semana por 6 meses (mãos) a 9–12 meses (pés)",
    gestacao: { nivel: "cautela", texto: "Absorção mínima; preferir adiar o tratamento da onicomicose." },
    alergia: [], contra: ["Onicomicose extensa ou com matriz: tratamento oral (terbinafina)"],
    prescrever: [
      { contexto: "Onicomicose leve", texto: "USO TÓPICO\n1. Amorolfina 5% esmalte ---------------------- 1 frasco\n   Lixar a superfície da unha afetada, limpar com álcool e aplicar o esmalte 1 vez por semana (até 2 vezes), por 6 meses nas mãos e 9 a 12 meses nos pés.\n   Não usar esmalte cosmético por cima sem remover antes." }
    ] },
  { id: "sulfeto-selenio", nomes: ["Sulfeto de selênio", "sulfeto de selenio", "Selsun"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Pitiríase versicolor e dermatite seborreica/caspa (xampu).",
    adulto: "Xampu 2,5%: pitiríase versicolor 10 min/dia por 7 dias · caspa 2×/semana",
    gestacao: { nivel: "cautela", texto: "Evitar uso em áreas extensas na gestação; preferir cetoconazol xampu." },
    alergia: [], contra: ["Não aplicar em pele inflamada ou erosada", "Pode descolorir cabelos tingidos", "Enxaguar bem (irritante)"],
    prescrever: [
      { contexto: "Pitiríase versicolor", texto: "USO TÓPICO\n1. Sulfeto de selênio 2,5% xampu -------------- 1 frasco\n   Aplicar na pele afetada durante o banho, deixar agir 10 minutos e enxaguar bem, 1 vez ao dia por 7 dias." },
      { contexto: "Caspa / dermatite seborreica", texto: "USO TÓPICO\n1. Sulfeto de selênio 2,5% xampu -------------- 1 frasco\n   Lavar o couro cabeludo, deixar agir 3 a 5 minutos e enxaguar, 2 vezes por semana." }
    ] },

  /* ========== DERMATOLÓGICOS: ESCABICIDAS E PEDICULICIDAS ========== */
  { id: "benzoato-benzila", nomes: ["Benzoato de benzila", "Miticoçan", "Acarsan"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Escabiose e pediculose (alternativa à permetrina; RENAME).",
    adulto: "Emulsão/loção 25%: aplicar do pescoço aos pés à noite por 3 noites seguidas; repetir após 7 dias",
    gestacao: { nivel: "cautela", texto: "Preferir permetrina 5% ou enxofre precipitado na gestação." },
    alergia: [], contra: ["Irritante: não usar em pele muito escoriada nem em mucosas e olhos", "Criança: diluir (2–12 anos em partes iguais de água); lactente: preferir permetrina ou enxofre", "Tratar todos os contactantes ao mesmo tempo"],
    prescrever: [
      { contexto: "Escabiose — adulto", texto: "USO TÓPICO\n1. Benzoato de benzila 25% loção --------------- 1 frasco\n   Após o banho, à noite, aplicar em todo o corpo, do pescoço até a planta dos pés, e retirar no banho da manhã. Repetir por 3 noites seguidas e de novo após 7 dias.\n   Tratar todos da casa ao mesmo tempo; lavar roupas de cama e de uso em água quente." },
      { contexto: "Escabiose — criança 2 a 12 anos", texto: "USO TÓPICO\n1. Benzoato de benzila 25% loção --------------- 1 frasco\n   Diluir em igual quantidade de água e aplicar à noite do pescoço aos pés, retirando no banho da manhã, por 3 noites seguidas. Repetir após 7 dias." }
    ] },
  { id: "deltametrina", nomes: ["Deltametrina", "Deltacid", "Escabin"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Pediculose do couro cabeludo e pubiana; escabiose.",
    adulto: "Loção/xampu 0,02%: aplicação conforme bula; repetir em 7 dias",
    gestacao: { nivel: "cautela", texto: "Preferir permetrina na gestação (mais dados)." },
    alergia: [], contra: ["Evitar olhos e mucosas", "Irritação local"],
    prescrever: [
      { contexto: "Pediculose", texto: "USO TÓPICO\n1. Deltametrina 0,02% xampu -------------------- 1 frasco\n   Aplicar no couro cabeludo, deixar agir pelo tempo indicado na bula e enxaguar. Passar pente fino. Repetir após 7 dias.\n   Examinar e tratar os contactantes." },
      { contexto: "Escabiose", texto: "USO TÓPICO\n1. Deltametrina 0,02% loção -------------------- 1 frasco\n   Aplicar após o banho em todo o corpo, do pescoço aos pés, conforme o esquema da bula. Repetir após 7 dias.\n   Tratar todos da casa; lavar roupas e lençóis em água quente." }
    ] },
  { id: "monossulfiram", nomes: ["Monossulfiram", "Tetmosol"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Escabiose (solução diluída em água) e prevenção (sabonete).",
    adulto: "Solução 25%: diluir em 2 partes de água (adulto) ou 3 partes (criança) e aplicar após o banho, conforme bula",
    gestacao: { nivel: "cautela", texto: "Dados escassos; preferir permetrina." },
    alergia: [], contra: ["Efeito tipo dissulfiram: não ingerir álcool durante o uso e por alguns dias após", "Irritação em pele escoriada"],
    prescrever: [
      { contexto: "Escabiose", texto: "USO TÓPICO\n1. Monossulfiram 25% solução ------------------- 1 frasco\n   Diluir 1 parte da solução em 2 partes de água (criança: 3 partes) e aplicar do pescoço aos pés após o banho, deixando secar. Seguir o número de dias da bula e repetir após 7 dias.\n   Não ingerir bebida alcoólica durante o tratamento." }
    ] },
  { id: "enxofre-vaselina", nomes: ["Enxofre precipitado em vaselina", "enxofre precipitado", "pomada de enxofre"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Escabiose em lactentes < 2 meses e gestantes (alternativa segura; manipulado).",
    adulto: "Enxofre 5–10% em vaselina (manipulado): aplicar à noite por 3 noites seguidas",
    gestacao: { nivel: "compativel", texto: "Compatível; alternativa na gestação e lactação." },
    alergia: [], contra: ["Odor desagradável, mancha roupas", "Pode irritar a pele"],
    prescrever: [
      { contexto: "Escabiose — lactente < 2 meses", texto: "USO TÓPICO\n1. Enxofre precipitado 5% em vaselina (manipular) --- 1 pote\n   Aplicar em todo o corpo, inclusive couro cabeludo (poupando olhos e boca), à noite, por 3 noites seguidas. Dar banho antes de cada nova aplicação. Repetir após 7 dias.\n   Tratar todos da casa ao mesmo tempo." }
    ] },

  /* ========== DERMATOLÓGICOS: ANTIVIRAIS E IMUNOMODULADORES ========== */
  { id: "aciclovir-creme", nomes: ["Aciclovir creme", "aciclovir pomada", "Zovirax creme"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Herpes labial recorrente (início dos sintomas); benefício modesto.",
    adulto: "Creme 5%: 5×/dia (de 4/4h, acordado) por 5 dias",
    gestacao: { nivel: "compativel", texto: "Compatível." },
    alergia: [], contra: ["Herpes genital, zóster, imunossuprimido ou lesões extensas: antiviral oral", "Não aplicar em mucosa (olhos, boca, vagina)"],
    prescrever: [
      { contexto: "Herpes labial", texto: "USO TÓPICO\n1. Aciclovir 5% creme -------------------------- 1 bisnaga\n   Aplicar sobre a lesão 5 vezes ao dia (de 4 em 4 horas, enquanto acordado) por 5 dias, começando ao primeiro formigamento." }
    ] },
  { id: "penciclovir", nomes: ["Penciclovir", "Penvir Lábia"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Herpes labial recorrente.",
    adulto: "Creme 1%: a cada 2 horas, acordado, por 4 dias",
    gestacao: { nivel: "compativel", texto: "Absorção desprezível; compatível." },
    alergia: [], contra: ["Não aplicar em mucosas"],
    prescrever: [
      { contexto: "Herpes labial", texto: "USO TÓPICO\n1. Penciclovir 1% creme ------------------------ 1 bisnaga\n   Aplicar sobre a lesão a cada 2 horas, enquanto acordado, por 4 dias, começando nos primeiros sintomas." }
    ] },
  { id: "tacrolimo-topico", nomes: ["Tacrolimo pomada", "tacrolimus pomada", "Protopic", "Tarfic"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatite atópica moderada a grave, sobretudo em face, pálpebras e dobras (poupador de corticoide); vitiligo (off-label).",
    adulto: "Pomada 0,1% (≥ 16 anos) ou 0,03% (≥ 2 anos): 2×/dia até melhora; manutenção 2×/semana",
    gestacao: { nivel: "cautela", texto: "Absorção baixa; usar só se necessário." },
    alergia: [], contra: ["< 2 anos", "Infecção cutânea ativa (herpes, impetigo)", "Ardor nos primeiros dias (melhora com o uso)", "Fotoproteção; evitar fototerapia e álcool (rubor facial)"],
    prescrever: [
      { contexto: "Dermatite atópica — adulto", texto: "USO TÓPICO\n1. Tacrolimo 0,1% pomada ----------------------- 1 bisnaga\n   Aplicar uma camada fina nas lesões 2 vezes ao dia até a melhora. Depois, manter 2 vezes por semana nas áreas que costumam recair." },
      { contexto: "Dermatite atópica — criança 2 a 15 anos", texto: "USO TÓPICO\n1. Tacrolimo 0,03% pomada ---------------------- 1 bisnaga\n   Aplicar uma camada fina nas lesões 2 vezes ao dia por até 3 semanas; depois 1 vez ao dia até a melhora." }
    ] },
  { id: "pimecrolimo", nomes: ["Pimecrolimo", "pimecrolimus", "Elidel"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dermatite atópica leve a moderada em face e dobras (poupador de corticoide).",
    adulto: "Creme 1%: 2×/dia",
    gestacao: { nivel: "cautela", texto: "Absorção baixa; usar só se necessário." },
    alergia: [], contra: ["Infecção cutânea ativa", "Idade mínima conforme bula", "Fotoproteção"],
    prescrever: [
      { contexto: "Dermatite atópica em face / dobras", texto: "USO TÓPICO\n1. Pimecrolimo 1% creme ------------------------ 1 bisnaga\n   Aplicar uma camada fina nas lesões 2 vezes ao dia enquanto houver lesão; suspender após a melhora." }
    ] },
  { id: "imiquimode", nomes: ["Imiquimode", "imiquimod"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Verrugas anogenitais (HPV) — autoaplicação; carcinoma basocelular superficial e ceratose actínica (especialista).",
    adulto: "Creme 5% (sachê): verrugas 3×/semana à noite, lavar após 6–10 h, por até 16 semanas",
    gestacao: { nivel: "evitar", texto: "Não recomendado na gestação; preferir ácido tricloroacético ou métodos físicos (PCDT IST)." },
    alergia: [], contra: ["Reação inflamatória local intensa: pausar alguns dias", "Pode enfraquecer preservativo e diafragma", "Não aplicar em mucosa interna (vagina, colo, canal anal)"],
    prescrever: [
      { contexto: "Verrugas anogenitais (PCDT IST)", texto: "USO TÓPICO\n1. Imiquimode 5% creme (sachê) ---------------- 12 sachês\n   À noite, 3 vezes por semana (dias alternados, ex.: segunda, quarta e sexta), aplicar uma camada fina sobre as verrugas e lavar com água e sabão 6 a 10 horas depois.\n   Usar por até 16 semanas. Retorno em 4 semanas." }
    ] },
  { id: "podofilotoxina", nomes: ["Podofilotoxina", "Wartec"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Verrugas anogenitais externas (autoaplicação).",
    adulto: "Creme 0,15%: 2×/dia por 3 dias, pausa de 4 dias; até 4 ciclos",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação (antimitótico)." },
    alergia: [], contra: ["Gestação", "Aplicar só nas verrugas (área total pequena); não usar em mucosa interna", "Irritação, erosão e dor local"],
    prescrever: [
      { contexto: "Verrugas anogenitais externas", texto: "USO TÓPICO\n1. Podofilotoxina 0,15% creme ----------------- 1 bisnaga\n   Aplicar somente sobre as verrugas 2 vezes ao dia por 3 dias seguidos e fazer pausa de 4 dias (1 ciclo). Repetir até 4 ciclos.\n   Lavar as mãos após o uso. Não usar se estiver grávida." }
    ] },
  { id: "podofilina", nomes: ["Podofilina", "resina de podofilina"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Verrugas anogenitais externas — aplicação no serviço de saúde (manipulada, 10–25%).",
    adulto: "Solução 10–25% em tintura de benjoim: aplicação semanal pelo profissional, lavar após 1–4 h",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação." },
    alergia: [], contra: ["Gestação", "Aplicação feita pelo profissional; área pequena por sessão (toxicidade sistêmica)", "Não usar em mucosa interna ou lesão sangrante"],
    prescrever: [
      { contexto: "Aplicação no serviço", texto: "PROCEDIMENTO NO SERVIÇO\nPodofilina 25% em tintura de benjoim (manipulada): proteger a pele ao redor com vaselina, aplicar somente sobre as verrugas e orientar a lavar com água e sabão após 1 a 4 horas. Repetir semanalmente." }
    ] },
  { id: "acido-tricloroacetico", nomes: ["Ácido tricloroacético", "acido tricloroacetico", "ATA"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Verrugas anogenitais (inclusive na gestação e lesões de mucosa) — aplicação no serviço.",
    adulto: "ATA 80–90%: aplicação semanal pelo profissional",
    gestacao: { nivel: "compativel", texto: "Opção de escolha na gestação (PCDT IST)." },
    alergia: [], contra: ["Aplicação apenas pelo profissional; cáustico", "Neutralizar o excesso com bicarbonato de sódio ou talco"],
    prescrever: [
      { contexto: "Aplicação no serviço (PCDT IST)", texto: "PROCEDIMENTO NO SERVIÇO\nÁcido tricloroacético 80–90%: proteger a pele ao redor com vaselina, aplicar pequena quantidade somente sobre as verrugas com cotonete fino e deixar secar (fica esbranquiçado). Repetir semanalmente, se necessário, por até 8 a 10 sessões." }
    ] },
  { id: "fluoruracila-topica", nomes: ["Fluoruracila creme", "5-fluoruracil creme", "5-FU tópico", "Efurix"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Ceratoses actínicas múltiplas (campo de cancerização); carcinoma basocelular superficial (especialista).",
    adulto: "Creme 5%: 2×/dia por 2–4 semanas (ceratose actínica)",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada na gestação." },
    alergia: [], contra: ["Gestação", "Reação inflamatória intensa é esperada (vermelhidão, crostas)", "Deficiência de DPD (toxicidade sistêmica rara)", "Fotoproteção"],
    prescrever: [
      { contexto: "Ceratose actínica", texto: "USO TÓPICO\n1. Fluoruracila 5% creme ----------------------- 1 bisnaga\n   Aplicar uma camada fina na área com lesões 2 vezes ao dia por 2 a 4 semanas. A pele vai ficar vermelha e com crostas; cicatriza em 1 a 2 meses após parar.\n   Lavar as mãos após aplicar; evitar sol." }
    ] },

  /* ========== DERMATOLÓGICOS: OUTROS ========== */
  { id: "minoxidil-topico", nomes: ["Minoxidil tópico", "minoxidil solução", "minoxidil"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Alopecia androgenética masculina e feminina; adjuvante na alopecia areata.",
    adulto: "Solução 5% (ou 2% em mulheres): 1 mL no couro cabeludo seco 2×/dia, uso contínuo",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação e amamentação." },
    alergia: [], contra: ["Queda transitória nas primeiras semanas", "Hipertricose facial (mais em mulheres)", "Dermatite de contato (propilenoglicol)", "Resultado após 4–6 meses; o efeito some se parar"],
    prescrever: [
      { contexto: "Alopecia androgenética", texto: "USO TÓPICO\n1. Minoxidil 5% solução capilar ----------------- 1 frasco\n   Aplicar 1 mL no couro cabeludo seco, nas áreas de rarefação, 2 vezes ao dia. Lavar as mãos após. Uso contínuo; avaliar resultado em 6 meses." }
    ] },
  { id: "hidroquinona", nomes: ["Hidroquinona", "Claquinona", "Solaquin"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Melasma e hiperpigmentação pós-inflamatória (uso por tempo limitado).",
    adulto: "Creme 4%: 1×/dia à noite por até 3–4 meses",
    gestacao: { nivel: "evitar", texto: "Evitar (absorção sistêmica relevante); preferir ácido azelaico e fotoproteção." },
    alergia: [], contra: ["Uso prolongado: ocronose exógena (manchas azul-acinzentadas)", "Irritação e dermatite de contato", "Fotoproteção rigorosa obrigatória"],
    prescrever: [
      { contexto: "Melasma", texto: "USO TÓPICO\n1. Hidroquinona 4% creme ----------------------- 1 bisnaga\n   Aplicar uma camada fina somente sobre as manchas à noite por até 3 meses.\n2. Protetor solar FPS ≥ 30 com cor ----------------- 1 frasco\n   Aplicar pela manhã e reaplicar a cada 2 a 3 horas." }
    ] },
  { id: "fotoprotetor", nomes: ["Protetor solar", "fotoprotetor", "filtro solar"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Prevenção de câncer de pele e fotoenvelhecimento; essencial no melasma, lúpus, uso de retinoides/ácidos e fotossensibilizantes.",
    adulto: "FPS ≥ 30 (e proteção UVA): aplicar 15–30 min antes da exposição e reaplicar a cada 2–3 h",
    gestacao: { nivel: "compativel", texto: "Compatível; recomendado no melasma gestacional." },
    alergia: [], contra: ["< 6 meses: preferir barreira física (sombra, roupas, chapéu)"],
    prescrever: [
      { contexto: "Orientação de fotoproteção", texto: "USO TÓPICO\n1. Protetor solar FPS 30 ou maior (com proteção UVA) ---- 1 frasco\n   Aplicar em todas as áreas expostas 15 a 30 minutos antes de sair (quantidade de uma colher de chá para o rosto e pescoço) e reaplicar a cada 2 a 3 horas e após suar ou molhar.\n   Evitar sol entre 10 e 16 horas; usar chapéu e roupas." }
    ] },
  { id: "calamina", nomes: ["Calamina", "loção de calamina", "Caladryl"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Prurido de picadas de inseto, varicela, dermatite por plantas e queimadura solar leve.",
    adulto: "Loção: aplicar 3–4×/dia",
    gestacao: { nivel: "compativel", texto: "Calamina simples: compatível." },
    alergia: [], contra: ["Formulações com difenidramina (Caladryl): evitar em áreas extensas e em varicela na criança (absorção e toxicidade)", "Não aplicar em mucosas e olhos"],
    prescrever: [
      { contexto: "Prurido / varicela / picadas", texto: "USO TÓPICO\n1. Loção de calamina ---------------------------- 1 frasco\n   Agitar antes de usar e aplicar nas lesões 3 a 4 vezes ao dia, se coceira." }
    ] },
  { id: "lidocaina-topica", nomes: ["Lidocaína pomada", "lidocaína geleia", "lidocaina gel", "Xylocaína pomada", "Xylocaína geleia"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Anestesia tópica: dor de hemorroidas e fissura (pomada), sondagem vesical e procedimentos em mucosa (geleia 2%), queimadura leve, pós-episiotomia.",
    adulto: "Pomada 5% ou geleia 2%: camada fina até 3–4×/dia (respeitar a dose máxima da bula)",
    gestacao: { nivel: "compativel", texto: "Compatível em uso tópico." },
    alergia: [], contra: ["Não exceder a dose máxima da bula (toxicidade: arritmia, convulsão)", "Mucosa muito lesada aumenta a absorção", "Pode mascarar dor que precisa de avaliação"],
    prescrever: [
      { contexto: "Hemorroida / fissura anal (sintomático)", texto: "USO TÓPICO\n1. Lidocaína 5% pomada -------------------------- 1 bisnaga\n   Aplicar uma pequena quantidade na região anal após banho de assento morno e após as evacuações, até 3 vezes ao dia, por até 7 dias." },
      { contexto: "Procedimento (sondagem / exame)", texto: "USO TÓPICO\n1. Lidocaína 2% geleia -------------------------- 1 bisnaga\n   Aplicar no local do procedimento cerca de 5 minutos antes." }
    ] },
  { id: "lidocaina-prilocaina", nomes: ["Lidocaína + prilocaína", "lidocaina + prilocaina", "EMLA"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Anestesia da pele antes de punção venosa, vacinação, coleta, pequenos procedimentos (molusco, curetagem).",
    adulto: "Creme 2,5% + 2,5%: camada espessa sob curativo oclusivo 60 min antes (quantidade máxima por idade/peso conforme bula)",
    gestacao: { nivel: "compativel", texto: "Compatível em áreas pequenas." },
    alergia: [], contra: ["Metemoglobinemia (prilocaína): cuidado em lactentes < 3 meses, deficiência de G6PD e uso de sulfas/nitratos", "Respeitar área e quantidade máximas por idade/peso (bula)", "Não aplicar em pele lesada extensa ou mucosa genital de criança"],
    prescrever: [
      { contexto: "Antes de punção / procedimento", texto: "USO TÓPICO\n1. Lidocaína 2,5% + prilocaína 2,5% creme ------ 1 bisnaga\n   Aplicar uma camada espessa no local da punção 60 minutos antes e cobrir com curativo plástico oclusivo. Retirar imediatamente antes do procedimento.\n   (Criança: quantidade e área máximas por idade/peso conforme bula.)" }
    ] },
  { id: "diclofenaco-gel", nomes: ["Diclofenaco gel", "diclofenaco dietilamônio", "Cataflam Emulgel", "Voltaren Emulgel"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dor musculoesquelética localizada: entorse, contusão, tendinite, osteoartrite de mãos e joelhos.",
    adulto: "Gel 11,6 mg/g (1%): 3–4×/dia na área dolorosa por até 14 dias (osteoartrite: uso contínuo com reavaliação)",
    gestacao: { nivel: "evitar", texto: "Evitar no 3º trimestre (como os AINE orais); uso pontual em área pequena antes disso." },
    alergia: ["aine"], contra: ["Asma induzida por AINE/AAS", "Não aplicar em pele lesada, mucosas ou sob oclusão", "Fotossensibilidade: evitar sol na área"],
    prescrever: [
      { contexto: "Dor musculoesquelética localizada", texto: "USO TÓPICO\n1. Diclofenaco dietilamônio 11,6 mg/g gel ------ 1 bisnaga\n   Aplicar e massagear suavemente na região dolorida 3 a 4 vezes ao dia por até 14 dias. Lavar as mãos após o uso." }
    ] },
  { id: "cetoprofeno-gel", nomes: ["Cetoprofeno gel", "Profenid gel"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dor e inflamação musculoesquelética localizada (contusão, entorse, tendinite).",
    adulto: "Gel 2,5%: 2–3×/dia por até 7 dias",
    gestacao: { nivel: "evitar", texto: "Contraindicado no 3º trimestre; evitar nos demais." },
    alergia: ["aine"], contra: ["Fotossensibilidade importante: proteger a área do sol durante o uso e por 2 semanas após", "Asma induzida por AINE/AAS", "Não aplicar em pele lesada"],
    prescrever: [
      { contexto: "Dor musculoesquelética localizada", texto: "USO TÓPICO\n1. Cetoprofeno 2,5% gel ------------------------ 1 bisnaga\n   Aplicar na região dolorida 2 a 3 vezes ao dia por até 7 dias.\n   Não expor a área ao sol durante o uso e por 2 semanas após." }
    ] },
  { id: "salicilato-metila-topico", nomes: ["Salicilato de metila", "salicilato de metila + cânfora + mentol", "cânfora", "mentol", "Gelol", "Salonpas"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Dor muscular e articular leve (contrairritante/rubefaciente).",
    adulto: "Pomada/gel/emplastro: 2–3×/dia",
    gestacao: { nivel: "evitar", texto: "Salicilato com absorção cutânea: evitar, sobretudo no 3º trimestre." },
    alergia: ["aine"], contra: ["Criança pequena: risco de intoxicação por salicilato e cânfora (convulsão) — não usar em < 2 anos", "Uso com varfarina em grandes áreas pode elevar o INR", "Não aplicar em pele lesada, mucosas ou com bolsa térmica"],
    prescrever: [
      { contexto: "Dor muscular leve", texto: "USO TÓPICO\n1. Salicilato de metila + cânfora + mentol pomada ---- 1 bisnaga\n   Aplicar e massagear na região dolorida 2 a 3 vezes ao dia por até 7 dias. Não usar com bolsa de água quente." }
    ] },
  { id: "capsaicina", nomes: ["Capsaicina", "capsaicina creme"], classe: "dermatologicos", receita: "simples", tags: [],
    usos: "Neuralgia pós-herpética, neuropatia diabética dolorosa localizada, osteoartrite (adjuvante).",
    adulto: "Creme 0,025% (osteoartrite) ou 0,075% (dor neuropática): 3–4×/dia; efeito após 2–4 semanas",
    gestacao: { nivel: "cautela", texto: "Dados escassos; usar só se necessário." },
    alergia: [], contra: ["Ardor intenso nas primeiras semanas", "Lavar bem as mãos; evitar olhos e mucosas", "Não aplicar em pele lesada ou lesão de herpes ativa"],
    prescrever: [
      { contexto: "Neuralgia pós-herpética / dor neuropática localizada", texto: "USO TÓPICO\n1. Capsaicina 0,075% creme --------------------- 1 bisnaga\n   Aplicar pequena quantidade na área dolorosa (pele cicatrizada) 3 a 4 vezes ao dia. Lavar as mãos após. O ardor diminui com o uso; avaliar em 4 semanas." }
    ] },

  /* ========== GINECOLÓGICOS: USO VAGINAL ========== */
  { id: "clotrimazol-vaginal", nomes: ["Clotrimazol creme vaginal", "Gino-Canesten"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Candidíase vulvovaginal (inclusive na gestação).",
    adulto: "Creme vaginal 1%: 1 aplicador à noite por 7 noites (2%: 3 noites)",
    gestacao: { nivel: "compativel", texto: "Compatível; na gestação usar o esquema de 7 dias." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Pode danificar preservativo e diafragma de látex", "Recorrente (≥ 4/ano) ou não albicans: investigar e tratar conforme PCDT"],
    prescrever: [
      { contexto: "Candidíase vulvovaginal", texto: "USO VAGINAL\n1. Clotrimazol 1% creme vaginal --------------- 1 bisnaga com aplicadores\n   Introduzir 1 aplicador cheio na vagina à noite, ao deitar, por 7 noites.\n   Não é necessário tratar a parceria assintomática." }
    ] },
  { id: "fenticonazol", nomes: ["Fenticonazol", "nitrato de fenticonazol", "Fentizol"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Candidíase vulvovaginal (óvulo dose única ou creme vaginal).",
    adulto: "Óvulo 600 mg: dose única (repetir em 3 dias se sintomas intensos) · creme vaginal 2%: conforme bula",
    gestacao: { nivel: "cautela", texto: "Dados limitados; na gestação preferir miconazol, clotrimazol ou nistatina por 7 dias." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Pode danificar preservativo de látex"],
    prescrever: [
      { contexto: "Candidíase vulvovaginal — óvulo", texto: "USO VAGINAL\n1. Nitrato de fenticonazol 600 mg óvulo ------- 1 óvulo\n   Introduzir 1 óvulo profundamente na vagina à noite, ao deitar, dose única." }
    ] },
  { id: "tioconazol-tinidazol-vaginal", nomes: ["Tioconazol + tinidazol creme vaginal", "tioconazol + tinidazol", "Gynomax", "Cartrax"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Vulvovaginite mista (candidíase + vaginose bacteriana/tricomoníase) — combinação; preferir tratar cada agente conforme o PCDT.",
    adulto: "Creme vaginal ou óvulo: conforme bula (creme em geral 1 aplicador à noite por 7 noites)",
    gestacao: { nivel: "evitar", texto: "Evitar no 1º trimestre; preferir esquemas recomendados no PCDT." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Tinidazol: evitar álcool durante e até 72 h após", "Tricomoníase exige tratamento oral (e da parceria): o creme não basta"],
    prescrever: [
      { contexto: "Vulvovaginite mista", texto: "USO VAGINAL\n1. Tioconazol + tinidazol creme vaginal ------- 1 bisnaga com aplicadores\n   Introduzir 1 aplicador cheio na vagina à noite, ao deitar, pelo número de dias da bula (em geral 7 noites).\n   Não ingerir bebida alcoólica durante o tratamento." }
    ] },
  { id: "clindamicina-vaginal", nomes: ["Clindamicina creme vaginal", "Dalacin V"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Vaginose bacteriana (alternativa ao metronidazol).",
    adulto: "Creme vaginal 2%: 1 aplicador (5 g) à noite por 7 noites",
    gestacao: { nivel: "cautela", texto: "Na gestação, o PCDT prefere metronidazol oral ou clindamicina oral; creme vaginal com cautela." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Base oleosa enfraquece preservativo e diafragma (até 5 dias após)", "Raramente colite por C. difficile"],
    prescrever: [
      { contexto: "Vaginose bacteriana", texto: "USO VAGINAL\n1. Clindamicina 2% creme vaginal -------------- 1 bisnaga com aplicadores\n   Introduzir 1 aplicador cheio (5 g) na vagina à noite, ao deitar, por 7 noites." }
    ] },
  { id: "metronidazol-nistatina-vaginal", nomes: ["Metronidazol + nistatina creme vaginal", "metronidazol + nistatina", "Colpistatin"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Vulvovaginite mista (vaginose bacteriana + candidíase).",
    adulto: "Creme vaginal (metronidazol 500 mg + nistatina 100.000 UI por aplicação): 1 aplicador à noite por 10 noites (conferir bula)",
    gestacao: { nivel: "cautela", texto: "Evitar no 1º trimestre; depois, usar se indicado." },
    alergia: [], contra: ["Antimicrobiano tópico: conferir na RDC 471/2021 se a apresentação exige retenção da receita", "Evitar álcool durante e até 72 h após (metronidazol)", "Tricomoníase: tratamento oral da paciente e da parceria"],
    prescrever: [
      { contexto: "Vulvovaginite mista", texto: "USO VAGINAL\n1. Metronidazol + nistatina creme vaginal ------ 1 bisnaga com aplicadores\n   Introduzir 1 aplicador cheio na vagina à noite, ao deitar, por 10 noites (conferir bula).\n   Não ingerir bebida alcoólica durante o tratamento." }
    ] },
  { id: "acido-borico-vaginal", nomes: ["Ácido bórico vaginal", "acido borico vaginal", "ácido bórico óvulo"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Candidíase vulvovaginal por espécies não albicans (C. glabrata) ou recorrente resistente aos azóis (manipulado).",
    adulto: "Cápsula vaginal 600 mg (manipulada): 1 à noite por 14 noites",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação." },
    alergia: [], contra: ["Gestação", "TÓXICO se ingerido: guardar longe de crianças; uso exclusivamente vaginal", "Irritação vulvovaginal; pele lesada"],
    prescrever: [
      { contexto: "Candidíase não albicans / recorrente", texto: "USO VAGINAL\n1. Ácido bórico 600 mg cápsula gelatinosa (manipular) ---- 14 cápsulas\n   Introduzir 1 cápsula profundamente na vagina à noite, ao deitar, por 14 noites.\n   NÃO ENGOLIR. Manter fora do alcance de crianças." }
    ] },
  { id: "benzidamina-vaginal", nomes: ["Benzidamina vaginal", "cloridrato de benzidamina", "Flogo-Rosa"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Alívio de ardor e prurido vulvovaginal (sintomático), pós-parto e pós-operatório ginecológico (banho de assento).",
    adulto: "Pó 500 mg: dissolver 1 envelope em 1 L de água morna, banho de assento ou lavagem externa 1–2×/dia",
    gestacao: { nivel: "cautela", texto: "Uso externo em banho de assento é aceitável; evitar duchas internas." },
    alergia: [], contra: ["Sintomático: não trata a causa da vulvovaginite", "Duchas vaginais alteram a flora: preferir uso externo"],
    prescrever: [
      { contexto: "Banho de assento sintomático", texto: "USO TÓPICO\n1. Cloridrato de benzidamina 500 mg pó (envelope) ---- 10 envelopes\n   Dissolver 1 envelope em 1 litro de água morna e fazer banho de assento por 10 minutos, 1 a 2 vezes ao dia, por até 5 dias." }
    ] },
  { id: "estriol", nomes: ["Estriol", "estriol creme vaginal", "Ovestrion"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Síndrome geniturinária da menopausa (atrofia vaginal, dispareunia, ITU de repetição na pós-menopausa); preparo pré-operatório.",
    adulto: "Creme vaginal 1 mg/g: 0,5 g (0,5 mg) à noite por 2–3 semanas, depois 2×/semana",
    gestacao: { nivel: "contraindicado", texto: "Sem indicação na gestação." },
    alergia: [], contra: ["Câncer de mama ou de endométrio, sangramento genital não investigado", "TEV ativo (cautela; absorção sistêmica baixa)", "Não precisa associar progestagênio na dose vaginal baixa"],
    prescrever: [
      { contexto: "Atrofia vaginal / síndrome geniturinária", texto: "USO VAGINAL\n1. Estriol 1 mg/g creme vaginal ---------------- 1 bisnaga com aplicador\n   Introduzir 0,5 g (até a marca do aplicador) na vagina à noite, ao deitar, todos os dias por 3 semanas; depois 2 vezes por semana como manutenção." }
    ] },
  { id: "promestrieno", nomes: ["Promestrieno", "Colpotrofine"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Atrofia vulvovaginal (estrogênio local de absorção mínima; opção quando se quer evitar absorção sistêmica).",
    adulto: "Creme vaginal 10 mg/g ou cápsula vaginal 10 mg: 1 aplicação à noite por 20 dias; manutenção conforme resposta",
    gestacao: { nivel: "contraindicado", texto: "Sem indicação na gestação." },
    alergia: [], contra: ["Câncer hormônio-dependente (decidir com o oncologista)", "Sangramento genital não investigado"],
    prescrever: [
      { contexto: "Atrofia vulvovaginal", texto: "USO VAGINAL\n1. Promestrieno 10 mg/g creme vaginal ---------- 1 bisnaga com aplicador\n   Introduzir 1 aplicador na vagina à noite, ao deitar, por 20 dias. Depois, manutenção 2 vezes por semana se necessário." }
    ] },

  /* ========== GINECOLÓGICOS: PROGESTAGÊNIOS ========== */
  { id: "progesterona-micronizada", nomes: ["Progesterona micronizada", "progesterona natural", "progesterona", "Utrogestan", "Evocanil"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Prevenção de parto prematuro (colo curto ou prematuro prévio), proteção endometrial na terapia hormonal, suporte de fase lútea (reprodução assistida).",
    adulto: "Prematuridade: 200 mg via vaginal à noite até 36 semanas · TH: 200 mg VO à noite 12–14 dias/mês ou 100 mg contínuo",
    gestacao: { nivel: "compativel", texto: "Usada na gestação nas indicações obstétricas." },
    alergia: [], contra: ["Sonolência e tontura por via oral (tomar ao deitar)", "Sangramento genital não investigado, câncer de mama, doença hepática grave", "TEV ativo (cautela)"],
    prescrever: [
      { contexto: "Prevenção de parto prematuro (colo ≤ 25 mm ou prematuro prévio)", texto: "USO VAGINAL\n1. Progesterona micronizada 200 mg cápsula ---- 30 cápsulas\n   Introduzir 1 cápsula profundamente na vagina à noite, ao deitar, todos os dias, até 36 semanas de gestação.\n   (Início em geral entre 16 e 24 semanas, conforme protocolo do pré-natal de alto risco.)" },
      { contexto: "Terapia hormonal — proteção endometrial (com estrogênio)", texto: "USO ORAL\n1. Progesterona micronizada 100 mg cápsula ---- 30 cápsulas\n   Tomar 1 cápsula à noite, ao deitar, todos os dias, junto com o estrogênio.\n   (Esquema cíclico: 200 mg à noite do 1º ao 12º–14º dia de cada mês.)" }
    ] },
  { id: "didrogesterona", nomes: ["Didrogesterona", "Duphaston"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Sangramento uterino anormal anovulatório, amenorreia secundária, endometriose, proteção endometrial na terapia hormonal.",
    adulto: "10 mg VO 1–2×/dia por 10–14 dias por ciclo (endometriose: 10 mg 2–3×/dia)",
    gestacao: { nivel: "cautela", texto: "Usada em ameaça de aborto/aborto de repetição em alguns protocolos; evidência limitada." },
    alergia: [], contra: ["Sangramento genital não investigado", "Doença hepática grave", "Câncer de mama ou outros tumores dependentes de progestagênio"],
    prescrever: [
      { contexto: "Sangramento uterino anovulatório / amenorreia secundária", texto: "USO ORAL\n1. Didrogesterona 10 mg ------------------------ 28 comprimidos\n   Tomar 1 comprimido 2 vezes ao dia por 14 dias (a partir do 11º–14º dia do ciclo). Esperar o sangramento de privação após terminar." },
      { contexto: "Proteção endometrial na TH", texto: "USO ORAL\n1. Didrogesterona 10 mg ------------------------ 14 comprimidos\n   Tomar 1 comprimido 1 vez ao dia nos últimos 14 dias de cada ciclo de 28 dias, junto com o estrogênio." }
    ] },
  { id: "dienogeste", nomes: ["Dienogeste", "dienogest", "Allurene"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Endometriose (dor pélvica); progestagênio contínuo.",
    adulto: "2 mg VO 1×/dia, contínuo",
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação." },
    alergia: [], contra: ["Não é anticoncepcional registrado: orientar método de barreira", "TEV ativo, doença hepática grave, tumores dependentes de hormônio", "Sangramento irregular e alteração de humor são comuns", "Indutores enzimáticos reduzem o efeito"],
    prescrever: [
      { contexto: "Endometriose", texto: "USO ORAL\n1. Dienogeste 2 mg ----------------------------- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, todos os dias, sem pausa. Reavaliar em 3 a 6 meses." }
    ] },

  /* ========== GINECOLÓGICOS: OBSTETRÍCIA (USO HOSPITALAR) ========== */
  { id: "ocitocina", nomes: ["Ocitocina", "oxitocina", "Syntocinon"], classe: "ginecologicos", receita: "hospitalar", tags: [],
    usos: "Prevenção e tratamento da hemorragia pós-parto (1ª escolha); indução e condução do trabalho de parto.",
    adulto: "Prevenção HPP: 10 UI IM após o nascimento · tratamento HPP: 5 UI IV lento + 20 UI em 500 mL SF 0,9% a 250 mL/h",
    gestacao: { nivel: "contraindicado", texto: "Uso apenas no trabalho de parto, parto e puerpério imediato, sob monitorização." },
    alergia: [], contra: ["Indução: contraindicada se desproporção, apresentação anômala, sofrimento fetal, cicatriz uterina clássica, placenta prévia", "Taquissistolia: reduzir ou suspender a infusão", "Doses altas e prolongadas: intoxicação hídrica (hiponatremia)"],
    prescrever: [
      { contexto: "Prevenção de HPP (todo parto)", texto: "Ocitocina 10 UI IM imediatamente após o nascimento (1º minuto), dose única." },
      { contexto: "Tratamento de HPP (OPAS)", texto: "Ocitocina 5 UI IV lento (em 3 minutos)\n+ Ocitocina 20 UI em SF 0,9% 500 mL IV a 250 mL/h.\nManutenção: ocitocina 20 UI em SF 0,9% 500 mL a 125 mL/h por 4 horas (conforme protocolo).\nAssociar ácido tranexâmico 1 g IV nas primeiras 3 horas." },
      { contexto: "Indução / condução do trabalho de parto", texto: "Ocitocina 5 UI em SF 0,9% (ou SG 5%) 500 mL (10 mUI/mL) em bomba de infusão.\nIniciar 1–2 mUI/min (6–12 mL/h) e aumentar 1–2 mUI/min a cada 30–40 min até 3–5 contrações em 10 min, conforme protocolo da maternidade.\nMonitorizar BCF e contrações." }
    ] },
  { id: "metilergometrina", nomes: ["Metilergometrina", "maleato de metilergometrina", "Methergin"], classe: "ginecologicos", receita: "hospitalar", tags: [],
    usos: "Hemorragia pós-parto por atonia uterina (2ª linha, após ocitocina).",
    adulto: "0,2 mg IM; repetir conforme protocolo (máx. 5 doses = 1 mg em 24 h)",
    gestacao: { nivel: "contraindicado", texto: "Contraindicada antes da saída do feto; uso apenas no pós-parto." },
    alergia: [], contra: ["Hipertensão, pré-eclâmpsia/eclâmpsia", "Cardiopatia, doença vascular periférica, enxaqueca com aura", "Uso de inibidores de CYP3A4 (ritonavir, claritromicina, azóis): ergotismo", "Não fazer IV de rotina (crise hipertensiva)"],
    prescrever: [
      { contexto: "HPP por atonia (após ocitocina)", texto: "Metilergometrina 0,2 mg/mL — 1 ampola (0,2 mg) IM.\nRepetir em 20 minutos se necessário; depois a cada 4 a 6 horas (máximo 5 ampolas = 1 mg em 24 h).\nNão usar se PA elevada ou pré-eclâmpsia." }
    ] },
  { id: "carbetocina", nomes: ["Carbetocina", "Duratocin"], classe: "ginecologicos", receita: "hospitalar", tags: [],
    usos: "Prevenção da hemorragia pós-parto (alternativa de ação prolongada à ocitocina, sobretudo na cesárea).",
    adulto: "100 mcg IV lento (1 min) ou IM, dose única, após o nascimento",
    gestacao: { nivel: "contraindicado", texto: "Não usar antes do nascimento (não serve para indução)." },
    alergia: [], contra: ["Não usar para indução ou condução do trabalho de parto", "Doença cardiovascular grave, epilepsia", "Pré-eclâmpsia/eclâmpsia: cautela", "Dose única: não repetir"],
    prescrever: [
      { contexto: "Prevenção de HPP (cesárea ou parto vaginal)", texto: "Carbetocina 100 mcg/mL — 1 mL (100 mcg) IV lento em 1 minuto (ou IM), dose única, logo após a extração/nascimento do bebê." }
    ] },
  { id: "misoprostol", nomes: ["Misoprostol", "Prostokos"], classe: "ginecologicos", receita: "hospitalar", tags: [],
    usos: "Indução do trabalho de parto com colo desfavorável, preparo de colo, abortamento legal/retido e esvaziamento uterino, hemorragia pós-parto (quando sem ocitocina).",
    adulto: "Indução a termo: 25 mcg via vaginal a cada 6 h · HPP: 800 mcg via retal ou sublingual · abortamento: dose conforme idade gestacional e norma técnica",
    gestacao: { nivel: "contraindicado", texto: "Abortivo/uterotônico: uso apenas nas indicações obstétricas, em hospital." },
    alergia: [], contra: ["Uso exclusivo hospitalar (Portaria 344/98)", "Cicatriz uterina (cesárea prévia) no 3º trimestre: não usar para indução (risco de rotura)", "Taquissistolia: não repetir; considerar tocólise", "Aguardar ≥ 4 h após a última dose antes de iniciar ocitocina"],
    prescrever: [
      { contexto: "Indução do parto — colo desfavorável (gestação a termo)", texto: "Misoprostol 25 mcg — 1 comprimido via vaginal no fundo de saco posterior a cada 6 horas, conforme protocolo da maternidade.\nReavaliar colo, contrações e BCF antes de cada dose; não repetir se ≥ 3 contrações em 10 min." },
      { contexto: "Hemorragia pós-parto (sem ocitocina ou adjuvante)", texto: "Misoprostol 200 mcg — 4 comprimidos (800 mcg) via retal (ou sublingual), dose única." },
      { contexto: "Abortamento retido / legal / óbito fetal", texto: "Misoprostol — dose e intervalo conforme idade gestacional, segundo a Norma Técnica de Atenção Humanizada ao Abortamento (MS) e o protocolo da maternidade." }
    ] },
  { id: "dinoprostona", nomes: ["Dinoprostona", "prostaglandina E2", "Propess"], classe: "ginecologicos", receita: "hospitalar", tags: [],
    usos: "Amadurecimento do colo para indução do trabalho de parto a termo.",
    adulto: "Pessário vaginal 10 mg de liberação controlada: inserir no fundo de saco posterior; retirar em até 24 h",
    gestacao: { nivel: "contraindicado", texto: "Uso apenas na indução do parto, em hospital." },
    alergia: [], contra: ["Cesárea ou cirurgia uterina prévia", "Desproporção, apresentação anômala, sofrimento fetal, placenta prévia, sangramento sem diagnóstico", "Retirar se trabalho de parto ativo, ruptura de membranas com taquissistolia ou sofrimento fetal", "Iniciar ocitocina ≥ 30 min após a retirada"],
    prescrever: [
      { contexto: "Preparo de colo para indução", texto: "Dinoprostona 10 mg pessário vaginal — inserir no fundo de saco vaginal posterior, com a paciente em repouso por 20–30 min.\nRetirar após 24 h, ou antes se trabalho de parto ativo, taquissistolia ou alteração da frequência cardíaca fetal.\nMonitorização fetal contínua." }
    ] },
  { id: "atosibana", nomes: ["Atosibana", "atosiban", "Tractocile"], classe: "ginecologicos", receita: "hospitalar", tags: [],
    usos: "Tocólise no trabalho de parto prematuro (24–33 semanas), para permitir corticoide e transferência; alternativa ao nifedipino.",
    adulto: "6,75 mg IV em 1 min; depois 18 mg/h (300 mcg/min) por 3 h; depois 6 mg/h (100 mcg/min) até 45 h no total",
    gestacao: { nivel: "cautela", texto: "Indicado na gestação para tocólise; poucos efeitos maternos." },
    alergia: [], contra: ["< 24 ou ≥ 34 semanas", "Ruptura prematura de membranas > 30 semanas, corioamnionite, sofrimento fetal, descolamento de placenta, pré-eclâmpsia grave, óbito fetal", "Duração máxima de 48 h"],
    prescrever: [
      { contexto: "Tocólise — trabalho de parto prematuro", texto: "1º passo: Atosibana 7,5 mg/mL — 0,9 mL (6,75 mg) IV em bolus em 1 minuto.\n2º passo: Atosibana 2 frascos de 5 mL (75 mg) em 90 mL de SF 0,9% (0,75 mg/mL) — infundir a 24 mL/h (18 mg/h) por 3 horas.\n3º passo: mesma solução a 8 mL/h (6 mg/h) por até 45 horas (duração total ≤ 48 h).\nAssociar corticoide para maturação pulmonar e sulfato de magnésio se < 32 semanas (neuroproteção)." }
    ] },
  { id: "imunoglobulina-anti-d", nomes: ["Imunoglobulina anti-D", "imunoglobulina anti-Rh", "imunoglobulina anti-RhD", "Matergam", "RhoGAM"], classe: "ginecologicos", receita: "hospitalar", tags: [],
    usos: "Prevenção da aloimunização Rh em gestante/puérpera Rh(D) negativo não sensibilizada (Coombs indireto negativo).",
    adulto: "300 mcg (1.500 UI) IM: na 28ª semana (profilaxia rotineira, se disponível) e até 72 h após parto de RN Rh+, abortamento, gravidez ectópica, sangramento ou procedimento invasivo",
    gestacao: { nivel: "compativel", texto: "Indicada na gestação e no pós-parto." },
    alergia: [], contra: ["Mãe Rh(D) positivo ou já sensibilizada (Coombs indireto positivo): não indicar", "Não aplicar no recém-nascido", "Hemorragia feto-materna volumosa: dose adicional conforme teste (Kleihauer)"],
    prescrever: [
      { contexto: "Pós-parto (RN Rh positivo) ou após abortamento/sangramento", texto: "Imunoglobulina anti-D 300 mcg — 1 ampola IM (deltoide), dose única, até 72 horas após o parto ou o evento.\nConfirmar mãe Rh negativo e Coombs indireto negativo." },
      { contexto: "Profilaxia anteparto (28 semanas)", texto: "Imunoglobulina anti-D 300 mcg — 1 ampola IM na 28ª semana de gestação, em gestante Rh negativo com Coombs indireto negativo e parceiro Rh positivo ou desconhecido (conforme disponibilidade e protocolo local)." }
    ] },

  /* ========== GINECOLÓGICOS: LACTAÇÃO E PROLACTINA ========== */
  { id: "bromocriptina", nomes: ["Bromocriptina", "Parlodel"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Hiperprolactinemia e prolactinoma (alternativa à cabergolina, preferida por alguns na intenção de gestar). Não usar para inibir lactação.",
    adulto: "Iniciar 1,25 mg à noite com alimento e aumentar gradualmente até 2,5 mg 2–3×/dia",
    gestacao: { nivel: "cautela", texto: "Em geral suspensa ao confirmar gestação; manter só com especialista (macroprolactinoma)." },
    alergia: [], contra: ["Inibição da lactação: não recomendada (AVC, IAM, convulsão no puerpério)", "Hipertensão não controlada, pré-eclâmpsia", "Náusea e hipotensão postural no início"],
    prescrever: [
      { contexto: "Hiperprolactinemia", texto: "USO ORAL\n1. Bromocriptina 2,5 mg ------------------------ 30 comprimidos\n   Tomar meio comprimido (1,25 mg) à noite, com alimento, por 1 semana; depois aumentar conforme orientação médica." }
    ] },
  { id: "lanolina", nomes: ["Lanolina", "lanolina purificada", "Lansinoh"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Fissura e dor mamilar na amamentação (adjuvante à correção da pega).",
    adulto: "Aplicar fina camada nos mamilos após cada mamada",
    gestacao: { nivel: "compativel", texto: "Compatível com a amamentação; não precisa remover antes de mamar." },
    alergia: [], contra: ["Corrigir a pega é o tratamento principal", "Dor intensa, fissura que não melhora ou sinais de infecção: reavaliar (candidíase, mastite)"],
    prescrever: [
      { contexto: "Fissura mamilar", texto: "USO TÓPICO\n1. Lanolina purificada ------------------------- 1 bisnaga\n   Após cada mamada, passar um pouco do próprio leite e deixar secar; depois aplicar uma camada fina de lanolina nos mamilos. Não precisa retirar antes da mamada.\n   Revisar a pega com a equipe de saúde." }
    ] },

  /* ========== GINECOLÓGICOS: CONTRACEPÇÃO ========== */
  { id: "etinilestradiol-gestodeno", nomes: ["Etinilestradiol + gestodeno", "gestodeno", "Gynera", "Minesse", "Adoless", "Harmonet"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção hormonal combinada oral (doses de 15, 20 ou 30 mcg de etinilestradiol).",
    adulto: "EE 30 ou 20 mcg + gestodeno 75 mcg: 1 comp/dia por 21 dias + pausa de 7 · EE 15 mcg + gestodeno 60 mcg: 24 ativos + 4 inativos sem pausa",
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada (não é teratogênico)." },
    alergia: [], contra: ["Critérios de elegibilidade da OMS: enxaqueca com aura, tabagismo ≥ 35 anos (≥ 15 cig/dia), TEV atual/prévio ou trombofilia, HAS não controlada, cardiopatia isquêmica/AVC, < 6 semanas pós-parto amamentando, câncer de mama, hepatopatia grave", "Indutores enzimáticos reduzem a eficácia"],
    prescrever: [
      { contexto: "Combinado 21 dias (EE 30 mcg)", texto: "USO ORAL\n1. Gestodeno 0,075 mg + etinilestradiol 0,03 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, iniciando no 1º dia da menstruação. Ao terminar a cartela de 21, fazer pausa de 7 dias e iniciar a próxima." },
      { contexto: "Combinado 24/4 (EE 15 mcg)", texto: "USO ORAL\n1. Gestodeno 0,06 mg + etinilestradiol 0,015 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, iniciando no 1º dia da menstruação. Tomar todos os 28 comprimidos (24 ativos + 4 inativos) e emendar a cartela seguinte, sem pausa." }
    ] },
  { id: "etinilestradiol-desogestrel", nomes: ["Etinilestradiol + desogestrel", "Mercilon", "Microdiol", "Femina"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção hormonal combinada oral.",
    adulto: "EE 20 ou 30 mcg + desogestrel 150 mcg: 1 comp/dia por 21 dias + pausa de 7",
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." },
    alergia: [], contra: ["Mesmos critérios de elegibilidade dos combinados (enxaqueca com aura, tabagismo ≥ 35 anos, TEV, HAS não controlada, < 6 semanas pós-parto amamentando)", "Risco de TEV um pouco maior que com levonorgestrel", "Indutores enzimáticos reduzem a eficácia"],
    prescrever: [
      { contexto: "Combinado 21 dias", texto: "USO ORAL\n1. Desogestrel 0,15 mg + etinilestradiol 0,02 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, iniciando no 1º dia da menstruação. Ao terminar a cartela de 21, fazer pausa de 7 dias e iniciar a próxima." }
    ] },
  { id: "etinilestradiol-drospirenona", nomes: ["Etinilestradiol + drospirenona", "drospirenona", "Yasmin", "Yaz", "Elani"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional", "poupador-k"],
    usos: "Contracepção combinada oral; útil na síndrome pré-menstrual/TDPM, acne e retenção hídrica.",
    adulto: "EE 30 mcg + drospirenona 3 mg: 21 dias + pausa de 7 · EE 20 mcg + drospirenona 3 mg: 24 ativos + 4 inativos sem pausa",
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." },
    alergia: [], contra: ["Mesmos critérios de elegibilidade dos combinados", "Drospirenona é antimineralocorticoide: hipercalemia com IECA/BRA, espironolactona, AINE crônico; contraindicado em insuficiência renal ou adrenal", "Risco de TEV maior que com levonorgestrel", "Indutores enzimáticos reduzem a eficácia"],
    prescrever: [
      { contexto: "Combinado 24/4 (EE 20 mcg)", texto: "USO ORAL\n1. Drospirenona 3 mg + etinilestradiol 0,02 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, iniciando no 1º dia da menstruação. Tomar os 28 comprimidos e emendar a cartela seguinte, sem pausa." },
      { contexto: "Combinado 21 dias (EE 30 mcg)", texto: "USO ORAL\n1. Drospirenona 3 mg + etinilestradiol 0,03 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, iniciando no 1º dia da menstruação. Ao terminar a cartela de 21, fazer pausa de 7 dias e iniciar a próxima." }
    ] },
  { id: "etinilestradiol-ciproterona", nomes: ["Etinilestradiol + ciproterona", "acetato de ciproterona + etinilestradiol", "ciproterona", "Diane 35", "Selene", "Diclin"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Acne moderada a grave e hirsutismo (inclusive na SOP) em mulheres que também desejam contracepção.",
    adulto: "EE 35 mcg + ciproterona 2 mg: 1 comp/dia por 21 dias + pausa de 7",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado (antiandrogênio: risco de feminização de feto masculino)." },
    alergia: [], contra: ["Risco de TEV maior que outros combinados: usar pelo tempo necessário para o hiperandrogenismo e reavaliar (suspender alguns ciclos após a melhora)", "Mesmos critérios de elegibilidade dos combinados", "Não associar a outro anticoncepcional hormonal", "Meningioma (ciproterona em dose alta)"],
    prescrever: [
      { contexto: "Acne / hirsutismo com desejo de contracepção", texto: "USO ORAL\n1. Acetato de ciproterona 2 mg + etinilestradiol 0,035 mg ---- 3 cartelas\n   Tomar 1 comprimido ao dia, sempre no mesmo horário, iniciando no 1º dia da menstruação. Ao terminar a cartela de 21, fazer pausa de 7 dias e iniciar a próxima.\n   Reavaliar em 3 a 6 meses." }
    ] },
  { id: "estradiol-dienogeste", nomes: ["Valerato de estradiol + dienogeste", "estradiol + dienogeste", "Qlaira"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção combinada oral com estradiol (regime quadrifásico); útil no sangramento menstrual intenso.",
    adulto: "1 comp/dia na ordem da cartela de 28 (26 ativos + 2 inativos), sem pausa",
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." },
    alergia: [], contra: ["Mesmos critérios de elegibilidade dos combinados", "Seguir rigorosamente a ordem dos comprimidos; regras de esquecimento próprias (ver bula)", "Indutores enzimáticos reduzem a eficácia"],
    prescrever: [
      { contexto: "Contracepção / sangramento menstrual intenso", texto: "USO ORAL\n1. Valerato de estradiol + dienogeste --------- 3 cartelas\n   Tomar 1 comprimido ao dia, no mesmo horário, na ordem indicada na cartela, iniciando no 1º dia da menstruação. Ao fim dos 28 comprimidos, iniciar a próxima cartela sem pausa." }
    ] },
  { id: "algestona-estradiol", nomes: ["Algestona + enantato de estradiol", "acetofenido de algestona + enantato de estradiol", "Perlutan", "Ciclovular", "Uno-Ciclo"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção injetável mensal combinada.",
    adulto: "Algestona acetofenida 150 mg + enantato de estradiol 10 mg IM mensal; 1ª dose no 8º dia do ciclo (7º–10º), seguintes conforme bula",
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." },
    alergia: [], contra: ["Contém estrogênio: mesmos critérios de elegibilidade dos combinados", "Irregularidade menstrual", "Indutores enzimáticos podem reduzir a eficácia"],
    prescrever: [
      { contexto: "Injetável mensal", texto: "USO INTRAMUSCULAR\n1. Algestona acetofenida 150 mg + enantato de estradiol 10 mg ---- 1 ampola\n   Aplicar 1 mL IM profunda (glúteo), sem massagear. 1ª dose no 8º dia após o início da menstruação (entre o 7º e o 10º dia); as seguintes conforme o esquema da bula do produto." }
    ] },
  { id: "anel-vaginal-contraceptivo", nomes: ["Anel vaginal contraceptivo", "etonogestrel + etinilestradiol anel", "NuvaRing"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção combinada de uso mensal (alternativa a quem esquece a pílula).",
    adulto: "1 anel por 3 semanas, retirar e fazer pausa de 7 dias",
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." },
    alergia: [], contra: ["Mesmos critérios de elegibilidade dos combinados", "Se ficar fora da vagina > 3 horas (conferir bula): usar preservativo por 7 dias", "Indutores enzimáticos reduzem a eficácia"],
    prescrever: [
      { contexto: "Contracepção mensal", texto: "USO VAGINAL\n1. Anel vaginal de etonogestrel + etinilestradiol ---- 3 unidades\n   Introduzir 1 anel na vagina entre o 1º e o 5º dia da menstruação e mantê-lo por 3 semanas. Retirar no mesmo dia da semana em que foi colocado, fazer pausa de 7 dias e colocar um novo anel." }
    ] },
  { id: "adesivo-contraceptivo", nomes: ["Adesivo contraceptivo", "norelgestromina + etinilestradiol", "Evra"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção combinada transdérmica semanal.",
    adulto: "1 adesivo por semana por 3 semanas + 1 semana sem adesivo",
    gestacao: { nivel: "contraindicado", texto: "Suspender se gestação confirmada." },
    alergia: [], contra: ["Mesmos critérios de elegibilidade dos combinados; exposição estrogênica e risco de TEV maiores que a pílula", "Menor eficácia com peso ≥ 90 kg", "Indutores enzimáticos reduzem a eficácia"],
    prescrever: [
      { contexto: "Contracepção semanal", texto: "USO TRANSDÉRMICO\n1. Norelgestromina + etinilestradiol adesivo ---- 3 caixas\n   Colar 1 adesivo no 1º dia da menstruação em pele limpa e seca (nádega, abdome, parte externa do braço ou costas; nunca nas mamas). Trocar no mesmo dia da semana por 3 semanas e ficar 1 semana sem adesivo." }
    ] },
  { id: "implante-etonogestrel", nomes: ["Implante de etonogestrel", "implante subdérmico", "Implanon"], classe: "ginecologicos", receita: "simples", tags: ["anticoncepcional"],
    usos: "Contracepção reversível de longa duração (LARC) por 3 anos — o método mais eficaz; opção no pós-parto e amamentação.",
    adulto: "Implante 68 mg subdérmico no braço não dominante; trocar a cada 3 anos",
    gestacao: { nivel: "contraindicado", texto: "Retirar se gestação." },
    alergia: [], contra: ["Câncer de mama atual, doença hepática grave, sangramento genital não investigado", "Sangramento irregular é o efeito mais comum (orientar antes)", "Indutores enzimáticos reduzem a eficácia", "Inserção e retirada por profissional capacitado"],
    prescrever: [
      { contexto: "Encaminhamento / prescrição para inserção", texto: "USO SUBDÉRMICO\n1. Implante de etonogestrel 68 mg ------------- 1 unidade\n   Inserção subdérmica na face interna do braço não dominante por profissional capacitado. Validade de 3 anos.\n   (Se fora dos 5 primeiros dias do ciclo: excluir gestação e usar preservativo por 7 dias.)" }
    ] },
  { id: "diu-levonorgestrel", nomes: ["DIU de levonorgestrel", "SIU-LNG", "endoceptivo", "Mirena", "Kyleena"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Contracepção de longa duração; sangramento uterino aumentado, dismenorreia, adenomiose/endometriose; proteção endometrial na terapia hormonal.",
    adulto: "LNG 52 mg (Mirena): 5 anos ou mais conforme bula · LNG 19,5 mg (Kyleena): 5 anos",
    gestacao: { nivel: "contraindicado", texto: "Gestação: retirar o DIU se fios visíveis (risco de aborto e infecção) e excluir ectópica." },
    alergia: [], contra: ["Gestação, DIP ou cervicite purulenta atuais, sangramento não investigado", "Malformação uterina que distorce a cavidade, câncer de colo/endométrio", "Câncer de mama atual"],
    prescrever: [
      { contexto: "Prescrição / encaminhamento para inserção", texto: "USO INTRAUTERINO\n1. Sistema intrauterino de levonorgestrel 52 mg ---- 1 unidade\n   Inserção por profissional capacitado, preferencialmente nos primeiros 7 dias do ciclo (ou a qualquer momento, excluída gestação).\n   Revisão em 4 a 6 semanas." }
    ] },
  { id: "diu-cobre", nomes: ["DIU de cobre", "DIU TCu 380A", "dispositivo intrauterino de cobre"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Contracepção de longa duração sem hormônio (SUS; até 10 anos); contracepção de emergência até 5 dias após a relação.",
    adulto: "TCu 380A: inserção em qualquer fase do ciclo, excluída gestação; validade de 10 anos",
    gestacao: { nivel: "contraindicado", texto: "Gestação: retirar se fios visíveis e excluir ectópica." },
    alergia: [], contra: ["Gestação, DIP ou cervicite purulenta atuais, sangramento não investigado", "Malformação uterina que distorce a cavidade, câncer de colo/endométrio", "Doença de Wilson", "Pode aumentar fluxo e cólica menstrual"],
    prescrever: [
      { contexto: "Prescrição / encaminhamento para inserção", texto: "USO INTRAUTERINO\n1. Dispositivo intrauterino de cobre TCu 380A ---- 1 unidade\n   Inserção por profissional capacitado (pode ser no pós-parto imediato, em até 48 h, ou após 4 semanas). Revisão em 4 a 6 semanas.\n   Contracepção de emergência: inserir até 5 dias após a relação desprotegida." }
    ] },

  /* ========== GINECOLÓGICOS: CLIMATÉRIO ========== */
  { id: "estradiol", nomes: ["Estradiol", "valerato de estradiol", "estradiol gel", "estradiol transdérmico", "Primogyna", "Oestrogel", "Sandrena"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Terapia hormonal dos sintomas vasomotores e da síndrome geniturinária do climatério; insuficiência ovariana prematura.",
    adulto: "Valerato de estradiol 1–2 mg VO 1×/dia · gel: 1 dose/sachê diário na pele (conforme produto) · com útero: associar progestagênio",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado." },
    alergia: [], contra: ["Câncer de mama ou de endométrio, sangramento genital não investigado", "TEV atual/prévio, AVC, IAM, doença hepática ativa", "Com útero: associar progestagênio (proteção endometrial)", "Iniciar antes dos 60 anos ou até 10 anos da menopausa; via transdérmica preferível se risco de TEV, HAS, obesidade ou hipertrigliceridemia"],
    prescrever: [
      { contexto: "Climatério — via transdérmica (gel)", texto: "USO TRANSDÉRMICO\n1. Estradiol gel ------------------------------- 1 frasco (ou caixa de sachês)\n   Aplicar a dose indicada do produto 1 vez ao dia na pele limpa e seca dos braços, ombros ou abdome. Não aplicar nas mamas. Deixar secar antes de vestir.\n   Mulher com útero: associar progestagênio." },
      { contexto: "Climatério — via oral", texto: "USO ORAL\n1. Valerato de estradiol 1 mg ------------------ 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia. Uso contínuo; reavaliar anualmente.\n   Mulher com útero: associar progestagênio (ex.: progesterona micronizada)." }
    ] },
  { id: "estradiol-noretisterona", nomes: ["Estradiol + noretisterona", "estradiol + acetato de noretisterona", "Cliane", "Activelle"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Terapia hormonal combinada contínua no climatério em mulher com útero (sem sangramento cíclico), após 1 ano de amenorreia.",
    adulto: "1 comp/dia contínuo (estradiol 1 mg + noretisterona 0,5 mg ou estradiol 2 mg + noretisterona 1 mg)",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado." },
    alergia: [], contra: ["Câncer de mama ou de endométrio, sangramento genital não investigado", "TEV atual/prévio, AVC, IAM, doença hepática ativa", "Sangramento irregular nos primeiros meses; persistente: investigar"],
    prescrever: [
      { contexto: "TH combinada contínua", texto: "USO ORAL\n1. Estradiol 1 mg + acetato de noretisterona 0,5 mg ---- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, sem pausa. Reavaliar anualmente." }
    ] },
  { id: "tibolona", nomes: ["Tibolona", "Livial", "Reduclim"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Sintomas vasomotores do climatério e baixa libido, em mulher com ≥ 12 meses de amenorreia (não precisa associar progestagênio).",
    adulto: "2,5 mg VO 1×/dia, contínuo",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado." },
    alergia: [], contra: ["Câncer de mama (atual ou prévio): aumenta recorrência", "TEV, AVC (risco aumentado, sobretudo após 60 anos), IAM, doença hepática ativa", "Sangramento genital não investigado", "Não iniciar antes de 12 meses da última menstruação"],
    prescrever: [
      { contexto: "Climatério", texto: "USO ORAL\n1. Tibolona 2,5 mg ----------------------------- 28 comprimidos\n   Tomar 1 comprimido 1 vez ao dia, sempre no mesmo horário. Uso contínuo; reavaliar anualmente." }
    ] },

  /* ========== GINECOLÓGICOS: INDUÇÃO DE OVULAÇÃO (ESPECIALISTA) ========== */
  { id: "clomifeno", nomes: ["Clomifeno", "citrato de clomifeno", "Indux", "Clomid"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Indução de ovulação em anovulação (SOP) — de preferência sob acompanhamento do especialista em reprodução.",
    adulto: "50 mg VO 1×/dia por 5 dias a partir do 3º–5º dia do ciclo; aumentar 50 mg/ciclo se não ovular (máx. 150 mg/dia); até 6 ciclos",
    gestacao: { nivel: "contraindicado", texto: "Excluir gestação antes de cada ciclo." },
    alergia: [], contra: ["Gestação, doença hepática, sangramento não investigado, cisto ovariano não-SOP", "Gemelaridade e síndrome de hiperestímulo ovariano: monitorizar (ultrassom)", "Distúrbios visuais: suspender", "Investigar o casal (espermograma, permeabilidade tubária) antes"],
    prescrever: [
      { contexto: "Indução de ovulação (SOP)", texto: "USO ORAL\n1. Citrato de clomifeno 50 mg ------------------ 5 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 5 dias, do 3º ao 7º dia do ciclo menstrual.\n   Relações sexuais em dias alternados do 10º ao 20º dia. Retorno com controle de ovulação." }
    ] },
  { id: "letrozol", nomes: ["Letrozol", "Femara"], classe: "ginecologicos", receita: "simples", tags: [],
    usos: "Indução de ovulação na SOP (1ª linha internacional; uso off-label no Brasil — referir ao especialista); câncer de mama receptor hormonal positivo (oncologia).",
    adulto: "Indução: 2,5 mg/dia por 5 dias a partir do 3º dia do ciclo, podendo aumentar até 7,5 mg/dia (especialista) · câncer de mama: 2,5 mg/dia",
    gestacao: { nivel: "contraindicado", texto: "Contraindicado na gestação; excluir gestação antes de cada ciclo." },
    alergia: [], contra: ["Gestação e lactação", "Uso na infertilidade é off-label: termo de consentimento e acompanhamento especializado", "Uso prolongado (oncologia): perda de massa óssea, artralgia"],
    prescrever: [
      { contexto: "Indução de ovulação (especialista)", texto: "USO ORAL\n1. Letrozol 2,5 mg ------------------------------ 5 comprimidos\n   Tomar 1 comprimido 1 vez ao dia por 5 dias, do 3º ao 7º dia do ciclo menstrual, conforme orientação do especialista." }
    ] },
]);

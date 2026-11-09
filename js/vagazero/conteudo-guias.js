/* Vaga Zero — guias. Formato em docs/VAGA-ZERO.md.
   secao = { titulo, itens?: [], tabela?: { colunas, linhas }, nota? }
   Doses de fármacos ficam na biblioteca (VZ_FARMACOS); aqui só os ids. */
VZ_GUIAS = {
  /* ======================================================================
     VIA AÉREA
     ====================================================================== */
  viaAerea: {
    adulto: [
      {
        titulo: "Decisão de intubar: sempre médica, nunca automática",
        itens: [
          "NÃO existe intubação profilática automática para transporte.",
          "A decisão é do médico responsável e considera: indicação clínica real, recursos disponíveis (material, drogas, capnografia, ventilador), competência da equipe e risco de fazer o procedimento fora do hospital.",
          "Intubar antes de sair (no hospital de origem, com mais recursos) é preferível a intubar na ambulância em movimento — quando a indicação existe ou é previsível no trajeto.",
          "Se a indicação for duvidosa: otimizar (O₂, VNI, posição, tratar a causa), reavaliar e registrar o raciocínio.",
          "Paciente em risco fisiológico (hipoxemia, hipotensão, acidose grave): ressuscitar antes de induzir sempre que possível."
        ]
      },
      {
        titulo: "Indicações de via aérea definitiva",
        itens: [
          "Incapacidade de proteger a via aérea (Glasgow ≤ 8 com perda de reflexos, vômitos/sangue sem controle).",
          "Falha de oxigenação apesar de O₂ em alta concentração ou VNI.",
          "Falha de ventilação (hipercapnia com rebaixamento, fadiga, FR muito baixa).",
          "Obstrução iminente: queimadura de via aérea com estridor/rouquidão, angioedema progressivo, trauma cervical com hematoma em expansão.",
          "Evolução clínica prevista que tornará a via aérea inviável durante o trajeto (avaliar caso a caso).",
          "Necessidade de sedação profunda/controle de agitação grave incompatível com transporte seguro."
        ]
      },
      {
        titulo: "Avaliação anatômica — LEMON",
        tabela: {
          colunas: ["Letra", "O que avaliar"],
          linhas: [
            ["L — Look", "Aparência externa: trauma de face, barba, obesidade, pescoço curto, dentes protrusos, sangue/vômito"],
            ["E — Evaluate 3-3-2", "Abertura bucal < 3 dedos, mento-hioide < 3 dedos, hioide-tireoide < 2 dedos"],
            ["M — Mallampati", "Classe III–IV sugere laringoscopia difícil (muitas vezes inviável na urgência)"],
            ["O — Obstruction", "Corpo estranho, epiglotite, abscesso, hematoma, queimadura, estridor"],
            ["N — Neck mobility", "Colar cervical, artrite, imobilização: laringoscopia mais difícil"]
          ]
        },
        nota: "Preditores de ventilação com máscara difícil (MOANS): Máscara sem vedação, Obesidade/Obstrução, Age (idade > 55), No teeth (sem dentes), Stiff (pulmão rígido/asma). Dispositivo supraglótico difícil (RODS): Restrição de abertura bucal, Obstrução, Distorção da via aérea, Stiff. Cricotireoidostomia difícil (SMART): cirurgia prévia, massa, acesso/anatomia, radiação, tumor."
      },
      {
        titulo: "Via aérea fisiologicamente difícil (risco de PCR na indução)",
        itens: [
          "Hipoxemia: SpO₂ < 93% apesar de O₂ — dessatura em segundos na apneia. Pré-oxigenar ao máximo; considerar VNI para pré-oxigenação.",
          "Hipotensão / choque (PAS < 90 mmHg, PAM < 65, índice de choque > 0,9): ressuscitar com volume e/ou vasopressor antes da indução; ter vasopressor pronto (noradrenalina).",
          "Acidose metabólica grave: o paciente compensa com FR alta; a apneia e a ventilação insuficiente após IOT pioram o pH rapidamente. Ajustar FR alta no ventilador e evitar apneia prolongada.",
          "Insuficiência de VD / TEP grave: indução e pressão positiva podem levar a colapso — máximo cuidado, doses reduzidas.",
          "Obesidade, gestação, sepse: menor reserva de O₂."
        ]
      },
      {
        titulo: "Critérios de alto risco — preferir intubar antes de sair, com o melhor operador",
        itens: [
          "Preditores LEMON/MOANS positivos.",
          "Instabilidade fisiológica (item acima).",
          "Trauma de face/pescoço, queimadura de via aérea, sangramento ativo na via aérea.",
          "Gestante (via aérea difícil, aspiração, dessaturação rápida).",
          "Ambulância em movimento: parar o veículo em local seguro para qualquer procedimento de via aérea."
        ]
      },
      {
        titulo: "Checklist de preparação — SOAP-ME",
        itens: [
          "S — Sucção: aspirador testado e ligado, sonda rígida (Yankauer) e flexível.",
          "O — Oxigênio: pré-oxigenação com máscara com reservatório (15 L/min) ou BVM com reservatório e válvula PEEP; cateter nasal para oxigenação apneica; conferir pressão do cilindro.",
          "A — Airway (via aérea): laringoscópio testado (2 lâminas), tubos do tamanho previsto e meio número abaixo, fio-guia, bougie, seringa, dispositivo supraglótico, BVM, cânula orofaríngea, kit de cricotireoidostomia.",
          "P — Posicionamento: rampa/coxins até orelha alinhada ao esterno; cabeceira 20–30° (exceto suspeita de lesão de coluna — manter alinhamento com estabilização manual).",
          "M — Monitorização e Medicações: cardioscópio, SpO₂, PA a cada 3 min (ou PAI), capnografia; drogas aspiradas e rotuladas, vasopressor pronto, acesso venoso pérvio (ideal 2).",
          "E — EtCO₂: capnografia com curva conectada antes do primeiro tubo.",
          "Verbalizar o plano A/B/C/D para a equipe antes de iniciar."
        ]
      },
      {
        titulo: "Material mínimo",
        itens: [
          "Laringoscópio com lâminas Macintosh 3 e 4 (e videolaringoscópio, se disponível).",
          "Tubos 6,5 / 7,0 / 7,5 / 8,0 com balonete; fio-guia e bougie.",
          "Dispositivo supraglótico de segunda geração (tamanhos 3, 4 e 5).",
          "BVM adulto com reservatório e válvula PEEP; cânulas orofaríngeas e nasofaríngeas.",
          "Kit de cricotireoidostomia (bisturi lâmina 10, bougie, tubo 6,0 com balonete) — técnica bisturi-bougie-tubo.",
          "Capnógrafo com curva, cufômetro, fixador de tubo, filtro HME, ventilador de transporte testado."
        ]
      },
      {
        titulo: "Plano A / B / C / D",
        tabela: {
          colunas: ["Plano", "Ação", "Quando passar ao próximo"],
          linhas: [
            ["A", "Laringoscopia direta ou videolaringoscopia (melhor operador; otimizar posição, BURP, bougie)", "Após no máximo 2–3 tentativas, ou antes se SpO₂ < 90–93%"],
            ["B", "Dispositivo supraglótico (2ª geração) para oxigenar", "Se não oxigena com o supraglótico"],
            ["C", "Ventilação com BVM a 2 pessoas + cânula oro/nasofaríngea", "Se não intuba e não oxigena (NINO / CICO)"],
            ["D", "Via aérea cirúrgica: cricotireoidostomia (bisturi-bougie-tubo)", "Decisão imediata — não atrasar com novas tentativas"]
          ]
        },
        nota: "Entre tentativas, sempre reoxigenar. A cada tentativa mudar algo (operador, lâmina, posição, dispositivo)."
      },
      {
        titulo: "Pré-oxigenação e oxigenação apneica",
        itens: [
          "3 minutos de FiO₂ máxima com vedação adequada (máscara com reservatório 15 L/min ou BVM com reservatório), ou 8 respirações de capacidade vital.",
          "Se SpO₂ não sobe acima de 93% (shunt): VNI ou BVM com PEEP para pré-oxigenar.",
          "Cateter nasal durante a laringoscopia (oxigenação apneica), mantido até a confirmação do tubo.",
          "Cabeceira elevada 20–30° prolonga o tempo seguro de apneia."
        ]
      },
      {
        titulo: "Escolha de drogas por cenário (doses na biblioteca)",
        tabela: {
          colunas: ["Cenário", "Indutor", "Bloqueador neuromuscular", "Cuidados"],
          linhas: [
            ["Estável hemodinamicamente", "etomidato, cetamina ou propofol", "succinilcolina ou rocuronio", "Analgesia prévia com fentanil quando indicada"],
            ["Hipotensão / choque", "cetamina ou etomidato em DOSE REDUZIDA", "rocuronio (dose plena ou maior; circulação lenta atrasa o início)", "Ressuscitar antes; noradrenalina pronta; evitar propofol e midazolam em bolus"],
            ["Broncoespasmo grave", "cetamina", "succinilcolina ou rocuronio", "Pós-IOT: FR baixa, tempo expiratório longo"],
            ["TCE / HIC", "etomidato ou cetamina", "rocuronio ou succinilcolina", "Evitar hipotensão e hipóxia (cada episódio piora o desfecho)"],
            ["Estado de mal convulsivo", "propofol (se estável) ou midazolam", "rocuronio", "Bloqueador mascara crise: manter anticonvulsivante e sedação"],
            ["Hipercalemia, rabdomiólise, queimado/imobilizado > 24–72 h, doença neuromuscular", "conforme hemodinâmica", "rocuronio (succinilcolina contraindicada)", "—"]
          ]
        },
        nota: "Doses, apresentações e diluições: ver biblioteca (ids etomidato, cetamina, propofol, midazolam, fentanil, succinilcolina, rocuronio). Drogas de alto risco: conferência independente antes de administrar."
      },
      {
        titulo: "Confirmação e fixação",
        itens: [
          "Capnografia com curva (onda quadrada persistente por ≥ 6 ciclos) é o padrão de confirmação. Sem curva = tubo fora da traqueia até prova em contrário.",
          "Complementar: visualização do tubo passando pelas cordas, expansão torácica simétrica, ausculta (epigástrio, ápices e bases), condensação no tubo (isolada não confirma).",
          "Profundidade de referência na rima labial: cerca de 21 cm (mulher) e 23 cm (homem); conferir ausculta e radiografia se disponível antes de sair.",
          "Pressão do balonete 20–30 cmH₂O (cufômetro).",
          "Fixar com fixador comercial ou cadarço; anotar número na rima; colar cervical/coxins para limitar flexão-extensão.",
          "Reconfirmar capnografia após cada transferência de maca e após qualquer movimentação."
        ]
      },
      {
        titulo: "Sedação e analgesia pós-intubação",
        itens: [
          "Iniciar logo após a confirmação — especialmente se usou rocuronio (paralisia longa com paciente acordado é evento grave).",
          "Analgesia primeiro (fentanil), depois sedação (midazolam, propofol se estável, ou cetamina se hipotenso).",
          "Alvo de sedação definido pelo médico e registrado; no transporte, garantir que o paciente não desperte agitado com risco de extubação.",
          "Hipotensão pós-IOT: pensar em hipovolemia, efeito da droga, auto-PEEP, pneumotórax; tratar e reduzir a sedação se possível.",
          "Doses e diluições de infusão: biblioteca (fentanil, midazolam, propofol, cetamina)."
        ]
      },
      {
        titulo: "Ventilação inicial e monitorização",
        itens: [
          "Ver guia de Ventilação: VT 6–8 mL/kg de peso predito, PEEP 5 cmH₂O, FiO₂ 100% e reduzir para SpO₂ alvo.",
          "Acidose metabólica grave: FR inicial alta para aproximar o volume-minuto que o paciente fazia antes.",
          "Monitorização contínua: ECG, SpO₂, EtCO₂ com curva, PA (não invasiva a cada 3–5 min ou invasiva), pressões do ventilador.",
          "Queda súbita: DOPE (Deslocamento, Obstrução, Pneumotórax, Equipamento) — ver contingência."
        ]
      },
      {
        titulo: "Referências",
        itens: [
          "AHA — Guidelines for CPR and ECC (2020) e atualização (2025).",
          "ACS — ATLS, 10ª edição (2018).",
          "Difficult Airway Society — Guidelines for management of tracheal intubation in critically ill adults (2018).",
          "Ministério da Saúde — Protocolos de Suporte Avançado de Vida, SAMU 192 (2016 e atualizações)."
        ]
      }
    ],

    pediatrico: [
      {
        titulo: "Decisão de intubar na criança",
        itens: [
          "NÃO intubar de forma profilática automática para transporte. A decisão é do médico, considerando indicação, recursos, competência da equipe em via aérea pediátrica e risco fora do hospital.",
          "Muitas crianças são bem ventiladas com BVM bem feita; BVM eficaz é melhor que intubação difícil por equipe inexperiente.",
          "Indicações: falha de oxigenação/ventilação apesar de O₂/VNI, incapacidade de proteger a via aérea, obstrução iminente, choque refratário com fadiga, necessidade de controle prolongado da ventilação.",
          "Peso atualizado (balança) obrigatório para drogas e materiais. Fita de Broselow só como referência quando não há balança — nunca para presumir o peso no registro."
        ]
      },
      {
        titulo: "Particularidades anatômicas e fisiológicas",
        itens: [
          "Occipital proeminente (lactente): coxim sob os ombros para alinhar.",
          "Língua grande, laringe alta e anterior, epiglote longa: lâmina reta (Miller) em lactentes.",
          "Consumo de O₂ alto e capacidade residual funcional baixa: dessaturação muito rápida na apneia.",
          "Bradicardia em resposta à hipóxia: a principal causa de bradicardia na intubação é hipóxia — parar, oxigenar.",
          "Hipotensão é sinal tardio de choque na criança."
        ]
      },
      {
        titulo: "Avaliação de risco",
        itens: [
          "Anatômico: micrognatia, síndromes (Pierre Robin, Down), macroglossia, trauma facial, epiglotite/obstrução (não manipular a orofaringe se suspeita de epiglotite; levar ao centro com equipe de via aérea).",
          "Fisiológico: hipoxemia, choque, acidose, cardiopatia — mesmo raciocínio do adulto, ressuscitar antes."
        ]
      },
      {
        titulo: "Tubo traqueal, lâmina e profundidade por idade",
        tabela: {
          colunas: ["Idade", "Tubo sem balonete (mm DI)", "Tubo com balonete (mm DI)", "Lâmina", "Profundidade (cm, ~3 × DI)"],
          linhas: [
            ["RN a termo até 1 ano", "3,5", "3,0", "Miller 1", "10–11"],
            ["1–2 anos", "4,0", "3,5", "Miller 1–2", "11–12"],
            ["2 anos", "4,5", "4,0", "Miller 2 / Mac 2", "12–13"],
            ["4 anos", "5,0", "4,5", "Miller 2 / Mac 2", "14–15"],
            ["6 anos", "5,5", "5,0", "Miller 2 / Mac 2", "15–16"],
            ["8 anos", "6,0", "5,5", "Mac 2–3", "17–18"],
            ["10 anos", "6,5", "6,0", "Mac 3", "18–19"],
            ["12 anos", "7,0", "6,5", "Mac 3", "20–21"]
          ]
        },
        nota: "Fórmulas (> 2 anos): com balonete = idade/4 + 3,5; sem balonete = idade/4 + 4. Profundidade na rima ≈ 3 × diâmetro interno. Ter sempre meio número acima e abaixo. Tubo com balonete é aceitável em todas as idades fora do período neonatal (PALS); pressão do balonete < 20–25 cmH₂O."
      },
      {
        titulo: "Dispositivo supraglótico (máscara laríngea) por peso",
        tabela: {
          colunas: ["Peso", "Tamanho"],
          linhas: [
            ["< 5 kg", "1"], ["5–10 kg", "1,5"], ["10–20 kg", "2"], ["20–30 kg", "2,5"], ["30–50 kg", "3"], ["50–70 kg", "4"]
          ]
        },
        nota: "Tamanhos de referência para máscara laríngea clássica; conferir a indicação do fabricante na embalagem."
      },
      {
        titulo: "Checklist e material",
        itens: [
          "SOAP-ME como no adulto, com material do tamanho da criança e um tamanho acima/abaixo.",
          "BVM pediátrica (lactente/criança) com reservatório; máscaras faciais de vários tamanhos.",
          "Sondas de aspiração adequadas; cânulas orofaríngeas (medir do canto da boca ao ângulo da mandíbula).",
          "Capnografia com curva com adaptador pediátrico (baixo espaço morto).",
          "Drogas calculadas por kg com dose máxima, aspiradas e rotuladas com mg e mL; conferência independente."
        ]
      },
      {
        titulo: "Plano A / B / C / D",
        tabela: {
          colunas: ["Plano", "Ação"],
          linhas: [
            ["A", "Laringoscopia (direta ou vídeo) pelo operador mais experiente; tentativas curtas, reoxigenar entre elas"],
            ["B", "Dispositivo supraglótico do tamanho por peso"],
            ["C", "BVM a 2 pessoas com cânula orofaríngea (técnica E-C / dois polegares)"],
            ["D", "< 10–12 anos: cricotireoidostomia por agulha (cateter 14–16G na membrana cricotireóidea) como ponte; ≥ 10–12 anos: cricotireoidostomia cirúrgica"]
          ]
        },
        nota: "Cricotireoidostomia por agulha oxigena mas ventila mal (retenção de CO₂): é ponte de curta duração até via aérea definitiva. Técnica de insuflação conforme material disponível e protocolo do serviço."
      },
      {
        titulo: "Pré-oxigenação e drogas",
        itens: [
          "Pré-oxigenar com FiO₂ máxima; BVM suave com PEEP se não sobe a SpO₂.",
          "Indutor: cetamina ou etomidato (choque: dose reduzida); bloqueador: rocuronio ou succinilcolina — doses por kg com máximo na biblioteca. Nunca usar dose de adulto.",
          "Atropina não é rotina (PALS 2020); considerar quando há bradicardia ou alto risco de bradicardia (ex.: uso de succinilcolina em lactente) — dose na biblioteca (atropina).",
          "Ter adrenalina em dose de PCR calculada antes de induzir criança instável."
        ]
      },
      {
        titulo: "Confirmação, fixação e após a intubação",
        itens: [
          "Capnografia com curva obrigatória; ausculta simétrica em axilas e ausência de ruído no epigástrio.",
          "Fixar com atenção: na criança, poucos milímetros de flexão/extensão deslocam o tubo (flexão aprofunda, extensão exterioriza). Imobilizar a cabeça.",
          "Sedação e analgesia por kg (fentanil, midazolam, cetamina); registrar alvo.",
          "Ventilação inicial: ver guia de Ventilação (perfil pediátrico).",
          "Sonda orogástrica para descompressão gástrica após BVM prolongada."
        ]
      },
      {
        titulo: "Referências",
        itens: [
          "AHA — PALS / Pediatric Basic and Advanced Life Support (2020) e atualização (2025).",
          "Sociedade Brasileira de Pediatria — Reanimação e suporte avançado pediátrico (material educacional vigente)."
        ]
      }
    ],

    neonatal: [
      {
        titulo: "Decisão de intubar no neonato",
        itens: [
          "NÃO intubar profilaticamente para transporte. Decisão médica considerando indicação, recursos, experiência da equipe em via aérea neonatal e risco fora da unidade.",
          "Reanimação neonatal segue o Programa de Reanimação Neonatal da SBP (2022), diferente da reanimação pediátrica.",
          "Indicações (SBP 2022): VPP com máscara ineficaz ou prolongada; necessidade de massagem cardíaca; hérnia diafragmática congênita (não ventilar com máscara); administração de surfactante; apneia/insuficiência respiratória que exija ventilação no transporte.",
          "Peso e idade gestacional definem tubo e profundidade."
        ]
      },
      {
        titulo: "Cânula traqueal por idade gestacional / peso (SBP 2022)",
        tabela: {
          colunas: ["Idade gestacional", "Peso estimado", "Cânula (mm DI, sem balonete)"],
          linhas: [
            ["< 28 semanas", "< 1.000 g", "2,5"],
            ["28–34 semanas", "1.000–2.000 g", "3,0"],
            ["> 34 semanas", "> 2.000 g", "3,5"]
          ]
        },
        nota: "Lâmina reta: 00 (prematuro extremo), 0 (prematuro), 1 (termo)."
      },
      {
        titulo: "Profundidade de inserção (marca no lábio superior) por idade gestacional",
        tabela: {
          colunas: ["Idade gestacional", "Marca no lábio (cm)"],
          linhas: [
            ["23–24 sem", "5,5"], ["25–26 sem", "6,0"], ["27–29 sem", "6,5"], ["30–32 sem", "7,0"],
            ["33–34 sem", "7,5"], ["35–37 sem", "8,0"], ["38–40 sem", "8,5"], ["41–43 sem", "9,0"]
          ]
        },
        nota: "Alternativa: peso (kg) + 6 cm. Confirmar por ausculta e radiografia antes do transporte sempre que possível."
      },
      {
        titulo: "Plano A / B / C",
        tabela: {
          colunas: ["Plano", "Ação"],
          linhas: [
            ["A", "Intubação por laringoscopia (tentativa curta, idealmente ≤ 30 s), com FC e SpO₂ monitorizadas"],
            ["B", "Máscara laríngea tamanho 1 em RN ≥ 34 semanas e/ou ≥ 2.000 g (SBP 2022) quando VPP com máscara facial e intubação falham"],
            ["C", "VPP com máscara facial e balão autoinflável ou ventilador manual em T (reposicionar, aspirar, abrir a boca, aumentar pressão)"]
          ]
        },
        nota: "Via aérea cirúrgica não é parte do algoritmo neonatal de rotina. Hérnia diafragmática: intubar e não ventilar com máscara."
      },
      {
        titulo: "Preparação e material",
        itens: [
          "Fonte de calor/incubadora aquecida, saco plástico para RN < 34 sem, touca.",
          "Aspirador com sondas 6, 8 e 10; balão autoinflável ou ventilador manual em T, máscaras 00/0/1.",
          "Cânulas 2,5 / 3,0 / 3,5; fio-guia; laringoscópio com lâminas 00, 0 e 1; máscara laríngea nº 1.",
          "Oxímetro com sensor neonatal em membro superior direito (pré-ductal); detector de CO₂ ou capnógrafo neonatal.",
          "Blender de O₂ para titular FiO₂ (ar comprimido + O₂)."
        ]
      },
      {
        titulo: "Drogas",
        itens: [
          "Sedação/analgesia e pré-medicação para intubação neonatal eletiva: só com dose neonatal específica da biblioteca. Se a biblioteca não tiver dose neonatal validada para o fármaco, seguir protocolo institucional da UTI neonatal — não extrapolar dose pediátrica.",
          "Na reanimação em sala de parto não se usa pré-medicação."
        ]
      },
      {
        titulo: "Confirmação e fixação",
        itens: [
          "Detecção de CO₂ exalado (colorimétrico ou capnografia) + aumento da FC é o melhor sinal de tubo na traqueia.",
          "Expansão torácica, ausculta simétrica em axilas.",
          "Fixação firme no lábio superior; anotar marca; cabeça em posição neutra durante todo o transporte."
        ]
      },
      {
        titulo: "Referências",
        itens: [
          "Sociedade Brasileira de Pediatria — Programa de Reanimação Neonatal: diretrizes 2022 (RN ≥ 34 semanas e RN < 34 semanas).",
          "AHA/AAP — Neonatal Resuscitation (2020) e atualização (2025)."
        ]
      }
    ]
  },

  /* ======================================================================
     OXIGÊNIO
     ====================================================================== */
  oxigenio: [
    {
      titulo: "Dispositivos de oferta de O₂",
      tabela: {
        colunas: ["Dispositivo", "Fluxo", "FiO₂ aproximada", "Observação"],
        linhas: [
          ["Cateter nasal", "1–6 L/min", "24–44% (≈ +4% por L/min)", "Acima de 6 L/min resseca a mucosa sem ganho real"],
          ["Máscara simples", "5–10 L/min", "35–55%", "Fluxo mínimo 5 L/min para evitar reinalação de CO₂"],
          ["Máscara de Venturi", "Conforme válvula", "24–50% (fixa)", "Útil em DPOC/retentor de CO₂"],
          ["Máscara com reservatório (não reinalante)", "10–15 L/min", "60–90%", "Reservatório deve permanecer inflado"],
          ["VNI (CPAP/BiPAP)", "Conforme equipamento", "Até 100% (depende do equipamento)", "Alto consumo; exige paciente colaborativo e via aérea protegida"],
          ["BVM com reservatório", "15 L/min", "Próxima de 100% com boa vedação", "Sem reservatório: FiO₂ muito menor"],
          ["Ventilação mecânica", "Volume-minuto + gás de acionamento do ventilador", "21–100% ajustável", "Ventiladores pneumáticos consomem O₂ para funcionar: ver manual"]
        ]
      },
      nota: "Valores aproximados; a FiO₂ real depende do padrão respiratório do paciente."
    },
    {
      titulo: "Alvos de SpO₂",
      itens: [
        "Adulto em geral: 92–96%. Evitar hiperóxia prolongada.",
        "DPOC/retentor crônico de CO₂: 88–92%.",
        "SDRA: 88–95%.",
        "Gestante: ≥ 95% (oxigenação fetal).",
        "Criança: ≥ 94% na maioria dos quadros agudos.",
        "Neonato: alvos por minuto de vida na reanimação (ver guia Neonatal); prematuro em UTI conforme protocolo da unidade."
      ]
    },
    {
      titulo: "Autonomia do cilindro — cálculo",
      itens: [
        "Litros disponíveis = capacidade hidráulica do cilindro (L) × pressão no manômetro (bar).",
        "Autonomia (min) = litros disponíveis ÷ consumo (L/min).",
        "Consumo com ventilador = volume-minuto (VT × FR) ajustado pela FiO₂ + consumo de acionamento informado pelo fabricante.",
        "Exemplo: cilindro de 7 L a 150 bar = 1.050 L. Com 15 L/min → cerca de 70 min.",
        "Reserva: não contar com o resíduo final do cilindro; planejar O₂ para bem mais que o tempo previsto (regra prática usada em muitos serviços: o dobro do tempo estimado do trajeto, incluindo espera na chegada). Seguir a reserva mínima definida pelo serviço."
      ]
    },
    {
      titulo: "Calcular antes de sair",
      tabela: {
        colunas: ["Dado", "Onde obter"],
        linhas: [
          ["Capacidade hidráulica de cada cilindro (L)", "Gravada no cilindro / manual da ambulância"],
          ["Pressão atual (bar)", "Manômetro de cada cilindro (fixo e portátil)"],
          ["Consumo previsto (L/min)", "Fluxo do dispositivo ou volume-minuto do ventilador + acionamento"],
          ["Tempo de trajeto + espera", "Regulação / destino"]
        ]
      }
    },
    {
      titulo: "Alertas",
      itens: [
        "Testar cilindro portátil antes da transferência de maca (é onde o O₂ costuma acabar).",
        "Conferir conexões, umidificação e se o fluxômetro está aberto após cada troca de fonte.",
        "Não usar graxa/óleo nas conexões; não fumar; fixar cilindros (risco de projétil).",
        "VNI e ventiladores consomem muito: refazer o cálculo sempre que mudar parâmetros.",
        "Queda de SpO₂ sem explicação: verificar primeiro a fonte de O₂ e o circuito."
      ]
    },
    {
      titulo: "Referências",
      itens: [
        "British Thoracic Society — Guideline for oxygen use in healthcare and emergency settings (2017).",
        "Ministério da Saúde — Protocolos SAMU 192, Suporte Avançado de Vida (2016)."
      ]
    }
  ],

  /* ======================================================================
     VENTILAÇÃO
     ====================================================================== */
  ventilacao: [
    {
      titulo: "Peso predito (ARDSNet)",
      itens: [
        "Homem: 50 + 0,91 × (altura em cm − 152,4).",
        "Mulher: 45,5 + 0,91 × (altura em cm − 152,4).",
        "Volume corrente calculado pelo PESO PREDITO, nunca pelo peso real (obeso recebe volume excessivo se usar o peso real).",
        "Sem altura informada: medir (ou estimar e registrar como estimada) — não presumir."
      ]
    },
    {
      titulo: "Parâmetros iniciais por perfil — adulto",
      tabela: {
        colunas: ["Perfil", "VT", "FR (rpm)", "PEEP (cmH₂O)", "FiO₂", "Alvos"],
        linhas: [
          ["Geral", "6–8 mL/kg peso predito", "14–18", "5", "100% e reduzir", "SpO₂ 92–96%; EtCO₂ 35–45 mmHg; Pplatô ≤ 30"],
          ["SDRA", "6 mL/kg (4–8) peso predito", "Até 35 (evitar auto-PEEP)", "≥ 8–10, conforme FiO₂ (tabela ARDSNet)", "Titular", "SpO₂ 88–95%; Pplatô ≤ 30; pressão de distensão ≤ 15; pH ≥ 7,25"],
          ["DPOC / asma", "6–8 mL/kg peso predito", "8–12 (baixa)", "5 ou menos (DPOC: até 80% do auto-PEEP)", "Titular", "Relação I:E 1:4 a 1:5; hipercapnia permissiva (pH > 7,20); vigiar auto-PEEP"],
          ["TCE / HIC", "6–8 mL/kg peso predito", "Para PaCO₂ 35–40", "5 (evitar PEEP alta se compromete PA)", "Titular", "SpO₂ ≥ 94%; EtCO₂ 35–40; evitar hiperventilação"],
          ["Acidose metabólica grave", "6–8 mL/kg peso predito", "Alta (aproximar volume-minuto prévio)", "5", "Titular", "Evitar queda do pH após IOT"]
        ]
      },
      nota: "Volume controlado é o modo mais previsível no transporte. Hiperventilação no TCE só como medida breve diante de sinais de herniação, até tratamento definitivo (Brain Trauma Foundation 2016)."
    },
    {
      titulo: "Parâmetros iniciais — pediatria",
      tabela: {
        colunas: ["Parâmetro", "Valor inicial"],
        linhas: [
          ["VT", "5–8 mL/kg de peso ideal (4–6 mL/kg em SDRA pediátrica grave)"],
          ["FR lactente", "25–30 rpm"],
          ["FR pré-escolar", "20–25 rpm"],
          ["FR escolar", "15–20 rpm"],
          ["FR adolescente", "12–16 rpm"],
          ["PEEP", "5 cmH₂O"],
          ["Pplatô", "≤ 28 cmH₂O"],
          ["Alvo SpO₂", "92–97% (SDRA pediátrica: 88–92% se PEEP ≥ 10)"]
        ]
      },
      nota: "Referência: PALICC-2 (2023). Durante RCP com via aérea avançada (PALS 2020): 1 ventilação a cada 2–3 s (20–30/min)."
    },
    {
      titulo: "Parâmetros iniciais — neonatal",
      itens: [
        "VPP na reanimação (SBP 2022): pressão inspiratória 20–25 cmH₂O (ajustar pela expansão torácica e FC), PEEP 5 cmH₂O, FR 40–60/min.",
        "FiO₂ inicial na reanimação: 21% em RN ≥ 34 semanas; 30% em RN < 34 semanas; titular pela SpO₂ pré-ductal.",
        "Ventilação mecânica no transporte: parâmetros da UTI neonatal de origem; se modo volume-alvo, VT de referência 4–6 mL/kg.",
        "Usar blender: evitar FiO₂ 100% desnecessária (lesão por hiperóxia, retinopatia)."
      ]
    },
    {
      titulo: "Ajustes durante o transporte",
      itens: [
        "Antes de sair: paciente estável por alguns minutos no ventilador de transporte, com gasometria se possível.",
        "SpO₂ baixa: ↑ FiO₂, depois ↑ PEEP (se PA permite); afastar DOPE.",
        "EtCO₂ alto: ↑ FR (atenção ao tempo expiratório na asma/DPOC) ou ↑ VT dentro do limite.",
        "EtCO₂ baixo súbito: queda de débito cardíaco (hipotensão, PCR), extubação, vazamento.",
        "Pressão de pico alta: secreção, tubo dobrado/mordido, broncoespasmo, pneumotórax, tubo seletivo.",
        "Hipotensão após ligar ventilador: hipovolemia, auto-PEEP (desconectar brevemente e observar), pneumotórax."
      ]
    },
    {
      titulo: "Alarmes",
      tabela: {
        colunas: ["Alarme", "Causas a verificar"],
        linhas: [
          ["Pressão alta", "Tosse/assincronia, secreção, tubo dobrado, broncoespasmo, pneumotórax, intubação seletiva"],
          ["Pressão baixa / volume baixo", "Desconexão, vazamento no balonete, extubação, fuga no circuito"],
          ["Apneia", "Modo espontâneo sem drive, sedação excessiva, desconexão"],
          ["Baixa pressão de gás", "Cilindro acabando, válvula fechada — trocar fonte e ventilar com BVM"],
          ["Bateria", "Ligar na rede da ambulância; ter BVM sempre à mão"]
        ]
      },
      nota: "Qualquer dúvida com o ventilador: desconectar e ventilar com BVM com O₂ enquanto resolve."
    },
    {
      titulo: "Referências",
      itens: [
        "ARDS Network — NEJM (2000).",
        "AMIB/SBPT — Diretrizes Brasileiras de Ventilação Mecânica (2013).",
        "Brain Trauma Foundation — Guidelines for the Management of Severe TBI, 4ª ed. (2016).",
        "PALICC-2 — Pediatric Acute Lung Injury Consensus Conference (2023).",
        "SBP — Programa de Reanimação Neonatal (2022)."
      ]
    }
  ],

  /* ======================================================================
     PEDIÁTRICO
     ====================================================================== */
  pediatrico: [
    {
      titulo: "Fluxo do transporte pediátrico",
      itens: [
        "1. Peso atualizado obrigatório (balança). Sem balança: fita de Broselow apenas como referência, registrando que é estimativa — nunca presumir peso.",
        "2. Avaliação ABCDE e triângulo de avaliação pediátrica (aparência, respiração, circulação da pele).",
        "3. Estabilizar antes de sair: via aérea, acesso (IV ou IO), glicemia, temperatura, volume.",
        "4. Calcular e rotular todas as drogas por kg com dose máxima; nunca dose de adulto.",
        "5. Material do tamanho certo (tabela) + um acima e um abaixo.",
        "6. Responsável legal: informar, registrar e, quando possível, acompanhar.",
        "7. Durante o transporte: reavaliar sinais vitais e perfusão com frequência; registrar."
      ]
    },
    {
      titulo: "Sinais vitais por idade (PALS)",
      tabela: {
        colunas: ["Idade", "FC acordado (bpm)", "FR (irpm)", "PAS: hipotensão se <"],
        linhas: [
          ["Neonato (0–28 dias)", "100–205", "30–53", "60 mmHg"],
          ["Lactente (1–12 meses)", "100–180", "30–53", "70 mmHg"],
          ["1–2 anos", "98–140", "22–37", "70 + (2 × idade em anos)"],
          ["3–5 anos", "80–120", "20–28", "70 + (2 × idade em anos)"],
          ["6–10 anos", "75–118", "18–25", "70 + (2 × idade em anos)"],
          ["11–14 anos", "60–100", "12–20", "90 mmHg"],
          ["15–18 anos", "60–100", "12–20", "90 mmHg"]
        ]
      },
      nota: "Taquicardia persistente e enchimento capilar > 2 s são sinais precoces de choque; hipotensão é tardia."
    },
    {
      titulo: "Material por faixa etária",
      tabela: {
        colunas: ["Faixa", "BVM / máscara", "Tubo (com balonete)", "Supraglótico", "Acesso"],
        linhas: [
          ["Lactente < 1 ano (3–10 kg)", "Lactente (≈ 450–500 mL)", "3,0–3,5", "1 a 1,5", "IV 24G / IO"],
          ["1–3 anos (10–15 kg)", "Pediátrica", "3,5–4,5", "2", "IV 22–24G / IO"],
          ["4–7 anos (15–25 kg)", "Pediátrica", "4,5–5,0", "2 a 2,5", "IV 20–22G / IO"],
          ["8–12 anos (25–40 kg)", "Pediátrica ou adulto", "5,5–6,5", "2,5 a 3", "IV 18–20G / IO"],
          ["> 12 anos (> 40 kg)", "Adulto", "6,5–7,0", "3 a 4", "IV 16–18G / IO"]
        ]
      },
      nota: "Valores de referência; confirmar pelo peso medido e pela indicação do fabricante."
    },
    {
      titulo: "Temperatura e glicemia",
      itens: [
        "Criança perde calor rapidamente: cobrir, aquecer a ambulância, minimizar exposição.",
        "Medir temperatura antes de sair e durante trajetos longos.",
        "Glicemia capilar em toda criança grave, com rebaixamento ou convulsão, e repetir no trajeto.",
        "Hipoglicemia: tratar com glicose por kg (biblioteca: glicose) e repetir glicemia; limiar e alvo conforme protocolo institucional."
      ]
    },
    {
      titulo: "Acesso intraósseo (IO)",
      itens: [
        "Indicado se acesso venoso não for obtido rapidamente na criança grave (PCR: IO imediata).",
        "Local: tíbia proximal, face medial, 1–2 cm abaixo da tuberosidade (1 dedo abaixo e medial); alternativa: fêmur distal, úmero proximal (crianças maiores).",
        "Não puncionar osso fraturado, local infectado ou já puncionado.",
        "Confirmar: agulha firme, aspiração de medula (nem sempre), infusão sem extravasamento. Fixar e vigiar a panturrilha (síndrome compartimental).",
        "Todas as drogas e fluidos da reanimação podem ser dados por IO; empurrar com seringa (gravidade é lenta)."
      ]
    },
    {
      titulo: "Suporte hemodinâmico",
      itens: [
        "Choque: bolus de cristaloide 10–20 mL/kg, com reavaliação após cada bolus (FC, perfusão, PA, fígado, estertores).",
        "Cardiopatia, neonato ou sinais de sobrecarga: preferir 10 mL/kg e reavaliar.",
        "Parar o volume se surgirem estertores, hepatomegalia ou piora respiratória.",
        "Choque persistente após volume: droga vasoativa (adrenalina ou noradrenalina, por kg na biblioteca), por acesso dedicado.",
        "Choque hemorrágico traumático: hemoderivados precocemente conforme protocolo; limitar cristaloide."
      ]
    },
    {
      titulo: "PCR pediátrica — pontos-chave (PALS)",
      itens: [
        "Compressões: 1/3 do diâmetro anteroposterior do tórax; 100–120/min.",
        "Relação 30:2 (1 socorrista) ou 15:2 (2 socorristas) sem via aérea avançada.",
        "Com via aérea avançada: compressão contínua e 1 ventilação a cada 2–3 s.",
        "Adrenalina por kg (biblioteca: adrenalina); ritmo chocável: desfibrilação por J/kg conforme PALS.",
        "Parar o veículo em local seguro para RCP de qualidade."
      ]
    },
    {
      titulo: "Referências",
      itens: [
        "AHA — PALS (2020) e atualização (2025).",
        "SSC — Surviving Sepsis Campaign International Guidelines for Children (2020)."
      ]
    }
  ],

  /* ======================================================================
     NEONATAL
     ====================================================================== */
  neonatal: [
    {
      titulo: "Transporte neonatal — preparação",
      itens: [
        "Incubadora de transporte pré-aquecida, com bateria carregada, O₂ e ar comprimido, blender e ventilador neonatal testados.",
        "Estabilizar antes de sair: temperatura, glicemia, via aérea/ventilação, acesso (cateter umbilical ou periférico), perfusão.",
        "Peso, idade gestacional e horas/dias de vida registrados.",
        "Dados maternos: tipo de parto, sorologias, uso de corticoide antenatal, bolsa rota, febre materna, medicações.",
        "Contato com a UTI neonatal de destino antes da saída; informar a família."
      ]
    },
    {
      titulo: "Controle térmico",
      itens: [
        "Alvo: temperatura axilar 36,5–37,5 °C.",
        "Prematuro < 34 semanas: saco plástico e touca desde o nascimento (SBP 2022); manter na incubadora.",
        "Medir temperatura antes de sair e a cada 15–30 min no trajeto.",
        "Evitar hipertermia (> 37,5 °C) — também prejudica, especialmente após asfixia.",
        "Hipotermia terapêutica (encefalopatia hipóxico-isquêmica): somente sob orientação da UTI neonatal de destino; não aquecer ativamente sem orientação nesse caso."
      ]
    },
    {
      titulo: "Glicemia",
      itens: [
        "Medir antes de sair e repetir no trajeto (prematuro, PIG/GIG, filho de mãe diabética, asfixia, sepse, sem dieta).",
        "Manter infusão de glicose contínua no RN em jejum, conforme prescrição da unidade de origem.",
        "Hipoglicemia: glicose por kg somente com dose neonatal específica (biblioteca: glicose); limiar de tratamento conforme protocolo da unidade."
      ]
    },
    {
      titulo: "Ventilação e oxigênio",
      itens: [
        "Oxímetro pré-ductal (mão direita). Comparar com pós-ductal (pé) se suspeita de cardiopatia/hipertensão pulmonar.",
        "Titular FiO₂ com blender; evitar hiperóxia, sobretudo no prematuro.",
        "Intubado: conferir marca do tubo, fixação e expansão torácica após cada movimentação.",
        "CPAP no transporte: só se a equipe e o equipamento permitirem vigilância contínua; desconforto crescente → reavaliar intubação antes de sair.",
        "Sonda orogástrica aberta para descompressão."
      ]
    },
    {
      titulo: "Prematuro — cuidados específicos",
      itens: [
        "Pele frágil, perda térmica e hídrica intensas: manter incubadora e umidificação.",
        "Manipulação mínima; cabeça em linha média (risco de hemorragia peri-intraventricular).",
        "Evitar oscilações de PA, CO₂ e osmolaridade (bolus rápidos).",
        "Alvos de SpO₂ na UTI conforme protocolo da unidade de origem/destino."
      ]
    },
    {
      titulo: "Cateter umbilical",
      itens: [
        "Conferir posição (radiografia) e marca na pele antes de sair; registrar.",
        "Fixação segura (ponte de fita); coto visível para vigiar sangramento.",
        "Nunca reintroduzir cateter que se deslocou para fora (contaminação).",
        "Sistema fechado, sem bolhas de ar (risco de embolia); conexões travadas.",
        "Sangramento no coto: compressão e avaliação; perfusão de membros inferiores alterada com cateter arterial: avisar e considerar retirada conforme equipe."
      ]
    },
    {
      titulo: "Reanimação neonatal (SBP 2022) — diferente da pediátrica",
      itens: [
        "Prioridade é a VENTILAÇÃO: a maioria dos RN responde à VPP eficaz.",
        "VPP se apneia, respiração irregular ou FC < 100 bpm após passos iniciais: iniciar no primeiro minuto de vida.",
        "Avaliar FC (monitor cardíaco preferível) e SpO₂ pré-ductal.",
        "FC < 60 bpm após 30 s de VPP eficaz com técnica corrigida (preferencialmente via cânula): massagem cardíaca com 2 polegares, 1/3 do diâmetro anteroposterior, relação 3:1 (90 compressões e 30 ventilações/min), O₂ 100%.",
        "FC < 60 bpm após 60 s de massagem + VPP: adrenalina (dose neonatal na biblioteca: adrenalina), preferencialmente IV pelo cateter umbilical.",
        "Hipovolemia (perda sanguínea, choque): SF 0,9% 10 mL/kg em 5–10 min.",
        "Não usar a relação 15:2 nem doses pediátricas no período neonatal."
      ]
    },
    {
      titulo: "Alvo de SpO₂ pré-ductal por minuto de vida",
      tabela: {
        colunas: ["Minutos de vida", "SpO₂ pré-ductal"],
        linhas: [
          ["Até 5 min", "70–80%"],
          ["5–10 min", "80–90%"],
          ["> 10 min", "85–95%"]
        ]
      },
      nota: "Tabela simplificada da SBP 2022. A tabela da AHA/NRP detalha minuto a minuto: 1 min 60–65%, 2 min 65–70%, 3 min 70–75%, 4 min 75–80%, 5 min 80–85%, 10 min 85–95%."
    },
    {
      titulo: "Cânula e profundidade (resumo)",
      tabela: {
        colunas: ["IG", "Peso", "Cânula (mm)", "Marca no lábio (cm)"],
        linhas: [
          ["< 28 sem", "< 1.000 g", "2,5", "5,5–6,5"],
          ["28–34 sem", "1.000–2.000 g", "3,0", "6,5–7,5"],
          ["> 34 sem", "> 2.000 g", "3,5", "8,0–9,0"]
        ]
      },
      nota: "Detalhe por semana no guia de Via aérea — neonatal. Máscara laríngea nº 1 em RN ≥ 34 semanas e/ou ≥ 2.000 g."
    },
    {
      titulo: "Situações especiais",
      itens: [
        "Cardiopatia canal-dependente: alprostadil conforme prescrição (biblioteca: alprostadil); risco de apneia — preparar para ventilação.",
        "Hérnia diafragmática: intubar, não ventilar com máscara, sonda orogástrica aberta.",
        "Defeitos de parede abdominal: cobrir com plástico estéril, decúbito lateral, perda de calor e líquido intensa.",
        "Atresia de esôfago: sonda em fundo cego com aspiração contínua/intermitente, cabeceira elevada."
      ]
    },
    {
      titulo: "Referências",
      itens: [
        "SBP — Programa de Reanimação Neonatal: diretrizes 2022 (RN ≥ 34 semanas e < 34 semanas).",
        "SBP — Transporte do recém-nascido de alto risco: diretrizes (material vigente).",
        "Ministério da Saúde — Atenção à Saúde do Recém-Nascido: guia para profissionais (2ª ed., 2014)."
      ]
    }
  ],

  /* ======================================================================
     GESTANTE
     ====================================================================== */
  gestante: [
    {
      titulo: "Quando NÃO transportar",
      itens: [
        "Parto iminente (puxos, períneo abaulado, apresentação visível/coroamento): assistir o parto no local com segurança, em vez de iniciar transporte.",
        "Se o parto começar durante o trajeto: parar a ambulância em local seguro e assistir.",
        "Instabilidade materna não controlada que pode ser estabilizada na origem (ex.: eclâmpsia em crise, hemorragia sem medidas iniciais).",
        "Decisão sempre do médico responsável, em contato com a regulação e o obstetra do destino."
      ]
    },
    {
      titulo: "Avaliação materno-fetal",
      itens: [
        "Idade gestacional (DUM/USG), paridade, pré-natal, tipagem sanguínea.",
        "Sinais vitais maternos completos, incluindo PA nos dois momentos e diurese se sondada.",
        "Altura uterina, dinâmica uterina (contrações em 10 min), perda vaginal (sangue, líquido, cor do líquido).",
        "BCF quando possível (sonar/Doppler): normal 110–160 bpm. Registrar horário.",
        "Movimentos fetais referidos.",
        "Índice de choque (FC ÷ PAS) ≥ 0,9 na gestante/puérpera sugere perda sanguínea importante."
      ]
    },
    {
      titulo: "Posicionamento",
      itens: [
        "A partir de 20 semanas (ou útero na altura da cicatriz umbilical): decúbito lateral esquerdo ou deslocamento manual do útero para a esquerda — evita compressão aortocava e hipotensão.",
        "Em prancha rígida: inclinar a prancha 15–30° para a esquerda.",
        "Na PCR: deslocamento uterino manual contínuo durante a RCP; considerar cesárea perimortem conforme ACLS (≥ 20 semanas) — inviável em ambulância: planejar o destino."
      ]
    },
    {
      titulo: "Monitorização durante o transporte",
      itens: [
        "PA a cada 5–15 min (mais frequente em pré-eclâmpsia grave/hemorragia), FC, SpO₂ (alvo ≥ 95%), FR, consciência.",
        "BCF a cada 15–30 min quando possível.",
        "Contrações, sangramento, perda de líquido.",
        "Em uso de sulfato de magnésio: FR, reflexo patelar, diurese e consciência (sinais de intoxicação); gluconato de cálcio disponível."
      ]
    },
    {
      titulo: "Hemorragia e choque hemorrágico",
      itens: [
        "2 acessos calibrosos, coleta de tipagem/hemograma antes de sair se possível.",
        "Pós-parto: massagem uterina bimanual, ocitocina (biblioteca: ocitocina) e ácido tranexâmico precoce (biblioteca: acido-tranexamico), conforme protocolo de HPP.",
        "Anteparto (placenta prévia, DPP): não fazer toque vaginal; DLE; transporte rápido para centro com obstetrícia e banco de sangue.",
        "Cristaloide com cautela; hemoderivados conforme disponibilidade e protocolo; aquecer a paciente.",
        "Traje antichoque não pneumático, se disponível no serviço."
      ]
    },
    {
      titulo: "Pré-eclâmpsia grave e eclâmpsia",
      itens: [
        "Gravidade: PAS ≥ 160 ou PAD ≥ 110 mmHg, cefaleia, escotomas, dor epigástrica, oligúria, convulsão, HELLP.",
        "Sulfato de magnésio para prevenção e tratamento da convulsão (biblioteca: sulfato-magnesio) — iniciar antes do transporte.",
        "Anti-hipertensivo para PA grave (biblioteca: hidralazina; nifedipina oral não está na biblioteca — conforme protocolo).",
        "Convulsão: proteger, DLE, O₂, aspirar, magnésio (benzodiazepínico não é a primeira escolha na eclâmpsia).",
        "Não reduzir a PA de forma brusca (risco fetal)."
      ]
    },
    {
      titulo: "Trabalho de parto prematuro (TPP) e rotura prematura de membranas (RPM)",
      itens: [
        "TPP: avaliar dilatação e dinâmica antes de sair; tocólise e corticoide antenatal conforme orientação obstétrica/protocolo — não iniciar por conta própria sem protocolo.",
        "Destino com UTI neonatal adequada à idade gestacional.",
        "RPM: evitar toque vaginal; avaliar cor do líquido; febre ou taquicardia materna/fetal sugere corioamnionite.",
        "Prolapso de cordão: elevar manualmente a apresentação (não comprimir o cordão), posição genupeitoral ou Trendelenburg, O₂, transporte imediato para cesárea."
      ]
    },
    {
      titulo: "Sofrimento fetal",
      itens: [
        "Sinais: BCF < 110 ou > 160 bpm persistente, desacelerações, ausência de movimentos, líquido meconial espesso.",
        "Reanimação intrauterina: DLE, O₂ materno, corrigir hipotensão materna (volume), suspender ocitocina se em uso.",
        "Avisar o destino para preparar cesárea e equipe de reanimação neonatal."
      ]
    },
    {
      titulo: "Material de parto na ambulância",
      itens: [
        "Kit parto estéril: luvas, campos, compressas, 2 pinças/clampes de cordão, tesoura ou lâmina estéril, bolsa coletora.",
        "Material de reanimação neonatal completo (SBP 2022): fonte de calor, saco plástico, touca, balão autoinflável, máscaras 00/0/1, aspirador e sondas, laringoscópio neonatal, cânulas 2,5–3,5.",
        "Ocitocina, sulfato de magnésio, ácido tranexâmico (biblioteca).",
        "Manta térmica para mãe e RN; identificação do RN."
      ]
    },
    {
      titulo: "Referências",
      itens: [
        "Ministério da Saúde — Manual de Gestação de Alto Risco (2022).",
        "FEBRASGO — Protocolos de pré-eclâmpsia e hemorragia pós-parto (vigentes).",
        "OPAS/OMS — Recomendações assistenciais para prevenção, diagnóstico e tratamento da hemorragia obstétrica (2018).",
        "AHA — Cardiac Arrest in Pregnancy, Scientific Statement (2015) e ACLS (2020)."
      ]
    }
  ],

  /* ======================================================================
     CONTINGÊNCIA UNIVERSAL (durante o transporte)
     ====================================================================== */
  contingenciaUniversal: [
    {
      id: "queda-spo2",
      se: "Se a SpO₂ cair (abaixo do alvo ou queda súbita)",
      faca: [
        "Olhar o paciente e a curva: sensor solto, mão fria, movimento?",
        "Conferir fonte de O₂ (cilindro, fluxômetro aberto, conexões).",
        "Intubado — DOPE: Deslocamento do tubo (capnografia), Obstrução (aspirar), Pneumotórax (expansão/ausculta), Equipamento (desconectar e ventilar com BVM a 100%).",
        "Não intubado: FiO₂ máxima, reposicionar via aérea, aspirar, considerar BVM.",
        "Persistindo: parar o veículo em local seguro e reavaliar via aérea."
      ],
      farmacos: []
    },
    {
      id: "hipotensao",
      se: "Se houver hipotensão (PAS < 90 ou PAM < 65 no adulto; abaixo do limite para a idade na criança)",
      faca: [
        "Repetir a medida e conferir o manguito/linha arterial.",
        "Conferir acesso e infusões (droga vasoativa interrompida? bomba parada?).",
        "Reduzir sedação se possível; intubado: afastar auto-PEEP e pneumotórax.",
        "Volume: cristaloide em bolus com reavaliação (criança: 10–20 mL/kg).",
        "Sem resposta: iniciar ou aumentar vasopressor conforme prescrição."
      ],
      farmacos: ["cristaloide", "noradrenalina", "adrenalina"]
    },
    {
      id: "convulsao",
      se: "Se o paciente convulsionar",
      faca: [
        "Proteger de trauma, lateralizar, aspirar, O₂.",
        "Glicemia capilar imediata.",
        "Benzodiazepínico (dose por kg na criança); gestante: sulfato de magnésio.",
        "Crise persistente após 2 doses de benzodiazepínico: segunda linha (fenitoína, levetiracetam ou fenobarbital).",
        "Vigiar via aérea e ventilação após as doses."
      ],
      farmacos: ["midazolam", "diazepam", "fenitoina", "levetiracetam", "fenobarbital", "sulfato-magnesio", "glicose"]
    },
    {
      id: "pcr",
      se: "Se houver PCR",
      faca: [
        "Parar o veículo em local seguro; RCP de alta qualidade (100–120/min).",
        "Monitor/desfibrilador: ritmo chocável → choque imediato.",
        "Adrenalina conforme ACLS/PALS/SBP; amiodarona em FV/TV refratária.",
        "Gestante ≥ 20 semanas: deslocamento uterino manual.",
        "Buscar e tratar causas reversíveis (5H e 5T); decidir com a regulação o destino mais próximo."
      ],
      farmacos: ["adrenalina", "amiodarona", "lidocaina"]
    },
    {
      id: "piora-neurologica",
      se: "Se houver piora neurológica (queda do Glasgow ≥ 2 pontos, anisocoria, nova deficiência focal)",
      faca: [
        "ABC: oxigenação e PA adequadas (evitar hipóxia e hipotensão).",
        "Glicemia capilar.",
        "Cabeceira a 30°, cabeça alinhada, colar não apertado.",
        "Sinais de herniação: terapia hiperosmolar conforme prescrição; hiperventilação só breve como ponte.",
        "Glasgow ≤ 8 sem proteção de via aérea: decisão médica sobre via aérea definitiva.",
        "Avisar o destino."
      ],
      farmacos: ["manitol", "salina-hipertonica", "glicose"]
    },
    {
      id: "agitacao",
      se: "Se o paciente ficar agitado e colocar em risco a segurança (tubo, acessos, equipe)",
      faca: [
        "Afastar causas: hipóxia, hipoglicemia, dor, retenção urinária, bexigoma, abstinência.",
        "Intubado: analgesia e sedação adequadas; conferir infusões.",
        "Não intubado: abordagem verbal; sedação com vigilância de via aérea; contenção mecânica só se necessária e registrada.",
        "Parar o veículo se a segurança estiver comprometida."
      ],
      farmacos: ["fentanil", "midazolam", "cetamina", "propofol"]
    },
    {
      id: "vomitos-aspiracao",
      se: "Se houver vômitos com risco de aspiração",
      faca: [
        "Lateralizar (em bloco se trauma) e aspirar imediatamente.",
        "Sonda gástrica aberta se intubado ou com distensão.",
        "Antiemético conforme biblioteca.",
        "Rebaixamento com vômitos repetidos: reavaliar proteção da via aérea (decisão médica).",
        "Após aspiração: vigiar SpO₂, FR e ausculta."
      ],
      farmacos: ["ondansetrona"]
    },
    {
      id: "falha-equipamento",
      se: "Se houver falha de equipamento ou de O₂ (ventilador, bomba, monitor, cilindro)",
      faca: [
        "Ventilador: desconectar e ventilar com BVM com O₂.",
        "O₂: trocar para o cilindro reserva; recalcular autonomia; avisar regulação se insuficiente.",
        "Bomba de infusão: suspender droga crítica com segurança e controlar por equipo/gotejamento contado só se houver protocolo; priorizar retomar com bomba reserva.",
        "Monitor: sinais vitais manuais (pulso, PA com esfigmomanômetro, perfusão).",
        "Bateria: conectar à rede da ambulância; considerar desvio para o hospital mais próximo."
      ],
      farmacos: []
    }
  ]
};

// Marca-passo e CDI no PS
registrarFicha({
  id: "dispositivos-cardiacos",
  especialidade: "cardiologia",
  caminho: "ps",
  publico: "adulto",
  formato: "curto",
  titulo: "Marca-passo e CDI no PS",
  resumo: "Paciente com marca-passo ou cardiodesfibrilador implantável (CDI) com choque, síncope, bradicardia, taquicardia, infecção de loja ou suspeita de disfunção. Uso do ímã e leitura do ECG estimulado.",
  palavrasChave: "marca-passo marcapasso cdi cardiodesfibrilador implantavel choque inapropriado tempestade eletrica ima perda de captura falha de sensibilidade taquicardia mediada por marca-passo loja infeccao eletrodo ressincronizador",
  critico: {
    tempo: "≥ 2 choques: monitor e PS",
    texto: "CDI com 2 ou mais choques em 24 h, choque com síncope/dor/dispneia ou ≥ 3 episódios de TV/FV em 24 h (tempestade elétrica): monitor, desfibrilador externo pronto, corrigir K/Mg e acionar cardiologia."
  },
  alarmes: [
    "Tempestade elétrica: ≥ 3 episódios de TV/FV tratados pelo CDI em 24 h",
    "Choques repetidos com paciente consciente e em ritmo sinusal (choque inapropriado)",
    "Síncope ou bradicardia com marca-passo (perda de captura, falha de sensibilidade, fim de bateria)",
    "Febre, secreção, deiscência ou dor na loja do gerador (infecção do dispositivo / endocardite)",
    "Soluços persistentes ou contração muscular rítmica (estimulação diafragmática/peitoral: deslocamento de eletrodo)",
    "Dispneia e edema após implante recente (perfuração, derrame pericárdico, pneumotórax)"
  ],
  conduta: [
    "Identificar o dispositivo: cartão do paciente, fabricante, data do implante, indicação; RX de tórax mostra gerador e eletrodos",
    "ECG de 12 derivações e monitor contínuo com função de detecção de espículas ligada",
    "Dosar K, Mg, Ca, creatinina, troponina; nível de antiarrítmico/digoxina se em uso",
    "Choque único, paciente bem: contato com o serviço de arritmia/estimulação para interrogar o aparelho (eletivo em 24–48 h)",
    "Choques inapropriados (FA rápida, ruído de eletrodo, interferência) ou durante transporte: colocar ímã sobre o CDI suspende as terapias enquanto estiver no lugar; manter desfibrilador externo pronto",
    "Tempestade elétrica: sedação, betabloqueador (propranolol ou metoprolol IV), amiodarona IV, corrigir eletrólitos e isquemia; ver ficha taquicardias",
    "Marca-passo com bradicardia/perda de captura: atropina e marca-passo transcutâneo (ficha bradicardias); interrogar e reprogramar com cardiologia",
    "Taquicardia mediada por marca-passo (FC no limite superior programado): ímã termina (modo assíncrono)",
    "PCR: RCP e desfibrilação normalmente; pás a ≥ 8 cm do gerador (anteroposterior preferível); interrogar o dispositivo depois",
    "Infecção de loja ou bacteremia: hemoculturas, ecocardiograma; não puncionar a loja; o tratamento costuma exigir retirada do sistema (ficha endocardite)"
  ],
  exames: [
    "ECG de 12 derivações (espículas, captura, sensibilidade, ritmo de base)",
    "RX de tórax PA e perfil: integridade e posição dos eletrodos, pneumotórax após implante",
    "K, Mg, Ca, creatinina, troponina, hemograma, PCR",
    "Interrogação do dispositivo (programador do fabricante ou equipe de estimulação): eventos registrados, bateria, impedância, limiares",
    "Ecocardiograma se suspeita de derrame pericárdico, perfuração ou vegetação; hemoculturas se febre"
  ],
  diferenciais: [
    "Choque apropriado por TV/FV x inapropriado (FA/TSV rápida, fratura de eletrodo, interferência eletromagnética, oversensing de onda T)",
    "Pseudomau funcionamento: histerese, modos de manejo de FA, comportamento normal do algoritmo",
    "Síndrome do marca-passo (estimulação só ventricular com perda da sincronia AV): tontura, fadiga, pulsação no pescoço"
  ],
  tabelas: [
    {
      titulo: "Efeito do ímã",
      colunas: ["Dispositivo", "Com o ímã", "Uso no PS"],
      linhas: [
        ["Marca-passo", "Estimulação assíncrona (VOO/DOO) na frequência magnética do fabricante", "Inibição por oversensing; taquicardia mediada por marca-passo; cirurgia com bisturi elétrico"],
        ["CDI", "Suspende detecção e terapias de taquicardia; em geral NÃO altera a função de marca-passo", "Choques inapropriados; fim de vida/cuidados paliativos; cirurgia"],
        ["Retirar o ímã", "Retorna à programação prévia (na maioria dos modelos)", "Com ímã no CDI, o paciente precisa de monitor e desfibrilador externo"]
      ],
      nota: "Resposta ao ímã varia por fabricante e programação; confirmar com o serviço de estimulação."
    },
    {
      titulo: "Problemas de marca-passo no ECG",
      colunas: ["Problema", "ECG"],
      linhas: [
        ["Perda de captura", "Espícula sem P ou QRS a seguir"],
        ["Falha de sensibilidade (undersensing)", "Espículas em momento inadequado, sobre QRS/T próprios"],
        ["Oversensing", "Pausas sem espículas (inibição indevida por ruído/miopotenciais)"],
        ["Falha de saída", "Ausência de espícula quando esperada (bateria, fratura de eletrodo)"],
        ["Estimulação de VD normal", "QRS largo com padrão de BRE após a espícula"]
      ],
      nota: "Isquemia em ritmo de marca-passo: aplicar critérios de Sgarbossa modificados (ficha ecg-interpretacao)."
    }
  ],
  prescricao: {
    hospitalar: "CDI COM CHOQUES / TEMPESTADE ELÉTRICA (adulto)\n1. Monitor contínuo; desfibrilador externo com pás posicionadas (anteroposterior, longe do gerador).\n2. Acesso venoso; O₂ se SpO₂ < 92%.\n3. Choques inapropriados confirmados (ritmo sinusal/FA no monitor durante o choque): ímã sobre o gerador, fixado com fita, até interrogação.\n4. Sedação/ansiólise: midazolam 5 mg/mL — 1 a 2 mg IV; fentanil 50 mcg/mL — 25 a 50 mcg IV SN.\n5. Tempestade elétrica: amiodarona 150 mg + SG 5% 100 mL IV em 10 min, depois 1 mg/min por 6 h e 0,5 mg/min por 18 h; metoprolol 5 mg IV a cada 5 min até 15 mg (se PA permitir).\n6. Repor K (alvo 4–5 mEq/L) e Mg (sulfato de magnésio 2 g IV em 30 min).\n7. Exames: K, Mg, Ca, creatinina, troponina, ECG; RX de tórax.\n8. Acionar cardiologia/eletrofisiologia para interrogação do dispositivo."
  },
  orientacoesRetorno: [
    "Andar sempre com o cartão do marca-passo/CDI",
    "Um choque isolado e você se sente bem: avisar o serviço de arritmia no mesmo dia ou no dia seguinte",
    "Dois ou mais choques, choque com desmaio, dor no peito ou falta de ar: ligar 192 ou vir ao PS",
    "Celular e fones a pelo menos 15 cm do aparelho; passar pelo detector de metais sem parar; evitar ímãs fortes",
    "Voltar se febre, vermelhidão, secreção ou dor na região do aparelho",
    "Manter as revisões do aparelho nas datas marcadas"
  ],
  encaminhar: [
    "Serviço de estimulação/arritmia: choque único, suspeita de disfunção, bateria em fim de vida, reprogramação",
    "Internação/cardiologia: tempestade elétrica, choques inapropriados repetidos, perda de captura sintomática, infecção do sistema"
  ],
  fontes: [
    "ESC — Guidelines on cardiac pacing and cardiac resynchronization therapy (2021)",
    "ESC — Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death (2022)",
    "SBC — Diretriz Brasileira de Dispositivos Cardíacos Eletrônicos Implantáveis (2023)",
    "AHA — Guidelines for CPR and Emergency Cardiovascular Care: Adult Advanced Life Support (2025)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

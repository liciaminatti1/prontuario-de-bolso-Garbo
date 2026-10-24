// Leitura sistemática de RX de tórax e abdome, escolha de USG x TC e POCUS/eFAST
registrarFicha({
  id: "imagem-interpretacao",
  especialidade: "referencia",
  caminho: "ps",
  publico: "ambos",
  formato: "curto",
  titulo: "Imagem: leitura de RX, USG x TC e POCUS",
  resumo: "Roteiro de leitura sistemática do RX de tórax (ABCDE) e do RX de abdome, guia rápido de qual exame pedir (USG ou TC) nas queixas mais comuns e resumo do POCUS/eFAST à beira-leito.",
  palavrasChave: "radiografia rx de torax leitura sistematica abcde rx de abdome nivel hidroaereo pneumoperitonio ultrassom usg tomografia tc quando pedir pocus efast fast ultrassom a beira leito linhas b deslizamento pleural pneumotorax derrame pericardico liquido livre radiacao gestante crianca contraste",
  critico: {
    tempo: "Instável: POCUS, não TC",
    texto: "Paciente instável não vai à tomografia: avaliar à beira-leito (eFAST, POCUS). RX de tórax e ECG não substituem o exame clínico, e um exame negativo não exclui doença se a probabilidade clínica é alta."
  },
  alarmes: [
    "Pneumoperitônio (ar sob o diafragma no RX em pé): perfuração — cirurgia",
    "Desvio de traqueia/mediastino com hipertransparência sem trama: pneumotórax hipertensivo — descomprimir sem esperar imagem",
    "Mediastino alargado com dor torácica intensa: dissecção de aorta — angio-TC",
    "Alças distendidas com níveis hidroaéreos e ausência de ar no reto: obstrução intestinal",
    "eFAST positivo (líquido livre) em trauma instável: cirurgia/hemostasia imediata",
    "Gestante: preferir USG e RM; TC e RX com indicação clara não devem ser negados quando necessários (dose fetal baixa na maioria)"
  ],
  conduta: [
    "Confirmar identificação, data, lado (marcador D/E) e técnica (PA ou AP, inspiração, rotação, penetração) antes de ler",
    "Ler sempre na mesma ordem e só depois olhar o 'achado óbvio' (evita parar no primeiro achado)",
    "Comparar com exames anteriores",
    "Pedir imagem que mude a conduta, com hipótese escrita no pedido",
    "Criança e gestante: minimizar radiação (USG primeiro quando equivalente)",
    "Contraste iodado: checar alergia prévia, função renal (TFG) e uso de metformina conforme protocolo local; não atrasar exame vital por creatinina"
  ],
  tabelas: [
    {
      titulo: "RX de tórax — leitura ABCDE",
      colunas: ["Letra", "O que olhar", "Achados importantes"],
      linhas: [
        ["Técnica (antes)", "Identificação, PA x AP, inspiração (9–10 arcos costais posteriores), rotação (clavículas simétricas), penetração (vértebras visíveis atrás do coração)", "AP no leito aumenta a área cardíaca e alarga o mediastino"],
        ["A — Airway (via aérea)", "Traqueia central, carina, brônquios principais", "Desvio: pneumotórax hipertensivo (contra), atelectasia (a favor), massa"],
        ["B — Breathing (pulmões e pleura)", "Campos pulmonares comparando lados, zonas superior/média/inferior, ápices, seios costofrênicos, margem pleural", "Consolidação com broncograma aéreo, nódulo/massa, padrão intersticial, derrame (velamento do seio), pneumotórax (linha pleural sem trama)"],
        ["C — Circulation (coração e mediastino)", "Índice cardiotorácico (< 0,5 em PA), contornos, mediastino, hilos, aorta", "Cardiomegalia, derrame pericárdico (coração em moringa), mediastino alargado, congestão (cefalização, linhas B de Kerley)"],
        ["D — Diaphragm (diafragma)", "Cúpulas (direita mais alta), seios costofrênicos, ar sob o diafragma", "Pneumoperitônio, elevação de cúpula, derrame subpulmonar"],
        ["E — Everything else (resto)", "Ossos (costelas, clavículas, coluna), partes moles, dispositivos (tubo, cateter, sonda, marca-passo), áreas escondidas (ápices, retrocardíaca, abaixo do diafragma)", "Fraturas de costela, enfisema subcutâneo; tubo orotraqueal 3–5 cm acima da carina; ponta do cateter central na junção cavoatrial"]
      ]
    },
    {
      titulo: "RX de abdome (rotina de abdome agudo: tórax PA + abdome em pé e deitado)",
      colunas: ["O que olhar", "Normal", "Alterado sugere"],
      linhas: [
        ["Gás e calibre das alças", "Delgado até cerca de 3 cm; cólon até cerca de 6 cm; ceco até cerca de 9 cm (regra 3-6-9)", "Distensão: obstrução ou íleo"],
        ["Níveis hidroaéreos (em pé)", "Poucos", "Múltiplos em degrau: obstrução de delgado"],
        ["Ar no reto/cólon distal", "Presente", "Ausente com distensão a montante: obstrução mecânica"],
        ["Ar livre", "Ausente", "Sob o diafragma (em pé) ou sinal de Rigler (deitado): perfuração"],
        ["Padrões específicos", "—", "Grão de café / U invertido: volvo de sigmoide; calcificações: cálculos, pancreatite crônica; fecaloma"],
        ["Limitações", "—", "RX normal não exclui apendicite, isquemia, pancreatite ou perfuração pequena: TC se suspeita"]
      ]
    },
    {
      titulo: "Qual exame pedir (adulto, referência)",
      colunas: ["Situação", "1ª escolha", "Observação"],
      linhas: [
        ["Dor em hipocôndrio direito / suspeita biliar", "USG de abdome", "Colecistite, coledocolitíase (dilatação de vias)"],
        ["Suspeita de apendicite — criança e gestante", "USG", "TC (ou RM na gestante) se inconclusivo"],
        ["Suspeita de apendicite — adulto", "TC de abdome com contraste", "USG aceitável em jovens magros"],
        ["Cólica renal", "TC sem contraste (baixa dose) ou USG", "USG em gestante, jovem e recorrente"],
        ["Dor pélvica na mulher / sangramento no 1º trimestre", "USG transvaginal + β-hCG", "Gravidez ectópica, torção, cisto"],
        ["Obstrução intestinal, diverticulite, isquemia mesentérica, perfuração", "TC com contraste IV", "Isquemia: angio-TC"],
        ["Suspeita de TEP", "Angio-TC de tórax (após escore e D-dímero)", "Cintilografia ou USG de membros se contraindicação ao contraste/gestante"],
        ["TCE com critério de imagem", "TC de crânio sem contraste", "Regras canadense (adulto) e PECARN (criança)"],
        ["AVC agudo", "TC de crânio sem contraste (+ angio-TC se candidato a trombectomia)", "Não atrasar trombólise"],
        ["TVP", "USG Doppler venoso", "Compressão em 2 ou 3 pontos no POCUS"],
        ["Trauma instável", "eFAST na sala de emergência", "TC de corpo inteiro só se estável"]
      ],
      nota: "Seguir o protocolo do serviço e os critérios do Colégio Brasileiro de Radiologia/ACR Appropriateness Criteria."
    },
    {
      titulo: "POCUS e eFAST — o essencial",
      colunas: ["Janela/pergunta", "Achado normal", "Achado alterado"],
      linhas: [
        ["eFAST: hepatorrenal (Morison)", "Sem líquido entre fígado e rim", "Faixa anecoica = líquido livre (sangue no trauma)"],
        ["eFAST: esplenorrenal", "Sem líquido", "Líquido periesplênico"],
        ["eFAST: pélvica (suprapúbica)", "Sem líquido ao redor da bexiga", "Líquido no fundo de saco"],
        ["eFAST: subxifoide (pericárdio)", "Sem derrame", "Derrame pericárdico; tamponamento se colapso do VD"],
        ["eFAST: tórax anterior (pneumotórax)", "Deslizamento pleural presente, linhas B ocasionais", "Sem deslizamento + ponto pulmonar = pneumotórax"],
        ["Pulmão (BLUE)", "Linhas A com deslizamento", "Linhas B difusas bilaterais: congestão/edema; consolidação; derrame"],
        ["Veia cava inferior", "Colapso respiratório parcial", "Pletórica sem colapso: pressão de enchimento alta; colapsada: hipovolemia provável (interpretação limitada)"],
        ["Coração (choque)", "Contratilidade adequada, VD menor que VE", "VE hipocinético (cardiogênico), VD dilatado (TEP), derrame com colapso (tamponamento)"]
      ],
      nota: "POCUS depende do operador e responde a perguntas binárias. Exame negativo não exclui lesão de víscera oca, retroperitônio ou sangramento pequeno: repetir e complementar com TC se estável."
    }
  ],
  prescricao: {
    hospitalar: "PEDIDOS-MODELO DE IMAGEM\n1. RX de tórax PA e perfil — hipótese: [ ].\n2. Rotina de abdome agudo (RX de tórax PA + abdome em pé e deitado) — hipótese: [obstrução / perfuração].\n3. USG de abdome total — hipótese: [ ]. Jejum de 6–8 h se eletivo (vesícula).\n4. USG transvaginal (ou pélvica) — β-hCG: [ ] — hipótese: [ ].\n5. TC de abdome e pelve com contraste IV — TFG: [ ] mL/min; alergia a contraste: [não] — hipótese: [ ].\n6. Angio-TC de tórax (protocolo TEP) — Wells: [ ]; D-dímero: [ ].\n7. TC de crânio sem contraste — critério: [ ]."
  },
  orientacoesRetorno: [
    "Levar exames de imagem anteriores (CD, laudos) nas consultas",
    "Avisar se pode estar grávida antes de RX ou tomografia",
    "Avisar se tem alergia a contraste, doença nos rins ou usa metformina antes de tomografia com contraste",
    "Aguardar o laudo final: a leitura inicial no PS pode ser complementada pelo radiologista"
  ],
  fontes: [
    "ATLS — Advanced Trauma Life Support, 10ª edição (2018): FAST/eFAST",
    "American College of Radiology — ACR Appropriateness Criteria (atualizações contínuas)",
    "Lichtenstein DA — BLUE protocol (Chest, 2008; revisões 2015)",
    "International Liaison Committee on Lung Ultrasound — Evidence-based recommendations for point-of-care lung ultrasound (2012)",
    "Colégio Brasileiro de Radiologia — Recomendações sobre contraste iodado (conferir versão vigente)"
  ],
  revisao: "2026-10-24",
  versao: "1.0"
});

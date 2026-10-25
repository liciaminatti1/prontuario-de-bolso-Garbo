// Doenças das vias biliares: colelitíase assintomática, coledocolitíase, pólipos, lesão iatrogênica e tumores
registrarFicha({
  id: "doencas-vias-biliares",
  especialidade: "cirurgia",
  caminho: "ubs",
  publico: "adulto",
  formato: "curto",
  titulo: "Doenças das vias biliares: colelitíase assintomática, coledocolitíase, pólipos, lesão de via biliar e tumores",
  resumo: "Decisões eletivas da via biliar: quando operar a colelitíase assintomática, como estratificar o risco de coledocolitíase (ASGE 2019), seguimento de pólipos de vesícula (ESGAR/EAES 2022), suspeita de lesão iatrogênica após colecistectomia e de colangiocarcinoma ou câncer de vesícula. Dor biliar aguda: ver colica-biliar; colecistite e colangite: ver colecistite-colangite.",
  palavrasChave: "colelitiase assintomatica calculo vesicula achado ultrassom coledocolitiase asge cpre colangiorressonancia ecoendoscopia polipo vesicula colesterolose adenomioma vesicula porcelana lesao iatrogenica via biliar strasberg fistula biliar colangiocarcinoma klatskin cancer vesicula ca 19-9 ictericia indolor cisto coledoco colangite esclerosante",
  alarmes: [
    "Icterícia com febre e dor (colangite): PS imediato — ver colecistite-colangite",
    "Icterícia indolor progressiva, prurido, perda de peso, vesícula palpável (Courvoisier): suspeita de tumor — investigação rápida",
    "Após colecistectomia: dor abdominal persistente, febre, distensão, icterícia ou bile pelo dreno/ferida nos primeiros dias a semanas (lesão de via biliar ou fístula)",
    "Pólipo de vesícula ≥ 10 mm, crescimento ≥ 2 mm no seguimento ou espessamento focal da parede: risco de câncer",
    "Massa na vesícula ou espessamento irregular da parede no USG"
  ],
  conduta: [
    "Colelitíase assintomática (achado de exame): em geral NÃO operar; risco de sintomas é baixo (~1–2% ao ano). Orientar sintomas de cólica biliar e operar quando surgirem",
    "Considerar colecistectomia na colelitíase assintomática: vesícula em porcelana, cálculo > 3 cm, pólipo associado ≥ 10 mm, anemia falciforme/hemolítica, anomalia da junção biliopancreática, populações de alto risco para câncer de vesícula; decidir com o cirurgião",
    "Coledocolitíase suspeita: pedir bilirrubinas, enzimas canaliculares e USG; classificar o risco ASGE 2019 (tabela) para escolher entre CPRE, colangio-RM/ecoendoscopia ou colecistectomia direta",
    "Pólipo de vesícula: medir no USG e seguir a tabela ESGAR/EAES 2022; pseudopólipo (colesterolose) e adenomiomatose não exigem cirurgia se típicos",
    "Lesão iatrogênica de via biliar: suspeitar em todo pós-colecistectomia que não evolui bem; pedir função hepática, USG/TC (coleção, ascite biliar) e colangio-RM; encaminhar ao serviço de cirurgia hepatobiliar (resultado melhor com reparo em centro especializado)",
    "Colangiocarcinoma / câncer de vesícula: icterícia obstrutiva sem cálculo → TC de abdome com contraste e colangio-RM, CA 19-9 (apoio, não diagnóstico); encaminhar a cirurgia hepatobiliar/oncologia ANTES de drenagem biliar, se possível (a equipe decide o tipo de drenagem)",
    "Câncer de vesícula achado no anatomopatológico da colecistectomia: encaminhar à oncologia cirúrgica (pode exigir reoperação conforme o T)"
  ],
  exames: [
    "Bilirrubinas totais e frações, fosfatase alcalina, GGT, TGO, TGP, amilase ou lipase, hemograma, TP/INR",
    "USG de abdome superior: cálculos, pólipos (tamanho, base séssil ou pediculada, fluxo ao Doppler), parede, diâmetro do colédoco (normal até ~6 mm com vesícula; maior após colecistectomia e no idoso)",
    "Colangiorressonância: coledocolitíase de risco intermediário, estenoses, suspeita de lesão iatrogênica, tumor hilar",
    "Ecoendoscopia (onde houver): coledocolitíase de risco intermediário, pólipo duvidoso, tumor distal",
    "TC de abdome com contraste (protocolo pâncreas/vias biliares): estadiamento de tumor, coleções pós-operatórias",
    "CA 19-9 e CEA: só na suspeita de tumor; CA 19-9 também sobe na colestase benigna e na colangite — repetir após desobstrução"
  ],
  diferenciais: [
    "Icterícia hepatocelular (hepatites, drogas), hemólise, Gilbert — ver ficha ictericia",
    "Tumor de cabeça de pâncreas ou ampola (ver tumores-pancreas)",
    "Colangite esclerosante primária, colangiopatia por IgG4, síndrome de Mirizzi",
    "Cisto de colédoco (dilatação congênita: risco de câncer, indicação cirúrgica)"
  ],
  tabelas: [
    {
      titulo: "Risco de coledocolitíase (ASGE 2019)",
      colunas: ["Risco", "Critérios", "Conduta"],
      linhas: [
        ["Alto", "Cálculo no colédoco no USG ou TC/RM; OU colangite; OU bilirrubina total > 4 mg/dL com colédoco dilatado", "CPRE (pré-operatória) ou exploração cirúrgica da via biliar"],
        ["Intermediário", "Provas hepáticas alteradas; OU idade > 55 anos; OU colédoco dilatado no USG", "Colangio-RM ou ecoendoscopia (ou colangiografia intraoperatória) antes de decidir CPRE"],
        ["Baixo", "Nenhum dos critérios", "Colecistectomia sem investigação adicional da via biliar"]
      ]
    },
    {
      titulo: "Pólipo de vesícula (ESGAR/EAES/EFISDS/ESGE 2022)",
      colunas: ["Achado", "Sem fator de risco", "Com fator de risco*"],
      linhas: [
        ["≤ 5 mm", "Sem seguimento", "USG em 6 meses, 1 e 2 anos"],
        ["6–9 mm", "USG em 6 meses, 1 e 2 anos", "Colecistectomia (se apto)"],
        ["≥ 10 mm", "Colecistectomia (se apto)", "Colecistectomia (se apto)"],
        ["Crescimento ≥ 2 mm em 2 anos ou atinge 10 mm", "Discutir colecistectomia", "Colecistectomia"],
        ["Pólipo + sintomas biliares", "Colecistectomia", "Colecistectomia"]
      ],
      nota: "*Fatores de risco: idade > 60 anos, colangite esclerosante primária, ascendência asiática, pólipo séssil (incluindo espessamento focal da parede > 4 mm). Suspensão do seguimento após 2 anos sem crescimento."
    },
    {
      titulo: "Lesão iatrogênica de via biliar — apresentação e destino",
      colunas: ["Quando aparece", "Quadro", "O que fazer"],
      linhas: [
        ["Intraoperatória", "Bile no campo, anatomia duvidosa", "Cirurgião experiente em HPB ou drenagem e transferência"],
        ["Primeiros dias", "Dor, febre, distensão, bile no dreno, ascite biliar; icterícia se ligadura/clipagem", "USG/TC, colangio-RM; drenagem percutânea de coleção, antibiótico se sepse; CPRE com prótese nas fístulas menores (ducto cístico, Luschka)"],
        ["Tardia (meses a anos)", "Icterícia, colangite de repetição, cirrose biliar secundária", "Colangio-RM; reparo (hepaticojejunostomia) em centro especializado"]
      ],
      nota: "Classificação de Strasberg (A a E) e de Bismuth orientam o reparo. Lesões maiores (Strasberg E) devem ser reparadas em centro de referência."
    }
  ],
  prescricao: {
    ambulatorial: "SOLICITAÇÃO DE EXAMES\n1. Ultrassonografia de abdome superior (vesícula, vias biliares e pâncreas). Indicação: ___ (pólipo de vesícula em seguimento / colelitíase / icterícia).\n2. Bilirrubinas totais e frações, fosfatase alcalina, GGT, TGO, TGP, lipase, hemograma, TP/INR.\n3. Colangiorressonância magnética. Indicação: suspeita de coledocolitíase de risco intermediário (ASGE) / estenose biliar / icterícia obstrutiva sem causa no USG.\n4. Tomografia de abdome com contraste (protocolo para vias biliares e pâncreas) + CA 19-9 + CEA. Indicação: suspeita de neoplasia biliar.\n\nENCAMINHAMENTO\nCirurgia geral / hepatobiliar — ___ (pólipo ___ mm / colelitíase com ___ / coledocolitíase risco ___ / suspeita de tumor de via biliar / complicação pós-colecistectomia em ___). Bilirrubina total: ___. Prioridade: ___."
  },
  orientacoesRetorno: [
    "Pedra na vesícula sem sintomas não precisa de cirurgia na maioria das pessoas",
    "Procurar atendimento se tiver dor forte no lado direito ou no meio da barriga depois de comer, que dura mais de 30 minutos",
    "Procurar o PS imediatamente se: olhos ou pele amarelos, urina escura, fezes claras, febre com calafrio ou dor que não passa",
    "Pólipo de vesícula: fazer os ultrassons de controle nas datas combinadas, mesmo sem sintomas",
    "Depois da retirada da vesícula: procurar o PS se febre, barriga inchada, dor que piora ou pele amarelada nas primeiras semanas"
  ],
  encaminhar: [
    "Cirurgia geral eletiva: colelitíase sintomática ou com indicação especial; pólipo com indicação cirúrgica",
    "Gastroenterologia/endoscopia: coledocolitíase (CPRE) quando estável",
    "Cirurgia hepatobiliar / oncologia com prioridade: suspeita de colangiocarcinoma, câncer de vesícula, cisto de colédoco, lesão iatrogênica de via biliar",
    "PS: icterícia com febre (colangite), dor biliar persistente, complicação pós-operatória aguda"
  ],
  fontes: [
    "ASGE — Guideline on the role of endoscopy in the evaluation and management of choledocholithiasis (Gastrointest Endosc, 2019)",
    "ESGAR/EAES/EFISDS/ESGE — Management and follow-up of gallbladder polyps: updated joint guidelines (Eur Radiol, 2022)",
    "EASL — Clinical Practice Guidelines on the prevention, diagnosis and treatment of gallstones (J Hepatol, 2016)",
    "WSES — Guidelines for the detection and management of bile duct injury during cholecystectomy (World J Emerg Surg, 2021)",
    "ESMO — Biliary tract cancer: Clinical Practice Guideline (2023)"
  ],
  revisao: "2026-10-25",
  versao: "1.0"
});

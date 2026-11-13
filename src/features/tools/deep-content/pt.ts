import type { DeepContent } from "./types";

/**
 * Os valores foram calculados ou testados por ida e volta com a implementação deste repositório:
 * amostras de QR geradas pelo bwip-js e decodificadas com o ZXing-C++ 3.1.1 (apenas imagens digitais), fórmulas pelo código da ferramenta.
 */
export const DEEP_PT: DeepContent = {
  qrgenerator: [
    {
      heading: "Formatos de texto que as câmeras de celular reconhecem",
      paragraphs: [
        "Esta ferramenta codifica exatamente o texto que você digita; ela não monta formulários. A câmera do celular decide o que fazer a partir do prefixo no início do texto, portanto um código de Wi-Fi só funciona se o texto seguir o formato de Wi-Fi. Cada exemplo abaixo foi gerado pelo codificador deste site e decodificado de volta para um texto idêntico por um decodificador de software (ZXing-C++ 3.1.1).",
      ],
      table: {
        head: ["Finalidade", "Texto a digitar"],
        rows: [
          ["Site", "https://example.com"],
          ["Wi-Fi (WPA)", "WIFI:T:WPA;S:Cafe Guest;P:sunny-2026;;"],
          ["Wi-Fi, rede oculta", "WIFI:T:WPA;S:HiddenNet;P:abc12345;H:true;;"],
          ["E-mail", "mailto:support@apps24.io?subject=Hello"],
          ["Chamada telefônica", "tel:+821012345678"],
          ["SMS", "SMSTO:+821012345678:Hello"],
          ["Localização no mapa", "geo:37.5665,126.9780"],
          ["Cartão de contato", "BEGIN:VCARD ⏎ VERSION:3.0 ⏎ N:Kim;Min;;; ⏎ FN:Min Kim ⏎ TEL;TYPE=CELL:+821012345678 ⏎ EMAIL:min@example.com ⏎ END:VCARD"],
        ],
      },
      note: "⏎ indica uma quebra de linha; digite cada campo do vCard em uma linha própria. O teste de software usou apenas imagens digitais. Não escaneamos códigos impressos nem testamos modelos específicos de celular, e a reação do celular a um código depende do aplicativo de câmera.",
    },
    {
      heading: "Como escapar caracteres especiais em códigos Wi-Fi",
      paragraphs: [
        "Em um texto WIFI:, os caracteres \\ ; , : e \" separam campos, portanto um nome de rede ou uma senha que os contenha precisa de uma barra invertida antes de cada um. Uma rede chamada Cafe;Guest com a senha pa:ss\\word é digitada como WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;; e este texto exato foi decodificado de volta sem alterações em nosso teste.",
        "Use T:nopass para redes abertas e adicione H:true somente para redes ocultas. Se o celular se recusar a conectar, confira primeiro a senha caractere por caractere, porque uma senha errada e um escape errado parecem iguais para o usuário.",
      ],
    },
    {
      heading: "Quanto texto cabe e o que isso faz com o padrão",
      paragraphs: [
        "Medido com este gerador: até 2,331 caracteres de um byte (letras ASCII), 1,165 letras latinas acentuadas, 777 sílabas coreanas ou 582 emojis, porque ocupam 1, 2, 3 e 4 bytes em UTF-8. O formulário aceita até 4,000 caracteres, mas texto além desses limites gera um erro de geração.",
        "Mais texto significa um padrão mais denso. Um texto de 20 caracteres produziu um código de 25 × 25 módulos, 38 caracteres 29 × 29, 100 caracteres 41 × 41 e 300 caracteres 69 × 69. No mesmo tamanho impresso, módulos mais densos ficam menores, então encurte as URLs e elimine campos opcionais antes de reduzir o tamanho da impressão. O PNG é desenhado com 6 pixels por módulo e uma margem de silêncio de 4 módulos.",
      ],
    },
    {
      heading: "Antes de imprimir ou publicar",
      bullets: [
        "Escaneie o próprio PNG baixado, não a prévia, com pelo menos dois celulares diferentes.",
        "Mantenha módulos escuros sobre um fundo claro e não corte a margem.",
        "Um código QR armazena texto, não um redirecionamento: não é possível alterar o destino depois, e um link quebrado continua quebrado.",
        "Teste no tamanho de impressão real e na distância de leitura real.",
      ],
    },
  ],

  pixelconverter: [
    {
      heading: "Conversões de exemplo",
      paragraphs: [
        "Todas as linhas usam os padrões desta ferramenta: raiz e tamanho de fonte atual de 16 px, base de porcentagem de 16 px e uma viewport de 1440 × 900. Altere os campos de referência para corresponder à sua própria página antes de confiar em um resultado.",
      ],
      table: {
        head: ["Entrada", "Resultado", "Por quê"],
        rows: [
          ["24 px → rem", "1.5 rem", "24 ÷ 16 do tamanho de fonte da raiz"],
          ["20 px → em", "1.25 em", "20 ÷ 16 do tamanho de fonte atual"],
          ["8 px → %", "50 %", "8 ÷ 16 da base de porcentagem"],
          ["360 px → vw", "25 vw", "360 ÷ (1440 ÷ 100)"],
          ["450 px → vh", "50 vh", "450 ÷ (900 ÷ 100)"],
          ["12 pt → px", "16 px", "1 pt = 96 ÷ 72 px CSS"],
          ["1 in → px", "96 px", "1 polegada CSS = 96 px CSS"],
          ["10 mm → px", "37.7953 px", "10 × 96 ÷ 25.4, exibido com 4 casas decimais"],
          ["24 px → rem com raiz de 10 px", "2.4 rem", "24 ÷ 10"],
        ],
      },
    },
    {
      heading: "rem, em e porcentagem se comportam de forma diferente",
      paragraphs: [
        "rem é relativo ao tamanho de fonte do elemento raiz, então um valor significa a mesma coisa em qualquer lugar da página. em é relativo ao tamanho de fonte do elemento em que é usado, e elementos aninhados se multiplicam: uma caixa de 1.25 em dentro de outra caixa de 1.25 em tem 1.5625 × o tamanho base. Use rem para espaçamento e tipografia que devem seguir a configuração de tamanho de texto do navegador do leitor, e em somente quando um componente deve escalar com o próprio texto.",
        "Um truque popular define a raiz como 62.5 % para que 1 rem seja igual a 10 px no padrão de 16 px do navegador. A tabela de conversão então muda (24 px = 2.4 rem), e é por isso que o campo da raiz aqui pode ser editado.",
      ],
    },
    {
      heading: "Limites que você deve conhecer",
      bullets: [
        "Polegada, cm, mm e pt do CSS são frações fixas de 96 px. Não há garantia de que correspondam ao comprimento físico em uma tela ou em uma impressão.",
        "Em muitos navegadores de desktop, vw inclui a largura de uma barra de rolagem vertical visível, então 100 vw pode ser mais largo que a área visível.",
        "Navegadores móveis com barra de endereço retrátil alteram a altura visível; esta ferramenta converte vh, não dvh, svh nem lvh.",
        "Valores de referência em branco, zero ou negativos voltam aos padrões acima em vez de produzir um resultado.",
      ],
    },
  ],

  unitconverter: [
    {
      heading: "Exemplos verificados",
      table: {
        head: ["Conversão", "Resultado", "Observação"],
        rows: [
          ["1 galão americano → litros", "3.785411784 L", "Galão líquido americano"],
          ["1 galão imperial → litros", "4.54609 L", "Galão imperial, cerca de 20.1 % maior"],
          ["5 galões americanos → litros", "18.92705892 L", "5 galões imperiais seriam 22.73045 L"],
          ["1 xícara americana → mililitros", "236.5882365 mL", "Não é a xícara métrica de 250 mL"],
          ["98.6 °F → °C", "37 °C", "(98.6 − 32) × 5 ÷ 9"],
          ["0 °C → °F", "32 °F", "(0 × 9 ÷ 5) + 32"],
          ["−40 °C → °F", "−40 °F", "As duas escalas se encontram em −40"],
          ["0 K → °C", "−273.15 °C", "Zero absoluto"],
          ["30 pyeong → m²", "99.17355 m²", "1 pyeong = 3.305785 m²"],
          ["1 acre → hectares", "0.4047 ha", "1 acre = 4,046.8564224 m²"],
        ],
      },
    },
    {
      heading: "Temperatura não é uma razão",
      paragraphs: [
        "Comprimento, massa, área e volume são convertidos multiplicando por uma razão fixa. Temperaturas também precisam de um deslocamento, então 10 °C são 50 °F, enquanto uma diferença de temperatura de 10 °C equivale a 18 °F. Converta uma temperatura medida com esta ferramenta; para uma diferença, multiplique apenas por 9 ÷ 5.",
      ],
    },
    {
      heading: "Unidades de tempo têm duração fixa",
      paragraphs: [
        "Um ano é fixado em 31,556,952 segundos (365.2425 dias) e um mês em 2,629,746 segundos (cerca de 30.4369 dias), um doze avos desse ano. São médias, não meses do calendário, então a ferramenta não consegue informar o número de dias entre duas datas.",
        "Escolha 0, 2, 4 ou 6 casas decimais. Arredondar para 0 casas decimais mostra apenas números inteiros, então confira os dígitos de que precisa antes de copiar um resultado pequeno.",
      ],
    },
  ],

  percentagecalculator: [
    {
      heading: "Os quatro modos com números de exemplo",
      table: {
        head: ["Modo", "Entrada", "Fórmula", "Resultado"],
        rows: [
          ["Porcentagem de um valor", "250 e 20 %", "250 × 20 ÷ 100", "50"],
          ["Aumento", "80 → 100", "(100 − 80) ÷ 80 × 100", "25.00 %"],
          ["Redução", "100 → 80", "(100 − 80) ÷ 100 × 100", "20.00 %"],
          ["Desconto", "80 com 30 % de desconto", "80 − 80 × 30 ÷ 100", "56 (economia de 24)"],
        ],
      },
    },
    {
      heading: "Por que aumentos e reduções não são simétricos",
      paragraphs: [
        "Uma alta de 100 para 125 é +25 %, mas voltar de 125 para 100 é −20 %, porque a porcentagem é sempre medida em relação ao valor inicial. É por isso que um preço que sobe 25 % precisa cair 20 % para voltar ao valor original.",
        "Descontos acumulados não se somam. 20 % de desconto sobre 100 resulta em 80, e mais 10 % de desconto sobre esse valor resulta em 72, um desconto total de 28 %, não de 30 %. Execute o modo de desconto duas vezes, usando o primeiro resultado como o preço inicial da segunda vez.",
      ],
    },
    {
      heading: "Porcentagem versus pontos percentuais",
      paragraphs: [
        "Se uma taxa passa de 40 % para 50 %, ela subiu 10 pontos percentuais, mas o aumento relativo é de 25 % (digite 40 e 50 no modo de aumento). Relatórios costumam misturar os dois, então deixe claro a qual deles você se refere.",
      ],
    },
    {
      heading: "Casos extremos",
      bullets: [
        "Um valor inicial de 0 não tem variação percentual definida, então a ferramenta não mostra resultado.",
        "Os resultados são arredondados para duas casas decimais na exibição: um terço de 100 aparece como 33.33.",
        "Valores negativos seguem a mesma álgebra; não são interpretados do ponto de vista financeiro.",
      ],
    },
  ],

  passwordgenerator: [
    {
      heading: "O que valem o comprimento e os tipos de caracteres",
      paragraphs: [
        "Uma senha gerada aleatoriamente tem cerca de comprimento × log2(tamanho do conjunto) bits de entropia. Os conjuntos nesta ferramenta são 26 letras maiúsculas, 26 letras minúsculas, 10 dígitos e 29 símbolos. Os valores abaixo são o limite superior dessa fórmula; como a ferramenta garante pelo menos um caractere de cada tipo selecionado, os valores reais são ligeiramente menores (para os quatro tipos: 50.98 bits com 8, 77.61 com 12 e 103.86 com 16 caracteres, por contagem exata).",
      ],
      table: {
        head: ["Caracteres usados (tamanho do conjunto)", "8", "12", "16", "24"],
        rows: [
          ["Somente dígitos (10)", "26.6 bits", "39.9 bits", "53.2 bits", "79.7 bits"],
          ["Somente minúsculas (26)", "37.6 bits", "56.4 bits", "75.2 bits", "112.8 bits"],
          ["Letras, maiúsculas e minúsculas (52)", "45.6 bits", "68.4 bits", "91.2 bits", "136.8 bits"],
          ["Letras e dígitos (62)", "47.6 bits", "71.5 bits", "95.3 bits", "142.9 bits"],
          ["Os quatro tipos (91)", "52.1 bits", "78.1 bits", "104.1 bits", "156.2 bits"],
        ],
      },
      note: "A entropia descreve a geração aleatória. Ela não diz nada sobre senhas inventadas por uma pessoa, que são muito mais fáceis de adivinhar.",
    },
    {
      heading: "O comprimento vence a variedade",
      paragraphs: [
        "Dez caracteres dos quatro tipos dão 65.1 bits, enquanto 16 letras minúsculas sozinhas dão 75.2 bits e 16 letras com dígitos dão 95.3 bits. Quando um site limita os símbolos, desmarque-os e aumente o comprimento em vez de encurtar a senha.",
      ],
    },
    {
      heading: "Como a senha é gerada",
      bullets: [
        "Ela é gerada no seu navegador com a função getRandomValues da Web Crypto; nada é enviado a um servidor.",
        "Valores que favoreceriam alguns caracteres (viés de módulo) são rejeitados e sorteados de novo; depois os caracteres são embaralhados para que os garantidos não fiquem em posições fixas.",
        "O comprimento vai de 8 a 64 caracteres, e pelo menos um tipo de caractere deve estar selecionado; caso contrário, nenhuma senha é exibida.",
        "Ao copiar, a senha vai para a área de transferência do seu dispositivo. Limpe-a, não reutilize a senha e guarde-a em um gerenciador de senhas.",
      ],
    },
  ],

  dummytext: [
    {
      heading: "Como os parágrafos são montados",
      paragraphs: [
        "Cada parágrafo recebe 4, 5 ou 6 frases em sequência de uma lista fixa do idioma escolhido, começando 3 frases mais adiante a cada vez. A saída é determinística: a mesma quantidade sempre gera o mesmo texto, e não é um texto exclusivo.",
        "Como a lista é curta, o texto se repete. O inglês tem 8 frases e se repete a cada 24 parágrafos, o coreano tem 9 e se repete a cada 3, e o japonês, o francês, o chinês, o espanhol, o alemão, o português e o árabe têm 6 e se repetem a cada 6. O parágrafo 4 da saída em coreano é igual ao parágrafo 1.",
      ],
      table: {
        head: ["Idioma", "Frases na lista", "Parágrafos até repetir"],
        rows: [
          ["Inglês", "8", "24"],
          ["Coreano", "9", "3"],
          ["Japonês, francês, chinês (ambos), espanhol, alemão, português, árabe", "6", "6"],
        ],
      },
    },
    {
      heading: "Bons usos e limites",
      bullets: [
        "Testes de layout: verifique quebra de linha, altura de cards e truncamento com 1 a 100 parágrafos.",
        "Texto CJK e texto latino quebram de forma diferente, então teste o idioma que seu design realmente vai exibir.",
        "Parágrafos repetidos podem esconder um problema de layout que um texto variado revelaria; misture conteúdo real nas verificações finais.",
        "Alguns conjuntos em idiomas diferentes do inglês são trechos de declarações e constituições. São amostras, não aconselhamento jurídico nem artigos publicáveis.",
        "Remova o texto de preenchimento antes de publicar; páginas de preenchimento são conteúdo de baixo valor para mecanismos de busca e leitores.",
      ],
    },
  ],

  caseconverter: [
    {
      heading: "O que cada botão faz com texto real",
      table: {
        head: ["Entrada", "UPPERCASE", "lowercase", "Title Case"],
        rows: [
          ["iPhone 15 and NASA", "IPHONE 15 AND NASA", "iphone 15 and nasa", "Iphone 15 And Nasa"],
          ["mother-in-law o'brien", "MOTHER-IN-LAW O'BRIEN", "mother-in-law o'brien", "Mother-in-law O'brien"],
          ["hello ⏎ world", "HELLO ⏎ WORLD", "hello ⏎ world", "Hello ⏎ World"],
          ["straße (página em alemão)", "STRASSE", "straße", "Straße"],
        ],
      },
      note: "⏎ indica uma quebra de linha; a linha em alemão é convertida com as regras do alemão na página em alemão.",
    },
    {
      heading: "Title Case não é estilo de manchete",
      paragraphs: [
        "Aqui, Title Case converte tudo para minúsculas e depois põe em maiúscula a primeira letra após cada espaço, tabulação ou quebra de linha. Ele não mantém em minúsculas palavras curtas como and ou of, desfaz a grafia de marcas e siglas (iPhone vira Iphone, NASA vira Nasa) e não põe em maiúscula a letra depois de hifens ou apóstrofos. Confira nomes, siglas e palavras com hífen manualmente.",
      ],
    },
    {
      heading: "Regras de idioma e limites",
      bullets: [
        "A conversão usa as regras do idioma da página, então uma página em alemão converte ß em SS, o que deixa o texto mais longo.",
        "Coreano, chinês e japonês não têm distinção entre maiúsculas e minúsculas e permanecem inalterados.",
        "O resultado substitui o texto na caixa e não há como desfazer; copie o original antes.",
      ],
    },
  ],

  screenlamp: [
    {
      heading: "Cores e para que servem",
      paragraphs: [
        "A ferramenta preenche a página com uma única cor sólida. Há dez predefinições (branco #ffffff, quente #fff3c4, vermelho #ef4444, laranja #f97316, amarelo #facc15, verde #22c55e, azul #3b82f6, índigo #4f46e5, violeta #8b5cf6 e preto #000000) e um seletor de cores para qualquer outro valor. Sua última cor fica armazenada neste navegador.",
      ],
    },
    {
      heading: "Usos práticos",
      bullets: [
        "Teste de tela: percorra branco, preto, vermelho, verde e azul em tela cheia. Um ponto brilhante sobre o preto ou um ponto escuro sobre o branco pode indicar um pixel travado, e manchas irregulares sobre o branco podem mostrar diferenças na retroiluminação.",
        "Luz de preenchimento suave: uma tela quente ou branca perto do rosto pode acrescentar um pouco de luz em uma chamada de vídeo. A cor da página não altera o brilho do hardware; use o controle de brilho do dispositivo.",
        "Luz noturna fraca: uma cor escura e quente com o brilho do dispositivo reduzido, se a tela for a única opção.",
      ],
    },
    {
      heading: "Limites",
      bullets: [
        "Não é uma fonte de luz calibrada, um colorímetro, uma luz de segurança nem um dispositivo médico.",
        "A mesma cor parece diferente em telas e configurações de cor diferentes. O preto em uma tela OLED desliga esses pixels, mas em um LCD a retroiluminação continua visível.",
        "Os navegadores só permitem tela cheia após um clique ou toque; pressione Esc para sair.",
        "Não dependa de uma tela como única luz onde a segurança importa.",
      ],
    },
  ],

  signboard: [
    {
      heading: "Configurações e o que elas fazem",
      bullets: [
        "Tamanho do texto de 24 a 180 px, cor do texto e cor do fundo, e quatro efeitos: estático, rolagem, piscante e brilho.",
        "A rolagem desloca a mensagem continuamente, então use-a para mensagens mais longas que a largura da tela. Mensagens curtas são mais fáceis de ler quando estáticas.",
        "O efeito piscante alterna entre opacidade total e 18 % a cada 0.7 segundo (ciclo de 1.4 segundo), bem abaixo de três lampejos por segundo. Evite piscadas rápidas para pessoas sensíveis a elas.",
        "O brilho adiciona um halo suave da cor do texto e combina com texto grande em fundos escuros.",
      ],
    },
    {
      heading: "Pares de cores legíveis",
      paragraphs: [
        "As razões de contraste abaixo foram calculadas com a fórmula do WCAG a partir das cores exatas das predefinições. Para texto que precisa ser lido à distância, 7:1 ou mais é uma meta segura; 4.5:1 é o mínimo usual para texto normal.",
      ],
      table: {
        head: ["Texto sobre o fundo", "Razão de contraste"],
        rows: [
          ["Branco #ffffff sobre preto #000000", "21.0 : 1"],
          ["Amarelo #facc15 sobre preto", "13.7 : 1"],
          ["Verde #22c55e sobre preto", "9.2 : 1"],
          ["Índigo #4f46e5 sobre branco", "6.3 : 1"],
          ["Vermelho #ef4444 sobre preto", "5.6 : 1"],
          ["Azul #3b82f6 sobre branco", "3.7 : 1"],
          ["Amarelo #facc15 sobre branco", "1.5 : 1"],
        ],
      },
    },
    {
      heading: "Antes de depender dele",
      bullets: [
        "Teste na distância de leitura real e no dispositivo real; o tamanho que parece grande em um notebook pode ser pequeno demais do outro lado de uma sala.",
        "A mensagem e as configurações são salvas no localStorage deste navegador e não são enviadas ao Apps24. Em um dispositivo compartilhado, apague a mensagem depois.",
        "É apenas uma exibição na tela. Ele não controla hardware de LED externo e não certifica sinalização pública.",
      ],
    },
  ],
};

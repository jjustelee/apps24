import type { ExtraArticles } from "./types";

export const EXTRA_PT: ExtraArticles = {
  "percent-points-vs-change": {
    title: "Variação percentual ou pontos percentuais: por que 20% de desconto e depois 10% não dão 30%",
    intro: "Relatórios misturam três coisas diferentes: uma mudança em pontos, uma variação relativa em porcentagem e porcentagens aplicadas em sequência. Passamos cada caso pelas fórmulas de porcentagem do Apps24 para que os números possam ser conferidos à mão.",
    interpretation: "Uma taxa que passa de 40% para 50% sobe 10 pontos percentuais, mas 25% em relação ao valor inicial: (50 − 40) ÷ 40 × 100. Um preço que vai de 100 para 125 sobe 25%, e a volta de 125 para 100 é uma queda de 20%, porque cada variação é medida em relação ao seu próprio valor inicial. Um desconto de 20% sobre 100 deixa 80, e mais 10% de desconto deixa 72: 28% de desconto no total, não 30%.",
    action: "1. Diga se está falando de pontos ou de porcentagem. 2. Em mudanças repetidas, aplique uma após a outra e use cada resultado como o novo valor inicial. 3. Para desfazer uma mudança, calcule a variação a partir do valor novo, não do antigo. 4. Arredonde só no final; a ferramenta mostra duas casas decimais.",
    limit: "São exemplos aritméticos conferidos com as fórmulas da ferramenta, não aconselhamento financeiro. Um valor inicial de 0 não tem variação percentual, por isso a ferramenta não mostra resultado. O arredondamento para duas casas decimais pode esconder diferenças pequenas.",
  },
  "css-units-rem-em": {
    title: "px, rem e em: por que 24 px são 1.5 rem e os em aninhados continuam crescendo",
    intro: "Um conversor só dá o número certo se você souber em relação a qual tamanho cada unidade é medida. Convertemos os mesmos valores com o Apps24, usando os padrões e depois um tamanho raiz alterado, e calculamos à mão os em aninhados.",
    interpretation: "Com raiz de 16 px, 24 px são 24 ÷ 16 = 1.5 rem; com raiz de 10 px, os mesmos 24 px são 2.4 rem. rem sempre usa a raiz, mas em usa o tamanho da fonte do próprio elemento; por isso, uma caixa de 1.25 em dentro de outra caixa de 1.25 em tem 1.25 × 1.25 = 1.5625 vezes o tamanho base. Em uma viewport de 1440 px, 360 px são 25 vw, e 12 pt equivalem a 16 px porque 1 pt é 96 ÷ 72 px CSS.",
    action: "1. Informe o tamanho real da fonte raiz e da viewport antes de converter. 2. Use rem em espaçamentos e textos que devem acompanhar a configuração de tamanho de texto do leitor. 3. Use em apenas quando um componente deve escalar com o próprio texto, e evite aninhamento profundo. 4. Confirme o resultado nas ferramentas de desenvolvedor do navegador, que mostram o valor calculado em pixels.",
    limit: "Unidades físicas (in, cm, mm, pt) são frações fixas de 96 px CSS e não garantem um comprimento real na tela ou no papel. vw pode incluir a largura da barra de rolagem, e vh muda com a barra de endereço em celulares; dvh, svh e lvh não são convertidos. Os valores são conversões matemáticas, não medições da sua página.",
  },
  "password-length-vs-variety": {
    title: "Comprimento ou variedade da senha: contando os bits",
    intro: "Adicionar símbolos parece mais seguro do que aumentar o comprimento, mas a aritmética diz o contrário. Contamos as senhas possíveis para os conjuntos de caracteres que o Apps24 gera e as comparamos em bits de entropia.",
    interpretation: "Uma senha aleatória tem cerca de comprimento × log2(tamanho do conjunto) bits. Dez caracteres dos quatro conjuntos (91 caracteres) dão 65.1 bits, enquanto 16 letras minúsculas dão 75.2 e 16 letras e dígitos dão 95.3. Como o Apps24 garante um caractere de cada tipo escolhido, o valor real é um pouco menor: a contagem exata dá 103.86 bits para 16 caracteres dos quatro tipos, em vez de 104.12.",
    action: "1. Escolha o maior comprimento que o site aceitar. 2. Ative todos os tipos de caracteres que o site permitir. 3. Se um site recusar símbolos, aumente o comprimento. 4. Guarde o resultado em um gerenciador de senhas e nunca o reutilize.",
    limit: "A entropia vale apenas para senhas geradas aleatoriamente; uma senha escolhida por uma pessoa é muito mais fácil de adivinhar. Bits não indicam o tempo para quebrar a senha, que depende do atacante e de como o site armazena as senhas. A ferramenta gera no seu navegador com Web Crypto e não mostra nada se nenhum tipo de caractere estiver selecionado.",
  },
  "qr-wifi-vcard-format": {
    title: "QR codes de Wi-Fi e de contato: o formato exato do texto e o escape de caracteres",
    intro: "Um QR code de Wi-Fi é texto simples com uma estrutura fixa. Geramos códigos com o codificador do Apps24 para uma rede Wi-Fi, uma rede oculta, um nome e uma senha com caracteres especiais e um cartão de contato, e depois decodificamos cada imagem com o ZXing-C++ 3.1.1.",
    interpretation: "Cada amostra foi decodificada exatamente como o texto digitado, incluindo WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;;, em que cada um dos caracteres \\ ; , : e \" dentro do nome ou da senha vem precedido de uma barra invertida. Um texto de Wi-Fi com 38 caracteres gerou um código de 29 × 29 módulos, e um texto de 100 caracteres, 41 × 41. O gerador aceitou até 2331 caracteres ASCII ou 777 sílabas coreanas.",
    action: "1. Escreva o texto como WIFI:T:WPA;S:nome;P:senha;; (T:nopass para redes abertas, H:true para redes ocultas). 2. Escape os caracteres especiais com uma barra invertida. 3. Baixe o PNG e escaneie com o celular que será usado. 4. Mantenha o texto curto para que os módulos continuem grandes na impressão.",
    limit: "A decodificação foi feita apenas por software, em imagens digitais. Não escaneamos códigos impressos nem testamos modelos específicos de celular, e o que o celular faz depois de ler um código depende do aplicativo de câmera. As senhas de exemplo não pertencem a redes reais.",
  },
};

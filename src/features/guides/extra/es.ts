import type { ExtraArticles } from "./types";

export const EXTRA_ES: ExtraArticles = {
  "percent-points-vs-change": {
    title: "Variación porcentual frente a puntos porcentuales: por qué un 20 % de descuento y luego un 10 % no suman un 30 %",
    intro: "Los informes mezclan tres cosas distintas: un cambio en puntos, una variación relativa en porcentaje y porcentajes aplicados uno tras otro. Pasamos cada caso por las fórmulas de porcentaje de Apps24 para que las cifras se puedan comprobar a mano.",
    interpretation: "Una tasa que pasa del 40 % al 50 % sube 10 puntos porcentuales, pero un 25 % respecto a su valor inicial: (50 − 40) ÷ 40 × 100. Un precio que pasa de 100 a 125 sube un 25 %, y la vuelta de 125 a 100 es una bajada del 20 %, porque cada variación se mide respecto a su propio valor inicial. Un 20 % de descuento sobre 100 deja 80, y otro 10 % de descuento deja 72: un 28 % de descuento en total, no un 30 %.",
    action: "1. Indique si habla de puntos o de porcentaje. 2. Si hay varios cambios seguidos, aplíquelos uno tras otro y use cada resultado como nuevo valor inicial. 3. Para deshacer un cambio, calcule la variación desde el valor nuevo, no desde el antiguo. 4. Redondee solo al final; la herramienta muestra dos decimales.",
    limit: "Son ejemplos aritméticos comprobados con las fórmulas de la herramienta, no asesoramiento financiero. Un valor inicial de 0 no tiene variación porcentual, por lo que la herramienta no muestra resultado. El redondeo a dos decimales puede ocultar diferencias pequeñas.",
  },
  "css-units-rem-em": {
    title: "px, rem y em: por qué 24 px son 1.5 rem y los em anidados no dejan de crecer",
    intro: "Un conversor solo da el número correcto si se sabe respecto a qué tamaño se mide cada unidad. Convertimos los mismos valores con Apps24, con sus valores predeterminados y con otro tamaño raíz, y calculamos a mano los em anidados.",
    interpretation: "Con una raíz de 16 px, 24 px son 24 ÷ 16 = 1.5 rem; con una raíz de 10 px, los mismos 24 px son 2.4 rem. rem siempre usa la raíz, pero em usa el tamaño de fuente del propio elemento, así que una caja de 1.25 em dentro de otra caja de 1.25 em mide 1.25 × 1.25 = 1.5625 veces el tamaño base. Con una ventana gráfica de 1440 px, 360 px son 25 vw, y 12 pt equivalen a 16 px porque 1 pt son 96 ÷ 72 px CSS.",
    action: "1. Introduzca su tamaño de fuente raíz y su ventana gráfica reales antes de convertir. 2. Use rem para espaciados y textos que deban seguir el ajuste de tamaño de texto del lector. 3. Use em solo cuando un componente deba escalar con su propio texto, y evite anidar en exceso. 4. Confirme el resultado en las herramientas de desarrollo del navegador, que muestran el valor calculado en píxeles.",
    limit: "Las unidades físicas (in, cm, mm, pt) son fracciones fijas de 96 px CSS y no garantizan una longitud real en pantalla ni en papel. vw puede incluir el ancho de la barra de desplazamiento y vh cambia con la barra de direcciones en móviles; dvh, svh y lvh no se convierten. Los valores son conversiones matemáticas, no mediciones de su página.",
  },
  "password-length-vs-variety": {
    title: "Longitud frente a variedad en una contraseña: contando los bits",
    intro: "Añadir símbolos parece más seguro que añadir longitud, pero la aritmética dice lo contrario. Contamos las contraseñas posibles con los juegos de caracteres que genera Apps24 y las comparamos en bits de entropía.",
    interpretation: "Una contraseña aleatoria tiene aproximadamente longitud × log2(tamaño del juego) bits. Diez caracteres de los cuatro juegos (91 caracteres) dan 65.1 bits, mientras que 16 minúsculas dan 75.2 y 16 letras y dígitos dan 95.3. Como Apps24 garantiza un carácter de cada tipo elegido, el valor real es algo menor: el recuento exacto da 103.86 bits para 16 caracteres de los cuatro tipos, en lugar de 104.12.",
    action: "1. Elija la mayor longitud que acepte el sitio. 2. Active todos los tipos de caracteres que el sitio permita. 3. Si un sitio rechaza los símbolos, aumente la longitud. 4. Guarde el resultado en un gestor de contraseñas y no lo reutilice nunca.",
    limit: "La entropía solo se aplica a contraseñas generadas al azar; una contraseña elegida por una persona es mucho más fácil de adivinar. Los bits no indican el tiempo necesario para descifrarla, que depende del atacante y de cómo almacene el sitio las contraseñas. La herramienta genera en su navegador con Web Crypto y no muestra nada si no hay ningún tipo de carácter seleccionado.",
  },
  "qr-wifi-vcard-format": {
    title: "Códigos QR de Wi-Fi y de contacto: el formato de texto exacto y el escape de caracteres",
    intro: "Un código QR de Wi-Fi es texto sin formato con una estructura fija. Generamos códigos con el codificador de Apps24 para una red Wi-Fi, una red oculta, un nombre y una contraseña con caracteres especiales y una tarjeta de contacto, y después descodificamos cada imagen con ZXing-C++ 3.1.1.",
    interpretation: "Cada muestra se descodificó exactamente como el texto introducido, incluido WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;;, donde cada uno de los caracteres \\ ; , : y \" dentro del nombre o la contraseña lleva delante una barra invertida. Un texto de Wi-Fi de 38 caracteres produjo un código de 29 × 29 módulos, y uno de 100 caracteres, de 41 × 41. El generador aceptó hasta 2331 caracteres ASCII o 777 sílabas coreanas.",
    action: "1. Escriba el texto como WIFI:T:WPA;S:nombre;P:contraseña;; (T:nopass para redes abiertas, H:true para redes ocultas). 2. Escape los caracteres especiales con una barra invertida. 3. Descargue el PNG y escanéelo con el teléfono que se vaya a usar. 4. Mantenga el texto corto para que los módulos sigan siendo grandes al imprimir.",
    limit: "La descodificación se hizo solo con software sobre imágenes digitales. No escaneamos códigos impresos ni probamos modelos concretos de teléfono, y lo que hace un teléfono tras leer un código depende de su aplicación de cámara. Las contraseñas de ejemplo no pertenecen a redes reales.",
  },
};

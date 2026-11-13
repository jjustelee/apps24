import type { DeepContent } from "./types";

/**
 * Las cifras se calcularon o se verificaron con la implementación de este repositorio:
 * muestras QR generadas con bwip-js y decodificadas con ZXing-C++ 3.1.1 (solo imágenes digitales), fórmulas según el código de la herramienta.
 */
export const DEEP_ES: DeepContent = {
  qrgenerator: [
    {
      heading: "Formatos de texto que reconocen las cámaras de los teléfonos",
      paragraphs: [
        "Esta herramienta codifica exactamente el texto que escribe; no crea formularios. La cámara del teléfono decide qué hacer según el prefijo al inicio del texto, por lo que un código Wi-Fi solo funciona si el texto sigue el formato Wi-Fi. Cada muestra de abajo fue generada por el codificador de este sitio y decodificada de vuelta al mismo texto por un decodificador de software (ZXing-C++ 3.1.1).",
      ],
      table: {
        head: ["Finalidad", "Texto que debe introducir"],
        rows: [
          ["Sitio web", "https://example.com"],
          ["Wi-Fi (WPA)", "WIFI:T:WPA;S:Cafe Guest;P:sunny-2026;;"],
          ["Wi-Fi, red oculta", "WIFI:T:WPA;S:HiddenNet;P:abc12345;H:true;;"],
          ["Correo electrónico", "mailto:support@apps24.io?subject=Hello"],
          ["Llamada telefónica", "tel:+821012345678"],
          ["SMS", "SMSTO:+821012345678:Hello"],
          ["Ubicación en el mapa", "geo:37.5665,126.9780"],
          ["Tarjeta de contacto", "BEGIN:VCARD ⏎ VERSION:3.0 ⏎ N:Kim;Min;;; ⏎ FN:Min Kim ⏎ TEL;TYPE=CELL:+821012345678 ⏎ EMAIL:min@example.com ⏎ END:VCARD"],
        ],
      },
      note: "⏎ marca un salto de línea; escriba cada campo de la vCard en su propia línea. La prueba de software usó solo imágenes digitales. No escaneamos códigos impresos ni probamos modelos de teléfono concretos, y la reacción de un teléfono ante un código depende de su aplicación de cámara.",
    },
    {
      heading: "Cómo escapar caracteres especiales en códigos Wi-Fi",
      paragraphs: [
        "En un texto WIFI: los caracteres \\ ; , : y \" separan campos, por lo que un nombre de red o una contraseña que los contenga necesita una barra invertida delante de cada uno. Una red llamada Cafe;Guest con la contraseña pa:ss\\word se introduce como WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;; y este texto exacto se decodificó sin cambios en nuestra prueba.",
        "Use T:nopass para las redes abiertas y agregue H:true solo para las redes ocultas. Si un teléfono se niega a conectarse, revise primero la contraseña carácter por carácter, porque una contraseña incorrecta y un escape incorrecto se ven igual para el usuario.",
      ],
    },
    {
      heading: "Cuánto texto cabe y cómo afecta al patrón",
      paragraphs: [
        "Medido con este generador: hasta 2,331 caracteres de un solo byte (letras ASCII), 1,165 letras latinas con acentos, 777 sílabas coreanas o 582 emojis, porque ocupan 1, 2, 3 y 4 bytes en UTF-8. El formulario acepta hasta 4,000 caracteres, pero el texto que supere estos límites produce un error de generación.",
        "Un texto más largo implica un patrón más denso. Un texto de 20 caracteres produjo un código de 25 × 25 módulos, 38 caracteres uno de 29 × 29, 100 caracteres uno de 41 × 41 y 300 caracteres uno de 69 × 69. Con el mismo tamaño de impresión, los módulos más densos son más pequeños, así que acorte las URL y elimine los campos opcionales antes de reducir el tamaño de impresión. El PNG se dibuja a 6 píxeles por módulo con un margen de silencio de 4 módulos.",
      ],
    },
    {
      heading: "Antes de imprimir o publicar",
      bullets: [
        "Escanee el propio PNG descargado, no la vista previa, con al menos dos teléfonos distintos.",
        "Mantenga los módulos oscuros sobre un fondo claro y no recorte el margen.",
        "Un código QR almacena texto, no una redirección: no se puede cambiar el destino más adelante, y un enlace roto seguirá roto.",
        "Pruebe con el tamaño de impresión real y la distancia de visualización real.",
      ],
    },
  ],

  pixelconverter: [
    {
      heading: "Conversiones resueltas",
      paragraphs: [
        "Todas las filas usan los valores predeterminados de esta herramienta: 16 px como raíz y como tamaño de fuente actual, 16 px como base del porcentaje y un viewport de 1440 × 900. Cambie los campos de referencia para que coincidan con su propia página antes de fiarse de un resultado.",
      ],
      table: {
        head: ["Entrada", "Resultado", "Por qué"],
        rows: [
          ["24 px → rem", "1.5 rem", "24 ÷ 16 del tamaño de fuente raíz"],
          ["20 px → em", "1.25 em", "20 ÷ 16 del tamaño de fuente actual"],
          ["8 px → %", "50 %", "8 ÷ 16 de la base del porcentaje"],
          ["360 px → vw", "25 vw", "360 ÷ (1440 ÷ 100)"],
          ["450 px → vh", "50 vh", "450 ÷ (900 ÷ 100)"],
          ["12 pt → px", "16 px", "1 pt = 96 ÷ 72 px CSS"],
          ["1 in → px", "96 px", "1 pulgada CSS = 96 px CSS"],
          ["10 mm → px", "37.7953 px", "10 × 96 ÷ 25.4, mostrado con 4 decimales"],
          ["24 px → rem con una raíz de 10 px", "2.4 rem", "24 ÷ 10"],
        ],
      },
    },
    {
      heading: "rem, em y porcentaje se comportan de forma distinta",
      paragraphs: [
        "rem es relativo al tamaño de fuente del elemento raíz, así que un mismo valor significa lo mismo en toda la página. em es relativo al tamaño de fuente del elemento donde se usa, y los elementos anidados se multiplican: una caja de 1.25 em dentro de otra de 1.25 em equivale a 1.5625 veces el tamaño base. Use rem para los espaciados y la tipografía que deban seguir el ajuste de tamaño de texto del navegador del lector, y em solo cuando un componente deba escalar con su propio texto.",
        "Un truco popular fija la raíz en 62.5 % para que 1 rem equivalga a 10 px con el valor predeterminado del navegador de 16 px. La tabla de conversión cambia entonces (24 px = 2.4 rem), y por eso aquí se puede editar el campo de la raíz.",
      ],
    },
    {
      heading: "Límites que conviene conocer",
      bullets: [
        "La pulgada, el cm, el mm y el pt de CSS son fracciones fijas de 96 px. No se garantiza que coincidan con la longitud física en una pantalla o en una impresión.",
        "vw incluye el ancho de una barra de desplazamiento vertical visible en muchos navegadores de escritorio, por lo que 100 vw puede ser más ancho que el área visible.",
        "Los navegadores móviles con una barra de direcciones que se contrae cambian la altura visible; esta herramienta convierte vh, no dvh, svh ni lvh.",
        "Los valores de referencia vacíos, iguales a cero o negativos vuelven a los valores predeterminados indicados arriba en lugar de producir un resultado.",
      ],
    },
  ],

  unitconverter: [
    {
      heading: "Ejemplos verificados",
      table: {
        head: ["Conversión", "Resultado", "Nota"],
        rows: [
          ["1 galón estadounidense → litros", "3.785411784 L", "Galón líquido estadounidense"],
          ["1 galón británico → litros", "4.54609 L", "Galón imperial, aproximadamente un 20.1 % mayor"],
          ["5 galones estadounidenses → litros", "18.92705892 L", "5 galones británicos serían 22.73045 L"],
          ["1 taza estadounidense → mililitros", "236.5882365 mL", "No es la taza métrica de 250 mL"],
          ["98.6 °F → °C", "37 °C", "(98.6 − 32) × 5 ÷ 9"],
          ["0 °C → °F", "32 °F", "(0 × 9 ÷ 5) + 32"],
          ["−40 °C → °F", "−40 °F", "Las dos escalas coinciden en −40"],
          ["0 K → °C", "−273.15 °C", "Cero absoluto"],
          ["30 pyeong → m²", "99.17355 m²", "1 pyeong = 3.305785 m²"],
          ["1 acre → hectáreas", "0.4047 ha", "1 acre = 4,046.8564224 m²"],
        ],
      },
    },
    {
      heading: "La temperatura no es una proporción",
      paragraphs: [
        "La longitud, la masa, el área y el volumen se convierten multiplicando por una proporción fija. Las temperaturas necesitan además un desplazamiento, por lo que 10 °C son 50 °F, mientras que una diferencia de temperatura de 10 °C equivale a 18 °F. Convierta una temperatura medida con esta herramienta; para una diferencia, multiplique solo por 9 ÷ 5.",
      ],
    },
    {
      heading: "Las unidades de tiempo tienen duraciones fijas",
      paragraphs: [
        "Un año se fija en 31,556,952 segundos (365.2425 días) y un mes en 2,629,746 segundos (unos 30.4369 días), una doceava parte de ese año. Son promedios, no meses de calendario, así que la herramienta no puede indicarle el número de días entre dos fechas.",
        "Elija 0, 2, 4 o 6 decimales. Redondear a 0 decimales muestra solo números enteros, así que compruebe los dígitos que necesita antes de copiar un resultado pequeño.",
      ],
    },
  ],

  percentagecalculator: [
    {
      heading: "Los cuatro modos con números de ejemplo",
      table: {
        head: ["Modo", "Entrada", "Fórmula", "Resultado"],
        rows: [
          ["Porcentaje de un valor", "250 y 20 %", "250 × 20 ÷ 100", "50"],
          ["Aumento", "80 → 100", "(100 − 80) ÷ 80 × 100", "25.00 %"],
          ["Disminución", "100 → 80", "(100 − 80) ÷ 100 × 100", "20.00 %"],
          ["Descuento", "80 con 30 % de descuento", "80 − 80 × 30 ÷ 100", "56 (ahorro de 24)"],
        ],
      },
    },
    {
      heading: "Por qué los aumentos y las disminuciones no son simétricos",
      paragraphs: [
        "Una subida de 100 a 125 es +25 %, pero volver de 125 a 100 es −20 %, porque el porcentaje siempre se mide respecto al valor inicial. Por eso un precio que sube un 25 % debe bajar un 20 % para volver al original.",
        "Los descuentos acumulados no se suman. Un 20 % de descuento sobre 100 da 80, y otro 10 % de descuento sobre ese resultado da 72, es decir, un descuento total del 28 %, no del 30 %. Ejecute el modo de descuento dos veces, usando el primer resultado como segundo precio inicial.",
      ],
    },
    {
      heading: "Porcentaje frente a puntos porcentuales",
      paragraphs: [
        "Si una tasa pasa del 40 % al 50 %, ha subido 10 puntos porcentuales, pero el aumento relativo es del 25 % (introduzca 40 y 50 en el modo de aumento). Los informes suelen mezclar ambos conceptos, así que indique a cuál se refiere.",
      ],
    },
    {
      heading: "Casos límite",
      bullets: [
        "Un valor inicial de 0 no tiene un cambio porcentual definido, por lo que la herramienta no muestra ningún resultado.",
        "Los resultados se redondean a dos decimales al mostrarse: un tercio de 100 se muestra como 33.33.",
        "Los valores negativos siguen las mismas reglas algebraicas; no se interpretan en sentido financiero.",
      ],
    },
  ],

  passwordgenerator: [
    {
      heading: "Qué aportan la longitud y los tipos de caracteres",
      paragraphs: [
        "Una contraseña generada de forma aleatoria tiene aproximadamente longitud × log2(tamaño del conjunto) bits de entropía. Los conjuntos de esta herramienta son 26 letras mayúsculas, 26 letras minúsculas, 10 dígitos y 29 símbolos. Los valores de abajo son el límite superior de esa fórmula; como la herramienta garantiza al menos un carácter de cada tipo seleccionado, los valores reales son ligeramente menores (para los cuatro tipos: 50.98 bits con 8 caracteres, 77.61 con 12 y 103.86 con 16, por conteo exacto).",
      ],
      table: {
        head: ["Caracteres usados (tamaño del conjunto)", "8", "12", "16", "24"],
        rows: [
          ["Solo dígitos (10)", "26.6 bits", "39.9 bits", "53.2 bits", "79.7 bits"],
          ["Solo minúsculas (26)", "37.6 bits", "56.4 bits", "75.2 bits", "112.8 bits"],
          ["Letras, mayúsculas y minúsculas (52)", "45.6 bits", "68.4 bits", "91.2 bits", "136.8 bits"],
          ["Letras y dígitos (62)", "47.6 bits", "71.5 bits", "95.3 bits", "142.9 bits"],
          ["Los cuatro tipos (91)", "52.1 bits", "78.1 bits", "104.1 bits", "156.2 bits"],
        ],
      },
      note: "La entropía describe la generación aleatoria. No dice nada sobre las contraseñas que inventa una persona, que son mucho más fáciles de adivinar.",
    },
    {
      heading: "La longitud importa más que la variedad",
      paragraphs: [
        "Diez caracteres de los cuatro tipos dan 65.1 bits, mientras que 16 letras minúsculas por sí solas dan 75.2 bits y 16 letras con dígitos dan 95.3 bits. Cuando un sitio limita los símbolos, desmárquelos y añada longitud en lugar de acortar la contraseña.",
      ],
    },
    {
      heading: "Cómo se crea la contraseña",
      bullets: [
        "Se genera en su navegador con la función de Web Crypto getRandomValues; no se envía nada a un servidor.",
        "Los valores que favorecerían a ciertos caracteres (sesgo de módulo) se rechazan y se vuelven a generar; después se mezclan los caracteres para que los garantizados no ocupen posiciones fijas.",
        "El rango de longitud es de 8 a 64 caracteres, y debe seleccionarse al menos un tipo de carácter o no se mostrará ninguna contraseña.",
        "Al copiar, la contraseña se coloca en el portapapeles de su dispositivo. Bórrelo, no reutilice la contraseña y guárdela en un administrador de contraseñas.",
      ],
    },
  ],

  dummytext: [
    {
      heading: "Cómo se construyen los párrafos",
      paragraphs: [
        "Cada párrafo toma por turno 4, 5 o 6 oraciones de una lista fija del idioma elegido, avanzando 3 oraciones más cada vez. La salida es determinista: la misma cantidad siempre da el mismo texto, y no es una redacción única.",
        "Como la lista es corta, el texto se repite. El inglés tiene 8 oraciones y se repite cada 24 párrafos, el coreano tiene 9 y se repite cada 3, y el japonés, el francés, el chino, el español, el alemán, el portugués y el árabe tienen 6 y se repiten cada 6. El párrafo 4 de la salida en coreano es igual al párrafo 1.",
      ],
      table: {
        head: ["Idioma", "Oraciones en la lista", "Párrafos hasta que se repite"],
        rows: [
          ["Inglés", "8", "24"],
          ["Coreano", "9", "3"],
          ["Japonés, francés, chino (ambos), español, alemán, portugués, árabe", "6", "6"],
        ],
      },
    },
    {
      heading: "Buenos usos y límites",
      bullets: [
        "Pruebas de diseño: compruebe el ajuste de línea, la altura de las tarjetas y el truncamiento con entre 1 y 100 párrafos.",
        "El texto CJK y el latino se ajustan de forma distinta, así que pruebe con el idioma que su diseño mostrará realmente.",
        "Los párrafos repetidos pueden ocultar un problema de diseño que un texto variado dejaría al descubierto; mezcle contenido real en las comprobaciones finales.",
        "Algunos conjuntos que no están en inglés son extractos de declaraciones y constituciones. Son muestras, no asesoramiento jurídico ni artículos publicables.",
        "Elimine el texto de relleno antes de publicar; las páginas de relleno son contenido de poco valor para los buscadores y para los lectores.",
      ],
    },
  ],

  caseconverter: [
    {
      heading: "Qué hace cada botón con un texto real",
      table: {
        head: ["Entrada", "UPPERCASE", "lowercase", "Title Case"],
        rows: [
          ["iPhone 15 and NASA", "IPHONE 15 AND NASA", "iphone 15 and nasa", "Iphone 15 And Nasa"],
          ["mother-in-law o'brien", "MOTHER-IN-LAW O'BRIEN", "mother-in-law o'brien", "Mother-in-law O'brien"],
          ["hello ⏎ world", "HELLO ⏎ WORLD", "hello ⏎ world", "Hello ⏎ World"],
          ["straße (página en alemán)", "STRASSE", "straße", "Straße"],
        ],
      },
      note: "⏎ marca un salto de línea; la fila en alemán se convierte con las reglas del alemán en la página en alemán.",
    },
    {
      heading: "Title Case no es el estilo de titulares",
      paragraphs: [
        "Aquí, Title Case pone todo en minúsculas y luego escribe con mayúscula la primera letra después de cada espacio, tabulación o salto de línea. No mantiene en minúsculas las palabras cortas como «and» u «of», aplana la capitalización de marcas y siglas (iPhone pasa a ser Iphone, NASA pasa a ser Nasa) y no usa mayúscula después de guiones ni apóstrofos. Revise a mano los nombres, las siglas y las palabras con guion.",
      ],
    },
    {
      heading: "Reglas del idioma y límites",
      bullets: [
        "La conversión usa las reglas del idioma de la página, así que una página en alemán convierte ß en SS, lo que alarga el texto.",
        "El coreano, el chino y el japonés no distinguen entre mayúsculas y minúsculas y permanecen sin cambios.",
        "El resultado reemplaza el texto del cuadro y no se puede deshacer; copie primero el original.",
      ],
    },
  ],

  screenlamp: [
    {
      heading: "Colores y para qué sirve cada uno",
      paragraphs: [
        "La herramienta llena la página con un único color sólido. Hay diez colores predefinidos (blanco #ffffff, cálido #fff3c4, rojo #ef4444, naranja #f97316, amarillo #facc15, verde #22c55e, azul #3b82f6, índigo #4f46e5, violeta #8b5cf6 y negro #000000) y un selector de color para cualquier otro valor. Su último color se guarda en este navegador.",
      ],
    },
    {
      heading: "Usos prácticos",
      bullets: [
        "Revisión de la pantalla: recorra blanco, negro, rojo, verde y azul en pantalla completa. Un punto brillante sobre negro o un punto oscuro sobre blanco puede indicar un píxel atascado, y las manchas irregulares sobre blanco pueden mostrar diferencias en la retroiluminación.",
        "Luz de relleno suave: una pantalla cálida o blanca cerca de su rostro puede aportar algo de luz en una videollamada. El color de la página no cambia el brillo del hardware; use el control de brillo del dispositivo.",
        "Luz nocturna tenue: un color cálido oscuro con el brillo del dispositivo reducido, si la pantalla es la única opción.",
      ],
    },
    {
      heading: "Límites",
      bullets: [
        "No es una fuente de luz calibrada, un colorímetro, una luz de seguridad ni un dispositivo médico.",
        "El mismo color se ve distinto en pantallas y ajustes de color diferentes. El negro en una pantalla OLED apaga esos píxeles, pero en una retroiluminación LCD sigue siendo visible.",
        "Los navegadores solo permiten la pantalla completa después de un clic o un toque; pulse Esc para salir.",
        "No dependa de una pantalla como única luz cuando la seguridad sea importante.",
      ],
    },
  ],

  signboard: [
    {
      heading: "Ajustes y qué hacen",
      bullets: [
        "Tamaño de texto de 24 a 180 px, color del texto y color de fondo, y cuatro efectos: estático, desplazamiento, parpadeo y resplandor.",
        "El desplazamiento mueve el mensaje de forma continua, así que úselo para mensajes más largos que el ancho de la pantalla. Los mensajes cortos se leen mejor si son estáticos.",
        "El parpadeo alterna entre opacidad completa y 18 % cada 0.7 segundos (ciclo de 1.4 segundos), muy por debajo de tres destellos por segundo. Evite el parpadeo rápido para cualquier persona sensible a él.",
        "El resplandor añade un halo suave del color del texto y resulta adecuado para texto grande sobre fondos oscuros.",
      ],
    },
    {
      heading: "Pares de colores legibles",
      paragraphs: [
        "Las relaciones de contraste de abajo se calcularon con la fórmula WCAG a partir de los colores predefinidos exactos. Para un texto que debe leerse a distancia, 7:1 o más es un objetivo seguro; 4.5:1 es el mínimo habitual para texto normal.",
      ],
      table: {
        head: ["Texto sobre fondo", "Relación de contraste"],
        rows: [
          ["Blanco #ffffff sobre negro #000000", "21.0 : 1"],
          ["Amarillo #facc15 sobre negro", "13.7 : 1"],
          ["Verde #22c55e sobre negro", "9.2 : 1"],
          ["Índigo #4f46e5 sobre blanco", "6.3 : 1"],
          ["Rojo #ef4444 sobre negro", "5.6 : 1"],
          ["Azul #3b82f6 sobre blanco", "3.7 : 1"],
          ["Amarillo #facc15 sobre blanco", "1.5 : 1"],
        ],
      },
    },
    {
      heading: "Antes de confiar en ella",
      bullets: [
        "Pruebe desde la distancia de visualización real en el dispositivo real; un tamaño que parece grande en una computadora portátil puede ser demasiado pequeño al otro lado de una sala.",
        "El mensaje y los ajustes se guardan en el localStorage de este navegador y no se envían a Apps24. En un dispositivo compartido, borre el mensaje después.",
        "Es solo una pantalla de visualización. No controla hardware LED externo ni certifica la señalización pública.",
      ],
    },
  ],
};

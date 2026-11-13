import type { DeepContent } from "./types";

/**
 * Traduction française de en.ts : mêmes valeurs, formules, unités et chaînes de code ; seul le texte descriptif est traduit.
 */
export const DEEP_FR: DeepContent = {
  qrgenerator: [
    {
      heading: "Formats de texte reconnus par les appareils photo des téléphones",
      paragraphs: [
        "Cet outil encode exactement le texte que vous saisissez ; il ne crée pas de formulaires. L'appareil photo d'un téléphone décide de l'action à effectuer d'après le préfixe placé au début du texte : un code Wi-Fi ne fonctionne donc que si le texte respecte le format Wi-Fi. Chaque exemple ci-dessous a été généré par l'encodeur de ce site, puis décodé en un texte identique par un décodeur logiciel (ZXing-C++ 3.1.1).",
      ],
      table: {
        head: ["Usage", "Texte à saisir"],
        rows: [
          ["Site Web", "https://example.com"],
          ["Wi-Fi (WPA)", "WIFI:T:WPA;S:Cafe Guest;P:sunny-2026;;"],
          ["Wi-Fi, réseau masqué", "WIFI:T:WPA;S:HiddenNet;P:abc12345;H:true;;"],
          ["E-mail", "mailto:support@apps24.io?subject=Hello"],
          ["Appel téléphonique", "tel:+821012345678"],
          ["SMS", "SMSTO:+821012345678:Hello"],
          ["Position sur une carte", "geo:37.5665,126.9780"],
          ["Carte de contact", "BEGIN:VCARD ⏎ VERSION:3.0 ⏎ N:Kim;Min;;; ⏎ FN:Min Kim ⏎ TEL;TYPE=CELL:+821012345678 ⏎ EMAIL:min@example.com ⏎ END:VCARD"],
        ],
      },
      note: "⏎ indique un saut de ligne ; saisissez chaque champ vCard sur sa propre ligne. Le test logiciel a utilisé uniquement des images numériques. Nous n'avons pas scanné de codes imprimés ni testé de modèles de téléphone précis, et la réaction d'un téléphone à un code dépend de son application d'appareil photo.",
    },
    {
      heading: "Échappement des caractères spéciaux dans les codes Wi-Fi",
      paragraphs: [
        "Dans un texte WIFI:, les caractères \\ ; , : et \" séparent les champs : un nom de réseau ou un mot de passe qui les contient doit donc avoir une barre oblique inverse devant chacun d'eux. Un réseau nommé Cafe;Guest avec le mot de passe pa:ss\\word se saisit sous la forme WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;; et ce texte exact a été décodé à l'identique lors de notre test.",
        "Utilisez T:nopass pour les réseaux ouverts et ajoutez H:true uniquement pour les réseaux masqués. Si un téléphone refuse de se connecter, vérifiez d'abord le mot de passe caractère par caractère, car, pour l'utilisateur, un mot de passe erroné et un échappement erroné se manifestent de la même façon.",
      ],
    },
    {
      heading: "Quantité de texte possible et effet sur le motif",
      paragraphs: [
        "Mesures effectuées avec ce générateur : jusqu'à 2,331 caractères à un octet (lettres ASCII), 1,165 lettres latines accentuées, 777 syllabes coréennes ou 582 émojis, car ils occupent respectivement 1, 2, 3 et 4 octets en UTF-8. Le formulaire accepte jusqu'à 4,000 caractères, mais un texte qui dépasse ces limites renvoie une erreur de génération.",
        "Plus le texte est long, plus le motif est dense. Un texte de 20 caractères a produit un code de 25 × 25 modules, 38 caractères un code de 29 × 29, 100 caractères un code de 41 × 41 et 300 caractères un code de 69 × 69. À taille d'impression égale, des modules plus denses sont plus petits : raccourcissez donc les URL et supprimez les champs facultatifs avant de réduire la taille d'impression. Le PNG est dessiné à raison de 6 pixels par module, avec une marge de silence de 4 modules.",
      ],
    },
    {
      heading: "Avant d'imprimer ou de publier",
      bullets: [
        "Scannez le PNG téléchargé lui-même, et non l'aperçu, avec au moins deux téléphones différents.",
        "Conservez des modules sombres sur un fond clair et ne rognez pas la marge.",
        "Un code QR stocke du texte, pas une redirection : vous ne pourrez pas modifier la destination par la suite, et un lien mort le reste.",
        "Testez à la taille d'impression réelle et à la distance de lecture réelle.",
      ],
    },
  ],

  pixelconverter: [
    {
      heading: "Exemples de conversions",
      paragraphs: [
        "Toutes les lignes utilisent les valeurs par défaut de cet outil : racine et taille de police actuelle de 16 px, base de pourcentage de 16 px et viewport de 1440 × 900. Modifiez les champs de référence pour qu'ils correspondent à votre propre page avant de vous fier à un résultat.",
      ],
      table: {
        head: ["Entrée", "Résultat", "Explication"],
        rows: [
          ["24 px → rem", "1.5 rem", "24 ÷ 16 taille de police racine"],
          ["20 px → em", "1.25 em", "20 ÷ 16 taille de police actuelle"],
          ["8 px → %", "50 %", "8 ÷ 16 base de pourcentage"],
          ["360 px → vw", "25 vw", "360 ÷ (1440 ÷ 100)"],
          ["450 px → vh", "50 vh", "450 ÷ (900 ÷ 100)"],
          ["12 pt → px", "16 px", "1 pt = 96 ÷ 72 px CSS"],
          ["1 in → px", "96 px", "1 pouce CSS = 96 px CSS"],
          ["10 mm → px", "37.7953 px", "10 × 96 ÷ 25.4, affiché avec 4 décimales"],
          ["24 px → rem avec une racine de 10 px", "2.4 rem", "24 ÷ 10"],
        ],
      },
    },
    {
      heading: "rem, em et pourcentage se comportent différemment",
      paragraphs: [
        "rem est relatif à la taille de police de l'élément racine : une même valeur signifie donc la même chose partout dans la page. em est relatif à la taille de police de l'élément où il est utilisé, et les éléments imbriqués se multiplient : une boîte de 1.25 em placée dans une autre boîte de 1.25 em vaut 1.5625 fois la taille de base. Utilisez rem pour les espacements et les textes qui doivent suivre le réglage de taille du texte du navigateur du lecteur, et em uniquement lorsqu'un composant doit s'adapter à son propre texte.",
        "Une astuce répandue règle la racine sur 62.5 % afin que 1 rem corresponde à 10 px avec la valeur par défaut de 16 px du navigateur. Le tableau de conversion change alors (24 px = 2.4 rem), c'est pourquoi le champ de la racine peut être modifié ici.",
      ],
    },
    {
      heading: "Limites à connaître",
      bullets: [
        "Le pouce, le cm, le mm et le pt CSS sont des fractions fixes de 96 px. Rien ne garantit qu'ils correspondent à une longueur physique sur un écran ou sur une impression.",
        "vw inclut la largeur d'une barre de défilement verticale visible sur de nombreux navigateurs de bureau ; 100 vw peut donc être plus large que la zone visible.",
        "Sur les navigateurs mobiles dont la barre d'adresse se réduit, la hauteur visible change ; cet outil convertit vh, et non dvh, svh ou lvh.",
        "Les valeurs de référence vides, nulles ou négatives reviennent aux valeurs par défaut ci-dessus au lieu de produire un résultat.",
      ],
    },
  ],

  unitconverter: [
    {
      heading: "Exemples vérifiés",
      table: {
        head: ["Conversion", "Résultat", "Remarque"],
        rows: [
          ["1 gallon US → litres", "3.785411784 L", "Gallon liquide américain"],
          ["1 gallon UK → litres", "4.54609 L", "Gallon impérial, environ 20.1 % plus grand"],
          ["5 gallons US → litres", "18.92705892 L", "5 gallons UK donneraient 22.73045 L"],
          ["1 tasse US → millilitres", "236.5882365 mL", "Différente de la tasse métrique de 250 mL"],
          ["98.6 °F → °C", "37 °C", "(98.6 − 32) × 5 ÷ 9"],
          ["0 °C → °F", "32 °F", "(0 × 9 ÷ 5) + 32"],
          ["−40 °C → °F", "−40 °F", "Les deux échelles se rejoignent à −40"],
          ["0 K → °C", "−273.15 °C", "Zéro absolu"],
          ["30 pyeong → m²", "99.17355 m²", "1 pyeong = 3.305785 m²"],
          ["1 acre → hectares", "0.4047 ha", "1 acre = 4,046.8564224 m²"],
        ],
      },
    },
    {
      heading: "La température n'est pas un rapport",
      paragraphs: [
        "Les longueurs, masses, surfaces et volumes se convertissent en multipliant par un rapport fixe. Les températures exigent aussi un décalage : 10 °C valent donc 50 °F, alors qu'un écart de température de 10 °C vaut 18 °F. Utilisez cet outil pour convertir une température mesurée ; pour un écart, multipliez uniquement par 9 ÷ 5.",
      ],
    },
    {
      heading: "Les unités de temps ont des durées fixes",
      paragraphs: [
        "Une année est fixée à 31,556,952 secondes (365.2425 jours) et un mois à 2,629,746 secondes (environ 30.4369 jours), soit un douzième de cette année. Ce sont des moyennes, et non des mois du calendrier : l'outil ne peut donc pas vous donner le nombre de jours entre deux dates.",
        "Choisissez 0, 2, 4 ou 6 décimales. Un arrondi à 0 décimale n'affiche que des nombres entiers ; vérifiez donc les chiffres dont vous avez besoin avant de copier un petit résultat.",
      ],
    },
  ],

  percentagecalculator: [
    {
      heading: "Les quatre modes avec des exemples chiffrés",
      table: {
        head: ["Mode", "Entrée", "Formule", "Résultat"],
        rows: [
          ["Pourcentage d'une valeur", "250 et 20 %", "250 × 20 ÷ 100", "50"],
          ["Augmentation", "80 → 100", "(100 − 80) ÷ 80 × 100", "25.00 %"],
          ["Diminution", "100 → 80", "(100 − 80) ÷ 100 × 100", "20.00 %"],
          ["Remise", "80 avec 30 % de remise", "80 − 80 × 30 ÷ 100", "56 (économie de 24)"],
        ],
      },
    },
    {
      heading: "Pourquoi les hausses et les baisses ne sont pas symétriques",
      paragraphs: [
        "Une hausse de 100 à 125 représente +25 %, mais le retour de 125 à 100 représente −20 %, car le pourcentage est toujours mesuré par rapport à la valeur de départ. C'est pourquoi un prix qui augmente de 25 % doit baisser de 20 % pour revenir à son niveau initial.",
        "Les remises cumulées ne s'additionnent pas. 20 % de remise sur 100 donnent 80, et 10 % de remise supplémentaire sur ce montant donnent 72, soit une remise totale de 28 % et non de 30 %. Utilisez deux fois le mode remise, en prenant le premier résultat comme prix de départ du second.",
      ],
    },
    {
      heading: "Pourcentage ou points de pourcentage",
      paragraphs: [
        "Si un taux passe de 40 % à 50 %, il augmente de 10 points de pourcentage, mais l'augmentation relative est de 25 % (saisissez 40 et 50 en mode augmentation). Les rapports mélangent souvent les deux notions ; précisez donc laquelle vous voulez dire.",
      ],
    },
    {
      heading: "Cas limites",
      bullets: [
        "Une valeur de départ de 0 n'a pas de variation en pourcentage définie : l'outil n'affiche donc aucun résultat.",
        "Les résultats sont arrondis à deux décimales pour l'affichage : un tiers de 100 s'affiche 33.33.",
        "Les valeurs négatives suivent la même algèbre ; elles ne sont pas interprétées sur le plan financier.",
      ],
    },
  ],

  passwordgenerator: [
    {
      heading: "Ce que valent la longueur et les types de caractères",
      paragraphs: [
        "Un mot de passe généré de façon aléatoire possède environ longueur × log2(taille du jeu) bits d'entropie. Les jeux de cet outil comptent 26 lettres majuscules, 26 lettres minuscules, 10 chiffres et 29 symboles. Les valeurs ci-dessous constituent la borne supérieure de cette formule ; comme l'outil garantit au moins un caractère de chaque type sélectionné, les valeurs réelles sont légèrement inférieures (pour les quatre types : 50.98 bits à 8 caractères, 77.61 à 12 et 103.86 à 16, par dénombrement exact).",
      ],
      table: {
        head: ["Caractères utilisés (taille du jeu)", "8", "12", "16", "24"],
        rows: [
          ["Chiffres uniquement (10)", "26.6 bits", "39.9 bits", "53.2 bits", "79.7 bits"],
          ["Minuscules uniquement (26)", "37.6 bits", "56.4 bits", "75.2 bits", "112.8 bits"],
          ["Lettres, majuscules et minuscules (52)", "45.6 bits", "68.4 bits", "91.2 bits", "136.8 bits"],
          ["Lettres et chiffres (62)", "47.6 bits", "71.5 bits", "95.3 bits", "142.9 bits"],
          ["Les quatre types (91)", "52.1 bits", "78.1 bits", "104.1 bits", "156.2 bits"],
        ],
      },
      note: "L'entropie décrit une génération aléatoire. Elle ne dit rien des mots de passe qu'une personne invente, qui sont beaucoup plus faciles à deviner.",
    },
    {
      heading: "La longueur l'emporte sur la variété",
      paragraphs: [
        "Dix caractères issus des quatre types donnent 65.1 bits, alors que 16 lettres minuscules seules donnent 75.2 bits et 16 lettres avec des chiffres donnent 95.3 bits. Lorsqu'un site limite les symboles, décochez-les et ajoutez de la longueur plutôt que de raccourcir le mot de passe.",
      ],
    },
    {
      heading: "Comment le mot de passe est créé",
      bullets: [
        "Il est généré dans votre navigateur avec la fonction Web Crypto getRandomValues ; rien n'est envoyé à un serveur.",
        "Les valeurs qui favoriseraient certains caractères (biais du modulo) sont rejetées et retirées de nouveau, puis les caractères sont mélangés afin que ceux qui sont garantis n'occupent pas des positions fixes.",
        "La longueur est comprise entre 8 et 64 caractères, et au moins un type de caractères doit être sélectionné, faute de quoi aucun mot de passe n'est affiché.",
        "La copie place le mot de passe dans le presse-papiers de votre appareil. Videz-le, ne réutilisez pas le mot de passe et conservez-le dans un gestionnaire de mots de passe.",
      ],
    },
  ],

  dummytext: [
    {
      heading: "Comment les paragraphes sont construits",
      paragraphs: [
        "Chaque paragraphe prend successivement 4, 5 ou 6 phrases dans une liste fixe propre à la langue choisie, en démarrant à chaque fois 3 phrases plus loin. Le résultat est déterministe : un même nombre de paragraphes donne toujours le même texte, et il ne s'agit pas d'une rédaction originale.",
        "La liste étant courte, le texte se répète. L'anglais compte 8 phrases et se répète tous les 24 paragraphes, le coréen en compte 9 et se répète tous les 3, et le japonais, le français, le chinois, l'espagnol, l'allemand, le portugais et l'arabe en comptent 6 et se répètent tous les 6. Le paragraphe 4 du texte coréen est identique au paragraphe 1.",
      ],
      table: {
        head: ["Langue", "Phrases dans la liste", "Paragraphes avant répétition"],
        rows: [
          ["Anglais", "8", "24"],
          ["Coréen", "9", "3"],
          ["Japonais, français, chinois (les deux), espagnol, allemand, portugais, arabe", "6", "6"],
        ],
      },
    },
    {
      heading: "Bons usages et limites",
      bullets: [
        "Tests de mise en page : vérifiez le retour à la ligne, la hauteur des cartes et la troncature avec 1 à 100 paragraphes.",
        "Les textes CJK et latins ne passent pas à la ligne de la même manière ; testez donc la langue que votre maquette affichera réellement.",
        "Des paragraphes répétés peuvent masquer un problème de mise en page que révélerait un texte varié ; mêlez du contenu réel pour les vérifications finales.",
        "Certains jeux de phrases non anglais sont des extraits de déclarations et de constitutions. Ce sont des échantillons, et non des conseils juridiques ni des articles publiables.",
        "Supprimez le texte factice avant la publication ; les pages de remplissage sont un contenu de faible valeur pour les moteurs de recherche et pour les lecteurs.",
      ],
    },
  ],

  caseconverter: [
    {
      heading: "Ce que fait chaque bouton sur du texte réel",
      table: {
        head: ["Entrée", "MAJUSCULES", "minuscules", "Format titre"],
        rows: [
          ["iPhone 15 and NASA", "IPHONE 15 AND NASA", "iphone 15 and nasa", "Iphone 15 And Nasa"],
          ["mother-in-law o'brien", "MOTHER-IN-LAW O'BRIEN", "mother-in-law o'brien", "Mother-in-law O'brien"],
          ["hello ⏎ world", "HELLO ⏎ WORLD", "hello ⏎ world", "Hello ⏎ World"],
          ["straße (page allemande)", "STRASSE", "straße", "Straße"],
        ],
      },
      note: "⏎ indique un saut de ligne ; la ligne en allemand est convertie selon les règles de l'allemand sur la page allemande.",
    },
    {
      heading: "Le format titre n'est pas le style des titres éditoriaux",
      paragraphs: [
        "Ici, le format titre (Title Case) met tout en minuscules, puis met en majuscule la première lettre après chaque espace, tabulation ou saut de ligne. Il ne laisse pas en minuscules les petits mots comme « and » ou « of », il écrase la casse des marques et des sigles (iPhone devient Iphone, NASA devient Nasa), et il ne met pas de majuscule après les traits d'union ou les apostrophes. Vérifiez à la main les noms, les sigles et les mots composés avec trait d'union.",
      ],
    },
    {
      heading: "Règles de langue et limites",
      bullets: [
        "La conversion applique les règles de la langue de la page : sur une page en allemand, ß devient SS, ce qui allonge le texte.",
        "Le coréen, le chinois et le japonais n'ont pas de casse et restent inchangés.",
        "Le résultat remplace le texte de la zone de saisie et il n'existe pas d'annulation ; copiez d'abord l'original.",
      ],
    },
  ],

  screenlamp: [
    {
      heading: "Couleurs et usages",
      paragraphs: [
        "L'outil remplit la page d'une seule couleur unie. Il propose dix couleurs prédéfinies (blanc #ffffff, chaud #fff3c4, rouge #ef4444, orange #f97316, jaune #facc15, vert #22c55e, bleu #3b82f6, indigo #4f46e5, violet #8b5cf6 et noir #000000) et un sélecteur de couleur pour toute autre valeur. Votre dernière couleur est mémorisée dans ce navigateur.",
      ],
    },
    {
      heading: "Usages pratiques",
      bullets: [
        "Contrôle de l'écran : parcourez le blanc, le noir, le rouge, le vert et le bleu en plein écran. Un point lumineux sur fond noir ou un point sombre sur fond blanc peut révéler un pixel bloqué, et des zones irrégulières sur fond blanc peuvent trahir des différences de rétroéclairage.",
        "Lumière d'appoint douce : un écran chaud ou blanc près de votre visage peut apporter un peu de lumière lors d'un appel vidéo. La couleur de la page ne modifie pas la luminosité matérielle ; utilisez la commande de luminosité de l'appareil.",
        "Veilleuse tamisée : une couleur chaude et sombre avec la luminosité de l'appareil réduite, si l'écran est la seule option.",
      ],
    },
    {
      heading: "Limites",
      bullets: [
        "Ce n'est ni une source de lumière calibrée, ni un colorimètre, ni une lampe de sécurité, ni un dispositif médical.",
        "La même couleur paraît différente selon les écrans et les réglages de couleur. Le noir d'un écran OLED éteint ces pixels, mais sur un écran LCD le rétroéclairage reste visible.",
        "Les navigateurs n'autorisent le plein écran qu'après un clic ou un toucher ; appuyez sur Échap pour le quitter.",
        "Ne comptez pas sur un écran comme unique source de lumière lorsque la sécurité est en jeu.",
      ],
    },
  ],

  signboard: [
    {
      heading: "Réglages et leur rôle",
      bullets: [
        "Taille du texte de 24 à 180 px, couleur du texte et couleur de fond, et quatre effets : fixe, défilement, clignotement et lueur.",
        "Le défilement déplace le message en continu ; utilisez-le pour les messages plus longs que la largeur de l'écran. Les messages courts se lisent plus facilement en mode fixe.",
        "Le clignotement alterne entre une opacité totale et 18 % toutes les 0.7 secondes (cycle de 1.4 seconde), bien en dessous de trois flashs par seconde. Évitez les flashs rapides pour toute personne qui y est sensible.",
        "La lueur ajoute un halo doux de la couleur du texte et convient aux grands textes sur fond sombre.",
      ],
    },
    {
      heading: "Associations de couleurs lisibles",
      paragraphs: [
        "Les rapports de contraste ci-dessous ont été calculés avec la formule WCAG à partir des couleurs prédéfinies exactes. Pour un texte qui doit être lu à distance, 7:1 ou plus est un objectif sûr ; 4.5:1 est le minimum habituel pour un texte normal.",
      ],
      table: {
        head: ["Texte sur fond", "Rapport de contraste"],
        rows: [
          ["Blanc #ffffff sur noir #000000", "21.0 : 1"],
          ["Jaune #facc15 sur noir", "13.7 : 1"],
          ["Vert #22c55e sur noir", "9.2 : 1"],
          ["Indigo #4f46e5 sur blanc", "6.3 : 1"],
          ["Rouge #ef4444 sur noir", "5.6 : 1"],
          ["Bleu #3b82f6 sur blanc", "3.7 : 1"],
          ["Jaune #facc15 sur blanc", "1.5 : 1"],
        ],
      },
    },
    {
      heading: "Avant de vous y fier",
      bullets: [
        "Testez à la distance de lecture réelle sur l'appareil réel ; une taille qui paraît grande sur un ordinateur portable peut être trop petite à l'autre bout d'une pièce.",
        "Le message et les réglages sont enregistrés dans le localStorage de ce navigateur et ne sont pas envoyés à Apps24. Sur un appareil partagé, effacez ensuite le message.",
        "Il s'agit uniquement d'un affichage à l'écran. Il ne pilote pas de matériel LED externe et ne certifie pas une signalétique publique.",
      ],
    },
  ],
};

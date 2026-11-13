import type { DeepContent } from "./types";

/**
 * Deutsche Fassung von en.ts. Zahlen, Formeln, Einheiten, Farbwerte und Codezeichenfolgen sind unverändert
 * aus dem Englischen übernommen, damit die geprüften Werte identisch bleiben.
 */
export const DEEP_DE: DeepContent = {
  qrgenerator: [
    {
      heading: "Textformate, die Handykameras erkennen",
      paragraphs: [
        "Dieses Tool kodiert genau den Text, den Sie eingeben; es erstellt keine Formulare. Eine Handykamera entscheidet anhand des Präfixes am Textanfang, was zu tun ist. Ein WLAN-Code funktioniert also nur, wenn der Text dem WLAN-Format folgt. Jedes der folgenden Beispiele wurde vom Encoder dieser Website erzeugt und von einem Software-Decoder (ZXing-C++ 3.1.1) wieder in identischen Text zurückgelesen.",
      ],
      table: {
        head: ["Zweck", "Einzugebender Text"],
        rows: [
          ["Website", "https://example.com"],
          ["WLAN (WPA)", "WIFI:T:WPA;S:Cafe Guest;P:sunny-2026;;"],
          ["WLAN, verstecktes Netzwerk", "WIFI:T:WPA;S:HiddenNet;P:abc12345;H:true;;"],
          ["E-Mail", "mailto:support@apps24.io?subject=Hello"],
          ["Telefonanruf", "tel:+821012345678"],
          ["SMS", "SMSTO:+821012345678:Hello"],
          ["Kartenstandort", "geo:37.5665,126.9780"],
          ["Kontaktkarte", "BEGIN:VCARD ⏎ VERSION:3.0 ⏎ N:Kim;Min;;; ⏎ FN:Min Kim ⏎ TEL;TYPE=CELL:+821012345678 ⏎ EMAIL:min@example.com ⏎ END:VCARD"],
        ],
      },
      note: "⏎ steht für einen Zeilenumbruch; geben Sie jedes vCard-Feld in eine eigene Zeile ein. Der Softwaretest verwendete ausschließlich digitale Bilder. Wir haben weder gedruckte Codes gescannt noch bestimmte Handymodelle getestet, und wie ein Handy auf einen Code reagiert, hängt von seiner Kamera-App ab.",
    },
    {
      heading: "Sonderzeichen in WLAN-Codes maskieren",
      paragraphs: [
        "In einem WIFI:-Text trennen die Zeichen \\ ; , : und \" Felder voneinander. Ein Netzwerkname oder Passwort, das eines davon enthält, braucht deshalb vor jedem dieser Zeichen einen Backslash. Ein Netzwerk namens Cafe;Guest mit dem Passwort pa:ss\\word wird als WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;; eingegeben, und genau dieser Text wurde in unserem Test unverändert zurückgelesen.",
        "Verwenden Sie T:nopass für offene Netzwerke und ergänzen Sie H:true nur bei versteckten Netzwerken. Wenn ein Handy sich nicht verbinden will, prüfen Sie zuerst das Passwort Zeichen für Zeichen, denn ein falsches Passwort und eine falsche Maskierung sehen für die Nutzer gleich aus.",
      ],
    },
    {
      heading: "Wie viel Text hineinpasst und wie er das Muster verändert",
      paragraphs: [
        "Mit diesem Generator gemessen: bis zu 2,331 einbyteige Zeichen (ASCII-Buchstaben), 1,165 lateinische Buchstaben mit Akzent, 777 koreanische Silben oder 582 Emojis, weil sie in UTF-8 1, 2, 3 bzw. 4 Bytes belegen. Das Formular akzeptiert bis zu 4,000 Zeichen, aber Text jenseits dieser Grenzen führt zu einem Generierungsfehler.",
        "Längerer Text bedeutet ein dichteres Muster. Ein Text mit 20 Zeichen ergab einen Code mit 25 × 25 Modulen, 38 Zeichen 29 × 29, 100 Zeichen 41 × 41 und 300 Zeichen 69 × 69. Bei gleicher Druckgröße sind dichtere Module kleiner. Kürzen Sie daher URLs und lassen Sie optionale Felder weg, bevor Sie die Druckgröße verkleinern. Die PNG-Datei wird mit 6 Pixeln pro Modul und einer Ruhezone von 4 Modulen gezeichnet.",
      ],
    },
    {
      heading: "Vor dem Drucken oder Veröffentlichen",
      bullets: [
        "Scannen Sie die heruntergeladene PNG-Datei selbst, nicht die Vorschau, mit mindestens zwei verschiedenen Handys.",
        "Halten Sie dunkle Module auf hellem Hintergrund und beschneiden Sie die Ruhezone nicht.",
        "Ein QR-Code speichert Text, keine Weiterleitung: Das Ziel lässt sich später nicht ändern, und ein toter Link bleibt tot.",
        "Testen Sie in der tatsächlichen Druckgröße und aus der tatsächlichen Betrachtungsentfernung.",
      ],
    },
  ],

  pixelconverter: [
    {
      heading: "Umrechnungsbeispiele",
      paragraphs: [
        "Alle Zeilen verwenden die Standardwerte dieses Tools: 16 px für Root- und aktuelle Schriftgröße, 16 px als Prozentbasis und einen Viewport von 1440 × 900. Passen Sie die Bezugsfelder an Ihre eigene Seite an, bevor Sie sich auf ein Ergebnis verlassen.",
      ],
      table: {
        head: ["Eingabe", "Ergebnis", "Begründung"],
        rows: [
          ["24 px → rem", "1.5 rem", "24 ÷ 16 Root-Schriftgröße"],
          ["20 px → em", "1.25 em", "20 ÷ 16 aktuelle Schriftgröße"],
          ["8 px → %", "50 %", "8 ÷ 16 Prozentbasis"],
          ["360 px → vw", "25 vw", "360 ÷ (1440 ÷ 100)"],
          ["450 px → vh", "50 vh", "450 ÷ (900 ÷ 100)"],
          ["12 pt → px", "16 px", "1 pt = 96 ÷ 72 CSS px"],
          ["1 in → px", "96 px", "1 CSS-Zoll = 96 CSS px"],
          ["10 mm → px", "37.7953 px", "10 × 96 ÷ 25.4, auf 4 Nachkommastellen angezeigt"],
          ["24 px → rem mit 10 px Root", "2.4 rem", "24 ÷ 10"],
        ],
      },
    },
    {
      heading: "rem, em und Prozent verhalten sich unterschiedlich",
      paragraphs: [
        "rem bezieht sich auf die Schriftgröße des Wurzelelements, ein Wert bedeutet also überall auf der Seite dasselbe. em bezieht sich auf die Schriftgröße des Elements, in dem es verwendet wird, und verschachtelte Elemente multiplizieren sich: Eine Box mit 1.25 em in einer weiteren Box mit 1.25 em ist 1.5625-mal so groß wie die Basisgröße. Verwenden Sie rem für Abstände und Schrift, die der Textgrößeneinstellung im Browser der Lesenden folgen sollen, und em nur, wenn eine Komponente mit ihrem eigenen Text skalieren soll.",
        "Ein beliebter Trick setzt das Wurzelelement auf 62.5 %, sodass 1 rem bei der Browser-Standardgröße von 16 px genau 10 px entspricht. Die Umrechnungstabelle ändert sich dann (24 px = 2.4 rem); deshalb lässt sich das Root-Feld hier bearbeiten.",
      ],
    },
    {
      heading: "Grenzen, die Sie kennen sollten",
      bullets: [
        "CSS-Zoll, cm, mm und pt sind feste Bruchteile von 96 px. Sie stimmen nicht garantiert mit der physischen Länge auf einem Bildschirm oder einem Ausdruck überein.",
        "vw schließt in vielen Desktop-Browsern die Breite einer sichtbaren vertikalen Scrollleiste ein, sodass 100 vw breiter sein kann als der sichtbare Bereich.",
        "Mobile Browser mit einklappbarer Adressleiste verändern die sichtbare Höhe; dieses Tool rechnet vh um, nicht dvh, svh oder lvh.",
        "Leere, null oder negative Bezugswerte fallen auf die oben genannten Standardwerte zurück, anstatt ein Ergebnis zu erzeugen.",
      ],
    },
  ],

  unitconverter: [
    {
      heading: "Geprüfte Beispiele",
      table: {
        head: ["Umrechnung", "Ergebnis", "Hinweis"],
        rows: [
          ["1 US-Gallone → Liter", "3.785411784 L", "US-Flüssigkeitsgallone"],
          ["1 UK-Gallone → Liter", "4.54609 L", "Imperiale Gallone, etwa 20.1 % größer"],
          ["5 US-Gallonen → Liter", "18.92705892 L", "5 UK-Gallonen wären 22.73045 L"],
          ["1 US-Cup → Milliliter", "236.5882365 mL", "Nicht die metrische Tasse mit 250 mL"],
          ["98.6 °F → °C", "37 °C", "(98.6 − 32) × 5 ÷ 9"],
          ["0 °C → °F", "32 °F", "(0 × 9 ÷ 5) + 32"],
          ["−40 °C → °F", "−40 °F", "Die beiden Skalen treffen sich bei −40"],
          ["0 K → °C", "−273.15 °C", "Absoluter Nullpunkt"],
          ["30 pyeong → m²", "99.17355 m²", "1 pyeong = 3.305785 m²"],
          ["1 Acre → Hektar", "0.4047 ha", "1 Acre = 4,046.8564224 m²"],
        ],
      },
    },
    {
      heading: "Temperatur ist kein Verhältnis",
      paragraphs: [
        "Länge, Masse, Fläche und Volumen werden durch Multiplikation mit einem festen Verhältnis umgerechnet. Bei Temperaturen kommt zusätzlich ein Offset hinzu: 10 °C sind 50 °F, während eine Temperaturdifferenz von 10 °C 18 °F entspricht. Rechnen Sie eine gemessene Temperatur mit diesem Tool um; bei einer Differenz multiplizieren Sie nur mit 9 ÷ 5.",
      ],
    },
    {
      heading: "Zeiteinheiten haben feste Längen",
      paragraphs: [
        "Ein Jahr ist auf 31,556,952 Sekunden (365.2425 Tage) festgelegt und ein Monat auf 2,629,746 Sekunden (etwa 30.4369 Tage), ein Zwölftel dieses Jahres. Das sind Durchschnittswerte, keine Kalendermonate, daher kann das Tool Ihnen nicht die Anzahl der Tage zwischen zwei Daten nennen.",
        "Wählen Sie 0, 2, 4 oder 6 Nachkommastellen. Bei 0 Nachkommastellen werden nur ganze Zahlen angezeigt. Prüfen Sie daher die benötigten Stellen, bevor Sie ein kleines Ergebnis kopieren.",
      ],
    },
  ],

  percentagecalculator: [
    {
      heading: "Die vier Modi mit Rechenbeispielen",
      table: {
        head: ["Modus", "Eingabe", "Formel", "Ergebnis"],
        rows: [
          ["Prozent von einem Wert", "250 und 20 %", "250 × 20 ÷ 100", "50"],
          ["Zunahme", "80 → 100", "(100 − 80) ÷ 80 × 100", "25.00 %"],
          ["Abnahme", "100 → 80", "(100 − 80) ÷ 100 × 100", "20.00 %"],
          ["Rabatt", "80 mit 30 % Rabatt", "80 − 80 × 30 ÷ 100", "56 (24 gespart)"],
        ],
      },
    },
    {
      heading: "Warum Zunahme und Abnahme nicht symmetrisch sind",
      paragraphs: [
        "Ein Anstieg von 100 auf 125 sind +25 %, die Rückkehr von 125 auf 100 aber −20 %, weil sich der Prozentsatz immer auf den Ausgangswert bezieht. Deshalb muss ein Preis, der um 25 % steigt, um 20 % fallen, um wieder auf den alten Wert zu kommen.",
        "Gestaffelte Rabatte addieren sich nicht. 20 % Rabatt auf 100 ergeben 80, und weitere 10 % darauf ergeben 72, also insgesamt 28 % Rabatt, nicht 30 %. Führen Sie den Rabattmodus zweimal aus und nehmen Sie das erste Ergebnis als Ausgangspreis für den zweiten Durchgang.",
      ],
    },
    {
      heading: "Prozent versus Prozentpunkte",
      paragraphs: [
        "Steigt ein Satz von 40 % auf 50 %, hat er um 10 Prozentpunkte zugenommen, die relative Zunahme beträgt aber 25 % (geben Sie dazu im Modus Zunahme 40 und 50 ein). Berichte vermischen beides oft, nennen Sie deshalb ausdrücklich, was Sie meinen.",
      ],
    },
    {
      heading: "Randfälle",
      bullets: [
        "Bei einem Ausgangswert von 0 ist keine prozentuale Änderung definiert, daher zeigt das Tool kein Ergebnis.",
        "Ergebnisse werden für die Anzeige auf zwei Nachkommastellen gerundet: Ein Drittel von 100 wird als 33.33 angezeigt.",
        "Negative Werte folgen derselben Algebra; sie werden nicht finanziell interpretiert.",
      ],
    },
  ],

  passwordgenerator: [
    {
      heading: "Was Länge und Zeichentypen bringen",
      paragraphs: [
        "Ein zufällig erzeugtes Passwort hat etwa Länge × log2(Größe des Zeichenvorrats) Bit Entropie. Die Zeichenvorräte in diesem Tool sind 26 Großbuchstaben, 26 Kleinbuchstaben, 10 Ziffern und 29 Symbole. Die Werte unten sind die Obergrenze dieser Formel; da das Tool mindestens ein Zeichen jedes ausgewählten Typs garantiert, liegen die tatsächlichen Werte etwas niedriger (für alle vier Typen: 50.98 Bit bei 8, 77.61 bei 12 und 103.86 bei 16 Zeichen, durch exaktes Abzählen).",
      ],
      table: {
        head: ["Verwendete Zeichen (Größe des Zeichenvorrats)", "8", "12", "16", "24"],
        rows: [
          ["Nur Ziffern (10)", "26.6 Bit", "39.9 Bit", "53.2 Bit", "79.7 Bit"],
          ["Nur Kleinbuchstaben (26)", "37.6 Bit", "56.4 Bit", "75.2 Bit", "112.8 Bit"],
          ["Buchstaben, Groß- und Kleinschreibung (52)", "45.6 Bit", "68.4 Bit", "91.2 Bit", "136.8 Bit"],
          ["Buchstaben und Ziffern (62)", "47.6 Bit", "71.5 Bit", "95.3 Bit", "142.9 Bit"],
          ["Alle vier Typen (91)", "52.1 Bit", "78.1 Bit", "104.1 Bit", "156.2 Bit"],
        ],
      },
      note: "Die Entropie beschreibt zufällige Erzeugung. Über Passwörter, die sich ein Mensch ausdenkt, sagt sie nichts aus; diese sind deutlich leichter zu erraten.",
    },
    {
      heading: "Länge schlägt Vielfalt",
      paragraphs: [
        "Zehn Zeichen aus allen vier Typen ergeben 65.1 Bit, 16 Kleinbuchstaben allein dagegen 75.2 Bit und 16 Buchstaben mit Ziffern 95.3 Bit. Wenn eine Website Symbole einschränkt, entfernen Sie das Häkchen bei den Symbolen und erhöhen Sie stattdessen die Länge, statt das Passwort zu kürzen.",
      ],
    },
    {
      heading: "Wie das Passwort erzeugt wird",
      bullets: [
        "Es wird in Ihrem Browser mit der Web-Crypto-Funktion getRandomValues erzeugt; nichts wird an einen Server gesendet.",
        "Werte, die manche Zeichen bevorzugen würden (Modulo-Bias), werden verworfen und neu gezogen. Danach werden die Zeichen gemischt, damit die garantierten nicht an festen Positionen stehen.",
        "Die Länge reicht von 8 bis 64 Zeichen, und mindestens ein Zeichentyp muss ausgewählt sein, sonst wird kein Passwort angezeigt.",
        "Beim Kopieren landet das Passwort in der Zwischenablage Ihres Geräts. Leeren Sie sie, verwenden Sie das Passwort nicht erneut und speichern Sie es in einem Passwortmanager.",
      ],
    },
  ],

  dummytext: [
    {
      heading: "Wie die Absätze aufgebaut werden",
      paragraphs: [
        "Jeder Absatz nimmt der Reihe nach 4, 5 oder 6 Sätze aus einer festen Liste der gewählten Sprache und beginnt dabei jedes Mal 3 Sätze weiter hinten. Die Ausgabe ist deterministisch: Dieselbe Anzahl ergibt immer denselben Text, und es handelt sich nicht um einen einzigartigen Text.",
        "Weil die Liste kurz ist, wiederholt sich der Text. Englisch hat 8 Sätze und wiederholt sich alle 24 Absätze, Koreanisch hat 9 und wiederholt sich alle 3, und Japanisch, Französisch, Chinesisch, Spanisch, Deutsch, Portugiesisch und Arabisch haben 6 und wiederholen sich alle 6. Absatz 4 der koreanischen Ausgabe entspricht Absatz 1.",
      ],
      table: {
        head: ["Sprache", "Sätze in der Liste", "Absätze bis zur Wiederholung"],
        rows: [
          ["Englisch", "8", "24"],
          ["Koreanisch", "9", "3"],
          ["Japanisch, Französisch, Chinesisch (beide), Spanisch, Deutsch, Portugiesisch, Arabisch", "6", "6"],
        ],
      },
    },
    {
      heading: "Sinnvolle Einsatzzwecke und Grenzen",
      bullets: [
        "Layouttests: Prüfen Sie Zeilenumbruch, Kartenhöhen und Kürzungen mit 1 bis 100 Absätzen.",
        "CJK- und lateinischer Text brechen unterschiedlich um, testen Sie also die Sprache, die Ihr Design tatsächlich zeigen wird.",
        "Wiederholte Absätze können ein Layoutproblem verbergen, das abwechslungsreicher Text aufdecken würde; mischen Sie für die Endkontrolle echte Inhalte ein.",
        "Einige nicht englische Textsets sind Auszüge aus Erklärungen und Verfassungen. Sie sind Beispiele, keine Rechtsberatung und keine veröffentlichungsreifen Artikel.",
        "Entfernen Sie Platzhaltertext vor der Veröffentlichung; Seiten mit Fülltext sind für Suchmaschinen und Lesende minderwertiger Inhalt.",
      ],
    },
  ],

  caseconverter: [
    {
      heading: "Was jede Schaltfläche mit echtem Text macht",
      table: {
        head: ["Eingabe", "GROSSBUCHSTABEN", "kleinbuchstaben", "Titelschreibweise"],
        rows: [
          ["iPhone 15 and NASA", "IPHONE 15 AND NASA", "iphone 15 and nasa", "Iphone 15 And Nasa"],
          ["mother-in-law o'brien", "MOTHER-IN-LAW O'BRIEN", "mother-in-law o'brien", "Mother-in-law O'brien"],
          ["hello ⏎ world", "HELLO ⏎ WORLD", "hello ⏎ world", "Hello ⏎ World"],
          ["straße (deutsche Seite)", "STRASSE", "straße", "Straße"],
        ],
      },
      note: "⏎ steht für einen Zeilenumbruch; die deutsche Zeile wird auf der deutschen Seite nach deutschen Regeln umgewandelt.",
    },
    {
      heading: "Titelschreibweise ist kein Überschriftenstil",
      paragraphs: [
        "Die Titelschreibweise (Title Case) wandelt hier zunächst alles in Kleinbuchstaben um und schreibt dann den ersten Buchstaben nach jedem Leerzeichen, Tabulator oder Zeilenumbruch groß. Kleine Wörter wie „and“ oder „of“ bleiben nicht kleingeschrieben, die Schreibung von Marken und Akronymen wird eingeebnet (iPhone wird zu Iphone, NASA wird zu Nasa), und nach Bindestrichen oder Apostrophen wird nicht großgeschrieben. Prüfen Sie Namen, Akronyme und Wörter mit Bindestrich von Hand.",
      ],
    },
    {
      heading: "Sprachregeln und Grenzen",
      bullets: [
        "Die Umwandlung folgt den Regeln der Seitensprache, daher wandelt eine deutsche Seite ß in SS um, wodurch der Text länger wird.",
        "Koreanisch, Chinesisch und Japanisch kennen keine Groß- und Kleinschreibung und bleiben unverändert.",
        "Das Ergebnis ersetzt den Text im Feld, und es gibt kein Rückgängig; kopieren Sie zuerst das Original.",
      ],
    },
  ],

  screenlamp: [
    {
      heading: "Farben und wofür sie taugen",
      paragraphs: [
        "Das Tool füllt die Seite mit einer einzigen Vollfarbe. Es gibt zehn Voreinstellungen (Weiß #ffffff, Warm #fff3c4, Rot #ef4444, Orange #f97316, Gelb #facc15, Grün #22c55e, Blau #3b82f6, Indigo #4f46e5, Violett #8b5cf6 und Schwarz #000000) und eine Farbauswahl für jeden anderen Wert. Ihre zuletzt gewählte Farbe wird in diesem Browser gespeichert.",
      ],
    },
    {
      heading: "Praktische Einsatzmöglichkeiten",
      bullets: [
        "Bildschirmprüfung: Schalten Sie im Vollbild nacheinander Weiß, Schwarz, Rot, Grün und Blau durch. Ein heller Punkt auf Schwarz oder ein dunkler Punkt auf Weiß kann auf einen defekten Pixel hinweisen, und ungleichmäßige Flecken auf Weiß können Unterschiede in der Hintergrundbeleuchtung zeigen.",
        "Weiches Fülllicht: Ein warmer oder weißer Bildschirm nahe am Gesicht kann bei einem Videoanruf etwas zusätzliches Licht liefern. Die Seitenfarbe ändert nicht die Helligkeit der Hardware; verwenden Sie dafür die Helligkeitsregelung des Geräts.",
        "Gedimmtes Nachtlicht: eine dunkle, warme Farbe bei verringerter Gerätehelligkeit, wenn der Bildschirm die einzige Möglichkeit ist.",
      ],
    },
    {
      heading: "Grenzen",
      bullets: [
        "Es ist weder eine kalibrierte Lichtquelle noch ein Kolorimeter, ein Sicherheitslicht oder ein Medizinprodukt.",
        "Dieselbe Farbe sieht auf verschiedenen Bildschirmen und bei unterschiedlichen Farbeinstellungen verschieden aus. Schwarz schaltet auf einem OLED-Display diese Pixel aus, auf einem LCD bleibt die Hintergrundbeleuchtung dagegen sichtbar.",
        "Browser erlauben den Vollbildmodus erst nach einem Klick oder Tippen; mit Esc verlassen Sie ihn.",
        "Verlassen Sie sich dort, wo es auf Sicherheit ankommt, nicht auf einen Bildschirm als einzige Lichtquelle.",
      ],
    },
  ],

  signboard: [
    {
      heading: "Einstellungen und ihre Wirkung",
      bullets: [
        "Textgröße von 24 bis 180 px, Textfarbe und Hintergrundfarbe sowie vier Effekte: statisch, Laufschrift, Blinken und Leuchten.",
        "Die Laufschrift verschiebt die Nachricht kontinuierlich, verwenden Sie sie daher für Nachrichten, die länger als die Bildschirmbreite sind. Kurze Nachrichten lassen sich statisch leichter lesen.",
        "Blinken wechselt alle 0.7 Sekunden zwischen voller und 18 % Deckkraft (Zyklus von 1.4 Sekunden) und liegt damit deutlich unter drei Blitzen pro Sekunde. Vermeiden Sie schnelles Blinken für Personen, die darauf empfindlich reagieren.",
        "Der Leuchteffekt fügt einen weichen Lichtschein in der Textfarbe hinzu und eignet sich für große Schrift auf dunklem Hintergrund.",
      ],
    },
    {
      heading: "Gut lesbare Farbpaare",
      paragraphs: [
        "Die folgenden Kontrastverhältnisse wurden mit der WCAG-Formel aus den exakten Farben der Voreinstellungen berechnet. Für Text, der aus der Entfernung gelesen werden muss, ist 7:1 oder mehr ein sicheres Ziel; 4.5:1 ist das übliche Minimum für normalen Text.",
      ],
      table: {
        head: ["Text auf Hintergrund", "Kontrastverhältnis"],
        rows: [
          ["Weiß #ffffff auf Schwarz #000000", "21.0 : 1"],
          ["Gelb #facc15 auf Schwarz", "13.7 : 1"],
          ["Grün #22c55e auf Schwarz", "9.2 : 1"],
          ["Indigo #4f46e5 auf Weiß", "6.3 : 1"],
          ["Rot #ef4444 auf Schwarz", "5.6 : 1"],
          ["Blau #3b82f6 auf Weiß", "3.7 : 1"],
          ["Gelb #facc15 auf Weiß", "1.5 : 1"],
        ],
      },
    },
    {
      heading: "Bevor Sie sich darauf verlassen",
      bullets: [
        "Testen Sie aus dem tatsächlichen Betrachtungsabstand auf dem tatsächlichen Gerät; eine Größe, die auf einem Laptop groß wirkt, kann quer durch einen Raum zu klein sein.",
        "Die Nachricht und die Einstellungen werden im localStorage dieses Browsers gespeichert und nicht an Apps24 gesendet. Löschen Sie die Nachricht auf einem gemeinsam genutzten Gerät anschließend.",
        "Es ist nur eine Bildschirmanzeige. Es steuert keine externe LED-Hardware und zertifiziert keine öffentliche Beschilderung.",
      ],
    },
  ],
};

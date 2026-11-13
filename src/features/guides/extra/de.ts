import type { ExtraArticles } from "./types";

export const EXTRA_DE: ExtraArticles = {
  "percent-points-vs-change": {
    title: "Prozentuale Änderung oder Prozentpunkte: Warum 20 % Rabatt und dann 10 % Rabatt nicht 30 % ergeben",
    intro: "Berichte vermischen drei verschiedene Dinge: eine Änderung in Prozentpunkten, eine relative Änderung in Prozent und nacheinander angewendete Prozentsätze. Wir haben jeden Fall mit den Prozentformeln von Apps24 durchgerechnet, damit sich die Zahlen von Hand nachprüfen lassen.",
    interpretation: "Eine Quote, die von 40 % auf 50 % steigt, wächst um 10 Prozentpunkte, bezogen auf den Ausgangswert aber um 25 %: (50 − 40) ÷ 40 × 100. Ein Preis, der von 100 auf 125 steigt, liegt 25 % höher; der Weg zurück von 125 auf 100 ist ein Minus von 20 %, weil jede Änderung an ihrem eigenen Ausgangswert gemessen wird. 20 % Rabatt auf 100 ergeben 80, weitere 10 % Rabatt ergeben 72 – insgesamt 28 % Rabatt, nicht 30 %.",
    action: "1. Sagen Sie dazu, ob Prozentpunkte oder Prozent gemeint sind. 2. Wenden Sie mehrere Änderungen nacheinander an und nehmen Sie jedes Ergebnis als neuen Ausgangswert. 3. Berechnen Sie eine Rückkehr vom neuen Wert aus, nicht vom alten. 4. Runden Sie erst am Ende; das Tool zeigt zwei Nachkommastellen.",
    limit: "Dies sind Rechenbeispiele, die mit den Formeln des Tools geprüft wurden, keine Finanzberatung. Für den Ausgangswert 0 gibt es keine prozentuale Änderung; das Tool zeigt dann kein Ergebnis. Die Rundung auf zwei Nachkommastellen kann kleine Unterschiede verdecken.",
  },
  "css-units-rem-em": {
    title: "px, rem und em: Warum 24 px 1.5 rem sind und verschachtelte em immer weiter wachsen",
    intro: "Ein Umrechner liefert nur dann die richtige Zahl, wenn klar ist, auf welche Größe sich jede Einheit bezieht. Wir haben dieselben Werte mit Apps24 umgerechnet, einmal mit den Standardwerten und einmal mit geänderter Root-Schriftgröße, und verschachtelte em von Hand berechnet.",
    interpretation: "Bei einer Root-Schriftgröße von 16 px sind 24 px gleich 24 ÷ 16 = 1.5 rem; bei 10 px sind dieselben 24 px 2.4 rem. rem bezieht sich immer auf das Root-Element, em dagegen auf die Schriftgröße des Elements selbst. Ein Kasten mit 1.25 em in einem anderen Kasten mit 1.25 em ist deshalb 1.25 × 1.25 = 1.5625-mal so groß wie die Basisgröße. Bei einem 1440 px breiten Viewport entsprechen 360 px 25 vw, und 12 pt sind 16 px, weil 1 pt 96 ÷ 72 CSS-px entspricht.",
    action: "1. Geben Sie vor dem Umrechnen Ihre tatsächliche Root-Schriftgröße und Viewport-Breite ein. 2. Verwenden Sie rem für Abstände und Schrift, die der Textgrößen-Einstellung der Leser folgen sollen. 3. Verwenden Sie em nur, wenn eine Komponente mit ihrem eigenen Text skalieren soll, und vermeiden Sie tiefe Verschachtelung. 4. Prüfen Sie das Ergebnis in den Entwicklertools des Browsers, die den berechneten Pixelwert anzeigen.",
    limit: "Physische Einheiten (in, cm, mm, pt) sind feste Bruchteile von 96 CSS-px und garantieren keine reale Länge auf dem Bildschirm oder im Ausdruck. vw kann die Breite der Bildlaufleiste einschließen, und vh ändert sich mit der Adressleiste mobiler Browser; dvh, svh und lvh werden nicht umgerechnet. Die Werte sind mathematische Umrechnungen, keine Messungen Ihrer Seite.",
  },
  "password-length-vs-variety": {
    title: "Passwortlänge oder Zeichenvielfalt: die Bits nachgezählt",
    intro: "Sonderzeichen hinzuzufügen wirkt sicherer als zusätzliche Länge, doch die Rechnung zeigt das Gegenteil. Wir haben die möglichen Passwörter für die Zeichensätze gezählt, die Apps24 erzeugt, und sie als Entropie in Bits verglichen.",
    interpretation: "Ein zufälliges Passwort hat etwa Länge × log2(Größe des Zeichenvorrats) Bits. Zehn Zeichen aus allen vier Sätzen (91 Zeichen) ergeben 65.1 Bits, 16 Kleinbuchstaben dagegen 75.2 und 16 Buchstaben und Ziffern 95.3. Weil Apps24 mindestens ein Zeichen jedes gewählten Typs garantiert, liegt der tatsächliche Wert etwas niedriger: Die exakte Zählung ergibt 103.86 Bits für 16 Zeichen aus allen vier Typen statt 104.12.",
    action: "1. Wählen Sie die größte Länge, die die Website akzeptiert. 2. Aktivieren Sie jeden Zeichentyp, den die Website zulässt. 3. Lehnt eine Website Sonderzeichen ab, erhöhen Sie stattdessen die Länge. 4. Speichern Sie das Ergebnis in einem Passwortmanager und verwenden Sie es nie mehrfach.",
    limit: "Entropie gilt nur für zufällig erzeugte Passwörter; ein von einem Menschen gewähltes Passwort ist viel leichter zu erraten. Bits ergeben keine Knackzeit, denn diese hängt vom Angreifer und davon ab, wie die Website Passwörter speichert. Das Tool erzeugt Passwörter in Ihrem Browser mit Web Crypto und zeigt nichts an, wenn kein Zeichentyp ausgewählt ist.",
  },
  "qr-wifi-vcard-format": {
    title: "WLAN- und Kontakt-QR-Codes: das genaue Textformat und das Maskieren von Sonderzeichen",
    intro: "Ein QR-Code für WLAN ist einfacher Text mit festem Aufbau. Wir haben mit dem Encoder von Apps24 Codes für ein WLAN, ein verstecktes Netzwerk, einen Namen und ein Passwort mit Sonderzeichen sowie eine Kontaktkarte erzeugt und jedes Bild mit ZXing-C++ 3.1.1 dekodiert.",
    interpretation: "Jedes Beispiel wurde wieder zu genau dem eingegebenen Text dekodiert, auch WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;;, wo jedem der Zeichen \\ ; , : und \" im Namen oder Passwort ein Backslash vorangestellt ist. Ein WLAN-Text mit 38 Zeichen ergab einen Code mit 29 × 29 Modulen, ein Text mit 100 Zeichen 41 × 41. Der Generator akzeptierte bis zu 2331 ASCII-Zeichen oder 777 koreanische Silben.",
    action: "1. Schreiben Sie den Text als WIFI:T:WPA;S:Name;P:Passwort;; (T:nopass für offene Netzwerke, H:true für versteckte). 2. Maskieren Sie Sonderzeichen mit einem Backslash. 3. Laden Sie das PNG herunter und scannen Sie es mit dem Telefon, das verwendet werden soll. 4. Halten Sie den Text kurz, damit die Module im Druck groß bleiben.",
    limit: "Dekodiert wurde nur per Software an digitalen Bildern. Wir haben keine gedruckten Codes gescannt und keine bestimmten Telefonmodelle getestet; was ein Telefon nach dem Lesen eines Codes tut, hängt von seiner Kamera-App ab. Die Beispielpasswörter gehören zu keinem echten Netzwerk.",
  },
};

import type { ExtraArticles } from "./types";

export const EXTRA_EN: ExtraArticles = {
  "percent-points-vs-change": {
    title: "Percent change vs percentage points: why 20% off, then 10% off is not 30%",
    intro: "Reports mix three different things: a change in points, a relative percent change and stacked percentages. We ran each through the Apps24 percentage formulas so the numbers can be checked by hand.",
    interpretation: "A rate that moves from 40% to 50% rose by 10 percentage points but by 25% relative to its start, (50 − 40) ÷ 40 × 100. A price that goes from 100 to 125 is +25%, and the way back from 125 to 100 is −20%, because each change is measured against its own starting value. Taking 20% off 100 leaves 80, and a further 10% off leaves 72, a total of 28% off, not 30%.",
    action: "1. Say whether you mean points or percent. 2. For repeated changes, apply them one after another and use each result as the next starting value. 3. For a reversal, compute the change from the new value, not the old one. 4. Round only at the end; the tool shows two decimals.",
    limit: "These are arithmetic examples checked against the formulas in the tool, not financial advice. A starting value of 0 has no percentage change, so the tool shows no result. Display rounding to two decimals can hide small differences.",
  },
  "css-units-rem-em": {
    title: "px, rem and em: why 24 px is 1.5 rem and nested em keeps growing",
    intro: "A converter only gives the right number if you know which size each unit is measured against. We converted the same values with Apps24 using its defaults and a changed root size, and worked out nested em by hand.",
    interpretation: "With a 16 px root, 24 px is 24 ÷ 16 = 1.5 rem; with a 10 px root the same 24 px is 2.4 rem. rem always uses the root, but em uses the font size of the element itself, so a 1.25 em box inside another 1.25 em box is 1.25 × 1.25 = 1.5625 times the base size. At a 1440 px viewport, 360 px is 25 vw, and 12 pt equals 16 px because 1 pt is 96 ÷ 72 CSS px.",
    action: "1. Enter your real root font size and viewport before converting. 2. Use rem for spacing and type that should follow the reader's text-size setting. 3. Use em only when a component should scale with its own text, and avoid deep nesting. 4. Confirm the result in the browser developer tools, which show the computed pixel value.",
    limit: "Physical units (in, cm, mm, pt) are fixed fractions of 96 CSS px and do not guarantee real-world length on a screen or printout. vw can include the scrollbar width, and vh changes with mobile address bars; dvh, svh and lvh are not converted. Values are mathematical conversions, not measurements of your page.",
  },
  "password-length-vs-variety": {
    title: "Password length versus variety: counting the bits",
    intro: "Adding symbols feels safer than adding length, but the arithmetic says otherwise. We counted the possible passwords for the character sets Apps24 generates and compared them as bits of entropy.",
    interpretation: "A random password has about length × log2(pool size) bits. Ten characters from all four sets (91 characters) give 65.1 bits, while 16 lowercase letters give 75.2 and 16 letters and digits give 95.3. Because Apps24 guarantees one character of every chosen type, its real value is slightly lower: exact counting gives 103.86 bits for 16 characters of all four types instead of 104.12.",
    action: "1. Pick the longest length the site accepts. 2. Turn on every character type the site allows. 3. If a site rejects symbols, add length instead. 4. Store the result in a password manager and never reuse it.",
    limit: "Entropy applies only to passwords generated at random; a password a person chooses is far easier to guess. Bits do not give a time to crack, which depends on the attacker and on how the site stores passwords. The tool generates in your browser with Web Crypto and shows nothing if no character type is selected.",
  },
  "qr-wifi-vcard-format": {
    title: "Wi-Fi and contact QR codes: the exact text format and escaping",
    intro: "A QR code for Wi-Fi is plain text with a fixed shape. We generated codes with the Apps24 encoder for Wi-Fi, a hidden network, a name and password with special characters, and a contact card, then decoded each image with ZXing-C++ 3.1.1.",
    interpretation: "Every sample decoded back to exactly the text we entered, including WIFI:T:WPA;S:Cafe\\;Guest;P:pa\\:ss\\\\word;;, where each of \\ ; , : and \" inside the name or password carries a backslash. A 38-character Wi-Fi text produced a 29 × 29 module code and a 100-character text 41 × 41. The generator accepted up to 2,331 ASCII characters or 777 Korean syllables.",
    action: "1. Write the text as WIFI:T:WPA;S:name;P:password;; (T:nopass for open networks, H:true for hidden ones). 2. Escape special characters with a backslash. 3. Download the PNG and scan it with the phone that will be used. 4. Keep the text short so the modules stay large when printed.",
    limit: "Decoding was done on digital images with software only. We did not scan printed codes or test specific phone models, and what a phone does after reading a code depends on its camera app. The sample passwords are not real networks.",
  },
};

export function analyzeText(text: string, locale: string) {
  const hasSegmenter = typeof Intl.Segmenter === "function";
  const characters = hasSegmenter
    ? Array.from(new Intl.Segmenter(locale, { granularity: "grapheme" }).segment(text), item => item.segment)
    : Array.from(text);
  const words = hasSegmenter
    ? Array.from(new Intl.Segmenter(locale, { granularity: "word" }).segment(text)).filter(item => item.isWordLike).length
    : (text.trim().match(/\S+/gu)?.length ?? 0);

  return {
    characters,
    characterCount: characters.length,
    charactersWithoutSpaces: characters.filter(character => !/^\s+$/u.test(character)).length,
    words,
    hasSegmenter,
  };
}

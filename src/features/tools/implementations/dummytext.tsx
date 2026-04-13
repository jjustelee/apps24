import type { ToolRendererProps } from "@/features/tools/implementations";

const LOREM_SENTENCES = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Integer vitae lorem sed arcu volutpat gravida.",
  "Praesent luctus sapien at sem facilisis, non faucibus mi posuere.",
  "Donec vitae neque at justo posuere aliquet.",
  "Suspendisse potenti, curabitur vitae nibh vel mauris faucibus luctus.",
  "Aliquam erat volutpat, sed dignissim risus euismod sed.",
];

function getFirstParam(
  searchParams: ToolRendererProps["searchParams"],
  key: string,
) {
  const value = searchParams?.[key];
  return Array.isArray(value) ? value[0] : value;
}

function getParagraphCount(searchParams: ToolRendererProps["searchParams"]) {
  const rawLength = getFirstParam(searchParams, "length");
  const parsed = Number.parseInt(rawLength ?? "1", 10);

  if (!Number.isFinite(parsed)) {
    return 1;
  }

  return Math.min(Math.max(parsed, 1), 100);
}

function generateParagraphs(count: number) {
  return Array.from({ length: count }, (_, paragraphIndex) => {
    const offset = paragraphIndex % LOREM_SENTENCES.length;
    const sentences = Array.from({ length: 4 }, (_, sentenceIndex) => {
      return LOREM_SENTENCES[(offset + sentenceIndex) % LOREM_SENTENCES.length];
    });

    return sentences.join(" ");
  });
}

export function DummyTextTool({ searchParams }: ToolRendererProps) {
  const paragraphCount = getParagraphCount(searchParams);
  const paragraphs = generateParagraphs(paragraphCount);

  return (
    <div className="tool-stack">
      <form className="tool-form" method="get">
        <div className="tool-field">
          <label className="tool-label" htmlFor="dummytext-length">
            Paragraphs
          </label>
          <input
            id="dummytext-length"
            className="tool-input"
            type="number"
            name="length"
            min="1"
            max="100"
            defaultValue={paragraphCount}
          />
          <p className="tool-note">
            Use the <code>length</code> query parameter to choose 1 to 100 paragraphs.
          </p>
        </div>

        <div className="tool-actions">
          <button className="tool-button" type="submit">
            Generate
          </button>
        </div>
      </form>

      <div className="tool-output" aria-live="polite">
        {paragraphs.map((paragraph, index) => (
          <p className="tool-output-card" key={`${paragraphCount}-${index}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

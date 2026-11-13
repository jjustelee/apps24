export type DeepTable = { head: string[]; rows: string[][] };

/** One titled section on a tool page. `code` strings in tables are literal inputs and must not be translated. */
export type DeepBlock = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: DeepTable;
  note?: string;
};

export type DeepContent = Partial<Record<string, DeepBlock[]>>;

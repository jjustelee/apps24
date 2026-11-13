import { getDeepContent } from "@/features/tools/deep-content";
import type { Locale } from "@/lib/site";

const headingStyle = { fontSize: "1.75rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)" } as const;
const textStyle = { lineHeight: "1.8", color: "var(--muted)", fontSize: "1.1rem", marginBottom: "1rem" } as const;
const cellStyle = { padding: "0.6rem 0.8rem", border: "1px solid var(--line)", textAlign: "start", verticalAlign: "top" } as const;

export function ToolDeepContent({ locale, toolId }: { locale: Locale; toolId: string }) {
  const blocks = getDeepContent(locale, toolId);
  if (blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block) => (
        <div key={block.heading} className="content-block" style={{ marginBottom: "2.5rem" }}>
          <h2 style={headingStyle}>{block.heading}</h2>
          {block.paragraphs?.map((paragraph) => <p key={paragraph} style={textStyle}>{paragraph}</p>)}
          {block.table && (
            <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
              <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "1rem", color: "var(--muted)" }}>
                <thead>
                  <tr>{block.table.head.map((cell) => <th key={cell} scope="col" style={{ ...cellStyle, background: "var(--surface-soft)", color: "var(--text)" }}>{cell}</th>)}</tr>
                </thead>
                <tbody>
                  {block.table.rows.map((row) => (
                    <tr key={row.join("|")}>{row.map((cell, i) => <td key={i} style={cellStyle}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {block.bullets && (
            <ul style={{ ...textStyle, paddingInlineStart: "1.5rem" }}>
              {block.bullets.map((bullet) => <li key={bullet} style={{ marginBottom: "0.5rem" }}>{bullet}</li>)}
            </ul>
          )}
          {block.note && <p style={{ ...textStyle, fontSize: "0.95rem" }}>{block.note}</p>}
        </div>
      ))}
    </>
  );
}

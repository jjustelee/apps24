import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <section
        aria-labelledby="not-found-title"
        style={{
          width: "min(100%, 640px)",
          padding: "clamp(2rem, 6vw, 4rem)",
          border: "1px solid var(--line)",
          borderRadius: "32px",
          background: "var(--panel)",
          boxShadow: "var(--shadow-soft)",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, color: "var(--accent)", fontSize: "1rem", fontWeight: 900 }}>404</p>
        <h1 id="not-found-title" style={{ margin: "0.65rem 0", fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
          Page not found
        </h1>
        <p style={{ margin: "0 auto 2rem", maxWidth: "480px", color: "var(--muted)", lineHeight: 1.7 }}>
          The page may have moved or no longer exists. Return to the tool library or learn more about Apps24.
        </p>
        <nav
          aria-label="404 page links"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}
        >
          <Link className="tool-button" href="/">
            Browse all tools
          </Link>
          <Link className="tool-button secondary" href="/en/about">
            About Apps24
          </Link>
        </nav>
      </section>
    </main>
  );
}

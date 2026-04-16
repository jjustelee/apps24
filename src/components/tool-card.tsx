import Link from "next/link";

type ToolCardProps = {
  href: string;
  title: string;
  description: string;
  icon: string;
};

export function ToolCard({ href, title, description, icon }: ToolCardProps) {
  return (
    <Link className="tool-card" href={href}>
      <span className="tool-card-icon" aria-hidden="true">
        {icon}
      </span>
      <h3 style={{ fontSize: "1.2rem", margin: 0, fontWeight: 700 }}>{title}</h3>
      <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: "1.5", margin: 0 }}>{description}</p>
    </Link>
  );
}

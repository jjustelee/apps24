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
      <h3 style={{ fontSize: "1.1rem", margin: 0, fontWeight: 700 }}>{title}</h3>
      <span style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.5" }}>{description}</span>
    </Link>
  );
}

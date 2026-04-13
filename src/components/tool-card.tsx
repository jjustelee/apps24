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
      <strong>{title}</strong>
      <span>{description}</span>
    </Link>
  );
}

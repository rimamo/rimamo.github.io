import Link from "next/link";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  tone?: "amber" | "violet" | "green" | "ink";
};

export default function ServiceHero({ eyebrow, title, lead, tone = "amber" }: Props) {
  return (
    <section
      className="section-rmm"
      style={{ padding: "72px 0 80px", borderTop: 0 }}
    >
      <div className="container-rmm" style={{ maxWidth: 880, position: "relative" }}>
        <Link
          href="/"
          className="rmm-back-link"
          style={{
            position: "absolute",
            top: -36,
            left: 0,
            fontSize: 13,
            color: "var(--ink-600)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 0",
          }}
        >
          <span aria-hidden>←</span>
          <span>Volver a inicio</span>
        </Link>
        <div className={`eyebrow ${tone}`}>{eyebrow}</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            color: "var(--ink-900)",
            margin: "18px 0 24px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.55,
            color: "var(--ink-700)",
            margin: 0,
            maxWidth: 680,
          }}
        >
          {lead}
        </p>
      </div>
    </section>
  );
}

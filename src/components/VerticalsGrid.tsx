import { Layers, Sparkles, CodeXml, PenTool, LucideIcon } from "lucide-react";

type Tone = "amber" | "violet" | "green" | "ink";

type Vertical = {
  Icon: LucideIcon;
  tag: "P0" | "P1";
  tone: Tone;
  title: string;
  desc: string;
  cta: string;
};

const VERTICALS: Vertical[] = [
  {
    Icon: Layers,
    tag: "P0",
    tone: "amber",
    title: "Tech Lead fraccional",
    desc: "Refuerzo técnico senior para tu equipo: arquitectura, decisiones clave y mentoring. Hasta 10 h/semana; si necesitas más, lo vemos en reunión.",
    cta: "Reservar llamada",
  },
  {
    Icon: Sparkles,
    tag: "P0",
    tone: "violet",
    title: "Automatizaciones & IA",
    desc: "Integraciones que ahorran horas reales, no demos. Flujos internos, pipelines de datos y agentes con MCP aplicados a tu operativa.",
    cta: "Reservar llamada",
  },
  {
    Icon: CodeXml,
    tag: "P1",
    tone: "green",
    title: "Prototipado",
    desc: "MVP funcional en 4–6 semanas con Next.js y TypeScript. Un único developer senior al frente. Ideal para validar una idea antes de escalar.",
    cta: "Reservar llamada",
  },
  {
    Icon: PenTool,
    tag: "P1",
    tone: "ink",
    title: "Diseño & UX",
    desc: "Wireframes, sistemas de diseño y pasadas visuales. Todo facturado desde Rimamo.",
    cta: "Reservar llamada",
  },
];

const TONES: Record<Tone, { rule: string; pillBg: string; pillFg: string; iconColor: string }> = {
  amber: { rule: "var(--amber-500)", pillBg: "var(--amber-500)", pillFg: "var(--ink-900)", iconColor: "var(--amber-700)" },
  violet: { rule: "var(--violet-500)", pillBg: "var(--violet-500)", pillFg: "#fff", iconColor: "var(--violet-700)" },
  green: { rule: "var(--green-500)", pillBg: "var(--green-500)", pillFg: "var(--ink-900)", iconColor: "var(--green-700)" },
  ink: { rule: "var(--ink-900)", pillBg: "var(--ink-900)", pillFg: "var(--paper-50)", iconColor: "var(--ink-900)" },
};

function VerticalCard({ Icon, tag, tone, title, desc, cta }: Vertical) {
  const t = TONES[tone];
  return (
    <article
      style={{
        padding: "28px 26px 26px",
        borderRight: "1px solid var(--ink-200)",
        borderBottom: "1px solid var(--ink-200)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        transition: "background 200ms",
        boxShadow: `inset 3px 0 0 0 ${t.rule}`,
        background: "#fff",
      }}
    >
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Icon size={22} strokeWidth={1.5} color={t.iconColor} />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            padding: "3px 8px",
            borderRadius: 2,
            background: t.pillBg,
            color: t.pillFg,
          }}
        >
          {tag}
        </span>
      </header>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "-0.015em",
          color: "var(--ink-900)",
          margin: 0,
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-700)", margin: 0, flex: 1 }}>{desc}</p>
      <a href="#contacto" className="btn btn-ghost" style={{ padding: "6px 0" }}>
        {cta} <span className="arrow">→</span>
      </a>
    </article>
  );
}

export default function VerticalsGrid() {
  return (
    <section id="verticales" className="section-rmm">
      <div className="container-rmm">
        <header style={{ maxWidth: 720, marginBottom: 56 }}>
          <div className="eyebrow">VERTICALES</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 3.6vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--ink-900)",
              margin: "16px 0 14px",
            }}
          >
            Cuatro formas de trabajar.
            <br />
            Una sola factura.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-600)", margin: 0 }}>
            Todo lo contratas a RIMAMO SL. Si no encaja, te lo digo antes de empezar.
          </p>
        </header>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 0,
            border: "1px solid var(--ink-200)",
            borderRadius: 8,
            background: "#fff",
            overflow: "hidden",
          }}
        >
          {VERTICALS.map((v) => (
            <VerticalCard key={v.title} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}

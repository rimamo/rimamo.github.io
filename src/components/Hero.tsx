type LineProps = { k: string; v: string; accent?: boolean };

function Line({ k, v, accent }: LineProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 16,
        padding: "11px 0",
        borderTop: "1px solid var(--ink-200)",
        fontSize: 13,
      }}
    >
      <span
        style={{
          color: "var(--ink-500)",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {k}
      </span>
      <span
        style={{
          color: accent ? "var(--amber-700)" : "var(--ink-900)",
          fontWeight: accent ? 700 : 500,
        }}
      >
        {v}
      </span>
    </div>
  );
}

type Props = {
  ctaHref?: string;
};

export default function Hero({ ctaHref = "#contacto" }: Props) {
  return (
    <section
      id="top"
      className="section-rmm rmm-hero"
      style={{ padding: "80px 0 96px", borderTop: 0 }}
    >
      <div className="container-rmm rmm-hero-inner">
        <div>
          <div className="eyebrow">RICARDO MARTÍNEZ · CTO FRACCIONAL</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.6vw, 68px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "var(--ink-900)",
              margin: "20px 0 26px",
            }}
          >
            Tech Lead a horas,
            <br />
            sin contratarme
            <br />a jornada completa.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--ink-700)",
              maxWidth: 520,
              margin: "0 0 32px",
            }}
          >
            16 años construyendo software. Me sumo a tu equipo como refuerzo
            técnico senior sin contrato laboral: arquitectura, decisiones
            clave y guía al equipo existente.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 40, flexWrap: "wrap" }}>
            <a href={ctaHref} className="btn btn-primary btn-lg">
              Reservar llamada <span>→</span>
            </a>
            <a href="#verticales" className="btn btn-ghost">
              Cómo trabajo <span className="arrow">→</span>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--ink-600)" }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--green-500)",
                display: "inline-block",
                boxShadow: "0 0 0 4px var(--green-100)",
              }}
              aria-hidden
            />
            <span>Disponible · hasta 10 h/semana</span>
          </div>
        </div>

        <aside
          style={{
            background: "#fff",
            border: "1px solid var(--ink-200)",
            borderRadius: 8,
            padding: "18px 22px 22px",
            marginTop: 24,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-500)",
              marginBottom: 10,
            }}
          >
            AHORA MISMO
          </div>
          <div>
            <Line k="Empresa" v="Rimamo SL" />
            <Line k="Capacidad" v="10 h/semana" />
            <Line k="Stack actual" v="Next.js · Payload · Vercel" />
            <Line k="Localización" v="Madrid · remoto" />
            <Line k="Idiomas" v="Castellano · English" />
            <Line k="Próxima vacante" v="Mayo 2026" accent />
          </div>
        </aside>
      </div>
    </section>
  );
}

const ROLES = [
  { rol: "CTO / Head of Engineering", rango: "70–110k€", mediana: "94k€", nota: "+ equity" },
  { rol: "Tech Lead senior", rango: "50–80k€", mediana: "59k€" },
  { rol: "Arquitecto software / cloud", rango: "60–95k€", mediana: "75k€" },
  { rol: "DevOps senior", rango: "55–80k€", mediana: "60k€" },
];

export default function WhyFractional() {
  return (
    <section id="por-que-fraccional" className="section-rmm">
      <div className="container-rmm">
        <header style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow amber">POR QUÉ FRACCIONAL</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.6vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--ink-900)",
              margin: "16px 0 14px",
            }}
          >
            Necesitas talento técnico senior.
            <br />
            No necesitas pagarlo a 40 h.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-600)", margin: 0 }}>
            Un perfil técnico senior en plantilla cuesta lo que cuesta. Y son
            40 horas semanales que muchas veces no se llenan. Yo entro en el
            rol que tu proyecto necesite, en el alcance que tu proyecto
            justifique.
          </p>
        </header>

        <div
          style={{
            border: "1px solid var(--ink-200)",
            borderRadius: 8,
            background: "#fff",
            overflow: "hidden",
          }}
          className="rmm-fractional-table"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr 1fr",
              gap: 0,
              padding: "12px 24px",
              borderBottom: "1px solid var(--ink-200)",
              background: "var(--paper-100)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: "var(--ink-600)",
              textTransform: "uppercase",
            }}
          >
            <span>Rol senior en plantilla</span>
            <span style={{ textAlign: "right" }}>Rango anual</span>
            <span style={{ textAlign: "right" }}>Mediana</span>
          </div>
          {ROLES.map((r, i) => (
            <div
              key={r.rol}
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 1fr 1fr",
                gap: 0,
                padding: "18px 24px",
                borderBottom: i < ROLES.length - 1 ? "1px solid var(--ink-200)" : "none",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--ink-900)",
                }}
              >
                {r.rol}
              </span>
              <span
                style={{
                  textAlign: "right",
                  fontFamily: "var(--font-mono)",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--ink-800)",
                }}
              >
                {r.rango}
                {r.nota && (
                  <span
                    style={{
                      display: "block",
                      fontSize: 11,
                      color: "var(--amber-700)",
                      marginTop: 2,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {r.nota}
                  </span>
                )}
              </span>
              <span
                style={{
                  textAlign: "right",
                  fontFamily: "var(--font-mono)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--ink-900)",
                }}
              >
                {r.mediana}
              </span>
            </div>
          ))}
          <div
            style={{
              padding: "12px 24px",
              background: "var(--paper-100)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--ink-600)",
              letterSpacing: "0.02em",
              borderTop: "1px solid var(--ink-200)",
            }}
          >
            Rangos orientativos para perfil senior en España. Fuente:{" "}
            <a
              href="https://www.getmanfred.com/blog/guia-salarial-2026-salarios-en-tecnologia-espana-manfred"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--ink-800)",
                borderBottom: "1px solid var(--ink-300)",
                textDecoration: "none",
              }}
            >
              Guía Salarial Manfred 2026
            </a>
            .
          </div>
        </div>

        <div
          style={{
            maxWidth: 720,
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-700)", margin: 0 }}>
            Sin contrato laboral, sin permanencia, sin paquete + bonus.
            Hablamos del problema que tienes y vemos qué encaja: cuántas
            horas al mes, qué rol cubrir, en qué momentos del proyecto.
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="https://cal.com/rimamo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Reservar llamada <span style={{ marginLeft: 2 }}>→</span>
            </a>
            <a href="#sobre" className="btn btn-ghost">
              Sobre mí <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

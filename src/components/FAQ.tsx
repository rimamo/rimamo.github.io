const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "¿Quién factura, tú o una empresa?",
    a: "RIMAMO SL. No facturo como autónomo. Toda relación pasa por la sociedad.",
  },
  {
    q: "¿Hay permanencia o cláusulas de salida?",
    a: "No por defecto. Libertad mutua mensual. Si tu empresa necesita firmar cláusulas para protegerse, se firman sin problema — lo hablamos y formalizamos.",
  },
  {
    q: "¿Trabajas en exclusiva para un cliente?",
    a: "No. Llevo varios clientes en paralelo. Eso me ayuda a aplicar mejores herramientas y aportar perspectivas que no salen trabajando para uno solo.",
  },
  {
    q: "¿De quién es el código que escribimos?",
    a: "Tuyo. Subido a tus repositorios, propiedad intelectual de tu empresa. Excepción: si juntos vemos que un proyecto es vendible al mercado, lo trabajamos desde el principio con un acuerdo de capital previo.",
  },
  {
    q: "¿Y la confidencialidad? ¿Firmas NDA?",
    a: "Sin problema. Si tu empresa lo pide, se firma. Mi finalidad es ayudar y construir win–win, no extraer datos ni jugar con tu negocio.",
  },
  {
    q: "¿Y si un mes necesito más horas de las pactadas?",
    a: "Me acomodo a la criticidad. El alcance mensual es un punto de partida, no una pared. Si hay urgencia, hago las horas que haga falta y lo hablamos.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-rmm">
      <div className="container-rmm">
        <header style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow green">PREGUNTAS FRECUENTES</div>
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
            Cómo funciona trabajar conmigo.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink-600)", margin: 0 }}>
            Las dudas que suelen aparecer antes de la primera llamada. Si te
            falta alguna, pregúntamela directamente.
          </p>
        </header>

        <div
          style={{
            border: "1px solid var(--ink-200)",
            borderRadius: 8,
            background: "#fff",
            overflow: "hidden",
          }}
        >
          {QUESTIONS.map((item, i) => (
            <details
              key={item.q}
              className="rmm-faq-item"
              style={{
                borderBottom:
                  i < QUESTIONS.length - 1 ? "1px solid var(--ink-200)" : "none",
              }}
            >
              <summary
                style={{
                  padding: "20px 24px",
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  fontFamily: "var(--font-display)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--ink-900)",
                }}
              >
                <span>{item.q}</span>
                <span
                  className="rmm-faq-icon"
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "var(--ink-500)",
                    transition: "transform 200ms var(--ease-out)",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </summary>
              <div
                style={{
                  padding: "0 24px 22px",
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "var(--ink-700)",
                  maxWidth: 720,
                }}
              >
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--ink-500)",
            margin: "28px 0 0",
            maxWidth: 720,
          }}
        >
          ¿Una duda que no está aquí?{" "}
          <a
            href="mailto:hola@rimamo.dev"
            style={{
              color: "var(--ink-800)",
              borderBottom: "1px solid var(--ink-300)",
              textDecoration: "none",
            }}
          >
            hola@rimamo.dev
          </a>{" "}
          o{" "}
          <a
            href="https://cal.com/rimamo/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--ink-800)",
              borderBottom: "1px solid var(--ink-300)",
              textDecoration: "none",
            }}
          >
            reserva 30 min
          </a>
          .
        </p>
      </div>
    </section>
  );
}

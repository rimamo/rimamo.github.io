export default function ContactBlock() {
  return (
    <section id="contacto" className="section-rmm inverse">
      <div
        className="container-rmm"
        style={{ maxWidth: 720, textAlign: "left" }}
      >
        <div className="eyebrow amber" style={{ color: "var(--amber-500)" }}>
          HABLEMOS
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            margin: "16px 0 20px",
            color: "var(--paper-50)",
          }}
        >
          Si te encaja, lo primero es una llamada de 30 min.
        </h2>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--ink-300)",
            margin: "0 0 32px",
          }}
        >
          Cuéntame dónde estás, qué necesitas mover y qué presupuesto manejas.
          Si no soy la persona indicada, te digo a quién acudir.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href="mailto:hola@rimamo.dev"
            className="btn btn-lg"
            style={{
              background: "var(--paper-50)",
              color: "var(--ink-900)",
              borderColor: "var(--paper-50)",
            }}
          >
            hola@rimamo.dev <span>→</span>
          </a>
          <a
            href="https://cal.com/rimamo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg"
            style={{
              background: "transparent",
              color: "var(--paper-50)",
              borderColor: "var(--paper-50)",
            }}
          >
            Reservar llamada <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

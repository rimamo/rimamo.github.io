import Image from "next/image";

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

        <aside style={{ marginTop: 24 }}>
          <div
            style={{
              border: "1px solid var(--ink-200)",
              padding: 8,
              background: "#fff",
              lineHeight: 0,
            }}
          >
            <Image
              src="/images/ricardo_martinez_montes_2024.jpg"
              alt="Ricardo Martínez"
              width={520}
              height={650}
              priority
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                filter: "grayscale(100%)",
              }}
            />
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "var(--ink-900)",
              textTransform: "uppercase",
            }}
          >
            Ricardo Martínez
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 14,
              lineHeight: 1.5,
              color: "var(--ink-600)",
            }}
          >
            Orquestador técnico · 16 años · IA aplicada
          </div>
          <div
            style={{
              marginTop: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 10px",
              borderRadius: 999,
              background: "var(--green-100)",
              color: "var(--green-900)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--green-500)",
                boxShadow: "0 0 0 3px rgba(93,182,116,0.25)",
              }}
              aria-hidden
            />
            Próxima vacante · Mayo 2026
          </div>
        </aside>
      </div>
    </section>
  );
}

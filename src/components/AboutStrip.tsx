export default function AboutStrip() {
  return (
    <section id="sobre" className="section-rmm">
      <div className="container-rmm" style={{ maxWidth: 880 }}>
        <div className="eyebrow">SOBRE MÍ</div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3.4vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--ink-900)",
            margin: "16px 0 24px",
          }}
        >
          16 años orquestando tecnología para que el equipo no se apague.
        </h2>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--ink-700)",
            margin: "0 0 16px",
          }}
        >
          Empecé con PHP, pasé por Java y Odoo, y llevo años en TypeScript.
          Hoy lo importante no es el stack — es la experiencia para hacer de
          orquestador: análisis previo, decisiones técnicas, operativa y una
          base sólida sobre la que montar lo que venga.
        </p>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--ink-700)",
            margin: "0 0 16px",
          }}
        >
          Me adapto al entorno y lenguaje de tu equipo. Con IA aplicada
          aún más: automatizo lo repetitivo, conecto sistemas y pongo agentes
          donde de verdad ahorran horas.
        </p>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "var(--ink-700)",
            margin: 0,
          }}
        >
          RIMAMO SL es el vehículo que factura. Friendstech es el laboratorio
          donde experimento en abierto.
        </p>
      </div>
    </section>
  );
}

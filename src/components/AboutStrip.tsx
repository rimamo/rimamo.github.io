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
            margin: "16px 0 32px",
          }}
        >
          La tecnología no es mi profesión.
          <br />
          Es lo que llevo haciendo desde siempre.
        </h2>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--ink-700)",
            margin: "0 0 18px",
          }}
        >
          Mientras otros jugaban al PC, yo lo desmontaba, restauraba y
          arreglaba. Mientras otros jugaban online,  entendía cómo funcionaba internet y
          montaba servidores. Cuando empecé comence a estudiar, ya llevaba años programando — sin saberlo, la
          pasión me acompañaba desde el principio.
        </p>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--ink-700)",
            margin: "0 0 32px",
          }}
        >
          <strong style={{ color: "var(--ink-900)" }}>20 años</strong>{" "}
          aprendiendo cada día, sin descanso. Y seguimos. Ese soy yo:
          alguien al que la tecnología acompaña como pasión, no como trabajo.
        </p>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--ink-700)",
            margin: "0 0 18px",
          }}
        >
          Por el camino he pasado por C, C++, BASIC, Lua, PHP, Java, C#,
          JavaScript / TypeScript, Python… y bases de datos como Oracle,
          MySQL, MongoDB, PostgreSQL… Y seguimos sumando.
        </p>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--ink-700)",
            margin: "0 0 18px",
          }}
        >
          Hoy lo importante no es el lenguaje ni el stack —{" "}
          <strong style={{ color: "var(--ink-900)" }}>
            es saber orquestar el conjunto, y hacerlo con IA
          </strong>
          . Análisis previo, decisiones técnicas, operativa y una base sólida
          sobre la que montar lo que venga.
        </p>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--ink-700)",
            margin: 0,
          }}
        >
          RIMAMO SL es el vehículo que factura.{" "}
          <a
            href="https://friendstech.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--ink-900)",
              borderBottom: "1px solid var(--ink-400)",
              textDecoration: "none",
            }}
          >
            friendstech.dev
          </a>{" "}
          es el laboratorio donde experimento en abierto.
        </p>
      </div>
    </section>
  );
}

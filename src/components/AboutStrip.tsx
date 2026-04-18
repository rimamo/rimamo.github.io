import Image from "next/image";

export default function AboutStrip() {
  return (
    <section id="sobre" className="section-rmm">
      <div
        className="container-rmm"
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: 48,
          alignItems: "start",
        }}
      >
        <div
          style={{
            border: "1px solid var(--ink-200)",
            padding: 8,
            background: "#fff",
          }}
        >
          <Image
            src="/images/ricardo_martinez_montes_2024.jpg"
            alt="Ricardo Martínez"
            width={400}
            height={500}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              filter: "grayscale(100%)",
            }}
          />
        </div>
        <div>
          <div className="eyebrow">SOBRE MÍ</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.2vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--ink-900)",
              margin: "16px 0 20px",
            }}
          >
            Ricardo Martínez. 16 años construyendo tecnología.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--ink-700)",
              margin: "0 0 16px",
              maxWidth: 640,
            }}
          >
            Empecé con PHP, pasé por Java y Odoo, y llevo años en el mundo TypeScript.
            Hoy ayudo a equipos a tomar decisiones técnicas sensatas, a automatizar lo
            que no debería hacerse a mano, y a construir software que no se tire a los
            tres meses.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--ink-700)",
              margin: 0,
              maxWidth: 640,
            }}
          >
            Rimamo SL es el vehículo que factura. Friendstech es el laboratorio donde
            experimento en abierto.
          </p>
        </div>
      </div>
    </section>
  );
}

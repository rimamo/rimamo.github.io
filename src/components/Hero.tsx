"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATING: { label: string; color: string }[] = [
  { label: "Tech Lead a horas", color: "var(--amber-700)" },
  { label: "Automatización & IA", color: "var(--violet-700)" },
  { label: "Prototipado MVP", color: "var(--green-700)" },
  { label: "Diseño & UX", color: "var(--ink-900)" },
];

type Props = {
  ctaHref?: string;
};

export default function Hero({ ctaHref = "#contacto" }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="section-rmm rmm-hero"
      style={{ padding: "80px 0 96px", borderTop: 0 }}
    >
      <div className="container-rmm rmm-hero-inner">
        <div>
          <div className="eyebrow">RICARDO MARTÍNEZ · TECH LEAD FRACCIONAL</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 4.8vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.08,
              color: "var(--ink-900)",
              margin: "20px 0 26px",
            }}
          >
            <span
              style={{
                display: "block",
                whiteSpace: "nowrap",
                minHeight: "1.1em",
              }}
            >
              <span
                key={ROTATING[index].label}
                className="rmm-rotating"
                style={{
                  display: "inline-block",
                  color: ROTATING[index].color,
                }}
              >
                {ROTATING[index].label}
              </span>
              ,
            </span>
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
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href={ctaHref} className="btn btn-primary btn-lg">
              Reservar llamada <span>→</span>
            </a>
            <a href="#verticales" className="btn btn-ghost">
              Cómo trabajo <span className="arrow">→</span>
            </a>
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
            Ricardo Martínez Montes
          </div>
          <div
            style={{
              marginTop: 6,
              fontSize: 14,
              lineHeight: 1.5,
              color: "var(--ink-600)",
            }}
          >
            Más de 16 años de experiencia técnica potenciada con IA.
          </div>
        </aside>
      </div>
    </section>
  );
}

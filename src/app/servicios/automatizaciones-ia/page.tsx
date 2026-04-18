import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceHero from "@/components/ServiceHero";
import ContactBlock from "@/components/ContactBlock";
import OdooLivechat from "@/components/OdooLivechat";

export const metadata: Metadata = {
  title: "Automatizaciones & IA aplicada",
  description:
    "Integraciones reales que ahorran horas al equipo. Flujos internos, pipelines de datos y agentes con MCP aplicados a tu operativa.",
};

const CASOS = [
  {
    title: "Pipelines de datos",
    desc: "Orquestación de ETLs ligeros entre tu CRM, ERP y herramientas internas. Datos fiables, en sitio, listos para analítica o IA.",
  },
  {
    title: "Agentes con MCP",
    desc: "Asistentes internos que consultan tus sistemas, redactan borradores y ejecutan tareas repetitivas. No demos de escaparate — lo que funciona de verdad.",
  },
  {
    title: "Flujos internos",
    desc: "Automatización de procesos manuales (alta de clientes, presupuestos, incidencias) con herramientas existentes o código a medida cuando hace falta.",
  },
];

export default function AutomatizacionesIAPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          eyebrow="SERVICIO · AUTOMATIZACIONES & IA"
          tone="violet"
          title={<>Integraciones que ahorran horas reales, no demos.</>}
          lead={
            <>
              La IA solo vale cuando toca operativa concreta. Diseño e
              implemento flujos, pipelines y agentes conectados a tus sistemas
              actuales — con criterio técnico senior detrás para que no se
              rompan a la semana.
            </>
          }
        />

        <section className="section-rmm">
          <div className="container-rmm">
            <header style={{ maxWidth: 720, marginBottom: 48 }}>
              <div className="eyebrow">DÓNDE ENTRO</div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.6vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  margin: "16px 0 0",
                }}
              >
                Tres frentes donde la IA paga sola.
              </h2>
            </header>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 32,
              }}
            >
              {CASOS.map((c, i) => (
                <article key={c.title}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--violet-700)",
                      marginBottom: 8,
                      letterSpacing: "0.04em",
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 700,
                      letterSpacing: "-0.015em",
                      color: "var(--ink-900)",
                      margin: "0 0 10px",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-700)", margin: 0 }}>
                    {c.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rmm">
          <div className="container-rmm" style={{ maxWidth: 720 }}>
            <div className="eyebrow">CÓMO EMPEZAMOS</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: "16px 0 24px",
              }}
            >
              Primero entiendo el proceso. Luego automatizo.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--ink-700)",
                margin: 0,
                maxWidth: 640,
              }}
            >
              Entrevisto a quien hace el trabajo hoy, identifico qué pasos son
              repetibles y dónde la IA aporta valor real — y dónde es solo
              ruido. Salgo con una propuesta priorizada y un prototipo
              funcional antes de cerrar un alcance mayor.
            </p>
          </div>
        </section>

        <ContactBlock />
      </main>
      <SiteFooter />
      <OdooLivechat channelId={2} />
    </>
  );
}

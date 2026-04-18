import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceHero from "@/components/ServiceHero";
import ContactBlock from "@/components/ContactBlock";
import OdooLivechat from "@/components/OdooLivechat";

export const metadata: Metadata = {
  title: "Tech Lead fraccional · CTO a horas",
  description:
    "Dirección técnica senior para tu empresa, sin el coste de un CTO a jornada completa. Auditoría, consultoría de operaciones y liderazgo técnico en un único servicio.",
};

const PROBLEMAS = [
  {
    title: "El agujero negro del SaaS",
    desc: "Pagas decenas de licencias (ERP, CRM) pero tu equipo sigue en Excel. La infraestructura mal conectada se come el presupuesto sin dar resultado.",
  },
  {
    title: "El equipo quemado",
    desc: "Tareas que deberían tomar minutos tardan horas. El talento se desperdicia en trabajo manual repetitivo y altamente propenso a errores.",
  },
  {
    title: "El barco a la deriva",
    desc: "Tienes programadores pero nadie que los dirija con visión estratégica, alineando la tecnología con la rentabilidad del negocio.",
  },
];

const FORMAS = [
  {
    title: "Auditoría de ecosistema",
    desc: "Analizo tu infraestructura a fondo: licencias redundantes, sistemas que no se hablan, fallos de seguridad y gastos ocultos. Sales con un roadmap técnico accionable y una estimación del ahorro.",
  },
  {
    title: "Consultoría de operaciones",
    desc: "Mapeamos dónde se pierde el tiempo del equipo y diseñamos flujos automatizables que multiplican la eficiencia. Entrevistas 1-a-1 por departamento para encontrar los cuellos de botella reales.",
  },
  {
    title: "Advisory retainer",
    desc: "Acompañamiento directivo continuo para el CEO o founder. Reuniones estratégicas, priorización técnica y respaldo en decisiones clave. Refuerzo a tu lead developer sin asumir el coste de un CTO a plantilla.",
  },
];

const ENTREGABLES = [
  "Informe detallado del ecosistema digital actual.",
  "Mapa de procesos con puntos de dolor por departamento.",
  "Roadmap técnico priorizado con estimación de ahorro e impacto.",
  "Acompañamiento mensual en reuniones estratégicas.",
  "Refuerzo y mentoría al equipo técnico existente.",
];

export default function TechLeadFraccionalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          eyebrow="SERVICIO · TECH LEAD FRACCIONAL"
          tone="amber"
          title={
            <>
              Dirección técnica senior,
              <br />
              sin contratarme a jornada completa.
            </>
          }
          lead={
            <>
              Muchas empresas necesitan liderazgo tecnológico pero no justifican
              el coste y el riesgo de un CTO en plantilla. Entro como refuerzo a
              tu equipo: decido, audito, oriento y priorizo — con 16 años de
              experiencia detrás.
            </>
          }
        />

        <section className="section-rmm">
          <div className="container-rmm">
            <header style={{ maxWidth: 720, marginBottom: 48 }}>
              <div className="eyebrow">EL PROBLEMA</div>
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
                ¿Tu tecnología acelera tu crecimiento o es tu mayor cuello de botella?
              </h2>
            </header>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 0,
                border: "1px solid var(--ink-200)",
                borderRadius: 8,
                background: "#fff",
                overflow: "hidden",
              }}
            >
              {PROBLEMAS.map((p) => (
                <article
                  key={p.title}
                  style={{
                    padding: "28px 26px",
                    borderRight: "1px solid var(--ink-200)",
                    borderBottom: "1px solid var(--ink-200)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      color: "var(--ink-900)",
                      margin: 0,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-700)", margin: 0 }}>
                    {p.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rmm inverse">
          <div className="container-rmm">
            <header style={{ maxWidth: 720, marginBottom: 56 }}>
              <div
                className="eyebrow amber"
                style={{ color: "var(--amber-500)" }}
              >
                CÓMO TRABAJO
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 3.6vw, 44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  margin: "16px 0 12px",
                  color: "var(--paper-50)",
                }}
              >
                Tres formas de devolverte el control técnico.
              </h2>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "var(--ink-300)",
                  margin: 0,
                  maxWidth: 620,
                }}
              >
                No necesitas más líneas de código. Necesitas a alguien que
                audite, dirija y eficientice. Este servicio se adapta a lo que
                tu empresa necesita en cada fase.
              </p>
            </header>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 40,
              }}
            >
              {FORMAS.map((f, i) => (
                <div key={f.title}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--amber-500)",
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
                      color: "var(--paper-50)",
                      margin: "0 0 12px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-300)", margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-rmm">
          <div className="container-rmm" style={{ maxWidth: 720 }}>
            <div className="eyebrow">QUÉ TE LLEVAS</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.2vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                margin: "16px 0 32px",
              }}
            >
              Entregables concretos, no humo.
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {ENTREGABLES.map((e) => (
                <li
                  key={e}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "14px 0",
                    borderTop: "1px solid var(--ink-200)",
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: "var(--ink-800)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--amber-700)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 700,
                      minWidth: 24,
                    }}
                  >
                    →
                  </span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactBlock />
      </main>
      <SiteFooter />
      <OdooLivechat channelId={2} />
    </>
  );
}

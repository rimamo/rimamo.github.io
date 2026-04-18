import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceHero from "@/components/ServiceHero";
import ContactBlock from "@/components/ContactBlock";
import OdooLivechat from "@/components/OdooLivechat";

export const metadata: Metadata = {
  title: "Prototipado · MVP senior",
  description:
    "MVP funcional en 4–6 semanas con Next.js y TypeScript. Un único developer senior al frente. Para validar una idea antes de escalar.",
};

const FASES = [
  { k: "Semana 1", v: "Alineamiento de alcance, decisiones técnicas y primer diseño funcional." },
  { k: "Semanas 2–4", v: "Construcción iterativa del MVP con demos semanales. Stack estándar Next.js + TypeScript." },
  { k: "Semanas 5–6", v: "Pulido, despliegue, pruebas con usuarios reales y handoff técnico." },
];

export default function PrototipadoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          eyebrow="SERVICIO · PROTOTIPADO"
          tone="green"
          title={<>Un MVP que puedes enseñar en 6 semanas.</>}
          lead={
            <>
              Para founders y equipos que necesitan validar una idea con algo
              funcional antes de invertir en un equipo completo. Tecnología
              sólida desde el minuto cero — sin deuda técnica improvisada.
            </>
          }
        />

        <section className="section-rmm">
          <div className="container-rmm" style={{ maxWidth: 720 }}>
            <div className="eyebrow green">CÓMO FUNCIONA</div>
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
              4–6 semanas. Una sola persona senior.
            </h2>
            <div>
              {FASES.map((f) => (
                <div
                  key={f.k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 24,
                    padding: "16px 0",
                    borderTop: "1px solid var(--ink-200)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--green-700)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      paddingTop: 2,
                    }}
                  >
                    {f.k}
                  </span>
                  <span style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-800)" }}>
                    {f.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactBlock />
      </main>
      <SiteFooter />
      <OdooLivechat channelId={2} />
    </>
  );
}

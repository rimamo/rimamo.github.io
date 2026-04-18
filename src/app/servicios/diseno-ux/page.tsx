import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ServiceHero from "@/components/ServiceHero";
import ContactBlock from "@/components/ContactBlock";
import OdooLivechat from "@/components/OdooLivechat";

export const metadata: Metadata = {
  title: "Diseño & UX",
  description:
    "Wireframes, sistemas de diseño y pasadas visuales. Todo contratado y facturado desde RIMAMO SL.",
};

const ENTREGABLES = [
  "Wireframes y flujos de usuario priorizados.",
  "Sistema de diseño base (tokens, componentes, estados).",
  "Pasadas visuales sobre pantallas clave.",
  "Entrega en Figma + handoff a desarrollo.",
];

export default function DisenoUXPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ServiceHero
          eyebrow="SERVICIO · DISEÑO & UX"
          tone="ink"
          title={<>Diseño aplicado, no decoración.</>}
          lead={
            <>
              Wireframes, sistemas de diseño y pasadas visuales sobre producto
              real. Se contrata y factura desde RIMAMO SL, con el mismo rigor
              que el resto de servicios.
            </>
          }
        />

        <section className="section-rmm">
          <div className="container-rmm" style={{ maxWidth: 720 }}>
            <div className="eyebrow">ENTREGABLES</div>
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
              Qué te llevas al acabar.
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
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--ink-900)",
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

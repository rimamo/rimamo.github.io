"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Layers, Sparkles, CodeXml, PenTool, LucideIcon, Menu, X } from "lucide-react";

type Props = {
  ctaHref?: string;
};

type Servicio = {
  slug: string;
  label: string;
  Icon: LucideIcon;
  color: string;
};

const SERVICIOS: Servicio[] = [
  { slug: "tech-lead-fraccional", label: "Tech Lead fraccional", Icon: Layers, color: "var(--amber-700)" },
  { slug: "automatizaciones-ia", label: "Automatización & IA", Icon: Sparkles, color: "var(--violet-700)" },
  { slug: "prototipado", label: "Prototipado", Icon: CodeXml, color: "var(--green-700)" },
  { slug: "diseno-ux", label: "Diseño & UX", Icon: PenTool, color: "var(--ink-900)" },
];

export default function SiteHeader({ ctaHref = "https://cal.com/rimamo/30min" }: Props) {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250,250,247,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--ink-200)",
      }}
    >
      <div
        className="container-rmm"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          gap: 32,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          aria-label="Inicio"
          onClick={() => setMobileOpen(false)}
        >
          <span className="wm" style={{ fontSize: 18 }}>
            RIM<span>Ā</span>MO
          </span>
        </Link>
        <nav
          className="rmm-nav"
          style={{
            display: "flex",
            gap: 28,
            marginLeft: "auto",
            marginRight: 24,
            alignItems: "center",
          }}
        >
          <div
            ref={wrapperRef}
            style={{ position: "relative" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-haspopup="menu"
              style={{
                ...navLink,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Servicios
              <span
                style={{
                  display: "inline-block",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 180ms var(--ease-out)",
                  fontSize: 10,
                }}
                aria-hidden
              >
                ▼
              </span>
            </button>
            {open && (
              <div
                role="menu"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  minWidth: 280,
                  background: "#fff",
                  border: "1px solid var(--ink-200)",
                  borderRadius: 8,
                  boxShadow: "0 22px 60px -24px rgba(15,15,18,0.25)",
                  padding: 8,
                  paddingTop: 16,
                }}
              >
                {SERVICIOS.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicios/${s.slug}`}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 12px",
                      borderRadius: 4,
                      textDecoration: "none",
                      color: "var(--ink-800)",
                      fontSize: 14,
                      fontWeight: 500,
                      border: "none",
                    }}
                    className="rmm-menu-item"
                  >
                    <s.Icon size={18} strokeWidth={1.5} color={s.color} />
                    <span>{s.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/#sobre" style={navLink}>Sobre mí</Link>
          <Link href="/#blog" style={navLink}>Blog</Link>
        </nav>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary rmm-cta-desktop"
        >
          Reservar llamada <span style={{ marginLeft: 2 }}>→</span>
        </a>

        {/* Burger móvil */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="rmm-mobile-menu"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className="rmm-burger"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            marginLeft: "auto",
            background: "transparent",
            border: "1px solid var(--ink-200)",
            borderRadius: 6,
            color: "var(--ink-900)",
            cursor: "pointer",
          }}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>
      </div>

      {/* Panel móvil */}
      {mobileOpen && (
        <div
          id="rmm-mobile-menu"
          className="rmm-mobile-panel"
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            background: "var(--paper-50)",
            borderBottom: "1px solid var(--ink-200)",
            padding: "16px 0 24px",
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          <div className="container-rmm">
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-500)",
                padding: "8px 4px",
              }}
            >
              Servicios
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid var(--ink-200)",
                borderRadius: 8,
                background: "#fff",
                overflow: "hidden",
                marginBottom: 20,
              }}
            >
              {SERVICIOS.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "14px 16px",
                    textDecoration: "none",
                    color: "var(--ink-900)",
                    fontSize: 15,
                    fontWeight: 500,
                    borderBottom:
                      i < SERVICIOS.length - 1 ? "1px solid var(--ink-200)" : "none",
                    boxShadow: `inset 3px 0 0 0 ${s.color}`,
                  }}
                >
                  <s.Icon size={20} strokeWidth={1.5} color={s.color} />
                  <span>{s.label}</span>
                  <span style={{ marginLeft: "auto", color: "var(--ink-400)" }}>→</span>
                </Link>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginBottom: 24,
              }}
            >
              <Link
                href="/#sobre"
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "14px 4px",
                  borderBottom: "1px solid var(--ink-200)",
                  textDecoration: "none",
                  color: "var(--ink-900)",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                Sobre mí
              </Link>
              <Link
                href="/#blog"
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "14px 4px",
                  borderBottom: "1px solid var(--ink-200)",
                  textDecoration: "none",
                  color: "var(--ink-900)",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                Blog
              </Link>
              <Link
                href="/#faq"
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "14px 4px",
                  borderBottom: "1px solid var(--ink-200)",
                  textDecoration: "none",
                  color: "var(--ink-900)",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                FAQ
              </Link>
            </div>

            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary btn-lg"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Reservar llamada <span style={{ marginLeft: 2 }}>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

const navLink: React.CSSProperties = {
  fontSize: 14,
  color: "var(--ink-700)",
  textDecoration: "none",
  fontWeight: 500,
};

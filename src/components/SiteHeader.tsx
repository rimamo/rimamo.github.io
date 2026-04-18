"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type Props = {
  ctaHref?: string;
};

const SERVICIOS = [
  { slug: "tech-lead-fraccional", label: "Tech Lead fraccional", tag: "P0" },
  { slug: "automatizaciones-ia", label: "Automatizaciones & IA", tag: "P0" },
  { slug: "prototipado", label: "Prototipado", tag: "P1" },
  { slug: "diseno-ux", label: "Diseño & UX", tag: "P1" },
];

export default function SiteHeader({ ctaHref = "https://cal.com/rimamo/30min" }: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

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
                  top: "calc(100% + 8px)",
                  left: 0,
                  minWidth: 280,
                  background: "#fff",
                  border: "1px solid var(--ink-200)",
                  borderRadius: 8,
                  boxShadow: "0 22px 60px -24px rgba(15,15,18,0.25)",
                  padding: 8,
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
                      justifyContent: "space-between",
                      alignItems: "center",
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
                    <span>{s.label}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 700,
                        color: "var(--ink-500)",
                      }}
                    >
                      {s.tag}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/#sobre" style={navLink}>Sobre mí</Link>
          <Link href="/#blog" style={navLink}>Blog</Link>
        </nav>
        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Reservar llamada <span style={{ marginLeft: 2 }}>→</span>
        </a>
      </div>
    </header>
  );
}

const navLink: React.CSSProperties = {
  fontSize: 14,
  color: "var(--ink-700)",
  textDecoration: "none",
  fontWeight: 500,
};

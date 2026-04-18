type Props = {
  ctaHref?: string;
};

export default function SiteHeader({ ctaHref = "#contacto" }: Props) {
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
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          aria-label="Inicio"
        >
          <span className="wm" style={{ fontSize: 18 }}>
            RIM<span>Ā</span>MO
          </span>
        </a>
        <nav
          style={{
            display: "flex",
            gap: 28,
            marginLeft: "auto",
            marginRight: 24,
          }}
          className="rmm-nav"
        >
          <a href="#verticales" style={navLink}>Servicios</a>
          <a href="#pricing" style={navLink}>Precios</a>
          <a href="#sobre" style={navLink}>Sobre mí</a>
          <a href="#blog" style={navLink}>Blog</a>
        </nav>
        <a href={ctaHref} className="btn btn-primary">
          Hablemos <span style={{ marginLeft: 2 }}>→</span>
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

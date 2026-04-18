export default function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--ink-900)",
        color: "var(--ink-300)",
        padding: "48px 0 40px",
        borderTop: "1px solid var(--ink-900)",
      }}
    >
      <div
        className="container-rmm"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div>
          <span
            className="wm"
            style={{ color: "var(--paper-50)", fontSize: 16 }}
          >
            RIM<span>Ā</span>MO
          </span>
          <p
            style={{
              fontSize: 13,
              color: "var(--ink-400)",
              margin: "12px 0 0",
              maxWidth: 360,
              lineHeight: 1.55,
            }}
          >
            Rimamo SL · Madrid · Servicios tech para equipos que quieren avanzar sin drama.
          </p>
        </div>
        <nav
          style={{
            display: "flex",
            gap: 24,
            fontSize: 13,
            flexWrap: "wrap",
          }}
        >
          <a href="/aviso-legal" style={footerLink}>Aviso legal</a>
          <a href="/privacidad" style={footerLink}>Privacidad</a>
          <a
            href="https://friendstech.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLink}
          >
            friendstech.dev
          </a>
        </nav>
      </div>
    </footer>
  );
}

const footerLink: React.CSSProperties = {
  color: "var(--ink-300)",
  textDecoration: "none",
  borderBottom: "1px solid var(--ink-700)",
  paddingBottom: 2,
};

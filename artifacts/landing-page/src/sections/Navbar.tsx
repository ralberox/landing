export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "rgba(15, 19, 30, 0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "0 2rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "68px",
      }}>
        <div style={{ fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-0.02em", color: "hsl(210, 20%, 92%)" }}>
          <span style={{ color: "hsl(38, 92%, 58%)" }}>English</span>Pro
        </div>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="#how-it-works" style={{ color: "hsl(210, 15%, 65%)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "hsl(210, 20%, 92%)")}
            onMouseLeave={e => (e.currentTarget.style.color = "hsl(210, 15%, 65%)")}>
            Cómo funciona
          </a>
          <a href="#programs" style={{ color: "hsl(210, 15%, 65%)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "hsl(210, 20%, 92%)")}
            onMouseLeave={e => (e.currentTarget.style.color = "hsl(210, 15%, 65%)")}>
            Programas
          </a>
          <a href="#cta" className="btn-primary" style={{ padding: "0.55rem 1.4rem", fontSize: "0.9rem" }}>
            Empieza ahora
          </a>
        </div>
      </div>
    </nav>
  );
}

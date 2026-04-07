import { useState } from "react";

export default function Navbar() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "rgba(11, 28, 44, 0.93)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
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
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          {!logoFailed ? (
            <img
              src="images/vfluent-logo.png"
              alt="VFluent"
              onError={() => setLogoFailed(true)}
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          ) : (
            <span style={{ fontWeight: 800, fontSize: "1.3rem", letterSpacing: "-0.02em", color: "#fff" }}>
              <span style={{ color: "#2FB6FF" }}>V</span>Fluent
            </span>
          )}
        </a>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="#how-it-works" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
            Cómo funciona
          </a>
          <a href="#programs" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}>
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

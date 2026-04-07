export default function Footer() {
  return (
    <footer style={{
      background: "#081625",
      padding: "2.5rem 2rem",
      borderTop: "1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "#fff" }}>
          <span style={{ color: "#2FB6FF" }}>V</span>Fluent
        </div>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.35)" }}>
          &copy; {new Date().getFullYear()} VFluent. Todos los derechos reservados.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacidad", "Términos", "Contacto"].map(link => (
            <a key={link} href="#" style={{
              color: "rgba(255,255,255,0.35)",
              textDecoration: "none",
              fontSize: "0.85rem",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

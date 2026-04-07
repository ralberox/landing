export default function Footer() {
  return (
    <footer style={{
      background: "hsl(222, 32%, 6%)",
      padding: "2.5rem 2rem",
      borderTop: "1px solid hsl(222, 20%, 14%)",
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
        <div style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "hsl(210, 20%, 80%)" }}>
          <span style={{ color: "hsl(38, 92%, 58%)" }}>English</span>Pro
        </div>
        <p style={{ fontSize: "0.85rem", color: "hsl(210, 15%, 42%)" }}>
          &copy; {new Date().getFullYear()} EnglishPro. Todos los derechos reservados.
        </p>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacidad", "Términos", "Contacto"].map(link => (
            <a key={link} href="#" style={{
              color: "hsl(210, 15%, 42%)",
              textDecoration: "none",
              fontSize: "0.85rem",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "hsl(210, 15%, 70%)")}
              onMouseLeave={e => (e.currentTarget.style.color = "hsl(210, 15%, 42%)")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

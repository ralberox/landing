export default function Hero() {
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "#0B1C2C",
      paddingTop: "68px",
    }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <img
          src="images/herowoman.jpeg"
          alt="Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.32,
          }}
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(11,28,44,0.97) 38%, rgba(11,28,44,0.5) 100%)",
        }} />
      </div>

      <div style={{
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "5rem 2rem",
        width: "100%",
      }}>
        <div style={{ maxWidth: "640px" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(47, 182, 255, 0.12)",
            border: "1px solid rgba(47, 182, 255, 0.3)",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "#2FB6FF",
            marginBottom: "1.5rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}>
            Plataforma de inglés profesional
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "1.5rem",
          }}>
            Aprende inglés con una{" "}
            <span style={{ color: "#2FB6FF" }}>ruta clara</span>{" "}
            y resultados reales
          </h1>

          <p style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem",
            maxWidth: "500px",
          }}>
            Diagnóstico personalizado, práctica guiada y una plataforma diseñada para llevarte al siguiente nivel, sin confusión.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#cta" className="btn-primary" style={{ fontSize: "1.05rem" }}>
              Comienza tu diagnóstico
            </a>
            <a href="#how-it-works" className="btn-outline" style={{ fontSize: "1.05rem" }}>
              Cómo funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

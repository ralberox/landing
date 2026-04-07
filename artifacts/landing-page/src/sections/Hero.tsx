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
      {/* Background layers */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {/* Hero woman image */}
        <img
          src="images/herowoman.jpeg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.38,
          }}
          onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
        />

        {/* Hex pattern overlay — very subtle */}
        <img
          src="images/hex-bg.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.04,
            mixBlendMode: "screen",
          }}
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />

        {/* Dark gradient overlay for text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(11,28,44,0.97) 35%, rgba(11,28,44,0.45) 80%, rgba(11,28,44,0.6) 100%)",
        }} />

        {/* Bottom fade */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to bottom, transparent, #0B1C2C)",
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "5rem 2rem",
        width: "100%",
      }}>
        <div style={{ maxWidth: "620px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(47, 182, 255, 0.1)",
            border: "1px solid rgba(47, 182, 255, 0.28)",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#2FB6FF",
            marginBottom: "1.75rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}>
            <span style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#2FB6FF",
              flexShrink: 0,
            }} />
            Plataforma de inglés profesional
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 3.9rem)",
            fontWeight: 800,
            lineHeight: 1.08,
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
            color: "rgba(255,255,255,0.62)",
            marginBottom: "2.75rem",
            maxWidth: "490px",
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

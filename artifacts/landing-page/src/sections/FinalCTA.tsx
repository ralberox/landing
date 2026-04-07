export default function FinalCTA() {
  return (
    <section id="cta" style={{
      position: "relative",
      padding: "7rem 2rem",
      overflow: "hidden",
      background: "hsl(222, 28%, 10%)",
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}>
        <img
          src="images/cta.jpeg"
          alt="Empieza tu aprendizaje"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.2,
          }}
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(15,19,30,0.96) 0%, rgba(22,28,46,0.92) 100%)",
        }} />
      </div>

      <div style={{
        position: "relative",
        maxWidth: "720px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          width: "3rem",
          height: "3px",
          background: "hsl(38, 92%, 58%)",
          margin: "0 auto 1.5rem",
          borderRadius: "2px",
        }} />
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: "hsl(210, 20%, 95%)",
          marginBottom: "1.25rem",
        }}>
          Empieza hoy tu camino hacia el inglés
        </h2>
        <p style={{
          fontSize: "1.1rem",
          lineHeight: 1.7,
          color: "hsl(210, 15%, 60%)",
          marginBottom: "2.5rem",
          maxWidth: "520px",
          margin: "0 auto 2.5rem",
        }}>
          Haz tu diagnóstico gratuito, descubre tu nivel real y recibe una ruta personalizada para avanzar con claridad.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-primary" style={{ fontSize: "1.05rem", padding: "0.9rem 2.2rem" }}>
            Quiero mi diagnóstico gratis
          </a>
          <a href="#how-it-works" className="btn-outline" style={{ fontSize: "1.05rem", padding: "0.9rem 2.2rem" }}>
            Ver cómo funciona
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Metodologia() {
  return (
    <section style={{
      background: "hsl(222, 30%, 8%)",
      padding: "6rem 2rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "4rem",
        alignItems: "center",
      }}>
        <div>
          <div style={{
            width: "2.5rem",
            height: "3px",
            background: "hsl(38, 92%, 58%)",
            marginBottom: "1.5rem",
            borderRadius: "2px",
          }} />
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "hsl(210, 20%, 92%)",
            marginBottom: "1.25rem",
          }}>
            Nuestra metodología
          </h2>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "hsl(210, 15%, 60%)",
            marginBottom: "1.5rem",
          }}>
            Usamos una metodología probada que combina explicaciones visuales, práctica activa y retroalimentación continua para que aprendas de forma natural y efectiva.
          </p>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "hsl(210, 15%, 60%)",
          }}>
            Nuestros instructores usan la técnica lightboard para que veas el razonamiento en tiempo real, tal como lo hace un tutor presencial.
          </p>
        </div>

        <div style={{
          borderRadius: "0.75rem",
          overflow: "hidden",
          background: "hsl(222, 28%, 11%)",
          aspectRatio: "16/9",
          border: "1px solid hsl(222, 20%, 18%)",
        }}>
          <video
            src="images/lightboard.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

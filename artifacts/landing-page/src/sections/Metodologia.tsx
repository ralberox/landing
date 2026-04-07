const supportingVideos = [
  { src: "images/grammar-flow.mp4", label: "Grammar Flow" },
  { src: "images/acoustic-phonetics.mp4", label: "Acoustic Phonetics" },
  { src: "images/concept-mapping.mp4", label: "Concept Mapping" },
];

export default function Metodologia() {
  return (
    <section style={{
      background: "#0B1C2C",
      padding: "6rem 2rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "4rem",
        alignItems: "start",
      }}>
        <div>
          <div style={{
            width: "2.5rem",
            height: "3px",
            background: "#2FB6FF",
            marginBottom: "1.5rem",
            borderRadius: "2px",
          }} />
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: "1.25rem",
          }}>
            Nuestra metodología
          </h2>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.58)",
            marginBottom: "1.5rem",
          }}>
            Usamos una metodología probada que combina explicaciones visuales, práctica activa y retroalimentación continua para que aprendas de forma natural y efectiva.
          </p>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.58)",
          }}>
            Nuestros instructores usan la técnica lightboard para que veas el razonamiento en tiempo real, tal como lo hace un tutor presencial.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Main video */}
          <div style={{
            borderRadius: "0.75rem",
            overflow: "hidden",
            background: "#102233",
            aspectRatio: "16/9",
            border: "1px solid rgba(255,255,255,0.07)",
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

          {/* Supporting videos grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.65rem",
          }}>
            {supportingVideos.map((v, i) => (
              <div key={i} style={{
                borderRadius: "0.5rem",
                overflow: "hidden",
                background: "#102233",
                aspectRatio: "16/9",
                border: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
              }}>
                <video
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "0.3rem 0.45rem",
                  background: "linear-gradient(to top, rgba(11,28,44,0.85), transparent)",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.02em",
                }}>
                  {v.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

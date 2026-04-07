const steps = [
  {
    title: "Diagnóstico",
    description: "Evaluamos tu nivel actual para definir un punto de partida claro y personalizado.",
    media: { type: "image", src: "images/diagnostico.jpeg", alt: "Diagnóstico de nivel" },
  },
  {
    title: "Práctica guiada",
    description: "Sesiones estructuradas con feedback inmediato para acelerar tu progreso.",
    media: { type: "image", src: "images/practica.jpeg", alt: "Práctica guiada" },
  },
  {
    title: "Plataforma",
    description: "Accede a tu dashboard personalizado con ejercicios, progreso y recursos.",
    media: { type: "video", src: "images/dashboard.mp4" },
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      background: "#F5F7FA",
      padding: "6rem 2rem",
      color: "#0B1C2C",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(47, 182, 255, 0.12)",
            border: "1px solid rgba(47, 182, 255, 0.3)",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "#1490cc",
            marginBottom: "1rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}>
            El proceso
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#0B1C2C",
          }}>
            Cómo funciona
          </h2>
        </div>

        {/* Grid: align-items stretch so all cards are the same total height */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.75rem",
          alignItems: "stretch",
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 2px 20px rgba(11,28,44,0.08)",
              border: "1px solid rgba(11,28,44,0.06)",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Media area — fixed height, identical on every card */}
              <div style={{
                width: "100%",
                height: "200px",
                background: "#dde3ea",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}>
                {step.media.type === "video" ? (
                  <video
                    src={step.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <img
                    src={step.media.src}
                    alt={step.media.alt}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    onError={e => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) {
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                        parent.innerHTML = `<span style="color:#9baab8;font-size:0.8rem;">${step.media.src}</span>`;
                      }
                    }}
                  />
                )}
              </div>

              {/* Text body */}
              <div style={{ padding: "1.5rem", flexGrow: 1 }}>
                <div style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#1490cc",
                  marginBottom: "0.5rem",
                }}>
                  Paso {i + 1}
                </div>
                <h3 style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#0B1C2C",
                  marginBottom: "0.6rem",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: "0.93rem",
                  color: "#4a6070",
                  lineHeight: 1.65,
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

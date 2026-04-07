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
      background: "hsl(210, 20%, 97%)",
      padding: "6rem 2rem",
      color: "hsl(222, 30%, 12%)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(251, 191, 36, 0.15)",
            border: "1px solid rgba(251, 191, 36, 0.35)",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "hsl(38, 75%, 38%)",
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
            color: "hsl(222, 30%, 12%)",
          }}>
            Cómo funciona
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "0.75rem",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              border: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
            }}>
              <div style={{
                width: "100%",
                aspectRatio: "16/10",
                background: "hsl(210, 15%, 92%)",
                overflow: "hidden",
              }}>
                {step.media.type === "video" ? (
                  <video
                    src={step.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : (
                  <img
                    src={step.media.src}
                    alt={step.media.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    onError={e => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = "none";
                      const parent = el.parentElement;
                      if (parent) {
                        parent.style.display = "flex";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                        parent.innerHTML = `<span style="color:hsl(210,15%,55%);font-size:0.85rem;">${step.media.src}</span>`;
                      }
                    }}
                  />
                )}
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: "hsl(38, 75%, 38%)",
                  marginBottom: "0.5rem",
                }}>
                  Paso {i + 1}
                </div>
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "hsl(222, 30%, 14%)",
                  marginBottom: "0.6rem",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: "0.95rem",
                  color: "hsl(222, 15%, 42%)",
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

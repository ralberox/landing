const programs = [
  {
    title: "Inglés General",
    description: "Construye bases sólidas en gramática, vocabulario y conversación para uso cotidiano.",
    image: "images/general.jpeg",
    tag: "Fundamentos",
  },
  {
    title: "Business English",
    description: "Domina el inglés profesional para reuniones, presentaciones y negociaciones.",
    image: "images/business.jpeg",
    tag: "Profesional",
  },
  {
    title: "Preparación TKT",
    description: "Certifícate como docente de inglés con nuestra preparación intensiva para el examen TKT.",
    image: "images/tkt.jpeg",
    tag: "Certificación",
  },
  {
    title: "Inglés para Transporte",
    description: "Aprende vocabulario especializado para la industria del transporte y la logística internacional.",
    image: "images/transporte.jpeg",
    tag: "Especialización",
  },
];

export default function Programs() {
  return (
    <section id="programs" style={{
      background: "#0e2235",
      padding: "6rem 2rem",
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
            color: "#2FB6FF",
            marginBottom: "1rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}>
            Programas
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#fff",
          }}>
            Elige tu programa
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          alignItems: "stretch",
        }}>
          {programs.map((program, i) => (
            <div key={i} style={{
              background: "#102233",
              borderRadius: "0.75rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(47,182,255,0.35)";
                el.style.boxShadow = "0 12px 32px rgba(47,182,255,0.08)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Fixed-height image area — 220px, always consistent */}
              <div style={{
                width: "100%",
                height: "220px",
                background: "#0d1e2d",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}>
                <img
                  src={program.image}
                  alt={program.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
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
                      parent.innerHTML = `<span style="color:rgba(255,255,255,0.18);font-size:0.8rem;text-align:center;padding:1rem;">${program.image}</span>`;
                    }
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: "1.5rem", flexGrow: 1 }}>
                <div style={{
                  display: "inline-block",
                  background: "rgba(47,182,255,0.1)",
                  color: "#2FB6FF",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  padding: "0.2rem 0.7rem",
                  borderRadius: "2rem",
                  marginBottom: "0.75rem",
                }}>
                  {program.tag}
                </div>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}>
                  {program.title}
                </h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.52)",
                  lineHeight: 1.65,
                }}>
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

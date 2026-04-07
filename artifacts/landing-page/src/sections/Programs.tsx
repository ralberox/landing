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
      background: "hsl(222, 28%, 10%)",
      padding: "6rem 2rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(251, 191, 36, 0.12)",
            border: "1px solid rgba(251, 191, 36, 0.3)",
            borderRadius: "2rem",
            padding: "0.35rem 1rem",
            fontSize: "0.82rem",
            fontWeight: 700,
            color: "hsl(38, 92%, 65%)",
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
            color: "hsl(210, 20%, 92%)",
          }}>
            Elige tu programa
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {programs.map((program, i) => (
            <div key={i} style={{
              background: "hsl(222, 28%, 12%)",
              borderRadius: "0.75rem",
              overflow: "hidden",
              border: "1px solid hsl(222, 20%, 18%)",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s, border-color 0.2s",
              cursor: "pointer",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(251,191,36,0.3)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "hsl(222, 20%, 18%)";
              }}
            >
              <div style={{
                width: "100%",
                height: "200px",
                background: "hsl(222, 25%, 16%)",
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <img
                  src={program.image}
                  alt={program.title}
                  style={{
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
                      parent.innerHTML = `<span style="color:hsl(210,15%,40%);font-size:0.85rem;text-align:center;padding:1rem;">${program.image}</span>`;
                    }
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem", flexGrow: 1 }}>
                <div style={{
                  display: "inline-block",
                  background: "rgba(251,191,36,0.1)",
                  color: "hsl(38, 92%, 60%)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "2rem",
                  marginBottom: "0.75rem",
                }}>
                  {program.tag}
                </div>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "hsl(210, 20%, 90%)",
                  marginBottom: "0.6rem",
                }}>
                  {program.title}
                </h3>
                <p style={{
                  fontSize: "0.9rem",
                  color: "hsl(210, 15%, 58%)",
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

const points = [
  "Falta de claridad sobre tu nivel real",
  "Ausencia de una ruta estructurada",
  "Práctica limitada sin guía efectiva",
];

export default function Problem() {
  return (
    <section style={{
      background: "#0e2235",
      padding: "6rem 2rem",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "4rem",
        alignItems: "center",
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
            Aprender inglés no debería sentirse confuso
          </h2>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.58)",
            marginBottom: "2rem",
          }}>
            Muchos estudiantes no avanzan porque no tienen claridad sobre su nivel ni una ruta definida.
          </p>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {points.map((point, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <div style={{
                  flexShrink: 0,
                  width: "1.5rem",
                  height: "1.5rem",
                  borderRadius: "50%",
                  background: "rgba(47,182,255,0.1)",
                  border: "1.5px solid #2FB6FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                }}>
                  <div style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#2FB6FF",
                  }} />
                </div>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.5 }}>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          borderRadius: "0.75rem",
          overflow: "hidden",
          background: "#102233",
          aspectRatio: "4/3",
          border: "1px solid rgba(255,255,255,0.07)",
        }}>
          <img
            src="images/problem.jpeg"
            alt="El problema de aprender inglés sin estructura"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={e => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const parent = el.parentElement;
              if (parent) {
                parent.style.display = "flex";
                parent.style.alignItems = "center";
                parent.style.justifyContent = "center";
                parent.innerHTML = '<span style="color:rgba(255,255,255,0.25);font-size:0.9rem;">images/problem.jpeg</span>';
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

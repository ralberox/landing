const points = [
  "Falta de claridad sobre tu nivel real",
  "Ausencia de una ruta estructurada",
  "Práctica limitada sin guía efectiva",
];

export default function Problem() {
  return (
    <section style={{
      background: "hsl(222, 28%, 10%)",
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
            Aprender inglés no debería sentirse confuso
          </h2>
          <p style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "hsl(210, 15%, 60%)",
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
                  background: "rgba(251,191,36,0.12)",
                  border: "1.5px solid hsl(38, 92%, 58%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "2px",
                }}>
                  <div style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "hsl(38, 92%, 58%)",
                  }} />
                </div>
                <span style={{ fontSize: "1rem", color: "hsl(210, 15%, 72%)", lineHeight: 1.5 }}>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ borderRadius: "0.75rem", overflow: "hidden", background: "hsl(222, 28%, 13%)", aspectRatio: "4/3" }}>
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
                parent.innerHTML = '<span style="color:hsl(210,15%,40%);font-size:0.9rem;">images/problem.jpeg</span>';
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

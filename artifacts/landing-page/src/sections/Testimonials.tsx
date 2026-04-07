const testimonials = [
  {
    name: "María García",
    role: "Ejecutiva de ventas",
    text: "Antes de EnglishPro no tenía idea de cuál era mi nivel real. El diagnóstico fue revelador y la ruta que me dieron cambió completamente mi forma de aprender.",
    initials: "MG",
  },
  {
    name: "Carlos Mendoza",
    role: "Estudiante TKT",
    text: "Pasé el TKT al primer intento gracias a la preparación estructurada. Los instructores conocen el examen a fondo y saben exactamente qué necesitas trabajar.",
    initials: "CM",
  },
  {
    name: "Laura Torres",
    role: "Logística internacional",
    text: "El programa de inglés para transporte fue exactamente lo que necesitaba. Ahora puedo manejar mis comunicaciones con clientes internacionales con total confianza.",
    initials: "LT",
  },
];

export default function Testimonials() {
  return (
    <section style={{
      background: "hsl(222, 30%, 8%)",
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
            Testimonios
          </div>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "hsl(210, 20%, 92%)",
          }}>
            Lo que dicen nuestros estudiantes
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "hsl(222, 28%, 11%)",
              borderRadius: "0.75rem",
              padding: "2rem",
              border: "1px solid hsl(222, 20%, 18%)",
            }}>
              <div style={{
                fontSize: "1.8rem",
                color: "hsl(38, 92%, 58%)",
                fontFamily: "Georgia, serif",
                lineHeight: 1,
                marginBottom: "1rem",
              }}>
                "
              </div>
              <p style={{
                fontSize: "0.97rem",
                lineHeight: 1.7,
                color: "hsl(210, 15%, 68%)",
                marginBottom: "1.5rem",
                fontStyle: "italic",
              }}>
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "hsl(38, 92%, 58%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "hsl(222, 30%, 8%)",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "hsl(210, 20%, 88%)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.82rem", color: "hsl(210, 15%, 52%)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

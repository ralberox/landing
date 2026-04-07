import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Globe, Users, BookOpen, Star,
  Quote, ChevronDown, Menu, X,
  ClipboardList, Map, Video, GraduationCap
} from "lucide-react";

const stats = [
  { value: 5000, suffix: "+", label: "Estudiantes formados" },
  { value: 98, suffix: "%", label: "Tasa de satisfacción" },
  { value: 15, suffix: "+", label: "Docentes especializados" },
  { value: 10, suffix: "+", label: "Años de experiencia" },
];

const courses = [
  {
    title: "Inglés General",
    image: "images/general.jpeg",
    imagePosition: "center top",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
    IconEl: Globe,
    forWho: "Para quienes buscan desarrollar su inglés desde una base sólida hasta un uso más fluido en contextos cotidianos.",
    includes: "Expresión oral, comprensión auditiva, gramática y vocabulario de uso diario.",
    benefits: [
      "Construye una base sólida para comunicarte con confianza",
      "Mejora tu expresión oral, comprensión auditiva y vocabulario paso a paso",
      "Avanza con práctica guiada y estructurada",
    ],
  },
  {
    title: "Business English",
    image: "images/business.jpeg",
    imagePosition: "center center",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    IconEl: Users,
    forWho: "Para profesionales que necesitan inglés en reuniones, presentaciones, correos y comunicación laboral diaria.",
    includes: "Reuniones, presentaciones, correos, negociación y vocabulario profesional.",
    benefits: [
      "Desarrolla seguridad en contextos profesionales reales",
      "Mejora tu comunicación en reuniones y presentaciones",
      "Fortalece tu inglés para crecer en el trabajo",
    ],
  },
  {
    title: "Inglés para profesionales del transporte",
    image: "images/transporte.jpeg",
    imagePosition: "center center",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    IconEl: BookOpen,
    forWho: "Para operadores y profesionales del transporte y la logística que necesitan comunicarse con mayor claridad en su entorno laboral.",
    includes: "Vocabulario operativo, inspecciones, indicaciones e interacción profesional básica.",
    benefits: [
      "Aprende el vocabulario más útil para tu trabajo",
      "Mejora tu comunicación en situaciones operativas reales",
      "Avanza con contenido claro, práctico y guiado",
    ],
  },
  {
    title: "Preparación TKT",
    image: "images/tkt.jpeg",
    imagePosition: "center center",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
    IconEl: Star,
    forWho: "Para docentes que buscan fortalecer su metodología y prepararse para una certificación internacional.",
    includes: "Metodología, conciencia lingüística y práctica enfocada en el examen.",
    benefits: [
      "Refuerza tu conocimiento metodológico",
      "Prepárate con estructura y enfoque",
      "Avanza con práctica útil para la certificación",
    ],
  },
];

const featureRows = [
  {
    title: "Diagnóstico claro desde el inicio",
    description: "Haz tu examen de ubicación y entiende tu nivel actual, tus fortalezas y los bloqueos que frenan tu avance.",
    imageLeft: false,
    assetType: "image" as const,
    assetSrc: "images/diagnostico.jpeg",
    primaryBtn: "Tomar examen de ubicación",
    secondaryBtn: "Hablar con un asesor",
  },
  {
    title: "Práctica guiada con docentes en vivo",
    description: "Participa en sesiones en vivo con acompañamiento docente y desarrolla tu inglés con estructura, claridad y seguimiento.",
    imageLeft: true,
    assetType: "image" as const,
    assetSrc: "images/practicaguiada.jpeg",
    primaryBtn: "Conocer el método",
    secondaryBtn: "Comenzar ahora",
  },
  {
    title: "Plataforma y seguimiento en un solo lugar",
    description: "Accede a recursos, seguimiento de progreso y tu ruta de aprendizaje en una experiencia organizada y disponible cuando la necesites.",
    imageLeft: false,
    assetType: "video" as const,
    assetSrc: "images/dashboard%20.mp4",
    primaryBtn: "Ver programas",
    secondaryBtn: "Comenzar ahora",
  },
];

const testimonials = [
  {
    name: "Camila R.",
    role: "Gerente de Proyectos · Colombia",
    text: "En pocos meses pasé de evitar reuniones en inglés a participar con mucha más seguridad. Lo que más me ayudó fue tener una ruta clara y clases que realmente se enfocaban en lo que yo necesitaba.",
    rating: 5,
    initials: "CR",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    name: "Diego M.",
    role: "Ingeniero de Software · México",
    text: "Después de intentar aprender por mi cuenta durante mucho tiempo, en VFluent por fin entendí qué me estaba frenando. El diagnóstico inicial y la estructura del programa me ayudaron a avanzar con mucha más claridad.",
    rating: 5,
    initials: "DM",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    name: "Valentina S.",
    role: "Directora de Marketing · Argentina",
    text: "Lo que más me gustó fue que no sentí que solo estaba tomando clases, sino siguiendo una ruta. Hoy me siento mucho más cómoda hablando en inglés y ya noto progreso real en mi fluidez.",
    rating: 5,
    initials: "VS",
    gradient: "from-emerald-400 to-teal-600",
  },
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const AnimatedNumber = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(ease * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

function HoneycombBg({ opacity = 0.38 }: { opacity?: number }) {
  const R = 44;
  const hW = R * Math.sqrt(3);
  const hexPoints = (cx: number, cy: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 180) * (60 * i - 30);
      return `${(cx + R * Math.cos(a)).toFixed(1)},${(cy + R * Math.sin(a)).toFixed(1)}`;
    }).join(" ");
  const rows = 14, cols = 22;
  const hexes: { cx: number; cy: number; k: string }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      hexes.push({ cx: c * hW + (r % 2 ? hW / 2 : 0), cy: r * R * 1.5, k: `${r}-${c}` });
    }
  }
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1600 950"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity }}
    >
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#1d3461" />
          <stop offset="100%" stopColor="#0c1830" />
        </linearGradient>
        <filter id="hexShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>
      {hexes.map(({ cx, cy, k }) => (
        <polygon
          key={k}
          points={hexPoints(cx, cy)}
          fill="url(#hg)"
          stroke="#0a1428"
          strokeWidth="1.5"
          filter="url(#hexShadow)"
        />
      ))}
    </svg>
  );
}

const VideoCallMockup = ({ type }: { type: number }) => {
  if (type === 1) {
    return (
      <div className="relative w-full max-w-[480px] bg-gradient-to-br from-[#0E1C36] to-[#071530] rounded-[2rem] p-5 shadow-2xl mx-auto border border-white/10">
        <div className="grid grid-cols-2 gap-4 h-[300px]">
          <div className="relative rounded-xl overflow-hidden h-full shadow-inner">
            <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=400&h=500" alt="Teacher" className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[10px] font-medium border border-white/10">Docente Sarah</div>
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative rounded-xl overflow-hidden h-full shadow-inner">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200" alt="Student 1" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[10px] font-medium border border-white/10">Emma</div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-full shadow-inner">
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200&h=200" alt="Student 2" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[10px] font-medium border border-white/10">David</div>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ x: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[#0E1C36] text-xs font-bold shadow-lg border border-white/50 flex items-center gap-2 whitespace-nowrap z-10"
        >
          🇺🇸 Estados Unidos
        </motion.div>
      </div>
    );
  } else if (type === 2) {
    return (
      <div className="relative w-full max-w-[480px] bg-gradient-to-br from-[#0E1C36] to-[#071530] rounded-[2rem] p-5 shadow-2xl mx-auto border border-white/10">
        <div className="grid grid-cols-5 gap-3 h-[300px]">
          <div className="col-span-3 relative rounded-xl overflow-hidden h-full shadow-inner">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=300&h=400" alt="Teacher Patty" className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[10px] font-medium border border-white/10">Docente Patty</div>
          </div>
          <div className="col-span-2 grid grid-rows-3 gap-3 h-full">
            <div className="relative rounded-xl overflow-hidden h-full shadow-inner">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200" alt="Abel" className="w-full h-full object-cover" />
              <div className="absolute bottom-1 left-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-md text-white text-[9px] font-medium border border-white/10">Abel</div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-full shadow-inner">
              <img src="https://images.unsplash.com/photo-1542178243-bc20204b769f?auto=format&fit=crop&q=80&w=200&h=200" alt="Fernando" className="w-full h-full object-cover" />
              <div className="absolute bottom-1 left-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-md text-white text-[9px] font-medium border border-white/10">Fernando</div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-full shadow-inner">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" alt="Ariadne" className="w-full h-full object-cover" />
              <div className="absolute bottom-1 left-1 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded-md text-white text-[9px] font-medium border border-white/10">Ariadne</div>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ x: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[#0E1C36] text-xs font-bold shadow-lg border border-white/50 flex items-center gap-2 whitespace-nowrap z-10"
        >
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Clase en vivo
        </motion.div>
      </div>
    );
  } else {
    return (
      <div className="relative w-full max-w-[480px] h-[340px] bg-gradient-to-br from-[#0E1C36] to-[#071530] rounded-[2rem] overflow-hidden shadow-2xl mx-auto border border-white/10 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 border border-white/20">
            <Video className="w-8 h-8 text-[#00D9FF]" />
          </div>
          <p className="text-white font-semibold text-sm">Plataforma de aprendizaje</p>
          <p className="text-white/50 text-xs mt-1">Accede a tu progreso y recursos</p>
        </div>
      </div>
    );
  }
};

type Course = (typeof courses)[number];

function CourseCard({ course, scrollToEnroll }: { course: Course; scrollToEnroll: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = course.IconEl;
  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-2xl border backdrop-blur-sm transition-all duration-300 overflow-hidden flex flex-col ${
        isHovered
          ? "border-[#00D9FF]/30 bg-white/[0.10] shadow-[0_4px_32px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,217,255,0.08)]"
          : "border-white/[0.12] bg-white/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.18)]"
      }`}
    >
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: "220px" }}>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            transform: isHovered ? "scale(1.0)" : "scale(1.08)",
            objectPosition: course.imagePosition,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${course.iconBg}`}>
          <Icon className={`w-5 h-5 ${course.iconColor}`} />
        </div>
        <h4 className={`text-[1.0625rem] font-bold mb-3 leading-snug transition-colors duration-200 ${isHovered ? "text-[#00D9FF]" : "text-white"}`}>
          {course.title}
        </h4>
        <p className="text-white/60 text-sm mb-1.5 leading-relaxed">
          <span className="text-white/80 font-semibold">Para quién:</span> {course.forWho}
        </p>
        <p className="text-white/60 text-sm leading-relaxed">
          <span className="text-white/80 font-semibold">Incluye:</span> {course.includes}
        </p>
        <AnimatePresence initial={false}>
          {isHovered && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-2 mb-6 pt-4 border-t border-white/[0.08]">
                {course.benefits.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-sm text-white/75 leading-relaxed">
                    <span className="text-[#00D9FF] font-bold text-sm leading-none mt-0.5 flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={scrollToEnroll}
                  className="flex-1 border border-white/20 text-white/80 hover:bg-white/8 hover:text-white px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wide transition-all duration-200">
                  Hablar con un asesor
                </button>
                <button
                  onClick={scrollToEnroll}
                  className="flex-1 bg-gradient-to-r from-[#00D9FF] to-[#3B82F6] text-[#071530] px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wide hover:shadow-[0_0_20px_rgba(0,217,255,0.35)] hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
                  Tomar examen de ubicación <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEnroll = () => {
    document.querySelector("#enroll")?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Programas", href: "#courses" },
    { name: "Metodología", href: "#why-us" },
    { name: "Testimonios", href: "#testimonials" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#050d1e" }}>

      {/* NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-3" : "bg-[#0E1C36]/60 backdrop-blur-sm py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-3 group">
              <span className="font-serif font-bold text-2xl tracking-tight text-white">VFluent.</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="uppercase tracking-widest text-xs font-medium transition-colors text-white/70 hover:text-[#00D9FF]"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={(e) => scrollToSection(e as unknown as React.MouseEvent<HTMLButtonElement>, "#enroll")}
                className="btn-brand shadow-lg shadow-cyan-500/20 text-xs px-5 py-2.5"
              >
                Tomar examen de ubicación
              </button>
            </nav>
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0E1C36] shadow-xl py-4 px-4 md:hidden flex flex-col gap-4 border-t border-white/10"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/80 py-2 border-b border-white/10 uppercase tracking-wider text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button
                className="w-full mt-2 btn-brand py-3 justify-center"
                onClick={(e) => scrollToSection(e as unknown as React.MouseEvent<HTMLButtonElement>, "#enroll")}
              >
                Tomar examen de ubicación
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO + PROBLEM UNIFIED SECTION */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #07122a 0%, #0d1f42 40%, #091530 70%, #050d1e 100%)" }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(16,52,110,0.45) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 40% 50% at 15% 60%, rgba(6,28,72,0.6) 0%, transparent 65%)" }} />

        {/* Hero photo — covers only the first viewport */}
        <div className="absolute top-0 left-0 right-0 z-[1]" style={{ height: "100vh" }}>
          <img
            src="images/herowoman.jpeg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.55, filter: "contrast(1.08)", objectPosition: "72% center" }}
          />
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 55% 70% at 75% 48%, rgba(255,255,255,0.13) 0%, transparent 65%)",
              mixBlendMode: "screen" as React.CSSProperties["mixBlendMode"],
            }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to right, #07122a 0%, #07122a 36%, rgba(7,18,42,0.76) 50%, rgba(7,18,42,0.05) 63%, transparent 74%)" }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(5,13,30,0.75) 0%, transparent 30%)" }} />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(5,13,30,0.95) 0%, rgba(5,13,30,0.5) 18%, transparent 36%)" }} />
        </div>

        <div className="absolute inset-0 z-[2] pointer-events-none">
          <HoneycombBg opacity={0.14} />
        </div>

        {/* Hero headline content */}
        <div className="relative z-10 w-full min-h-screen pt-20 px-[5vw] lg:px-[5.5vw] grid lg:grid-cols-[46fr_54fr] items-center pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-[560px] py-28 lg:py-0 pr-4 lg:pr-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/75 font-medium text-[11px] tracking-[0.14em] uppercase mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5BC8E8] animate-pulse" />
              Impulsado por docentes y tecnología
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold leading-[1.14] mb-7 font-serif text-white">
              Entiende tu inglés,{" "}
              <span style={{ color: "#A2C4CF" }}>perfecciónalo</span>{" "}
              y habla con fluidez.
            </h1>

            <p className="text-base lg:text-lg text-white/55 mb-9 leading-relaxed font-light max-w-md">
              Haz el examen de ubicación de VFluent y recibe tu ruta de aprendizaje personalizada en menos de 15 minutos.
            </p>

            <div className="flex flex-row items-center gap-4">
              <button
                onClick={scrollToEnroll}
                className="bg-gradient-to-r from-[#00D9FF] to-[#3B82F6] text-[#071530] px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:scale-[1.03] transition-all duration-300 flex items-center gap-2 group whitespace-nowrap"
              >
                Tomar examen de ubicación
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToEnroll}
                className="border border-white/25 text-white/80 hover:bg-white/5 backdrop-blur-sm px-7 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 whitespace-nowrap"
              >
                Hablar con un asesor
              </button>
            </div>
          </motion.div>
        </div>

        {/* Problem sub-section — same background, flows directly below */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-white leading-[1.2] mb-5">
                Aprender inglés no debería sentirse confuso
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-8 font-light">
                Muchos estudiantes no avanzan porque no tienen claridad sobre su nivel ni una ruta definida.
              </p>
              <ul className="space-y-4">
                {[
                  "Falta de claridad sobre tu nivel real",
                  "Ausencia de una ruta estructurada",
                  "Práctica limitada sin guía efectiva",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border border-[#00D9FF]/40 bg-[#00D9FF]/10 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.25} className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="images/problem.jpeg"
                  alt="Teaching demo"
                  className="w-full h-80 lg:h-[420px] object-cover block"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="relative z-20 -mt-12 pb-0" style={{ background: "linear-gradient(to bottom, #071530 0%, rgba(7,21,48,0) 72px)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-px shadow-[0_12px_48px_rgba(14,28,54,0.14)]"
            style={{ background: "linear-gradient(135deg, rgba(0,217,255,0.18) 0%, rgba(255,255,255,0) 50%, rgba(59,130,246,0.10) 100%)" }}
          >
            <div className="bg-white/97 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-slate-100/70">
                {[
                  { icon: ClipboardList, label: "Diagnóstico preciso" },
                  { icon: Map, label: "Ruta personalizada" },
                  { icon: Video, label: "Clases en vivo" },
                  { icon: GraduationCap, label: "Docentes + tecnología" },
                ].map(({ icon: Icon, label }, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="text-center px-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "linear-gradient(135deg, #E0F8FD 0%, #EEF4FF 100%)" }}
                    >
                      <Icon className="text-[#00A8C5]" style={{ width: "1.5rem", height: "1.5rem" }} />
                    </div>
                    <p className="text-xs font-bold text-[#0E1C36] uppercase tracking-widest leading-tight">{label}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section
        id="why-us"
        className="pt-28 pb-24 lg:pb-32 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #EDF2F8 0%, #E8EEF5 35%, #E5EBF3 65%, #ECF1F8 100%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #f0f5fa 0%, rgba(237,242,248,0) 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 10%, rgba(0,168,197,0.16) 50%, transparent 90%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-7 h-px" style={{ background: "linear-gradient(to right, transparent, #00A8C5)" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#00A8C5" }}>Cómo funciona</span>
                <div className="w-7 h-px" style={{ background: "linear-gradient(to left, transparent, #00A8C5)" }} />
              </div>
              <h3 className="text-4xl lg:text-[2.75rem] font-bold font-serif text-[#0E1C36] leading-[1.15] mb-5">
                Diagnostica. Avanza.<br className="hidden sm:block" /> Habla con confianza.
              </h3>
              <p className="text-[0.9375rem] text-slate-400 leading-relaxed font-light max-w-sm mx-auto">
                Tres pasos para llevar tu inglés de donde está hoy a donde necesitas que esté.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-24 lg:space-y-28">
            {featureRows.map((row, i) => (
              <div
                key={i}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${row.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: row.imageLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex-1 space-y-5 text-center lg:text-left"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0 border border-[#00A8C5]/20 shadow-sm"
                    style={{ background: "linear-gradient(135deg, #E6F9FD 0%, #EEF4FF 100%)" }}
                  >
                    <span className="font-bold font-serif text-base" style={{ color: "#00A8C5" }}>{i + 1}</span>
                  </div>
                  <h4 className="text-2xl lg:text-[1.875rem] font-bold font-serif text-[#0E1C36] leading-snug">{row.title}</h4>
                  <p className="text-[0.9375rem] text-slate-500 leading-relaxed font-light max-w-[26rem]">{row.description}</p>
                  {i === 2 && (
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <button
                      onClick={scrollToEnroll}
                      className="bg-gradient-to-r from-[#00D9FF] to-[#3B82F6] text-[#0E1C36] px-7 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-[0_8px_24px_rgba(0,217,255,0.32)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      {row.primaryBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={scrollToEnroll}
                      className="border border-slate-200 text-slate-500 hover:border-[#00A8C5]/40 hover:text-[#007A9A] px-7 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 bg-white/75 backdrop-blur-sm"
                    >
                      {row.secondaryBtn}
                    </button>
                  </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex-1 w-full"
                >
                  <div
                    className="rounded-2xl overflow-hidden ring-1 ring-slate-100"
                    style={{ boxShadow: "0 4px 32px rgba(14,28,54,0.07), 0 1px 6px rgba(14,28,54,0.04)" }}
                  >
                    {row.assetType === "video" ? (
                      <video
                        src={row.assetSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-[340px] object-cover block"
                      />
                    ) : (
                      <img
                        src={row.assetSrc}
                        alt={row.title}
                        className="w-full h-[340px] object-cover block"
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="relative overflow-hidden pt-24 pb-28 lg:pt-28 lg:pb-32" style={{ background: "#03070e" }}>
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 10%, rgba(0,217,255,0.22) 50%, transparent 90%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(122deg, rgba(1,3,10,0.92) 0%, rgba(1,3,10,0.45) 30%, transparent 55%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 46%, rgba(0,22,62,0.65) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-md text-cyan-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Nuestra metodología
            </div>
            <h2 className="text-4xl lg:text-[3.25rem] font-bold font-serif text-white mb-5 leading-[1.15]">
              Donde la tecnología<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-green-300 to-cyan-300">impulsa el aprendizaje</span>
            </h2>
            <p className="text-base text-white/55 max-w-xl mx-auto font-light leading-relaxed">
              En VFluent combinamos explicación visual, acompañamiento docente y una metodología clara para que entender el inglés sea más fácil y hablarlo sea más natural.
            </p>
          </FadeIn>

          <FadeIn className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-3xl mx-auto">
              <video
                src="images/lightboard.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[320px] object-cover block"
              />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {[
              {
                label: "Grammar Flow™",
                labelColor: "text-cyan-300",
                borderColor: "hover:border-cyan-400/30",
                desc: "Entiende la gramática como un sistema conectado, no como reglas aisladas.",
                videoSrc: "images/grammar-flow.mp4",
                delay: 0,
              },
              {
                label: "Acoustic Phonetics™",
                labelColor: "text-green-300",
                borderColor: "hover:border-green-400/30",
                desc: "Entrena tu oído y mejora tu pronunciación para hablar con mayor claridad y seguridad.",
                videoSrc: "images/accoustic-phonetics%20.mp4",
                delay: 0.1,
              },
              {
                label: "Concept Mapping™",
                labelColor: "text-blue-300",
                borderColor: "hover:border-blue-400/30",
                desc: "Visualiza cómo se conecta el inglés para comprenderlo mejor y usarlo con más confianza.",
                videoSrc: "images/concept-mapping%20.mp4",
                delay: 0.2,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: card.delay, ease: "easeOut" }}
                className={`flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] ${card.borderColor} transition-all duration-500 hover:bg-white/[0.07]`}
              >
                <div className="w-full overflow-hidden" style={{ height: "180px" }}>
                  <video
                    src={card.videoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="p-8 flex flex-col">
                  <p className={`${card.labelColor} text-[10px] font-bold uppercase tracking-[0.18em] mb-3`}>{card.label}</p>
                  <p className="text-white/65 text-sm leading-relaxed font-light">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeIn className="flex flex-wrap justify-center gap-3">
            {[
              { color: "cyan", label: "Gramática y fluidez" },
              { color: "green", label: "Desarrollo de vocabulario" },
              { color: "cyan", label: "Patrones de oración" },
              { color: "red", label: "Práctica conversacional" },
              { color: "blue", label: "Comunicación segura" },
              { color: "purple", label: "Partes del habla" },
            ].map((pill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`px-5 py-2.5 rounded-full border text-sm font-semibold backdrop-blur-md ${
                  pill.color === "cyan" ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300" :
                  pill.color === "green" ? "border-green-400/40 bg-green-400/10 text-green-300" :
                  pill.color === "red" ? "border-red-400/40 bg-red-400/10 text-red-300" :
                  pill.color === "blue" ? "border-blue-400/40 bg-blue-400/10 text-blue-300" :
                  "border-purple-400/40 bg-purple-400/10 text-purple-300"
                }`}
              >
                {pill.label}
              </motion.span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#0b1727" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('images/hex-bg.png')", backgroundSize: "auto", backgroundRepeat: "repeat", opacity: 0.035 }} />
        <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 10%, rgba(255,255,255,0.06) 50%, transparent 90%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 85% 65% at 55% 50%, rgba(8,26,65,0.32) 0%, transparent 75%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-7 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(0,217,255,0.7))" }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00D9FF]/80">Nuestros programas</span>
                <div className="w-7 h-px" style={{ background: "linear-gradient(to left, transparent, rgba(0,217,255,0.7))" }} />
              </div>
              <h3 className="text-4xl lg:text-[2.75rem] font-bold font-serif text-white leading-[1.15]">Encuentra el programa ideal para ti</h3>
              <p className="text-white/45 mt-4 text-[0.9375rem] font-light leading-relaxed max-w-lg mx-auto">
                Explora nuestros programas y descubre la ruta que mejor se adapta a tu nivel, tus metas y tu contexto.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5">
            {courses.map((course, i) => (
              <CourseCard key={i} course={course} scrollToEnroll={scrollToEnroll} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #111f36 0%, #0d1829 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('images/hex-bg.png')", backgroundSize: "auto", backgroundRepeat: "repeat", opacity: 0.03 }} />
        <div className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(14,28,54,0.55) 0%, transparent 100%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 40% at 50% 50%, rgba(20,38,80,0.20) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <div className="flex flex-col items-center justify-center mb-4">
                <div className="w-12 h-0.5 bg-[#00D9FF] mb-4" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#00D9FF]/80">Testimonios</h2>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold font-serif text-white">Lo que dicen nuestros estudiantes</h3>
              <p className="text-white/50 mt-4 text-lg font-light max-w-2xl mx-auto">
                Historias reales de estudiantes que avanzaron con más claridad, confianza y estructura junto a VFluent.
              </p>
            </FadeIn>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 h-full flex flex-col relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                <div className="flex gap-1 mb-6">
                  {[...Array(test.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#00D9FF] text-[#00D9FF]" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-8 flex-grow font-serif italic text-base">"{test.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${test.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {test.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{test.name}</p>
                    <p className="text-xs text-white/45 font-medium mt-0.5">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        id="enroll"
        className="py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="images/cta.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center", objectFit: "contain" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(6,16,42,0.88) 0%, rgba(8,19,37,0.82) 40%, rgba(6,14,32,0.85) 75%, rgba(4,12,26,0.92) 100%)" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[1]"
          style={{ background: "linear-gradient(to bottom, transparent, #040c1a)" }} />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="rounded-3xl border border-[#00D9FF]/20 bg-black/30 backdrop-blur-sm px-8 py-16 sm:px-16 sm:py-20 text-center shadow-[0_0_100px_rgba(0,217,255,0.07),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <p className="text-[#00D9FF] text-xs font-bold uppercase tracking-widest mb-4">Lugares limitados</p>
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif tracking-tight mb-4 text-white leading-tight">
                Comienza tu ruta<br />hacia la fluidez
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Haz el examen de ubicación de VFluent y recibe una ruta de aprendizaje personalizada en menos de 15 minutos.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToEnroll}
                  className="bg-gradient-to-r from-[#00D9FF] to-[#3B82F6] text-[#0E1C36] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-[0_0_30px_rgba(0,217,255,0.45)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
                >
                  Tomar examen de ubicación
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollToEnroll}
                  className="border border-white/25 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Hablar con un asesor
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white py-16 relative overflow-hidden" style={{ background: "#040c1a" }}>
        <HoneycombBg opacity={0.09} />
        <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(4,12,26,0.90) 0%, transparent 100%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif font-bold text-3xl tracking-tight text-white">VFluent.</span>
              </div>
              <p className="text-white/60 max-w-sm font-light leading-relaxed">
                Impulsamos a las personas a través del idioma. Creemos que hablar inglés con fluidez abre oportunidades reales.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-[#00D9FF]">Enlaces rápidos</h4>
              <ul className="space-y-4 text-white/60 font-light">
                <li><a href="#home" className="hover:text-[#00D9FF] transition-colors">Inicio</a></li>
                <li><a href="#courses" className="hover:text-[#00D9FF] transition-colors">Programas</a></li>
                <li><a href="#why-us" className="hover:text-[#00D9FF] transition-colors">Nosotros</a></li>
                <li><a href="#enroll" className="hover:text-[#00D9FF] transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-[#00D9FF]">Síguenos</h4>
              <div className="flex gap-4">
                {[
                  <svg key="tw" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>,
                  <svg key="ig" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 1.76-6.98 6.276-.058 1.281-.072 1.688-.072 4.947s.014 3.666.072 4.947c.199 4.511 2.618 6.076 6.98 6.276 1.28.058 1.687.072 4.947.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-1.76 6.979-6.276.059-1.281.073-1.689.073-4.947 0-3.259-.014-3.667-.072-4.947-.196-4.516-2.617-6.076-6.979-6.276-1.28-.058-1.688-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
                  <svg key="li" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#00D9FF] hover:border-[#00D9FF] hover:text-[#0E1C36] transition-all cursor-pointer text-white"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00D9FF]/20 to-transparent mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-light">
            <p>© {new Date().getFullYear()} VFluent. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Aviso de privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos del servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

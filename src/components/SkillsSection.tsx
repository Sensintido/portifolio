import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import JavaIcon from "../assets/java.png";
import PhotoshopIcon from "../assets/photoshop.png";
import FigmaIcon from '../assets/figma.png';

const categories = ["Todos", "Frontend", "Backend", "Database", "Design"];

const skills = [
  { name: "JavaScript", category: "Frontend", color: "#F7DF1E", slug: "javascript" },
  { name: "React", category: "Frontend", color: "#61DAFB", slug: "react" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", slug: "typescript" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", slug: "tailwindcss" },
  { name: "Java", category: "Backend", color: "#ED8B00", customIcon: JavaIcon },
  { name: "Spring Boot", category: "Backend", color: "#6DB33F", slug: "springboot" },
  { name: "Node.js", category: "Backend", color: "#339933", slug: "nodedotjs" },
  { name: "PostgreSQL", category: "Database", color: "#4169E1", slug: "postgresql" },
  { name: "MongoDB", category: "Database", color: "#47A248", slug: "mongodb" },
  { name: "Figma", category: "Design", color: "#F24E1E", customIcon: FigmaIcon },
  { name: "Photoshop", category: "Design", color: "#31A8FF", customIcon: PhotoshopIcon },
];

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredSkills = skills.filter(skill =>
    activeFilter === "Todos" ? true : skill.category === activeFilter
  );

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Cabeçalho — mesmo padrão das outras seções */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-bold">Tecnologias</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-3">
            Skills & Ferramentas
          </h2>
          <p className="text-gray-400 text-base md:text-lg">As tecnologias que utilizo para transformar ideias em realidade</p>
        </motion.div>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 md:px-7 py-2 rounded-full border transition-all duration-300 text-xs md:text-sm font-bold tracking-wide ${
                activeFilter === cat
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  : "bg-transparent text-white/30 border-white/10 hover:text-white/70 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                className="group relative flex flex-col items-center justify-center text-center p-5 md:p-7 rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${skill.color}35`;
                  (e.currentTarget as HTMLElement).style.background = `radial-gradient(ellipse at 50% 0%, ${skill.color}10 0%, rgba(0,0,0,0) 70%)`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                {/* Ícone */}
                <div className="relative mb-4 md:mb-5">
                  <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: skill.color }}
                  />
                  <img
                    src={skill.customIcon
                      ? skill.customIcon
                      : `https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`
                    }
                    alt={skill.name}
                    className="w-10 h-10 md:w-14 md:h-14 relative z-10 transition-transform duration-400 group-hover:-translate-y-1"
                  />
                </div>

                {/* Nome */}
                <p className="text-xs md:text-sm font-semibold text-white/60 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {skill.name}
                </p>

                {/* Linha colorida embaixo no hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-1/2 transition-all duration-500 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
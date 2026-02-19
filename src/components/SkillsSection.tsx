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
    <section id="skills" className="py-20 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Skills & Ferramentas
          </h2>
          <p className="text-gray-400 text-base md:text-lg">As tecnologias que utilizo para transformar ideias em realidade</p>
        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 md:px-8 py-2 md:py-2.5 rounded-full border transition-all duration-300 text-xs md:text-sm font-bold ${
                activeFilter === cat 
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                : "bg-white/5 text-gray-400 border-white/5 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative p-5 md:p-8 rounded-[24px] md:rounded-[32px] bg-[#0A0A0A] border border-white/5 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 hover:border-white/20"
              >
                <div className="relative mb-4 md:mb-6 z-10">
                  <div 
                    className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <img
                    src={skill.customIcon 
                        ? skill.customIcon 
                        : `https://cdn.simpleicons.org/${skill.slug}/${skill.color.replace('#', '')}`
                    }
                    alt={skill.name}
                    className="w-10 h-10 md:w-16 md:h-16 relative z-10 transition-transform duration-500 group-hover:scale-90"
                  />
                </div>
                <h3 className="text-sm md:text-xl font-bold mb-1 text-white z-10">{skill.name}</h3>
                <div className="h-4 md:h-8 transition-all group-hover:h-6 md:group-hover:h-12" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
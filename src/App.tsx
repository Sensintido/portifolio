import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion"; 
import Header from "./components/Header";
import SobreMim from "./components/SobreMim";
import ExperienceSection from "./components/ExperienceSection";
import CustomCursor from "./components/CustomCursor";
import SkillsSection from "./components/SkillsSection";
import ContactMe from './components/ContactSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white/20 overflow-x-hidden">
      
      <CustomCursor />
      <Header />

      {/* FUNDO ESPACIAL FIXO */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[300px] -translate-x-1/2 -translate-y-[60%] bg-white/20 blur-[120px] rounded-full" 
        />
      </div>

      <main className="relative z-10">
        
        {/* HERO */}
        <section id="início" className="h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="flex flex-col items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-2"
            >
              <span className="text-[10px] md:text-[12px] tracking-[0.4em] text-gray-400 uppercase font-bold">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[13vw] sm:text-7xl md:text-[120px] font-black tracking-[-0.05em] leading-[0.85] drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]"
            >
              Lucas Gabriel<br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-white/20 font-bold tracking-[0.05em] uppercase text-[0.6em] sm:text-[0.75em]"
              >
                Wendler de Souza
              </motion.span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center gap-3 md:gap-4 mt-8 md:mt-10"
            >
              {[
                { icon: <Github size={18} />, link: "https://github.com/sensintido" },
                { icon: <Linkedin size={18} />, link: "https://linkedin.com/in/lucas-gabriel-b83733312/" },
                { icon: <Mail size={18} />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=lucasgabrielwdesouza@gmail.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.link} 
                  target="_blank" 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        <SobreMim />
        <SkillsSection />
        <ExperienceSection />
        <ContactMe />
      </main>
    </div>
  );
}
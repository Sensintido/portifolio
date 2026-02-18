import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const menuItems = ["Início", "Sobre", "Projetos", "Skills", "Contato"];
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, x: "-50%", opacity: 0 }} 
        animate={{ y: 0, x: "-50%", opacity: 1 }}    
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-4 left-1/2 w-[95%] max-w-7xl z-50 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 md:px-10 h-16 flex items-center justify-between"
      >
        <span className="text-xl font-bold tracking-tighter text-white">LG</span>
        
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[3px] font-medium text-gray-400">
          {menuItems.map((item, index) => (
            <motion.a 
              key={item} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a 
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block text-[10px] uppercase tracking-widest font-bold px-6 py-2 rounded-full bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Fale comigo
          </motion.a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 border border-white/10 text-white"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-black/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col gap-4"
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-center text-sm uppercase tracking-[3px] font-medium text-gray-400 hover:text-white transition-colors py-2"
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center text-[10px] uppercase tracking-widest font-bold px-6 py-3 rounded-full bg-white text-black"
          >
            Fale comigo
          </a>
        </motion.div>
      )}
    </>
  );
}

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const lines = [
  { text: '> whoami', delay: 0, type: 'cmd' },
  { text: 'Lucas Gabriel Wendler de Souza', delay: 0.6, type: 'output' },
  { text: '> role', delay: 1.1, type: 'cmd' },
  { text: 'Full Stack Developer', delay: 1.7, type: 'output' },
  { text: '> skills --list', delay: 2.2, type: 'cmd' },
  { text: '[ React, TypeScript, Java, Spring Boot, Figma ]', delay: 2.8, type: 'output' },
  { text: '> passion', delay: 3.3, type: 'cmd' },
  { text: 'Interfaces elegantes + experiências memoráveis', delay: 3.9, type: 'output' },
  { text: '> status', delay: 4.4, type: 'cmd' },
  { text: 'Disponível para novos projetos ✓', delay: 5.0, type: 'output' },
];

function TypingLine({ text, delay, type }: { text: string; delay: number; type: string }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started && displayed === '') return null;

  return (
    <div className={`flex items-start gap-3 ${type === 'cmd' ? 'mt-5' : 'mt-1'}`}>
      {type === 'cmd' ? (
        <span className="text-green-400 text-sm font-mono shrink-0 mt-0.5">$</span>
      ) : (
        <span className="text-white/20 text-sm font-mono shrink-0 mt-0.5">→</span>
      )}
      <span className={`font-mono text-sm md:text-base ${
        type === 'cmd' ? 'text-white/90' : 'text-cyan-300/80'
      }`}>
        {displayed}
        {displayed.length < text.length && started && (
          <span className="inline-block w-2 h-4 bg-white/70 ml-0.5 animate-pulse align-middle" />
        )}
      </span>
    </div>
  );
}

const stats = [
  { value: '2+', label: 'Anos de experiência', desc: 'Desenvolvendo produtos reais' },
  { value: '8+', label: 'Projetos entregues', desc: 'Do protótipo ao deploy' },
  { value: '3', label: 'Stacks dominadas', desc: 'Front, Back e Design' },
];

export default function SobreMim() {
  return (
    <section id="sobre" className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12 md:mb-16 text-center"
        >
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-bold">Sobre mim</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Quem sou eu
          </h2>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-white/[0.08] mb-10 md:mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-[11px] text-white/25 font-mono tracking-wider">lucas@portfolio ~ </span>
          </div>
          <div className="bg-black/60 backdrop-blur-sm p-6 md:p-8 min-h-[280px]">
            {lines.map((line, i) => (
              <TypingLine key={i} {...line} />
            ))}
          </div>
        </motion.div>


        <div className="flex justify-center gap-0">
  {stats.map((stat, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group flex-1 px-4 md:px-10 py-6 md:py-8 text-center hover:bg-white/[0.02] transition-colors duration-500"
    >
      <p className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-1 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
        {stat.value}
      </p>
      <p className="text-white/60 text-xs md:text-sm font-semibold mb-1 uppercase tracking-widest">
        {stat.label}
      </p>
      <p className="text-white/25 text-xs hidden md:block">
        {stat.desc}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}
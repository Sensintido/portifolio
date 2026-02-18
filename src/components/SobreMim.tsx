import { motion } from 'framer-motion';

export default function SobreMim() {
  return (
    <section id="sobre" className="relative py-24 px-6 overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-bold">Sobre mim</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-[900] tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Quem sou eu
          </h2>
        </motion.div>

        {/* Card Principal de Texto */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 md:p-12 mb-12 backdrop-blur-sm"
        >
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto font-light">
            Sou desenvolvedor <span className="text-white font-medium">Full Stack</span> apaixonado por criar interfaces elegantes e experiências de usuário memoráveis. Com conhecimento em diversas tecnologias, busco sempre entregar soluções que combinam <span className="text-blue-500 font-medium">estética</span> e <span className="text-cyan-400 font-medium">funcionalidade</span>.
            <br /><br />
            Minha experiência abrange desde o desenvolvimento web até design de interfaces, utilizando ferramentas como <span className="text-blue-500 font-medium">Photoshop</span> e <span className="text-cyan-400 font-medium">Figma</span> para prototipagem e criação visual. <span className="text-green-500 font-medium">SpringBoot</span> e <span className="text-orange-500 font-medium"> Java</span> para um back-end bem consolidado e seguro.
          </p>
        </motion.div>

        {/* Cards de Características (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Código Limpo", desc: "Desenvolvimento com boas práticas e código organizado.", icon: "</>", color: "text-cyan-400" },
            { title: "Design Moderno", desc: "Interfaces elegantes e experiências memoráveis.", icon: "✦", color: "text-pink-500" },
            { title: "Inovação", desc: "Sempre buscando as melhores tecnologias.", icon: "⚡", color: "text-yellow-400" },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }} // Efeito cascata baseado no index
              className="group p-8 rounded-[24px] bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 text-center"
            >
              <div className={`text-2xl mb-4 ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</div>
              <h3 className={`text-lg font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-white text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
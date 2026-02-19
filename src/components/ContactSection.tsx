import { motion } from 'framer-motion';
import { Mail, MessageSquare, Linkedin, Github } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: "E-mail",
    value: "lucasgabrielwdesouza@gmail.com",
    link: "https://mail.google.com/mail/u/0/#compose?to=lucasgabrielwdesouza@gmail.com",
    glow: "rgba(99,130,255,0.6)",
    glowSoft: "rgba(99,130,255,0.15)",
    border: "rgba(99,130,255,0.4)",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "Conversar agora",
    link: "https://wa.me/47999754769",
    glow: "rgba(37,211,102,0.6)",
    glowSoft: "rgba(37,211,102,0.15)",
    border: "rgba(37,211,102,0.4)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Lucas Gabriel",
    link: "https://linkedin.com/in/lucas-gabriel-b83733312/",
    glow: "rgba(10,102,194,0.7)",
    glowSoft: "rgba(10,102,194,0.2)",
    border: "rgba(10,102,194,0.5)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@Sensintido",
    link: "https://github.com/Sensintido",
    glow: "rgba(200,200,200,0.5)",
    glowSoft: "rgba(200,200,200,0.1)",
    border: "rgba(200,200,200,0.35)",
  },
];

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-bold">Contato</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white mb-5 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Vamos trabalhar<br />juntos?
          </h2>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed">
            Aberto a projetos, freelas e colaborações.
          </p>
        </motion.div>

        {/* Cards afundados */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            // Alturas variadas para efeito "saindo do chão"
            const heights = ['h-52', 'h-64', 'h-56', 'h-60'];
            return (
              <motion.a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative ${heights[i]} rounded-t-3xl rounded-b-none flex flex-col justify-between p-6 overflow-hidden cursor-pointer`}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderBottom: 'none',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.04)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.border = `1px solid ${method.border}`;
                  el.style.borderBottom = 'none';
                  el.style.boxShadow = `0 0 40px ${method.glowSoft}, 0 0 80px ${method.glowSoft}, inset 0 1px 1px rgba(255,255,255,0.08)`;
                  el.style.background = `radial-gradient(ellipse at 50% 100%, ${method.glowSoft} 0%, rgba(0,0,0,0) 70%)`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.border = '1px solid rgba(255,255,255,0.07)';
                  el.style.borderBottom = 'none';
                  el.style.boxShadow = 'inset 0 1px 1px rgba(255,255,255,0.04)';
                  el.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                {/* Ícone no topo */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <Icon size={18} className="text-white/40 group-hover:text-white/90 transition-colors duration-300" />
                </div>

                {/* Texto em baixo */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/25 font-bold mb-2 group-hover:text-white/50 transition-colors duration-300">
                    {method.label}
                  </p>
                  <p className="text-white/70 text-sm font-semibold leading-tight group-hover:text-white transition-colors duration-300 break-all">
                    {method.value}
                  </p>
                </div>

                {/* Brilho de fundo no hover — círculo de luz vindo de baixo */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl"
                  style={{ background: method.glow }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Linha de "chão" */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-700 text-xs tracking-widest uppercase">
            © 2026 Lucas Gabriel Wendler de Souza
          </p>
          <p className="text-gray-700 text-xs">
            Todos os direitos reservados.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
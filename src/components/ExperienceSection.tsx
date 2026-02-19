import { Briefcase, Calendar, ArrowUpRight, Code2, Layers } from 'lucide-react';
import Click from '../assets/click.png';
import TodoList from '../assets/gerenciador de tarefas.png';
import Tatto from '../assets/ramos.png';
import Lazur from '../assets/lazur1.png';
import { motion } from 'framer-motion';
import Magitech from '../assets/magitehc.png';

const experiences = [
  {
    id: 1,
    role: 'Desenvolvedor Front-End',
    company: 'Lazu\'r',
    image: Lazur,
    githubUrl: 'https://github.com/Sensintido/lazur',
    period: '2025 - Outubro/Setembro',
    description: 'Desenvolvimento de interfaces modernas com React e Javascript. Implementação de designs responsivos e otimização de performance.',
    skills: ['React', 'Javascript', 'Tailwind'],
    color: 'hsl(207, 84%, 71%)',
    number: '01',
    type: 'Front-End',
  },
  {
    id: 2,
    role: 'Desenvolvedor Front-end',
    company: 'Portfólio Para Tatuador',
    image: Tatto,
    githubUrl: 'https://github.com/Sensintido/RamosTattoo',
    period: '2025 - Novembro',
    description: 'Criação de portfólio responsivo e animado para tatuador, projeto desenvolvido com JavaScript e React.',
    skills: ['Tailwind', 'Javascript', 'React'],
    color: 'hsl(239, 93%, 61%)',
    number: '02',
    type: 'Front-End',
  },
  {
    id: 3,
    role: 'Desenvolvedor Full Stack',
    company: "ClickRead'y",
    image: Click,
    githubUrl: 'https://github.com/Sensintido/ProjetoConclusaoCedup',
    period: '2025 - Fevereiro/Dezembro',
    description: 'Desenvolvimento completo de uma livraria digital com banco de dados não relacional e frameworks como React para front-end e Spring Boot para back-end, feito em colaboração com colegas no projeto de TCC.',
    skills: ['MongoDB', 'Java', 'SpringBoot', 'Typescript', 'React', 'Tailwind'],
    color: 'hsl(207, 70%, 55%)',
    number: '03',
    type: 'Full Stack',
  },
  {
    id: 4,
    role: 'Desenvolvedor Full Stack',
    company: 'MagiTech',
    image: Magitech,
    githubUrl: 'https://magitech-store.vercel.app/',
    period: '2025/Dezembro - 2026/Janeiro',
    description: 'Criação de aplicações web completas utilizando Java Spring Boot no backend e React com JavaScript e Tailwind no frontend.',
    skills: ['Java', 'Spring Boot', 'React', 'Tailwind', 'Javascript', 'PostgreSQL'],
    color: 'hsl(207, 97%, 50%)',
    number: '04',
    type: 'Full Stack',
  },
  {
    id: 5,
    role: 'Desenvolvedor Full Stack',
    company: 'Gerenciador de Tarefas',
    image: TodoList,
    githubUrl: 'https://github.com/Sensintido/To-Do-List',
    period: '2026 - Janeiro',
    description: 'Criação de simples interface para organização de tarefas feita em Javascript com React.',
    skills: ['React', 'Tailwind', 'Javascript'],
    color: 'hsl(207, 84%, 71%)',
    number: '05',
    type: 'Full Stack',
  },
  {
    id: 7,
    role: 'Em breve...',
    company: 'Próximos Projetos',
    githubUrl: '',
    period: '2026 →',
    description: 'Novos desafios e projetos estão por vir. Acompanhe meu GitHub para ficar por dentro das novidades!',
    skills: [],
    color: 'hsl(207, 66%, 53%)',
    number: '06',
    type: '???',
  }
];

const ExperienceSection = () => {
  return (
    <section id="projetos" className="relative py-20 md:py-32 overflow-hidden">

      <div className="absolute top-1/3 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[hsl(193,95%,68%)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[hsl(340,80%,60%)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 text-xs tracking-[0.2em] uppercase text-white/40 border border-white/10 rounded-full mb-6 bg-white/5">
            Trajetória
          </span>
          <h2 className="text-4xl md:text-7xl mb-4 font-black tracking-[-0.05em] leading-[0.8] drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]">
            Meus Projetos
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto">
            Conheça meus projetos e tenha acesso a eles com a timeline completa
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2" />
          {/* Timeline line mobile */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`relative flex items-center mb-16 md:mb-24 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 md:left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full md:-translate-x-1/2 timeline-dot z-10"
                style={{ backgroundColor: exp.color, '--dot-color': exp.color } as any}
              />

              {/* Card */}
              <div className={`ml-6 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <a
                  href={exp.githubUrl || '#'}
                  target={exp.githubUrl ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`block group ${!exp.githubUrl && 'cursor-default'}`}
                >
                  <div
                   className="relative glass-card rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
                    style={{
                      borderColor: `${exp.color}25`,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05)`,
                      }}
                  >
                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]"
                      style={{ boxShadow: `inset 0 0 60px ${exp.color}15` }}
                    />

                    {/* Image with overlay */}
                    {exp.image && (
                      <div className="relative h-40 md:h-52 w-full overflow-hidden">
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient overlay sempre visível */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Number badge no canto superior esquerdo */}
                        <div
                          className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest backdrop-blur-md"
                          style={{
                            backgroundColor: `${exp.color}20`,
                            border: `1px solid ${exp.color}40`,
                            color: exp.color,
                          }}
                        >
                          <span>{exp.number}</span>
                          <span className="opacity-60">·</span>
                          <span>{exp.type}</span>
                        </div>

                        {/* Link icon no canto superior direito */}
                        {exp.githubUrl && (
                          <div
                            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                            style={{
                              backgroundColor: `${exp.color}25`,
                              border: `1px solid ${exp.color}50`,
                            }}
                          >
                            <ArrowUpRight size={14} style={{ color: exp.color }} />
                          </div>
                        )}

                        {/* Company name sobreposto na imagem (bottom) */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                          <h3
                            className="text-lg md:text-2xl font-black tracking-tight leading-none"
                            style={{ color: exp.color }}
                          >
                            {exp.company}
                          </h3>
                          <p className="text-white/50 text-xs mt-1 flex items-center gap-1.5">
                            <Briefcase size={11} />
                            {exp.role}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Card body */}
                    <div className="p-5 md:p-6">

                      {/* Period */}
                      <div className="flex items-center gap-2 text-xs text-white/30 mb-4">
                        <Calendar size={11} />
                        <span>{exp.period}</span>
                      </div>

                      {/* Divider com cor */}
                      <div
                        className="h-px mb-4 w-full"
                        style={{ background: `linear-gradient(to right, ${exp.color}40, transparent)` }}
                      />

                      {/* Description */}
                      <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Skills + CTA row */}
                      <div className="flex items-end justify-between gap-3 flex-wrap">
                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 text-[10px] md:text-xs font-semibold rounded-full flex items-center gap-1"
                              style={{
                                backgroundColor: `${exp.color}12`,
                                color: exp.color,
                                border: `1px solid ${exp.color}25`,
                              }}
                            >
                              <Code2 size={9} />
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        {exp.githubUrl && (
                          <span
                            className="text-[11px] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shrink-0"
                            style={{ color: exp.color }}
                          >
                            Ver projeto <ArrowUpRight size={12} />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: `linear-gradient(to right, ${exp.color}, transparent)` }}
                    />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
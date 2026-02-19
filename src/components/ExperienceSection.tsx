import { Briefcase, Calendar } from 'lucide-react';
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
    company: 'Lazu´r',
    image: Lazur,
    githubUrl: 'https://github.com/Sensintido/lazur',
    period: '2025 - Outubro/Setembro',
    description: 'Desenvolvimento de interfaces modernas com React e Javascript. Implementação de designs responsivos e otimização de performance.',
    skills: ['React', 'Javascript', 'Tailwind'],
    color: 'hsl(207, 84%, 71%)',
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
  }
];

const ExperienceSection = () => {
  return (
    <section id="projetos" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[hsl(193,95%,68%)]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[hsl(340,80%,60%)]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
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
          {/* Linha da timeline — só aparece em md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px timeline-line -translate-x-1/2" />
          {/* Linha da timeline mobile — fica na esquerda */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              // Mobile: sempre coluna simples. Desktop: alterna lados
              className={`relative flex items-center mb-16 md:mb-24 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot da timeline */}
              <div 
                className="absolute left-0 md:left-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full md:-translate-x-1/2 timeline-dot z-10"
                style={{ backgroundColor: exp.color, '--dot-color': exp.color } as any}
              />

              {/* Card — ml-6 no mobile pra dar espaço à timeline, md:ml-0 */}
              <div className={`ml-6 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <a 
                  href={exp.githubUrl || '#'} 
                  target={exp.githubUrl ? "_blank" : "_self"} 
                  rel="noopener noreferrer"
                  className={`block group ${!exp.githubUrl && 'cursor-default'}`}
                >
                  <div 
                    className="glass-card rounded-[20px] md:rounded-[24px] overflow-hidden shine-effect transition-all duration-500 hover:-translate-y-2"
                    style={{
                      borderColor: `${exp.color}20`,
                      boxShadow: `0 0 30px ${exp.color}10`,
                    }}
                  >
                    {exp.image && (
                      <div className="relative h-36 md:h-48 w-full overflow-hidden bg-white/5 border-b border-white/10">
                        <img 
                          src={exp.image} 
                          alt={exp.company} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    )}

                    <div className="p-5 md:p-8">
                      <div className="flex items-start justify-between mb-3 md:mb-4">
                        <div>
                          <h3 className="text-base md:text-xl font-semibold mb-1" style={{ color: exp.color }}>
                            {exp.role}
                          </h3>
                          <p className="text-white/70 font-medium flex items-center gap-2 text-sm">
                            <Briefcase size={13} className="text-white/30" />
                            {exp.company}
                          </p>
                        </div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full animate-pulse shrink-0" style={{ backgroundColor: exp.color }} />
                      </div>

                      <div className="flex flex-wrap gap-3 text-xs md:text-sm text-white/40 mb-3 md:mb-4">
                        <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                      </div>

                      <p className="text-white/40 text-xs md:text-sm mb-4 md:mb-5 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full"
                            style={{
                              backgroundColor: `${exp.color}15`,
                              color: exp.color,
                              border: `1px solid ${exp.color}30`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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
import { motion } from "framer-motion";
import { Sparkles, Brain, Lightbulb, Feather } from "lucide-react";

const characteristics = [
  {
    icon: Brain,
    title: "Intimismo Radical",
    description: "Exploração profunda dos processos mentais e emocionais, priorizando o mundo interior sobre os fatos externos.",
  },
  {
    icon: Sparkles,
    title: "Fluxo de Consciência",
    description: "Narrativa que mimetiza o pensamento humano – desordenada, lírica e sem pontuação rígida.",
  },
  {
    icon: Lightbulb,
    title: "Epifania",
    description: "Momentos de súbita iluminação que revelam verdades profundas sobre a existência e rompem o verniz social.",
  },
  {
    icon: Feather,
    title: "Prosa Poética",
    description: "A sonoridade e ritmo das palavras são tão importantes quanto seus significados.",
  },
];

const Characteristics = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm">Estilo Literário</span>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-4">
            Características <span className="italic text-gold">Principais</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characteristics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-medium mb-4">{item.title}</h3>
              <p className="font-body text-primary-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characteristics;

import { motion } from "framer-motion";

const timelineEvents = [
  { year: "1920", event: "Nasce em Chechelnyk, Ucrânia" },
  { year: "1922", event: "Família imigra para o Brasil" },
  { year: "1943", event: "Publica 'Perto do Coração Selvagem'" },
  { year: "1944", event: "Casa-se com Maury Gurgel Valente" },
  { year: "1959", event: "Retorna ao Brasil após anos na Europa" },
  { year: "1964", event: "Publica 'A Paixão Segundo G.H.'" },
  { year: "1977", event: "Publica 'A Hora da Estrela' e falece em dezembro" },
];

const Timeline = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm">Cronologia</span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mt-4">
            Uma Vida em <span className="italic text-primary">Palavras</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timelineEvents.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 mb-8"
            >
              <span className="font-display text-3xl text-gold w-24 shrink-0 text-right">
                {item.year}
              </span>
              <div className="w-3 h-3 rounded-full bg-primary shrink-0" />
              <p className="font-body text-lg text-muted-foreground">
                {item.event}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

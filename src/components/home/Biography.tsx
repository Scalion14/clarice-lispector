import { motion } from "framer-motion";
import ClariceImg from "@/assets/lispector.jpg"; // ← IMPORT DA IMAGEM

const Biography = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm">Biografia</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mt-4 mb-8">
              A Voz do <span className="italic text-primary">Intimismo</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Nascida Chaya Pinkhasovna Lispector em{" "}
                <strong className="text-foreground">10 de dezembro de 1920</strong>, 
                na Ucrânia, Clarice chegou ao Brasil ainda bebê, naturalizando-se brasileira. 
                Cresceu no Recife, onde desenvolveu precocemente sua paixão pela literatura.
              </p>
              <p>
                Formou-se em Direito e trabalhou como jornalista, mas foi na ficção que encontrou 
                sua verdadeira vocação. Seu primeiro romance, <em>"Perto do Coração Selvagem"</em> (1943), 
                causou impacto imediato pela originalidade de sua prosa.
              </p>
              <p>
                Clarice revolucionou a literatura brasileira com sua escrita introspectiva, 
                explorando os recônditos da consciência humana com uma linguagem única e poética.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-secondary rounded-sm overflow-hidden relative group">

              {/* FOTO REAL DE CLARICE (substitui o placeholder) */}
              <img
                src={ClariceImg}
                alt="Clarice Lispector"
                className="w-full h-full object-cover"
              />

              {/* GRADIENTE IGUAL AO SEU */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Elemento decorativo — preservado */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Biography;

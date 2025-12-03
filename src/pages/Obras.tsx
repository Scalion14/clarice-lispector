import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BookOpen, Calendar, Quote } from "lucide-react";

const obras = [
  {
    title: "Perto do Coração Selvagem",
    year: 1943,
    type: "Romance",
    description: "Obra de estreia que causou impacto imediato pela originalidade. Narra a trajetória de Joana, uma mulher em busca de sua identidade e liberdade interior.",
    quote: "Ela era tão nova. E tão sem história.",
    highlight: true,
  },
  {
    title: "O Lustre",
    year: 1946,
    type: "Romance",
    description: "A história de Virgínia, uma jovem que deixa o campo para viver na cidade, enfrentando a solidão e a busca por significado.",
    quote: "A grande alegria de viver... não era essa a luz?",
  },
  {
    title: "A Cidade Sitiada",
    year: 1949,
    type: "Romance",
    description: "Retrata o crescimento de uma cidade do interior e a transformação de sua protagonista, Lucrécia Neves.",
    quote: "A vida é feita de pequenos acontecimentos.",
  },
  {
    title: "Laços de Família",
    year: 1960,
    type: "Contos",
    description: "Coletânea de contos que explora as tensões familiares e as epifanias do cotidiano feminino.",
    quote: "Ah, é uma felicidade ter nascido.",
    highlight: true,
  },
  {
    title: "A Maçã no Escuro",
    year: 1961,
    type: "Romance",
    description: "Martim foge acreditando ter cometido um crime, iniciando uma jornada de autodescoberta no isolamento.",
    quote: "Ele estava finalmente de pé, e era um homem.",
  },
  {
    title: "A Paixão Segundo G.H.",
    year: 1964,
    type: "Romance",
    description: "Obra-prima experimental onde uma escultora tem uma experiência mística ao confrontar uma barata em seu apartamento.",
    quote: "Perder-se também é caminho.",
    highlight: true,
  },
  {
    title: "A Legião Estrangeira",
    year: 1964,
    type: "Contos",
    description: "Coletânea que mistura contos e crônicas, explorando temas existenciais e o cotidiano brasileiro.",
    quote: "Escrever é tantas vezes lembrar-se do que nunca existiu.",
  },
  {
    title: "Uma Aprendizagem ou O Livro dos Prazeres",
    year: 1969,
    type: "Romance",
    description: "A história de amor entre Lóri e Ulisses, uma jornada de autodescoberta e aprendizado emocional.",
    quote: "Eu tenho à medida que designo.",
  },
  {
    title: "Água Viva",
    year: 1973,
    type: "Ficção",
    description: "Monólogo lírico de uma pintora que reflete sobre arte, tempo e existência em prosa poética.",
    quote: "É com uma alegria tão profunda. É uma tal aleluia.",
  },
  {
    title: "A Hora da Estrela",
    year: 1977,
    type: "Romance",
    description: "Último romance publicado em vida. Conta a história de Macabéa, uma nordestina pobre no Rio de Janeiro.",
    quote: "Ela era incompetente para a vida.",
    highlight: true,
  },
  {
    title: "Um Sopro de Vida",
    year: 1978,
    type: "Romance",
    description: "Obra póstuma onde um escritor cria a personagem Ângela Pralini, refletindo sobre criação e mortalidade.",
    quote: "Quero escrever movimento puro.",
  },
];

const Obras = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold uppercase tracking-[0.3em] text-sm"
            >
              Bibliografia
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl md:text-7xl font-light text-foreground mt-4 mb-6"
            >
              Suas <span className="italic text-primary">Obras</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-body text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Uma jornada através dos livros que revolucionaram a literatura brasileira
            </motion.p>
          </div>
        </section>

        {/* Works Grid */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {obras.map((obra, index) => (
                <motion.article
                  key={obra.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`card-literary p-8 ${obra.highlight ? "border-gold/50 bg-card" : ""}`}
                >
                  {obra.highlight && (
                    <span className="inline-block text-xs uppercase tracking-widest text-gold mb-4 font-body">
                      Obra Essencial
                    </span>
                  )}
                  
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground font-body">{obra.type}</span>
                  </div>

                  <h3 className="font-display text-2xl text-foreground mb-2">
                    {obra.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-gold font-display text-lg">{obra.year}</span>
                  </div>

                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {obra.description}
                  </p>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-start gap-2">
                      <Quote className="w-4 h-4 text-primary/50 mt-1 shrink-0" />
                      <p className="font-display italic text-foreground/80">
                        {obra.quote}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Obras;

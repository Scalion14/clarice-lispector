import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Pen, Newspaper, Heart, Quote } from "lucide-react";

const personalidades = [
  {
    icon: Pen,
    title: "A Escritora",
    subtitle: "A Arte de Ser Só",
    color: "primary",
    description: "A voz do Intimismo Radical e do Fluxo de Consciência",
    content: [
      {
        heading: "Intimismo Radical e Fluxo de Consciência",
        text: "Clarice não se interessa por narrar fatos externos, mas sim pelos processos mentais. Ela utiliza uma escrita que mimetiza o pensamento – desordenada, lírica e sem pontuação rígida – forçando o leitor a entrar na mente da personagem.",
      },
      {
        heading: "Metalinguagem",
        text: "A própria escrita é um tema central. Em obras como 'A Paixão Segundo G.H.', a narradora se debate com a incapacidade da palavra de descrever a experiência do 'não-ser', tornando a luta pela expressão o verdadeiro enredo.",
      },
    ],
    quote: "Minha análise abrange o cerne da sua literatura. Essa é a Clarice que destrói o romance tradicional.",
  },
  {
    icon: Newspaper,
    title: "A Jornalista",
    subtitle: "A Crônica do Instante",
    color: "gold",
    description: "A ponte entre o mundo interno e o externo",
    content: [
      {
        heading: "Olhar Cirúrgico sobre o Cotidiano",
        text: "Como cronista, Clarice tinha um olhar cirúrgico sobre o cotidiano. Em contos e em suas crônicas para jornais, ela retira o véu do banal, transformando a rotina em material filosófico.",
      },
      {
        heading: "Proximidade com a Realidade Social",
        text: "Em 'A Hora da Estrela', ela cria Macabéa, a nordestina pobre e invisível do Rio de Janeiro, mas a aborda com a mesma intensidade filosófica que dava às suas personagens burguesas. O foco é na observação sensível da existência.",
      },
    ],
    quote: "Analiso a ponte entre o mundo interno e o externo, seja na fila do banco ou no almoço de domingo.",
  },
  {
    icon: Heart,
    title: "A Mulher",
    subtitle: "O Vazio Familiar",
    color: "wine-light",
    description: "O conflito entre o Ser e o Papel social",
    content: [
      {
        heading: "Ser e Papel Social",
        text: "Em suas obras, a vida familiar e a condição feminina são dissecadas. O lar não é um refúgio, mas o palco de crises existenciais profundas que revelam as tensões do papel feminino na sociedade.",
      },
      {
        heading: "A Epifania",
        text: "O momento de súbita iluminação. Em 'Laços de Família', uma dona de casa está preparando um frango ou olhando para o cego na rua, e subitamente a verdade da sua vida, a sensação de vazio ou a fragilidade da sua existência a atinge.",
      },
    ],
    quote: "Essa revelação rompe o verniz social e confronta o personagem com o seu 'eu' mais selvagem.",
  },
];

const Personalidades = () => {
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
              Três Lentes
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl md:text-7xl font-light text-foreground mt-4 mb-6"
            >
              As <span className="italic text-primary">Personalidades</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-body text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Para compreender a obra de Clarice Lispector, é preciso entender sua múltipla identidade: 
              a artista que buscava a palavra exata, a cronista que capturava o Rio de Janeiro 
              e a mulher que vivia sob as convenções sociais.
            </motion.p>
          </div>
        </section>

        {/* Personalities */}
        <section className="py-8">
          <div className="container mx-auto px-6 space-y-16">
            {personalidades.map((persona, index) => (
              <motion.article
                key={persona.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full border-2 border-${persona.color} flex items-center justify-center`}>
                      <persona.icon className={`w-8 h-8 text-${persona.color}`} />
                    </div>
                    <div>
                      <span className="text-gold uppercase tracking-widest text-xs font-body">
                        Lente {index + 1}
                      </span>
                      <h2 className="font-display text-3xl text-foreground">
                        {persona.title}
                      </h2>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl italic text-primary mb-2">
                    {persona.subtitle}
                  </h3>
                  <p className="font-body text-lg text-muted-foreground mb-8">
                    {persona.description}
                  </p>

                  {persona.content.map((item, i) => (
                    <div key={i} className="mb-6">
                      <h4 className="font-display text-xl text-foreground mb-2">
                        {item.heading}
                      </h4>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-card rounded-sm p-10 relative border border-border/50">
                    <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
                    <div className="relative z-10 pt-8">
                      <p className="font-display text-xl italic text-foreground leading-relaxed mb-6">
                        "{persona.quote}"
                      </p>
                      <div className="section-divider" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Closing Quote */}
        <section className="py-24 bg-card mt-16">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="quote-mark">"</span>
              <p className="font-display text-2xl md:text-3xl italic text-foreground max-w-3xl mx-auto leading-relaxed">
                Que ninguém se engane: só se consegue a simplicidade através de muito trabalho.
              </p>
              <div className="section-divider mx-auto mt-8" />
              <p className="font-body text-muted-foreground mt-6">
                — Clarice Lispector
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Personalidades;

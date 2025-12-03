import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Biography from "@/components/home/Biography";
import Timeline from "@/components/home/Timeline";
import Characteristics from "@/components/home/Characteristics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Biography />
        <Characteristics />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-display text-xl italic mb-4">
            "A palavra é o meu domínio sobre o mundo."
          </p>
          <div className="w-16 h-[1px] bg-gold mb-4" />
          <p className="text-sm text-primary-foreground/70">
            Clarice Lispector (1920 - 1977)
          </p>
          <p className="text-xs text-primary-foreground/50 mt-6">
            Homenagem à maior escritora brasileira
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroProps {
  onButtonClick: () => void;
}

export function Hero({ onButtonClick }: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Somos a garantia do seu próximo passo
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Aqui valorizamos o que tem valor pra você. Oferecemos crédito com as
            melhores taxas para você melhorar de vida.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={onButtonClick}>
              Explorar nossos produtos
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onButtonClick}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground"
            >
              Baixar nosso app
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductCard } from "@/components/ProductCard";
import { ChatWidget, FloatingChatButton } from "@/components/ChatWidget";
import carLoanImage from "@/assets/car-loan.jpg";
import houseLoanImage from "@/assets/house-loan.jpg";
import personalLoanImage from "@/assets/personal-loan.jpg";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const products = [
    {
      title: "Empréstimo com garantia de veículo",
      description: "Taxas a partir de 1,19% a.m.",
      details:
        "Seu carro é o caminho para conseguir valores de até R$ 150 mil, com parcelas que cabem no orçamento.",
      imageSrc: carLoanImage,
    },
    {
      title: "Empréstimo com garantia de imóvel",
      description: "As menores taxas do mercado",
      details:
        "Seu imóvel abre portas para você ter um crédito de até R$ 3 milhões com as menores taxas do mercado.",
      imageSrc: houseLoanImage,
    },
    {
      title: "Empréstimo pessoal",
      description: "Rápido e sem burocracia",
      details:
        "Dinheiro na conta sem complicação. Parcelas fixas e aprovação rápida para realizar seus projetos.",
      imageSrc: personalLoanImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onButtonClick={handleOpenChat} />

      <main>
        <Hero onButtonClick={handleOpenChat} />
        
        <FeaturesSection />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">
              Nossos produtos de crédito
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Escolha a modalidade de empréstimo ideal para o seu momento e
              conquiste seus objetivos
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  {...product}
                  onButtonClick={handleOpenChat}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Simule agora e descubra as condições especiais que preparamos para
              você
            </p>
            <button
              onClick={handleOpenChat}
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Começar simulação
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">CreditoFácil</h3>
              <p className="text-sm opacity-80">
                Crédito com inteligência para você realizar seus sonhos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Empréstimo com veículo</li>
                <li>Empréstimo com imóvel</li>
                <li>Empréstimo pessoal</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Imprensa</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ajuda</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Central de ajuda</li>
                <li>Segurança</li>
                <li>Fale conosco</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2025 CreditoFácil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {!isChatOpen && <FloatingChatButton onClick={handleOpenChat} />}
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;

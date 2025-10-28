import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RatesComparison } from "@/components/RatesComparison";
import { HowItWorks } from "@/components/HowItWorks";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FAQ } from "@/components/FAQ";
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

  const solutions = [
    {
      title: "Empréstimo com garantia de imóvel",
      description: "Use seu imóvel como garantia",
      details:
        "Use seu imóvel como garantia e solicite até 60% do valor dele em crédito.",
      imageSrc: houseLoanImage,
    },
    {
      title: "Empréstimo com garantia de veículo",
      description: "Aceitamos seu carro mesmo financiado",
      details:
        "Aceitamos seu carro mesmo financiado e você segue usando ele normalmente.",
      imageSrc: carLoanImage,
    },
    {
      title: "Empréstimo consignado privado",
      description: "Crédito exclusivo para colaboradores",
      details:
        "Crédito exclusivo para colaboradores conveniados, inclusive negativados.",
      imageSrc: personalLoanImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onButtonClick={handleOpenChat} />

      <main>
        <Hero onButtonClick={handleOpenChat} />
        
        <RatesComparison onButtonClick={handleOpenChat} />
        
        <section className="py-20 bg-gradient-to-br from-green-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Empréstimo com garantia
            </h2>
            <p className="text-xl text-center text-foreground/80 font-medium mb-8">
              Seu veículo ou imóvel são a chave pra ter um crédito de qualidade
            </p>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
              O empréstimo com garantia é uma modalidade ideal para quem tem carro ou imóvel 
              e precisa de crédito de R$ 5 mil a R$ 3 milhões. Compare a diferença:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {solutions.map((product, index) => (
                <ProductCard
                  key={index}
                  {...product}
                  onButtonClick={handleOpenChat}
                />
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />
        
        <FeaturesSection />

        <section className="py-16 bg-gradient-to-br from-green-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nossa reputação também merece créditos
            </h2>
            <div className="max-w-4xl mx-auto bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-lg">
              <blockquote className="text-center">
                <p className="text-lg md:text-xl text-muted-foreground italic mb-6 leading-relaxed">
                  "Creditas uses collateral such as home and vehicles to reduce risk in loans to individuals, 
                  cutting rates charged from 140% on average at the Brazilian credit market for unsecured loans to about 35%."
                </p>
                <footer className="text-sm text-primary font-semibold">
                  — Financial Times
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <FAQ />

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

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-1">
              <h3 className="font-bold text-xl mb-4">Creditas</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Quem somos</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Relação com investidores</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Trabalhe com a gente</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Seja parceiro</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Segurança</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Para você</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Casa</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="hover:text-primary cursor-pointer transition-colors">Empréstimo com garantia de imóvel</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Financiamento imobiliário</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Carro</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="hover:text-primary cursor-pointer transition-colors">Empréstimo com garantia de veículo</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Financiamento de carro</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Seguro auto</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Para empresas</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Benefícios flexíveis</p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li className="hover:text-primary cursor-pointer transition-colors">Benefícios corporativos</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Empréstimo consignado</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Antecipação de salário</li>
                    <li className="hover:text-primary cursor-pointer transition-colors">Educação financeira</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Para parceiros</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Portal do parceiro</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Documentações de API</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Seja parceiro</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Outros canais</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Tech Blog</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Blog Exponencial</li>
                <li className="hover:text-primary cursor-pointer transition-colors">RH Estratégico</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Ajuda</li>
              </ul>
              <div className="mt-6">
                <p className="text-sm font-semibold mb-2">Baixe o app</p>
                <div className="flex flex-col gap-2">
                  <button className="bg-white/10 hover:bg-white/20 px-3 py-2 rounded text-xs transition-colors">
                    App Store
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 px-3 py-2 rounded text-xs transition-colors">
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center mb-6">
              <p className="text-xs text-gray-400 leading-relaxed max-w-5xl mx-auto">
                A Creditas é uma plataforma digital que atua como correspondente Bancário e Sociedade de Crédito Direto 
                para facilitar o processo de contratação de empréstimos. Somos regulamentados pelo Banco Central do Brasil.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 mb-4">
              <a href="#" className="hover:text-primary transition-colors">Tabela de Tarifas</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Sistema de Informações de Crédito</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Central da Transparência</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Termos de uso</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Política de privacidade</a>
            </div>
            <p className="text-center text-xs text-gray-500">
              © 2025 Creditas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {!isChatOpen && <FloatingChatButton onClick={handleOpenChat} />}
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Index;

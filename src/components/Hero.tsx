import { Button } from "@/components/ui/button";

interface HeroProps {
  onButtonClick: () => void;
}

export function Hero({ onButtonClick }: HeroProps) {
  return (
    <section className="relative bg-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-xs text-gray-500">
              <span className="hover:text-primary cursor-pointer">Início</span>
              <span className="mx-2">›</span>
              <span className="text-primary font-semibold">Empréstimo online</span>
            </p>
          </div>
          
          {/* Layout principal: texto à esquerda, cards à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Coluna da esquerda: Texto */}
            <div>
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  EMPRÉSTIMO ONLINE
                </p>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-gray-900">
                Crédito inteligente pra pessoas que também são
              </h1>
              
              <p className="text-base md:text-lg mb-8 text-gray-700 leading-relaxed">
                Sua casa ou seu carro são garantias para você ter um crédito com taxas bem baixas, 
                mais prazo e parcelas que consegue pagar. Faça uma simulação e comprove o que é um crédito saudável de verdade.
              </p>

              {/* Badge de prêmio */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fbbf24'%3E%3Cpath d='M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z'/%3E%3C/svg%3E" alt="Prêmio" className="w-full h-full" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900 leading-relaxed">
                    Ganhamos o Prêmio Reclame Aqui 2020, 2021 e 2022:
                  </p>
                  <p className="text-xs text-gray-600">
                    melhor empresa de empréstimo online.
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna da direita: Cards de produtos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Garantia de veículo */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <div className="w-12 h-12 mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 11h8m-8 4h8m-9 4h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Garantia <span className="font-bold">de veículo</span>
                  </h3>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-600 mb-1">De R$</p>
                  <p className="text-xl font-bold text-gray-900">5 mil a R$ 150 mil</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-gray-600 mb-1">Juros a partir de</p>
                  <p className="text-2xl font-bold text-gray-900">1,49% ao mês</p>
                </div>
                <Button 
                  onClick={onButtonClick}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 text-sm rounded-md"
                >
                  Simule
                </Button>
              </div>

              {/* Garantia de imóvel */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <div className="w-12 h-12 mb-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Garantia <span className="font-bold">de imóvel</span>
                  </h3>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-600 mb-1">De R$</p>
                  <p className="text-xl font-bold text-gray-900">50 mil a R$ 3 milhões</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs text-gray-600 mb-1">Juros a partir de</p>
                  <p className="text-2xl font-bold text-gray-900">1,09% ao mês + IPCA</p>
                </div>
                <Button 
                  onClick={onButtonClick}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2.5 text-sm rounded-md"
                >
                  Simule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

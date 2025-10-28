import { Button } from "@/components/ui/button";

interface RatesComparisonProps {
  onButtonClick: () => void;
}

export function RatesComparison({ onButtonClick }: RatesComparisonProps) {
  const rates = [
    { name: "Garantia de imóvel", brand: "creditas", rate: "1.09% a.m", highlight: true },
    { name: "Garantia de veículo", brand: "creditas", rate: "1.49% a.m", highlight: true },
    { name: "Empréstimo Pessoal", brand: "", rate: "6.47% a.m", highlight: false },
    { name: "Cartão de Crédito Rotativo", brand: "", rate: "14.06% a.m", highlight: false },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Compare as taxas e comprove
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui combatemos o mau endividamento
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {rates.map((rate, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-6 rounded-xl border-2 transition-all ${
                rate.highlight 
                  ? 'border-primary bg-primary/5 shadow-lg' 
                  : 'border-border bg-muted/30'
              }`}
            >
              <div className="flex-1">
                <div className="font-semibold text-lg text-foreground">{rate.name}</div>
                {rate.brand && (
                  <div className="text-sm text-primary font-medium mt-1">{rate.brand}</div>
                )}
              </div>
              <div className={`text-3xl font-bold ${rate.highlight ? 'text-primary' : 'text-muted-foreground'}`}>
                {rate.rate}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={onButtonClick}
            variant="hero" 
            size="lg"
            className="px-12 py-6 text-lg"
          >
            Simule grátis
          </Button>
        </div>
      </div>
    </section>
  );
}


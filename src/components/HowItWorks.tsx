import { Search, FileCheck, Banknote } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Primeiro passo: simular",
      description: "Faça uma simulação sem sair de casa, pelo seu celular ou computador.",
    },
    {
      number: "2",
      icon: FileCheck,
      title: "Escolha a melhor proposta",
      description: "Nosso time ajuda a encontrar a proposta que faz mais sentido pra você.",
    },
    {
      number: "3",
      icon: Banknote,
      title: "Receba o dinheiro",
      description: "Após aprovação, é só assinar o contrato que o dinheiro cai na sua conta.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Empréstimo online rápido e descomplicado
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Processo 100% digital em poucos passos
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary hover:shadow-xl transition-all h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


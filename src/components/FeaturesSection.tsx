import { Shield, Clock, TrendingDown, Award } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: TrendingDown,
      title: "Taxas mais baixas",
      description: "As menores taxas do mercado para você economizar",
    },
    {
      icon: Clock,
      title: "Aprovação rápida",
      description: "Análise e liberação em até 24 horas",
    },
    {
      icon: Shield,
      title: "100% seguro",
      description: "Seus dados protegidos com a melhor tecnologia",
    },
    {
      icon: Award,
      title: "Atendimento de qualidade",
      description: "Suporte especializado para suas necessidades",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Mudamos o crédito pra você mudar de vida
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
          Agora você finalmente tem acesso a um crédito de qualidade, com as menores
          taxas e mais prazo para pagar. Conte com quem é especialista em garantir
          novas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

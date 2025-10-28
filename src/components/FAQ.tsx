import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como fazer empréstimo online?",
      answer: "Basta simular gratuitamente um empréstimo para receber um atendimento personalizado da nossa equipe de consultores. Assim que estiver tudo certo, é só assinar o contrato e esperar o dinheiro cair na sua conta.",
    },
    {
      question: "Qual a diferença entre empréstimo pessoal e empréstimo com garantia?",
      answer: "A principal diferença é a taxa de juros. No empréstimo pessoal, você paga valores altíssimos. Já no empréstimo com garantia, você coloca seu imóvel ou veículo como garantia da operação e, assim, tem acesso às melhores taxas de juros do mercado e parcelas bem mais baixas.",
    },
    {
      question: "Quais são as taxas de juros das modalidades de empréstimo?",
      answer: "No empréstimo com garantia de imóvel, as taxas são a partir de 1,09% ao mês + IPCA. Já no empréstimo com garantia de veículo, os juros são a partir de 1,49% ao mês.",
    },
    {
      question: "Qual é o valor máximo do empréstimo?",
      answer: "Você pode pegar de R$ 5 mil a R$ 150 mil no empréstimo com garantia de automóvel e de R$ 50 mil a R$ 3 milhões no empréstimo com garantia de imóvel.",
    },
    {
      question: "A Creditas é confiável?",
      answer: "Sim. Somos uma plataforma líder em crédito, ganhamos o prêmio Reclame Aqui 2020 como a melhor empresa de empréstimo online do Brasil e somos regulamentados pelo Banco Central. Mais de 196 mil pessoas já confiam na gente. Pode contar com o nosso apoio.",
    },
    {
      question: "A Creditas cobra depósitos ou taxas antecipadas?",
      answer: "Não. Não solicitamos pagamentos antecipados e não trabalhamos com intermediadores.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Perguntas frequentes
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tire suas dúvidas sobre nossos produtos de crédito
        </p>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-xl overflow-hidden transition-all hover:border-primary"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary font-semibold hover:underline">
            Veja todas as perguntas →
          </button>
        </div>
      </div>
    </section>
  );
}


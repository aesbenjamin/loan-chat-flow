import { Button } from "@/components/ui/button";

interface HeaderProps {
  onButtonClick: () => void;
}

export function Header({ onButtonClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold text-foreground">CreditoFácil</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={onButtonClick}>
            Para você
          </Button>
          <Button variant="ghost" onClick={onButtonClick}>
            Para empresas
          </Button>
          <Button variant="ghost" onClick={onButtonClick}>
            Ajuda
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="hero" size="lg" onClick={onButtonClick}>
            Simule seu crédito
          </Button>
          <Button variant="outline" onClick={onButtonClick}>
            Já sou cliente
          </Button>
        </div>
      </div>
    </header>
  );
}

import { Button } from "@/components/ui/button";

interface HeaderProps {
  onButtonClick: () => void;
}

export function Header({ onButtonClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#3d3d3d] z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-white">Creditas</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <button className="text-white hover:text-primary font-normal transition-colors text-sm">
            Para você
          </button>
          <button className="text-white hover:text-primary font-normal transition-colors text-sm">
            Para empresas
          </button>
          <button className="text-white hover:text-primary font-normal transition-colors text-sm">
            Para parceiros
          </button>
          <button className="text-white hover:text-primary font-normal transition-colors text-sm">
            Creditas
          </button>
          <button className="text-white hover:text-primary font-normal transition-colors text-sm">
            Ajuda
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            onClick={onButtonClick}
            className="bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-2.5 text-sm rounded-md hidden sm:inline-flex"
          >
            Simule seu crédito
          </Button>
          <Button 
            onClick={onButtonClick}
            variant="outline" 
            className="border-2 border-white text-white hover:border-primary hover:bg-primary hover:text-white font-semibold px-6 py-2.5 text-sm rounded-md hidden sm:inline-flex bg-transparent"
          >
            Já sou cliente
          </Button>
        </div>
      </div>
    </header>
  );
}

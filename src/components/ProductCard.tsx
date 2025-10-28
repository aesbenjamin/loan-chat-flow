import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  details: string;
  imageSrc: string;
  onButtonClick: () => void;
}

export function ProductCard({
  title,
  description,
  details,
  imageSrc,
  onButtonClick,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border group">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{details}</p>
        <Button
          onClick={onButtonClick}
          variant="default"
          size="lg"
          className="w-full group"
        >
          Simular
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}

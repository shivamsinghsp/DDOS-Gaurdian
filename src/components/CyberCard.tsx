import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  glowEffect?: boolean;
  animated?: boolean;
}

export const CyberCard = ({ 
  children, 
  className, 
  glowEffect = false, 
  animated = false 
}: CyberCardProps) => {
  return (
    <Card
      className={cn(
        "relative border border-border bg-card/50 backdrop-blur-sm",
        glowEffect && "hover:shadow-cyber transition-all duration-300",
        animated && "hover:scale-105 hover:border-primary/50",
        className
      )}
    >
      {/* Cyber corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-50"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* Scanning line effect */}
      {animated && (
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan opacity-30"></div>
        </div>
      )}
    </Card>
  );
};
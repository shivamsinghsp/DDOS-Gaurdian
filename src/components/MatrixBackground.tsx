import { useEffect, useState } from "react";

export const MatrixBackground = () => {
  const [drops, setDrops] = useState<number[]>([]);

  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20);
    const newDrops = Array(columns).fill(1);
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
      
      {/* Matrix Rain Effect */}
      <div className="relative w-full h-full">
        {drops.map((_, index) => (
          <div
            key={index}
            className="absolute top-0 text-cyber-matrix opacity-20 text-xs font-mono animate-matrix-rain"
            style={{
              left: `${index * 20}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="leading-none">
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Cyber Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};
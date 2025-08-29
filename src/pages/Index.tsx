import { Button } from "@/components/ui/button";
import { MatrixBackground } from "@/components/MatrixBackground";
import { CyberCard } from "@/components/CyberCard";
import { Navigation } from "@/components/Navigation";
import { Shield, Zap, Eye, BarChart3, ArrowRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import cyberShield from "@/assets/cyber-shield.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="font-orbitron font-black text-5xl xl:text-7xl leading-tight">
                    <span className="bg-gradient-cyber bg-clip-text text-transparent">
                      DDoS
                    </span>
                    <br />
                    <span className="text-foreground">Detection</span>
                    <br />
                    <span className="text-accent">&amp; Prevention</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Real-Time DDoS Attack Detection &amp; Prevention using 
                    <span className="text-primary font-semibold"> Supervised Learning Models</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/features">
                      Explore Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/results">
                      View Results
                      <BarChart3 className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-primary">99.7%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-accent">Real-time</div>
                    <div className="text-sm text-muted-foreground">Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-orbitron font-bold text-primary">ML-Powered</div>
                    <div className="text-sm text-muted-foreground">Prevention</div>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative group">
                  <img 
                    src={cyberShield} 
                    alt="Cybersecurity Shield" 
                    className="w-full h-auto rounded-lg shadow-cyber group-hover:shadow-glow transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-glow opacity-30 rounded-lg group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Floating Lock Icon */}
                  <div className="absolute top-8 right-8 p-3 bg-card/80 backdrop-blur-sm rounded-full border border-primary/30 animate-float">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl mb-4 text-foreground">
              Advanced <span className="text-primary">Cyber Defense</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powered by cutting-edge machine learning algorithms for comprehensive DDoS protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CyberCard glowEffect animated>
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  Continuous traffic pattern analysis with instant threat detection
                </p>
              </div>
            </CyberCard>

            <CyberCard glowEffect animated>
              <div className="space-y-4">
                <div className="p-3 bg-accent/10 rounded-lg w-fit">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-orbitron font-bold text-xl">ML Classification</h3>
                <p className="text-muted-foreground">
                  Supervised learning models for accurate attack pattern recognition
                </p>
              </div>
            </CyberCard>

            <CyberCard glowEffect animated>
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-xl">Auto Prevention</h3>
                <p className="text-muted-foreground">
                  Automated threat mitigation with intelligent response system
                </p>
              </div>
            </CyberCard>

            <CyberCard glowEffect animated>
              <div className="space-y-4">
                <div className="p-3 bg-accent/10 rounded-lg w-fit">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-orbitron font-bold text-xl">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Comprehensive visualization of threats and system performance
                </p>
              </div>
            </CyberCard>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <CyberCard className="text-center max-w-4xl mx-auto" glowEffect>
            <div className="space-y-6">
              <h2 className="font-orbitron font-bold text-3xl">
                Ready to Explore Our <span className="text-primary">Cyber Defense System</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover how machine learning transforms cybersecurity through our comprehensive project analysis
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cyber" size="lg" asChild>
                  <Link to="/methodology">
                    View Methodology
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/dataset">
                    Explore Dataset
                  </Link>
                </Button>
              </div>
            </div>
          </CyberCard>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { Navigation } from "@/components/Navigation";
import { MatrixBackground } from "@/components/MatrixBackground";
import { CyberCard } from "@/components/CyberCard";
import { Shield, Zap, Target, AlertTriangle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixBackground />
      <Navigation />
      
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-orbitron font-black text-5xl mb-6">
                About <span className="text-primary">DDoS Attacks</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Understanding the threat landscape and our defense approach
              </p>
            </div>

            {/* What is DDoS */}
            <CyberCard className="mb-12" glowEffect>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                  </div>
                  <h2 className="font-orbitron font-bold text-3xl">What is a DDoS Attack?</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Distributed Denial of Service (DDoS) attack is a malicious attempt to disrupt 
                  the normal traffic of a targeted server, service, or network by overwhelming the 
                  target or its surrounding infrastructure with a flood of Internet traffic.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-orbitron font-bold text-destructive mb-2">Volume</div>
                    <p className="text-sm text-muted-foreground">
                      Overwhelming bandwidth with massive data flows
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-orbitron font-bold text-destructive mb-2">Protocol</div>
                    <p className="text-sm text-muted-foreground">
                      Exploiting weaknesses in network protocols
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-orbitron font-bold text-destructive mb-2">Application</div>
                    <p className="text-sm text-muted-foreground">
                      Targeting specific application vulnerabilities
                    </p>
                  </div>
                </div>
              </div>
            </CyberCard>

            {/* Why Prevention is Important */}
            <CyberCard className="mb-12" glowEffect>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-orbitron font-bold text-3xl">Why Prevention Matters</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-orbitron font-bold text-xl text-accent">Business Impact</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Service downtime and revenue loss</li>
                      <li>• Customer trust and reputation damage</li>
                      <li>• Operational disruption costs</li>
                      <li>• Compliance and legal implications</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-orbitron font-bold text-xl text-accent">Technical Challenges</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Network infrastructure overload</li>
                      <li>• Resource exhaustion attacks</li>
                      <li>• Legitimate traffic discrimination</li>
                      <li>• Real-time detection complexity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CyberCard>

            {/* Project Objective */}
            <CyberCard glowEffect animated>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="font-orbitron font-bold text-3xl">Project Objective</h2>
                </div>
                <div className="bg-gradient-dark p-6 rounded-lg border border-primary/20">
                  <p className="text-lg leading-relaxed">
                    <span className="text-primary font-semibold">To detect and prevent DDoS attacks</span> from 
                    network traffic patterns using <span className="text-accent font-semibold">supervised learning models</span>, 
                    enabling real-time threat identification and automated mitigation responses to protect 
                    network infrastructure and maintain service availability.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-orbitron font-bold text-lg mb-2">Real-time Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      Immediate threat identification through continuous monitoring
                    </p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-accent mx-auto mb-3" />
                    <h3 className="font-orbitron font-bold text-lg mb-2">Automated Prevention</h3>
                    <p className="text-sm text-muted-foreground">
                      Intelligent response system for threat mitigation
                    </p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-orbitron font-bold text-lg mb-2">High Accuracy</h3>
                    <p className="text-sm text-muted-foreground">
                      Machine learning precision for reliable threat classification
                    </p>
                  </div>
                </div>
              </div>
            </CyberCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
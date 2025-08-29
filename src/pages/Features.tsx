import { Navigation } from "@/components/Navigation";
import { MatrixBackground } from "@/components/MatrixBackground";
import { CyberCard } from "@/components/CyberCard";
import { 
  Eye, 
  Zap, 
  Shield, 
  BarChart3, 
  Activity, 
  Bell, 
  Database, 
  Cpu,
  Network,
  Lock,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Eye,
      title: "Real-time Traffic Pattern Analysis",
      description: "Continuous monitoring of network traffic with advanced pattern recognition algorithms that identify anomalies in real-time.",
      details: [
        "Deep packet inspection and flow analysis",
        "Statistical traffic profiling",
        "Behavioral anomaly detection",
        "Multi-dimensional traffic characterization"
      ],
      color: "primary"
    },
    {
      icon: Zap,
      title: "Supervised ML Classification",
      description: "Advanced machine learning models trained on extensive datasets to accurately classify normal vs malicious traffic patterns.",
      details: [
        "Random Forest and Decision Tree algorithms",
        "Support Vector Machine classification",
        "Neural network-based detection",
        "Ensemble method optimization"
      ],
      color: "accent"
    },
    {
      icon: Bell,
      title: "Prevention Alerts & Logs",
      description: "Comprehensive alerting system with detailed logging capabilities for threat tracking and forensic analysis.",
      details: [
        "Real-time threat notifications",
        "Detailed attack attribution",
        "Forensic data collection",
        "Compliance reporting automation"
      ],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Visualization Dashboard",
      description: "Interactive cybersecurity dashboard providing comprehensive insights into network security status and threat landscape.",
      details: [
        "Real-time traffic visualization",
        "Threat severity mapping",
        "Performance metrics tracking",
        "Historical trend analysis"
      ],
      color: "accent"
    }
  ];

  const technicalFeatures = [
    {
      icon: Activity,
      title: "Performance Monitoring",
      description: "System performance tracking and optimization"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Efficient storage and retrieval of traffic data"
    },
    {
      icon: Cpu,
      title: "ML Model Optimization",
      description: "Continuous model training and improvement"
    },
    {
      icon: Network,
      title: "Network Integration",
      description: "Seamless integration with existing infrastructure"
    },
    {
      icon: Lock,
      title: "Security Hardening",
      description: "Enhanced security measures and encryption"
    },
    {
      icon: CheckCircle,
      title: "Reliability Assurance",
      description: "High availability and fault tolerance"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixBackground />
      <Navigation />
      
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-orbitron font-black text-5xl mb-6">
                System <span className="text-primary">Features</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive DDoS detection and prevention capabilities powered by advanced machine learning
              </p>
            </div>

            {/* Main Features */}
            <div className="space-y-12 mb-20">
              {mainFeatures.map((feature, index) => (
                <CyberCard key={index} className="overflow-hidden" glowEffect animated>
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="space-y-4">
                        <div className={`p-4 bg-${feature.color}/10 rounded-lg w-fit`}>
                          <feature.icon className={`h-12 w-12 text-${feature.color}`} />
                        </div>
                        <h3 className="font-orbitron font-bold text-2xl">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="space-y-4">
                        <h4 className="font-orbitron font-bold text-lg text-accent">
                          Key Capabilities:
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              ))}
            </div>

            {/* Technical Features Grid */}
            <div className="mb-16">
              <h2 className="font-orbitron font-bold text-3xl text-center mb-12">
                Technical <span className="text-accent">Capabilities</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalFeatures.map((feature, index) => (
                  <CyberCard key={index} glowEffect animated>
                    <div className="space-y-4 text-center">
                      <div className="p-3 bg-muted/20 rounded-lg w-fit mx-auto">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-orbitron font-bold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CyberCard>
                ))}
              </div>
            </div>

            {/* System Architecture Overview */}
            <CyberCard className="text-center" glowEffect>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <Shield className="h-12 w-12 text-primary" />
                  <h2 className="font-orbitron font-bold text-3xl">
                    Integrated <span className="text-accent">Defense System</span>
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Our comprehensive approach combines real-time traffic analysis, machine learning classification, 
                  automated threat response, and advanced visualization to create a robust defense against DDoS attacks. 
                  The system operates continuously to ensure maximum protection while maintaining optimal performance.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  <div className="space-y-2">
                    <div className="text-3xl font-orbitron font-bold text-primary">99.7%</div>
                    <div className="text-sm text-muted-foreground">Detection Accuracy</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-orbitron font-bold text-accent">&lt;1s</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-orbitron font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-orbitron font-bold text-accent">0.1%</div>
                    <div className="text-sm text-muted-foreground">False Positives</div>
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

export default Features;
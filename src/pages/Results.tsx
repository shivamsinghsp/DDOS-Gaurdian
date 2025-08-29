import { Navigation } from "@/components/Navigation";
import { MatrixBackground } from "@/components/MatrixBackground";
import { CyberCard } from "@/components/CyberCard";
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  Activity,
  Gauge,
  Clock,
  Users
} from "lucide-react";

const Results = () => {
  // Mock data for the dashboard
  const riskLevel = 15; // 0-100
  const attackLogs = [
    { id: 1, ip: "192.168.1.100", time: "14:23:45", type: "UDP Flood", status: "Blocked" },
    { id: 2, ip: "10.0.0.55", time: "14:22:12", type: "SYN Flood", status: "Mitigated" },
    { id: 3, ip: "172.16.0.89", time: "14:20:33", type: "HTTP Flood", status: "Blocked" },
    { id: 4, ip: "203.0.113.45", time: "14:18:22", type: "DNS Amplification", status: "Blocked" },
    { id: 5, ip: "198.51.100.78", time: "14:15:11", type: "ICMP Flood", status: "Mitigated" }
  ];

  const modelPerformance = [
    { model: "Random Forest", accuracy: 99.7, precision: 98.9, recall: 99.2 },
    { model: "Decision Tree", accuracy: 97.3, precision: 96.8, recall: 97.9 },
    { model: "SVM", accuracy: 96.1, precision: 95.4, recall: 96.7 },
    { model: "Neural Network", accuracy: 98.5, precision: 97.8, recall: 98.9 }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MatrixBackground />
      <Navigation />
      
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-orbitron font-black text-5xl mb-6">
                Live <span className="text-primary">Cyber Dashboard</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real-time monitoring and analysis of DDoS detection system performance
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <CyberCard glowEffect animated>
                <div className="text-center space-y-3">
                  <Activity className="h-10 w-10 text-primary mx-auto" />
                  <div className="text-3xl font-orbitron font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Active Connections</div>
                </div>
              </CyberCard>
              
              <CyberCard glowEffect animated>
                <div className="text-center space-y-3">
                  <Shield className="h-10 w-10 text-accent mx-auto" />
                  <div className="text-3xl font-orbitron font-bold text-accent">23</div>
                  <div className="text-sm text-muted-foreground">Threats Blocked</div>
                </div>
              </CyberCard>
              
              <CyberCard glowEffect animated>
                <div className="text-center space-y-3">
                  <TrendingUp className="h-10 w-10 text-primary mx-auto" />
                  <div className="text-3xl font-orbitron font-bold text-primary">98.7%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </div>
              </CyberCard>
              
              <CyberCard glowEffect animated>
                <div className="text-center space-y-3">
                  <Clock className="h-10 w-10 text-accent mx-auto" />
                  <div className="text-3xl font-orbitron font-bold text-accent">&lt;0.5s</div>
                  <div className="text-sm text-muted-foreground">Avg Response</div>
                </div>
              </CyberCard>
            </div>

            {/* Dashboard Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Traffic Volume Chart */}
              <CyberCard className="lg:col-span-2" glowEffect>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <h3 className="font-orbitron font-bold text-xl">Incoming Traffic Volume</h3>
                  </div>
                  <div className="h-64 bg-muted/10 rounded-lg flex items-center justify-center border border-primary/20">
                    <div className="text-center space-y-4">
                      <TrendingUp className="h-16 w-16 text-primary/50 mx-auto" />
                      <p className="text-muted-foreground">Interactive traffic visualization would appear here</p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-orbitron font-bold text-accent">2.3 GB/s</div>
                          <div className="text-xs text-muted-foreground">Peak Traffic</div>
                        </div>
                        <div>
                          <div className="text-lg font-orbitron font-bold text-primary">1.1 GB/s</div>
                          <div className="text-xs text-muted-foreground">Current</div>
                        </div>
                        <div>
                          <div className="text-lg font-orbitron font-bold text-accent">0.8 GB/s</div>
                          <div className="text-xs text-muted-foreground">Average</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CyberCard>

              {/* Risk Level Gauge */}
              <CyberCard glowEffect>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Gauge className="h-6 w-6 text-accent" />
                    <h3 className="font-orbitron font-bold text-xl">Risk Level</h3>
                  </div>
                  <div className="text-center space-y-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 rounded-full border-8 border-muted/20"></div>
                      <div 
                        className="absolute inset-0 rounded-full border-8 border-accent transition-all duration-1000"
                        style={{
                          background: `conic-gradient(from 0deg, hsl(var(--accent)) ${riskLevel * 3.6}deg, transparent ${riskLevel * 3.6}deg)`
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-orbitron font-bold text-accent">{riskLevel}%</div>
                          <div className="text-xs text-muted-foreground">Risk</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-accent">Low Risk</span>
                        <span className="text-muted-foreground">Status: Secure</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Last updated: {new Date().toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CyberCard>
            </div>

            {/* Model Performance and Attack Logs */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Model Performance */}
              <CyberCard glowEffect>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-6 w-6 text-primary" />
                    <h3 className="font-orbitron font-bold text-xl">Model Performance</h3>
                  </div>
                  <div className="space-y-4">
                    {modelPerformance.map((model, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-orbitron font-semibold">{model.model}</span>
                          <span className="text-sm text-accent">{model.accuracy}%</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="bg-muted/20 p-2 rounded text-center">
                            <div className="text-primary font-bold">{model.accuracy}%</div>
                            <div className="text-muted-foreground">Accuracy</div>
                          </div>
                          <div className="bg-muted/20 p-2 rounded text-center">
                            <div className="text-accent font-bold">{model.precision}%</div>
                            <div className="text-muted-foreground">Precision</div>
                          </div>
                          <div className="bg-muted/20 p-2 rounded text-center">
                            <div className="text-primary font-bold">{model.recall}%</div>
                            <div className="text-muted-foreground">Recall</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CyberCard>

              {/* Attack Logs */}
              <CyberCard glowEffect>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                    <h3 className="font-orbitron font-bold text-xl">Recent Attack Logs</h3>
                  </div>
                  <div className="space-y-2">
                    {attackLogs.map((log) => (
                      <div key={log.id} className="bg-muted/10 p-3 rounded-lg border border-border/50">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <div className="font-mono text-sm text-primary">{log.ip}</div>
                            <div className="text-xs text-muted-foreground">{log.type}</div>
                          </div>
                          <div className="text-right space-y-1">
                            <div className="text-xs text-muted-foreground">{log.time}</div>
                            <div className={`text-xs px-2 py-1 rounded ${
                              log.status === 'Blocked' 
                                ? 'bg-destructive/20 text-destructive' 
                                : 'bg-accent/20 text-accent'
                            }`}>
                              {log.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CyberCard>
            </div>

            {/* Traffic Analysis Summary */}
            <CyberCard className="text-center" glowEffect>
              <div className="space-y-6">
                <h2 className="font-orbitron font-bold text-3xl">
                  Traffic Analysis <span className="text-primary">Summary</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="space-y-2">
                    <Users className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-2xl font-orbitron font-bold text-primary">94.3%</div>
                    <div className="text-sm text-muted-foreground">Normal Traffic</div>
                  </div>
                  <div className="space-y-2">
                    <AlertTriangle className="h-8 w-8 text-destructive mx-auto" />
                    <div className="text-2xl font-orbitron font-bold text-destructive">5.7%</div>
                    <div className="text-sm text-muted-foreground">Attack Traffic</div>
                  </div>
                  <div className="space-y-2">
                    <Shield className="h-8 w-8 text-accent mx-auto" />
                    <div className="text-2xl font-orbitron font-bold text-accent">100%</div>
                    <div className="text-sm text-muted-foreground">Threats Mitigated</div>
                  </div>
                  <div className="space-y-2">
                    <Activity className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-2xl font-orbitron font-bold text-primary">0.3s</div>
                    <div className="text-sm text-muted-foreground">Avg Detection Time</div>
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

export default Results;
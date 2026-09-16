import React from 'react';
import { Navbar } from '../components/Navbar';
import { InteractiveUploader } from '../components/InteractiveUploader';
import { ArrowRight, BrainCircuit, ShieldCheck, Sprout, CloudLightning, TrendingUp, Plane } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <main style={{ flex: 1, paddingTop: '140px', position: 'relative' }}>
        {/* Animated Background Elements */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '100%', overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', background: 'var(--accent-primary-glow)', filter: 'blur(150px)', borderRadius: '50%', animation: 'float 8s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', top: '40%', right: '15%', width: '400px', height: '400px', background: 'var(--accent-secondary-glow)', filter: 'blur(150px)', borderRadius: '50%', animation: 'float 10s ease-in-out infinite reverse' }} />
        </div>

        <section className="container" style={{ textAlign: 'center', paddingBottom: '6rem' }}>
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.5rem', 
              background: 'rgba(192, 132, 252, 0.1)', 
              color: 'var(--accent-primary)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(192, 132, 252, 0.3)',
              fontWeight: 600,
              marginBottom: '2rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              boxShadow: '0 0 20px rgba(192, 132, 252, 0.15)'
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', animation: 'pulseGlow 2s infinite' }} />
              SoilSense AI Engine 2.0
            </span>
          </div>
          
          <h1 className="animate-fade-up" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 1.05, marginBottom: '2rem', animationDelay: '0.2s', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            Future of Farming <br/>
            <span className="text-gradient">Powered by AI</span>
          </h1>
          
          <p className="animate-fade-up" style={{ color: 'var(--text-muted)', fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', maxWidth: '750px', margin: '0 auto 4rem auto', animationDelay: '0.3s', lineHeight: 1.7 }}>
            Transform your harvest. Upload a high-resolution image of your soil and our advanced neural networks will analyze its composition instantly with <span style={{ color: '#fff', fontWeight: 500 }}>99.8% precision</span>.
          </p>

          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <InteractiveUploader />
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="container" style={{ padding: '4rem 2rem 8rem 2rem' }}>
          <div className="animate-fade-up" style={{ animationDelay: '0.5s', marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Core Intelligence</h2>
            <p style={{ color: 'var(--text-muted)' }}>Purpose-built for modern agriculture</p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            <div className="glass-panel animate-fade-up" style={{ padding: '3rem', gridColumn: '1 / -1', background: 'linear-gradient(135deg, rgba(192,132,252,0.1), transparent)', animationDelay: '0.6s' }}>
              <div style={{ background: 'rgba(192, 132, 252, 0.1)', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid rgba(192, 132, 252, 0.2)' }}>
                <BrainCircuit size={32} color="var(--accent-primary)" />
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Neural Soil Recognition</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6 }}>
                Our proprietary AI models have been trained on millions of global soil samples. They don't just see dirt—they see molecular composition, moisture retention capabilities, and microscopic biome health.
              </p>
            </div>
            
            <div className="glass-panel animate-fade-up" style={{ padding: '3rem', animationDelay: '0.7s' }}>
              <div style={{ background: 'rgba(34, 211, 238, 0.1)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(34, 211, 238, 0.2)' }}>
                <Sprout size={28} color="var(--accent-secondary)" />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Smart Recommendations</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Get an instant list of the top crops mathematically suited to maximize yield for your specific soil matrix. Reduce waste and increase profitability.
              </p>
            </div>

            <div className="glass-panel animate-fade-up" style={{ padding: '3rem', animationDelay: '0.8s' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <ShieldCheck size={28} color="#10b981" />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Secure & Private</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Your field coordinates and analysis data are end-to-end encrypted and stored securely in our premium cloud vault. You own your data, always.
              </p>
            </div>

            <div className="glass-panel animate-fade-up" style={{ padding: '3rem', animationDelay: '0.9s' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.1)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                <CloudLightning size={28} color="#f59e0b" />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Micro-Climate Sync</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Integrates hyper-local weather data with your soil profile to predict moisture evaporation rates and optimize irrigation schedules automatically.
              </p>
            </div>

            <div className="glass-panel animate-fade-up" style={{ padding: '3rem', animationDelay: '1.0s' }}>
              <div style={{ background: 'rgba(236, 72, 153, 0.1)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                <TrendingUp size={28} color="#ec4899" />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Yield Forecasting</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Advanced predictive models project harvest volumes based on current soil health metrics, historical yield data, and real-time market trends.
              </p>
            </div>

            <div className="glass-panel animate-fade-up" style={{ padding: '3rem', animationDelay: '1.1s' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <Plane size={28} color="#3b82f6" />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Drone Integration</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Seamlessly upload multi-spectral aerial imagery from your autonomous fleet to map soil variance across thousands of acres instantly.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid var(--border-glass)', padding: '3rem 0', textAlign: 'center', marginTop: 'auto', background: 'rgba(0,0,0,0.5)' }}>
        <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>&copy; 2026 SoilSense AI. Architecture Redefined.</p>
      </footer>
    </div>
  );
};

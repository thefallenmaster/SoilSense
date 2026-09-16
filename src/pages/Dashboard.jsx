import React from 'react';
import { Navbar } from '../components/Navbar';
import { Activity, Beaker, Sprout, Wind, Droplet, Target, Zap } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      <main className="container" style={{ flex: 1, paddingTop: '140px', paddingBottom: '6rem' }}>
        <header className="animate-fade-up" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <Zap size={24} color="var(--accent-secondary)" />
            <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Analysis Command Center</h1>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Real-time telemetry for your recent soil matrix scan.</p>
        </header>

        {/* Bento Box Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gridAutoRows: 'minmax(220px, auto)',
          gap: '1.5rem' 
        }}>
          
          {/* Main Hero Card */}
          <div className="glass-panel animate-fade-up" style={{ gridColumn: 'span 12 / span 12', padding: '3rem', position: 'relative', overflow: 'hidden', animationDelay: '0.1s' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent-secondary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: 600, marginBottom: '1.5rem', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
                <Activity size={18} className="animate-pulse-glow" style={{ borderRadius: '50%' }} />
                Analysis Complete
              </div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Nitrogen-Rich Loam</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', lineHeight: 1.6 }}>
                Optimal structure detected. Excellent water retention capabilities with a highly balanced pH level. The cellular density is perfect for deep-rooted, high-yield crops.
              </p>
            </div>
            
            {/* Background Graphic */}
            <div style={{ position: 'absolute', right: '-5%', top: '-30%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 60%)', borderRadius: '50%', zIndex: 0, animation: 'float 10s ease-in-out infinite' }} />
            
            {/* Decorative Matrix Grid */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0, opacity: 0.5, pointerEvents: 'none' }} />
          </div>

          {/* Metric Cards */}
          <div className="glass-panel animate-fade-up" style={{ gridColumn: 'span 12 / span 4', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', animationDelay: '0.2s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>Moisture Level</h4>
                <div style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>42.8<span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>%</span></div>
              </div>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                <Droplet size={28} color="#3b82f6" />
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>Optimal: 40-50%</span>
                <span style={{ color: '#3b82f6', fontWeight: 600 }}>Perfect</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'var(--border-glass)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '42.8%', height: '100%', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', borderRadius: '3px', boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' }} />
              </div>
            </div>
          </div>

          <div className="glass-panel animate-fade-up" style={{ gridColumn: 'span 12 / span 4', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', animationDelay: '0.3s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>pH Balance</h4>
                <div style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>6.5</div>
              </div>
              <div style={{ background: 'rgba(192, 132, 252, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                <Beaker size={28} color="var(--accent-primary)" />
              </div>
            </div>
            
            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, height: '8px', background: 'linear-gradient(90deg, #ef4444, #eab308, #10b981, #3b82f6)', borderRadius: '4px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '65%', top: '50%', transform: 'translate(-50%, -50%)', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', border: '4px solid var(--bg-surface)', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }} />
              </div>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 600 }}>Slightly Acidic</p>
            </div>
          </div>

          <div className="glass-panel animate-fade-up" style={{ gridColumn: 'span 12 / span 4', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', animationDelay: '0.4s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h4 style={{ color: 'var(--text-muted)', fontWeight: 500, marginBottom: '0.25rem' }}>Aeration Score</h4>
                <div style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}>94<span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>/100</span></div>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                <Wind size={28} color="#10b981" />
              </div>
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 500 }}>
                <Target size={18} />
                Excellent Structure
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Roots can penetrate easily, maximizing nutrient uptake.</p>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="glass-panel animate-fade-up" style={{ gridColumn: 'span 12 / span 12', padding: '3rem', animationDelay: '0.5s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ background: 'rgba(34, 211, 238, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                <Sprout size={28} color="var(--accent-secondary)" />
              </div>
              <h3 style={{ fontSize: '2rem' }}>AI Crop Matrix Suggestions</h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { name: 'Wheat', match: 98, color: '#eab308' }, 
                { name: 'Soybeans', match: 92, color: '#3b82f6' }, 
                { name: 'Corn', match: 87, color: '#f97316' }
              ].map((crop, idx) => (
                <div key={idx} style={{ 
                  padding: '2rem', 
                  borderRadius: 'var(--radius-lg)', 
                  background: 'var(--bg-base)', 
                  border: '1px solid var(--border-glass)',
                  transition: 'all var(--transition-fast)',
                  cursor: 'default'
                }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = crop.color; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.transform = 'none'; }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ fontSize: '1.5rem' }}>{crop.name}</h4>
                    <span style={{ background: `rgba(${parseInt(crop.color.slice(1,3),16)}, ${parseInt(crop.color.slice(3,5),16)}, ${parseInt(crop.color.slice(5,7),16)}, 0.1)`, color: crop.color, padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '0.9rem' }}>
                      {crop.match}% Match
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: 'var(--border-glass)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${crop.match}%`, height: '100%', background: crop.color, borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Hexagon } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, 
      width: '100%', 
      zIndex: 50, 
      padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(10, 10, 15, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
      transition: 'all var(--transition-fluid)'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.25rem', fontFamily: 'Space Grotesk' }}>
            <Hexagon size={28} color="var(--accent-primary)" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 0 8px var(--accent-primary-glow))' }} />
            <span className="text-gradient">SoilSense</span>
          </Link>
          
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <Link to="/features" style={{ 
              color: 'var(--text-muted)', 
              fontWeight: 500, 
              transition: 'all var(--transition-fast)'
            }} 
            onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.textShadow = '0 0 10px rgba(255,255,255,0.3)'; }} 
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.textShadow = 'none'; }}>
              Technology
            </Link>
            <Link to="/dashboard">
              <button className="btn-primary animate-pulse-glow" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} />
                Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

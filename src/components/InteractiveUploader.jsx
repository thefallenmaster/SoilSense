import React, { useState, useCallback, useEffect } from 'react';
import { Upload, ImageIcon, Sparkles, ScanLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const InteractiveUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (uploadedFile) => {
    if (uploadedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
        setIsScanning(true);
        setTimeout(() => setIsScanning(false), 2500); // 2.5s scanning simulation
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto' }}>
      {!file ? (
        <div 
          className="glass-panel"
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          style={{
            border: isDragging ? '2px dashed var(--accent-primary)' : '2px dashed rgba(255,255,255,0.1)',
            padding: '5rem 2rem',
            textAlign: 'center',
            position: 'relative',
            cursor: 'pointer',
            boxShadow: isDragging ? '0 0 40px rgba(192, 132, 252, 0.2)' : '0 20px 40px -10px rgba(0,0,0,0.5)',
            overflow: 'hidden',
            transition: 'all var(--transition-fluid)'
          }}
        >
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleChange}
            style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', zIndex: 10 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 5, transform: isDragging ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--transition-fluid)' }}>
            <div style={{ 
              background: isDragging ? 'rgba(192, 132, 252, 0.2)' : 'rgba(255,255,255,0.05)', 
              padding: '1.5rem', 
              borderRadius: '50%', 
              marginBottom: '1rem',
              transition: 'background var(--transition-fluid)'
            }}>
              <Upload size={48} color={isDragging ? 'var(--accent-primary)' : 'var(--text-muted)'} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: isDragging ? 'var(--accent-primary)' : '#fff', transition: 'color var(--transition-fast)' }}>
              {isDragging ? 'Drop to scan' : 'Drop your soil image'}
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>Supports High-Res JPG, PNG, and HEIC</p>
          </div>
          
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--accent-primary-glow)', filter: 'blur(120px)', zIndex: 0, opacity: isDragging ? 1 : 0, transition: 'opacity var(--transition-fluid)' }} />
        </div>
      ) : isScanning ? (
        <div className="glass-panel animate-fade-up" style={{ padding: '4rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)', animation: 'scanLine 2s ease-in-out infinite alternate', boxShadow: '0 0 20px var(--accent-primary)' }} />
          <ScanLine size={64} color="var(--accent-primary)" className="animate-pulse-glow" style={{ margin: '0 auto 2rem auto', borderRadius: '50%' }} />
          <h3 className="shimmer-text" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Neural Matrix Scanning...</h3>
          <p style={{ color: 'var(--text-muted)' }}>Analyzing mineral composition and moisture density.</p>
        </div>
      ) : (
        <div className="glass-panel animate-fade-up" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <img src={file} alt="Preview" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
            <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 600 }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
              High-Res Validated
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary animate-pulse-glow" onClick={() => navigate('/dashboard')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} />
              Process Analysis
            </button>
            <button onClick={() => setFile(null)} style={{ padding: '1rem 2rem', color: 'var(--text-muted)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-full)', fontWeight: 600, transition: 'all var(--transition-fast)' }} onMouseOver={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = '#fff'; }} onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-muted)'; }}>
              Reselect
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import CertificateListPage from './pages/CertificateListPage';
import SearchPage from './pages/SearchPage';
import { certificados } from './data';
import './App.css';

const App: React.FC = () => {
  // Calcular estadísticas generales
  const totalCertificates = certificados.length;
  const totalHours = certificados.reduce((sum, cert) => sum + (cert.hours || 0), 0);
  const uniqueTechs = new Set(certificados.map(c => c.tech)).size;

  return (
    <Router>
      <div className="app-container">
        <header>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>🎓 Portafolio de Certificados</h1>
              </Link>
              <p style={{ 
                fontSize: '1rem', 
                color: '#6b7280', 
                margin: '0.5rem 0 0 0',
                fontWeight: '500'
              }}>
                Ian Camps - Desarrollador Full Stack
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link 
                to="/search"
                style={{ 
                  color: '#6366f1',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  background: 'white',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#6366f1';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = '#6366f1';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#6366f1';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <i className="fas fa-search"></i> Búsqueda
              </Link>
            
              <div style={{ 
                display: 'flex',
                gap: '2rem',
                fontSize: '0.875rem',
                color: '#6b7280',
                fontWeight: '500'
              }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#6366f1',
                  lineHeight: '1'
                }}>
                  {totalCertificates}
                </div>
                <div>Certificados</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  color: '#6366f1',
                  lineHeight: '1'
                }}>
                  {uniqueTechs}
                </div>
                <div>Tecnologías</div>
              </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    color: '#6366f1',
                    lineHeight: '1'
                  }}>
                    {totalHours}h
                  </div>
                  <div>Horas</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryName" element={<TechnologyPage />} />
            <Route path="/technology/:techName" element={<CertificateListPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={
              <div style={{ 
                textAlign: 'center', 
                padding: '4rem 2rem',
                color: '#6b7280'
              }}>
                <h2>Página no encontrada</h2>
                <p>La página que buscas no existe.</p>
                <a href="/" style={{ 
                  color: '#6366f1', 
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>
                  ← Volver al inicio
                </a>
              </div>
            } />
          </Routes>
        </main>
        
        <footer>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{ margin: 0 }}>
              © 2025 Ian Camps - Desarrollado con React & TypeScript
            </p>
            <div style={{ 
              display: 'flex',
              gap: '1rem',
              fontSize: '0.875rem'
            }}>
              <a 
                href="https://github.com/iancamps90" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#6366f1'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/ian-camps-gomez-1a60a9126/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#6366f1'}
                onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
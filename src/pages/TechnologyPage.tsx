import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { certificados, categoryInfo } from '../data';

// Definimos el tipo para los parámetros de la URL
type TechnologyPageParams = {
    categoryName: string;
};

const TechnologyPage: React.FC = () => {
    const { categoryName } = useParams<TechnologyPageParams>();
    
    const techsInCategory = certificados.filter(c => c.category === categoryName);
    const uniqueTechs = Array.from(new Set(techsInCategory.map(c => c.tech)));
    const category = categoryInfo[categoryName || ''];
    
    // Calcular estadísticas
    const totalHours = techsInCategory.reduce((sum, cert) => sum + (cert.hours || 0), 0);
    const totalCertificates = techsInCategory.length;
    const uniqueTechnologies = uniqueTechs.length;

    const getTechIcon = (tech: string) => {
        const techLower = tech.toLowerCase();
        if (techLower.includes('react')) return 'fab fa-react';
        if (techLower.includes('javascript')) return 'fab fa-js-square';
        if (techLower.includes('python')) return 'fab fa-python';
        if (techLower.includes('php')) return 'fab fa-php';
        if (techLower.includes('css')) return 'fab fa-css3-alt';
        if (techLower.includes('html')) return 'fab fa-html5';
        if (techLower.includes('git')) return 'fab fa-git-alt';
        if (techLower.includes('azure')) return 'fab fa-microsoft';
        if (techLower.includes('sql')) return 'fas fa-database';
        if (techLower.includes('django')) return 'fab fa-python';
        if (techLower.includes('laravel')) return 'fab fa-laravel';
        if (techLower.includes('bootstrap')) return 'fab fa-bootstrap';
        if (techLower.includes('sass')) return 'fab fa-sass';
        if (techLower.includes('chatgpt') || techLower.includes('ai')) return 'fas fa-robot';
        if (techLower.includes('excel')) return 'fas fa-file-excel';
        return 'fas fa-code';
    };

    return (
        <div>
            <Link to="/" className="back-link">
                <i className="fas fa-arrow-left"></i>
                Volver a Categorías
            </Link>
            
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${category?.color || '#6366f1'}, ${category?.color || '#6366f1'}80)`,
                    marginBottom: '1rem'
                }}>
                    <i 
                        className={category?.icon || 'fas fa-folder'} 
                        style={{ fontSize: '2rem', color: 'white' }}
                    ></i>
                </div>
                
                <h1 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '800', 
                    marginBottom: '0.5rem',
                    color: '#1f2937'
                }}>
                    {category?.name || categoryName}
                </h1>
                
                <p style={{ 
                    fontSize: '1.125rem', 
                    color: '#6b7280',
                    marginBottom: '2rem'
                }}>
                    {category?.description}
                </p>

                {/* Estadísticas */}
                <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    <div style={{ 
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        border: '1px solid #e5e7eb'
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: '700', color: category?.color }}>
                            {totalCertificates}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>
                            Certificados
                        </div>
                    </div>
                    
                    <div style={{ 
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        border: '1px solid #e5e7eb'
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: '700', color: category?.color }}>
                            {uniqueTechnologies}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>
                            Tecnologías
                        </div>
                    </div>
                    
                    <div style={{ 
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        border: '1px solid #e5e7eb'
                    }}>
                        <div style={{ fontSize: '2rem', fontWeight: '700', color: category?.color }}>
                            {totalHours}h
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>
                            Horas
                        </div>
                    </div>
                </div>
            </div>

            <div className="tech-grid">
                {uniqueTechs.map(tech => {
                    const count = techsInCategory.filter(c => c.tech === tech).length;
                    const techHours = techsInCategory
                        .filter(c => c.tech === tech)
                        .reduce((sum, cert) => sum + (cert.hours || 0), 0);
                    
                    return (
                        <Link key={tech} to={`/technology/${tech}`} className="tech-icon">
                            <i className={getTechIcon(tech)}></i>
                            <h3>{tech}</h3>
                            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                                <div>{count} {count === 1 ? 'curso' : 'cursos'}</div>
                                {techHours > 0 && <div>{techHours}h total</div>}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default TechnologyPage;
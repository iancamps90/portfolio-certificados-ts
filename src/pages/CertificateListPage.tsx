import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { certificados, categoryInfo } from '../data';
import CertificateCard from '../components/CertificateCard';

// Definimos el tipo para los parámetros de la URL
type CertificateListPageParams = {
    techName: string;
};

const CertificateListPage: React.FC = () => {
    const { techName } = useParams<CertificateListPageParams>();

    const certificatesForTech = certificados.filter(
        (c) => c.tech.toLowerCase() === techName!.toLowerCase()
    );

    const category = certificatesForTech.length > 0 ? certificatesForTech[0].category : '';
    const categoryInfo_data = category ? categoryInfo[category] : null;
    
    // Calcular estadísticas
    const totalHours = certificatesForTech.reduce((sum, cert) => sum + (cert.hours || 0), 0);
    const levels = certificatesForTech.reduce((acc, cert) => {
        const level = cert.level || 'sin nivel';
        acc[level] = (acc[level] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

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
        <div className="certificate-list-page">
            {category && (
                <Link to={`/category/${category}`} className="back-link">
                    <i className="fas fa-arrow-left"></i>
                    Volver a {categoryInfo_data?.name || category}
                </Link>
            )}

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${categoryInfo_data?.color || '#6366f1'}, ${categoryInfo_data?.color || '#6366f1'}80)`,
                    marginBottom: '1rem'
                }}>
                    <i 
                        className={getTechIcon(techName || '')} 
                        style={{ fontSize: '2rem', color: 'white' }}
                    ></i>
                </div>
                
                <h1 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '800', 
                    marginBottom: '0.5rem',
                    color: '#1f2937'
                }}>
                    {techName}
                </h1>
                
                <p style={{ 
                    fontSize: '1.125rem', 
                    color: '#6b7280',
                    marginBottom: '2rem'
                }}>
                    {certificatesForTech.length} {certificatesForTech.length === 1 ? 'certificado' : 'certificados'} 
                    {totalHours > 0 && ` • ${totalHours} horas de formación`}
                </p>

                {/* Estadísticas por nivel */}
                {Object.keys(levels).length > 0 && (
                    <div style={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        marginBottom: '2rem'
                    }}>
                        {Object.entries(levels).map(([level, count]) => (
                            <div key={level} style={{ 
                                background: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '9999px',
                                border: '1px solid #e5e7eb',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                color: '#6b7280'
                            }}>
                                <span style={{ 
                                    color: level === 'beginner' ? '#16a34a' : 
                                           level === 'intermediate' ? '#d97706' : 
                                           level === 'advanced' ? '#dc2626' : '#6b7280'
                                }}>
                                    {level === 'beginner' ? 'Principiante' : 
                                     level === 'intermediate' ? 'Intermedio' : 
                                     level === 'advanced' ? 'Avanzado' : level}
                                </span>
                                <span style={{ marginLeft: '0.5rem', fontWeight: '600' }}>
                                    {count}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {certificatesForTech.length > 0 ? (
                <div className="certificates-container">
                    {certificatesForTech.map((cert) => (
                        <CertificateCard 
                            key={cert.id} 
                            certificate={cert} 
                            showDetails={true}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <i className="fas fa-search"></i>
                    <h3>No se encontraron certificados</h3>
                    <p>No hay certificados disponibles para la tecnología "{techName}".</p>
                </div>
            )}
        </div>
    );
};

export default CertificateListPage;
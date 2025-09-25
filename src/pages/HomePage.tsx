import React from 'react';
import { Link } from 'react-router-dom';
import { certificados, categoryInfo } from '../data';
import { Category } from '../types';
import StatsPanel from '../components/StatsPanel';

// Obtenemos las categorías únicas de nuestros datos con conteo
const getCategoriesWithCount = () => {
    const categoryCount = certificados.reduce((acc, cert) => {
        acc[cert.category] = (acc[cert.category] || 0) + 1;
        return acc;
    }, {} as Record<Category, number>);

    return Object.keys(categoryCount).map(category => ({
        category: category as Category,
        count: categoryCount[category as Category],
        info: categoryInfo[category]
    }));
};

const HomePage: React.FC = () => {
    const categoriesWithCount = getCategoriesWithCount();

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ 
                    fontSize: '2rem', 
                    fontWeight: '700', 
                    color: '#374151',
                    marginBottom: '1rem'
                }}>
                    🎓 Mi Portafolio de Certificados
                </h2>
                <p style={{ 
                    fontSize: '1.125rem', 
                    color: '#6b7280',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Explora mis certificados organizados por categorías. 
                    He completado <strong>{certificados.length} cursos</strong> en diferentes tecnologías.
                </p>
            </div>

            <div 
                className="homepage-layout"
                style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr 400px',
                    gap: '2rem',
                    alignItems: 'start'
                }}
            >
                <div className="category-grid">
                    {categoriesWithCount.map(({ category, count, info }) => (
                        <Link 
                            key={category} 
                            to={`/category/${category}`} 
                            className="category-card"
                            style={{ '--category-color': info.color } as React.CSSProperties}
                        >
                            <i className={info.icon}></i>
                            <h2>{info.name}</h2>
                            <p>{info.description}</p>
                            <div style={{ 
                                marginTop: '1rem',
                                fontSize: '0.875rem',
                                fontWeight: '600',
                                color: info.color
                            }}>
                                {count} {count === 1 ? 'certificado' : 'certificados'}
                            </div>
                        </Link>
                    ))}
                </div>
                
                <StatsPanel />
            </div>
        </div>
    );
};

export default HomePage;
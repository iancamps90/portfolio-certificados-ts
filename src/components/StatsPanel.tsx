import React from 'react';
import { certificados } from '../data';

interface StatsPanelProps {
    className?: string;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ className = '' }) => {
    // Calcular estadísticas
    const totalCertificates = certificados.length;
    const totalHours = certificados.reduce((sum, cert) => sum + (cert.hours || 0), 0);
    const uniqueTechs = new Set(certificados.map(c => c.tech)).size;
    const uniqueCategories = new Set(certificados.map(c => c.category)).size;

    // Estadísticas por nivel
    const levelStats = certificados.reduce((acc, cert) => {
        const level = cert.level || 'sin nivel';
        acc[level] = (acc[level] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Estadísticas por categoría (no se usa actualmente, pero se puede usar en el futuro)
    // const categoryStats = certificados.reduce((acc, cert) => {
    //     acc[cert.category] = (acc[cert.category] || 0) + 1;
    //     return acc;
    // }, {} as Record<Category, number>);

    // Top tecnologías
    const techStats = certificados.reduce((acc, cert) => {
        acc[cert.tech] = (acc[cert.tech] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const topTechs = Object.entries(techStats)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);

    return (
        <div className={`stats-panel ${className}`}>
            <div style={{ 
                background: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                border: '1px solid #e5e7eb'
            }}>
                <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                    marginBottom: '1.5rem',
                    color: '#1f2937',
                    textAlign: 'center'
                }}>
                    📊 Estadísticas del Portafolio
                </h3>

                {/* Estadísticas principales */}
                <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            fontSize: '2rem', 
                            fontWeight: '800', 
                            color: '#6366f1',
                            lineHeight: '1'
                        }}>
                            {totalCertificates}
                        </div>
                        <div style={{ 
                            fontSize: '0.875rem', 
                            color: '#6b7280',
                            fontWeight: '500'
                        }}>
                            Certificados
                        </div>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            fontSize: '2rem', 
                            fontWeight: '800', 
                            color: '#10b981',
                            lineHeight: '1'
                        }}>
                            {totalHours}h
                        </div>
                        <div style={{ 
                            fontSize: '0.875rem', 
                            color: '#6b7280',
                            fontWeight: '500'
                        }}>
                            Horas
                        </div>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            fontSize: '2rem', 
                            fontWeight: '800', 
                            color: '#f59e0b',
                            lineHeight: '1'
                        }}>
                            {uniqueTechs}
                        </div>
                        <div style={{ 
                            fontSize: '0.875rem', 
                            color: '#6b7280',
                            fontWeight: '500'
                        }}>
                            Tecnologías
                        </div>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                            fontSize: '2rem', 
                            fontWeight: '800', 
                            color: '#ec4899',
                            lineHeight: '1'
                        }}>
                            {uniqueCategories}
                        </div>
                        <div style={{ 
                            fontSize: '0.875rem', 
                            color: '#6b7280',
                            fontWeight: '500'
                        }}>
                            Categorías
                        </div>
                    </div>
                </div>

                {/* Top tecnologías */}
                <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: '600', 
                        marginBottom: '1rem',
                        color: '#374151'
                    }}>
                        🏆 Top Tecnologías
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {topTechs.map(([tech, count], index) => (
                            <div key={tech} style={{ 
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0.75rem',
                                background: index < 3 ? '#f8fafc' : 'white',
                                borderRadius: '8px',
                                border: index < 3 ? '1px solid #e2e8f0' : '1px solid #f1f5f9'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ 
                                        fontSize: '0.875rem',
                                        fontWeight: '600',
                                        color: index < 3 ? '#6366f1' : '#6b7280'
                                    }}>
                                        #{index + 1}
                                    </span>
                                    <span style={{ 
                                        fontWeight: '500',
                                        color: '#374151'
                                    }}>
                                        {tech}
                                    </span>
                                </div>
                                <span style={{ 
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    color: '#6b7280',
                                    background: '#f1f5f9',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '9999px'
                                }}>
                                    {count} {count === 1 ? 'curso' : 'cursos'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Distribución por nivel */}
                <div>
                    <h4 style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: '600', 
                        marginBottom: '1rem',
                        color: '#374151'
                    }}>
                        📈 Distribución por Nivel
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {Object.entries(levelStats).map(([level, count]) => {
                            const percentage = ((count / totalCertificates) * 100).toFixed(1);
                            const color = level === 'beginner' ? '#10b981' : 
                                        level === 'intermediate' ? '#f59e0b' : 
                                        level === 'advanced' ? '#ef4444' : '#6b7280';
                            
                            return (
                                <div key={level}>
                                    <div style={{ 
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '0.25rem'
                                    }}>
                                        <span style={{ 
                                            fontSize: '0.875rem',
                                            fontWeight: '500',
                                            color: '#374151',
                                            textTransform: 'capitalize'
                                        }}>
                                            {level === 'beginner' ? 'Principiante' : 
                                             level === 'intermediate' ? 'Intermedio' : 
                                             level === 'advanced' ? 'Avanzado' : level}
                                        </span>
                                        <span style={{ 
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            color: color
                                        }}>
                                            {count} ({percentage}%)
                                        </span>
                                    </div>
                                    <div style={{ 
                                        width: '100%',
                                        height: '8px',
                                        background: '#f1f5f9',
                                        borderRadius: '9999px',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ 
                                            width: `${percentage}%`,
                                            height: '100%',
                                            background: color,
                                            borderRadius: '9999px',
                                            transition: 'width 0.3s ease'
                                        }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPanel;

import React from 'react';
import { CertificateCardProps } from '../types';

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, showDetails = false }) => {
    const getLevelColor = (level?: string) => {
        switch (level) {
            case 'beginner': return 'beginner';
            case 'intermediate': return 'intermediate';
            case 'advanced': return 'advanced';
            default: return '';
        }
    };

    return (
        <article className="card">
            <h3>{certificate.title}</h3>
            
            <div className="certificate-meta">
                <span className="badge">{certificate.category}</span>
                <span className={`badge ${getLevelColor(certificate.level)}`}>
                    {certificate.level || 'Nivel no especificado'}
                </span>
                {certificate.hours && (
                    <span className="badge">{certificate.hours}h</span>
                )}
            </div>

            {showDetails && certificate.description && (
                <p>{certificate.description}</p>
            )}

            <div className="certificate-details">
                <span className="platform">
                    <i className="fas fa-graduation-cap"></i>
                    {certificate.platform || 'OpenWebinars'}
                </span>
                {certificate.hours && (
                    <span className="hours">
                        <i className="fas fa-clock"></i>
                        {certificate.hours} horas
                    </span>
                )}
            </div>

            <button
                onClick={() => {
                    // Construir la URL completa del PDF
                    const pdfUrl = `${process.env.PUBLIC_URL}${certificate.url}`;
                    window.open(pdfUrl, '_blank');
                }}
                className="button"
                style={{ border: 'none', cursor: 'pointer' }}
            >
                <i className="fas fa-external-link-alt"></i>
                Ver Certificado
            </button>
        </article>
    );
};

export default CertificateCard;
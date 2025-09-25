import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { certificados, categoryInfo } from '../data';
import SearchBar from '../components/SearchBar';
import CertificateCard from '../components/CertificateCard';
import { Certificate } from '../types';

const SearchPage: React.FC = () => {
    const [searchResults, setSearchResults] = useState<Certificate[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedLevel, setSelectedLevel] = useState<string>('');

    const handleSearch = (results: Certificate[]) => {
        setSearchResults(results);
        setIsSearching(results.length > 0);
    };

    // Filtrar certificados por categoría y nivel
    const filteredCertificates = certificados.filter(cert => {
        const matchesCategory = !selectedCategory || cert.category === selectedCategory;
        const matchesLevel = !selectedLevel || cert.level === selectedLevel;
        return matchesCategory && matchesLevel;
    });

    // Obtener categorías únicas
    const categories = Array.from(new Set(certificados.map(c => c.category)));
    
    // Obtener niveles únicos
    const levels = Array.from(new Set(certificados.map(c => c.level).filter(Boolean)));

    const clearFilters = () => {
        setSelectedCategory('');
        setSelectedLevel('');
        setSearchResults([]);
        setIsSearching(false);
    };

    const displayCertificates = isSearching ? searchResults : filteredCertificates;

    return (
        <div>
            <Link to="/" className="back-link">
                <i className="fas fa-arrow-left"></i>
                Volver al Inicio
            </Link>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '800', 
                    marginBottom: '1rem',
                    color: '#1f2937'
                }}>
                    🔍 Búsqueda Avanzada
                </h1>
                
                <p style={{ 
                    fontSize: '1.125rem', 
                    color: '#6b7280',
                    marginBottom: '2rem'
                }}>
                    Encuentra certificados por título, tecnología, categoría o descripción
                </p>

                {/* Barra de búsqueda */}
                <SearchBar 
                    onSearch={handleSearch}
                    allCertificates={certificados}
                    placeholder="Buscar por título, tecnología, categoría..."
                />

                {/* Filtros */}
                <div style={{ 
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '2rem'
                }}>
                    {/* Filtro por categoría */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '2px solid #e5e7eb',
                            background: 'white',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#374151',
                            minWidth: '150px'
                        }}
                    >
                        <option value="">Todas las categorías</option>
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {categoryInfo[category]?.name || category}
                            </option>
                        ))}
                    </select>

                    {/* Filtro por nivel */}
                    <select
                        value={selectedLevel}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '2px solid #e5e7eb',
                            background: 'white',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: '#374151',
                            minWidth: '150px'
                        }}
                    >
                        <option value="">Todos los niveles</option>
                        {levels.map(level => (
                            <option key={level} value={level}>
                                {level === 'beginner' ? 'Principiante' : 
                                 level === 'intermediate' ? 'Intermedio' : 
                                 level === 'advanced' ? 'Avanzado' : level}
                            </option>
                        ))}
                    </select>

                    {/* Botón limpiar filtros */}
                    {(selectedCategory || selectedLevel || isSearching) && (
                        <button
                            onClick={clearFilters}
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                border: '2px solid #ef4444',
                                background: 'white',
                                color: '#ef4444',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = '#ef4444';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'white';
                                e.currentTarget.style.color = '#ef4444';
                            }}
                        >
                            <i className="fas fa-times"></i> Limpiar Filtros
                        </button>
                    )}
                </div>

                {/* Estadísticas de resultados */}
                <div style={{ 
                    fontSize: '1rem',
                    color: '#6b7280',
                    marginBottom: '1rem'
                }}>
                    {isSearching ? (
                        <>
                            <strong>{searchResults.length}</strong> resultado{searchResults.length !== 1 ? 's' : ''} 
                            {searchResults.length > 0 && ' encontrado' + (searchResults.length !== 1 ? 's' : '')} para tu búsqueda
                        </>
                    ) : (
                        <>
                            Mostrando <strong>{displayCertificates.length}</strong> de <strong>{certificados.length}</strong> certificados
                        </>
                    )}
                </div>
            </div>

            {/* Lista de certificados */}
            {displayCertificates.length > 0 ? (
                <div className="certificates-container">
                    {displayCertificates.map((cert) => (
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
                    <h3>No se encontraron resultados</h3>
                    <p>
                        {isSearching ? 
                            'No hay certificados que coincidan con tu búsqueda.' :
                            'No hay certificados que coincidan con los filtros seleccionados.'
                        }
                    </p>
                    <button
                        onClick={clearFilters}
                        style={{
                            marginTop: '1rem',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#6366f1',
                            color: 'white',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            cursor: 'pointer'
                        }}
                    >
                        Ver todos los certificados
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchPage;

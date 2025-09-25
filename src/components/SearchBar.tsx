import React, { useState } from 'react';
import { Certificate } from '../types';

interface SearchBarProps {
    onSearch: (results: Certificate[]) => void;
    allCertificates: Certificate[];
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
    onSearch, 
    allCertificates, 
    placeholder = "Buscar certificados..." 
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        
        if (term.trim() === '') {
            onSearch([]);
            return;
        }

        const results = allCertificates.filter(cert => 
            cert.title.toLowerCase().includes(term.toLowerCase()) ||
            cert.tech.toLowerCase().includes(term.toLowerCase()) ||
            cert.category.toLowerCase().includes(term.toLowerCase()) ||
            (cert.description && cert.description.toLowerCase().includes(term.toLowerCase())) ||
            (cert.platform && cert.platform.toLowerCase().includes(term.toLowerCase()))
        );

        onSearch(results);
    };

    const clearSearch = () => {
        setSearchTerm('');
        onSearch([]);
    };

    return (
        <div style={{ 
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
        }}>
            <div style={{ 
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{ 
                    position: 'absolute',
                    left: '1rem',
                    color: '#9ca3af',
                    zIndex: 1
                }}>
                    <i className="fas fa-search"></i>
                </div>
                
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder={placeholder}
                    style={{
                        width: '100%',
                        padding: '1rem 1rem 1rem 3rem',
                        borderRadius: '12px',
                        border: '2px solid #e5e7eb',
                        fontSize: '1rem',
                        background: 'white',
                        transition: 'all 0.3s ease',
                        outline: 'none',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = '#6366f1';
                        e.target.style.boxShadow = '0 0 0 3px rgb(99 102 241 / 0.1)';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
                    }}
                />
                
                {searchTerm && (
                    <button
                        onClick={clearSearch}
                        style={{
                            position: 'absolute',
                            right: '1rem',
                            background: 'none',
                            border: 'none',
                            color: '#9ca3af',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#ef4444'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
            
            {searchTerm && (
                <div style={{ 
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    zIndex: 10,
                    marginTop: '0.5rem',
                    maxHeight: '300px',
                    overflow: 'auto'
                }}>
                    <div style={{ 
                        padding: '0.5rem',
                        fontSize: '0.875rem',
                        color: '#6b7280',
                        borderBottom: '1px solid #f3f4f6',
                        fontWeight: '500'
                    }}>
                        Búsqueda: "{searchTerm}"
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;

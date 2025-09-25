// src/types.ts

// Definimos las categorías disponibles con colores y descripciones
export type Category = 'frontend' | 'backend' | 'databases' | 'tools' | 'cloud' | 'ai' | 'mobile' | 'design';

// Definimos la estructura que DEBE tener cada objeto de certificado
export interface Certificate {
    id: string;
    tech: string;
    category: Category;
    title: string;
    url: string;
    date?: string; // Fecha de obtención del certificado
    description?: string; // Descripción del curso
    level?: 'beginner' | 'intermediate' | 'advanced'; // Nivel del curso
    hours?: number; // Duración en horas
    platform?: string; // Plataforma donde se obtuvo (ej: OpenWebinars)
}

// Información de las categorías para mostrar en la UI
export interface CategoryInfo {
    name: string;
    description: string;
    icon: string;
    color: string;
}

// Estadísticas del portafolio
export interface PortfolioStats {
    totalCertificates: number;
    categoriesCount: Record<Category, number>;
    technologiesCount: Record<string, number>;
    totalHours: number;
}

// Props para componentes
export interface CertificateCardProps {
    certificate: Certificate;
    showDetails?: boolean;
}

export interface CategoryCardProps {
    category: Category;
    info: CategoryInfo;
    count: number;
}

export interface TechnologyCardProps {
    technology: string;
    count: number;
    category: Category;
}
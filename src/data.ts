// src/data.ts
import { Certificate, CategoryInfo } from './types';

// Información de las categorías para la UI
export const categoryInfo: Record<string, CategoryInfo> = {
    frontend: {
        name: 'Frontend',
        description: 'Desarrollo de interfaces de usuario',
        icon: 'fas fa-laptop-code',
        color: '#4F46E5'
    },
    backend: {
        name: 'Backend',
        description: 'Desarrollo de servidores y APIs',
        icon: 'fas fa-server',
        color: '#059669'
    },
    databases: {
        name: 'Bases de Datos',
        description: 'Gestión y diseño de bases de datos',
        icon: 'fas fa-database',
        color: '#DC2626'
    },
    tools: {
        name: 'Herramientas',
        description: 'Herramientas de desarrollo y control de versiones',
        icon: 'fas fa-tools',
        color: '#7C3AED'
    },
    cloud: {
        name: 'Cloud Computing',
        description: 'Servicios en la nube y Azure',
        icon: 'fas fa-cloud',
        color: '#0891B2'
    },
    ai: {
        name: 'Inteligencia Artificial',
        description: 'IA, Machine Learning y ChatGPT',
        icon: 'fas fa-robot',
        color: '#EA580C'
    }
};

// Le decimos a TypeScript que este array debe ser de tipo Certificate[]
// Si algún objeto no cumple la estructura, TypeScript te avisará INMEDIATAMENTE.
export const certificados: Certificate[] = [
    // === FRONTEND ===
    { 
        id: 'html-css', 
        tech: 'HTML5 & CSS3', 
        category: 'frontend', 
        title: 'Curso de HTML5 y CSS3', 
        url: '/certificados/certificado_curso_de_html5_y_css3.pdf',
        platform: 'OpenWebinars',
        level: 'beginner',
        hours: 8,
        description: 'Fundamentos de HTML5 y CSS3 para desarrollo web moderno'
    },
    { 
        id: 'css-maquetacion', 
        tech: 'CSS', 
        category: 'frontend', 
        title: 'Curso de Maquetación Web con CSS', 
        url: '/certificados/certificado_curso_de_maquetación_web_con_css.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 6,
        description: 'Técnicas avanzadas de maquetación y layout con CSS'
    },
    { 
        id: 'responsive-design', 
        tech: 'Responsive Design', 
        category: 'frontend', 
        title: 'Curso de Responsive Web Design', 
        url: '/certificados/certificado_curso_de_responsive_web_design.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 5,
        description: 'Diseño web adaptable para todos los dispositivos'
    },
    { 
        id: 'flexbox-cssgrid', 
        tech: 'CSS', 
        category: 'frontend', 
        title: 'Curso de Flexbox y CSS Grid', 
        url: '/certificados/certificado_curso_de_flexbox_y_css_grid.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 4,
        description: 'Layout moderno con Flexbox y CSS Grid'
    },
    { 
        id: 'sass', 
        tech: 'SASS', 
        category: 'frontend', 
        title: 'Curso de SASS', 
        url: '/certificados/certificado_curso_de_sass.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 3,
        description: 'Preprocesador CSS para desarrollo más eficiente'
    },
    { 
        id: 'bootstrap', 
        tech: 'Bootstrap', 
        category: 'frontend', 
        title: 'Dominando Bootstrap 5', 
        url: '/certificados/certificado_dominando_bootstrap_5__desarrollo_de_sitios_web_responsive.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 7,
        description: 'Framework CSS para desarrollo rápido y responsive'
    },
    { 
        id: 'tailwind', 
        tech: 'Tailwind CSS', 
        category: 'frontend', 
        title: 'Curso de Tailwind CSS', 
        url: '/certificados/certificado_tailwind_css.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 5,
        description: 'Framework CSS utility-first para diseño moderno'
    },

    // === JAVASCRIPT ===
    { 
        id: 'js-basico', 
        tech: 'JavaScript', 
        category: 'frontend', 
        title: 'JavaScript para Principiantes', 
        url: '/certificados/certificado_curso_de_javascript_para_principiantes.pdf',
        platform: 'OpenWebinars',
        level: 'beginner',
        hours: 10,
        description: 'Fundamentos de JavaScript desde cero'
    },
    { 
        id: 'js-intermedio', 
        tech: 'JavaScript', 
        category: 'frontend', 
        title: 'JavaScript Intermedio', 
        url: '/certificados/certificado_curso_de_javascript_intermedio.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 8,
        description: 'Conceptos avanzados de JavaScript'
    },
    { 
        id: 'js-avanzado', 
        tech: 'JavaScript', 
        category: 'frontend', 
        title: 'JavaScript Avanzado', 
        url: '/certificados/certificado_curso_de_javascript_avanzado.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 12,
        description: 'JavaScript avanzado y patrones de diseño'
    },
    { 
        id: 'js-fundamentos', 
        tech: 'JavaScript', 
        category: 'frontend', 
        title: 'Fundamentos de JavaScript', 
        url: '/certificados/certificado_fundamentos_de_javascript.pdf',
        platform: 'OpenWebinars',
        level: 'beginner',
        hours: 7,
        description: 'Base sólida en JavaScript moderno'
    },
    { 
        id: 'js-web-api', 
        tech: 'JavaScript', 
        category: 'frontend', 
        // eslint-disable-next-line no-script-url
        title: 'JavaScript: Web API, Componentes y Testing', 
        url: '/certificados/certificado_javascript__web_api_componentes_y_testing.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 10,
        description: 'APIs web, componentes y testing en JavaScript'
    },
    { 
        id: 'js-manipulacion-dom', 
        tech: 'JavaScript', 
        category: 'frontend', 
        title: 'Manipulación del DOM desde JavaScript', 
        url: '/certificados/certificado_curso_de_manipulación_del_dom_desde_javascript.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 5,
        description: 'Interacción con el DOM usando JavaScript'
    },
    { 
        id: 'js-patrones', 
        tech: 'JavaScript', 
        category: 'frontend', 
        title: 'Patrones de Diseño con JavaScript', 
        url: '/certificados/certificado_curso_de_patrones_de_diseño_con_javascript.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 7,
        description: 'Patrones de diseño aplicados en JavaScript'
    },
    { 
        id: 'js-asincrono', 
        tech: 'JavaScript', 
        category: 'frontend', 
        title: 'Programación Asíncrona con Promises', 
        url: '/certificados/certificado_programación_asíncrona_con_promises_en_javascript.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 6,
        description: 'Programación asíncrona y Promises en JavaScript'
    },
    { 
        id: 'ecmascript-6', 
        tech: 'ECMAScript', 
        category: 'frontend', 
        title: 'Curso de ECMAScript 6', 
        url: '/certificados/certificado_curso_de_ecmascript_6.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 8,
        description: 'Nuevas características de ES6+'
    },
    { 
        id: 'ecmascript', 
        tech: 'ECMAScript', 
        category: 'frontend', 
        title: 'ECMAScript', 
        url: '/certificados/certificado_ecmascript.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 7,
        description: 'Estándar ECMAScript y JavaScript moderno'
    },
    { 
        id: 'js-especializacion', 
        tech: 'JavaScript', 
        category: 'frontend', 
        title: 'Especialización en JavaScript: Asincronía, Prototipos y Clases', 
        url: '/certificados/certificado_especialización_en_javascript__asincronía_prototipos_y_clases.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 15,
        description: 'Especialización avanzada en JavaScript'
    },

    // === REACT ===
    { 
        id: 'react-fundamentos', 
        tech: 'React', 
        category: 'frontend', 
        title: 'Fundamentos de React', 
        url: '/certificados/certificado_fundamentos_de_react.pdf',
        platform: 'OpenWebinars',
        level: 'beginner',
        hours: 9,
        description: 'Introducción a React y sus conceptos básicos'
    },
    { 
        id: 'react-ampliando', 
        tech: 'React', 
        category: 'frontend', 
        title: 'React: Ampliando Conceptos', 
        url: '/certificados/certificado_react__ampliando_conceptos.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 10,
        description: 'Conceptos avanzados de React'
    },
    { 
        id: 'react-estado', 
        tech: 'React', 
        category: 'frontend', 
        title: 'Manejo de Estado con Clases y Hooks', 
        url: '/certificados/certificado_curso_de_manejo_de_estado_con_clases_y_hooks_en_react.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 7,
        description: 'Gestión de estado en React con diferentes enfoques'
    },
    { 
        id: 'react-arquitectura', 
        tech: 'React', 
        category: 'frontend', 
        title: 'Arquitectura y Optimización en React', 
        url: '/certificados/certificado_arquitectura_y_optimización_en_react__de_los_hooks_al_performance.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 11,
        description: 'Arquitectura avanzada y optimización de rendimiento'
    },
    { 
        id: 'react-ssr', 
        tech: 'React', 
        category: 'frontend', 
        title: 'Renderización de Aplicaciones React en el Servidor', 
        url: '/certificados/certificado_renderización_de_aplicaciones_react_en_el_servidor.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 8,
        description: 'Server-Side Rendering con React'
    },

    // === BACKEND ===
    { 
        id: 'python-basico', 
        tech: 'Python', 
        category: 'backend', 
        title: 'Python: Aprende a Programar en Python 3', 
        url: '/certificados/certificado_curso_de_python__aprende_a_programar_en_python_3.pdf',
        platform: 'OpenWebinars',
        level: 'beginner',
        hours: 12,
        description: 'Fundamentos de programación en Python 3'
    },
    { 
        id: 'django-basico', 
        tech: 'Django', 
        category: 'backend', 
        title: 'Curso de Django', 
        url: '/certificados/certificado_curso_de_django.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 10,
        description: 'Framework web Django para Python'
    },
    { 
        id: 'django-aplicaciones', 
        tech: 'Django', 
        category: 'backend', 
        title: 'Aplicaciones Web con Django', 
        url: '/certificados/certificado_aplicaciones_web_con_django.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 11,
        description: 'Desarrollo de aplicaciones web completas con Django'
    },
    { 
        id: 'php-fundamentos', 
        tech: 'PHP', 
        category: 'backend', 
        title: 'PHP: Fundamentos', 
        url: '/certificados/certificado_php__fundamentos.pdf',
        platform: 'OpenWebinars',
        level: 'beginner',
        hours: 9,
        description: 'Fundamentos de programación en PHP'
    },
    { 
        id: 'php-ampliando', 
        tech: 'PHP', 
        category: 'backend', 
        title: 'PHP: Ampliando Conceptos', 
        url: '/certificados/certificado_php__ampliando_conceptos.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 8,
        description: 'Conceptos avanzados de PHP'
    },
    { 
        id: 'php-mysql', 
        tech: 'PHP', 
        category: 'backend', 
        title: 'PHP y MySQL: Creando Sitios Dinámicos', 
        url: '/certificados/certificado_curso_de_php_y_mysql__creando_sitios_dinámicos.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 10,
        description: 'Desarrollo web dinámico con PHP y MySQL'
    },
    { 
        id: 'laravel', 
        tech: 'Laravel', 
        category: 'backend', 
        title: 'Desarrollo Web Moderno con Laravel', 
        url: '/certificados/certificado_desarrollo_web_moderno_con_laravel__de_la_teoría_a_la_práctica.pdf',
        platform: 'OpenWebinars',
        level: 'advanced',
        hours: 12,
        description: 'Framework Laravel para desarrollo web moderno'
    },

    // === BASES DE DATOS ===
    { 
        id: 'sql-basico', 
        tech: 'SQL', 
        category: 'databases', 
        title: 'Curso de SQL desde Cero', 
        url: '/certificados/certificado_curso_de_sql_desde_cero.pdf',
        platform: 'OpenWebinars',
        level: 'beginner',
        hours: 8,
        description: 'Fundamentos de SQL y bases de datos relacionales'
    },
    { 
        id: 'sql-administracion', 
        tech: 'SQL', 
        category: 'databases', 
        title: 'Creación y Administración de Bases de Datos SQL', 
        url: '/certificados/certificado_curso_de_creación_y_administración_de_bases_de_datos_sql.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 9,
        description: 'Administración avanzada de bases de datos SQL'
    },

    // === HERRAMIENTAS ===
    { 
        id: 'git', 
        tech: 'Git', 
        category: 'tools', 
        title: 'Curso de Git', 
        url: '/certificados/certificado_curso_de_git.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 6,
        description: 'Control de versiones con Git'
    },
    { 
        id: 'excel-avanzado', 
        tech: 'Excel', 
        category: 'tools', 
        title: 'Excel: Funciones Avanzadas', 
        url: '/certificados/certificado_curso_de_excel__funciones_avanzadas-1.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 7,
        description: 'Funciones avanzadas de Microsoft Excel'
    },

    // === CLOUD COMPUTING ===
    { 
        id: 'azure-900', 
        tech: 'Azure', 
        category: 'cloud', 
        title: 'AZ-900: Servicios, Soluciones y Herramientas en Azure', 
        url: '/certificados/certificado_curso_az-900_parte_1__servicios_soluciones_y_herramientas_en_azure.pdf',
        platform: 'OpenWebinars',
        level: 'beginner',
        hours: 8,
        description: 'Fundamentos de Microsoft Azure'
    },

    // === INTELIGENCIA ARTIFICIAL ===
    { 
        id: 'chatgpt-openai', 
        tech: 'ChatGPT', 
        category: 'ai', 
        title: 'Dominando ChatGPT con la API de OpenAI', 
        url: '/certificados/certificado_dominando_chatgpt_con_la_api_de_openai.pdf',
        platform: 'OpenWebinars',
        level: 'intermediate',
        hours: 6,
        description: 'Integración y uso avanzado de ChatGPT con API'
    }
];
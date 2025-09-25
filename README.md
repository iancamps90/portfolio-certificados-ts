# 🎓 Portafolio de Certificados - Ian Camps

Un portafolio moderno y profesional desarrollado con **React** y **TypeScript** para mostrar certificados de OpenWebinars de manera organizada y atractiva.

## 🚀 Características

- **📱 Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **🔍 Búsqueda Avanzada**: Filtros por categoría, nivel y búsqueda en tiempo real
- **📊 Estadísticas Detalladas**: Métricas y gráficos de progreso
- **🎨 UI Moderna**: Diseño profesional con animaciones suaves
- **⚡ TypeScript**: Tipado estricto para mejor mantenimiento
- **📈 Organización Inteligente**: Categorías y tecnologías bien estructuradas

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Superset tipado de JavaScript
- **React Router** - Navegación SPA
- **CSS3** - Estilos modernos con variables CSS
- **FontAwesome** - Iconografía
- **Google Fonts** - Tipografía Inter

## 📊 Estadísticas del Portafolio

- **47 Certificados** completados
- **6 Categorías** diferentes
- **15+ Tecnologías** dominadas
- **300+ Horas** de formación

### Categorías:
- 🎨 **Frontend**: HTML, CSS, JavaScript, React, SASS, Bootstrap, Tailwind
- ⚙️ **Backend**: Python, Django, PHP, Laravel
- 🗄️ **Bases de Datos**: SQL, MySQL
- 🛠️ **Herramientas**: Git, Excel
- ☁️ **Cloud**: Azure
- 🤖 **IA**: ChatGPT, OpenAI API

## 🚀 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd mi-portafolio-ts

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start

# Abrir en el navegador
# http://localhost:3000
```

## 📦 Build para Producción

```bash
# Crear build optimizado
npm run build

# El build se creará en la carpeta /build
# Los certificados PDF están incluidos en /build/certificados/
# Listo para deploy en cualquier servidor estático
```

### 📄 Certificados PDF

Los certificados están organizados en la carpeta `/public/certificados/` y se incluyen automáticamente en el build. Cada certificado tiene:

- **Nombre descriptivo** del curso
- **Tecnología** específica
- **Categoría** de clasificación
- **Nivel** de dificultad
- **Horas** de duración
- **Descripción** detallada

## 🌐 Opciones de Deploy

### 1. **Netlify** (Recomendado)
```bash
# Conectar repositorio a Netlify
# Configurar build command: npm run build
# Publish directory: build
```

### 2. **Vercel**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 3. **GitHub Pages**
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Añadir al package.json:
"homepage": "https://tu-usuario.github.io/tu-repo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

### 4. **Firebase Hosting**
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Inicializar
firebase init hosting

# Deploy
firebase deploy
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── CertificateCard.tsx
│   ├── SearchBar.tsx
│   └── StatsPanel.tsx
├── pages/              # Páginas principales
│   ├── HomePage.tsx
│   ├── TechnologyPage.tsx
│   ├── CertificateListPage.tsx
│   └── SearchPage.tsx
├── data.ts             # Datos de certificados
├── types.ts            # Definiciones TypeScript
├── App.tsx             # Componente principal
├── App.css             # Estilos globales
└── index.tsx           # Punto de entrada
```

## 🎯 Funcionalidades

### 🔍 Búsqueda y Filtros
- Búsqueda en tiempo real por título, tecnología, descripción
- Filtros por categoría y nivel de dificultad
- Resultados instantáneos con estadísticas

### 📊 Panel de Estadísticas
- Total de certificados y horas
- Distribución por nivel (Principiante, Intermedio, Avanzado)
- Top tecnologías más estudiadas
- Métricas por categoría

### 📱 Diseño Responsivo
- Layout adaptativo para todos los dispositivos
- Navegación optimizada para móvil
- Animaciones suaves y transiciones

## 🔧 Configuración

### Variables de Entorno
```bash
# .env (opcional)
REACT_APP_TITLE=Portafolio de Certificados
REACT_APP_AUTHOR=Ian Camps
```

### Personalización
- **Colores**: Modificar variables CSS en `App.css`
- **Datos**: Actualizar `data.ts` con nuevos certificados
- **Estilos**: Personalizar componentes en sus respectivos archivos

## 📈 Próximas Mejoras

- [ ] Modo oscuro/claro
- [ ] Exportar certificados a PDF
- [ ] Sistema de tags
- [ ] Integración con API de certificados
- [ ] Animaciones más avanzadas
- [ ] PWA (Progressive Web App)

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Ian Camps**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- [OpenWebinars](https://openwebinars.net/) por los excelentes cursos
- [React](https://reactjs.org/) por el framework
- [TypeScript](https://www.typescriptlang.org/) por el tipado
- [FontAwesome](https://fontawesome.com/) por los iconos

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐
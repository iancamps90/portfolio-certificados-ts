# 🚀 Guía de Deploy - Portafolio de Certificados

## ✅ Estado Actual
- ✅ Build completado exitosamente
- ✅ Certificados PDF incluidos en `/build/certificados/`
- ✅ Todas las rutas actualizadas correctamente
- ✅ Proyecto listo para deploy

## 🌐 Opciones de Deploy

### 1. **GitHub Pages** (Automático)

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Configurar tu usuario en package.json
# Cambiar "tu-usuario" por tu nombre de usuario de GitHub
# en la línea: "homepage": "https://tu-usuario.github.io/portafolio-certificados"

# 3. Deploy automático
npm run deploy
```

### 2. **Netlify** (Recomendado - Más fácil)

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `/build` al área de deploy
3. ¡Listo! Tu sitio estará online en minutos

### 3. **Vercel**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
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

## 📁 Archivos Listos para Deploy

```
build/
├── certificados/          # ✅ Todos los PDFs incluidos
│   ├── certificado_*.pdf
│   └── ...
├── static/               # ✅ CSS y JS optimizados
│   ├── css/
│   └── js/
├── index.html            # ✅ Página principal
└── manifest.json         # ✅ PWA config
```

## 🔗 URLs de Prueba

Una vez deployado, podrás acceder a:
- **Sitio principal**: `https://tu-dominio.com`
- **Certificados**: `https://tu-dominio.com/certificados/certificado_*.pdf`

## ⚠️ Importante

1. **Cambiar homepage**: Actualiza la URL en `package.json` con tu usuario real
2. **Certificados**: Ya están incluidos y funcionando
3. **Rutas**: Todas actualizadas a `certificados/certificado_*.pdf`
4. **Build**: Optimizado y listo para producción

## 🎯 Próximos Pasos

1. **Elegir plataforma** de deploy
2. **Configurar** con tu usuario/dominio
3. **Deploy** y ¡disfrutar tu portafolio online!

---

**¡Tu portafolio está listo para impresionar! 🎓✨**

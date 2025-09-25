# 🚀 Solución de Deploy - Portafolio de Certificados

## ❌ Problema Identificado

El deploy a GitHub Pages falla porque los nombres de archivos de los certificados son **demasiado largos** para Windows. Esto es un problema común con rutas largas en sistemas Windows.

## ✅ Soluciones Alternativas

### 1. **Netlify (RECOMENDADO - Más Fácil)**

#### Opción A: Drag & Drop
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `/build` al área de deploy
3. ¡Listo! Tu sitio estará online en minutos

#### Opción B: Conecta con GitHub
1. Ve a [netlify.com](https://netlify.com)
2. Haz clic en "New site from Git"
3. Conecta tu repositorio de GitHub
4. Configura:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Deploy automático en cada push

### 2. **Vercel (Alternativa)**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### 3. **Firebase Hosting**

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Inicializar
firebase init hosting

# Deploy
firebase deploy
```

## 🎯 Recomendación

**Usa Netlify** porque:
- ✅ Más fácil de configurar
- ✅ Deploy automático desde GitHub
- ✅ No tiene problemas con nombres largos
- ✅ HTTPS automático
- ✅ Dominio personalizado gratis

## 📋 Pasos para Netlify

1. **Subir a GitHub** (ya hecho)
2. **Ir a Netlify**
3. **Conectar repositorio**
4. **Configurar build settings**
5. **Deploy automático**

## 🔗 URLs Finales

Una vez deployado tendrás:
- **Sitio principal**: `https://tu-sitio.netlify.app`
- **Certificados**: `https://tu-sitio.netlify.app/certificados/certificado_*.pdf`

## ⚠️ Nota Importante

El problema de GitHub Pages es específico de Windows y nombres de archivo largos. Netlify y otras plataformas no tienen este problema.

---

**¡Tu portafolio está listo para deploy! 🎓✨**


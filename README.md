# Crowmie Solar Investment

## 📋 Objetivo del Proyecto
Crear una SPA que muestre información detallada de proyectos de inversión en energía solar, incluyendo:

Información general del proyecto
Gráficos de rendimiento
Datos de promotores
Mapa de ubicación
Inversión y métricas financieras.

## 🚀 Características

- 📊 Visualización de métricas de inversión.
- 🗺️ Mapas interactivos con Leaflet
- 📈 Gráficos de rendimiento con Recharts
- 🌓 Dark mode / Light mode
- 📱 Diseño responsive (Mobile-first)
- ⚡ Optimizado con Vite

## 📁 Estructura del Proyecto
```text
crowmie-solar-investment/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/         # Componentes reutilizables
│   │   ├── layout/         # Layout y navegación
│   │   └── project/        # Componentes específicos de proyectos
│   ├── contexts/           # Context API (Theme)
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Páginas de la aplicación
│   ├── services/           # Servicios y API
│   ├── styles/             # Temas y estilos globales
│   ├── types/              # Definiciones TypeScript
|   ├── utils/              # Utilidades y helpers
|   ├── App.tsx
|   └── main.tsx
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
## 📦 Instalación

### Desarrollo local

### Clonar repositorio
```bash
git clone https://github.com/Litti8/crowmie-solar-investment.git
cd crowmie-solar-investment
```
### Instalar dependencias
```bash
npm install
```
### Configurar variables de entorno archivo `.env`
```env
VITE_API_BASE_URL=<API_BASE_URL>
VITE_ASSETS_URL=<ASSETS_URL>
VITE_ENABLE_CACHE=true
VITE_CACHE_TTL=86400000
```

### Iniciar servidor de desarrollo
```bash
npm run dev
```

## 🎯 Tecnologías y Librerías

### Core
- React 18 con TypeScript
- Vite (rendimiento optimizado para SPA)
- React Hooks para gestión de estado

### UI/UX
- Material-UI v5 (MUI) - Sistema de diseño completo
- Recharts - Gráficos interactivos
- react-i18next - Internacionalización (ES/EN)

### Mapas
- Leaflet + react-leaflet - Mapas interactivos open source

### Data & API
- Axios - Peticiones HTTP con interceptores
- React Query - Cache, prefetch y gestión de estado servidor

### Optimización
- React.lazy + Suspense - Code splitting
- LocalStorage API - Cache local


## 🚀 Funcionalidades Principales
1. **Vista del proyecto**
    - Información general
    - Gráficos de rendimiento
    - Datos del promotor
    - Mapa de ubicación
    - Métricas financieras

2. **Diseño y UX**
    - Responsive (Mobile-first)
    - Dark mode / Light mode
    - Internacionalización (ES/EN)
    - Mapas interactivos con Leaflet
    - Gráficos con Recharts
    - Skeleton screens para loading states

3. **Sistema de Caché de multiples niveles**
    - React Query: Cache en memoria (5 min)
    - LocalStorage: Proyectos visitados (24h)
    - ETags: Validación con servidor

4. **Optimizaciones de Rendimiento**
    - Code Splitting: Carga lazy de componentes pesados.

5. **Seguridad**
    - Validación de datos del API
    - CORS configurado
    - Environment variables para secrets

## 🧪 Testing Strategy
**Unit tests**
- Utilidades y formatters
- Hooks personalizados

**Integration tests**
- Flujo completo de carga de proyecto
- Interacciones del usuario

**✅ Checklist de Calidad**
- [x] TypeScript sin errores
- [x] Responsive en todos los breakpoints
- [x] Accesibilidad (ARIA labels, keyboard navigation)
- [x] i18n (Español/Inglés)
- [x] Error handling robusto
- [x] Loading states

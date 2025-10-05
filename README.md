# Crowmie Solar Investment

## 📋 Objetivo del Proyecto
Crear una SPA que muestre información detallada de proyectos de inversión en energía solar, incluyendo:

Información general del proyecto
Gráficos de rendimiento
Datos de promotores
Mapa de ubicación
Inversión y métricas financieras.

## 🏗️ Arquitectura y Estructura del Proyecto
```text
crowmie-solar-investment/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── ui/           # Componentes de Material-UI personalizados
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   └── SkeletonLoader/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   └── MobileNav/
│   │   ├── project/
│   │   │   ├── ProjectHeader/
│   │   │   ├── ProjectDescription/
│   │   │   ├── ProjectMap/
│   │   │   ├── ProjectChart/
│   │   │   ├── PromotersList/
│   │   │   └── InvestmentMetrics/
│   │   └── common/
│   │       ├── ErrorBoundary/
│   │       └── LoadingState/
│   ├── hooks/
│   │   ├── useProject.ts
│   │   ├── useChartData.ts
│   │   └── useResponsive.ts
│   ├── services/
│   │   ├── api/
│   │   │   ├── client.ts          # Axios configurado
│   │   │   ├── projects.ts
│   │   │   └── charts.ts
│   │   └── cache/
│   │       └── cacheService.ts    # LocalStorage/IndexedDB
│   ├── types/
│   │   ├── project.ts
│   │   ├── chart.ts
│   │   └── api.ts
│   ├── utils/
│   │   ├── formatters.ts          # Formateo de números, fechas
│   │   ├── validators.ts
│   │   └── constants.ts
│   ├── styles/
│   │   ├── theme.ts               # Tema de Material-UI
│   │   └── globalStyles.ts
│   ├── pages/
│   │   ├── ProjectDetail/
│   │   │   └── ProjectDetail.tsx
│   │   └── NotFound/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Tecnologías y Librerías

### Core
- React 18 con TypeScript
- Vite (más rápido que Create React App)
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

## 📱 Estrategia Mobile-First
### Layout Responsive
- **Mobile (xs-sm):** Vista en columna única, menú hamburguesa
- **Tablet (md):** Vista en 2 columnas para algunos componentes
- **Desktop (lg+):** Vista completa con sidebar

## 🚀 Funcionalidades Principales
1. **Vista del proyecto**
```typescript
// Estructura del componente principal
<ProjectDetail>
  <ProjectHeader />          // Nombre, imagen, métricas clave
  <InvestmentMetrics />      // TIR, retorno anual, etc.
  <ProjectDescription />     // Descripción completa
  <ProjectMap />            // Ubicación en mapa
  <ProjectChart />          // Gráfico de rendimientos
  <PromotersList />         // Lista de promotores
</ProjectDetail>
```
2. **Sistema de Caché de multiples niveles**

    - React Query: Cache en memoria (5 min)
    - LocalStorage: Proyectos visitados (24h)
    - ETags: Validación con servidor

3. **Optimizaciones de Rendimiento**
    - Code Splitting: Carga lazy de componentes pesados.
    - Virtualizacion: Para listas grandes de datos.
    - Memoizacion: React.memo para componentes puros.
    - Deboucing: En busquedas y filtros.

4. **Seguridad**

    - Validación de datos del API
    - Sanitización de HTML (DOMPurify)
    - CORS configurado
    - Environment variables para secrets
    - CSP headers en nginx

5. **Containerizacion Docker**
    - Imagen final ligera (~15MB)
    - Build reproducible
    - Optimizado para produccion

## 🎨 Diseño y UX
Implementacion de requerimientos adicionando funcionalidades como internacionalizacion(EN - ES) y switch mode theme (tema claro/ tema oscuro).

### Estados de la UI
- **Loading:** Skeleton screens
- **Success:** Contenido completo
- **Error:** Mensaje amigable + retry
- **Empty:** Sin datos disponibles

## 🧪 Testing Strategy
**Unit tests**
- Componentes individuales (Jest + React Testing Library)
- Utilidades y formatters
- Hooks personalizados

**Integration tests**
- Flujo completo de carga de proyecto
- Interacciones del usuario

## 📚 Documentación
Cada componente tiene:
```typescript
/**
 * ProjectHeader - Componente que muestra el encabezado del proyecto
 * 
 * @param {Project} project - Datos del proyecto
 * @param {boolean} loading - Estado de carga
 * 
 * @example
 * <ProjectHeader project={projectData} loading={false} />
 */
```

## ✅ Checklist de Calidad
- [x] TypeScript sin errores
- [x] Responsive en todos los breakpoints
- [x] Accesibilidad (ARIA labels, keyboard navigation)
- [x] i18n (Español/Inglés)
- [x] Error handling robusto
- [x] Loading states
- [x] Cache funcionando
- [x] Docker image construye correctamente
- [x] Performance > 90 en Lighthouse
- [x] SEO básico implementado
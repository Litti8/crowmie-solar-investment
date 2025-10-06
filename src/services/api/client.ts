import axios, { AxiosInstance, AxiosError } from 'axios';

// URLs del API desde variables de entorno
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ASSETS_URL = import.meta.env.VITE_ASSETS_URL;

// Crear instancia de Axios con configuración base
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de REQUESTS
apiClient.interceptors.request.use(
  (config) => {
    
    console.log(`🚀 Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Interceptor de RESPONSES
apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ Response: ${response.config.url} - Status ${response.status}`);
    return response;
  },
  (error: AxiosError) => {
    // Manejo centralizado de errores
    if (error.response) {
      console.error(`❌ API Error: ${error.response.status}`, error.response.data);
      
      switch (error.response.status) {
        case 404:
          console.error('Recurso no encontrado');
          break;
        case 500:
          console.error('Error interno del servidor');
          break;
        case 503:
          console.error('Servicio no disponible');
          break;
      }
    } else if (error.request) {
      console.error('❌ No response from server:', error.message);
    } else {
      console.error('❌ Request setup error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// Función helper para construir URLs de assets
export const getAssetUrl = (filename: string): string => {
  return `${ASSETS_URL}/${filename}`;
};

export default apiClient;
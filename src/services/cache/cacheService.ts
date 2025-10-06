const CACHE_PREFIX = 'crowmie_';
const DEFAULT_TTL = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

/**
 * Guardar datos en localStorage con tiempo de expiración
 */
export const setCache = <T>(
  key: string,
  data: T,
  ttl: number = DEFAULT_TTL
): void => {
  try {
    const cacheEntry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      ttl,
    };
    localStorage.setItem(
      `${CACHE_PREFIX}${key}`,
      JSON.stringify(cacheEntry)
    );
  } catch (error) {
    console.error('Error saving to cache:', error);
    // Si el localStorage está lleno, limpiar caché antigua
    if (error instanceof Error && error.name === 'QuotaExceededError') {
      clearExpiredCache();
    }
  }
};

/**
 * Obtener datos del caché si no han expirado
 */
export const getCache = <T>(key: string): T | null => {
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!cached) return null;

    const cacheEntry: CacheEntry<T> = JSON.parse(cached);
    const now = Date.now();

    // Verificar si ha expirado
    if (now - cacheEntry.timestamp > cacheEntry.ttl) {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }

    return cacheEntry.data;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
};

/**
 * Eliminar entrada específica del caché
 */
export const removeCache = (key: string): void => {
  localStorage.removeItem(`${CACHE_PREFIX}${key}`);
};

/**
 * Limpiar toda la caché de la aplicación
 */
export const clearAllCache = (): void => {
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(CACHE_PREFIX)) {
      localStorage.removeItem(key);
    }
  });
};

/**
 * Limpiar solo las entradas expiradas
 */
export const clearExpiredCache = (): void => {
  const now = Date.now();
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(CACHE_PREFIX)) {
      try {
        const cached = localStorage.getItem(key);
        if (cached) {
          const cacheEntry: CacheEntry<unknown> = JSON.parse(cached);
          if (now - cacheEntry.timestamp > cacheEntry.ttl) {
            localStorage.removeItem(key);
          }
        }
      } catch (error) {
        // Si no se puede parsear, eliminar
        localStorage.removeItem(key);
      }
    }
  });
};

/**
 * Obtener tamaño aproximado de la caché en KB
 */
export const getCacheSize = (): number => {
  let size = 0;
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(CACHE_PREFIX)) {
      const item = localStorage.getItem(key);
      if (item) {
        size += item.length + key.length;
      }
    }
  });
  return Math.round(size / 1024); // Retorna en KB
};
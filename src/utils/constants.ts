export const PROJECT_STATUS = {
  PREPARATION: 'preparation',
  PRESALE: 'presale',
  OPEN: 'open',
  CLOSED: 'closed',
  CONSTRUCTION: 'construction',
  PRODUCTION: 'production',
  SOLD: 'sold',
  CANCELED: 'canceled',
} as const;

export const PROJECT_STATUS_LABELS = {
  [PROJECT_STATUS.PREPARATION]: 'En preparación',
  [PROJECT_STATUS.PRESALE]: 'Preventa',
  [PROJECT_STATUS.OPEN]: 'Abierto',
  [PROJECT_STATUS.CLOSED]: 'Cerrado',
  [PROJECT_STATUS.CONSTRUCTION]: 'En construcción',
  [PROJECT_STATUS.PRODUCTION]: 'En producción',
  [PROJECT_STATUS.SOLD]: 'Vendido',
  [PROJECT_STATUS.CANCELED]: 'Cancelado',
};

export const PROJECT_TYPES = {
  SUN: 'sun',
  WIND: 'wind',
} as const;

export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
} as const;
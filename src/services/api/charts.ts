import apiClient from './client';
import { ChartDataPoint, ChartResponse } from '@/types/chart';

/**
 * Obtener datos de gráfico para un proyecto
 * @param projectId - ID del proyecto (asset)
 * @param params - Parámetros opcionales
 */
export const getChartData = async (
  projectId: string,
  params?: {
    page?: number;
    rows?: number;
  }
): Promise<ChartResponse> => {
  const response = await apiClient.get<ChartResponse>(
    `/assets/cashflow/${projectId}`,
    {
      params: {
        page: params?.page || 0,
        rows: params?.rows || 500,
      },
    }
  );
  return response.data;
};

/**
 * Procesar datos del gráfico para visualización
 * Transforma los datos del API a formato más amigable
 */
export const processChartData = (data: ChartDataPoint[]) => {
  return data.map((point) => ({
    date: new Date(point.payment_date),
    dateLabel: `${point.year}-${String(point.month).padStart(2, '0')}`,
    amount: point.amount,
    revenues: point.revenues,
    expenses: point.operating_expenses,
    netIncome: point.amount - point.operating_expenses,
    monthIndex: point.month_index,
  }));
};
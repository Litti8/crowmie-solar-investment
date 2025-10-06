import { useQuery } from '@tanstack/react-query';
import { getChartData, processChartData } from '@services/api/charts';
import { ChartResponse } from '@/types/chart';

/**
 * Hook para obtener datos del gráfico de un proyecto
 */
export const useChartData = (projectId: string) => {
  return useQuery<ChartResponse, Error>({
    queryKey: ['chartData', projectId],
    queryFn: () => getChartData(projectId),
    enabled: !!projectId,
    staleTime: 10 * 60 * 1000, // 10 minutos (datos cambian menos)
    select: (data) => ({
      ...data,
      processedData: processChartData(data.data),
    }),
  });
};
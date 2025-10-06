import { useQuery } from '@tanstack/react-query';
import { getChartData, processChartData } from '@services/api/charts';
import { ChartResponse } from '@/types/chart';

export const useChartData = (projectId: string) => {
  return useQuery<ChartResponse, Error, ChartResponse & { processedData: any[] }>({
    queryKey: ['chartData', projectId],
    queryFn: () => getChartData(projectId),
    enabled: !!projectId,
    staleTime: 10 * 60 * 1000,
    select: (data) => ({
      ...data,
      processedData: processChartData(data.data),
    }),
  });
};
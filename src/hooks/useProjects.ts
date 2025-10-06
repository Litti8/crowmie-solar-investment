import { useQuery } from '@tanstack/react-query';
import { getProjects } from '@services/api/projects';
import { Project } from '@/types/project';
import { ApiResponse } from '@/types/api';

interface UseProjectsParams {
  status?: string;
  type?: string;
  page?: number;
  limit?: number;
}

/**
 * Hook para obtener lista de proyectos
 */
export const useProjects = (params?: UseProjectsParams) => {
  return useQuery<ApiResponse<Project[]>, Error>({
    queryKey: ['projects', params],
    queryFn: () => getProjects(params),
    staleTime: 5 * 60 * 1000,
  });
};
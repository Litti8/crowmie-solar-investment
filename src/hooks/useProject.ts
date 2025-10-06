import { useQuery } from '@tanstack/react-query';
import { getProjectById } from '@services/api/projects';
import { Project } from '@/types/project';

/**
 * Hook para obtener detalle de un proyecto
 * Usa React Query para caché automático y refetch
 */
export const useProject = (projectId: string) => {
  return useQuery<Project, Error>({
    queryKey: ['project', projectId],
    queryFn: () => getProjectById(projectId),
    enabled: !!projectId, // Solo ejecuta si hay projectId
    staleTime: 5 * 60 * 1000, 
    gcTime: 10 * 60 * 1000, 
  });
};
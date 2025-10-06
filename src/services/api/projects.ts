import apiClient from './client';
import { Project } from '@/types/project';
import { ApiResponse } from '@/types/api';

/**
 * Obtener lista de proyectos
 * @param params - Parámetros de filtrado (opcional)
 */
export const getProjects = async (params?: {
  status?: string;
  type?: string;
  page?: number;
  limit?: number;
}): Promise<ApiResponse<Project[]>> => {
  const response = await apiClient.get<ApiResponse<Project[]>>('/assets', {
    params,
  });
  return response.data;
};

/**
 * Obtener detalle de un proyecto específico
 * @param projectId - ID del proyecto
 */
export const getProjectById = async (projectId: string): Promise<Project> => {
  const response = await apiClient.get<Project>(`/assets/${projectId}`);
  return response.data;
};

/**
 * Obtener proyectos con filtros específicos
 * @param filters - Objeto con filtros personalizados
 */
export const getFilteredProjects = async (filters: {
  minTir?: number;
  maxTir?: number;
  status?: string[];
  typology?: string[];
}): Promise<Project[]> => {
  const { data } = await apiClient.get<ApiResponse<Project[]>>('/assets', {
    params: filters,
  });
  return data.data;
};
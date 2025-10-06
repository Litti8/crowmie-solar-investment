import { ThemeProvider } from './contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useProject } from '@hooks/useProject';
import { formatCurrency, formatPercentage } from '@utils/formatters';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// Componente de prueba
function ProjectTest() {
  
  const { data: project, isLoading, error } = useProject('655c88d12c82187ff21c7bc2');

  if (isLoading) return <div>Cargando proyecto...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!project) return <div>No se encontró el proyecto</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{project.name}</h1>
      <p><strong>Ubicación:</strong> {project.address}</p>
      <p><strong>Potencia:</strong> {project.power}</p>
      <p><strong>Precio:</strong> {formatCurrency(project.price)}</p>
      <p><strong>TIR:</strong> {formatPercentage(project.tir)}</p>
      <p><strong>Retorno anual:</strong> {formatPercentage(project.annual_return)}</p>
      <p><strong>Estado:</strong> {project.status}</p>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ProjectTest />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

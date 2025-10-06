import { ThemeProvider } from './contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@components/common/ErrorBoundary';
import { Header } from '@components/layout/Header';
import { useProject } from '@hooks/useProject';
import { LoadingState } from '@components/common/LoadingState';
import { ErrorState } from '@components/common/ErrorState';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
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

function ProjectTest() {
  const { data: project, isLoading, error, refetch } = useProject('655c88d12c82187ff21c7bc2');

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState message={error.message} onRetry={() => refetch()} />;
  if (!project) return <ErrorState message="No se encontró el proyecto" />;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header del proyecto */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {project.address} • {project.power}
        </Typography>
      </Box>

      {/* Métricas clave */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Inversión
              </Typography>
              <Typography variant="h5">
                {formatCurrency(project.price)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                TIR
              </Typography>
              <Typography variant="h5" color="primary">
                {formatPercentage(project.tir)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Retorno Anual
              </Typography>
              <Typography variant="h5" color="success.main">
                {formatPercentage(project.annual_return)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 6, md: 3 }}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Inversores
              </Typography>
              <Typography variant="h5">
                {project.totalInvestors}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Descripción */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Descripción
          </Typography>
          <Typography 
            variant="body1" 
            dangerouslySetInnerHTML={{ __html: project.descriptions.es }}
          />
        </CardContent>
      </Card>

      {/* Promotores */}
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Promotores
          </Typography>
          <Grid container spacing={2}>
            {project.promoters.map((promoter) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={promoter._id}>
                <Box sx={{ p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h6">{promoter.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {promoter.type}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <Header />
            <ProjectTest />
          </Box>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
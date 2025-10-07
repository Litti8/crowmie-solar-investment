import { lazy, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@components/common/ErrorBoundary';
import { Header } from '@components/layout/Header';
import { LoadingState } from '@components/common/LoadingState';
import { Box } from '@mui/material';

const ProjectDetailPage = lazy(() => import('./pages/ProjectDetail/ProjectDetailPage'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <Header />
            <Suspense fallback={<LoadingState />}>
              <ProjectDetailPage />
            </Suspense>
          </Box>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
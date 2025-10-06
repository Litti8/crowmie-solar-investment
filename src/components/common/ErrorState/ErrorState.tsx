import { Box, Typography, Button, Container } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({ 
  message = 'No se pudieron cargar los datos',
  onRetry 
}: ErrorStateProps) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <ErrorOutline sx={{ fontSize: 60, color: 'error.main' }} />
        <Typography variant="h5" component="h2">
          Error al cargar
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {message}
        </Typography>
        {onRetry && (
          <Button variant="contained" onClick={onRetry}>
            Intentar de nuevo
          </Button>
        )}
      </Box>
    </Container>
  );
};
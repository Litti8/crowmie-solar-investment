import { Box, Typography, Button, Container } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({ 
  message,
  onRetry 
}: ErrorStateProps) => {
  const { t } = useTranslation();
  
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
          {t('errors.loadError')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {message || t('errors.unexpectedError')}
        </Typography>
        {onRetry && (
          <Button variant="contained" onClick={onRetry}>
            {t('common.retry')}
          </Button>
        )}
      </Box>
    </Container>
  );
};
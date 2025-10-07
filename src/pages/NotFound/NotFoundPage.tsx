import { Box, Typography, Button, Container } from '@mui/material';
import { SearchOff } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
          gap: 3,
        }}
      >
        <SearchOff sx={{ fontSize: 120, color: 'text.secondary', opacity: 0.5 }} />
        
        <Box>
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            404
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Página no encontrada
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Lo sentimos, la página que buscas no existe.
          </Typography>
        </Box>

        <Button 
          variant="contained" 
          size="large" 
          onClick={handleGoHome}
          sx={{ mt: 2 }}
        >
          {t('errors.backHome')}
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
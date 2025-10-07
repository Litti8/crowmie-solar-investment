import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from '@contexts/ThemeContext';
import { LanguageSelector } from '@components/common/LanguageSelector';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { mode, toggleTheme } = useThemeMode();
  const { t } = useTranslation();

  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          >
            {t('header.title')}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LanguageSelector />
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              aria-label={t('header.toggleTheme')}
            >
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
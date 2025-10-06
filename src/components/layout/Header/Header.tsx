import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from '@contexts/ThemeContext';

export const Header = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="lg">
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
            Crowmie Solar
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              aria-label="toggle theme"
            >
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
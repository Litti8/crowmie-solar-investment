import { Component, ReactNode } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Error as ErrorIcon } from '@mui/icons-material';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              textAlign: 'center',
              gap: 3,
            }}
          >
            <ErrorIcon sx={{ fontSize: 80, color: 'error.main' }} />
            <Typography variant="h4" component="h1">
              Algo salió mal
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
            </Typography>
            {this.state.error && (
              <Typography
                variant="caption"
                sx={{
                  fontFamily: 'monospace',
                  bgcolor: 'background.paper',
                  p: 2,
                  borderRadius: 1,
                  maxWidth: '100%',
                  overflow: 'auto',
                }}
              >
                {this.state.error.message}
              </Typography>
            )}
            <Button variant="contained" size="large" onClick={this.handleReset}>
              Volver al inicio
            </Button>
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}
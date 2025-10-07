import { Box, Container, Skeleton, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

export const LoadingState = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2, mb: 2 }} />
        <Skeleton variant="text" sx={{ width: '60%', height: 40 }} />
        <Skeleton variant="text" sx={{ width: '40%', height: 30 }} />
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[1, 2, 3, 4].map((item) => (
          <Grid size={{ xs: 6, md: 3 }} key={item}>
            <Card>
              <CardContent>
                <Skeleton variant="text" sx={{ width: '60%' }} />
                <Skeleton variant="text" sx={{ width: '80%', height: 40 }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Skeleton variant="text" sx={{ width: '30%', height: 30, mb: 2 }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" sx={{ width: '80%' }} />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Skeleton variant="text" sx={{ width: '30%', height: 30, mb: 2 }} />
          <Skeleton variant="rectangular" height={400} />
        </CardContent>
      </Card>
    </Container>
  );
};
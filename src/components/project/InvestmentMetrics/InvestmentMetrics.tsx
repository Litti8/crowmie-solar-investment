import { Card, CardContent, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { TrendingUp, CalendarToday, Paid, People } from '@mui/icons-material';
import { formatCurrency, formatPercentage } from '@utils/formatters';

import { ReactElement } from 'react';

interface Metric {
  label: string;
  value: string;
  icon: ReactElement;
  color: string;
}

interface InvestmentMetricsProps {
  price: number;
  tir: number;
  annualReturn: number;
  projectLife: number;
  totalInvestors: number;
}

export const InvestmentMetrics = ({
  price,
  tir,
  annualReturn,
  projectLife,
  totalInvestors,
}: InvestmentMetricsProps) => {
  const metrics: Metric[] = [
    {
      label: 'Inversión Total',
      value: formatCurrency(price),
      icon: <Paid sx={{ fontSize: 32 }} />,
      color: 'primary.main',
    },
    {
      label: 'TIR',
      value: formatPercentage(tir),
      icon: <TrendingUp sx={{ fontSize: 32 }} />,
      color: 'success.main',
    },
    {
      label: 'Retorno Anual',
      value: formatPercentage(annualReturn),
      icon: <TrendingUp sx={{ fontSize: 32 }} />,
      color: 'info.main',
    },
    {
      label: 'Duración',
      value: `${projectLife} años`,
      icon: <CalendarToday sx={{ fontSize: 32 }} />,
      color: 'warning.main',
    },
    {
      label: 'Inversores',
      value: totalInvestors.toString(),
      icon: <People sx={{ fontSize: 32 }} />,
      color: 'secondary.main',
    },
  ];

  return (
    <Grid container spacing={2}>
      {metrics.map((metric, index) => (
        <Grid size={{ xs: 6, sm: 4, md: 2.4 }} key={index}>
          <Card
            sx={{
              height: '100%',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box sx={{ color: metric.color }}>
                  {metric.icon}
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ fontSize: { xs: '0.7rem', sm: '0.75rem' } }}
                >
                  {metric.label}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  textAlign="center"
                  sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                >
                  {metric.value}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
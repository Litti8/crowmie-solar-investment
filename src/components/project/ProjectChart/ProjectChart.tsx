import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, useTheme } from '@mui/material';
import { formatCurrency } from '@utils/formatters';
import { useTranslation } from 'react-i18next';

interface ChartData {
  date: Date;
  dateLabel: string;
  amount: number;
  revenues: number;
  expenses: number;
  netIncome: number;
  monthIndex: number;
}

interface ProjectChartProps {
  data: ChartData[];
}

export const ProjectChart = ({ data }: ProjectChartProps) => {
  const theme = useTheme();
  const { t } = useTranslation();

  if (!data || data.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="text.secondary">
          {t('project.chart.noData')}
        </Typography>
      </Box>
    );
  }

  // Tomar solo los últimos 24 meses para mejor visualización
  const displayData = data.slice(-24).map(item => ({
    name: item.dateLabel,
    [t('project.chart.revenues')]: item.revenues,
    [t('project.chart.expenses')]: Math.abs(item.expenses),
    [t('project.chart.profit')]: item.amount,
  }));

  return (
    <Box sx={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={displayData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
          <XAxis
            dataKey="name"
            stroke={theme.palette.text.secondary}
            style={{ fontSize: 12 }}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={{ fontSize: 12 }}
            tickFormatter={(value) => `€${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 8,
            }}
            formatter={(value: number) => formatCurrency(value)}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={t('project.chart.revenues')}
            stroke={theme.palette.success.main}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey={t('project.chart.expenses')}
            stroke={theme.palette.error.main}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey={t('project.chart.profit')}
            stroke={theme.palette.primary.main}
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};
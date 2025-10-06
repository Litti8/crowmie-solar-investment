import { Box, Typography, Chip } from '@mui/material';
import { LocationOn, Power } from '@mui/icons-material';
import { getAssetUrl } from '@services/api/client';
import { PROJECT_STATUS_LABELS } from '@utils/constants';

interface ProjectHeaderProps {
  name: string;
  address: string;
  power: string;
  status: string;
  mainImage: string;
}

export const ProjectHeader = ({
  name,
  address,
  power,
  status,
  mainImage,
}: ProjectHeaderProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'production':
        return 'success';
      case 'construction':
        return 'warning';
      case 'open':
        return 'info';
      case 'closed':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      {/* Imagen principal */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 250, md: 400 },
          borderRadius: 2,
          overflow: 'hidden',
          mb: 3,
          position: 'relative',
        }}
      >
        <img
          src={getAssetUrl(mainImage)}
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Chip
          label={PROJECT_STATUS_LABELS[status as keyof typeof PROJECT_STATUS_LABELS] || status}
          color={getStatusColor(status)}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            fontWeight: 600,
          }}
        />
      </Box>

      {/* Título y detalles */}
      <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
        {name}
      </Typography>

      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOn color="action" />
          <Typography variant="h6" color="text.secondary">
            {address}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Power color="action" />
          <Typography variant="h6" color="text.secondary">
            {power}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
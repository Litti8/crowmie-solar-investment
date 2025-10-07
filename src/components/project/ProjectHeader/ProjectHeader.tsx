import { Box, Typography, Chip } from '@mui/material';
import { LocationOn, Power } from '@mui/icons-material';
import { getAssetUrl } from '@services/api/client';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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

  const getStatusLabel = (status: string) => {
    return t(`project.status.${status}`, status);
  };

    return (
    <Box>
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
          label={getStatusLabel(status)}
          color={getStatusColor(status)}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            fontWeight: 600,
          }}
        />
      </Box>

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
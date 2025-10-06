import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Box, Typography, useTheme } from '@mui/material';
import { Location } from '@/types/project';
import 'leaflet/dist/leaflet.css';

// Fix para iconos de Leaflet en Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface ProjectMapProps {
  locations: Location[];
  projectName: string;
}

export const ProjectMap = ({ locations, projectName }: ProjectMapProps) => {
  const theme = useTheme();

  if (!locations || locations.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography color="text.secondary">
          No hay ubicación disponible
        </Typography>
      </Box>
    );
  }

  // Usar la primera ubicación como centro
  const center = {
    lat: locations[0].longitude, // En el API están invertidos
    lng: locations[0].latitude,
  };

  return (
    <Box sx={{ height: 400, width: '100%', borderRadius: 2, overflow: 'hidden' }}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.longitude, location.latitude]}
            icon={defaultIcon}
          >
            <Popup>
              <Typography variant="body2" fontWeight={600}>
                {projectName}
              </Typography>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};
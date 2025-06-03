import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';

import Iconify from 'src/components/iconify';

const AMENITIES = [
  { icon: 'ic:round-wifi', label: 'Үнэгүй Wi-Fi' },
  { icon: 'ic:round-restaurant', label: 'Ресторан' },
  { icon: 'ic:round-local-parking', label: 'Зогсоол' },
  { icon: 'ic:round-fitness-center', label: 'Фитнес төв' },
  { icon: 'ic:round-spa', label: 'Спа төв' },
  { icon: 'ic:round-pool', label: 'Усан сан' },
  { icon: 'ic:round-room-service', label: 'Өрөөний үйлчилгээ' },
  { icon: 'ic:round-meeting-room', label: 'Хурлын өрөө' },
];

export default function HotelAmenities() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={3}
    >
      {AMENITIES.map((amenity) => (
        <Card key={amenity.label} sx={{ p: 2 }}>
          <ListItemText
            primary={amenity.label}
            secondary={
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 0.5 }}>
                <Iconify icon={amenity.icon} width={16} />
              </Stack>
            }
          />
        </Card>
      ))}
    </Box>
  );
}

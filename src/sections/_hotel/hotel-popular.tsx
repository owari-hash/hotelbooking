import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _hotels } from 'src/_mock/_hotel';
import Iconify from 'src/components/iconify';

import HotelCard from './list/hotel-card';

export default function HotelPopular() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          mb: 5,
        }}
      >
        <Typography variant="h3">Алдартай буудлууд</Typography>

        <Button size="small" color="inherit" endIcon={<Iconify icon="carbon:chevron-right" />}>
          Бүгдийг үзэх
        </Button>
      </Stack>

      <Box
        display="grid"
        gap={3}
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {_hotels.slice(0, 6).map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </Box>
    </Container>
  );
}

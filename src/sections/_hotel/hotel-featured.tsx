import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _hotelFeatured } from 'src/_mock/_hotel';
import CarouselCenterMode from 'src/sections/examples/carousel-view/carousel-center-mode';

export default function HotelFeatured() {
  return (
    <Container
      sx={{
        py: { xs: 5 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        Онцлох буудлууд
      </Typography>

      <CarouselCenterMode data={_hotelFeatured} />
    </Container>
  );
}

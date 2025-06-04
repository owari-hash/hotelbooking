'use client';

import { useScroll } from 'framer-motion';

import { Container } from '@mui/system';

import ScrollProgress from 'src/components/scroll-progress';

import HotelHero from '../hotel-hero';
import HotelList from '../list/hotel-list';
import HotelByLocation from '../hotel-by-location';
import HotelFilters from '../filters/hotel-filters';

// ----------------------------------------------------------------------

export default function HotelView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Container>
        <HotelFilters
          sx={{
            mt: 3,
            mb: { xs: 3, md: 7 },
          }}
        />

        {/* <TravelTourList tours={_tours} loading={loading.value} /> */}
      </Container>

      <HotelHero />

      <HotelList />

      <HotelByLocation />
    </>
  );
}

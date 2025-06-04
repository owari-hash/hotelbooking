'use client';

import { useEffect } from 'react';
import { useScroll } from 'framer-motion';

import { Container } from '@mui/system';

import { _hotels } from 'src/_mock/_hotels';
import { useBoolean } from 'src/hooks/use-boolean';
import ScrollProgress from 'src/components/scroll-progress';

import HotelHero from '../hotel-hero';
import HotelList from '../list/hotel-list';
import HotelByLocation from '../hotel-by-location';
import HotelFilters from '../filters/hotel-filters';

// ----------------------------------------------------------------------

export default function HotelView() {
  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);
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

        <HotelList hotels={_hotels} loading={loading.value} />
      </Container>

      <HotelHero />

      <HotelByLocation />
    </>
  );
}

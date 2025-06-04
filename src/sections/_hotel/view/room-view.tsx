'use client';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _socials } from 'src/_mock';
import { _hotels } from 'src/_mock/_hotels';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { SplashScreen } from 'src/components/loading-screen';

import ReviewHotel from '../../review/hotel/review-hotel';
import HotelListSimilar from '../list/hotel-list-similar';
import HotelDetailsHeader from '../details/hotel-details-header';
import HotelDetailsGallery from '../details/hotel-details-gallery';
import HotelTourDetailsSummary from '../details/hotel-details-summary';
import HotelDetailsReserveForm from '../details/hotel-details-reserve-form';

// ----------------------------------------------------------------------

const _mockHotel = _hotels[0];

export default function RoomView() {
  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <HotelDetailsGallery images={_mockHotel.gallery} />

        <Grid container columnSpacing={8} rowSpacing={5} direction="row-reverse">
          <Grid xs={12} md={5} lg={4}>
            <HotelDetailsReserveForm hotel={_mockHotel} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <HotelDetailsHeader hotel={_mockHotel} />

            <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

            <HotelTourDetailsSummary hotel={_mockHotel} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                Хуваалцах:
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {_socials.map((social) => (
                  <Button
                    key={social.value}
                    size="small"
                    variant="outlined"
                    startIcon={<Iconify icon={social.icon} />}
                    sx={{
                      m: 0.5,
                      flexShrink: 0,
                      color: social.color,
                      borderColor: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 10 }} />

      <ReviewHotel />

      <HotelListSimilar hotels={_hotels.slice(-4)} />
    </>
  );
}

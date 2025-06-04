import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { HEADER } from 'src/layouts/config-layout';

import CarouselAnimation from '../examples/carousel-view/carousel-animation';

// ----------------------------------------------------------------------

const HERO_SLIDES = [
  {
    id: '1',
    title: 'Зочид буудал',
    description: 'Тав тухтай орчин, өндөр зэрэглэлийн үйлчилгээ',
    coverUrl: '/assets/images/hotel/hero_1.jpg',
  },
  {
    id: '2',
    title: 'Амралтын газар',
    description: 'Байгалийн үзэсгэлэнт орчинд амарна',
    coverUrl: '/assets/images/hotel/hero_2.jpg',
  },
  {
    id: '3',
    title: 'Гэр буудал',
    description: 'Монгол үндэсний өв соёлыг мэдрэх боломж',
    coverUrl: '/assets/images/hotel/hero_3.jpg',
  },
  {
    id: '4',
    title: 'Гэр буудал',
    description: 'Монгол үндэсний өв соёлыг мэдрэх боломж',
    coverUrl: '/assets/images/hotel/hero_4.jpg',
  },
  {
    id: '5',
    title: 'Гэр буудал',
    description: 'Монгол үндэсний өв соёлыг мэдрэх боломж',
    coverUrl: '/assets/images/hotel/hero_5.jpg',
  },
];

export default function HomeHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        height: { md: `calc(100vh - ${HEADER.H_DESKTOP}px)` },
      }}
    >
      <Container sx={{ height: 1 }}>
        <Grid container spacing={3} sx={{ height: 1 }}>
          <Grid xs={12} md={5}>
            <Stack
              spacing={5}
              justifyContent="center"
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h1">
                Тавтай морил <br />
                <Box component="span" sx={{ color: 'primary.main' }}>
                  HTBooking
                </Box>
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Монголын хамгийн шилдэг зочид буудлын захиалгын систем. Та өөрт тохирох зочид
                буудал, амралтын газар, жуулчны баазуудаас сонголтоо хийн захиалга өгөх боломжтой.
              </Typography>

              <Button
                color="inherit"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="carbon:search" />}
                href={paths.hotel.root}
              >
                Захиалга хийх
              </Button>

              <Stack spacing={3}>
                <Stack direction="row" spacing={2.5}>
                  {['hotel', 'apartment', 'ger', 'resort'].map((icon) => (
                    <SvgColor
                      key={icon}
                      src={`/assets/icons/booking/ic_${icon}.svg`}
                      sx={{ width: 32, height: 32 }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} md={7}>
            <Card
              sx={{
                top: { xs: 100, md: 150 },
                height: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: 0,
              }}
            >
              <CardContent sx={{ px: 0 }}>
                <CarouselAnimation data={HERO_SLIDES} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

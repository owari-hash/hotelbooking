import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const VISIONS = [
  {
    name: 'Гоё зорилго 1',
    description: 'Таны амралтыг тав тухтай, мартагдашгүй болгоход бид бүрэн анхаарна.',
  },
  {
    name: 'Гоё зорилго 2',
    description: 'Орчин үеийн тохилог өрөө, найрсаг үйлчилгээ таныг угтана.',
  },
  {
    name: 'Гоё зорилго 3',
    description: 'Та амар тайван орчныг мэдэрч, жинхэнэ амралтыг эдэлнэ.',
  },
];

// ----------------------------------------------------------------------

export default function HotelAboutOurVision() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 466,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h2">Бидний зорилго</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Бидний зорилго нь таны аялах, амрах хамгийн сайхан дурсамжийг бүтээхэд туслах юм. Таны тав
          тух, сэтгэл ханамж бол бидний хамгийн том амжилт юм.
        </Typography>
      </Stack>

      <Grid
        container
        spacing={{ xs: 8, md: 3 }}
        justifyContent="space-between"
        alignItems={{ md: 'center' }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Image alt="vision" src="/assets/illustrations/illustration_vision.svg" />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Stack alignItems={{ md: 'flex-end' }} sx={{ position: 'relative' }}>
            {VISIONS.map((vision, index) => {
              const { name, description } = vision;

              const firstVision = index === 0;

              const secondVision = index === 1;

              const thirdVision = index === 2;

              return (
                <Card
                  key={name}
                  sx={{
                    p: 4,
                    mt: 4,
                    width: { md: 'calc(50% - 16px)' },
                    ...(firstVision && {
                      top: { md: 0 },
                      left: { md: 0 },
                      bottom: { md: 0 },
                      my: { md: 'auto' },
                      boxShadow: { md: 0 },
                      maxHeight: { md: 304 },
                      display: { md: 'flex' },
                      position: { md: 'absolute' },
                      flexDirection: { md: 'column' },
                      justifyContent: { md: 'center' },
                    }),
                    ...(secondVision && {
                      boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
                    }),
                    ...(thirdVision && {
                      boxShadow: { md: 0 },
                    }),
                  }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    sx={{ color: 'text.disabled', opacity: 0.24, mb: 3 }}
                  >
                    {`0${index + 1}`}
                  </Typography>

                  <Typography variant="h4" paragraph>
                    {name}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
                </Card>
              );
            })}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

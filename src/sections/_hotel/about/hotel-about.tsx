import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _mock } from 'src/_mock';
import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import { fShortenNumber } from 'src/utils/format-number';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index + 2));

const SUMMARY = [
  { name: 'Авсан захиалга', number: 1300 },
  { name: 'Дахин үйлчлүүлсэн тоо', number: 196 },
  { name: 'Веб сайт үзсэн тоо', number: 10679 },
  { name: 'Нийт буудлууд', number: 877 },
];

// ----------------------------------------------------------------------

export default function HotelAbout() {
  const smUp = useResponsive('up', 'sm');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 5,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 560,
          textAlign: 'center',
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h1">Бидний тухай</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Манай компани нь үйлчлүүлэгчдэдээ өндөр чанартай үйлчилгээ үзүүлэх, тэдний хүсэл
          шаардлагыг бүрэн хангахыг эрхэмлэдэг. Бид олон жилийн туршлагатай мэргэжлийн багтай
          ажиллаж, Монголын аялал жуулчлал, зочид буудлын салбарт тэргүүлэгч байж, орчин үеийн
          шийдлүүдийг санал болгож байна.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {(smUp ? IMAGES : IMAGES.slice(0, 1)).map((img, index) => (
          <Grid key={img} xs={12} sm={6} md={index === 0 ? 6 : 2}>
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2, width: 1 }} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          textAlign: 'center',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          pt: { xs: 5, md: 10 },
          pb: 10,
        }}
      >
        {SUMMARY.map((value) => (
          <Stack key={value.name} spacing={1}>
            <Typography variant="h2">
              <CountUp
                start={value.number / 5}
                end={value.number}
                formattingFn={(newValue: number) => fShortenNumber(newValue)}
              />

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                +
              </Typography>
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.name}
            </Typography>
          </Stack>
        ))}
      </Box>

      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6} lg={5}>
          <Box
            sx={{
              mb: 2,
              width: 24,
              height: 3,
              borderRadius: 3,
              bgcolor: 'primary.main',
              mx: { xs: 'auto', md: 0 },
            }}
          />
          <Typography variant="h3">Амралтаа Утгатай Болгож, Тайван Орчныг Мэдэр</Typography>
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            Амралтаа Утгатай Болгож, Тайван Орчныг Мэдэр
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Дэлхий даяар аялагчид ая тухтай, аюулгүй орчинг эрхэмлэдэг болсон. Манай зочид буудалд
            та амралт, ажлын аяллын аль алинд нь тохирсон тав тух, найрсаг үйлчилгээг мэдрэх болно.
            <br />
            <br />
            Дэлхий даяар аялагчид ая тухтай, аюулгүй орчинг эрхэмлэдэг болсон. Манай зочид буудалд
            та амралт, ажлын аяллын аль алинд нь тохирсон тав тух, найрсаг үйлчилгээг мэдрэх болно.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

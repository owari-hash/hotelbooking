import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { IBrandProps } from 'src/types/brand';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = {
  brands: IBrandProps[];
};

export default function HotelOurClients({ brands }: Props) {
  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 10, md: 15 },
      }}
    >
      <Box
        sx={{
          gap: 3,
          display: 'grid',
          textAlign: { xs: 'center', md: 'left' },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <Typography variant="h2">Хамтрагч байгууллагууд</Typography>

        <Stack spacing={2}>
          <Typography variant="h4" paragraph>
            Амралтаа Утгатай Болгож, Тайван Орчныг Мэдэр
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Дэлхий даяар аялагчид ая тухтай, аюулгүй орчинг эрхэмлэдэг болсон. Манай зочид буудалд
            та амралт, ажлын аяллын аль алинд нь тохирсон тав тух, найрсаг үйлчилгээг мэдрэх болно.
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          mt: { xs: 8, md: 15 },
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {brands.map((brand) => (
          <SvgColor
            key={brand.id}
            src={brand.image}
            sx={{
              width: 106,
              height: 32,
              color: 'text.secondary',
              mr: { xs: 'auto' },
              ml: { xs: 'auto', md: 'unset' },
            }}
          />
        ))}
      </Box>
    </Container>
  );
}

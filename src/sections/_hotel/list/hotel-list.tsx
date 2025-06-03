import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import HotelCard from './hotel-card';
import HotelFilters from './hotel-filters';

export default function HotelList() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const loading = useBoolean(true);

  return (
    <>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          pt: 5,
          pb: 10,
        }}
      >
        <Container>
          <CustomBreadcrumbs
            links={[{ name: 'Нүүр', href: '/' }, { name: 'Буудлын жагсаалт' }]}
            sx={{ mb: 3 }}
          />

          <Stack
            spacing={3}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h2">Буудлын жагсаалт</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Та өөрт тохирох зочид буудал, амралтын газар, жуулчны баазуудаас сонголтоо хийн
              захиалга өгөх боломжтой.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ mt: -8, mb: 15 }}>
        <Grid container spacing={3}>
          {/* Filters Section */}
          <Grid xs={12} md={3}>
            <HotelFilters />
          </Grid>

          {/* Hotel List Section */}
          <Grid xs={12} md={9}>
            <Stack spacing={3}>
              {/* Sort & View Options */}
              <Stack
                spacing={2.5}
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'flex-end', md: 'center' }}
                justifyContent="space-between"
              >
                {/* ...existing components for sorting and view options... */}
              </Stack>

              {/* Hotel Cards */}
              <Box
                display="grid"
                gap={3}
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                }}
              >
                {[...Array(9)].map((_, index) => (
                  <HotelCard key={index} loading={loading.value} />
                ))}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

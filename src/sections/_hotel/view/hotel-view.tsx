import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { useBoolean } from 'src/hooks/use-boolean';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import HotelList from '../list/hotel-list';
import HotelFilters from '../list/hotel-filters';
import HotelSearch from '../search/hotel-search';

export default function HotelView() {
  const theme = useTheme();
  const openFilters = useBoolean();

  return (
    <>
      <Box
        sx={{
          pt: 8,
          pb: 12,
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
        }}
      >
        <Container>
          <Stack spacing={3}>
            <CustomBreadcrumbs
              links={[{ name: 'Нүүр', href: '/' }, { name: 'Буудлын жагсаалт' }]}
              sx={{ color: 'common.white' }}
            />

            <Typography variant="h2" sx={{ color: 'common.white' }}>
              Буудлын жагсаалт
            </Typography>

            <HotelSearch />
          </Stack>
        </Container>
      </Box>

      <Container
        sx={{
          mt: -8,
          mb: 15,
        }}
      >
        <Stack direction="row" spacing={3}>
          <HotelFilters
            openFilter={openFilters.value}
            onOpenFilter={openFilters.onTrue}
            onCloseFilter={openFilters.onFalse}
          />

          <Box sx={{ flexGrow: 1 }}>
            <HotelList />
          </Box>
        </Stack>
      </Container>
    </>
  );
}

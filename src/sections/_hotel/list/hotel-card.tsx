import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';

type Props = {
  loading?: boolean;
};

export default function HotelCard({ loading }: Props) {
  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        <Image
          alt="hotel"
          src="/assets/images/hotel/hero_1.jpg"
          ratio="1/1"
          sx={{ borderRadius: 1.5 }}
        />

        <Stack
          spacing={0.5}
          sx={{
            p: 2,
            left: 0,
            bottom: 0,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
          }}
        >
          <TextMaxLine variant="h6">Hotel Name</TextMaxLine>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon="carbon:location" width={16} />
            <Typography variant="body2">Location</Typography>
          </Stack>
        </Stack>
      </Box>

      <Stack spacing={0.5} sx={{ p: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Rating value={4.5} precision={0.5} readOnly size="small" />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            (4.5)
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="h5">₮120,000</Typography>
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            /шөнө
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

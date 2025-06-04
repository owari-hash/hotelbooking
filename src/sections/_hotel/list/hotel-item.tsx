import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { IHotelProps } from 'src/types/hotel';
import { RouterLink } from 'src/routes/components';
import { fCurrency } from 'src/utils/format-number';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  hotel: IHotelProps;
};

export default function HotelItem({ hotel }: Props) {
  const { slug, location, price, priceSale, favorited, duration, ratingNumber, coverUrl } = hotel;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 1.5,
          pl: 2,
          pr: 1.5,
          top: 0,
          width: 1,
          zIndex: 9,
          position: 'absolute',
        }}
      >
        <Stack
          spacing={0.5}
          direction="row"
          sx={{
            px: 1,
            borderRadius: 0.75,
            typography: 'subtitle2',
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          }}
        >
          {priceSale > 0 && (
            <Box
              sx={{
                color: 'grey.500',
                textDecoration: 'line-through',
                mr: 0.5,
              }}
            >
              {fCurrency(priceSale)}
            </Box>
          )}
          {fCurrency(price)}
        </Stack>

        <Checkbox
          color="error"
          checked={favorite}
          onChange={handleChangeFavorite}
          icon={<Iconify icon="carbon:favorite" />}
          checkedIcon={<Iconify icon="carbon:favorite-filled" />}
          sx={{ color: 'common.white' }}
        />
      </Stack>

      <Image alt={slug} src={coverUrl} ratio="1/1" />

      <Stack spacing={0.5} sx={{ p: 2.5, flexGrow: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {location}
        </Typography>

        <Link component={RouterLink} href={paths.hotel.room} color="inherit">
          <TextMaxLine variant="h6" persistent>
            {slug}
          </TextMaxLine>
        </Link>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          p: 2.5,
          pt: 2,
        }}
      >
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Iconify icon="carbon:star-filled" sx={{ color: 'warning.main' }} />
          <Box sx={{ typography: 'h6' }}>
            {Number.isInteger(ratingNumber) ? `${ratingNumber}.0` : ratingNumber}
          </Box>
        </Stack>

        <Button
          component={RouterLink}
          href={paths.hotel.room}
          variant="contained"
          color="inherit"
          size="medium"
          endIcon={<Iconify icon="carbon:chevron-right" />}
          sx={{
            borderRadius: 1,
            typography: 'subtitle2',
            fontWeight: 'light',
            boxShadow: (theme) => theme.customShadows.z8,
            '&:hover': {
              bgcolor: 'grey.300',
            },
          }}
        >
          Өрөө үзэх
        </Button>
      </Stack>
    </Card>
  );
}

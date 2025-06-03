import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { fCurrency } from 'src/utils/format-number';
import TextMaxLine from 'src/components/text-max-line';

type Props = {
  hotel: {
    slug: string;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    location: string;
    coverUrl: string;
    favorite?: boolean;
  };
  loading?: boolean;
  listView?: boolean;
};

export default function HotelCard({ hotel, loading, listView }: Props) {
  const [favorite, setFavorite] = useState(hotel?.favorite || false);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <Card
      sx={{
        display: listView ? 'flex' : 'block',
        height: '100%', // Fill the container height
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: listView ? 320 : '100%',
          height: listView ? '100%' : 340, // Taller image in grid view
          flexShrink: 0,
        }}
      >
        <Image
          alt={hotel?.name}
          src={hotel?.coverUrl}
          ratio={listView ? '1/1' : '16/9'}
          sx={{
            height: '100%',
            borderRadius: 2,
          }}
        />

        <Stack
          spacing={0.5}
          direction="row"
          alignItems="center"
          sx={{
            p: 2,
            width: 1,
            top: 0,
            right: 0,
            position: 'absolute',
            color: 'common.white',
          }}
        >
          <Checkbox
            color="error"
            checked={favorite}
            onChange={handleChangeFavorite}
            icon={<Iconify icon="carbon:favorite" />}
            checkedIcon={<Iconify icon="carbon:favorite-filled" />}
            sx={{ color: 'common.white' }}
          />
        </Stack>

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
          <TextMaxLine variant="h6">{hotel?.name || 'Hotel Name'}</TextMaxLine>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Iconify icon="carbon:location" width={16} />
            <Typography variant="body2">{hotel?.location || 'Location'}</Typography>
          </Stack>
        </Stack>
      </Box>

      <Stack
        spacing={2} // Increased spacing
        sx={{
          p: 3, // Increased padding
          flexGrow: 1,
          ...(listView && {
            pl: 3,
          }),
        }}
      >
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Rating value={hotel?.rating || 4.5} precision={0.5} readOnly size="small" />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            ({hotel?.reviews || '4.5'})
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', my: 1 }} />

        <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
          <Stack>
            <Typography variant="h5">{fCurrency(hotel?.price || 120000)}</Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              /шөнө
            </Typography>
          </Stack>

          <Button
            component={RouterLink}
            href={`${paths.hotel.root}/${hotel?.slug || ''}`}
            color="primary"
            size="small"
            variant="contained"
          >
            Захиалах
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}

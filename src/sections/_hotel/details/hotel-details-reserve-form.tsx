import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { IHotelProps } from 'src/types/hotel';
import { fCurrency } from 'src/utils/format-number';

import FilterTime from '../filters/filter-time';
import FilterGuests from '../filters/filter-guests';

// ----------------------------------------------------------------------

type Props = {
  hotel: IHotelProps;
};

export default function HotelDetailsReserveForm({ hotel }: Props) {
  const router = useRouter();

  const [departureDay, setDepartureDay] = useState<Date | null>(null);

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });

  const { price, priceSale } = hotel;

  const handleChangeDepartureDay = useCallback((newValue: Date | null) => {
    setDepartureDay(newValue);
  }, []);

  const handleIncrementGuests = useCallback(
    (guest?: string) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children + 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults + 1 });
      }
    },
    [guests]
  );

  const handleDecreaseGuests = useCallback(
    (guest?: string) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children - 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults - 1 });
      }
    },
    [guests]
  );

  const handleClickReserve = useCallback(() => {
    router.push(paths.travel.checkout);
  }, [router]);

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" sx={{ typography: 'h4' }}>
          {priceSale > 0 && (
            <Box sx={{ color: 'grey.500', textDecoration: 'line-through', mr: 1 }}>
              {fCurrency(priceSale)}
            </Box>
          )}

          {fCurrency(price)}
          <Typography variant="body2" component="span" sx={{ color: 'text.disabled', ml: 1 }}>
            /Өрөө
          </Typography>
        </Stack>

        <Stack spacing={1.5}>
          <Box
            sx={{
              py: 0.5,
              px: 1.5,
              borderRadius: 1,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
            }}
          >
            <FilterTime
              departureDay={departureDay}
              onChangeDepartureDay={handleChangeDepartureDay}
            />
          </Box>

          <Box
            sx={{
              py: 0.5,
              px: 1.5,
              borderRadius: 1,
              bgcolor: (theme) => alpha(theme.palette.grey[500], 0.08),
            }}
          >
            <FilterGuests
              guests={guests}
              onDecreaseGuests={handleDecreaseGuests}
              onIncrementGuests={handleIncrementGuests}
            />
          </Box>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Үйлчилгээний зардал
          </Typography>
          <Typography variant="body2">{fCurrency(priceSale) || '-'}</Typography>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            Хямдралтай үнэ
          </Typography>
          <Typography variant="body2"> - </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={1} direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">Нийт</Typography>
          <Typography variant="h5">{fCurrency(priceSale)}</Typography>
        </Stack>

        <Button size="large" variant="contained" color="inherit" onClick={handleClickReserve}>
          Захиалах
        </Button>
      </Stack>
    </Card>
  );
}

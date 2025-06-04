import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import Iconify from 'src/components/iconify';

import FilterTime from './filter-time';
import FilterGuests from './filter-guests';
import FilterLocation from './filter-location';

// ----------------------------------------------------------------------

export default function HotelFilters({ sx, ...other }: StackProps) {
  const theme = useTheme();

  const [departureDay, setDepartureDay] = useState<Date | null>(null);

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });

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

  return (
    <Box
      sx={{
        position: { xs: 'static', md: 'sticky' },
        top: { xs: 'auto', md: 10 },
        zIndex: { xs: 1, md: 9 },
        mt: 2,
        px: 2,
        width: '100%',
      }}
    >
      <Stack
        spacing={2}
        alignItems={{ md: 'center' }}
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: { xs: 'none', md: theme.customShadows.z8 }, // Remove shadow on mobile
          maxWidth: 960,
          mx: 'auto',
          ...sx,
        }}
        {...other}
      >
        <FilterLocation />

        <Divider flexItem orientation="vertical" />

        <FilterTime departureDay={departureDay} onChangeDepartureDay={handleChangeDepartureDay} />

        <Divider flexItem orientation="vertical" />

        <FilterGuests
          guests={guests}
          onDecreaseGuests={handleDecreaseGuests}
          onIncrementGuests={handleIncrementGuests}
        />

        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{
            px: 0,
            flexShrink: 0,
            minWidth: { xs: 1, md: 46 },
            height: 46,
          }}
        >
          <Iconify icon="carbon:search" />
        </Button>
      </Stack>
    </Box>
  );
}

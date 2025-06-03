import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { useRouter } from 'src/routes/hooks';

export default function HotelSearch() {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const handleSearch = () => {
    router.push(paths.hotel.list);
  };

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <DatePicker
            label="Ирэх өдөр"
            value={checkIn}
            onChange={(newValue) => setCheckIn(newValue)}
          />

          <DatePicker
            label="Гарах өдөр"
            value={checkOut}
            onChange={(newValue) => setCheckOut(newValue)}
          />
        </Stack>

        <Button
          size="large"
          color="primary"
          variant="contained"
          startIcon={<Iconify icon="carbon:search" />}
          onClick={handleSearch}
        >
          Хайх
        </Button>
      </Stack>
    </Card>
  );
}

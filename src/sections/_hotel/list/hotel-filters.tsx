import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useResponsive } from 'src/hooks/use-responsive';

type Props = {
  openFilter?: boolean;
  onOpenFilter?: VoidFunction;
  onCloseFilter?: VoidFunction;
};

const RATINGS = ['5', '4', '3', '2', '1'];

const HOTEL_TYPES = [
  { label: 'Зочид буудал', value: 'hotel' },
  { label: 'Амралтын газар', value: 'resort' },
  { label: 'Гэр буудал', value: 'ger' },
  { label: 'Апартмент', value: 'apartment' },
];

const AMENITIES = [
  { label: 'Wifi', value: 'wifi' },
  { label: 'Зогсоол', value: 'parking' },
  { label: 'Фитнес', value: 'fitness' },
  { label: 'Спа', value: 'spa' },
  { label: 'Рестoран', value: 'restaurant' },
  { label: 'Усан сан', value: 'pool' },
];

export default function HotelFilters({ openFilter, onOpenFilter, onCloseFilter }: Props) {
  const mdUp = useResponsive('up', 'md');
  const [rating, setRating] = useState<string | null>(null);

  const renderContent = (
    <Scrollbar
      sx={{
        p: 3,
        pt: 5,
        height: 1,
      }}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h6">Үнэ</Typography>
          <Stack spacing={1}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="₮50,000 хүртэл" />
            <FormControlLabel control={<Checkbox />} label="₮50,000 - ₮100,000" />
            <FormControlLabel control={<Checkbox />} label="₮100,000 - ₮150,000" />
            <FormControlLabel control={<Checkbox />} label="₮150,000 дээш" />
          </Stack>
        </Stack>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="h6">Үнэлгээ</Typography>
          <Stack spacing={2}>
            {RATINGS.map((option) => (
              <Stack key={option} direction="row" alignItems="center">
                <Rating size="small" value={Number(option)} readOnly sx={{ mr: 1 }} />
                <Typography variant="body2">
                  {option} од {rating === option && 'дээш'}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="h6">Төрөл</Typography>
          <FormGroup>
            {HOTEL_TYPES.map((type) => (
              <FormControlLabel key={type.value} control={<Checkbox />} label={type.label} />
            ))}
          </FormGroup>
        </Stack>

        <Divider />

        <Stack spacing={1}>
          <Typography variant="h6">Нэмэлт үйлчилгээ</Typography>
          <FormGroup>
            {AMENITIES.map((item) => (
              <FormControlLabel key={item.value} control={<Checkbox />} label={item.label} />
            ))}
          </FormGroup>
        </Stack>
      </Stack>
    </Scrollbar>
  );

  if (mdUp) {
    return (
      <Box
        sx={{
          width: 280,
          flexShrink: 0,
        }}
      >
        {renderContent}
      </Box>
    );
  }

  return (
    <Drawer
      anchor="right"
      open={openFilter}
      onClose={onCloseFilter}
      PaperProps={{
        sx: {
          width: 280,
        },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pl: 2, pr: 1, py: 2 }}
      >
        <Typography variant="subtitle1">Шүүлтүүр</Typography>

        <IconButton onClick={onCloseFilter}>
          <Iconify icon="mingcute:close-line" />
        </IconButton>
      </Stack>

      <Divider />

      {renderContent}

      <Box sx={{ p: 3 }}>
        <Button
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="outlined"
          onClick={onCloseFilter}
          startIcon={<Iconify icon="carbon:trash-can" />}
        >
          Цэвэрлэх
        </Button>
      </Box>
    </Drawer>
  );
}

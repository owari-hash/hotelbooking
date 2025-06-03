import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
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

const RATINGS = ['up_4_stars', 'up_3_stars', 'up_2_stars'];

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

const getRatingValue = (rating: string): number => {
  switch (rating) {
    case 'up_4_stars':
      return 4;
    case 'up_3_stars':
      return 3;
    case 'up_2_stars':
      return 2;
    default:
      return 0;
  }
};

export default function HotelFilters({ openFilter, onOpenFilter, onCloseFilter }: Props) {
  const mdUp = useResponsive('up', 'md');
  const [filterRating, setFilterRating] = useState<string | null>(null);

  const handleChangeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterRating(event.target.value);
  };

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
          <RadioGroup value={filterRating} onChange={handleChangeRating}>
            <Stack spacing={2} alignItems="flex-start">
              {RATINGS.map((rating) => (
                <FormControlLabel
                  key={rating}
                  value={rating}
                  control={<Radio sx={{ display: 'none' }} />}
                  label={
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{
                        ...(filterRating === rating && {
                          fontWeight: 'fontWeightSemiBold',
                        }),
                      }}
                    >
                      <Rating
                        size="small"
                        value={getRatingValue(rating)}
                        readOnly
                        sx={{
                          mr: 1,
                          ...(filterRating === rating && {
                            opacity: 0.48,
                          }),
                        }}
                      />
                      <Typography variant="body2">& Дээш</Typography>
                    </Stack>
                  }
                  sx={{
                    m: 0,
                    '&:hover': { opacity: 0.48 },
                  }}
                />
              ))}
            </Stack>
          </RadioGroup>
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

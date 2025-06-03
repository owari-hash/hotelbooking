import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import HotelCard from './hotel-card';

const VIEW_OPTIONS = [
  { value: 'list', label: 'Жагсаалт', icon: 'carbon:list' },
  { value: 'grid', label: 'Торон', icon: 'carbon:grid' },
];

const SORT_OPTIONS = [
  { value: 'newest', label: 'Шинэ' },
  { value: 'oldest', label: 'Хуучин' },
  { value: 'popular', label: 'Алдартай' },
  { value: 'price_high', label: 'Үнэ: Их - Бага' },
  { value: 'price_low', label: 'Үнэ: Бага - Их' },
];

const MOCK_HOTELS = [
  {
    id: '1',
    slug: 'shangri-la-ulaanbaatar',
    name: 'Shangri-La Улаанбаатар',
    description: '5 одтой тансаг зэрэглэлийн зочид буудал',
    price: 550000,
    rating: 5,
    reviews: 482,
    location: 'Сүхбаатар дүүрэг, Олимпийн гудамж',
    coverUrl: '/assets/images/hotel/hero_1.jpg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'restaurant', 'fitness'],
    favorite: false,
  },
  {
    id: '2',
    slug: 'kempinski-ulaanbaatar',
    name: 'Кемпински Хотел',
    description: 'Олон улсын сүлжээ зочид буудал',
    price: 480000,
    rating: 4.8,
    reviews: 356,
    location: 'Сүхбаатар дүүрэг, Сүхбаатарын талбай',
    coverUrl: '/assets/images/hotel/hero_2.jpg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'restaurant'],
    favorite: false,
  },
  {
    id: '3',
    slug: 'terelj-hotel',
    name: 'Тэрэлж Үндэсний Амралт',
    description: 'Байгалийн үзэсгэлэнт газар дахь амралтын газар',
    price: 350000,
    rating: 4.6,
    reviews: 245,
    location: 'Төв аймаг, Горхи-Тэрэлж',
    coverUrl: '/assets/images/hotel/hero_3.jpg',
    amenities: ['wifi', 'parking', 'restaurant'],
    favorite: false,
  },
  {
    id: '4',
    slug: 'secret-history-camp',
    name: 'Нууц Товчоо Монгол Гэр',
    description: 'Уламжлалт монгол гэр буудал',
    price: 280000,
    rating: 4.7,
    reviews: 189,
    location: 'Төв аймаг, Сэргэлэн сум',
    coverUrl: '/assets/images/hotel/hero_4.jpg',
    amenities: ['wifi', 'parking', 'restaurant'],
    favorite: false,
  },
  {
    id: '5',
    slug: 'khuvsgul-lake-resort',
    name: 'Хөвсгөл Нуур Резорт',
    description: 'Хөвсгөл нуурын эрэг дээрх амралтын газар',
    price: 420000,
    rating: 4.8,
    reviews: 203,
    location: 'Хөвсгөл аймаг, Хатгал тосгон',
    coverUrl: '/assets/images/hotel/hero_5.jpg',
    amenities: ['wifi', 'parking', 'restaurant', 'spa'],
    favorite: false,
  },
  {
    id: '6',
    slug: 'gobi-nomad-lodge',
    name: 'Говийн Нүүдэлчин Лодж',
    description: 'Говь цөлийн дундах тансаг амралтын газар',
    price: 380000,
    rating: 4.5,
    reviews: 167,
    location: 'Өмнөговь аймаг, Баянзаг',
    coverUrl: '/assets/images/hotel/hero_6.jpg',
    amenities: ['wifi', 'parking', 'restaurant'],
    favorite: false,
  },
  {
    id: '7',
    slug: 'ramada-ulaanbaatar',
    name: 'Ramada Улаанбаатар',
    description: 'Бизнес зочид буудал',
    price: 320000,
    rating: 4.3,
    reviews: 289,
    location: 'Сүхбаатар дүүрэг, Энх тайваны өргөн чөлөө',
    coverUrl: '/assets/images/hotel/hero_7.jpg',
    amenities: ['wifi', 'parking', 'restaurant', 'fitness'],
    favorite: false,
  },
  {
    id: '8',
    slug: 'karakorum-hotel',
    name: 'Хархорум Палас',
    description: 'Түүхэн газар дахь орчин үеийн зочид буудал',
    price: 260000,
    rating: 4.2,
    reviews: 134,
    location: 'Өвөрхангай аймаг, Хархорин',
    coverUrl: '/assets/images/hotel/hero_8.jpg',
    amenities: ['wifi', 'parking', 'restaurant'],
    favorite: false,
  },
  {
    id: '9',
    slug: 'altai-resort',
    name: 'Алтай Резорт',
    description: 'Баруун Монголын байгалийн үзэсгэлэнт газар',
    price: 290000,
    rating: 4.4,
    reviews: 156,
    location: 'Баян-Өлгий аймаг, Алтай сум',
    coverUrl: '/assets/images/hotel/hero_9.jpg',
    amenities: ['wifi', 'parking', 'restaurant'],
    favorite: false,
  },
];

export default function HotelList() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');
  const loading = useBoolean(true);
  const [view, setView] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  return (
    <>
      {/* Hotel List Section */}
      <Grid xs={12} md={9}>
        <Stack spacing={3}>
          {/* Sort & View Options */}
          <Stack
            spacing={2}
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
            sx={{ mb: 3 }}
          >
            <Typography variant="h4">Буудлын жагсаалт ({MOCK_HOTELS.length})</Typography>

            <Stack direction="row" spacing={1} flexShrink={0}>
              <TextField
                select
                size="small"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                sx={{ minWidth: 180 }}
              >
                {SORT_OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Box sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                <Tabs
                  value={view}
                  onChange={(e, newValue) => setView(newValue)}
                  sx={{
                    '& .MuiTabs-flexContainer': {
                      pr: 0,
                    },
                  }}
                >
                  {VIEW_OPTIONS.map((tab) => (
                    <Tab
                      key={tab.value}
                      value={tab.value}
                      icon={<Iconify icon={tab.icon} />}
                      sx={{
                        '& .MuiTab-labelIcon': {
                          margin: 0,
                        },
                      }}
                    />
                  ))}
                </Tabs>
              </Box>
            </Stack>
          </Stack>

          {/* Hotel Cards */}
          <Box
            display="grid"
            gap={4} // Increased gap between cards
            gridTemplateColumns={{
              xs: 'repeat(1, 1fr)',
              sm: view === 'list' ? 'repeat(1, 1fr)' : 'repeat(1, 1fr)', // Changed to 1 column on tablet
              md: view === 'list' ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)', // Changed to 2 columns on desktop
            }}
            sx={{
              '& > *': { // Target all direct children (cards)
                height: view === 'list' ? 'auto' : 520, // Set fixed height for grid view
              },
            }}
          >
            {MOCK_HOTELS.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                loading={loading.value}
                listView={view === 'list'}
              />
            ))}
          </Box>

          {MOCK_HOTELS.length > 9 && (
            <Stack alignItems="center" sx={{ mt: 8 }}>
              <Button
                size="large"
                color="inherit"
                variant="outlined"
                startIcon={<Iconify icon="carbon:rotate" />}
              >
                Цааш үзэх
              </Button>
            </Stack>
          )}
        </Stack>
      </Grid>
    </>
  );
}

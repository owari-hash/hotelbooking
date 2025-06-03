import { useState } from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import HotelAmenities from './hotel-amenities';
import HotelBookingForm from './hotel-booking-form';

export default function HotelDetails() {
  const [currentTab, setCurrentTab] = useState('description');

  const TABS = [
    {
      value: 'description',
      label: 'Дэлгэрэнгүй',
      icon: <Iconify icon="solar:document-text-bold" />,
    },
    {
      value: 'amenities',
      label: 'Үйлчилгээ',
      icon: <Iconify icon="solar:home-smile-bold" />,
    },
    {
      value: 'reviews',
      label: 'Сэтгэгдэл',
      icon: <Iconify icon="solar:chat-round-dots-bold" />,
    },
  ];

  return (
    <Container sx={{ pt: 3, pb: 10 }}>
      <CustomBreadcrumbs
        links={[
          { name: 'Нүүр', href: '/' },
          { name: 'Буудлууд', href: '/hotel' },
          { name: 'Буудлын дэлгэрэнгүй' },
        ]}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Box sx={{ position: 'relative' }}>
            <Image
              alt="hotel cover"
              src="/assets/images/hotel/hero_1.jpg"
              ratio="16/9"
              sx={{ borderRadius: 2 }}
            />
          </Box>

          <Tabs
            value={currentTab}
            onChange={(event, newValue) => setCurrentTab(newValue)}
            sx={{ mb: 3, mt: 4 }}
          >
            {TABS.map((tab) => (
              <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
            ))}
          </Tabs>

          {currentTab === 'description' && (
            <Box>
              <Typography variant="h6" sx={{ mb: 3 }}>
                Тухай
              </Typography>
              {/* Description content */}
            </Box>
          )}

          {currentTab === 'amenities' && <HotelAmenities />}

          {currentTab === 'reviews' && <Box>{/* Reviews content */}</Box>}
        </Grid>

        <Grid xs={12} md={4}>
          <HotelBookingForm />
        </Grid>
      </Grid>
    </Container>
  );
}

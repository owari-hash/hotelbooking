import { useState } from 'react';

import {
  Tab,
  Box,
  Tabs,
  Stack,
  Button,
  MenuItem,
  Container,
  TextField,
  Typography,
} from '@mui/material';

import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { _hotels, SortValue, ViewValue, SORT_OPTIONS, VIEW_OPTIONS } from 'src/_mock/_hotel';

import HotelCard from './hotel-card';

export default function HotelList() {
  const loading = useBoolean(true);
  const [view, setView] = useState<ViewValue>('grid');
  const [sortBy, setSortBy] = useState<SortValue>('popular');

  return (
    <Container
      maxWidth="lg"
      sx={{
        pb: 5, // Changed from py to pb (padding-bottom only)
        px: { xs: 2, md: 3 },
      }}
    >
      <Stack spacing={3}>
        {/* Header Controls */}
        <Stack
          spacing={2}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          justifyContent="space-between"
        >
          <Typography variant="h4">Буудлын жагсаалт </Typography>

          <Stack direction="row" spacing={1} flexShrink={0}>
            <TextField
              select
              size="small"
              value={sortBy}
              // onChange={(e) => setSortBy(e.target.value)}
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
                  '& .MuiTabs-flexContainer': { pr: 0 },
                }}
              >
                {VIEW_OPTIONS.map((tab) => (
                  <Tab
                    key={tab.value}
                    value={tab.value}
                    icon={<Iconify icon={tab.icon} />}
                    sx={{
                      '& .MuiTab-labelIcon': { margin: 0 },
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
          gap={3}
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: view === 'list' ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)',
            md: view === 'list' ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)',
          }}
          sx={{
            '& > *': {
              height: view === 'list' ? 'auto' : 400,
            },
          }}
        >
          {_hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              loading={loading.value}
              listView={view === 'list'}
            />
          ))}
        </Box>

        {/* Load More Button */}
        {_hotels.length > 9 && (
          <Stack alignItems="center" sx={{ mt: 5 }}>
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
    </Container>
  );
}

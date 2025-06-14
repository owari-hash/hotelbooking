import { useState, useCallback } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { SelectChangeEvent } from '@mui/material/Select';

import { _tours, _reviews } from 'src/_mock';
import { useBoolean } from 'src/hooks/use-boolean';

import ReviewNewForm from '../common/review-new-form';

import ReviewList from './review-list';
import ReviewToolbar from './review-toolbar';
import ReviewTourGuideInfo from './review-tour-guide-info';

// ----------------------------------------------------------------------

const _mockTour = _tours[0];

export default function ReviewHotel() {
  const [sort, setSort] = useState('latest');

  const formOpen = useBoolean();

  const handleChangeSort = useCallback((event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  }, []);

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <Grid container spacing={8}>
          <Grid xs={12} md={5} lg={4}>
            <ReviewTourGuideInfo tourGuide={_mockTour.tourGuide} />
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <ReviewToolbar
              sort={sort}
              totalReviews={_reviews.length}
              onChangeSort={handleChangeSort}
              onOpenReview={formOpen.onToggle}
            />

            <ReviewList reviews={_reviews} />
          </Grid>
        </Grid>
      </Container>

      <ReviewNewForm open={formOpen.value} onClose={formOpen.onFalse} />
    </>
  );
}

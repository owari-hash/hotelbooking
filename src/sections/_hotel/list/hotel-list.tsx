import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { IHotelProps } from 'src/types/hotel';

import HotelItem from './hotel-item';
import HotelItemSkeleton from './hotel-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  hotels: IHotelProps[];
  loading?: boolean;
};

export default function HotelList({ hotels, loading }: Props) {
  return (
    <>
      <Box
        sx={{
          columnGap: 3,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {(loading ? [...Array(12)] : hotels).map((hotel, index) =>
          hotel ? <HotelItem key={hotel.id} hotel={hotel} /> : <HotelItemSkeleton key={index} />
        )}
      </Box>

      <Pagination
        count={10}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

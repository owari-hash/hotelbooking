import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { selectClasses, SelectChangeEvent } from '@mui/material/Select';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Шинэ' },
  { value: 'oldest', label: 'Хуучин' },
  { value: 'popular', label: 'Эрэлттэй' },
];

// ----------------------------------------------------------------------

type Props = {
  sort: string;
  totalReviews: number;
  onOpenReview: VoidFunction;
  onChangeSort: (event: SelectChangeEvent) => void;
};

export default function ReviewToolbar({ sort, totalReviews, onOpenReview, onChangeSort }: Props) {
  return (
    <Stack
      spacing={5}
      alignItems={{ md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ mb: 5 }}
    >
      <Typography variant="h4" sx={{ width: 1 }}>
        {totalReviews} Үнэлгээ
      </Typography>

      <Stack direction="row" spacing={2} flexShrink={0} alignItems="center">
        <FormControl
          hiddenLabel
          sx={{
            [`& .${selectClasses.select}`]: {
              py: 1.75,
            },
          }}
        >
          <Select value={sort} onChange={onChangeSort}>
            {SORT_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button size="large" variant="contained" color="inherit" onClick={onOpenReview}>
          Сэтгэгдэл үлдээх
        </Button>
      </Stack>
    </Stack>
  );
}

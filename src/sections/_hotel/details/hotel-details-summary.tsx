import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { IHotelProps } from 'src/types/hotel';
import { fDate } from 'src/utils/format-time';
import { HOTEL_SERVICE_OPTIONS } from 'src/_mock';
import Iconify, { IconifyProps } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  hotel: IHotelProps;
};

export default function HotelDetailsSummary({ hotel }: Props) {
  const { program, services, location, duration, languages, description, available } = hotel;

  return (
    <Stack spacing={5}>
      <Stack spacing={3}>
        <Typography variant="h5">Зочид буудлын товч мэдээлэл</Typography>
        <Box
          sx={{
            rowGap: 2.5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          <OverviewItem
            icon="carbon:calendar"
            label="Available"
            text={`${fDate(available.start, 'dd/MM/yyyy')} - ${fDate(available.end, 'dd/MM/yyyy')}`}
          />
          {/* <OverviewItem icon="carbon:user" label="Contact name" text={tourGuide?.name} /> */}
          <OverviewItem icon="carbon:location" label="Location" text={location} />
          {/* <OverviewItem
            icon="carbon:mobile"
            label="Contact phone"
            text={tourGuide?.phoneNumber || ''}
          /> */}
          <OverviewItem icon="carbon:time" label="Durations" text={duration} />
          <OverviewItem icon="carbon:translate" label="Languages" text={languages.join(', ')} />
        </Box>
      </Stack>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Stack spacing={2}>
        <Typography variant="h5">Зочид буудлын тайлбар</Typography>
        <Typography>{description}</Typography>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">Hotel Highlights</Typography>

        {/* <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul> */}
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h6"> Үйлчилгээ</Typography>

        <Box
          rowGap={2}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          {HOTEL_SERVICE_OPTIONS.map((service) => (
            <Stack
              key={service.label}
              spacing={1}
              direction="row"
              alignItems="center"
              sx={{
                ...(services.includes(service.label) && {
                  color: 'text.disabled',
                }),
              }}
            >
              <Iconify
                icon="carbon:checkmark"
                sx={{
                  color: 'primary.main',
                  ...(services.includes(service.label) && {
                    color: 'text.disabled',
                  }),
                }}
              />
              {service.label}
            </Stack>
          ))}
        </Box>
      </Stack>

      <Stack spacing={2}>
        <Typography variant="h5">Хөтөлбөр</Typography>
        {program.map((content) => (
          <HighlightItem key={content.label} label={content.label} text={content.text} />
        ))}
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type OverviewItemProp = {
  text: string;
  label: string;
  icon: IconifyProps;
};

function OverviewItem({ icon, label, text = '-' }: OverviewItemProp) {
  return (
    <Stack spacing={1.5} direction="row" alignItems="flex-start">
      <Iconify icon={icon} width={24} />
      <Stack spacing={0.5}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {label}
        </Typography>
        <Typography>{text}</Typography>
      </Stack>
    </Stack>
  );
}

// ----------------------------------------------------------------------

type HighlightItemProps = {
  label: string;
  text: string;
};

function HighlightItem({ label, text }: HighlightItemProps) {
  return (
    <Stack spacing={1}>
      <Typography
        variant="subtitle1"
        sx={{ color: 'primary.main', display: 'flex', alignItems: 'center' }}
      >
        <Box
          component="span"
          sx={{
            width: 12,
            height: 2,
            borderRadius: 1,
            bgcolor: 'currentColor',
            mr: 1.5,
          }}
        />
        {label}
      </Typography>
      <Typography>{text}</Typography>
    </Stack>
  );
}

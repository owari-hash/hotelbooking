import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Card, Stack, Button, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import FormProvider, { RHFSelect } from 'src/components/hook-form';
import RHFDatePicker from 'src/components/hook-form/rhf-date-picker';

type FormValuesProps = {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  rooms: number;
};

const defaultValues: FormValuesProps = {
  checkIn: new Date(),
  checkOut: new Date(),
  guests: 1,
  rooms: 1,
};

const BookingSchema = Yup.object().shape({
  checkIn: Yup.date().required('Ирэх өдөр сонгоно уу'),
  checkOut: Yup.date().required('Гарах өдөр сонгоно уу'),
  guests: Yup.number().required('Зочдын тоо сонгоно уу'),
  rooms: Yup.number().required('Өрөөний тоо сонгоно уу'),
});

export default function HotelBookingForm() {
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(BookingSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: FormValuesProps) => {
    console.info('DATA', data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card sx={{ p: 3 }}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Typography variant="h5">Захиалга</Typography>

            <Stack spacing={2}>
              <RHFDatePicker name="checkIn" label="Ирэх өдөр" />
              <RHFDatePicker name="checkOut" label="Гарах өдөр" />

              <RHFSelect name="guests" label="Зочдын тоо">
                {[1, 2, 3, 4, 5].map((option) => (
                  <option key={option} value={option}>
                    {option} зочин
                  </option>
                ))}
              </RHFSelect>

              <RHFSelect name="rooms" label="Өрөөний тоо">
                {[1, 2, 3, 4].map((option) => (
                  <option key={option} value={option}>
                    {option} өрөө
                  </option>
                ))}
              </RHFSelect>
            </Stack>

            <Button size="large" variant="contained" color="primary" type="submit">
              Захиалах
            </Button>
          </Stack>
        </FormProvider>
      </Card>
    </LocalizationProvider>
  );
}

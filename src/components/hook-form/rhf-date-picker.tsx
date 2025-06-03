import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
  name: string;
  label: string;
};

export default function RHFDatePicker({ name, label }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          label={label}
          slots={{
            textField: (params) => (
              <TextField {...params} fullWidth error={!!error} helperText={error?.message} />
            ),
          }}
        />
      )}
    />
  );
}

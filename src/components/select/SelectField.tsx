import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

interface SelectFieldProps {
  name: string;
  label: string;
  options: { label: string, value: number }[];
}

const SelectField: FC<SelectFieldProps> = ({ name, label, options }) => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <Box sx={{ minWidth: 120, paddingTop: 2 }}>
      <FormControl fullWidth>
        <InputLabel
          id={`${name}-label`}
          sx={{ color: '#FFFFFF' }}
        >
          {label}
        </InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              value={field.value ?? ''}
              onChange={(event) => field.onChange(event.target.value)}
              labelId={`${name}-label`}
              id={name}
              className='bg-card'
              sx={{ color: '#FFFFFF' }}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors[name] && <FormHelperText>{errors[name]?.message as string}</FormHelperText>}
      </FormControl>
    </Box>
  );
}

export default SelectField;
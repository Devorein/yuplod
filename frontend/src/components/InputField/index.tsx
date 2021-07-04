import { FormControl, FormLabel, TextField } from '@material-ui/core';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & { name: string, label: string; placeholder: string, textarea?: boolean, multiline?: boolean, rows?: number };

export default function InputField({ label, textarea, placeholder, multiline = false, rows = 1, ...props }: InputFieldProps) {
  const [field, { error }] = useField(props);
  return <FormControl className="InputField">
    <FormLabel htmlFor={field.name}>{label}</FormLabel>
    <TextField multiline={multiline} rows={rows} error={Boolean(error)} helperText={error} {...field} {...props} id={field.name} placeholder={placeholder} variant="outlined" color="primary" size={'medium'} />
  </FormControl>;
}

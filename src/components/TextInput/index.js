import React from 'react';

import { TextField, ErrorMessage } from './style';

function TextInput({
  label, type, register, err,
}) {
  return (
    <div>
      {err && <ErrorMessage>{err.message}</ErrorMessage>}
      <TextField
        {...register(label)}
        type={type}
        placeholder={label}
      />
    </div>
  );
}

export default TextInput;

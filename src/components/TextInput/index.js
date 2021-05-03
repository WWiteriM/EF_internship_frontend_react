import React from 'react';
import PropTypes from 'prop-types';

import { TextField, ErrorMessage } from './style';

function TextInput({ label, type, register, err }) {
  return (
    <div>
      {err && <ErrorMessage>{err.message}</ErrorMessage>}
      <TextField {...register(label)} type={type} placeholder={label} />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.shape.isRequired,
  err: PropTypes.shape.isRequired,
};

export default TextInput;

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
  register: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  err: PropTypes.func,
};

export default TextInput;

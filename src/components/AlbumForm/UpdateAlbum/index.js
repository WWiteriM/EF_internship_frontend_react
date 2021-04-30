import React from 'react';
import ReactDom from 'react-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { updateAlbum } from '../../../http/requests/albums/index';
import TextInput from '../../TextInput';
import {
  UpdateAlbumContainer, UpdateAlbumContent, Close,
} from './style';

const UpdateAlbumSchema = yup.object().shape({
  name: yup.string().required(),
});

function UpdateAlbum({ id, open, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(UpdateAlbumSchema),
  });

  const onSubmit = async (data) => {
    await updateAlbum(id, data);
    await window.location.reload();
    await onClose();
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <UpdateAlbumContainer>
      <UpdateAlbumContent>
        <Close onClick={onClose}>Close</Close>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Update Album:</h1>
          <TextInput
            register={register}
            type="name"
            label="name"
            err={errors.name}
          />
          <button type="submit">
            Update
          </button>
        </form>
      </UpdateAlbumContent>
    </UpdateAlbumContainer>,
    document.getElementById('portal'),
  );
}

export default UpdateAlbum;

import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { updateAlbum, getAllAlbums } from '../../../http/requests/albums/index';
import TextInput from '../../TextInput';
import {
  UpdateAlbumContainer,
  UpdateAlbumContent,
  Label,
  FormUpdateAction,
  ActionButton,
} from './style';

const UpdateAlbumSchema = yup.object().shape({
  name: yup.string().required(),
});

function UpdateAlbum({ id, onClose, setAlbums }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateAlbumSchema),
  });

  const onSubmit = async (data) => {
    await updateAlbum(id, data);
    const result = await getAllAlbums();
    setAlbums(result);
    await onClose();
  };

  return (
    <UpdateAlbumContainer>
      <UpdateAlbumContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Update {id} album:</h1>
          <Label>
            Fill in all the required fields in order to change the information about the album.
            Remember, all fields must be filled
          </Label>
          <TextInput register={register} type="name" label="name" err={errors.name} />
          <FormUpdateAction>
            <ActionButton type="submit">Update</ActionButton>
            <ActionButton onClick={onClose}>Cancel</ActionButton>
          </FormUpdateAction>
        </form>
      </UpdateAlbumContent>
    </UpdateAlbumContainer>
  );
}

UpdateAlbum.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  setAlbums: PropTypes.shape.isRequired,
};

export default UpdateAlbum;

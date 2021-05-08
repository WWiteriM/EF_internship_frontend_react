import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import { updateAlbums } from '../../../resources/albums/actions';
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

function UpdateAlbum(props) {
  const { id, onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateAlbumSchema),
  });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(updateAlbums(id, data));
    await onClose();
  };

  return (
    <UpdateAlbumContainer>
      <UpdateAlbumContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>
            Update
            {id}
            {' '}
            album:
          </h1>
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
};

export default UpdateAlbum;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { deleteAlbums } from '../../../resources/albums/actions';
import {
  DeleteAlbumContainer,
  DeleteAlbumContent,
  Label,
  FormDeleteAction,
  ActionButton,
} from './style';

function DeleteAlbum(props) {
  const { id, onClose } = props;

  const { handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    await dispatch(deleteAlbums(id));
    await onClose();
  };

  return (
    <DeleteAlbumContainer>
      <DeleteAlbumContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>
            Delete
            {id}
            {' '}
            album
          </h1>
          <Label>
            <strong>Warning! </strong>
            Are you sure you want to delete this entry? If you delete the entry, it will be
            impossible to restore it.
          </Label>
          <FormDeleteAction>
            <ActionButton type="submit">Delete</ActionButton>
            <ActionButton onClick={onClose}>Cancel</ActionButton>
          </FormDeleteAction>
        </form>
      </DeleteAlbumContent>
    </DeleteAlbumContainer>
  );
}

DeleteAlbum.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteAlbum;

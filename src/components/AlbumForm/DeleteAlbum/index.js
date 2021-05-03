import React from 'react';
import { useForm } from 'react-hook-form';

import { deleteAlbum, getAllAlbums } from '../../../http/requests/albums/index';
import {
  DeleteAlbumContainer,
  DeleteAlbumContent,
  Label,
  FormDeleteAction,
  ActionButton,
} from './style';

function DeleteAlbum({
  id, onClose, setAlbums,
}) {
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    await deleteAlbum(id);
    const result = await getAllAlbums();
    setAlbums(result);
    await onClose();
  };

  return (
    <DeleteAlbumContainer>
      <DeleteAlbumContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>
            Delete
            {' '}
            {id}
            {' '}
            album
          </h1>
          <Label>
            <strong>Warning! </strong>
            Are you sure you want to delete this entry?
            If you delete the entry, it will be impossible to restore it.
          </Label>
          <FormDeleteAction>
            <ActionButton type="submit">
              Delete
            </ActionButton>
            <ActionButton onClick={onClose}>
              Cancel
            </ActionButton>
          </FormDeleteAction>
        </form>
      </DeleteAlbumContent>
    </DeleteAlbumContainer>
  );
}

export default DeleteAlbum;

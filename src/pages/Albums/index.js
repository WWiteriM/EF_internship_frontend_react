import React from 'react';

import AlbumForm from '../../components/AlbumForm/index';

function AlbumPage() {
  return <AlbumForm />;
}

function AlbumInfoPage(props) {
  const { match } = props;

  return (
    <h1>
      Album
      {' '}
      {match.params.id}
    </h1>
  );
}

export { AlbumPage, AlbumInfoPage };

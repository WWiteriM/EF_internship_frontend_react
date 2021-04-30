import React from 'react';

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

export default AlbumInfoPage;

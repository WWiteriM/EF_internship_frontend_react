import React from 'react';
import PropTypes from 'prop-types';

function AlbumInfoPage(props) {
  const { match } = props;

  return <h1>Album {match.params.id}</h1>;
}

AlbumInfoPage.propTypes = {
  match: PropTypes.shape.isRequired,
};

export default AlbumInfoPage;

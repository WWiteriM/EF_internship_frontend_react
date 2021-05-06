import React from 'react';
import PropTypes from 'prop-types';

function AlbumInfoPage(props) {
  const { match } = props;

  return (
    <h1>
      Album
      {match.params.id}
    </h1>
  );
}

AlbumInfoPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AlbumInfoPage;

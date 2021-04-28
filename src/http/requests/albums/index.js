import API from '../../baseURL';

const getAllAlbums = async () => {
  const res = await API.get('albums');
  return res.data;
};

export default getAllAlbums;

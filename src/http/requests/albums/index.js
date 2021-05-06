import API from '../../baseURL';

const getAllAlbums = async () => {
  const res = await API.get('albums');
  return res.data;
};

const updateAlbum = async (id, data) => {
  const res = await API.put(`albums/${id}`, data);
  return res.data;
};

const deleteAlbum = async (id) => {
  await API.delete(`albums/${id}`);
};

export { getAllAlbums, updateAlbum, deleteAlbum };

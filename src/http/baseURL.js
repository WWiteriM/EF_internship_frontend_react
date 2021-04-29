import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const access = localStorage.getItem('accessToken');
    if (access) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      return axiosInstance
        .post('/auth/refresh', {
          refreshToken: localStorage.getItem('refreshToken'),
        })
        // eslint-disable-next-line consistent-return
        .then((res) => {
          if (res.status < 400) {
            localStorage.setItem('accessToken', res.data);
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${res.data}`;
            return axiosInstance(originalRequest);
          }
        });
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return Promise.reject(error);
  },
);

export default axiosInstance;
// https://ef-soft.herokuapp.com/api/
// http://localhost:3001/api/

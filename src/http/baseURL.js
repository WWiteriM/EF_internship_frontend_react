import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001/api/',
});

// https://ef-soft.herokuapp.com/api/
// http://localhost:3001/api/

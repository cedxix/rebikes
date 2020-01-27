import axios from 'axios';
import config from './../app.config';

export const fetchNetworks = () => axios.get(`${config.API_BASE}networks`);

export default {
  fetchNetworks,
};

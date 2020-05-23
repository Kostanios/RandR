import axios from 'axios';
import config from './config';

class SpotsAPI {
  getSpots = ({ start, limit = 20 }) => {
    let url = `${config.baseUrl}${config.endpoints.spots}/?_limit=${limit}`;
    if (start) {
      url += `&_start=${start}`;
    }
    return axios.get(url);
  };

  getSpotById = (id) => {
    return axios.get(`${config.baseUrl}${config.endpoints.spots}/${id}`);
  };
}

export default new SpotsAPI();

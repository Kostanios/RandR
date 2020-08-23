import axios from 'axios';
import config from './config';

class SpotsAPI {
  async pin() {
    await axios.get(`${config.baseUrl}${config.endpoints.pin}`);
  }

  async getData() {
    const { data } = await axios.get(
      `${config.baseUrl}${config.version}${config.endpoints.spot.data}`,
      {
        headers: config.options.headers,
      }
    );
    return data;
  }
}

export default new SpotsAPI();

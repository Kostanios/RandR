import axios from 'axios';
import config from './config';

class SpotsAPI {
  async pin() {
    await axios.get(`${config.baseUrl}${config.endpoints.pin}`, {
      headers: config.options.headers,
    });
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

  async getTimetable(spotId, date) {
    const { data } = await axios.post(
      `${config.baseUrl}${config.version}${config.endpoints.spot.timetable}`,
      { spotId, date },
      { headers: config.options.headers }
    );
    return data;
  }
}

export default new SpotsAPI();

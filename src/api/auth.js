import axios from 'axios';
import config from './config';

class AuthAPI {
  constructor() {
    this.baseUrl = config.baseUrl + config.version;
  }

  async auth() {
    const { data } = await axios.get(
      `${this.baseUrl}${config.endpoints.auth.login}`,
      {
        headers: config.options.headers,
      }
    );
    return data;
  }

  async requestOtp(phone) {
    const { data } = await axios.post(
      `${this.baseUrl}${config.endpoints.auth.requestOtp}`,
      { phone },
      { headers: config.options.headers }
    );
    return data;
  }

  async confirmOtp({ phone, otp }) {
    const { data } = await axios.post(
      `${this.baseUrl}${config.endpoints.auth.confirmOtp}`,
      { phone, otp },
      { headers: config.options.headers }
    );
    return data;
  }
}

export default new AuthAPI();

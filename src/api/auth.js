import axios from 'axios';
import config from './config';

class AuthAPI {
  async auth(jwt) {
    const { data } = await axios.get(
      `${config.baseUrl}${config.version}${config.endpoints.auth.login}`,
      {
        headers: { ...config.options.headers, Authorization: `Bearer ${jwt}` },
      }
    );
    return data;
  }

  async token(token) {
    const { data } = await axios.post(
      `${config.baseUrl}${config.version}${config.endpoints.auth.token}`,
      {
        headers: { ...config.options.headers, Token: token },
      }
    );
    return data;
  }

  async requestOtp(phone) {
    const { data } = await axios.post(
      `${config.baseUrl}${config.version}${config.endpoints.auth.requestOtp}`,
      { phone },
      { headers: config.options.headers }
    );
    return data;
  }

  async confirmOtp({ phone, otp }) {
    const { data } = await axios.post(
      `${config.baseUrl}${config.version}${config.endpoints.auth.confirmOtp}`,
      { phone, otp },
      { headers: config.options.headers }
    );
    return data;
  }
}

export default new AuthAPI();

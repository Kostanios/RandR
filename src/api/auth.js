import axios from 'axios';
import config from './config';

class AuthAPI {
  constructor() {
    this.baseUrl = `${config.baseUrl}${config.services.auth}`;
  }

  logIn = (phone) => {
    return axios.post(
      `${this.baseUrl}${config.endpoints.login}`,
      { phone },
      {
        headers: config.options.headers,
      }
    );
  };

  confirmOtp = ({ phoneNumber, otp }) => {
    return axios.post(
      `${this.baseUrl}${config.endpoints.confirmOtp}`,
      { phoneNumber, otp },
      {
        headers: config.options.headers,
      }
    );
  };

  confirmJwt = (jwt) => {
    return axios.post(
      `${this.baseUrl}${config.endpoints.confirmJwt}`,
      { jwt },
      {
        headers: config.options.headers,
      }
    );
  };
}

export default new AuthAPI();

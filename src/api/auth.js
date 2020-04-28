import axios from 'axios';
import PropTypes from 'prop-types';
import config from './config';

function AuthAPI() {
  return this;
}

AuthAPI.logIn = phone => {
  return axios
    .post(
      `${config.baseUrl}${config.endpoints.login}`,
      { phone },
      {
        headers: config.options.headers
      }
    )
};

AuthAPI.confirmJwt = jwt => {
  return axios
    .post(
      `${config.baseUrl}${config.endpoints.confirmJwt}`,
      { jwt },
      {
        headers: config.options.headers
      }
    )
};

AuthAPI.confirmOtp = ({ phoneNumber, otp }) => {
  return axios
    .post(
      `${config.baseUrl}${config.endpoints.confirmOtp}`,
      { phoneNumber, otp },
      {
        headers: config.options.headers
      }
    )
};

AuthAPI.logIn.propTypes = {
  phone: PropTypes.string.isRequired
};

AuthAPI.confirmJwt.propTypes = {
  jwt: PropTypes.string.isRequired
};

AuthAPI.confirmOtp.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  otp: PropTypes.string.isRequired
};

export default new AuthAPI();

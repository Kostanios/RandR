import axios from 'axios';
import config from './config';
import { statuses } from 'utils/constants/response';

function DataAPI() {
  return this;
}

DataAPI.isServerAvailable = async () => {
  return axios
    .get(`${config.baseUrl}${config.endpoints.pin}`)
    .then(res => {
      return res.status === statuses.OK;
    })
    .catch(error => {
      throw error;
    });
};

DataAPI.getData = async () => {
  return axios
    .get(`${config.baseUrl}${config.endpoints.data}`)
    .then(response => {
      const { status, error, spots } = response.data;

      if (status === statuses.OK) {
        return spots;
      } else {
        throw error;
      }
    });
};

DataAPI.getDataById = async uid => {
  return axios
    .get(`${config.baseUrl}${config.endpoints.data}/${uid}`)
    .then(response => {
      const { status, data } = response.data;

      if (status === statuses.OK) {
        return data;
      }
    });
};

export default new DataAPI();

import Cookies from 'universal-cookie';

const cookies = new Cookies();
const keys = {
  JWT: 'jwt',
  TOKEN: 'token',
};

export default {
  get: {
    jwt: () => cookies.get(keys.JWT),
    token: () => cookies.get(keys.TOKEN),
  },
  set: {
    jwt: (value = '') =>
      cookies.set(keys.JWT, value, {
        path: '/',
        expires: new Date(Date.now() + 86390000), // 1d: (1000 * 59 * 60 * 24) - 10000
      }),
    token: (value = '') =>
      cookies.set(keys.TOKEN, value, {
        path: '/',
        expires: new Date(Date.now() + 2591990000), // 1w: (1000 * 60 * 60 * 24 * 30) - 10000
      }),
  },
};

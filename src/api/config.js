export default {
  baseUrl: 'http://localhost:1337',
  services: {
    auth: '/auth',
  },
  endpoints: {
    login: '/phone',
    confirmOtp: '/phone-confirm',
    confirmJwt: '/confirm-jwt',
    spots: '/spots',
    pin: '/pin',
  },
  options: { headers: { 'Content-Type': 'application/json' } },
};

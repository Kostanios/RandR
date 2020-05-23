export default {
  baseUrl: 'http://localhost:1337',
  endpoints: {
    login: '/login',
    confirmOtp: '/confirm-otp',
    confirmJwt: '/confirm-jwt',
    spots: '/spots',
    pin: '/pin',
  },
  options: { headers: { 'Content-Type': 'application/json' } },
};

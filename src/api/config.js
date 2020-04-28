export default {
  baseUrl: 'https://08a21202.ngrok.io',
  endpoints: {
    login: '/login',
    confirmOtp: '/confirm-otp',
    confirmJwt: '/confirm-jwt',
    data: '/data',
    pin: '/pin'
  },
  options: { headers: { 'Content-Type': 'application/json' } }
};

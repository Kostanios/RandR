export default {
  baseUrl: 'https://randr-server.herokuapp.com',
  version: '/v1',
  endpoints: {
    pin: '/',
    auth: {
      login: '/auth',
      requestOtp: '/auth/phone-request',
      confirmOtp: '/auth/phone-confirm',
      token: '/auth/token',
    },
    spot: {
      data: '/',
      order: '/spot/order',
    },
  },
  options: {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': '63ee1bee-42f8-483b-b907-fc82c86e3157',
    },
  },
};

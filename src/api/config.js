export default {
  baseUrl: 'https://randr-server.herokuapp.com',
  // TODO: take out token value to .env
  socketUrl:
    'https://randr-socket.herokuapp.com?token=qnyolcAwbWfoo69k5iTpsjNY88WZPHIa',
  version: '/v1',
  endpoints: {
    pin: '/',
    auth: {
      login: '/auth',
      requestOtp: '/auth/phone-request',
      confirmOtp: '/auth/phone-confirm',
    },
    profile: {
      edit: '/profile/edit',
      addFavorite: '/profile/add-favorite',
      removeFavorite: '/profile/remove-favorite',
      email: '/profile/email',
    },
    spot: {
      data: '/',
      timetable: '/timetable',
      comment: '/comment',
      requestOrder: '/request-order',
      cancelOrder: '/cancel-order',
    },
    admin: {
      panel: '/admin',
      addAdmin: '/admin/add-admin',
      removeAdmin: '/admin/remove-admin',
      blockUser: '/admin/block-user',
      unblockUser: '/admin/unblock-user',
      confirmOrder: '/admin/confirm-order',
      rejectOrder: '/admin/reject-order',
      updateOrder: '/admin/update-order',
      openTable: '/admin/open-table',
      closeTable: '/admin/close-table',
    },
  },
  options: {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'dc8xhds0ZavQRg6EuFJ3bvpPXJ40I0xl',
    },
  },
};

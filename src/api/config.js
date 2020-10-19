export default {
  baseUrl: 'https://randr-server.herokuapp.com',
  // TODO: take out token value to .env
  socketUrl: `https://randr-socket.herokuapp.com?token=${process.env.REACT_APP_SocketUrlToken}`,
  version: '/v1',
  endpoints: {
    auth: {
      login: `${process.env.REACT_APP_AuthLogin}`,
      requestOtp: `${process.env.REACT_APP_AuthRequestOtp}`,
      confirmOtp: `${process.env.REACT_APP_AuthConfirmOtp}`,
    },
    profile: {
      edit: `${process.env.REACT_APP_ProfileEdit}`,
      addFavorite: `${process.env.REACT_APP_ProfileAddFavorite}`,
      removeFavorite: `${process.env.REACT_APP_ProfileRemoveFavorite}`,
      email: `${process.env.REACT_APP_ProfileEmail}`,
    },
    spot: {
      data: `${process.env.REACT_APP_SpotData}`,
      timetable: `${process.env.REACT_APP_SpotTimetable}`,
      comment: `${process.env.REACT_APP_SpotComment}`,
      requestOrder: `${process.env.REACT_APP_SpotRequestOrder}`,
      cancelOrder: `${process.env.REACT_APP_SpotCanselOrder}`,
    },
    admin: {
      panel: `${process.env.REACT_APP_AdminPanel}`,
      addAdmin: `${process.env.REACT_APP_AdminAddAdmin}`,
      removeAdmin: `${process.env.REACT_APP_AdminRemoveAdmin}`,
      blockUser: `${process.env.REACT_APP_AdminBlockUser}`,
      unblockUser: `${process.env.REACT_APP_AdminUnblockUser}`,
      confirmOrder: `${process.env.REACT_APP_AdminConfirmOrder}`,
      rejectOrder: `${process.env.REACT_APP_AdminRejectOrder}`,
      updateOrder: `${process.env.REACT_APP_AdminUpdateOrder}`,
      openTable: `${process.env.REACT_APP_AdminOpenTable}`,
      closeTable: `${process.env.REACT_APP_AdminCloseTable}`,
    },
  },
  options: {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'dc8xhds0ZavQRg6EuFJ3bvpPXJ40I0xl',
    },
  },
};

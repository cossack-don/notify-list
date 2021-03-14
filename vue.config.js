module.exports = {
  // publicPath: "/textbook/",
  publicPath: process.env.NODE_ENV === 'production' ?
    '/notify-list/' :
    '/'
  // используется для продакшена '/textbook/' имя репозитория
};

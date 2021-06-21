const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'uk', 'en'],
  },
  localePath: path.resolve('./locales'),
  serializeConfig: false,
  strictMode: false,
}

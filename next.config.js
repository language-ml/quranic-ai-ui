/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  react: { useSuspense: false },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
};

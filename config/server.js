const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST),
  port: env.int('PORT', process.env.PORT),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', process.env.ADMIN_JWT_SECRET),
    },
  },
});

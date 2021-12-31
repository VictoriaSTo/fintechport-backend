const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

console.log (process.env.HOST)
console.log (process.env.PORT)
console.log (process.env.ADMIN_JWT_SECRET)

module.exports = ({ env }) => ({
  host: `${process.env.HOST}`,
  port: `${process.env.PORT}`,
  admin: {
    auth: {
      secret: `${process.env.ADMIN_JWT_SECRET}`,
    },
  },
});

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET'),
//     },
//   }
// });

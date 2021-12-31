const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: `${process.env.DATABASE_HOST}`,
        srv: `${process.env.DATABASE_SRV}`,
        port: `${process.env.DATABASE_PORT}`,
        database: `${process.env.DATABASE_NAME}`,
        username: `${process.env.DATABASE_USERNAME}`,
        password: `${process.env.DATABASE_PASSWORD}`,
      },
      options: {
        authenticationDatabase: `${process.env.AUTHENTICATION_DATABASE}`,
        ssl: `${process.env.DATABASE_SSL}`,
      },
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: env('DATABASE_HOST', process.env.DATABASE_HOST),
//         srv: env.bool('DATABASE_SRV', process.env.DATABASE_SRV),
//         port: env.int('DATABASE_PORT', process.env.DATABASE_PORT),
//         database: env('DATABASE_NAME', process.env.DATABASE_NAME),
//         username: env('DATABASE_USERNAME', process.env.DATABASE_USERNAME),
//         password: env('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD),
//       },
//       options: {
//         authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//         ssl: env.bool('DATABASE_SSL', true),
//       },
//     },
//   },
// });

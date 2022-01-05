const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development' 
if(isDevelopment) {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
}

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: `${process.env.DATABASE_HOST}`,
        srv: true,
        port: `${process.env.DATABASE_PORT}`,
        database: `${process.env.DATABASE_NAME}`,
        username: `${process.env.DATABASE_USERNAME}`,
        password: `${process.env.DATABASE_PASSWORD}`,
      },
      options: {
        authenticationDatabase: `${process.env.AUTHENTICATION_DATABASE}`,
        ssl: true,
      },
    },
  },
});

const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development' 
if(isDevelopment) {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
}

module.exports = ({ env }) => ({
  host: `${process.env.HOST}`,
  port: `${process.env.PORT}`,
  admin: {
    auth: {
      secret: `${process.env.ADMIN_JWT_SECRET}`,
    },
  },
});

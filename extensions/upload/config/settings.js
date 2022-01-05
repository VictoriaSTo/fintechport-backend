const path = require('path')
const isDevelopment = process.env.NODE_ENV === 'development' 
if(isDevelopment) {
  require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
}

module.exports = ({ env }) => ({
  upload: {
     provider: 'cloudinary',
     providerOptions: {
        cloud_name: `${process.env.CLOUDINARY_NAME}`,
        api_key: `${process.env.CLOUDINARY_KEY}`,
        api_secret: `${process.env.CLOUDINARY_SECRET}`,
     },
  },
});

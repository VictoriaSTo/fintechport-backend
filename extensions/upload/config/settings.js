const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })

console.log(process.env.CLOUDINARY_SECRET)
console.log(process.env.CLOUDINARY_KEY)

module.exports = ({
  env
}) => ({
  upload: {
     provider: 'cloudinary',
     providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
     },
  },
});

// {
//   "provider": "cloudinary",
//   "providerOptions": {
//     "cloud_name": "dzpamvhsf",
//     "api_key": "639572917175644",
//     "api_secret": "esGvrdirsvZHlDHIEPsqmhEXF1E"
//   }
// }
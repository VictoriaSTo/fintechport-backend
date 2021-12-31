module.exports = ({
  env
}) => ({
  upload: {
     provider: 'cloudinary',
     providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', process.env.CLOUDINARY_NAME),
        api_key: env('CLOUDINARY_KEY', process.env.CLOUDINARY_KEY),
        api_secret: env('CLOUDINARY_SECRET', process.env.CLOUDINARY_SECRET),
     },
  },
});
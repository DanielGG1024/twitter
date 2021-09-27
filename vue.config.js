
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/twitter-front-end-vue/':
    '/',
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/all.scss";
        `
      }
    }
  },
}




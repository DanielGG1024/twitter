module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/all.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/twitter-front-end-vue/'
    : '/'
}
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/eric-project/'
//     : '/'
// }
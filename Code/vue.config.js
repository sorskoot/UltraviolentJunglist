// module.exports = {
//   chainWebpack: (config) => {
//           config.module
//             .rule('storysource')
//             .test(/\.stories\.js?$/)
//             .post()
//             .use('storysource')
//             .loader(require.resolve('@storybook/addon-storysource/loader'))
//         }
// }

module.exports = {
    lintOnSave: false,
    devServer: {
      disableHostCheck: true
    }
  };
  
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "~@/assets/wd-vars.scss";`
      }
    }
  }
}

module.exports = function () {
  return {
    name: 'inject-global-style',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'stylesheet',
              href: '/css/custom.css',
            },
          },
          {
            tagName: 'link',
            attributes: {
              rel: 'stylesheet',
              href: '/css/colors.css',
            },
          },
        ],
      }
    },
  }
}

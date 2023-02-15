
import { sidebar } from './sidebar/sidebar'
import { navbar } from './navbar/navbar'
module.exports = {
  title: '燕秋',
  description: 'love&year\'s emotion garden',
  // base: 'loveyear', // 设置基础URL，以/开始和结尾
  themeConfig: {
    siteTitle: false,
    logo: "/assets/images/logo.png",
    nav: navbar,
    sidebar,
    footer: {
      copyright: 'Copyright © 2019-present ice_yulong'
    }
  },
  markdown: {
    config: (md) => {
      const {
        demoBlockPlugin
      } = require('vitepress-theme-demoblock')
      // md.use(demoBlockPlugin)
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    },
    lineNumbers: true
  }
}
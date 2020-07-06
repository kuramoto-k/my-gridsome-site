module.exports = {
  siteName: 'gridsome',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'contents/blog/**/*.md',
        typeName: 'Post',
        remark: {}
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'contents/menu/**/*.md',
        typeName: 'Menu',
        remake: {}
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
        options: {
          config: './tailwind.config.js'
        }
    }
  ]
}

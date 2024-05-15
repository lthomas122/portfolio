// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // scss
        path.resolve(__dirname, './src/assets/styles.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Gridsome',
  plugins: [
   {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./content/**/*.md",
        typeName: "Work", // for the sake of naming GraphQL - template missing
        refs: {
          categories: {
            typeName: 'Category',
            create: true,
          }
        },
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
        },
      },
    },
    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     baseDir: './content/projects/',
    //     path: "*.md",
    //     typeName: "Projects", // for the sake of naming GraphQL - template missing
    //     remark: {
    //       externalLinksTarget: '_blank',
    //       externalLinksRel: ['noopener', 'noreferrer'],
    //     },
    //   },
    // },
  ],
  // templates: {
  //   Work: '/work/:title',
  //   // Projects: '/projects/:title'
  // }
  // chainWebpack (config) {
  //   // Load variables for all vue-files
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

  //   // use scss
  //   types.forEach(type => {
  //     addStyleResource(config.module.rule('scss').oneOf(type))
  //   })
  // }
}

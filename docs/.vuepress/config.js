module.exports = {
    plugins: ['@snowdog/vuepress-plugin-pdf-export'],
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          },
          { text: 'External', link: 'https://google.com' }
        ],
        sidebar: [
            {
              title: 'Group 1',   // required
              path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/guide/',
                '/installation/',
                '/advanced/'
              ]
            }
          ]
      
      }
}
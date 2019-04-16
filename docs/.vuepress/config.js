module.exports = {

  title: 'shipDocs',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    sidebar: [
      '/',
      {
        title: 'Parent Directory',
        children: [
          '/about/',
          '/about/test',
          '/about/navigation',
        ]
      },
      {
        title: 'Parent Directory 2',
        children: [
          '/details/',
          '/details/welcome',
        ]
      },
    ],
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}

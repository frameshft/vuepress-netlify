const dirTree = require('directory-tree');
const path = require('path');

var projets = [];
dirTree(path.join(__dirname, '../parent-1'), {extensions:/\.md/}, (item, PATH) => projets.push(item));
projets = projets.map(children => {
    return path.parse(children.name).name  !== 'README' ? path.join.apply(null, children.path.split(path.sep).slice(7)) : path.join.apply(null, children.path.split(path.sep).slice(7)).replace('README.md', '');
});

console.log(projets)
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

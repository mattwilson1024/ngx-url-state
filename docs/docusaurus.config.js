module.exports = {
  title: 'ngx-url-state',
  tagline: 'A powerful yet flexible library for handling stateful URLs in Angular applications.',
  url: 'https://github.io/mattwilson1024',
  baseUrl: '/ngx-url-state/',
  favicon: 'img/favicon.ico',
  organizationName: 'mattwilson1024', // Usually your GitHub org/user name.
  projectName: 'ngx-url-state', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ngx-url-state',
      logo: {
        alt: 'ngx-url-state',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/mattwilson1024/ngx-url-state',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: ``,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

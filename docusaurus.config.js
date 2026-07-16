// @ts-check
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SandboxCode',
  tagline: 'Kỹ sư phần mềm AI - Tự động hóa phát triển',
  favicon: 'img/favicon.ico',

  url: 'https://nguyenvanhoaithuong0507-hub.github.io',
  baseUrl: '/SandboxCode/',

  organizationName: 'nguyenvanhoaithuong0507-hub',
  projectName: 'SandboxCode',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode/tree/main',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      'vercel-analytics',
      {
        debug: false,
        mode: 'auto',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SandboxCode',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📖 Tài liệu',
        },
        {
          href: 'https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode',
          label: '⭐ GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu',
          items: [
            { label: 'Bắt đầu', to: '/docs/intro' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SandboxCode.`,
    },
  },
};

module.exports = config;
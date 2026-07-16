const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Bắt đầu',
      items: [
        'getting-started/overview',
        'getting-started/what-is-sandboxcode',
        'getting-started/features',
        'getting-started/first-steps',
      ],
    },
    {
      type: 'category',
      label: 'Hướng dẫn',
      items: [
        'guides/installation',
        'guides/cli-setup',
        'guides/macos-guide',
        'guides/personal-assistant',
        'guides/cli-automation',
      ],
    },
    {
      type: 'category',
      label: 'Tham khảo',
      items: [
        'reference/cli-reference',
        'reference/api-reference',
      ],
    },
  ],
};

module.exports = sidebars;
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PEcAn Project",
  tagline:
    "Ecosystem science, policy, and management informed by the best available data and models",
  url: "https://pecanproject.github.io",
  baseUrl: process.env.BASE_URL || "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PecanProject", // Usually your GitHub org/user name.
  projectName: "PecanProject.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "PEcAn",
      logo: {
        alt: "PEcAn Logo",
        src: "img/logo.jpeg",
      },
      items: [
        {
          label: "Documentation",
          position: "left",
          items: [
            {
              to: "/documentation/", label: "Documentation",
            },
            {
              to: "/package-documentation/", label: "Package Documentation",
            },
            {
              to: "/tutorials/", label: "Tutorials",
            },
            {
              to: "http://pecan.ncsa.illinois.edu/pecan/01-introduction.php", label: "Demo"
            },
          ],
        },
        { to: "/blog/", label: "Blog", position: "left" },
        {
          label: "About",
          position: "left",
          items: [
            { to: "/about/", label: "About" },
            { to: "/people/", label: "People" },
            { to: "/alumni/", label: "Alumni" },
            { to: "/news/", label: "News" },
          ],
        },
        { to: "/publications/", label: "Publications", position: "left" },
        {
          href: "https://github.com/PecanProject",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          label: "GSoC",
          position: "left",
          items: [
            { to: "/gsoc/", label: "Contributor Guidance" },
            { to: "/gsoc_ideas/", label: "Ideas List" },
          ],
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/documentation/latest/",
              className: "footer-docs-link",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://join.slack.com/t/pecanproject/shared_invite/enQtMzkyODUyMjQyNTgzLWEzOTM1ZjhmYWUxNzYwYzkxMWVlODAyZWQwYjliYzA0MDA0MjE4YmMyOTFhMjYyMjYzN2FjODE4N2Y4YWFhZmQ",
              className: "footer-slack-link",
            },
            {
              label: "𝕏 (formerly Twitter)",
              href: "https://x.com/pecanproject",
              className: "footer-x-link",
            },
          ],
        },
        {
          title: "Contribute to Code",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/PecanProject",
              className: "footer-github-link",
            },
          ],
        },
        {
          items: [
            {
              html: `
                <div class="footer-logo">
                  <a href="/" class="footer-logo-link">
                    <img src="/img/logo.jpeg" alt="PEcAn Logo" class="footer-logo-img"/>
                    <span class="footer-logo-text">PEcAn</span>
                  </a>
                </div>
              `,
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PEcAn Project.`,
    },
    docs: {
      sidebar: {
        hideable: true
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/PecanProject/web/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

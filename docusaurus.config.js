/** @type {import('@docusaurus/types').DocusaurusConfig} */
import { themes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
const site_url = "https://pranabdas.github.io";
const drive_url = "https://pranabdas.github.io/drive";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Condensed Matter Notes",
  tagline: "Condensed Matter Physics Notes",
  url: site_url,
  baseUrl: "/condmat-notes/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "condmat-notes", // Usually your repo name.
  titleDelimiter: "•",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: "theme-color", content: "#06445c" }],
      prism: {
        theme: themes.github,
        darkTheme: themes.nightOwl,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        // defaultMode: "dark",
        // switchConfig: {
        //   darkIcon: "☾",
        //   lightIcon: "☀️",
        // },
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Condensed Matter Notes",
        hideOnScroll: true,
        logo: {
          alt: "Logo",
          src: "img/favicon.png",
        },
        items: [
          {
            to: "/",
            label: "Docs",
            position: "left",
            items: [
              {
                label: "Condensed Matter Notes",
                to: "/",
              },
              {
                label: "~ ~ ~ Other Docs ~ ~ ~",
                to: site_url + "/docs/",
                target: "_self",
              },
              {
                label: "ARPES Python Tools",
                to: site_url + "/arpespythontools/",
                target: "_self",
              },
              {
                label: "C and C++ Programming",
                to: site_url + "/c-cpp/",
                target: "_self",
              },
              {
                label: "Fortran Programming",
                to: site_url + "/fortran/",
                target: "_self",
              },
              {
                label: "Javascript Tutorial",
                to: site_url + "/javascript/",
                target: "_self",
              },
              {
                label: "Linux Tutorial",
                to: site_url + "/linux/",
                target: "_self",
              },
              {
                label: "OpenMX tutorial",
                to: site_url + "/openmx/",
                target: "_self",
              },
              {
                label: "Python Tutorial",
                to: site_url + "/python-tutorial/",
                target: "_self",
              },
              {
                label: "Quantum Espresso Tutorial",
                to: site_url + "/espresso/",
                target: "_self",
              },
              {
                label: "Rust Programming",
                to: site_url + "/rust/",
                target: "_self",
              },
              {
                label: "SUV ARPES Manual",
                to: site_url + "/arpes-manual/",
                target: "_self",
              },
              {
                label: "SUV Python Tools",
                to: site_url + "/suvtools/",
                target: "_self",
              },
            ],
          },
          {
            href: "https://github.com/pranabdas/condmat-notes",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            title: "Visit project repository in GitHub",
            target: "_self",
          },
          {
            to: site_url,
            "aria-label": "About me",
            position: "right",
            target: "_self",
            className: "header-homepage-link",
            title: "Go to Pranab's Homepage",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights
      reserved.`,
      },
    }),

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/pranabdas/condmat-notes/blob/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    [
      // https://github.com/easyops-cn/docusaurus-search-local
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/",
        indexBlog: false,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  stylesheets: [
    {
      href: drive_url + "/webfonts/katex/katex.min.css",
      type: "text/css",
    },
  ],
  future: {
    experimental_faster: true,
  },
};

export default config;
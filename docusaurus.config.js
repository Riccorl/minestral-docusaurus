// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Minerva LLMs",
  tagline: "The first family of Large Language Models pretrained from scratch on Italian!",
  favicon: "img/sapienzanlp-logo-small.png",

  // Set the production url of your site here
  url: "https://riccardorlando.xyz/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/minerva",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Riccorl", // Usually your GitHub org/user name.
  projectName: "minestral-docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/sapienzanlp-social-card.png",
      navbar: {
        title: "Home",
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://huggingface.co/collections/sapienzanlp/minerva-llms-661e6011828fe67de4fe7961",
            label: "Hugging Face",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tech Report",
                to: "/blog/welcome",
              },
              {
                label: "Model Cards",
                to: "https://huggingface.co/collections/sapienzanlp/minerva-llms-661e6011828fe67de4fe7961",
              },
            ],
          },
          {
            title: "Sapienza NLP",
            items: [
              {
                label: "Website",
                href: "https://nlp.uniroma1.it",
              },
              {
                label: "GitHub",
                href: "https://github.com/SapienzaNLP",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/SapienzaNLP",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "About us",
                to: "https://nlp.uniroma1.it/people",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sapienza NLP`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

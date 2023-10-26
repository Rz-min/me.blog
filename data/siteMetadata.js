/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: "Rui Iizumi",
  author: "Rui Iizumi",
  headerTitle: "Rz-min-BLOG",
  description: "Software developer",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://github.com/Rz-min/me.blog",
  siteRepo: "https://github.com/Rz-min/me.blog",
  siteLogo: "/static/images/logo.png",
  socialBanner: "https://github.com/Rz-min/me.blog",
  mastodon: "https://github.com/Rz-min/me.blog",
  email: "mailto:rui.iizumi.20+job@gmail.com",
  github: "https://github.com/Rz-min",
  twitter: "https://github.com/Rz-min/me.blog",
  facebook: "https://github.com/Rz-min/me.blog",
  youtube: "https://github.com/Rz-min/me.blog",
  linkedin: "https://github.com/Rz-min/me.blog",
  locale: "en-US",
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: "buttondown",
  },
  comments: {
    provider: "giscus", // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: "pathname", // supported options: pathname, url, title
      reactions: "1", // Emoji reactions: 1 = enable / 0 = disable
      metadata: "0",
      theme: "light",
      darkTheme: "transparent_dark",
      themeURL: "",
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: "en",
    },
  },
  search: {
    provider: "kbar", // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: "search.json", // path to load documents to search
    },
  },
};

module.exports = siteMetadata;

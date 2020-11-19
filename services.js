export const getStories = function (
  {
    app: {
      i18n: { locale },
      $storyapi,
    },
    store,
  },
  url
) {
  return $storyapi.get(`cdn/stories/${locale === 'en' ? '' : 'fr'}${url}`, {
    version: process.env.STORYBLOK_VERSION,
    cv: store.state.cacheVersion,
  })
}

export const getLinks = function ({ app: { $storyapi }, store }) {
  return $storyapi.get(`cdn/links/`, {
    version: process.env.STORYBLOK_VERSION,
    cv: store.state.cacheVersion,
  })
}

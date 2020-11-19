<template>
  <div class="px-4 flex-col lg:px-16 m-auto flex mb-16">
    <h1 class="mb-8">
      {{ story.content.seo.title || '' }}
    </h1>
    <p class="mb-6">
      {{ story.content.seo.description || '' }}
    </p>
  </div>
</template>

<script>
import { getStories } from '@/services'

export default {
  name: 'Article',
  async asyncData(ctx) {
    try {
      const article = await getStories(ctx, `/blog/${ctx.params.articleId}`)

      const story = article.data.story
      const slugs = {
        en: { slug: story.slug },
      }
      story.translated_slugs.forEach((t) => {
        const tmp = t.path.split('/')
        slugs[t.lang] = { slug: tmp[tmp.length - 1] }
      })

      await ctx.store.dispatch('i18n/setRouteParams', slugs)

      return {
        story,
      }
    } catch (e) {
      console.log(e)
    }
  },
  data() {
    return {
      story: { content: {} },
    }
  },
}
</script>

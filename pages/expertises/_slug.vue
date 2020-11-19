<template>
  <div></div>
</template>

<script>
import { getStories } from '@/services'

export default {
  async asyncData(ctx) {
    try {
      const expertise = await getStories(ctx, `/expertises/${ctx.params.slug}`)
      const story = expertise.data.story
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

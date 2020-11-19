<template>
  <div class="container m-auto mt-20">
    <nuxt-link
      class="p-4 mr-8 bg-black text-white"
      :to="localePath('/expertises/technical-expertise')"
    >
      Expertises Link example
    </nuxt-link>

    <nuxt-link class="p-4 bg-black text-white" :to="localePath('/blog/hello')">
      Blog Link example
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

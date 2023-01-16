<template>
  <div class="homepage">
    <HeroBanner />
  </div>
</template>

<script>
import HeroBanner from '~/components/homepage/HeroBanner.vue'

export default {
  name: 'IndexPage',
  components: { HeroBanner },

  head: {
    title: 'Leo Asher',
    meta: [
      {
        hid: 'Leo',
        name: 'Leo Asher',
        content: "This is Leo Asher's website",
      },
    ],
  },
}
</script>

<style lang="scss">
.homepage {
  background-color: var(--bg-secondary);
  padding-top: 88px;
}
</style>

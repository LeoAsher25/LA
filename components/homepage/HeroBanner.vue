<template>
  <div class="hero-banner tw-flex tw-items-center">
    <div class="tw-container">
      <div
        class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-select-none"
      >
        <div
          class="tw-flex tw-items-center tw-justify-center tw-w-[70%] md:tw-w-[50%] -tw-mt-4 md:-tw-mt-0"
        >
          <img
            src="/img/LeoAsher.png"
            class="main-img md:tw-max-h-[50vh] tw-mb-4 md:tw-mb-0"
          />
        </div>

        <div
          class="text-wrap tw-scale-75 md:tw-scale-100 tw-text-center md:tw-text-left"
        >
          <p class="tw-text-5xl tw-font-bold tw-my-4">
            Hi, I'm
            <span class="tw-text-primary"> Leo Asher </span>
          </p>
          <p class="tw-text-5xl tw-font-bold tw-my-3">I'm the one</p>
          <p class="tw-text-5xl tw-font-bold tw-my-3">And, so are you</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeroBanner',
})
</script>

<style lang="scss">
.hero-banner {
  height: calc(100vh - 88px);

  .main-img {
    // transform: translate(0, -10%);
  }
}
</style>

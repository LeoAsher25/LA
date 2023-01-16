<template>
  <a-layout v-scroll="handleScroll" class="default-layout">
    <a-layout-header ref="headerRef" class="header tw-z-50">
      <div class="tw-container">
        <MenuComponent />
      </div>
    </a-layout-header>

    <a-layout-content>
      <nuxt />
    </a-layout-content>

    <a-layout-footer> </a-layout-footer>
  </a-layout>
</template>

<script>
import MenuComponent from '@/components/BasicLayout/Menu.vue'
export default {
  name: 'DefaultLayout',
  components: { MenuComponent },
  data() {
    return {}
  },

  mounted() {
    if (window.scrollY > 100 && this.$refs.headerRef) {
      this.$refs.headerRef?.$el?.classList?.add('active-header')
    } else {
      this.$refs.headerRef?.$el?.classList?.remove('active-header')
    }
  },

  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.$refs.headerRef?.$el?.classList?.add('active-header')
      } else {
        this.$refs.headerRef?.$el?.classList?.remove('active-header')
      }
    },
  },
}
</script>

<style lang="scss">
.default-layout {
  &.ant-layout {
    background: transparent !important;
  }

  .ant-layout-header {
    padding: 0;

    background-color: var(--header-bg) !important;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;

    &.header {
      height: 88px;

      display: flex;
      align-items: center;

      transition: 0.3s;

      &.active-header {
        height: 68px;
        background-color: $white;
        box-shadow: 0 5px 20px rgba($color: #000, $alpha: 0.1);
      }
    }
  }

  .ant-layout-footer {
    padding: 0;
  }
}
</style>

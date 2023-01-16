<template>
  <div
    ref="ToggleThemeRef"
    htmlFor="dn"
    :class="['toggle', $nuxt.$colorMode.value !== 'light' && 'active']"
    @click="handleToggleTheme"
  >
    <!-- style={{ backgroundColor: bgColorBtn }} -->
    <div class="toggle__handler">
      <span class="crater crater--1"></span>
      <span class="crater crater--2"></span>
      <span class="crater crater--3"></span>
    </div>
    <span class="star star--1"></span>
    <span class="star star--2"></span>
    <span class="star star--3"></span>
    <span class="star star--4"></span>
    <span class="star star--5"></span>
    <span class="star star--6"></span>
  </div>
</template>

<script>
export default {
  name: 'ToggleTheme',

  data() {
    return {}
  },

  fetch() {
    if (process.client) {
      const localTheme = localStorage?.getItem('nuxt-color-mode')
      if (localTheme) {
        this.$nuxt.$colorMode.preference = localTheme
      } else {
        // localStorage.setItem('colorMode', )
        this.$nuxt.$colorMode.preference = 'dark'
      }
    }
  },

  methods: {
    handleToggleTheme() {
      this.$nuxt.$colorMode.preference =
        this.$nuxt.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
}
</script>

<style lang="scss">
.toggle {
  $height: 2rem;
  $spaceTop: 0.25rem;
  cursor: pointer;
  position: relative;
  margin-right: 1rem;
  background-color: $primary !important;

  width: 3.5rem;
  height: $height;
  border-radius: $height - 0.6rem;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  .toggle__handler {
    position: relative;
    z-index: 1;
    top: 50%;
    left: $spaceTop;

    transform: translate(0, -50%);

    width: $height * 0.86;
    height: $height * 0.86;
    border-radius: $height;

    background-color: #fde8a1 !important;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    .crater {
      position: absolute;
      background-color: #f0c78a !important;
      opacity: 0;
      transition: opacity 200ms ease-in-out;
      border-radius: 50%;
    }

    .crater--1 {
      top: 45%;
      left: 25%;
      width: 12%;
      height: 12%;
    }

    .crater--2 {
      top: 72%;
      left: 50%;
      width: 15%;
      height: 15%;
    }

    .crater--3 {
      top: 25%;
      left: 60%;
      width: 20%;
      height: 20%;
    }
  }

  .star {
    position: absolute;
    background-color: #ffffff !important;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
  }

  .star--1 {
    top: 15%;
    left: 30%;
    z-index: 0;
    width: 2rem;
    height: 0.24rem;
  }

  .star--2 {
    top: 40%;
    left: 35%;
    z-index: 1;
    width: 2rem;
    height: 0.25rem;
  }

  .star--3 {
    top: 75%;
    left: 25%;
    z-index: 0;
    width: 30px;
    height: 3px;
  }

  .star--4,
  .star--5,
  .star--6 {
    opacity: 0;
  }

  .star--4 {
    top: 30%;
    left: 15%;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }

  .star--5 {
    top: 55%;
    left: 55%;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
  }

  .star--6 {
    top: 65%;
    left: 35%;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }

  &.active {
    .toggle__handler {
      transform: translate(0, -50%) translate3d(1.3rem, 0, 0) rotate(0);
      // transform: translate(0, -50%) translate3d(2rem, 0, 0) rotate(0);

      .crater {
        opacity: 1;
      }
    }

    .star--1 {
      width: 2px;
      height: 2px;
    }

    .star--2 {
      width: 4px;
      height: 4px;
      transform: translate3d(-5px, 0, 0);
    }

    .star--3 {
      width: 2px;
      height: 2px;
      transform: translate3d(-7px, 0, 0);
    }

    .star--4,
    .star--5,
    .star--6 {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>

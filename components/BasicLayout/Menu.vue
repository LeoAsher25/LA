<template>
  <div class="menu-wrap">
    <div class="normal-menu">
      <div class="container flex justify-between items-center">
        <div class="logo-wrap">
          <nuxt-link to="/">
            <nuxt-img
              src="/img/fullLogo.png"
              class="logo-primary"
              alt="Leo Asher"
            />
          </nuxt-link>
        </div>

        <div class="actions hidden xl:flex items-center">
          <ul class="menu-list flex items-center">
            <li v-for="item in allRoutes" :key="item.id" class="menu-item mx-4">
              <nuxt-link
                :to="item.to"
                class="menu-item-link font-semibold text-base"
              >
                {{ item.title }}
              </nuxt-link>
            </li>

            <ToggleTheme />
          </ul>
        </div>

        <div class="actions xl:hidden">
          <ul class="flex items-center">
            <li class="menu-item mx-4 cursor-pointer h-auto">
              <a-icon
                type="menu"
                class="text-xl"
                @click="activeMenuIcon = true"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <a-drawer
      :visible="activeMenuIcon"
      :closable="true"
      wrap-class-name="res-menu"
      @close="handleClose"
    >
      <template slot="title">
        <div class="logo-wrap" @click="handleClose">
          <nuxt-link to="/">
            <nuxt-img
              src="/img/svg/fullLogo.svg"
              class="logo-primary"
              alt="STP Software"
            />
          </nuxt-link>
        </div>
      </template>

      <a-menu mode="inline" class="res-menu-list">
        <a-menu-item
          v-for="item in allRoutes"
          :key="item.id"
          class="res-menu-item"
          @click="handleClose"
        >
          <nuxt-link
            :to="item.to"
            class="font-semibold text-base res-menu-item-link"
          >
            {{ item.title }}
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-drawer>
  </div>
</template>

<script>
import ToggleTheme from './ToggleTheme.vue'

export default {
  name: 'MenuComponent',
  components: { ToggleTheme },
  data() {
    return {
      activeMenuIcon: false,

      allRoutes: [
        // {
        //   id: 'home',
        //   title: 'Home',
        //   to: '/',
        // },
        {
          id: 'about',
          title: 'About',
          to: '/about',
        },
        {
          id: 'skills',
          title: 'Skills',
          to: '/skills',
        },
        {
          id: 'services',
          title: 'Services',
          to: '/services',
        },
        {
          id: 'portfolio',
          title: 'Portfolio',
          to: '/portfolio',
        },
        {
          id: 'contact',
          title: 'Contact',
          to: '/contact',
        },
      ],
    }
  },

  mounted() {},

  beforeUpdate() {},

  methods: {
    handleClose() {
      this.activeMenuIcon = false
    },
  },
}
</script>

<style lang="scss">
.menu-wrap {
  width: 100%;
}

.logo-wrap {
  max-width: 160px;
}

.normal-menu {
  transition: 0.5s;

  .menu-item {
    display: flex;
    align-items: center;
    height: 60px;
    cursor: pointer;

    &.h-auto {
      height: auto;
    }

    .nuxt-link-active {
      color: var(--color-primary);
    }

    .menu-item-link,
    i {
      // color: $gray-800;
      transition: 0.5s;
    }
  }
}
.get-in-touch {
  padding: 6px 16px;
  font-weight: 600;
  // color: $white;
}

.ant-layout-footer {
  padding: 0;
}

.ant-drawer.res-menu,
.ant-drawer-open.res-menu {
  .logo-wrap {
    max-width: 160px;

    .logo-primary {
      display: unset;
    }
  }

  .res-menu-list {
    border: none;

    .ant-menu-item {
      display: flex;
    }

    .res-menu-item {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .sub-res-menu-item {
      width: unset;
    }

    .ant-menu-submenu-title {
      display: flex;
    }
  }

  .ant-drawer-content-wrapper {
    width: 30rem !important;
    max-width: 100vw;
  }
}

.ant-dropdown-menu-item .sub-menu-item {
  padding: 0.8rem 1.2rem;
  // color: $primary;
  font-size: 17px;
}

.active-header {
  .logo-primary {
    display: block;
  }

  // .logo-white {
  //   display: none;
  // }

  .menu-item {
    .menu-item-link,
    i {
      // color: $gray-800;
    }
  }
}

.sub-menu-item {
  display: flex;
  align-items: center;
  height: 52px;
  cursor: pointer;

  .res-menu-item-link {
    // color: $gray-800;
    transition: 0.5s;
  }

  &:hover {
    .res-menu-item-link {
      // color: $secondary;
    }
  }
}
</style>

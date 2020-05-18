<template>
  <main :class="$route.name">
    <SiteNav />
    <nuxt class="nuxt" />
    <SiteFooter />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteFooter from "../components/SiteFooter.vue";
import SiteNav from "../components/SiteNav.vue";
@Component({
  components: {
    SiteNav,
    SiteFooter
  }
})
export default class DefaultLayout extends Vue {}
</script>
@import 'markdown';

body {
  @apply antialiased;
  @apply subpixel-antialiased;
}

.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}

<style lang="scss">
.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>

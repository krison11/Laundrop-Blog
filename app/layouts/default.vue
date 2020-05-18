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

<style lang="scss">
/*
@import 'markdown';
@import 'main';
*/
.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>

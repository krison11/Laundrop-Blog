<template>
  <main :class="$route.name">
    <SiteNav />
    <nuxt class="nuxt" />
    <SiteFooter />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteFooter from "../components/Footer/SiteFooter.vue";
import SiteNav from "../components/Navbar/SiteNav.vue";
@Component({
  components: {
    SiteNav,
    SiteFooter
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

html {
  font-family: "Poppins", sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  overflow-x: hidden;
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

.nuxt {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>

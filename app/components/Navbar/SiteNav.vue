<template>
  <fragment>
    <nav
      class="top-0 left-0 flex items-center text-center h-16 bg-primary justify-between px-4 md:px-8 z-40"
    >
      <Logo :responsive="true" :iconHeight="30" :iconWidth="30" :nameWidth="170" :color="'white'" />
      <MobileMenu />
      <DesktopMenu />
      <PageMenu />
    </nav>
    <!-- if route name is index return the blog div -->
    <div
      v-if="$route.name==='index'"
      class="blog bg-primary h-40 flex shadow-xl hidden md:flex flex-col justify-center items-center"
    >
      <div class="text-5xl text-white tracking-wider">BLOG</div>
      <div class="h-1 w-10 bg-ld-yellow"></div>
    </div>
  </fragment>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Fragment } from "vue-fragment";
import MobileMenu from "./MobileMenu.vue";
import DesktopMenu from "./DesktopMenu.vue";
import PageMenu from "./PageMenu.vue";
import Logo from "../Logo.vue";

@Component({
  components: { Fragment, MobileMenu, DesktopMenu, PageMenu, Logo },
  head() {
    return {
      script: [{ src: "https://code.iconify.design/1/1.0.6/iconify.min.js" }]
    };
  }
})
export default class SiteNav extends Vue {}
</script>

<style lang="css" scoped>
nav {
  position: -webkit-sticky;
  position: sticky;
}
</style>
 
 
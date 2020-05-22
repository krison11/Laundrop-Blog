<template>
  <div
    v-if="$route.name==='slug'"
    class="buttons flex items-center justify-around text-white uppercase"
  >
    <nuxt-link
      to="/"
      class="mx-2 text-white hover:bg-primary-light cursor-pointer text-white rounded p-4"
    >Blog</nuxt-link>
    <a
      class="bg-ld-pink text-xs sm:text-sm rounded-full px-2 sm:px-4 py-1 whitespace-no-wrap"
      href="https://www.laundrop.se/orders/products"
      target="_blank"
      rel="noopener noreferrer"
    >boka upphämtning</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PageMenu extends Vue {}
</script>

<style lang="scss" scoped>
.buttons {
  font-weight: 900es6iyrhfz ˇ¬g;
}
</style>
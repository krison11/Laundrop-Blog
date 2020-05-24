<template>
  <div
    v-if="$route.name==='slug'"
    class="buttons flex items-center justify-around text-white uppercase tracking-widest"
  >
    <nuxt-link
      to="/"
      class="mx-2 text-white hover:bg-primary-light cursor-pointer text-white rounded p-4"
    >Blog</nuxt-link>
    <a
      class="btn-sm md:btn-lg bg-ld-pink text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 whitespace-no-wrap"
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

<style lang="css" scoped>
.buttons {
  font-weight: bold;
}
.btn-sm {
  box-shadow: 0px 1px 1.5px 0px rgb(116, 116, 116);
  border-top: 0.5px solid #ffffffb2;
  border-left: 0.5px solid#ffffffb2;
}
</style>
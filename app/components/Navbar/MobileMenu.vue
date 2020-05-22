 /* eslint-disable */ 
<template>
  <div :class="$route.name==='index'?'block' : 'hidden' " class="md:hidden mr-2">
    <div class="flex items-center">
      <div id="nav-icon4" @click="() => (isActive = !isActive)" :class="isActive ? 'open ' : ''">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div :class="isActive ? 'open z-10 h-screen' : ''" class="bg-white fixed menu">
      <div class="flex flex-col relative h-full justify-between container mt-0 lg:mt-12">
        <div>
          <div class="text-3xl p-4 uppercase">
            <!-- <p>hello</p>
            <nuxt-link to="/boka">BOKA</nuxt-link>
            <nuxt-link to="/hitta">HITTA</nuxt-link>
            <nuxt-link to="/priser">PRISER</nuxt-link>
            <nuxt-link to="/galleri">GALLERI</nuxt-link>
            <nuxt-link to="/om-oss">Om oss</nuxt-link>
            <nuxt-link to="/faq">faq</nuxt-link>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: {}
})
export default class MobileMenu extends Vue {
  isActive: Boolean = false;
}
</script>


<style lang="css">
.negative-z {
  z-index: -5;
}
#nav-icon4 {
  width: 40px;
  height: 25px;
  position: relative;
  /* margin: 50px auto; */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
#nav-icon4 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  @apply bg-white;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}
#nav-icon4 span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
#nav-icon4 span:nth-child(2) {
  top: 12px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
#nav-icon4 span:nth-child(3) {
  top: 24px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}
#nav-icon4.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0px;
  left: 8px;
}
#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}
#nav-icon4.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 30px;
  left: 9px;
}
.menu {
  top: 95px;
  width: 100%;
  left: 0;
  right: 0;
  z-index: -3;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s, opacity 0.5s ease-in-out;
}
.menu.open {
  visibility: visible;
  opacity: 1;
}
@media (max-width: 960px) {
  .menu {
    top: 64px;
  }
}
</style>

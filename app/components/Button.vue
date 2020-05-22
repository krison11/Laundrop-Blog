<template>
  <div class="btn">
    <a :class="color" class="text" :href="url" target="_blank">
      <div :class="`slot text-${color}`">
        <slot></slot>
      </div>
      <span class="span"></span>
      <div class="icon-parent">
        <div class="icon">
          <span :class="`a bg-${color}`"></span>
          <span :class="`b bg-${color}`"></span>
          <span :class="`c bg-${color}`"></span>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() url!: string;
  @Prop() color!: string;

  getColor(color) {
    switch (color) {
      case "primary":
        return "#4DC1C3";
        break;
      case "secondary":
        return "#2F9291";
        break;
      case "black":
        return "#000000";
        break;
      default:
        return "#F6568C";
        break;
    }
  }
}
</script>

<style  lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.icon {
  position: relative;
}
.icon span {
  border-radius: 50px;
  height: 5px;
  box-shadow: 3px 10px 10px rgb(167, 167, 167);
  position: absolute;
}
.a {
  width: 40px;
  right: 0;
  transform: rotate(22deg);
  margin-top: -7px;
  margin-right: -36px;
}
.b {
  width: 70px;
  margin-right: -10px;
}
.c {
  width: 40px;
  margin-left: 17px;
  margin-top: 7px;
  transform: rotate(-22deg);
}

.btn:hover .icon-parent {
  margin-left: 0;
  opacity: 0;
}

.btn {
  width: fit-content;
  margin: auto;
}
div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.text {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  z-index: 0;
  .slot {
    font-family: "Poppins", sans-serif;
    text-transform: capitalize;
    font-size: 40px;
    padding: 10px 20px 10px 25px;
    letter-spacing: 7px;
    z-index: 2;
    text-shadow: 3px 10px 10px rgb(167, 167, 167);
  }
  .slot:hover {
    background: transparent;
    color: white;
    text-shadow: none;
  }
  .span {
    position: absolute;
    right: 0;
    height: 0px;
    width: 0px;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    z-index: 1;
  }
  &:hover .span {
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: all 0.4s ease-in-out;
  }
}

.icon-parent {
  transition: all 0.4s ease;
  margin-left: 250px;
  position: absolute;
  z-index: -1;
}
.icon {
  margin-left: 0px;
  animation: animate 0.5s ease infinite alternate;
}

@keyframes animate {
  to {
    margin-left: 20px;
  }
}

.primary:hover .span {
  @apply bg-primary;
}
.secondary:hover .span {
  @apply bg-secondary;
}
.ld-pink:hover .span {
  @apply bg-ld-pink;
}
.black:hover .span {
  @apply bg-black;
}
</style>
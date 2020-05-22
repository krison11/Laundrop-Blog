<template>
  <div :class="`btn text-${color}`">
    <a class="text" :href="url" target="_blank">
      <div :class="`slot text-${color}`">{{btnText}}</div>
      <span :class="`span bg-${color}`"></span>
      <div class="icon-parent">
        <div class="icon">
          <span :class="`a bg-${color}`"></span>
          <span :class="`b bg-${color}`"></span>
          <span :class="`c bg-${color}`"></span>
        </div>
      </div>
    </a>
    <div
      class="btn-shadow absolute m-auto mt-20 width-full heigh-0 rounded-full transition-all ease-in"
    ></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() url!: string;
  @Prop() color!: string;
  @Prop() btnText!: string;
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
  margin-right: -70px;
}
.b {
  width: 70px;
  margin-right: -10px;
}
.c {
  width: 40px;
  margin-left: 30px;
  margin-top: 7px;
  transform: rotate(-22deg);
}

.btn:hover .icon-parent {
  margin-left: 0;
  opacity: 0;
}
.btn:hover .btn-shadow {
  height: 20px;
  width: 100%;
  background-image: radial-gradient(
    rgb(211, 211, 211),
    rgba(211, 211, 211, 0.883),
    rgba(211, 211, 211, 0.712),
    rgba(211, 211, 211, 0.37),
    rgba(255, 255, 255, 0.486),
    rgba(255, 255, 255, 0.609),
    rgba(255, 255, 255, 0.87),
    rgb(255, 255, 255)
  );
}

.btn {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: auto;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
// div {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   justify-content: center;
//   -webkit-transition: all 0.3s ease;
//   -moz-transition: all 0.3s ease;
//   -o-transition: all 0.3s ease;
//   transition: all 0.3s ease;
// }

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
    border-radius: 200px;
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
</style>
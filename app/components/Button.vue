<template>
  <div :class="`btn text-${color}`">
    <a class="btn-link" :href="url" target="_blank">
      <div :class="`${color} text-${color}`" class="slot">{{btnText}}</div>
      <span :class="`btn-bg bg-${color}`"></span>
      <div class="icon-parent">
        <div class="icon">
          <span :class="`a bg-${color}`"></span>
          <span :class="`b bg-${color}`"></span>
          <span :class="`c bg-${color}`"></span>
        </div>
      </div>
    </a>
    <div class="btn-shadow absolute m-auto mt-20 width-full heigh-0 transition-all ease-in"></div>
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

<style  lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/* Arrow */
.icon {
  position: relative;
}
.icon span {
  height: 5px;
  box-shadow: 3px 10px 10px rgb(199, 199, 199);
  position: absolute;
}
.a {
  width: 30px;
  right: 0;
  -webkit-transform: rotate(22deg);
  -moz-transform: rotate(22deg);
  -o-transform: rotate(22deg);
  transform: rotate(22deg);
  transform: rotate(22deg);
  margin-top: -6px;
  margin-right: -60px;
}
.b {
  width: 55px;
  margin-left: 6px;
}
.c {
  width: 30px;
  margin-left: 30px;
  margin-top: 6px;
  -webkit-transform: rotate(-22deg);
  -moz-transform: rotate(-22deg);
  -o-transform: rotate(-22deg);
  transform: rotate(-22deg);
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
/* end of Arrow */

/* button container */

.btn {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -moz-flexbox;
  display: -o-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -moz-flex-pack: center;
  -o-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -o-flex-align: center;
  -moz-flex-align: center;
  align-items: center;
  width: fit-content;
  margin: auto;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.btn-link {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -moz-flexbox;
  display: -o-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -o-flex-align: center;
  -moz-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -moz-flex-pack: center;
  -o-flex-pack: center;
  justify-content: center;
  height: 100%;
  z-index: 0;
}

.btn :hover .btn-bg {
  height: 100%;
  width: 100%;
  opacity: 1;
}

.btn-bg {
  position: absolute;
  right: 0;
  height: 0px;
  width: 0px;
  opacity: 0.5;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: 1;
}

.slot {
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  font-size: 40px;
  padding: 10px 20px 10px 25px;
  letter-spacing: 7px;
  z-index: 2;
  text-shadow: 3px 10px 10px rgb(199, 199, 199);
}
.slot:hover {
  background: transparent;
  color: white;
  text-shadow: none;
}
/* arrow */
.icon-parent {
  margin-left: 250px;
  position: absolute;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.4s ease;
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
/* fkng colors */
.primary {
  text-decoration-color: #4dc1c3;
  color: #4bc1c3;
}
.secondary {
  text-decoration-color: #2f9291;
  color: #2f9291;
}
.ld-pink {
  text-decoration-color: #f6568c;

  color: #f6558b;
}
.black {
  text-decoration-color: #000000;
  color: #000000;
}
</style>
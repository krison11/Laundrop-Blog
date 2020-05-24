<template>
  <fragment>
    <section class="`block md:hidden">
      <a :href="url" target="_blank" rel="noopener noreferrer">
        <div
          :class="`sm-btn w-full relative flex justify-center items-center flex-no-wrap bg-${color} text-white text-xl py-3 uppercase rounded-full`"
        >
          <span class="mr-4">{{btnText}}</span>
          <span class="absolute ml-32">
            <svg width="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.16504 20.1568L7.93504 21.9268L17.835 12.0268L7.93504 2.12683L6.16504 3.89683L14.295 12.0268L6.16504 20.1568H6.16504Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </a>
    </section>

    <section class="hidden md:block">
      <div :class="`btn text-${color}`">
        <a class="btn-link" :href="url" target="_blank">
          <span :class="`btn-bg bg-${color}`"></span>
          <div :class="`${color} text-${color}`" class="slot">{{btnText}}</div>

          <!-- <span class="icon-parent">
        <div class="icon">
          <span :class="`a bg-${color}`"></span>
          <span :class="`b bg-${color}`"></span>
          <span :class="`c bg-${color}`"></span>
        </div>
          </span>-->
          <div class="icon">
            <svg width="45" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 11.0269H17.17L13.59 7.43686L15 6.02686L21 12.0269L15 18.0269L13.59 16.6169L17.17 13.0269H3V11.0269Z"
                :fill="getColor(color)"
              />
            </svg>
          </div>
        </a>
        <div class="btn-shadow absolute m-auto mt-20 width-full heigh-0 transition-all ease-in"></div>
      </div>
    </section>
  </fragment>
</template>
<script lang="ts">
import { Fragment } from "vue-fragment";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: { Fragment }
})
export default class Button extends Vue {
  @Prop() url!: string;
  @Prop() color!: string;
  @Prop() btnText!: string;

  getColor(color) {
    switch (color) {
      case "primary":
        return "#4bc1c3";

        break;
      case "secondary":
        return "#2f9291";

        break;
      case "ld-pink":
        return " #f6558b";

        break;
      case "black":
        return "#000000";

        break;
    }
    return color;
  }
}
</script>

<style  lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.sm-btn {
  box-shadow: 1px 2px 4px 0px rgb(41, 41, 41);
}

/* button container */

.btn {
  margin: 5rem 0rem;
  width: 100%;
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
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: fit-content;
  margin: auto;
}

.btn:hover .icon {
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

/* end of btn container */

.btn-link {
  height: 100%;
  width: fit-content;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -moz-flexbox;
  display: -o-flexbox;
  display: flex;
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
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  z-index: 0;
}

.btn-link:hover .btn-bg {
  width: 100%;
  height: 100%;
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
  font-size: 40px;
  padding: 10px 20px 10px 25px;
  letter-spacing: 7px;
  z-index: 2;
  text-shadow: 3px 10px 10px rgb(199, 199, 199);
  text-transform: capitalize;
  font-weight: bold;
}
.slot:hover {
  color: white;
  text-shadow: none;
}

/*------- arrow ----------*/

/* .icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  position: relative;
}
.icon span {
  height: 4.7px;
  box-shadow: 3px 10px 10px rgb(199, 199, 199);
}
.a {
  width: 22px;
  margin-left: 27.2px;
  margin-bottom: 1.2px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  transform: rotate(45deg);
}
.b {
  width: 40px;
  height: 5px !important;
}
.c {
  width: 22px;
  margin-left: 27.2px;
  margin-top: 1.2px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  transform: rotate(-45deg);
} */

.icon {
  width: fit-content;
  height: fit-content;
  position: absolute;
  margin-left: 280px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.4s ease;
  z-index: -1;
  height: 40;
  width: 40;
}
svg {
  animation: animate 0.5s ease alternate infinite;
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
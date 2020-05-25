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
    <div :class="isActive ? 'open ' : ''" class="bg-secondary text-white fixed menu">
      <div class="w-full container links tracking-widest">
        <a href="#">
          <p>BOKA TVÄTT</p>
          <div class="bg-primary">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.92 9.52686H11.92V6.52686H8.92004V4.52686H11.92V1.52686H13.92V4.52686H16.92V6.52686H13.92V9.52686ZM5.93004 20.5269C5.93004 19.4269 6.82004 18.5269 7.92004 18.5269C9.02004 18.5269 9.92004 19.4269 9.92004 20.5269C9.92004 21.6269 9.02004 22.5269 7.92004 22.5269C6.82004 22.5269 5.93004 21.6269 5.93004 20.5269ZM17.92 18.5269C16.82 18.5269 15.93 19.4269 15.93 20.5269C15.93 21.6269 16.82 22.5269 17.92 22.5269C19.02 22.5269 19.92 21.6269 19.92 20.5269C19.92 19.4269 19.02 18.5269 17.92 18.5269ZM16.47 13.5269H9.02004L7.92004 15.5269H19.92V17.5269H7.92004C6.40004 17.5269 5.44004 15.8969 6.17004 14.5569L7.52004 12.1169L3.92004 4.52686H1.92004V2.52686H5.19004L9.45004 11.5269H16.47L20.34 4.52686L22.08 5.48686L18.22 12.4969C17.88 13.1169 17.22 13.5269 16.47 13.5269Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
        <a href="#">
          <p>ABONNEMANG</p>
          <div class="bg-primary">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2.02686C6.48 2.02686 2 6.50686 2 12.0269C2 17.5469 6.48 22.0269 12 22.0269C17.52 22.0269 22 17.5469 22 12.0269C22 6.50686 17.52 2.02686 12 2.02686ZM7.07 18.3069C7.5 17.4069 10.12 16.5269 12 16.5269C13.88 16.5269 16.51 17.4069 16.93 18.3069C15.57 19.3869 13.86 20.0269 12 20.0269C10.14 20.0269 8.43 19.3869 7.07 18.3069ZM12 14.5269C13.46 14.5269 16.93 15.1169 18.36 16.8569C19.38 15.5169 20 13.8469 20 12.0269C20 7.61686 16.41 4.02686 12 4.02686C7.59 4.02686 4 7.61686 4 12.0269C4 13.8469 4.62 15.5169 5.64 16.8569C7.07 15.1169 10.54 14.5269 12 14.5269ZM12 6.02686C10.06 6.02686 8.5 7.58686 8.5 9.52686C8.5 11.4669 10.06 13.0269 12 13.0269C13.94 13.0269 15.5 11.4669 15.5 9.52686C15.5 7.58686 13.94 6.02686 12 6.02686ZM10.5 9.52686C10.5 10.3569 11.17 11.0269 12 11.0269C12.83 11.0269 13.5 10.3569 13.5 9.52686C13.5 8.69686 12.83 8.02686 12 8.02686C11.17 8.02686 10.5 8.69686 10.5 9.52686Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
        <hr class="border-primary w-1/3 m-auto" />
        <a href="#">
          <p>PRISLISTA</p>
          <div class="bg-black">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.82 4.02686H19C20.1 4.02686 21 4.92686 21 6.02686V20.0269C21 21.1269 20.1 22.0269 19 22.0269H5C4.86 22.0269 4.73 22.0169 4.6 21.9969C4.21 21.9169 3.86 21.7169 3.59 21.4469C3.41 21.2569 3.26 21.0469 3.16 20.8069C3.06 20.5669 3 20.2969 3 20.0269V6.02686C3 5.74686 3.06 5.48686 3.16 5.25686C3.26 5.01686 3.41 4.79686 3.59 4.61686C3.86 4.34686 4.21 4.14686 4.6 4.06686C4.73 4.03686 4.86 4.02686 5 4.02686H9.18C9.6 2.86686 10.7 2.02686 12 2.02686C13.3 2.02686 14.4 2.86686 14.82 4.02686ZM7 10.0269V8.02686H17V10.0269H7ZM17 14.0269V12.0269H7V14.0269H17ZM14 16.0269H7V18.0269H14V16.0269ZM12 3.77686C12.41 3.77686 12.75 4.11686 12.75 4.52686C12.75 4.93686 12.41 5.27686 12 5.27686C11.59 5.27686 11.25 4.93686 11.25 4.52686C11.25 4.11686 11.59 3.77686 12 3.77686ZM5 20.0269H19V6.02686H5V20.0269Z"
                fill="white"
              />
            </svg>
          </div>
        </a>

        <a href="#">
          <p>MATTRÄKNAREN</p>
          <div class="bg-black">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.82 4.02686H19C20.1 4.02686 21 4.92686 21 6.02686V20.0269C21 21.1269 20.1 22.0269 19 22.0269H5C4.86 22.0269 4.73 22.0169 4.6 21.9969C4.21 21.9169 3.86 21.7169 3.59 21.4469C3.41 21.2569 3.26 21.0469 3.16 20.8069C3.06 20.5669 3 20.2969 3 20.0269V6.02686C3 5.74686 3.06 5.48686 3.16 5.25686C3.26 5.01686 3.41 4.79686 3.59 4.61686C3.86 4.34686 4.21 4.14686 4.6 4.06686C4.73 4.03686 4.86 4.02686 5 4.02686H9.18C9.6 2.86686 10.7 2.02686 12 2.02686C13.3 2.02686 14.4 2.86686 14.82 4.02686ZM7 10.0269V8.02686H17V10.0269H7ZM17 14.0269V12.0269H7V14.0269H17ZM14 16.0269H7V18.0269H14V16.0269ZM12 3.77686C12.41 3.77686 12.75 4.11686 12.75 4.52686C12.75 4.93686 12.41 5.27686 12 5.27686C11.59 5.27686 11.25 4.93686 11.25 4.52686C11.25 4.11686 11.59 3.77686 12 3.77686ZM5 20.0269H19V6.02686H5V20.0269Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
        <hr class="border-primary w-1/3 m-auto" />
        <a href="#">
          <p>OM OSS</p>
          <div class="bg-ld-pink">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.99 2.02686C6.47 2.02686 2 6.50686 2 12.0269C2 17.5469 6.47 22.0269 11.99 22.0269C17.52 22.0269 22 17.5469 22 12.0269C22 6.50686 17.52 2.02686 11.99 2.02686ZM12 20.0269C7.58 20.0269 4 16.4469 4 12.0269C4 7.60686 7.58 4.02686 12 4.02686C16.42 4.02686 20 7.60686 20 12.0269C20 16.4469 16.42 20.0269 12 20.0269ZM17 9.52686C17 10.3569 16.33 11.0269 15.5 11.0269C14.67 11.0269 14 10.3569 14 9.52686C14 8.69686 14.67 8.02686 15.5 8.02686C16.33 8.02686 17 8.69686 17 9.52686ZM8.5 11.0269C9.33 11.0269 10 10.3569 10 9.52686C10 8.69686 9.33 8.02686 8.5 8.02686C7.67 8.02686 7 8.69686 7 9.52686C7 10.3569 7.67 11.0269 8.5 11.0269ZM17.11 14.0269C16.31 16.0669 14.33 17.5269 12 17.5269C9.67 17.5269 7.69 16.0669 6.89 14.0269H17.11Z"
                fill="white"
              />
            </svg>
          </div>
        </a>

        <a href="#">
          <p>TVÄTT PROCESS</p>
          <div class="bg-ld-pink">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 19.0219H14.5C15.17 19.0219 15.77 18.7019 16.13 18.1919L20.5 12.0319L16.13 5.87185C15.77 5.36185 15.17 5.03185 14.5 5.03185H3.5L8.5 12.0319L3.5 19.0219Z"
                fill="white"
              />
            </svg>
          </div>
        </a>

        <a href="#">
          <p>FAQ</p>
          <div class="bg-ld-pink">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 7.02686H13V9.02686H11V7.02686Z" fill="white" />
              <path d="M11 11.0269H13V17.0269H11V11.0269Z" fill="white" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 12.0269C2 6.50686 6.47998 2.02686 12 2.02686C17.52 2.02686 22 6.50686 22 12.0269C22 17.5469 17.52 22.0269 12 22.0269C6.47998 22.0269 2 17.5469 2 12.0269ZM4 12.0269C4 16.4369 7.58997 20.0269 12 20.0269C16.41 20.0269 20 16.4369 20 12.0269C20 7.61685 16.41 4.02686 12 4.02686C7.58997 4.02686 4 7.61685 4 12.0269Z"
                fill="white"
              />
            </svg>
          </div>
        </a>

        <a href="#">
          <p>VILLKOR</p>
          <div class="bg-ld-pink">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 2.02686H6C4.9 2.02686 4 2.92686 4 4.02686V20.0269C4 21.1269 4.89 22.0269 5.99 22.0269H18C19.1 22.0269 20 21.1269 20 20.0269V8.02686L14 2.02686ZM16 12.0269H8V14.0269H16V12.0269ZM16 16.0269H8V18.0269H16V16.0269ZM6 20.0269H18V9.02686H13V4.02686H6V20.0269Z"
                fill="white"
              />
            </svg>
          </div>
        </a>

        <a href="#">
          <p>CONTACT</p>
          <div class="bg-ld-pink">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2.02686C6.48 2.02686 2 6.50686 2 12.0269C2 17.5469 6.48 22.0269 12 22.0269C17.52 22.0269 22 17.5469 22 12.0269C22 6.50686 17.52 2.02686 12 2.02686ZM11 19.0269V17.0269H13V19.0269H11ZM14.17 12.1969L15.07 11.2769C15.64 10.7069 16 9.90686 16 9.02686C16 6.81686 14.21 5.02686 12 5.02686C9.79 5.02686 8 6.81686 8 9.02686H10C10 7.92686 10.9 7.02686 12 7.02686C13.1 7.02686 14 7.92686 14 9.02686C14 9.57686 13.78 10.0769 13.41 10.4369L12.17 11.6969C11.45 12.4269 11 13.4269 11 14.5269V15.0269H13C13 13.5269 13.45 12.9269 14.17 12.1969Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
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


<style lang="css" scoped>
/* ** menu icon ** */
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
/* *** menu *** */
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
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  visibility: visible;
  z-index: 1;
  opacity: 1;
}
@media (max-width: 960px) {
  .menu {
    top: 64px;
  }
  .menu.open {
    height: calc(100vh - 64px);
  }
}

/* ** link container **  */
.links {
  padding: 1.2rem;
  height: fit-content;
  overflow-y: scroll;
}
.links a {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  margin: 1.5rem 0rem;
  font-size: large;
}

.links a p {
  width: 100%;
  position: absolute;
  text-align: center;
}
.links a div {
  border-radius: 100%;
  padding: 0.7rem;
  box-shadow: 0.5px 2px 2.5px 0px rgba(0, 0, 0, 0.37);
  border-top: 0.5px solid #ffffff96;
  border-left: 0.5px solid #ffffff96;
}
</style>

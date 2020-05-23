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
    <div :class="isActive ? 'open ' : ''" class="bg-white fixed menu">
      <div class="w-full container links">
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
                d="M17.5 3.77686C17.5 4.87686 16.6 5.77686 15.5 5.77686C14.4 5.77686 13.5 4.87686 13.5 3.77686C13.5 2.67686 14.4 1.77686 15.5 1.77686C16.6 1.77686 17.5 2.67686 17.5 3.77686ZM0 17.2769C0 14.4769 2.2 12.2769 5 12.2769C7.8 12.2769 10 14.4769 10 17.2769C10 20.0769 7.8 22.2769 5 22.2769C2.2 22.2769 0 20.0769 0 17.2769ZM5 20.7769C3.1 20.7769 1.5 19.1769 1.5 17.2769C1.5 15.3769 3.1 13.7769 5 13.7769C6.9 13.7769 8.5 15.3769 8.5 17.2769C8.5 19.1769 6.9 20.7769 5 20.7769ZM19.1 11.2769C17 11.2769 15.3 10.4769 14 9.17686L13.2 8.37686L10.8 10.7769L13 13.0769V19.2769H11V14.2769L7.8 11.4769C7.4 11.1769 7.2 10.6769 7.2 10.0769C7.2 9.57686 7.4 9.07686 7.8 8.67686L10.6 5.87686C10.9 5.47686 11.4 5.27686 12 5.27686C12.6 5.27686 13.1 5.47686 13.6 5.87686L15.5 7.77686C16.4 8.67686 17.6 9.27686 19.1 9.27686V11.2769ZM19 12.2769C16.2 12.2769 14 14.4769 14 17.2769C14 20.0769 16.2 22.2769 19 22.2769C21.8 22.2769 24 20.0769 24 17.2769C24 14.4769 21.8 12.2769 19 12.2769ZM15.5 17.2769C15.5 19.1769 17.1 20.7769 19 20.7769C20.9 20.7769 22.5 19.1769 22.5 17.2769C22.5 15.3769 20.9 13.7769 19 13.7769C17.1 13.7769 15.5 15.3769 15.5 17.2769Z"
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
        <hr class="h-px w-1/3 color-grey-200 m-auto" />
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
        <hr class="h-px w-1/3 color-grey-200 m-auto" />
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.5022 12.0269C19.5022 12.3669 19.4722 12.6869 19.4322 13.0069L21.5422 14.6569C21.7322 14.8069 21.7822 15.0769 21.6622 15.2969L19.6622 18.7569C19.5722 18.9169 19.4022 19.0069 19.2322 19.0069C19.1722 19.0069 19.1122 18.9969 19.0522 18.9769L16.5622 17.9769C16.0422 18.3669 15.4822 18.7069 14.8722 18.9569L14.4922 21.6069C14.4622 21.8469 14.2522 22.0269 14.0022 22.0269H10.0022C9.75216 22.0269 9.54216 21.8469 9.51216 21.6069L9.13216 18.9569C8.52216 18.7069 7.96216 18.3769 7.44216 17.9769L4.95216 18.9769C4.90216 18.9969 4.84216 19.0069 4.78216 19.0069C4.60216 19.0069 4.43216 18.9169 4.34216 18.7569L2.34216 15.2969C2.22216 15.0769 2.27216 14.8069 2.46216 14.6569L4.57216 13.0069C4.53216 12.6869 4.50216 12.3569 4.50216 12.0269C4.50216 11.6969 4.53216 11.3669 4.57216 11.0469L2.46216 9.39686C2.27216 9.24686 2.21216 8.97686 2.34216 8.75686L4.34216 5.29686C4.43216 5.13686 4.60216 5.04686 4.77216 5.04686C4.83216 5.04686 4.89216 5.05686 4.95216 5.07686L7.44216 6.07686C7.96216 5.68686 8.52216 5.34686 9.13216 5.09686L9.51216 2.44686C9.54216 2.20686 9.75216 2.02686 10.0022 2.02686H14.0022C14.2522 2.02686 14.4622 2.20686 14.4922 2.44686L14.8722 5.09686C15.4822 5.34686 16.0422 5.67686 16.5622 6.07686L19.0522 5.07686C19.1022 5.05686 19.1622 5.04686 19.2222 5.04686C19.4022 5.04686 19.5722 5.13686 19.6622 5.29686L21.6622 8.75686C21.7822 8.97686 21.7322 9.24686 21.5422 9.39686L19.4322 11.0469C19.4722 11.3669 19.5022 11.6869 19.5022 12.0269ZM17.5022 12.0269C17.5022 11.8169 17.4922 11.6069 17.4522 11.2969L17.3122 10.1669L18.2022 9.46686L19.2722 8.61686L18.5722 7.40686L17.3022 7.91686L16.2422 8.34686L15.3322 7.64686C14.9322 7.34686 14.5322 7.11686 14.1022 6.93686L13.0422 6.50686L12.8822 5.37686L12.6922 4.02686H11.3022L11.1022 5.37686L10.9422 6.50686L9.88216 6.93686C9.47216 7.10686 9.06216 7.34686 8.63216 7.66686L7.73216 8.34686L6.69216 7.92686L5.42216 7.41686L4.72216 8.62686L5.80216 9.46686L6.69216 10.1669L6.55216 11.2969C6.52216 11.5969 6.50216 11.8269 6.50216 12.0269C6.50216 12.2269 6.52216 12.4569 6.55216 12.7669L6.69216 13.8969L5.80216 14.5969L4.72216 15.4369L5.42216 16.6469L6.69216 16.1369L7.75216 15.7069L8.66216 16.4069C9.06216 16.7069 9.46216 16.9369 9.89216 17.1169L10.9522 17.5469L11.1122 18.6769L11.3022 20.0269H12.7022L12.9022 18.6769L13.0622 17.5469L14.1222 17.1169C14.5322 16.9469 14.9422 16.7069 15.3722 16.3869L16.2722 15.7069L17.3122 16.1269L18.5822 16.6369L19.2822 15.4269L18.2022 14.5869L17.3122 13.8869L17.4522 12.7569C17.4822 12.4569 17.5022 12.2369 17.5022 12.0269ZM12.0022 8.02686C9.79216 8.02686 8.00216 9.81686 8.00216 12.0269C8.00216 14.2369 9.79216 16.0269 12.0022 16.0269C14.2122 16.0269 16.0022 14.2369 16.0022 12.0269C16.0022 9.81686 14.2122 8.02686 12.0022 8.02686ZM10.0022 12.0269C10.0022 13.1269 10.9022 14.0269 12.0022 14.0269C13.1022 14.0269 14.0022 13.1269 14.0022 12.0269C14.0022 10.9269 13.1022 10.0269 12.0022 10.0269C10.9022 10.0269 10.0022 10.9269 10.0022 12.0269Z"
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
                d="M14 2.02686H6C4.9 2.02686 4 2.92686 4 4.02686V20.0269C4 21.1269 4.89 22.0269 5.99 22.0269H18C19.1 22.0269 20 21.1269 20 20.0269V8.02686L14 2.02686ZM16 12.0269H8V14.0269H16V12.0269ZM16 16.0269H8V18.0269H16V16.0269ZM6 20.0269H18V9.02686H13V4.02686H6V20.0269Z"
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
}
</style>

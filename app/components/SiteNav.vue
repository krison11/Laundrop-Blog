<template>
  <!-- nav w-full h-86 -->
  <fragment>
    <!-- NAV -->
    <nav class="sticky top-0 left-0  text-center h-20 bg-navbar z-40" :class="{ scrolled: !view.atTopOfPage }">
      <div class="container mx-auto flex items-center justify-between items-center h-full px-2">
        <!-- svg logo -->
        <div class="block cursor-pointer h-full flex items-center">
          <a href="https://www.Laundrop.se" target="_blank" rel="noopener noreferrer" class="block cursor-pointer">
            <svg
              class="fill-current stroke-current text-white h-4 md:h-8 w-auto hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 557 79"
            >
              <path
                d="M100.583 12.408v53.789h18.43v8.89H91.125V12.409h9.458zM175.814 59.864h-26.836l-6.981 15.224h-10.192L162.821 8.47l29.919 66.618h-10.349l-6.577-15.224zm-3.856-8.89l-9.298-21.312-9.743 21.311h19.041zM212.992 12.408v37.756c0 5.384.878 9.323 2.638 11.814 2.624 3.601 6.317 5.398 11.084 5.398 4.788 0 8.498-1.797 11.124-5.398 1.758-2.408 2.638-6.347 2.638-11.814V12.408h9.459v40.353c0 6.604-2.054 12.043-6.17 16.32-4.631 4.767-10.314 7.144-17.051 7.144-6.741 0-12.41-2.377-17.007-7.144-4.116-4.277-6.176-9.716-6.176-16.32V12.408h9.461zM262.727 75.088V8.145l45.714 47.821v-43.56h9.455v66.496l-45.711-47.699v43.885h-9.458zM330.688 75.088V12.406h13.153c6.303 0 11.286.625 14.937 1.868 3.927 1.215 7.484 3.289 10.679 6.212 6.469 5.901 9.705 13.654 9.705 23.26 0 9.632-3.372 17.43-10.112 23.381-3.383 2.979-6.931 5.046-10.635 6.212-3.466 1.162-8.373 1.746-14.737 1.746h-12.99v.003zm9.458-8.89h4.263c4.249 0 7.781-.447 10.593-1.34 2.815-.947 5.362-2.45 7.634-4.507 4.656-4.246 6.979-9.782 6.979-16.603 0-6.873-2.298-12.45-6.898-16.727-4.141-3.814-10.242-5.722-18.308-5.722h-4.263v44.898zM413.187 48.377l19.404 26.711h-11.568l-17.906-25.66h-1.703v25.66h-9.461V12.406h11.083c8.282 0 14.264 1.555 17.946 4.67 4.058 3.465 6.087 8.035 6.087 13.72 0 4.44-1.274 8.255-3.818 11.45-2.541 3.194-5.896 5.24-10.064 6.13zm-11.773-7.186h3.004c8.957 0 13.436-3.424 13.436-10.273 0-6.41-4.357-9.624-13.074-9.624h-3.368v19.897h.002zM443.381 43.466c0-8.824 3.233-16.403 9.702-22.734 6.441-6.333 14.181-9.497 23.221-9.497 8.935 0 16.592 3.189 22.98 9.578 6.411 6.388 9.619 14.058 9.619 23.016 0 9.013-3.219 16.66-9.657 22.936-6.472 6.305-14.278 9.458-23.429 9.458-8.091 0-15.357-2.801-21.799-8.4-7.091-6.198-10.637-14.32-10.637-24.357zm9.539.12c0 6.928 2.328 12.624 6.978 17.092 4.631 4.462 9.976 6.696 16.038 6.696 6.577 0 12.124-2.273 16.647-6.82 4.52-4.601 6.779-10.204 6.779-16.805 0-6.685-2.234-12.285-6.699-16.808-4.44-4.545-9.934-6.82-16.484-6.82-6.518 0-12.029 2.275-16.522 6.82-4.49 4.495-6.737 10.042-6.737 16.644zM531.152 49.633v25.455h-9.459V12.406h10.718c5.248 0 9.215.365 11.895 1.096 2.704.73 5.09 2.11 7.144 4.138 3.601 3.518 5.4 7.958 5.4 13.317 0 5.738-1.921 10.286-5.766 13.641-3.847 3.358-9.026 5.032-15.548 5.032h-4.384v.003zm0-8.766h3.529c8.692 0 13.035-3.344 13.035-10.029 0-6.466-4.482-9.702-13.436-9.702h-3.128v19.73z"
              />
              <path
                d="M54.4 10.975C48.616 5.187 40.893 2 32.657 2c-8.237 0-15.958 3.187-21.745 8.975-5.787 5.788-8.973 13.512-8.973 21.75s3.186 15.962 8.973 21.75l21.745 21.75L54.4 54.475c11.99-11.993 11.99-31.507 0-43.5zm-39.95 3.542C19.292 9.676 25.757 7.01 32.656 7.01c6.898 0 13.364 2.666 18.204 7.507 6.096 6.099 8.482 14.518 7.173 22.439a2.75 2.75 0 00-.518.517c-4.049 5.412-11.15 7.148-17.286 4.198-4.328-2.08-7.466-5.892-12.073-7.518-7.05-2.488-15.254-.863-20.578 4.28a26.199 26.199 0 01-.633-5.708c.002-6.9 2.667-13.366 7.507-18.208zm36.41 36.416L32.656 69.14 14.452 50.933a25.57 25.57 0 01-5.02-7.103c3.707-4.752 9.6-6.738 15.5-5.408 5.258 1.184 8.682 5.695 13.454 7.878 5.55 2.539 11.352 2.273 16.271-.21a25.75 25.75 0 01-3.797 4.843z"
                stroke-width="3"
              />
            </svg>
            <svg class="fill-current stroke-current text-white h-12 w-auto md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 79">
              <path
                d="M54.4 10.975C48.616 5.187 40.893 2 32.657 2c-8.237 0-15.958 3.187-21.745 8.975-5.787 5.788-8.973 13.512-8.973 21.75s3.186 15.962 8.973 21.75l21.745 21.75L54.4 54.475c11.99-11.993 11.99-31.507 0-43.5zm-39.95 3.542C19.292 9.676 25.757 7.01 32.656 7.01c6.898 0 13.364 2.666 18.204 7.507 6.096 6.099 8.482 14.518 7.173 22.439a2.75 2.75 0 00-.518.517c-4.049 5.412-11.15 7.148-17.286 4.198-4.328-2.08-7.466-5.892-12.073-7.518-7.05-2.488-15.254-.863-20.578 4.28a26.199 26.199 0 01-.633-5.708c.002-6.9 2.667-13.366 7.507-18.208zm36.41 36.416L32.656 69.14 14.452 50.933a25.57 25.57 0 01-5.02-7.103c3.707-4.752 9.6-6.738 15.5-5.408 5.258 1.184 8.682 5.695 13.454 7.878 5.55 2.539 11.352 2.273 16.271-.21a25.75 25.75 0 01-3.797 4.843z"
                stroke-width="3"
              />
            </svg>
          </a>
        </div>
        <!-- end of svg logo -->
        <!-- *********************************************** -->
        <!-- if route name is 'index' return Dropdown buttons-->
        <!-- <div v-if="$route.name === 'index'">
          <div>
            <fa v-if="!show" @click="toggle" class="text-white md:hidden text-white text-3xl cursor-pointer" :icon="['fas', 'bars']" />
            <fa v-if="show" @click="toggle" class="text-white md:hidden text-white text-3xl cursor-pointer" :icon="['fas', 'chevron-up']" />

            <div
              :class="
                `${condition} absolute left-0 flex-col bg-navbar items-center w-screen md:flex md:relative md:flex-row md:w-auto text-xl text-white uppercase`
              "
            >
              <div class="dropdown md:w-auto">
                <div class="nav-btn md:w-auto">
                  <span>BOKA</span>
                  <span class="iconify ml-1 text-2xl" data-icon="mdi:chevron-down"></span>
                </div>

                <div class="dropdown-content md:absolute">
                  <div class="dropdown-content-btn">
                    <a href="#">
                      <div class="bg-navbar">
                        <span class="iconify" data-icon="ic:outline-local-laundry-service"></span>
                      </div>
                      BOKA TVÄTT
                    </a>
                  </div>

                  <div class="dropdown-content-btn">
                    <a href="#">
                      <div class="bg-navbar">
                        <span class="iconify" data-icon="carbon:arrows-horizontal"></span>
                      </div>
                      ABONNEMANG
                    </a>
                  </div>
                </div>
              </div>

              <div class="dropdown md:w-auto">
                <div class="nav-btn md:w-auto">
                  <span>INFO</span>
                  <span class="iconify ml-1 text-2xl" data-icon="mdi:chevron-down"></span>
                </div>

                <div class="dropdown-content md:absolute">
                  <div class="border-b border-lighter">
                    <div class="dropdown-content-btn">
                      <a href="#">
                        <div class="bg-black">
                          <span class="iconify" data-icon="fa-regular:list-alt" data-inline="false"></span>
                        </div>
                        PRISLISTA
                      </a>
                    </div>

                    <div class="dropdown-content-btn">
                      <a href="#">
                        <div class="bg-black">
                          <span class="iconify" data-icon="fa-regular:list-alt" data-inline="false"></span>
                        </div>
                        MATTRÄKNAREN
                      </a>
                    </div>
                  </div>
                  <div class="dropdown-content-btn">
                    <a href="#">
                      <div class="bg-button">
                        <span class="iconify" data-icon="octicon:smiley" data-inline="false"></span>
                      </div>
                      OM OSS
                    </a>
                  </div>
                  <div class="dropdown-content-btn">
                    <a href="#">
                      <div class="bg-button">
                        <span class="iconify" data-icon="oi:chevron-right" data-inline="false"></span>
                      </div>
                      TVÄTT PROCESS
                    </a>
                  </div>
                  <div class="dropdown-content-btn">
                    <a href="#">
                      <div class="bg-button">
                        <span class="iconify" data-icon="ant-design:info-circle-filled" data-inline="false"></span>
                      </div>
                      FAQ
                    </a>
                  </div>
                  <div class="dropdown-content-btn">
                    <a href="#">
                      <div class="bg-button">
                        <span class="iconify" data-icon="carbon:policy" data-inline="false"></span>
                      </div>
                      VILLKOR
                    </a>
                  </div>
                </div>
              </div>

              <div class="nav-btn">CONTACT</div>
            </div>
          </div>
        </div> -->
        <!-- *********************************************** -->
        <!-- else return Page Button -->

        <!-- <nuxt-link to="/" class="capitalize mx-2 text-white bg-ld-pink hover:bg-transparent cursor-pointer text-white rounded py-3 px-4">back to blog</nuxt-link> -->
        <a
          class="block uppercase text-white text-sm md:text-lg cursor-pointer cursor-pointer font-bold rounded px-4 py-2 md:py-3 bg-ld-pink hover:bg-white border-ld-pink border-2 hover:text-ld-pink"
          href="https://www.laundrop.se/orders/products"
          >boka upphämtning</a
        >
      </div>
    </nav>

    <!-- <div v-if="$route.name === 'index'" class="bg-navbar h-40 flex shadow-xl hidden md:flex flex-col justify-center items-center">
      <div class="text-5xl text-white">BLOG</div>
      <div class="h-1 w-10 bg-yellow"></div>
    </div> -->
  </fragment>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Fragment } from "vue-fragment";

@Component({
  components: { Fragment },
  head() {
    return {
      script: [{ src: "https://code.iconify.design/1/1.0.6/iconify.min.js" }],
    };
  },
})
export default class SiteNav extends Vue {
  show: boolean = false;
  condition: string = "hidden";
  logoCondition: any = this.lgCondition();
  view: any = {
    atTopOfPage: true,
  };
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  lgCondition() {
    let condition = "";
    this.$route.name === "index" ? (condition = "block") : (condition = "hidden");
    return condition;
  }

  toggle() {
    this.show = !this.show;
    this.show === true ? (this.condition = "flex") : (this.condition = "hidden");
  }
  handleScroll() {
    if (window.pageYOffset > 0) {
      if (this.view.atTopOfPage) {
        this.view.atTopOfPage = false;
      }
    } else if (!this.view.atTopOfPage) {
      this.view.atTopOfPage = true;
    }
  }
}
</script>

<style lang="scss" scoped>
nav.scrolled {
  @apply shadow-2xl;
  /* border-bottom: 0px; */
}

@media (max-width: 960px) {
  nav.scrolled {
    @apply shadow-sm;
    /* border-bottom: 0px; */
  }
}

.nav-btn {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    @apply bg-nav_lighter;
  }
}

.dropdown {
  width: 100%;
  text-align: center;
  position: relative;
  &:hover &-content {
    display: block;
  }
  &-content {
    z-index: 1;
    @apply shadow-2xl;
    display: none;
    background: #ffffff;
    color: #000000;
    padding: 1rem;
    border-radius: 3px;
    &-btn {
      padding: 5px;
      border-radius: 3px;
      &:hover {
        @apply bg-light_grey;
      }
      a {
        display: flex;
        align-items: center;
        div {
          @apply p-2;
          @apply text-white;
          @apply text-2xl;
          @apply rounded-full;
          @apply mr-2;
        }
      }
    }
  }
}
</style>

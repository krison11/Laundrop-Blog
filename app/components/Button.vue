<template>
  <div
    :class="getColor(color)"
    class="w-full relative btn w-full m-auto max-w-sm py-2 text-xl md:py-3 md:text:2xl md:max-w-md lg:max-w-lg lg:text-2xl xl:max-w-md xl:py-3 xl:text-2xl uppercase rounded-full text-white tracking-widest"
  >
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <div class="flex justify-center items-center flex-no-wrap">
        <span>{{btnText}}</span>
        <span class="icon">
          <svg
            class="w-5 md:w-6"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.16504 20.1568L7.93504 21.9268L17.835 12.0268L7.93504 2.12683L6.16504 3.89683L14.295 12.0268L6.16504 20.1568H6.16504Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() url!: string;
  @Prop() color!: string;
  @Prop() btnText!: string;

  getColor(color) {
    switch (color) {
      case "primary":
        return "bg-primary";
        break;
      case "secondary":
        return "bg-secondary";
        break;
      case "pink":
        return "bg-ld-pink";
        break;
      case "black":
        return "bg-black";
        break;
      case "white":
        return "bg-white";
        break;
      case "yellow":
        return "bg-ld-yellow";
        break;
    }
    return color;
  }
}
</script>

<style  lang="scss" scoped>
.btn {
  box-shadow: 0.5px 2px 2.5px 0px rgb(71, 71, 71);
  border-top: 1px solid #ffffffb2;
  border-left: 1px solid#ffffffb2;
}
.icon {
  position: absolute;
  margin-left: 38%;
}

svg {
  animation: animate 0.5s ease alternate infinite;
}

@keyframes animate {
  to {
    margin-left: 20px;
  }
}
</style>
<template>
  <footer class="bg-secondary-dark text-white text-3xl flex justify-center items-center">
    <div v-if="$route.name==='slug'">This Is Page Footer</div>
    <div v-else>This Is Index Footer</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SiteFooter extends Vue {}
</script>

<style lang="scss">
footer {
  height: 450px;
}
</style>

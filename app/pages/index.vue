<template>
  <section class="blog m-10 container mx-auto px-2">
    <!-- posts -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="post" v-for="(post, i) in posts" :key="i">
        <nuxt-link :to="`/${post.slug}`">
          <img class="w-full object-cover h-64" :src="post.image || 'https://source.unsplash.com/random/640x340'" />
          <div class="p-6 bg-white">
            <h2 class="text-2xl mb-2">{{ post.title }}</h2>

            <p class="text-base font-light">{{ post.excerpt }}</p>

            <h6 class="text-blue-600 mt-4 font-medium">Läser mer</h6>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  transition() {
    return "slide-right";
  },
  head() {
    return {
      script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }],
    };
  },
})
export default class BlogIndex extends Vue {
  get posts(): Post[] {
    return [...this.$store.state.posts];
  }
}
</script>

<style lang="scss">
.blog {
  .post {
    @apply shadow-md;
    transition: all 0.2s cubic-bezier(0.64, 0, 0.35, 1);
    &:hover {
      @apply shadow-xl;
    }
  }
}
</style>

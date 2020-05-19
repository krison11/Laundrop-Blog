<template>
  <section class="blog m-10">
    <!-- {{posts}} -->
    <!-- posts -->
    <div class="flex flex-wrap md:-mx-4 pb-20">
      <!-- <div v-for="(post, i) in posts" :key="i" class="w-full md:w-1/2 my-4 md:px-4">
        <div class="post">
          <nuxt-link :to="`/${post.slug}`">
            <img
              class="w-full"
              :src="post.preview.image || 'https://source.unsplash.com/random/640x340'"
            />
            <div class="p-6 bg-white">
              <h2 class="text-2xl mb-2">{{ post.preview.title }}</h2>

              <p class="text-base font-light">{{ post.preview.excerpt }}</p>

              <h6 class="text-blue-600 mt-4 font-medium">Read more</h6>
            </div>
          </nuxt-link>
        </div>
      </div>-->
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
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
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

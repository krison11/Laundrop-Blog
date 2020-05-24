<template>
  <section class="blog my-10">
    <!-- posts container -->
    <div class="flex flex-wrap sm:justify-center md:justify-start xl:mx-10">
      <div
        v-for="(post, i) in posts"
        :key="i"
        class="sm:max-w-sm md:w-1/2 md:max-w-md lg:max-w-lg xl:w-1/3 xl:max-w-xl"
      >
        <div class="post m-4 rounded overflow-hidden">
          <nuxt-link :to="`/${post.slug}`">
            <!-- img -->
            <img
              class="w-full h-64 md:h-20rem lg:h-25rem sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full object-cover"
              :data-src="post.image || 'https://source.unsplash.com/random/640x340'"
              v-lazy-load
            />
            <!-- section text -->
            <section class="p-6 bg-white">
              <!-- title -->
              <h2 class="text-2xl mb-2">{{ post.title }}</h2>
              <!-- excerpt -->
              <p class="text-base font-light">{{ post.excerpt }}</p>
              <!-- author -->
              <div class="flex items-center my-4">
                <!-- author img -->
                <div
                  class="author-img h-12 w-12 bg-center bg-cover rounded-full mr-4"
                  :lazy-background="post.page.author.image"
                ></div>
                <!-- author text -->
                <div class="author-text text-grey text-xs md:text-sm">
                  <p>{{ post.page.author.title }}</p>
                  <div class="md:flex">
                    <p>{{ post.page.author.name }}</p>
                    <i class="px-1 hidden md:block">•</i>
                    <i class="ml-px">{{ post.page.author.publishDate }}</i>
                  </div>
                </div>
              </div>
              <!-- end of author -->
              <h6 class="text-blue-600 font-medium">Read more</h6>
            </section>
          </nuxt-link>
        </div>
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

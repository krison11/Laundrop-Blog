<template>
  <article class="post">
    <section class="header">
      <div class="h-2/3 lg:h-1/1 bg-top bg-cover bg-no-repeat" :lazy-background="post.page.hero.image">
        <div class="container h-full flex items-center px-3 md:px-0">
          <div class="header-img-text w-full xl:w-1/2">
            <h1 :class="post.page.hero.color" class="text-4xl md:text-7xl lg:text-7xl xl:text-9xl uppercase font-bold tracking-wide">
              {{ post.page.hero.text }}
            </h1>
            <p class="text-xl md:text-2xl lg:text-3xl text-gray-800">By Laundrop</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-4 bg-gray-100">
      <div class="flex items-center container py-1 px-3 md:px-0 border-b-2 border-primary pb-4">
        <div class="author-img h-12 w-12 bg-center bg-cover rounded-full mr-4" :lazy-background="post.page.author.image"></div>

        <div class="author-text text-gray-800 text-base md:text-lg">
          <p class>{{ post.page.author.name }}</p>
          <p>
            {{ post.page.author.publishDate }}
            · {{ post.page.author.title }}
          </p>
        </div>
      </div>
    </section>

    <section class="container pb-12 px-2">
      <div v-if="post.page.markdown" class="text-lg markdown" v-lazy-load="$md.render(post.page.markdown)" />
      <div class="w-full mt-12">
        <a
          class="block text-center w-full lg:w-auto lg:inline-block font-bold "
          :class="
            `${post.page.button.color}    tracking-wide shadow text-xl rounded-lg px-6 py-4 uppercase border-2 border-ld-pink hover:border-white`
          "
          :href="post.page.button.link"
          >{{ post.page.button.text }}</a
        >
      </div>
      <div class="w-full mt-4">
        <nuxt-link
          class="block text-center w-full lg:w-auto lg:inline-block font-bold tracking-wide shadow text-xl rounded-lg px-6 py-4 text-gray-700 uppercase border-2 border-gray-700 hover:border-white"
          to="/"
          >Läs fler inlägg</nuxt-link
        >
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MetaInfo from "vue-meta";

@Component<BlogPost>({
  transition() {
    return "slide-left";
  },
  head(): MetaInfo {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.post.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.page.seo.metaDescription,
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.post.page.seo.metaWebsiteName,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: this.post.page.seo.metaWebsiteUrl,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.post.page.seo.metaImage,
        },
        {
          hid: "og:type",
          name: "og:type",
          content: this.post.page.seo.metaType,
        },
        {
          hid: "og:locale",
          name: "og:locale",
          content: this.post.page.seo.metaLanguage,
        },
      ],
    };
  },
})
export default class BlogPost extends Vue {
  post: Post = this.$store.state.posts.find((post: Post) => post.slug === this.params());
  params() {
    return this.$route.params.slug;
  }
}
</script>

<style lang="scss" scoped>
.header-img {
  height: 60vh;
}
</style>

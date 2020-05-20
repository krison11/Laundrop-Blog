<template>
  <article class="post">
    <section class="header">
      <div
        class="header-img h-auto bg-fixed bg-left-top bg-cover bg-center"
        :lazy-background="post.page.hero.image"
      >
        <div class="container h-full flex items-center px-3 md:px-0">
          <div class="header-img-text w-full lg:w-1/2 max-w-sm md:max-w-md lg:max-w-lg xl:mx-w-xl">
            <h1
              class="text-4xl md:text-5xl text-md lg:text-6xl text-image_text uppercase font-bold tracking-wide"
            >{{ post.page.hero.text }}</h1>
            <p class="text-xl md:text-2xl lg:text-3xl text-bg-grey">By Laundrop</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-image_text">
      <div class="flex items-center container py-1 px-3 md:px-0">
        <div
          class="author-img h-24 w-24 bg-center bg-cover rounded-full mr-4"
          :lazy-background="post.page.author.image"
        ></div>

        <div class="author-text text-white">
          <p class>{{ post.page.author.title }}</p>
          <p>
            {{ post.page.author.name }} ·
            <i class>{{ post.page.author.publishDate }}</i>
          </p>
        </div>
      </div>
    </section>

    <section class="container">
      <div
        v-if="post.page.markdown"
        class="text-lg markdown container px-3 md:px-0"
        v-lazy-load="$md.render(post.page.markdown)"
      />
      <div class="w-full text-center">
        <a
          :class="`${post.page.button.color} my-20 self-center shadow-xl text-xl rounded-full px-6 py-2 uppercase`"
          :href="post.page.button.link"
          target="_blank"
        >{{ post.page.button.text }}</a>
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
          content: this.post.title
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.page.seo.metaDescription
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.post.page.seo.metaWebsiteName
        },
        {
          hid: "og:url",
          name: "og:url",
          content: this.post.page.seo.metaWebsiteUrl
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.post.page.seo.metaImage
        },
        {
          hid: "og:type",
          name: "og:type",
          content: this.post.page.seo.metaType
        },
        {
          hid: "og:locale",
          name: "og:locale",
          content: this.post.page.seo.metaLanguage
        }
      ]
    };
  }
})
export default class BlogPost extends Vue {
  post: Post = this.$store.state.posts.find(
    (post: Post) => post.slug === this.params()
  );
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

<template>
  <article class="post" :class="post.slug">
    <section class="header">
      <div
        class="header-img h-auto bg-fixed bg-left-top bg-cover bg-center"
        :lazy-background="post.P_headerImg"
      >
        <div class="header-img-text w-full p-8 w-2/3 p-16 md:w-1/2 md:p-16 lg:p-20">
          <h1
            class="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-image_text uppercase"
          >{{ post.P_headerImgText }}</h1>
          <P class="text-sm sm:text-xl text-bg-grey">By Laundrop</P>
        </div>
      </div>
    </section>

    <div class="flex items-center bg-image_text row-span-2 p-3">
      <div
        class="author-img h-20 w-20 sm:h-32 sm:w-32 bg-center bg-cover rounded-full mx-10"
        :lazy-background="post.P_authorImg"
      ></div>

      <div class="author-text text-white uppercase">
        <p>{{ post.P_authorTitle }}</p>
        <p>{{ post.P_authorName }}</p>
        <p>{{ post.publishedDate }}</p>
      </div>
    </div>

    <section class="px-6 md:px-10 lg:px-20 pt-4">
      <div class>
        <h1 class="text-3xl text-image_text uppercase">{{ post.P_markdownTitle1 }}</h1>
        <div class="text-lg markdown" v-lazy-load="$md.render(post.P_markdown1)" />
      </div>
      <div
        class="content-img bg-contain bg-no-repeat md:bg-cover bg-center flex justify-center items-center my-6 md:my-16 text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl text-white uppercase"
        :lazy-background="post.P_ContentImg"
      >{{ post.P_ContentImgText }}</div>
      <!-- :data-style="
          `background-image:linear-gradient(#0e0d0d48, #0e0d0d48),url(${post.P_ContentImg})`
        "
      v-lazy-load-->
      <div class="flex flex-col">
        <h1 class="text-3xl text-image_text uppercase">{{ post.P_markdownTitle2 }}</h1>
        <div class="text-lg markdown" v-lazy-load="$md.render(post.P_markdown2)" />
        <a
          class="my-20 self-center bg-button text-xl text-white rounded-full px-6 py-2 uppercase shadow-xl"
          :href="post.P_button_link"
          target="_blank"
        >{{ post.P_button_name }}</a>
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
          content: this.post.seoDescription
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: this.post.seoWebsiteName
        },
        {
          hid: "og:url",
          name: "og:url",
          content: this.post.seoWebsiteUrl
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.post.seoMetaImage
        },
        {
          hid: "og:type",
          name: "og:type",
          content: this.post.seoType
        },
        {
          hid: "og:locale",
          name: "og:locale",
          content: this.post.seoLanguage
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
.header-img,
.content-img {
  height: 60vh;
}
</style>

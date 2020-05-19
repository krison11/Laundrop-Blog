declare global {
  interface Window {
    __NUXT__: { state: RootState };
  }
}


interface Preview {
  title: string;
  excerpt: string;
  image: string;
}

interface Hero {
  image: string;
  text: string;
  color: string;
}
interface Author {
  image: string;
  title: string;
  name: string;
  publishDate: string;
}

interface Button {
  color: string;
  text: string;
  link: string;
}

interface SEO {
  metaWebsiteName: string;
  metaWebsiteUrl: string;
  metaDescription: string;
  metaImage: string;
  metaType: string;
  metaLanguage: string;
}

interface Page {
  hero: Hero;
  button: Button;
  author: Author;
  markdown: string;
  seo: SEO;
}

interface Post {
  preview: Preview;
  page: Page;
  slug: string;
  // title: string;
  // excerpt: string;
  // image: string;
  // P_headerImg: string;
  // P_headerImgText: string;
  // P_authorImg: string;
  // P_authorTitle: string;
  // P_authorName: string;
  // publishedDate: string;
  // P_markdownTitle1: string;
  // P_markdown1: string;
  // P_ContentImg: string;
  // P_ContentImgText: string;
  // P_markdownTitle2: string;
  // P_markdown2: string;
  // P_button_name: string;
  // P_button_link: string;
  // seoWebsiteName: string;
  // seoWebsiteUrl: string;
  // seoDescription: string;
  // seoMetaImage: string;
  // seoType: string;
  // seoLanguage: string;
}



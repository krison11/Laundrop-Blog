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
}



declare global {
  interface Window {
    __NUXT__: { state: RootState };
  }
}

interface Post {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  P_headerImg: string;
  P_headerImgText: string;
  P_authorImg: string;
  P_authorTitle: string;
  P_authorName: string;
  publishedDate: string;
  P_markdownTitle1: string;
  P_markdown1: string;
  P_ContentImg: string;
  P_ContentImgText: string;
  P_markdownTitle2: string;
  P_markdown2: string;
  P_button_name: string;
  P_button_link: string;
  seoWebsiteName: string;
  seoWebsiteUrl: string;
  seoDescription: string;
  seoMetaImage: string;
  seoType: string;
  seoLanguage: string;
}



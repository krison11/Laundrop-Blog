import { Configuration } from '@nuxt/types';
import fg from 'fast-glob';
import meta from './app/content/seoLandingPage/meta.json';


const nuxtConfig: Configuration = {
  /*
   ** Headers of the page
   ** Are you wondering how to make your content more clickable, shareable, and      noticeable on social media?
   ** Open Graph meta tags are the solution.
   */
  head: {
    title: 'Laundrop Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: meta.seoTitle,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: meta.seoDescription,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: meta.seoWebsiteUrl,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: meta.seoWebsiteName,
      },

      {
        hid: 'og:image',
        property: 'og:image',
        content: meta.seoMetaImage,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: meta.seoType,
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: meta.seoLanguage,//sv_SVENSKA
      },
    ],
    // Consider adding preconnect or dns- prefetch resource hints to establish early connections to important third- party origins. <link rel="preconnect" > informs the browser that your page intends to establish a connection to another origin, and that you'd like the process to start as soon as possible.
    link: [
      {
        rel: 'preconnect',
        href: 'www.somewhere....',
      },
    ],
  },

  // adding the icon on the tab
  pwa: {
    icon: {
      iconSrc: './app/static/images/L_icon.png'
    }
  },
  // setting title and description to false?
  meta: {
    ogTitle: false,
    ogDescription: false,
  },

  // defining my source directory
  srcDir: 'app/',


  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],

  // generate an html pages for all my pages and slugs
  generate: {
    subFolders: false,

    routes: [
      ...fg.sync(['./app/content/blog/**.json'])
        .map((url) => ({
          route: url.replace(/^.\/app\/content(\/blog\/preview)?|.json$/gi, ''),
          payload: require(url),
        })),
    ],
  },



  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources', '@nuxtjs/markdownit', 'nuxt-lazy-load',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faDollarSign', 'faBars', 'faChevronUp'],

        }
      ]
    }]
  ],


  purgeCSS: {
    whitelist: [/.*-(enter|enter-active|enter-to|leave|leave-active|leave-to)/],
  },

  // markdown config
  markdownit: {
    preset: 'default',

    injected: true,

    // Convert '\n' in paragraphs into <br>
    breaks: true,

    // Enable HTML tags in source
    html: true,

    // Enable some language-neutral replacement + quotes beautification
    typographer: true,
  },

  // Serve both, the modern bundle <script type="module"> and the legacy bundle <script nomodule> scripts,
  // also provide a <link rel="modulepreload"> for the modern bundle.
  // Every browser that understands the module type will load the modern bundle while older browsers fall back to the legacy (transpiled) one.
  ...(process.env.NODE_ENV === 'production' && {
    modern: 'client',
  }),

  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: false,
        ignoreNotFoundWarnings: true,
      },
    ],
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
};

export default nuxtConfig;

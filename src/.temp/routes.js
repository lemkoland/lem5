const c1 = () => import(/* webpackChunkName: "page--src-templates-word-press-post-tag-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\templates\\WordPressPostTag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-word-press-category-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\templates\\WordPressCategory.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-owoce-warzywa-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\owoce-warzywa.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-word-press-post-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\templates\\WordPressPost.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-malowanka-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\malowanka.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-krywulka-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\krywulka.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-inter-drag-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\inter-drag.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-garnki-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\garnki.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-posty-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\posty.vue")
const c10 = () => import(/* webpackChunkName: "page--src-pages-audio-player-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\audio-player.vue")
const c11 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\404.vue")
const c12 = () => import(/* webpackChunkName: "page--src-templates-word-press-page-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\templates\\WordPressPage.vue")
const c13 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\lukea\\Private\\lem5\\src\\pages\\Index.vue")

export default [
  {
    path: "/tag/:slug/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/cat/:slug/:page(\\d+)?/",
    component: c2
  },
  {
    path: "/owoce-warzywa/:page(\\d+)?/",
    component: c3
  },
  {
    path: "/play/:slug/",
    component: c4
  },
  {
    path: "/malowanka/:page(\\d+)?/",
    component: c5
  },
  {
    path: "/krywulka/:page(\\d+)?/",
    component: c6
  },
  {
    path: "/inter-drag/:page(\\d+)?/",
    component: c7
  },
  {
    path: "/garnki/:page(\\d+)?/",
    component: c8
  },
  {
    path: "/posty/",
    component: c9
  },
  {
    path: "/audio-player/",
    component: c10
  },
  {
    name: "404",
    path: "/404/",
    component: c11
  },
  {
    path: "/:slug/",
    component: c12
  },
  {
    name: "home",
    path: "/",
    component: c13
  },
  {
    name: "*",
    path: "*",
    component: c11
  }
]

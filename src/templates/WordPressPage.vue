<template>
  <Layout>
    <div class="in">
      <div class="inin">

      </div>
    </div>
    <div class="page-glass">


    <h1 v-html="$page.wordPressPage.title"/>
    <img
      v-if="$page.wordPressPage.featuredMedia"
      :src="$page.wordPressPage.featuredMedia.sourceUrl"
      :width="$page.wordPressPage.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPage.featuredMedia.altText"
    />
    <div v-html="$page.wordPressPage.content"/>
    </div>
  </Layout>
</template>

<page-query>
  query WordPressPage ($id: ID!) {
    wordPressPage(id: $id) {
      title
      path
      id
      content
      featuredMedia {
        sourceUrl
        altText
        mediaDetails {
          width
        }
      }
    }
    allWordPressPage {
      edges {
        node {
          title
          path
        }
      }
    }
    allWordPressPostTag {
      edges {
        node {
          title
          id
          path
        }
      }
    }
    allWordPressCategory (sortBy: "name", order: ASC) {
  edges {
    node {
      title
      id
      path
    }
  }
}
  }
</page-query>

<script>
import { TimelineLite, TweenMax, gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
gsap.registerPlugin(ScrollToPlugin );
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export default {
  metaInfo () {
    return {
      title: this.$page.wordPressPage.title
    }
  },
  mounted() {
    const tl = new TimelineLite();


        tl.to('.in', 1, {delay: 1.0,  clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', easing: 'easeOutQuint'}, '-=.5')
        .to('.header', 1.5, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', easing: 'easeOutQuint'});


    var color = ['#5d237a', '#d17fb4', '#505ce5', '#62e564', '#6121EB', '#8B00A1', '#834D9B',
    '#D04ED6', '#1CD8D2', '#93EDC7', '#EBB752', '#E16BEB', '#B5CCFF', '#1A3091', '#7594C9',
  '#784C39', '#B07156', '#AE605F', '#AB4E68', '#7F4357', '#533745', '#A8948A', '#3B302B',
'#9D9171', '#554B30', '#9E8234', '#998C69', '#4E4838', '#845440', '#845440', '#DB4F4F',
'#4B1A1A', '#473527', '#552600','#A87E5D' ];


    var c1 = Math.floor(Math.random() * color.length);
    var cca = color[c1];
    gsap.to('body', .7, { backgroundColor: cca});

    var c2 = Math.floor(Math.random() * color.length);
    var cca2 = color[c2];
    gsap.to('.in', .7, { backgroundColor: cca2});
  }
}
</script>

<style>
.page-glass img {
  width: auto;
  height: auto;
}

  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline-block;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    background-color: lightgray;
  }
  ul.list.categories li:after {
    content: ',';
    display: inline-block;
  }
  ul.list li:last-child:after {
    content: '';
  }
  .page-glass {

  /* From https://css.glass  */
  background: rgba(255, 255, 255, .03);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);
}
 @media screen and (orientation:landscape){
   .page-glass {
     max-width: 55rem;
     padding: 2em;
     font-size: 1.4em;
   }
 }
 @media screen and (orientation:portrait){
   .page-glass {
     max-width: 98vw;
     padding: 2vw;
     font-size: 1.2em;
   }
 }


</style>

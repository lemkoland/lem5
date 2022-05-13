<template>
  <Layout>
    <div class="in">
      <div class="inin">
        <g-image class="chow1" alt="ptak chowaniec naskicowany z konturem" src="~/assets/chowanec_z-konturem.svg" />
      </div>
    </div>

    <div class="oNas">


      <h3 class="powitanie">
      Сторінку, на котрій сте ся нашли,
      зрыхтувалисме з думком о нашых наймолодшых.
      Тота думка народила ся уж дост давно і росла разом з нашыма діточками.
      То власьні они найвеце помогли нам в створіню ЛЕМКОЛЯНДУ.
      <g-link to="/o-nas"> >>></g-link>
    </h3>
    <h3 class="powitanie">
      Storinku, na kotrij ste sia naszly,
      zrychtuwalysme z dumkom o naszych najmołodszych.
      Tota dumka narodyła sia uż dost dawno i rosła razom z naszyma ditoczkamy.
      To właśni ony najwece pomohly nam w stworiniu LEMKOLANDU.
      <g-link to="/o-nas"> >>></g-link>
    </h3>
    <h3 class="powitanie">Strona, na której się znaleźliście,
      została stworzona z myślą o naszych najmłodszych.
      Pomysł ten narodził się już dość dawno i rósł razem z naszymi dziećmi.
      To właśnie one pomogły nam najwięcej w stworzeniu LEMKOLANDU.
      <g-link to="/o-nas"> >>></g-link>

    </h3>
    </div>

    <h2 class="h2hr">Zobacz nasze ostatnie komunikaty:</h2>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node"/>

      </li>
    </ul>

    <h2 class="h2hr">Wybierz coś dla siebie:</h2>
    <ul class="tag-list2">
      <li v-for="edge in $page.allWordPressPostTag.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          <p>{{edge.node.title}}</p>
        </g-link>
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
  </Layout>
</template>

<page-query>

  query Home ($page: Int) {
    allWordPressPost (page: $page, perPage: 3)  {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          excerpt
          tags {
            title
            path
            id
          }
          content
          featuredMedia {
            sourceUrl
            altText
            mediaDetails {
              width
            }
          }
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
    allWordPressPostTag (sortBy: "name", order: ASC) {
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
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import { TimelineLite, TweenMax, gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
gsap.registerPlugin(ScrollToPlugin );
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);





export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Lemkiwska storinka dla dity'
  },
  mounted() {
    var color = ['#5d237a', '#d17fb4', '#505ce5', '#62e564', '#6121EB', '#8B00A1', '#834D9B',
    '#D04ED6', '#1CD8D2', '#93EDC7', '#EBB752', '#E16BEB', '#B5CCFF', '#1A3091', '#7594C9',
  '#784C39', '#B07156', '#AE605F', '#AB4E68', '#7F4357', '#533745', '#A8948A', '#3B302B',
'#9D9171', '#554B30', '#9E8234', '#998C69', '#4E4838', '#845440', '#845440', '#DB4F4F',
'#4B1A1A', '#473527', '#552600','#A87E5D' ];


var b1 = Math.floor(Math.random() * color.length);
var bb1 = color[b1];
var b2 = Math.floor(Math.random() * color.length);
var bb2 = color[b2];
var b3 = Math.floor(Math.random() * color.length);
var bb3 = color[b3];
var b4 = Math.floor(Math.random() * color.length);
var bb4 = color[b4];
var b5 = Math.floor(Math.random() * color.length);
var bb5 = color[b5];
var b6 = Math.floor(Math.random() * color.length);
var bb6 = color[b6];
var b7 = Math.floor(Math.random() * color.length);
var bb7 = color[b7];
var b8 = Math.floor(Math.random() * color.length);
var bb8 = color[b8];


    const tl = new TimelineLite();
        const posts = document.querySelectorAll(".post");
        gsap.from('.chow1', 3.2, {opacity: 0})
    tl.to('.inin', .6, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', easing: 'elastic'})
    .to('.in', .3, { backgroundColor: bb1})
    .to('.in', .3, { backgroundColor: bb2})
    .to('.in', .3, { backgroundColor: bb3})
    .to('.in', .3, { backgroundColor: bb4})
    .to('.in', .3, { backgroundColor: bb5})
    .to('.in', .3, { backgroundColor: bb6})
    .to('.in', .3, { backgroundColor: bb7})
    .to('.in', .3, { backgroundColor: bb8})
    .to('.in', .6, {delay: .6,  clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', easing: 'easeOutQuint'}, '-=.5')
    .to('.header', 1.5, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', easing: 'easeOutQuint'})
    .to(posts, .7, {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', easing: 'easeOutQuint', stagger: 0.4}, '-=.7');




    var c1 = Math.floor(Math.random() * color.length);
    var cca = color[c1];
    gsap.to('body', .7, { backgroundColor: cca});

    const boxAnimation4 = gsap.to('body', .7, { backgroundColor: cca});

    ScrollTrigger.create({
    	animation: boxAnimation4,
      start: "bottom center",
    	trigger: ".trigerPost"
    });


  }
}
</script>
<style>
.h2hr {
  text-align: center;
}
.powitanie a {
  text-decoration: none;
}
  .post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2vw;
    flex: 1 1 1;
  }
  .in {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0; left: 0;
    background-color: #202020;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    z-index: 122;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .inin {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
    z-index: 122;
  }

  .header, .post {
    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
    z-index: 7;
  }

   h1 {
     margin: 10vh auto;
   }
   .oNas p, .oNas h3 {
     /* From https://css.glass  */
     background: rgba(255, 255, 255, .03);
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
     backdrop-filter: blur(4.5px);
     -webkit-backdrop-filter: blur(4.5px);
     border: 1px solid rgba(255, 255, 255, 0.32);
     padding: 1rem;
     max-width: 55rem;
   }
   @media screen and (orientation:portrait) {
     .oNas p, .oNas h2 {
       font-size: 1.2em;
       padding: 1rem;
     }
     .powitanie {
       font-size: 1.8em;
       max-width: 98%;
       padding: 1vw;
     }
     .tag-list2 li {
       padding: 1rem;
       margin:0;
       border-radius: 50%;
       width: 6rem;
       height: 6rem;
       text-align: center;
       list-style: none;
       font-size: 1.2rem;
       transition: .3s;
       box-shadow: 0 4px 30px rgba(255, 255, 255, 0.0);
     }
     .tag-list2 {
       max-width: 90vw;
     }
    }
   @media screen and (orientation:landscape) {
     .powitanie {
       font-size: 2.1em;
       line-height: 1.6;
       max-width: 42%;
     }
     .oNas {
       display: flex;
       max-width: 90vw;
       gap: 2rem;
     }
     .tag-list2 li {
       padding: 2rem;
       margin:0;
       border-radius: 50%;
       width: 8rem;
       height: 8rem;
       text-align: center;
       list-style: none;
       font-size: 2rem;
       transition: .3s;
       box-shadow: 0 4px 30px rgba(255, 255, 255, 0.0);
     }
   }




   .tag-list2 {

     display: flex;
     flex-shrink: 2;
     flex-wrap: wrap;
     min-height: 10vw;
     margin-bottom: 20vw;
     padding: 6vw;
     gap: 1rem;
       font-family: 'breamcatcher-regular', sans-serif;

     /* From https://css.glass  */
     background: rgba(255, 255, 255, .03);
     backdrop-filter: blur(4.5px);
     -webkit-backdrop-filter: blur(4.5px);
     border: 1px solid rgba(255, 255, 255, 0.32);
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    .tag-list2 li:hover {
      box-shadow: 0 4px 30px rgba(255, 255, 255, 0.2);
    }
    .tag-list2 li a {
      text-decoration: none;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      color: #fff!important;
      font-size: 1.2em;

    }

         .tag-list2 li:nth-child(1) {
    filter: brightness(85%);
           background-color: #784C39;

         }
         .tag-list2 li:nth-child(1):hover {
              background-color: #784234;
              color: 202020;

              box-shadow: 0 4px 30px rgba(255, 255, 255, 0.1);
         }
         .tag-list2 li:nth-child(2)  {

                         background-color: #B07156;

         }

         .tag-list2 li:nth-child(2):hover {
              background-color: #B07156;
              transition: .3s;

         }
         .tag-list2 li:nth-child(3) {
        background-color: #AE605F;
         }
         .tag-list2 li:nth-child(3):hover {
              background-color: #AE605F;
              transition: .3s;
         }
         .tag-list2 li:nth-child(4)  {

           background-color: #AB4E68;
         }
         .tag-list2 li:nth-child(4):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(5)  {

           background-color: #7F4357;
         }
         .tag-list2 li:nth-child(5):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(6) {

           background-color: #533745;
         }
         .tag-list2 li:nth-child(6):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(7)  {

           background-color: #A8948A;
         }
         .tag-list2 li:nth-child(7):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(8) {
           background-color: #3B302B;
         }
         .tag-list2 li:nth-child(8):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(9) {
           background-color: #9D9171;
         }
         .tag-list2 li:nth-child(9):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(10) {
           background-color: #554B30;
         }
         .tag-list2 li:nth-child(10):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(11)  {
           background-color: #9E8234;
         }
         .tag-list2 li:nth-child(11):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(12)  {
           background-color: #998C69;
         }
         .tag-list2 li:nth-child(12):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(13) {
           background-color: #4E4838;
         }
         .tag-list2 li:nth-child(13):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(14) {
           background-color: #845440;
         }
         .tag-list2 li:nth-child(14):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(15) {
           background-color: #845480;
         }
         .tag-list2 li:nth-child(15):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(16)  {
           background-color: #DB4F4F;
         }
         .tag-list2 li:nth-child(16):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(17)  {
           background-color: #4B1A1A;
         }
         .tag-list2 li:nth-child(17):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(18)  {
           background-color: #473527;
         }
         .tag-list2 li:nth-child(18):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(19)  {
           background-color: #552600;
         }
         .tag-list2 li:nth-child(19):hover {
              transition: .3s;
         }
         .tag-list2 li:nth-child(20)  {
           background-color: #A87E5D;
         }
         .tag-list2 li:nth-child(20):hover {
              transition: .3s;
         }


</style>

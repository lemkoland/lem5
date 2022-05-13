<template>
  <Layout>
    <h1>{{ $page.wordPressPostTag.title }} </h1>

    <ul class="post-list">
      <li v-for="{ node } in $page.wordPressPostTag.belongsTo.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.wordPressPostTag.belongsTo.pageInfo"/>
  </Layout>
</template>

<page-query>
query WordPressPostTag ($id: ID!, $page: Int) {
  wordPressPostTag(id: $id) {
    title
    belongsTo(page: $page, perPage: 100) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on WordPressPost {
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
  metaInfo () {
    return {
      title: this.$page.wordPressPostTag.title
    }
  },
  mounted() {
    const tl = new TimelineLite();
    const posts = document.querySelectorAll(".post")
    tl.from('.inin', 2, {delay: .6, clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'elastic' })
    .to('.inin', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'elastic'})
    .to('.in', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'}, '-=.5')
    .from('.tyt', 1, { opacity: 0})
    .from('.header', 1, { clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)', easing: 'easeOutQuint'},'-=3.5')
    .to(posts, .7, {opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', easing: 'easeOutQuint', stagger: 0.4}, '-=.7');


    var sections = gsap.utils.toArray('.trigerPost');

    sections.forEach((section) => {
      var color = ['#5d237a', '#d17fb4', '#505ce5', '#62e564', '#6121EB', '#8B00A1', '#834D9B',
      '#D04ED6', '#1CD8D2', '#93EDC7', '#EBB752', '#E16BEB', '#B5CCFF', '#1A3091', '#7594C9',
    '#784C39', '#B07156', '#AE605F', '#AB4E68', '#7F4357', '#533745', '#A8948A', '#3B302B',
  '#9D9171', '#554B30', '#9E8234', '#998C69', '#4E4838', '#845440', '#845440', '#DB4F4F',
  '#4B1A1A', '#473527', '#552600','#A87E5D' ];


      var c1 = Math.floor(Math.random() * color.length);
      var cca = color[c1];

      gsap.to('body', .3, { backgroundColor: cca,

        scrollTrigger: {
          start: "bottom center",
        	trigger: section,
          scrub: true
        }
    });
  //   gsap.to('.post img', .3, { clipPath: 'circle(150% at 100% 100%)',
  //
  //     scrollTrigger: {
  //       start: "bottom center",
  //       trigger: section
  //     }
  // });

    })








  }
}
</script>
<style>
.post-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2vw;
  flex: 1 1 1;
}

.post-list li{
  margin:0;
  padding: 0;
  border:0;
}






</style>

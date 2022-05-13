<template>
  <Layout>


    <div class="dragaj" id="dragaj">
      <div class="reload" @click="wzorek" >
        <g-image class="reload" alt="reload" src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/reload.svg"  />
      </div>
      <div class="wzorek">

      </div>
      <div class="garnki-ruchome">
        <g-image class="draggable garnek garnek5" alt="garnek" src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/ga5.svg"  />
        <g-image class="draggable garnek garnek4" alt="garnek" src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/ga4.svg"  />
        <g-image class="draggable garnek garnek3" alt="garnek" src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/ga3.svg"  />
        <g-image class="draggable garnek garnek2" alt="garnek" src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/ga2.svg"  />
        <g-image class="draggable garnek garnek1" alt="garnek" src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/ga1.svg"  />

      </div>






     </div>

  </Layout>
</template>

<page-query>

  query Home ($page: Int) {
    allWordPressPost (page: $page, perPage: 100) @paginate {
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
import interact from 'interactjs'
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import { TimelineLite, TweenMax, gsap } from 'gsap';






export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Lemkiwska storinka dla dity'
  },
  data() {
    return {
       i: 0,
       z: 0,
       poka:'nic',
       pokapoka: 'nicnic'
    }
  },
  methods: {
wzorek() {
    var wzorek1 = Math.floor(Math.random() * 5);
    var wzorek2 = wzorek1 + 1
    var backwzorek = 
      gsap.to(draggableElement, 2, { opacity: 0 });
}



  },
  mounted() {

    // target elements with the "draggable" class
    interact('.draggable')
      .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
          // call this function on every dragmove event
          move: dragMoveListener
        }
      })

          function dragMoveListener (event) {
            var target = event.target
            // keep the dragged position in the data-x/data-y attributes
            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

            // translate the element
            target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

            // update the posiion attributes
            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)
          }

          // this function is used later in the resizing and gesture demos
          window.dragMoveListener = dragMoveListener


    /* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '.owoce',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    // event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    draggableElement.textContent = 'Dragged in'


  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget
    event.relatedTarget.textContent = 'Dropped'
    gsap.to(draggableElement, 2, { opacity: 0 })


  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})



    /* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone2').dropzone({
  // only accept elements matching this CSS selector
  accept: '.warzywa',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    // event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    draggableElement.textContent = 'Dragged in'
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget
    event.relatedTarget.textContent = 'Dropped'
    gsap.to(draggableElement, 2, { opacity: 0 });

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

  }
}
</script>

<style scoped>
.dragany {
  width: 15em;
  height: 15em;
  margin: 0;
  background-color: #29e;
  color: white;
  border-radius: 0.75em;
  padding: 0;
  touch-action: none;
  user-select: none;
  transform: translate(0px, 0px);
}
#outer-dropzone, #outer-dropzone2 {
  height: 340px;
}

#inner-dropzone, #inner-dropzone2 {
  height: 280px;
  width: 80%;
}

.dropzone, .dropzone2 {

  border: dashed 4px transparent;
  border-radius: 4px;
  margin: 10px auto 30px;
  padding: 10px;
  width: 30%;
  transition: background-color 0.3s;
}
#outer-dropzone2 {
  background-image: url('https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/warzywaTu.svg');
  background-repeat: no-repeat;
}
#outer-dropzone {
  background-image: url('https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/owoceTu.svg');
  background-repeat: no-repeat;
}


.drop-active {
  border-color: #aaa;
}

.drop-target {
  background-color: transparent;

}
.dragaj {
  position: fixed;
  top: 0; left: 0;



  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url("https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/tlo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}
.garnki-ruchome {
  background-image: url("https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/skrzynia.svg");
  background-repeat: no-repeat;
  background-position:  top;
  padding: 0 0 4rem 0;
  min-width: 15rem;
  min-height: 40rem;
}




@media only screen and (orientation: landscape) {
  .garnek {
    max-width: 16vw;
  }
  .wzorek {
    width: 40vw;
    height: 40vh;
    position: absolute;
    top: 0; right: 0;
    background-image: url('https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/wzor_1.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
  .reload {
    position: absolute;
    top: 0; left: 0;
    width: 10vw;
    height: 10vw;
  }

}
@media only screen and (orientation: portrait) {
  .garnek {
    max-width: 26vw;
  }
  .wzorek {
    width: 100vw;
    height: 24vh;
    position: absolute;
    bottom: 0; right: 0;
    background-image: url('https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/wzor_1.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
  .reload {
    position: absolute;
    top: 3vh; left: 3vh;
    width: 10vh;
    height: 10vh;
  }
}
</style>

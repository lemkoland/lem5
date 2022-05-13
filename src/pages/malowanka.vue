<template>
  <Layout>

    <div class="maluj">
      <canvas class="rainbow-pixel-canvas"></canvas>


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
  mounted() {
    var pixelSize = 16

interact('.rainbow-pixel-canvas')
  .draggable({
    max: Infinity,
    maxPerElement: Infinity,
    origin: 'self',
    modifiers: [
      interact.modifiers.snap({
        // snap to the corners of a grid
        targets: [
          interact.snappers.grid({ x: pixelSize, y: pixelSize })
        ]
      })
    ],
    listeners: {
      // draw colored squares on move
      move: function (event) {
        var context = event.target.getContext('2d')
        // calculate the angle of the drag direction
        var dragAngle = 180 * Math.atan2(event.dx, event.dy) / Math.PI

        // set color based on drag angle and speed
        context.fillStyle =
          'hsl(' +
          dragAngle +
          ', 46%, ' +
          (14 + Math.min(event.speed / 1000, 1) * 50) +
          '%)'

        // draw squares
        context.fillRect(
          event.pageX - pixelSize / 2,
          event.pageY - pixelSize / 2,
          pixelSize,
          pixelSize
        )
      }
    }
  })
  // clear the canvas on doubletap
  .on('doubletap', function (event) {
    var context = event.target.getContext('2d')

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    resizeCanvases()
  })

function resizeCanvases () {
  [].forEach.call(document.querySelectorAll('.rainbow-pixel-canvas'), function (
    canvas
  ) {
    delete canvas.width
    delete canvas.height

    var rect = canvas.getBoundingClientRect()

    canvas.width = rect.width
    canvas.height = rect.height
  })
}

resizeCanvases()

// interact.js can also add DOM event listeners
interact(window).on('resize', resizeCanvases)
  }
}
</script>

<style scoped>
.rainbow-pixel-canvas {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0; left: 0;
  margin: 0;
  padding: 0;
box-sizing: border-box;
background: white;

user-select: none;
touch-action: none;
}
p {
text-align: center;
font-family: monospace;
font-size: 1.25rem;
}
</style>

<template>
  <Layout>

    <div class="dragaj" id="dragaj" >
      <div class="draggable warzywa dragany">
        <img src="http://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/05-czosnek.svg" /></div>
      <div class="draggable owoce dragany">
        <img src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/01-arbuz.svg" /></div>
      <div class="draggable warzywa dragany">
        <img src="http://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/02-buraki.svg" /></div>
      <div class="draggable warzywa dragany">
        <img src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/06-fasola.svg" /></div>
      <div class="draggable owoce dragany">
        <img src="http://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/10-maliny.svg" /></div>
      <div class="draggable owoce dragany">
        <img src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/05-gruszka.svg" /></div>
      <div class="draggable owoce dragany">
        <img src="http://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/07-jafyry.svg" /></div>
      <div class="draggable warzywa dragany">
        <img src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/07-groch.svg" /></div>
      <div class="draggable owoce dragany">
        <img src="http://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/09-limon-cytryna.svg" /></div>
      <div class="draggable owoce dragany">
        <img src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/13-winogron.svg" /></div>
      <div class="draggable warzywa dragany">
        <img src="http://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/08-kalafior.svg" /></div>
      <div class="draggable owoce dragany">
        <img src="https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/12-truskawki.svg" /></div>

<div class="dropzony">
  <div id="outer-dropzone" class="dropzone">
<div id="inner-dropzone" class="dropzone"></div>
</div>
  <div id="outer-dropzone2" class="dropzone2">
<div id="inner-dropzone2" class="dropzone2"></div>
</div>
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
      tablica: ["01-bandurky", "01-arbuz", "02-buraki", "02-banany", "03-cebula", "03-czeresnie",
       "04-chrzan", "04-agrest", "05-czosnek", "05-gruszka", "06-fasola", "06-jablko", "07-groch", "07-jafyry",
       "08-kalafior", "08-poziomki", "09-kompery", "09-limon-cytryna", "10-marchew", "10-maliny",
       "11-ogorki", "11-sliwki", "12-papryka", "12-truskawki", "13-pietruszka", "13-winogron",
       "14-pomidory", "14-wisnie", "15-salata"],
       i: 0,
       z: 0,
       poka:'nic',
       pokapoka: 'nicnic'
    }
  },
  methods: {
    nowe() {
      this.poka = 'działa'
      let x = Math.floor(Math.random() * tablica.length);
      let nazwa = this.tablica[x];
      let obrazek = '<img src="http://lem5.sukabilgorajska.pl/uploads/2022/03/04-agrest.svg" class="draggable owoce dragany" />';
      this.pokapoka = obrazek
      // this.pokapoka = nazwa;
      this.i++;
      this.z++;
      const nowy = document.createElement("div");
      nowy.className = 'draggable owoce dragany';
      // let obrazek = '<img src=' +'http://lem5.sukabilgorajska.pl/uploads/2022/03/' + '04-agrest' + '.svg' + 'class=' + 'draggable owoce dragany' + '/>'
      nowy.innerHTML = obrazek
      const target = document.querySelector('.nowe');
      target.appendChild(nowy);
    },

    losowanko() {
      if (i === 10) {

        this.i = 0;
        this.z = 10;
      }

      let x = Math.floor(Math.random() * tablica.length);
      let nazwa = tablica[x];
      this.i++;
      this.z++;
      if (x % 2 === 0) {
        const nowy = document.createElement("div");
        nowy.className = 'draggable owoce dragany';
        let obrazek = '<img src=' +'http://lem5.sukabilgorajska.pl/uploads/2022/03/' + nazwa + '.svg' + 'class=' + 'draggable owoce dragany' + '/>'
        nowy.innerHTML = obrazek
        const target = document.querySelector('.nowe');
        target.appendChild(nowy);





      }
      else {
        $("#odp").prepend("<img src='http://lem1.sukabilgorajska.pl/uploads/2017/03/owoce/" + nazwa + ".svg' style='z-index:" + z + "' class='owoce nazwa ui-widget-content'/>");
        $("#gra-calak").append("<audio autoplay ><source src='http://lem1.sukabilgorajska.pl/uploads/2017/03/owoce/" + nazwa + ".mp3' type='audio/mpeg'></audio>" );
        owoce();
      }

    } // koniec losowanko

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
    // dropzoneElement.classList.add('drop-target')
    // draggableElement.classList.add('can-drop')
    // draggableElement.textContent = 'Dragged in'


  },
  ondragleave: function (event) {
    // remove the drop feedback style
    // event.target.classList.remove('drop-target')
    // event.relatedTarget.classList.remove('can-drop')
    // event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget
    // event.relatedTarget.textContent = 'Hurra'
    gsap.to(draggableElement, .7, { opacity: 0 })


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
    // dropzoneElement.classList.add('drop-target')
    // draggableElement.classList.add('can-drop')
    // draggableElement.textContent = 'Dragged in'
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    // event.target.classList.remove('drop-target')
    // event.relatedTarget.classList.remove('can-drop')
    // event.relatedTarget.textContent = 'Dragged out'
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget
    // event.relatedTarget.textContent = 'Hurra'
    gsap.to(draggableElement, .7, { opacity: 0 });

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
  /* From https://css.glass  */
  background: rgba(255, 255, 255, ,7);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);

  padding: 0;
  touch-action: none;
  user-select: none;
  transform: translate(0px, 0px);
  position: absolute;
  top: 40vh; left: 40vw;
  border-radius: 50%;
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
  margin: 0;
  padding: 10px;
  min-width: 30%;
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
  overflow-y: scroll;

  z-index: 39;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url("https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/plansza-gra-owoce-warzywa.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

@media only screen and (orientation: landscape) {
  .dropzony {
      display: flex;
      gap: 4rem;
      flex-shrink: 0;
      justify-content: space-between;


      margin: 20% 0 ;
  }
}
@media only screen and (orientation: portrait) {
  .dropzony {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      width: 100vw;
      height: 100vh;


  }
}
</style>

<template>
  <div class="layout">
    <div class="wzorki"></div>
    <!-- <g-image class="menu-icon" v-if="menu" alt="menu" src="~/assets/menu.png"  @click="pokaMenu" /> -->
    <g-link to="/menu/"><g-image class="menu-icon" alt="menu" src="~/assets/menu.png" /></g-link>
    <!-- <g-link to="/audio-player/"><g-image class="audio-icon" alt="menu" src="~/assets/play.svg" /></g-link> -->


    <header class="header">
      <div class="logosy">
        <g-link to="/posty/"><g-image class="chow" alt="ptak chowanec naskicowany z konturem" src="~/assets/chowanec_z-konturem.svg" width="180"/>
<g-image class="napis-lemkoland" alt="napis lemkoland" src="~/assets/lemkoland-napis.svg" width="180"/></g-link>
</div>


    </header>

    <slot/>

<footer class="footer">
  <div class="">
    <p><span>Лемколянд - лемківска сторінка для діти</span></p>
    <p><span>© 2014 – 2022 Fundacja Stara Droga. <br>Wszelkie prawa zastrzeżone.</span></p>
  </div>
<div class="">
  <p class="zrealizowano">Zrealizowano dzięki dotacji <br>Ministra Spraw Wewnętrznych i Administracji</p>
  <g-image alt="napis lemkoland" src="~/assets/MSWiA-logo-B.svg" /></g-link>
</div>

</footer>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  background-color: #202020;
  color: #f3f3f3;
  margin: 0;
  padding: 0;
  max-width: 100vw;
  overflow-x: hidden;

}
@font-face {
	font-family: 'arina';
	src: url('../assets/fonts/arina.eot');
	src: local('☺'), url('../assets/fonts/arina.woff') format('woff'),
  url('../assets/fonts/arina.ttf') format('truetype'),
  url('../assets/fonts/arina.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'breamcatcher-regular';
	src: url('../assets/fonts/breamcatcher-regular.eot');
	src: local('☺'), url('../assets/fonts/breamcatcher-regular.woff') format('woff'),
  url('../assets/fonts/breamcatcher-regular.ttf') format('truetype'),
  url('../assets/fonts/breamcatcher-regular.svg') format('svg');
	font-weight: normal;
	font-style: normal;
}
h1, h2, h3, h4 {
  font-family: 'breamcatcher-regular', sans-serif;
}
p span {
  font-family: 'breamcatcher-regular', sans-serif;
}


a {
  color: #f3f3f3;
}

.zrealizowano  {
  font-size: 0.6em ;
}

.pages-list {
  display: flex;

}
.pages-list li {
  list-style: none;
  margin: 0 1vw;
}
.tag-list {
  display: flex;

}
.tag-list li {
  list-style: none;
  margin: 0 1vw;
  font-family: 'breamcatcher-regular', sans-serif;
  font-size: 1.8rem;
}
img {
  max-width: 100%;
}



.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
}

.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
  padding: 1em 0;
}
iframe {
  width: 100%!important;

}
.wp-block-embed, .wp-block-image {
  margin: 0;
  padding: 0!important;
  height: auto!important;
}

.pages-list {
  display: flex;
  flex-wrap: wrap;
}
.logosy {
  display: flex;
  flex-wrap: nowrap;
}
.wzorki {
  background-color: transparent;

  background-attachment: fixed;
  background-position: right;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0; left: 0;
  z-index: -6;
}
.cat-list li {
  list-style: none;
}


.cat-list a, .pages-list a {
  color: #000;
}
.menu-icon {
  width: 70px!important;
  height: 70px!important;
  margin: 1rem;
  position: fixed;
  right: 1rem;
  top: 1rem;
  z-index: 23;
}
.audio-icon {
  width: 70px!important;
  height: 70px!important;
  margin: 1rem;
  position: fixed;
  right: 7rem;
  top: 1rem;
  z-index: 23;
}
 .cancel-icon {
  width: 70px!important;
  height: 70px!important;
  margin: 1rem;
  position: fixed;
  right: 1rem;
  top: 1rem;
  transform: rotate(360deg);
  z-index: 44;
}
.nav h2 {
  color: #000!important;
}
.nav li {
  text-decoration: none;
}
.nav li a {
  color: #000;

}
.navLinki li {
  font-family: 'breamcatcher-regular', sans-serif;
  list-style: none;
}
.navLinki li a {
  text-decoration: none;

}






@media screen and (orientation:landscape) {

  .layout {
    max-width: 80vw;
    margin: 0 auto;
    padding: 0;

    /* padding-left: 20px;
    padding-right: 20px; */
  }
  h1 {
    /* display: none; */
    text-align: center;
    font-size: 4.4em;
    margin: 10vh auto;
  }
  .footer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5vw;
    background-color: #202020;
    color: #f3f3f3;
    width: 100vw;
    margin: 0 0 0 -10vw;
    padding: 0;

  }
  .footer div {

    margin: 0;
    padding: 2vw;
    text-align: center;
  }
  .footer p span {
    font-size: 1.6em;
  }
  .footer img {
    margin: 0 4vh;
    max-width: 50%;
  }
  .navLinki li {
    font-size: 3.4em;
    margin: .3em 0;
    height: 1em;


  }

 }
 @media screen and (orientation:portrait) {
   .napis-lemkoland {
     display: none;
   }
   .layout {
     max-width: 100vw;
     margin: 0 auto;
     padding: 0;

   }
   h1 {
     font-size: 2.6em;
     margin: 0;
     padding: 0;
     text-align: center;
   }
   .wzorki {
     display: none;
   }
   .footer {
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     gap: 5vw;
     background-color: #202020;
     color: #f3f3f3;

   }
   .footer div {
     width: 90vw;
     margin: 0;
     padding: 2vw;
     text-align: center;
   }
   .footer p span {
     font-size: 1.2em;
   }
   .footer img {
     margin: 0 4vh;
     max-width: 80vw;
   }
   .navLinki li {
     font-size: 2.8vh ;
     margin: .6em 0;
     padding-left: 1em;
     height: 1em;;
   }

  }


</style>
<page-query>
  {
   allWordPressPage {
     edges {
       node {
         id
         path
         title
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
 }
</page-query>
<script>
import { TimelineLite, TweenMax, gsap } from 'gsap';

export default {
  data() {
    return {
      sciezkaWzorkow: 'czytaj',
      menu: true
    }
  },
  mounted() {
    var wl = Math.floor(Math.random() * 27);
    var wlNR = wl + 1;
    var wlx = "https://lem5.sukabilgorajska.pl/wp-content/uploads/2022/03/wl" + wlNR + ".svg";
    this.sciezkaWzorkow = wlx;
    gsap.to('.wzorki', 0.7, { backgroundImage:'url(' + wlx + ')' });

  },
  methods: {
    pokaMenu() {
      gsap.to(window, {duration: .7, scrollTo:"#pokaMenu"});
      gsap.to('.nav', 0.7, {delay: .3, clipPath:'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'});
      this.menu = false;

    },
    niePokaMenu() {
      gsap.to('.nav', 0.7, {clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'});
      this.menu = true;
    }
  }
}

</script>

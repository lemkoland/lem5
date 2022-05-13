<template>
  <div class="layout">
    <div class="wzorki"></div>
    <g-image class="menu-icon" v-if="menu" alt="menu" src="~/assets/menu.png"  @click="pokaMenu" />

    <header class="header">
      <div class="logosy">
        <g-link to="/posty/"><g-image class="chow" alt="ptak chowanec naskicowany z konturem" src="~/assets/chowanec_z-konturem.svg" width="180"/>
<g-image class="napis-lemkoland" alt="napis lemkoland" src="~/assets/lemkoland-napis.svg" width="180"/></g-link>
</div>


    </header>
    <nav class="nav" id="pokaMenu">
      <g-image class="cancel-icon" alt="menu" src="~/assets/cancel.png"  @click="niePokaMenu" />

      <div class="logosy">
        <g-link to="/posty/"><g-image class="chow" alt="ptak chowanec naskicowany z konturem"
          src="~/assets/chowanec_z-konturem.svg" width="180"/>
</g-link>
</div>

<!-- <h2>Dowiedz się więcej:</h2>
      <ul class="pages-list">
        <li v-for="edge in $page.allWordPressPage.edges" :key="edge.node.id"  @click="niePokaMenu" >
          <g-link :to="edge.node.path">
            <p>{{edge.node.title}}</p>
          </g-link>
        </li>

      </ul>
      <h2>Lub wybierz jedną z kategorii</h2>
      <ul class="cat-list">
        <li v-for="edge in $page.allWordPressCategory.edges" :key="edge.node.id"  @click="niePokaMenu" >
          <g-link :to="edge.node.path">
            <p>{{edge.node.title}}</p>
          </g-link>
        </li>
      </ul> -->
<div class="navLinki">


      <li @click="niePokaMenu"><g-link  to="/cat/nowyny/">Новины / Aktualności</g-link></li>
      <li @click="niePokaMenu"><g-link  to="/o-nas/">О нас / O nas</g-link></li>
      <li @click="niePokaMenu"><g-link  to="/wspolpraca/">Współpraca</g-link></li>
      <li @click="niePokaMenu"><g-link  to="/klub-lemkoland/">Клюб Лемколянд / Klub Lemkoland </g-link></li>
      <li @click="niePokaMenu"><g-link  to="/czasopismo/">Часопис / Czasopismo </g-link></li>
      <li @click="niePokaMenu"><g-link  to="/cat/sklep/">Склеп / Sklep </g-link></li>
      <li></li>
      <li @click="niePokaMenu"><g-link to="/cat/besidujeme-po-naszomu/">Бесідуєме по нашому / Rozmawiamy po naszemu</g-link></li>
      <li @click="niePokaMenu"><g-link to="/cat/hry-i-zabawy/">Гры і забавы / Gry i zabawy</g-link></li>
      <li @click="niePokaMenu"><g-link to="/cat/malowanki/">Малюванкы / Malowanki</g-link></li>
      <li @click="niePokaMenu"><g-link to="/cat/spiwanky-i-opowidania/">Сьпіванкы і оповіданя / Śpiewanki i opowiadania</g-link></li>
      <li @click="niePokaMenu"><g-link to="/cat/rukotwory/">Рукотворы / Rękodzieło</g-link></li>
      <li></li>
      <li @click="niePokaMenu"><g-link to="/cat/dla-rodzicow-i-nauczycieli/">Для родичів і учытелів / Dla rodziców i nauczycieli</g-link></li>
      <li @click="niePokaMenu"><g-link to="/cat/czytalnia/">Чытальня / Czytelnia</g-link></li>
      <li></li>
      <li @click="niePokaMenu"><g-link to="/kontakt/">Контакт / Kontakt</g-link></li>
      <li></li>
      <li @click="niePokaMenu"lo><g-link to="https://www.facebook.com/Lemkoland/">FB</g-link></li>
      <li @click="niePokaMenu"lo><g-link to="https://www.youtube.com/user/lemkoland">YT</g-link></li>
</div>

    </nav>
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

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1.0em 0.75em 2.0em;
}


.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__link {
  margin-left: 20px;
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

.nav {
  /* From https://css.glass  */
  background: rgba(255, 255, 255, .93);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);
  width: 98vw;
  min-height: 98vh;
  position: absolute;

  top: 0;
  left: 0;
  z-index: 222;
  padding: 1vw 1vh;
  clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8em;

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
    font-size: 2.4em;
    margin: 1vh 0;
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
     margin: 1vh 0;
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

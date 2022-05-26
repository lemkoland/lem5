
  <template>
    <Layout>
<div class="page-glass">
  <h2>{{ title }}</h2>
  <div class="czasownik">


  <p>{{ currentTime }}</p>
        <input
        class="sciezka"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="seekValue"
          @change="onSeek"
        />
        <audio
          :src="this.src"
          ref="audioPlayer"
          @timeupdate="onPlaying"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p>{{ durationCalak }}</p>
        </div>
        <div>
          <button class="pleyki" v-if="!gra" @click="play"><g-image alt="play" src="~/assets/play.svg"  /></button>
          <button class="pleyki" v-if="gra" @click="pause"><g-image alt="pause" src="~/assets/pause.svg"  /></button>

        </div>

        <ul class="playLista">
          <li @click="p1">kohut-i-lyszka</li>
          <li @click="p2">kwit-paprotyny</li>
          <li @click="p3">ne-rubaj-jalyczku</li>
          <li @click="p4">o-smoku</li>
          <li @click="p5">o-worozci-nezabudci</li>
          <li @click="p6">snizka</li>
          <li @click="p7">szczastywyj-pastuch</li>
        </ul>
      </div>


    </Layout>
  </template>

  <page-query>
    {
      allWordPressPostTag {
        edges {
          node {
            title
            id
            path
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
  export default {
    name: "App",
    data() {
      return {
        currentTime: '0:00',
        seekValue: 0,
        durationCalak: '0:00',
        title: "kohut i lyszka - lemkoland na dobranicz",
        gra: false,
        zrodlo: "../assets/bajka.mp3",
        src: "https://wp.lemkoland.com/wp-content/uploads/2022/05/kohut-i-lyszka_lemkoland-na-dobranicz.mp3"
      }
    },
    methods: {

      p1() {
        this.$refs.audioPlayer.pause();
        this.gra = false;
        this.src = "https://wp.lemkoland.com/wp-content/uploads/2022/05/kohut-i-lyszka_lemkoland-na-dobranicz.mp3";
        this.title = "kohut i lyszka";
      },
      p2() {
        this.$refs.audioPlayer.pause();
        this.gra = false;
        this.src = "https://wp.lemkoland.com/wp-content/uploads/2022/05/kwit-paprotyny_lemkoland-na-dobranicz.mp3";
        this.title = "kwit paprotyny";
      },
      p3() {
        this.$refs.audioPlayer.pause();
        this.gra = false;
        this.src = "https://wp.lemkoland.com/wp-content/uploads/2022/05/ne-rubaj-jalyczku_lemkoland-na-dobranicz.mp3";
        this.title = "ne rubaj jalyczku"
      },
      p4() {
        this.$refs.audioPlayer.pause();
        this.gra = false;
        this.src = "https://wp.lemkoland.com/wp-content/uploads/2022/05/o-smoku_lemkoland-na-dobranicz.mp3";
        this.title = "o smoku"
      },
      p5() {
        this.$refs.audioPlayer.pause();
        this.gra = false;
        this.src = "https://wp.lemkoland.com/wp-content/uploads/2022/05/o-worozci-nezabudci_lemkoland-na-dobranicz.mp3";
        this.title = "o worozci nezabudci"
      },
      p6() {
        this.$refs.audioPlayer.pause();
        this.gra = false;
        this.src = "https://wp.lemkoland.com/wp-content/uploads/2022/05/snizka_lemkoland-na-dobranicz.mp3";
        this.title = "snizka"
      },
      p7() {
        this.$refs.audioPlayer.pause();
        this.gra = false;
        this.src = "https://wp.lemkoland.com/wp-content/uploads/2022/05/szczastywyj-pastuch_lemkoland-na-dobranicz.mp3";
        this.title = "szczastywyj pastuch"
      },
      play() {
        this.$refs.audioPlayer.play();
        this.gra = true;
        let secondsAll = Math.round(this.$refs.audioPlayer.duration % 60);
        let secondsAllShow = secondsAll < 10 ? secondsAllShow = "0" + secondsAll : secondsAllShow = secondsAll;
        let minutesAll = Math.floor(this.$refs.audioPlayer.duration / 60);
        this.durationCalak = minutesAll + ':' + secondsAllShow;
      },
      pause() {
        this.$refs.audioPlayer.pause();
        this.gra = false;
      },
      onPlaying() {
        const { audioPlayer } = this.$refs;
        if (!audioPlayer) {
          return;
        }
        let secondsNow = Math.round(audioPlayer.currentTime % 60);
        let secondsNowShow = secondsNow < 10 ? secondsNowShow = "0" + secondsNow : secondsNowShow = secondsNow;
        let minutesNow = Math.floor(audioPlayer.currentTime / 60);

        this.currentTime = minutesNow + ':' + secondsNowShow ;
        this.seekValue = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      },
      onSeek() {
        const { audioPlayer } = this.$refs;
        const seekto = audioPlayer.duration * (this.seekValue / 100);
        audioPlayer.currentTime = seekto;
      },
    },
  };
  </script>
  <style>
  .sciezka {
    width: 100%;
  }

  .pleyki:hover {
          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  }
  .page-glass {

  /* From https://css.glass  */
  background: rgba(255, 255, 255, .03);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border: 1px solid rgba(255, 255, 255, 0.32);
}
.czasownik {
  display: flex;
}
.playLista{
  margin: 0;
  padding: 0;
}
.playLista li {
  list-style: none;
  margin: .3em 0;
  padding: 0;
  cursor: pointer;
  font-family: 'breamcatcher-regular', sans-serif;
  font-size: 1.4em;
}
.playLista li:hover {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
}



@media screen and (orientation:landscape) {
  .page-glass{
    max-width: 55rem;
    padding: 2em;
    margin:0;
    font-size: 1.4em;
  }
  .pleyki {
    background-color: transparent;
    width: 40%;
    height: auto;
    border: none;
  }
}

@media screen and (orientation:portrait) {
  .page-glass{
    width: 94vw;
    padding: 2vw;
    margin:0;
    font-size: 1.4em;
    overflow: hidden;
  }
  .pleyki {
    background-color: transparent;
    width: 100%;
    height: auto;
    border: none;
  }
}

  </style>

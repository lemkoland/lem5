
  <template>
    <Layout>
<div class="page-glass">
  <p>{{ title }}</p>
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
          src= "../assets/bajki-audio/kohut-i-lyszka_lemkoland-na-dobranicz.mp3"
          title="bajka"
          ref="audioPlayer"
          @timeupdate="onPlaying"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <p>{{ durationCalak }}</p>
        </div>
        <div>
          <button class="pleyki" v-if="!gra" @click="play"><g-image alt="play" src="~/assets/play.svg" width="120px" /></button>
          <button class="pleyki" v-if="gra" @click="pause"><g-image alt="pause" src="~/assets/pause.svg" width="120px" /></button>

        </div>
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
        zrodlo: "../assets/bajka.mp3"
      }
    },
    methods: {
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
  .pleyki {
    background-color: transparent;
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




@media screen and (orientation:landscape) {
  .page-glass{
    max-width: 55rem;
    padding: 2em;
    margin:0;
    font-size: 1.4em;
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
}

  </style>

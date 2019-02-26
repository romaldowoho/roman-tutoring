<template>
  <div id="about">
    <h1 class="hello">Hello, I'm Roman</h1>
    <br>
    <br>
    <div class="motto">
      <div id="curiosity">Curiosity</div>
      <div id="discipline">Discipline</div>
      <div id="success">= Success!</div>
    </div>
    <div class="aboutme">
      <p>I have over four years of tutoring experience</p>
      <p>
        Have worked with over a 100 school and college students
        in the San Francisco Bay Area
      </p>
      <p>Whenever applicable, I try to include additional Russian math books,
        <br>which are used in top Russian schools, in the tutoring sessions
      </p>
      <p>Quality is guaranteed, your results is my priority</p>
    </div>
    <div class="trial">
      <a v-scroll-to="{el: '#contact', offset: 0}">
        <Icon type="ios-mail-outline" size="40"/>
      </a>
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";

export default {
  name: "HelloUser",
  data() {
    return {
      timeNow: Date.now(),
      screenWidth: screen.width
    };
  },
  mounted() {
    let delayHello = 7;
    let delayAboutMe = 8;
    if (this.screenWidth < 700) {
      delayHello = 2;
      delayAboutMe = 3;
    }
    TweenMax.to("#discipline", 1, { scale: 0.6, y: -20 }).delay(2);
    TweenMax.to("#curiosity", 1, { x: 60 }).delay(3);
    TweenMax.from("#success", 1, { x: 600 }).delay(4);
    TweenMax.to(".motto", 1, { autoAlpha: 0 }, 0).delay(6);
    TweenMax.to(".aboutme", 2, { autoAlpha: 1, y: -100 }, 0).delay(
      delayAboutMe
    );
    TweenMax.from(".hello", 2, { autoAlpha: 0, y: -50 }, 0).delay(delayHello);
  },
  methods: {
    animate() {
      let x = setInterval(this.svgTranslate(), 500);
    },
    svgTranslate() {
      let timePassed = Date.now() - this.timeNow;
      const mySvg = this.$refs.cross;
      mySvg.style.top = timePassed / 10 + "px";
    }
  }
};
</script>

<style scoped>
#about {
  width: 100%;
  color: white;
  background-image: linear-gradient(
    to bottom,
    /* rgba(16, 15, 17, 0.95), */ #252839,
    #4f5366
  );
  height: 600px;
  font-size: 1.5em;
}
.motto {
  margin-top: 50px;
  margin-left: 60px;
  display: inline-flex;
  font-size: 3em;
}
#success {
  padding-right: 50px;
}
.cross {
  position: relative;
}
.hello {
  opacity: 1;
  font-size: 2em;
  font-weight: 600;
  position: relative;
}
.trial {
  position: fixed;
  left: 0;
  top: 150px;
  height: 40px;
  width: 40px;
  border-radius: 0 5px 5px 0;
  color: black;
  background-color: #f5cb95;
  z-index: 9999;
}
.aboutme {
  opacity: 0;
}
.content {
  display: block;
  font-weight: bold;
}

@media (max-width: 991px) {
  #about {
    display: inline-block;
    font-size: 14px;
  }
  .motto {
    display: none;
  }
  .hello {
    animation-delay: 4s;
    margin-top: 50px;
  }
  .aboutme {
    margin: 120px 0px auto;
  }
}

@media (max-width: 1332px) {
  .hello {
    padding-top: 20px;
  }
}
</style>


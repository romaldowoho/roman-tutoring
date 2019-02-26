<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 my-header">
    <a href="/" class="logo">
      <Logo/>
    </a>
    
    <a class="mr-md-auto font-weight-normal p-2 logo-text" href="/">Roman Tutoring</a>

    <nav class="navbar">
      <a class="nav-link p-2" v-scroll-to="{el: '#about', offset: 0}">About</a>
      <a class="nav-link p-2" v-scroll-to="{el: '#services'}">Services</a>
      <a class="nav-link p-2" v-scroll-to="{el: '#testimonials', offset: 0}">Testimonials</a>
      <a class="nav-link p-2" v-scroll-to="{el: '#contact', offset: -100}">Contact</a>
    </nav>
  </div>
</template>

<script>
import { TweenMax } from "gsap";
import Logo from "@/components/Logo.vue";

export default {
  name: "Header",
  components: {
    Logo
  },
  mounted() {
    TweenMax.staggerFrom(
      ".nav-link",
      1,
      {
        opacity: 0,
        y: 200,
        delay: 1
      },
      0.1
    );
    this.rotation(".logo", -360);
  },
  methods: {
    rotation(el, degrees) {
      TweenMax.to(
        el,
        0.5,
        {
          rotation: degrees,
          transformOrigin: "50% 43%",
          repeat: 10
        },
        "-=0.5"
      )
        .delay(8)
        .yoyo(true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  scroll-behavior: smooth;
}
.logo-text {
  font-size: 25px;
  color: #92b3bd;
}
a:link {
  text-decoration: none;
}
.navbar {
  font-weight: bold;
  color: #92b3bd;
}
.my-header {
  width: 100%;
  color: white;
  background-color: #252839;
  overflow: hidden;
  z-index: 99;
}
</style>

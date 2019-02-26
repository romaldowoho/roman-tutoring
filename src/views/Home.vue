<template>
  <div class="home">
    <HelloUser/>
    <Services/>
    <!-- <Services/> -->
    <Testimonials/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloUser from "@/components/HelloUser.vue";
import Services from "@/components/Services.vue";
import Testimonials from "@/components/Testimonials.vue";
import Contact from "@/components/Contact.vue";
import ServicesOverview from "@/components/Services.vue";

export default {
  name: "home",
  components: {
    HelloUser,
    Services,
    Testimonials,
    Contact,
    Services
  }
};
</script>

<style scoped>
.home {
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
}
</style>

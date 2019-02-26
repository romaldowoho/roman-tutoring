<template>
  <div id="footer">
    <div class="bottom">
      <h6>Roman Tutoring, {{ new Date().getFullYear()}}, Santa Clara, CA</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>


<style scoped>
#footer {
  text-align: center;
  height: 100px;
  /* margin: 0 auto; */
  background-image: linear-gradient(to bottom, #4f5366, #252839);
}
.bottom {
  color: #92b3bd;
  text-align: center;
  padding-top: 50px;
}
</style>

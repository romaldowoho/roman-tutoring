<template>
  <div id="services">
    <div class="title">
      <h1>Here is what I do</h1>
    </div>
    <div class="services">
      <div class="exams">
        <div class="subtitle">
          <Icon type="ios-school-outline" size="40"/>
          <h2>Exam Prep</h2>
          <hr>
        </div>
        <div id="sat">
          <img src="@/assets/exams/sat.png" alt="SAT Exam Logo" height="70px" width="100px">
        </div>
        <div id="act">
          <img src="@/assets/exams/act.png" alt="ACT Exam Logo" height="30px" width="120px">
        </div>
        <div id="gre">
          <img src="@/assets/exams/gre.png" alt="GRE Exam Logo" height="30px" width="120px">
        </div>
        <div id="gmat">
          <img src="@/assets/exams/gmat.png" alt="GMAT Exam Logo" height="30px" width="120px">
        </div>
        <div id="hspt">
          <img src="@/assets/exams/hspt.png" alt="HSPT Exam Logo" height="30px" width="120px">
        </div>
        <div id="caaspp">
          <img src="@/assets/exams/caaspp.png" alt="CAASPP Exam Logo" height="40px" width="140px">
        </div>
        <hr>
        <div class="price-exam-hw">$40 / hour</div>
      </div>
      <div class="tutoring">
        <div class="subtitle">
          <Icon type="ios-trending-up" size="40"/>
          <h2>Tutoring</h2>
          <hr>
        </div>
        <div class="content">Math doesn't make sense anymore?
          <br>With a comprehensive assessment I will identify what concepts you struggle with and by working together we will get you up to speed.
        </div>
        <br>
        <hr>
        <h5 class="emoji">&#x26A1 Special package &#x26A1</h5>
        <div class="price">$400 / 11 classes</div>
      </div>
      <div class="homework">
        <div class="subtitle">
          <Icon type="ios-book-outline" size="40"/>
          <h2>Homework Help</h2>
          <hr>
        </div>
        <div class="content">
          <div class="math-list1">
            <ul style="list-style-type:none;">
              <li>Algebra I, II, III</li>
              <li>IM I, II, III</li>
              <li>Trigonometry</li>
              <li>Pre-Calculus</li>
              <li>Geometry</li>
            </ul>
          </div>
          <div class="math-list2">
            <ul style="list-style-type:none;">
              <li>Calculus I,II,III</li>
              <li>Discrete Math</li>
              <li>Statistics</li>
              <li>Linear Algebra</li>
              <li>College Algebra</li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="price-exam-hw">$40 / hour</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesOverview"
};
</script>


<style scoped>
.title {
  display: flex;
  width: 100%;
  height: 100px;
  background-color: white;
  justify-content: center;
  padding-top: 30px;
}
.subtitle {
  margin-top: -40px;
  color: #252839;
}
.services {
  width: 100%;
  display: flex;
  background-color: whitesmoke;
}
.exams,
.tutoring,
.homework {
  margin: 1%;
  padding-top: 50px;
  width: 33.333%;
  height: 100%;
  border-radius: 1%;
  background-image: linear-gradient(to bottom, #92b3bd, #b0c2c7);
}
.content {
  padding-top: 10%;
  color: #252839;
  margin: 10px;
  font-size: 1.5em;
}
.price {
  padding-top: 3%;
  font-size: 1.5em;
  color: rgb(24, 82, 63);
}
.price-exam-hw {
  padding-top: 6%;
  font-size: 1.5em;
  color: rgb(24, 82, 63);
}
.math-list1,
.math-list2 {
  width: 50%;
  display: inline-block;
  padding-bottom: 4%;
}
#sat,
#act,
#gre,
#gmat,
#hspt,
#caaspp {
  display: inline-block;
  width: 50%;
  justify-content: center;
  padding: 20px;
}

.emoji {
  color: #252839;
  margin-bottom: -2%;
  animation-name: woop;
  animation-duration: 0.9s;
  animation-iteration-count: infinite;
}
@keyframes woop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.99);
  }
  75% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}
@media (max-width: 1332px) {
  .services {
    display: inline-block;
    text-align: center;
    width: 100%;
  }
  .tutoring,
  .exams,
  .homework {
    display: block;
    width: 100%;
  }
  .content {
    font-size: 1em;
  }
  .title {
    padding-top: 30px;
    height: 80px;
  }
}
</style>

<template>
  <div id="testimonials">
    <div class="title">
      <h1>Here is what they say</h1>
    </div>
    <Carousel loop dots="outside">
      <div v-for="(value, key, index) in reviews" :key="index">
        <CarouselItem>
          <div class="demo-carousel">
            {{ value.review }}
            <br>
            <br>
            <div id="name-client">{{ value.name }}</div>
          </div>
        </CarouselItem>
      </div>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      reviews: {
        1: {
          name: `Marjorie A`,
          review: `Roman has been tutoring my son for approximately 6 months. 
          We are very happy with his services; Roman is a very nice, flexible, knowledgeable and calm person. 
          Per my son: 'he is a great tutor. He is patient with me and helps me understand things in math better. 
          I really like him.' I truly recommend Roman as a tutor.`
        },
        2: {
          name: `Emmanuel R`,
          review: `Roma has been tutoring me now for almost a year and ever since I tutored with him my grades have skyrocketed. 
          He teaches you many different techniques that the schools don't, and then you can choose what way works best. 
          And he is the only tutor I have ever had that doesn't only go by the order of the book, but goes in a order based on 
          my knowledge for me to better understand the subject. 
          I truly believe that if you tutor with Roma you will succeed in what ever subject you have difficulty with.`
        },
        3: {
          name: "Yasser J",
          review: `The best math tutor in Silicon Valley!! Roman is teaching our children for the past few months, and we have noticed amazing
           improvements in their math skills. He is very thorough, and patiently handles their every questions. He has managed to teach easy to 
           understand math fundamentals, and that's helping our kids to gradually transition to more in-depth topics. 
           What I love the most is the confidence level my kids have attained through his tutoring in a few months, which is positively reflecting on their other subjects. 
           This year, they're surely participating in Math Kangaroo, and I am confident that they will do quite well under Roman's guidance.`
        },
        4: {
          name: "Arav S",
          review: `In the past I have had many tutors, but none of them really helped me progress in my education. When I started getting tutored by Roma, my grades started improving rapidly. 
          I suggest all students who need help to come and learn from him.`
        }
      }
    };
  }
};
</script>

<style>
#testimonials {
  background-color: whitesmoke;
}
.demo-carousel {
  height: 400px;
  padding: 120px;
  margin: 0 auto;
  width: 800px;
  background-color: whitesmoke;
  display: block;
  font-size: 16px;
  overflow-x: auto;
}
.title {
  display: flex;
  width: 100%;
  height: 100px;
  background-color: white;
  justify-content: center;
  padding-top: 30px;
}

#divider {
  color: rgb(98, 154, 228);
}

#name-client {
  font-style: italic;
}
@media (max-width: 1332px) {
  .title {
    height: 50px;
    padding-bottom: 50px;
  }
  h1 {
    font-size: 2em;
  }
  .demo-carousel {
    height: 200px;
    width: 400px;
    font-size: 12px;
    text-align: center;
    padding: 50px;
    overflow-x: auto;
  }
}
</style>

<template>
  <div>
    <div class="title">
      <h1>Don't be shy, say hi!</h1>
    </div>
    <div id="wrap">
      <div id="contact">
        <br>
        <br>
        <h4>Book your $20 trial class today!</h4>
        <Form
          class="contact-form"
          ref="formValidate"
          :model="formValidate"
          :rules="ruleValidate"
          :label-width="80"
          name="contact"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
          method="POST"
          action="/"
        >
          <FormItem class="content-wrap" label="Name" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name" name="name"/>
          </FormItem>
          <FormItem class="content-wrap" label="E-mail" prop="email">
            <Input v-model="formValidate.email" placeholder="Enter your e-mail" name="email"/>
          </FormItem>
          <FormItem class="content-wrap" label="Message" prop="message">
            <Input
              v-model="formValidate.message"
              type="textarea"
              :autosize="{minRows: 2,maxRows: 5}"
              placeholder="Enter your message"
              name="message"
            />
            <input type="hidden" name="form-name" value="contact">
          </FormItem>
          <FormItem class="btn">
            <br>
            <Button
              html-type="submit"
              @click="handleSubmit('formValidate')"
              style="background-color: rgb(98, 154, 228); color: white"
            >Submit</Button>
          </FormItem>
        </Form>
        <br>
        <Icon type="ios-call-outline" size="25"/>
        <a href="tel:+13467775867">+1 (346) 777 5867</a>
        <br>
        <Icon type="ios-mail-outline" size="25"/>contact@romanmath.com
      </div>
      <div id="map">
        <br>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.916795570702!2d-121.9391654846946!3d37.34447847984004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbabc51bdf41%3A0x56722745ee39e2e6!2sRoman+Tutoring!5e0!3m2!1sen!2sus!4v1549587497492"
          width="80%"
          height="418"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formValidate: {
        name: "",
        email: "",
        message: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "Email cannot be empty", trigger: "blur" },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        message: [
          {
            required: true,
            message: "Please enter your message",
            trigger: "blur"
          },
          {
            type: "string",
            message: "Please tell me what services you are looking for"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Thank you! You message has been sent");
        } else {
          this.$Message.error("Please check your inputs!");
        }
      });
    }
  }
};
</script>

<style scoped>
#wrap {
  display: flex;
}
.title {
  width: 100%;
  height: 100px;
  background-color: white;
  justify-content: center;
  padding-top: 30px;
}
#contact {
  width: 50%;
  height: 450px;
  background-color: whitesmoke;
}
#map {
  width: 50%;
  background-color: whitesmoke;
  /* padding-bottom: 22px; */
}
.contact-form {
  margin-left: -70px;
}
.content-wrap {
  width: 300px;
  margin: 0 auto;
  padding: 6px;
}

@media (max-width: 1332px) {
  h4 {
    font-size: 16px;
  }
  .title {
    height: 70px;
    padding-top: 10px;
  }
  h1 {
    font-size: 2em;
  }
  #wrap {
    display: block;
  }
  #contact,
  #map {
    width: 100%;
  }
}
</style>


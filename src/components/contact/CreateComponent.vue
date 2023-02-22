<template>
<section class="mb-4" id="contact">

<h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
    <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
            <form @submit.prevent="handleSubmitForm" id="contact-form" name="contact-form" >
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" 
                            v-model="contact.name" required>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"
                            v-model="contact.email" required>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                </div>
               
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"
                            v-model="contact.subject" required>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
            
                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"
                            v-model="contact.message" required></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <div class="text-center text-md-left">
                    <a class="btn btn-primary">Send</a>
                </div>
            </form>
            <div class="status"></div>
        </div>
       
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Prishtina, Kosove</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+383 45 159 999</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>ix51808@ubt-uni.net</p>
                </li>
            </ul>
        </div>
    </div>

</section> 
</template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        contact: {
          name: "",
          email: "",
          subject: "",
          message: ""
        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/contactapi/store";
  
        axios
          .post(apiURL, this.contact)
          .then(() => {
            this.$router.push("/get-messages");
            this.contact = {
                name: "",
                email: "",
                subject: "",
                message: ""
            };
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      },
    },
  };
  </script>
  
<style>
#contact{
    box-shadow: 0px -1px 12px pink;
    border-radius: 20px;
    width: 70%;
    margin: auto;
    padding: 120px;
}
</style>
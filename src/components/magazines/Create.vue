<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Create Magazine</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              v-model="magazine.title"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Company</label>
            <input
              type="text"
              class="form-control"
              v-model="magazine.company"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="magazine.description"
              required
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" style="margin: 0 auto;width: 80px;">Create</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        magazine: {
          title: "",
          company: "",
          description: ""
        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/api/store";
  
        axios
          .post(apiURL, this.magazine)
          .then(() => {
            this.$router.push("/magazines");
            this.magazine = {
                title: "",
                company: "",
                description: ""
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
<style>
.form-group{
  width: 440px;
  margin: 0 auto;
}
</style>
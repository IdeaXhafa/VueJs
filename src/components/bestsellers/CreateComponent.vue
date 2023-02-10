<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Create BestSeller</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              v-model="bestseller.title"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Author</label>
            <input
              type="text"
              class="form-control"
              v-model="bestseller.author"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Price</label>
            <input
              type="text"
              class="form-control"
              v-model="bestseller.price"
              required
            />
          </div>
          <div class="form-group">
            <label>Photo</label>
            <input 
                type="file"
                class="form-control"
                v-on:change="bestseller.picture"
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
        bestseller: {
          title: "",
          author: "",
          price: "",
          picture: ""
        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/api/store";
  
        axios
          .post(apiURL, this.bestseller)
          .then(() => {
            this.$router.push("/view");
            this.bestseller = {
                title: "",
                author: "",
                price: "",
                picture: ""
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
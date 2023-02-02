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
            <button class="btn btn-danger btn-block">Create</button>
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
        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/api/create-bestseller";
  
        axios
          .post(apiURL, this.bestseller)
          .then(() => {
            this.$router.push("/view");
            this.bestseller = {
                title: "",
                author: "",
                price: "",
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
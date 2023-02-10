<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Update Bestseller</h3>
        <form @submit.prevent="handleUpdateForm">
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
              type="number"
              class="form-control"
              v-model="bestseller.price"
              required
            />
          </div>
  
          <div class="form-group">
            <button class="btn btn-success btn-block" style="margin: 0 auto;width: 80px;">Update</button>
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
        bestseller: {},
      };
    },
    created() {
      let apiURL = `http://localhost:4000/api/edit-bestseller/${this.$route.params.id}`;
  
      axios.get(apiURL).then((res) => {
        this.bestseller = res.data;
      });
    },
    methods: {
      handleUpdateForm() {
        let apiURL = `http://localhost:4000/api/update-bestseller/${this.$route.params.id}`;
  
        axios
          .put(apiURL, this.bestseller)
          .then((res) => {
            console.log(res);
            this.$router.push("/view");
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
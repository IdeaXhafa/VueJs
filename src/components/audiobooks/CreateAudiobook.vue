<template>
    <h3>New Bestseller</h3>

    <div class="modal-dialog">
      <div class="modal-content">
        <form class="form" @submit.prevent="handleSubmit">
          <div class="modal-header">
            <h4 class="modal-title">Add Audiobook</h4>
            <router-link
              to="/audiobook"
              data-dismiss="modal"
              aria-hidden="true"
              type="button"
              class="close"
              >&times;</router-link
            >
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Title:</label>
              <input type="text" v-model="audiobook.title" required />
            </div>
            <div class="form-group">
              <label>Author:</label>
              <input type="text" v-model="audiobook.author" required />
            </div>
            <div class="form-group">
              <label>Description:</label>
              <input type="text" v-model="audiobook.description" required />
            </div>
            <div class="form-group">
              <label>Price:</label>
              <input type="text" v-model="audiobook.price" required />
            </div>
            <div class="form-group">
              <label>Listeners:</label>
              <input type="text" v-model="audiobook.listeners" required />
            </div>
            <div class="form-group">
              <label>Rating:</label>
              <input type="text" v-model="audiobook.rating" required />
            </div>
          </div>
          <div class="modal-footer">
            <router-link to="/audiobook" class="btn btn-dark"
              >Cancel</router-link
            >
            <button type="submit" class="btn btn-primary float-right">
              Submit
            </button>
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
      audiobook: {
        title: "",
        author: "",
        description: "",
        price: "",
        rating: "",
        listeners: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      let apiURL = "http://localhost:4000/api/create-audiobook";

      axios
        .post(apiURL, this.audiobook)
        .then(() => {
          this.$router.push("/audiobook");
          this.audiobook = {
            title: "",
            author: "",
            description: "",
            price: "",
            rating: "",
            listeners: "",
          };
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
};
</script>
  
<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="form" @submit.prevent="handleUpdateForm">
        <div class="modal-header">
          <h4 class="modal-title">Edit Book</h4>
          <router-link
            to="/showbook"
            data-dismiss="modal"
            aria-hidden="true"
            type="button"
            class="close"
            >&times;</router-link
          >
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              v-model="books.title"
              required
            />
          </div>
          <div class="form-group">
            <label>Author</label>
            <input
              type="text"
              class="form-control"
              v-model="books.author"
              required
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              type="text"
              class="form-control"
              v-model="books.price"
              required
            />
          </div>
        </div>

        <div class="modal-footer">
          <router-link to="/showbook" class="btn btn-dark">Cancel</router-link>
          <button type="submit" class="btn btn-primary float-right">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "edit-book",
  data() {
    return {
      books: {},
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/update-book/";
    axios.get(apiURL + this.$route.params).then((res) => {
      console.log(this.$route.params);
      this.books = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-book/${this.$route.params.id}`;

      axios
        .put(apiURL, this.bestseller)
        .then((res) => {
          console.log(res);
          this.$router.push("/showbook");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="form" @submit.prevent="handleUpdateForm">
        <div class="modal-header">
          <h4 class="modal-title">Edit Bestseller</h4>
          <router-link
            to="/showbestseller"
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
          <label>Available</label>
          <input
            type="text"
            class="form-control"
            v-model="bestseller.isAvailable"
            required
          />
        </div>

        <div class="modal-footer">
          <router-link to="/showbestseller" class="btn btn-dark"
            >Cancel</router-link
          >
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
  name: "editbestseller",
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
.form-group {
  width: 440px;
  margin: 0 auto;
}
</style>
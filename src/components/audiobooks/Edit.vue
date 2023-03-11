<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="form" @submit.prevent="handleUpdateForm">
        <div class="modal-header">
          <h4 class="modal-title">Edit Audiobook</h4>
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
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              v-model="audiobook.title"
              required
            />
          </div>
          <div class="form-group">
            <label>Author</label>
            <input
              type="text"
              class="form-control"
              v-model="audiobook.author"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label>Price</label>
          <input
            type="number"
            class="form-control"
            v-model="audiobook.price"
            required
          />
        </div>
        <div class="form-group">
          <label>listeners</label>
          <input
            type="number"
            class="form-control"
            v-model="audiobook.listeners"
            required
          />
        </div>
         <div class="form-group">
          <label>description</label>
          <input
            type="text"
            class="form-control"
            v-model="audiobook.description"
            required
          />
        </div>
         <div class="form-group">
          <label>rating</label>
          <input
            type="number"
            class="form-control"
            v-model="audiobook.rating"
            required
          />
        </div>

        <div class="modal-footer">
          <router-link to="/audiobook" class="btn btn-dark"
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
  name: "editaudiobook",
  data() {
    return {
      audiobook: {},
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/update-audiobook/";
    axios.get(apiURL + this.$route.params).then((res) => {
      console.log(this.$route.params);
      this.audiobook = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-audiobook/${this.$route.params.id}`;

      axios
        .put(apiURL, this.audiobook)
        .then((res) => {
          console.log(res);
          this.$router.push("/audiobook");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  setup() {
   
  },
};
</script>

<style>
.form-group {
  width: 440px;
  margin: 0 auto;
}
</style>
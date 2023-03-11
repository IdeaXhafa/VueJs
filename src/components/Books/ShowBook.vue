<template>
  <h3>Books</h3>
  <div class="container">
    <div class="row">
      <div class="col card" v-for="books in books" v-bind:key="books._id" style="max-width:280px;">
          <img
            v-bind:src="books.photoUrl"
            style="
              height: 200px;
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 50%;
            "
          />
          <div class="card-body">
            <h5 class="card-title">{{ books.title }}</h5>
            <p class="card-text">Author: {{ books.author }}</p>
            <p class="card-text">Price: {{ books.price }}</p>
          </div>
          <router-link :to="'/edit-book/' + books._id">
            <button class="btn btn-secondary">Edit</button>
          </router-link>
          <router-link to="/cart">
            <button @click="handleSubmit(books)" class="btn btn-success">
              Add to Cart
            </button>
          </router-link>
          <button class="btn btn-danger" style="width:100px; text-align: center; margin: auto;" @click="deleteBook(books._id)">
            Delete
          </button>
        </div>
      </div>
  </div>
  <router-link to="/addbook">
    <button class="btn btn-primary">Add a Book</button>
  </router-link>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import getUser from "@/getUser";
import router from "@/router";

export default {
  name: "showbook",
  data() {
    return {
      books: [],
    };
  },
  async created() {
    let apiURL2 = "http://localhost:4000/api/get-cart/";
    await axios
      .get(apiURL2 + this.id)
      .then((res) => {
        res.data.forEach((d) => {
          this.cartRegistry.set(d._id, d);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    let apiURL = "http://localhost:4000/api/get-book";
    await axios
      .get(apiURL)
      .then((res) => {
        this.books = [];
        res.data.forEach((d) => {
          if (!this.cartRegistry.has(d._id)) {
            this.books.push(d);
            console.log(true);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteBook(id) {
      let apiURL = `http://localhost:4000/api/delete-book/${id}`;
      let indexOfArrayItem = this.books.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.books.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    handleSubmit: function (books) {
      let apiURL = "http://localhost:4000/api/create-cart";
      books.userId = this.id;

      axios
        .post(apiURL, books)
        .then(() => {
          router.push("/cart");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  setup() {
    const filePath = ref(null);
    const { user } = getUser();
    const cartRegistry = ref(new Map());

    const id = user.value.uid;

    const deleteImage = async (filePath) => {
      const storage = getStorage();
      const storageRef = ref(storage, filePath);
      try {
        await deleteObject(storageRef);
      } catch (err) {
        console.log(err.message);
      }
    };
    return { id, cartRegistry };
  },
};
</script>

<style scoped>
#show-book {
  height: 100%;
  width: 100%;
  display: flex;
  padding: 90px;
  /* flex-wrap: wrap; */
}

.row{
  display: flex;
  flex-wrap: wrap;
}
</style>
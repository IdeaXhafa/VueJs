<template>
  <h3>Books</h3>
  <div class="container" v-for="books in books" v-bind:key="books._id">
    <div class="row">
      <div class="col">
        <div
          class="card h-100"
          style="
            width: 30%;
            max-width: 350%;
            height: 110%;
            max-height: 110%;
            padding: 0;
            border-radius: 25px;
          "
        >
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
          </div>
          <router-link to="/edit-book">
            <button class="btn btn-secondary">Edit</button>
          </router-link>
          <router-link to="/cart">
            <button
              :book_id="books.id"
              :name="books.title"
              :author="books.author"
              class="btn btn-success"
            >
              Buy
            </button>
          </router-link>
          <!-- <button v-if="books.cart" @click="add(book)" :disabled="book.cart">Book added to cart</button>  -->
        </div>
      </div>
    </div>
  </div>
  <router-link to="/addbook">
      <button class="btn btn-primary">Add a Book</button>
    </router-link>

  <!-- <div id="show-book">
    <div
      class="row row-cols-1 row-cols-md-3"
      v-for="books in books"
      v-bind:key="books._id"
    >
      <div class="col mb-4">
        <div
          class="card"
          style="
            width: 350%;
            max-width: 350%;
            height: 110%;
            max-height: 110%;
            padding: 0;
            border-radius: 25px;
          "
        >
          <div class="card-block">
            <p>lorem ipsum lorem ipsum lorem</p>
            <h4 class="card-title">{{ books.title }}</h4>
            <img
              v-bind:src="books.photoUrl"
              style="height: 200px; width: 100px"
            />
            <p class="card-text">{{ books.author }}</p>

            <div
              class="card-block"
              style="position: absolute; bottom: 5px; margin-left: 40px"
            >
              <router-link to="/edit-book">
                <button class="btn btn-secondary">Edit</button>
              </router-link>

              <router-link to="/cart">
                <button
                  :book_id="books.id"
                  :name="books.title"
                  :author="books.author"
                  class="btn btn-success"
                >
                  Buy
                </button>
              </router-link>
              <button v-if="books.cart" @click="add(book)" :disabled="book.cart">Book added to cart</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/addbook">
      <button class="btn btn-primary">Add a Book</button>
    </router-link>
  </div> -->
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";

export default {
  name: "showbook",
  data() {
    return {
      books: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/get-book";
    axios
      .get(apiURL)
      .then((res) => {
        this.books = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
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
  },
  setup() {
    const filePath = ref(null);

    const deleteImage = async (filePath) => {
      const storage = getStorage();
      const storageRef = ref(storage, filePath);
      try {
        await deleteObject(storageRef);
      } catch (err) {
        console.log(err.message);
      }
    };
  },
};
</script>

<style >
#show-book {
  height: 100%;
  width: 100%;
  display: flex;
  padding: 90px;
  /* flex-wrap: wrap; */
}
</style>
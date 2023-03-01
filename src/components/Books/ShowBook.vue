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
          <router-link to="/cart">
            <button @click="handleSubmit(books)" class="btn btn-success">
              Add to Cart
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
import getUser from '@/getUser';
import router from '@/router';

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
          this.cartRegistry.set(d._id, d)
        })
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
            if(!this.cartRegistry.has(d._id)){
              this.books.push(d)
              console.log(true)
            }
          });
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
    return { id, cartRegistry }
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
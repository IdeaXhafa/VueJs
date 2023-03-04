<template>
  <div id="addbook">
    <h3>New Book</h3>
    <div class="modal-dialog">
      <div class="modal-content">
        <form class="form" @submit.prevent="handleSubmit">
          <div class="modal-header">
            <h4 class="modal-title">Add Book</h4>
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
              <label>Title:</label>
              <input type="text" v-model="books.title" />
            </div>
            <div class="form-group">
              <label>Author:</label>
              <input type="text" v-model="books.author" />
            </div>
            <div class="form-group">
              <label>Price:</label>
              <input type="text" v-model="books.price" />
            </div>
          </div>
          <div class="form-group">
            <div class="input-field col s12">
              <input type="file" @change="handleChange" class="form-control" />
              <label>Upload a Photo</label>
            </div>
          </div>
          <div class="modal-footer">
            <router-link to="/showbook" class="btn btn-dark"
              >Cancel</router-link
            >
            <button type="submit" class="btn btn-primary float-right">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
    <!-- <div class="row">
      <form @submit.prevent="handleSubmit" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="books.title" required />
            <label>title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="books.author" required />
            <label>author</label>
          </div>
        </div>
        <div class="form-group">
          <div class="input-field col s12">
            <input type="file" @change="handleChange" class="form-control" />
            <label>Upload a Photo</label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/showbook" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div> -->
</template>

<script>
import { ref as ref2 } from "@vue/reactivity";
import { db, fb } from "../../firebase";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import axios from 'axios';
import router from '@/router';

export default {
  name: "addbook",
  methods: {
    // saveEmployee() {
    //   db.collection("books")
    //     .add({
    //       book_id: this.book_id,
    //       title: this.title,
    //       author: this.author,
    //       images: this.images,
    //     })
    //     .then((docRef) => {
    //       console.log("Book added: ", docRef.id);
    //       this.$router.push("/showbook");
    //     })
    //     .catch((error) => {
    //       console.error("Error adding book: ", error);
    //     });
    // },
  },
  setup() {
    const file = ref2(null);
    const fileError = ref2(null);
    const filePath = ref2(null);
    const refurl = ref2(null);
    const books = ref2({
      title: "",
      author: "",
      price: "",
      photoUrl: "",
      filePath: "",
    });
    const types = ["image/png", "image/jpeg"];

    const handleChange = (e) => {
      let selected = e.target.files[0];

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image file (png or jpg)";
      }
    };
    const handleSubmit = async () => {
      await uploadImage(file.value);
      let apiURL = "http://localhost:4000/api/create-book";

      books.value.photoUrl = refurl.value;
      books.value.filePath = filePath.value;

      console.log(books.value);

      axios
        .post(apiURL, books.value)
        .then(() => {
          router.push("/showbook");
          books.value = {
            title: "",
            author: "",
            price: "",
            photoUrl: "",
            filePath: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const uploadImage = async (file) => {
      filePath.value = `bookPhotos/${file.name}`;
      const storage = getStorage();
      const storageRef = ref(storage, filePath.value);
      try {
        await uploadBytes(storageRef, file);
        refurl.value = await getDownloadURL(ref(storage, filePath.value));
      } catch (err) {
        console.log(err.message);
      }
    };
    return {
      handleChange,
      handleSubmit,
      fileError,
      books
    };
  },
};
</script>

<style scoped>
.img-wrap {
  position: relative;
}
.img-wrap span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrap span.delete-img:hover {
  cursor: pointer;
}
.form-control {
  text-align: center;
  padding: 70px 0;
}
</style>
  
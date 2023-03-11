<template>
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
        <div class="form-group">
          <div class="input-field col s12">
            <input type="file" @change="handleChange" class="form-control" />
            <label>Upload a Photo</label>
          </div>
        </div>
        <div class="modal-footer">
          <router-link to="/audiobook" class="btn btn-dark">Cancel</router-link>
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
import { ref as ref2 } from "@vue/reactivity";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import router from "@/router";

export default {
  name: "addaudiobook",
  // data() {
  //   return {
  //     audiobook: {
  //       title: "",
  //       author: "",
  //       description: "",
  //       price: "",
  //       rating: "",
  //       listeners: "",
  //     },
  //   };
  // },
  // methods: {
  //   handleSubmit() {
  //     let apiURL = "http://localhost:4000/api/create-audiobook";

  //     axios
  //       .post(apiURL, this.audiobook)
  //       .then(() => {
  //         this.$router.push("/audiobook");
  //         this.audiobook = {
  //           title: "",
  //           author: "",
  //           description: "",
  //           price: "",
  //           rating: "",
  //           listeners: "",
  //         };
  //       })
  //       .catch((error) => {
  //         console.log(error.response.data);
  //       });
  //   },
  // },
  setup() {
    const file = ref2(null);
    const fileError = ref2(null);
    const filePath = ref2(null);
    const refurl = ref2(null);
    const audiobook = ref2({
      title: "",
      author: "",
      description: "",
      price: "",
      rating: "",
      listeners: "",
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
      let apiURL = "http://localhost:4000/api/create-audiobook";

      audiobook.value.photoUrl = refurl.value;
      audiobook.value.filePath = filePath.value;

      console.log(audiobook.value);

      axios
        .post(apiURL, audiobook.value)
        .then(() => {
          router.push("/audiobook");
          audiobook.value = {
            title: "",
            author: "",
            description: "",
            price: "",
            rating: "",
            listeners: "",
            photoUrl: "",
            filePath: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const uploadImage = async (file) => {
      filePath.value = `audiobookPhotos/${file.name}`;
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
      audiobook,
    };
  },
};
</script>
  
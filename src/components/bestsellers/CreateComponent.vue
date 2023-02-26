<template>
  <div id="addbestseller">
    <h3>New Bestseller</h3>

    <div class="modal-dialog">
      <div class="modal-content">
        <form class="form" @submit.prevent="handleSubmit">
          <div class="modal-header">
            <h4 class="modal-title">Add Bestseller</h4>
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
              <label>Title:</label>
              <input type="text" v-model="bestsellers.title" required />
            </div>
            <div class="form-group">
              <label>Author:</label>
              <input type="text" v-model="bestsellers.author" required />
            </div>
            <div class="form-group">
              <label>Price:</label>
              <input type="text" v-model="bestsellers.price" required />
            </div>
            <div class="form-group">
              <label>Available:</label>
              <input type="text" v-model="bestsellers.isAvailable" required />
            </div>
          </div>
          <div class="form-group">
            <div class="input-field col s12">
              <input type="file" @change="handleChange" class="form-control" />
              <label>Upload a Photo</label>
            </div>
          </div>
          <div class="modal-footer">
            <router-link to="/showbestseller" class="btn btn-dark"
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
</template>
  
  <script>
import { ref as ref2 } from "@vue/reactivity";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import axios from "axios";
import router from "@/router";

export default {
  name: "addbestseller",
  setup() {
    const file = ref2(null);
    const fileError = ref2(null);
    const filePath = ref2(null);
    const refurl = ref2(null);
    const bestsellers = ref2({
      title: "",
      author: "",
      price: "",
      isAvailable: "",
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
      let apiURL = "http://localhost:4000/api/create-bestseller";

      bestsellers.value.photoUrl = refurl.value;
      bestsellers.value.filePath = filePath.value;

      console.log(bestsellers.value);

      axios
        .post(apiURL, bestsellers.value)
        .then(() => {
          router.push("/showbestseller");
          bestsellers.value = {
            title: "",
            author: "",
            price: "",
            isAvailable: "",
            photoUrl: "",
            filePath: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const uploadImage = async (file) => {
      filePath.value = `bestsellerPhotos/${file.name}`;
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
      bestsellers,
    };
  },
};
</script>
  
<style>
.form-group {
  width: 440px;
  margin: 0 auto;
}
</style>
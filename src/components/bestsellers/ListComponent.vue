<template>
  <h3>Bestsellers</h3>
  <div
    class="container"
    v-for="Bestsellers in Bestsellers"
    v-bind:key="Bestsellers._id"
  >
    <div class="row" >
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
            v-bind:src="Bestsellers.photoUrl"
            style="
              height: 200px;
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 50%;
            "
          />
          <div class="card-body">
            <h5 class="card-title">{{ Bestsellers.title }}</h5>
            <p class="card-text">Author: {{ Bestsellers.author }}</p>
            <p class="card-text">Price: {{ Bestsellers.price }} $</p>
            <p class="card-text">Available: {{ Bestsellers.isAvailable }}</p>
          </div>
          <router-link to="/editbestseller">
            <button class="btn btn-secondary">Edit</button>
          </router-link>
          <router-link to="/delete-bestseller">
            <button class="btn btn-danger">Delete</button>
          </router-link>
          <router-link to="/cart">
            <button @click="handleSubmit(Bestsellers)" class="btn btn-success">Add to Cart</button>
          </router-link>
          <!-- <add-to-cart :Bestsellers="Bestsellers" @removeFromCart="removeFromCart($event)" @addToCart="addToCart($event)"/> -->
        </div>
      </div>
    </div>
  </div>
  <router-link to="/addbestseller">
    <button class="btn btn-primary">Add a Bestseller</button>
  </router-link>
</template>
  
  <script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import addtocart from "../Cart/addtocart.vue";
import router from "@/router";
import { getAuth } from "@firebase/auth";
import getUser from "@/getUser";

export default {
  components: {addtocart},
  name: "showbestseller",
  data() {
    return {
      Bestsellers: [],
      //bestseller: Bestsellers.find((b) => b.id === this.$route.params.id)
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/get-bestseller";
    axios
      .get(apiURL)
      .then((res) => {
        this.Bestsellers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api/delete-bestseller/${id}`;
      let indexOfArrayItem = this.Bestsellers.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Bestsellers.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    addToCart: function(Bestsellers){
        this.$emit('addToCart',Bestsellers);
    },
    removeFromCart:function(Bestsellers){
        this.$emit('removeFromCart',Bestsellers);
    },
    handleSubmit: function(Bestsellers){
      let apiURL = "http://localhost:4000/api/create-cart";
      Bestsellers.userId = this.id;
      
      
      axios
        .post(apiURL, Bestsellers)
        .then(() => {
          router.push("/cart");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  setup() {
    const filePath = ref(null);
    const { user } = getUser();

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
    return { id }
  },
};
</script>
  
  <style>
.btn-success {
  margin-right: 10px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

</style>
  
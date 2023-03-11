<template>
  <h3>Bestsellers</h3>
  <div class="container">
    <div class="row">
      <div
        class="col card"
        v-for="Bestsellers in Bestsellers"
        v-bind:key="Bestsellers._id"
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
        <router-link :to="'/editbestseller/' + Bestsellers._id">
          <button class="btn btn-secondary">Edit</button>
        </router-link>
        <router-link to="/delete-bestseller">
          <button
            class="btn btn-danger"
            @click="deletebestseller(Bestsellers._id)"
          >
            Delete
          </button>
        </router-link>

        <button
          @click="handleSubmit(Bestsellers)"
          class="btn btn-success"
          style="width: 120px; text-align: center; margin: auto"
        >
          Add to Cart
        </button>
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
  components: { addtocart },
  name: "showbestseller",
  data() {
    return {
      Bestsellers: [],
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

    let apiURL = "http://localhost:4000/api/get-bestseller";
    await axios
      .get(apiURL)
      .then((res) => {
        this.Bestsellers = [];
        res.data.forEach((d) => {
          if (!this.cartRegistry.has(d._id)) {
            this.Bestsellers.push(d);
            console.log(true);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deletebestseller(id) {
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
    handleSubmit: function (Bestsellers) {
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
  computed: {
    checkId2: function () {
      return true;
    },
  },
};
</script>
  
 <style scoped>
/*
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
}
.container {
  width: 1100px;
  margin: 0 auto;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
} 
 .card{
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
    width: 30%;
            max-width: 350%;
            height: 110%;
            max-height: 110%;
            padding: 0;
            border-radius: 25px;
}
.container{
  box-sizing: border-box;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .col {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
}
.col {
  float: left;
  width: 25%;
  padding: 0 10px;
} */
</style>
  
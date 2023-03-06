<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div
          class="card h-10"
          style="width: 250px"
          v-for="Audiobook in Audiobook"
          :key="Audiobook._id"
        >
          <div class="card-block">
            <p>Audiobook</p>
            <h2 class="card-title">{{ Audiobook.title }}</h2>
            <h3 class="card-title" style="color: #486856">
              {{ Audiobook.author }}
            </h3>
            <p class="card-text">{{ Audiobook.description }}</p>
            <p class="card-text">{{ Audiobook.listeners }}</p>
            <p class="card-text">
              {{ Audiobook.rating }} / 10
              <img src="../../assets/star.png" class="star" />
            </p>
            <p class="card-text">
              <small class="text-muted">{{ Audiobook.price }} $</small>
            </p>
            <button @click="handleSubmit(Audiobook)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bookmarks"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
                />
                <path
                  d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
                />
              </svg>
            </button>
            <router-link to="/delete-audiobook">
            <button
              class="btn btn-danger"
              @click="deleteaudiobook(Audiobook._id)"
            >
              Delete
            </button>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/addaudiobook">
    <button class="btn btn-primary">Add audiobook</button>
  </router-link>
</template>

<script>
import axios from "axios";
import getUser from "@/getUser";
import { ref } from "@vue/reactivity";
import router from "@/router";

export default {
  data() {
    return {
      Audiobook: [],
    };
  },
  async created() {
    let apiURL2 = "http://localhost:4000/api/get-saved/";
    await axios
      .get(apiURL2 + this.id)
      .then((res) => {
        res.data.forEach((d) => {
          this.savedRegistry.set(d._id, d);
        });
      })
      .catch((error) => {
        console.log(error);
      });

    let apiURL = "http://localhost:4000/api/get-audiobook";
    await axios
      .get(apiURL)
      .then((res) => {
        this.Audiobook = [];
        res.data.forEach((d) => {
          if (!this.savedRegistry.has(d._id)) {
            this.Audiobook.push(d);
            console.log(true);
          }
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
  methods: {
    handleSubmit: function (Audiobook) {
      let apiURL = "http://localhost:4000/api/create-saved";
      Audiobook.userId = this.id;

      axios
        .post(apiURL, Audiobook)
        .then(() => {
          router.push("/saved");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteaudiobook(id) {
      let apiURL = `http://localhost:4000/api/delete-audiobook/${id}`;
      let indexOfArrayItem = this.Audiobook.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Audiobook.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
  },
},
  setup() {
    const { user } = getUser();
    const savedRegistry = ref(new Map());

    const id = user.value.uid;

    return { id, savedRegistry };
  },
}
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}

.row > div[class*="col-"] {
  display: flex;
}

.star {
  height: 20px;
  width: 20px;
}
</style>
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
            <p class="card-text">{{ Audiobook.listeners }} listeners</p>
            <p class="card-text">
              {{ Audiobook.rating }} / 10
              <img src="../../assets/star.png" class="star" />
            </p>
            <p class="card-text">
              <small class="text-muted">{{ Audiobook.price }} $</small>
            </p>
            <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-save"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"
              />
            </svg>
          </button>
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

export default {
  data() {
    return {
      Audiobook: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/get-audiobook";
    axios
      .get(apiURL)
      .then((res) => {
        this.Audiobook = res.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};
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
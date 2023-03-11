<template>
  <section class="h-100 h-custom">
    <div class="container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="table-responsive">
            <table
              class="table"
              v-for="Audiobook in Audiobook"
              v-bind:key="Audiobook._id"
            >
              <thead>
                <tr>
                  <th scope="col" class="h5">Your Saved Audiobooks</th>
                  <th scope="col">Listeners</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Price</th>
                  <th scope="col">Favorite</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div class="d-flex align-items-center">
                      <div class="flex-column ms-4">
                        <p class="mb-2">{{ Audiobook.title }}</p>
                        <p class="mb-0">{{ Audiobook.author }}</p>
                      </div>
                    </div>
                  </th>
                  <td class="align-middle">
                    <p class="mb-0" style="font-weight: 500">
                      {{ Audiobook.listeners }}
                    </p>
                  </td>
                  <td class="align-middle">
                    <p class="mb-0" style="font-weight: 500">
                      {{ Audiobook.rating }} / 10
                    </p>
                  </td>
                  <td class="align-middle">
                    <p class="mb-0" style="font-weight: 500">
                      $ {{ Audiobook.price }}
                    </p>
                  </td>
                  <td class="align-middle">
                    <div id="heartbox" class="mb-0">
                      <input type="checkbox" class="checkbox" id="checkbox" />
                      <label for="checkbox">
                        <svg
                          id="heart-svg"
                          viewBox="467 392 58 57"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Group"
                            fill="none"
                            fill-rule="evenodd"
                            transform="translate(467 392)"
                          >
                            <path
                              d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
                              id="heart"
                              fill="#AAB8C2"
                            />
                            <circle
                              id="main-circ"
                              fill="#E2264D"
                              opacity="0"
                              cx="29.5"
                              cy="29.5"
                              r="1.5"
                            />

                            <g
                              id="heartgroup7"
                              opacity="0"
                              transform="translate(7 6)"
                            >
                              <circle
                                id="heart1"
                                fill="#9CD8C3"
                                cx="2"
                                cy="6"
                                r="2"
                              />
                              <circle
                                id="heart2"
                                fill="#8CE8C3"
                                cx="5"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="heartgroup6"
                              opacity="0"
                              transform="translate(0 28)"
                            >
                              <circle
                                id="heart1"
                                fill="#CC8EF5"
                                cx="2"
                                cy="7"
                                r="2"
                              />
                              <circle
                                id="heart2"
                                fill="#91D2FA"
                                cx="3"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="heartgroup3"
                              opacity="0"
                              transform="translate(52 28)"
                            >
                              <circle
                                id="heart2"
                                fill="#9CD8C3"
                                cx="2"
                                cy="7"
                                r="2"
                              />
                              <circle
                                id="heart1"
                                fill="#8CE8C3"
                                cx="4"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="heartgroup2"
                              opacity="0"
                              transform="translate(44 6)"
                            >
                              <circle
                                id="heart2"
                                fill="#CC8EF5"
                                cx="5"
                                cy="6"
                                r="2"
                              />
                              <circle
                                id="heart1"
                                fill="#CC8EF5"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="heartgroup5"
                              opacity="0"
                              transform="translate(14 50)"
                            >
                              <circle
                                id="heart1"
                                fill="#91D2FA"
                                cx="6"
                                cy="5"
                                r="2"
                              />
                              <circle
                                id="heart2"
                                fill="#91D2FA"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="heartgroup4"
                              opacity="0"
                              transform="translate(35 50)"
                            >
                              <circle
                                id="heart1"
                                fill="#F48EA7"
                                cx="6"
                                cy="5"
                                r="2"
                              />
                              <circle
                                id="heart2"
                                fill="#F48EA7"
                                cx="2"
                                cy="2"
                                r="2"
                              />
                            </g>

                            <g
                              id="heartgroup1"
                              opacity="0"
                              transform="translate(24)"
                            >
                              <circle
                                id="heart1"
                                fill="#9FC7FA"
                                cx="2.5"
                                cy="3"
                                r="2"
                              />
                              <circle
                                id="heart2"
                                fill="#9FC7FA"
                                cx="7.5"
                                cy="2"
                                r="2"
                              />
                            </g>
                          </g>
                        </svg>
                      </label>
                    </div>
                  </td>
                  <td>
                    <router-link to="/cart">
            <button @click="handleSubmit(Audiobook)" class="btn btn-success">
              Add to Cart
            </button>
          </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <router-link to="/audiobook">
            <button class="btn btn-primary">Go back</button>
          </router-link>
          <router-link to="/cart">
            <button class="btn btn-success">Go to Cart</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import getUser from "@/getUser";
import axios from "axios";
import { ref } from "@vue/reactivity";
import router from "@/router";

export default {
  data() {
    return {
      Audiobook: [],
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

    let apiURL = "http://localhost:4000/api/get-saved/";
    axios
      .get(apiURL + this.id)
      .then((res) => {
        this.Audiobook = [];
        res.data.forEach((d) => {
          if (!this.cartRegistry.has(d._id)) {
            this.Audiobook.push(d);
          }
        });
        // console.log(res.data);
        // this.Audiobook = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleSubmit: function (Audiobook) {
      let apiURL = "http://localhost:4000/api/create-cart";
      Audiobook.userId = this.id;

      axios
        .post(apiURL, Audiobook)
        .then(() => {
          router.push("/cart");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  setup() {
    const { user } = getUser();
    const cartRegistry = ref(new Map());

    const id = user.value.uid;

    return { id , cartRegistry};
  },
};
</script>

<style scoped>
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
}

body {
  background-color: #fafafa;
}

.heartbox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
svg {
  cursor: pointer;
  overflow: visible;
  width: 60px;
  margin: 20px;
}

svg #heart {
  transform-origin: center;
  animation: animateHeartOut 0.3s linear forwards;
}

svg #main-circ {
  transform-origin: 29.5px 29.5px;
}

.checkbox {
  display: none;
}

.checkbox:checked + label svg #heart {
  transform: scale(0.2);
  fill: #e2264d;
  animation: animateHeart 0.3s linear forwards 0.25s;
}

.checkbox:checked + label svg #main-circ {
  transition: all 2s;
  animation: animateCircle 0.3s linear forwards;
  opacity: 1;
}

.checkbox:checked + label svg #heartgroup1 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}

.checkbox:checked + label svg #heartgroup1 #heart1 {
  transform: scale(0) translate(0, -30px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup1 #heart2 {
  transform: scale(0) translate(10px, -50px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup2 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}

.checkbox:checked + label svg #heartgroup2 #heart1 {
  transform: scale(0) translate(30px, -15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup2 #heart2 {
  transform: scale(0) translate(60px, -15px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup3 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}

.checkbox:checked + label svg #heartgroup3 #heart1 {
  transform: scale(0) translate(30px, 0px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup3 #heart2 {
  transform: scale(0) translate(60px, 10px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup4 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}

.checkbox:checked + label svg #heartgroup4 #heart1 {
  transform: scale(0) translate(30px, 15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup4 #heart2 {
  transform: scale(0) translate(40px, 50px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup5 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}

.checkbox:checked + label svg #heartgroup5 #heart1 {
  transform: scale(0) translate(-10px, 20px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup5 #heart2 {
  transform: scale(0) translate(-60px, 30px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup6 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}

.checkbox:checked + label svg #heartgroup6 #heart1 {
  transform: scale(0) translate(-30px, 0px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup6 #heart2 {
  transform: scale(0) translate(-60px, -5px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup7 {
  opacity: 1;
  transition: 0.1s all 0.3s;
}

.checkbox:checked + label svg #heartgroup7 #heart1 {
  transform: scale(0) translate(-30px, -15px);
  transform-origin: 0 0 0;
  transition: 0.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup7 #heart2 {
  transform: scale(0) translate(-55px, -30px);
  transform-origin: 0 0 0;
  transition: 1.5s transform 0.3s;
}

.checkbox:checked + label svg #heartgroup2 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}

.checkbox:checked + label svg #heartgroup3 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}

.checkbox:checked + label svg #heartgroup4 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}

.checkbox:checked + label svg #heartgroup5 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}

.checkbox:checked + label svg #heartgroup6 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}

.checkbox:checked + label svg #heartgroup7 {
  opacity: 1;
  transition: 0.1s opacity 0.3s;
}

@keyframes animateCircle {
  40% {
    transform: scale(10);
    opacity: 1;
    fill: #dd4688;
  }
  55% {
    transform: scale(11);
    opacity: 1;
    fill: #d46abf;
  }
  65% {
    transform: scale(12);
    opacity: 1;
    fill: #cc8ef5;
  }
  75% {
    transform: scale(13);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.5;
  }
  85% {
    transform: scale(17);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.2;
  }
  95% {
    transform: scale(18);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0.1;
  }
  100% {
    transform: scale(19);
    opacity: 1;
    fill: transparent;
    stroke: #cc8ef5;
    stroke-width: 0;
  }
}

@keyframes animateHeart {
  0% {
    transform: scale(0.2);
  }
  40% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes animateHeartOut {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>

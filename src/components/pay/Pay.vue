<template>
  <section style="background-color: #eee">
    <form @submit.prevent="handleSubmitForm">
      <div class="container py-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-4">
            <div class="card rounded-3">
              <div class="card-body mx-1 my-2">
                <div class="d-flex align-items-center">
                  <div>
                    <i class="fab fa-cc-visa fa-4x text-black pe-3"></i>
                  </div>
                  <div>
                    <p class="d-flex flex-column mb-0">
                      Your account :<b>{{ user.email }}</b
                      ><span class="small text-muted"></span>
                    </p>
                  </div>
                </div>
                <div class="d-flex flex-column mb-0">
                  <div class="form-group">
                    <label>Card Number:</label>
                    <input type="text" v-model="Pay.card" required />
                  </div>
                </div>

                <div class="pt-3">
                  <div class="d-flex flex-row pb-3">
                    <div
                      class="
                        rounded
                        border border-primary border-2
                        d-flex
                        w-100
                        p-3
                        align-items-center
                      "
                      style="background-color: rgba(18, 101, 241, 0.07)"
                    >
                      <div class="d-flex align-items-center pe-3">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabelX"
                          id="radioNoLabel11"
                          value=""
                          aria-label="..."
                          checked
                        />
                      </div>
                      <div class="d-flex flex-column">
                        <p class="mb-1 small text-primary">Total amount due</p>
                        <h6 class="mb-0 text-primary">${{ totalPrice }}</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between align-items-center pb-1"
                >
                  <router-link to="/cart"
                    ><button class="btn btn-primary btn-block">
                      Go back
                    </button></router-link
                  >
                  <div class="form-group">
                    <button
                      class="btn btn-success btn-lg btn-block"
                      style="margin: 0 auto; width: 150px"
                    >
                      Pay amount
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import getUser from "@/getUser";
import { ref } from "@vue/reactivity";
import axios from "axios";

export default {
  data() {
    return {
      Pay: {
        card: "",
        price: "",
      },
      Bestsellers: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api/get-cart/";
    axios
      .get(apiURL + this.id)
      .then((res) => {
        console.log(res.data);
        this.Bestsellers = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-pay";

      axios
        .post(apiURL, this.Pay)
        .then(() => {
          this.$router.push("/done");
          this.Pay = {
            card: "",
            price: "",
          };
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  computed: {
    totalPrice() {
      return this.Bestsellers.reduce(
        (sum, item) => sum + Number(item.price),
        0
      );
    },
  },
  setup() {
    const email = ref("");
    const { user, userRole } = getUser();
    const id = user.value.uid;
    return {
      user,
      userRole,
      id,
    };
  },
};
</script>
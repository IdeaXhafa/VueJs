<template>
  <h1>Hi ! {{ user.email }}</h1>
  <p>{{ checkLastSignIn }}</p>
  <h4>What would you like to shop for today?</h4>
  <section class="pt-4">
    <div class="container px-lg-5">
      <div class="row gx-lg-5">
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100" style="box-shadow: 0px -1px 12px grey;">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="
                  feature
                  bg-primary bg-gradient
                  text-white
                  rounded-3
                  mb-4
                  mt-n4
                "
              >
                <i class="bi bi-collection"></i>
              </div>
              <h2 class="fs-4 fw-bold">Books</h2>
              <p class="mb-0">
                Find what you love
              </p>
              <p class="mb-0">
                <router-link to="./showbook"
                  ><button class="btn btn-primary">
                    SHOP NOW
                  </button></router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100" style="box-shadow: 0px -1px 12px grey;">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="
                  feature
                  bg-primary bg-gradient
                  text-white
                  rounded-3
                  mb-4
                  mt-n4
                "
              >
                <i class="bi bi-cloud-download"></i>
              </div>
              <h2 class="fs-4 fw-bold">Audiobooks</h2>
              <p class="mb-0">
                With the Best ratings
              </p>
              <p class="mb-0">
                <router-link to="./audiobook"
                  ><button class="btn btn-primary">
                    SHOP NOW
                  </button></router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100" style="box-shadow: 0px -1px 12px grey;">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="
                  feature
                  bg-primary bg-gradient
                  text-white
                  rounded-3
                  mb-4
                  mt-n4
                "
              >
                <i class="bi bi-cloud-download"></i>
              </div>
              <h2 class="fs-4 fw-bold">Bestsellers</h2>
              <p class="mb-0">
                Meet our award-winning readings
              </p>
              <p class="mb-0">
                <router-link to="./showbestseller"
                  ><button class="btn btn-primary">
                    SHOP NOW
                  </button></router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-4 mb-5">
          <div class="card bg-light border-0 h-100" style="box-shadow: 0px -1px 12px black;">
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div
                class="
                  feature
                  bg-primary bg-gradient
                  text-white
                  rounded-3
                  mb-4
                  mt-n4
                "
              >
                <i class="bi bi-cloud-download"></i>
              </div>
              <h2 class="fs-4 fw-bold">Write us a message !</h2>
              <p class="mb-0">
                We will respond to you after you Contact Us
              </p>
              <p class="mb-0">
                <router-link to="./send-message"
                  ><button class="btn btn-success">
                    Contact Us
                  </button></router-link
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import "firebase/compat/auth";
import "firebase/compat/firestore";
import getUser from "@/getUser";
import { ref } from "@vue/reactivity";

export default {
  computed: {
    checkLastSignIn() {
      const givenDate = new Date(this.user.metadata.lastSignInTime);
      const currentDate = new Date();

      const timeDiff = currentDate.getTime() - givenDate.getTime();

      const diffDays = timeDiff / (1000 * 3600 * 24);

      const diffMonths = diffDays / 30;

      if (diffMonths > 1) {
        return "Moti sje dok";
      } else {
        return "Welcome";
      }
    },
  },
  setup() {
    const email = ref("");
    const { user, userRole } = getUser();
    return {
      user,
      userRole,
    };
  },
};
</script>

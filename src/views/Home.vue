<script setup >
import { Icon } from "@iconify/vue";
import Footer from "./Footer.vue";
import { ShowBook } from "../components/Books/ShowBook.vue";
//import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"

</script>

<template>
 <header class="py-5">
  <div class="container px-lg-5">
      <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
          <div class="m-4 m-lg-5">
            <img src="../assets/b.jpeg" class="bookPic" />
              <h1 class="display-5 fw-bold">Welcome to e-books!</h1>
              <p class="fs-4">We assure quality <br />
      and top prices <br />
      for all our sales!</p>
      <router-link to="./showbook"
      ><button class="btn btn-primary">SHOP NOW</button></router-link
    >
          </div>
      </div>
  </div>

    </header>
        <!-- Page Content-->
        <section class="pt-4">
            <div class="container px-lg-5">
                <!-- Page Features-->
                <div class="row gx-lg-5">
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-collection"></i></div>
                                <h2 class="fs-4 fw-bold">Easy Returns</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
                                <h2 class="fs-4 fw-bold">Call us anytime</h2>
                            </div>
                        </div>
                    </div>
     
                </div> 
                <div class="deals">
    <h3 style="align-items: center">Deal of the Day !</h3>
    <h2>Up To 50 % Off</h2>
    <h3>For the 5 first purchases as a client</h3>
    <h6>Want to become a client?</h6>
    <router-link to="./signup"
      ><button class="btn btn-secondary">Join Us Now</button></router-link
    >
  </div>

            </div>
        </section>
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; 2023</p></div>
        </footer>
    
</template>



<style scoped>

.home {

  background-color: white;
  padding: 80px;
}
.icons {
  background-color: #d3d3d3c6;
  height: 100%;
  width: 100%;
  display: flex;
  padding: 90px;
}
.content1 {
  width: 35%;
}
.content2 {
  width: 15%;
}
.content3 {
  width: 25%;
  padding: 10px;
}

.content4 {
  width: 20%;
}
.bookPic {
  width: 690px;
  float: right;
  padding-right: 30px;
}
.deals {
  background-color: #d3d3d3;
  height: 400px;
  justify-content: center;
  align-items: center;
  padding: 80px;
}
</style>
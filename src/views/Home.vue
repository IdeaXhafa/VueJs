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
              <h1 class="display-5 fw-bold">A warm welcome!</h1>
              <p class="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
              <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
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
                                <h2 class="fs-4 fw-bold">Fresh new layout</h2>
                                <p class="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
                                <h2 class="fs-4 fw-bold">Free to download</h2>
                                <p class="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-card-heading"></i></div>
                                <h2 class="fs-4 fw-bold">Jumbotron hero header</h2>
                                <p class="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-bootstrap"></i></div>
                                <h2 class="fs-4 fw-bold">Feature boxes</h2>
                                <p class="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-code"></i></div>
                                <h2 class="fs-4 fw-bold">Simple clean code</h2>
                                <p class="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-patch-check"></i></div>
                                <h2 class="fs-4 fw-bold">A name you trust</h2>
                                <p class="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
  <!-- <div class="home">
    <img src="../assets/b.jpeg" class="bookPic" />
    <br />
    <br />
    <h1>Welcome to e-books!</h1>
    <h3>
      We assure quality <br />
      and top prices <br />
      for all our sales!
    </h3>
    <router-link to="./showbook"
      ><button class="btn btn-primary">SHOP NOW</button></router-link
    >
  </div>
  <br /><br /><br /><br /><br /><br />
  <div class="icons">
    <div class="content1">
      <Icon icon="dashicons:buddicons-pm" />
      <h3>free shipping</h3>
      <p>order over $100</p>
    </div>
    <li>
      {{ user }}
    </li>

    <div class="content2">
      <Icon icon="openmoji:add-button" />
      <h3>secure payment</h3>
      <p>100 % secure payment</p>
    </div>
    <div class="content3">
      <Icon icon="dashicons:image-rotate" />
      <h3>easy returns</h3>
      <p>10 days returns</p>
    </div>
    <div class="content4">
      <Icon icon="dashicons:buddicons-buddypress-logo" />
      <h3>24/7 support</h3>
      <p>call us anytime</p>
    </div>
  </div>
  <ShowBook />
  <div class="deals">
    <h3 style="align-items: center">Deal of the Day !</h3>
    <h2>Up To 50 % Off</h2>
    <h3>For the 5 first purchases as a client</h3>
    <h6>Want to become a client?</h6>
    <router-link to="./signup"
      ><button class="btn btn-secondary">Join Us Now</button></router-link
    >
  </div>
  <Footer /> -->
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
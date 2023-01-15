<script setup >
import { Icon } from '@iconify/vue'
import Footer from './Footer.vue';

</script>

<template>

  <div class="home">
    <img src="../assets/b.jpeg" class="bookPic">
    <br/>
    <br/>
    <h1>Welcome to e-books!</h1>
    <h3>We assure quality <br/> and top prices <br/> for all our sales!</h3>
    <router-link to="./showbook"><button class="btn btn-primary">SHOP NOW</button></router-link>
  </div>
  <br/><br/><br/><br/><br/><br/>
    <div class="icons">
      <div class="content1">
          <Icon icon="dashicons:buddicons-pm"/>
            <h3>free shipping</h3>
            <p>order over $100</p>
        </div>
        <div class="content2">
          <Icon icon="openmoji:add-button"/>
            <h3>secure payment</h3>
            <p>100 % secure payment</p>
        </div>
        <div class="content3">
          <Icon icon="dashicons:image-rotate"/>
            <h3>easy returns</h3>
            <p>10 days returns</p>
        </div>
        <div class="content4">
          <Icon icon="dashicons:buddicons-buddypress-logo"/>
            <h3>24/7 support</h3>
            <p>call us anytime</p>
        </div>
    </div>

    <div class="deals">
        <h3>Deal of the Day !</h3>
        <h2>Up To 50 % Off</h2>
        <h3>For the 5 first purchases as a client</h3>
        <h6>Want to become a client?</h6>
        <router-link to="./signup"><button class="btn btn-secondary">Join Us Now</button></router-link>
    </div>
    <Footer/>
</template>

<style scoped>

.home{
  background-color: white;
}
.icons{
  background-color: #D3D3D3;
  height: 100%;
  width: 100%;
  display: flex;
}
.content1{
  width: 35%;
}
.content2{
  width: 15%;
}
.content3{
  width: 25%;
  padding: 10px;
}

.content4{
  width: 20%;
}
.bookPic{
  width: 690px;
  float: right;
  padding-right: 30px; 
}
.deals{
  background-color: #b5cae9;
  height: 400px;
  justify-content: center;
  align-items: center;
}
</style>
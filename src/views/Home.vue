<!-- <template>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Home',
    components: {
  
    }
  }
  </script>
   -->

<script setup >
import { Icon } from '@iconify/vue'
import Footer from './Footer.vue';

</script>

<template>
  <!-- <Icon icon="dashicons:admin-site"
  />
  Home Page -->

  <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>

  <div class="home">
    <h3>Welcome to e-books!</h3>
    <br/>
    <br/>
    
  </div>

  <div class="icons">
        <div class="content1">
          <Icon icon="dashicons:buddicons-pm"/>
            <h3>free shipping</h3>
            <p>order over $100</p>
        </div>
    </div>

    <div class="icons">
        <div class="content2">
          <Icon icon="openmoji:add-button"/>
            <h3>secure payment</h3>
            <p>100 secure payment</p>
        </div>
    </div>

    <div class="icons">
        <div class="content3">
          <Icon icon="dashicons:image-rotate"/>
            <h3>easy returns</h3>
            <p>10 days returns</p>
        </div>
    </div>

    <div class="icons">
        <div class="content4">
          <Icon icon="dashicons:buddicons-buddypress-logo"/>
            <h3>24/7 support</h3>
            <p>call us anytime</p>
        </div>
    </div>
    <Footer/>
</template>

<style scoped>
  
.content1{
  position: absolute;
  left: 200px;
  width: 300px;
  padding: 10px;
}

.content2{
  position: absolute;
  left: 520px;
  width: 300px;
  padding: 10px;
}

.content3{
  position: absolute;
  right: 330px;
  width: 300px;
  padding: 10px;
}

.content4{
  position: absolute;
  right: 50px;
  width: 300px;
  padding: 10px;
}

</style>
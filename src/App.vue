<template>
 
  <Sidebar/>
  <div :style="{ 'margin-left': sidebarWidth }">
  <Home/>
  <router-view/>
  </div>
  <!-- <nav>
    <router-link to="/"> Home </router-link> |
    <router-link to="/feed"> Feed </router-link> |
    <router-link to="/signup"> Sign Up </router-link> |
    <router-link to="/login"> Log In </router-link> |
    <button @click="handleLogOut" v-if="isLoggedIn">Log Out</button>
  </nav> -->
</template>

<script>
// import { onMounted, ref } from 'vue';
// import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
// import { useRouter } from 'vue-router';
import Sidebar from './components/sidebar/Sidebar.vue';
import { sidebarWidth } from './components/sidebar/state';
import { Home } from './views/Home.vue'

export default {
  // name: 'App',
  components: {
      Sidebar,
      Home,
      setup(){
        return { sidebarWidth }
      }
  }
}

// const router = useRouter();
// const isLoggedIn = ref(false);

// let auth;
// onMounted(()=> {
//   auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       isLoggedIn.value = true;
//     } else {
//       isLoggedIn.value = false;
//     }
//   });
// });


// const handleLogOut = () => {
//   signOut(auth).then(() => {
//     router.push("/");
//   });
// };

//import HelloWorld from './components/HelloWorld.vue'
//import AppHeader from '@/components/AppHeader.vue'
// import Navbar from '@/components/Navbar.vue';


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

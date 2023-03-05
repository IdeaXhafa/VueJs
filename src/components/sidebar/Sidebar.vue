<script>
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { useRouter } from "vue-router";
import SidebarLink from "./SidebarLink.vue";
import { Icon } from "@iconify/vue";
import Login from "@/views/Login.vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Signup } from "../../views/Signup.vue";
import getUser from "@/getUser";
import { auth } from "@/firebase";

export default {
  props: {},
  components: {
    SidebarLink,
    Login,
  },
  setup() {
    function handleLogout() {
      signOut(auth);
      console.log(user.value);
    }
    const { user } = getUser();
    console.log(user);
    return {
      collapsed,
      toggleSidebar,
      user,
      handleLogout,
    };
  },
};

const router = useRouter();
const isLoggedIn = ref(false);
const email = ref("");


</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <img src="../../assets/books.png" width="30" height="30" />
      </span>
      <span v-else>e-books</span>
    </h1>
    <Icon icon="dashicons:admin-home" />
    <SidebarLink to="/">Home</SidebarLink>
    <SidebarLink to="/feed">Feed</SidebarLink>
    <SidebarLink v-if="!user" to="/signup">Sign Up</SidebarLink>
    <SidebarLink v-if="!user" to="/login">Log In</SidebarLink>

    <SidebarLink to="/dashboard">Clients</SidebarLink>
    <SidebarLink to="/showbook">Books</SidebarLink>
    <SidebarLink to="/audiobook">AudioBooks</SidebarLink>
    <SidebarLink to="/showbestseller">Best Sellers</SidebarLink>
    <!-- <SidebarLink to="/read-pagesa">Pagesa</SidebarLink> -->
    <SidebarLink to="/cart">Your Cart</SidebarLink>
    <SidebarLink to="/saved">Saved</SidebarLink>
    <SidebarLink to="/cards">Cards</SidebarLink>
    <SidebarLink to="/send-message">Contact Us</SidebarLink>
    <SidebarLink to="/dash">Dashboard</SidebarLink>
    <SidebarLink to="/all-users">Admin Dashboard</SidebarLink>

    <SidebarLink to="" class="nav-link" v-if="user" @click="handleLogout"
      >Log Out</SidebarLink
    >
    
    <!-- <SidebarLink to="/contact">Contact Us</SidebarLink> -->
    <!-- <router-link to="/signup">
      <button class="btn btn-outline-success">Get Started</button>
    </router-link> -->

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <!-- <i class="fas fa-angle-left"></i> -->
      <img src="../../assets/arrow-left.png" width="20" height="20" />
    </span>

    <!-- <nav>
            <router-link to="/"> Home </router-link> |
            <router-link to="/feed"> Feed </router-link> |
            <router-link to="/signup"> Sign Up </router-link> |
            <router-link to="/login"> Log In </router-link> |
            <button @click="handleLogOut" v-if="isLoggedIn">Log Out</button>
        </nav> -->
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #9ab8f7;
  --sidebar-item-hover: #94a1ef;
  --sidebar-item-active: purple;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>

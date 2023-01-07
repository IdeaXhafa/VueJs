<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state';
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';
import SidebarLink from './SidebarLink.vue'
import { Icon } from '@iconify/vue'

export default {
    props: {

    },
    components: { 
      SidebarLink 
    },
    setup() {
        return { 
          collapsed, toggleSidebar, sidebarWidth
        }
    },
}

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(()=> {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});


const handleLogOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

</script>

<template>
    <div class="sidebar" :style="{width: sidebarWidth}">
        <h1>
            <span v-if="collapsed">
                <div>V</div>
                <div>S</div>
            </span>
            <span v-else>e-books</span>
        </h1>
        <Icon icon="dashicons:admin-home"/>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/feed" icon="fas fa-columns">Feed</SidebarLink>
        <SidebarLink to="/signup" icon="fas fa-users">Sign Up</SidebarLink>
        <SidebarLink to="/login" icon="fas fa-users">Log In</SidebarLink>
        <!-- <SidebarLink to="/books" icon="fas fa-users">Books</SidebarLink> -->

        <SidebarLink to="/new" >New Client</SidebarLink>
        <SidebarLink to="/:c_id" >View</SidebarLink>
        <SidebarLink to="/edit/:c_id" icon="fas fa-users">Edit</SidebarLink>

        <SidebarLink to="/dashboard" icon="fas fa-users">Dashboard</SidebarLink>
        <SidebarLink to="/showbook" icon="fas fa-users">Books</SidebarLink>
        <!-- <SidebarLink>
        <button @click="handleLogOut" v-if="isLoggedIn">Log Out</button>
        test
        </SidebarLink> -->
        <span class="collapse-icon"
        :class="{ 'rotate-180': collapsed }"
        @click="toggleSidebar"
        >
        <i class="fas fa-angle-double-left"></i>
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
.sidebar{
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

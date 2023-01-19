<template>
    <header>
        <div class="fixed-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">e-books</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <!-- <a class="nav-link" to="/">Home<span class="sr-only">(current)</span></a> -->
                        <SidebarLink to="/">Home</SidebarLink>
                    </li>
                    <li class="nav-item">
                        <SidebarLink to="/feed">Feed</SidebarLink>
                    </li>
                    <li class="nav-item">
                        <SidebarLink to="/dashboard">Clients</SidebarLink>
                    </li>
                    <li class="nav-item">
                        <SidebarLink to="/showbook">Books</SidebarLink>
                    </li>
                    <li class="nav-item">
                        <SidebarLink to="/read-pagesa">Pagesa</SidebarLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dashboard</a>
                    </li>
                    </ul>
                    <router-link to="/signup">
                    <button class="btn btn-outline-success">Get Started</button>
                </router-link>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
//import menuIcon from '../../assets/Icons/bars-regular.png'
import SidebarLink from '../sidebar/SidebarLink.vue';

export default ({
    name: 'navigation',
    components: {
        SidebarLink
        // menuIcon
    },
    data() {
        return{
            // mobile: null,
            // mobileNav: null,
            // windowWidth: null
        };
    }
})
</script>



<style lang="scss" scoped>

</style>
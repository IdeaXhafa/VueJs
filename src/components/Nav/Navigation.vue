<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link class="header" to="/">E-Library</router-link>
            </div>
            <div class="nav-links">
                <ul>
                <router-links class="link" to="#">Home</router-links>
                <router-links class="link" to="#">Books</router-links>
                <router-links class="link" to="#">Clients</router-links>
                <router-links class="link" to="#">LogIn / Register</router-links>
                </ul>
            </div>
        </nav>
        <menu-icon class="menu-icon"/>
        <transition class="mobile-nav">
            <ul>
                <router-links class="link" to="#">Home</router-links>
                <router-links class="link" to="#">Books</router-links>
                <router-links class="link" to="#">Clients</router-links>
                <router-links class="link" to="#">LogIn / Register</router-links>
            </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from '../../assets/Icons/bars-regular.png'

export default ({
    // name: 'navigation',
    components: {
        menuIcon
    },
    data() {
        return{
            mobile: null,
            mobileNav: null,
            windowWidth: null
        };
    }
})
</script>



<style lang="scss" scoped>

</style>
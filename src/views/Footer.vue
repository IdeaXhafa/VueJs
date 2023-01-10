<template>
    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" to="/">E-Books</router-link>
                </div>
                <div class="col-2">
                    <ul>
                        <router-links class="link" to="#">Home</router-links>
                        <router-links class="link" to="#">Books</router-links>
                        <router-links class="link" to="#">Clients</router-links>
                        <router-links class="link" to="#">LogIn / Register</router-links>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p>Copyright 2023 All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>

export default ({
    name : 'footer-vue',
    components: {

    },
});
</script>


<style scoped>
    footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        margin-top: auto;
        padding: 100px 25px;
        background-color: #303030;

    }
    .container{
        display: flex;
        flex-direction: column;
        gap: 32px;
        @media (min.width: 800px) {
            flex-direction: row;
            gap: 0px;
        }
    }
    /* > div {
        display: flex;
        flex: 1;
    } */
    .left{
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min.width: 800px) {
            flex-direction: row;
            align-items: initial;
        }
    }
    .header{
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }
    .right{
        color: #fff;
    }

</style>

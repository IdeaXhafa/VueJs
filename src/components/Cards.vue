<template>
    <div class="card-wrap">
        <div class="container">
            <div class="cards">
                <p>test</p>
                <p>test</p>
            </div>
        </div>
    </div>
</template>

<script>

export default ({
    name: 'cards',
})
</script>

<style scoped>
    .card-wrap{
        position: relative;
        padding: 80px 16px;
        background-color: #f1f1f1;
        @media (min-width: 500px) {
            padding: 100px 16px;
        }
    }
    .cards{
        display: grid;
        gap: 32px;
        grid-template-columns: 1fr;
        @media (min-width: 500px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 900px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
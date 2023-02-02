<template>
    <div class="cart">
        <button class="btn btn-secondary">{{title}}</button>
        <p>{{ title }}</p>
    </div>
</template>

<script>

export default ({
    name: "cart",
    props: {
        msg: String,
        Btitle: String,
        Bauthor: String,
        Bbook_id: String
    },
    data(){
        return{
            title: this.title,
            author: this.author,
            book_id:this.book_id
        }
    }
})
</script>

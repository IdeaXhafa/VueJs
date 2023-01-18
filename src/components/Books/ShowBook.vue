<template>
  <h3>Books</h3>
  <div id="show-book">

    <div class="card" style="width: 18rem;" v-for="books in books" v-bind:key="books.id">
      <div class="card-body">
        <h6>{{ books.book_id }}</h6>
        <img v-bind:src="images"/>
        <!-- <div {{ books.images }}></div> -->
        <h5 class="card-title">{{ books.title }}</h5>
        <p class="card-text">{{ books.author }}</p>
        <button class="btn btn-primary" v-bind:to="{ 
            name: 'EditBook', 
            params: { book_id : parseInt(this.$route.params.book_id) }}" >Edit</button>
        <!-- <router-link 
            v-bind:to="{ 
            name: 'EditBook', 
            params: { book_id : parseInt(book_id) }}" >
            <button class="btn btn-primary">Edit</button>
        </router-link> -->
        <button @click="deleteBook" class="btn btn-danger">Delete</button>
      </div>
    </div>
    <router-link to="/addbook">
      <button class="btn btn-primary">Add a Book</button>
    </router-link>
  </div>
</template>

<script>
import { db } from '../../firebase'

export default {
  name: 'show-book',
  data() {
      return {
          books: [],
          images: []
      }
  },
  created () {
      db.collection('books').get().then
      (querySnapshot => {
          querySnapshot.forEach(doc => {
              const data = {
                  'id': doc.id,
                  'book_id': doc.data().book_id,
                  'title': doc.data().title,
                  'author': doc.data().author,
                  'images': doc.data().images
              }
              this.books.push(data)
          })
      }) 
  },
  methods: {
    deleteBook() {
      if(confirm("Are you sure?")) {                
        db.collection('books').where('book_id', '==', parseInt(this.$route.params.book_id)).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
          doc.ref.delete()
          })
        })
      }
    }  
  },
}
</script>

<style >
.card{
  float: right;
}
</style>
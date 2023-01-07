<template>
  <h3>Books</h3>
  <div id="show-book">

    <div class="card" style="width: 18rem;" v-for="books in books" v-bind:key="books.id">
      <div class="card-body">
        <h6>{{ books.book_id }}</h6>
        <h5 class="card-title">{{ books.title }}</h5>
        <p class="card-text">{{ books.author }}</p>
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
    <button class="btn btn-primary">Add a Book</button>
  </div>
</template>

<script>
import { db } from '../../firebase'

export default {
  name: 'show-book',
  data() {
      return {
          books: []
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
                  'author': doc.data().author
              }
              this.books.push(data)
          })
      }) 
  },
}
</script>

<style >
.card{
  float: right;
}
</style>
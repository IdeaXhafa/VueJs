<template>
  <div id="addbook">
    <h3>Edit Book</h3>
    <div class="row">
    <form @submit.prevent="updateClient" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="book_id" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="title" required>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="author" required>
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/show-book" class="btn grey">Cancel</router-link>
    </form>
  </div>
  </div>
</template>

<script>
import { db } from '../../firebase'


export default {
  name: 'edit-book',
  data () {
  return {
      book_id: null,
      title: null,
      author: null
      }
  },
  beforeRouteEnter (to, from, next) {
      db.collection('books').where('book_id', '==', parseInt(to.params.book_id)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next(vm => {
            vm.book_id = doc.data().book_id
            vm.title = doc.data().title
            vm.author = doc.data().author
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        db.collection('books').where('book_id', '==', this.$route.params.book_id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.book_id = doc.data().book_id
            this.title = doc.data().title
            this.author = doc.data().author
          })
        })
      },
      updateClient () {
        db.collection('books').where('book_id', '==', parseInt(this.$route.params.book_id)).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
              book_id: this.book_id,
              title: this.title,
              author: this.author
            })
            // .then(() => {
            //   this.$router.push({ name: 'view-client', params: { book_id: this.book_id }})
            // });
          })
        })
      }
    }
  }
</script>

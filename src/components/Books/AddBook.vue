<template>
  <div id="addbook">
    <h3>New Book</h3>
    <div class="row">
    <form @submit.prevent="saveEmployee" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="book_id" required>
          <label>Book ID#</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="title" required>
          <label>title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="author" required>
          <label>author</label>
        </div>
      </div>
      <div class="form-group">
        <!-- <div class="input-field col s12"> -->
          <input type="file" @change="uploadImage" class="form-control">
          <label>Upload a Photo</label>
        <!-- </div> -->
      </div>
      <button type="submit" class="btn">Submit</button>
      <router-link to="/showbook" class="btn grey">Cancel</router-link>
    </form>
  </div>
  </div>
</template>

<script>
import { db, fb } from '../../firebase'

    export default {
      name: 'addbook',
      data () {
        return {
          book_id: null,
          title: null,
          author: null
        }
      },
      methods: {
        saveEmployee () {
          db.collection('books').add({
            book_id: this.book_id,
            title: this.title,
            author: this.author
          })
          .then(docRef => {
            console.log('Book added: ', docRef.id)
            this.$router.push('/showbook')
          })
          .catch(error => {
            console.error('Error adding book: ', error)
          })
        },
        uploadImage(e) {

          let file = e.target.files[0];
          var storageRef = fb.storage().ref('bookPhotos/' + file.name);
          storageRef.put(file);

          console.log(e.target.files[0]);
        }
      }
    }
</script>
  
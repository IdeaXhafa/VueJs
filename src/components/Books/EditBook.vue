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
  name: 'EditBook',
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





<!-- <template>
    <b-row>
      <b-col cols="12">
        <h2>
          Edit Book
          <router-link :to="{ name: 'ShowBook', params: { id: key } }">(Show Book)</router-link>
        </h2>
        <b-jumbotron>
          <b-form @submit="onSubmit">
            <b-form-group id="titleGroup"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Title">
              <b-form-input id="title" v-model.trim="book.title"></b-form-input>
            </b-form-group>
            <b-form-group id="descGroup"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Description">
                <b-form-textarea id="description"
                           v-model="book.description"
                           placeholder="Enter something"
                           :rows="2"
                           :max-rows="6">{{book.description}}</b-form-textarea>
            </b-form-group>
            <b-form-group id="authorGroup"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Author">
              <b-form-input id="author" v-model.trim="book.author"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Update</b-button>
          </b-form>
        </b-jumbotron>
      </b-col>
    </b-row>
  </template>
  
  <script>
  
  import firebase from '../../firebase'
  import router from '../../router/index'
  
  export default {
    name: 'EditBook',
    data () {
      return {
        key: this.$route.params.id,
        book: {}
      }
    },
    created () {
      const ref = firebase.firestore().collection('books').doc(this.$route.params.id);
      ref.get().then((doc) => {
        if (doc.exists) {
          this.book = doc.data();
        } else {
          alert("No such document!");
        }
      });
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        const updateRef = firebase.firestore().collection('books').doc(this.$route.params.id);
        updateRef.set(this.book).then((docRef) => {
          this.key = ''
          this.book.title = ''
          this.book.description = ''
          this.book.author = ''
          router.push({ name: 'ShowBook', params: { id: this.$route.params.id }})
        })
        .catch((error) => {
          alert("Error adding document: ", error);
        });
      }
    }
  }
  </script>
  
  <style>
    .jumbotron {
      padding: 2rem;
    }
  </style>
   -->
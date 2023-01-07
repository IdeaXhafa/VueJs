<template>
    <b-row>
      <b-col cols="12">
        <h2>
          Book List
          <b-link href="#/add-book">(Add Book)</b-link>
        </h2>
        <b-table striped hover :items="books" :fields="fields">
          <template v-slot:cell(actions)="data">
            <b-button @click.stop="details(data.item)" variant="primary">Details</b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </template>
  
  <script>
  
  import firebase from '../../firebase'
  import router from '../../router/index'
  
  export default {
    name: 'BookList',
    data () {
      return {
        fields: [
          { key: 'title', label: 'Title', sortable: true, 'class': 'text-left' },
          { key: 'actions', label: 'Action', 'class': 'text-center' }
        ],
        books: [],
        errors: [],
        ref: firebase.firestore().collection('books'),
      }
    },
    created () {
      this.ref.onSnapshot((querySnapshot) => {
        this.books = [];
        querySnapshot.forEach((doc) => {
          this.books.push({
            key: doc.id,
            title: doc.data().title
          });
        });
      });
    },
    methods: {
      details (book) {
        router.push({ name: 'ShowBook', params: { id: book.key }})
      }
    }
  }
  </script>
  
  <style>
    .table {
      width: 96%;
      margin: 0 auto;
    }
  </style>
  
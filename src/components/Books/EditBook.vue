<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <form class="form" @submit.prevent="handleUpdateForm">
        <div class="modal-header">
          <h4 class="modal-title">Edit Book</h4>
          <router-link
            to="/showbook"
            data-dismiss="modal"
            aria-hidden="true"
            type="button"
            class="close"
            >&times;</router-link
          >
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Title</label>
            <input
              type="text"
              class="form-control"
              v-model="books.title"
              required
            />
          </div>
          <div class="form-group">
            <label>Author</label>
            <input
              type="text"
              class="form-control"
              v-model="books.author"
              required
            />
          </div>
        </div>

        <div class="modal-footer">
          <router-link to="/showbook" class="btn btn-dark"
            >Cancel</router-link
          >
          <button type="submit" class="btn btn-primary float-right">
            Update
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- <div id="addbook">
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
  </div> -->
</template>

<script>
import { db } from '../../firebase'


export default {
  name: 'edit-book',
  data () {
  return {
      book_id: null,
      title: null,
      author: null,
      books: {},
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
    created() {
    let apiURL = `http://localhost:4000/api/edit-book/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.bestseller = res.data;
    });
  },
    methods: {
      handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-book/${this.$route.params.id}`;

      axios
        .put(apiURL, this.bestseller)
        .then((res) => {
          console.log(res);
          this.$router.push("/showbook");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //   fetchData () {
    //     db.collection('books').where('book_id', '==', this.$route.params.book_id).get().then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         this.book_id = doc.data().book_id
    //         this.title = doc.data().title
    //         this.author = doc.data().author
    //       })
    //     })
    //   },
    //   updateClient () {
    //     db.collection('books').where('book_id', '==', parseInt(this.$route.params.book_id)).get().then((querySnapshot) => {
    //       querySnapshot.forEach((doc) => {
    //         doc.ref.update({
    //           book_id: this.book_id,
    //           title: this.title,
    //           author: this.author
    //         })
    //         // .then(() => {
    //         //   this.$router.push({ name: 'view-client', params: { book_id: this.book_id }})
    //         // });
    //       })
    //     })
    //   }
    }
  }
</script>

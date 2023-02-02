<template>
  <h3>Books</h3>
  <div id="show-book">
      <div class="row row-cols-1 row-cols-md-3" v-for="books in books" v-bind:key="books.id">
        <div class="col mb-4">
          <div class="card" style="width:330%; height: 200%; border-radius: 25px; ">
            <!-- <img class="card-img-top" src="" alt="Card image cap"> -->
            <input type="file" @change="showImage"/>
            <!-- <img :src="getImage(books.image)"/> -->
            <div class="p-1" v-for="image in images" :key="image">
              <div class="img-wrap">
                <img :src="image" alt="" style="width:130px"/>
              </div>
            </div>

            <div class="card-block">
                <h4 class="card-title">{{ books.title }}</h4>
                <p class="card-text">{{ books.author }}</p>

                <div class="card-block" style="position: absolute; bottom: 5px; margin-left: 40px;">

                  <router-link v-bind:to="{
                  name: 'view-book', 
                  params: {book_id: books.book_id}
                  }">
                      <button class="btn btn-secondary">View</button>
                  </router-link>


                  <button class="btn btn-primary" v-bind:to="{ 
                  name: 'EditBook', 
                  params: { book_id : parseInt(this.$route.params.book_id) }}" >Edit</button>
                  <button @click="deleteBook" class="btn btn-danger">Delete</button>
                  
                  <router-link to="/cart">
                    <button
                    :book_id="books.id"
                    :name="books.title"
                    :author="books.author"
                    class="btn btn-primary">Add To Cart</button>
                  </router-link>
                  <!-- <button v-if="books.cart" @click="add(book)" :disabled="book.cart">Book added to cart</button>  -->
                </div>
            </div>
          </div>
        </div>
    </div>
        <router-link to="/addbook">
        <button class="btn btn-primary">Add a Book</button>
        </router-link>
  </div>
</template>

<script>
import { db, fb } from '../../firebase'
import Cart from '../Cart/Cart.vue'

export default {
  name: 'showbook',
  data() {
      return {
          books: [],
          images: [],
          imageUrl: "",
          counter: 0
      }
  },
  mounted() {
    // const id = this.$route.params.id;
    // db.collection("books").get().then(doc => {
    //     if (doc.exists) {
    //         console.log(doc.data()) 
    //         this.imageurl = doc.data().imageUrl
    //     } else {
    //         console.log('no data')
    //     }
    // })
    // .catch(error => {
    // })
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
    },
    showImage(e) {
      if(e.target.files[0]){
          let file = e.target.files[0];
          var storageRef = fb.storage().ref('bookPhotos/' + file.name);
          let uploadTask = storageRef.put(file);
          console.log(file.name)
          uploadTask.on('state_changed', (snapshot) => {
          }, 
            (error) => {
            }, 
            () => {
            uploadTask.snapshot.ref.getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              this.images.push(downloadURL);
                console.log('File available at', downloadURL);
              });
            }
          );
      }
    },  
    getImage(images){
      return images[0];
    },
    add(book){
            this.books[book.id-1].cart = true
            this.cart.push(book)
            this.counter++
    },
  },
}
</script>

<style >
#show-book{
  height: 100%;
  width: 100%;
  display: flex;
  padding: 90px;
  /* flex-wrap: wrap; */
}
</style>
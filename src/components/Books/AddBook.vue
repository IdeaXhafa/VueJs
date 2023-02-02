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
        <div class="input-field col s12">
          <input type="file" @change="uploadImage" class="form-control">
          <label>Upload a Photo</label>
        </div>
      </div>
      <div class="form-group d-flex">
        <div class="p-1" v-for="(image,index) in images" :key="image">
          <div class="img-wrap">
            <img :src="image" alt="" style="width:130px"/>
            <span class="delete-img" @click="deleteImage(image, index)">x</span>
          </div>
        </div>
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
          author: null,
          images: []
        }
      },
      methods: {

        deleteImage(img, index) {
          let image = fb.storage().refFromURL(img);

          this.images.splice(index,1)
          image.delete().then(function() {
            console.log('image deleted');
          }).catch(function(error){
            console.log('an error occured');
          })
        },
        saveEmployee () {
          db.collection('books').add({
            book_id: this.book_id,
            title: this.title,
            author: this.author,
            images: this.images
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

          if(e.target.files[0]){
          let file = e.target.files[0];
          var storageRef = fb.storage().ref('bookPhotos/' + file.name);
          let uploadTask = storageRef.put(file);

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
        }
      }
    }
</script>

<style scoped>
.img-wrap{
  position: relative;
}
.img-wrap span.delete-img{
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrap span.delete-img:hover{
  cursor: pointer;
}
.form-control{
  text-align: center;
  padding: 70px 0;
}
</style>
  
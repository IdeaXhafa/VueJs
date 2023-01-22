
<template>
    <div id="view-book">
        <h3>View Book</h3>

        <table class="table" >
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Picture</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">{{ book_id }}</th>
                <td>{{ title }}</td>
                <td>{{ author }}</td>
                <td>{{ images }}</td>
            </tr>
        </tbody>
        </table>
        <router-link to="/showbook" class="btn btn-secondary">Back</router-link>
        <button @click="deleteClient" class="btn btn-danger">Delete</button>
        <router-link 
            v-bind:to="{ 
            name: 'edit-book', 
            params: { book_id : parseInt(book_id) }}" >
            <button class="btn btn-primary">Edit</button>
      </router-link>
    </div>
</template>

<script>
import { db } from '../../firebase'

export default {
    name: 'view-book',
    data: () => {
        return {
            book_id: null,
            title: null,
            author: null,
            images: []
        }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('books').where('book_id', '==', parseInt(to.params.book_id)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            next(vm => {
            vm.book_id = doc.data().book_id
            vm.title = doc.data().title
            vm.author = doc.data().author
            vm.images = doc.data().images
          })
        })
      })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods:{
        fetchData() {
            db.collection('books').where
            ('book_id', '==', 
            this.$route.params.book_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.book_id = doc.data().book_id
                    this.title = doc.data().title
                    this.author = doc.data().author
                    this.images = doc.data().images
                    
                    console.log(this.title)
                })
            })
        },
        deleteClient() {
            if(confirm("Are you sure?")) {                
                db.collection('books').where('book_id', '==', parseInt(this.$route.params.book_id)).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete()
                        // this.$router.push('/dashboard')
                    })
                })
            }
        }  
    }
}
</script>
<template>
    <div id="view-client">
        <h3>View Client</h3>

        <table class="table" style="width:50%; margin-left: auto;margin-right: auto;">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Aktiv</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">{{ c_id }}</th>
                <td>{{ name }}</td>
                <td>{{ email }}</td>
                <td>{{ aktiv }}</td>
            </tr>
        </tbody>
        </table>
        <router-link to="/dashboard" class="btn btn-secondary">Back</router-link>
        <button @click="deleteClient" class="btn btn-danger">Delete</button>
        <router-link 
            v-bind:to="{ 
            name: 'edit-client', 
            params: { c_id : parseInt(c_id) }}" >
            <button class="btn btn-primary">Edit</button>
        <!-- <i class="fa fa-pencil"></i> -->
      </router-link>
    </div>
</template>

<script>
import { db } from '../../firebase'

export default {
    name: 'view-client',
    data: () => {
        return {
            c_id: null,
            name: null,
            email: null,
            aktiv: null
        }
    },
    beforeRouteEnter (to, from, next) {
      db.collection('client').where('c_id', '==', parseInt(to.params.c_id)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            next(vm => {
            vm.c_id = doc.data().c_id
            vm.name = doc.data().name
            vm.email = doc.data().email
            vm.aktiv = doc.data().aktiv
          })
        })
      })
    },
    watch: {
        '$route': 'fetchData'
    },
    methods:{
        fetchData() {
            db.collection('client').where
            ('c_id', '==', 
            this.$route.params.c_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.c_id = doc.data().c_id
                    this.name = doc.data().name
                    this.email = doc.data().email
                    this.aktiv = doc.data().aktiv
                })
            })
        },
        deleteClient() {
            if(confirm("Are you sure?")) {                
                db.collection('client').where('c_id', '==', parseInt(this.$route.params.c_id)).get()
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

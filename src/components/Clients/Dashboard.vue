<template>
    <h3>Dashboard</h3>
    <h3>Clients</h3>
    <div id="dashboard">
        <table class="table" >
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client in client" v-bind:key="client.id">
            <th scope="row">{{ client.c_id }}</th>
                <td>{{ client.name }}</td>
                <td>{{ client.email }}</td>
                <th> 
                <router-link v-bind:to="{
                name: 'view-client', 
                params: {c_id: client.c_id}
                }">
                <button class="btn btn-secondary">View</button>
                <!-- <i class="fa fa-eye" aria-hidden="true"></i> -->
                </router-link>
                <button @click="deleteClient" class="btn btn-danger">Delete</button>
                <button class="btn btn-primary">Edit</button>
                </th>
            </tr>
        </tbody>
        </table>

        
        <!-- <ul class="collection with-header">
            <li class="collection-header"><h4>Clients</h4></li>
            <li v-for="client in client" v-bind:key="client.id" class="collection-item">
                {{ client.c_id }} : 
                {{ client.name }}

                <button class="btn btn-primary">View</button>
                <router-link class="secondary-content"
                v-bind:to="{
                name: 'view-client', 
                params: {c_id: client.c_id}
                }"
                >
                </router-link>
            </li>
        </ul> -->

    </div>
</template>

<script>
import { db } from '../../firebase'

export default {
    name: 'dashboard',
    data() {
        return {
            client: []
        }
    },
    created () {
        db.collection('client').get().then
        (querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'c_id': doc.data().c_id,
                    'name': doc.data().name,
                    'email': doc.data().email
                }
                this.client.push(data)
            })
        }) 
    },
    deleteClient() {
        if(confirm("Are you sure?")) {
            db.collection('client').where('c_id', '==',
            this.$route.params.c_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete()
                    this.$router.push('/dashboard')
                })
            })
        }
    }  
}
</script>

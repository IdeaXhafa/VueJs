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
                </th>
            </tr>
        </tbody>
        </table>

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
}
</script>

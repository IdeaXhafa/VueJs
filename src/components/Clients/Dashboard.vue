<template>
    <h3>Dashboard</h3>
    <h3>Clients</h3>
    <div id="dashboard">
        <table class="table table-bordered" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Aktiv</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="client in client" v-bind:key="client.id">
            <th scope="row">{{ client.c_id }}</th>
                <td>{{ client.name }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.aktiv }}</td>
                <th> 
                <router-link v-bind:to="{
                name: 'view-client', 
                params: {c_id: client.c_id}
                }">
                    <button class="btn btn-secondary">View</button>
                </router-link>
                </th>
            </tr>
        </tbody>
        </table>
        <router-link to="/new">
            <button class="btn btn-primary">Add</button>
        </router-link>
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
                    'email': doc.data().email,
                    'aktiv': doc.data().aktiv
                }
                this.client.push(data)
            })
        }) 
    },
}
</script>

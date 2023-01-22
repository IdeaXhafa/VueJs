<template>
    <h3>Users</h3>
    <div id="all-users">
        <table class="table table-bordered" style="width:50%; margin-left: auto;margin-right: auto;">
        <thead>
            <tr>
                <th scope="col" style="width:25%">Email</th>
                <th scope="col" style="width:15%">Role</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="users in users" v-bind:key="users.uid">
                <td>{{ users.email }}</td>
                <td>{{ users.role }}</td>
            </tr>
        </tbody>
        </table>
        <router-link to="/create-user">
            <button class="btn btn-primary">Create User</button>
        </router-link>
    </div>
</template>

<script>
import { db } from '../../firebase'

export default {
    name: 'all-users',
    data() {
        return {
            users: []
        }
    },
    created () {
        db.collection('users').get().then
        (querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'uid': doc.uid,
                    'email': doc.data().email,
                    'role': doc.data().role
                }
                this.users.push(data)
            })
        }) 
    },
}
</script>

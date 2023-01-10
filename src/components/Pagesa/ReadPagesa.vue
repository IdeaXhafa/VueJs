<template>
    <h3>Pagesa</h3>
    <div id="read-pagesa">
        <table class="table table-bordered" width="100%" cellspacing="0">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Data</th>
                <th scope="col">Shuma</th>
                <th scope="col">Aktive</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pagesa in pagesa" v-bind:key="pagesa.id">
            <th scope="row">{{ pagesa.p_id }}</th>
                <td>{{ pagesa.dataP }}</td>
                <td>{{ pagesa.shuma }}</td>
                <td>{{ pagesa.aktive }}</td>
                <th> 
                <!-- <router-link v-bind:to="{
                name: 'view-pagesa', 
                params: {p_id: pagesa.p_id}
                }">
                    <button class="btn btn-secondary">View</button>
                </router-link> -->
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
    name: 'read-pagesa',
    data() {
        return {
            pagesa: []
        }
    },
    created () {
        db.collection('pagesa').get().then
        (querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'p_id': doc.data().p_id,
                    'dataP': doc.data().dataP.toISOString(),
                    'shuma': doc.data().shuma,
                    'aktive': doc.data().aktive,
                    'c_id' : doc.data().c_id
                }
                this.pagesa.push(data)
            })
        }) 
    },
    // methods: {
    //     formatDate(dateString) {
    //         const date = new Date(dateString);
    //             // Then specify how you want your dates to be formatted
    //         return new Intl.DateTimeFormat( {dateStyle: 'long'}).format(date);
    //     }
    // },
    // computed: {
    //         formattedDate() {
    //             return this.formatDate(this.dataP);
    //         }
    // }
}
</script>

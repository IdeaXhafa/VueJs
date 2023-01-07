<template>
    <div id="new-client">
      <h3>Edit Client</h3>
      <div class="row">
      <form @submit.prevent="updateClient" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="c_id" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="email" required>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/dashboard" class="btn grey">Cancel</router-link>
      </form>
    </div>
    </div>
</template>
  
<script>
import { db } from '../../firebase'


export default {
    name: 'edit-client',
    data () {
    return {
        c_id: null,
        name: null,
        email: null
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection('client').where('c_id', '==', parseInt(to.params.c_id)).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            next(vm => {
              vm.c_id = doc.data().c_id
              vm.name = doc.data().name
              vm.email = doc.data().email
            })
          })
        })
      },
      watch: {
        '$route': 'fetchData'
      },
      methods: {
        fetchData () {
          db.collection('client').where('c_id', '==', this.$route.params.c_id).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.c_id = doc.data().c_id
              this.name = doc.data().name
              this.email = doc.data().email
            })
          })
        },
        updateClient () {
          db.collection('client').where('c_id', '==', parseInt(this.$route.params.c_id)).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.update({
                c_id: this.c_id,
                name: this.name,
                email: this.email,
              })
              .then(() => {
                this.$router.push({ name: 'view-client', params: { c_id: this.c_id }})
              });
            })
          })
        }
      }
    }
  </script>
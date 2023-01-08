<template>
    <div id="new-client">
      <h3>New client</h3>
      <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="c_id" required>
            <label>Client ID#</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="name" required>
            <label>Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="email" required>
            <label>Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="aktiv" required>
            <label>Aktiv</label>
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
        name: 'new-client',
        data () {
          return {
            c_id: null,
            name: null,
            email: null,
            aktiv: null
          }
        },
        methods: {
          saveEmployee () {
            db.collection('client').add({
            c_id: this.c_id,
              name: this.name,
              email: this.email,
              aktiv: this.aktiv
            })
            .then(docRef => {
              console.log('Client added: ', docRef.id)
              this.$router.push('/dashboard')
            })
            .catch(error => {
              console.error('Error adding client: ', error)
            })
          }
        }
      }
</script>
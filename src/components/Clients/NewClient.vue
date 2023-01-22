<template>
    <div id="new-client">
      <h3>New client</h3>
      <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12" id="form">
        <div class="row">
          <div class="input-field col s12">
            <label>Client ID: </label>
            <input type="text" v-model="c_id" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <label>Name: </label>
            <input type="text" v-model="name" required>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <label>Email: </label>
            <input type="text" v-model="email" required>
          </div>
        </div>
        <div class="row">
            <label>Aktiv: </label>
              <select v-model="aktiv" required>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
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

<style scoped>
#new-client{
  box-shadow: 0px -1px 12px #e5e5e5;
  border-radius: 20px;
  margin: auto;
  padding: 120px;
  width: 40%;
}
</style>

<template>
    <div id="create-user">
      <h3>New user</h3>
      <div class="row">
      <form @submit.prevent="saveUser" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="email" required>
            <label>Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="password" required>
            <label>Password</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="role" required>
            <label>Role</label>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
    </div>
  </template>
  
<script>
import { db } from '../../firebase'

      export default {
        name: 'create-user',
        data () {
          return {
            email: null,
            password: null,
            role: null
          }
        },
        methods: {
            saveUser () {
            db.collection('users').add({
                email: this.email,
                password: this.password,
                role: this.role
            })
            .then(docRef => {
              console.log('User added: ', docRef.uid)
              this.$router.push('/all-users')
            })
            .catch(error => {
              console.error('Error adding user: ', error)
            })
          }
        }
      }
</script>
<template>
    Feed
    <p>Hello 
    </p>
</template>

<script>
import Signup from './Signup.vue';
import { getAuth } from '@firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const getUser =  () => {
  firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(getAuth(), email.value)
      } else {
        console.log("You're not logged in !")
      }
    });
}

export default({
    setup() {
        return { 
        //   email
        }
    },
})
</script>

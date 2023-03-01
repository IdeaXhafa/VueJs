<template>
  Feed
  <h1>Hi ! {{ user.email}}</h1>
</template>

<script>
import Signup from "./Signup.vue";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import getUser from "@/getUser";
import { ref } from '@vue/reactivity';

// const getUser =  () => {
//   firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           console.log(getAuth(), email.value)
//       } else {
//         console.log("You're not logged in !")
//       }
//     });
// }

export default {
  setup() {
    const email = ref("");
    const { user , userRole} = getUser();
    return {
      user,
      userRole
    };
  },
};
</script>

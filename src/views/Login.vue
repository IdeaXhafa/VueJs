<template>
  <div class="form-wrap">
  <h3>Log In to an existing account</h3>
    <div class="inputs">
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>
  <p><button @click="signup" class="btn btn-primary">Submit</button></p>
  <p><button @click="signInWithGoogle" class="btn btn-secondary">Sign In With Google</button></p>
  <div class="ui message">
    Don't have an account?
    <router-link to="/signup">Register</router-link>
    <!-- <button @click="handleLogOut" v-if="isLoggedIn">Log Out</button> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import store from '../components/store/index';

// export default {
//   name: 'login',
// }

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const signup = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    console.log("Successfully logged in!");
    router.push('/feed') //redirect to feed once registered
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(getAuth(), user)
          console.log("HI"+ user)
        // User is signed in.
        // var email = user.email;
        // var uid = user.uid;
        // console.log("logged")
        // ...
      } else {
        // User is signed out.
        // ...
        console.log("You're not logged in !")
      }
    });
  })
  .catch((error) => {
    console.log(error.code);
    switch (error.code) {
        case "auth/invalid-email":
        errMsg.value = "Invalid Email";
        break;
        case "auth/user-not-found":
        errMsg.value = "No account with that email was found";
        break;
        case "auth/wrong-password":
        errMsg.value = "Incorrect Password";
        break;
        default:
          errMsg.value = "Email or Password is incorrect";
        break;
    }
    alert(error.message);
  })
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
    })
    .catch((error) => {
      //handle error
    })
}

</script>

<style scoped>
  .form-wrap{
    margin: auto;
    padding: 120px;
    width: 40%;
    box-shadow: 0px -1px 12px #555555;
    border-radius: 20px;
  }
</style>
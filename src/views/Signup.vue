<template>
  <div class="form-wrap">
    <h3>Create an account</h3>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signup" class="btn btn-primary">Submit</button></p>
    <p>
      <button @click="signInWithGoogle" class="btn btn-secondary">
        Sign In With Google
      </button>
    </p>
    <div class="ui message">
      Have an account already?
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "@/firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// export default {
//   name: 'signup',
// }

const email = ref("");
const password = ref("");
const router = useRouter();

const signup = async () => {
  try {
    const res = await createUserWithEmailAndPassword(
      getAuth(),
      email.value,
      password.value
    );
    await setDoc(doc(db, "users", res.user.uid),{role: "user", email: email.value, password: password.value});

    router.push("/feed"); //redirect to feed once registered
    
  } catch (error) {
    throw error;
  }

  firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(getAuth(), email.value)
      } else {
        console.log("You're not logged in !")
      }
  });

  // .then((data) => {
};
//   })
//   .catch((error) => {
//     console.log(error.code);
//     alert(error.message);
//   })
// };

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(email.value)
        // User is signed in.
      } else {
        // User is signed out.
        // ...
        console.log("You're not logged in !")
      }
    });
    })
    .catch((error) => {
      //handle error
    });
};
</script>

<style scoped>
.form-wrap {
  margin: auto;
  padding: 120px;
  width: 40%;
  box-shadow: 0px -1px 12px #555555;
  border-radius: 20px;
}
</style>
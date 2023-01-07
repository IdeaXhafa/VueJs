<template>
  <h1>Log In to an existing account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="signup" class="btn btn-primary">Submit</button></p>
  <p><button @click="signInWithGoogle" class="btn btn-secondary">Sign In With Google</button></p>
  <div class="ui message">
    Don't have an account?
    <router-link to="/signup">Register</router-link>
    <!-- <button @click="handleLogOut" v-if="isLoggedIn">Log Out</button> -->
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router'

const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const signup = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    console.log("Successfully registered!");
    router.push('/feed') //redirect to feed once registered
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

// const isLoggedIn = ref(false);

// let auth;
// onMounted(()=> {
//   auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       isLoggedIn.value = true;
//     } else {
//       isLoggedIn.value = false;
//     }
//   });
// });

// const handleLogOut = () => {
//   signOut(auth).then(() => {
//     router.push("/");
//   });
// };

</script>
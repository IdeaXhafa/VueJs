<template>
  <div class="form-wrap">
  <h3>Create an account</h3>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="signup" class="btn btn-primary">Submit</button></p>
    <p><button @click="signInWithGoogle" class="btn btn-secondary">Sign In With Google</button></p>
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
  signInWithPopup, } from "firebase/auth";
import { useRouter } from 'vue-router'

const email = ref("")
const password = ref("")
const router = useRouter()

const signup = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) => {
    console.log("Successfully registered!");
    router.push('/feed') //redirect to feed once registered
  })
  .catch((error) => {
    console.log(error.code);
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
};

</script>

<style scoped>
.form-wrap{
  margin: auto;
  padding: 120px;
}
</style>
import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
// import '@fortawesome/fontawesome-free/js/all'
import '@fortawesome/fontawesome-free'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import store from './components/store'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDCrOv4DeyYTAvBXJIIhGsMRuhrl6GApm0",
//   authDomain: "vue-app-38a16.firebaseapp.com",
//   projectId: "vue-app-38a16",
//   storageBucket: "vue-app-38a16.appspot.com",
//   messagingSenderId: "416252943148",
//   appId: "1:416252943148:web:e2e62fd22a6a67975d2a89",
//   measurementId: "G-MJ3R5RSSHC"
// };

// const firebase = initializeApp(firebaseConfig);
// export const db = getFirestore(firebase);


// const analytics = getAnalytics(app);

// Vue.config.productionTip = false
// Vue.use(VueRouter)
// Vue.use(BootstrapVue)



// const firebaseApp = firebase.initializeApp(firebaseConfig)

// const db = firebaseApp.firestore()
// const usersCollection = db.collection('users')

// export const createUser = user => {
//   return usersCollection.add(user)
// }

// export const getClinet = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

// export const useLoadUsers = () => {
//   const users = ref([])
//   usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
//   })
//   onMounted(close)
//   return users
// }

const app = createApp(App)

app.use(router)
// app.use(store)
app.mount('#app')

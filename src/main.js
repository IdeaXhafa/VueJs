import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import store from './components/store'

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

const app = createApp(App)

app.use(router)
// app.use(store)
app.mount('#app')

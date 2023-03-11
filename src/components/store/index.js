// import Vue from "vue";
// import Vuex from "vuex";
// import { db } from '../../firebase'
// import "firebase/auth"
// Vue.use(Vuex)


// export default new Vuex.Store({
//     state : {
//     user: null,
//     profileEmail: null,
//     profileId: null,
//     profileInitials: null,
//     },
//     mutations : {
//         updateUser(state,payload) {
//             state.user = payload;
//         },
//         setProfileInfo(state, doc){
//             state.profileId = doc.id;
//             state.profileEmail = doc.email;
//         },
//         // setProfileInitials(state){
//         //     state.profileInitials
//         // },
//     },
//     actions : {
//         async getCurrentUser({commit}) {
//             const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
//             const dbResults = await dataBase.get();
//             commit("setProfileInfo",dbResults);
//             // commit("setProfileInitials");

//             console.log(dbResults);
//         },
//     }
// })

import Vue from "vue";
import Vuex from "vuex";
//Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        reset:false
    },
    getters: {
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        emptyCart(state) {
            state.reset = true;
        },
        resetCart(state) {
            state.reset = false;
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        }
    }
});
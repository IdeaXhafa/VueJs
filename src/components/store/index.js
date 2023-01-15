import Vue from "vue";
import Vuex from "vuex";
import { db } from '../../firebase'
import "firebase/auth"
Vue.use(Vuex)


export default new Vuex.Store({
    state : {
    user: null,
    profileEmail: null,
    profileId: null,
    profileInitials: null,
    },
    mutations : {
        updateUser(state,payload) {
            state.user = payload;
        },
        setProfileInfo(state, doc){
            state.profileId = doc.id;
            state.profileEmail = doc.email;
        },
        // setProfileInitials(state){
        //     state.profileInitials
        // },
    },
    actions : {
        async getCurrentUser({commit}) {
            const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
            const dbResults = await dataBase.get();
            commit("setProfileInfo",dbResults);
            // commit("setProfileInitials");

            console.log(dbResults);
        },
    }
})
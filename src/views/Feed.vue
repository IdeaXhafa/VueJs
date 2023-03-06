<template>
  <h1>Hi ! {{ user.email}}</h1>
  <p>{{ checkLastSignIn }}</p>
</template>

<script>
import "firebase/compat/auth";
import "firebase/compat/firestore";
import getUser from "@/getUser";
import { ref } from '@vue/reactivity';


export default {
  computed: {
    checkLastSignIn(){
      const givenDate = new Date(this.user.metadata.lastSignInTime);
      const currentDate = new Date();

      const timeDiff = currentDate.getTime() - givenDate.getTime();

      const diffDays = timeDiff / (1000 * 3600 * 24);

      const diffMonths = diffDays / 30;

      if(diffMonths > 1){
        return "Moti sje dok"
      }
      else{
        return "Welcome"
      }
    }
  },
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

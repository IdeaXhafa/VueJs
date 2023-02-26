import { ref } from "vue";

// firebase imports
import { auth, db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

// refs
const user = ref(auth.currentUser);

// auth changes
onAuthStateChanged(auth, async (_user) => {
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
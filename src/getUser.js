import { ref } from "vue";

// firebase imports
import { auth, db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// refs
const user = ref(auth.currentUser);
const userRole = ref("");

// auth changes
onAuthStateChanged(auth, async (_user) => {
  user.value = _user;
  //Get User Role from Users Collection
  if (_user) {
    const userSnap = await getDoc(doc(db, "users", _user.uid));
    if (userSnap) {
      userRole.value = userSnap.data().role;
    }
  }
});

const getUser = () => {
  return { user, userRole };
};

export default getUser;




// import { ref } from "vue";

// // firebase imports
// import { auth, db } from "@/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// // refs
// const user = ref(auth.currentUser);

// // auth changes
// onAuthStateChanged(auth, async (_user) => {
//   user.value = _user;
// });

// const getUser = () => {
//   return { user };
// };

// export default getUser;
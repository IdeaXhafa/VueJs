import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dashboard from '@/components/Clients/Dashboard'
import ViewClient from '@/components/Clients/ViewClient'
import EditClient from '@/components/Clients/EditClient'
import NewClient from '@/components/Clients/NewClient'
import ShowBook from "@/components/Books/ShowBook.vue";
import ReadPagesa from "@/components/Pagesa/ReadPagesa.vue";
import AddBook from "@/components/Books/AddBook.vue";
import dashboard from "@/components/admin/dashboard.vue";
import EditBook from "@/components/Books/EditBook.vue";
import Admin from "@/components/auth/Admin.vue";
import CreateUser from "@/components/auth/CreateUser.vue";
import { auth, db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

// import VueRouter from 'vue-router'
const requireAuth = (to, from, next) => {
    let user = auth.currentUser;
  if (!user) {
    next({ name: "login" });
  } else {
    next();
  }
}

const requireAdmin = async (to, from, next) => {
    const userSnap = await getDoc(doc(db, "users", auth.currentUser?.uid));
    if (userSnap?.data()?.role === "admin") {
      next();
      return;
    }
    next('/');
};

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home.vue")},
        { path: "/signup", component: () => import("../views/Signup.vue")},
        { path: "/login",name: 'login', component: () => import("../views/Login.vue")},
        { path: "/thankyou", component: () => import("../components/contact/ThankYou.vue")},
        { path: "/logs",beforeEnter: requireAdmin, component: () => import("../components/Logs.vue")},
        { path: "/send-message", component: () => import("../components/contact/CreateComponent.vue")},
        { path: "/get-messages", component: () => import("../components/contact/ListComponent.vue")},
        { path: "/audiobook", component: () => import("../components/audiobooks/Audiobook.vue")},
        { path: '/addaudiobook', name: 'addaudiobook', component: () => import("../components/audiobooks/CreateAudiobook.vue")},
        { path: "/cart", component: () => import("../components/Cart/Cart.vue")},
        { path: "/saved", component: () => import("../components/Saved/Saved.vue")},
        { path: '/showbestseller',name: 'showbestseller', component: () => import("../components/bestsellers/ListComponent.vue")},
        { path: '/addbestseller',name: 'addbestseller', component: () => import("../components/bestsellers/CreateComponent.vue")},
        { path: '/editbestseller/:id',name: 'editbestseller', component: () => import("../components/bestsellers/EditComponent.vue")},
        { path: '/edit-book/:id',name: 'edit-book', component: () => import("../components/Books/EditBook.vue")},
        { path: "/chat", component: () => import("../views/Chat.vue")},
        { path: "/pay", component: () => import("../components/pay/Pay.vue")},
        {
            path: '/view',
            name: 'view',
            component: () => import('../components/bestsellers/ListComponent'),
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('../components/bestsellers/EditComponent'),
          },
        { path: "/feed", component: () => import("../views/Feed.vue"),
        meta: {
            requiresAuth: true,
        },
        },
        { path: '/dashboard', beforeEnter: requireAuth, name: 'dashboard', component: Dashboard},
        { path: '/new', name: 'new-client', component: NewClient},
        { path: '/edit/:c_id', name: 'edit-client', component: EditClient},
        { path: '/:c_id', name: 'view-client', component: ViewClient},
        { path: '/showbook', component: () => import("../components/Books/ShowBook.vue")},
        { path: '/read-pagesa', name: 'read-pagesa', component: ReadPagesa},
        { path: '/addbook', beforeEnter: requireAdmin, name: 'AddBook', component: AddBook},
        { path: '/all-users', 
        name: 'all-users', 
        component: Admin,
        meta: {
            requiredAuthorization: true, // You can enable/disable authorization 
            roles: ['admin'] // This can be accessed by only admin
        }
        },
        { path: '/create-user', name: 'create-user', component: CreateUser},
        { path: '/dash', component: () => import("../components/admin/dashboard.vue")}
    ],
});

// const routes = [
//     {
//         path: '/',
//         name: 'Home',
//         component: Home
//     },
//     {
//         path: '/edit/:id',
//         name: 'Edit',
//         component: Edit
//     }

// ]

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async(to, from, next) => {
    if(to.matched.some((record) => record.meta.requiresAuth)){
        if(await getCurrentUser) {
            next();
        } else {
            alert("you do not have access!");
            next("/");
        }
    } else {
        next();
    }
});


export default router;
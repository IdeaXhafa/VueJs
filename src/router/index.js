import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dashboard from '@/components/Clients/Dashboard'
import ViewClient from '@/components/Clients/ViewClient'
import EditClient from '@/components/Clients/EditClient'
import NewClient from '@/components/Clients/NewClient'
import ShowBook from "@/components/Books/ShowBook.vue";
import ReadPagesa from "@/components/Pagesa/ReadPagesa.vue";
import Cards from "@/components/Cards.vue";
import AddBook from "@/components/Books/AddBook.vue";
import dashboard from "@/components/admin/dashboard.vue";
import ViewBook from "@/components/Books/ViewBook.vue";
import EditBook from "@/components/Books/EditBook.vue";
import Admin from "@/components/auth/Admin.vue";
import CreateUser from "@/components/auth/CreateUser.vue";
// import VueRouter from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home.vue")},
        { path: "/signup", component: () => import("../views/Signup.vue")},
        { path: "/login",name: 'login', component: () => import("../views/Login.vue")},
        { path: "/contact", component: () => import("../views/ContactUs.vue")},
        { path: "/add-to-cart", component: () => import("../components/audiobooks/AddToCart.vue")},
        { path: "/cart", component: () => import("../components/Cart/Cart.vue")},
        { path: "/upload", component: () => import("../components/book/upload.vue")},
        { path: "/chat", component: () => import("../views/Chat.vue")},
        {
            path: '/create-magazine',
            component: () => import('../components/magazines/Create.vue'),
        },
        {
            path: '/magazines',
            component: () => import('../components/magazines/List.vue'),
        },
        {
            path: '/create-bestseller',
            name: 'home',
            component: () => import('../components/bestsellers/CreateComponent'),
        },
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
        //{ path: '/edit/id' , name: 'Edit', component: Edit, },
        //{ path: '/booklist', name: 'BookList', component: BookList}
        { path: '/dashboard', name: 'dashboard', component: Dashboard},
        { path: '/new', name: 'new-client', component: NewClient},
        { path: '/edit/:c_id', name: 'edit-client', component: EditClient},
        { path: '/:c_id', name: 'view-client', component: ViewClient},
        { path: '/showbook', name: 'show-book', component: ShowBook},
        { path: '/read-pagesa', name: 'read-pagesa', component: ReadPagesa},
        { path: '/cards', name: 'cards', component: Cards},
        { path: '/addbook', name: 'AddBook', component: AddBook},
        { path: '/:book_id', name: 'view-book', component: ViewBook},
        { path: '/edit/:book_id', name: 'edit-book', component: EditBook},
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
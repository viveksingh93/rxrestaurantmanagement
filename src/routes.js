import HomeComp from "./components/HomeComp.vue"
import Signup from "./components/signUp.vue"
import LoginComp from './components/LoginComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import AddReview from './components/AddReview.vue'
import EditReview from './components/EditReview.vue'

import { createWebHistory, createRouter } from 'vue-router'

const routes=[{
    name: 'Home',
    path: '/',
    component: HomeComp
},
{
    name: 'Signup',
    path: '/Sign-up',
    component: Signup
},
{
    name: 'Login',
    path: '/Login',
    component: LoginComp
},
{
    name: 'Header',
    path: '/Header',
    component: HeaderComp
},
{
    name: 'Add',
    path: '/Add-Review',
    component: AddReview
},
{
    name: 'Update',
    path: '/Edit-Review/:id',
    component: EditReview
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SignIn from "./components/SignIn.vue";
import SignUp from "./components/SignUp.vue";
import {createWebHashHistory, createRouter} from 'vue-router'

const routes = [
    { path: '/', component: SignIn },
    { path: '/signup', component: SignUp },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');

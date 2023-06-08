import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'

//import HeaderTop from './components/HeaderTop'
import Frontpage from './components/Frontpage'
//import SecondHeader from './components/SecondHeader'
import LoginPage from './components/LoginPage'
import overLay from './components/overLay'

const routes = [
    { path: "/", component: Frontpage},
    { path: "/login", component: LoginPage},
    { path : "/overlay", component: overLay}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css'

//import HeaderTop from './components/HeaderTop'
import Frontpage from './components/Frontpage'
//import SecondHeader from './components/SecondHeader'
import LoginPage from './components/LoginPage'

const routes = [
    { path: "/", component: Frontpage},
    { path: "/login", component: LoginPage}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')

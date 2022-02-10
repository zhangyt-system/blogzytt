import VueRouter from "vue-router";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Vue from "vue";
Vue.use(VueRouter);
console.log(Write);
export default new VueRouter({
    routes: [
        {  
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/home',
            name:'Home',
            component:Home
        },
        {
            path:'/write',
            name:'Write',
            component:Write
        }
    ]
})
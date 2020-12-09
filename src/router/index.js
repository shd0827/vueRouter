import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/home"
import HomeLeft from "@/components/home-left"
import Homea from "@/components/homea"

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/hello",
      name: "HelloWorld1",
      component: HelloWorld
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      redirect: {
        name: "homeLeft"
      },
      children: [
        {
          path: "/home/homeLeft",
          name: "homeLeft",
          component: HomeLeft
        },
        {
          path: "/home/homea",
          name: "homea",
          component: Homea
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log("to--->", to);
  console.log("form--->", from);
  next();
})
export default router;

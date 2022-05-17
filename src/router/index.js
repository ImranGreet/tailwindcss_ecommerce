import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component:()=>import("@/layouts/UserLayouts.vue"),
    children:[
      {
        path:"",
        name:"sortProducts",
        component:()=>import(/* webpackChunkName: "sortedproducts" */ "@/components/user/SortedProducts.vue"),
      },
      {
        path:"registration",
        name:"registration",
        component:()=>import(/* webpackChunkName: "registration" */ "@/components/user/RegistrationForm.vue"),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

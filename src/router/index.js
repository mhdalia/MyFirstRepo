import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogDetailLeftSidebar from '../views/BlogDetailLeftSidebar.vue'
import Error from '../views/Error.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import BlogDetailRightSidebar from '../views/BlogDetailRightSidebar.vue'
import BlogFullWidth from '../views/BlogFullWidth.vue'
import ContactUs from '../views/ContactUs.vue'
import ElemetsAccordions from '../views/ElemetsAccordions.vue'
import Faq from '../views/Faq.vue'
import Login from '../views/Login.vue'
import Product360LeftSidebar from '../views/Product360LeftSidebar.vue'
import Product360RightSidebar from '../views/Product360RightSidebar.vue'
import Register from '../views/Register.vue'
import ShopFullWidthCol5 from '../views/ShopFullWidthCol5.vue'
import ThankYou from '../views/ThankYou.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
    path: '/BlogDetailLeftSidebar',
    name: 'blogdetailleftsidebar',
    component: BlogDetailLeftSidebar,

    },
    {
      path: '/BlogDetailRightSidebar',
      name: 'blogdetailrightsidebar',
      component: BlogDetailRightSidebar,
  
      },

    {
      path: '/Error',
      name: 'error',
      component: Error,
    },

    {
      path: '/Cart',
      name: 'cert',
      component: Cart,
    },

    {
      path: '/Checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/BlogFullWidth',
      name: 'blogfullwidth',
      component: BlogFullWidth,
    },
    {
      path: '/ContactUs',
      name: 'contactus',
      component: ContactUs,
      
    },
    {
      path: '/ElemetsAccordions',
      name: 'elemetsaccordions',
      component: ElemetsAccordions,
      
    },
    {
      path: '/Faq',
      name: 'faq',
      component: Faq,
      
    },
    {
      path: '/Login',
      name: 'login',
      component: Login,
      
    },
    {
      path: '/Product360LeftSidebar',
      name: 'product360leftsidebar',
      component: Product360LeftSidebar,
       
    },
    {
      path: '/Product360RightSidebar',
      name: 'Product360RightSidebar',
      component: Product360RightSidebar,
       
    },
    {
      path: '/Register',
      name: 'register',
      component: Register,
      
    },
    {
      path: '/ShopFullWidthCol5',
      name: 'shopfullwidthcol5',
      component: ShopFullWidthCol5,
      
    },

    {
      path: '/ThankYou',
      name: 'thankyou',
      component: ThankYou,
      
    },

    {
      path: '/about',
      name: 'about',
     component: () => import('../views/AboutView.vue')
    }

  ]
})

export default router

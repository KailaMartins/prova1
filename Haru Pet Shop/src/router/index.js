import { createRouter, createWebHistory } from 'vue-router'
import ProductsCRUD from '../views/ProductsCRUD.vue'
import ProductsCards from '../views/ProductsCards.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', redirect: '/produtos' },
  { path: '/produtos', name: 'Produtos', component: ProductsCards },
  { path: '/crud', name: 'Gerenciamento de Produtos', component: ProductsCRUD },
  { path: '/sobre', name: 'Sobre', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

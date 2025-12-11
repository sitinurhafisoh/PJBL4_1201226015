// Create '@/router.js'

import { createRouter, createWebHistory } from 'vue-router'
import Todo from '@/views/Todo.vue'
import Completed from './views/Completed.vue'
import TaskDetail from "./views/TaskDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Todo },
    { path: '/completed', component: Completed },
      { path: '/task/:id', component: TaskDetail, props: true }
    
  ]
})

export default router
import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import CourseDetailView from '@/views/CourseDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cursos', component: CoursesView },
  { path: '/cursos/:id', component: CourseDetailView },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})
import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Main from '@/pages/Main';
import WantedList from '@/pages/WantedList';
import WantedPostId from '@/pages/WantedPostId';

const routes = [
    { 
        path: '/', 
        component: Main
    },
    {
        path: '/posts',
        component: WantedList
    },
    {
        path: '/posts/:id',
        component: WantedPostId
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
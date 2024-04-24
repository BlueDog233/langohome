import {createRouter, createWebHistory} from 'vue-router'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'mainset',
            meta: {
                requiresAuth: false,
            },
            component: () => import('../pages/MainPage.vue')
        },

    ]
})

export default router

router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        if (to.path === '/login') {
            next('/');
        } else {
            next();
        }
    } else {
        if (to.meta['requiresAuth']) {
            next('/login');
        } else {
            next();
        }
    }
    next()
})

export function logout() {
    sessionStorage.removeItem('token');
    router.push('/login');
}
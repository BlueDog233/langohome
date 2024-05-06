import {createRouter, createWebHistory} from 'vue-router'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'mainset',
            meta: {
                requiresAuth: true,
            },
            component: () => import('../pages/MainPage.vue')
        },{
            path: '/auth',
            name: 'login',
            meta: {
                requiresAuth: false,
            },
            component: () => import('../pages/LoginPage.vue')
        },{
            path: '/visit/:username',
            name: 'visit',
            meta: {
                requiresAuth: false,
            },
            component: () => import('../pages/VisitPage.vue')
        },

    ]
})

export default router

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (token) {

            next();
    } else {
        if (to.meta['requiresAuth']) {
            next('/auth');
        } else {
            next();
        }
    }
    next()
})

export function logout() {
    sessionStorage.removeItem('token');
    router.push('/auth');
}
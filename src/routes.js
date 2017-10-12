import Vue from 'vue'
import VueRouter from 'vue-router'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./components/pages/home-components/Home.vue'),
            name:'home',
        },
        {
            path: '/forgot-password',
            component: require('./components/reset_password/ForgotPassword.vue'),
            name:'forgot-password',
        },
        {
            path: '/reset-password/:token',
            component: require('./components/reset_password/ResetPassword.vue'),
            name:'reset-password',
        },
        {
            path: '/login',
            component: require('./components/auth/Login.vue'),
            name:'login',
        },
        {
            path: '/register',
            component: require('./components/auth/Register.vue'),
            name:'register',
        },
        {
            path: '/dashboard',
            component: require('./components/pages/users/Dashboard.vue'),
            name:'dashboard',
            meta: {
                requiresAuth: true ,
                requiresAdmin: true,
            }
        },
        {
            path: '/add-app-link',
            component: require('./components/pages/users/admin/AddAppLink.vue'),
            name:'app-link',
            meta: {
                requiresAuth: true ,
                requiresAdmin: true,
            }
        },
        {
            path: '/create-new-article',
            component: require('./components/pages/users/admin/CreatePost.vue'),
            name:'create-new-article',
            meta: {
                requiresAuth: true ,
                requiresAdmin: true,
            }
        },
        {
            path: '/app-links',
            component: require('./components/pages/home-components/AppLinks.vue'),
            name:'app-links',
        },
        {
            path: '/health-news',
            component: require('./components/pages/NewsArticles.vue'),
            name:'health-news',
        },
        {
            path: '/client-dashboard',
            component: require('./components/pages/users/ClientDashboard.vue'),
            name:'client-dashboard',
            meta: {
                requiresAuth: true ,
            }
        },
        {
            path: '/contact-us',
            component: require('./components/pages/Contact.vue'),
            name:'contact-us',
            meta: {
                requiresAuth: false ,
            }
        },
    ],
    mode: 'history',
})



/**
 * Auth guards here
 */
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const auth_user = JSON.parse(window.localStorage.getItem('auth_user'))
        if(auth_user && auth_user.access_token){
            next()
        } else next('login')
    }
    if(to.meta.requiresAdmin){
        const auth_user = JSON.parse(window.localStorage.getItem('auth_user'))
        if(auth_user.role === 'admin'){
            next()
        } else next('/')
    }
    next()
})

Vue.use(VueRouter)

export default router
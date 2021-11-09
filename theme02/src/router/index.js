import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/users',
        name: 'Users',
        component: () => import("@/views/Users.vue")
    },
    {
        path: '/clocks',
        name: 'Clocks',
        component: () => import("@/views/Clocks.vue")
    },
    {
        path: '/workingTime/:userid',
        name: 'WorkingTimeCreate',
        component: () => import("@/components/WorkingTime.vue")
    },
    {
        path: '/workingTime/:userid/:workingtimeid',
        name: 'WorkingTimeUpdateDelete',
        component: () => import("@/components/WorkingTime.vue")
    },
    {
        path: '/clock/:userid',
        name: 'ClockManager',
        component: () => import("@/components/ClockManager.vue")
    },
    {
        path: '/chartManager/:userid',
        name: 'ChartManager',
        component: () => import("@/components/ChartManager.vue")
    },
    {
        path: '/user/edit/:userid',
        name: 'EditUser',
        component: () => import("@/views/EditUser.vue")
    },
    {
        path: '/users/create',
        name: 'CreateUser',
        component: () => import("@/views/CreateUser.vue")
    },
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/Home.vue")
    },
    {
        path: '/workingtimes/edit/:userId/:workingtimeId',
        name: 'EditWorkingTime',
        component: () => import("@/views/EditWorkingTime.vue")
    }
   
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router

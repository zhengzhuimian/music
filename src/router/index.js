import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import PlayList from '../views/PlayList.vue'
import Recommend from '../views/Recommend.vue'
import Collect from '../views/Collect.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Recommend',
        component: Recommend,
        meta: { isShowNav: true }
    },
    {
        path: '/hot',
        name: 'Hot',
        component: () =>
            import ('../views/Hot.vue'),
        meta: { isShowNav: true }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: { isShowNav: true }
    },
    {
        path: '/playlist',
        name: 'PlayList',
        component: PlayList,
        // meta: { isHiddenNav: true }
    },
    {
        path: '/collect',
        name: 'Collect',
        component: Collect,
        meta: { isShowNav: true }
    },
    {
        path: '/songlist',
        name: 'Songlist',
        component: () =>
            import ('../views/Songlist.vue'),
    },
]

const router = new VueRouter({
    routes
})

export default router
import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from '@/pages/PostIdPage.vue';
import PostPageWithVuex from '@/pages/PostPageWithVuex.vue'
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/vuex',
        component: PostPageWithVuex
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
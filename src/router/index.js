import { createRouter, createWebHistory } from "vue-router";
import Profile from "../components/Profile.vue";
import Home from "../components/Home.vue";
import Projects from "../components/Projects.vue";
import Skills from "../components/Skills.vue";
import ExEd from "../components/ExEd.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: Home,
        },
        {
            path: '/Profile',
            component: Profile,
        },
        {
            path: '/Projects',
            component: Projects,
        },
        {
            path: '/Skills',
            component: Skills,
        },
        {
            path: '/ExperienceEducation',
            component: ExEd,
        },
    ],
})

export default router
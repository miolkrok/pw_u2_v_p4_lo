import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: "/",
        component: () => import('../modules/pokemon/pages/BienvenidaPage.vue'),
    },
    {
        path: "/juego",
        component: () => import('../modules/pokemon/pages/JuegoPage'),
    }, {
        path: "/premios",
        component: () => import('../modules/pokemon/pages/PremiosPage.vue'),
    },
    {
        path: "/esmeralda",
        component: () => import('../modules/pokemon/pages/PokemonEsmeraldaPage.vue'),
    },
    {
        path: "/pokegame",
        component: () => import('../modules/pokemon/pages/PokemonPage.vue'),
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('../modules/pokemon/pages/NoEncontradaPage.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router 
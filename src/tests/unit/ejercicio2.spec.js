import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'

describe('Componentes de vistas por defecto', () => { 
    test('Probando la existencia de la vista AboutView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'AboutView',
                component: AboutView
            }],
        })
        router.push('/about')
        await router.isReady()

        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })

    test('Probando la existencia de la vista HomeView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/home',
                name: 'HomeView',
                component: HomeView
            }],
        })
        router.push('/home')
        await router.isReady()

        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(HomeView).exists()).toBe(true)
    })
})
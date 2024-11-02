import { mount } from '@vue/test-utils'
import Contador from '@/components/Contador.vue'

import store from '@/store'

describe('Componente Contador.vue', () => {

    test('Verificar valor inicial del contador', () => {
        //Se incluye el store como plugin.
        const wrapper = mount(Contador, {
            global: {
                plugins: [store]
            }
        })
        //Se selecciona el texto que muestra el valor del contador.
        const textoContador = wrapper.find('p')
        //Se verifica que su valor sea 0.
        expect(store.state.contador).toBe(0)
        expect(textoContador.text()).toBe('0')
    })

    test('Incrementar en 1 el valor del contador', async () => {
        const wrapper = mount(Contador, {
            global: {
                plugins: [store]
            }
        })
        //Selección del botón por id.
        const botonIncrementar = wrapper.find('#mas')
        //Valor inicial del contador.
        const valorInicialContador = store.state.contador
        //Selección del valor mostrado del contador.
        const textoContador = wrapper.find('p')
        //Evento click en botón, debiese aumentar contador en 1.
        await botonIncrementar.trigger('click')
        //Valor que debiese haber tomado el contador
        const valorEsperadoContador = valorInicialContador + 1
        //Se verifica que el contador en store haya sido modificado.
        expect(store.state.contador).toBe(valorEsperadoContador)
        //Se verifica que el contador muestre el valor modificado.
        expect(textoContador.text()).toBe(valorEsperadoContador.toString())
    })

    test('Disminuir en 1 el valor del contador', async () => {
        const wrapper = mount(Contador, {
            global: {
                plugins: [store]
            }
        })
        //Selección del botón por id.
        const botonDisminuir = wrapper.find('#menos')
        //Valor inicial del contador.
        const valorInicialContador = store.state.contador
        //Selección del valor mostrado del contador.
        const textoContador = wrapper.find('p')
        //Evento click en botón, debiese disminuir el contador en 1.
        await botonDisminuir.trigger('click')
        //Valor que debiese haber tomado el contador
        const valorEsperadoContador = valorInicialContador - 1
        //Se verifica que el contador en store haya sido modificado.
        expect(store.state.contador).toBe(valorEsperadoContador)
        //Se verifica que el contador muestre el valor modificado.
        expect(textoContador.text()).toBe(valorEsperadoContador.toString())
    })
})

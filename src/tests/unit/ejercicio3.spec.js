import { mount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Componentes Parent y Child', () => {
    test('Verificar envío de texto de Child a Parent', async () => {
        const wrapper = mount(Parent)
        //Selección de elementos relevantes.
        //Botón y cuadro de texto de Child.
        const botonEnviar = wrapper.find('button')
        const inputTexto = wrapper.find('input')
        //Texto de Parent.
        const displayTexto = wrapper.find('u')
        //Texto a emitir.
        const textoPrueba = 'Probando emisión de texto.'
        //Se coloca el texto en el input y se hace click en botón.
        await inputTexto.setValue(textoPrueba)
        await botonEnviar.trigger('click')
        //El texto mostrado en Parent debiese ser igual al del input. 
        expect(displayTexto.text()).toBe(textoPrueba)
    })
})
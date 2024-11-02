import { createStore } from "vuex";

export default createStore(
    {
        //Ejercicio 1: Contador en state con valor inicial 0
        state:{
            contador: 0,
        },
        mutations:{
            //Funciones para modificar valor del contador
            incrementar(state){
                state.contador++;
            },
            disminuir(state){
                state.contador--;
            },
        }
    }
);
import { createStore } from "vuex";

export default createStore(
    {
        state:{
            contador: 0,
        },
        mutations:{
            incrementar(state){
                state.contador++;
            },
            disminuir(state){
                state.contador--;
            },
        }
    }
);
<template>
    <div class="container">
        <h3>Child</h3>
        <input type="text" v-model="textoChild" placeholder="Ingreso de texto(ᓀ‸ᓂ)">
        <button @click="enviarTexto" >↑ Enviar ↑</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                textoChild: "",
            }
        },
        methods:{
            enviarTexto(){
                this.$emit('enviar-texto', this.textoChild);
            }
        }
    }
</script>

<style scoped>
    .container{
        border-style: solid;
        border-color: cyan;
    }
</style>
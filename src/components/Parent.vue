<template>
    <div>
        <h2>Parent</h2>
        <p>Texto recibido → <u>{{ textoRecibido }}</u></p>
        <Child @enviar-texto="recibirTexto"/>
    </div>
</template>

<script>
    import Child from './Child.vue'
    export default{
        components: {
            Child
        },
        data(){
            return{
                textoRecibido:""
            }
        },
        methods:{
            recibirTexto(texto){
                this.textoRecibido = texto;
            }
        }
    }
</script>

<style scoped>
    div{
        border-style: solid;
        border-color: blue;
    }
</style>
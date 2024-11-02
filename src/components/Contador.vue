<template>
    <h2>Contador</h2>
    <p>{{ $store.state.contador }}</p>

    <div>
        <button @click="$store.commit('incrementar')" id="mas">+1</button>
        <button @click="$store.commit('disminuir')" id="menos">-1</button>
    </div>
</template>
  
<script>
export default {
    name: 'Contador',
}
</script>
  
<style scoped>
</style>
  
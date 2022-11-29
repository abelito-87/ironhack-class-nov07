<template>
    <h1 v-if="datosVerdaderos === 0">"I'm showing up beacuse our reactive data is true!"</h1>
    <h1 v-else>"I'm the option anytime our reactive data cannot be read as true"</h1>
    
</template>

<script scoped>

 import { reactive } from "vue";
  const datosVerdaderos = reactive();

</script>
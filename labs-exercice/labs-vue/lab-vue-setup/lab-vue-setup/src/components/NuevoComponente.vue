<!--crear componente-->
<template>
    <h1>{{Primer componente}}</h1>
</template>

<!--mostrat data desde JS-->
<script setup>
import { ref } from "vue";

const componenteVariable = ref{"Esto es un componente"}

</script>
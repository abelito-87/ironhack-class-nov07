<!-- Creamos un componente Counter.vue. Este componente lo que hará es enseñar el valor de count que tenemos en counter.js. Después le vamos a añadir dos botones: uno para incrementar el count y otro para restarle 1. Vuestro objetivo será que estos botones alteren el valor de count que tenemos en la store, usando métodos también dentro de vuestra store.-->

<template>
    <p>{{count}}</p>
    <button @click="counterStore.increase()">+</button>
     <button @click="counterStore.decrease()">-</button>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from './stores/counter';

const counterStore = useCounterStore();

const count = ref(0)


</script>
<template>
    <h1>{{ name }}</h1>
    <h3>{{ age }}</h3>
  </template>
  
  <script setup>
  defineProps({
    name: {
      type: String,
      required: false,
      default: "Some Random Name dentro del nieto...",
    },
    age: {
      type: Number,
      required: true,
      default: 0,
    },
  });
  </script>
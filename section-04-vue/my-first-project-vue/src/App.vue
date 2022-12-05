<script setup>
//import HelloWorld from "./components/HelloWorld.vue";
//import MyBio from "./components/My-Bio-comps/NameComp.vue";
//import Computed from "./components/Computed.vue"
//import ParentComp from "./components/CustomEvents/ParentComponent.vue"
//import ChildComp from "./components/CustomEvents/ChildComponent.vue"
import counter from "./components/counter.vue"
</script>

<template>
<counter />
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
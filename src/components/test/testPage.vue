<template>
  <div>
<TestPage2>


<template #header>
  <div>
    pwet
  </div>
</template>
<template #footer="{data}">
  <div>
    tae -
  </div>
  <div v-for="(d, index) in data">
  {{ d.name }}
  
  </div>
</template>

</TestPage2>
  </div>
</template>

<script setup>
import TestPage2 from './testPage2.vue';

</script>


<style lang="scss" scoped>

</style>
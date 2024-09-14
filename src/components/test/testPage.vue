<template>
  <div class="h-screen bg-white p-1">

    <div>
      <button @click="changeComponent(0)" class="p-2 bg-[green]">0</button>
      <button @click="changeComponent(1)" class="p-2 bg-[pink]">1</button>
    </div>
    <TestPage2 :componentPass="[TestPage3, TestPage4]" :numberPass="nums" />
    <!-- <TestPage3/>
    <TestPage4/> -->
    <AntButton title="Login" bg="#FFF0BB" h=".4rem" w="2rem" b=".1rem" tx="red"/>
    {{ datus }}
    {{ showNames }}
    {{ every() }}
    {{ indexing }}

  </div>
</template>

<script setup>
import { ref, defineAsyncComponent, computed } from "vue";

const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 95 },
  { name: 'Eva', grade: 88 }
];

const numbers = [1, 2, 3, 4, 5];
const showNames = computed(() => {
  return numbers.some((a) => a < 5)
})

const every = () => {
  return numbers.every((a) => a > 3 )
}

const indexing = () => {
  return students.includes('name')
}

const datus = computed(() => {
  return students.filter((o) => o.grade === 85 )
})


const TestPage2 = defineAsyncComponent(() =>
  import("@/components/test/testPage2.vue")
);
const TestPage3 = defineAsyncComponent(() =>
  import("@/components/test/testPage3.vue")
);
const TestPage4 = defineAsyncComponent(() =>
  import("@/components/test/testPage4.vue")
);

const nums = ref(0);
const changeComponent = (comp) => {
  comp === 0 ? (nums.value = 0) : (nums.value = 3);
  comp === 1 ? (nums.value = 1) : (nums.value = 3);
};
</script>

<style lang="scss" scoped></style>

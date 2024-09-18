<template>
  <div class="h-screen bg-blue">


<!-- <VantTabs :titleLinks="navLinks" :componentPass="[JurosMainPage,Task,VipPage, Redemption,]"/> -->


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
    <div class="cont">
      <div class="items1">1</div>
      <div class="items2">2</div>
      <div class="items3">3</div>
      <div class="items4">4</div>
    </div>

  </div>
</template>

<script setup>

import { ref, defineAsyncComponent, computed } from "vue";
import VantTabs from "../vantUi/vantTabs.vue";
import VipPage from "@/views/Vip/VipPage.vue";
import Task from "@/views/Task/task.vue";
import EventPage from "@/views/Event/EventPage.vue";
import Redemption from "@/views/Redemption/redemption.vue";
import JurosMainPage from "@/views/Juros/JurosMainPage.vue";





const navLinks = ref([
  {title: 'Events', link: '/event'},
  {title: 'Mission', link: '/task'},
  {title: 'Vip', link: '/vip'},
  {title: 'Redemption', link: '/redemption'},
  {title: 'Pendentets', link: '/pendente'},
  {title: 'Juros', link: '/juros'},
  {title: 'History', link: '/records'},

])

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

<style scoped>
.cont {
  display: flex;
  flex-wrap: wrap;
}

.items1 {
  /* height: 2rem; */
  /* width: 1.5rem; */
  background-color: red;
  border: 2px solid white;
  /* flex-grow: 1; */
  /* flex-basis: 200 */
  flex-grow: 1;
}
.items2 {
  background-color: red;
  border: 2px solid white;
  flex-grow: 2;
}
.items3{
  background-color: red;
  border: 2px solid white;
  flex-grow: 3;

}
.items4 {
  background-color: red;
  border: 2px solid white;
  flex-grow: 4;

}
</style>

<template>
  <div class="h-screen bg-white p-1">
    <div class="font-bold text-center pb-2">this is the test page</div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, velit a
    ipsum dolore, omnis dolores nesciunt consequatur tempore officia nulla
    repellat est quaerat quis nemo, non qui consectetur doloribus perspiciatis
    sint distinctio! Velit eligendi officiis harum dolorem illo voluptate, modi
    nihil dolor quas vel dignissimos nemo nulla recusandae! Aliquam et quisquam,
    officia aliquid repellendus, dolorem autem, dolorum maxime minus voluptate
    totam temporibus deleniti at tempora corporis eveniet quia nobis? Minima et
    ipsam est harum porro beatae similique officiis ex architecto quae mollitia
    laudantium autem, illo totam voluptas sunt error adipisci obcaecati
    exercitationem. Quo perferendis illo quaerat commodi! Inventore, porro odio!

    <div>
      <button @click="changeComponent(0)" class="p-2 bg-[green]">0</button>
      <button @click="changeComponent(1)" class="p-2 bg-[pink]">1</button>
    </div>
    <TestPage2 :componentPass="[TestPage3, TestPage4]" :numberPass="nums" />
    <!-- <TestPage3/>
    <TestPage4/> -->
    <AntButton title="Login" bg="#FFF0BB" h=".4rem" w="2rem" b=".1rem" tx="red"/>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";

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

<template>
  <div class="p-1 text-white">
    <div class="flex gap-1">
      <div>
        <div v-for="(e, index) in titleLink" :key="index" class="my-1">
          <AntButton
            :title="e.title"
            :bg="activeBtn === index ? ' #05309f' : '#FFF0BB'"
            :textCol="activeBtn === index ? ' white' : '#1A45B1'"
            :bord="activeBtn === index ? '1px solid white' : ''"
            h=".7rem"
            w="1.5rem"
            b=".1rem"
            ft=".22rem"
            @click="showActiviy(index)"
          />
        </div>
      </div>
      <div class="h-[13rem] border-2 border-[red] flex-auto p-1 overflow-auto">fasdf</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const activeBtn = ref(0);
const showActiviy = (index) => {
    activeBtn.value = index
    alert(index)
}

const titleLink = ref([
  { title: "Slots" },
  { title: "Fishing" },

  { title: "Live Casino" },

  { title: "E-Sports" },

  { title: "Sports" },

  { title: "Lottery" },

  { title: "iGaming" },
]);
</script>

<style lang="scss" scoped></style>

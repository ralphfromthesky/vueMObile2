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
            @click="showActiviy(index, e.title)"
          />
        </div>
      </div>
      <div class="h-[13rem] border-2 border-[red] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Slots'">{{activeTitle}}1</div>
      <div class="h-[13rem] border-2 border-[red] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Fishing'">{{activeTitle}}2</div>
      <div class="h-[13rem] border-2 border-[red] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Live Casino'">{{activeTitle}}3</div>
      <div class="h-[13rem] border-2 border-[red] flex-auto p-1 overflow-auto" v-if="activeTitle === 'E-Sports'">{{activeTitle}}4</div>
      <div class="h-[13rem] border-2 border-[red] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Sports'">{{activeTitle}}5</div>
      <div class="h-[13rem] border-2 border-[red] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Lottery'">{{activeTitle}}5</div>
      <div class="h-[13rem] border-2 border-[red] flex-auto p-1 overflow-auto" v-if="activeTitle === 'iGaming'">{{activeTitle}}6</div>

      
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const activeBtn = ref(0);
const activeTitle = ref('Slots')
const showActiviy = (index, title) => {
    activeBtn.value = index
    activeTitle.value = title
    
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

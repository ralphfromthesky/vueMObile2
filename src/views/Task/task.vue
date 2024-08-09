<template>
  <Layout>
    <div class="w-screen flex p-[.3rem] gap-1 text-white">
      <div class="flex flex-col gap-1">
        <Spinloader v-if="missionTasks.isLoading.value" />
        <div v-for="(value, ind) in buttonTasks" :key="ind">
          <button :class="activebutton === ind ? 'bg-[#c7b678]  text-[#ffffff]' : 'bg-[#fff8df]'
            " class="w-[1.8rem] p-[.1rem] rounded-sm bg-[rgb(255,240,187)] text-[#1A45B1] text-[.22rem] font-bold"
            @click="handleClick(ind, value)">
            {{ getTrans(value.type, value.taskTargetType ? value.taskTargetType : value.newArrivalTaskType) }}
          </button>
        </div>
      </div>
      <div>
        <div class="py-[.1rem] text-[white]" v-for="(mission, ind) in missionData" :key="ind">
          <div><img :src="mission?.titleImg" alt="" /></div>
          <div class="my-[.1rem] text-[red]">{{ mission?.title }}</div>
          <div>{{ mission?.actDesc }}</div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { reactive, ref, onMounted, watchEffect } from "vue";
import Spinloader from "@/components/antUi/spinLoader.vue";
import Layout from "../../components/layout/Layout.vue";
import { getTask } from "@/global/missionEvent.js";
import { useStore } from "@/store/store";
import { useGetGlobalConfigInfo } from "@/global/globalConfigInformation";

const { missionTasks } = useGetGlobalConfigInfo()
const store = useStore();
var missionData = []
const activebutton = ref(0);

const buttonTasks = store.state.userMissiontask

const missionTitle = [
  { value: "1", label: "Download, install and log in to the APP for the first time", },
  { value: "2", label: "Register account" },
  { value: "3", label: "Bind bank card for the first time" },
  { value: "4", label: "Set withdrawal password" },
  { value: "5", label: "Set birthday" },
  { value: "6", label: "SMS verification" },
  { value: "7", label: "First withdrawal" },
]
const missionTitle2 = [
  { value: "1", label: "Cumulative recharge", },
  { value: "2", label: "Cumulative effective bets" },
]

const getTrans = (types, sub) => {
  if (types === 1 || types === 4 || types === 5 || types === 7) {
    const title = missionTitle.filter((item) => item.value === sub.toString())
    return title[0].label
  } else if (types === 2 || types === 3) {
    const title = missionTitle2.filter((item) => item.value === sub.toString())
    return title[0].label
  }
}

onMounted(()=>{
  missionTasks.refetch()
  missionData.push(buttonTasks[0])
})

const handleClick = (index, data) => {
  activebutton.value = index;
  missionData = []
  missionData.push(data)
};
</script>

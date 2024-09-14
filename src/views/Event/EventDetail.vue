<template>
  <div>
    <div class="h-screen bg-bg2">
      <div
        class="bg-bg2 h-[1rem] flex justify-center items-center text-[white]"
      >
        {{ store.state.propsData?.data?.content.title }}
      </div>
      <div class="bg-txt h-[14rem] overflow-auto p-1 text-white">
        <div>
          <div class="flex justify-around my-2 flex-col">
            <div class="flex justify-around mb-[.5rem]">
              <span>Amount of deposit</span><span>Bonus</span>
            </div>
            <div
              class="flex justify-around even:bg-[#05309F] p-1"
              v-for="(data, index) in store.state.propsData?.data?.content
                .configs"
              :key="index"
            >
              <div>
                <span>{{ data.depositMoney }}</span>
              </div>
              <div>
                <span class="text-bg">{{ data.giftMoney }}</span>
              </div>
            </div>
            <div class="flex flex-col my-1 leading-[.5rem]"><span>I.Activity time （UTC-3）：{{ store.state.propsData?.data?.content.beginDatetime }}</span><span></span><span>II.Activities：{{ store.state.propsData?.data?.content.actDesc }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { axiosGet } from "@/components/axios/AxiosHook";
import { useQuery } from "@tanstack/vue-query";
import { onMounted, watch, ref } from "vue";
import { useStore } from "@/store/store";
const store = useStore();


const props = defineProps({
  eventData: {
    type: Array,
    required: false,
    default: [],
  },
  newTitle: String,
});
</script>

<style scoped></style>

<template>
  <div class="p-1 text-white">
    <div class="flex gap-1">
      <div>
        <div v-for="(e, index) in titleLink" :key="index" class="my-1 border-">
          <AntButton
            :title="e.title"
            :bg="activeBtn === index ? ' #05309f' : '#FFF0BB'"
            :textCol="activeBtn === index ? ' white' : '#1A45B1'"
            :bord="activeBtn === index ? '1px solid white' : ''"
            h=".7rem"
            w="1.5rem"
            b=".1rem"
            ft=".22rem"
            @click="showActiviy(index, e.title, e.type)"
          />
        </div>
      </div>
      <div
        class="h-[13rem] flex-auto p-1 overflow-auto"
        v-if="activeTitle"
      >
        <div class="bg-bg p-[.2rem] flex justify-between rounded-[.1rem] text-txt">
          <div class="text-txt">
            <div class=" text-txt font-bold text-[.3rem]">{{ activeTitle }}</div>
            <div class="my-[.1rem] p-[.1rem] rounded-[.2rem] bg-txt text-bg">
              Bet - {{ kickBack?.data?.content?.rows[0].minBet }} / get -
              {{ kickBack?.data?.content?.rows[0].kickback }}
            </div>
          </div>
          <div class="flex flex-col">
            <span>Rebate Max 0%</span>
            <span>Limit</span>
            <span class=" text-txt font-bold">Rebate {{ 0.01 * kickBack?.data?.content?.rows[0].kickback  }}</span>
          </div>
        </div>
        <div class="border-[.01rem] rounded-[.1rem] p-1 overflow-hidden my-[.1rem] border-bord flex flex-col items-center h-[10rem]">
          <img
              class="w-[2.5rem] text-txt"
              src="/nodataImages/img_none_jl.png"
              alt=""
            />
          
            <span>No data for {{ activeTitle }} for now</span>
        </div>
      </div>

    </div>

    <!-- <SpinLoader/> -->
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { axiosGet, axiosPost } from "@/components/axios/AxiosHook";

const activeBtn = ref(0);
const activeTitle = ref("Slots");
const kickBack = ref([]);

const showActiviy = (index, title, type) => {
  activeBtn.value = index;
  activeTitle.value = title;
  mutate({
    type: type,
    pageSize: 100,
  });
};

const titleLink = ref([
  { title: "Slots", type: 2 },
  { title: "Fishing", type: 4 },
  { title: "Live Casino", type: 1 },
  { title: "E-Sports", type: 6 },

  { title: "Sports", type: 6 },

  { title: "Lottery", type: 7 },

  { title: "iGaming", type: 4 },
]);

const { mutate, isSuccesss } = useMutation({
  mutationFn: (payload) =>
    axiosPost("/api/native/v2/getKickBackStrategy.do", payload),
  onSuccess: (data) => {
    kickBack.value = data;
  },
  onError: (err) => alert(err),
});
</script>

<style lang="scss" scoped></style>

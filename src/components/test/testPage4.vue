<template>
  <div>
    <van-tabs v-model:active="active" scrollspy sticky>
      <van-tab v-for="({ g, tab }, index) in games" :key="tab.name">
        <template #title>
          <!-- Custom title with image and text -->
          <div class="flex flex-col items-center">
            <img
              :src="`/logo/` + tab.code + `_active.png`"
              class="h-[.46rem]"
            />
            {{ tab.name }}
          </div>
        </template>

        <div class="border-2 border-[red] h-[5rem] p-[.1rem]">
          <div class="flex justify-between items-center">
            <div>
              <img
                :src="`/logo/` + tab.code + `_active.png`"
                class="h-[.55rem]"
              />
              <div class="text-white text-[.3rem]">{{ tab.name }}</div>
            </div>
            <div>
              <span class="text-[#6FA4EF] text-[.27rem]">Tudos</span>
            </div>
          </div>
          <div class="border-2 border-yellow-300">
              <!-- <img :src="" alt="" srcset=""> -->
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { axiosGet2 } from "../axios/AxiosHook";
const games = ref([]);

const {} = useQuery({
  queryKey: ["userGames"],
  enabled: true,
  queryFn: async () =>
    await axiosGet2("/api/getGames.do?type=11&limitNum=50&lang=en"),
  staleTime: 1000,
  select: (data) => {
    games.value = data.filter((entry) => entry.games.length > 0);
  },
});
</script>

<template>
  <div class="bg-[white]">
    <div v-if="showGames" class="relative" @click="showGames = false">
      <div class="absolute top-[.5rem] left-[.1rem]">
        <img src="/public/home.png" alt="" srcset="" class="h-[1rem]" />
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo
      dolor quisquam deleniti? Magni, facere at. Eos et sint ut minus labore,
      dolorum magni sed fuga corrupti! A, sunt debitis.
      <!-- <iframe
      :src="showIframe"
      frameborder="0"
      class="gameContainer w-screen h-screen"
    ></iframe> -->
    </div>
    <div v-else>
      <van-tabs v-model:active="active" scrollspy sticky>
        <van-tab v-for="({ games, tab }, index) in games" :key="tab.name">
          <template #title>
            <div class="flex flex-col items-center pb-[.1rem]">
              <img
                :src="`/logo/` + tab.code + `_active.png`"
                class="h-[.46rem]"
              />
              {{ tab.name }}
            </div>
          </template>

          <div>
            <div class="flex justify-between items-center mb-1">
              <div>
                <img
                  :src="`/logo/` + tab.code + `_active.png`"
                  class="h-[.55rem]"
                />
                <div class="text-[black] text-[.3rem]">{{ tab.name }}</div>
              </div>
              <div>
                <span class="text-[#6FA4EF] text-[.27rem]">Tudos</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1 justify-center relative">
              <div
                v-for="(g, tab, index) in games"
                :key="index"
                class="text-[white]"
                @click="playGames(g.popFrame, g.type)"
              >
                <img :src="`/api/${g.imgUrl}`" class="h-[2.7rem]" />
                <img
                  src="/images/star.png"
                  alt=""
                  class="absolute top-0 right-0 w-[.4rem] h-[.4rem] m-[.1rem]"
                />
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <AntModal
      :isOpen="store.state.loginModal"
      :componentPass="Login"
      :backGrounds="true"
      v-if="!store.state.userInfo.isLogin"
    />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
const active = ref(5);
const Login = defineAsyncComponent(() =>
  import("@/components/layout/LoginComponent/LoginForm.vue")
);
import { useQuery } from "@tanstack/vue-query";
import { axiosGet2 } from "../axios/AxiosHook";
import { useStore } from "@/store/store";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const showGames = ref(false);
const games = ref([]);
const gameType = ref("");
const gameTab = ref([]);

const playGames = (popFrame, type) => {

  if (popFrame === true && type) {
    router.push("/slots");
    if (type === "3") {
      store.commit("setnewGameType", "Slots");
      store.commit("setgType", "pg");
      gameType.value = 2;
      gameTabs();
    }
    if (type === "6") {
      store.commit("setnewGameType", "Fishing");
      store.commit("setgType", "bbinFish");
      gameType.value = 7;
      gameTabs();
    }

    if (type === "2") {
      store.commit("setnewGameType", "Live Casino");
      store.commit("setgType", "bbinLive");

      gameType.value = 1;
      gameTabs();
    }
    if (type === "4") {
      store.commit("setnewGameType", "Sports");
      store.commit("setgType", "tysbSport");
      gameType.value = 0;
      gameTabs();
    }
  }
};

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

const { refetch: gameTabs } = useQuery({
  queryKey: ["forwardGames"],
  queryFn: async () =>
    await axiosGet2(
      `/api/native/v2/getGame2.do?type=${gameType.value}&limitNum=50&lan=en`
    ),
  enabled: false,
  select: (data) => {
    gameTab.value = data;
  },
});
</script>

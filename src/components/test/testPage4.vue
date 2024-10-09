<template>
  <div
    class="bg-[#1A45B1c] bg-[url('/images/BG.png')] bg-[length:1.2rem] bg-no-repeat bg-center relative"
  >
    <slot name="game" v-if="!store.state.showGames">
      <div class="relative">
        <div class="absolute top-[.5rem] left-[.1rem]" @click="backHome">
          <img src="/public/home.png" alt="" srcset="" class="h-[1rem]" />
        </div>

        <iframe
          :src="showThisGame"
          frameborder="0"
          class="gameContainer w-screen h-screen"
        ></iframe>
      </div>
    </slot>
    <slot name="fetch" v-if="store.state.showGames">
      <div>
        <van-tabs
          v-model:active="active"
          scrollspy
          sticky
          offset-top=".8rem"
          background="#1A45B1"
          title-inactive-color="#A0C5FB"
          color="#FFF0BB"
          title-active-color="#FFF0BB"
          line-width="1.6rem"
        >
          <van-tab
            v-for="({ games, tab }, index) in games"
            :key="tab.name"
            class="py-[.4rem]"
          >
            <template #title>
              <div
                class="flex flex-col items-center pb-[.1rem]"
                @click="clickThisTab(index)"
              >
                <img
                  :src="active === index ? `/logo/${tab.code}_active.png` : `/logo/${tab.code}.png` "
                  class="h-[.46rem]"
                />
                {{ tab.name }}
              </div>
            </template>

            <div>
              <div class="flex justify-between items-center mb-1 ml-1">
                <div>
                  <img
                    :src="`/logo/` + tab.code + `_active.png`"
                    class="h-[.55rem]"
                  />
                  <div class="text-[white] text-[.3rem]">{{ tab.name }}</div>
                </div>
                <div class="mr-1">
                  <span class="text-[#6FA4EF] text-[.27rem]">Tudos</span>
                </div>
              </div>

              <div class="flex flex-wrap gap-1 justify-center relative ">
                <div
                  v-for="(g, tab) in showGameImages(games)"
                  :key="g.name"
                  class="text-[white] relative bg-[url('/images/BG.png')] bg-[length:1.2rem] bg-no-repeat bg-center"
                  @click="playGames(g.popFrame, g.type, g.forwardUrl, g.czCode)"
                >
                  <img :src="`/api/${g.imgUrl}`" class="h-[2.7rem] w-[2rem]" />
                  <img
                    src="/images/star.png"
                    alt=""
                    class="absolute border-2 border-[red] top-0 right-0 w-[.4rem] h-[.4rem] m-[.1rem]"
                  />
                </div>
              </div>
              <div
                class="mt-1"
                @click="showListGames(tab.name)"
              >
                <div class="text-center">A exibir 9 jogos entre 21 Popular jogos</div>
                <div class="flex justify-center">
                  Carregar mais
                  <img class="w-[.25rem]" src="/images/arrow-down.png" alt="" />
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </slot>
    <AntModal
      :isOpen="store.state.loginModal"
      :componentPass="Login"
      :backGrounds="true"
      v-if="!store.state.userInfo.isLogin"
    />
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent, computed, watch } from "vue";
const Login = defineAsyncComponent(() =>
  import("@/components/layout/LoginComponent/LoginForm.vue")
);
import { useQuery } from "@tanstack/vue-query";
import { axiosGet2, axiosGet } from "../axios/AxiosHook";
import { useStore } from "@/store/store";
import { useRouter } from "vue-router";
import { messageApi } from "../antUi/antMessage";
const router = useRouter();
const store = useStore();
const showGames = ref(false);
const games = ref([]);
const gameType = ref("");
const gameTab = ref([]);
const forwardUrls = ref("");
const showAllGames = ref(true);
const forwardGame = ref();
const active = ref(0);

const showGameImages = (games) => {
  return showAllGames.value ? games.slice(0, 5) : games;
};
const showListGames = (tab) => {
  showAllGames.value = !showAllGames.value;
  // alert(tab);
};

const clickThisTab = (num) => {
  store.commit("setScrollTo", num);
};

const backHome = () => {
  store.commit("setshowGames", false);
  transOut().then(() => {
    window.location.reload();
  });
};
const { refetch: transOut } = useQuery({
  queryKey: ["transOut"],
  queryFn: () => axiosGet2("/api/native/v2/autoTranout.do?lan=en"),
});

const showThisGame = computed(() => {
  return forwardGame.value;
});

const playGames = (popFrame, type, forwardUrl, code) => {
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
    return;
  }
  if ((popFrame === false && code === "iyg") || "yg") {
    if (forwardUrl) {
      forwardUrls.value = forwardUrl;
      forward();
      if (store.state.userInfo.isLogin) {
        store.commit("setshowGames", false);
        store.state.commit('setDataFetching', true)
        return;
      }
    }
  }
};

const { refetch: forward, isFetching } = useQuery({
  queryFn: () => axiosGet(`/api/${forwardUrls.value}`),
  queryKey: ["forward"],
  enabled: false,
  select: (data) => {
    if (!data.data.isLogin) {
      store.commit("setloginModal", true);
    }
    if(!data.data.success) {
      messageApi.info(data.data.msg).then(() => backHome())
    }
    if (data.data.url.includes("ygmmt8test")) {
      window.location.href = data.data.url;
    } else {
      showGames.value = true;
      forwardGame.value = data.data.url;
    }
  },
  onError: (err) => alert(err),
});

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

watch(
  () => store.state.scrollTo,
  (newVal) => {
    if (newVal) {
      active.value = newVal;
      clickThisTab(newVal);
    }
  }
);
</script>

<style scoped>
::v-deep .van-tabs--line .van-tabs__wrap {
  height: 1.2rem;
  border-bottom: 1px solid #3a61c2;
}
@media (min-width: 431px) {
  .gameContainer {
    width: 7.4rem;
  }
}
</style>

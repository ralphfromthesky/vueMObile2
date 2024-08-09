<template>
  <div>
    <div v-if="nowShowingGames" class="relative">
      <div class="absolute top-[1rem] left-[.1rem]" @click="backlush">
        <img src="/public/home.png" alt="" srcset="" class="h-[1rem]" />
      </div>
      <iframe
        :src="showIframGames"
        frameborder="0"
        class="w-screen h-screen"
      ></iframe>
    </div>

    <div class="h-screen w-screen" v-if="hideMain">
      <div>
        <div class="p-[.3rem] text-white flex justify-between font-[1rem]">
          <router-link to="/"> <span class="text-[.5rem]"><</span></router-link>
          <span class="text-[.5rem]">--{{ headerTitle }} -- {{ showTitle }}</span>
          <span></span>
        </div>
        <div class="border-3"></div>

        <div
          class="text-white h-screen overflow-auto w-screen p-[.2rem] bg-[#1A45B1]"
        >
          <div class="flex justify-center my-[.1rem] relative">
            <a-input
              placeholder="ID de Membro"
              class="bg-transparent text-[white] placeholder-[white]"
            />
            <img
              src="/images/search.png"
              alt=""
              class="w-[.25rem] h-[.25rem] absolute top-[.15rem] right-[.2rem]"
            />
          </div>
          <div class="flex h-[12rem]">
            <div class="flex flex-col overflow-auto">
              <!-- <span class="h-[1rem] w-[1.5rem] border-2 border-[#3a61c2] rounded-[.1rem] flex justify-center items-center my-[.1rem]">Slot</span> -->
              <div
                v-for="(btn, index) in gamesData?.content"
                :key="index"
                class="h-[1rem] w-[1.5rem] border-2 border-[#3a61c2] rounded-[.1rem] flex justify-center items-center my-[.1rem]"
                @click="getTypes(btn.gameType, index)"
                :class="
                  activeBtn === index
                    ? 'bg-[#FFF0BB] text-[black]'
                    : 'bg-[#05309F] text-[#a0c5fb]'
                "
              >
                <span class="flex flex-col items-center p-[.1rem]">
                  <img
                    v-if="showImage(btn.czCode)"
                    :src="imgSrc(btn.czCode)"
                    alt=""
                    srcset=""
                    class="h-[.6rem]"
                  />

                  {{ btn.czCode }}
                </span>
              </div>
            </div>
            <div class="">
              <div class="flex justify-center gap-[.1rem]">
                <span
                  :class="[
                    'p-[.2rem] rounded-[.2rem] bg-[#05309F] border-2 border-[#3a61c2]',
                    popular ? 'bg-[#FFF0BB] text-[black]' : 'bg-[#05309F]',
                  ]"
                  @click="showPopular"
                  >Popular</span
                >
                <span
                  :class="[
                    'p-[.2rem] rounded-[.2rem] bg-[#05309F] border-2 border-[#3a61c2]',
                    recent ? 'bg-[#FFF0BB] text-[black]' : 'bg-[#05309F]',
                  ]"
                  @click="showRecent"
                  >Recente</span
                >
                <span
                  :class="[
                    'p-[.2rem] rounded-[.2rem] bg-[#05309F] border-2 border-[#3a61c2]',
                    favorites ? 'bg-[#FFF0BB] text-[black]' : 'bg-[#05309F]',
                  ]"
                  @click="showFavorites"
                  >Favorites</span
                >
              </div>
              <div
                class="w-[5.3rem] flex flex-wrap gap-1 justify-center h-[12rem] p-[.2rem] overflow-auto"
                v-if="allGames"
              >
                <div
                  class="w-[1.45rem] rounded-[.1rem] bg-[url('/images/BG.png')] bg-[length:1.2rem] bg-no-repeat bg-center"
                  v-for="(tab, index) in gameTabs?.content"
                  :key="index"
                  @click="showGames(tab.finalRelatveUrl)"
                >
                  <div class="relative">
                    <span class="bg-[red]">
                      <img
                        :src="`/api/${tab.buttonImagePath}`"
                        alt=""
                        srcset=""
                    /></span>
                    <img
                      src="/images/star.png"
                      alt=""
                      class="absolute top-0 right-0 w-[.4rem] h-[.4rem] m-[.1rem]"
                    />
                  </div>
                </div>
              </div>
              <!-- <div
                class="w-[5.3rem] flex flex-wrap gap-1 justify-center h-[12rem] p-[.2rem] border-2 border-[red] overflow-auto"
                v-if="popular"
              >
                <div
                  class="w-[1.45rem] rounded-[.1rem] bg-[url('/images/BG.png')] bg-[length:1.2rem] bg-no-repeat bg-center"
              
                >
                  <div class="relative">
                    <span class="bg-[red]">
                      <img
                        alt=""
                        srcset=""
                    /></span>
                    <img
                      src="/images/star.png"
                      alt=""
                      class="absolute top-0 right-0 w-[.4rem] h-[.4rem] m-[.1rem]"
                    />
                  </div>
                </div>
              </div>
              <div
                class="w-[5.3rem] flex flex-wrap gap-1 justify-center h-[12rem] p-[.2rem] border-2 border-[red] overflow-auto"
                v-if="recent"
              >
                <div
                  class="w-[1.45rem] rounded-[.1rem] bg-[url('/images/BG.png')] bg-[length:1.2rem] bg-no-repeat bg-center"
              
                >
                  <div class="relative">
                    <span class="bg-[red]">
                      <img
                        alt=""
                        srcset=""
                    /></span>
                    <img
                      src="/images/star.png"
                      alt=""
                      class="absolute top-0 right-0 w-[.4rem] h-[.4rem] m-[.1rem]"
                    />
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <SpinLoader v-if="isFetching" />
    <AntModal
      :isOpen="loginModal"
      :componentPass="Login"
      :backGrounds="true"
      v-if="!store.state.userInfo.isLogin"
    />
    <AntModal
      :isOpen="regModal"
      :componentPass="Register"
      :backGrounds="true"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import SpinLoader from "@/components/antUi/spinLoader.vue";
import { getGamesTab } from "@/global/games.js";
import { useQuery } from "@tanstack/vue-query";

import { useStore } from "@/store/store";
import Register from "@/components/layout/RegisterComponent/RegisterForm.vue";
import Login from "@/components/layout/LoginComponent/LoginForm.vue";
import { axiosGet2 } from "@/components/axios/AxiosHook";
const store = useStore();
const { gamesData, getGame, getGameType } = getGamesTab();
const gameType = ref("");
const gameTabs = ref([]);
const activeBtn = ref(null);
const hideMain = ref(true);
const nowShowingGames = ref(false);
const gameUrl = ref("");
const liveGameUrl = ref("");
const spinLoads = ref(false);
const loginModal = ref(false);
const regModal = ref(false);
const popular = ref(false);
const recent = ref(false);
const favorites = ref(false);
const allGames = ref(true);
const headerTitle = ref('')

const showPopular = () => {
  // allGames.value = false
  popular.value = true;
  recent.value = false;
  favorites.value = false;
};
const showRecent = () => {
  // allGames.value = false
  popular.value = false;
  recent.value = true;
  favorites.value = false;
};

const showFavorites = () => {
  // allGames.value = false
  popular.value = false;
  recent.value = false;
  favorites.value = true;
};
const showAllGames = () => {
  // allGames.value = true
  popular.value = false;
  recent.value = false;
  favorites.value = false;
  fetchGames();
};

const imgMap = ref({
  pg: "/turnlateImages/fac_pg_select.png",
  pgn: "/turnlateImages/fac_pg_select.png",
  npt: "/turnlateImages/fac_npt_select.png",
  pgone: "/turnlateImages/fac_pg_select.png",
  mga: "/turnlateImages/fac_mga_select.png",
  bs: "/turnlateImages/fac_bs_select.png",
  jdb: "/turnlateImages/fac_jdb_select.png",
  ag: "/turnlateImages/fac_ag_select.png",
  bbin: "/turnlateImages/fac_bbin_select.png",
  cq9: "/turnlateImages/fac_cq9_select.png",
  evo: "/turnlateImages/fac_evo_select.png",
  fg: "/turnlateImages/fac_fg_select.png",
  pp: "/turnlateImages/fac_pp_select.png",
  jl: "/turnlateImages/fac_jl_select.png",
  ws168: "",
  bbin2: "/turnlateImages/fac_ptn_select.png",
  ptn: "/turnlateImages/fac_pg_select.png",
  bbinFish:  "/turnlateImages/fac_bbin_select.png",
  cq9Fish: "/turnlateImages/fac_cq9_select.png",
  agLive: "/turnlateImages/fac_ag_select.png", 
  bbinLive: "/turnlateImages/fac_bbin_select.png", 
  dgLive: "/turnlateImages/fac_dgLive_select.png",
  evolution: "/turnlateImages/fac_evolution_select.png",
  ppLive: "/turnlateImages/fac_ppLive_select.png",
  bbin2Live: "",
  tysbSport: "/turnlateImages/fac_tysbSport_select.png",
  ppSport: "/turnlateImages/fac_ppSport_select.png",
  fb: "/turnlateImages/fac_fb_select.png",








});

const showImage = (index) => {
  return Boolean(imgMap.value[index]);
};
const imgSrc = (czcode) => {
  return imgMap.value[czcode];
};

const props = defineProps({
  gamePass: {
    type: String,
    required: true,
  },
  passive: {
    type: String,
    default: "",
  },
  gameTypePass: {
    type: String,
    default: "",
  },
  gameTabsPass: {
    type: String,
    default: "",
  },
  headerName: {
    type: String,
    default: ''
  }
});

watch(gameType, (newVal) => {});
watch(liveGameUrl, (newVal) => {
  // if (newVal) {
  //   alert(newVal);
  // }
});

watch(
  () => props.gameTypePass,
  (newVal) => {
    if (newVal) {
      // alert(newVal);
      refetch();
    }
  }
);
watch(() => props.headerName, (newVal) => {
  alert(newVal)
  headerTitle.value = newVal
  alert(`this is the ${headerTitle.value}`)
  return headerTitle.value

})

watch(
  () => props.gameTabsPass,
  (newVal) => {
    if (newVal) {
      alert(newVal);
      getGameType.value = newVal;
      tabs();
    }
  }
);

const showTitle = computed(() => {
  if(headerTitle.value) {
    return headerTitle.value

  }
})

const { refetch } = useQuery({
  queryKey: ["gameTab"],
  queryFn: () =>
    axiosGet2(
      `/api/native/v2/get_game_datas_v2.do?gameType=${props.gameTypePass}&lan=en&pageSize=30&pageIndex=1`
    ),
  enabled: false,
  select: (data) => {
    gameTabs.value = data;
  },
});

const { refetch: tabs } = useQuery({
  queryKey: ["gameTab"],
  queryFn: () =>
    axiosGet2(
      `/api/native/v2/get_game_datas_v2.do?gameType=${getGameType.value}&lan=en&pageSize=30&pageIndex=1`
    ),
  enabled: false,
  select: (data) => {
    gameTabs.value = data;
  },
});

const { refetch: fetchGames, isFetching } = useQuery({
  queryKey: ["liveGames"],
  queryFn: () => axiosGet2(`/api${gameUrl.value}`),
  enabled: false,
  select: (data) => {
    if (data.url) {
      liveGameUrl.value = data.url;
    }
    if (data.html) {
      liveGameUrl.value = data.html;
    }
    if (data) {
      hideMain.value = false;
      nowShowingGames.value = true;
    }
  },

  onError: (err) => alert(err),
});

const { refetch: transOut } = useQuery({
  queryKey: ["transOut"],
  queryFn: () => axiosGet2("/api/native/v2/autoTranout.do?lan=en"),
});

const getTypes = (gameTypes, index) => {
  getGameType.value = gameTypes;
  activeBtn.value = index;
  alert(gameTypes);
  tabs();
};

watch(gameUrl, (newVal) => {
  // if (newVal) {
  //   alert(newVal);
  // }
});
const showGames = (url) => {
  gameUrl.value = url;
  if (!store.state.userInfo.isLogin) {
    loginModal.value = !loginModal.value;
    return;
  }
  fetchGames();
  // showAllGames()
};
const backlush = () => {
  hideMain.value = true;
  nowShowingGames.value = false;
  transOut();
};

const showIframGames = computed(() => {
  return liveGameUrl.value;
});

const showBtnImg = computed((index) => {
  return imgBtn.value[index];
});

onMounted(() => {});
</script>

<template>
  <div>
    <div class="bg-[#1A45B1] h-screen w-screen">
      <div
        class="border-b-[.02rem] h-[1rem] flex gap-[1rem] text-[#FFFFFF] justify-around items-center"
      >
        <span class="text-[.4rem]" @click="router.push('/')"><</span>
        <span class="text-[.4rem]">Search</span>
        <span></span>
      </div>
      <div
        class="flex justify-center items-center px-[.3rem] my-[.2rem] relative"
      >
        <input
          type="text"
          class="w-full rounded-[.1rem] p-[.2rem] h-[.5rem] bg-[#05309f] text-[white] border-[.01rem] border-[white]"
          v-model="search"
          @keydown.enter="toSearch"
        />
        <img
          src="/images/searchIcon.png"
          alt=""
          class="absolute right-[.4rem]"
          srcset=""
          @click="toSearch"
        />
      </div>

      <div
        class="text-[#6fa4ef] mb-[.5rem] px-[.2rem]"
        v-if="searchData.length > 0"
      >
        <div class="mb-[.3rem] flex justify-between items-center">
          <span class="flex items-center gap-[.1rem]"
            ><img
              src="/images/history.png"
              class="text-[#6fa4ef]"
              alt=""
              srcset=""
            />History</span
          ><span class="text-[#ea4d3d] flex items-center" @click="deleteAll">
            <img src="/images/delete.png" alt="" srcset="" />
            Deletar tudo</span
          >
        </div>
        <span
          class="p-[.1rem] border-[.01rem] mr-[0.1rem] rounded-[.2rem] relative border-[#6fa4ef] bg-[#05309f]"
          v-for="(items, index) in searchData"
          :key="index"
        >
          {{ items.title }}
          <span
            class="absolute text-[#FFF0BB] text-[.2rem] top-[-.2rem] right-[-.2rem] border-[.01rem] border-[#FFF0BB] bg-[#6fa4ef] rounded-[1rem] p-[.03rem]"
            @click="deleteGame(items)"
            ><CloseOutlined
          /></span>
        </span>
      </div>
      <div class="flex justify-center gap-[.4rem]">
        <div
          :class="[
            'flex items-center gap-[.02rem] pb-[.1rem]',
            showPesquisar ? 'border-b-2 border-[white]' : ' ',
          ]"
          @click="showGames('Pesquisar')"
        >
          <span
            ><img
              src="/images/searchIconColor.png"
              class="h-[.4rem]"
              alt=""
              srcset="" /></span
          ><span class="text-[white] text-[.25rem]">Pesquisar</span>
        </div>
        <div
          class="flex items-center gap-[.02rem]"
          :class="[
            'flex items-center gap-[.02rem] pb-[.1rem]',
            showPopular ? 'border-b-2 border-[white]' : '',
          ]"
          @click="showGames('Popular')"
        >
          <span
            ><img
              src="/images/Populasr.png"
              class="h-[.4rem]"
              alt=""
              srcset="" /></span
          ><span class="text-[white] text-[.25rem]">Popular</span>
        </div>
        <div
          class="flex items-center gap-[.02rem]"
          :class="[
            'flex items-center gap-[.02rem] pb-[.1rem]',
            showRecents ? 'border-b-2 border-[white]' : '',
          ]"
          @click="showGames('Recente')"
        >
          <span
            ><img
              src="/images/Recentes.png"
              class="h-[.4rem]"
              alt=""
              srcset="" /></span
          ><span class="text-[white] text-[.25rem]">Recente</span>
        </div>
        <div
          class="flex items-center gap-[.02rem]"
          :class="[
            'flex items-center gap-[.02rem] pb-[.1rem]',
            showfavorites ? 'border-b-2 border-[white]' : '',
          ]"
          @click="showGames('Favoritos')"
        >
          <span
            ><img
              src="/images/favorite.png"
              class="h-[.4rem]"
              alt=""
              srcset="" /></span
          ><span class="text-[white] text-[.25rem]">Favorites</span>
        </div>
      </div>
      <div
        class="h-[12rem] px-[.1rem] flex justify-center flex-wrap gap-[.2rem] py-[.1rem] mx-1 my-1 overflow-auto"
      >
        <transition name="route">
          <div class="flex justify-center flex-wrap gap-[.2rem]">
            <div
              class="w-[1.45rem] rounded-[.1rem] bg-[url('/images/BG.png')] bg-[length:1.2rem] bg-no-repeat bg-center"
              v-for="(tab, index) in gameData?.data?.content"
              :key="index"
              v-if="showPopular"
              @click="playGames(tab.finalRelatveUrl)"
            >
              <div class="relative">
                <span>
                  <img
                    :src="`/api/${tab.buttonImagePath}`"
                    class="h-[2.5rem]"
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
        </transition>

        <transition name="route">
          <div class="h-[7rem]" v-if="showRecents">
            <img
              class="w-[2.5rem]"
              src="/nodataImages/img_none_jl.png"
              alt=""
            />
          </div>
        </transition>
        <transition name="route">
          <div v-if="showPesquisar">
            <div
              v-for="{ games, tab } in store.state.useGetGames"
              :key="tab"
              class="grid grid-cols-3 gap-[.5rem]"
            >
              <div v-for="(name, index) in filteredGames(games)" :key="index">
                <span
                  class="text-[white] text-[.22rem] flex flex-wrap w-[1.5rem]"
                  >{{ name.name }}</span
                >
                <span
                  ><img
                    :src="`/api/${name.imgUrl}`"
                    class="h-[2.5rem]"
                    alt=""
                    srcset=""
                /></span>
              </div>
            </div>
          </div>
        </transition>
        <transition name="route">
          <div class="h-[7rem]" v-if="showfavorites">
            <img
              class="w-[2.5rem]"
              src="/nodataImages/img_none_jl.png"
              alt=""
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
  <AntModal
    :isOpen="loginModal"
    :componentPass="Login"
    :backGrounds="true"
    v-if="!store.state.userInfo.isLogin"
  />
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import Login from "@/components/layout/LoginComponent/LoginForm.vue";
import router from "@/router";
import { useQuery } from "@tanstack/vue-query";
import { axiosGet, axiosGet2 } from "@/components/axios/AxiosHook";
const showPesquisar = ref(false);
const showPopular = ref(false);
const showRecents = ref(false);
const showfavorites = ref(false);
const gameData = ref([]);
const search = ref("");
const searchData = ref([]);
import { CloseOutlined } from "@ant-design/icons-vue";
import { messageApi } from "@/components/antUi/antMessage";
import { useStore } from "@/store/store";
const store = useStore();
const searchGames = ref([]);
const loginModal = ref(false);

const games = [
  { name: "anna" },
  { name: "jjjj" },
  { name: "banana" },
  { name: "tes" },
  { name: "mango" },
  { name: "cake" },
  { name: "gas" },
  { name: "annie" },
  { name: "leslie" },
  { name: "sandra" },
];

const filteredGames = (games) => {
  const query = search.value.toLowerCase();
  return games.filter((game) => game.name.toLowerCase().includes(query));
};

const deleteGame = (game) => {
  searchData.value = searchData.value.filter((x) => x !== game);
};
const deleteAll = () => {
  searchData.value = [];
  localStorage.removeItem("games");
};
const toSearch = () => {
  if (search.value.trim() === "") {
    messageApi.info("Search Game please!");
    return;
  }

  searchData.value.push({
    title: search.value,
  });
  search.value = "";
  showGames("Pesquisar");
};

const showGames = (section) => {
  showPesquisar.value = false;
  showPopular.value = false;
  showRecents.value = false;
  showfavorites.value = false;

  section === "Pesquisar"
    ? (showPesquisar.value = true)
    : (showPesquisar.value = false);
  section === "Recente"
    ? (showRecents.value = true)
    : (showRecents.value = false);
  section === "Favoritos"
    ? (showfavorites.value = true)
    : (showfavorites.value = false);
  section === "Popular"
    ? (showPopular.value = true)
    : (showPopular.value = false);
};

const playGames = (url) => {
  alert(url)
  if (store.state.userInfo.isLogin) {
    const { refetch } = useQuery({
      queryKey: ["gamesUrl"],
      queryFn: () => axiosGet2(`/api${url}`),
      select: (data) => {},
      onError: (err) => alert(err),
    });
    if (url) {
      alert(url);
      refetch();
    }
  }
};

const {} = useQuery({
  queryKey: ["popular"],
  queryFn: () =>
    axiosGet(
      "/api/native/v2/get_game_datas_v2.do?gameType=pg&lan=en&pageSize=30&pageIndex=1"
    ),
  enabled: true,
  select: (data) => {
    gameData.value = data;
    searchGames.value = data;
  },
  onError: (err) => console.log(err),
});

watch(
  searchData,
  (newVal) => {
    localStorage.setItem("games", JSON.stringify(newVal));
  },
  { deep: true }
);

onMounted(() => {
  showGames("Popular");
  const datafromLocal = localStorage.getItem("games");
  if (datafromLocal) {
    try {
      searchData.value = JSON.parse(datafromLocal);
    } catch (error) {
      console.log(`errror parsing from ${error}`);
    }
  }
});
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(10rem);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>

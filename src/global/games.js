import { axiosGet2, axiosPost } from "@/components/axios/AxiosHook";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { ref } from "vue";

export const getGamesTab = () => {
  const getGameType = ref();
  const gamesData = ref([]);
  const getGame = useQuery({
    queryKey: ["forwardGames"],
    queryFn: async () =>
      await axiosGet2(
        `/api/native/v2/getGame2.do?type=${getGameType.value}&limitNum=50&lan=en`
      ),
    enabled: false,
    select: (data) => {
      gamesData.value = data;
    },
  });
  return {
    getGame,
    gamesData,
    getGameType,
  };
};

export const useGameType = () => {
  const gameDatas = ref([]);
  const typeGame = ref("");
  const useType = useQuery({
    queryKey: ["gameType"],
    enabled:false,
    queryFn: () =>
      axiosGet2(
        `/native/v2/get_game_datas_v2.do?gameType=${typeGame.value}&lan=en&pageSize=30&pageIndex=1`
      ),
    select: (data) => {
      gameDatas.value = data;
    },
    oneError: (err) => alert(err),
  });
  return {
    gameDatas,
    typeGame,
    useType,
  };
};

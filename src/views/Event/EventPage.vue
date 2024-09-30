<template>
  <!-- <Layout> -->
  <div class="bg-[#1A45B1] mainDiv w-screen h-auto p-[.2rem]">
    <div class="flex gap-[.2rem] mb-[.2rem]">
      <div class="flex flex-col gap-[.2rem] items-center">
        <div
          class="w-[1.5rem] h-[1rem] rounded-[.1rem] bg-amber-100 flex flex-col justify-center items-center relative"
          @click="navigateTo()"
        >
          <img src="/images/shapelogo.png" alt="" class="w-[.3rem]" />
          <span class="text-[.2rem] text-blue-900 text-center">Misto</span>
          <img
            src="/images/btn_zc1_jr.png"
            alt=""
            class="absolute w-[.5rem] top-0 left-0"
          />
          <img
            src="/images/btn_zc1_jr2.png"
            alt=""
            class="absolute w-[.5rem] bottom-0 right-0"
          />
        </div>

        <AntButton
          title="Historico"
          bg="#FFF0BB"
          h=".7rem"
          w="1.5rem"
          b=".1rem"
          ft=".22rem"
          @click="navigateTo(6)"
        />
        <AntButton
          title="Redemption"
          bg="#FFF0BB"
          h=".7rem"
          w="1.5rem"
          b=".1rem"
          ft=".22rem"
          @click="navigateTo(3)"
        />

        <div v-for="(e, index) in event?.content" :key="index">
          <AntButton
            :title="e.actDetailName"
            :bg="activeBtn === index ? ' #05309f' : '#FFF0BB'"
            :textCol="activeBtn === index ? ' white' : '#1A45B1'"
            :bord="activeBtn === index ? '1px solid white' : ''"
            h=".7rem"
            w="1.5rem"
            b=".1rem"
            ft=".22rem"
            @click="showActiviy(e.titleImg, index)"
          />
        </div>
      </div>

      <div class="flex flex-col gap-[.2rem] overflow-auto h-[13.05rem]">
        <div
          v-for="(eventItems, indexes) in event.content"
          class="flex flex-col gap-[.2rem]"
          v-if="eventShow"
        >
          <router-link to="/eventDetail">
            <div
              class="w-auto h-auto bg-[#05309F] rounded-[.1rem] p-[.12rem]"
              @click="clickEvent(eventItems.id)"
            >
              <img
                class="min-h-[2.1rem] imgs"
                :src="eventItems.titleImg"
                alt=""
              />
            </div>
          </router-link>
        </div>
        <div class="h-[10rem]" v-if="activityShow">
          <div class="text-[white]" v-if="titleImg">
            <img :src="titleImg" />
          </div>
          <div v-else class="text-[white]">no data image</div>
        </div>
      </div>
    </div>
  </div>
  <!-- </Layout> -->
</template>
<script setup>
import { useStore } from "@/store/store";
const store = useStore();
import Layout from "@/components/layout/Layout.vue";
import { ref } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import {
  axiosGet2,
  axiosGet,
  axiosPost,
} from "../../components/axios/AxiosHook.js";
import { useRouter } from "vue-router";

const event = ref([]);
const eventShow = ref(true);
const activityShow = ref(false);
const titleImg = ref();
const activeBtn = ref(null)

const clickEvent = (id) => {
  eventDetails({ actId: id });
};

const navigateTo = (index) => {
  store.commit("setIndexPass", index);
  activityShow.value = false;
};

const showActiviy = (content, index) => {
  titleImg.value = content;
  activeBtn.value = index;
  activityShow.value = true;
  eventShow.value = false;
};

const { isLoading } = useQuery({
  queryKey: ["events"],
  queryFn: async () =>
    await axiosGet2("/api/native/v2/getActivityCenterList.do"),
  select: (data) => {
    event.value = data;
  },
});

const { mutate: eventDetails } = useMutation({
  mutationFn: (payload) => axiosPost("/api/native/v2/getActDetail.do", payload),
  onSuccess: (data) => {
    store.commit("setPropsData", data);
  },
  onError: (err) => console.log(err),
});
</script>

<style scoped>
@media (min-width: 431px) {
  .imgs {
    height: 3rem;
    width: 5rem;
  }
  .mainDiv {
    width: auto;
  }
}
@media (max-width: 431px) {
  .imgs {
    height: 3rem;
    width: 5rem;
  }
}
</style>

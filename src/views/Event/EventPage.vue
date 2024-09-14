<template>
  <Layout>
    <div class="bg-[#1A45B1] w-screen h-auto p-[.2rem]">
      <div class="flex gap-[.2rem] mb-[.2rem]">
        <div class="flex flex-col gap-[.2rem] items-center">
          <div
            class="w-[1.5rem] h-[1rem] rounded-[.1rem] bg-amber-100 flex flex-col justify-center items-center relative"
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
          <RouterLink to="/records">
            <div
              class="w-[1.2rem] h-[.5rem] rounded-[.1rem] bg-amber-100 flex justify-center items-center"
            >
              <span class="text-[.2rem] text-blue-900">Historico</span>
            </div>
          </RouterLink>
        </div>

        <div class="flex flex-col gap-[.2rem] overflow-auto h-[13.05rem]">
          <div
            v-for="(eventItems, indexes) in event.content"
            class="flex flex-col gap-[.2rem]"
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
        </div>
      </div>
    </div>
  </Layout>
</template>
<script setup>
import { useStore } from "@/store/store";
const store = useStore()
import Layout from "@/components/layout/Layout.vue";
import { ref } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import {
  axiosGet2,
  axiosGet,
  axiosPost,
} from "../../components/axios/AxiosHook.js";
import router from "@/router";
const event = ref([]);
const id = ref();
const type = ref();


const clickEvent = (id) => {
    alert(id)
  eventDetails({ actId: id });
};

const { isLoading } = useQuery({
  queryKey: ["events"],
  queryFn: async () =>
    await axiosGet2("/api/native/v2/getActivityCenterList.do"),
  staleTime: 0,
  select: (data) => {
    event.value = data;
  },
});

const { mutate: eventDetails } = useMutation({
  mutationFn: (payload) => axiosPost("/api/native/v2/getActDetail.do", payload),
  onSuccess: (data) => {
    store.commit('setPropsData', data)
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
}
@media (max-width: 431px) {
  .imgs {
    height: 3rem;
    width: 5rem;
  }
}
</style>

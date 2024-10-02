<template>
  <div>
    <headerComp title="Lottery" recordCol=true />
    <div class="h-[13.5rem] bg-txt overflow-hidden text-[white]" v-for="(data, index) in lottery.data?.content">
      <div class="py-2 text-[.4rem] text-center bg-txt">Bonus wallet {{ store.state.userInfo.giftMoney }}</div>
      <div class="px-1"><img :src="data.taskImgUrl" alt="" srcset=""></div>
      <div class="flex">
        <div
          class="text-center bg-bg2 p-[.1rem] mx-1 rounded-[.1rem] text-bg leading-[.7rem]"
        >
          <div class="bg-bord">
            <div>Bet on Designated Games Unlock</div>
            <div class="text-txt2">Unlock Expiry Time Unlimited</div>
            <div class="flex justify-center gap-4 border-b-2 border-bg">
              <span>Unlock the Prize Money</span><span>{{ data.totalUnlockGift }}</span>
            </div>
            <div class="text-start">Task Progress</div>
            <div>50/{{ data.completeTaskMoney }}</div>
          </div>
        </div>
        <div class="flex items-center">
        <AntButton
          title="in Process"
          bg="#FFF0BB"
          h="1rem"
          w="2rem"
          b=".1rem"
          ft=".4rem"
        />
    </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { axiosGet2, axiosGet, axiosPost2, axiosPost3 } from "@/components/axios/AxiosHook";
import headerComp from "@/views/ReusableComponent/Head.vue";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import {useStore} from '@/store/store.js'
const store = useStore()
const lottery = ref([])

const {} = useQuery({
    queryKey: ['lot'],
    enabled:true,
    queryFn: () => axiosGet('/api/native/v2/getUnlockGiftTasks.do'),
    select: (data) => lottery.value = data,
    onError: (err) => console.log(err)
})

</script>

<style lang="scss" scoped></style>

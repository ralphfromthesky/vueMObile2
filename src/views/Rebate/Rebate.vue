<template>
  <div class="p-1 text-white">
    <div class="flex gap-1">
      <div>
        <div v-for="(e, index) in titleLink" :key="index" class="my-1">
          <AntButton
            :title="e.title"
            :bg="activeBtn === index ? ' #05309f' : '#FFF0BB'"
            :textCol="activeBtn === index ? ' white' : '#1A45B1'"
            :bord="activeBtn === index ? '1px solid white' : ''"
            h=".7rem"
            w="1.5rem"
            b=".1rem"
            ft=".22rem"
            @click="showActiviy(index, e.title, e.type )"
          />
        </div>
      </div>
      <div class="h-[13rem] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Slots'">
      <div class="bg-bg2 p-[.2rem] flex justify-between rounded-[.1rem]">
        <div class="">
          <div class="text-bg font-bold text-[.3rem]">{{activeTitle}}</div>
          <div class="my-1 p-[.1rem] rounded-[.2rem] bg-bg text-txt">Bet - {{ kickBack?.data?.content?.rows[0].minBet }} /  get - {{0.01 * kickBack?.data?.content?.rows[0].kickback }}</div>

        </div>
        <div class="flex flex-col">
          <span>Rebate Max</span>
          <span>Limit</span>
          <span>Rebate</span>
        </div>
      </div>
      
      </div>
      <div class="h-[13rem] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Fishing'">{{activeTitle}}2</div>
      <div class="h-[13rem] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Live Casino'">{{activeTitle}}3</div>
      <div class="h-[13rem] flex-auto p-1 overflow-auto" v-if="activeTitle === 'E-Sports'">{{activeTitle}}4</div>
      <div class="h-[13rem] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Sports'">{{activeTitle}}5</div>
      <div class="h-[13rem] flex-auto p-1 overflow-auto" v-if="activeTitle === 'Lottery'">{{activeTitle}}5</div>
      <div class="h-[13rem] flex-auto p-1 overflow-auto" v-if="activeTitle === 'iGaming'">{{activeTitle}}6</div>

      
    </div>

    <!-- <<SpinLoader/> -->
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { axiosGet, axiosPost } from "@/components/axios/AxiosHook";

const activeBtn = ref(0);
const activeTitle = ref('Slots')
const kickBack = ref([])

const showActiviy = (index, title, type) => {
    activeBtn.value = index
    activeTitle.value = title
    mutate({
      type: type,
      pageSize: 100
    })
    
}

const titleLink = ref([
  { title: "Slots", type: 2 },
  { title: "Fishing" , type: 4 },
  { title: "Live Casino", type: 1 },
  { title: "E-Sports", type: 6 },

  { title: "Sports", type: 6 },

  { title: "Lottery", type: 7 },

  { title: "iGaming",type: 4 },
]);

const {mutate, isSuccesss} = useMutation({
  mutationFn: (payload) => axiosPost('/api/native/v2/getKickBackStrategy.do', payload),
  onSuccess: (data) => {kickBack.value = data},
  onError: (err) => alert(err),
  
})
</script>

<style lang="scss" scoped></style>

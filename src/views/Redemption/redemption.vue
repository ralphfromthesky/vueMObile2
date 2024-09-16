<template>
  <Layout>
    <div class="p-[.2rem] w-screen custom">
     
        <div class="redeem-code">
          <div class="text-[.3rem] mt-1 text-[white]">Please enter the redemption code</div class="text-[.3rem] text-[white]">
          <div class="my-[.5rem]">
            <input
              placeholder="Please enter the redemption code"
              class="w-full h-[1rem] rounded-[.1rem] pl-1"
              v-model="codes"
            />
          </div>
        </div>
        <div class="redeem-bottom">
          <div class="top" @click="sendRedemptionCode">
            <AntButton
              title="Redeem Bonus"
              bg="#FFF0BB"
              h=".8rem"
              w="100%"
              b=".1rem"
              ft=".3rem"
              
            />
          </div>
          <div class="text-[white] text-[.3rem] text-center my-2">
            Social Network 
          </div>
          <div class="content flex gap-1">
            <img src="/images/img_tg.png" alt="" class="h-[1rem]"/>
            <img src="/supportImages/instagram.png" class="h-[1rem]" />
            <img src="/supportImages/whatsapp.png" class="h-[1rem]" />
            <img src="/images/fbook.png" alt="" class="h-[1rem]"/>
            <img src="/supportImages/twitter.png"class="h-[1rem]" />
          </div>
        </div>
      </div>
   
  </Layout>
</template>

<script setup>

import { useMutation } from "@tanstack/vue-query";
import Layout from "../../components/layout/Layout.vue";
import { axiosPost } from "@/components/axios/AxiosHook";
import { ref } from "vue";
import { messageApi } from "@/components/antUi/antMessage";
const redeemData = ref([])
const codes = ref('')


const sendRedemptionCode = () => {
  if(!codes.value || codes.value.trim() === '') {
    messageApi.info('please input redemption code!')
    return
  }
redeem({code: codes.value })
}

const {mutate: redeem} = useMutation({
  mutationFn: (payload) => axiosPost('/api/native/v2/couponRecharge.do', payload),
  onSuccess: (data) => messageApi.info(data?.data?.msg),
  onError: (err) => console.log(err)
})
</script>



<style scoped>
@media screen and (min-width: 431px) {
  .custom {
    width: auto;
  }
}
</style>

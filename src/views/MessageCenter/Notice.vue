<template>
  <!-- <PageLayout title="Centro de mensagens"> -->
  <div
    class="flex h-[calc(100vh-2.9rem)] items-center flex-col p-[.2rem] w-full gap-[.2rem]"
    v-if="showData"
  >
    <div
      class="flex w-full justify-between bg-[#05309F] rounded-[.1rem] p-[.2rem]"
      v-for="(message, index) in messageData"
      :key="index"
      @click="showContent(message.content)"
    >
      <div class="flex items-center gap-[.2rem]" v-if="showData">

        <img src="/images/openEnvblue.png" alt="" class="w-[.5rem]" />
        <div class="flex flex-col max-w-[4.5rem] min-w-[4.5rem]">
          <span class="text-white text-[.24rem]">{{ message.title }}</span>
          <span class="text-[#6FA4EF] text-[.22rem]">{{
            message.createTime
          }}</span>
        </div>
      </div>
      <div class="flex items-centergap-[.2rem]">
        <span class="text-[#6FA4EF] text-[.25rem]">Lidos</span>
        <img src="/images/return.png" alt="" class="rotate-180 w-[.3rem] h-[.3rem]" />
      </div>
    </div>
    <!-- <div
      v-if="Object.keys(messageData).length == 0"
      class="flex flex-col items-center h-full overflow-auto w-full/"
    >
      <div class="flex flex-col h-full justify-center items-center">
        <img class="w-[2.5rem]" src="/nodataImages/img_none_jl.png" alt="" />
        <span class="text-[#6FA4EF] text-[.25rem]">Sem Registros</span>
      </div>
    </div> -->
  </div>
  <div v-if="mainMsg" class="text-white m-[.2rem]border-2">
    <div class="bg-[#05309F] rounded-[.1rem] p-[.2rem] flex gap-2">
      <span @click="goBack"
        ><img src="/images/back.png" alt="" class="w-[.5rem]"
      /></span>
      <span> {{ messages }} </span>
    </div>
  </div>
  <!-- </PageLayout> -->
</template>
<script setup>
import { onMounted, ref } from "vue";
import PageLayout from "@/components/layout/MessageCenterLayout.vue";
import { useMessage } from "@/global/messageCenter.js";
const { messageList, messageData } = useMessage();
const showMsg = ref(null);
const showData = ref(true);
const mainMsg = ref(false)
const messages = ref("");

const showContent = (data) => {
  messages.value = data;
  showData.value = false;
  mainMsg.value = true

};
const goBack = () => {
  showData.value = true;
  mainMsg.value = false
};

// onMounted(() => {
//   messageList.refetch();
// });
</script>

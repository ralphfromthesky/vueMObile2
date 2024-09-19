<template>
    <div>
      <div class="text-[.4rem] font-bold text-center text-[white] py-[.1rem]">
        {{ props.title }}
      </div>
      <VantTabs
        :title-links="tablink"
        :component-pass="[AccountDetails, BettingRecords, AccountDetailsRecord]"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  //   <TabContainer bg="#05309F">
  //     <Tabs title="Conta" link="/accountdetails" />
  //     <Tabs title="Apostas" link="/bettingrecords" />
  //     <Tabs title="Relatório" link="/accountdetailsrecord" />
  //   </TabContainer>
  import AccountDetails from "@/views/AccountDetails/AcccountDetails.vue";
  import BettingRecords from "@/views/AccountDetails/BettingRecords.vue";
  import AccountDetailsRecord from "@/views/AccountDetails/AccountDetailsRecord.vue";
  
  const tablink = ref([
    { title: "Conta" },
    { title: "Apostas" },
    { title: "Relatório" },
  ]);
  
  const props = defineProps({
    title: {
      type: String,
      required: false,
      default: "",
    },
  });
  </script>
  
  <style lang="scss" scoped></style>
  
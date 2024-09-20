<template>
    <div>

      <VantTabs
        :title-links="tablink"
        title="Relatario"
        :component-pass="[AccountDetails, BettingRecords, AccountDetailsRecord]"
        :indexPass=store.state.indexPass
        />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useStore } from "@/store/store";
  const store = useStore()
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
  
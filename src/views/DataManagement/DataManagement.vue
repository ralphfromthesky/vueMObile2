<template>
  <div>
    <div>
      <HeaderView title="Data Management" />
      <VantTabs
        :title-links="links"
        :hasData="dataManagement"

      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { axiosGet } from "@/components/axios/AxiosHook";

const dataManagement = ref([])

const {} = useQuery({
queryKey: ['list'],
enable: true,
queryFn: () => axiosGet('/api/native/v2/article/list.do?type=3'),
select: (data) => {dataManagement.value = data}
})


const links = ref([
  { title: "About us", key: 1 },
  { title: "Withdrawal Assistance", key: 2 },
  { title: "Deposit Assistance", key: 3 },
  { title: "Alliance Plan", key: 4},
  { title: "Alliance Agreement", key: 5 },
  { title: "Contact me", key: 6 },
  { title: "FAQ", key: 7 },

]);
</script>

<style lang="scss" scoped></style>

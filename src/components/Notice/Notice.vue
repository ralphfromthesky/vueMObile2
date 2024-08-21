<template>
    <div>
ralph santolorin
{{ noticeData }}
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { useQuery } from "@tanstack/vue-query";
const noticeData = ref([])

const {} = useQuery({
  queryKey: ['notice'],
  queryFn: () => axiosGet2("/api/native/v2/new_notice_v2.do?lan=en&type=19"),
  enabled: true,
  select: (data) => {
    noticeData.value = data;
  },
  onError: (err) => console.log(err),
});
</script>

<style lang="scss" scoped>

</style>
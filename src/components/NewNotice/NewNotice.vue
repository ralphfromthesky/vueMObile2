<template>
  <div>
    <div>
      <div v-for="(not, index) in notice.content" :key="index">
        <div>
          <span>Website Notice</span>
        <span><img :src="not.content"/></span>
        <!-- <div v-html="not.content"></div> -->
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from "@tanstack/vue-query";
import {ref} from 'vue'
const notice = ref([])
const {} = useQuery({
  queryFn: () => axiosGet2('/api/native/v2/new_notice_v2.do?lan=en&type=19'),
  select: (data) => {notice.value = data},
  enabled: true,
  onError: (err) => console.log(err)
})

</script>

<style lang="scss" scoped></style>

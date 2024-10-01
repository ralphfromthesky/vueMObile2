<template>
  <div>
    <div>
      <!-- <VantTabs :hasBackButton="false" :hasPaddingLeft="true" :title-links="titles"/> -->
    </div>
    <div class="text-[white] p-1 flex gap-1">
      <div class="flex flex-col gap-1">
        <AntButton
          title="Unused"
          :bg="unused ? '#05309f' : '#FFF0BB'"
          h="1rem"
          w="1.5rem"
          b=".1rem"
          ft=".24rem"
          :bord="unused ? '1px solid #3a61c2' : ''"
          :textCol="unused ? 'white' : ''"
          @click="showVoucher('unused')"
        />
        <AntButton
          title="Already use"
          :bg="used ? '#05309f' : '#FFF0BB'"
          h="1rem"
          w="1.5rem"
          b=".1rem"
          ft=".24rem"
          :bord="used ? '1px solid #3a61c2' : ''"
          :textCol="used ? 'white' : ''"
          @click="showVoucher('used')"
        />
        <AntButton
          title="Expired"
          :bg="expired ? '#05309f' : '#FFF0BB'"
          h="1rem"
          w="1.5rem"
          b=".1rem"
          ft=".24rem"
          :bord="expired ? '1px solid #3a61c2' : ''"
          :textCol="expired ? 'white' : ''"
          @click="showVoucher('expired')"
        />
      </div>
      <div
        class="h-[13rem] border-2 border-bord bg-bg2 rounde-[.1rem] overflow-auto flex-1 p-[.1rem] relative"
      >
        <transition name="route">
          <div class="absolute top-1 left-4" v-if="unused">
            <div class="text-center pb-1">Unused</div>
            <div v-for="(data, index) in voucherData.data?.content">
              <div>{{ data }}</div>
            </div>
            <div
              class="flex flex-col justify-between items-center"
              v-if="voucherData?.data?.content?.length === 0"
            >
              <img
                class="w-[2.5rem] text-txt"
                src="/nodataImages/img_none_jl.png"
                alt=""
              />
              <div>No data to show...</div>
            </div>
          </div>
        </transition>
        <transition name="route">
          <div class="absolute top-1 left-4" v-if="used">
            <div class="text-center pb-1">Used</div>
            <div v-for="(data, index) in voucherData.data?.content">
               <div>{{ data }}</div>
            </div>
            <div class="flex flex-col justify-between items-center" v-if="voucherData?.data?.content?.length === 0">
              <img
                class="w-[2.5rem] text-txt"
                src="/nodataImages/img_none_jl.png"
                alt=""
              />
              <div>No data to show...</div>
            </div>
          </div>
          </transition>
          <transition name="route">
            <div class="absolute top-1 left-4" v-if="expired">
            <div class="text-center pb-1">Expired</div>
            <div v-for="(data, index) in voucherData.data?.content">
               <div>{{ data }}</div>
            </div>
            <div class="flex flex-col justify-between items-center" v-if="voucherData?.data?.content?.length === 0">
              <img
                class="w-[2.5rem] text-txt"
                src="/nodataImages/img_none_jl.png"
                alt=""
              />
              <div>No data to shows...</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <SpinLoader v-if="isFetching" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { axiosPost, axiosGet, axiosPost2 } from "@/components/axios/AxiosHook";
import { useMutation, useQuery } from "@tanstack/vue-query";
import SpinLoader from '@/components/antUi/spinLoader.vue'
const voucherData = ref([]);

const titles = ref([
  { name: "Unused" },
  { name: "Already use" },
  { name: "Expired" },
]);
const unused = ref(true);
const used = ref(false);
const expired = ref(false);

const showVoucher = (voucher) => {
  unused.value = false;
  used.value = false;
  expired.value = false;
  voucher === "unused" ? (unused.value = true) : "";
  voucher === "used" ? (used.value = true) : "";
  voucher === "expired" ? (expired.value = true) : "";
};
const { refetch,  isFetching} = useQuery({
  queryKey: ["expired"],
  enabled: true,
  queryFn: () => axiosGet("/api/native/v2/couponUseData.do"),
  select: (data) => {
    voucherData.value = data;
  },
});
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(50rem);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-10rem);
}

.route-leave-active {
  transition: all 0.4s ease-in-out;
}
</style>

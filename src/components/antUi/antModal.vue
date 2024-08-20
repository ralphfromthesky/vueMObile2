<template>
  <div>
    <!-- <a-button type="primary" @click="showModal">Open Modal</a-button> -->
    <a-modal
      v-model:open="open"
      @ok="handleOk"
      :v-if="isOpen"
      :footer="null"
      :closable="false"
      centered
      :class="{ modas: props.bgColor, customColor: props.backGrounds }"
      @cancel="handeClose"
    >
      <component :is="componentPass" @close="handleOk"></component>
      <div class="flex justify-center text-[.7rem] font-bold text-[#d4d0d0] h-[4rem] flex-col text-center" v-if="props.elementPass">
        <div class="text-[.7rem] text-[#d4d0d0]">{{ props.elementPass }}</div>  
        <span class="text-[.7rem] text-[red]">Receive</span>
      </div>
      <div class="flex justify-center text-[.7rem] font-bold text-[#d4d0d0] flex-col text-center" v-if="props.dataCode">
        <span><img src="/public/turnlateImages/pic2.81cd4374.png"/></span>
        <div class="text-[.3rem] h-[5rem] overflow-auto text-left bg-bg border-2 border-txt rounded-[.2rem] text-txt p-[.1rem]">{{ props.dataCode }}</div> 
        <div><a href="https://vk8.me/app/mg_MP6D" target="_blank"> <span class="bg-bg w-[4rem] p-[.2rem] text-txt border-2 border-txt rounded-[.2rem]">App Download</span></a></div>
      </div>
      
      <span
        class="absolute registerModalButton left-[45%] bottom-[-.8rem]"
        id="handleThis"
        @click="handleOk"
      >
        <CloseOutlined
          class="text-bg text-[.3rem] border-4 border-bg p-[.1rem] rounded-[50%]"
        />
      </span>
    </a-modal>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, defineExpose, onUnmounted } from "vue";
import { CloseOutlined } from "@ant-design/icons-vue";
import { useLogin } from "@/global/loginQuery.js";
const { loginMutation } = useLogin();
import { useStore } from "@/store/store";
const store = useStore();

const showModal = () => {
  open.value = true;
};
const handleOk = () => {
  open.value = false;
  emits("closed", false);
};

const handeClose = () => {
  open.value = false;
};

const emits = defineEmits(["closed"]);

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  pass: {
    type: String,
  },
  title: String,
  componentPass: {
    type: Object,
    default: () => ({}),
  },
  bgColor: {
    type: Boolean,
    default: false,
  },
  backGrounds: {
    type: Boolean,
    default: false,
  },
  newMessage: {
    type: String,
    default: "",
  },
  elementPass: {
    type: Object,
    required: false,
  },
  dataCode: {
    type: String,
    required: false,
    default: ''
  }

});

const open = ref(props.isOpen);
watch(
  () => props.isOpen,
  (newVal) => {
    open.value = newVal;
  }
);

// onMounted(() => {
//   const closed = document.getElementById("handleThis");
//   if (store.state.userInfo.isLogin === true) {
//     closed.addEventListener("click", handleOk);
//     closed.click()
//   }
// });

</script>

<style>
.modas .ant-modal-content {
  background-color: transparent;
}

.customColor .ant-modal-content {
  background-color: #05309f;
}
</style>

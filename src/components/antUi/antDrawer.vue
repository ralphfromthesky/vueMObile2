<template>
  <!-- <a-button type="primary" @click="showDrawer">Open</a-button> -->
  <a-drawer
    v-model:open="open"
    :root-style="{ color: 'blue'}"
    style="color: #1A45B1"
    placement="bottom"
    @after-open-change="afterOpenChange"
    :height=" closedElement ? '7rem': '5rem'"
    :closable="false"
    
  >
  <template #title v-if="closedElement">
      <div class="flex justify-between items-center w-full">
        <div>
          <span class="text-txt">{{ headerTitle }}</span>
        </div>
        <div>
          <span @click="showDrawer" class="cursor-pointer">
            <CloseOutlined  class="text-txt border-[.05rem] p-[.06rem] rounded-[50%] border-txt"/>
          </span>
        </div>
      </div>
    </template>

    <div>
      <component :is="componentPass" @bday="showBday" @closed="afterOpenChange"></component>

    </div>

    <div class="flex justify-between" v-if="closedElement">
      <div
        class="flex flex-col items-center"
        v-for="(images, index) in props.imageData"
        :key="index"
      >
        <a :href="images.link" target="_blank">
          <div><img :src="images.image" class="h-[.7rem]" /></div>
        </a>
        <div class="text-[.2rem] text-txt">{{ images.title }}</div>
      </div>
    </div>
    <div class="flex items-center mt-[.3rem]" v-if="closedElement">
        <span class="h-[.4rem] border-[.009rem] border-txt w-[10rem] rounded-[.1rem]">
          Lorem ipsum dolor sit amet.
        </span>
        <span>
            <CopyOutlined class="text-[.5rem]"/>
        </span>
    </div>
  </a-drawer>
</template>
<script setup>
import { ref, watch } from "vue";
// import AntMessage from "@/components/antUi/antMessage.vue";
import { CopyOutlined } from "@ant-design/icons-vue";
import { CloseOutlined } from '@ant-design/icons-vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  headerTitle: {
    type: String,
    default: '#1A45B1'
    
  },

  componentPass: {
    type: Object,
    default: () => ({}),
  },
  imageData: {
    type: Object,
    default: () => {},
  },
  closedElement: {
    type: Boolean,
    default: false,
  }

});
const open = ref(props.isOpen);

watch(
  () => props.isOpen,
  (newVal) => {
    open.value = newVal;
  }
);

const afterOpenChange = (bool) => {
  console.log("open", bool);
  emits('closed', bool )
  // alert(bool)

};
const showDrawer = () => {
  open.value = false;
};

const emits = defineEmits(['bDates', 'closed'])

const showBday = (bday) => {
  emits('bDates', bday)
}
</script>

<style scoped>

/* .noPadding .ant-drawer .ant-drawer-body {
  padding: 0 !important;
} */
</style>
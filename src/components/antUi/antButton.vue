<template>
  <div>
    <button
      :class="cla ? 'btns' : 'btn'"
      :style="{
        height: h,
        width: w,
        backgroundColor: store.state.setThemes.lightTheme ? '#f758a7' : store.state.setThemes.darkTheme ? 'black' : bg,
        padding: p,
        borderRadius: b,
        fontSize: ft,
        fontWeight: bl,
        color: store.state.setThemes.lightTheme ? 'white' : store.state.setThemes.darkTheme ? 'white' : textCol
      }"
    >
      {{ props.title }}
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "@/store/store.js";
const store = useStore();

const newStyle = computed(() => {
  if (store.state.setThemes.lightTheme) {
  }
});

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  h: {
    type: String,
    required: false,
    default: "",
  },
  w: {
    type: String,
    required: false,
    default: "",
  },
  bg: {
    type: String,
    required: false,
    default: "",
  },
  p: {
    type: String,
    required: false,
    default: "",
  },
  m: {
    type: String,
    required: false,
    default: "",
  },
  b: {
    type: String,
    required: false,
    default: "",
  },
  tx: {
    type: String,
    required: false,
    default: "",
  },
  ft: {
    type: String,
    required: false,
    default: "",
  },
  cla: {
    type: Boolean,
    default: false,
  },
  bl: {
    type: String,
    required: false,
    default: "",
  },
  textCol: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style>
.btn {
  color: #1a45b1;
}
.btns {
  color: #fff0bb;
  border: 1px solid #fff0bb;
}
</style>

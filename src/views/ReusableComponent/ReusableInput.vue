<template>
  <div>
    <input
      type="text"
      :disabled="props.dis ? true : false"
      :style="{
        width: w ? w : '100%',
      }"
      :placeholder="props.plhldr ? props.plhldr : 'Nome de Usuário'"
      class="outline-none bg-transparent text-white border border-[#3a61c2] rounded-[.1rem] p-[.1rem] pr-[.6rem] focus:border-[#FFF0BB] focus:font-bold placeholder:text-[#6FA4EF]"
      v-model="inputValue"
      @input="('valFromChild', inputValue)"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  plhldr: {
    type: String,
    default: "place holder",
    required: true,
  },
  w: {
    type: String,
    default: "",
  },
  dis: {
    type: Boolean,
    default: false,
    required: false,
  },
  dataPass: {
    type: String,
    default: "",
    required: false,
  },
});

const inputValue = ref(props.dataPass);
const emit = defineEmits(["valFromChild"]);
watch(() => inputValue.value, (newVal) => {
emit('valFromChild', newVal)
})

</script>

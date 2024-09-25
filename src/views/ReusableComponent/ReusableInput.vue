<template>
  <div>
    <input
      type="text"
      :disabled="props.dis ? true : false"
      :style="{
        width: w ? w : '100%'
      }"
      :placeholder="props.plhldr ? props.plhldr :'Nome de Usuário' "
      class="outline-none bg-transparent text-white border border-[#3a61c2] rounded-[.1rem] p-[.1rem] pr-[.6rem] focus:border-[#FFF0BB] focus:font-bold placeholder:text-[#6FA4EF]"
    />
  </div>
</template>

<script setup>

 const props = defineProps({
    plhldr: {
        type: String,
        default: 'place holder',
        required: true
    },
    w: {
        type: String,
        default: ''
    },    dis: {
        type: Boolean,
        default: false,
        required: false
    }
 })
</script>

<style lang="scss" scoped></style>

<!-- v-model="userLogin.username"
@input="userNameInput = false"
:class="{ 'border-2 border-red-500': userNameInput }" -->

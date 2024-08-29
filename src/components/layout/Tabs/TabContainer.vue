<template>
    <div :class="`custom3 flex items-center gap-[.5rem] h-[.8rem] p-[.2rem] bg-[`+props.bg+`] border-b-[.04rem] border-b-[#3A61C2] overflow-x-auto overflow-y-hidden text-white`">
        <slot></slot>
    </div>
</template>
<script setup>
const props = defineProps({
  bg: { type: String, required: true },
});
</script>

<style scoped>
@media screen and (min-width: 432px) {
  .custom3 {
    width: 7.3rem;
  }
}

@media screen and (max-width: 432px) {
  .custom3 {
    width: 100vw;
  }
}

</style>
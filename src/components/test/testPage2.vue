<template>
    <div class="bg-[yellow]">
        this is the testPage-2

        <!-- <component :is="props.componentPass"></component> -->
        <!-- <component v-for="(Comp, index) in componentPass" :is="Comp" :key="index" /> -->


<component  :is="props.componentPass[props.numberPass]"></component>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const number =ref(0)



const props = defineProps({
    componentPass: {
        type: Array,
        required: false,
        default: ()=> {}
    },
    numberPass: {
        type: Number,
        required: false,
        default: 0
    }

})
</script>

<style lang="scss" scoped>

</style>
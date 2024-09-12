<template>
    <div>
        <button :class="cla ? 'btns' : 'btn'" :style="{height : h, width: w, backgroundColor: bg, padding: p, borderRadius: b, fontSize: ft, fontWeight: bl}">{{ props.title }}</button>

    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: ''
    },
    h: {
        type: String,
        required: false,
        default: ''
    },
    w: {
        type: String,
        required: false,
        default: ''
    },
    bg: {
        type: String,
        required: false,
        default: ''
    },
    p: {
        type: String,
        required: false,
        default: ''
    },
    m: {
        type: String,
        required: false,
        default: ''
    },
    b: {
        type: String,
        required: false,
        default: ''
    },
    tx: {
        type: String,
        required: false,
        default: ''
    },
    ft: {
        type: String,
        required: false,
        default: ''
    },
    cla : {
        type: Boolean,
        default: false
    },
    bl : {
        type: String,
        required: false,
        default: ''
    }



})

</script>

<style>
.btn {
    color: #1a45b1;
}
.btns {
    color: #FFF0BB;
    border: 1px solid #FFF0BB;
}
</style>
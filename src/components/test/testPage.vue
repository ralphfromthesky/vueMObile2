<template>
  <div>
    <button @click="toggleSlide">
      Toggle Component
    </button>

    <transition :name="slideDirection" mode="out-in">
      <div v-if="showComponent" class="sliding-component">
        <component :is="dynamicComponent"></component>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showComponent = ref(true);
const dynamicComponent = ref(Menu);
import Menu from '@/views/MenuPage/Menu.vue';
const slideDirection = ref('slide-right'); // Initial slide direction

const toggleSlide = () => {
  showComponent.value = !showComponent.value;
  
  // Toggle slide direction on each click
  slideDirection.value = showComponent.value ? 'slide-right' : 'slide-left';
};
</script>

<style scoped>
/* Slide from the right */
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Slide from the left */
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>

<template>
  <main>
    <div class="flex custom1 flex-col items-center top-0 w-full">
      <div class="flex items-center relative custom2 h-[.9rem] p-[.2rem] bg-[#05309F]">
        <div class="custom3" @click="this.$router.go(-1)">
          <img src="/images/return.png" class=" w-[.3rem]" alt="" />
        </div>
        <div class="flex justify-center w-full">
          <span class="text-white text-[.3rem]">{{ props.title }}</span>
        </div>
      </div>
      <TabContainer bg="#05309F">
        <Tabs title="Suporte" link="/support" />
        <Tabs title="Notice" link="/notice" />
        <Tabs title="Notification" link="/notification" />
        <Tabs title="Painel Rolante" link="/announcement" />
        <Tabs title="Bônus de Sugestão" link="/suggestion" />
      </TabContainer>
    </div>
    <div class="flex bg-[#1a45b1]">
      <section class="bg-[#1a45b1] h-[calc(100vh-1.7rem)] custom3 mt-[1.7rem] w-screen overflow-auto">
        <div class="flex items-center w-full">
          <slot></slot>
        </div>
      </section>
    </div>
  </main>
</template>
<script setup>
import Tabs from "./Tabs/TabPage.vue";
import TabContainer from "./Tabs/TabContainer.vue";
const props = defineProps({
  title: { type: String, required: true }
});
</script>
<style scoped>
.router-link-active .link-content {
  border-bottom: 3px solid hsl(47, 100%, 87%);
  color: hsl(47, 100%, 87%);
}
@media screen and (max-width: 430px) {
  .custom1 {
    position: fixed;
    top: 0;
  }
  .custom2 {
    width: 100%;
  }

}

@media screen and (min-width: 432px) {
  .custom2 {
    width: 100%;
  }
  .custom3 {
    margin-top: .1rem
  }
}

</style>

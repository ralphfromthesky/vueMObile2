<template>
  <main>
    <div class="mainDiv flex flex-col">
      <div
        class="flex items-center relative w-screen h-[.9rem] p-[.2rem] bg-[#05309F] border-b-[.03rem] border-b-[#3A61C2]"
      >
        <div class="absolute mainDiv2" @click="this.$router.go(-1)">
          <img src="/images/return.png" class="w-[.3rem]" alt="" />
        </div>
        <div class="custom1 flex justify-center ml-[2.8rem]">
          <span class="text-white text-[.3rem]">{{ props.title }}</span>
        </div>
      </div>
      <TabContainer bg="#05309F">
        <Tabs title="Conta" link="/accountdetails" />
        <Tabs title="Apostas" link="/bettingrecords" />
        <Tabs title="Relatório" link="/accountdetailsrecord" />
      </TabContainer>
    </div>
    <div class="flex bg-[#1a45b1]">
      <section
        class="custom2 bg-[#1a45b1] h-[calc(100vh-1.6rem)] w-screen overflow-auto"
      >
        <div class="flex items-center justify-center w-full">
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
  title: { type: String, required: true },
});
</script>
<style scoped>
.router-link-active .link-content {
  border-bottom: 3px solid hsl(47, 100%, 87%);
  color: hsl(47, 100%, 87%);
}
@media (min-width: 432px) {
  .mainDiv {
    width: auto;
  }
  .mainDiv2 {
    position: absolute;
    left: 0;
  }

}
@media (max-width: 432px) {
  .mainDiv {
    width: 100%;
    position: fixed;
    top: 0;
  }
  .custom1 {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-right: 2.8rem;

  }
  .custom2 {
    margin-top: 1.6rem;
  }
}
</style>

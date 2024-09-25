<template>
  <div>
    <div>
      <div><HeaderView title="Agent Management" /></div>
      <div class="h-[13.5rem] overflow-auto p-1 text-[white] bg-txt">
        <div class="flex justify-center gap-[1rem] mb-1">
          <span
            :class="[share ? 'border-b-4 border-b-bg' : '']"
            @click="showData('share')"
            >My Share</span
          >
          <span
            :class="[team ? 'border-b-4 border-b-bg' : '']"
            @click="showData('team')"
            >Team Overview</span
          >
          <span
            :class="[user ? 'border-b-4 border-b-bg' : '']"
            @click="showData('user')"
            >User List</span
          >
        </div>
        <div
          class="flex justify-between flex-col border-t-[.05rem]"
          v-if="share"
        >
          <div class="flex justify-between border-b-[.05rem] border-bord py-1">
            <AntButton
              title="Invitaion Overview"
              :bord="invitation ? '1px solid #3a61c2' : '1px solid #fff0bb'"
              :textCol="invitation ? '#1a45b1' : '#fff0bb'"
              :bg="invitation ? '#fff0bb' : ''"
              h=".8rem"
              w="2rem"
              b=".1rem"
              ft=".3rem"
              @click="showShare('invitation')"
            />
            <AntButton
              title="Deposit Information"
              :bord="deposit ? '1px solid #3a61c2' : '1px solid #fff0bb'"
              :textCol="deposit ? '#1a45b1' : '#fff0bb'"
              :bg="deposit ? '#fff0bb' : ''"
              h=".8rem"
              w="2rem"
              b=".1rem"
              ft=".3rem"
              @click="showShare('deposit')"
            />
            <AntButton
              :bord="bonus ? '1px solid #3a61c2' : '1px solid #fff0bb'"
              :textCol="bonus ? '#1a45b1' : '#fff0bb'"
              :bg="bonus ? '#fff0bb' : ''"
              title="Bonus Information"
              h=".8rem"
              w="2rem"
              b=".1rem"
              ft=".3rem"
              @click="showShare('bonus')"
            />
          </div>
          <div v-if="invitation">
            <div class="flex flex-wrap justify-center my-1 gap-1">
              <div
                class="border-2 h-[3rem] w-[3rem] bg-[red] p-1 flex flex-col gap-2"
              >
                Toda's invitation <span>0</span>
              </div>
              <div
                class="border-2 h-[3rem] w-[3rem] bg-[red] p-1 flex flex-col gap-2"
              >
                today's rebate <span>0</span>
              </div>
              <div
                class="border-2 h-[3rem] w-[3rem] bg-[red] p-1 flex flex-col gap-2"
              >
                today's first deposit <span>0</span>
              </div>
              <div
                class="border-2 h-[3rem] w-[3rem] bg-[red] p-1 flex flex-col gap-2"
              >
                total number of charges <span>0</span>
              </div>
            </div>
            <div>
              <div class="p-1 py-[.5rem] flex justify-between my-1 bg-bg2">
                <span>invite link:</span>
                <span>asfsadf</span><span>copy img</span>
              </div>
              <div class="p-1 py-[.5rem] flex justify-between my-1 bg-bg2">
                <span>invite link:</span>
                <span>asfsadf</span><span>copy img</span>
              </div>
            </div>
          </div>
          <div v-if="deposit" class="flex my-1 gap-1 flex-col">
            <div class="flex items-center gap-2">
              <div><Select :pass="days" /></div>
              <div>
                <AntButton
                  textCol="#1a45b1"
                  bg="#fff0bb"
                  title="Bonus Information"
                  h=".8rem"
                  w="2rem"
                  b=".1rem"
                  ft=".3rem"
                  @click="showShare('bonus')"
                />
              </div>
            </div>
            <div class="text-center border-2">no data at this time</div>
          </div>
          <div v-if="bonus" class="flex my-1 gap-1 flex-col">
            <div class="flex items-center gap-2">
              <div><Select :pass="days" /></div>
              <div>
                <AntButton
                  textCol="#1a45b1"
                  bg="#fff0bb"
                  title="Bonus Information"
                  h=".8rem"
                  w="2rem"
                  b=".1rem"
                  ft=".3rem"
                  @click="showShare('bonus')"
                />
              </div>
            </div>
            <div class="text-center border-2">no data at this timesss</div>
          </div>
        </div>
        <div v-if="team">
          <div>
            <div
              class="flex gap-2 border-b-[.05rem] border-t-[.05rem] border-bord py-1"
            >
              <AntButton
                title="Team Information"
                :bord="teams ? '1px solid #3a61c2' : '1px solid #fff0bb'"
                :textCol="teams ? '#1a45b1' : '#fff0bb'"
                :bg="teams ? '#fff0bb' : ''"
                h=".8rem"
                w="2rem"
                b=".1rem"
                ft=".3rem"
                @click="showTeams('teams')"
              />
              <AntButton
                title="Game Information"
                :bord="game ? '1px solid #3a61c2' : '1px solid #fff0bb'"
                :textCol="game ? '#1a45b1' : '#fff0bb'"
                :bg="game ? '#fff0bb' : ''"
                h=".8rem"
                w="2rem"
                b=".1rem"
                ft=".3rem"
                @click="showTeams('game')"
              />
            </div>

            <div>
              <div>
                <div class="flex gap-1 my-1">
                  <div><Select :pass="days" /></div>
                  <div>
                    <AntButton
                      textCol="#1a45b1"
                      bg="#fff0bb"
                      title="Bonus Information"
                      h=".8rem"
                      w="2rem"
                      b=".1rem"
                      ft=".3rem"
                      @click="showShare('bonus')"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div v-if="teams" class="flex justify-between flex-col">
                  <div class="grid grid-cols-3 gap-1">
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Balance
                      <span class="text-[.5rem] text-bg">0</span>
                    </div>
                  </div>
                  <div>
                    <div
                      class="h-[2rem] bg-bg2 p-1 text-bg flex flex-col gap-2 my-2"
                    >
                      <div>Total number of teams</div>
                      <div class="flex gap-[2rem]">
                        <span>Agent: 0</span><span>User: 0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="game">2</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="user">
        <ReusableInput plhldr="User" w="2rem"  />
        <ReusableInput plhldr="All levels" w="2rem"  />
        <ReusableInput plhldr="Amount of deposits reached" w="2rem"  />
        <ReusableInput plhldr="Balance" w="2rem"  />
        <ReusableInput plhldr="to" w="2rem"  />


        
        user
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const share = ref(true);
const team = ref(false);
const user = ref(false);
const invitation = ref(true);
const deposit = ref(false);
const bonus = ref(false);
const teams = ref(true);
const game = ref(false);

const days = ref([
  { name: "Today" },
  { name: "yesterday" },
  { name: "This Week" },
  { name: "Last Week" },
  { name: "This month" },
  { name: "Last month" },
]);

const showData = (data) => {
  share.value = false;
  team.value = false;
  user.value = false;
  data === "share" ? (share.value = true) : "";
  data === "team" ? (team.value = true) : "";
  data === "user" ? (user.value = true) : "";
};
const showShare = (data) => {
  invitation.value = false;
  deposit.value = false;
  bonus.value = false;
  data === "invitation" ? (invitation.value = true) : "";
  data === "deposit" ? (deposit.value = true) : "";
  data === "bonus" ? (bonus.value = true) : "";
};

const showTeams = (team) => {
  teams.value = false;
  game.value = false;
  team === "teams" ? (teams.value = true) : "";
  team === "game" ? (game.value = true) : "";
};
</script>

<style lang="scss" scoped></style>

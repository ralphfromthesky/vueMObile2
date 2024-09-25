<template>
  <div>
    <div>
      <div><HeaderView title="Agent Management" /></div>
      <div class="h-[13.5rem] overflow-auto p-1 text-[white] bg-txt">
        <div class="flex justify-center gap-[1rem] mb-1">
          <span
            :class="[share ? 'border-b-4 border-b-bg transition-all	' : '']"
            @click="showData('share')"
            >My Share</span
          >
          <span
            :class="[team ? 'border-b-4 border-b-bg transition-all	' : '']"
            @click="showData('team')"
            >Team Overview</span
          >
          <span
            :class="[user ? 'border-b-4 border-b-bg transition-all	' : '']"
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
                class="h-[3rem] w-[3rem] bg-bg2 rounded-[.1rem] p-1 flex flex-col gap-2"
              >
                Toda's invitation
                <span class="text-[.5rem] text-bg">{{
                  inviteData.data?.content?.todayInvitePerson
                }}</span>
              </div>
              <div
                class="h-[3rem] w-[3rem] bg-bg2 rounded-[.1rem] p-1 flex flex-col gap-2"
              >
                today's rebate
                <span class="text-[.5rem] text-bg">{{
                  inviteData.data?.content?.todayInviteRebate
                }}</span>
              </div>
              <div
                class="h-[3rem] w-[3rem] bg-bg2 rounded-[.1rem] p-1 flex flex-col gap-2"
              >
                today's first deposit
                <span class="text-[.5rem] text-bg">{{
                  inviteData.data?.content?.todayDepositNum
                }}</span>
              </div>
              <div
                class="h-[3rem] w-[3rem] bg-bg2 rounded-[.1rem] p-1 flex flex-col gap-2"
              >
                total number of charges
                <span class="text-[.5rem] text-bg">{{
                  inviteData.data?.content?.todayDepositBackBonus
                }}</span>
              </div>
            </div>
            <div>
              <div class="p-1 py-[.5rem] flex justify-between my-1 bg-bg2">
                <span>invite link: </span>
                <span>{{
                  inviteData.data?.content?.prompInfo?.linkUrlEn ||
                  "not available"
                }}</span
                ><span
                  @click="
                    copyToClipboard(
                      inviteData.data?.content?.prompInfo?.linkUrlEn
                    )
                  "
                  ><img src="/copyIcons/1c64f5.png" alt=""
                /></span>
              </div>
              <div class="p-1 py-[.5rem] flex justify-between my-1 bg-bg2">
                <span>invitation promotion code：</span>
                <span>{{ store.state.userInfo.promCode }}</span
                ><span @click="copyToClipboard(store.state.userInfo.promCode)"
                  ><img src="/copyIcons/1c64f5.png" alt=""
                /></span>
              </div>
            </div>
          </div>
          <div v-if="deposit" class="flex my-1 gap-1 flex-col">
            <div class="flex items-center gap-2">
              <div><Select :pass="days" @selectedItem="dateSelected" widthSize="3rem" /></div>
              <!-- <div>
                <AntButton
                  textCol="#1a45b1"
                  bg="#fff0bb"
                  title="Search"
                  h=".8rem"
                  w="2rem"
                  b=".1rem"
                  ft=".3rem"
                  @click="searhDate()"
                />
              </div> -->
            </div>
            <div class="text-center border-2">no data at this timesss</div>
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
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.teamMoney
                      }}</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team withdrawal
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.betNum
                      }}</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team Deposit
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.firstDepositProxyNum
                      }}</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Team number of first deposit
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.totalFirstDepositNum
                      }}</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Agent rebate
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.registerCount
                      }}</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      The number of new user
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.registerCount
                      }}</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Not login for 3 days
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.threeNotLoginNum
                      }}</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Online now
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.onlineNum
                      }}</span>
                    </div>
                    <div
                      class="h-[3rem] w-[2.2rem] flex flex-col p-1 gap-2 border-bg bg-bg2 rounded-[.2rem] text-[.3rem]"
                    >
                      Total number of betting
                      <span class="text-[.5rem] text-bg">{{
                        agentData?.data?.content?.registerCount
                      }}</span>
                    </div>
                  </div>
                  <div>
                    <div
                      class="h-[2rem] bg-bg2 p-1 text-bg flex flex-col gap-2 my-2"
                    >
                      <div>Total number of teams</div>
                      <div class="flex gap-[2rem]">
                        <span
                          >Agent:
                          {{ agentData?.data?.content?.proxyCount }}</span
                        ><span
                          >User:
                          {{ agentData?.data?.content?.memberCount }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="game">
                  <div class="flex flex-col gap-1 h-[10rem] overflow-auto">
                    <div
                      class="border-[.01rem] p-[.05rem] pb-1 rounded-[.1rem] bg-bg"
                    >
                      <div
                        class="text-center text-[.5rem] font-bold my-[.2rem] text-bg2"
                      >
                        Sports
                      </div>
                      <div class="grid grid-cols-2 gap-[.1rem]">
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of bet:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.sportBetNum
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of rebate:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.sportRebateAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of win:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.sportWinAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Betting amount:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.sportBetAmount
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-[.01rem] p-[.05rem] pb-1 rounded-[.1rem] bg-bg"
                    >
                      <div
                        class="text-center text-[.5rem] font-bold my-[.2rem] text-bg2"
                      >
                        Slots
                      </div>
                      <div class="grid grid-cols-2 gap-[.1rem]">
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of bet:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.lotBetNum
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of rebate:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.lotRebateAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of win:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.lotWinAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Betting amount:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.lotBetAmount
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-[.01rem] p-[.05rem] pb-1 rounded-[.1rem] bg-bg"
                    >
                      <div
                        class="text-center text-[.5rem] font-bold my-[.2rem] text-bg2"
                      >
                        Live Casino
                      </div>
                      <div class="grid grid-cols-2 gap-[.1rem]">
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of bet:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.sportBetNum
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of rebate:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.sportBetNum
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of win:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.sportBetNum
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Betting amount:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.sportBetNum
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-[.01rem] p-[.05rem] pb-1 rounded-[.1rem] bg-bg"
                    >
                      <div
                        class="text-center text-[.5rem] font-bold my-[.2rem] text-bg2"
                      >
                        Chess
                      </div>
                      <div class="grid grid-cols-2 gap-[.1rem]">
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of bet:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.liveBetAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of rebate:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.liveRebateAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of win:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.liveWinAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Betting amount:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.liveBetNum
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-[.01rem] p-[.05rem] pb-1 rounded-[.1rem] bg-bg"
                    >
                      <div
                        class="text-center text-[.5rem] font-bold my-[.2rem] text-bg2"
                      >
                        E-sports
                      </div>
                      <div class="grid grid-cols-2 gap-[.1rem]">
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of bet:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.esportBetNum
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of rebate:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.esportRebateAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of win:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.esportWinAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Betting amount:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.esportBetAmount
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-[.01rem] p-[.05rem] pb-1 rounded-[.1rem] bg-bg"
                    >
                      <div
                        class="text-center text-[.5rem] font-bold my-[.2rem] text-bg2"
                      >
                        Fishing
                      </div>
                      <div class="grid grid-cols-2 gap-[.1rem]">
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of bet:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.fishingBetNum
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of rebate:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.fishingRebateAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of win:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.fishingWinAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Betting amount:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.fishingBetAmount
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="border-[.01rem] p-[.05rem] pb-1 rounded-[.1rem] bg-bg"
                    >
                      <div
                        class="text-center text-[.5rem] font-bold my-[.2rem] text-bg2"
                      >
                        Lottery games
                      </div>
                      <div class="grid grid-cols-2 gap-[.1rem]">
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of bet:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.lotBetNum
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of rebate:
                          <span>{{
                            agentData?.data?.content?.dailyMoney
                              ?.lotRebateAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Amount of win:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.lotWinAmount
                          }}</span>
                        </div>
                        <div
                          class="h-[1rem] bg-bg2 text-[.3rem] gap-1 flex items-center p-1 rounded-[.1rem]"
                        >
                          Betting amount:
                          <span>{{
                            agentData?.data?.content?.dailyMoney?.lotBetAmount
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="user">
          <div class="flex flex-wrap gap-1 items-center">
            <ReusableInput plhldr="User" w="2rem" />
            <ReusableInput plhldr="All levels" w="2rem" dis="true" />
            <ReusableInput plhldr="Amount of deposits reached" w="2rem" />
            <ReusableInput plhldr="Balance" w="2rem" /> - to -
            <ReusableInput plhldr="to" w="2rem" />
          </div>
          <div class="flex my-1 gap-2">
            <span class="flex items-center gap-1">
              <input type="checkbox" />
              <label for="checkbox">Include subordinates</label>
            </span>
            <AntButton
              textCol="#1a45b1"
              bg="#fff0bb"
              title="Search"
              h=".8rem"
              w="2rem"
              b=".1rem"
              ft=".3rem"
              @click="showShare('bonus')"
            />
          </div>
          <div class="border-2 h-[20rem] border-bg">no data</div>
        </div>
      </div>
      <SpinLoader v-if="isFetching" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { axiosGet } from "@/components/axios/AxiosHook";
import { messageApi } from "@/components/antUi/antMessage";
import { useStore } from "@/store/store";
import { getTodayStartEnd } from "@/global/newDateRange.js";
const {
  todayStartTime,
  todayEndTime,
  yesterdayStartTime,
  yesterdayEndTime,
  weekStartTime,
  weekEndTime,
  monthStartTime,
  monthEndTime,
  lastMonthStartTime,
  lastMonthEndTime,
} = getTodayStartEnd();

const store = useStore();
const share = ref(true);
const team = ref(false);
const user = ref(false);
const invitation = ref(true);
const deposit = ref(false);
const bonus = ref(false);
const teams = ref(true);
const game = ref(false);
const inviteData = ref([]);
const agentData = ref([]);
 const startTime = ref();
 const endTime = ref();
const days = ref([
  { name: "Today" },
  { name: "yesterday" },
  { name: "This Week" },
  { name: "Last Week" },
  { name: "This month" },
  { name: "Last month" },
]);

const dateSelected = (date) => {

  if (date === "Today") {
startTime.value =  todayStartTime;
endTime.value = todayEndTime;
  }
  if (date === "yesterday") {
startTime.value =  yesterdayStartTime;
endTime.value = yesterdayEndTime;
  }
  if (date === "This Week") {
startTime.value =  weekStartTime;
endTime.value = weekEndTime;
  }
  if (date === "This month") {
startTime.value =  monthStartTime;
endTime.value = monthEndTime;
  }
  if (date === "Last month") {
startTime.value =  lastMonthStartTime;
endTime.value = lastMonthEndTime;
  }
   invite();
};

// const searhDate = () => {

// }



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

const copyToClipboard = (textToCopy) => {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      messageApi.info(`Copied: ${textToCopy}`);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

const {} = useQuery({
  queryFn: () => axiosGet("/api/native/v2/inviteOverview2.do?ver=3&lan=en"),
  queryKey: ["invite"],
  enabled: true,
  select: (data) => (inviteData.value = data),
  onError: (err) => alert(err),
});

const { refetch: invite, isFetching } = useQuery({
  queryFn: () =>
    axiosGet(
      `https://mt0.yibo22.com/native/v2/inviteDeposits.do?startTime=${startTime.value}&endTime=${endTime.value}&id=&pageSize=100&pageNumber=1&lan=en`
    ),
  queryKey: ["invite"],
  select: (data) => (inviteData.value = data),
  onError: (err) => alert(err),
});

const {} = useQuery({
  queryFn: () => axiosGet("/api/native/v2/agentTeam.do"),
  queryKey: ["agent"],
  enabled: true,
  select: (data) => (agentData.value = data),
  onError: (err) => alert(err),
});
</script>

<style coped></style>

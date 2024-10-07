import { createRouter, createWebHistory, createWebHashHistory, useRoute, useRouter, } from "vue-router";

import { useStore } from "@/store/store.js";

const store = useStore();
const withdrawConfig = store?.state?.withdrawConfig?.content?.bankInfo;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history:  createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/vip",
      name: "vip",
      component: () => import("../views/Vip/VipPage.vue"),
    },
    {
      path: "/juros",
      name: "juros",
      component: () => import("@/views/Juros/JurosMainPage.vue"),
    },
    {
      path: "/task",
      name: "task",
      component: () => import("@/views/Task/task.vue"),
    },
    {
      path: "/pendente",
      name: "pendente",
      component: () => import("@/views/Pendente/Pendente.vue"),
    },
    {
      path: "/records",
      name: "records",
      component: () => import("@/views/Records/historico.vue"),
    },
    {
      path: "/datamanagement",
      name: "datamanagement",
      component: () => import("@/views/DataManagement/DataManagement.vue"),
    },
    {
      path: "/event",
      name: "event",
      component: () => import("@/views/Event/EventPage.vue"),
    },
    {
      path: "/withdrawpassword",
      name: "withdrawpassword",
      component: () =>
        import("@/views/Withdrawal/WithdrawPassword/WithdrawPasswordPage.vue"),
    },
    {
      path: "/deposit",
      name: "deposit",
      component: () => import("@/components/deposit/Deposit.vue"),
    },
    // {
    //   path: "/withdraw",
    //   name: "withdraw",
    //   component: () => import("@/views/Withdrawal/WithdrawalPage.vue"),
    // },
    {
      path: "/withdraw",
      name: "withdraw",
      component: () => import("@/views/Withdrawal/NewWithdrawalPage.vue"),
    },
    {
      path: "/withdrawrecord",
      name: "withdrawrecord",
      component: () => import("@/views/Withdrawal/WithdrawalRecord.vue"),
    },
    {
      path: "/recoverbalance",
      name: "recoverbalance",
      component: () => import("@/views/RecoverBalance/RecoverBalance.vue"),
    },
    // {
    //   path: "/accountdetails",
    //   name: "accountdetails",
    //   component: () => import("@/views/AccountDetails/AcccountDetails.vue"),
    // },
    {
      path: "/accountdetails",
      name: "accountdetails",
      component: () => import("@/views/AccountDetails/NewAccuntDetails.vue"),
    },
    {
      path: "/bettingrecords",
      name: "bettingrecords",
      component: () => import("@/views/AccountDetails/BettingRecords.vue"),
    },
    {
      path: "/accountdetailsrecord",
      name: "accountdetailsrecord",
      component: () =>
        import("@/views/AccountDetails/AccountDetailsRecord.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("@/views/MenuPage/Menu.vue"),
    },

    {
      path: "/interestrules",
      name: "interestrules",
      component: () => import("@/views/Juros/components/InterestRules.vue"),
    },
    // {
    //   path: "/invite",
    //   name: "invite",
    //   component: () => import("@/views/Invite/PromoTutorial.vue"),
    // },
    {
      path: "/invite",
      name: "invite",
      component: () => import('@/components/layout/NewInvitePage.vue')
    },
    {
      path: "/agent",
      name: "agent",
      component: () => import('@/views/AgentManagement/AgentManagement.vue')
    },
    {
      path: "/lottery",
      name: "lottery",
      component: () => import('@/views/Lottery/Lottery.vue')
    },

    {
      path: "/invitation",
      name: "invitation",
      component: () => import("@/views/Invite/InvitationPage.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile/Profile.vue"),
    },
    {
      path: "/support",
      name: "support",
      component: () => import("@/views/MessageCenter/Support.vue"),
    },
    {
      path: "/newsupport",
      name: "newsupport",
      component: () => import("@/views/MessageCenter/NewSupport.vue"),
    },
    {
      path: "/notice",
      name: "notice",
      component: () => import("@/views/MessageCenter/Notice.vue"),
    },
    {
      path: "/notification",
      name: "notification",
      component: () => import("@/views/MessageCenter/Notification.vue"),
    },
    {
      path: "/announcement",
      name: "announcement",
      component: () => import("@/views/MessageCenter/Announcement.vue"),
    },
    {
      path: "/suggestion",
      name: "suggestion",
      component: () => import("@/views/MessageCenter/Suggestion.vue"),
    },
    {
      path: "/securitycenter",
      name: "securitycenter",
      component: () => import("@/views/SecurityCenter/SecurityCenter.vue"),
    },
    {
      path: "/securityemail",
      name: "securityemail",
      component: () => import("@/views/SecurityCenter/pages/Email.vue"),
    },
    {
      path: "/googleauthenticator",
      name: "googleauthenticator",
      component: () =>
        import("@/views/SecurityCenter/pages/GoogleAuthenticator.vue"),
    },
    {
      path: "/loginpassword",
      name: "loginpassword",
      component: () => import("@/views/SecurityCenter/pages/LoginPassword.vue"),
    },
    {
      path: "/securityquestion",
      name: "securityquestion",
      component: () =>
        import("@/views/SecurityCenter/pages/SecurityQuestion.vue"),
    },
    {
      path: "/commissionrate",
      name: "commissionrate",
      component: () => import("@/views/Invite/CommissionRate.vue"),
    },
    {
      path: "/subrequest",
      name: "subrequest",
      component: () => import("@/views/Invite/SubordinatesRequests.vue"),
    },
    {
      path: "/subbet",
      name: "subbet",
      component: () => import("@/views/Invite/BetSubordinate.vue"),
    },
    {
      path: "/subfinances",
      name: "subfinances",
      component: () => import("@/views/Invite/FinancesSubordinate.vue"),
    },
    {
      path: "/alldata",
      name: "alldata",
      component: () => import("@/views/Invite/AllData.vue"),
    },
    {
      path: "/subdata",
      name: "subdata",
      component: () => import("@/views/Invite/DataSubordinate.vue"),
    },
    {
      path: "/directData",
      name: "directData",
      component: () => import("@/views/Invite/DirectDataPage.vue"),
    },
    {
      path: "/directBet",
      name: "directBet",
      component: () => import("@/views/Invite/DirectBettingPage.vue"),
    },
    {
      path: "/directFinance",
      name: "directFinance",
      component: () => import("@/views/Invite/DirectFinancing.vue"),
    },
    {
      path: "/auditrecords",
      name: "auditrecords",
      component: () => import("@/views/Withdrawal/WithdrawalAudit.vue"),
    },
    {
      path: "/manageaccount",
      name: "manageaccount",
      component: () => import("@/views/Withdrawal/WithdrawalAccount.vue"),
    },
    {
      path: "/performance",
      name: "performance",
      component: () => import("@/views/Invite/Performance.vue"),
    },
    {
      path: "/commission",
      name: "commission",
      component: () => import("@/views/Invite/Commission.vue"),
    },
    {
      path: "/promoTutorial",
      name: "promoTutorial",
      component: () => import("@/views/Invite/PromoTutorial.vue"),
    },
    {
      path: "/directReport",
      name: "directReport",
      component: () => import("@/views/Invite/DirectReporting.vue"),
    },
    {
      path: "/deviceinfo",
      name: "deviceinfo",
      component: () => import("@/views/LoginDevice/LoginDevice.vue"),
    },
    {
      path: "/Slots",
      name: "Slots",
      component: () => import("@/views/Slots/Slots.vue"),
    },
    {
      path: "/viplogin",
      name: "viplogin",
      component: () => import("@/components/VipLoginBonus/VipLoginBonus.vue"),
    },
    {
      path: "/turntablegame",
      name: "turntablegame",
      component: () => import("@/views/TurnTableGame/TurnTableGame.vue"),
    },
    {
      path: "/passwordRetrieval",
      name: "passwordRetrieval",
      component: () =>
        import("@/views/PasswordRetrieval/PasswordRetrieval.vue"),
    },
    {
      path: "/ending",
      name: "endingGame",
      component: () => import("@/views/Ending/EndingGame.vue"),
    },
    {
      path: "/search",
      name: "searchPage",
      component: () => import("@/views/SearchPage/SearchPage.vue"),
    },
    {
      path: "/eventDetail",
      name: "eventDetail",
      component: () => import("@/views/Event/EventDetail.vue"),
    },
    {
      path: "/redemption",
      name: "redemptioms",
      component: () => import ('@/views/Redemption/redemption.vue')
    },
    {
      path: "/testPage",
      name: "testPage",
      component: () => import("@/components/test/testPage4.vue"),
    },
    {
      path: "/mainNav",
      name: "nav",
      component: () => import("@/components/layout/Navigation/NavLayout.vue"),
   
    }



  ],
});

const protectedRoute = [
  // "/slots",
  "/vip",
  "/pendente",
  "/juros",
  "/records",
  "/menu",
  "/recoverbalance",
  "/accountdetails",
  "/bettingrecords",
  "/accountdetails",
  "/accountdetailsrecord",
  "/accountdetailsrecord",
  "/manageaccount",
  "/withdrawrecord",
  "/withdraw",
  "/profile",
  "/securitycenter",
  "securityemail",
  "/googleauthenticator",
  "/loginpassword",
  "/withdrawpassword",
  "/deviceinfo",
  "/passwordRetrieval",
  "/viplogin",
  "/turntablegame",
  "/securityquestion",
  "/auditrecords",
];

router.beforeEach((to, from, next) => {
  if (!store.state.userInfo.isLogin && protectedRoute.includes(to.path)) {
    next("/");
  }
  if (window.location.pathname === "/slots") {
    window.location.href = "/";
  } else {
    next();
  }
});

export default router;

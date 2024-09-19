import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
// import PromotionPage from "@/views/Promotion/PromotionPage.vue";
// import VipPage from "../views/Vip/VipPage.vue";
// import JurosPage from "@/views/Juros/JurosMainPage.vue";
// import TaskPage from "@/views/Task/task.vue";
// import historicoPage from "@/views/Records/historico.vue";
// import EventPage from "@/views/Event/EventPage.vue";
// import WithdrawalPasswordPage from "@/views/Withdrawal/WithdrawPassword/WithdrawPasswordPage.vue";
// import WithdrawalPage from "@/views/Withdrawal/WithdrawalPage.vue";
// import WithdrawalRecord from "@/views/Withdrawal/WithdrawalRecord.vue";
// import WithdrawalAudit from "@/views/Withdrawal/WithdrawalAudit.vue";
// import WithdrawalAccount from "@/views/Withdrawal/WithdrawalAccount.vue";
// import Deposit from "@/components/deposit/Deposit.vue";
// import RecoverBalance from "@/views/RecoverBalance/RecoverBalance.vue";
// import AcccountDetails from "@/views/AccountDetails/AcccountDetails.vue";
// import BettingRecords from "@/views/AccountDetails/BettingRecords.vue";
// import AccountDetailsRecord from "@/views/AccountDetails/AccountDetailsRecord.vue";
// import InterestRules from "@/views/Juros/components/InterestRules.vue";
// import Menu from "@/views/MenuPage/Menu.vue";
// import Pendente from "@/views/Pendente/Pendente.vue";
// import Invite from "@/views/Invite/PromoTutorial.vue";
// import Invitation from "@/views/Invite/InvitationPage.vue";
// import Profile from "@/views/Profile/Profile.vue";
// import SecurityCenter from "@/views/SecurityCenter/SecurityCenter.vue";
// import Support from "@/views/MessageCenter/Support.vue";
// import Suggestion from "@/views/MessageCenter/Suggestion.vue";
// import Email from "@/views/SecurityCenter/pages/Email.vue";
// import GoogleAuthenticator from "@/views/SecurityCenter/pages/GoogleAuthenticator.vue";
// import LoginPassword from "@/views/SecurityCenter/pages/LoginPassword.vue";
// import SecurityQuestion from "@/views/SecurityCenter/pages/SecurityQuestion.vue";
// import Notice from "@/views/MessageCenter/Notice.vue";
// import Notification from "@/views/MessageCenter/Notification.vue";
// import Announcement from "@/views/MessageCenter/Announcement.vue";
// import CommissionRate from "@/views/Invite/CommissionRate.vue";
// import SubordinatesRequests from "@/views/Invite/SubordinatesRequests.vue";
// import DataSubordinate from "@/views/Invite/DataSubordinate.vue";
// import BetSubordinate from "@/views/Invite/BetSubordinate.vue";
// import FinancesSubordinate from "@/views/Invite/FinancesSubordinate.vue";
// import AllData from "@/views/Invite/AllData.vue";
// import DirectBettingPage from "@/views/Invite/DirectBettingPage.vue";
// import DirectDataPage from "@/views/Invite/DirectDataPage.vue";
// import DirectFinancing from "@/views/Invite/DirectFinancing.vue";
// import PromoTutorial from "@/views/Invite/PromoTutorial.vue";
// import Performance from "@/views/Invite/Performance.vue";
// import Commission from "@/views/Invite/Commission.vue";
// import DirectReporting from "@/views/Invite/DirectReporting.vue";
// import LoginDevice from "@/views/LoginDevice/LoginDevice.vue";
// import Slots from "@/views/Slots/Slots.vue";
// import VipLoginBonus from "@/components/VipLoginBonus/VipLoginBonus.vue";
// import TurnTableGame from "@/views/TurnTableGame/TurnTableGame.vue";
// import PasswordRetrieval from "@/views/PasswordRetrieval/PasswordRetrieval.vue";
// import SearchPage from "@/views/SearchPage/SearchPage.vue";

import { useStore } from "@/store/store.js";

const store = useStore();
const withdrawConfig = store?.state?.withdrawConfig?.content?.bankInfo;

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//     {
//       path: "/vip",
//       name: "vip",
//       component: VipPage,
//     },
//     {
//       path: "/juros",
//       name: "juros",
//       component: JurosPage,
//     },
//     {
//       path: "/task",
//       name: "task",
//       component: TaskPage,
//     },
//     { path: "/pendente", name: "pendente", component: Pendente },
//     {
//       path: "/records",
//       name: "records",
//       component: historicoPage,
//     },
//     {
//       path: "/event",
//       name: "event",
//       component: EventPage,
//     },
//     {
//       path: "/withdrawpassword",
//       name: "withdrawpassword",
//       component: WithdrawalPasswordPage,
//     },
//     {
//       path: "/deposit",
//       name: "deposit",
//       component: Deposit,
//     },
//     {
//       path: "/withdraw",
//       name: "withdraw",
//       component: WithdrawalPage,
//     },
//     {
//       path: "/withdrawrecord",
//       name: "withdrawrecord",
//       component: WithdrawalRecord,
//     },
//     {
//       path: "/recoverbalance",
//       name: "/recoverbalance",
//       component: RecoverBalance,
//     },
//     {
//       path: "/recoverbalance",
//       name: "recoverbalance",
//       component: RecoverBalance,
//     },
//     {
//       path: "/accountdetails",
//       name: "accountdetails",
//       component: AcccountDetails,
//     },
//     {
//       path: "/bettingrecords",
//       name: "bettingrecords",
//       component: BettingRecords,
//     },
//     {
//       path: "/accountdetailsrecord",
//       name: "accountdetailsrecord",
//       component: AccountDetailsRecord,
//     },
//     {
//       path: "/menu",
//       name: "menu",
//       component: Menu,
//     },
//     {
//       path: "/interestrules",
//       name: "interestrules",
//       component: InterestRules,
//     },
//     {
//       path: "/invite",
//       name: "invite",
//       component: Invite,
//     },
//     {
//       path: "/invitation",
//       name: "invitation",
//       component: Invitation,
//     },
//     {
//       path: "/profile",
//       name: "profile",
//       component: Profile,
//     },
//     {
//       path: "/support",
//       name: "support",
//       component: Support,
//     },
//     {
//       path: "/notice",
//       name: "notice",
//       component: Notice,
//     },
//     {
//       path: "/notification",
//       name: "notification",
//       component: Notification,
//     },
//     {
//       path: "/announcement",
//       name: "announcement",
//       component: Announcement,
//     },
//     {
//       path: "/suggestion",
//       name: "suggestion",
//       component: Suggestion,
//     },
//     {
//       path: "/securitycenter",
//       name: "securitycenter",
//       component: SecurityCenter,
//     },
//     {
//       path: "/securityemail",
//       name: "securityemail",
//       component: Email,
//     },
//     {
//       path: "/googleauthenticator",
//       name: "googleauthenticator",
//       component: GoogleAuthenticator,
//     },
//     {
//       path: "/loginpassword",
//       name: "loginpassword",
//       component: LoginPassword,
//     },
//     {
//       path: "/securityquestion",
//       name: "securityquestion",
//       component: SecurityQuestion,
//     },
//     {
//       path: "/commissionrate",
//       name: "commissionrate",
//       component: CommissionRate,
//     },
//     {
//       path: "/subrequest",
//       name: "subrequest",
//       component: SubordinatesRequests,
//     },
//     {
//       path: "/subbet",
//       name: "subbet",
//       component: BetSubordinate,
//     },
//     {
//       path: "/subfinances",
//       name: "subfinances",
//       component: FinancesSubordinate,
//     },
//     {
//       path: "/alldata",
//       name: "alldata",
//       component: AllData,
//     },
//     {
//       path: "/subdata",
//       name: "subdata",
//       component: DataSubordinate,
//     },
//     {
//       path: "/directData",
//       name: "directData",
//       component: DirectDataPage,
//     },
//     {
//       path: "/directBet",
//       name: "directBet",
//       component: DirectBettingPage,
//     },
//     {
//       path: "/directFinance",
//       name: "directFinance",
//       component: DirectFinancing,
//     },
//     {
//       path: "/auditrecords",
//       name: "auditrecords",
//       component: WithdrawalAudit,
//     },
//     {
//       path: "/manageaccount",
//       name: "manageaccount",
//       component: WithdrawalAccount,
//     },
//     {
//       path: "/performance",
//       name: "performance",
//       component: Performance,
//     },
//     {
//       path: "/commission",
//       name: "commission",
//       component: Commission,
//     },
//     {
//       path: "/promoTutorial",
//       name: "promoTutorial",
//       component: PromoTutorial,
//     },
//     {
//       path: "/directReport",
//       name: "directReport",
//       component: DirectReporting,
//     },
//     {
//       path: "/deviceinfo",
//       name: "deviceinfo",
//       component: LoginDevice,
//     },
//     {
//       path: "/Slots",
//       name: "Slots",
//       component: Slots,
//     },

//     {
//       path: "/viplogin",
//       name: "viplogin",
//       component: VipLoginBonus,
//     },
//     {
//       path: "/turntablegame",
//       name: "turntablegame",
//       component: TurnTableGame,
//     },
//     {
//       path: "/passwordRetrieval",
//       name: "passwordRetrieval",
//       component: PasswordRetrieval,
//     },
//     {
//       path: "/search",
//       name: "searchPage",
//       component: SearchPage,
//     },
//   ],
// });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    {
      path: "/accountdetails",
      name: "accountdetails",
      component: () => import("@/views/AccountDetails/AcccountDetails.vue"),
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
    {
      path: "/invite",
      name: "invite",
      component: () => import("@/views/Invite/PromoTutorial.vue"),
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
      component: () => import("@/components/test/testPage.vue"),
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

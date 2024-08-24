import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    user: "",
    balance: 0.0,
    isLogin: null,
    hideElements: true,
    isAuthenticated: false,
    isRegister: false,
    userInfo: "",
    userProfile: "",
    withdrawBankAccounts: [],
    userConfig: [],
    userMessage: [],
    useNotice: [],
    degreeInfo: [],
    withdrawConfig: [],
    registerConfig: [],
    userRecords: [],
    userPlayTurn: [],
    userTurnRecord: [],
    userConfigValues: false,
    userTurnLateActivity: [],
    userGetAppLogin: [],
    userFakeData: [],
    useGetGames: [],
    userSignInRule: [],
    userMissiontask: [],
    scrollTo: "",
    forwardGame: "",
    showLoginModal: false,
    gameTypes: "",
    modalErr: false,
    openDeposit: false,
    antMOdal: true,
  },
  mutations: {
    setLogin(state, user) {
      state.user = user;
      state.isLogin = true;
      state.hideElements = false;
    },
    setRegitster(state, user) {
      state.user = user;
      state.isLogin = true;
      state.hideElements = false;
    },
    logOutUser(state) {
      state.user = "";
      state.isLogin = null;
      state.hideElements = true;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setUserProfile(state, payload) {
      state.userProfile = payload;
    },
    setWithdrawBank(state, payload) {
      state.withdrawBankAccounts = payload;
    },
    setUserConfig(state, payload) {
      state.userConfig = payload;
    },
    setMessageList(state, payload) {
      state.userMessage = payload;
    },
    setNotice(state, payload) {
      state.useNotice = payload;
    },
    setDegreeInfo(state, payload) {
      state.degreeInfo = payload;
    },
    setWithdrawConfig(state, payload) {
      state.withdrawConfig = payload;
    },
    setRegisterConfig(state, payload) {
      state.registerConfig = payload;
    },
    setUserRecords(state, payload) {
      state.userRecords = payload;
    },
    setUserPlayturn(state, payload) {
      state.userPlayTurn = payload;
    },
    setUserTurnRecord(state, payload) {
      state.userTurnRecord = payload;
    },
    setUserConfigValues(state, payload) {
      state.userConfigValues = payload;
    },
    setUserTurnLateActivity(state, payload) {
      state.userTurnLateActivity = payload;
    },
    setUserGetAppLogin(state, payload) {
      state.userGetAppLogin = payload;
    },
    setUserFakeData(state, payload) {
      state.userFakeData = payload;
    },
    setGetGames(state, payload) {
      state.useGetGames = payload;
    },
    setSignInRule(state, payload) {
      state.userSignInRule = payload;
    },
    setMissiontask(state, payload) {
      state.userMissiontask = payload;
    },
    setScrollTo(state, id) {
      state.scrollTo = id;
    },
    setForwardname(state, payload) {
      state.forwardGame = payload;
    },
    setShowLoginModal(state, payload) {
      state.showLoginModal = payload;
    },
    setGameTypes(state, payload) {
      state.gameTypes = payload;
    },
    setModalErr(state, payload) {
      state.modalErr = payload;
    },
    setOpenDeposit(state, payload) {
      state.openDeposit = payload;
    },
    setAntMOdal(state, payload) {
      state.antMOdal = payload;
    },

    
  },
  actions: {
    updateUser(context, user) {
      context.commit("setLogin", user);
    },
    logOut(context) {
      context.commit("logOutUser");
    },
  },
  getters: {
    getUserData(state) {
      return {
        user: state.user,
        balance: state.balance,
      };
    },
  },
  plugins: [
    createPersistedState({
      key: "User",
      storage: window.localStorage,
      reducer: (state) => ({
        user: state.user,
        balance: state.balance,
        isLogin: state.isLogin,
        isAuthenticated: state.isAuthenticated,
        hideElements: state.hideElements,
      }),
    }),
    createPersistedState({
      key: "setUser",
      storage: window.localStorage,
      reducer: (state) => ({
        userInfo: state.userInfo,
        userProfile: state.userProfile,
        withdrawBankAccounts: state.withdrawBankAccounts,
        userConfig: state.userConfig,
        userMessage: state.userMessage,
        useNotice: state.useNotice,
        degreeInfo: state.degreeInfo,
        withdrawConfig: state.withdrawConfig,
        registerConfig: state.registerConfig,
        userRecords: state.userRecords,
        userPlayTurn: state.userPlayTurn,
        userTurnRecord: state.userTurnRecord,
        userConfigValues: state.userConfigValues,
        userTurnLateActivity: state.userTurnLateActivity,
        userGetAppLogin: state.userGetAppLogin,
        userFakeData: state.userFakeData,
        useGetGames: state.useGetGames,
        userSignInRule: state.userSignInRule,
        userMissiontask: state.userMissiontask,
      }),
    }),
  ],
});

export default store;
export const useStore = () => {
  return store;
};

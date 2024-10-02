import router from '@/router';
import { useStore } from '@/store/store';
const store = useStore()

export const navigateTo = (routeName, num) => {
  router.push(routeName);
  store.commit('setIndexPass', num)
  
};

import { defineAsyncComponent } from 'vue'
import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { Tab, Tabs } from 'vant';
import VantTabs from '@/components/vantUi/vantTabs.vue';
import HeaderView from "@/views/ReusableComponent/Head.vue";
import Select from "@/components/antUi/select.vue";
import SpinLoader from "@/components/antUi/spinLoader.vue";
import ReusableInput from '@/views/ReusableComponent/ReusableInput.vue'



// import AntModal from "@/components/antUi/antModal.vue";
const AntModal = defineAsyncComponent(() => import("@/components/antUi/antModal.vue"))
const AntButton = defineAsyncComponent(() => import('@/components/antUi/antButton.vue'))


import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import { Dialog } from 'vant';
import { DatePicker } from 'vant';
import { RollingText } from 'vant';
import { CountDown } from 'vant';



const app = createApp(App)
app.use(DatePicker)
app.use(CountDown)
app.use(RollingText)
app.use(Dialog)
app.use(Antd)




app.use(Tab);
app.use(Tabs);

app.component('antButton',AntButton)
app.component('VantTabs', VantTabs)
app.component('AntModal', AntModal)
app.component('HeaderView', HeaderView)
app.component('Select', Select)
app.component('ReusableInput', ReusableInput)
app.component('SpinLoader', SpinLoader)





app.use(router)
app.use(VueQueryPlugin)
app.use(store)




app.mount('#app')


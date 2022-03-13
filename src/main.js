import Vue from 'vue'
import App from './App.vue'
import router from './router'
//完整引入
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//vue-i18n
import Vuei18n from "vue-i18n"

//自訂語言包
import en from "@/language/en-US"
import zh from "@/language/zh-CN"
//國際化
Vue.use(Vuei18n);
Vue.locale = () =>{};
const messages = {
  en:Object.assign({message:"Hello"},en),
  zh:Object.assign({message:"你好"},zh)
};
const i18n = new Vuei18n({
  locale:"zh-CN",
  messages
});
Vue.use(ViewUI, {
  i18n:(key,value) => i18n.t(key,value)
});
//這句不確定
Vue.prototype._i18n = i18n;
//

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
